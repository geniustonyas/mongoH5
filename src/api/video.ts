import { request } from '@/utils/axios'
import type { VideoQueryParams, VideoListResponse, VideoDetailResponse, addRecordData, getRecordData, addRecordDataResp } from '@/types/video'

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

/** 添加用户操作 */
export function addRecordApi(data: addRecordData) {
  return request<addRecordDataResp>({
    url: 'api/addRecord',
    method: 'post',
    data
  })
}

/** 获取用户操作记录 */
export function getRecordApi(params: getRecordData) {
  return request<VideoListResponse>({
    url: 'api/getRecords',
    method: 'get',
    params
  })
}
