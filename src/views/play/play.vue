<template>
  <div class="page" v-if="videoDetail">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="$router.back()"><i class="mvfont mv-left" /></a>
        <div id="video-player" />
      </div>
      <div class="md-b">
        <div class="b-a">
          <div class="a-a">{{ videoDetail.title }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail.addTime }}</span>
            <span><i class="mvfont mv-kan" />{{ videoDetail.clickCounts }}</span>
          </div>
          <div class="a-c">
            <span v-for="tag in videoDetail.tags" :key="tag">#{{ tag }}</span>
          </div>
        </div>
        <div class="b-b">
          <span>
            <i class="mvfont mv-zan" /><b>{{ videoDetail.goodCounts }}</b>
          </span>
          <span>
            <i class="mvfont mv-nzan" /><b>{{ videoDetail.noGoodCounts }}</b>
          </span>
          <span>
            <i class="mvfont mv-like" /><b>{{ videoDetail.favoriteCounts }}</b>
          </span>
          <span><i @click="router.push({ name: 'share' })" class="mvfont mv-zhuanfa1" />分享</span>
        </div>
        <div class="ad-box"><img @click="window.open('https://www.baidu.com')" :src="getAssetsFile('cpt2.png')" /></div>
      </div>
      <nav class="mv-t-l">
        <div class="m-a">
          <div class="a-l"><i class="mvfont mv-xietiao" /><span>猜你喜欢</span></div>
        </div>
        <div class="m-b">
          <div v-for="video in recommendedVideos" :key="video.videoId" class="item" @click="$router.push({ name: 'play', params: { id: video.videoId } })">
            <div class="i-a" v-lazy:background-image="video.poster">
              <span v-if="video.resolution" class="a-a">{{ video.resolution }}</span>
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
    </section>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getVideoDetailApi, getVideoListApi } from '@/api/video'
import type { Video, VideoQueryParams } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import Player from 'xgplayer'
import HlsJsPlugin from 'xgplayer-hls.js' // 引入HLS插件
// import FlvJsPlugin from 'xgplayer-flv.js' // 引入FLV插件
import 'xgplayer/dist/index.min.css'

const route = useRoute()
const router = useRouter()
const videoDetail = ref<Video | null>(null)
const recommendedVideos = ref<Video[]>([])

const decrypt = new decryptionService()

const fetchVideoDetail = async () => {
  try {
    const id = Number(route.params.id)
    const response = await getVideoDetailApi(id)
    videoDetail.value = response.data as Video
    if (videoDetail.value && 'posterDomain' in response.data) {
      videoDetail.value.poster = await decrypt.fetchAndDecrypt(`${response.data.posterDomain}${videoDetail.value.poster}`)
    }
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const fetchRecommendedVideos = async () => {
  try {
    const params: VideoQueryParams = {
      page: 1,
      pageSize: 10,
      sortBy: 'clickCounts'
    }
    const response = await getVideoListApi(params)
    if (response.data.data) {
      recommendedVideos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
    }
  } catch (error) {
    console.error('获取推荐视频列表失败:', error)
  }
}

onMounted(async () => {
  await fetchVideoDetail()
  await fetchRecommendedVideos()

  const url = videoDetail.value.playDomain + videoDetail.value.playUrl
  // const fileExtension = url.split('.').pop().toLowerCase()

  let playerConfig = {
    id: 'video-player',
    url: url,
    poster: videoDetail.value.poster,
    autoplay: true,
    controls: true,
    fluid: true,
    playsinline: true,
    'x5-video-player-type': 'h5',
    'x5-video-player-fullscreen': true,
    'x5-video-orientation': 'portraint',
    plugins: [HlsJsPlugin],
    useHlsJs: true
  }

  // // 根据文件扩展名设置type
  // if (fileExtension === 'm3u8') {
  //   playerConfig.type = 'hls'
  // } else if (fileExtension === 'flv') {
  //   playerConfig.type = 'flv'
  // }
  // // 如果没有明确的扩展名，让播放器自动检测

  // @ts-ignore
  const player = new Player(playerConfig)
  console.log(player)
})
</script>
