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
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="category in bookCategories"
                :key="category.id"
                :class="{ active: category.active }"
                @click="handleCategoryClick(category.id)"
              >
                {{ category.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="sortOption in sortOptions"
                :key="sortOption.id"
                :class="{ active: sortOption.active }"
                @click="handleSortOptionClick(sortOption.id)"
              >
                {{ sortOption.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="statusOption in statusOptions"
                :key="statusOption.id"
                :class="{ active: statusOption.active }"
                @click="handleStatusOptionClick(statusOption.id)"
              >
                {{ statusOption.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Loading from '@/components/layout/Loading.vue'
import { useNovelCategoryStore } from '@/store/novelCategory'
import { CategoryWithActive, TabOption } from '@/types/novel'

const router = useRouter()
const route = useRoute()
const novelCategoryStore = useNovelCategoryStore()

const loading = ref(false)
const error = ref<string | null>(null)

// 分类选项
const bookCategories = reactive<CategoryWithActive[]>([])

// Initialize categories with active state
const initialCategories = [
  { id: -1, name: '全部', active: true },
  ...novelCategoryStore.categories.map((cat) => ({ ...cat, active: false }))
]
bookCategories.push(...initialCategories)

const sortOptions = reactive<TabOption[]>([
  { id: -1, name: '全部', active: true },
  { id: 1, name: '上架时间', active: false },
  { id: 2, name: '最多阅读', active: false },
  { id: 3, name: '最多收藏', active: false }
])

const statusOptions = reactive<TabOption[]>([
  { id: -1, name: '全部', active: true },
  { id: 1, name: '完结', active: false },
  { id: 2, name: '连载', active: false }
])

// 获取当前激活的选项ID
const getActiveId = (list: TabOption[] | CategoryWithActive[]) => {
  const activeItem = list.find((item) => item.active)
  return activeItem ? activeItem.id : -1
}

// 获取排行榜数据
const fetchRankList = async () => {
  try {
    loading.value = true
    error.value = null

    const params = {
      categoryId: getActiveId(bookCategories),
      sortType: getActiveId(sortOptions),
      status: getActiveId(statusOptions)
    }

    console.log('Fetching with params:', params)
    // TODO: 调用实际的API
    // const { data } = await fetchNovelRankAPI(params)
  } catch (err) {
    error.value = '获取数据失败'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleCategoryClick = (categoryId: string | number) => {
  // 更新分类选中状态
  bookCategories.forEach((category) => {
    category.active = category.id === categoryId
  })

  // 重置排序选项到默认状态
  sortOptions.forEach((option) => {
    option.active = option.id === -1
  })

  // 重置小说状态选项到默认状态
  statusOptions.forEach((option) => {
    option.active = option.id === -1
  })

  // 获取数据
  fetchRankList()
}

const handleSortOptionClick = (sortId: string | number) => {
  sortOptions.forEach((option) => {
    option.active = option.id === sortId
  })
  // 获取数据
  fetchRankList()
}

const handleStatusOptionClick = (statusId: string | number) => {
  statusOptions.forEach((option) => {
    option.active = option.id === statusId
  })
  // 获取数据
  fetchRankList()
}

// 初始加载
fetchRankList()
</script>

<style scoped></style>
