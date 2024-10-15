<template>
  <header class="m-header">
    <div class="h-m">
      <a @click="router.push({ name: 'hot' })" :class="{ active: currentRoute === 'hot' }">热点</a>
      <a @click="router.push({ name: 'theme' })" :class="{ active: currentRoute === 'theme' }">主题</a>
      <a @click="router.push({ name: 'actor' })" :class="{ active: currentRoute === 'actor' }">女优</a>
    </div>
    <div class="h-r">
      <i @click="router.push({ name: 'search' })" class="mvfont mv-search" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => route.name)
</script>
