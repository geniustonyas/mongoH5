import { request } from '@/utils/axios'
import * as Home from './types'

/** 修改个人信息  */
export function editUserInfo(data: Home.editUserInfoData) {
  return request<anyResp>({
    url: 'Member/EditMemberInfo',
    method: 'post',
    data
  })
}

/** 修改密码 */
export function editPassword(data: Home.ediPwdData) {
  return request<anyResp>({
    url: 'Member/EditPassWord',
    method: 'post',
    data
  })
}

/** 获取Google验证码字符串 */
export function getGoogleCode() {
  return request<Home.getGoogleCodeResp>({
    url: 'Member/GetGoogleCode',
    method: 'post'
  })
}

/** 绑定Google验证码 */
export function bindGoogleCode(data: Home.googleCodeData) {
  return request<anyResp>({
    url: 'Member/BindGoogleAuth',
    method: 'post',
    data
  })
}

/** 解绑Google验证码 */
export function unBindGoogleCode(data: Home.googleCodeData) {
  return request<anyResp>({
    url: 'Member/UnBindGoogleAuth',
    method: 'post',
    data
  })
}

/** 获取新消息数量 */
export function getNewMessageCount() {
  return request<anyResp>({
    url: 'Member/GetNewNotificationCount',
    method: 'post'
  })
}

/** 获取通知消息列表 */
export function getMessage(data: Home.messageData) {
  return request<Home.messageResp>({
    url: 'Member/GetMemberNotificationList',
    method: 'post',
    data
  })
}

/** 设为已读 */
export function setRead(data: Home.setReadData) {
  return request<anyResp>({
    url: 'Member/SetNotificationRead',
    method: 'post',
    data
  })
}

/** 全部设为已读 */
export function setAllRead() {
  return request<anyResp>({
    url: 'Member/SetAllNotificationRead',
    method: 'post'
  })
}
