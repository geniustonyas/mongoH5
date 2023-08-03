// 兑换商品
export type exhangeGoodsData = {
  Id: string
}

export interface getIntegralRecordData {
  AdjustType: string | number
  PageIndex: string | number
  PageSize: string | number
  noLoading?: boolean
}

export interface getGoodsListItem {
  id: string
  price: string
  images: string
  amount: string
  productType: number
  currencyCode: string
  name: string
  intro: string
  description: string
}

export interface getIntegralRecordItem {
  id: string
  createTime: string
  adjustType: number
  category: number
  amount: string
  afterAmount: string
}

export interface getIntegralVipItem {
  name: string
  code: string
  sortNo: string
  integral: string
  cssClass: string
}

export type getIntegralRecordResp = ApiResponseData<{ items: getIntegralRecordItem[]; pageIndex: string; pageSize: string; pageCount: string; recordCount: string }>
export type getGoodsListResp = ApiResponseData<getGoodsListItem[]>
export type getIntegralVipResp = ApiResponseData<getIntegralVipItem[]>
