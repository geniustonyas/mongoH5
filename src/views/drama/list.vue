<template>
  <HomeLayout>
    <section class="vp-main">
      <div class="vpm-bd">
        <div class="vm-b">
          <swiper
            :direction="'vertical'"
            :modules="modules"
            :virtual="{ slides: dramas.length, enabled: true, addSlidesBefore: 5, addSlidesAfter: 5 } as undefined"
            :slides-per-view="1"
            :space-between="0"
            @slide-change="slideChange"
            style="width: 100%; height: 100%"
          >
            <swiper-slide v-for="(video, index) in dramas" :key="index" :virtual-index="index">
              <div class="vm-b">
                <div class="v-a">
                  <video
                    :id="'video-player-' + video.id"
                    class="video-player"
                    :data-poster="video.poster"
                    muted
                    preload="auto"
                    :loop="false"
                    x5-video-player-fullscreen="true"
                    x5-playsinline
                    playsinline
                    webkit-playsinline
                    style="width: 100%; height: 100%"
                  />
                </div>
                <div class="v-b">
                  <VideoActions
                    :data="currentDramaDetail"
                    @like="handleLike"
                    @show-comment="handleShowComment"
                    @toggle-collection="toggleCollection"
                    @share="handleShare"
                  />
                </div>
                <VideoInfo
                  :drama-detail="currentDramaDetail"
                  :current-episode-id="currentEpisodeId"
                  @show-detail-popup="showDramasPopup = true"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <Loading v-show="isLoading" />
    <Popup
      v-model:show="showDramasPopup"
      class="moreEpisodesPopup"
      position="bottom"
      round
      :close-on-click-overlay="true"
      :style="{ height: '54%' }"
    >
      <DramaDetailPopup
        :drama-detail="currentDramaDetail"
        :current-episode-id="currentEpisodeId"
        :is-collecting="isCollecting"
        @close="showDramasPopup = false"
        @collect="toggleCollection"
        @change-episode="handleChangeEpisode"
      />
    </Popup>
    <Popup v-model:show="showSharePopup" teleport="body" position="center" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
  </HomeLayout>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/store/user'
  import HomeLayout from '@/components/layout/HomeLayout.vue'
  import { nextTick, onMounted, onUnmounted, ref } from 'vue'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import Loading from '@/components/layout/Loading.vue'
  import { getDramaList, addDramaToCollection } from '@/api/drama'
  import { Popup, showToast } from 'vant'
  import { DramaDetailResponse, DramaItemVM } from '@/types/drama'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Virtual } from 'swiper/modules'
  import {
    cleanupAllVideoInstances,
    cleanupVideoInstance,
    fetchDramaDetail,
    getRealVideoUrl,
    getVideoInstance,
    loadEpisodeOfDrama,
    loadNextEpisode,
    pauseVideo,
    playVideo
  } from './utils/videoLoader'
  import VideoActions from './components/video-actions.vue'
  import VideoInfo from './components/video-info.vue'
  import DramaDetailPopup from './components/drama-detail-popup.vue'

  import 'swiper/css'
  import 'swiper/css/virtual'

  const userStore = useUserStore()
  const modules = [Virtual]
  const dramas = ref<DramaItemVM[]>([])
  const currentDramaDetail = ref<DramaDetailResponse | null>(null)
  const decrypt = new decryptionService()
  const appStore = useAppStore()
  const isLoading = ref(true)
  const showSharePopup = ref(false)
  const showDramasPopup = ref(false)
  const currentDramaId = ref('')
  const currentEpisodeId = ref('')
  const currentSwiperIndex = ref(0)
  const totalCount = ref(0)
  const pageIndex = ref(1)
  const isCollecting = ref(false)
  const isChangeEpisode = ref(false)
  // 保存每个剧集当前播放到第几集
  const dramaPlayStatus = new Map<string, { episodeId: string }>()

  const fetchDramaList = async () => {
    try {
      const {
        data: { data }
      } = await getDramaList({
        PageIndex: pageIndex.value,
        PageSize: 5,
        ChannelId: '',
        GenderChannelType: ''
      })
      if (data && data.items) {
        for (const episode of data.items) {
          episode.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + episode.imgUrl))
          dramas.value.push(episode)
        }
        totalCount.value = data.recordCount
      }
    } catch (error) {
      console.error('获取剧集列表失败:', error)
    }
  }

  // 连续播放处理函数
  function handleVideoEnd() {
    console.log('-------------> 开始尝试播放下一集', currentDramaDetail.value.title)
    const prevDramaId = currentDramaDetail.value?.id
    const currentEpisodeIndex = currentDramaDetail.value?.items.findIndex(item => item.id === currentEpisodeId.value)

    // 检查是否还有下一集
    if (currentDramaDetail.value?.items && currentEpisodeIndex < currentDramaDetail.value.items.length - 1) {
      // 获取下一集的ID
      const nextEpisodeId = currentDramaDetail.value.items[currentEpisodeIndex + 1].id
      // 保存当前剧集的播放状态
      dramaPlayStatus.set(prevDramaId, {
        episodeId: nextEpisodeId
      })
      // 播放下一集
      playNextEpisode(currentDramaId.value, nextEpisodeId)
    } else {
      console.log('当前剧集的所有分集已全部播放完毕')
      // 可以在这里添加播放完所有集数后的行为，比如:
      // 1. 显示"播放完毕"提示
      // 2. 自动滑动到下一个视频
      // 3. 循环播放当前剧集 (通过重置 currentEpisodeIndex 为 0 并重新播放第一集)
      showToast('当前剧集的所有分集已全部播放完毕')
    }
  }

  const prepareVideo = async (dramaId: string, episodeId: string) => {
    currentEpisodeId.value = episodeId
    currentDramaId.value = dramaId
    currentDramaDetail.value = await fetchDramaDetail(parseInt(dramaId))

    return getRealVideoUrl(currentEpisodeId.value, currentDramaDetail.value)
  }

  const slideChange = async (swiper: any) => {
    const prevIndex = currentSwiperIndex.value
    const currentIndex = swiper.activeIndex
    const activedDramaId = dramas.value[currentIndex]?.id
    const prevDramaId = dramas.value[prevIndex]?.id
    const currentVideoInstance = getVideoInstance(activedDramaId)
    const prevDramaVideoInstance = getVideoInstance(prevDramaId)
    const isSlidingDown = currentIndex > prevIndex

    currentSwiperIndex.value = swiper.activeIndex

    if (prevIndex === currentSwiperIndex.value) return

    // 停止并重置上一个视频
    if (prevDramaVideoInstance) {
      pauseVideo(prevDramaId)
      removePlayerEndedEvent(prevDramaId)
    }

    // 销毁上上一个视频
    const destroyIndex = isSlidingDown ? currentSwiperIndex.value - 2 : currentSwiperIndex.value + 2
    if (destroyIndex >= 0 && dramas.value[destroyIndex]) {
      cleanupVideoInstance(dramas.value[destroyIndex]?.id)
    }

    // 获取当前剧集的详情信息
    currentDramaDetail.value = await fetchDramaDetail(parseInt(activedDramaId))
    // 更新当前播放的剧集ID和集数ID
    currentDramaId.value = activedDramaId
    if (dramaPlayStatus.get(activedDramaId)) {
      currentEpisodeId.value = dramaPlayStatus.get(activedDramaId)?.episodeId
    } else {
      currentEpisodeId.value = currentDramaDetail.value?.first?.id
    }

    // 播放当前视频
    if (currentVideoInstance) {
      // 如果已有实例，需要重新绑定ended事件
      if (currentVideoInstance.player) {
        // 移除旧的事件监听
        currentVideoInstance.player.off('ended')
        // 添加新的事件监听
        currentVideoInstance.player.on('ended', handleVideoEnd)
      }

      playVideo(activedDramaId)
    } else {
      // 加载并播放第一集
      const url = getRealVideoUrl(currentDramaDetail.value?.first?.id, currentDramaDetail.value)
      if (url) {
        await loadEpisodeOfDrama(url, currentDramaId.value, true)
        addPlayerEndedEvent(currentDramaId.value)
      }
    }

    // 预先加载下一个视频
    const nextDramaIndex = isSlidingDown ? currentSwiperIndex.value + 1 : currentSwiperIndex.value - 1
    if (nextDramaIndex >= 0 && nextDramaIndex < dramas.value.length) {
      const nextDramaDetail = await fetchDramaDetail(parseInt(dramas.value[nextDramaIndex].id))
      const url = getRealVideoUrl(dramas.value[nextDramaIndex].first.id, nextDramaDetail)
      if (url) {
        await loadEpisodeOfDrama(url, dramas.value[nextDramaIndex].id, false)
      }
    }

    // 是否要加载更多视频
    if (currentSwiperIndex.value + 1 < totalCount.value) {
      if (dramas.value.length - currentSwiperIndex.value < 3) {
        pageIndex.value++
        await fetchDramaList()
      }
    }
  }

  // 也需要更新播放下一集的函数，使其也使用相同的处理函数
  const playNextEpisode = async (dramaId: string, episodeId: string) => {
    const url = await prepareVideo(dramaId, episodeId)
    if (url) {
      loadNextEpisode(url, dramaId)
    }
  }

  const addPlayerEndedEvent = (dramaId: string) => {
    const instance = getVideoInstance(dramaId)
    if (instance && instance.player) {
      instance.player.on('ended', handleVideoEnd)
    }
  }

  const removePlayerEndedEvent = (dramaId: string) => {
    const instance = getVideoInstance(dramaId)
    if (instance && instance.player) {
      instance.player.off('ended')
    }
  }

  onMounted(async () => {
    try {
      let url = ''
      await fetchDramaList()
      if (dramas.value.length > 0) {
        isLoading.value = false
        await nextTick()
        // 加载并播放第一个视频
        url = await prepareVideo(dramas.value[0].id, dramas.value[0].first.id)
        if (url) {
          await loadEpisodeOfDrama(url, currentDramaId.value, true)
          addPlayerEndedEvent(currentDramaId.value)
        }
        // 预加载后面两个视频
        const nextDramas = dramas.value.slice(1, 3)
        for (const drama of nextDramas) {
          const nextDramaDetail = await fetchDramaDetail(parseInt(drama.id))
          const url = getRealVideoUrl(drama.first.id, nextDramaDetail)
          await loadEpisodeOfDrama(url, drama.id, false)
        }
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  })

  onUnmounted(() => {
    cleanupAllVideoInstances()
  })

  const checkLogin = (): boolean => {
    if (userStore.userInfo.id == '') {
      userStore.showLoginDialog = true
      return false
    }
    return true
  }

  const handleChangeEpisode = async (episodeId: string) => {
    isChangeEpisode.value = true
    currentEpisodeId.value = episodeId
    showDramasPopup.value = false

    // 保存当前剧集的播放状态
    dramaPlayStatus.set(currentDramaId.value, {
      episodeId: episodeId
    })
    // 播放下一集
    playNextEpisode(currentDramaId.value, episodeId)
  }

  const handleLike = () => {}

  const toggleCollection = async () => {
    if (!checkLogin()) return

    try {
      isCollecting.value = true
      const dramaId = currentDramaDetail.value?.id
      const newCollectStatus = !currentDramaDetail.value?.collect

      await addDramaToCollection({ Id: dramaId, Collect: newCollectStatus, VideoId: '', Ids: '' })

      if (newCollectStatus) {
        showToast('收藏成功')
      } else {
        showToast('取消收藏成功')
      }

      currentDramaDetail.value = await fetchDramaDetail(parseInt(dramaId))
    } catch (error) {
      console.error('操作失败:', error)
    } finally {
      isCollecting.value = false
    }
  }

  const handleShare = () => {}

  const handleShowComment = () => {}
</script>

<style scoped>
  .vp-main .vm-b {
    height: calc(100vh - 4.8rem + env(safe-area-inset-bottom));
  }
</style>
