import { request } from '@/utils/axios'
import type * as Fund from './types'

/** 获取余额列表 */
export function getBalanceApi() {
  return request<anyResp>({
    url: 'Member/GetMemberBalanceList',
    method: 'post'
  })
}

/** 设置比特币单位 */
export function setBtcUnitApi(data: Fund.setBtcUnitData) {
  return request<anyResp>({
    url: 'Member/EditBtcUnit',
    method: 'post',
    data
  })
}

/** 设置默认币种 */
export function setDefaultCurrencyApi(data: Fund.setDefaultCurrencyData) {
  return request<anyResp>({
    url: 'Member/EditDefaultCurrencyCode',
    method: 'post',
    data
  })
}

/** 获取充值地址 */
export function getDepositAddressApi(data: Fund.getDepositAddressData) {
  return request<anyResp>({
    url: 'Member/GetDepositChannelInfo',
    method: 'post',
    data
  })
}

/** 创建提现订单 */
export function withdrawOrderApi(data: Fund.depositData) {
  return request<anyResp>({
    url: 'Member/CreateWithdrawOrder',
    method: 'post',
    data
  })
}

/** 获取最低提现金额 */
export function getMinWithdrawAmountApi(data: Fund.getMinWithdrawAmountData) {
  return request<Fund.getDepositAddressResp>({
    url: 'Member/GetMinimumWithdrawAmount',
    method: 'post',
    data
  })
}

/** 获最近交易记录 */
export function getTradeRecordApi() {
  return request<anyResp>({
    url: 'Member/GetRecentDealList',
    method: 'post'
  })
}

/** 获取交易记录详情 */
export function getTradeDetailApi(data: Fund.getTradeDetailData) {
  return request<anyResp>({
    url: 'Member/GetDealRecordDetail',
    method: 'post',
    data
  })
}

/** 获取充值方式 */
export function getDepositMethodApi() {
  return request<anyResp>({
    url: 'Member/GetDepositMethods',
    method: 'post'
  })
}

/** 获取充值记录 */
export function getDepositListApi(data: Fund.getTradeListData) {
  return request<anyResp>({
    url: 'Member/GetMemberDepositList',
    method: 'post',
    data
  })
}

/** 获取投注记录 */
export function getWithdrawListApi(data: Fund.getTradeListData) {
  return request<anyResp>({
    url: 'Member/GetMemberWithdrawList',
    method: 'post',
    data
  })
}

/** 获取充值记录详情 */
export function getBetListApi(data: Fund.getTradeListData) {
  return request<anyResp>({
    url: 'Member/GetMemberBetList',
    method: 'post',
    data
  })
}

/** 获取充值记录详情 */
export function getWinListApi(data: Fund.getTradeListData) {
  return request<anyResp>({
    url: 'Member/GetMemberWinList',
    method: 'post',
    data
  })
}
