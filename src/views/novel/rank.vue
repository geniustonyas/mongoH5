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
          <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh" :disabled="isPc">
            <div class="content-wrapper">
              <div v-if="loading && !isLoadingMore" class="loading-container">
                <Loading />
              </div>
              <div v-else-if="error" class="error-container">
                <van-empty image="error" :description="error" />
              </div>
              <swiper
                v-else-if="!isDataEmpty"
                :slides-per-view="1"
                :initial-slide="rankTabs.findIndex(tab => tab.value === activeRankingList)"
                :auto-height="true"
                :loop="false"
                @slide-change="handleSwipeChange"
                @swiper="getSwiperClass"
                :allow-touch-move="!isPc"
              >
                <swiper-slide>
                  <Rank v-show="activeRankingList === 'Hots'" :data="hotBooks" :is-row="isRowLayout" />
                </swiper-slide>
                <swiper-slide>
                  <Rank v-show="activeRankingList === 'Series'" :data="serialBooks" :is-row="isRowLayout" />
                </swiper-slide>
                <swiper-slide>
                  <Rank v-show="activeRankingList === 'End'" :data="endBooks" :is-row="isRowLayout" />
                </swiper-slide>
                <swiper-slide>
                  <Rank v-show="activeRankingList === 'NewHots'" :data="newHotBooks" :is-row="isRowLayout" />
                </swiper-slide>
              </swiper>
              <div v-else class="empty-container">
                <van-empty description="暂无数据" />
              </div>
            </div>
          </van-pull-refresh>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import Loading from '@/components/layout/Loading.vue'
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { Swiper as SwiperClass } from 'swiper/types'
  import Rank from './components/Rank.vue'
  import { NovelListItem, BookStatus, NovelListRequest, NovelStatus } from '@/types/novel'
  import { getNovelList } from '@/api/novel'
  import { useAppStore } from '@/store/app'
  import decryptionService from '@/utils/decryptionService'
  import { showToast } from 'vant'
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

  const hotBooks = ref<NovelListItem[]>([])
  const serialBooks = ref<NovelListItem[]>([])
  const endBooks = ref<NovelListItem[]>([])
  const newHotBooks = ref<NovelListItem[]>([])

  const rankTabs = [
    { label: '畅销榜', value: 'Hots', index: 0, sortType: 0 },
    { label: '连载榜', value: 'Series', index: 1, sortType: 1 },
    { label: '完结榜', value: 'End', index: 2, sortType: 2 },
    { label: '新书榜', value: 'NewHots', index: 3, sortType: 3 }
  ]

  const isTabFixed = ref(false)
  const tabsRef = ref<HTMLElement | null>(null)
  const tabsOffsetTop = ref(0)

  const isLoadingMore = ref(false)
  const hasMore = ref(true)
  const currentPage = ref(1)
  const PAGE_SIZE = 10
  const isRefreshing = ref(false)

  const isDataEmpty = computed(() => {
    if (loading.value || isLoadingMore.value || error.value) return false

    switch (activeRankingList.value) {
      case 'Hots':
        return hotBooks.value.length === 0
      case 'Series':
        return serialBooks.value.length === 0
      case 'End':
        return endBooks.value.length === 0
      case 'NewHots':
        return newHotBooks.value.length === 0
      default:
        return true
    }
  })

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

  const getQueryParams = () => {
    const activeTab = rankTabs.find(tab => tab.value === activeRankingList.value)
    if (!activeTab) return null

    const params: NovelListRequest = {
      PageIndex: currentPage.value,
      PageSize: PAGE_SIZE,
      ReadingCount: 1,
      BookStatus: BookStatus.All
    }

    switch (activeTab.value) {
      case 'Series':
        params.BookStatus = BookStatus.Serial
        break
      case 'End':
        params.BookStatus = BookStatus.Finished
        break
      case 'NewHots':
        params.CreateTime = 1
        break
      default:
        params.BookStatus = BookStatus.All
    }

    return params
  }

  const onRefresh = async () => {
    try {
      currentPage.value = 1
      await fetchRankList()
    } finally {
      isRefreshing.value = false
    }
  }

  const fetchRankList = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        isLoadingMore.value = true
        currentPage.value++
      } else if (!isRefreshing.value) {
        loading.value = true
        currentPage.value = 1
        cleanupUrls()

        switch (activeRankingList.value) {
          case 'Hots':
            hotBooks.value = []
            break
          case 'Series':
            serialBooks.value = []
            break
          case 'End':
            endBooks.value = []
            break
          case 'NewHots':
            newHotBooks.value = []
            break
        }
      }

      const params = getQueryParams()
      if (!params) {
        error.value = '获取查询参数失败'
        return
      }

      error.value = null
      const response = await getNovelList(params)
      const { items } = response.data.data

      if (!items) {
        throw new Error('Invalid response data')
      }

      // 处理数据
      const processedData = await Promise.all(
        items.map(async book => {
          book.statusText = formatBookStatusText(book.status)
          return await decryptBookImage(book)
        })
      )

      // 更新对应列表数据
      switch (activeRankingList.value) {
        case 'Hots':
          hotBooks.value = isLoadMore ? [...hotBooks.value, ...processedData] : processedData
          break
        case 'Series':
          serialBooks.value = isLoadMore ? [...serialBooks.value, ...processedData] : processedData
          break
        case 'End':
          endBooks.value = isLoadMore ? [...endBooks.value, ...processedData] : processedData
          break
        case 'NewHots':
          newHotBooks.value = isLoadMore ? [...newHotBooks.value, ...processedData] : processedData
          break
      }

      // 更新分页状态
      hasMore.value = items.length === PAGE_SIZE
    } catch (err) {
      error.value = '获取排行榜数据失败'
      console.error('获取排行榜数据失败:', err)
      showToast({
        message: '获取数据失败，请重试',
        type: 'fail'
      })
    } finally {
      loading.value = false
      isLoadingMore.value = false
    }
  }

  const handleTabClick = async (index: number, name: string) => {
    if (activeRankingList.value === name) return

    activeRankingList.value = name
    if (swiperInstance.value) {
      try {
        await swiperInstance.value.slideTo(index)
      } catch (err) {
        console.error('Swiper slide failed:', err)
      }
    }
    fetchRankList()
  }

  const getSwiperClass = (swiper: SwiperClass) => {
    swiperInstance.value = swiper
  }

  const handleSwipeChange = () => {
    if (!swiperInstance.value) return

    const newIndex = swiperInstance.value.activeIndex
    const newTab = rankTabs[newIndex]
    if (newTab && activeRankingList.value !== newTab.value) {
      activeRankingList.value = newTab.value
      fetchRankList()
    }
  }

  async function decryptBookImage(book: NovelListItem) {
    if (book.coverUrl === '') {
      book.coverUrl = '/src/assets/imgs/default2.gif'
      return book
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl)

      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        console.warn('Invalid image data:', book.coverUrl)
        book.coverUrl = '/src/assets/imgs/default2.gif'
        return book
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      book.coverUrl = objectUrl
      return book
    } catch (error) {
      console.error('Image decryption failed:', error)
      book.coverUrl = '/src/assets/imgs/default2.gif'
      return book
    }
  }

  function validateImage(blob: Blob): Promise<boolean> {
    return new Promise(resolve => {
      if (blob.size === 0 || !blob.type.startsWith('image/')) {
        resolve(false)
        return
      }

      const img = new Image()
      const url = URL.createObjectURL(blob)

      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img.width > 0 && img.height > 0)
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        resolve(false)
      }

      img.src = url
    })
  }

  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

  const handleScroll = () => {
    if (!tabsRef.value) return

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    isTabFixed.value = scrollTop >= tabsOffsetTop.value

    if (!loading.value && !isLoadingMore.value && hasMore.value) {
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchRankList(true)
      }
    }
  }

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
    window.removeEventListener('scroll', handleScroll)
    cleanupUrls()
  })
</script>

<style scoped lang="less">
  .loading-container,
  .error-container,
  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 12rem;
    gap: 16px;
    margin: 16px 0;
  }

  .content-wrapper {
    position: relative;
    padding-top: 8px;
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
