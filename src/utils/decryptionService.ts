import axios from 'axios'
import CryptoJS from 'crypto-js'

class decryptionService {
  private key: CryptoJS.lib.WordArray
  private iv: CryptoJS.lib.WordArray

  constructor() {
    // 使用你提供的 AES key 和 IV
    this.key = CryptoJS.enc.Utf8.parse('NHboMHZerxFQ401E')
    this.iv = CryptoJS.enc.Utf8.parse('i7JeCEIMVrj2W9xN')
  }

  async fetchAndDecrypt(url: string): Promise<string> {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' })
      const encryptedData = response.data

      const decrypted = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.lib.WordArray.create(encryptedData) }, this.key, { iv: this.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })

      // 将解密后的数据转换为 Base64
      const base64Data = CryptoJS.enc.Base64.stringify(decrypted)

      return `data:image/jpeg;base64,${base64Data}` // 假设图片格式为 JPEG
    } catch (error) {
      console.error('Error fetching or decrypting data:', error)
      throw error
    }
  }
}

export default decryptionService
