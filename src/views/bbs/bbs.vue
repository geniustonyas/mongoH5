<template>
  <div class="page">
    <header class="header bbs-header">
      <div class="b-l">
        <i @click="showToast('暂停发帖')" class="mvfont mv-jia2" />
      </div>
      <div class="b-m">
        <Tabs v-model:active="activeTab" class="vant-tabs" title-active-color="transparent" @change="clickTab">
          <Tab v-for="(tab, index) in tabs" :key="index" :title="tab.title" :name="tab.name" />
        </Tabs>
      </div>
      <div class="b-r" @click="router.push({ name: 'bbsSearch' })">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <main class="b-b-b">
      <Swipe v-model:active="activeTab" :loop="false" :show-indicators="false" lazy-render ref="swipeRef" @change="handleSwipeChange">
        <!-- 推荐 -->
        <SwipeItem>
          <nav id="index-banner" class="swiper-container">
            <Swipe class="my-swipe" :autoplay="3000" lazy-render>
              <SwipeItem v-for="ad in bannerAdvertisement" :key="ad.id">
                <a target="_blank" :href="ad.targetUrl">
                  <img v-lazy="ad.isDecrypted ? ad.imgUrl : getAssetsFile('default.gif')" :alt="ad.title" />
                </a>
              </SwipeItem>
            </Swipe>
          </nav>
          <div class="au-tabs">
            <span @click="changeSortType(0)" :class="{ active: bbsListSortType[0] == 0 }"><i class="mvfont mv-quanbu" />全部</span>
            <span @click="changeSortType(1)" :class="{ active: bbsListSortType[0] == 1 }"><i class="mvfont mv-zuixin" />最新</span>
            <span @click="changeSortType(2)" :class="{ active: bbsListSortType[0] == 2 }"><i class="mvfont mv-hot3" />热门</span>
            <span @click="changeSortType(3)" :class="{ active: bbsListSortType[0] == 3 }"><i class="mvfont mv-mv1" />视频</span>
          </div>
          <PullRefresh v-if="bbsListMap[0]" v-model="refreshing" @refresh="handleRefresh">
            <BbsListItem :bbs-list="bbsListMap[0]" />
          </PullRefresh>
          <div class="au-pagination-box" v-if="bbsListTotalPages[0] > 1">
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[0])" :class="{ disabled: bbsListPageIndex[0] == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="bbsListPageIndex[0]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[0]" />
              <span>/ {{ bbsListTotalPages[0] }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[0] + 1)" :class="{ disabled: bbsListPageIndex[0] == bbsListTotalPages[0] }">下一页</a>
            </div>
          </div>
        </SwipeItem>
        <!-- 黑料 -->
        <SwipeItem>
          <div class="au-col-module-5">
            <div class="m-l">
              <div class="item" @click="changeSubChannel(heiliaoCategories[0].items[0].id, 1)" v-if="heiliaoCategories[0] && heiliaoCategories[0].items.length > 0">
                <img v-lazy="heiliaoCategories[0].items[0].isDecrypted ? heiliaoCategories[0].items[0].img : getAssetsFile('default2.gif')" />
                <p>
                  <span># {{ heiliaoCategories[0].items[0].title }}</span>
                </p>
                <small>{{ heiliaoCategories[0].items[0].postCount }}帖</small>
              </div>
            </div>
            <div class="m-r" v-if="heiliaoCategories[0] && heiliaoCategories[0].items.length > 1">
              <div class="item" @click="changeSubChannel(item.id, 1)" v-for="item in heiliaoCategories[0].items.slice(1)" :key="item.id">
                <img v-lazy="item.img" />
                <p>
                  <span># {{ item.title }}</span>
                </p>
                <small>{{ item.postCount }}帖</small>
              </div>
            </div>
          </div>

          <div class="au-tab-group">
            <div class="g-item">
              <div class="i-l">排序</div>
              <div class="i-r">
                <span v-for="(label, key) in sortOptions" :key="key" :class="{ active: bbsListSortType[1] == key }" @click="changeSortType(key)">
                  {{ label }}
                </span>
              </div>
            </div>
          </div>
          <PullRefresh v-if="bbsListMap[1]" v-model="refreshing" @refresh="handleRefresh">
            <BbsListItem :bbs-list="bbsListMap[1]" class="mt-0" />
          </PullRefresh>
          <div class="au-pagination-box" v-if="bbsListTotalPages[1] > 1">
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[1])" :class="{ disabled: bbsListPageIndex[1] == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="bbsListPageIndex[1]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[1]" />
              <span>/ {{ bbsListTotalPages[1] }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[1] + 1)" :class="{ disabled: bbsListPageIndex[1] == bbsListTotalPages[1] }">下一页</a>
            </div>
          </div>
        </SwipeItem>
        <!-- 微密 -->
        <SwipeItem>
          <ul class="au-col-module" v-if="weimiCategories[0] && weimiCategories[0].items.length > 0">
            <li v-for="item in weimiCategories[0].items" :key="item.id" @click="changeSubChannel(item.id, 2)">
              <img v-lazy="item.isDecrypted ? item.img : getAssetsFile('default2.gif')" />
              <p>
                <span># {{ item.title }}</span>
              </p>
              <small>{{ item.postCount }}帖</small>
            </li>
          </ul>

          <div class="au-tab-group">
            <div class="g-item">
              <div class="i-l">排序</div>
              <div class="i-r">
                <span v-for="(label, key) in sortOptions" :key="key" :class="{ active: bbsListSortType[2] == key }" @click="changeSortType(key)">
                  {{ label }}
                </span>
              </div>
            </div>
          </div>
          <PullRefresh v-if="bbsListMap[2]" v-model="refreshing" @refresh="handleRefresh">
            <BbsWeimiListItem :bbs-list="bbsListMap[2]" />
          </PullRefresh>

          <div class="au-pagination-box" v-if="bbsListTotalPages[2] > 1">
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[2])" :class="{ disabled: bbsListPageIndex[2] == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="bbsListPageIndex[2]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[2]" />
              <span>/ {{ bbsListTotalPages[2] }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[2] + 1)" :class="{ disabled: bbsListPageIndex[2] == bbsListTotalPages[2] }">下一页</a>
            </div>
          </div>
        </SwipeItem>
        <!-- 圈子 -->
        <SwipeItem>
          <div class="au-col-module-x" v-if="quanziCategories[0] && quanziCategories[0].items.length > 0">
            <div class="item" @click="changeSubChannel(item.id, 3)" v-for="item in quanziCategories[0].items" :key="item.id">
              <img v-lazy="item.isDecrypted ? item.img : getAssetsFile('default2.gif')" />
              <p>
                <span># {{ item.title }}</span>
              </p>
              <small>{{ item.postCount }}帖</small>
            </div>
          </div>

          <div class="au-tab-group">
            <div class="g-item">
              <div class="i-l">排序</div>
              <div class="i-r">
                <span v-for="(label, key) in sortOptions" :key="key" :class="{ active: bbsListSortType[3] == key }" @click="changeSortType(key)">
                  {{ label }}
                </span>
              </div>
            </div>
          </div>
          <PullRefresh v-if="bbsListMap[3]" v-model="refreshing" @refresh="handleRefresh">
            <BbsListItem :bbs-list="bbsListMap[3]" class="mt-0" />
          </PullRefresh>

          <div class="au-pagination-box" v-if="bbsListTotalPages[3] > 1">
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[3])" :class="{ disabled: bbsListPageIndex[3] == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="bbsListPageIndex[3]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[3]" />
              <span>/ {{ bbsListTotalPages[3] }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[3] + 1)" :class="{ disabled: bbsListPageIndex[3] == bbsListTotalPages[3] }">下一页</a>
            </div>
          </div>
        </SwipeItem>
        <!-- 收藏 -->
        <SwipeItem>
          <PullRefresh v-if="bbsListMap[4]" v-model="collectionRefreshing" @refresh="handleCollectionRefresh">
            <BbsListItem :bbs-list="bbsListMap[4]" :is-collect="true" class="mt-0" />
          </PullRefresh>
          <div class="au-pagination-box" v-if="bbsListTotalPages[4] > 1">
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[4])" :class="{ disabled: bbsListPageIndex[4] == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="bbsListPageIndex[4]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[4]" />
              <span>/ {{ bbsListTotalPages[4] }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(bbsListPageIndex[4] + 1)" :class="{ disabled: bbsListPageIndex[4] == bbsListTotalPages[4] }">下一页</a>
            </div>
          </div>
        </SwipeItem>
      </Swipe>
    </main>

    <Footer active-menu="bbs" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Tabs, Tab, Swipe, SwipeItem, PullRefresh, SwipeInstance, showToast } from 'vant'
import Footer from '@/components/layout/Footer.vue'
import BbsListItem from '@/components/BbsListItem.vue'
import BbsWeimiListItem from '@/components/BbsWeimiListItem.vue'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getBbsListApi, getBbsCategoryApi, getBbsCollectionListApi } from '@/api/bbs'
import { getAssetsFile } from '@/utils'
import decryptionService from '@/utils/decryptionService'
import type { BbsListRequest, BbsCategoryResponse } from '@/types/bbs'
import 'swiper/css'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const tabs = [
  { title: '推荐', name: 0 },
  { title: '黑料', name: 1 },
  { title: '微密', name: 2 },
  { title: '圈子', name: 3 },
  { title: '收藏', name: 4 }
]
const bannerAdvertisement = computed(() => appStore.getAdvertisementById(2).items)

