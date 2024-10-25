import request, { cancelTokenSource } from '@/utils/axios'
import type { IndexVideoResponse, VideoListRequest, VideoListResponse, VideoDetailResponse, addRecordData, addRecordDataResp, getRecordData } from '@/types/video'
import type { ApiResponseData } from '@/types/api.d'

/** 获取首页视频列表 */
export function getIndexVideoListApi() {
  return request<ApiResponseData<IndexVideoResponse>>({
    url: 'Web/IndexVideo',
    method: 'post',
    cancelToken: cancelTokenSource?.token
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

/** 获取视频榜单   */
export function getVideoRankApi(data: VideoListRequest) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'Web/VideoRankList',
    method: 'post',
    data
  })
}

/** 添加用户操作 */
export function addRecordApi(data: addRecordData) {
  return request<ApiResponseData<addRecordDataResp>>({
    url: 'api/addRecord',
    method: 'post',
    data
  })
}

/** 获取用户操作记录 */
export function getRecordApi(params: getRecordData) {
  return request<ApiResponseData<VideoListResponse>>({
    url: 'api/getRecords',
    method: 'get',
    params
  })
}
