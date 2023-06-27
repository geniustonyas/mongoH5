import { request } from '@/utils/axios'
import type * as Fund from './types'

/** 获取余额列表 */
export function getBalance() {
  return request<anyResp>({
    url: 'Member/GetMemberBalanceList',
    method: 'post'
  })
}

/** 设置比特币单位 */
export function setBtcUnit(data: Fund.setBtcUnitData) {
  return request<anyResp>({
    url: 'Member/EditBtcUnit',
    method: 'post',
    data
  })
}

/** 设置默认币种 */
export function setDefaultCurrency(data: Fund.setDefaultCurrencyData) {
  return request<anyResp>({
    url: 'Member/EditDefaultCurrencyCode',
    method: 'post',
    data
  })
}

/** 获取充值地址 */
export function getDepositAddress(data: Fund.getDepositAddressData) {
  return request<anyResp>({
    url: 'Member/GetDepositChannelInfo',
    method: 'post',
    data
  })
}

/** 创建提现订单 */
export function withdrawOrder(data: Fund.depositData) {
  return request<anyResp>({
    url: 'Member/CreateWithdrawOrder',
    method: 'post',
    data
  })
}

/** 获取最低提现金额 */
export function getMinWithdrawAmount(data: Fund.getMinWithdrawAmountData) {
  return request<Fund.getDepositAddressResp>({
    url: 'Member/GetMinimumWithdrawAmount',
    method: 'post',
    data
  })
}

/** 获取交易记录 */
export function getTradeRecord() {
  return request<anyResp>({
    url: 'Member/GetRecentDealList',
    method: 'post'
  })
}
