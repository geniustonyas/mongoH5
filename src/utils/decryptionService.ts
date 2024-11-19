import axios from 'axios'
import CryptoJS from 'crypto-js'
import md5 from 'crypto-js/md5'

// 定义文件类型
const fileTypes = {
  pic: ['image/jpeg', 'image/jpg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/ico'],
  video: ['video/mp4', 'video/x-flv', 'video/webm', 'video/quicktime'],
  audio: ['audio/mpeg', 'audio/x-wav'],
  app: ['application/octet-stream', 'application/x-msdownload', 'application/x-apple-diskimage', 'application/vnd.android.package-archive'],
  zip: ['application/x-zip-compressed', 'application/x-gzip']
}

class decryptionService {
  private key: string
  private iv: string

  constructor() {
    this.key = 'gFzviOY0zOxVq1cu'
    this.iv = 'ZmA0Osl677UdSrl0'
  }

  async fetchAndDecrypt(url: string): Promise<Blob> {
    try {
      const { mimeType } = this.extractFileInfo(url)
      const base64Data = await this.fetchData(url)
      const byteArray = this.decryptBase64Data(base64Data)
      return new Blob([byteArray], { type: mimeType })
    } catch (error) {
      console.error('解密图片失败:', url, error)
      throw error
    }
  }

  async decryptImageFromUrl(url: string): Promise<Blob> {
    try {
      const { mimeType } = this.extractFileInfo(url)
      const arrayBuffer = await this.fetchData(url, 'arraybuffer')
      const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
      const decryptedContent = this.decryptBase64Data(base64String)
      return new Blob([decryptedContent], { type: mimeType })
    } catch (error) {
      console.error('解密远端图片失败:', error)
      throw error
    }
  }

  private extractFileInfo(url: string): { fileName: string; mimeType: string } {
    const fileName = url.substring(url.lastIndexOf('/') + 1)
    const extension = fileName.includes('.') ? fileName.split('.').pop() : 'jpg'
    const mimeType = this.getMimeType(`.${extension}`)
    return { fileName, mimeType }
  }

  private async fetchData(url: string, responseType: 'text' | 'arraybuffer' = 'text'): Promise<any> {
    const response = await axios.get(url, { responseType })
    return response.data
  }

  private decryptBase64Data(base64Data: string): Uint8Array {
    const parsedKey = CryptoJS.enc.Utf8.parse(this.key)
    const parsedIv = CryptoJS.enc.Utf8.parse(this.iv)
    const decrypted = CryptoJS.AES.decrypt(base64Data, parsedKey, {
      iv: parsedIv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    const decryptedData = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8))
    const byteArray = new Uint8Array(decryptedData.words.map((word) => [(word >> 24) & 0xff, (word >> 16) & 0xff, (word >> 8) & 0xff, word & 0xff]).flat())
    return byteArray
  }

  decryptResponseData(encryptedData: string): string {
    try {
      const key = 'gFzviOY0zOxVq1cu'
      const iv = 'ZmA0Osl677UdSrl0'
      const parsedKey = CryptoJS.enc.Utf8.parse(key)
      const parsedIv = CryptoJS.enc.Utf8.parse(iv)
      const decrypted = CryptoJS.AES.decrypt(encryptedData, parsedKey, {
        iv: parsedIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      return decrypted.toString(CryptoJS.enc.Utf8)
    } catch (error) {
      console.error('解密响应数据失败:', error)
      return ''
    }
  }

  private getMimeType(extension: string): string {
    for (const type in fileTypes) {
      if (fileTypes[type].some((mime) => mime.includes(extension))) {
        return fileTypes[type][0] // 返回第一个匹配的 mimeType
      }
    }
    return 'image/jpeg' // 默认类型
  }
}

export const generateAuthUrl = (domain: string, uri: string, key = 'WZUnX2Avi6WNBN1Gx1a4RH') => {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const temp = `${key}${uri}${timestamp}`
  const sign = md5(temp).toString().toLowerCase()
  return `${domain}${uri}?sign=${sign}&t=${timestamp}`
}

export default decryptionService
