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
  private key: CryptoJS.lib.WordArray
  private iv: CryptoJS.lib.WordArray

  constructor() {
    const keyString = 'gFzviOY0zOxVq1cu'
    const ivString = 'ZmA0Osl677UdSrl0'
    this.key = CryptoJS.enc.Utf8.parse(keyString)
    this.iv = CryptoJS.enc.Utf8.parse(ivString)
  }

  async fetchAndDecrypt(url: string): Promise<Blob> {
    try {
      const { mimeType } = this.extractFileInfo(url)
      const response = await axios.get(url, { responseType: 'arraybuffer' })
      const arrayBuffer = response.data

      // 尝试将 ArrayBuffer 转换为字符串
      const textDecoder = new TextDecoder('utf-8')
      const decodedString = textDecoder.decode(arrayBuffer)

      let decryptedContent: Uint8Array

      if (this.isBase64(decodedString)) {
        // 如果是 Base64 编码，直接解密
        decryptedContent = this.decryptBase64Data(decodedString)
      } else {
        // 如果是二进制字节，先转换为 Base64 再解密
        const base64Data = this.arrayBufferToBase64(arrayBuffer)
        decryptedContent = this.decryptBase64Data(base64Data)
      }

      // 返回解密后的 Blob
      return new Blob([decryptedContent], { type: mimeType })
    } catch (error) {
      console.error('解密数据失败:', error)
      throw error
    }
  }

  private extractFileInfo(url: string): { fileName: string; mimeType: string } {
    const fileName = url.substring(url.lastIndexOf('/') + 1)
    const extension = fileName.includes('.') ? fileName.split('.').pop() : 'jpg'
    const mimeType = this.getMimeType(`.${extension}`)
    return { fileName, mimeType }
  }

  private decryptBase64Data(base64Data: string): Uint8Array {
    const decrypted = CryptoJS.AES.decrypt(base64Data, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    const decryptedData = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8))
    const byteArray = new Uint8Array(decryptedData.words.map((word) => [(word >> 24) & 0xff, (word >> 16) & 0xff, (word >> 8) & 0xff, word & 0xff]).flat())
    return byteArray
  }

  decryptResponseData(encryptedData: string): string {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedData, this.key, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      return decrypted.toString(CryptoJS.enc.Utf8)
    } catch (error) {
      console.error('解密响应数据失败:', error)
      return ''
    }
  }

  encryptData(data: string): string {
    try {
      const encrypted = CryptoJS.AES.encrypt(data, this.key, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      return encrypted.toString()
    } catch (error) {
      console.error('加密数据失败:', error)
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

  private isBase64(str: string): boolean {
    try {
      return btoa(atob(str)) === str
    } catch (err) {
      return false
    }
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }
}

export const generateAuthUrl = (domain: string, uri: string, key = 'wB760Vqpk76oRSVA1TNz') => {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const temp = `${key}/${uri}${timestamp}`
  const sign = md5(temp).toString().toLowerCase()
  const baseUrl = uri.includes('http') ? uri : domain + uri
  return `${baseUrl}?sign=${sign}&t=${timestamp}`
}
export default decryptionService
