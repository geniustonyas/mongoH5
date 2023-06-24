import _ from 'lodash-es'

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
