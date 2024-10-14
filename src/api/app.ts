import { request } from '@/utils/axios'
import type { AdvertisementsResp, ConfigResp } from '@/types/app'

/** 获取系统配置 */
export function getConfigApi() {
  return request<ConfigResp>({
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
