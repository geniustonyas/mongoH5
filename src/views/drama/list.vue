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
                <div v-if="false" class="v-d">
                  <div class="d-a">
                    <a href="#"><i class="mvfont mv-dianji" />点击查看更多短剧<i class="mvfont mv-right" /></a>
                  </div>
                  <div class="d-b">
                    <h3>{{ currentDramaDetail?.title || '-' }}</h3>
                    <p>第{{ index + 1 }}集<small>|</small>{{ currentDramaDetail.introduction }}</p>
                  </div>
                  <div class="d-c" @click="showDramasPopup = true">
                    <div class="c-l"><img alt="" src="assets/imgs/logo-2.png" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
                    <div class="c-r">
                      <i class="mvfont mv-right" />
                    </div>
                  </div>
                </div>
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
      :style="{ height: '60%' }"
    >
      <div class="moreEpisodes">
        <div class="m-a">
          <div class="ma-t">
            <div class="t-l"><img src="assets/imgs/logo-2.png" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
          </div>
        </div>
        <div class="m-a" style="padding-top: 0">
          <div class="ma-b">
            <van-tabs v-model:active="activeEpisode" swipeable line-width="0" line-height="0">
              <van-tab title="选集">
                <div class="m-b m-b-tab" />
              </van-tab>
              <van-tab title="热门短剧">
                <div class="m-b" />
              </van-tab>
              <van-tab title="猜你喜欢">
                <div class="m-b" />
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="m-c">
          <a><i class="mvfont mv-like" />收藏短剧</a>
          <a href="#"><i class="mvfont mv-home" />短剧首页</a>
        </div>
      </div>
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
  import { Popup } from 'vant'
  import { getDramaList, addDramaToCollection } from '@/api/drama'
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
    pauseVideo,
    playVideo
  } from './utils/videoLoader'
  import VideoActions from './components/video-actions.vue'

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
  const activeEpisode = ref('episodeListTab')
  const currentDramaId = ref('')
  const currentEpisodeId = ref('')
  const currentSwiperIndex = ref(0)
  const totalCount = ref(0)
  const pageIndex = ref(1)

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
        for (const video of data.items) {
          video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
          dramas.value.push(video)
        }
        totalCount.value = data.recordCount
      }
    } catch (error) {
      console.error('获取剧集列表失败:', error)
    }
  }

  const prepareVideo = async (dramaId: string, episodeId: string) => {
    currentEpisodeId.value = episodeId
    currentDramaId.value = dramaId
    currentDramaDetail.value = await fetchDramaDetail(parseInt(dramas.value[0].id))

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
    }

    // 销毁上上一个视频
    const destroyIndex = isSlidingDown ? currentSwiperIndex.value - 2 : currentSwiperIndex.value + 2
    if (destroyIndex >= 0 && dramas.value[destroyIndex]) {
      cleanupVideoInstance(dramas.value[destroyIndex]?.id)
    }

    // 播放当前视频
    if (currentVideoInstance) {
      playVideo(activedDramaId)
      currentDramaDetail.value = await fetchDramaDetail(parseInt(activedDramaId))
    } else {
      const url = await prepareVideo(currentDramaId.value, currentEpisodeId.value)
      if (url) {
        await loadEpisodeOfDrama(url, currentDramaId.value, true)
      }
    }

    // 预先加载下一个视频
    const nextVideoIndex = isSlidingDown ? currentSwiperIndex.value + 1 : currentSwiperIndex.value - 1
    if (nextVideoIndex >= 0 && nextVideoIndex < dramas.value.length) {
      const url = await prepareVideo(currentDramaId.value, dramas.value[nextVideoIndex].first.id)
      if (url) {
        await loadEpisodeOfDrama(url, currentDramaId.value, false)
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
        }
        // 预加载后面两个视频
        const nextDramas = dramas.value.slice(1, 3)
        for (const drama of nextDramas) {
          await loadEpisodeOfDrama(drama.first.id, drama.id, false)
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

  const handleLike = () => {}

  const toggleCollection = async () => {
    if (!checkLogin()) return

    try {
      const videoId = dramas.value[currentSwiperIndex.value]?.id
      const newCollectStatus = !dramas.value[currentSwiperIndex.value]?.collect

      await addDramaToCollection({ Id: videoId, Collect: newCollectStatus, VideoId: '', Ids: '' })

      dramas.value[currentSwiperIndex.value].collect = newCollectStatus
      dramas.value[currentSwiperIndex.value].collectionCount = (Number(dramas.value[currentSwiperIndex.value].collectionCount) + (newCollectStatus ? 1 : -1)).toString()
    } catch (error) {
      console.error('操作失败:', error)
    }
  }

  const handleShare = () => {}

  const handleShowComment = () => {}

</script>

<style scoped>
  .vp-main .vm-b {
    height: calc(100vh - 4.8rem + env(safe-area-inset-bottom));
  }

  .moreEpisodes {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100% - 4.8rem + env(safe-area-inset-bottom));
    background-color: var(--color-black);
  }

  .moreEpisodes .m-a {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem 1rem 0 1rem;
  }

  .moreEpisodes .m-a .ma-t {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .moreEpisodes .m-a .ma-t .t-l {
    color: var(--color-white);
    font-size: 1.3rem;
    font-weight: 500;
    font-family: PingFang SC, DFPKingGothicGB-Medium, Lato, Tahoma, Microsoft Yahei, sans-serif;
  }

  .moreEpisodes .m-a .ma-t .t-r {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    cursor: pointer;
  }

  .moreEpisodes .m-a .ma-t .t-l img {
    height: 1.3rem;
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-a .ma-t .t-l b {
    font-size: 0.4rem;
    vertical-align: middle;
    display: inline-block;
    padding: 0 0.3rem;
  }

  .moreEpisodes .m-a .ma-t .t-l span {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    padding: 0.1rem 0.4rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-c {
    position: absolute;
    bottom: 0;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
  }

  .moreEpisodes .m-c a {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    height: 3.6rem;
    line-height: 3.6rem;
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  .moreEpisodes .m-c a i {
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.2rem;
  }

  .moreEpisodes .m-a .m-b.m-b-tab {
    height: calc(50vh - 9rem);
    overflow: auto;
  }
</style>
<!-- 覆盖van-tab的样式 -->
<style lang="css">
  .moreEpisodes .van-tabs--line .van-tabs__wrap {
    height: 3.6rem;
    padding-bottom: 3.8rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  }

  .moreEpisodes .van-tabs__nav {
    background-color: var(--color-black);
    padding-left: 0.5rem;
  }

  .moreEpisodes .van-tab {
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-light);
    display: inline-block;
    height: 3.6rem;
    line-height: 3.6rem;
    cursor: pointer;
    flex: 0 0 7.5rem;
  }

  .moreEpisodes .van-tab:first-child {
    flex: 0 0 3.5rem;
    margin-right: 0.8rem;
  }

  .moreEpisodes .van-tab--active:before {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 2.4rem;
    background: url('../../assets/imgs/by.svg') no-repeat center;
    background-size: cover;
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
  }

  .moreEpisodes .van-tab:first-child.van-tab--active:before {
    left: 0.6rem;
  }

  .moreEpisodes .van-tab--active .van-tab__text {
    color: var(--color-white);
    font-weight: 500;
  }

  .moreEpisodesPopup.van-popup {
    background-color: var(--color-black);
  }
</style>
