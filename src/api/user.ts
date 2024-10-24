import request from '@/utils/axios'
import type { loginForm, loginRegResp, UserInfo } from '@/types/user'
import type { ApiResponseData } from '@/types/api.d'

/** 用户登录 */
export function userLogin(data: loginForm) {
  return request<loginRegResp>({
    url: 'api/login',
    method: 'post',
    data
  })
}

/** 用户注册 */
export function userRegister(data: loginForm) {
  return request<loginRegResp>({
    url: 'api/register',
    method: 'post',
    data
  })
}

/** 用户信息 */
export function getUserInfo() {
  return request<ApiResponseData<UserInfo>>({
    url: 'api/me',
    method: 'get'
  })
}

/** 用户登出 */
export function userLogout() {
  return request({
    url: 'api/logout',
    method: 'post'
  })
}
