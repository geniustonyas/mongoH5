export interface Category {
  cId: number
  name: string
}

export enum AdvertisementType {
  Image = 1,
  Video = 2,
  Text = 3
}

export interface AdsItem {
  andoridDownloadUrl: string
  downloadCount: string
  id: string
  imgUrl: string
  introduction: string
  iosDownLoadUrl: string
  targetUrl: string
  title: string
}

export interface AdsPostion {
  id: string
  items: AdsItem[]
  title: string
}
