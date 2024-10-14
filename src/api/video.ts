import { request } from '@/utils/axios'
import type { VideoQueryParams, videoList } from '@/types/video'

/** 获取视频列表 */
export function getVideoListApi(params: VideoQueryParams) {
  return request<videoList>({
    url: 'api/getVideoList',
    method: 'get',
    params
  })
}
