<template>
  <div class="page">
    <header class="header index-header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input id="searchInput" class="search-inputs" />
            <i class="mvfont mv-search1" />
          </div>
          <div class="sb-t" v-if="appStore.searchInputText && keepAlive">
            <swiper @swiper="searchSwiper" :modules="[Autoplay]" :slides-per-view="1" :auto-height="true" direction="vertical" :centered-slides="true" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false } as any" :nested="true" style="line-height: 50px">
              <swiper-slide v-for="item in appStore.searchInputText.split(',')" :key="item">
                <span>{{ item }}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="hs-c">
          <a class="c-hot" @click="router.push({ name: 'hotVideo' })"><i class="mvfont mv-zhutirebangbeifen" /></a>
        </div>
      </div>
      <div v-if="appStore.isPc" class="head-menu">
        <div class="hm-a">
          <a :class="{ active: activeId === 0 }" @click="clickTabPc(0)">首页</a>
          <a v-for="(category, index) in appStore.categorys" :key="category.d" :class="{ active: activeId === index + 1 }" @click="clickTabPc(index + 1)">
            {{ category.t }}
          </a>
        </div>
        <div class="hm-b">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
      <div v-else class="category-tabs">
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
      <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="swipePage" :allow-touch-move="!appStore.isPc" :no-swiping="!appStore.isPc" no-swiping-class="no-swipe">
        <swiper-slide>
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="web-col">
              <nav v-if="bannerAdvertisement && bannerAdvertisement.length > 0 && keepAlive" id="index-banner" class="swiper-container">
                <swiper class="my-swipe" :modules="[Autoplay, Pagination]" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                  <swiper-slide v-for="ad in bannerAdvertisement" :key="ad.id">
                    <a target="_blank" @click="openAd(ad.targetUrl, '首页banner', 'click', ad.id)"><img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" /></a>
                  </swiper-slide>
                </swiper>
              </nav>

              <nav class="wc-r">
                <NoticeBar @click="openAd(noticeAdvertisement[0].targetUrl, '首页滚动公告', 'click', noticeAdvertisement[0].id)" left-icon="volume-o" :text="noticeAdvertisement.length > 0 ? decodeHtmlEntities(noticeAdvertisement[0].introduction) : ''" :delay="1" />

                <IconAd />

                <nav class="i-m-b">
                  <div class="b-row r-ad">
                    <a @click.prevent="openDownloadPage" href="#">
                      <span><i class="mvfont mv-appxiazai" /></span>
                      <small>APP下载</small>
                    </a>
                    <a @click="redirectCategory(3, 42)">
                      <span><i class="mvfont mv-n91" /><em>91</em></span>
                      <small>{{ dashen }}</small>
                    </a>
                    <a @click="redirectCategory(3, 40)">
                      <span><i class="mvfont mv-madou1" /></span>
                      <small>{{ madou }}</small>
                    </a>
                    <a @click="router.push({ name: 'spare' })">
                      <span><i class="mvfont mv-yizhangtong" /></span>
                      <small>防丢失</small>
                    </a>
                    <!-- <a>
                      <span><i class="mvfont mv-changjianwenti" /></span>
                      <small>常见问题</small>
                    </a> -->
                    <a @click="router.push({ name: 'share' })">
                      <span><i class="mvfont mv-fenxiang3" /></span>
                      <small>分享赚钱</small>
                    </a>
                    <!-- <a @click="showToast('暂未开通')">
                      <span><i class="mvfont mv-vip1" /></span>
                      <small>开通VIP</small>
                    </a> -->
                  </div>

                  <div v-if="bannerTextAd && bannerTextAd.length > 0" class="b-row r-ad">
                    <a @click="openAd(bannerTextAd[0].targetUrl, '首页文字广告', 'click', bannerTextAd[0].id)">
                      <span><i class="mvfont mv-zbza1" /><em /></span>
                      <small>{{ bannerTextAd[0].title }}</small>
                    </a>
                    <a @click="openAd(bannerTextAd[1].targetUrl, '首页文字广告', 'click', bannerTextAd[1].id)">
                      <span><i class="mvfont mv-tcyp" /><em /></span>
                      <small>{{ bannerTextAd[1].title }}</small>
                    </a>
                    <a @click="openAd(bannerTextAd[2].targetUrl, '首页文字广告', 'click', bannerTextAd[2].id)">
                      <span><i class="mvfont mv-kuang2" /><em>精</em></span>
                      <small>{{ bannerTextAd[2].title }}</small>
                    </a>
                    <a @click="openAd(bannerTextAd[3].targetUrl, '首页文字广告', 'click', bannerTextAd[3].id)">
                      <span><i class="mvfont mv-jingzhun" /><em /></span>
                      <small>{{ bannerTextAd[3].title }}</small>
                    </a>
                    <a @click="openAd(bannerTextAd[4].targetUrl, '首页文字广告', 'click', bannerTextAd[4].id)">
                      <span><i class="mvfont mv-cvFilter" /><em>准</em></span>
                      <small>{{ bannerTextAd[4].title }}</small>
                    </a>
                  </div>
                </nav>
              </nav>
            </div>

            <!-- 最新视频 -->
            <nav v-if="latestVideos.length > 0" class="mv-t-c">
              <div class="mc-a">
                <div class="a-l">
                  <i class="mvfont mv-xietiao" />
                  <span>最新视频</span>
                </div>
                <div class="a-r">
                  <span>
                    <em v-for="(chunk, index) in latestVideos" :key="index" :class="{ active: index === latestActiveIndex }" />
                  </span>
                  <span @click="router.push({ name: 'videoList', params: { id: 1 } })">更多<i class="mvfont mv-right" /></span>
                </div>
              </div>
              <div class="mc-b">
                <swiper :modules="[Pagination]" :slides-per-view="1" @slide-change="onLatestSlideChange" class="no-swipe">
                  <swiper-slide v-for="(chunk, index) in latestVideos" :key="index">
                    <nav class="mv-t-l">
                      <div class="m-b">
                        <VideoGridItem v-for="video in chunk" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                      </div>
                    </nav>
                  </swiper-slide>
                </swiper>
              </div>
            </nav>

            <!-- 列表横幅广告 -->
            <div v-if="listBannerAdvertisement && listBannerAdvertisement.length > 0" class="ad-box1">
              <img @click="openAd(listBannerAdvertisement[0].targetUrl, '首页列表横幅', 'click', listBannerAdvertisement[0].id)" :key="listBannerAdvertisement[0].id" v-lazy-decrypt="listBannerAdvertisement[0].imgUrl" :alt="listBannerAdvertisement[0].title" />
            </div>

            <!-- 热门推荐 -->
            <nav v-if="recommendedVideos.length > 0" class="mv-t-c">
              <div class="mc-a">
                <div class="a-l">
                  <i class="mvfont mv-xietiao" />
                  <span>热门推荐</span>
                </div>
                <div class="a-r">
                  <span>
                    <em v-for="(chunk, index) in recommendedVideos" :key="index" :class="{ active: index == recommendedActiveIndex }" />
                  </span>
                  <span @click="router.push({ name: 'videoList', params: { id: 2 } })">更多<i class="mvfont mv-right" /></span>
                </div>
              </div>
              <div class="mc-b">
                <swiper :modules="[Pagination]" :slides-per-view="1" @slide-change="onRecommendedSlideChange" class="no-swipe">
                  <swiper-slide v-for="(chunk, index) in recommendedVideos" :key="index">
                    <nav class="mv-t-l">
                      <div class="m-b">
                        <VideoGridItem v-for="video in chunk" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                      </div>
                    </nav>
                  </swiper-slide>
                </swiper>
              </div>
            </nav>

            <!-- 列表横幅广告 -->
            <div v-if="listBannerAdvertisement && listBannerAdvertisement.length > 0" class="ad-box1">
              <img @click="openAd(listBannerAdvertisement[0].targetUrl, '首页列表横幅', 'click', listBannerAdvertisement[0].id)" :key="listBannerAdvertisement[0].id" v-lazy-decrypt="listBannerAdvertisement[0].imgUrl" :alt="listBannerAdvertisement[0].title" />
            </div>

            <template v-for="(channel, channelIndex) in channelVideos" :key="channel.label">
              <nav v-if="channel.videos.length > 0" class="mv-t-c" :key="channelIndex">
                <div class="mc-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>{{ channel.label }}</span>
                  </div>
                  <div class="a-r">
                    <!-- <span>
                      <em v-for="(chunk, index) in channel.videos" :key="index" :class="{ active: index == channelActiveIndices[channelIndex] }" />
                    </span> -->
                    <!-- <span @click="redirectCategory(channelIndex + 1, '')">更多<i class="mvfont mv-right" /></span> -->
                  </div>
                </div>
                <div class="mc-b">
                  <nav class="mv-t-l">
                    <div class="m-b">
                      <VideoGridItem v-for="video in channel.videos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                    </div>
                    <div class="mc-c">
                      <span @click="redirectCategory(channelIndex + 1, '')">更多内容</span>
                      <span @click="refreshChannelVideos(channelIndex)">换一换</span>
                    </div>
                  </nav>
                </div>
              </nav>
            </template>
          </PullRefresh>
        </swiper-slide>

        <!-- 分类 -->
        <swiper-slide v-for="category in appStore.categorys" :key="category.d">
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div v-if="categoryBannerVideosMap[category.d] && categoryBannerVideosMap[category.d].length > 0 && keepAlive" class="mv-swiper">
              <swiper :modules="[Autoplay]" :slides-per-view="appStore.isPc ? 5 : 2" :centered-slides="!appStore.isPc" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                <swiper-slide v-for="video in categoryBannerVideosMap[category.d]" :key="video.id">
                  <a @click="router.push({ name: 'play', params: { id: video.id } })">
                    <img v-lazy-decrypt="video.imgUrl" :alt="video.title" />
                  </a>
                </swiper-slide>
              </swiper>
            </div>

            <IconAd />
            <!-- 分类 -->
            <section class="m-l-b">
              <!-- <swiper v-if="category.s && category.s.length > 0" class="b-a" :modules="[FreeMode]" :free-mode="true as any" :slides-per-view="'auto'" :space-between="10" :loop="false" :nested="true">
                <swiper-slide :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')"><span>全部</span></swiper-slide>
                <swiper-slide v-for="cates in category.s" :key="cates.d" :class="{ active: categorySubChannelId[query.ChannelId] == cates.d }" @click="selectCategory(cates.d)">
                  <span>{{ cates.t }}</span>
                </swiper-slide>
              </swiper> -->
              <nav v-if="category.s && category.s.length > 0" class="b-a no-swipe">
                <span :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')">全部</span>
                <span v-for="cates in category.s" :key="cates.d" :class="{ active: categorySubChannelId[query.ChannelId] == cates.d }" @click="selectCategory(cates.d)">
                  {{ cates.t }}
                </span>
              </nav>
              <nav class="b-b">
                <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: categorySortType[query.ChannelId] == sort.value }" @click="changeSort(sort.value)">
                  {{ sort.label }}
                </span>
              </nav>
              <nav class="mv-t-l">
                <div class="m-b" v-if="categoryVideosMap[category.d]">
                  <VideoGridItem v-for="video in categoryVideosMap[category.d]" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                </div>

                <template v-if="categoryTotalPages[category.d] > 1">
                  <div class="au-pagination-box" v-if="appStore.isPc || (!appStore.isPc && categoryTotalPages[category.d] > 9)">
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
                  <div v-else class="more-box"><a v-if="categoryPageIndex[category.d] < categoryTotalPages[category.d]" @click="loadMore">加载更多</a></div>
                </template>
              </nav>
            </section>
          </PullRefresh>
        </swiper-slide>
      </swiper>
      <!-- 首页弹窗 -->
      <Popup v-model:show="showPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a target="_blank" :href="currentPopAd.targetUrl"><img v-lazy-decrypt="currentPopAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closePopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
    </main>
    <Footer active-menu="index" />
    <NavBar active-menu="index" />
    <DownloadPop />
    <Suggestion v-model:show-btn="showSuggestion" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, computed, watch, onMounted, onActivated, onDeactivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Suggestion from '@/components/Suggestion.vue'
