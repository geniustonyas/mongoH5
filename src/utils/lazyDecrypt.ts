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
    const errorImage = el.getAttribute('error-img') || 'default.gif'

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
        const decryptedUrl = await decrypt.fetchAndDecrypt(appStore.cdnUrl + binding.value)
        if (isImageElement) {
          ;(el as HTMLImageElement).src = decryptedUrl
        } else {
          el.style.backgroundImage = `url(${decryptedUrl})`
        }
      } catch (error) {
        console.error('图片解密失败:', error)
        // 设置解密失败的图片或背景图片
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
