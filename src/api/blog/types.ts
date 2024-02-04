// 获取博客列表 和 置顶博客数据
export interface getBlogItemResp {
  title: string
  intro: string
  id: number
  coverImage: string
  blogType: number
  createTime: string
}

// 博客列表请求参数
export interface getBlogListData {
  BlogType: number | string | null
  PageIndex: number
  PageSize: number
}

// 博客详情请求参数
export interface getBlogDetailsData {
  Id: string
}

// 博客列表和博客详情返回数据
export type getBlogListResp = ApiResponseData<{ items: getBlogItemResp[]; pageIndex: number; pageSize: string; pageCount: string; recordCount: number }>
export type getBlogPinResp = ApiResponseData<getBlogItemResp>
export type getBlogDetailsResp = ApiResponseData<{ title: string; intro: string; content: string; id: number; coverImage: string; blogType: number; createTime: string; hotBlogs: getBlogItemResp[] }>
