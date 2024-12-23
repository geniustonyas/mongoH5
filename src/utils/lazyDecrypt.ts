// src/directives/lazyDecrypt.ts
import { DirectiveBinding } from 'vue'
import { getAssetsFile } from '@/utils'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'

const appStore = useAppStoreHook()
const decrypt = new decryptionService()

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 获取自定义属性或使用默认值
    const defaultImage = el.getAttribute('loading-img') || 'default.gif'
    const errorImage = el.getAttribute('error-img') || defaultImage || 'default2.gif'

    // 判断是图片还是背景图
    const isImageElement = el.tagName.toLowerCase() === 'img'

    // 设置默认图片或背景图片
    if (isImageElement) {
      ;(el as HTMLImageElement).src = getAssetsFile(defaultImage)
    } else {
      el.style.backgroundImage = `url(${getAssetsFile(defaultImage)})`
    }

    const loadImage = async () => {
      try {
        const blob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + binding.value)
        // 检查 blob 是否是一个有效的 Blob 对象
        if (!(blob instanceof Blob)) {
          throw new Error('解密后的数据不是有效的 Blob 对象')
        }

        const blobUrl = URL.createObjectURL(blob)

        if (isImageElement) {
          ;(el as HTMLImageElement).src = blobUrl
        } else {
          el.style.backgroundImage = `url(${blobUrl})`
        }

        // 通知图片解密完成
        el.dispatchEvent(new Event('load'))
      } catch (error) {
        console.error('图片解密失败:', error)
        if (isImageElement) {
          ;(el as HTMLImageElement).src = getAssetsFile(errorImage)
        } else {
          el.style.backgroundImage = `url(${getAssetsFile(errorImage)})`
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(el)
          }
        })
      },
      {
        rootMargin: '100px' // 指定距离视口100px时开始加载
      }
    )

    observer.observe(el)
  }
}
