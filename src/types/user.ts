import type { ApiResponseData } from '@/types/api.d'

export interface UserInfo {
  userId: number
  inviteUserId: number
  userName: string
  nickName: string
  realName: string
  idCardNo: string
  phone: string
  email: string
  lastLoginIp: string
  lastLoginTime: string
  country: string
  region: string
  city: string
  loginIp: string
  inviteCode: number
  isVip: number
  vipExpiryDate: string
  status: number
  isDel: number
  updateTime: string
  addTime: string
}

export type UserInfoResp = ApiResponseData<UserInfo>
