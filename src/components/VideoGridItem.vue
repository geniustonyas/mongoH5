<template>
  <div class="item video-grid-item" :data-video-id="video.id" :data-is-ad="video.isAd" :data-target-url="video.targetUrl" :data-title="video.title">
    <template v-if="video.isAd">
      <div class="i-a" v-lazy-decrypt="video.imgUrl">
        <!-- <span v-if="classifyResolution(video.resolution) != ''" :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
        <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
        <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span> -->
      </div>
      <div class="i-b">
        <b>{{ video.title }}</b>
        <div class="b-dv">
          <div class="p-c">
            <!-- <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
            <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span> -->
          </div>
          <div class="p-c">
            <span>广告</span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="i-a">
        <div class="ia-a">
          <img v-lazy-decrypt="video.imgUrl" />
        </div>
        <div class="ia-b">
          <div class="b-a">
            <span class="a-l" :class="`s${classifyResolution(video.resolution)}`">
              {{ classifyResolution(video.resolution) }}
            </span>
            <span class="a-r ss1">免费</span>
          </div>
          <div class="b-b">
            <span><i class="mvfont mv-zan" />{{ formatNumber(video.likeCount) }}</span>
            <span>{{ formatDuration(parseInt(video.duration)) }}</span>
          </div>
        </div>
      </div>
      <div class="i-b">
        <div class="ib-a">
          {{ video.title }}
        </div>
        <div class="ib-b">
          {{ formatNumber(video.viewCount) }}次观看
          <span>•{{ fromNow(video.addTime) }}</span>
          <span>•{{ video.channelName }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import type { Video } from '@/types/video'
  import { formatDuration, fromNow, classifyResolution, formatNumber } from '@/utils'
  import type { DataWithAd } from '@/types/global.d'

  defineProps<{
    video: DataWithAd<Video>
  }>()
</script>
