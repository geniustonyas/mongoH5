<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['index', 'bbs', 'videoList']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <Login />
  <FloatingBubble v-if="showBubble && floatAdvertisement.length > 0" v-model:offset="offset" axis="xy" magnetic="x" class="float-ad" :gap="0">
    <img v-for="ad in floatAdvertisement" :key="ad.id" :src="ad.imgUrl" alt="广告图片" @click.stop="openAd(ad.targetUrl, '首页浮动广告', 'click', ad.id)" />
    <div class="fs-t" @click.stop="handleFloatAdvertisementClose">
      <span><i class="mvfont mv-close" /></span>
    </div>
  </FloatingBubble>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Login from '@/components/Login.vue'
import { useAppStore } from '@/store/app'
import { FloatingBubble } from 'vant'
import { openAd } from '@/utils'
import decryptionService from '@/utils/decryptionService'

const offset = ref({ x: 0, y: 100 })
const appStore = useAppStore()
const currentRoute = useRoute()
const decrypted = new decryptionService()

const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}
window.addEventListener('touchmove', () => {
  appStore.isUserBackNavigation = true
  setTimeout(() => {
    appStore.isUserBackNavigation = false
  }, 400)
})

const floatAdvertisement = ref([])
const decryptAdvertisements = async () => {
  const tmp = appStore.getAdvertisementById(15).items || []
  floatAdvertisement.value = await Promise.all(
    tmp.map(async (ad) => {
      if (ad.imgUrl) {
        const tmp = await decrypted.fetchAndDecrypt(appStore.cdnUrl + ad.imgUrl)
        ad.imgUrl = URL.createObjectURL(tmp)
      }
      return ad
    })
  )
}
const showBubble = ref(true)

const handleFloatAdvertisementClose = () => {
  showBubble.value = false
}

const nu = currentRoute.query.nu
if (nu) {
  localStorage.setItem('nu', nu as string)
}

// 检测 H265 支持（兼容性写法）
// async function checkH265Support() {
//   // 检查是否已统计过
//   const hasTracked = localStorage.getItem('h265_support_tracked')
//   if (hasTracked) return

//   let isSupported = false
//   let method = 'unknown'

//   try {
//     // 优先使用 MediaCapabilities API
//     if ('mediaCapabilities' in navigator) {
//       const mediaConfig = {
//         type: 'media-source',
//         video: {
//           contentType: 'video/mp4; codecs="hev1"',
//           width: 1920,
//           height: 1080,
//           bitrate: 2000000,
//           framerate: 30
//         }
//       }
//       try {
//         // @ts-ignore
//         const result = await navigator.mediaCapabilities.decodingInfo(mediaConfig)
//         console.log(result)
//         isSupported = result.supported
//         method = 'mediaCapabilities'
//       } catch {
//         // 如果新 API 失败，回退到 canPlayType
//         const video = document.createElement('video')
//         const canPlay = video.canPlayType('video/mp4; codecs="hev1"')
//         isSupported = canPlay !== ''
//         method = 'canPlayType'
//       }
//     } else {
//       const video = document.createElement('video')
//       const canPlay = video.canPlayType('video/mp4; codecs="hev1"')
//       isSupported = canPlay !== ''
//       method = 'canPlayType'
//     }

//     // CNZZ 统计
//     // @ts-ignore
//     if (window._czc) {
//       // @ts-ignore
//       window._czc.push(['_trackEvent', 'H265Support', method, isSupported ? 'supported' : 'not-supported', isSupported ? 1 : 0])
//     }

//     localStorage.setItem('h265_support_tracked', 'true')
//     return isSupported
//   } catch (error) {
//     console.log('H265 check error:', error)
//     // @ts-ignore
//     if (window._czc) {
//       // @ts-ignore
//       window._czc.push(['_trackEvent', 'H265Support', 'error', String(error), 0])
//     }
//     localStorage.setItem('h265_support_tracked', 'true')
//     return false
//   }
// }

onMounted(() => {
  decryptAdvertisements()
  // const script = document.createElement('script')
  // script.src = '/stat.js'
  // script.async = true
  // document.body.appendChild(script)

  // 计算偏移量
  const bubbleWidth = 130 // 浮动元素的宽度
  const rightMargin = 0 // 距离右侧的距离
  offset.value.x = window.innerWidth - bubbleWidth - rightMargin

  // checkH265Support()
})
</script>

<style>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  transition: transform 400ms ease-in-out;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
  /* display: none; */
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(-100%);
}
</style>
