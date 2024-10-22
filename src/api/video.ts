import request, { cancelTokenSource } from '@/utils/axios'
import type { IndexVideoResponse, VideoListRequest, VideoListResponse } from '@/types/video'

/** 获取首页视频列表 */
export function getIndexVideoListApi() {
  return request<IndexVideoResponse>({
    url: 'Web/IndexVideo',
    method: 'post',
    cancelToken: cancelTokenSource?.token
  })
}

/** 获取视频列表 */
export function getVideoListApi(data: VideoListRequest) {
  return request<VideoListResponse>({
    url: 'Web/VideoList',
    method: 'post',
    data: data
  })
}

// /** 获取视频详情 */
// export function getVideoDetailApi(id: number) {
//   return request<VideoDetailResponse>({
//     url: `api/video/${id}`,
//     method: 'get'
//   })
// }

// /** 添加用户操作 */
// export function addRecordApi(data: addRecordData) {
//   return request<addRecordDataResp>({
//     url: 'api/addRecord',
//     method: 'post',
//     data
//   })
// }

// /** 获取用户操作记录 */
// export function getRecordApi(params: getRecordData) {
//   return request<VideoListResponse>({
//     url: 'api/getRecords',
//     method: 'get',
//     params
//   })
// }
