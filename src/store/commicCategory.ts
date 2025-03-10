import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CommicBookCategoryItem, CommicCategory } from '@/types/commic'
import { getCommicCategory } from '@/api/commic'

export const useCommicCategoryStore = defineStore('commicCategory', () => {
  const categories = ref<CommicBookCategoryItem[]>([])

  // 获取漫画分类
  const fetchCommicCategory = async () => {
    const { data } = await getCommicCategory({ OType: CommicCategory.Comic })
    categories.value = data.data
  }

  function setCategories(newCategories: CommicBookCategoryItem[]) {
    categories.value = newCategories
  }

  function getCategoryNameById(id: string) {
    const category = categories.value.find(cat => cat.id.toString() === id)
    return category ? category.name : '未知分类'
  }

  return {
    categories,
    setCategories,
    fetchCommicCategory,
    getCategoryNameById
  }
})
