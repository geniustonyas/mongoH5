import { toRaw } from 'vue'
import * as _ from 'lodash-es'
import Clipboard from 'clipboard'
import { showToast } from 'vant'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import type { AdsItem } from '@/types/app'
import type { DataWithAd } from '@/types/global.d'

dayjs.extend(relativeTime)
dayjs.extend(duration)
dayjs.locale('zh-cn')

// 获取url中全部参数的对象
export function getUrlAllParams() {
  const res: any = {}
  const url = decodeURI(window.location.href)
  const url_data = _.split(url, '?').length > 1 ? _.split(url, '?')[1] : null
  if (!url_data) return null
  const params_arr = _.split(url_data, '&')
  _.forEach(params_arr, function (item) {
    const key = _.split(item, '=')[0]
    const value = _.split(item, '=')[1]
    res[key] = value
  })
  return res
}

// 资源加载函数
export function getAssetsFile(url: string) {
  return new URL(`../assets/imgs/${url}`, import.meta.url).href
}

// 分类分辨率
export const classifyResolution = (resolution: string): string => {
  // 1920*1080
  const cleanedResolution = resolution.replace(/\s+/g, '')
  const match = cleanedResolution.match(/(\d+)[xX*&](\d+)/)
  if (match) {
    const height = parseInt(match[2])
    if (height <= 480) {
      return ''
    } else if (height <= 720) {
      return '720P'
    } else {
      return '1080P'
    }
  }
  return ''
}

// 加载统计代码
export const loadStatistics = (url: string) => {
  // 确保 URL 中的 HTML 实体被正确解析
  url = url.replace(/&amp;/g, '&')
  const script = document.createElement('script')
  script.textContent = `
    var _czc = _czc || [];
    (function () {
      var um = document.createElement("script");
      um.src = "${url}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(um, s);
    })();
  `
  // 将 script 元素插入到文档中
  document.head.appendChild(script)
}

export const loadGoogleAnalytics = (code: string) => {
  // 创建 Google Analytics 脚本
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${code}`
  // 插入 Google Analytics 脚本到文档中
  document.head.appendChild(script)

  // 创建并插入配置脚本
  const configScript = document.createElement('script')
  configScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${code}');
  `
  document.head.appendChild(configScript)
}

// 将数组分块
export function chunkArray(arr: any[], chunkSize: number): any[][] {
  const chunks = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}

export const openAd = (url, category = '', action = '', label = '', value = 1, nodeid = '', ad = null) => {
  if (ad) {
    // 将响应式对象转换为普通对象
    const rawAd = toRaw(ad)
    console.log(rawAd)
    // 检查并处理 iOS 和 Android 下载链接
    const ua = navigator.userAgent
    if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
      if (rawAd.iosDownLoadUrl) {
        console.log(rawAd.iosDownLoadUrl)
        window.open(rawAd.iosDownLoadUrl, '_blank')
        return
      }
    } else {
      if (rawAd.andoridDownloadUrl) {
        window.open(rawAd.andoridDownloadUrl, '_blank')
        return
      }
    }
  }
  // 如果没有 ad 对象或没有下载链接，打开传入的 url
  if (url) {
    window.open(url, '_blank')
  }

  // 事件跟踪逻辑
  // @ts-ignore
  if (category != '' && action != '' && window._czc) {
    // @ts-ignore
    window._czc.push(['_trackEvent', category, action, label, value, nodeid])
  }
}

