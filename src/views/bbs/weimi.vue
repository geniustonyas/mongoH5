<template>
  <div class="page">
    <main class="bbs-plate-box">
      <header class="d-header">
        <div class="d-l">
          <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
        </div>
        <div class="d-m">
          <span>{{ weimi?.title }}</span>
        </div>
        <div class="d-r" @click="router.push({ name: 'bbsSearch' })">
          <i class="mvfont mv-search1" />
        </div>
      </header>
      <div class="pb-a">
        <div class="a-b" v-lazy:background-image="weimi?.isDecrypted ? weimi?.coverImage : getAssetsFile('default.gif')" />
        <div class="a-c">
          <div class="c-i"><img v-lazy="weimi?.isDecrypted ? weimi?.coverImage : getAssetsFile('default.gif')" /></div>
          <div class="c-d">
            <h3>{{ weimi?.title }}</h3>
            <p>{{ weimi?.description }}</p>
            <span>
              今日：<b>{{ weimi?.dayNewPostCount }}</b>
            </span>
            <span>
              主题：<b>{{ weimi?.postCount }}</b>
            </span>
          </div>
        </div>
      </div>
      <div class="pb-b">
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-l">排序</div>
            <div class="i-r">
              <span v-for="(label, key) in sortOptions" :key="key" :class="{ active: query.SortType == key }" @click="changeSortType(key)">
                {{ label }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="weimi?.actress && weimi?.actress.length > 0" class="au-tags">
          <div class="t-a">
            <div class="a-l">标签</div>
            <div class="a-r" @click="toggleActressList"><i class="mvfont mv-xia" /></div>
          </div>
          <div class="t-b" ref="actressListRef">
            <span :class="{ active: query.ActressId == '' }" @click="changeActress('')">全部</span>
            <span v-for="actress in weimi?.actress" :key="actress.id" :class="{ active: query.ActressId == actress.id }" @click="changeActress(actress.id)">{{ actress.title }}</span>
          </div>
          <div class="t-c">
            <span>…</span>
          </div>
        </div>
      </div>
      <div class="pb-c">
        <List v-model:loading="listLoading" :finished="finished" :immediate-check="false" @load="loadMore">
          <BbsWeimiListItem v-if="query.ChannelId == 2" :bbs-list="bbsList" />
          <BbsListItem v-else :bbs-list="bbsList" />
        </List>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBbsSubCategoryDetailApi, getBbsListApi } from '@/api/bbs'
import type { BbsListRequest, BbsSubCategoryDetailResponse } from '@/types/bbs'
import decryptionService from '@/utils/decryptionService'
import { useAppStore } from '@/store/app'
import { List } from 'vant'
import { getAssetsFile } from '@/utils'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const decrypt = new decryptionService()
const sortOptions = { 1: '更新', 2: '浏览', 4: '点赞', 5: '评论', 6: '收藏', 3: '视频' }
const weimi = ref<BbsSubCategoryDetailResponse | null>(null)
const bbsList = ref([])
const actressListRef = ref<HTMLElement | null>(null)

const query = reactive<BbsListRequest>({
  PageIndex: 1,
  PageSize: 5,
  SortType: 0,
  ChannelId: route.query.channelId as string,
  SubChannelId: route.params.id as string,
  ActressId: '',
  KeyWord: ''
})

let listLoading = ref(false)
let finished = ref(false)

const fetchCategories = async () => {
  try {
    const {
      data: { data }
    } = await getBbsSubCategoryDetailApi({ Id: route.params.id as string })
    if (data) {
      weimi.value = data
      weimi.value.isDecrypted = false
      try {
        weimi.value.coverImage = await decrypt.fetchAndDecrypt(appStore.cdnUrl + weimi.value.coverImage)
        weimi.value.isDecrypted = true
      } catch (error) {
        console.error(`解密图片失败: ${weimi.value.coverImage}`, error)
        weimi.value.isDecrypted = false
      }
    } else {
      console.error('未找到微密圈数据')
    }
  } catch (error) {
    console.error('获取分类数据失败:', error)
  }
}

const fetchBbsList = async (isRefresh = false) => {
  if (isRefresh) {
    query.PageIndex = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const {
      data: { data }
    } = await getBbsListApi(query)
    const newItems = data.items.map((item) => ({
      ...item,
      decrypt: item.imgs.split(',').map((img) => ({
        isDecrypted: false,
        decryptImg: img
      }))
    }))

    const startIndex = bbsList.value.length

    if (isRefresh) {
      bbsList.value = newItems
    } else {
      bbsList.value = [...bbsList.value, ...newItems]
    }

    bbsList.value.slice(startIndex).forEach(async (item) => {
      if (item.imgs) {
        item.decrypt.forEach(async (imgObj) => {
          try {
            imgObj.decryptImg = await decrypt.fetchAndDecrypt(appStore.cdnUrl + imgObj.decryptImg)
            imgObj.isDecrypted = true
          } catch (error) {
            console.error(`解密图片失败: ${imgObj.decryptImg}`, error)
            imgObj.isDecrypted = false
          }
        })
      }
    })

    if (newItems.length < query.PageSize) {
      finished.value = true
    }

    console.log('BBS列表:', bbsList.value)
  } catch (error) {
    console.error('获取BBS列表失败:', error)
  } finally {
    listLoading.value = false
  }
}

const loadMore = () => {
  query.PageIndex += 1
  fetchBbsList()
}

const toggleActressList = () => {
  const auTags = document.querySelector('.au-tags')
  if (auTags) {
    auTags.classList.toggle('mini')
  }
}

const changeSortType = (sortType: number) => {
  query.SortType = sortType
  bbsList.value = []
  fetchBbsList(true).then(() => {
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  })
}

const changeActress = (actressId: string) => {
  query.ActressId = actressId
  bbsList.value = []
  fetchBbsList(true).then(() => {
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  })
}

onMounted(async () => {
  await fetchCategories()
  await fetchBbsList(true)
  await nextTick(() => {
    if (actressListRef.value) {
      actressListRef.value.style.height = `${actressListRef.value.scrollHeight}px`
    }
  })

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    const bbsPlateBox = document.querySelector('.bbs-plate-box')

    if (bbsPlateBox) {
      if (scrollTop > 50) {
        bbsPlateBox.classList.add('bpb-fixed')
      } else {
        bbsPlateBox.classList.remove('bpb-fixed')
      }
    }
  })
})
</script>

<style scoped>
.t-b {
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.mvfont.mv-xia {
  transition: transform 0.3s ease;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.mvfont.mv-xia.up {
  transform: rotate(180deg);
}
</style>
