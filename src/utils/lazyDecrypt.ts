// src/directives/lazyDecrypt.ts
import { DirectiveBinding } from 'vue'
import { getAssetsFile } from '@/utils'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'

const appStore = useAppStoreHook()
const decrypt = new decryptionService()

// 提取加载图片的逻辑
const loadImage = async (el: HTMLElement, binding: DirectiveBinding, isImageElement: boolean) => {
  try {
    const blob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + binding.value)
    if (!(blob instanceof Blob)) {
      throw new Error('解密后的数据不是有效的 Blob 对象')
    }

    const blobUrl = URL.createObjectURL(blob)
    el.dataset.blobUrl = blobUrl

    if (isImageElement) {
      ;(el as HTMLImageElement).src = blobUrl
    } else {
      el.style.backgroundImage = `url(${blobUrl})`
    }
  } catch (error) {
    console.error('图片解密失败:', error)
    const errorImage = el.getAttribute('error-img') || 'default2.gif'
    if (isImageElement) {
      ;(el as HTMLImageElement).src = getAssetsFile(errorImage)
    } else {
      el.style.backgroundImage = `url(${getAssetsFile(errorImage)})`
    }
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const defaultImage = el.getAttribute('loading-img') || 'default.gif'
    const isImageElement = el.tagName.toLowerCase() === 'img'

    if (isImageElement) {
      ;(el as HTMLImageElement).src = getAssetsFile(defaultImage)
    } else {
      el.style.backgroundImage = `url(${getAssetsFile(defaultImage)})`
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage(el, binding, isImageElement)
            observer.unobserve(el)
          }
        })
      },
      {
        rootMargin: '100px'
      }
    )

    observer.observe(el)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (el.dataset.blobUrl) {
      URL.revokeObjectURL(el.dataset.blobUrl)
      el.dataset.blobUrl = null
    }
    const isImageElement = el.tagName.toLowerCase() === 'img'
    loadImage(el, binding, isImageElement)
  },
  unmounted(el: HTMLElement) {
    if (el.dataset.blobUrl) {
      URL.revokeObjectURL(el.dataset.blobUrl)
      el.dataset.blobUrl = null
    }
  }
}