// 获取增量数字
export function getIncrementalNumberWithOffset(value: string, module: string, id: string | number, type: 'view' | 'like' | 'collect'): number {
  const storageKey = `incNum_${module}_${id}_${type}`
  const storedData = localStorage.getItem(storageKey)
  const currentTime = Date.now()
  const oneHour = 60 * 60 * 1000

  let lastGeneratedTime = 0
  let lastGeneratedNumber = 0

  if (storedData) {
    const [time, number] = storedData.split(':').map(Number)
    lastGeneratedTime = time
    lastGeneratedNumber = number
  }

  // 定义每种类型的范围和增量
  let baseRange: [number, number]
  let incrementRange: [number, number]

  switch (type) {
    case 'view':
      baseRange = [1000, 3000]
      incrementRange = [150, 400]
      break
    case 'like':
      baseRange = [0, 1500]
      incrementRange = [50, 120]
      break
    case 'collect':
      baseRange = [0, 500]
      incrementRange = [5, 50]
      break
    default:
      throw new Error('Invalid type')
  }

  // 检查是否自上次生成以来已过一小时
  if (currentTime - lastGeneratedTime > oneHour) {
    // 生成新的基础数字
    const baseNumber = Math.floor(Math.random() * (baseRange[1] - baseRange[0] + 1)) + baseRange[0]
    // 确保新数字比上次大
    const increment = Math.floor(Math.random() * (incrementRange[1] - incrementRange[0] + 1)) + incrementRange[0]
    const newNumber = Math.max(baseNumber, lastGeneratedNumber + increment)

    // 检查 localStorage 空间并清理最旧的 200 条记录
    manageLocalStorageCapacity()

    // 存储新的数字和当前时间
    localStorage.setItem(storageKey, `${currentTime}:${newNumber}`)

    return parseInt(value, 10) + newNumber
  } else {
    return parseInt(value, 10) + lastGeneratedNumber
  }
}

function manageLocalStorageCapacity() {
  const minEntriesToDelete = 500
  const keys = Object.keys(localStorage).filter((key) => key.startsWith('incNum_'))

  // 获取所有条目的时间戳
  const entries = keys.map((key) => {
    const [time] = (localStorage.getItem(key) || '').split(':').map(Number)
    return { key, time }
  })

  // 按时间排序
  entries.sort((a, b) => a.time - b.time)

  // 检查 localStorage 空间是否不足
  try {
    // 尝试存储一个大数据来检测空间不足
    localStorage.setItem('test', new Array(1024 * 1024).join('a'))
    localStorage.removeItem('test')
  } catch (e) {
    // 空间不足时，删除最旧的条目
    const entriesToDelete = Math.max(minEntriesToDelete, entries.length)
    for (let i = 0; i < entriesToDelete && i < entries.length; i++) {
      localStorage.removeItem(entries[i].key)
    }
  }
}
// 处理多个async await
export function awaitWraper(promise: any) {
  return promise.then((res: any) => [null, res]).catch((err: any) => [err, null])
}

// 生成年份列表
export function getYearList() {
  const currentYear = new Date().getFullYear()
  const yearList = []
  for (let years = currentYear; years >= 1900; years--) {
    yearList.push(years)
  }
  return yearList
}

// 初始化复制
export function copy(selector: string, tips = '', clipboard: any = null) {
  if (clipboard) {
    clipboard.destroy()
  }
  tips = tips == '' ? '复制成功' : tips
  const newClipboard = new Clipboard(selector)
  newClipboard.on('success', () => {
    showToast(tips)
    copy(selector, tips, newClipboard)
  })
  newClipboard.on('error', () => {
    copy(selector, tips, newClipboard)
    showToast('复制失败')
  })
}

// 动态加载外部第三方js
export function loadJs(url: string) {
  return new Promise((resolve, reject) => {
    let isLoaded = false
    const scripts = document.scripts
    for (let i = 0; i < scripts.length; i++) {
      const item = document.scripts[i]
      if (item['src'] && item['src'] == url) {
        isLoaded = true
      }
    }
    if (isLoaded) {
      resolve(true)
    } else {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
      document.body.appendChild(script)
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        reject(false)
      }
    }
  })
}

