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

export interface SpareData {
  Email: string
  Domains: string[]
  TG: string
  QR: string
}

export interface AdsPostion {
  id: string
  items: AdsItem[]
  title: string
}

export interface SmsParams {
  phone: string
  type: string
}
