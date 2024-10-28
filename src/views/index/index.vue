<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input id="searchInput" class="search-inputs" />
            <i class="mvfont mv-search1" />
          </div>
          <div class="sb-t">
            <Swipe :autoplay="3000" :vertical="true" :show-indicators="false" :touchable="false" style="line-height: 50px">
              <SwipeItem>番号/片名/演员</SwipeItem>
              <SwipeItem v-for="item in appStore.searchInputText.split(',')" :key="item">
                <span>{{ item }}</span>
              </SwipeItem>
            </Swipe>
          </div>
        </div>
        <!-- <div class="hs-c">
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-lishishijian-" /></a>
          <a @click="router.push({ name: 'home' })"><i class="mvfont mv-touxiang1" /></a>
        </div> -->
        <div class="hs-c">
          <a class="c-hot" @click="router.push({ name: 'hotVideo' })"><i class="mvfont mv-zhutirebangbeifen" /></a>
        </div>
      </div>
      <div class="category-tabs">
        <Tabs v-model:active="activeId" class="vant-tabs" @click-tab="clickTab" title-active-color="transparent">
          <Tab title="首页" name="0" />
          <Tab v-for="category in appStore.categorys" :key="category.d" :title="category.t" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <Swipe v-model="activeId" :show-indicators="false" :loop="false" @change="swipePage" lazy-render ref="swipeRef">
        <SwipeItem>
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="index-content">
              <!--Banner-->
              <nav id="index-banner" class="swiper-container">
                <Swipe class="my-swipe" :autoplay="3000" lazy-render>
                  <SwipeItem v-for="ad in appStore.getAdvertisementById(2).items" :key="ad.id">
                    <a target="_blank" :href="ad.targetUrl">
                      <img :src="appStore.cdnUrl + ad.imgUrl" :alt="ad.title" />
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

              <nav v-if="recommendedVideos && recommendedVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>热门推荐</span>
                  </div>
                  <div class="a-r">
                    <i @click="router.push({ name: 'videoList', params: { id: 2 } })" class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" />
                </div>
              </nav>

              <nav v-if="latestVideos && latestVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>最新视频</span>
                  </div>
                  <div class="a-r">
                    <i @click="router.push({ name: 'videoList', params: { id: 1 } })" class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in latestVideos" :key="video.id" :video="video" />
                </div>
              </nav>
            </div>
          </PullRefresh>
        </SwipeItem>
        <SwipeItem v-for="category in appStore.categorys" :key="category.d">
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="category-content">
              <div class="mv-swiper" @touchstart.stop @touchmove.stop>
                <swiper :modules="modules" :slides-per-view="2" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any">
                  <swiper-slide v-for="categoryBanner in categoryBannerMap[category.d]" :key="categoryBanner.id">
                    <a @click="router.push({ name: 'play', params: { id: categoryBanner.id } })">
                      <img v-lazy="categoryBanner.poster" :alt="categoryBanner.title" />
                    </a>
                  </swiper-slide>
                </swiper>
              </div>
              <section class="m-l-b">
                <nav v-if="category.s && category.s.length > 0" class="b-a">
                  <span :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')">全部</span>
                  <span v-for="cates in category.s" :key="cates.d" :class="{ active: query.SubChannelId == cates.d }" @click="selectCategory(cates.d)">
                    {{ cates.t }}
                  </span>
                </nav>
                <nav class="b-b">
                  <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: query.SortType == sort.value }" @click="changeSort(sort.value)">
                    {{ sort.label }}
                  </span>
                </nav>
                <nav class="mv-t-l">
                  <div class="m-b" v-if="categoryVideosMap[category.d]">
                    <VideoGridItem v-for="video in categoryVideosMap[category.d]" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                  </div>
                  <div class="au-pagination-box" v-if="categoryTotalPages[category.d] > 1">
                    <div class="pb-x">
                      <a @click="changePage(categoryPageIndex[category.d] - 1)" :class="{ disabled: categoryPageIndex[category.d] == 1 }">上一页</a>
                    </div>
                    <div class="pb-x">
                      <input v-model="categoryPageIndex[category.d]" @change="handlePageChange" type="number" min="1" :max="categoryTotalPages[category.d]" />
                      <span>/ {{ categoryTotalPages[category.d] }}</span>
                    </div>
                    <div class="pb-x">
                      <a @click="changePage(categoryPageIndex[category.d] + 1)" :class="{ disabled: categoryPageIndex[category.d] == categoryTotalPages[category.d] }">下一页</a>
                    </div>
                  </div>
                </nav>
              </section>
            </div>
          </PullRefresh>
        </SwipeItem>
      </Swipe>
      <Popup v-model:show="showPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a target="_blank" :href="currentPopAd.targetUrl"><img :src="appStore.cdnUrl + currentPopAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closePopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
      <div v-if="appStore.hasShownDownload && !appStore.isAppEnvironment" class="fixed-foot" id="fixed-downloadApp">
        <div class="ff-bd">
          <div class="d-c">
            <div class="f-a">
              <img :src="getAssetsFile('logo-2.png')" />
              <span>
                <b>芒果TV-下载不迷路</b>
                <small>海量高清无码，国产吃瓜抢先看</small>
              </span>
            </div>
            <div class="f-b">
              <a>安装</a>
              <span @click="closeDownloadPopup"><i class="mvfont mv-close" /></span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getIndexVideoListApi, getVideoListApi } from '@/api/video'