const sortOptions = { 1: '更新', 2: '浏览', 4: '点赞', 5: '评论', 6: '收藏', 3: '视频' }

const activeTab = ref(0)
const previousTab = ref(0)

const query = reactive<BbsListRequest>({
  PageIndex: 1,
  PageSize: 10,
  SortType: 0,
  ChannelId: '',
  SubChannelId: '',
  ActressId: '',
  KeyWord: ''
})

const refreshing = ref(false)
const collectionRefreshing = ref(false) // 用于收藏列表的刷新状态
const bbsListMap = ref<Record<number, any[]>>({})
const bbsListTotalPages = ref<Record<number, number>>({})
const bbsListPageIndex = ref<Record<number, number>>({})
const swipeRef = ref<SwipeInstance>()
const decrypt = new decryptionService()

const heiliaoCategories = ref<BbsCategoryResponse[]>([])
const weimiCategories = ref<BbsCategoryResponse[]>([])
const quanziCategories = ref<BbsCategoryResponse[]>([])

const bbsListSortType = ref({})
const bbsListSubChannelId = ref({})

const clickTab = () => {
  swipeRef.value.swipeTo(activeTab.value, { immediate: true })
  if (activeTab.value == 4) {
    if (userStore.userInfo.id == '') {
      swipeRef.value.swipeTo(previousTab.value, { immediate: true })
      userStore.showLoginDialog = true
    }
  }
}

