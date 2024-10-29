<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="router.back()"><i class="mvfont mv-left" /></a>
        <video id="plyr-player" controls muted autoplay preload="auto" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline />
      </div>
      <div class="md-b">
        <div class="b-a">
          <div class="a-a">{{ videoDetail ? videoDetail.title : '' }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail ? dayjs(videoDetail.addTime).format('YYYY-MM-DD') : '' }}</span>
            <span><i class="mvfont mv-kan" />{{ videoDetail ? videoDetail.viewCount : '' }}</span>
          </div>
          <div class="a-c">
            <template v-if="videoDetail && videoDetail.tags">
              <span v-for="(tag, index) in videoDetail.tags" :key="index">#{{ tag.title }}</span>
            </template>
          </div>
        </div>
        <div class="b-b">
          <span @click="handleLike(1)">
            <i :class="['mvfont', 'mv-zan', { active: videoDetail && videoDetail.like == 1 }]" />
            <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
          </span>
          <span @click="handleLike(2)">
            <i :class="['mvfont', 'mv-nzan', { active: videoDetail && videoDetail.like == 2 }]" />
            <b>{{ videoDetail ? videoDetail.hateCount : 0 }}</b>
          </span>
          <span @click="handleCollection">
            <i :class="['mvfont', 'mv-like', { active: videoDetail && videoDetail.collect }]" />
            <b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
          </span>
          <span><i @click="handleShare" class="mvfont mv-zhuanfa1" />分享</span>
        </div>
        <div class="ad-box"><img :src="getAssetsFile('cpt2.png')" /></div>
      </div>
      <nav class="mv-t-l">
        <div class="m-a">
          <div class="a-l"><i class="mvfont mv-xietiao" /><span>猜你喜欢</span></div>
        </div>
        <div class="m-b" v-if="recommendedVideos && recommendedVideos.length > 0">
          <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
        </div>
      </nav>
    </section>
    <Popup v-model:show="showSharePopup" position="center" :safe-area-inset-top="true" :safe-area-inset-bottom="true" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
  import { getVideoDetailApi } from '@/api/video'
  import { userLike, userCollection } from '@/api/user'
  import type { Video, VideoDetailResponse } from '@/types/video'
  import decryptionService from '@/utils/decryptionService'
  import { getAssetsFile } from '@/utils'
  import { useUserStore } from '@/store/user'
  import dayjs from 'dayjs'
  import VideoGridItem from '@/components/VideoGridItem.vue'
  import { showToast } from 'vant'
  import { addPlayCountApi } from '@/api/video'
  import { Popup } from 'vant'
  import Clipboard from 'clipboard'

  const route = useRoute()
  const router = useRouter()
  const userStore = useUserStore()
  const videoDetail = ref<VideoDetailResponse | null>(null)
  const recommendedVideos = ref<Video[]>([])
  const initialLikeType = ref<number | string>()

  const player = ref<any>(null)

  const decrypt = new decryptionService()

  const fetchVideoDetail = async () => {
    try {
      const id = Number(route.params.id)
      const {
        data: { data }
      } = await getVideoDetailApi(id)
      videoDetail.value = data
      initialLikeType.value = data.like // 保存初始点赞状态
      recommendedVideos.value = data.licks.map((video) => ({
        ...video,
        poster: ''
      }))
      recommendedVideos.value.forEach(async (video) => {
        video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
      })

      nextTick(() => {
        if (videoDetail.value && videoDetail.value.playDomain && videoDetail.value.playUrl) {
          initializePlayer(videoDetail.value.playDomain + videoDetail.value.playUrl)
        }
      })
    } catch (error) {
      console.error('获取视频详情失败:', error)
    }
  }

  const checkLogin = (): boolean => {
    if (userStore.userInfo.id == '') {
      userStore.showLoginDialog = true
      return false
    }
    return true
  }

  const showSharePopup = ref(false)
  const clipboard = ref<Clipboard | null>(null)
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

  const handleLike = async (likeType: number) => {
    if (!checkLogin()) return

    try {
      const videoId = videoDetail.value?.id
      if (videoId) {
        const currentLikeType = videoDetail.value.like
        let newLikeType = likeType

        if (currentLikeType == likeType) {
          // 如果当前状态和点击的状态相同，则取消点赞/踩
          newLikeType = 0
        }

        await userLike({ VideoId: videoId, Like: newLikeType })

        // 更新本地状态
        if (newLikeType == 1) {
          // 点赞
          if (currentLikeType == 0) {
            videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + 1).toString()
          } else if (currentLikeType == 2) {
            videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
            videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + 1).toString()
          }
        } else if (newLikeType == 2) {
          // 踩
          if (currentLikeType == 0) {
            videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) + 1).toString()
          } else if (currentLikeType == 1) {
            videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) - 1).toString()
            videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) + 1).toString()
          }
        } else {
          // 取消赞或踩
          if (currentLikeType == 1) {
            videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) - 1).toString()
          } else if (currentLikeType == 2) {
            videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
          }
        }

        videoDetail.value.like = newLikeType
      }
    } catch (error) {
      console.error('操作失败:', error)
      showToast('操作失败')
    }
  }

  const handleCollection = async () => {
    if (!checkLogin()) return

    try {
      const videoId = videoDetail.value?.id
      if (videoId) {
        const isCollecting = !videoDetail.value.collect
        await userCollection({ VideoId: videoId, Collect: isCollecting })
        // 更新本地状态
        videoDetail.value.collect = isCollecting
        videoDetail.value.collectionCount = (Number(videoDetail.value.collectionCount) + (isCollecting ? 1 : -1)).toString()
      }
    } catch (error) {
      console.error('操作失败:', error)
      showToast('操作失败')
    }
  }

  const initializePlayer = async (url: string) => {
    if (player.value) {
      player.value.destroy()
      player.value = null
    }
    try {
      const videoElement = document.getElementById('plyr-player') as HTMLVideoElement
      console.log(videoElement)
      if (window.Hls.isSupported()) {
        console.log('hls支持')
        try {
          const hls = new window.Hls()
          hls.loadSource(url)
          hls.attachMedia(videoElement)
          console.log('hls.attachMedia')
          hls.debug = true
          hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
            console.log('hls.on')
            player.value = new window.Plyr(videoElement, {
              clickToPlay: true,
              hideControls: true,
              autoplay: true,
              controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'settings', 'fullscreen']
            })
            console.log('player.value', player.value)
          })
        } catch (error) {
          console.error('hls初始化失败:', error)
        }
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = url
        player.value = new window.Plyr(videoElement, {
          clickToPlay: true,
          hideControls: true,
          autoplay: true,
          controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'settings', 'fullscreen']
        })
      }

      // 统计播放量
      player.value?.on('play', async () => {
        await addPlayCountApi(videoDetail.value?.id)
      })
    } catch (error) {
      console.error('初始化播放器失败:', error)
    }
  }

  watch(
    () => route.params.id,
    async (newId, oldId) => {
      if (newId != oldId) {
        await fetchVideoDetail()
      }
    },
    { immediate: true }
  )

  onUnmounted(() => {
    if (player.value) {
      player.value.destroy()
      player.value = null
    }
  })

  // 在离开路由前销毁播放器
  onBeforeRouteLeave((to, from, next) => {
    if (player.value) {
      player.value.destroy()
      player.value = null
    }
    next()
  })
</script>

<style scoped>
  .active { color: #ff6b6b; }
  .m-d-b .md-a video{height:24rem;}
</style>
