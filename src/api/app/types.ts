export interface getAnnouncementListData {
  PageIndex: string | number
  PageSize: string | number
}

// banner图和下面的图
export interface getBannerData {
  PositionCode: string
}

export interface getBannerRespItem {
  id: string
  imageName: string
  positionCode: string
  targetUrl: string
}

// 跑马灯列表
export interface getAnnouncementListItemResp {
  title: string
  content: string
}

// 获取跑马灯返回数据
export type getAnnouncementListResp = ApiResponseData<{
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
  items: getAnnouncementListItemResp[]
}>
export type getBannerResp = ApiResponseData<getBannerRespItem[]>
