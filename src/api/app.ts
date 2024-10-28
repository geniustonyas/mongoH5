import { request } from '@/utils/axios'
import { SmsParams } from '@/types/app'
import type { ApiResponseData } from '@/types/api.d'

/** 获取系统配置 */
export function getConfigApi() {
  return request<ApiResponseData<any>>({
    url: 'Web/Config',
    method: 'post'
  })
}

/** 获取所有分类 */
export function getCategoryApi() {
  return request<ApiResponseData<any>>({
    url: 'Web/Channel',
    method: 'post'
  })
}

/** 获取所有广告 */
export function getAdsApi() {
  return request<ApiResponseData<any>>({
    url: 'Web/AdsList',
    method: 'post'
  })
}

/** 获取验证码 */
export function getCodeApi(data: SmsParams) {
  return request<ApiResponseData<any>>({
    url: 'Web/GetCode',
    method: 'post',
    data
  })
}
