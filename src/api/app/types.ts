export interface getAnnouncementListData {
  PageIndex: string | number
  PageSize: string | number
}

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
