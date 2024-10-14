import { request } from '@/utils/axios'

/** 用户信息 */
export function getConfig() {
  return request({
    url: 'api/me',
    method: 'get'
  })
}
