<template>
  <div>全部小说</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  BookStatus,
  NovelBookCategoriesRequest,
  NovelBookCategoryItem,
  NovelCategory,
  NovelListItem,
  NovelListRequest
} from '@/types/novel'
import { getNovelCategory, getNovelList } from '@/api/novel'

const books = reactive<NovelListItem[]>([])
const bookCategories = reactive<NovelBookCategoryItem[]>([])
const loading = ref(false)

const fetchBookCategories = async () => {
  try {
    const params: NovelBookCategoriesRequest = {
      OType: NovelCategory.Book
    }
    const {
      data: { data }
    } = await getNovelCategory(params)
    bookCategories.push({ id: 0, name: '推荐' }, ...data)
  } catch (e) {
    console.log(e)
  }
}

const fetchBooks = async (params: NovelListRequest) => {
  try {
    loading.value = true
    const {
      data: { data }
    } = await getNovelList(params)
    if (data && Array.isArray(data.items)) {
      books.push(...data.items)
    }
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const param: NovelListRequest = {
    Type: NovelCategory.Book,
    BookStatus: BookStatus.All,
    IsRecommend: 0,
    PageIndex: 1,
    PageSize: 10
  }
  await fetchBookCategories()
  await fetchBooks(param)
})

// const handleSubMenuClick = async (index: number, item: NovelBookCategoryItem) => {
//   activeSubMenu.value = index
//   const param: NovelListRequest = {
//     Type: NovelCategory.Book,
//     BookStatus: BookStatus.All,
//     IsRecommend: index === 0 ? 1 : 0,
//     CategoryId: item.id,
//     PageIndex: 1,
//     PageSize: 10
//   }
//   try {
//     loading.value = true
//     books.splice(0, books.length)
//     await fetchBooks(param)
//   } catch (e) {
//     console.log(e)
//   } finally {
//     loading.value = false
//   }
// }
</script>

<style scoped></style>
