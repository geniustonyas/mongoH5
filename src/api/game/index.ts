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
