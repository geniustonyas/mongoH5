import CryptoJS from 'crypto-js'
import {EN_DC_KEY as KEY, EN_DC_IV as IV} from './encrypt'
import Tasker from './Tasker'

const tasker = new Tasker({
  maxRetry: 0
})

// 加密文件头部识别码，用于判断文件是否已加密
export const HEADCODE = 'mogo!'

// 匹配 mimeType
export const fileTypes = {
  'pic': ['image/jpeg', 'image/jpg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/ico'],
  'video': ['video/mp4', 'video/x-flv', 'video/webm', 'video/quicktime'],
  'audio': ['audio/mpeg', 'audio/x-wav'],
  'app': ['application/octet-stream', 'application/x-msdownload', 'application/x-apple-diskimage', 'application/vnd.android.package-archive'],
  'zip': ['application/x-zip-compressed', 'application/x-gzip'],
}

export const findFileType = minetype => {
  for (const key in fileTypes) {
    if (fileTypes[key].includes(minetype)) return key
  }
}

/**
 * 获取头部识别码
 * @param {*} arrBuffer 文件内容
 * @param {Number} bytesToRead 偏移量
 * @returns {String} 头部识别码
 */
export const getFileHeader = (arrBuffer, bytesToRead) => {
  const u8arr = new Uint8Array(arrBuffer, 0, bytesToRead)
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(u8arr)
}

export const getImageInfo = (file) => {
  return new Promise(resolve => {
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
        ratio: image.width / image.height
      })
    }
  })
}

// wordArray转Uint8Array
export const word2u8Array = function (wordArray) {
  var words = wordArray.words
  var sigBytes = wordArray.sigBytes
  var u8 = new Uint8Array(sigBytes)
  for (var i = 0; i < sigBytes; i++) {
    var byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
    u8[i] = byte
  }
  return u8
}

/**
 * Uint8Array文件AES解密
 * @param {Uint8Array} u8arr 
 * @param {String} key 16位字节密匙
 * @returns {Uint8Array}
 */
export const decryptU8arr = (u8arr, key, iv) => {
  key = CryptoJS.enc.Utf8.parse(key||KEY)
  iv = CryptoJS.enc.Utf8.parse(iv||IV)
  const wordArray = CryptoJS.lib.WordArray.create(u8arr)
  const dcBase64String = wordArray.toString(CryptoJS.enc.Base64)
  const decrypt = CryptoJS.AES.decrypt(dcBase64String, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  return word2u8Array(decrypt)
}

/**
 * 文件解密
 * @param {File} file 加密文件
 * @param {String} key 16位字节密匙
 * @param {Boolean} withU8Arr 是否返回Uint8Array格式文件，默认返回blob二进制文件
 * @returns {Uint8Array|Blob}
 */
export const decryptFile = ({file, key, iv, headCode, withU8Arr=false}) => {
  headCode = headCode || HEADCODE
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const fileContent = new Uint8Array(reader.result)
      const decryptedContent = decryptU8arr(fileContent, key, iv)
      if (withU8Arr) {
        resolve(decryptedContent)
      } else {
        file = new Blob([decryptedContent], { type: file.type })
        resolve(file)
      }
    }
    reader.onerror = reject
  })
}

export const decodePicture = ({url, key, iv, headCode, fileName}) => {
  return tasker.add(async () => {
    const fileRes = await fetch(url).catch(e => console.error('Decode picture failed:', e))
    if (!fileRes || fileRes.status >= 400) return
    const blob = await fileRes.blob()
    const decryptBlob = await decryptFile({
      file: blob,
      key,
      iv,
      headCode,
    })
    const blobUrl = URL.createObjectURL(new File([decryptBlob], fileName||url.split('/').pop(), {}))
    return blobUrl
  })
}