// 格式化两位小数
export function moneyFormat(value: any) {
  let ret = ''
  value = value.toString()
  const num = parseFloat(value)
  if (isNaN(num)) {
    ret = '--'
  } else {
    if (num.toString().indexOf('.') == -1) {
      ret = num + '.00'
    } else {
      const tmp = num.toString().split('.')
      if (tmp[1].length < 2) {
        ret = num + '0'
      } else {
        ret = num.toString()
      }
    }
  }
  return ret
}

export function fromNow(date: string) {
  return dayjs(date).fromNow()
}

export function formatDuration(seconds: number) {
  const dur = dayjs.duration(seconds, 'seconds')
  const hours = dur.hours()
  if (hours > 0) {
    return dur.format('H:mm:ss')
  } else {
    return dur.format('m:ss')
  }
}

// 将数字货币地址中间部分用4个*号代替
export function formatAddress(address: string) {
  return address.length > 25 ? address.replace(address.substring(25, address.length), '...') : address
}

// 获取cookie
export function getCookieValue(cookieName: string) {
  const name = cookieName + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')
  for (let i = 0; i < cookieArray.length; i++) {
    const currentCookie = cookieArray[i].trim()
    if (currentCookie.indexOf(name) == 0) {
      return currentCookie.substring(name.length, currentCookie.length)
    }
  }
  return ''
}

/**
 * 解码 HTML 实体
 * @param str - 包含 HTML 实体的字符串
 * @returns 解码后的字符串
 */
export function decodeHtmlEntities(str: string): string {
  const textarea = document.createElement('textarea')
  let decodedStr = str

  // 递归解码，直到字符串不再变化
  while (decodedStr.includes('&')) {
    textarea.innerHTML = decodedStr
    const newDecodedStr = textarea.value
    if (newDecodedStr == decodedStr) break
    decodedStr = newDecodedStr
  }
  return decodedStr
}

/**
 * 插入广告
 * @param dataList 数据列表
 * @param adList 广告列表
 * @param minInterval 最小间隔
 * @param maxInterval 最大间隔
 * @param ensureEven 是否确保广告数量为偶数
 * @returns 插入广告后的数据列表
 */
export function insertAds<T>(dataList: T[], adList: AdsItem[], minInterval = 5, maxInterval = 7, ensureEven = false): DataWithAd<T>[] {
  if (adList.length == 0) return dataList
  const result: DataWithAd<T>[] = []
  const adCount = adList.length
  const dataCount = dataList.length

  // 打乱广告顺序
  const shuffledAds = shuffleArray(adList)

  // 插入第一个广告的位置，确保在第二条到minInterval之间
  const firstAdPosition = Math.floor(Math.random() * (minInterval - 1)) + 1

  let nextAdPosition = firstAdPosition
  const usedAds = new Set<number>()

  for (let i = 0; i < dataCount; i++) {
    // 插入原始数据
    result.push(dataList[i])

    // 检查是否需要插入广告
    if (i + 1 === nextAdPosition) {
      let randomAdIndex: number

      // 确保不重复使用广告
      do {
        randomAdIndex = Math.floor(Math.random() * adCount)
      } while (usedAds.has(randomAdIndex) && usedAds.size < adCount)

      usedAds.add(randomAdIndex)

      if (usedAds.size === adCount) {
        usedAds.clear() // 清空已使用广告集合
      }

      result.push({ ...shuffledAds[randomAdIndex], isAd: true })
      // 计算下一个广告插入位置
      nextAdPosition += Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval
    }
  }

  // 如果需要确保广告数量为偶数且结果长度为奇数，添加一个随机广告
  if (ensureEven && result.length % 2 !== 0) {
    const randomAdIndex = Math.floor(Math.random() * adCount)
    result.push({ ...shuffledAds[randomAdIndex], isAd: true })
  }

  return result
}

/**
 * 使用 Fisher-Yates 洗牌算法打乱数组
 * @param array - 需要打乱的数组
 * @returns 打乱后的数组
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  if (shuffledArray.length <= 1) return shuffledArray
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}
