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
      <div class="d-r" @click="editCollect">
        <span>{{ isEditing ? '取消' : '管理' }}</span>
      </div>
    </header>
    <section class="au-main">
      <div class="u-tabs">
        <span v-for="tab in tabs" :key="tab.name" :class="{ active: activeTab == tab.name }" @click="clickTab(tab.name)">
          {{ tab.title }}
        </span>
      </div>
      <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="handleSwipeChange">
        <!-- 短视频抖阴 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[0]" @refresh="() => handleRefresh(0)">
            <section class="h-l-b" :class="{ edit: isEditing && activeTab == 0 }">
              <ul>
                <li v-for="(video, index) in dataMap[0]" :key="video.id" @click="handleClick(video, 0, index)">
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
                  <div class="edit-item" :class="{ active: selectedIds.includes(video.id) }" @click.stop="toggleSelect(video.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </li>
              </ul>
            </section>
            <template v-if="totalPages[0] > 1">
              <div class="au-pagination-box" v-if="totalPages[0] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[0] - 1)" :class="{ disabled: pageIndex[0] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[0]" @change="changePage(pageIndex[0])" type="number" min="1" :max="totalPages[0]" />
                  <span>/ {{ totalPages[0] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[0] + 1)" :class="{ disabled: pageIndex[0] == totalPages[0] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[0] < totalPages[0]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[0]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 视频 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[1]" @refresh="() => handleRefresh(1)">
            <nav class="mv-t-l" :class="{ edit: isEditing && activeTab == 1 }">
              <div class="m-b">
                <div class="item" v-for="video in dataMap[1]" :key="video.id" @click="handleClick(video, 1)">
                  <div class="i-a">
                    <div class="ia-a">
                      <img v-lazy-decrypt="video.imgUrl" />
                    </div>
                    <div class="ia-b">
                      <div class="b-a">
                        <span class="a-l" :class="`s${classifyResolution(video.resolution)}`">
                          {{ classifyResolution(video.resolution) }}
                        </span>
                        <span class="a-r ss1">免费</span>
                      </div>
                      <div class="b-b">
                        <span><i class="mvfont mv-zan" />{{ formatNumber(video.likeCount) }}</span>
                        <span>{{ formatDuration(parseInt(video.duration)) }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="i-b">
                    <div class="ib-a">
                      {{ video.title }}
                    </div>
                    <div class="ib-b">
                      {{ formatNumber(video.viewCount) }}次观看
                      <span>•{{ fromNow(video.addTime) }}</span>
                      <span>•{{ video.channelName }}</span>
                    </div>
                  </div>
                  <div class="edit-item" :class="{ active: selectedIds.includes(video.id) }" @click.stop="toggleSelect(video.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </div>
              </div>
            </nav>
            <template v-if="totalPages[1] > 1">
              <div class="au-pagination-box" v-if="totalPages[1] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[1] - 1)" :class="{ disabled: pageIndex[1] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[1]" @change="changePage(pageIndex[1])" type="number" min="1" :max="totalPages[1]" />
                  <span>/ {{ totalPages[1] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[1] + 1)" :class="{ disabled: pageIndex[1] == totalPages[1] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[1] < totalPages[1]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[1]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 社区 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[2]" @refresh="() => handleRefresh(2)">
            <ul class="bbs-list mt-0" :class="{ edit: isEditing && activeTab == 2 }">
              <template v-for="(post, index) in dataMap[2]" :key="index">
                <li @click="handleClick(post, 2)">
                  <div class="i-a">
                    <div class="a-l">
                      <img :src="getAssetsFile('logo-4.png')" />
                      <div class="l-n">
                        <h3>{{ post?.user?.nickName || '芒果TV官方' }}</h3>
                        <span>{{ fromNow(post?.createTime) }}</span>
                      </div>
                    </div>
                    <div class="a-r">
                      <!-- <span class="off"></span> -->
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
                  <div class="edit-item" :class="{ active: selectedIds.includes(post.id) }" @click="toggleSelect(post.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </li>
              </template>
            </ul>
            <template v-if="totalPages[2] > 1">
              <div class="au-pagination-box" v-if="totalPages[2] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[2] - 1)" :class="{ disabled: pageIndex[2] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[2]" @change="changePage(pageIndex[2])" type="number" min="1" :max="totalPages[2]" />
                  <span>/ {{ totalPages[2] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[2] + 1)" :class="{ disabled: pageIndex[2] == totalPages[2] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[2] < totalPages[2]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[2]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 短剧 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[3]" @refresh="() => handleRefresh(3)">
            <ul v-if="dataMap[3] && dataMap[3].length > 0" class="b-u-l" :class="{ edit: isEditing && activeTab == 3 }">
              <li v-for="video in dataMap[3]" :key="video.id" @click="handleClick(video, 3)">
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
                <div class="edit-item" :class="{ active: selectedIds.includes(video.id) }" @click.stop="toggleSelect(video.id)">
                  <i class="mvfont mv-ckbox" />
                </div>
              </li>
            </ul>
            <template v-if="totalPages[3] > 1">
              <div class="au-pagination-box" v-if="totalPages[3] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[3] - 1)" :class="{ disabled: pageIndex[3] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[3]" @change="changePage(pageIndex[3])" type="number" min="1" :max="totalPages[3]" />
                  <span>/ {{ totalPages[3] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[3] + 1)" :class="{ disabled: pageIndex[3] == totalPages[3] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[3] < totalPages[3]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[3]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 合集 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[4]" @refresh="() => handleRefresh(4)">
            <div v-if="dataMap[4] && dataMap[4].length > 0" class="m-c-b" :class="{ edit: isEditing && activeTab == 4 }">
              <ul>
                <li v-for="item in dataMap[4]" :key="item.id" @click="handleClick(item, 4)">
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
                  <div class="edit-item" :class="{ active: selectedIds.includes(item.id) }" @click="toggleSelect(item.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </li>
              </ul>
            </div>
            <template v-if="totalPages[4] > 1">
              <div class="au-pagination-box" v-if="totalPages[4] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[4] - 1)" :class="{ disabled: pageIndex[4] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[4]" @change="changePage(pageIndex[4])" type="number" min="1" :max="totalPages[4]" />
                  <span>/ {{ totalPages[4] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[4] + 1)" :class="{ disabled: pageIndex[4] == totalPages[4] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[4] < totalPages[4]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[4]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="" />
              <div class="d-t">暂无合集</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 小说 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[5]" @refresh="() => handleRefresh(5)">
            <div v-if="dataMap[5] && dataMap[5].length > 0" class="n-l-b" :class="{ edit: isEditing && activeTab == 5 }">
              <ul>
                <li v-for="item in dataMap[5]" :key="item.id" @click="handleClick(item, 5)">
                  <div class="l-a">
                    <img v-lazy-decrypt="item.coverurl" />
                    <span class="a-a">{{ item.categoryName }}</span>
                    <span class="a-b">{{ item.readCount }}阅读</span>
                  </div>
                  <div class="l-b">
                    <b>{{ item.title }}</b>
                    <p>{{ item.introduction }}</p>
                  </div>
                  <div class="edit-item" :class="{ active: selectedIds.includes(item.id) }" @click.stop="toggleSelect(item.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </li>
              </ul>
            </div>
            <template v-if="totalPages[5] > 1">
              <div class="au-pagination-box" v-if="totalPages[5] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[5] - 1)" :class="{ disabled: pageIndex[5] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[5]" @change="changePage(pageIndex[5])" type="number" min="1" :max="totalPages[5]" />
                  <span>/ {{ totalPages[5] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[5] + 1)" :class="{ disabled: pageIndex[5] == totalPages[5] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[5] < totalPages[5]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[5]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 有声 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[6]" @refresh="() => handleRefresh(6)">
            <div v-if="noData[6]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="" />
              <div class="d-t">暂无有声</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 漫画 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[7]" @refresh="() => handleRefresh(7)">
            <div v-if="dataMap[7] && dataMap[7].length > 0" class="n-l-b" :class="{ edit: isEditing && activeTab == 7 }">
              <ul>
                <li v-for="item in dataMap[7]" :key="item.id" @click="handleClick(item, 7)">
                  <div class="l-a">
                    <img v-lazy-decrypt="item.coverurl" />
                    <span class="a-a">{{ item.categoryName }}</span>
                    <span class="a-b">{{ item.readCount }}阅读</span>
                  </div>
                  <div class="l-b">
                    <b>{{ item.title }}</b>
                    <p>{{ item.introduction }}</p>
                  </div>
                  <div class="edit-item" :class="{ active: selectedIds.includes(item.id) }" @click.stop="toggleSelect(item.id)">
                    <i class="mvfont mv-ckbox" />
                  </div>
                </li>
              </ul>
            </div>
            <template v-if="totalPages[7] > 1">
              <div class="au-pagination-box" v-if="totalPages[7] > 9">
                <div class="pb-x">
                  <a @click="changePage(pageIndex[7] - 1)" :class="{ disabled: pageIndex[7] == 1 }">上一页</a>
                </div>
                <div class="pb-x">
                  <input v-model="pageIndex[7]" @change="changePage(pageIndex[7])" type="number" min="1" :max="totalPages[7]" />
                  <span>/ {{ totalPages[7] }}</span>
                </div>
                <div class="pb-x">
                  <a @click="changePage(pageIndex[7] + 1)" :class="{ disabled: pageIndex[7] == totalPages[7] }">下一页</a>
                </div>
              </div>
              <div v-else class="more-box"><a v-if="pageIndex[7] < totalPages[7]" @click="loadMore">加载更多</a></div>
            </template>
            <div v-if="noData[7]" class="nodata">
              <img :src="getAssetsFile('empty/collect.svg')" alt="No Data" />
              <div class="d-t">暂无数据</div>
            </div>
          </PullRefresh>
        </swiper-slide>
        <!-- 茶帖 -->
        <swiper-slide>
          <PullRefresh v-model="refreshing[8]" @refresh="() => handleRefresh(8)">
            <div class="nodata" :class="{ edit: isEditing && activeTab == 8 }">
              <img :src="getAssetsFile('empty/collect.svg')" alt="" />
              <div class="d-t">暂无茶帖</div>
            </div>
          </PullRefresh>
        </swiper-slide>
      </swiper>
    </section>
    <footer class="footer" v-if="isEditing">
      <div class="edit-foot">
        <div class="f-bd">
          <a @click="selectAll"><i class="mvfont mv-qiyong" />全选</a>
          <a class="fx-15 bct-1" @click="removeSelected"><i class="mvfont mv-shanchu" />删除</a>
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
  import { userCollectionHistory, userCollection } from '@/api/user'
  import { getBbsCollectionListApi, bbsCollectionApi } from '@/api/bbs'
  import { getDramaCollectList, addDramaToCollection } from '@/api/drama'
  import { getCollectCollectionListApi, addCollectionToCollectionApi } from '@/api/collection'
  import { getCollectionList as getNovelCollectList, delNovelCollection } from '@/api/novel'
  import { getCommicCollectionList, delCommicCollection } from '@/api/commic'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { PullRefresh, showToast } from 'vant'
  import { formatDuration, formatNumber, fromNow, classifyResolution, decodeHtmlEntities } from '@/utils'
  import 'swiper/css'
import router from '@/router'

  const appStore = useAppStore()
  const userStore = useUserStore()
  const tabs = ref([
    { title: '抖阴', name: 0, routeName: 'shortList', api: userCollectionHistory, params: { PageIndex: 1, PageSize: 10, VideoType: 1 }, delApi: userCollection, delParams: { Ids: '', Collect: false, Id: '' } },
    { title: '视频', name: 1, routeName: 'play', api: userCollectionHistory, params: { PageIndex: 1, PageSize: 10, VideoType: 0 }, delApi: userCollection, delParams: { Ids: '', Collect: false, Id: '' } },
    { title: '社区', name: 2, routeName: 'bbs', api: getBbsCollectionListApi, params: { PageIndex: 1, PageSize: 10 }, delApi: bbsCollectionApi, delParams: { Ids: '', Collect: false, Id: '' } },
    { title: '短剧', name: 3, routeName: 'drama', api: getDramaCollectList, params: { PageIndex: 1, PageSize: 10 }, delApi: addDramaToCollection, delParams: { Ids: '', Collect: false, Id: '' } },
    { title: '合集', name: 4, routeName: 'collectDetails', api: getCollectCollectionListApi, params: { PageIndex: 1, PageSize: 20 }, delApi: addCollectionToCollectionApi, delParams: { Ids: '', Collect: false, Id: '' } },
    { title: '小说', name: 5, routeName: 'novelIntro?nid=', api: getNovelCollectList, params: { PageIndex: 1, PageSize: 20 }, delApi: delNovelCollection, delParams: { Ids: '' } },
    { title: '有声', name: 6, routeName: 'audio', api: null, params: { PageIndex: 1, PageSize: 20 } },
    { title: '漫画', name: 7, routeName: 'comicIntro?nid=', api: getCommicCollectionList, params: { PageIndex: 1, PageSize: 20 }, delApi: delCommicCollection, delParams: { Ids: '' } },
    { title: '茶贴', name: 8, routeName: 'tea', api: null, params: { PageIndex: 1, PageSize: 20 } }
  ])

  const activeTab = ref(0)
  const dataMap = reactive<Record<number, any[]>>({})
  const pageIndex = reactive<Record<number, number>>({})
  const totalPages = reactive<Record<number, number>>({})
  const noData = reactive<Record<number, boolean>>({})
  const refreshing = reactive<Record<number, boolean>>({})
  const swiperInstance = ref<any>(null)
  const isEditing = ref(false)
  const selectedIds = ref<number[]>([])

  const fetchData = async (tabName: number, showRefreshing = false, loadMore = false) => {
    if (showRefreshing) {
      refreshing[tabName] = true
    }
    try {
      const tab = tabs.value.find(t => t.name == tabName)
      if (!tab || !tab.api) {
        noData[tabName] = true
        return
      }
      const response = await tab.api(tab.params)
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
      if (showRefreshing) {
        refreshing[tabName] = false
      }
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
    isEditing.value = false
    const newIndex = swiper.activeIndex
    activeTab.value = newIndex
    if (!dataMap[newIndex] || dataMap[newIndex].length == 0) {
      dataMap[newIndex] = []
      pageIndex[newIndex] = 1
      fetchData(newIndex, true)
    }
  }

  const handleClick = (item: any, tabName: number, index: number | undefined) => {
    if (tabName == 0) {
      // 将dataMap[0]的格式化为json 和点击选中的id 一起保存到localstorage
      localStorage.setItem('shortVideoCollection', JSON.stringify({ data: dataMap[0], playIndex: index }))
      router.push({ name: tabs.value[tabName].routeName })
    } else if (tabName == 1) {
      router.push({ name: tabs.value[tabName].routeName, query: { id: item.id } })
    } else {
      router.push({ name: tabs.value[tabName].routeName, query: { id: item.id } })
    }
  }

  const handleRefresh = async (tabName: number) => {
    refreshing[tabName] = true
    tabs.value[tabName].params.PageIndex = 1
    await fetchData(tabName, true)
    refreshing[tabName] = false
  }

  const changePage = async (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages[activeTab.value]) {
      pageIndex[activeTab.value] = newPage
      tabs.value[activeTab.value].params.PageIndex = newPage
      fetchData(activeTab.value, true)
    }
  }

  const loadMore = async () => {
    if (pageIndex[activeTab.value] < totalPages[activeTab.value]) {
      pageIndex[activeTab.value]++
      tabs.value[activeTab.value].params.PageIndex = pageIndex[activeTab.value]
      await fetchData(activeTab.value, true, true)
    }
  }

  const editCollect = () => {
    isEditing.value = !isEditing.value
    if (!isEditing.value) {
      selectedIds.value = []
    }
  }

  const toggleSelect = (id: number) => {
    const index = selectedIds.value.indexOf(id)
    if (index === -1) {
      selectedIds.value.push(id)
    } else {
      selectedIds.value.splice(index, 1)
    }
  }

  const selectAll = () => {
    if (isEditing.value) {
      const currentIds = dataMap[activeTab.value].map(item => item.id)
      selectedIds.value = currentIds
    }
  }

  // 删除选中的数据
  const removeSelected = async () => {
    if (selectedIds.value.length === 0) return
    const currentTab = tabs.value[activeTab.value]
    if (typeof currentTab.delApi == 'function') {
      //@ts-ignore
      currentTab.delParams.Ids = selectedIds.value.join(',')
      currentTab
        .delApi(currentTab.delParams)
        .then(() => {
          if (dataMap[activeTab.value].length == selectedIds.value.length) {
            dataMap[activeTab.value] = []
          } else {
            dataMap[activeTab.value] = dataMap[activeTab.value].filter(item => !selectedIds.value.includes(item.id))
          }
          selectedIds.value = []
          if (dataMap[activeTab.value].length == 0) {
            handleRefresh(activeTab.value)
          } else {
            nextTick(() => {
              swiperInstance.value.updateAutoHeight()
            })
          }
          showToast('删除成功')
        })
        .catch(() => {
          showToast('删除失败')
        })
    }
  }

  onMounted(() => {
    tabs.value.forEach(tab => {
      dataMap[tab.name] = []
      refreshing[tab.name] = false
    })
    fetchData(activeTab.value, true)
  })
</script>

<style lang="less" scoped>
  :deep(.van-pull-refresh) {
    min-height: calc(100vh - 100px);
  }
</style>
