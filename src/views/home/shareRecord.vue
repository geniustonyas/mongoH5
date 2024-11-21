<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">分享记录</div>
    </header>
    <section class="h-m-b">
      <div class="share-box">
        <ul v-if="dataList.length > 0">
          <li v-for="record in dataList" :key="record.id">
            <div>用户名： {{ record.username }}</div>
            <div>注册时间： {{ record.registerTime }}</div>
            <!-- <div>层级： {{ record.layer }}</div> -->
          </li>
        </ul>
        <div v-if="nodata" class="nodata">
          <div class="d-i" />
          <div class="d-t">暂无分享记录</div>
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
import { userShareHistory } from '@/api/user'
import type { ShareRecord } from '@/types/user'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const dataList = ref<ShareRecord[]>([])
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
    } = await userShareHistory(params)

    if (data && Array.isArray(data.items)) {
      dataList.value = loadMore ? dataList.value.concat(data.items) : data.items
      nodata.value = dataList.value.length == 0
      currentPage.value = parseInt(data.pageIndex)
      totalPages.value = parseInt(data.pageCount)
    } else {
      nodata.value = true
    }
  } catch (error) {
    console.error('获取分享记录失败:', error)
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
