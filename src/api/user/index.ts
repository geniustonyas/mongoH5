import { request } from '@/utils/axios'
import type * as User from './types'

/** 登录并返回 Token */
export function loginApi(data: User.LoginData) {
  return request<User.LoginResp>({
    url: 'Member/Login',
    method: 'post',
    data
  })
}

/** 注册 */
export function regApi(data: User.RegData) {
  return request<anyResp>({
    url: 'Member/Reg',
    method: 'post',
    data
  })
}

/** 退出登录 */
export function loginOutApi() {
  return request<anyResp>({
    url: 'Member/Logout',
    method: 'post'
  })
}

/** 检查用户名是否已经注册 */
export function checkUserApi(data: User.CheckData) {
  return request<anyResp>({
    url: 'Member/CheckUserName',
    method: 'post',
    data
  })
}

/** 检查用户是否绑定Google */
export function checkUserBindGoogleApi(data: User.CheckData) {
  return request<anyResp>({
    url: 'Member/CheckIsBindGoogleAuth',
    method: 'post',
    data
  })
}

/** 检查邮箱是否已经注册 */
export function checkEmailApi(data: User.CheckData) {
  return request<anyResp>({
    url: 'Member/CheckEmail',
    method: 'post',
    data
  })
}

/**获取用户信息 */
export function getUserProfileApi(data: User.getUserProfileData) {
  return request<User.GetUserProfileResp>({
    url: 'Member/GetMemberUserInfo',
    method: 'post',
    data
  })
}

/**刷新token */
export function refreshTokenApi() {
  return request<any>({
    url: 'Member/refshToken',
    method: 'post'
  })
}

/** 检查第三方用户id是否存在 */
export function checkThirdUserApi(data: User.thirdUserExistData) {
  return request<anyResp>({
    url: 'Member/CheckThirdPartyId',
    method: 'post',
    data
  })
}

/** 验证telegram用户是否真实 */
export function telegramValidateApi(params: any) {
  return request<anyResp>({
    url: 'telegram',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 验证Google用户是否真实 */
export function googleValidateApi(params: any) {
  return request<anyResp>({
    url: 'google',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 第三方登录 */
export function thirdLoginApi(data: User.thirdLoginData) {
  return request<User.LoginResp>({
    url: 'Member/thirdPartyLogin',
    method: 'post',
    data
  })
}

/** 第三方注册 */
export function thirdRegApi(data: User.thirdRegData) {
  return request<anyResp>({
    url: 'Member/thirdPartyReg',
    method: 'post',
    data
  })
}
