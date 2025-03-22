import { ApiResponseData } from '@/types/global'
import { request } from '@/utils/axios'

/** 获取热搜词 */
export function getHotSeachKeywords() {
  return request<ApiResponseData>({
    url: '/WEB/HotSearchKeywordList',
    method: 'post',
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 全站搜索 */
export function getSearchResult(params: { KeyWord: string; SearchType: string; PageIndex: number; PageSize: number }) {
  return request<ApiResponseData>({
    url: '/WEB/SearchByKeyword',
    method: 'post',
    params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/**排行榜 */
export function getRankList(params: { SearchType: number | string }) {
  return request<ApiResponseData>({
    url: '/WEB/RankList',
    method: 'post',
    params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
