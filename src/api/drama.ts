import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import { Bbs, DramaDetailRequestParams, DramaDetailResponse, DramaListRequestParams, DramaListResponse } from '@/types/drama'

// 获取视频首页列表
export function getDramaList(params: DramaListRequestParams) {
  return request<ApiResponseData<DramaListResponse>>({
    url: 'ShortMovie/ShortMovieList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取剧集详情
export function getDramaDetail(params: DramaDetailRequestParams) {
  return request<ApiResponseData<DramaDetailResponse>>({
    url: 'ShortMovie/ShortMovieDetail',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 获取短剧收藏列表 */
export function getDramaCollectList(params: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<DramaListResponse>>({
    url: 'ShortMovie/CollectList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 收藏短剧 */
export function addDramaToCollection(params: { Id: string; Collect: boolean; VideoId: string; Ids: string }) {
  return request<ApiResponseData<DramaListResponse>>({
    url: 'ShortMovie/Collect',
    method: 'post',
    headers: {
      'X-Should-Encrypt': '1'
    },
    data: params
  })
}

/** 获取短剧分类列表 */
export function getDramaCategoryList(params: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData>({
    url: 'ShortMovie/Channel',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 获取猜你喜欢短剧列表 */
export function getGuessYouLikeDramaList(params: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<DramaListResponse>>({
    url: 'ShortMovie/GuessShortMovieList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 给短剧点赞 */
export function addDramaLike(params: { Id: string | number; Like: string | number }) {
  return request<ApiResponseData>({
    url: 'ShortMovie/Like',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

/** 获取短剧评论列表 */
export function getDramaCommentList(params: { Id: string | number; PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<Bbs>>({
    url: 'BBS/PostDetail',
    method: 'post',
    data: params
  })
}

/** 播放回调 */
export function addDramaPlayCallback(params: { ShortMovieId: string | number; VideoId: string | number }) {
  return request<ApiResponseData>({
    url: 'ShortMovie/PlayVideo',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
