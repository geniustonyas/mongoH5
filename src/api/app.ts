import request, { cancelTokenSource } from '@/utils/axios'

/** 获取系统配置 */
export function getConfigApi() {
  return request({
    url: 'Web/Config',
    method: 'post'
  })
}

/** 获取所有分类 */
export function getCategoryApi() {
  return request({
    url: 'Web/Channel',
    method: 'post',
    cancelToken: cancelTokenSource?.token // 使用取消令牌
  })
}

/** 获取所有广告 */
export function getAdsApi() {
  return request({
    url: `Web/AdsList`,
    method: 'post'
  })
}

/** 获取验证码 */
export function getCodeApi() {
  return request({
    url: 'Web/GetCode',
    method: 'post'
  })
}
