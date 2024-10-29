import { request } from '@/utils/axios'
import type { IndexVideoResponse, VideoListRequest, VideoListResponse, VideoDetailResponse } from '@/types/video'
import type { ApiResponseData } from '@/types/global.d'

/** 获取首页视频列表 */
export function getIndexVideoListApi() {
  return request<ApiResponseData<IndexVideoResponse>>({
    url: 'Web/IndexVideo',
    method: 'post'
  })
}

/** 获取视频列表 */
export function getVideoListApi(data: VideoListRequest) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'Web/VideoList',
    method: 'post',
    data: data
  })
}

/** 获取视频详情 */
export function getVideoDetailApi(id: number) {
  return request<ApiResponseData<VideoDetailResponse>>({
    url: `Web/VideoDetail`,
    method: 'post',
    data: { id }
  })
}

/** 获取视频榜单 */
export function getVideoRankApi(data: VideoListRequest) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'Web/VideoRankList',
    method: 'post',
    data
  })
}

/** 用户点击播放统计播放数 */
export function addPlayCountApi(Id: string | number) {
  return request<ApiResponseData<any>>({
    url: 'web/PlayVideo',
    method: 'post',
    data: { Id }
  })
}
