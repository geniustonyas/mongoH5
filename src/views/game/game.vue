<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <div class="h-logo">
          <img src="assets/imgs/logo.png" />
        </div>
      </div>
      <div class="d-r">
        <i class="mvfont mv-kefu1" @click="openCustomerService" />
      </div>
    </header>
    <section class="g-l-b">
      <div class="b-a">
        <swiper class="my-swipe" :modules="bannerModules" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
          <swiper-slide v-for="ad in bannerAdvertisement" :key="ad.id">
            <a target="_blank" :href="ad.targetUrl">
              <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="b-x">
        <div class="x-a"><i class="mvfont mv-xt" />名站担保</div>
        <div class="x-b b-i-s">
          <ul>
            <li v-for="ad in friendLinkImg" :key="ad.id">
              <a target="_blank" :href="ad.targetUrl">
                <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" />
                <span>{{ ad.title }}</span>
              </a>
            </li>
          </ul>
          <div class="co-t">
            <a v-for="ad in friendLinkText" :key="ad.id" target="_blank" :href="ad.targetUrl">{{ ad.title }}</a>
          </div>
        </div>
      </div>
      <div class="b-x">
        <div class="x-a"><i class="mvfont mv-xt" />优质论坛推荐</div>
        <div class="x-b b-r-s">
          <ul>
            <li v-for="ad in friendDownload" :key="ad.id">
              <div class="l-l">
                <a target="_blank" :href="ad.targetUrl">
                  <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" />
                </a>
                <div class="i-t">
                  <b>{{ ad.title }}</b>
                  <p>{{ ad.introduction }}</p>
                </div>
              </div>
              <div class="l-r">
                <a target="_blank" :href="ad.targetUrl">立即进入</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer active-menu="game" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStoreHook } from '@/store/app'
import Footer from '@/components/layout/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const appStore = useAppStoreHook()
const bannerModules = [Autoplay]

const openCustomerService = () => {
  const customerServiceLink = appStore.customer_service_link
  if (customerServiceLink) {
    window.open(customerServiceLink, '_blank')
  } else {
    console.warn('客服链接未设置')
  }
}

const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(7).items
  return tmp || []
})

const friendLinkImg = computed(() => {
  const tmp = appStore.getAdvertisementById(8).items
  return tmp || []
})

const friendLinkText = computed(() => {
  const tmp = appStore.getAdvertisementById(9).items
  return tmp || []
})

const friendDownload = computed(() => {
  const tmp = appStore.getAdvertisementById(10).items
  return tmp || []
})

// 立即执行
;(async () => {
  if (appStore.advertisement.length == 0) {
    await appStore.fetAdvertisement()
  }
})()
</script>
