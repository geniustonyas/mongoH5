export interface ThemeResponse {
  id: string
  title: string
  targetUrl?: string | number
  items?: ThemeResponse[]
  videosCount?: number | string
}

export interface ActorListRequest {
  PageIndex: number
  PageSize: number
  CategoryId: number | string
  SortType: number | string
}
export interface ActorListResponse {
  items: ActorList[]
  pageCount: number
  pageIndex: number
  pageSize: number
  recordCount: number
}

export interface ActorList {
  id: string | number
  title: string
  imgUrl: string
  categoryNames: string
  videosCount: string
}

export interface Actor {
  id: string
  title: string
  categoryIds: string
  categoryNames: string
  imgUrl: string
  height: string
  birthday: string
  chest: string
  hip: string
  formerName: string
  waist: string
}
