import { request } from '@/utils/axios'
import { getGoogleCodeResp, googleCodeData, googleCodeResp, ediPwdData, anyResp } from './types'

/** 获取Google验证码字符串 */
export function getGoogleCode() {
  return request<getGoogleCodeResp>({
    url: 'Member/GetGoogleCode',
    method: 'post'
  })
}

/** 绑定Google验证码 */
export function bindGoogleCode(data: googleCodeData) {
  return request<googleCodeResp>({
    url: 'Member/BindGoogleAuth',
    method: 'post',
    data
  })
}

/** 解绑Google验证码 */
export function unBindGoogleCode(data: googleCodeData) {
  return request<googleCodeResp>({
    url: 'Member/UnBindGoogleAuth',
    method: 'post',
    data
  })
}

/** 修改密码 */
export function editPassword(data: ediPwdData) {
  return request<anyResp>({
    url: 'Member/EditPassWord',
    method: 'post',
    data
  })
}

/** 获取通知消息列表 */
export function getMessage() {
  return request<getGoogleCodeResp>({
    url: 'Member/GetNewNotificationCount',
    method: 'post'
  })
}
