import { request } from '@/utils/axios'
import type * as App from './types'

/** 获取系统配置 */
export function getConfigApi() {
  return request<anyResp>({
    url: 'Member/GetWebSiteConfig',
    method: 'post',
    data: { noLoading: true }
  })
}

// 获取汇率
export function getExchangeRateApi() {
  return request<anyResp>({
    url: 'Member/GetExchangeRate',
    method: 'post'
  })
}

// 获取首页跑马灯公告
export function getAnnouncementListApi(data: App.getAnnouncementListData) {
  return request<anyResp>({
    url: 'Member/GetAnnouncementList',
    method: 'post',
    data
  })
}
