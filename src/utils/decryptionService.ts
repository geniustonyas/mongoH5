import axios from 'axios'
import CryptoJS from 'crypto-js'

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
      console.error('Error fetching or decrypting data for URL:', url, error)
      // 返回一个默认值或空字符串以继续处理后续图片
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

export default decryptionService
