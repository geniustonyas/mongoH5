<template>
  <div>
    <header class="s-header">
      <input v-model="searchKeyword" placeholder="搜索" @keyup.enter="handleInputSearch" @input="clearTagId" />
      <a @click="appStore.setBack(true)">取消</a>
    </header>

    <div class="ad-box1 search-padding">
      <img v-if="bannerAdvertisement && bannerAdvertisement.length > 0" @click="handleBannerAdvertisementClick" :key="bannerAdvertisement[0].id" v-lazy-decrypt="bannerAdvertisement[0].imgUrl" :alt="bannerAdvertisement[0].title" />
    </div>

    <!-- 热门标签 -->
    <section v-if="showHotTags" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>热门标签</b>
        </div>
        <div class="s-b">
          <a v-for="tag in hotTags" :key="tag.id" @click="selectTag(tag.title, tag.id)"> {{ tag.title }}<small v-if="tag.video_count > 0">热</small> </a>
        </div>
      </nav>
    </section>

    <!-- 搜索中提示 -->
    <section v-if="searchIng" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>
            正在搜索"<span>{{ searchKeyword }}</span>
            "相关的影片
          </b>
        </div>
      </nav>
    </section>

    <!-- 搜索结果展示 -->
    <section v-if="!searchIng && searchResults.length > 0" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>
            搜索"
            <span>{{ searchKeyword }}</span>
            "，找到
            <span>{{ searchResults.length }}</span>
            部影片
          </b>
        </div>
        <div class="s-c">
          <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
            <ul class="m-list">
              <li v-for="video in searchResults" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })">
                <div class="l-a" v-lazy-decrypt="video.imgUrl">
                  <span class="a-a">{{ classifyResolution(video.resolution) }}</span>
                  <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                  <span class="a-c">{{ video.channelName }}</span>
                </div>
                <div class="l-b">
                  <div class="b-a">{{ video.title }}</div>
                  <div class="b-b">
                    <span>{{ video.channelName }}</span>
                  </div>
                  <div class="b-c">
                    <span><i class="mvfont mv-kan" />{{ getIncrementalNumberWithOffset(video.viewCount, 'v', video.id, 'view') }}</span>
                    <span><i class="mvfont mv-zan" />{{ getIncrementalNumberWithOffset(video.likeCount, 'v', video.id, 'like') }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </List>
        </div>
      </nav>
    </section>

    <!-- 搜索结果为空时的展示 -->
    <section v-if="!searchIng && hasSearched && searchResults.length == 0" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>
            未找到"<span>{{ searchKeyword }}</span>
            "相关的影片
          </b>
        </div>
      </nav>
    </section>
    <NavBar active-menu="search" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { getVideoListApi } from '@/api/video'
import type { Video } from '@/types/video'
import { List } from 'vant'
import { formatDuration, getIncrementalNumberWithOffset, classifyResolution } from '@/utils'
import NavBar from '@/components/layout/NavBar.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const searchKeyword = ref('')
const searchResults = ref<Video[]>([])
const showHotTags = ref(true)
const hasSearched = ref(false)
const currentTagId = ref<string | null>(null)
const recordCount = ref(0)

let pageIndex = ref(1)
let listLoading = ref(false)
let finished = ref(false)
let error = ref(false)
const searchIng = ref(false)

// 用于管理请求的 AbortController
let currentAbortController: AbortController | null = null

const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(12).items
  return tmp || []
})

const handleBannerAdvertisementClick = () => {
  if (bannerAdvertisement.value.length > 0) {
    window.open(bannerAdvertisement.value[0].targetUrl, '_blank')
  }
}

const hotTags = computed(() => {
  const allTags = appStore.theme.flatMap((tag) => tag.items || [])
  return allTags
    .sort(() => 0.5 - Math.random())
    .slice(0, 10)
    .map((tag) => ({
      id: tag.id,
      title: tag.title,
      video_count: tag.targetUrl
    }))
})

const searchVideos = async (isRefresh = false) => {
  if (!searchKeyword.value && !currentTagId.value) return
  if (isRefresh) {
    searchResults.value = []
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return
  searchIng.value = true
  showHotTags.value = false
  try {
    listLoading.value = true

    // 取消上一个请求
    if (currentAbortController) {
      currentAbortController.abort()
    }

    // 创建一个新的 AbortController
    currentAbortController = new AbortController()

    const params = {
      TagIds: currentTagId.value,
      PageIndex: pageIndex.value,
      PageSize: 30,
      KeyWord: currentTagId.value ? '' : searchKeyword.value,
      signal: currentAbortController.signal // 传递 signal
    }
    const {
      data: { data }
    } = await getVideoListApi(params)
    if (data.items && Array.isArray(data.items)) {
      if (isRefresh) {
        searchResults.value = data.items
      } else {
        searchResults.value = searchResults.value.concat(data.items)
      }
      if (data.items.length < params.PageSize) {
        finished.value = true
      }
      recordCount.value = parseInt(data.recordCount)
      hasSearched.value = recordCount.value == 0
    } else {
      finished.value = true
      recordCount.value = 0
    }
  } catch (error) {
    console.error('搜索视频失败:', error)
  } finally {
    searchIng.value = false
    listLoading.value = false
  }
}

const selectTag = (tagName: string, tagId: string) => {
  searchKeyword.value = tagName
  currentTagId.value = tagId
  pageIndex.value = 1
  searchVideos(true)
}

const handleInputSearch = () => {
  currentTagId.value = null
  pageIndex.value = 1
  searchResults.value = []
  searchVideos(true)
}

const clearTagId = () => {
  if (currentTagId.value) {
    currentTagId.value = null
  }
}

const loadData = () => {
  pageIndex.value += 1
  searchVideos()
}

if (appStore.theme.length == 0) {
  appStore.fetTheme()
}

// 立即执行
;(async () => {
  if (appStore.advertisement.length == 0) {
    await appStore.fetAdvertisement()
  }
})()

onMounted(() => {
  const queryKeyword = route.query.keyword
  const queryTagId = route.query.tagId
  if (queryKeyword && typeof queryKeyword == 'string') {
    searchKeyword.value = queryKeyword
  }
  if (queryTagId && typeof queryTagId == 'string') {
    currentTagId.value = queryTagId
  }
  searchVideos(true)
})
</script>

<style scoped>
/* 可以根据需要添加样式 */
.hot-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.hot-tags a {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 15px;
  cursor: pointer;
}
</style>
