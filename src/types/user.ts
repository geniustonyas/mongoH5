export interface UserInfo {
  id: string
  userName: string
  phoneNumber: string
  withdrawPassWord: string
  invitationCode: string
  realName: string
  idCardNumber: string
  balance: number
  qq: string
  wx: string
  mchat: string
  freezeAmount: number
  firstChildCount: string
  secondChildCount: string
  thirdChildCount: string
  nickName: string
  paymentStatus: boolean
  depositStatus: boolean
  paymentRate: number
  depositRate: number
  totalPaymentAmount: number
  totalPaymentOrderCount: string
  totalSuccessPaymentOrderCount: string
  totalPaymentCommon: number
  totalDepositAmount: number
  totalDepositCommon: number
  totalDepositOrderCount: string
  totalAgentCommon: number
  totalCommon: number
  vip: {
    id: string
    vipId: string
    vipName: string
    remark: string
    paymentFeeRate: number
    depositFeeRate: number
    c1PaymentFeeRate: number
    c1DepositFeeRate: number
    c2PaymentFeeRate: number
    c2DepositFeeRate: number
    c3PaymentFeeRate: number
    c3DepositFeeRate: number
    withdrawFeeRate: number
    withdrawSingleFee: number
    maxPaymentAmount: number
    maxDepositAmount: number
    upgradeOrderCount: string
    paymentOrderCompleteTime: string
    bank: boolean
    wechat: boolean
    alipay: boolean
    createTime: string
    updateTime: string
    recordStatus: number
  }
}

export interface loginForm {
  PhoneNumber?: string
  Password?: string
  InvitationCode?: string
  VerifCode?: string
  UserName?: string
}

export interface loginResp {
  id: number
  registerTime: string
  token: string
  tokenExpires: string
  userName: string
}
