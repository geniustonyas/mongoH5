<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" @click="goBack"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">我的收藏</div>
    </header>
    <section class="h-m-b">
      <div class="his-box collect">
        <ul v-if="videos.length > 0">
          <li v-for="video in videos" :key="video.videoId" @click="router.push({ name: 'play', params: { id: video.videoId } })">
            <div class="l-a">
              <img :src="video.poster" />
              <span class="a-a">{{ video.resolution }}</span>
              <span class="a-b">{{ video.playTime }}</span>
              <span class="a-c">{{ video.categoryName }}</span>
            </div>
            <div class="l-b">
              <div class="b-a">{{ video.title }}</div>
              <div class="b-b">
                <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
              </div>
              <div class="b-c">{{ formatDate(video.addTime) }}</div>
            </div>
          </li>
        </ul>
        <div v-if="nodata" class="nodata">
          <div class="d-i" />
          <div class="d-t">暂无收藏记录</div>
        </div>
      </div>
    </section>
    <div class="au-pagination-box" v-if="totalPages > 1">
      <div class="pb-x">
        <a @click="changePage(currentPage - 1)" :class="{ disabled: currentPage == 1 }">上一页</a>
      </div>
      <div class="pb-x">
        <input v-model="currentPage" @change="fetchCollections" type="number" min="1" :max="totalPages" />
        <span>/ {{ totalPages }}</span>
      </div>
      <div class="pb-x">
        <a @click="changePage(currentPage + 1)" :class="{ disabled: currentPage == totalPages }">下一页</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getRecordApi } from '@/api/video'
import type { Video, getRecordData } from '@/types/video'
import decryptionService from '@/utils/decryptionService'

const router = useRouter()
const decrypt = new decryptionService()

const videos = ref<Video[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = ref(20)
const nodata = ref(false)

const fetchCollections = async () => {
  try {
    const params: getRecordData = {
      type: 3, // 假设 2 代表收藏记录
      search: null,
      beginTime: null,
      endTime: null,
      pageSize: pageSize.value,
      page: currentPage.value,
      sortOrder: null
    }
    const response = await getRecordApi(params)

    if (response.data && Array.isArray(response.data.data)) {
      nodata.value = false
      videos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      currentPage.value = response.data.data.currentPage
      totalPages.value = response.data.data.totalPages
    } else {
      nodata.value = true
      videos.value = []
    }
  } catch (error) {
    console.error('获取收藏记录失败:', error)
    nodata.value = true
    videos.value = []
  }
}

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
    fetchCollections()
  }
}

const goBack = () => {
  router.go(-1)
}

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

onMounted(() => {
  fetchCollections()
})
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
