<template>
  <div v-if="ad" class="ad-box1">
    <img @click="openAd(ad.targetUrl, '首页列表横幅', 'click', ad.id)" :key="ad.id" v-lazy-decrypt="ad.imgUrl" :alt="ad.title" :loading-img="'long-banner.jpg'" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { openAd } from '@/utils'

// 接收父组件传递的单个广告对象
defineProps<{
  ad: { targetUrl: string; id: string; imgUrl: string; title: string }
}>()
</script>
