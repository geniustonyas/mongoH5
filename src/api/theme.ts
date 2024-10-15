import { request } from '@/utils/axios'
import type { ThemeTagResp } from '@/types/theme'

/** 获取主题标签 */
export function getThemeTagApi() {
  return request<ThemeTagResp>({
    url: 'api/tagVideoCount',
    method: 'get'
  })
}
