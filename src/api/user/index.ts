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

/** 退出登录 */
export function loginout() {
  return request<User.RegResp>({
    url: 'Member/Logout',
    method: 'post'
  })
}

/** 检查用户名是否已经注册 */
export function checkUser(data: User.CheckData) {
  return request<User.CheckResp>({
    url: 'Member/CheckUserName',
    method: 'post',
    data
  })
}

/** 检查用户是否绑定Google */
export function checkUserBindGoogle(data: User.CheckData) {
  return request<User.CheckResp>({
    url: 'Member/CheckIsBindGoogleAuth',
    method: 'post',
    data
  })
}

/** 检查邮箱是否已经注册 */
export function checkEmail(data: User.CheckData) {
  return request<User.CheckResp>({
    url: 'Member/CheckEmail',
    method: 'post',
    data
  })
}

/**获取用户信息 */
export function getUserProfile(data: User.getUserProfileData) {
  return request<User.GetUserProfileResp>({
    url: 'Member/GetMemberUserInfo',
    method: 'post',
    data
  })
}

/** 检查第三方用户id是否存在 */
export function checkThirdUser(data: User.thirdUserExistData) {
  return request<User.thirdUserExistResp>({
    url: 'Member/CheckThirdPartyId',
    method: 'post',
    data
  })
}

/** 验证telegram用户是否真实 */
export function telegramValidate(params: any) {
  return request<User.thirdUserExistResp>({
    url: 'telegram',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 验证Google用户是否真实 */
export function googleValidate(params: any) {
  return request<User.thirdUserExistResp>({
    url: 'google',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 第三方登录 */
export function thirdLogin(data: User.thirdLoginData) {
  return request<User.LoginResp>({
    url: 'Member/thirdPartyLogin',
    method: 'post',
    data
  })
}

/** 第三方注册 */
export function thirdReg(data: User.thirdRegData) {
  return request<User.RegResp>({
    url: 'Member/thirdPartyReg',
    method: 'post',
    data
  })
}
