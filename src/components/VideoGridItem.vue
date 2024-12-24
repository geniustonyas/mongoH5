<template>
  <div class="item video-grid-item" :data-video-id="video.id">
    <div class="i-a" v-lazy-decrypt="video.imgUrl">
      <span v-if="classifyResolution(video.resolution) != ''" :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
      <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
      <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span>
    </div>
    <div class="i-b">
      <b>{{ video.title }}</b>
      <div class="b-dv">
        <div class="p-c">
          <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
          <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
        </div>
        <div v-if="video.addTime" class="p-c">
          <span><i class="mvfont mv-riqi" />{{ fromNow(video.addTime) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Video } from '@/types/video'
import { formatDuration, fromNow, classifyResolution } from '@/utils'

defineProps<{
  video: Video
}>()
</script>
