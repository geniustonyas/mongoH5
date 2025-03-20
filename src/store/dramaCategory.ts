import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DramaCategoryItem } from '@/types/drama'
import { getDramaCategoryList } from '@/api/drama'

export const useDramaCategoryStore = defineStore('dramaCategory', () => {
  const categories = ref<DramaCategoryItem[]>([])

  // 获取短剧分类
  const fetchDramaCategory = async () => {
    const { data } = await getDramaCategoryList({ PageIndex: 1, PageSize: 999 })
    categories.value = data.data.items
  }

  function getCategoryNameById(id: string) {
    const category = categories.value.find(cat => cat.id.toString() === id)
    return category ? category.title : '未知分类'
  }

  return {
    categories,
    fetchDramaCategory,
    getCategoryNameById
  }
})
