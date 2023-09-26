// 首页跑马灯请求参数
export interface getAnnouncementListData {
  PageIndex: string | number
  PageSize: string | number
}

// 首页banner返回数据项
export interface getBannerRespItem {
  id: string
  imageName: string
  positionCode: string
  targetUrl: string
}

// 跑马灯列表
export interface getAnnouncementListItem {
  title: string
  content: string
}

// 获取跑马灯返回数据
export type getAnnouncementListResp = ApiResponseData<{
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
  items: getAnnouncementListItem[]
}>

export type getBannerData = {
  PositionCode?: string
  platform: number
}

// 首页排行榜数据
export type getBannerResp = ApiResponseData<getBannerRespItem[]>
export type getRemindResp = ApiResponseData<{ vipCode: string }>
