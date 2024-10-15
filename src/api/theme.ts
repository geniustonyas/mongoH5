import { request } from '@/utils/axios'
import type { ThemeTagResp } from '@/types/theme'

/** 获取主题标签 */
export function getThemeTagApi() {
  return request<ThemeTagResp>({
    url: 'api/tagVideoCount',
    method: 'get'
  })
}

/** 获取演员列表 */
// export function getActorListApi() {
//   return request<ActorListResp>({
//     url: 'api/actorList',
//     method: 'get'
//   })
// }
