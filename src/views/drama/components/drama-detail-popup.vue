<template>
  <div class="moreEpisodes">
    <div class="m-a">
      <div class="ma-t">
        <div class="t-l">
          <img src="assets/imgs/logo-2.png" />短剧<b>●</b>{{ dramaDetail?.title }}<span>更新至第{{ dramaDetail?.episodeCount }}集</span>
        </div>
        <div class="t-r" @click="closePopup">
          <i class="mvfont mv-close" />
        </div>
      </div>
    </div>
    <div class="m-a" style="padding-top: 0">
      <div class="ma-b">
        <van-tabs v-model:active="activeTab" swipeable line-width="0" line-height="0" @change="handleTabChange">
          <van-tab title="选集" name="episodeListTab">
            <div class="m-b m-b-tab">
              <div class="p-l-c">
                <span
                  v-for="(episode, index) in dramaDetail?.items"
                  :key="episode.id"
                  :class="activeEpisodeIndex === index ? 'active' : ''"
                  @click="handleEpisodeClick(episode.id)"
                >
                  {{ index + 1 }}
                </span>
              </div>
            </div>
          </van-tab>
          <van-tab title="热门短剧" name="hotDramaTab">
            <div class="m-b">
              <template v-if="dramas.length > 0">
                <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
                  <van-list v-model:loading="isLoadingMore" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
                    <ul class="p-l-i">
                      <li v-for="drama in dramas" :key="drama.id" @click="handleDramaClick(drama.id)">
                        <div class="l-l">
                          <img width="100%" height="100%" style="border-radius: 0.4rem" :src="drama.poster" />
                        </div>
                        <div class="l-r">
                          <div class="r-a">{{ drama?.title }}</div>
                          <div class="r-b">
                            <span><i class="mvfont mv-bofang2" />{{ drama?.viewCount }}万</span>
                            <span><i class="mvfont mv-like" />{{ drama?.likeCount }}</span>
                            <span><i class="mvfont mv-zan" />{{ drama?.collectionCount }}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </van-list>
                </van-pull-refresh>
              </template>
              <template v-if="dramas.length === 0 && !isLoading">
                <van-empty description="暂无热门短剧推荐" />
              </template>
              <template v-if="isLoading">
                <Loading />
              </template>
            </div>
          </van-tab>
          <van-tab title="猜你喜欢" name="guessYouLikeTab">
            <div class="m-b">
              <template v-if="dramas.length > 0">
                <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
                  <van-list v-model:loading="isLoadingMore" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
                    <ul class="p-l-i">
                      <li v-for="drama in dramas" :key="drama.id" @click="handleDramaClick(drama.id)">
                        <div class="l-l">
                          <img width="100%" height="100%" style="border-radius: 0.4rem" :src="drama.poster" />
                        </div>
                        <div class="l-r">
                          <div class="r-a">{{ drama?.title }}</div>
                          <div class="r-b">
                            <span><i class="mvfont mv-bofang2" />{{ drama?.viewCount }}万</span>
                            <span><i class="mvfont mv-like" />{{ drama?.likeCount }}</span>
                            <span><i class="mvfont mv-zan" />{{ drama?.collectionCount }}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </van-list>
                </van-pull-refresh>
              </template>
              <template v-if="dramas.length === 0 && !isLoading">
                <van-empty description="暂无热门短剧推荐" />
              </template>
              <template v-if="isLoading">
                <Loading />
              </template>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="m-c">
      <a :class="dramaDetail?.collect ? 'active' : ''" @click="collectDrama"
        ><i class="icon mvfont" :class="dramaDetail?.collect ? 'mv-like_fill' : 'mv-like'" />
        {{ dramaDetail?.collect ? '已收藏' : '收藏短剧' }}
      </a>
      <a href="#"><i class="mvfont mv-home" />短剧首页</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { DramaDetailResponse, DramaItemVM, DramaSortType } from '@/types/drama'
  import { closeToast, showLoadingToast } from 'vant'
  import { getDramaList, getGuessYouLikeDramaList } from '@/api/drama'
  import { useAppStore } from '@/store/app'
  import decryptionService from '@/utils/decryptionService'
  import { useRouter } from 'vue-router'
  import Loading from '@/components/layout/Loading.vue'

  interface Props {
    isCollecting?: boolean
    dramaDetail?: DramaDetailResponse | null
    currentEpisodeId?: string | null
  }

  const props = withDefaults(defineProps<Props>(), {
    dramaDetail: null,
    currentEpisodeId: null,
    isCollecting: false
  })

  const emit = defineEmits(['close', 'collect', 'changeEpisode'])

  const activeTab = ref('episodeListTab')
  const activeEpisodeIndex = ref(0)
  const dramas = ref<DramaItemVM[]>([])
  const pageIndex = ref(1)
  const totalCount = ref(0)
  const appStore = useAppStore()
  const decrypt = new decryptionService()
  const router = useRouter()

  const isRefreshing = ref(false)
  const isLoading = ref(false)
  const isFinished = ref(false)
  const pageSize = 10
  const isLoadingMore = ref(false)

  watch(
    props.dramaDetail,
    newVal => {
      activeEpisodeIndex.value = newVal?.items.findIndex(item => item.id === props.currentEpisodeId) || 0
      console.log('-------------> 剧集详情', props.currentEpisodeId)
    },
    {
      immediate: true,
      deep: true
    }
  )

  watch(
    () => props.currentEpisodeId,
    newVal => {
      activeEpisodeIndex.value = props.dramaDetail?.items.findIndex(item => item.id === newVal) || 0
      console.log('-------------> 切换剧集', newVal)
    }
  )

  watch(
    () => props.isCollecting,
    newVal => {
      if (newVal) {
        showLoadingToast({
          message: '加载中...',
          forbidClick: true
        })
      } else {
        closeToast()
      }
    }
  )

  const fetchGuessYouLikeDramaList = async (isRefresh = false) => {
    try {
      isLoading.value = true
      const {
        data: { data }
      } = await getGuessYouLikeDramaList({
        PageIndex: pageIndex.value,
        PageSize: pageSize
      })

      if (data && data.items) {
        const newDramas = await Promise.all(
          data.items.map(async episode => {
            episode.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + episode.imgUrl))
            return episode
          })
        )

        if (isRefresh) {
          dramas.value = newDramas
        } else {
          dramas.value.push(...newDramas)
        }

        totalCount.value = data.recordCount
        isFinished.value = dramas.value.length >= totalCount.value
      }
    } catch (error) {
      console.error('获取猜你喜欢短剧列表失败:', error)
    } finally {
      isLoading.value = false
    }
  }

  const fetchDramaList = async (isRefresh = false) => {
    try {
      isLoading.value = true
      const {
        data: { data }
      } = await getDramaList({
        PageIndex: pageIndex.value,
        PageSize: pageSize,
        SortType: DramaSortType.Hot
      })

      if (data && data.items) {
        const newDramas = await Promise.all(
          data.items.map(async episode => {
            episode.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + episode.imgUrl))
            return episode
          })
        )

        if (isRefresh) {
          dramas.value = newDramas
        } else {
          dramas.value.push(...newDramas)
        }

        totalCount.value = data.recordCount
        isFinished.value = dramas.value.length >= totalCount.value
      }
    } catch (error) {
      console.error('获取剧集列表失败:', error)
    } finally {
      isLoading.value = false
    }
  }

  const onRefresh = async () => {
    try {
      pageIndex.value = 1
      if (activeTab.value === 'hotDramaTab') {
        await fetchDramaList(true)
      } else if (activeTab.value === 'guessYouLikeTab') {
        await fetchGuessYouLikeDramaList(true)
      }
    } finally {
      isRefreshing.value = false
    }
  }

  const onLoad = async () => {
    if (dramas.value.length >= totalCount.value) {
      isFinished.value = true
      return
    }

    pageIndex.value++

    if (activeTab.value === 'hotDramaTab') {
      await fetchDramaList()
    } else if (activeTab.value === 'guessYouLikeTab') {
      await fetchGuessYouLikeDramaList()
    }
    isLoadingMore.value = false
  }

  const handleDramaClick = (dramaId: string) => {
    router.push({
      name: 'shortDramaPlayer',
      query: { dramaId: dramaId, episodeId: props.dramaDetail?.first.id }
    })
  }

  const handleEpisodeClick = (episodeId: string) => {
    emit('changeEpisode', episodeId)
    console.log('-------------> 切换剧集', episodeId)
  }

  const handleTabChange = async (tab: string) => {
    dramas.value = []
    if (tab === 'hotDramaTab') {
      await fetchDramaList()
    } else if (tab === 'guessYouLikeTab') {
      await fetchGuessYouLikeDramaList()
    }
  }

  const closePopup = () => {
    emit('close')
  }

  const collectDrama = () => {
    emit('collect')
  }
