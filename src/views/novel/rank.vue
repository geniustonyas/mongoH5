<template>
  <div class="novel-rank page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>排行榜</span>
      </div>
      <div class="d-r" />
    </header>
    <div v-if="loading" class="loading-container">
      <Loading />
    </div>
    <div v-else-if="error" class="error-container">
      <van-empty image="error" :description="error" />
    </div>
    <template v-else>
      <div class="au-main novel-main">
        <div class="mv-t-c">
          <div class="mc-b">
            <div class="tabs-wrapper">
              <div ref="tabsRef" class="b-tabs" :class="{ 'is-fixed': isTabFixed }">
                <span
                  v-for="tab in rankTabs"
                  :key="tab.value"
                  :class="{ active: activeRankingList === tab.value }"
                  @click="handleTabClick(tab.index, tab.value)"
                >
                  {{ tab.label }}
                </span>
              </div>
            </div>
            <swiper
              :slides-per-view="1"
              :auto-height="true"
              :loop="false"
              @slide-change="handleSwipeChange"
              @swiper="getSwiperClass"
              :allow-touch-move="!isPc"
            >
              <swiper-slide :virtual-index="1">
                <Rank v-if="activeRankingList === 'Hots'" :data="hotBooks" :is-row="isRowLayout" />
              </swiper-slide>
              <swiper-slide :virtual-index="2">
                <Rank v-if="activeRankingList === 'Series'" :data="serialBooks" :is-row="isRowLayout" />
              </swiper-slide>
              <swiper-slide :virtual-index="3">
                <Rank v-if="activeRankingList === 'End'" :data="endBooks" :is-row="isRowLayout" />
              </swiper-slide>
              <swiper-slide :virtual-index="4">
                <Rank v-if="activeRankingList === 'NewHots'" :data="newHotBooks" :is-row="isRowLayout" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import Loading from '@/components/layout/Loading.vue'
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { Swiper as SwiperClass } from 'swiper/types'
  import Rank from './components/Rank.vue'
  import { NovelIndexListItem, NovelStatus } from '@/types/novel'
  import { getNovelIndexList } from '@/api/novel'
  import { useAppStore } from '@/store/app'
  import decryptionService from '@/utils/decryptionService'
  import 'swiper/css'

  const router = useRouter()
  const loading = ref(false)
  const error = ref<string | null>(null)
  const appStore = useAppStore()
  const decrypt = new decryptionService()
  const createdUrls = ref<string[]>([])

  const isPc = computed(() => appStore.isPc)
  const isRowLayout = ref(true)
  const activeRankingList = ref('Hots')
  const swiperInstance = ref<SwiperClass>()

  const hotBooks = ref<NovelIndexListItem[]>([])
  const serialBooks = ref<NovelIndexListItem[]>([])
  const endBooks = ref<NovelIndexListItem[]>([])
  const newHotBooks = ref<NovelIndexListItem[]>([])

  const rankTabs = [
    { label: '畅销榜', value: 'Hots', index: 0 },
    { label: '连载榜', value: 'Series', index: 1 },
    { label: '完结榜', value: 'End', index: 2 },
    { label: '新书榜', value: 'NewHots', index: 3 }
  ]

  const isTabFixed = ref(false)
  const tabsRef = ref<HTMLElement | null>(null)
  const tabsOffsetTop = ref(0)

  const handleTabClick = (index: number, name: string) => {
    swiperInstance.value?.slideTo(index)
    activeRankingList.value = name
  }

  const getSwiperClass = (swiper: SwiperClass) => {
    swiperInstance.value = swiper
  }

  const handleSwipeChange = () => {
    if (!swiperInstance.value) return

    switch (swiperInstance.value.activeIndex) {
      case 0:
        activeRankingList.value = 'Hots'
        break
      case 1:
        activeRankingList.value = 'Series'
        break
      case 2:
        activeRankingList.value = 'End'
        break
      case 3:
        activeRankingList.value = 'NewHots'
        break
    }
  }

  async function decryptBookImage(book: NovelIndexListItem) {
    if (book.coverUrl === '') {
      book.coverUrl = '/src/assets/imgs/default2.gif'
    } else {
      const url = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl))
      // 检查解密后的URL是否包含本地开发地址
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        book.coverUrl = '/src/assets/imgs/default2.gif'
        URL.revokeObjectURL(url)
      } else {
        createdUrls.value.push(url)
        book.coverUrl = url
      }
    }
    return book
  }

  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

  function formatBookStatusText(status: NovelStatus): string {
    switch (status) {
      case NovelStatus.Serial:
        return '连载中'
      case NovelStatus.Finished:
        return '完结'
      default:
        return ''
    }
  }

  function formatBookStatus(
    hots: NovelIndexListItem[],
    news: NovelIndexListItem[],
    serial: NovelIndexListItem[],
    ends: NovelIndexListItem[],
    newhots: NovelIndexListItem[]
  ) {
    const formatBooks = (books: NovelIndexListItem[]) => {
      books.forEach(item => {
        item.statusText = formatBookStatusText(item.status)
      })
    }

    formatBooks(hots)
    formatBooks(news)
    formatBooks(serial)
    formatBooks(ends)
    formatBooks(newhots)
  }

  const fetchRankList = async () => {
    try {
      loading.value = true
      error.value = null
      cleanupUrls()

      // 获取首页数据，包含所有榜单
      const response = await getNovelIndexList()
      const { data } = response.data

      // 格式化书籍状态
      formatBookStatus(data.hots, data.news, data.serial, data.end, data.newhots)

      // 处理畅销榜数据
      hotBooks.value = await Promise.all(data.hots.map(decryptBookImage))

      // 处理连载榜数据
      serialBooks.value = await Promise.all(data.serial.map(decryptBookImage))

      // 处理完结榜数据
      endBooks.value = await Promise.all(data.end.map(decryptBookImage))

      // 处理新书榜数据
      newHotBooks.value = await Promise.all(data.newhots.map(decryptBookImage))
    } catch (err) {
      error.value = '获取排行榜数据失败'
      console.error('获取排行榜数据失败:', err)
    } finally {
      loading.value = false
    }
  }

  // 监听滚动
  const handleScroll = () => {
    if (!tabsRef.value) return

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    isTabFixed.value = scrollTop >= tabsOffsetTop.value
  }

  // 获取tab的初始位置
  const initTabPosition = () => {
    if (!tabsRef.value) return
    tabsOffsetTop.value = tabsRef.value.offsetTop
  }

  onMounted(() => {
    initTabPosition()
    window.addEventListener('scroll', handleScroll)
    fetchRankList()
  })

  onUnmounted(() => {
    cleanupUrls()
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped lang="less">
  .loading-container,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    gap: 16px;
  }

  .b-tabs {
    &.is-fixed {
      position: fixed;
      top: 4.5rem;
      left: 0;
      right: 0;
      background-color: #1e1e1e;
      z-index: 100;
    }
  }
</style>