import { Tabs, Tab, Swipe, SwipeItem, PullRefresh, Popup, Icon } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import type { VideoListRequest, Video } from '@/types/video'
import { getAssetsFile } from '@/utils'
import { Autoplay } from 'swiper/modules'
import type { SwipeInstance } from 'vant'
import { throttle } from 'lodash-es'
import 'swiper/css'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStoreHook()

const decrypt = new decryptionService()

const swipeRef = ref<SwipeInstance>()
const modules = [Autoplay]

const refreshing = ref(false)

const activeId = ref(0)
const recommendedVideos = ref<Video[]>([])
const latestVideos = ref<Video[]>([])

const categoryVideosMap = ref({})
const categoryBannerMap = ref({})
const categoryTotalPages = ref({})
const categoryPageIndex = ref({})

const sortOptions = [
  { label: '按最新', value: 1 },
  { label: '按最热', value: 2 },
  { label: '按好评', value: 3 }
]

const query = reactive<VideoListRequest>({
  ChannelId: '',
  SubChannelId: '',
  SortType: 2,
  IsFirst: true,
  PageIndex: 1,
  PageSize: 20
})

const showPopup = ref(false)
const currentPopAdIndex = ref(0)
const popAdvertisement = appStore.getAdvertisementById(3).items

const currentPopAd = computed(() => {
  var item = popAdvertisement[currentPopAdIndex.value]
  return item || {}
})

// 使用 watch 的立即执行选项来检查 showAnnouncement
watch(
  () => appStore.showAnnouncement,
  (newVal) => {
    if (newVal && popAdvertisement.length > 0) {
      showPopup.value = true
    }
  },
  { immediate: true } // 立即执行
)

watch(
  () => route.query.inviteCode,
  (newVal) => {
    if (newVal) {
      localStorage.setItem('inviteCode', newVal as string)
    }
  },
  { immediate: true }
)

const closePopup = () => {
  if (currentPopAdIndex.value < popAdvertisement.length - 1) {
    currentPopAdIndex.value++
    showPopup.value = true
  } else {
    showPopup.value = false
    appStore.hasShownAnnouncement = false
  }
}

const fetchVideos = async (params: VideoListRequest) => {
  try {
    const {
      data: { data }
    } = await getVideoListApi(params)
    if (data && Array.isArray(data.items)) {
      const videoList = data.items.map((video) => ({ ...video, poster: '' }))
      const swiperList = data.newVideos.map((video) => ({ ...video, poster: '' }))
      categoryVideosMap.value[query.ChannelId] = videoList
      categoryBannerMap.value[query.ChannelId] = swiperList
      categoryTotalPages.value[query.ChannelId] = parseInt(data.pageCount)
      categoryPageIndex.value[query.ChannelId] = parseInt(data.pageIndex)

      if (categoryVideosMap.value[query.ChannelId] && categoryVideosMap.value[query.ChannelId].length > 0) {
        categoryVideosMap.value[query.ChannelId].forEach(async (video) => {
          video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        })
      }

      if (categoryBannerMap.value[query.ChannelId] && categoryBannerMap.value[query.ChannelId].length > 0) {
        categoryBannerMap.value[query.ChannelId].forEach(async (video) => {
          video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        })
      }
    } else {
      console.error('响应数据结构不正确')
      return []
    }
  } catch (error) {
    console.error(`获取视频列表失败:`, error)
    return []
  }
}

