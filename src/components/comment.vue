<template>
  <div class="bbs-comment-box">
    <div class="bcb-head">
      <p>
        评论<b>{{ comments.length == 0 ? '' : comments.length }}</b>
      </p>
      <span @click="toggleComment(false)"><i class="mvfont mv-close" /></span>
    </div>
    <div class="bcb-main">
      <ul class="bbs-comment-list">
        <li v-for="comment in comments" :key="comment.id">
          <div class="i-l">
            <img v-lazy="{ src: getAssetsFile('logo-4.png') }" alt="用户头像" />
          </div>
          <div class="i-r">
            <div class="r-a">{{ comment.userName }}</div>
            <div class="r-b">{{ comment.createTime }}</div>
            <div class="r-c" v-html="comment.content" />
            <div class="r-d">
              <span @click="toggleCommentLike(comment, 1)">
                <i :class="['mvfont', 'mv-zan', { active: comment.like == 1 }]" />
                {{ comment.likeCount }}
              </span>
              <span @click="toggleCommentLike(comment, 2)">
                <i :class="['mvfont', 'mv-nzan', { active: comment.like == 2 }]" />
                {{ comment.hateCount }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bcb-foot">
      <div class="f-a">
        <span>一键发评</span>
        <p>
          <span v-for="preset in presetComments" :key="preset" @click="postComment(preset)" v-html="parseEmojis(preset)" />
        </p>
      </div>
      <div class="f-b">
        <div class="b-input">
          <i class="mvfont mv-bianji" />
          <div id="commentContent" contenteditable="true" class="editable-div" @focus="showEmojiPopup = true" />
          <i @click="showEmojiPopup = !showEmojiPopup" class="mvfont mv-biaoqing" />
        </div>
        <div @click="postComment()" class="btn btn1">发送</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile, parseEmojis } from '@/utils'
import { bbsCommentApi, bbsCommentLikeApi } from '@/api/bbs'
import { showToast } from 'vant'

const comments = ref([])
const presetComments = ref(['放开她，让我来！[色]', '老师真是太美了！[可爱]'])
const showEmojiPopup = ref(false)

const postComment = async (content = '') => {
  // ... 发表评论逻辑
}

const toggleCommentLike = async (comment, likeType) => {
  // ... 点赞或踩逻辑
}

const toggleComment = (isShow = false) => {
  // ... 显示或隐藏评论框逻辑
}
</script>