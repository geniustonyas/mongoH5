export interface SearchRankResult {
  id: string
  channelId: string
  channelName: string
  coverImg: string
  bbsImg: string[]
  likeCount: string
  others?: object
  searchType: number
  title: string
  viewCount: string
}

export interface SearchRankBySearchType {
  searchType: number
  searchResult: SearchRankByChannel
}

export interface SearchRankByChannel {
  channelId: string
  searchResult: SearchRankResult[]
}