const handleSwipeChange = async (index: number) => {
  // 检查是否滑动到收藏列表
  if (index === 4) {
    if (userStore.userInfo.id == '') {
      swipeRef.value.swipeTo(activeTab.value, { immediate: true })
      userStore.showLoginDialog = true
      return
    }
  }
  previousTab.value = activeTab.value
  activeTab.value = index
  query.ChannelId = activeTab.value == 0 ? '' : activeTab.value

  // 如果是收藏，则调用获取收藏列表方法
  if (activeTab.value == 4) {
    await fetchCollectionList()
  }

  // 滑动到新的swipeItem，获取之前的排序和子频道
  if (bbsListSortType.value[activeTab.value] != undefined) {
    query.SortType = bbsListSortType.value[activeTab.value]
  }
  if (bbsListSubChannelId.value[activeTab.value] != undefined) {
    query.SubChannelId = bbsListSubChannelId.value[activeTab.value]
  }

  if (!bbsListMap.value[activeTab.value] || bbsListMap.value[activeTab.value].length == 0) {
    await fetchBbsList()
  }

  nextTick(() => {
    swipeRef.value.resize()
    window.scrollTo(0, 0)
  })
}

const fetchBbsList = async () => {
  try {
    const {
      data: { data }
    } = await getBbsListApi(query)
    if (data && Array.isArray(data.items)) {
      // 初始化 bbsListMap[activeTab.value] 为数组
      if (!bbsListMap.value[activeTab.value]) {
        bbsListMap.value[activeTab.value] = []
      }

      // 先显示返回的数据，并设置解密标志
      bbsListMap.value[activeTab.value] = data.items.map((item) => {
        const placeholderImages = item.imgs ? item.imgs.split(',').map((item, index) => 'placeholder' + index) : []
        return { ...item, decryptImage: placeholderImages, imgUrlDecrypted: false }
      })
      bbsListTotalPages.value[activeTab.value] = parseInt(data.pageCount)
      bbsListPageIndex.value[activeTab.value] = parseInt(data.pageIndex)

      // 异步解密图片
      data.items.forEach(async (item, index) => {
        if (item.imgs) {
          const imgs = item.imgs.split(',')
          item.decryptImage = await Promise.all(
            imgs.map(async (img) => {
              return await decrypt.fetchAndDecrypt(appStore.cdnUrl + img)
            })
          )
          // 更新解密后的图片和标志
          bbsListMap.value[activeTab.value][index] = { ...item, imgUrlDecrypted: true }
        }
      })
    } else {
      console.error('响应数据结构不正确')
    }
  } catch (error) {
    console.error('获取BBS列表失败:', error)
  }
}