</script>

<style scoped>
  .moreEpisodes {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100% + env(safe-area-inset-bottom));
    background-color: var(--color-black);
  }

  .moreEpisodes .p-l-c {
    padding: 1rem 0;
  }

  .moreEpisodes .m-a {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem 1rem 0 1rem;
  }

  .moreEpisodes .m-a .ma-t {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .moreEpisodes .m-a .ma-t .t-l {
    color: var(--color-white);
    font-size: 1.3rem;
    font-weight: 500;
    font-family: PingFang SC, DFPKingGothicGB-Medium, Lato, Tahoma, Microsoft Yahei, sans-serif;
  }

  .moreEpisodes .m-a .ma-t .t-r {
    position: absolute;
    right: -0.5rem;
    top: 0.4rem;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    cursor: pointer;
    z-index: 10;
  }

  .moreEpisodes .m-a .ma-t .t-l img {
    height: 1.3rem;
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-a .ma-t .t-l b {
    font-size: 0.4rem;
    vertical-align: middle;
    display: inline-block;
    padding: 0 0.3rem;
  }

  .moreEpisodes .m-a .ma-t .t-l span {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    padding: 0.1rem 0.4rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-c {
    position: absolute;
    bottom: 0;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
  }

  .moreEpisodes .m-c a {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    height: 3.6rem;
    line-height: 3.6rem;
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  .moreEpisodes .m-c a i {
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.2rem;
  }

  .moreEpisodes .m-a .m-b.m-b-tab {
    height: calc(50vh - 9rem);
    overflow: auto;
  }

  .m-b {
    height: calc(50vh - 9rem);
    overflow: hidden;
  }

  .van-list {
    height: 100%;
    overflow-y: auto;
  }
</style>
<!-- 覆盖van-tab的样式 -->
<style lang="css">
  .moreEpisodes .van-tabs--line .van-tabs__wrap {
    height: 3.6rem;
    padding-bottom: 3.5rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  }

  .moreEpisodes .van-tabs__nav {
    background-color: var(--color-black);
    padding-left: 0.5rem;
  }

  .moreEpisodes .van-tab {
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-light);
    display: inline-block;
    height: 3.6rem;
    line-height: 3.6rem;
    cursor: pointer;
    flex: 0 0 7.5rem;
  }

  .moreEpisodes .van-tab:first-child {
    flex: 0 0 3.5rem;
    margin-right: 0.8rem;
  }

  .moreEpisodes .van-tab--active:before {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 2.4rem;
    background: url('../../../assets/imgs/by.svg') no-repeat center;
    background-size: cover;
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
  }

  .moreEpisodes .van-tab:first-child.van-tab--active:before {
    left: 0.6rem;
  }

  .moreEpisodes .van-tab--active .van-tab__text {
    color: var(--color-white);
    font-weight: 500;
  }

  .moreEpisodesPopup.van-popup {
    background-color: var(--color-black);
  }

  .moreEpisodes .m-c a.active {
    color: var(--color-primary);
  }

  .moreEpisodes .m-c a.active i {
    color: var(--color-primary);
  }

  .moreEpisodes .p-l-i li {
    padding: 0.5rem;
  }

  .moreEpisodes .p-l-i li .l-l {
    width: 8rem;
    flex: 0 0 8rem;
  }

  .moreEpisodes .p-l-i li .l-l img {
    border-radius: 0.4rem;
    object-fit: cover;
  }

  .moreEpisodes .p-l-i li .l-r {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 10rem;
  }
</style>
