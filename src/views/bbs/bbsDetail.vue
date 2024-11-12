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
            <div class="l-a" v-lazy:background-image="{ src: detail?.user?.avatar, error: getAssetsFile('logo-4.png') }" />
            <div class="l-b">
              <h3>{{ detail?.user?.nickName || '' }}</h3>
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
          <img v-for="(img, index) in detail?.decryptImage" :key="img" :src="img" @click="showPreview(index)" />
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
            <div class="more-box"><a v-if="pageCount > 1" @click="loadMore">加载更多</a></div>
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
          <i :class="['mvfont', 'mv-zan', { active: detail?.like }]" @click="toggleLike" />
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

    <Popup v-model:show="showSharePopup" position="center" :safe-area-inset-top="true" :safe-area-inset-bottom="true" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
  </div>
  <div class="au-pop" id="pop-comment" v-show="showComment">
    <div class="ap-bg" />
    <div class="ap-bd" style="height: 100%">
      <div class="bbs-comment-box">
        <div class="bcb-head">
          <p>
            评论<b>{{ comments.length }}</b>
          </p>
          <span @click="showComment = false"><i class="mvfont mv-close" /></span>
        </div>
        <div class="bcb-main">
          <ul class="bbs-comment-list">
            <li v-for="comment in comments" :key="comment.id">
              <div class="i-l">
                <img v-lazy="{ src: comment.userAvatar, error: getAssetsFile('logo-4.png') }" alt="用户头像" />
              </div>
              <div class="i-r">
                <div class="r-a">{{ comment.userName }}</div>
                <div class="r-b">{{ comment.createTime }}</div>
                <div class="r-c">{{ comment.content }}</div>
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
              <span v-for="preset in presetComments" :key="preset" @click="postComment(preset)">{{ preset }}</span>
            </p>
          </div>
          <div class="f-b">
            <div class="b-input">
              <i class="mvfont mv-bianji" />
              <input v-model="commentInput" placeholder="欢迎您留下宝贵的见解！" @keyup.enter="postComment(commentInput)" />
              <i class="mvfont mv-biaoqing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getBbsDetailApi, getBbsRelatedRecommendApi, bbsLikeApi, bbsCollectionApi, getBbsCommentListApi, bbsCommentLikeApi, bbsCommentApi } from '@/api/bbs'
import decryptionService from '@/utils/decryptionService'
import BbsListItem from '@/components/BbsListItem.vue'
import type { Bbs } from '@/types/bbs'
import { showImagePreview, Popup, showToast } from 'vant'
import Clipboard from 'clipboard'

const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const detail = ref<Bbs | null>(null)
const relatedList = ref<Bbs[]>([])
const pageIndex = ref(1)
const pageCount = ref(0)
const decrypt = new decryptionService()
const showComment = ref(false)
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const comments = ref([])
const commentInput = ref('')
const presetComments = ['支持楼主☝', '📢真是太美了', '真是太美了🍀']

const postComment = async (content: string) => {
  if (!checkLogin()) return
  if (!detail.value) return
  if (!content) return
  try {
    const { data } = await bbsCommentApi({ PostId: detail.value.id, Content: content })
    if (data) {
      showToast('评论成功')
      fetchComments() // 重新获取评论列表
      commentInput.value = ''
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
      detail.value.decryptImage = await Promise.all(
        detail.value.imgs.split(',').map(async (img) => {
          return await decrypt.fetchAndDecrypt(appStore.cdnUrl + img)
        })
      )
      fetchRelatedList()
      fetchComments()
    }
  } catch (error) {
    console.error('获取详情失败:', error)
  }
}

const fetchRelatedList = async () => {
  try {
    const response = await getBbsRelatedRecommendApi({ id: detail.value?.id || '', PageIndex: pageIndex.value, PageSize: 10 })
    const {
      data: { data }
    } = response
    if (data) {
      relatedList.value = data.items
      pageCount.value = parseInt(data.pageCount)
      relatedList.value.forEach(async (item) => {
        if (item.imgs) {
          item.decryptImage = await Promise.all(
            item.imgs.split(',').map(async (img) => {
              return await decrypt.fetchAndDecrypt(appStore.cdnUrl + img)
            })
          )
        }
      })
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

const showPreview = (index: number) => {
  if (detail.value?.decryptImage) {
    showImagePreview({
      images: detail.value.decryptImage,
      startPosition: index,
      closeable: true,
      loop: false
    })
  }
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
        like: comment.like.toString()
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

const handleBbsClick = (post: Bbs) => {
  console.log(post)
  pageIndex.value = 1
  relatedList.value = []
  fetchDetail(post.id)
}

;(async () => {
  const id = route.params.id
  if (id) {
    fetchDetail(id as string)
  }
})()
</script>
