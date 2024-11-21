<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>详情</span>
      </div>
    </header>
    <main class="b-b-b">
      <div class="bbs-detail">
        <div class="d-a">{{ detail?.title || '' }}</div>
        <div class="d-b">
          <div class="b-l">
            <div class="l-a" v-lazy:background-image="{ src: getAssetsFile('logo-4.png') }" />
            <div class="l-b">
              <h3>{{ detail?.user?.nickName || '芒果TV官方' }}</h3>
              <span>{{ detail?.createTime || '' }}</span>
            </div>
          </div>
          <div class="b-r">
            <span><i class="mvfont mv-kan" />{{ Number(detail?.viewCount) || 0 }}</span>
            <span><i class="mvfont mv-pinglun" />{{ Number(detail?.commentCount) || 0 }}</span>
            <span><i class="mvfont mv-zan" />{{ Number(detail?.likeCount) || 0 }}</span>
            <span><i class="mvfont mv-like" />{{ Number(detail?.collectionCount) || 0 }}</span>
          </div>
        </div>
        <div class="d-c">{{ detail?.content || '' }}</div>
        <div class="d-d">
          <img v-for="(img, index) in bbsImgs" :key="index" v-lazy-decrypt="img" @click="showPreview(index)" />
        </div>

        <div class="au-ad">
          <img src="https://sjtv.xianliao.voto/9btu/bbbbb.png" />
        </div>
        <div class="bbs-d-ne">
          <div class="item" v-if="detail?.prev?.id" @click="handleBbsClick(detail.prev)">
            <div class="i-a"><i class="mvfont mv-left" />上一篇</div>
            <div class="i-b">
              <span>#{{ detail.prev?.channel?.title }}-{{ detail.prev?.subChannel?.title }}</span>
              {{ detail.prev?.title }}
            </div>
          </div>
          <div class="item" v-if="detail?.next?.id" @click="handleBbsClick(detail.next)">
            <div class="i-a">下一篇<i class="mvfont mv-right" /></div>
            <div class="i-b">
              <span>#{{ detail.next?.channel?.title }}-{{ detail.next?.subChannel?.title }}</span>
              {{ detail.next?.title }}
            </div>
          </div>
        </div>

        <div class="au-t-c">
          <div class="a-t">
            <div class="t-l"><i class="mvfont mv-xietiao" />相关推荐</div>
          </div>
          <div class="a-c">
            <BbsListItem :bbs-list="relatedList" :bbs-click="handleBbsClick" />
            <div class="more-box"><a v-if="pageCount > 1 && pageIndex < pageCount" @click="loadMore">加载更多</a></div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="p-bbs">
        <span><i @click="handleShare" class="mvfont mv-fenxiang" /><small>分享</small></span>
        <span>
          <i @click="showComment = true" class="mvfont mv-pinglun" />
          <small v-if="Number(detail?.commentCount) == 0">评论</small>
          <b v-else>{{ detail?.commentCount }}</b>
        </span>
        <span>
          <i :class="['mvfont', 'mv-zan', { active: detail?.like == '1' }]" @click="toggleLike" />
          <small v-if="Number(detail?.likeCount) == 0">赞</small>
          <b v-else>{{ detail?.likeCount }}</b>
        </span>
        <span>
          <i :class="['mvfont', 'mv-like', { active: detail?.collect }]" @click="toggleCollection" />
          <small v-if="Number(detail?.collectionCount) == 0">收藏</small>
          <b v-else>{{ detail?.collectionCount }}</b>
        </span>
      </div>
    </footer>

    <ImagePreview v-model:show="showImagePreview" :images="bbsImgs" ref="imgPreviewRef" :start-position="imgPreviewIndex" :loop="false">
      <template #image="{ src, style }">
        <img v-lazy-decrypt="src" :style="[{ width: '100%' }, style]" />
      </template>
    </ImagePreview>

    <Popup v-model:show="showSharePopup" position="center" :safe-area-inset-top="true" :safe-area-inset-bottom="true" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>

    <div class="au-pop" id="pop-comment" v-show="showComment">
      <div class="ap-bg" />
      <div class="ap-bd" style="height: 100%">
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
              一键发评
              <p>
                <span v-for="preset in presetComments" :key="preset" @click="postComment(preset)" v-html="parseEmojis(preset)" />
              </p>
            </div>
            <div class="f-b">
              <div class="b-input">
                <i class="mvfont mv-bianji" />
                <!-- <input id="commentContent" placeholder="欢迎您留下宝贵的见解！" autocomplete="off" /> -->
                <div id="commentContent" contenteditable="true" class="editable-div" @focus="showEmojiPopup = true" />
                <i @click="showEmojiPopup = !showEmojiPopup" class="mvfont mv-biaoqing" />
              </div>
              <div @click="postComment()" class="btn btn1">发送</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Popup v-model:show="showEmojiPopup" round position="bottom" :overlay="false" class="emoji-popup" :duration="0">
      <div class="emoji-container">
        <swiper :modules="emojiModules" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="false">
          <swiper-slide v-for="(items, index) in groupedEmojis" :key="index">
            <span v-for="(item, i) in items" :key="i" @click="inputEmoji(item.title)">
              <img :src="getAssetsFile(`emoji/${item.src}`)" :title="item.title" />
            </span>
            <span @click="deleteEmoji()"><i class="mvfont mv-shanchu" /></span>
          </swiper-slide>
          <!-- <div class="swiper-pagination" /> -->
        </swiper>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { getAssetsFile } from '@/utils'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getBbsDetailApi, getBbsRelatedRecommendApi, bbsLikeApi, bbsCollectionApi, getBbsCommentListApi, bbsCommentLikeApi, bbsCommentApi } from '@/api/bbs'
