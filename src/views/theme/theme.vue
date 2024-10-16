<template>
  <div class="page">
    <Header />
    <section class="t-l-b">
      <div v-for="category in themeData" :key="category.tId" class="te-cols">
        <div class="c-t">
          <div class="t-l">{{ category.name }}</div>
          <div class="t-r">
            <i :class="['mvfont', 'mv-xia', { up: isExpanded(category.tId) }]" @click.stop="toggleCategory(category.tId)" />
          </div>
        </div>
        <div :class="['c-l', { expanded: isExpanded(category.tId) }]" ref="contentRefs">
          <a v-for="tag in category.children" :key="tag.tId" @click="router.push({ name: 'search', query: { keyword: tag.name } })">
            <span>{{ tag.name }}</span>
            <small
              >收录：<b>{{ tag.video_count }}</b></small
            >
          </a>
        </div>
      </div>
    </section>
    <Footer active-menu="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/views/theme/themeHeader.vue'
import { getThemeTagApi } from '@/api/theme'
import type { ThemeTag } from '@/types/theme'
import { useRouter } from 'vue-router'

const router = useRouter()

const themeData = ref<ThemeTag[]>([])
const expandedCategories = ref<Set<number>>(new Set())
const contentRefs = ref<HTMLElement[]>([])

const isExpanded = (id: number) => expandedCategories.value.has(id)

const toggleCategory = (id: number) => {
  const index = themeData.value.findIndex((category) => category.tId === id)
  const content = contentRefs.value[index]

  if (isExpanded(id)) {
    expandedCategories.value.delete(id)
    content.style.height = '0px'
  } else {
    expandedCategories.value.add(id)
    content.style.height = `${content.scrollHeight}px`
  }
}

const fetchThemeData = async () => {
  try {
    const response = await getThemeTagApi()
    // 假设 response.data 是 ThemeTag[] 类型
    if (response.data && Array.isArray(response.data)) {
      themeData.value = response.data
    } else {
      themeData.value = []
    }
    // 默认所有分类展开
    expandedCategories.value = new Set(themeData.value.map((category) => category.tId))

    // 在下一个 tick 中设置初始高度
    await nextTick()
    contentRefs.value.forEach((content) => {
      content.style.height = `${content.scrollHeight}px`
    })
  } catch (error) {
    console.error('获取主题标签数据出错:', error)
  }
}

onMounted(() => {
  fetchThemeData()
})
</script>

<style scoped>
.c-t {
  display: flex;
  justify-content: space-between;
}

.mvfont.mv-xia {
  transition: transform 0.3s ease;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.mvfont.mv-xia.up {
  transform: rotate(180deg);
}

.c-l {
  height: auto;
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.c-l-inner {
  padding: 10px 0;
}
</style>
