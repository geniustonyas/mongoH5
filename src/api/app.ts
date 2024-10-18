import { request } from '@/utils/axios'
import type { AdvertisementsResp, ConfigResponse, SmsParams } from '@/types/app'

/** 获取系统配置 */
export function getConfigApi() {
  return request<ConfigResponse>({
    url: 'api/getConfig',
    method: 'get'
  })
}

/** 获取所有广告 */
export function getAdListApi(id: number | string) {
  return request<AdvertisementsResp[]>({
    url: `api/getAdList/${id}`,
    method: 'get'
  })
}

/** 获取验证码 */
export function getCodeApi(data: SmsParams) {
  return request({
    url: `api/sendSms`,
    method: 'post',
    data
  })
}