import BbsListItem from '@/components/BbsListItem.vue'
import type { Bbs } from '@/types/bbs'
import { ImagePreview, Popup, showToast } from 'vant'
import Clipboard from 'clipboard'
import { groupEmoji, inputEmoji, deleteEmoji } from '@/utils/emojiHandle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import emojiList from '@/utils/emoji.js' // 导入表情列表

const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const detail = ref<Bbs | null>(null)
const relatedList = ref<Bbs[]>([])
const pageIndex = ref(1)
const pageCount = ref(0)
const showComment = ref(false)
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const comments = ref([])
const presetComments = ref(['放开她，让我来！[色]', '老师真是太美了！[可爱]'])
const emojiModules = [Pagination]
const showEmojiPopup = ref(false)
const groupedEmojis = groupEmoji()

const bbsImgs = ref<string[]>([])
const imgPreviewIndex = ref(0)
const showImagePreview = ref(false)

const postComment = async (content = '') => {
  if (!checkLogin()) return
  if (!detail.value) return

  // 直接从 DOM 获取评论内容
  const textDom = document.getElementById('commentContent') as HTMLElement
  const commentContent = content || textDom.innerText.trim() // 使用 innerText 获取内容

  if (commentContent === '') {
    showToast('评论内容不能为空')
    return
  }
  try {
    const { data } = await bbsCommentApi({ PostId: detail.value.id, Content: commentContent })
    if (data) {
      showToast('评论成功')
      fetchComments() // 重新获取评论列表
      textDom.innerText = '' // 清空输入框
      showEmojiPopup.value = false
    }
  } catch (error) {
    console.error('发表评论失败:', error)
    showToast('发表评论失败')
  }
}

const fetchDetail = async (id: string) => {
  try {
    const response = await getBbsDetailApi(id)
    const { data } = response
    if (data) {
      detail.value = data.data
      bbsImgs.value = detail.value?.imgs.split(',') || []
      fetchRelatedList()
      fetchComments()
    }
  } catch (error) {
    console.error('获取详情失败:', error)
  }
}

const showPreview = (index: number) => {
  showImagePreview.value = true
  imgPreviewIndex.value = index
}

