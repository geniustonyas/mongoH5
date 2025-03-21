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
  avatar: string
  remark: string
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

export interface ShareRecord {
  id: string
  status: number
  username: string
  registerTime: string
  layer: string
}

export type ShareRecordResponse = {
  items: ShareRecord[]
  pageCount: string
  pageIndex: string
  pageSize: string
  recordCount: string
}

export interface UpdateUserInfo {
  NickName?: string | ''
  Avatar?: string | ''
  Remark?: string | ''
  QQ?: string | ''
  WX?: string | ''
}

export interface Suggestion {
  // 内容类型: 0全部 1视屏 2帖子
  ContentType: string
  // 内容报错1  查找资源2  意见反馈3  视频报错4  其他5
  FeedbackType: string
  // 视屏报错类型: 无法播放1 清晰度太低2  内容与标题不符3 卡顿4  不精彩5
  VideoErrorType?: string
  // 资源ID, 视屏报错时的视屏ID, BBS报错时的帖子ID
  SourceId?: string
  // 反馈内容
  Content: string
}

export interface userWatchHistoryRequest {
  SearchType: number
  StartTime?: string
  EndTime?: string
  PageSize: number
  PageIndex: number
}
