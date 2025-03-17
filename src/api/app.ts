import { request } from '@/utils/axios'
import { AdsPostion, SmsParams, StatisticsResp } from '@/types/app'
import type { ApiResponseData } from '@/types/global.d'

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
  return request<ApiResponseData<AdsPostion[]>>({
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

/** 获取站长统计代码和扣量比例 */
export function getStatisticsApi(data: { Domain: string; SubDomain: string }) {
  return request<ApiResponseData<StatisticsResp>>({
    url: 'Web/GetMGStatisticsConfig',
    method: 'post',
    headers: {
      'Content-Type': 'text/plain',
      'X-Should-Encrypt': '1'
    },
    data
  })
}

/** 上传文件 */
export function uploadFileApi(data: FormData) {
  return request<ApiResponseData<any>>({
    url: 'UploadFile/UploadImg',
    method: 'post',
    headers: {
      'X-Should-Decrypt': '0'
    },
    data
  })
}
