<template>
  <div class="page">
    <Header />
    <section class="t-l-b">
      <div class="ac-cols">
        <div class="a-s">
          <div class="row">
            <span :class="{ active: query.CategoryId === '' }" @click="handleCategoryChange('')">全部</span>
            <span v-for="category in appStore.categorys" :key="category.d" :title="category.t" @click="handleCategoryChange(category.d)" :class="{ active: query.CategoryId === category.d }">
              {{ category.t }}
            </span>
          </div>
          <div class="row">
            <span v-for="option in sortOptions" :key="option.value" @click="handleSortChange(option.value)" :class="{ active: query.SortType === option.value }">
              {{ option.label }}
            </span>
          </div>
        </div>
        <div class="a-l">
          <a v-for="actor in actorList" :key="actor.id" @click="router.push({ name: 'actorDetail', params: { id: actor.id } })">
            <div class="l-img" :style="{ backgroundImage: `url(${getAssetsFile('actor/a1.jpg')})` }">
              <span class="s-a">{{ actor.videosCount }}部</span>
            </div>
            <span>{{ actor.title }}</span>
          </a>
        </div>
      </div>
    </section>
    <Footer active-menu="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/views/theme/themeHeader.vue'
import { useRouter } from 'vue-router'
import { getActorListApi } from '@/api/theme'
import { useAppStore } from '@/store/app'
import type { ActorListRequest, ActorList } from '@/types/theme'

const router = useRouter()
const appStore = useAppStore()

const sortOptions = [
  { label: '全部', value: '' },
  { label: '影片数量', value: '1' },
  { label: '按最多人看', value: '2' },
  { label: '按最多收藏', value: '3' },
  { label: '按知名度', value: '4' }
]

const actorList = ref<ActorList[]>([])

const query: ActorListRequest = {
  PageIndex: 1,
  PageSize: 30,
  CategoryId: '',
  SortType: ''
}

// 获取演员列表
const getActorList = async () => {
  const {
    data: { data }
  } = await getActorListApi(query)
  actorList.value = data.items
}

const handleCategoryChange = async (categoryId: string) => {
  query.CategoryId = categoryId
  query.PageIndex = 1
  await getActorList()
}

const handleSortChange = async (sortType: string) => {
  query.SortType = sortType
  query.PageIndex = 1
  await getActorList()
}

onMounted(async () => {
  await getActorList()
})
</script>
