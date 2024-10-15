<template>
  <header class="header">
    <div class="head-search">
      <div class="hs-a">
        <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.svg')" />
        <span>芒果TV</span>
      </div>
      <div @click="router.push({ name: 'search' })" class="hs-b">
        <div class="sb-i">
          <input />
          <i class="mvfont mv-search1" />
        </div>
        <div class="sb-t">
          <Swipe :autoplay="3000" :vertical="true" :show-indicators="false" :touchable="false" style="height: 50px">
            <SwipeItem>番号/片名/演员</SwipeItem>
            <SwipeItem>永久域名:<span>mg51.tv</span></SwipeItem>
            <SwipeItem>永久域名:<span>mg91.tv</span></SwipeItem>
          </Swipe>
        </div>
      </div>
      <div class="hs-c">
        <a @click="router.push({ name: 'history' })"><i class="mvfont mv-lishishijian-" /></a>
        <a @click="router.push({ name: 'home' })"><i class="mvfont mv-touxiang1" /></a>
      </div>
    </div>
    <div class="head-menu">
      <div class="hm-a">
        <a @click="router.push({ name: 'index' })" :class="{ active: activeId == '' }">首页</a>
        <a v-for="category in categoryTop" :key="category.cId" :class="{ active: activeId === category.cId }" @click="router.push({ name: 'category', params: { id: category.cId } })">
          {{ category.categoryName }}
        </a>
      </div>
      <div class="hm-b">
        <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetsFile } from '@/utils'
import { useAppStoreHook } from '@/store/app'
import { ref, computed } from 'vue'
import { Swipe, SwipeItem } from 'vant'

const router = useRouter()
const appStore = useAppStoreHook()

const activeId = ref('')

const categoryTop = computed(() => {
  return appStore.categorys.filter((category) => !category.pId)
})

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.header')!
  const hmB = document.querySelector('.head-menu .hm-b') as HTMLElement

  if (scrollTop > 100) {
    hmB.style.display = 'block'
    header.classList.add('fixed')
  } else {
    hmB.style.display = 'none'
    header.classList.remove('fixed')
  }
}
// 使用 passive 选项来提高滚动性能
window.addEventListener('scroll', handleScroll, { passive: true })
</script>

<style scoped>
.sb-t {
  overflow: hidden;
  height: 40px; /* 调整高度以适应您的设计 */
}

.my-swipe {
  height: 100%;
}

:deep(.van-swipe-item) {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}

:deep(.van-swipe-item span) {
  color: #ff9800; /* 调整颜色以匹配您的设计 */
}
</style>
