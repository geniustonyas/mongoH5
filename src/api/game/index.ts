import { request } from '@/utils/axios'
import type * as Game from './types'

/** 获取搜索推荐列表 */
export function getGameRecommendApi(data: Game.recommendGameData) {
  return request<Game.recommendGameResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'game/SearchRecommended',
    method: 'post',
    data
  })
}

// 游戏搜索
export function getSearchGameApi(data: Game.getSearchGameData) {
  return request<Game.getSearchGameResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'game/search',
    method: 'post',
    data
  })
}

// 获取游戏列表API
export function getGameListApi(data: Game.getGameListData) {
  return request<Game.getGameListResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'game/list',
    method: 'post',
    data
  })
}

// 获取游戏详情
export function getGameDetailsApi(data: Game.getGameDetailsData) {
  return request<Game.getGameDetailsResp>({
    url: 'game/GameDetailInfo',
    method: 'post',
    data
  })
}

// 获取启动游戏url
export function getGameUrlApi(data: Game.getGameUrlData, url: string) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: url,
    method: 'post',
    data
  })
}

// 获取首页排行榜
export function getRankListApi() {
  return request<Game.getRankListResp>({
    url: 'Game/RankingList',
    method: 'post'
  })
}

/** 获取收藏与最近游戏数量 */
export function getFavCountApi() {
  return request<Game.getFavCountData>({
    headers: { 'Content-Type': 'application/json' },
    url: 'game/count',
    method: 'post',
    data: { noLoading: true }
  })
}

/** 收藏游戏列表 */
export function getFavGameListApi(data: Game.getFavRecentlyListData) {
  return request<Game.getFavGameListResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'favorites/list',
    method: 'post',
    data
  })
}

/** 近期游戏列表 */
export function getRecentlyGameApi(data: Game.getFavRecentlyListData) {
  return request<Game.getFavGameListResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'game/recently',
    method: 'post',
    data
  })
}

/** 收藏 */
export function setFavApi(data: Game.getFavData) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'favorites/set',
    method: 'post',
    data
  })
}

/** 取消收藏 */
export function cancalFavApi(data: Game.getFavData) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'favorites/cancel',
    method: 'post',
    data
  })
}

/** 取消收藏 */
export function setGameDefaultCurrency(data: Game.setGameDefaultCurrencyData) {
  return request<anyResp>({
    url: 'game/currency',
    method: 'post',
    data
  })
}
