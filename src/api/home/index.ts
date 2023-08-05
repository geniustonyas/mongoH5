import { request } from '@/utils/axios'
import * as Home from './types'

/** 修改个人信息  */
export function editUserInfoApi(data: Home.editUserInfoData) {
  return request<anyResp>({
    url: 'Member/EditMemberInfo',
    method: 'post',
    data
  })
}

/** 修改密码 */
export function editPasswordApi(data: Home.ediPwdData) {
  return request<anyResp>({
    url: 'Member/EditPassWord',
    method: 'post',
    data
  })
}

/** 获取Google验证码字符串 */
export function getGoogleCodeApi() {
  return request<Home.getGoogleCodeResp>({
    url: 'Member/GetGoogleCode',
    method: 'post'
  })
}

/** 绑定Google验证码 */
export function bindGoogleCodeApi(data: Home.googleCodeData) {
  return request<anyResp>({
    url: 'Member/BindGoogleAuth',
    method: 'post',
    data
  })
}

/** 解绑Google验证码 */
export function unBindGoogleCodeApi(data: Home.googleCodeData) {
  return request<anyResp>({
    url: 'Member/UnBindGoogleAuth',
    method: 'post',
    data
  })
}

/** 隐私设置 */
export function setPrivacyApi(data: Home.setPricacyData) {
  return request<anyResp>({
    url: 'Member/EditPrivacySetting',
    method: 'post',
    data
  })
}

/** 获取新消息数量 */
export function getNewMessageCountApi(data: Home.getNewMessageCountData) {
  return request<anyResp>({
    url: 'Member/GetNewNotificationCount',
    method: 'post',
    data
  })
}

/** 获取通知消息列表 */
export function getMessageApi(data: Home.messageData) {
  return request<Home.messageResp>({
    url: 'Member/GetMemberNotificationList',
    method: 'post',
    data
  })
}

/** 设为已读 */
export function setReadApi(data: Home.setReadData) {
  return request<anyResp>({
    url: 'Member/SetNotificationRead',
    method: 'post',
    data
  })
}

/** 全部设为已读 */
export function setAllReadApi() {
  return request<anyResp>({
    url: 'Member/SetAllNotificationRead',
    method: 'post'
  })
}

/** 获取Club信息 */
export function getVipInfoApi() {
  return request<Home.vipInfoResp>({
    url: 'Member/GetMemberVipDetail',
    method: 'post'
  })
}

/** 获取Club信息 */
export function receiveRewardApi(data: Home.receiveRewardData) {
  return request<Home.vipInfoResp>({
    url: 'Member/ReceiveVIPRewards',
    method: 'post',
    data
  })
}

/** 获取下一级别奖励 */
export function getNextRewardApi(data: Home.receiveRewardData) {
  return request<Home.getNextRewardResp>({
    url: 'Member/GetMemberNextVipReward',
    method: 'post',
    data
  })
}

/** 获取奖励列表 */
export function getRewardListApi(data: Home.getRewardListData) {
  return request<Home.getRewardListResp>({
    url: 'Promo/RewardFundList',
    method: 'post',
    data
  })
}

/** 兑换奖励 */
export function exchangeRewardApi(data: Home.exchangeRewardData) {
  return request<anyResp>({
    url: 'Promo/RedemptionReward',
    method: 'post',
    data
  })
}
