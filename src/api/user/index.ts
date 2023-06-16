import { request } from '@/utils/axios'
import type * as User from './types'

/** 登录并返回 Token */
export function login(data: User.LoginData) {
  return request<User.LoginResp>({
    url: 'Member/Login',
    method: 'post',
    data
  })
}

/** 注册 */
export function reg(data: User.RegData) {
  return request<User.RegResp>({
    url: 'Member/Reg',
    method: 'post',
    data
  })
}

/** 检查用户是否存在 */
export function checkUser(params: User.CheckUserParam) {
  return request<User.CheckUserResp>({
    url: 'Member/CheckUser',
    method: 'get',
    params
  })
}

/**获取用户信息 */
export function getUserProfile(params: User.getUserProfileParam) {
  return request<User.GetUserProfileResp>({
    url: 'Member/Info',
    method: 'get',
    params
  })
}

/** 检查Telegram用户是否存在 */
export function checkTelegramUser(params: User.CheckTelegramUserData) {
  return request<User.CheckTelegramUserResp>({
    url: 'Member/CheckUser',
    method: 'get',
    params
  })
}
