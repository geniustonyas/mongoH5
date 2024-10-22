import request from '@/utils/axios'
import type { ThemeResponse } from '@/types/theme'

/** 获取所有主题 */
export function getThemeApi() {
  return request<ThemeResponse>({
    url: `Web/ThemeList`,
    method: 'post'
  })
}
