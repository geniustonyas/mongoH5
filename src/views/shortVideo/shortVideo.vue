<template>
  <div class="page video-page">
    <header class="m-header h-video">
      <div class="h-m">
        <a @click="router.push({ name: 'shortVideo' })" class="active">抖阴</a>
        <a @click="showToast('建设中...')">短剧</a>
        <!-- <a @click="router.push({ name: 'shortPlay' })">短剧</a> -->
      </div>
      <div class="h-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <section class="vp-main">
      <div class="vm-a" />
      <div class="vm-b">
        <swiper :direction="'vertical'" :modules="modules" :virtual="{ slides: videos.length, enabled: true } as undefined" :slides-per-view="1" :space-between="0" @slide-change="onSlideChange" style="width: 100%; height: 100%">
          <swiper-slide v-for="(video, index) in videos" :key="video.id" :virtual-index="index">
            <div class="v-a">
              <video :id="'video-player-' + index" class="video-player" playsinline webkit-playsinline />
            </div>
            <div class="v-b">
              <a @click="handleLike()">
                <i :class="['mvfont', 'mv-xihuan', { active: videoDetail && videoDetail.like == 1 }]" />
                <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
              </a>
              <a @click="handleCollection()">
                <i :class="['mvfont', 'mv-shoucang', { active: videoDetail && videoDetail.collect }]" />
                <b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
              </a>
              <a @click="handleShare"><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
            </div>
            <div class="v-c">
              <div class="c-g">
                <img :src="getAssetsFile('logo-2.png')" />芒果TV
                <span>{{ foreverDomain }}</span>
              </div>
              <h3>@芒果TV</h3>
              <p>
                <b>{{ video.title }}</b>
                <template v-if="videoDetail && videoDetail.tags">
                  <span v-for="tag in videoDetail.tags" :key="tag.id">#{{ tag.title }}</span>
                </template>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <Popup v-model:show="showSharePopup" teleport="body" position="center" :safe-area-inset-top="true" :safe-area-inset-bottom="true" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
    <Footer active-menu="shortVideo" footer-class="footer f-footer" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, watch, nextTick } from 'vue'
  import { useRouter, onBeforeRouteLeave } from 'vue-router'
  import { getVideoListApi, getVideoDetailApi } from '@/api/video'
  import type { Video, VideoDetailResponse } from '@/types/video'
  import { useAppStore } from '@/store/app'
  import { useUserStore } from '@/store/user'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import Footer from '@/components/layout/Footer.vue'
  import 'swiper/css'
  import 'swiper/css/virtual'
  import { Virtual } from 'swiper/modules'
  import decryptionService from '@/utils/decryptionService'
  import { getAssetsFile } from '@/utils'
  import { userLike, userCollection } from '@/api/user'
  import { Popup, showToast } from 'vant'
  import Clipboard from 'clipboard'

  const router = useRouter()
  const appStore = useAppStore()
  const userStore = useUserStore()
  const modules = [Virtual]

  const videos = ref<Video[]>([])
  const videoDetail = ref<VideoDetailResponse | null>(null)
  const player = ref<any>(null)
  const currentVideoIndex = ref(0)
  const pageIndex = ref(1)
  const decrypt = new decryptionService()
  const showSharePopup = ref(false)
  const clipboard = ref<Clipboard | null>(null)

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

    const videoElement = document.getElementById('video-player-' + index) as HTMLVideoElement
    console.log(videoElement)
    if (player.value) {
      player.value.destroy()
      player.value = null
    }

    if (window.Hls.isSupported()) {
      const hls = new window.Hls()
      hls.loadSource(appStore.playDomain + video.playUrl)
      hls.attachMedia(videoElement)
      hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        player.value = new window.Plyr(videoElement, {
          autoplay: true,
          // controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'settings', 'fullscreen']
          controls: ['progress']
        })
        console.log(player.value)
      })
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = appStore.playDomain + video.playUrl
      player.value = new window.Plyr(videoElement, {
        autoplay: true,
        // controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'settings', 'fullscreen']
        controls: ['progress']
      })
    }
  }

  onMounted(async () => {
    await fetchVideos()
    if (videos.value.length > 0) {
      await fetchVideoDetail(parseInt(videos.value[0].id))
      initializePlayer(0)
    }
  })

  onBeforeRouteLeave(() => {
    if (player.value) {
      player.value.destroy()
      player.value = null
    }
  })

  const onSlideChange = (swiper) => {
    currentVideoIndex.value = swiper.activeIndex
    initializePlayer(currentVideoIndex.value)
    // 当滑动到倒数第二个视频时，加载下一页
    if (currentVideoIndex.value >= videos.value.length - 2) {
      pageIndex.value++
      fetchVideos()
    }

    // 获取当前视频详情
    const currentVideo = videos.value[currentVideoIndex.value]
    if (currentVideo) {
      fetchVideoDetail(parseInt(currentVideo.id))
    }
  }

  // 检查登录状态
  const checkLogin = (): boolean => {
    if (userStore.userInfo.id == '') {
      userStore.showLoginDialog = true
      return false
    }
    return true
  }

  // 点赞功能
  const handleLike = async () => {
    if (!checkLogin()) return

    try {
      const videoId = videoDetail.value?.id
      const newLikeStatus = videoDetail.value?.like == 1 ? 0 : 1

      await userLike({ VideoId: videoId, Like: newLikeStatus })

      // 更新本地状态
      videoDetail.value.like = newLikeStatus
      videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + (newLikeStatus ? 1 : -1)).toString()
    } catch (error) {
      console.error('操作失败:', error)
    }
  }

  // 收藏功能
  const handleCollection = async () => {
    if (!checkLogin()) return

    try {
      const videoId = videoDetail.value?.id
      const newCollectStatus = !videoDetail.value?.collect

      await userCollection({ VideoId: videoId, Collect: newCollectStatus })

      // 更新本地状态
      videoDetail.value.collect = newCollectStatus
      videoDetail.value.collectionCount = (Number(videoDetail.value.collectionCount) + (newCollectStatus ? 1 : -1)).toString()
    } catch (error) {
      console.error('操作失败:', error)
    }
  }

  // 分享功能
  const handleShare = () => {
    if (clipboard.value) {
      clipboard.value.destroy()
    }
    clipboard.value = new Clipboard('.share-button', {
      text: () => window.location.href
    })

    clipboard.value?.on('success', () => {
      showSharePopup.value = true
      // 设置2秒后自动关闭弹窗
      setTimeout(() => {
        showSharePopup.value = false
      }, 2000)
      clipboard.value?.destroy()
    })

    clipboard.value?.on('error', () => {
      console.error('复制失败')
      clipboard.value?.destroy()
    })

    // 模拟点击事件以触发复制
    const button = document.createElement('button')
    button.className = 'share-button'
    document.body.appendChild(button)
    button.click()
    document.body.removeChild(button)
  }

  // 获取视频详情
  const fetchVideoDetail = async (videoId: number) => {
    try {
      const {
        data: { data }
      } = await getVideoDetailApi(videoId)
      videoDetail.value = data
    } catch (error) {
      console.error('获取视频详情失败:', error)
    }
  }
</script>

<style scoped>
  .active { color: #ff6b6b; }
</style>
