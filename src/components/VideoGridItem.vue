<template>
  <div class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
    <div class="i-a" v-lazy:background-image="video.poster">
      <span v-if="video.resolution" class="a-a">{{ video.resolution }}</span>
      <span class="a-b">{{ video.playTime }}</span>
      <span class="a-c">{{ video.categoryName }}</span>
    </div>
    <div class="i-b">
      <b>{{ video.title }}</b>
      <div class="b-dv">
        <div class="p-c">
          <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
          <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
        </div>
        <div v-if="video.addTime" class="p-c">
          <span><i class="mvfont mv-riqi" />{{ formatDate(video.addTime) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import type { Video } from '@/types/video'

const router = useRouter()

defineProps<{
  video: Video
}>()

const formatDate = (date: string) => {
  return dayjs(date).format('M-D')
}
</script>
