// 推荐游戏列表
export interface recommendGameData {
  id: string | number
  platform: string | number
}

// 搜索游戏
export interface getSearchGameData {
  keywords: string
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

// 获取游戏列表-返回数据cs数据
export interface getGameListItemResp {
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

export type getGameListResp = ApiResponseData<{ cs: getGameListItemResp[]; gs: getGameListGsResp; ps: getGameListItemResp[] }>
export type getRankListResp = ApiResponseData<{ sport: getRankListRespItem[]; casino: getRankListRespItem[]; slots: getRankListRespItem[] }>
