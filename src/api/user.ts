import { request } from '@/utils/axios'
import type { loginForm, loginRegResp, UserInfoResp } from '@/types/user'

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
  return request<UserInfoResp>({
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
