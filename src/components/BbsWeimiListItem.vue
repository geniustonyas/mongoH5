<template>
  <ul class="bbs-weimi">
    <li v-for="(post, index) in bbsList" :key="index" @click="handleClick(post)">
      <div v-if="!post.isAd" class="i-a">
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
      <div v-else class="i-a">
        <img v-lazy-decrypt="post.imgUrl" />
        <div class="a-b">
          <div class="ab-d">
            <div class="d-l">
              <span>广告</span>
            </div>
          </div>
        </div>
      </div>
      <div class="i-x">
        <div class="i-b">
          <span><i class="mvfont mv-pinglun" />{{ post.commentCount ? formatNumber(post.commentCount) : 0 }}</span>
          <span><i class="mvfont mv-zan" />{{ post.likeCount ? formatNumber(post.likeCount) : 0 }}</span>
          <span><i class="mvfont mv-like" />{{ post.collectionCount ? formatNumber(post.collectionCount) : 0 }}</span>
          <span><i class="mvfont mv-kan" />{{ post.viewCount ? formatNumber(post.viewCount) : 0 }}</span>
        </div>
        <div class="i-c" v-html="decodeHtmlEntities(post.title || '')" />
        <div class="i-d">
          <span><img :src="getAssetsFile('logo-4.png')" />{{ '芒果TV官方' }}</span>
          {{ fromNow(post.createTime) }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetsFile, decodeHtmlEntities, fromNow, openAd, formatNumber } from '@/utils'
import { defineProps, withDefaults } from 'vue'
import { Bbs } from '@/types/bbs'
import type { DataWithAd } from '@/types/global.d'

const router = useRouter()

withDefaults(
  defineProps<{
    bbsList: DataWithAd<Bbs>[]
    customClass?: string
    isCollect?: boolean
  }>(),
  {
    customClass: '',
    isCollect: false
  }
)

const handleClick = (post: DataWithAd<Bbs>) => {
  if (post.isAd) {
    openAd(post.targetUrl, '社区帖子广告', 'click', post.id)
  } else {
    router.push({ name: 'bbsDetail', params: { id: post.id } })
  }
}
</script>
