<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <i @click="clickAddPost" class="mvfont mv-jia2" />
      </div>
      <div class="d-m">
        <a v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === tab.name }" @click="clickTab(tab.name)">
          {{ tab.title }}
        </a>
      </div>
      <div class="d-r" @click="router.push({ name: 'bbsSearch' })">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <main class="b-b-b">
      <swiper
        @swiper="onSwiper"
        :slides-per-view="1"
        :auto-height="true"
        :loop="false"
        @slide-change="handleSwipeChange"
        :allow-touch-move="!appStore.isPc"
      >
        <!-- 推荐 -->
        <swiper-slide class="bbs-swipe-item0">
          <nav v-if="bannerAdvertisement && bannerAdvertisement.length > 0 && keepAlive" id="bbs-banner" class="swiper-container">
            <swiper
              @swiper="onBannerSwiper"
              :modules="appStore.isPc ? [Autoplay, Pagination] : [Autoplay]"
              :slides-per-view="appStore.isPc ? 5 : 1"
              :space-between="10"
              :pagination="{ clickable: true } as any"
              :centered-slides="false"
              :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false } as any"
              :nested="true"
            >
              <swiper-slide v-for="ad in bannerAdvertisement" :key="ad.id">
                <a target="_blank" @click="openAd(ad.targetUrl, '社区banner', 'click', ad.id)">
                  <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" @load="() => onImageLoad('banner')" />
                </a>
              </swiper-slide>
            </swiper>
          </nav>
          <div v-if="isDecrypting.banner" class="load-box">
            <div class="lb-index-banner">
              <div class="lb-s" />
            </div>
          </div>

          <IconAd class="mt-10" />

          <div class="au-tabs">
            <span @click="changeSortType(0)" :class="{ active: bbsListSortType[0] == 0 }"><i class="mvfont mv-quanbu" />全部</span>
            <span @click="changeSortType(1)" :class="{ active: bbsListSortType[0] == 1 }"><i class="mvfont mv-zuixin" />最新</span>
            <span @click="changeSortType(2)" :class="{ active: bbsListSortType[0] == 2 }"><i class="mvfont mv-hot3" />热门</span>
            <span @click="changeSortType(3)" :class="{ active: bbsListSortType[0] == 3 }"><i class="mvfont mv-mv1" />视频</span>
          </div>
          <PullRefresh v-if="bbsListMap[0]" v-model="refreshing" @refresh="handleRefresh">
            <BbsListItem :bbs-list="bbsListMap[0]" />
          </PullRefresh>

          <div v-if="loadingBbsList" class="load-box">
            <ul class="lb-bbs-list mt-0">
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
            </ul>
          </div>

          <template v-if="bbsListTotalPages[0] > 1">
            <div class="au-pagination-box" v-if="bbsListTotalPages[0] > 9">
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[0] - 1)" :class="{ disabled: bbsListPageIndex[0] == 1 }">上一页</a>
              </div>
              <div class="pb-x">
                <input v-model="bbsListPageIndex[0]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[0]" />
                <span>/ {{ bbsListTotalPages[0] }}</span>
              </div>
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[0] + 1)" :class="{ disabled: bbsListPageIndex[0] == bbsListTotalPages[0] }">下一页</a>
              </div>
            </div>
            <div v-else class="more-box"><a v-if="bbsListPageIndex[0] < bbsListTotalPages[0]" @click="loadMore">加载更多</a></div>
          </template>
        </swiper-slide>
        <!-- 黑料 -->
        <swiper-slide class="bbs-swipe-item1">
          <div class="au-col-module-5">
            <div class="m-l">
              <div
                v-if="heiliaoCategories[0] && heiliaoCategories[0].items.length > 0"
                @click="changeSubChannel(heiliaoCategories[0].items[0].id, 1)"
                class="item"
              >
                <img v-lazy-decrypt="heiliaoCategories[0].items[0].img" />
                <p>
                  <span># {{ heiliaoCategories[0].items[0].title }}</span>
                </p>
                <small>{{ heiliaoCategories[0].items[0].postCount }}帖</small>
              </div>
            </div>
            <div class="m-r" v-if="heiliaoCategories[0] && heiliaoCategories[0].items.length > 1">
              <div class="item" @click="changeSubChannel(item.id, 1)" v-for="item in heiliaoCategories[0].items.slice(1)" :key="item.id">
                <img v-lazy-decrypt="item.img" @load="onImageLoad('heiliao')" />
                <p>
                  <span># {{ item.title }}</span>
                </p>
                <small>{{ item.postCount }}帖</small>
              </div>
            </div>
          </div>

          <div v-if="isDecrypting.heiliao" class="load-box">
            <div class="lb-au-col-module-5">
              <div class="m-l">
                <div class="lb-s" />
              </div>
              <div class="m-r">
                <div class="lb-s" />
                <div class="lb-s" />
                <div class="lb-s" />
                <div class="lb-s" />
              </div>
            </div>
          </div>

          <IconAd class="mt-10" />

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

          <div v-if="loadingBbsList" class="load-box">
            <ul class="lb-bbs-list mt-0">
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
            </ul>
          </div>

          <template v-if="bbsListTotalPages[1] > 1">
            <div class="au-pagination-box" v-if="bbsListTotalPages[1] > 9">
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[1] - 1)" :class="{ disabled: bbsListPageIndex[1] == 1 }">上一页</a>
              </div>
              <div class="pb-x">
                <input v-model="bbsListPageIndex[1]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[1]" />
                <span>/ {{ bbsListTotalPages[1] }}</span>
              </div>
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[1] + 1)" :class="{ disabled: bbsListPageIndex[1] == bbsListTotalPages[1] }">下一页</a>
              </div>
            </div>
            <div v-else class="more-box"><a v-if="bbsListPageIndex[1] < bbsListTotalPages[1]" @click="loadMore">加载更多</a></div>
          </template>
        </swiper-slide>
        <!-- 微密 -->
        <swiper-slide class="bbs-swipe-item2">
          <ul class="au-col-module" v-if="weimiCategories[0] && weimiCategories[0].items.length > 0">
            <li v-for="item in weimiCategories[0].items" :key="item.id" @click="changeSubChannel(item.id, 2)">
              <img v-lazy-decrypt="item.img" @load="onImageLoad('weimi')" />
              <p>
                <span># {{ item.title }}</span>
              </p>
              <small>{{ item.postCount }}帖</small>
            </li>
          </ul>

          <div v-if="isDecrypting.weimi" class="load-box">
            <ul class="lb-au-col-module">
              <li><div class="lb-s" /></li>
              <li><div class="lb-s" /></li>
              <li><div class="lb-s" /></li>
              <li><div class="lb-s" /></li>
            </ul>
          </div>

          <IconAd class="mt-10" />

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

          <div v-if="loadingBbsList" class="load-box">
            <ul class="lb-bbs-weimi">
              <li>
                <div class="i-a">
                  <div class="lb-s" />
                </div>
                <div class="i-x">
                  <div class="i-b">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-c">
                  <div class="lb-s" />
                </div>
                <div class="i-d">
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </li>
              <li>
                <div class="i-a">
                  <div class="lb-s" />
                </div>
                <div class="i-x">
                  <div class="i-b">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-c">
                  <div class="lb-s" />
                </div>
                <div class="i-d">
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </li>
            </ul>
          </div>

          <template v-if="bbsListTotalPages[2] > 1">
            <div class="au-pagination-box" v-if="bbsListTotalPages[2] > 9">
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[2] - 1)" :class="{ disabled: bbsListPageIndex[2] == 1 }">上一页</a>
              </div>
              <div class="pb-x">
                <input v-model="bbsListPageIndex[2]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[2]" />
                <span>/ {{ bbsListTotalPages[2] }}</span>
              </div>
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[2] + 1)" :class="{ disabled: bbsListPageIndex[2] == bbsListTotalPages[2] }">下一页</a>
              </div>
            </div>
            <div v-else class="more-box"><a v-if="bbsListPageIndex[2] < bbsListTotalPages[2]" @click="loadMore">加载更多</a></div>
          </template>
        </swiper-slide>
        <!-- 圈子 -->
        <swiper-slide class="bbs-swipe-item3">
          <div class="au-col-module-x" v-if="quanziCategories[0] && quanziCategories[0].items.length > 0">
            <div class="item" @click="changeSubChannel(item.id, 3)" v-for="item in quanziCategories[0].items" :key="item.id">
              <img v-lazy-decrypt="item.img" @load="onImageLoad('quanzi')" />
              <p>
                <span># {{ item.title }}</span>
              </p>
              <small>{{ item.postCount }}帖</small>
            </div>
          </div>

          <div v-if="isDecrypting.quanzi" class="load-box">
            <div class="lb-au-col-module-x">
              <div class="item"><div class="lb-s" /></div>
              <div class="item"><div class="lb-s" /></div>
              <div class="item"><div class="lb-s" /></div>
              <div class="item"><div class="lb-s" /></div>
              <div class="item"><div class="lb-s" /></div>
              <div class="item"><div class="lb-s" /></div>
            </div>
          </div>

          <IconAd class="mt-10" />

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

          <div v-if="loadingBbsList" class="load-box">
            <ul class="lb-bbs-list mt-0">
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
            </ul>
          </div>
          <template v-if="bbsListTotalPages[3] > 1">
            <div class="au-pagination-box" v-if="bbsListTotalPages[3] > 9">
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[3] - 1)" :class="{ disabled: bbsListPageIndex[3] == 1 }">上一页</a>
              </div>
              <div class="pb-x">
                <input v-model="bbsListPageIndex[3]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[3]" />
                <span>/ {{ bbsListTotalPages[3] }}</span>
              </div>
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[3] + 1)" :class="{ disabled: bbsListPageIndex[3] == bbsListTotalPages[3] }">下一页</a>
              </div>
            </div>
            <div v-else class="more-box"><a v-if="bbsListPageIndex[3] < bbsListTotalPages[3]" @click="loadMore">加载更多</a></div>
          </template>
        </swiper-slide>
        <!-- 收藏 -->
        <swiper-slide class="bbs-swipe-item4">
          <PullRefresh v-if="bbsListMap[4]" v-model="collectionRefreshing" @refresh="handleCollectionRefresh">
            <BbsListItem :bbs-list="bbsListMap[4]" :is-collect="true" class="mt-0" />
          </PullRefresh>

          <div v-if="loadingBbsList" class="load-box">
            <ul class="lb-bbs-list mt-0">
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
              <li>
                <div class="i-a">
                  <div class="a-l">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="i-b">
                  <div class="lb-s" />
                </div>
                <div class="i-c pic3">
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                  <div class="item"><div class="lb-s" /></div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <div class="lb-s" />
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                  <div class="d-x"><div class="lb-s" /></div>
                </div>
              </li>
            </ul>
          </div>

          <template v-if="bbsListTotalPages[4] > 1">
            <div class="au-pagination-box" v-if="bbsListTotalPages[4] > 9">
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[4] - 1)" :class="{ disabled: bbsListPageIndex[4] == 1 }">上一页</a>
              </div>
              <div class="pb-x">
                <input v-model="bbsListPageIndex[4]" @change="handlePageChange" type="number" min="1" :max="bbsListTotalPages[4]" />
                <span>/ {{ bbsListTotalPages[4] }}</span>
              </div>
              <div class="pb-x">
                <a @click="changePage(bbsListPageIndex[4] + 1)" :class="{ disabled: bbsListPageIndex[4] == bbsListTotalPages[4] }">下一页</a>
              </div>
            </div>
            <div v-else class="more-box"><a v-if="bbsListPageIndex[4] < bbsListTotalPages[4]" @click="loadMore">加载更多</a></div>
          </template>
        </swiper-slide>
      </swiper>
    </main>

    <Footer active-menu="bbs" />
    <NavBar active-menu="bbs" />
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, computed, onActivated, nextTick, onDeactivated, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { PullRefresh, showToast } from 'vant'
  import Footer from '@/components/layout/Footer.vue'
  import NavBar from '@/components/layout/NavBar.vue'
  import BbsListItem from '@/components/BbsListItem.vue'
  import BbsWeimiListItem from '@/components/BbsWeimiListItem.vue'
  import IconAd from '@/components/Advertisement/IconAd.vue'
  import { useAppStore } from '@/store/app'
  import { useUserStore } from '@/store/user'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { getBbsListApi, getBbsCategoryApi, getBbsCollectionListApi } from '@/api/bbs'
  import { insertAds, openAd } from '@/utils'
  import type { BbsListRequest, BbsCategoryResponse } from '@/types/bbs'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'

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
  const bannerAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(2).items
    return tmp || []
  })

  // 获取社区帖子广告
  const bbsListAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(30).items
    return tmp || []
  })

  const sortOptions = { 1: '更新', 2: '浏览', 4: '点赞', 5: '评论', 6: '收藏', 3: '视频' }

  const activeTab = ref(0)
  const previousTab = ref(0)

  const query = reactive<BbsListRequest>({
    PageIndex: 1,
    PageSize: 10,
    SortType: 1,
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
  const bbsListSortType = ref({})
  const bbsListSubChannelId = ref({})

  const keepAlive = ref(true)
  const swiperInstance = ref<any>(null)
  const bannerSwiperInstance = ref<any>(null)

  const heiliaoCategories = ref<BbsCategoryResponse[]>([])
  const weimiCategories = ref<BbsCategoryResponse[]>([])
  const quanziCategories = ref<BbsCategoryResponse[]>([])

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }

  const onBannerSwiper = (swiper: any) => {
    bannerSwiperInstance.value = swiper
  }

  const clickAddPost = () => {
    if (userStore.userInfo.id == '') {
      userStore.showLoginDialog = true
      return
    }
    if (!appStore.allowPost) {
      showToast('发帖功能已暂停, 请稍后再试')
      return
    }
    router.push({ name: 'addPost' })
  }

  const clickTab = (tabName: number) => {
    activeTab.value = tabName
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(tabName, 0)
    }
    if (tabName == 4) {
      if (userStore.userInfo.id == '') {
        if (swiperInstance.value) {
          swiperInstance.value.slideTo(previousTab.value, 0)
        }
        userStore.showLoginDialog = true
      }
    }
  }

  const handleSwipeChange = (swiper: any) => {
    // 检查是否滑动到收藏列表
    if (swiper.activeIndex == 4) {
      if (userStore.userInfo.id == '') {
        if (swiperInstance.value) {
          swiperInstance.value.slideTo(activeTab.value, 0)
        }
        userStore.showLoginDialog = true
        return
      }
    }
    previousTab.value = activeTab.value
    activeTab.value = swiper.activeIndex
    query.ChannelId = activeTab.value == 0 ? '' : activeTab.value

    // 滑动到新的swipeItem，获取之前的排序和子频道
    if (bbsListSortType.value[activeTab.value] != undefined) {
      query.SortType = bbsListSortType.value[activeTab.value]
    } else {
      query.SortType = 1
      bbsListSortType.value[activeTab.value] = 1
    }
    if (bbsListSubChannelId.value[activeTab.value] != undefined) {
      query.SubChannelId = bbsListSubChannelId.value[activeTab.value]
    } else {
      query.SubChannelId = ''
    }
    bbsListMap.value[activeTab.value] = []
    query.PageIndex = 1
    // if (bbsListPageIndex.value[activeTab.value] == undefined) {
    //   query.PageIndex = 1
    // } else {
    //   query.PageIndex = bbsListPageIndex.value[activeTab.value]
    // }

    // if (!bbsListMap.value[activeTab.value] || bbsListMap.value[activeTab.value].length == 0) {
    if (activeTab.value == 4) {
      fetchCollectionList()
    } else {
      fetchBbsList()
    }
    // }
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  }

  const loadingBbsList = ref(false)
  const fetchBbsList = async (loadMore = false) => {
    loadingBbsList.value = true
    try {
      const {
        data: { data }
      } = await getBbsListApi(query)
      if (data && Array.isArray(data.items)) {
        // 插入广告
        data.items = insertAds(data.items, bbsListAdvertisement.value, 5, 7, false)

        if (!bbsListMap.value[activeTab.value]) {
          bbsListMap.value[activeTab.value] = []
        }

        if (loadMore) {
          bbsListMap.value[activeTab.value].push(...data.items)
          nextTick(() => {
            swiperInstance.value.updateAutoHeight()
          })
        } else {
          bbsListMap.value[activeTab.value] = data.items
        }

        bbsListTotalPages.value[activeTab.value] = parseInt(data.pageCount)
        bbsListPageIndex.value[activeTab.value] = parseInt(data.pageIndex)
      } else {
        console.error('响应数据结构不正确')
      }
    } catch (error) {
      console.error('获取BBS列表失败:', error)
    } finally {
      loadingBbsList.value = false
    }
  }

  const fetchCollectionList = async (loadMore = false) => {
    loadingBbsList.value = true
    try {
      const {
        data: { data }
      } = await getBbsCollectionListApi({ PageIndex: query.PageIndex, PageSize: query.PageSize })
      if (data && Array.isArray(data.items)) {
        data.items = insertAds(data.items, bbsListAdvertisement.value, 5, 7, false)

        if (!bbsListMap.value[activeTab.value]) {
          bbsListMap.value[activeTab.value] = []
        }

        data.items = data.items.map((item) => ({
          ...item,
          isCollected: true
        }))
        if (loadMore) {
          bbsListMap.value[activeTab.value].push(...data.items)
          nextTick(() => {
            swiperInstance.value.updateAutoHeight()
          })
        } else {
          bbsListMap.value[activeTab.value] = data.items
        }

        bbsListTotalPages.value[activeTab.value] = parseInt(data.pageCount)
        bbsListPageIndex.value[activeTab.value] = parseInt(data.pageIndex)
      } else {
        console.error('响应数据结构不正确')
      }
    } catch (error) {
      console.error('获取收藏列表失败:', error)
    } finally {
      loadingBbsList.value = false
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
        console.log(data)
        data.forEach((item) => {
          const category = categoryMap[item.id]
          if (category) {
            category.value.push(item)
          }
        })
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
    bbsListTotalPages.value[activeTab.value] = 1
    bbsListMap.value[activeTab.value] = []
    query.SortType = sortType == 0 ? 1 : sortType
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
      bbsListMap.value[activeTab.value] = []
      if (activeTab.value == 4) {
        await fetchCollectionList()
      } else {
        await fetchBbsList()
      }
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  }

  const loadMore = async () => {
    bbsListPageIndex.value[activeTab.value] += 1
    query.PageIndex = bbsListPageIndex.value[activeTab.value]
    if (activeTab.value == 4) {
      await fetchCollectionList(true)
    } else {
      await fetchBbsList(true)
    }
  }

  // 页码变化
  const handlePageChange = async () => {
    if (bbsListPageIndex.value[activeTab.value] >= 1 && bbsListPageIndex.value[activeTab.value] <= bbsListTotalPages.value[activeTab.value]) {
      query.PageIndex = bbsListPageIndex.value[activeTab.value]
      await fetchBbsList()

      // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  }

  ;(async () => {
    await fetchBbsList()
    bbsListSortType.value[0] = 0
    await fetchCategories()
    if (appStore.advertisement.length == 0) {
      await appStore.fetAdvertisement()
    }
  })()

  const isDecrypting = ref({
    banner: true,
    heiliao: true,
    weimi: true,
    quanzi: true
  })

  const onImageLoad = (section: string) => {
    isDecrypting.value[section] = false
  }

  onActivated(() => {
    if (activeTab.value == 4) {
      bbsListMap.value[4] = []
      bbsListPageIndex.value[4] = 1
      fetchCollectionList()
    }
    keepAlive.value = true

    // window.scrollTo(0, 0)
  })

  onMounted(() => {
    window.scrollTo(0, 0)
  })

  onDeactivated(() => {
    keepAlive.value = false
  })
</script>
