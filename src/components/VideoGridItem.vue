<template>
  <div class="item video-grid-item" :data-video-id="video.id">
    <div class="i-a" v-lazy-decrypt="video.imgUrl">
      <span :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
      <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
      <span class="a-c">{{ video.channelName }}</span>
    </div>
    <div class="i-b">
      <b>{{ video.title }}</b>
      <div class="b-dv">
        <div class="p-c">
          <span><i class="mvfont mv-kan" />{{ getIncrementalNumberWithOffset(video.viewCount, 'v', video.id, 'view') }}</span>
          <span><i class="mvfont mv-zan" />{{ getIncrementalNumberWithOffset(video.likeCount, 'v', video.id, 'like') }}</span>
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
import type { Video } from '@/types/video'
import dayjs from 'dayjs'
import { formatDuration } from '@/utils'
import { getIncrementalNumberWithOffset, classifyResolution } from '@/utils'

defineProps<{
  video: Video
}>()

const formatDate = (date: string) => {
  return dayjs(date).format('M-D')
}
</script>
