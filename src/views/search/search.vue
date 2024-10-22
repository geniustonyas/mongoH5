<template>
  <div>
    <header class="s-header">
      <input v-model="searchKeyword" placeholder="搜索" @keyup.enter="searchVideos" />
      <a @click="router.back()">取消</a>
    </header>

    <!-- 热门标签 -->
    <section v-if="showHotTags" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>热门标签</b>
        </div>
        <div class="s-b">
          <a v-for="tag in hotTags" :key="tag.id" @click="selectTag(tag.title)"> {{ tag.title }}<small v-if="tag.video_count > 0">热</small> </a>
        </div>
      </nav>
    </section>

    <!-- 搜索结果展示 -->
    <section v-if="searchResults.length > 0" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b
            >搜索"<span>{{ searchKeyword }}</span
            >"，找到"<span>{{ searchResults.length }}</span
            >"部影片</b
          >
        </div>
        <div class="s-c">
          <ul class="m-list">
            <li v-for="video in searchResults" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })">
              <div class="l-a" :style="{ backgroundImage: `url(${video.poster})` }">
                <span v-if="video.clarity != '0'" class="a-a">{{ video.clarity }}</span>
                <span class="a-b" v-if="video.duration != '0'">{{ video.duration }}</span>
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
        </div>
      </nav>
    </section>

    <!-- 搜索结果为空时的展示 -->
    <section v-else-if="hasSearched" class="p-s-b">
      <nav class="ps-ssfx">
        <div class="s-a">
          <b
            >未找到"<span>{{ searchKeyword }}</span
            >"相关的影片</b
          >
        </div>
      </nav>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { getVideoListApi } from '@/api/video'
import decryptionService from '@/utils/decryptionService'
import type { Video } from '@/types/video'

const router = useRouter()
const appStore = useAppStore()
const decrypt = new decryptionService()

const searchKeyword = ref('')
const searchResults = ref<Video[]>([])
const showHotTags = ref(true)
const hasSearched = ref(false)

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

const searchVideos = async () => {
  if (!searchKeyword.value) return
  showHotTags.value = false
  hasSearched.value = true
  try {
    const params = {
      PageIndex: 1,
      PageSize: 30,
      KeyWord: searchKeyword.value
    }
    const response = await getVideoListApi(params)
    if (response.data && Array.isArray(response.data.items)) {
      searchResults.value = await Promise.all(
        response.data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        }))
      )
    } else {
      searchResults.value = []
    }
  } catch (error) {
    console.error('搜索视频失败:', error)
    searchResults.value = []
  }
}

const selectTag = (tagName: string) => {
  searchKeyword.value = tagName
  searchVideos()
}

onMounted(() => {
  const queryKeyword = router.currentRoute.value.query.keyword
  if (queryKeyword && typeof queryKeyword == 'string') {
    searchKeyword.value = queryKeyword
    searchVideos()
  }
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
