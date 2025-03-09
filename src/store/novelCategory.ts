import { defineStore } from 'pinia'
import { ref } from 'vue'
import { NovelBookCategoryItem } from '@/types/novel'

export const useNovelCategoryStore = defineStore('novelCategory', () => {
  // 存储小说分类列表
  const categories = ref<NovelBookCategoryItem[]>([])

  // 保存分类列表到store
  const setCategories = (categoryList: NovelBookCategoryItem[]) => {
    categories.value = categoryList
  }

  // 根据分类ID获取分类名称
  const getCategoryNameById = (categoryId: string): string => {
    const parsedId = parseInt(categoryId)
    const category = categories.value.find(cat => {
      const catId = typeof cat.id === 'string' ? parseInt(cat.id) : cat.id
      return catId === parsedId
    })
    return category ? category.name.toString() : '未知分类'
  }

  return {
    categories,
    setCategories,
    getCategoryNameById
  }
})
