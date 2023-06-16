import { request } from '@/utils/axios'
import type * as Sys from './types'

/** 获取系统配置 */
export function getCOnfig() {
  return request<Sys.getSysConfigResp>({
    url: 'sys/config',
    method: 'get'
  })
}
