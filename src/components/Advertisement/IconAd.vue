<template>
  <swiper v-if="iconAdvertisement.length > 0" :modules="[Autoplay]" :slides-per-view="1" class="no-swipe" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true" style="width: 100%">
    <swiper-slide v-for="(chunk, index) in iconAdvertisement" :key="index">
      <div class="i-m-c">
        <a v-for="item in chunk" @click="openAd(item.targetUrl, '首页图标广告', 'click', item.id)" target="_blank" :key="item.id">
          <img v-lazy-decrypt="item.imgUrl" :alt="item.title" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { openAd, chunkArray } from '@/utils'
import { useAppStore } from '@/store/app'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const appStore = useAppStore()

const iconAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(16).items
  let iconAds = []
  if (tmp && tmp.length >= 0) {
    iconAds = chunkArray(tmp, 6) || []
  }
  return iconAds
})

// ;(async () => {
//   if (appStore.advertisement.length == 0) {
//     await appStore.fetAdvertisement()
//   }
// })()
</script>
