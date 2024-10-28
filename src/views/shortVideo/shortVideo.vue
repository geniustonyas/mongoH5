<template>
  <div class="page video-page">
    <header class="m-header h-video">
      <div class="h-m">
        <a @click="router.push({ name: 'shortVideo' })" class="active">抖阴</a>
        <a @click="router.push({ name: 'shortPlay' })">短剧</a>
      </div>
      <div class="h-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <section class="vp-main">
      <div class="vm-a" />
      <div class="vm-b">
        <swiper :direction="'vertical'" :modules="modules" :virtual="true" :slides-per-view="1" :space-between="0" @slide-change="onSlideChange" style="width: 100%; height: 100%">
          <swiper-slide v-for="(video, index) in videos" :key="video.id" :virtual-index="index">
            <div class="v-a">
              <div :id="'video-player-' + index" class="video-player" />
            </div>
            <div class="v-b">
              <a><img :src="getAssetsFile('logo-1.png')" /></a>
              <a>
                <i class="mvfont mv-xihuan" /><b>{{ video.likeCount || 0 }}</b>
              </a>
              <a>
                <i class="mvfont mv-shoucang" /><b>{{ video.collectCount || 0 }}</b>
              </a>
              <a><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
            </div>
            <div class="v-c">
              <div class="c-g">
                <img :src="getAssetsFile('logo-2.png')" />芒果TV
                <span>{{ foreverDomain }}</span>
              </div>
              <h3>@芒果TV</h3>
              <p>
                <b>{{ video.title }}</b>
                <span v-for="tag in video.tags" :key="tag">#{{ tag }}</span>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <Footer active-menu="shortVideo" footer-class="footer f-footer" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getVideoListApi } from '@/api/video'
import type { Video } from '@/types/video'
import { useAppStore } from '@/store/app'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Footer from '@/components/layout/Footer.vue'
import Player from 'xgplayer'
import HlsJsPlugin from 'xgplayer-hls.js'
import 'xgplayer/dist/index.min.css'
import 'swiper/css'
import 'swiper/css/virtual'
import { Virtual } from 'swiper/modules'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'

const modules = [Virtual]

const router = useRouter()
const appStore = useAppStore()
const videos = ref<Video[]>([])
const videoRefs = ref<HTMLElement[]>([])
const player = ref<Player | null>(null)
const currentVideoIndex = ref(0)
const pageIndex = ref(1)
const decrypt = new decryptionService()

const foreverDomain = computed(() => {
  var tmp = appStore.searchInputText.split(',')
  return tmp[0] || ''
})

const fetchVideos = async () => {
  try {
    const {
      data: { data }
    } = await getVideoListApi({
      PageIndex: pageIndex.value,
      PageSize: 5,
      VideoType: 1,
      SortType: 0
    })
    if (data && data.items) {
      const newVideos = await Promise.all(
        data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        }))
      )
      videos.value.push(...newVideos)
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  }
}

const initializePlayer = async (index: number) => {
  await nextTick() // 确保 DOM 已更新
  const video = videos.value[index]
  if (!video) return

  const playerConfig = {
    id: 'video-player-' + index,
    url: appStore.playDomain + video.playUrl,
    poster: video.poster,
    autoplay: true,
    controls: false,
    fluid: true,
    playsinline: true,
    'x5-video-player-type': 'h5',
    'x5-video-player-fullscreen': true,
    'x5-video-orientation': 'portraint',
    width: '100%',
    height: '100%',
    plugins: [HlsJsPlugin],
    useHlsJs: true
  }

  if (player.value) {
    player.value.destroy()
    player.value = null
  }

  player.value = new Player(playerConfig)

  // // 自定义控件样式，只显示进度条
  // player.value.once('ready', () => {
  //   const controls = player.value.controls
  //   if (controls) {
  //     const progressBar = player.value.root.querySelector('.xgplayer-progress')
  //     if (progressBar) {
  //       progressBar.style.display = 'block' // 只显示进度条
  //     }
  //   }
  // })
}

onMounted(async () => {
  await fetchVideos()
  if (videos.value.length > 0) {
    initializePlayer(0)
  }
})

watch(videos, (newVideos) => {
  if (newVideos.length > 0 && !player.value) {
    initializePlayer(0)
  }
})

const setVideoRef = (index) => (el) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const onSlideChange = (swiper) => {
  currentVideoIndex.value = swiper.activeIndex
  initializePlayer(currentVideoIndex.value)

  // // 预加载下一个视频
  // if (currentVideoIndex.value + 1 < videos.value.length) {
  //   const nextIndex = currentVideoIndex.value + 1
  //   const nextVideo = videos.value[nextIndex]
  //   if (nextVideo) {
  //     const nextPlayerConfig = {
  //       id: 'video-player-' + nextIndex,
  //       url: nextVideo.playUrl,
  //       poster: nextVideo.poster,
  //       autoplay: true, // 不自动播放
  //       controls: false, // 隐藏所有控件
  //       fluid: true,
  //       playsinline: true,
  //       'x5-video-player-type': 'h5',
  //       'x5-video-player-fullscreen': true,
  //       'x5-video-orientation': 'portraint',
  //       plugins: [HlsJsPlugin],
  //       useHlsJs: true
  //     }
  //     new Player(nextPlayerConfig)
  //   }
  // }

  // 当滑动到倒数第二个视频时，加载下一页
  if (currentVideoIndex.value >= videos.value.length - 2) {
    pageIndex.value++
    fetchVideos()
  }
}
</script>