const fetchRelatedList = async () => {
  try {
    const {
      data: { data }
    } = await getBbsRelatedRecommendApi({ id: detail.value?.id || '', PageIndex: pageIndex.value, PageSize: 10 })
    if (data && Array.isArray(data.items)) {
      relatedList.value = relatedList.value.concat(data.items)
      pageCount.value = parseInt(data.pageCount)
      console.log(relatedList.value)
    }
  } catch (error) {
    console.error('获取相关推荐失败:', error)
  }
}

const loadMore = () => {
  pageIndex.value += 1
  fetchRelatedList()
}

const toggleLike = async () => {
  if (!checkLogin()) return
  if (!detail.value) return
  const newLikeStatus = detail.value.like == '1' ? 0 : 1
  try {
    const { data } = await bbsLikeApi({ PostId: detail.value.id, Like: newLikeStatus })
    if (data) {
      detail.value.like = newLikeStatus.toString()
      const newLikeCount = Number(detail.value.likeCount) + (newLikeStatus ? 1 : -1)
      detail.value.likeCount = Math.max(newLikeCount, 0).toString()
    }
  } catch (error) {
    console.error('点赞失败:', error)
  }
}

const toggleCollection = async () => {
  if (!checkLogin()) return
  if (!detail.value) return
  const newCollectStatus = !detail.value.collect
  try {
    const { data } = await bbsCollectionApi({ PostId: detail.value.id, Collect: newCollectStatus, Ids: '' })
    if (data) {
      detail.value.collect = newCollectStatus
      const newCollectionCount = Number(detail.value.collectionCount) + (newCollectStatus ? 1 : -1)
      detail.value.collectionCount = Math.max(newCollectionCount, 0).toString()
    }
  } catch (error) {
    console.error('收藏失败:', error)
  }
}

const handleShare = () => {
  if (clipboard.value) {
    clipboard.value.destroy()
  }
  clipboard.value = new Clipboard('.share-button', {
    text: () => window.location.href
  })

  clipboard.value?.on('success', () => {
    showSharePopup.value = true
    setTimeout(() => {
      showSharePopup.value = false
    }, 2000)
    clipboard.value?.destroy()
  })

  clipboard.value?.on('error', () => {
    console.error('复制失败')
    clipboard.value?.destroy()
  })

  const button = document.createElement('button')
  button.className = 'share-button'
  document.body.appendChild(button)
  button.click()
  document.body.removeChild(button)
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

// 创建一个方法来解析评论内容中的表情符号
const parseEmojis = (content: string): string => {
  if (content && content.length > 0) {
    emojiList.forEach((item) => {
      var reg = '/\\' + item.title.replace(']', '\\]') + '/g'
      content = content.replace(eval(reg), `<img src="${getAssetsFile(`emoji/${item.src}`)}" alt="${item.title}" />`)
    })
  }
  return content
}

const fetchComments = async () => {
  if (!detail.value) return
  try {
    const {
      data: { data }
    } = await getBbsCommentListApi({ Id: detail.value.id, PageSize: 10, PageIndex: 1 })
    if (data) {
      comments.value = data.items.map((comment) => ({
        ...comment,
        likeCount: comment.likeCount.toString(),
        hateCount: comment.hateCount.toString(),
        like: comment.like.toString(),
        content: parseEmojis(comment.content) // 解析评论内容
      }))
      console.log('评论列表:', comments.value)
    }
  } catch (error) {
    console.error('获取评论列表失败:', error)
  }
}

const toggleCommentLike = async (comment, likeType) => {
  if (!checkLogin()) return

  try {
    const currentLikeType = comment.like
    let newLikeType = likeType

    if (currentLikeType == likeType) {
      newLikeType = 0 // 取消点赞或踩
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

onBeforeRouteLeave(() => {
  toggleComment()
})

const toggleComment = (isShow = false) => {
  showComment.value = isShow
  showEmojiPopup.value = isShow
}

const handleBbsClick = (post: Bbs) => {
  console.log(post)
  pageIndex.value = 1
  relatedList.value = []
  detail.value = {} as Bbs
  comments.value = []
  bbsImgs.value = []
  fetchDetail(post.id).then(() => {
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  })
}

;(async () => {
  const id = route.params.id
  if (id) {
    fetchDetail(id as string).then(() => {
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    })
  }
})()
</script>
