<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">我的足迹</div>
    </header>
    <section class="h-m-b">
      <div class="his-box">
        <ul v-if="videos.length > 0">
          <li v-for="video in videos" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })">
            <div class="l-a">
              <img v-lazy-decrypt="video.imgUrl" />
              <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
              <span class="a-b" v-if="video.duration != '0'">{{ video.duration }}</span>
              <span class="a-c">{{ video.channelName }}</span>
            </div>
            <div class="l-b">
              <div class="b-a">{{ video.title }}</div>
              <div class="b-b">
                <span><i class="mvfont mv-kan" />{{ getIncrementalNumberWithOffset(video.viewCount, 'v', video.id, 'view') }}</span>
                <span><i class="mvfont mv-zan" />{{ getIncrementalNumberWithOffset(video.likeCount, 'v', video.id, 'like') }}</span>
              </div>
              <div class="b-c">{{ formatDate(video.addTime) }}</div>
            </div>
          </li>
        </ul>
        <div v-if="nodata" class="nodata">
          <div class="d-i" />
          <div class="d-t">暂无观影记录</div>
        </div>
      </div>
    </section>
    <template v-if="totalPages > 1">
      <div class="au-pagination-box" v-if="totalPages > 9">
        <div class="pb-x">
          <a @click="changePage(currentPage - 1)" :class="{ disabled: currentPage == 1 }">上一页</a>
        </div>
        <div class="pb-x">
          <input v-model="currentPage" @change="() => fetchRecords()" type="number" min="1" :max="totalPages" />
          <span>/ {{ totalPages }}</span>
        </div>
        <div class="pb-x">
          <a @click="changePage(currentPage + 1)" :class="{ disabled: currentPage == totalPages }">下一页</a>
        </div>
      </div>
      <div v-else class="more-box"><a v-if="currentPage < totalPages" @click="loadMore">加载更多</a></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userWatchHistory } from '@/api/user'
import type { Video } from '@/types/video'
import { useAppStore } from '@/store/app'
import { getIncrementalNumberWithOffset } from '@/utils'
const router = useRouter()
const appStore = useAppStore()

const videos = ref<Video[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = ref(20)
const nodata = ref(false)

const fetchRecords = async (loadMore = false) => {
  try {
    const params = {
      PageIndex: currentPage.value,
      PageSize: pageSize.value
    }
    const {
      data: { data }
    } = await userWatchHistory(params)

    if (data && Array.isArray(data.items)) {
      videos.value = loadMore ? videos.value.concat(data.items) : data.items
      nodata.value = videos.value.length == 0
      currentPage.value = parseInt(data.pageIndex)
      totalPages.value = parseInt(data.pageCount)
    } else {
      nodata.value = true
    }
  } catch (error) {
    console.error('获取浏览记录失败:', error)
    nodata.value = true
  }
}

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
    fetchRecords()
  }
}

const loadMore = async () => {
  currentPage.value += 1
  await fetchRecords(true)
}

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

onMounted(() => {
  fetchRecords()
})
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
