<template>
  <Popup v-model:show="showComment" round position="bottom" :overlay="true" :overlay-style="{ background: 'none' }" :style="{ height: commentHeight }" @click-overlay="toggleCommentVisibility(false)">
    <div class="bbs-comment-box">
      <div class="bcb-head">
        <p>
          {{ $t('common.comment') }}<b>{{ comments.length == 0 ? '' : comments.length }}</b>
        </p>
        <span @click="toggleCommentVisibility(false)"><i class="mvfont mv-close" /></span>
      </div>
      <div ref="commentListRef" class="bcb-main">
        <List v-if="comments.length > 0" v-model:loading="loading" :loading-text="$t('common.loading')" :error-text="$t('common.loadingFail')" :finished="finished" :finished-text="$t('common.noMore')" @load="loadMoreComments">
          <ul class="bbs-comment-list">
            <li v-for="comment in comments" :key="comment.id">
              <div class="i-l">
                <img v-lazy="{ src: getAssetsFile('logo-4.png') }" />
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
        </List>
        <div v-if="noData" class="no-comment">{{ $t('common.noComment') }}</div>
      </div>
      <div class="bcb-foot">
        <!-- <div class="f-a">
          <span>一键发评</span>
          <p>
            <span v-for="preset in presetComments" :key="preset" @click="postComment(preset)" v-html="parseEmojis(preset)" />
          </p>
        </div> -->
        <div v-show="showEmojiPopup" class="f-c">
          <swiper :modules="emojiModules" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="false">
            <swiper-slide v-for="(items, index) in groupedEmojis" :key="index">
              <span v-for="(item, i) in items" :key="i" @click="inputEmoji(item.title)">
                <img :src="getAssetsFile(`emoji/${item.src}`)" :title="item.title" />
              </span>
              <span @click="deleteEmoji()"><i class="mvfont mv-shanchu" /></span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="f-b">
          <div class="b-input">
            <i class="mvfont mv-bianji" />
            <div id="commentContent" contenteditable="true" class="editable-div" @focus="showEmojiPopup = true" :data-placeholder="$t('common.commentPlaceholder')" />
            <i @click="showEmojiPopup = !showEmojiPopup" class="mvfont mv-biaoqing" />
          </div>
          <div @click="postComment()" class="btn btn1">{{ $t('common.send') }}</div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { getAssetsFile } from '@/utils'
import { groupEmoji, inputEmoji, deleteEmoji, parseEmojis } from '@/utils/emojiHandle'
import { bbsCommentApi, bbsCommentLikeApi, getBbsCommentListApi } from '@/api/bbs'
import { Popup, showToast, List } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useUserStore } from '@/store/user'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

// 使用相对时间插件
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const props = defineProps<{
  postId?: string
  showComment: boolean
  commentHeight?: string
  teleportTarget?: string
}>()
const emit = defineEmits(['update:showComment', 'comment-added'])

const commentListRef = ref(null)
const showComment = ref(props.showComment)
const comments = ref([])
const noData = ref(false)
const commentHeight = props.commentHeight || '70%'
// const teleportTarget = props.teleportTarget || '.page'

// const presetComments = ref(['放开她，让我来！[色]', '老师真是太美了！[可爱]'])
const showEmojiPopup = ref(false)
const emojiModules = [Pagination]
const groupedEmojis = groupEmoji()
const userStore = useUserStore()

const loading = ref(false)
const finished = ref(false)
const pageIndex = ref(1)

const fetchComments = async (isRefresh = false) => {
  if (!props.postId) return
  if (isRefresh) {
    comments.value = []
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    loading.value = true
    const {
      data: { data }
    } = await getBbsCommentListApi({ Id: props.postId, PageSize: 10, PageIndex: pageIndex.value })
    if (data) {
      comments.value = [
        ...comments.value,
        ...data.items.map((comment) => ({
          ...comment,
          likeCount: comment.likeCount.toString(),
          hateCount: comment.hateCount.toString(),
          createTime: dayjs(comment.createTime).fromNow(),
          like: comment.like.toString(),
          content: parseEmojis(comment.content)
        }))
      ]
      noData.value = comments.value.length == 0
      finished.value = data.items.length < 10
      pageIndex.value++
    }
  } catch (error) {
    console.error('获取评论列表失败:', error)
  } finally {
    loading.value = false
  }
}

const postComment = async (content = '') => {
  if (!checkLogin()) return

  const textDom = document.getElementById('commentContent') as HTMLElement
  const commentContent = content || textDom.innerText.trim()

  if (commentContent === '') {
    showToast('评论内容不能为空')
    return
  }

  if (commentContent.length < 5) {
    showToast('评论内容至少需要5个字')
    return
  }

  try {
    const { data } = await bbsCommentApi({ PostId: props.postId, Content: commentContent })
    if (data) {
      showToast('评论成功')
      comments.value.unshift({
        id: '',
        userName: userStore.userInfo.nickName,
        createTime: dayjs().fromNow(),
        content: parseEmojis(commentContent),
        likeCount: '0',
        hateCount: '0',
        like: '0'
      })
      noData.value = false
      nextTick(() => {
        if (commentListRef.value) {
          commentListRef.value.scrollTop = 0
        }
      })
      textDom.innerText = ''
      showEmojiPopup.value = false
      emit('comment-added')
    }
  } catch (error) {
    showToast(error.message || '发表评论失败')
  }
}

const toggleCommentLike = async (comment, likeType) => {
  if (!checkLogin()) return

  try {
    const currentLikeType = comment.like
    let newLikeType = likeType

    if (currentLikeType == likeType) {
      newLikeType = 0
    }

    await bbsCommentLikeApi({ CommentId: comment.id, Like: newLikeType })

    updateCommentLikeStatus(comment, currentLikeType, newLikeType)
    comment.like = newLikeType.toString()
  } catch (error) {
    console.error('操作失败:', error)
  }
}

const updateCommentLikeStatus = (comment, currentLikeType, newLikeType) => {
  if (newLikeType == 1) {
    if (currentLikeType == 0) {
      comment.likeCount = (Number(comment.likeCount) + 1).toString()
    } else if (currentLikeType == 2) {
      comment.hateCount = (Number(comment.hateCount) - 1).toString()
      comment.likeCount = (Number(comment.likeCount) + 1).toString()
    }
  } else if (newLikeType == 2) {
    if (currentLikeType == 0) {
      comment.hateCount = (Number(comment.hateCount) + 1).toString()
    } else if (currentLikeType == 1) {
      comment.likeCount = (Number(comment.likeCount) - 1).toString()
      comment.hateCount = (Number(comment.hateCount) + 1).toString()
    }
  } else {
    if (currentLikeType == 1) {
      comment.likeCount = (Number(comment.likeCount) - 1).toString()
    } else if (currentLikeType == 2) {
      comment.hateCount = (Number(comment.hateCount) - 1).toString()
    }
  }
}

const toggleCommentVisibility = (isVisible: boolean) => {
  showComment.value = isVisible
  emit('update:showComment', isVisible)
  if (!isVisible) {
    showEmojiPopup.value = false
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const loadMoreComments = () => {
  fetchComments()
}

onMounted(() => {
  if (props.postId) {
    fetchComments(true)
  }
})

// 监听 showComment 的变化并发射事件
watch(showComment, (newVal) => {
  emit('update:showComment', newVal)
})

watch([() => props.showComment, () => props.postId], ([newShowComment, newPostId]) => {
  showComment.value = newShowComment
  if (newShowComment && newPostId) {
    fetchComments(true)
  }
  if (!newShowComment) {
    showEmojiPopup.value = false
  }
})
</script>
