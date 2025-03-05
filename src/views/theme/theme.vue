<template>
  <div class="page">
    <Header />
    <section class="t-l-b">
      <div v-for="tag in themeData" :key="tag.id" class="te-cols">
        <div class="c-t">
          <div class="t-l">{{ tag.title }}</div>
          <div class="t-r">
            <i :class="['mvfont', 'mv-xia', { up: isExpanded(tag.id) }]" @click.stop="toggletag(tag.id)" />
          </div>
        </div>
        <div :class="['c-l', { expanded: isExpanded(tag.id) }]" ref="contentRefs">
          <a v-for="childTag in tag.items" :key="childTag.id" @click="router.push({ name: 'search', query: { keyword: childTag.title, tagId: childTag.id } })">
            <span>{{ childTag.title }}</span>
            <small>
              {{ $t('actor.works') }}：<b>{{ childTag.videosCount }}</b>
            </small>
          </a>
        </div>
      </div>
    </section>
    <NavBar active-menu="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Header from '@/views/theme/themeHeader.vue'
import { getThemeApi } from '@/api/theme'
import type { ThemeResponse } from '@/types/theme'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import NavBar from '@/components/layout/NavBar.vue'

const router = useRouter()
const appStore = useAppStore()
const themeData = ref<ThemeResponse[]>([])
const expandedCategories = ref<Set<string>>(new Set())
const contentRefs = ref<HTMLElement[]>([])

const isExpanded = (id: string) => expandedCategories.value.has(id)

const toggletag = (id: string) => {
  const index = themeData.value.findIndex((tag) => tag.id == id)
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
    const {
      data: { data }
    } = await getThemeApi()
    if (data && Array.isArray(data)) {
      themeData.value = data
      appStore.theme = data
    } else {
      themeData.value = []
    }
    // 默认所有分类展开
    expandedCategories.value = new Set(themeData.value.map((tag) => tag.id))

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
