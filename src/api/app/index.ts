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
  return request<App.getAnnouncementListResp>({
    url: 'Member/GetAnnouncementList',
    method: 'post',
    data
  })
}

// 获取首页banner
export function getBannerApi(data: App.getBannerData) {
  return request<App.getBannerResp>({
    url: 'Member/GetWebAdvertisement',
    method: 'post',
    data
  })
}

// 获取首页弹窗提醒
export function getRemindApi() {
  return request<App.getRemindResp>({
    url: 'Member/GetPopupReminder',
    method: 'post'
  })
}
