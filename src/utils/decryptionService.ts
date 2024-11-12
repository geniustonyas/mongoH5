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
    // 使用你提供的 AES key 和 IV
    // this.key = 'NHboMHZerxFQ401E'
    // this.iv = 'i7JeCEIMVrj2W9xN'

    this.key = 'gFzviOY0zOxVq1cu'
    this.iv = 'ZmA0Osl677UdSrl0'
  }

  async fetchAndDecrypt(url: string): Promise<string> {
    try {
      // 提取文件名部分
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))
      // 检查文件名中是否包含后缀
      const extension = fileName.includes('.') ? fileName.split('.').pop() : 'jpg'
      // 获取 MIME 类型
      const mimeType = this.getMimeType(`.${extension}`)

      const response = await axios.get(url, { responseType: 'text' }) // 获取文本数据
      const base64Data = response.data
      // 使用类中定义的密钥和偏移量
      const parsedKey = CryptoJS.enc.Utf8.parse(this.key)
      const parsedIv = CryptoJS.enc.Utf8.parse(this.iv)
      const decrypted = CryptoJS.AES.decrypt(base64Data, parsedKey, {
        iv: parsedIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })

      return `data:${mimeType};base64,${decrypted.toString(CryptoJS.enc.Utf8)}`
    } catch (error) {
      console.error('解密图片失败:', url, error)
      return ''
    }
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

  private getMimeType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase()
    for (const type in fileTypes) {
      if (fileTypes[type].some((mime) => mime.includes(extension))) {
        return fileTypes[type][0] // 返回第一个匹配的 mimeType
      }
    }
    return 'image/jpeg' // 默认类型
  }
}

export const generateAuthUrl = (domain: string, uri: string, key = 'WZUnX2Avi6WNBN1Gx1a4RH') => {
  // key 主WZUnX2Avi6WNBN1Gx1a4RH 备V1zDuHmSCVCKO0Xu
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const temp = `${key}${uri}${timestamp}`
  const sign = md5(temp).toString().toLowerCase()
  return `${domain}${uri}?sign=${sign}&t=${timestamp}`
}

export default decryptionService
