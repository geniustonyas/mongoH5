<template>
  <section class="vp-main">
    <header class="d-header h-video">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)"> <i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span class="d-m-t">正在播放: {{ currentDramaDetail?.title }}</span>
      </div>
      <div class="d-r" />
    </header>
    <div class="vpm-bd">
      <div class="vm-b">
        <div class="vm-b">
          <div class="v-a">
            <video
              :id="'video-player-' + currentDramaDetail?.id"
              class="video-player"
              :data-poster="currentDramaDetail?.imgUrl"
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
      </div>
    </div>
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
  </section>
</template>

<script setup lang="ts">
  import { onUnmounted, ref, watch, nextTick } from 'vue'
  import { useRoute } from 'vue-router'
  import {
    cleanupVideoInstance,
    fetchDramaDetail,
    getRealVideoUrl,
    getVideoInstance,
    loadEpisodeOfDrama,
    loadNextEpisode
  } from './utils/videoLoader'
  import { DramaDetailResponse } from '@/types/drama'
  import { useAppStore } from '@/store/app'
  import decryptionService from '@/utils/decryptionService'
  import { useUserStore } from '@/store/user'
  import { addDramaPlayCallback, addDramaToCollection } from '@/api/drama'
  import { showToast, Popup } from 'vant'
  import DramaDetailPopup from './components/drama-detail-popup.vue'
  import VideoActions from './components/video-actions.vue'
  import VideoInfo from './components/video-info.vue'

  const userStore = useUserStore()
  const appStore = useAppStore()
  const decrypt = new decryptionService()
  const currentDramaId = ref('')
  const currentEpisodeId = ref('')
  const showDramasPopup = ref(false)
  const showSharePopup = ref(false)
  const isCollecting = ref(false)
  const route = useRoute()
  const currentDramaDetail = ref<DramaDetailResponse | null>(null)

  const initializeFromRoute = () => {
    const dramaId = route.query.dramaId
    const episodeId = route.query.episodeId
    if (dramaId && episodeId) {
      currentDramaId.value = dramaId as string
      currentEpisodeId.value = episodeId as string
    }
  }

  initializeFromRoute()

  watch(
    () => route.query,
    async () => {
      initializeFromRoute()
      currentDramaDetail.value = await fetchDramaDetail(parseInt(currentDramaId.value))
      currentDramaDetail.value.imgUrl = URL.createObjectURL(
        await decrypt.fetchAndDecrypt(appStore.cdnUrl + currentDramaDetail.value.imgUrl)
      )
      // 确保DOM已经更新
      nextTick(async () => {
        // 加载并播放第一集
        const url = getRealVideoUrl(currentDramaDetail.value?.first?.id, currentDramaDetail.value)
        await loadEpisodeOfDrama(url, currentDramaId.value, true)
        addPlayerEndedEvent(currentDramaId.value)
        addDramaPlayCallback({ ShortMovieId: currentDramaId.value, VideoId: currentDramaDetail.value?.first?.id })
      })
    },
    { immediate: true }
  )

  // 连续播放处理函数
  function handleVideoEnd() {
    console.log('-------------> 开始尝试播放下一集', currentDramaDetail.value?.title)
    const currentEpisodeIndex = currentDramaDetail.value?.items.findIndex(item => item.id === currentEpisodeId.value)

    // 检查是否还有下一集
    if (currentDramaDetail.value?.items && currentEpisodeIndex < currentDramaDetail.value.items.length - 1) {
      // 获取下一集的ID
      const nextEpisodeId = currentDramaDetail.value.items[currentEpisodeIndex + 1].id
      // 播放下一集
      playNextEpisode(currentDramaId.value, nextEpisodeId)
      addDramaPlayCallback({ ShortMovieId: currentDramaId.value, VideoId: nextEpisodeId })
    } else {
      console.log('当前剧集的所有分集已全部播放完毕')
      showToast('当前剧集的所有分集已全部播放完毕')
    }
  }

  const addPlayerEndedEvent = (dramaId: string) => {
    const instance = getVideoInstance(dramaId)
    if (instance && instance.player) {
      instance.player.on('ended', handleVideoEnd)
    }
  }

  const prepareVideo = async (dramaId: string, episodeId: string) => {
    currentEpisodeId.value = episodeId
    currentDramaId.value = dramaId
    currentDramaDetail.value = await fetchDramaDetail(parseInt(dramaId))

    return getRealVideoUrl(currentEpisodeId.value, currentDramaDetail.value)
  }

  const playNextEpisode = async (dramaId: string, episodeId: string) => {
    const url = await prepareVideo(dramaId, episodeId)
    if (url) {
      loadNextEpisode(url, dramaId)
    }
  }

  const checkLogin = (): boolean => {
    if (userStore.userInfo.id == '') {
      userStore.showLoginDialog = true
      return false
    }
    return true
  }

  const handleChangeEpisode = (episodeId: string) => {
    currentEpisodeId.value = episodeId
    showDramasPopup.value = false
    playNextEpisode(currentDramaId.value, currentEpisodeId.value)
  }

  const handleLike = () => {
    console.log('handleLike')
  }

  const handleShowComment = () => {
    console.log('handleShowComment')
  }

  const handleShare = () => {
    console.log('handleShare')
  }

  const toggleCollection = async () => {
    if (!checkLogin()) return

    try {
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
    }
  }

  onUnmounted(() => {
    cleanupVideoInstance(currentDramaId.value)
  })
</script>
<style scoped>
  .vp-main .vm-b {
    height: calc(100vh + env(safe-area-inset-bottom));
  }
</style>
