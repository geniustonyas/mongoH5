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
  gameType: number
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

export interface getGameDetailsData {
  Id: string
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
  fg: boolean
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
  gameId: string
}

// 游戏搜索返回数据项
export interface getSearchGameRespItem {
  id: string
  name: string
  pname: string
  img: string
  rtp: string
  f: boolean
  type: string
}

export interface getGameDetailsRespGameItem {
  name: string
  id: string
  fg: boolean
  gameType: string
  providerCode: string
  providerId: string
  providerName: string
  defaultRTPName: string
  volatility: string
  lines: string
  minBetAmount: string
  maxBetAmount: string
  imageName: string
}

export interface getGameDetailsRespItem {
  defaultRTPName: string
  volatility: string
  lines: string
  minBetAmount: string
  maxBetAmount: string
  gameType: string
  providerCode: string
  providerId: string
  providerName: string
  name: string
  id: string
  imageName: string
  game: getGameDetailsRespGameItem[]
  hitRatio: string
  paylines: string
  fg: boolean
}

export interface getFavRecentlyListData {
  page: number
  pcount: number
}

export interface getFavData {
  gameId: string
}

// 收藏列表返回数据项
export interface getFavGameListRespItem {
  id: string
  fg: boolean
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
  time: string
}

export type recommendGameResp = ApiResponseData<recommendGameRespItem[]>
export type getGameListResp = ApiResponseData<{ cs: getGameListRespItem[]; gs: getGameListGsResp; ps: getGameListRespItem[] }>
export type getRankListResp = ApiResponseData<{ sport: getRankListRespItem[]; casino: getRankListRespItem[]; slots: getRankListRespItem[] }>
export type getSearchGameResp = ApiResponseData<{ count: string; items: getSearchGameRespItem[] }>
export type getGameDetailsResp = ApiResponseData<getGameDetailsRespItem>
export type getFavCountData = ApiResponseData<{ favoritesCount: string; recentlyPlayCount: string }>
export type getFavGameListResp = ApiResponseData<{ count: string; items: getFavGameListRespItem[]; page: string; pages: string; size: string }>
