<template>
  <header class="m-header">
    <div class="h-l" @click="router.push({ name: 'index' })">
      <i class="mvfont mv-left" />
    </div>
    <div class="h-m">
      <a @click="router.push({ name: 'theme' })" :class="{ active: currentRoute == 'theme' }">主题</a>
      <a @click="router.push({ name: 'hotVideo' })" :class="{ active: currentRoute == 'hotVideo' }">热榜</a>
      <a @click="router.push({ name: 'actor' })" :class="{ active: currentRoute == 'actor' }">{{ nvyou }}</a>
    </div>
    <div class="h-r">
      <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { nvyou } from '@/utils/cryptedData'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => route.name)
</script>
