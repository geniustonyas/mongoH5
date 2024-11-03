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

// AES解密
const decryptU8arr = (u8arr: Uint8Array, key: string, iv: string): Uint8Array => {
  const parsedKey = CryptoJS.enc.Utf8.parse(key)
  const parsedIv = CryptoJS.enc.Utf8.parse(iv)
  const wordArray = CryptoJS.lib.WordArray.create(u8arr)
  const dcBase64String = wordArray.toString(CryptoJS.enc.Base64)
  const decrypt = CryptoJS.AES.decrypt(dcBase64String, parsedKey, {
    iv: parsedIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return word2u8Array(decrypt)
}

// wordArray转Uint8Array
const word2u8Array = (wordArray: CryptoJS.lib.WordArray): Uint8Array => {
  const words = wordArray.words
  const sigBytes = wordArray.sigBytes
  const u8 = new Uint8Array(sigBytes)
  for (let i = 0; i < sigBytes; i++) {
    const byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
    u8[i] = byte
  }
  return u8
}

class decryptionService {
  private key: string
  private iv: string

  constructor() {
    // 使用你提供的 AES key 和 IV
    this.key = 'NHboMHZerxFQ401E'
    this.iv = 'i7JeCEIMVrj2W9xN'
  }

  async fetchAndDecrypt(url: string): Promise<string> {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' })
      const encryptedData = new Uint8Array(response.data)

      // 解密数据
      const decryptedData = decryptU8arr(encryptedData, this.key, this.iv)

      // 获取文件类型
      const mimeType = this.getMimeType(url)
      const base64Data = CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.create(decryptedData))

      return `data:${mimeType};base64,${base64Data}`
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
      const decryptedString = decrypted.toString(CryptoJS.enc.Utf8)
      return decryptedString
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
    return 'application/octet-stream' // 默认类型
  }
}

export const generateAuthUrl = (domain: string, uri: string, key = '7x3qBibrQR1Jobw2FGr') => {
  // key 主7x3qBibrQR1Jobw2FGr 备kTv4kHZwx
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const temp = `${key}${uri}${timestamp}`
  const sign = md5(temp).toString().toLowerCase()
  return `${domain}${uri}?sign=${sign}&t=${timestamp}`
}

export default decryptionService
