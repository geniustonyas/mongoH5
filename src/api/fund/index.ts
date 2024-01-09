import { request } from '@/utils/axios'
import type * as Fund from './types'

/** 获取余额列表 */
export function getBalanceApi() {
  return request<Fund.getBalanceItemResp>({
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
    // url: 'deposit/crypto/address',
    url: 'Member/GetDepositChannelInfo',
    method: 'post',
    data
  })
}

/** 创建提现订单 */
export function withdrawOrderApi(data: Fund.withdrawOrderData) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'Member/CreateWithdrawOrder',
    method: 'post',
    data
  })
}

/** 获取最低提现金额 */
export function getMinWithdrawAmountApi(data: Fund.getMinWithdrawAmountData) {
  return request<Fund.getMinWithdrawAmountResp>({
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
export function getTradeDetailApi(data: Fund.getTradeDetailsData) {
  return request<Fund.getTradeDetailResp>({
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

/** 获取法币充值渠道 */
export function getFiatChannelsApi(data: Fund.setDefaultCurrencyData) {
  return request<Fund.getFiatChannelsResp>({
    url: 'deposit/fiat/channels',
    method: 'post',
    data
  })
}

/** 获取法币充值渠道 */
export function fiatDepositApi(data: Fund.fiatDepositData) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'deposit/fiat/create',
    method: 'post',
    data
  })
}

/** 获取充值记录 */
export function getDepositListApi(data: Fund.getTradeListData) {
  return request<Fund.getTradeRecordResp>({
    url: 'Member/GetMemberDepositList',
    method: 'post',
    data
  })
}

/** 获取提现记录 */
export function getWithdrawListApi(data: Fund.getTradeListData) {
  return request<Fund.getTradeRecordResp>({
    url: 'Member/GetMemberWithdrawList',
    method: 'post',
    data
  })
}

/** 获取投注记录详情 */
export function getBetListApi(data: Fund.getTradeListData) {
  return request<Fund.getTradeRecordResp>({
    url: 'Member/GetMemberBetList',
    method: 'post',
    data
  })
}

/** 获取输赢记录详情 */
export function getWinListApi(data: Fund.getTradeListData) {
  return request<Fund.getTradeRecordResp>({
    url: 'Member/GetMemberWinList',
    method: 'post',
    data
  })
}

/** 获取账变记录 */
export function getFundChangeRecordApi(data: Fund.getFundChangeRecordData) {
  return request<Fund.getFundChangeRecordResp>({
    url: 'Member/GetMemberWalletFundList',
    method: 'post',
    data
  })
}

/** 获取历史记录 */
export function getHistoryRecordApi(data: Fund.getHistoryRecordData) {
  return request<Fund.getHistoryRecordResp>({
    url: 'Member/HisotyReocrd',
    method: 'post',
    data
  })
}

/** 获取历史记录详情 */
export function getHistoryRecordDetailsApi(data: Fund.getHistoryRecordDetailsData) {
  return request<Fund.getHistoryRecordDetailsResp>({
    url: 'Member/HistoryRecordDetail',
    method: 'post',
    data
  })
}
