<template>
  <div class="item" @click="router.push({ name: 'play', params: { id: video.id } })">
    <!-- <div class="i-a" :style="{ backgroundImage: `url(${video.poster})` }"> -->
    <div class="i-a" v-lazy:background-image="video.poster">
      <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
      <span class="a-b" v-if="video.duration != '0'">{{ video.duration }}</span>
      <span class="a-c">{{ video.channelName }}</span>
    </div>
    <div class="i-b">
      <b>{{ video.title }}</b>
      <div class="b-dv">
        <div class="p-c">
          <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
          <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
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
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import type { Video } from '@/types/video'

const router = useRouter()
const appStore = useAppStore()

defineProps<{
  video: Video
}>()

const formatDate = (date: string) => {
  return dayjs(date).format('M-D')
}
</script>
