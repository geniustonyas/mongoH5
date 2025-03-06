<template>
  <div class="novel-rank page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>排行榜</span>
      </div>
      <div class="d-r" />
    </header>
    <div v-if="loading" class="loading-container">
      <Loading />
    </div>
    <div v-else-if="error" class="error-container">
      <van-empty image="error" :description="error" />
    </div>
    <template v-else>
      <div class="au-main novel-main">
        <span>排行榜</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import Loading from '@/components/layout/Loading.vue'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref<string | null>(null)
</script>

<style scoped></style>
