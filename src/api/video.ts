import { request } from '@/utils/axios'
import type { VideoQueryParams, VideoListResponse } from '@/types/video'

/** 获取视频列表 */
export function getVideoListApi(params: VideoQueryParams) {
  return request<VideoListResponse>({
    url: 'api/videos',
    method: 'get',
    params
  })
}
