// 设置钱包比特币单位
export interface setBtcUnitData {
  CurrencyUnit: string
}

// 设置默认货币
export interface setDefaultCurrencyData {
  CurrencyCode: string
}

// 获取充值地址请求参数
export interface getDepositAddressData {
  BlockchainCode: string
  CurrencyCode: string
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

// 创建提现订单请求
export interface depositData {
  CurrencyCode: string | number
  BlockchainCode: string
  VerificationCode: string
  PayeeAddress: string
  Amount: string | number
}

// 获取提现最低金额
export interface getMinWithdrawAmountData {
  BlockchainCode: string
  CurrencyCode: string
}

export type getDepositAddressResp = ApiResponseData<getDepositAddressResponse>
