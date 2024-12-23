<template>
  <ul class="bbs-weimi">
    <li v-for="(post, index) in bbsList" :key="index" @click="router.push({ name: 'bbsDetail', params: { id: post.id } })">
      <div class="i-a">
        <img v-if="post.imgs" v-lazy-decrypt="post.imgs.split(',')[0]" />
        <div class="a-b">
          <div class="ab-d">
            <div class="d-l">
              <span># {{ post.subChannel.title }}</span>
            </div>
            <div class="d-r">
              <span v-if="post.imgs != ''"><i class="mvfont mv-tuji1" />{{ post.imgs.split(',').length }}</span>
              <span v-if="post.videos != ''"><i class="mvfont mv-mv1" />{{ post.videos.split(',').length }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="i-x">
        <div class="i-b">
          <span><i class="mvfont mv-pinglun" />{{ post.commentCount }}</span>
          <span><i class="mvfont mv-zan" />{{ post.likeCount }}</span>
          <span><i class="mvfont mv-like" />{{ post.collectionCount }}</span>
          <span><i class="mvfont mv-kan" />{{ post.viewCount }}</span>
        </div>
        <div class="i-c" v-html="decodeHtmlEntities(post.title || '')" />
        <div class="i-d">
          <span><img :src="getAssetsFile('logo-4.png')" />{{ post.user.nickName || '芒果TV官方' }}</span>
          {{ formatDate(post.createTime) }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetsFile, decodeHtmlEntities } from '@/utils'
import { defineProps, withDefaults } from 'vue'
import { Bbs } from '@/types/bbs'
import dayjs from 'dayjs'

withDefaults(
  defineProps<{
    bbsList: Bbs[]
    customClass?: string
    isCollect?: boolean
  }>(),
  {
    customClass: '',
    isCollect: false
  }
)

const router = useRouter()

const formatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD')
}
</script>