import IconAd from '@/components/Advertisement/IconAd.vue'
import { getIndexVideoListApi, getVideoListApi } from '@/api/video'
import { PullRefresh, Popup, Icon, Tabs, Tab, NoticeBar } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStoreHook } from '@/store/app'
import type { VideoListRequest, Video } from '@/types/video'
import { getAssetsFile, openAd, decodeHtmlEntities, chunkArray } from '@/utils'
import { Autoplay, Pagination } from 'swiper/modules'
import { dashen, madou, indexCategory } from '@/utils/cryptedData'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'
import DownloadPop from '@/components/DownloadPop.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStoreHook()
const showSuggestion = ref(true)

const keepAlive = ref(true)
const swiperInstance = ref<any>(null)
const searchSwiperInstance = ref<any>(null)

const refreshing = ref(false)
const isRedirectCategory = ref(false)

const activeId = ref(0)
const recommendedVideos = ref<Video[][]>([])
const latestVideos = ref<Video[][]>([])
const channelVideos = ref<{ label: string; value: string; videos: Video[] }[]>([])

const categoryVideosMap = ref({})
const categoryBannerVideosMap = ref({})
const categoryTotalPages = ref({})
const categoryPageIndex = ref({})
const categorySortType = ref({})
const categorySubChannelId = ref({})

