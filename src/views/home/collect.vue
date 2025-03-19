<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">
        <span>我的收藏</span>
      </div>
      <div class="d-r" onclick="editCollect(this)">
        <span>管理</span>
      </div>
    </header>
    <section class="au-main">
      <div class="u-tabs">
        <span v-for="tab in tabs" :key="tab.name" :class="{ active: activeTab === tab.name }" @click="clickTab(tab.name)">
          {{ tab.title }}
        </span>
      </div>
      <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="handleSwipeChange">
        <!-- 短视频抖阴 -->
        <swiper-slide>
          <section class="h-l-b">
            <ul>
              <li v-for="video in dataMap[0]" :key="video.id">
                <div class="l-a">
                  <img v-lazy-decrypt="video.imgUrl" />
                  <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                </div>
                <div class="l-b">
                  <b>{{ video.title }}</b>
                  <div class="b-a">
                    <div class="a-l">
                      <span>{{ formatNumber(video.viewCount) }} 次播放</span>
                    </div>
                    <div class="a-r">
                      <span><i class="mvfont mv-xihuan0" />{{ formatNumber(video.likeCount) }}</span>
                    </div>
                  </div>
                </div>
                <div class="edit-item">
                  <i class="mvfont mv-ckbox" />
                </div>
              </li>
            </ul>
            <div v-if="noData[0]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </section>
        </swiper-slide>
        <!-- 视频 -->
        <swiper-slide>
          <nav class="mv-t-l">
            <div class="m-b">
              <div class="item" v-for="video in dataMap[1]" :key="video.id">
                <div class="i-a" v-lazy-decrypt="video.imgUrl">
                  <span v-if="classifyResolution(video.resolution) != ''" :class="'a-a _' + classifyResolution(video.resolution)">
                    {{ classifyResolution(video.resolution) }}
                  </span>
                  <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                  <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span>
                </div>
                <div class="i-b">
                  <b>{{ video.title }}</b>
                  <div class="b-dv">
                    <div class="p-c">
                      <span><i class="mvfont mv-kan" />{{ formatNumber(video.viewCount) }}</span>
                      <span><i class="mvfont mv-zan" />{{ formatNumber(video.likeCount) }}</span>
                    </div>
                    <div v-if="video.addTime" class="p-c">
                      <span><i class="mvfont mv-riqi" />{{ fromNow(video.addTime) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div v-if="noData[1]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
            <div class="d-t">暂无数据</div>
          </div>
        </swiper-slide>
        <!-- 社区 -->
        <swiper-slide>
          <ul class="bbs-list mt-0">
            <template v-for="(post, index) in dataMap[2]" :key="index">
              <li @click="handleClick(post)">
                <div class="i-a">
                  <div class="a-l">
                    <img :src="getAssetsFile('logo-4.png')" />
                    <div class="l-n">
                      <h3>{{ post?.user?.nickName || '芒果TV官方' }}</h3>
                      <span>{{ fromNow(post?.createTime) }}</span>
                    </div>
                  </div>
                  <div class="a-r">
                    <span class="off" @click.stop="toggleCollect(post)">取消收藏</span>
                  </div>
                </div>
                <div class="i-b" v-html="decodeHtmlEntities(post.title || '')" />
                <div
                  :class="`i-c pic${post.imgs.split(',').length > 4 ? '9' : post.imgs.split(',').length || ''}
                  ${post.channel.id == '2' ? 'weimi' : ''}`"
                >
                  <div class="item" v-for="(img, index1) in post.imgs.split(',')" :key="index1">
                    <img
                      v-lazy-decrypt="img"
                      :loading-img="post.imgs.split(',').length == 3 && index1 == 0 ? 'default2.gif' : 'default.gif'"
                    />
                  </div>
                </div>
                <div class="i-d">
                  <div class="d-x">
                    <span><i class="mvfont mv-pinglun" />{{ post.commentCount ? formatNumber(post.commentCount) : 0 }}</span>
                    <span><i class="mvfont mv-zan" />{{ post.likeCount ? formatNumber(post.likeCount) : 0 }}</span>
                    <span><i class="mvfont mv-like" />{{ post.collectionCount ? formatNumber(post.collectionCount) : 0 }}</span>
                  </div>
                  <div class="d-x">
                    <span><i class="mvfont mv-kan" />{{ post.viewCount ? formatNumber(post.viewCount) : 0 }}</span>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <div v-if="noData[2]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
            <div class="d-t">暂无数据</div>
          </div>
        </swiper-slide>
        <!-- 短剧 -->
        <swiper-slide>
          <ul v-if="dataMap[3] && dataMap[3].length > 0" class="b-u-l">
            <li v-for="video in dataMap[3]" :key="video.id" @click="handleClick(video)">
              <div class="l-a" v-lazy-decrypt="video.imgUrl">
                <a class="a-a"><i class="mvfont mv-bofang2" />{{ video.viewCount }}</a>
              </div>
              <div class="l-b">
                <p>{{ video.title }}</p>
                <span>
                  <small>{{ video.channelName }}</small>
                  全{{ video.episodeCount }}集
                </span>
              </div>
            </li>
          </ul>
          <div v-if="noData[3]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
            <div class="d-t">暂无数据</div>
          </div>
        </swiper-slide>
        <!-- 合集 -->
        <swiper-slide>
          <div v-if="dataMap[4] && dataMap[4].length > 0" class="m-c-b">
            <ul>
              <li v-for="item in dataMap[4]" :key="item.id">
                <div class="li-a ss1">
                  <img v-lazy-decrypt="item.imgUrl" />
                  <span> <i class="mvfont mv-heji" />{{ item.channelName }} </span>
                </div>
                <div class="li-b">{{ item.title }}</div>
                <div class="li-c">
                  <span>{{ item.videoCount }}个视频</span>
                  <span>•{{ item.viewCount }}万次观看</span>
                  <span>•{{ item.likeCount }}点赞</span>
                  <span>•{{ item.collectionCount }}收藏</span>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="noData[4]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="" />
            <div class="d-t">暂无合集</div>
          </div>
        </swiper-slide>
        <!-- 小说 -->
        <swiper-slide>
          <div v-if="dataMap[5] && dataMap[5].length > 0" class="n-l-b">
            <ul>
              <li v-for="item in dataMap[5]" :key="item.id">
                <div class="l-a">
                  <img v-lazy-decrypt="item.coverurl" />
                  <span class="a-a">{{ item.categoryName }}</span>
                  <span class="a-b">{{ item.readCount }}阅读</span>
                </div>
                <div class="l-b">
                  <b>{{ item.title }}</b>
                  <p>{{ item.introduction }}</p>
                </div>
              </li>
            </ul>
            <div v-if="noData[5]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </div>
        </swiper-slide>
        <!-- 有声 -->
        <swiper-slide>
          <div v-if="noData[6]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="" />
            <div class="d-t">暂无有声</div>
          </div>
        </swiper-slide>
        <!-- 漫画 -->
        <swiper-slide>
          <div v-if="dataMap[7] && dataMap[7].length > 0" class="n-l-b">
            <ul>
              <li v-for="item in dataMap[7]" :key="item.id">
                <div class="l-a">
                  <img v-lazy-decrypt="item.coverurl" />
                  <span class="a-a">{{ item.categoryName }}</span>
                  <span class="a-b">{{ item.readCount }}阅读</span>
                </div>
                <div class="l-b">
                  <b>{{ item.title }}</b>
                  <p>{{ item.introduction }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="noData[7]" class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
            <div class="d-t">暂无数据</div>
          </div>
        </swiper-slide>
        <!-- 茶帖 -->
        <swiper-slide>
          <div class="nodata">
            <img :src="getAssetsFile('empty/collect.svg')" alt="" />
            <div class="d-t">暂无茶帖</div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <footer class="footer">
      <div class="edit-foot">
        <div class="f-bd">
          <a><i class="mvfont mv-qiyong" />全选</a>
          <a class="fx-15 bct-1"><i class="mvfont mv-shanchu" />删除</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, nextTick } from 'vue'
  import { useAppStore } from '@/store/app'
  import { useUserStore } from '@/store/user'
  import { getAssetsFile } from '@/utils'
  import { userCollectionHistory } from '@/api/user'
  import { getBbsCollectionListApi } from '@/api/bbs'
  import { getDramaCollectList } from '@/api/drama'
  import { getCollectCollectionListApi } from '@/api/collection'
  import { getCollectionList as getNovelCollectList } from '@/api/novel'
  import { getCommicCollectionList } from '@/api/commic'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { PullRefresh } from 'vant'
  import { formatDuration, formatNumber, fromNow, classifyResolution, decodeHtmlEntities } from '@/utils'
  import 'swiper/css'

  const appStore = useAppStore()
  const userStore = useUserStore()

  const tabs = ref([
    { title: '抖阴', name: 0, api: userCollectionHistory, params: { VideoType: 1 } },
    { title: '视频', name: 1, api: userCollectionHistory, params: { VideoType: 0 } },
    { title: '社区', name: 2, api: getBbsCollectionListApi, params: {} },
    { title: '短剧', name: 3, api: getDramaCollectList, params: {} },
    { title: '合集', name: 4, api: getCollectCollectionListApi, params: {} },
    { title: '小说', name: 5, api: getNovelCollectList, params: {} },
    { title: '有声', name: 6, api: null, params: {} },
    { title: '漫画', name: 7, api: getCommicCollectionList, params: {} },
    { title: '茶贴', name: 8, api: null, params: {} }
  ])

  const activeTab = ref(0)
  const dataMap = reactive<Record<number, any[]>>({})
  const pageIndex = reactive<Record<number, number>>({})
  const totalPages = reactive<Record<number, number>>({})
  const noData = reactive<Record<number, boolean>>({})
  const refreshing = ref(false)
  const loading = ref(false)
  const swiperInstance = ref<any>(null)

  const fetchData = async (tabName: number, loadMore = false) => {
    loading.value = true
    try {
      const tab = tabs.value.find(t => t.name == tabName)
      if (!tab || !tab.api) {
        noData[tabName] = true
        return
      }
      //@ts-ignore
      const response = await tab.api({ PageIndex: pageIndex[tabName] ?? 1, PageSize: 10, ...tab.params })
      const { data } = response.data
      if (data && Array.isArray(data.items)) {
        if (loadMore) {
          dataMap[tabName].push(...data.items)
        } else {
          dataMap[tabName] = data.items
        }
        totalPages[tabName] = Number(data.pageCount)
        pageIndex[tabName] = Number(data.pageIndex)
        noData[tabName] = data.items.length == 0
      }
    } catch (error) {
      console.error('获取数据失败:', error)
    } finally {
      loading.value = false
      if (swiperInstance.value) {
        nextTick(() => {
          swiperInstance.value.updateAutoHeight()
        })
      }
    }
  }

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }

  const clickTab = (tabName: number) => {
    activeTab.value = tabName
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(tabName, 0)
    }
  }

  const handleSwipeChange = (swiper: any) => {
    const newIndex = swiper.activeIndex
    activeTab.value = newIndex
    if (!dataMap[newIndex] || dataMap[newIndex].length == 0) {
      dataMap[newIndex] = []
      pageIndex[newIndex] = 1
      fetchData(newIndex)
    }
  }

  const handleRefresh = async (tabName: number) => {
    refreshing.value = true
    await fetchData(tabName)
    refreshing.value = false
  }

  onMounted(() => {
    // 初始化 dataMap
    tabs.value.forEach(tab => {
      dataMap[tab.name] = []
    })
    fetchData(activeTab.value)
  })
</script>
