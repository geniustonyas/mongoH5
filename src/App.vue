<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['index', 'bbs', 'videoList']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <Login />
  <FloatingBubble v-if="showBubble && floatAdvertisement.length > 0" v-model:offset="offset" axis="xy" magnetic="x" class="float-ad">
    <img v-for="ad in floatAdvertisement" :key="ad.id" v-lazy-decrypt="ad.imgUrl" alt="广告图片" @click.stop="openAd(ad.targetUrl, '首页浮动广告', 'click', ad.id)" />
    <i class="mvfont mv-close" @click.stop="handleFloatAdvertisementClose" />
  </FloatingBubble>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Login from '@/components/Login.vue'
import { useAppStore } from '@/store/app'
import { FloatingBubble } from 'vant'
import { openAd } from '@/utils'

const offset = ref({ x: 0, y: 100 })
const appStore = useAppStore()
const route = useRoute()

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

const floatAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(15).items
  return tmp || []
})
const showBubble = ref(true)

const handleFloatAdvertisementClose = () => {
  showBubble.value = false
}

const nu = route.query.nu
if (nu) {
  localStorage.setItem('nu', nu as string)
}

onMounted(() => {
  // const script = document.createElement('script')
  // script.src = '/stat.js'
  // script.async = true
  // document.body.appendChild(script)

  // 计算偏移量
  const bubbleWidth = 80 // 浮动元素的宽度
  const rightMargin = 10 // 距离右侧的距离
  offset.value.x = window.innerWidth - bubbleWidth - rightMargin
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