const latestActiveIndex = ref(0)
const recommendedActiveIndex = ref(0)
// const channelActiveIndices = ref<number[]>([])

const offset = ref({ x: 0, y: 100 })

const sortOptions = [
  { label: '按最新', value: 1 },
  { label: '按最热', value: 2 },
  { label: '按好评', value: 3 }
]

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const searchSwiper = (swiper: any) => {
  searchSwiperInstance.value = swiper
}

const query = reactive<VideoListRequest>({
  ChannelId: '',
  SubChannelId: '',
  SortType: 2,
  IsFirst: true,
  PageIndex: 1,
  PageSize: 20
})

const bannerTextAd = computed(() => {
  const tmp = appStore.getAdvertisementById(11).items
  return tmp || []
})

const showPopup = ref(false)
const currentPopAdIndex = ref(0)
const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(2).items
  return tmp || []
})
const popAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(3).items
  return tmp || []
})
const listBannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(13).items
  return tmp || []
})

const noticeAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(17).items
  return tmp || []
})

const currentPopAd = computed(() => {
  var item = popAdvertisement.value[currentPopAdIndex.value]
  return item || {}
})

// 监听邀请码
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
  if (currentPopAdIndex.value < popAdvertisement.value.length - 1) {
    currentPopAdIndex.value++
    showPopup.value = true
  } else {
    showPopup.value = false
    appStore.hasShownAnnouncement = false
  }
}

