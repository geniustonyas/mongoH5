import { UserInfoType } from '@/store/modules/user/types'

// 退出登录
export interface LogoutRes {
  token: string
}

// 登录类型
export interface LoginData {
  UserName: string
  PassWord: string
  VerificationCode?: string
}

// 注册类型
export interface RegData {
  UserName: string
  Password: string
  CountryCode: string
  PhoneNumber: string
  Email: string
  AgentId?: string
  DateOfBirth: string
  RegisterUrl: string
}

// 获取用户信息
export interface getUserProfileData {
  noLoading?: boolean
}

// 本地用户是否存在
export interface CheckData {
  UserName?: string
  Keyword?: string
  noLoading?: boolean
}

// 检查第三方用户是否存在
export interface thirdUserExistData {
  ThirdPartyType: string | number
  ThirdPartyId: string | number
  ThirdPartyName: string
}

// 第三方登录
export interface thirdLoginData {
  ThirdPartyType: string
  ThirdPartyId: string
  ThirdPartyName: string
  Sign: string
}

// 第三方注册
export interface thirdRegData {
  UserName: string
  CountryCode: string
  PhoneNumber: string
  Email: string
  AgentId?: string
  DateOfBirth: string
  RegisterUrl: string
  ThirdPartyType: string
  ThirdPartyId: string
  ThirdPartyName: string
  Sign: string
}

// // telegram登录
// export interface CheckTelegramUserData {
//   auth_date: string
//   first_name: string
//   hash: string
//   id: number
//   username: string
// }

// 返回类型
export type LoginResp = ApiResponseData<{ id: number; userName: string; registerTime: string; token: string; tokenExpires: number }>
export type GetUserProfileResp = ApiResponseData<UserInfoType>
