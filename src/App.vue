<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['longVideo', 'bbs', 'videoList']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <Login />
  <FloatingBubble
    v-if="showBubble && floatAdvertisement.length > 0"
    v-model:offset="offset"
    axis="xy"
    magnetic="x"
    class="float-ad"
    :gap="0"
  >
    <img
      v-for="ad in floatAdvertisement"
      :key="ad.id"
      :src="ad.imgUrl"
      alt="广告图片"
      @click.stop="openAd(ad.targetUrl, '首页浮动广告', 'click', ad.id)"
    />
    <div class="fs-t" @click.stop="handleFloatAdvertisementClose">
      <span><i class="mvfont mv-close" /></span>
    </div>
  </FloatingBubble>
  <DownloadPop />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Login from '@/components/login.vue'
  import DownloadPop from '@/components/DownloadPop.vue'

  import { useAppStore } from '@/store/app'
  import { FloatingBubble } from 'vant'
  import { openAd } from '@/utils'
  import decryptionService from '@/utils/decryptionService'
  import { useCommicCategoryStore } from '@/store/commicCategory'
  import { useNovelCategoryStore } from '@/store/novelCategory'
  import { useDramaCategoryStore } from './store/dramaCategory'

  const offset = ref({ x: 0, y: 100 })
  const appStore = useAppStore()
  const currentRoute = useRoute()
  const decrypted = new decryptionService()
  const commicCategoryStore = useCommicCategoryStore()
  const novelCategoryStore = useNovelCategoryStore()
  const dramaCategoryStore = useDramaCategoryStore()

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
      tmp.map(async ad => {
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

  let lastPingTime = 0
  const pingInterval = 1000 // 1秒

  function sendPing() {
    const currentTime = Date.now()
    if (currentTime - lastPingTime > pingInterval) {
      // @ts-ignore
      if (window._paq) {
        // @ts-ignore
        window._paq.push(['ping'])
      }
      lastPingTime = currentTime
    }
  }

  onMounted(async () => {
    // 初始化漫画分类数据
    await commicCategoryStore.fetchCommicCategory()
    await novelCategoryStore.fetchNovelCategory()
    await dramaCategoryStore.fetchDramaCategory()
    decryptAdvertisements()

    // 计算偏移量
    const bubbleWidth = 130 // 浮动元素的宽度
    const rightMargin = 0 // 距离右侧的距离
    offset.value.x = window.innerWidth - bubbleWidth - rightMargin

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendPing()
      }
    })

    window.addEventListener('pagehide', sendPing)
    window.addEventListener('beforeunload', sendPing)
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