const fetchVideos = async (params: VideoListRequest, loadMore = false) => {
  const currentChannelId = params.ChannelId // 保存当前的 ChannelId
  const isFirst = params.IsFirst
  try {
    const {
      data: { data }
    } = await getVideoListApi(params)
    if (data && Array.isArray(data.items)) {
      if (loadMore) {
        categoryVideosMap.value[currentChannelId] = categoryVideosMap.value[currentChannelId].concat(data.items)
      } else {
        categoryVideosMap.value[currentChannelId] = data.items
      }
      if (isFirst) {
        categoryBannerVideosMap.value[currentChannelId] = data.newVideos
      }
      query.IsFirst = false
      categoryTotalPages.value[currentChannelId] = parseInt(data.pageCount)
      categoryPageIndex.value[currentChannelId] = parseInt(data.pageIndex)
      nextTick(() => {
        swiperInstance.value.updateAutoHeight()
      })
    } else {
      console.error('响应数据结构不正确')
      return []
    }
  } catch (error) {
    console.error(`获取视频列表失败:`, error)
    return []
  }
}

const onLatestSlideChange = (swiper: any) => {
  latestActiveIndex.value = swiper.activeIndex
}

const onRecommendedSlideChange = (swiper: any) => {
  recommendedActiveIndex.value = swiper.activeIndex
}

// const onChannelSlideChange = (index: number, swiper: any) => {
//   channelActiveIndices.value[index] = swiper.activeIndex
// }

const fetchIndexVideos = async () => {
  try {
    const {
      data: { data }
    } = await getIndexVideoListApi()
    // 解密视频
    // recommendedVideos.value = data.Recommended
    // latestVideos.value = data.Latest
    recommendedVideos.value = chunkArray(data.Recommended, 6)
    latestVideos.value = chunkArray(data.Latest, 6)

    // 合并 indexCategory 和 Channels 数据
    if (data.Channels && data.Channels.length > 0) {
      channelVideos.value = indexCategory.map((category) => {
        const channel = data.Channels.find((ch) => ch.channel == category.value.toString())
        return {
          label: category.label,
          value: category.value,
          videos: channel ? channel.items.slice(0, 6) : []
        }
      })
    }
  } catch (error) {
    console.error(`获取首页视频列表失败:`, error)
    return []
  }
}

// 选择二级分类
const selectCategory = async (categoryId: string | number) => {
  query.PageIndex = 1
  query.SubChannelId = categoryId
  categoryPageIndex.value[query.ChannelId] = query.PageIndex
  categorySortType.value[query.ChannelId] = query.SortType
  categorySubChannelId.value[query.ChannelId] = query.SubChannelId
  query.IsFirst = false
  await fetchVideos(query)
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    categoryPageIndex.value[query.ChannelId] = newPage
    query.PageIndex = newPage
    query.IsFirst = false
    await fetchVideos(query)
    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  }
}

// 加载更多
const loadMore = async () => {
  const newPage = query.PageIndex + 1
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = newPage
    query.IsFirst = false
    await fetchVideos(query, true)
  }
}

