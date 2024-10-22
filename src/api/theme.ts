import request from '@/utils/axios'

/** 获取所有主题 */
export function getThemeApi() {
  return request({
    url: `Web/ThemeList`,
    method: 'post'
  })
}
