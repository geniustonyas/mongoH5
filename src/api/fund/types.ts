// 设置钱包比特币单位
export interface setBtcUnitData {
  CurrencyUnit: string
}

// 设置默认货币
export interface setDefaultCurrencyData {
  CurrencyCode: string
}

// 充值地址请求参数
export interface getDepositAddressData {
  BlockchainCode: string
  CurrencyCode: string
}

// 创建充值订单请求
export interface depositData {
  CurrencyCode: string | number
  BlockchainCode: string
  VerificationCode: string
  PayeeAddress: string
  Amount: string | number
}

// 提现最低金额
export interface getMinWithdrawAmountData {
  BlockchainCode: string
  CurrencyCode: string
}

// 创建提现订单请求参数
export interface withdrawOrderData {
  BlockchainCode: string
  CurrencyCode: string
  VerificationCode: string
  PayeeAddress: string
  Amount: string | number
}

// 提现交易详情参数
export interface getTradeDetailData {
  OrderId: string
  orderType: string
}

// 获取交易记录列表
export interface getTradeListData {
  CurrencyCode: string
  StartTime: string
  EndTime: string
  PageIndex: string | number
  PageSize: string | number
}

// 交易详情返回内容
export interface getTradeDetailResponse {
  blockchainCode: string
  createTime: string
  currencyCode: string
  orderId: string
  txId: string
  amount: string
  afterAmount: string
  orderType: string
  orderStatus: string
}

// 获取充值地址返回参数
export interface getDepositAddressResponse {
  channelId: string
  channelCode: string
  channelName: string
  currencyType: number
  blockchainCode: string
  currencyCode: string
  currencyUnit: string
  subtitle: string
  balance: string | number
  walletAddress: string
  exchangeRate: string | number
  minDepositAmount: string | number
}

// 获取交易记录
export interface getRradeRecordResponse {
  orderId: string
  currencyCode: string
  currencyType: string
  createTime: string
  amount: string
  afterBalance: string
  gameName: string
  orderStatus: string
  providerName?: string
  gameItemName?: string
}

// 获取钱包余额
export interface getBalanceItemResponse {
  balance: string
  name: string
  subtitle: string
  unit: string
  currencyType: string
  usdAmount: string
}

export interface getFundChangeRecordData {
  CurrencyCode: string
  StartTime: string
  EndTime: string
  PageIndex: string
  PageSize: string
  Category: string
}

export interface getFundChangeRecordRespItems {
  orderId: string
  currencyCode: string
  currencyType: number
  createTime: string
  category: string
  amount: string
  afterBalance: string
  beforeBalance: string
}

export interface getHistoryRecordData {
  CurrencyCode: string
  RecordType: string
  StartTime: string
  EndTime: string
  PageIndex: number | string
  PageSize: number | string
  KeyWord: string
}

export interface getHistoryRecordItems {
  id: string
  orderId: string
  currencyCode: string
  currencyType: number
  createTime: string
  amount: string
  gameName: string
  afterBalance: string
  orderStatus: string
  category: number
  remark?: string
}

export interface getTradeDetailsData {
  OrderId: string
  orderType: string
}

export interface getHistoryRecordDetailsData {
  Id: string
}

export interface getHistoryRecordDetails {
  id: string
  category: number
  amount: string
  orderStatus: string
  createTime: string
  currencyCode: string
  afterBalance: string
  gameName: string
  orderId?: string
  txId?: string
  toAddress?: string
  blockchainCode?: string
  remark?: string
}

export type getDepositAddressResp = ApiResponseData<getDepositAddressResponse>
export type getMinWithdrawAmountResp = ApiResponseData<{ currencyUnit: string; minimumWithdrawAmount: string }>
export type getTradeDetailResp = ApiResponseData<getTradeDetailResponse>
export type getTradeRecordResp = ApiResponseData<{ pageCount: string; pageIndex: string; pageSize: string; recordCount: string; items: getRradeRecordResponse[] }>
export type getBalanceItemResp = ApiResponseData<getBalanceItemResponse[]>
export type getFundChangeRecordResp = ApiResponseData<{ pageCount: string; pageIndex: string; pageSize: string; recordCount: string; items: getFundChangeRecordRespItems[] }>
export type getHistoryRecordResp = ApiResponseData<{ pageCount: string; pageIndex: string; pageSize: string; recordCount: string; items: getHistoryRecordItems[] }>
export type getHistoryRecordDetailsResp = ApiResponseData<getHistoryRecordDetails>
