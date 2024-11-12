<template>
  <div>
    <header class="s-header">
      <input v-model="searchKeyword" placeholder="搜索" @keyup.enter="handleInputSearch" />
      <a @click="appStore.setBack(true)">取消</a>
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

      <nav class="ps-ssfx">
        <div class="s-a">
          <b>搜索历史</b>
          <div v-if="searchHistory.length > 0" class="c-btn" @click="clearSearchHistory">
            <i class="mvfont mv-shanchu" />
          </div>
        </div>
        <div class="s-b">
          <a v-for="history in searchHistory" :key="history" @click="selectTag(history)">{{ history }}</a>
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
            条帖子
          </b>
        </div>
        <div class="s-c">
          <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
            <BbsListItem :bbs-list="searchResults" class="bbs-list m-0" />
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
            "相关的帖子
          </b>
        </div>
      </nav>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { getBbsListApi } from '@/api/bbs'
import decryptionService from '@/utils/decryptionService'
import type { BbsListRequest, Bbs } from '@/types/bbs'
import { List } from 'vant'
import BbsListItem from '@/components/BbsListItem.vue'

const route = useRoute()
const appStore = useAppStore()
const decrypt = new decryptionService()

const searchKeyword = ref('')
const searchResults = ref<Bbs[]>([])
const showHotTags = ref(true)
const hasSearched = ref(false)
const recordCount = ref(0)
const searchHistory = ref<string[]>([])

let pageIndex = ref(1)
let listLoading = ref(false)
let finished = ref(false)
let error = ref(false)

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

const loadSearchHistory = () => {
  const history = localStorage.getItem('searchHistory')
  if (history) {
    searchHistory.value = JSON.parse(history)
  }
}

const saveSearchHistory = () => {
  if (searchKeyword.value && !searchHistory.value.includes(searchKeyword.value)) {
    searchHistory.value.unshift(searchKeyword.value)
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
  }
}

const clearSearchHistory = () => {
  searchHistory.value = []
  localStorage.removeItem('searchHistory')
}

const searchBbs = async (isRefresh = false) => {
  if (!searchKeyword.value) return
  if (isRefresh) {
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  showHotTags.value = false
  hasSearched.value = true
  try {
    listLoading.value = true

    const params: BbsListRequest = {
      PageIndex: pageIndex.value,
      PageSize: 30,
      KeyWord: searchKeyword.value
    }
    const {
      data: { data }
    } = await getBbsListApi(params)
    if (data.items && Array.isArray(data.items)) {
      const newBbs = await Promise.all(
        data.items.map(async (bbs) => ({
          ...bbs,
          decryptImage: await Promise.all(bbs.imgs.split(',').map(async (img) => await decrypt.fetchAndDecrypt(`${appStore.cdnUrl}${img}`)))
        }))
      )
      if (isRefresh) {
        searchResults.value = newBbs
      } else {
        searchResults.value = [...searchResults.value, ...newBbs]
      }
      if (newBbs.length < params.PageSize) {
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
    console.error('搜索BBS失败:', error)
    if (isRefresh) {
      searchResults.value = []
    }
    finished.value = true
  } finally {
    listLoading.value = false
    saveSearchHistory()
  }
}

const selectTag = (tagName: string) => {
  searchKeyword.value = tagName
  pageIndex.value = 1
  searchBbs(true)
}

const handleInputSearch = () => {
  pageIndex.value = 1
  searchBbs(true)
}

const loadData = () => {
  pageIndex.value += 1
  searchBbs()
}

onMounted(() => {
  loadSearchHistory()
  const queryKeyword = route.query.keyword
  if (queryKeyword && typeof queryKeyword == 'string') {
    searchKeyword.value = queryKeyword
  }
  searchBbs(true)
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
