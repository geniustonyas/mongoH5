import _ from 'lodash-es'
import Clipboard from 'clipboard'
import { showToast } from 'vant'
// import { useUserStore } from '@/store/user'
// import router from '@/router'

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
    console.log(url)
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
