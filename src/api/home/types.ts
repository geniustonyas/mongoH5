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

// 获取新消息数量
export interface getNewMessageCountData {
  noLoading?: boolean
}

// 获取消息列表
export interface messageData {
  PageIndex: number
  PageSize: number
  noLoading?: false
}

export interface setReadData {
  Id: string
}

export type messageResp = ApiResponseData<{ items: []; pageIndex: string; pageSize: string; pageCount: string; recordCount: string }>
