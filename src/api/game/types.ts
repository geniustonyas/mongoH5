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
  keywords: string
}

// 推荐游戏列表
export interface getGameUrlData {
  id: string | number
  platform: string | number
}
