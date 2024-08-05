import { request } from '@/utils/axios'
import type * as Promo from './types'

/** 获取优惠列表 */
export function getPromoApi(data: Promo.getPromoData) {
  return request<Promo.getPromoResp>({
    url: 'Promo/GetWebPromoList',
    method: 'post',
    data
  })
}

/** 获取过期优惠列表 */
export function getExpiredPromoApi(data: Promo.getPromoData) {
  return request<Promo.getPromoResp>({
    url: 'Promo/GetWebExpiredPromoList',
    method: 'post',
    data
  })
}

/** 获取优惠详情 */
export function getPromoDetailsApi(data: Promo.getPromoDetailsData) {
  return request<Promo.getPromoDetailsResp>({
    url: 'Promo/GetWebPromoDetail',
    method: 'post',
    data
  })
}
