import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import { DramaDetailRequestParams, DramaDetailResponse, DramaListRequestParams, DramaListResponse } from '@/types/drama'

// 获取视频首页列表
export function getDramaList(params: DramaListRequestParams) {
  return request<ApiResponseData<DramaListResponse>>({
    url: 'ShortMovie/ShortMovieList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取剧集详情
export function getDramaDetail(params: DramaDetailRequestParams) {
  return request<ApiResponseData<DramaDetailResponse>>({
    url: 'ShortMovie/ShortMovieDetail',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
