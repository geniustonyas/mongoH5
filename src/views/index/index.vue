<template>
  <div class="page">
    <Header />
    <main class="main">
      <!--Banner-->
      <nav id="index-banner" class="swiper-container">
        <Swipe class="my-swipe" :autoplay="3000" lazy-render>
          <SwipeItem v-for="ad in bannerAds" :key="ad.adId">
            <a :href="ad.url" :target="ad.target === 1 ? '_blank' : '_self'">
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
          <div v-for="video in hottestVideos" :key="video.videoId" class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
            <!-- 使用视频数据渲染每个项目 -->
            <div class="i-a" v-lazy:background-image="video.poster">
              <span class="a-b">{{ video.playTime }}</span>
              <span class="a-c">{{ video.categoryName }}</span>
            </div>
            <div class="i-b">
              <b>{{ video.title }}</b>
              <p>
                <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
              </p>
            </div>
          </div>
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
          <div v-for="video in topRatedVideos" :key="video.videoId" class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
            <!-- 使用视频数据渲染每个项目 -->
            <div class="i-a" v-lazy:background-image="video.poster">
              <span class="a-b">{{ video.playTime }}</span>
              <span class="a-c">{{ video.categoryName }}</span>
            </div>
            <div class="i-b">
              <b>{{ video.title }}</b>
              <p>
                <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
              </p>
            </div>
          </div>
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
          <div v-for="video in latestVideos" :key="video.videoId" class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
            <!-- 使用视频数据渲染每个项目 -->
            <div class="i-a" v-lazy:background-image="video.poster">
              <!-- <span v-if="video.resolution" class="a-a">{{ video.resolution }}</span> -->
              <span class="a-b">{{ video.playTime }}</span>
              <span class="a-c">{{ video.categoryName }}</span>
            </div>
            <div class="i-b">
              <b>{{ video.title }}</b>
              <p>
                <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div class="au-pop" id="pop-login">
        <div class="ap-bg" />
        <div class="ap-bd">
          <div class="p-login">
            <div class="pl-c">
              <div class="l-a">
                <div class="a-l">
                  <span class="active">登录</span>
                  <span>注册</span>
                </div>
                <div class="a-r" onclick="closePop(this)">
                  <span><i class="mvfont mv-close" /></span>
                </div>
              </div>
              <div class="l-b">
                <div class="au-form-goup">
                  <ul class="f-a">
                    <li>
                      <i class="mvfont mv-user" />
                      <input placeholder="账号/手机号" />
                    </li>
                    <li>
                      <i class="mvfont mv-password" />
                      <input placeholder="密码" />
                    </li>
                  </ul>
                  <div class="f-b">
                    <a href="home.html" class="btn btn1">立即登录</a>
                  </div>
                  <div class="f-c">
                    <a href="#">忘记密码？</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAdListApi } from '@/api/app'
import { getVideoListApi } from '@/api/video'
import { Swipe, SwipeItem } from 'vant'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import type { VideoQueryParams, Video } from '@/types/video'

import Footer from '@/components/layout/Footer.vue'
import Header from '@/views/index/indexHeader.vue'

const router = useRouter()

const appStore = useAppStoreHook()

const decrypt = new decryptionService()

const bannerAds = ref([])
const latestVideos = ref<Video[]>([])
const hottestVideos = ref<Video[]>([])
const topRatedVideos = ref<Video[]>([])

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
      pageSize: 30,
      sortBy: sortBy
    }
    const response = await getVideoListApi(params)

    if (response.data.data) {
      const decryptedVideos = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      return decryptedVideos
    } else {
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
