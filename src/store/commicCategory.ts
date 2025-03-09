import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CommicBookCategoryItem } from '@/types/commic'

export const useCommicCategoryStore = defineStore('commicCategory', () => {
  const categories = ref<CommicBookCategoryItem[]>([])

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
    getCategoryNameById
  }
})
