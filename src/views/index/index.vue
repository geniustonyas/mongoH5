<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input />
            <i class="mvfont mv-search1" />
          </div>
          <div class="sb-t">
            <Swipe :autoplay="3000" :vertical="true" :show-indicators="false" :touchable="false" style="line-height: 50px">
              <SwipeItem>番号/片名/演员</SwipeItem>
              <SwipeItem>永久域名:<span>mg51.tv</span></SwipeItem>
              <SwipeItem>永久域名:<span>mg91.tv</span></SwipeItem>
            </Swipe>
          </div>
        </div>
        <div class="hs-c">
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-lishishijian-" /></a>
          <a @click="router.push({ name: 'home' })"><i class="mvfont mv-touxiang1" /></a>
        </div>
      </div>
      <div class="head-menu">
        <div class="hm-a">
          <a class="active">首页</a>
          <a v-for="category in categoryTop" :key="category.cId" @click="router.push({ name: 'category', params: { id: category.cId } })">
            {{ category.categoryName }}
          </a>
        </div>
        <div class="hm-b">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <!--Banner-->
      <nav id="index-banner" class="swiper-container">
        <Swipe class="my-swipe" :autoplay="3000" lazy-render>
          <SwipeItem v-for="ad in bannerAds" :key="ad.adId">
            <a :href="ad.url" :target="ad.target == 1 ? '_blank' : '_self'">
              <img :src="appStore.systemSettings.customer_cdn_link + ad.thumbnail" :alt="ad.titles" />
            </a>
          </SwipeItem>
        </Swipe>
      </nav>
      <nav class="i-m-b">
        <a @click.prevent="openDownloadPage" href="#">
          <i class="mvfont mv-appxiazai" />
          <span>APP下载</span>
        </a>
        <a @click="router.push({ name: 'share' })">
          <i class="mvfont mv-fenxiang3" />
          <span>分享好友</span>
        </a>
        <a @click="router.push({ name: 'spare' })">
          <i class="mvfont mv-yizhangtong" />
          <span>防丢失</span>
        </a>
        <a>
          <i class="mvfont mv-changjianwenti" />
          <span>常见问题</span>
        </a>
      </nav>

      <nav v-if="hottestVideos.length > 0" class="mv-t-l">
        <div class="m-a">
          <div class="a-l">
            <i class="mvfont mv-xietiao" />
            <span>热门推荐</span>
          </div>
          <div class="a-r">
            <i class="mvfont mv-right" />
          </div>
        </div>
        <div class="m-b">
          <VideoGridItem v-for="video in hottestVideos" :key="video.videoId" :video="video" />
        </div>
      </nav>

      <nav v-if="topRatedVideos.length > 0" class="mv-t-l">
        <div class="m-a">
          <div class="a-l">
            <i class="mvfont mv-xietiao" />
            <span>评分最高</span>
          </div>
          <div class="a-r">
            <i class="mvfont mv-right" />
          </div>
        </div>
        <div class="m-b">
          <VideoGridItem v-for="video in topRatedVideos" :key="video.videoId" :video="video" />
        </div>
      </nav>

      <nav v-if="latestVideos.length > 0" class="mv-t-l">
        <div class="m-a">
          <div class="a-l">
            <i class="mvfont mv-xietiao" />
            <span>最新视频</span>
          </div>
          <div class="a-r">
            <i class="mvfont mv-right" />
          </div>
        </div>
        <div class="m-b">
          <VideoGridItem v-for="video in latestVideos" :key="video.videoId" :video="video" />
        </div>
      </nav>

      <div class="pop-fixed" id="popNews" v-show="appStore.hasShownAnnouncement">
        <div class="pop-container">
          <div class="pop-bd news">
            <div class="pn-x" />
            <div class="pn-a">
              <h3>系统公告</h3>
            </div>
            <div class="pn-b" v-html="appStore.systemSettings.homepage_announcement" />
            <div class="pn-c">
              <a @click="appStore.setAnnouncementShown()">我已阅读</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAdListApi } from '@/api/app'
import { getVideoListApi } from '@/api/video'
import { Swipe, SwipeItem } from 'vant'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import type { VideoQueryParams, Video } from '@/types/video'
import { getAssetsFile } from '@/utils'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'

const router = useRouter()

const appStore = useAppStoreHook()

const decrypt = new decryptionService()

const bannerAds = ref([])
const latestVideos = ref<Video[]>([])
const hottestVideos = ref<Video[]>([])
const topRatedVideos = ref<Video[]>([])

const categoryTop = computed(() => {
  return appStore.categorys.filter((category) => !category.pId)
})

const fetchBannerAds = async () => {
  try {
    const response = await getAdListApi(1)
    bannerAds.value = response.data || []
  } catch (error) {
    console.error('获取banner广告失败:', error)
  }
}

const fetchVideos = async (sortBy: 'clickCounts' | 'goodCounts' | 'addTime') => {
  try {
    const params: VideoQueryParams = {
      page: 1,
      pageSize: 20,
      sortBy: sortBy
    }
    const response = await getVideoListApi(params)
    if (response.data && Array.isArray(response.data.data)) {
      const decryptedVideos = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      return decryptedVideos
    } else {
      console.error('响应数据结构不正确')
      return []
    }
  } catch (error) {
    console.error(`获取视频列表失败 (${sortBy}):`, error)
    return []
  }
}

// 使用立即执行的异步函数来初始化数据
;(async () => {
  try {
    await fetchBannerAds()
    hottestVideos.value = await fetchVideos('clickCounts')
    topRatedVideos.value = await fetchVideos('goodCounts')
    latestVideos.value = await fetchVideos('addTime')
  } catch (error) {
    console.error('初始化数据失败:', error)
  }
})()

const openDownloadPage = () => {
  const baseUrl = window.location.origin + import.meta.env.BASE_URL
  window.open(baseUrl + 'appdownload/index.html', '_blank')
}
</script>
