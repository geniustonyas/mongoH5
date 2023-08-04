// 推荐游戏列表
export interface recommendGameData {
  id: string | number
  platform: string | number
}
export interface recommendGameRespItem {
  id: string
  gameItemId: string
  gameItemCode: string
  gameName: string
  recordStatus: number
  sortNo: string
  categoryId: string
  categoryName: string
  providerId: 1
  providerCode: string
  providerName: string
  imageName: string
}

// 搜索游戏
export interface getSearchGameData {
  Keywords: string
}

// 获取游戏列表
export interface getGameListData {
  ps: number[]
  cs: number[]
  gts: number[]
  ct: number
  sortBy: number
  page: number
}

// 推荐游戏列表
export interface getGameUrlData {
  id: string | number
  platform: string | number
}

// 获取游戏列表返回数据
export interface getGameListRespItem {
  count: string
  id: string
  name: string
}

// 获取游戏列表-返回数据cs数据
export interface getGameListGsResp {
  count: string
  items: getGameListGsItemResp[]
  page: string
  pages: string
  size: string
}

// 获取游戏列表-返回数据cs数据
export interface getGameListGsItemResp {
  id: string
  cid: string
  name: string
  type: number
  pid: string
  pn: string
  min: string
  max: string
  img: string
  rtp: string
  f: boolean
}

// 获取排行榜返回数据项
export interface getRankListRespItem {
  roundId: string
  orderId: string
  memberuserName: string
  gameName: string
  betTime: string
  winAmount: string
  gameType: number
  betAmount: string
  winRate: string
  providerId: string
  providerCode: string
  gameCode: string
}

// 游戏搜索返回数据项
export interface getSearchGameRespItem {
  id: string
  name: string
  pname: string
  img: string
  rtp: string
  f: boolean
}

export type recommendGameResp = ApiResponseData<recommendGameRespItem[]>
export type getGameListResp = ApiResponseData<{ cs: getGameListRespItem[]; gs: getGameListGsResp; ps: getGameListRespItem[] }>
export type getRankListResp = ApiResponseData<{ sport: getRankListRespItem[]; casino: getRankListRespItem[]; slots: getRankListRespItem[] }>
export type getSearchGameResp = ApiResponseData<{ count: string; items: getSearchGameRespItem[] }>
