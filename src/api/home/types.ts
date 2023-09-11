// 修改用户信息
export interface editUserInfoData {
  DateOfBirth: string | undefined
  CountryCode: string | undefined
  PhoneNumber: string | undefined
  Address: string | undefined
  Zipcode: string | number | undefined
  VerificationCode: string | undefined
}

// 修改用户密码
export interface ediPwdData {
  OldPassword: string
  NewPassword: string
  VerificationCode: string
}

// 请求google返回类型
export interface getGoogleCodeResp {
  account: string
  manualEntryKey: string
  qrCodeSetupImageUrl: string
}

// 绑定和解绑Google验证
export interface googleCodeData {
  VerificationCode: string
}

// 设置隐私模式是否开启
export interface setPricacyData {
  InVisible: number
}

// 获取新消息数量
export interface getNewMessageCountData {
  noLoading?: boolean
}

// 获取消息列表
export interface messageData {
  PageIndex: number
  PageSize: number
  NotificationType: number
  noLoading?: boolean
}

export interface messageItem {
  id: string
  isRead: boolean
  createTime: string
  content: string
  title: string
  notificationType: string
  targetUrl: string
}

// 设为已读data
export interface setReadData {
  Id: string
}

export interface setAllReadData {
  NotificationType: string
}

// 领取优惠data
export interface receiveRewardData {
  VipSubItemCode: string
}

// club信息vip列表
export interface vipListItemResp {
  id: string
  code: string
  name: string
  integral: string
  requiredTotalBetAmount: string
  items: vipListItemItemsResp[]
}

// vip列表子列表
export interface vipListItemItemsResp {
  id: string
  name: string
  code: string
  requiredTotalBetAmount: string
  rewardAmount: string
  receivedStatus: string
  isReceived: boolean
  isMerge: boolean
}

// club 当前vip等级信息
export interface currentDataResp {
  totalBetAmount: string
  vipCode: string
  vipSubItemCode: string
  vipName: string
  vipSubItemName: string
}

// 获取下一等级奖励
export interface getNextRewardResps {
  vipCode: string
  vipName: string
  integral: string
  vipSubItemCode: string
  totalBetAmount: string
  nextVipRequiredTotalBetAmount: string
}

// 奖励列表返回数据
export interface getRewardListData {
  noLoading?: boolean
  PageIndex: number
  PageSize: number
}

// 奖励列表返回数据项
export interface getRewardListItem {
  id: string
  createTime: string
  rewardCode: string
  rewardName: string
  currencyCode: string
  orderStatus: string
  amount: string
}

// 兑换奖励请求数据
export interface exchangeRewardData {
  RewardCode: string
}

// 优惠码列表返回数组
export interface getRewardCodeListItem {
  id: string
  needForm: boolean
  name: string
  image: string
  intro: string
}

// 申请奖励请求数据
export interface applyRewardData {
  Id: string
  Data?: {
    OrderNo: string
    BetTime: string
    Expand?: string
    Expand1?: string
  }
}

export interface applyRewardResp {}

export type messageResp = ApiResponseData<{ items: messageItem[]; pageIndex: string; pageSize: string; pageCount: string; recordCount: string }>
export type getNewMessageCountResp = ApiResponseData<{ personalLetterCount: string; announcementCount: string }>
export type vipInfoResp = ApiResponseData<{ vipList: vipListItemResp[]; currentData: currentDataResp }>
export type getNextRewardResp = ApiResponseData<getNextRewardResps>
export type getRewardListResp = ApiResponseData<{ items: getRewardListItem[]; pageIndex: string; pageSize: string; pageCount: string; recordCount: string }>
export type getRewardCodeListResp = ApiResponseData<getRewardCodeListItem[]>
