import request from '@/utils/axios'
import type { ThemeResponse, ActorListRequest, ActorListResponse, Actor } from '@/types/theme'

/** 获取所有主题 */
export function getThemeApi() {
  return request<ThemeResponse>({
    url: `Web/ThemeList`,
    method: 'post'
  })
}

/** 获取演员列表 */
export function getActorListApi(query: ActorListRequest) {
  return request<ActorListResponse>({
    url: `Web/ActressList`,
    method: 'post',
    data: query
  })
}

/** 获取演员详情 */
export function getActorDetailApi(id: string) {
  return request<Actor>({
    url: `Web/ActressDetail`,
    method: 'post',
    data: { id }
  })
}
