import { request } from '@/utils/axios'
import type * as Mall from './types'

/** 获取积分商城商品列表 */
export function getGoodsListApi() {
  return request<Mall.getGoodsListResp>({
    url: 'Integral/GetProductList',
    method: 'post'
  })
}

/** 兑换商品 */
export function exhangeGoodsApi(data: Mall.exhangeGoodsData) {
  return request<anyResp>({
    url: 'Integral/ExchangeGoods',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

/** 积分记录 */
export function getIntegralRecordApi(data: Mall.getIntegralRecordData) {
  return request<Mall.getIntegralRecordResp>({
    url: 'Integral/HistoryList',
    method: 'post',
    data
  })
}

/** VIP列表 */
export function getIntegralVipApi() {
  return request<Mall.getIntegralVipResp>({
    url: 'Integral/GetVIpList',
    method: 'post'
  })
}
