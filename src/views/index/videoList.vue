<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l" @click="appStore.setBack(true)">
        <i class="mvfont mv-left" />
      </div>
      <div class="d-m dm-auto">
        <a v-for="tab in tabs" :key="tab.value" :class="{ active: activeTab === tab.value }" @click="changeTab(tab.value)">
          {{ tab.label }}
        </a>
      </div>
      <div class="d-r" @click="router.push({ name: 'search' })">
        <i class="mvfont mv-search1" />
      </div>
    </header>
    <main class="b-b-b">
      <div class="m-c-b txtc">
        <PullRefresh v-model="refreshing" @refresh="refreshList">
          <List
            v-model:loading="listLoading"
            :offset="20"
            :finished="finished"
            :immediate-check="false"
            v-model:error="error"
            @load="loadData"
          >
            <ul v-if="videos.length > 0" >
              <li v-for="(video, index) in videos" :key="index" @click="clickVideo(video)">
                <div class="li-a">
                  <img v-lazy-decrypt="video.imgUrl" />
                </div>
                <div class="li-b">
                  {{ video.title }}
                </div>
                <div v-if="!video.isAd" class="li-c">
                  <span>{{ formatNumber(video?.viewCount) }}个视频</span>
                  <span>•{{ formatNumber(video.likeCount) }}次观看</span>
                  <span>•{{ fromNow(video.addTime) }}点赞</span>
                  <span>•{{ video.subChannelName }}收藏</span>
                </div>
              </li>
            </ul>
          </List>
        </PullRefresh>
      </div>
    </main>
    <NavBar active-menu="index" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onActivated, onDeactivated, watch, nextTick, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getVideoListApi } from '@/api/video'
  import { useAppStore } from '@/store/app'

  import { PullRefresh, List } from 'vant'
  import type { Video, VideoListRequest } from '@/types/video'
  import type { DataWithAd } from '@/types/global.d'
  import { fromNow, openAd, insertAds, formatNumber } from '@/utils'
  import NavBar from '@/components/layout/NavBar.vue'

  const route = useRoute()
  const router = useRouter()
  const appStore = useAppStore()

  const videos = ref<DataWithAd<Video>[]>([])
  const activeTab = ref(0)
  const tabs = ref([
    { label: '最新', value: 1 },
    { label: '最热', value: 2 },
    { label: '好评', value: 3 },
    { label: '收藏', value: 4 }
  ])

  let listLoading = ref(false)
  let refreshing = ref(false)
  let finished = ref(false)
  let error = ref(false)

  let pageIndex = ref(1) // 当前页码

  let scrollPosition = 0
  let shouldReloadData = true

  const videoListAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(28).items
    return tmp || []
  })

  const clickVideo = (video: DataWithAd<Video>) => {
    if (video.isAd) {
      openAd(video.targetUrl, '视频列表广告', 'click', video.title, 1, video.id)
    } else {
      router.push({ name: 'play', params: { id: video.id } })
    }
  }

  const fetchVideos = async (sortType: number, isRefresh = false) => {
    if (isRefresh) {
      videos.value = []
      pageIndex.value = 1
      finished.value = false
    }
    if (finished.value) return

    try {
      listLoading.value = true
      const params: VideoListRequest = {
        PageIndex: pageIndex.value,
        PageSize: 10,
        SortType: sortType
      }

      const {
        data: { data }
      } = await getVideoListApi(params)

      if (data && Array.isArray(data.items)) {
        data.items = insertAds(data.items, videoListAdvertisement.value, 5, 7, false)

        if (isRefresh) {
          videos.value = data.items
        } else {
          videos.value = videos.value.concat(data.items)
        }
        if (data.items.length < params.PageSize) {
          finished.value = true
        }
      }
    } catch (error) {
      console.error('获取视频列表失败:', error)
    } finally {
      listLoading.value = false
      refreshing.value = false
    }
  }

  const changeTab = (tabValue: number) => {
    window.scrollTo(0, 0)
    activeTab.value = tabValue
    videos.value = []
    fetchVideos(tabValue, true)
  }

  const loadData = () => {
    pageIndex.value += 1
    fetchVideos(activeTab.value)
  }

  const refreshList = () => {
    fetchVideos(activeTab.value, true)
  }

  onActivated(() => {
    if (shouldReloadData) {
      const initialTab = parseInt(route.params.id as string, 10) || 0
      activeTab.value = initialTab
      fetchVideos(activeTab.value, true)
      window.scrollTo(0, 0)
    } else {
      nextTick(() => {
        setTimeout(() => {
          document.documentElement.scrollTop = scrollPosition
          document.body.scrollTop = scrollPosition
        }, 100)
      })
    }
    shouldReloadData = true
  })

  onDeactivated(() => {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  })

  watch(
    () => route.name,
    (newRouteName, oldRouteName) => {
      if (oldRouteName == 'play' && newRouteName == 'videoList') {
        console.log('set shouldReloadData to false')
        shouldReloadData = false
      }
    }
  )
</script>
