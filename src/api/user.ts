import { request } from '@/utils/axios'
import type { loginForm, loginResp, UserInfo, ShareRecordResponse } from '@/types/user'
import type { VideoListResponse } from '@/types/video'
import type { ApiResponseData } from '@/types/global.d'
import { TokenPrefix, getToken } from '@/utils/auth'

/** 用户登录 */
export function userLogin(data: loginForm) {
  return request<ApiResponseData<loginResp>>({
    url: 'Member/Login',
    method: 'post',
    data
  })
}

/** 用户注册 */
export function userRegister(data: loginForm) {
  return request<ApiResponseData<any>>({
    url: 'Member/Reg',
    method: 'post',
    data
  })
}

/** 用户信息 */
export function getUserInfo() {
  return request<ApiResponseData<UserInfo>>({
    url: 'Member/GetUserInfo',
    method: 'get',
    headers: { Authorization: `${TokenPrefix}${getToken()}` }
  })
}

/** 用户登出 */
export function userLogout() {
  return request({
    url: 'Member/Logout',
    method: 'post'
  })
}

/** 用户点赞 */
export function userLike(data: { VideoId: number | string; Like: number | string }) {
  return request<ApiResponseData<any>>({
    url: 'Web/MemberLikeVideo',
    method: 'post',
    data
  })
}

/** 用户收藏 */
export function userCollection(data: { VideoId: number | string; Collect: boolean }) {
  return request<ApiResponseData<any>>({
    url: 'Web/MemberCollectVideo',
    method: 'post',
    data
  })
}

/** 浏览记录 */
export function userWatchHistory(data: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'Web/MemberWatchHistory',
    method: 'post',
    data
  })
}

/** 用户收藏记录 */
export function userCollectionHistory(data: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'Web/MemberCollectVideoList',
    method: 'post',
    data
  })
}

/** 用户分享记录 */
export function userShareHistory(data: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<ShareRecordResponse>>({
    url: 'Member/GetChildList',
    method: 'post',
    data
  })
}

/** 用户分享人数 */
export function userShareCount() {
  return request<ApiResponseData<string>>({
    url: 'Member/GetChildCount',
    method: 'post'
  })
}
