<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">我的收藏</div>
      <div v-show="!nodata" class="d-r" @click="toggleEditMode">{{ isEditing ? '取消' : '编辑' }}</div>
    </header>
    <section class="h-m-b">
      <div class="his-box collect">
        <ul v-if="videos.length > 0">
          <li v-for="video in videos" :key="video.id" @click="!isEditing && router.push({ name: 'play', params: { id: video.id } })">
            <div class="l-x" v-show="isEditing" @click.stop="toggleSelectVideo(parseInt(video.id))">
              <div class="x-c" :class="{ checked: selectedVideos.has(video.id) }">
                <i class="mvfont mv-radio" />
              </div>
            </div>
            <div class="l-a">
              <img :src="video.poster" />
              <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
              <span class="a-b" v-if="video.duration != '0'">{{ video.duration }}</span>
              <span class="a-c">{{ video.channelName }}</span>
            </div>
            <div class="l-b">
              <div class="b-a">{{ video.title }}</div>
              <div class="b-b">
                <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
                <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
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
    <footer class="footer" v-show="isEditing">
      <div class="edit-foot">
        <div class="f-bd">
          <a @click="selectAll">全选</a>
          <a @click="removeSelected">移除</a>
        </div>
      </div>
    </footer>

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
import { userCollectionHistory, userCollection } from '@/api/user'
import type { Video } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()
const decrypt = new decryptionService()

const videos = ref<Video[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = ref(5)
const nodata = ref(false)
const isEditing = ref(false)
const selectedVideos = ref<Set<number | string>>(new Set())

const fetchCollections = async () => {
  try {
    const params = {
      PageIndex: currentPage.value,
      PageSize: pageSize.value
    }
    const {
      data: { data }
    } = await userCollectionHistory(params)

    if (data && Array.isArray(data.items)) {
      videos.value = await Promise.all(
        data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${appStore.imageDomain}${video.imgUrl}`)
        }))
      )
      nodata.value = videos.value.length == 0
      currentPage.value = parseInt(data.pageIndex)
      totalPages.value = parseInt(data.pageCount)
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

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

const toggleEditMode = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    selectedVideos.value.clear()
  }
}

const toggleSelectVideo = (videoId: number) => {
  if (selectedVideos.value.has(videoId)) {
    selectedVideos.value.delete(videoId)
  } else {
    selectedVideos.value.add(videoId)
  }
}

const selectAll = () => {
  if (selectedVideos.value.size === videos.value.length) {
    selectedVideos.value.clear()
  } else {
    videos.value.forEach((video) => selectedVideos.value.add(parseInt(video.id)))
  }
}

const removeSelected = async () => {
  if (selectedVideos.value.size === 0) return

  const videoIds = Array.from(selectedVideos.value).join(',')
  try {
    await userCollection({ VideoId: videoIds, Collect: false })
    currentPage.value = 1
    fetchCollections()
  } catch (error) {
    console.error('移除收藏失败:', error)
  } finally {
    isEditing.value = false
    selectedVideos.value.clear()
  }
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
