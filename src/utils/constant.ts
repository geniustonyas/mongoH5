// 主頁菜单枚举
export enum HOME_ACTIVE_MENU {
  'discover' = 'discover',
  'shortVideo' = 'shortVideo',
  'pictures' = 'disclose',
  'shortDrama' = 'shortDrama',
  'novel' = 'novel',
  'commic' = 'commic'
}

export enum SearchType {
  Video = 1,
  ShortVideo = 2,
  ShortMovie = 3,
  BBS = 4,
  Novel = 5,
  Comics = 6,
  Tea = 7,
  Audiobook = 8,
  VideoActor = 9,
  ShortMovieActor = 10,
  BBSModel = 11,
  Collections = 12
}

export const SearchTypeMapping = {
  [SearchType.Video]: '视频榜',
  [SearchType.ShortVideo]: '短视频榜',
  [SearchType.BBS]: '社区榜',
  [SearchType.ShortMovie]: '短剧榜',
  [SearchType.Novel]: '小说榜',
  [SearchType.Comics]: '漫画榜',
  [SearchType.Audiobook]: '有声书榜'
  // [SearchType.Tea]: '茶榜',
  // [SearchType.VideoActor]: '视频演员榜',
  // [SearchType.ShortMovieActor]: '短剧演员榜',
  // [SearchType.BBSModel]: '模特榜',
  // [SearchType.Collections]: '收藏夹榜'
}
