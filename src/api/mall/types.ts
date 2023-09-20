// 兑换商品
export type exhangeGoodsData = {
  Id: string
  AirTicketOrder?: {
    Name: string
    Sex: string
    DocumentType: string
    DocumentNumber: string
    AirlineCompany: string
    PlaceOfDeparture: string
    Destination: string
    OnewayOrRoundtrip: string
    EngineroomType: string
    Otherservices: string
    StartTime: string
    EndTime: string
  }
  GroggeryOrder?: {
    Name: string
    Sex: string
    HotelName: string
    HotelCountry: string
    TheCityRegion: string
    RoomType: string
    NumberOfRooms: string
    NumberOfDaysRequired: string
    OtherServices: string
    StartTime: string
    EndTime: string
  }
}

// 获取积分记录
export interface getIntegralRecordData {
  AdjustType: string | number
  PageIndex: string | number
  PageSize: string | number
  noLoading?: boolean
}

// 商品列表数组
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

// 积分记录item
export interface getIntegralRecordItem {
  id: string
  createTime: string
  adjustType: number
  category: number
  amount: string
  afterAmount: string
}

// 积分商城顶部vip列表
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
