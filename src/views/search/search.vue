<template>
  <div class="page page-search">
    <header class="d-header">
      <div class="d-l" @click="goBack">
        <i class="mvfont mv-left" />
      </div>
      <div class="d-m dm-input">
        <input placeholder="请输入搜索内容" v-model="searchValue" @keyup.enter="handleSearch('')" @submit="handleSearch('')" />
      </div>
      <div class="d-r dr-txt" @click="handleSearch('')">
        <span>搜索</span>
      </div>
    </header>
    <section class="p-s-b">
      <!--历史搜索-->
      <nav v-if="searchHistory.length > 0" class="ps-ssfx">
        <div class="s-a">
          <b>历史搜索</b>
          <span class="c-btn" @click="clearSearchHistory">
            <i class="mvfont mv-shanchu" />
          </span>
        </div>
        <div class="s-b">
          <a v-for="history in searchHistory" :key="history" @click="handleSearchHistory(history)">
            {{ history }}
          </a>
        </div>
      </nav>
      <!--热门标签-->
      <nav class="ps-ssfx">
        <Loading v-if="isRefreshing" />
        <div v-else class="s-a">
          <b>热门标签</b>
          <span class="c-btn" @click="refreshHotKeywords"> <i class="mvfont mv-hyh" />换一换 </span>
        </div>
        <div class="s-b">
          <a v-for="keyword in hotKeywords" :key="keyword" @click.prevent="handleSearch(keyword)">{{ keyword }}<small>热</small></a>
        </div>
      </nav>
      <!--广告位-->
      <nav class="ps-ad">
        <a><img src="https://f1.1t4b19ec.com/upload/images/202501/0704231f-7346-40bb-8c4a-6514acf3abe2.gif" /></a>
      </nav>
      <!--排行榜-->
      <nav class="ps-m-c">
        <div v-if="isRankLoading">
          <van-loading size="24" />
        </div>
        <template v-else>
          <van-tabs v-model:active="activeRankTab" sticky line-height="0" line-width="0">
            <van-tab v-for="tab in tabs" :key="tab.channelId" :name="tab.channelName" :title="SearchTypeMapping[tab.channelId]">
              <swiper
                :direction="'horizontal'"
                :modules="modules"
                :slides-per-view="3"
                :space-between="10"
                style="width: 100%; height: 100%"
              >
                <swiper-slide v-for="(item, index) in groupedRankData[tab.channelId]" :key="item.id">
                  <div class="v-h-l">
                    <div class="vhl-t" :class="`bct-${index + 1}`">
                      <b>{{ item[0]?.channelName }}</b>
                      <span>ethics</span>
                    </div>
                    <div class="vhl-b">
                      <div v-for="(rankItem, rIndex) in item" :key="rankItem?.id" class="b-item">
                        <div class="b-l">
                          <img :src="rankItem?.coverImg" />
                          <span class="l-tag">{{ rIndex + 1 }}</span>
                        </div>
                        <div class="b-r">
                          <div class="r-a">{{ rankItem?.title }}</div>
                          <div class="r-b">
                            <span><i class="mvfont mv-kan" />{{ rankItem?.viewCount }}</span>
                            <span><i class="mvfont mv-zan" />{{ rankItem?.likeCount }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </van-tab>
          </van-tabs>
        </template>
      </nav>
    </section>
  </div>
</template>
<script setup lang="ts">
  import { useAppStore } from '@/store/app'
  import { getHotSeachKeywords, getRankList } from '@/api/search'
  import { onMounted, ref } from 'vue'
  import { SearchType, SearchTypeMapping } from '@/utils/constant'
  import { enumEntries, isImageFile } from './fn'
  import { SearchRankResult } from '@/types/search'
  import { Swiper, SwiperSlide } from 'swiper/vue'

  import 'swiper/css'
  import 'swiper/css/free-mode'
  import { FreeMode } from 'swiper/modules'
  import decryptionService from '@/utils/decryptionService'

  const appStore = useAppStore()
  const decrypt = new decryptionService()
  const searchValue = ref('')
  const searchHistory = ref<string[]>([])
  const hotKeywords = ref<string[]>([])
  const isRefreshing = ref(false)
  const activeRankTab = ref('Video')
  const tabs = enumEntries(SearchType)
  const modules = [FreeMode]
  const createdUrls = ref<string[]>([])
  const isRankLoading = ref(false)
  // 按searchType和channelId分组的数据
  const groupedRankData = ref<Record<number, Record<string, SearchRankResult[]>>>({})

  // 处理图片解密
  async function decryptImage(imageUrl: string) {
    if (imageUrl === '') {
      return '/src/assets/imgs/default2.gif'
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + imageUrl)

      // 验证解密后的数据是否为有效的图片
      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        return '/src/assets/imgs/default2.gif'
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      return objectUrl
    } catch (error) {
      return '/src/assets/imgs/default2.gif'
    }
  }

  // 验证图片数据是否有效
  function validateImage(blob: Blob): Promise<boolean> {
    return new Promise(resolve => {
      // 如果blob大小为0或不是图片类型，直接返回false
      if (blob.size === 0 || !blob.type.startsWith('image/')) {
        resolve(false)
        return
      }

      const img = new Image()
      const url = URL.createObjectURL(blob)

      img.onload = () => {
        URL.revokeObjectURL(url)
        // 验证图片尺寸是否合理（例如：至少1x1像素）
        resolve(img.width > 0 && img.height > 0)
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        resolve(false)
      }

      img.src = url
    })
  }

  // 获取排行榜
  const fetchRankListBySearchType = async (searchType: number) => {
    const res = await getRankList({ SearchType: searchType })
    if (res.data.data) {
      return res.data.data as SearchRankResult[]
    }
    return []
  }

  // 对数据进行二次分组
  const groupRankData = (results: SearchRankResult[]) => {
    // 按searchType和channelId进行分组
    const grouped = results.reduce((acc, item) => {
      // 确保searchType分组存在
      if (!acc[item.searchType]) {
        acc[item.searchType] = {}
      }

      // 确保channelId分组存在
      if (!acc[item.searchType][item.channelId]) {
        acc[item.searchType][item.channelId] = []
      }

      // 将当前项添加到对应分组
      acc[item.searchType][item.channelId].push(item)
      return acc
    }, {} as Record<number, Record<string, SearchRankResult[]>>)

    groupedRankData.value = grouped
  }

  // 从localStorage加载搜索历史
  const loadSearchHistory = () => {
    const history = localStorage.getItem('searchHistory')
    if (history) {
      searchHistory.value = JSON.parse(history)
    }
  }

  const handleSearchHistory = (history: string) => {
    searchValue.value = history
    handleSearch()
  }

  // 保存搜索历史到localStorage
  const saveSearchHistory = (keyword: string) => {
    if (!keyword) return

    // 去重：如果已存在该关键词，先删除它
    searchHistory.value = searchHistory.value.filter(item => item !== keyword)

    // 将新关键词添加到开头
    searchHistory.value.unshift(keyword)

    // 限制历史记录数量为10条
    if (searchHistory.value.length > 10) {
      searchHistory.value = searchHistory.value.slice(0, 10)
    }

    // 保存到localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
  }

  // 清空搜索历史
  const clearSearchHistory = () => {
    searchHistory.value = []
    localStorage.removeItem('searchHistory')
  }

  const goBack = () => {
    appStore.setBack(true)
  }

  const handleSearch = (keyword?: string) => {
    if (keyword !== '' && keyword.trim()) {
      saveSearchHistory(keyword.trim())
    } else if (searchValue.value.trim()) {
      saveSearchHistory(searchValue.value.trim())
    }
  }

  const refreshHotKeywords = () => {
    isRefreshing.value = true
    hotKeywords.value = []
    getHotSeachKeywords()
      .then(res => {
        hotKeywords.value = res.data.data
      })
      .finally(() => {
        isRefreshing.value = false
      })
  }

  onMounted(() => {
    getHotSeachKeywords().then(res => {
      hotKeywords.value = res.data.data
    })
    loadSearchHistory()
    isRankLoading.value = true
    Promise.all([
      fetchRankListBySearchType(SearchType.Video),
      fetchRankListBySearchType(SearchType.ShortVideo),
      fetchRankListBySearchType(SearchType.BBS),
      fetchRankListBySearchType(SearchType.Novel),
      fetchRankListBySearchType(SearchType.Comics)
    ])
      .then(async results => {
        // 将所有结果合并成一个数组并进行分组
        const allResults = results.flat()

        for (const rankItem of allResults) {
          if (rankItem.searchType !== SearchType.BBS) {
            rankItem.coverImg = await decryptImage(rankItem.coverImg)
          }
          // 如果是BBS，图片需要切分
          if (rankItem.searchType === SearchType.BBS) {
            const imgUrls = rankItem.coverImg.split(',')
            for (const imgUrl of imgUrls) {
              if (!rankItem.bbsImg) {
                rankItem.bbsImg = []
              }
              if (!isImageFile(imgUrl)) {
                rankItem.bbsImg.push(await decryptImage(imgUrl))
              } else {
                rankItem.bbsImg.push(`${appStore.cdnUrl}${imgUrl}`)
              }
            }
          }
        }
        groupRankData(allResults)
      })
      .finally(() => {
        isRankLoading.value = false
      })
  })
</script>
<style scoped lang="less"></style>
<style lang="less">
  .ps-m-c {
    .van-tabs__nav {
      height: 4rem;
      background-color: var(--color-main-bg);
      padding-left: 0;
      padding-right: 0;
    }
    .van-tab {
      font-size: 1.6rem;
      padding: 0 1rem;
      color: var(--color-666);
      &.van-tab--active {
        color: var(--color-white);
        font-weight: 500;
      }
    }
  }
</style>
