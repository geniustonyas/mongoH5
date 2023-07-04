import _ from 'lodash-es'
import Clipboard from 'clipboard'
import BigNumber from 'bignumber.js'
import { showToast } from 'vant'
import 'vant/es/toast/style'

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
export function copy(selector: string, tips = '复制成功') {
  const clipboard = new Clipboard(selector)
  clipboard.on('success', () => {
    showToast(tips)
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboard.destroy()
    showToast('该浏览器不支持自动复制')
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
  return new BigNumber(Math.floor(parseFloat(value) * 100) / 100).toFormat(2)
}