// PC端方法来切换 tab
const clickTabPc = (index: number) => {
  activeId.value = index
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index, 0)
  }
}

// 点击tab滑动到对应分类, 并重新获取数据
const clickTab = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(activeId.value, 0)
  }
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
    query.IsFirst = true
    await fetchVideos(query)
    refreshing.value = false
  }
}

const swipePage = (swiper: any) => {
  activeId.value = swiper.activeIndex
  query.ChannelId = activeId.value == 0 ? '' : appStore.categorys[activeId.value - 1].d
  // 如果没有数据。则重新获取数据
  if (categoryVideosMap.value[query.ChannelId] == undefined) {
    query.PageIndex = 1
    query.SortType = 1
    categoryPageIndex.value[query.ChannelId] = 1
    if (isRedirectCategory.value) {
      categoryPageIndex.value[query.ChannelId] = query.PageIndex
      categorySortType.value[query.ChannelId] = query.SortType
      categorySubChannelId.value[query.ChannelId] = query.SubChannelId
    } else {
      query.SubChannelId = ''
    }
    categorySortType.value[query.ChannelId] = query.SortType
    handleCategoryChange()
  } else {
    selectCategory(query.SubChannelId)
  }
  isRedirectCategory.value = false
  nextTick(() => {
    window.scrollTo(0, 0)
  })
}

// 打开到指定的顶级分类和二级分类
const redirectCategory = (channelId: number, subChannelId: number | string) => {
  isRedirectCategory.value = true
  query.SubChannelId = subChannelId
  clickTabPc(channelId)
}

// 分类页切换排序
const changeSort = async (sortValue) => {
  query.SortType = sortValue
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  categorySortType.value[query.ChannelId] = query.SortType
  await fetchVideos(query)
}

// 页码变化
const handlePageChange = async () => {
  if (categoryPageIndex.value[query.ChannelId] >= 1 && categoryPageIndex.value[query.ChannelId] <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = categoryPageIndex.value[query.ChannelId]
    await fetchVideos(query)

    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    window.scrollTo(0, 0)
  }
}

// 立即执行
;(async () => {
  await handleCategoryChange()
  if (appStore.advertisement.length == 0) {
    await appStore.fetAdvertisement()
  }
})()

const openDownloadPage = () => {
  if (appStore.isPc) {
    window.open('https://mg14.cc/', '_blank')
  } else {
    const ua = navigator.userAgent
    if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
      window.open(appStore.iosDownloadUrl, '_blank')
    } else {
      window.open(appStore.androidDownloadUrl, '_blank')
    }
  }
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.index-header')!
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

onActivated(() => {
  showSuggestion.value = true
  const header = document.querySelector('.index-header')
  if (header) {
    header.classList.remove('fixed')
  }
  keepAlive.value = true
  window.scrollTo(0, 0)
})

onDeactivated(() => {
  keepAlive.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // 计算偏移量
  const bubbleWidth = 80 // 浮动元素的宽度
  const rightMargin = 10 // 距离右侧的距离
  offset.value.x = window.innerWidth - bubbleWidth - rightMargin
})

// 添加一个记录每个频道当前页码的对象
const channelPageIndexMap = ref<Record<string, number>>({})

// 添加换一换方法
const refreshChannelVideos = async (channelIndex: number) => {
  const channel = channelVideos.value[channelIndex]
  if (!channel) return

  // 获取或初始化当前页码
  if (!channelPageIndexMap.value[channel.value]) {
    channelPageIndexMap.value[channel.value] = 1
  }
  try {
    const {
      data: { data }
    } = await getVideoListApi({
      ChannelId: channel.value,
      SubChannelId: '',
      SortType: 1,
      PageIndex: channelPageIndexMap.value[channel.value] + 1,
      PageSize: 6,
      IsFirst: false
    })

    if (data && data.items) {
      if (data.items.length > 0) {
        channelVideos.value[channelIndex].videos = data.items
        channelPageIndexMap.value[channel.value]++
      } else {
        // 如果没有更多数据，重置到第一页
        channelPageIndexMap.value[channel.value] = 1
        const {
          data: { data: firstPageData }
        } = await getVideoListApi({
          ChannelId: channel.value,
          SubChannelId: '',
          SortType: 1,
          PageIndex: 1,
          PageSize: 6,
          IsFirst: false
        })
        if (firstPageData && firstPageData.items) {
          channelVideos.value[channelIndex].videos = firstPageData.items
        }
      }
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  }
}
</script>
