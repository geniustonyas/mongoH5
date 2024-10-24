import type { ApiResponseData } from '@/types/api.d'

export interface UserInfo {
  userId: number | string
  inviteUserId: number | string
  userName?: string | null
  nickName?: string | null
  realName?: string | null
  idCardNo?: string | null
  phone: string
  email?: string | null
  lastLoginIp?: string | null
  lastLoginTime: string
  country: string
  region: string
  city: string
  loginIp: string
  inviteCode: number | string
  isVip: number | string
  vipExpiryDate: string
  // status: number
  // isDel?: number
  updateTime?: string
  addTime?: string
}

export interface loginForm {
  userName?: string
  password: string
  phone?: string
  code?: string
}

export interface loginRegData {
  token: string
  user?: UserInfo
}

export type loginRegResp = ApiResponseData<loginRegData>