const fetchCollectionList = async () => {
  try {
    const {
      data: { data }
    } = await getBbsCollectionListApi({ PageIndex: query.PageIndex, PageSize: query.PageSize })
    if (data && Array.isArray(data.items)) {
      bbsListMap.value[activeTab.value] = data.items.map((item) => {
        const placeholderImages = item.imgs ? item.imgs.split(',').map((item, index) => 'placeholder' + index) : []
        return { ...item, decryptImage: placeholderImages, imgUrlDecrypted: false, isCollected: true }
      })
      bbsListTotalPages.value[activeTab.value] = parseInt(data.pageCount)
      bbsListPageIndex.value[activeTab.value] = parseInt(data.pageIndex)

      // 异步解密图片
      data.items.forEach(async (item, index) => {
        if (item.imgs) {
          const imgs = item.imgs.split(',')
          item.decryptImage = await Promise.all(
            imgs.map(async (img) => {
              return await decrypt.fetchAndDecrypt(appStore.cdnUrl + img)
            })
          )
          item.isCollected = true
          bbsListMap.value[activeTab.value][index] = { ...item, imgUrlDecrypted: true }
        }
      })
    } else {
      console.error('响应数据结构不正确')
    }
  } catch (error) {
    console.error('获取收藏列表失败:', error)
  }
}

const fetchCategories = async () => {
  try {
    const {
      data: { data }
    } = await getBbsCategoryApi()
    if (data && Array.isArray(data)) {
      const categoryMap = {
        '1': heiliaoCategories,
        '2': weimiCategories,
        '3': quanziCategories
      }

      for (const item of data) {
        // 添加解密标志
        const decryptedItems = item.items.map((imgs) => ({
          ...imgs,
          isDecrypted: false // 初始标志为未解密
        }))

        const category = categoryMap[item.id]
        if (category) {
          // 先渲染数据
          category.value.push({ ...item, items: decryptedItems })

          // 异步解密图片
          Promise.all(
            decryptedItems.map(async (imgs) => {
              imgs.img = await decrypt.fetchAndDecrypt(appStore.cdnUrl + imgs.img)
              imgs.isDecrypted = true // 更新标志为已解密
              return imgs
            })
          ).then((updatedItems) => {
            // 更新渲染后的数据
            const index = category.value.findIndex((catItem) => catItem.id === item.id)
            if (index !== -1) {
              category.value[index].items = updatedItems
            }
          })
        }
      }
    } else {
      console.error('响应数据结构不正确')
    }
  } catch (error) {
    console.error('获取分类数据失败:', error)
  }
}

const changeSortType = (sortType: number) => {
  bbsListSortType.value[activeTab.value] = sortType
  bbsListPageIndex.value[activeTab.value] = 1
  fetchBbsList()
}

const changeSubChannel = (id: string, channelId: number) => {
  router.push({ name: 'weimi', params: { id: id }, query: { channelId: channelId } })
}

const handleRefresh = async () => {
  refreshing.value = true
  await fetchBbsList()
  refreshing.value = false
}

const handleCollectionRefresh = async () => {
  collectionRefreshing.value = true
  await fetchCollectionList()
  collectionRefreshing.value = false
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= bbsListTotalPages.value[activeTab.value]) {
    bbsListPageIndex.value[activeTab.value] = newPage
    query.PageIndex = newPage
    await fetchBbsList()
  }
  nextTick(() => {
    window.scrollTo(0, 0)
  })
}

// 页码变化
const handlePageChange = async () => {
  if (bbsListPageIndex.value[activeTab.value] >= 1 && bbsListPageIndex.value[activeTab.value] <= bbsListTotalPages.value[activeTab.value]) {
    query.PageIndex = bbsListPageIndex.value[activeTab.value]
    await fetchBbsList()

    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    // nextTick(() => {
    //   const mainElement = document.querySelector('.bbs-content')
    //   if (mainElement) {
    //     mainElement.scrollTop = 0 // 重置滚动条到顶部
    //   }
    // })
  }
}

// 监听banner广告获取到数据后，先渲染后解密图片
watch(
  () => bannerAdvertisement.value,
  async (newAds) => {
    for (const ad of newAds) {
      if (!ad.isDecrypted) {
        ad.imgUrl = await decrypt.fetchAndDecrypt(`${appStore.imageDomain}${ad.imgUrl}`)
        ad.isDecrypted = true
      }
    }
  },
  { immediate: true }
)

onMounted(() => {
  bbsListSortType.value[0] = 0
  fetchBbsList()
  fetchCategories()
})
</script>
