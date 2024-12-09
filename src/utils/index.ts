import * as _ from 'lodash-es'
import Clipboard from 'clipboard'
import { showToast } from 'vant'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

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
      return '480P'
    } else if (height <= 720) {
      return '720P'
    } else {
      return '1080P'
    }
  }
  return ''
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
  textarea.innerHTML = str
  return textarea.value
}
