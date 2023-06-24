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

// 修改用户密码
export interface ediPwdData {
  OldPassword: string
  NewPassword: string
  VerificationCode: string
}

export type googleCodeResp = ApiResponseData<any>
export type anyResp = ApiResponseData<any>
