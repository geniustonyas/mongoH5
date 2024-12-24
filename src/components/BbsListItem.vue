<template>
  <ul class="bbs-list">
    <li v-for="(post, index) in bbsList" :key="index" @click="handleClick(post)">
      <div class="i-a">
        <div class="a-l">
          <img :src="getAssetsFile('logo-4.png')" />
          <div class="l-n">
            <h3>{{ post.user.nickName || '芒果TV官方' }}</h3>
            <span>{{ fromNow(post.createTime) }}</span>
          </div>
        </div>
        <div v-if="isCollect" class="a-r">
          <span v-if="post.isCollected" class="off" @click.stop="toggleCollect(post)">取消收藏</span>
          <span v-else class="on" @click.stop="toggleCollect(post)">＋添加收藏</span>
        </div>
        <div v-else class="a-r">
          <span>#{{ post.channel.title }}</span>
          <span v-for="tag in post.subChannel.title.split(',')" :key="tag">{{ '#' + tag }}</span>
        </div>
      </div>
      <div class="i-b" v-html="decodeHtmlEntities(post.title || '')" />
      <div :class="`i-c pic${post.imgs.split(',').length > 4 ? '9' : post.imgs.split(',').length || ''} ${post.channel.id == '2' ? 'weimi' : ''}`">
        <div class="item" v-for="(img, index1) in post.imgs.split(',')" :key="index1">
          <img v-lazy-decrypt="img" :loading-img="post.imgs.split(',').length == 3 && index1 == 0 ? 'default2.gif' : 'default.gif'" @load="onImageLoaded" />
        </div>
      </div>
      <div class="i-d">
        <div class="d-x">
          <span><i class="mvfont mv-pinglun" />{{ post.commentCount }}</span>
          <span><i class="mvfont mv-zan" />{{ post.likeCount }}</span>
          <span><i class="mvfont mv-like" />{{ post.collectionCount }}</span>
        </div>
        <div class="d-x">
          <span><i class="mvfont mv-kan" />{{ post.viewCount }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAssetsFile, decodeHtmlEntities, fromNow } from '@/utils'
import { Bbs } from '@/types/bbs'
import { bbsCollectionApi } from '@/api/bbs'

const router = useRouter()

const props = withDefaults(
  defineProps<{
    bbsList: Bbs[]
    isCollect?: boolean
    bbsClick?: (post: Bbs) => void
  }>(),
  {
    isCollect: false
  }
)

const toggleCollect = async (post: Bbs) => {
  try {
    const { data } = await bbsCollectionApi({
      PostId: post.id,
      Collect: !post.isCollected,
      Ids: post.id.toString()
    })
    if (data) {
      post.isCollected = !post.isCollected
    } else {
      console.error('收藏操作失败:', data.message)
    }
  } catch (error) {
    console.error('收藏操作失败:', error)
  }
}

const handleClick = (post: Bbs) => {
  if (props.bbsClick) {
    props.bbsClick(post)
  } else {
    router.push({ name: 'bbsDetail', params: { id: post.id } })
  }
}

const isDecrypting = ref(true)
const onImageLoaded = () => {
  isDecrypting.value = false
}
</script>
