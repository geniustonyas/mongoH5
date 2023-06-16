import { UserState } from '@/store/modules/user/types'

// 退出登录
export interface LogoutRes {
  token: string
}

// 登录类型
export interface LoginData {
  UserName: string
  PassWord: string
  VerificationCode: string
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
export interface getUserProfileParam {
  UserName: string
}

// 用户是否存在
export interface CheckUserParam {
  UserName: string
}

// telegram登录类型
export interface CheckTelegramUserData {
  auth_date: string
  first_name: string
  hash: string
  id: number
  username: string
}

// 返回类型
export type LoginResp = ApiResponseData<{ id: number; userName: string; registerTime: string; token: string; tokenExpires: number }>
export type RegResp = ApiResponseData<any>
export type CheckUserResp = ApiResponseData<any>
export type GetUserProfileResp = ApiResponseData<UserState>
export type CheckTelegramUserResp = ApiResponseData<any>
