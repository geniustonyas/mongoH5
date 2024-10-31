<template>
  <div>
    <header class="s-header">
      <input v-model="searchKeyword" placeholder="搜索" @keyup.enter="handleInputSearch" @input="clearTagId" />
      <a @click="appStore.setBack(true)">取消</a>
    </header>

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

    <!-- 搜索结果展示 -->
    <section v-if="searchResults.length > 0" class="p-s-b">
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
                <div class="l-a" v-lazy:background-image="video.poster">
                  <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
                  <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                  <span class="a-c">{{ video.channelName }}</span>
                </div>
                <div class="l-b">
                  <div class="b-a">{{ video.title }}</div>
                  <div class="b-b">
                    <span>{{ video.channelName }}</span>
                  </div>
                  <div class="b-c">
                    <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
                    <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </List>
        </div>
      </nav>
    </section>

    <!-- 搜索结果为空时的展示 -->
    <section v-else-if="hasSearched" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>
            未找到"<span>{{ searchKeyword }}</span>
            "相关的影片
          </b>
        </div>
      </nav>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { getVideoListApi } from '@/api/video'
import decryptionService from '@/utils/decryptionService'
import type { Video } from '@/types/video'
import { List } from 'vant'
import { formatDuration } from '@/utils'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const decrypt = new decryptionService()

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

// 用于管理请求的 AbortController
let currentAbortController: AbortController | null = null

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
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  showHotTags.value = false
  hasSearched.value = true
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
      const newVideos = await Promise.all(
        data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${appStore.imageDomain}${video.imgUrl}`)
        }))
      )
      if (isRefresh) {
        searchResults.value = newVideos
      } else {
        searchResults.value = [...searchResults.value, ...newVideos]
      }
      if (newVideos.length < params.PageSize) {
        finished.value = true
      }
      recordCount.value = parseInt(data.recordCount)
    } else {
      if (isRefresh) {
        searchResults.value = []
      }
      finished.value = true
      recordCount.value = 0
    }
  } catch (error) {
    console.error('搜索视频失败:', error)
    if (isRefresh) {
      searchResults.value = []
    }
    finished.value = true
  } finally {
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
