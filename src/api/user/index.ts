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

/** 设置默认语言 */
export function setDefultLangApi(data: User.getUserProfileData) {
  return request<anyResp>({
    url: 'Member/SetDefaultLanguage',
    method: 'post',
    data
  })
}

/** 重置密码 */
export function resetPwdApi(data: User.resetPwdData) {
  return request<anyResp>({
    url: 'Member/MemberResetPassWord',
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

/** 发送邮箱验证码 */
export function sendEmailApi(data: User.sendEmailData) {
  return request<anyResp>({
    url: 'Member/SendEmailCheckCode',
    method: 'post',
    data
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

/** 检查用户是否是第三方 */
export function checkEmailThirdReg(data: User.CheckData) {
  return request<anyResp>({
    url: 'Member/CheckIsThirdPartyRegister',
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
export function refreshTokenApi(data: User.getUserProfileData) {
  return request<any>({
    url: 'Member/refshToken',
    method: 'post',
    data
  })
}

/** 检查第三方用户id是否存在 */
export function checkThirdUserApi(data: User.thirdData) {
  return request<anyResp>({
    url: 'Member/CheckThirdPartyId',
    method: 'post',
    data
  })
}

// 获取服务端唯一随机数
export function getThirdNonceApi() {
  return request<anyResp>({
    url: 'walletNonce',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API
  })
}

// 验证钱包签名
export function verifyMessageApi(params: any) {
  return request<anyResp>({
    url: 'wallet',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 验证Facebook用户是否真实 */
export function facebookValidateApi(params: any) {
  return request<anyResp>({
    url: 'facebook',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 获取签名所需要的随机数 */
export function getWalletNonce(params: any) {
  return request<anyResp>({
    url: 'walletNonce',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 验证telegram用户是否真实 */
export function telegramValidateApi(data: any) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'telegram',
    method: 'post',
    baseURL: import.meta.env.VITE_THIRD_API,
    data
  })
}

/** 生成Line的签名 */
export function lineValidateApi(params: any) {
  return request<anyResp>({
    url: 'line',
    method: 'get',
    baseURL: import.meta.env.VITE_THIRD_API,
    params
  })
}

/** 生成Line的签名 */
export function twitterValidateApi(params: any) {
  return request<anyResp>({
    url: 'twitter',
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
export function thirdLoginApi(data: User.thirdData) {
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

/** 订阅邮件 */
export function subscribeApi(data: User.subscribeData) {
  return request<anyResp>({
    baseURL: 'https://api.brevo.com/',
    url: 'v3/contacts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'api-key': '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'
    },
    withCredentials: false,
    data
  })
}
