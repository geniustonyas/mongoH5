import { request } from '@/utils/axios'
import type { VideoQueryParams, VideoListResponse, VideoDetailResponse } from '@/types/video'

/** 获取视频列表 */
export function getVideoListApi(params: VideoQueryParams) {
  return request<VideoListResponse>({
    url: 'api/videos',
    method: 'get',
    params
  })
}

/** 获取视频详情 */
export function getVideoDetailApi(id: number) {
  return request<VideoDetailResponse>({
    url: `api/video/${id}`,
    method: 'get'
  })
}
