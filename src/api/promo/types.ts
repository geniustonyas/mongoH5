// 首页banner返回数据项
export interface getPromoData {
  Categorys: string
}
// 获取优惠活动列表返回数据项
export interface getPromoRespItem {
  id: string
  image: string
  intro: string
  title: string
}

// 首页banner返回数据项
export interface getPromoDetailsData {
  Id: string
}

// 首页排行榜数据
export type getPromoResp = ApiResponseData<getPromoRespItem[]>
export type getPromoDetailsResp = ApiResponseData<{ image: string; title: string; content: string; intro: string }>