const fetchIndexVideos = async () => {
  try {
    const {
      data: { data }
    } = await getIndexVideoListApi()
    // 解密视频
    recommendedVideos.value = data.Recommended
    latestVideos.value = data.Latest
    // 异步解密图片
    recommendedVideos.value.forEach(async (video) => {
      video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
    })
    latestVideos.value.forEach(async (video) => {
      video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
    })
  } catch (error) {
    console.error(`获取首页视频列表失败:`, error)
    return []
  }
}

// 选择二级分类
const selectCategory = async (categoryId: string | number) => {
  query.PageIndex = 1 // 重置页码
  categoryPageIndex.value[query.ChannelId] = 1
  query.SubChannelId = categoryId
  await fetchVideos(query)
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    categoryPageIndex.value[query.ChannelId] = newPage
    query.PageIndex = newPage
    await fetchVideos(query)
    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      const mainElement = document.querySelector('.category-content')
      if (mainElement) {
        mainElement.scrollTop = 0 // 重置滚动条到顶部
      }
    })
  }
}

// 点击tab滑动到对应分类, 并重新获取数据
const clickTab = () => {
  swipeRef.value.swipeTo(activeId.value, { immediate: true })
  // query.ChannelId = appStore.categorys[activeId.value - 1].d
  // if (!categoryVideosMap.value[query.ChannelId] || categoryVideosMap.value[query.ChannelId].length == 0) {
  //   handleCategoryChange()
  // } else {
  //   query.SubChannelId = ''
  // }
}

// 切换分类
const handleCategoryChange = async (isRefresh = false) => {
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  if (isRefresh) {
    refreshing.value = true
  }
  if (activeId.value == 0) {
    await fetchIndexVideos()
    refreshing.value = false
  } else {
    await fetchVideos(query)
    refreshing.value = false
  }
}

const swipePage = throttle(async (index: number) => {
  activeId.value = index
  query.ChannelId = activeId.value == 0 ? '' : appStore.categorys[activeId.value - 1].d
  if (!categoryVideosMap.value[query.ChannelId] || categoryVideosMap.value[query.ChannelId].length == 0) {
    handleCategoryChange()

    // 预加载下一个swipeItem的内容
    // if (!categoryVideosMap.value[appStore.categorys[activeId.value].d] || categoryVideosMap.value[appStore.categorys[activeId.value].d].length == 0) {
    //   await fetchVideos({ ...query, ChannelId: appStore.categorys[activeId.value].d })
    // }
  } else {
    query.SubChannelId = ''
  }
}, 200)

// 分类页切换排序
const changeSort = async (sortValue) => {
  query.SortType = sortValue
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  await fetchVideos(query)
}

// 页码变化
const handlePageChange = async () => {
  if (categoryPageIndex.value[query.ChannelId] >= 1 && categoryPageIndex.value[query.ChannelId] <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = categoryPageIndex.value[query.ChannelId]
    await fetchVideos(query)

    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      const mainElement = document.querySelector('.category-content')
      if (mainElement) {
        mainElement.scrollTop = 0 // 重置滚动条到顶部
      }
    })
  }
}

// 立即执行
;(async () => {
  await handleCategoryChange()
})()

const openDownloadPage = () => {
  const baseUrl = window.location.origin + import.meta.env.BASE_URL
  window.open(baseUrl + 'appdownload/index.html', '_blank')
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.header')!
  const hmB = document.querySelector('.search-icon') as HTMLElement

  if (header && hmB) {
    if (scrollTop > 100) {
      hmB.style.display = 'block'
      header.classList.add('fixed')
    } else {
      hmB.style.display = 'none'
      header.classList.remove('fixed')
    }
  }
}

// 关闭下载弹窗并更新状态
const closeDownloadPopup = () => {
  appStore.setHasShownDownload(false)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
</script>

<style scoped>
.category-content {
  min-height: 550px;
}
</style>
