<template>
  <div class="page">
    <Header />
    <section class="t-l-b">
      <div class="ac-cols">
        <div class="a-s">
          <div class="row">
            <span v-for="category in categorys" :key="category.value" :title="category.label" @click="handleCategoryChange(category.value)" :class="{ active: query.CategoryId === category.value }">
              {{ category.label }}
            </span>
          </div>
          <div class="row">
            <span v-for="option in sortOptions" :key="option.value" @click="handleSortChange(option.value)" :class="{ active: query.SortType === option.value }">
              {{ option.label }}
            </span>
          </div>
        </div>
        <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
          <div class="a-l">
            <a v-for="actor in actorList" :key="actor.id" @click="router.push({ name: 'actorDetail', params: { id: actor.id }, query: { videoCount: actor.videosCount } })">
              <div class="l-img" :style="{ backgroundImage: actor.isDecrypted ? `url(${actor.imgUrl})` : `url(${getAssetsFile('default2.gif')})` }" :key="actor.id">
                <span class="s-a">{{ actor.videosCount }}部</span>
                <span class="s-b" v-if="actor.categoryNames.indexOf('知名') != -1"><b>知名女优</b></span>
              </div>
              <span>{{ actor.title }}</span>
            </a>
          </div>
        </List>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '@/views/theme/themeHeader.vue'
import { useRouter } from 'vue-router'
import { getActorListApi } from '@/api/theme'
import { useAppStore } from '@/store/app'
import type { ActorListRequest, ActorList } from '@/types/theme'
import { List } from 'vant'
import { getAssetsFile } from '@/utils/'
import decryptionService from '@/utils/decryptionService'

const router = useRouter()
const appStore = useAppStore()
const decrypt = new decryptionService()

const sortOptions = [
  { label: '全部', value: '' },
  { label: '影片数量', value: '1' },
  { label: '最多人看', value: '2' },
  { label: '最多收藏', value: '3' },
  { label: '知名度', value: '4' }
]

const categorys = [
  { label: '全部', value: '' },
  { label: '知名', value: '1' },
  { label: '无码', value: '2' },
  { label: '日本', value: '3' },
  { label: '国产', value: '4' },
  { label: '素人', value: '5' }
]

const actorList = ref<ActorList[]>([])

const query: ActorListRequest = {
  PageIndex: 1,
  PageSize: 30,
  CategoryId: '',
  SortType: ''
}

let listLoading = ref(false)
let finished = ref(false)
let error = ref(false)

const getActorList = async (isRefresh = false) => {
  if (isRefresh) {
    query.PageIndex = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const {
      data: { data }
    } = await getActorListApi(query)
    if (data.items && Array.isArray(data.items)) {
      const startIndex = actorList.value.length

      if (isRefresh) {
        actorList.value = data.items.map((actor) => ({ ...actor, isDecrypted: false }))
      } else {
        actorList.value = actorList.value.concat(data.items.map((actor) => ({ ...actor, isDecrypted: false })))
      }

      for (let i = startIndex; i < actorList.value.length; i++) {
        try {
          const decryptedUrl = await decrypt.fetchAndDecrypt(`${appStore.cdnUrl}${actorList.value[i].imgUrl}`)
          actorList.value[i].imgUrl = decryptedUrl
          actorList.value[i].isDecrypted = true
        } catch (error) {
          console.error('解密演员图片失败:', actorList.value[i].imgUrl, error)
        }
      }

      if (data.items.length < query.PageSize) {
        finished.value = true
      }
    } else {
      if (isRefresh) {
        actorList.value = []
      }
      finished.value = true
    }
  } catch (error) {
    console.error('获取演员列表失败:', error)
    if (isRefresh) {
      actorList.value = []
    }
    finished.value = true
  } finally {
    listLoading.value = false
  }
}

const handleCategoryChange = async (categoryId: string) => {
  query.CategoryId = categoryId
  query.PageIndex = 1 // 重置分页
  await getActorList(true)
}

const handleSortChange = async (sortType: string) => {
  query.SortType = sortType
  query.PageIndex = 1 // 重置分页
  await getActorList(true)
}

const loadData = () => {
  query.PageIndex += 1
  getActorList()
}

onMounted(async () => {
  await getActorList()
})
</script>
