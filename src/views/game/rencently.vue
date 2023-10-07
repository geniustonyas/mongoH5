<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="scrollRef">
      <!-- 切换体育真人老虎机 -->
      <IndexTab />

      <!-- 真人 -->
      <nav class="gamebox">
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('recentlyGame') }}</div>
            <div class="gh-r" />
          </div>
        </div>
        <div v-if="dataList.length > 0" class="g-list">
          <div v-for="(item, index) of dataList" :key="index" class="item" @click.stop="startGame(item.id, item.type)">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.img}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                <div v-if="userStore.userInfo.id" class="sp_sc" @click.stop="setFav(item)">
                  <i :class="item.fg ? 'iconfont icon-shoucang_fill' : 'iconfont icon-shoucang'" />
                </div>
              </div>
              <div class="i-txt">
                <strong>{{ item.name }}</strong>
                <span>{{ item.pn }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pageCount > 1" class="g-btn">
          <a :class="query.page >= pageCount ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="loadMore()">{{ t('more') }}</a>
        </div>
        <div v-if="nodata" class="no-data">
          <span><i class="iconfont icon-wushoucang" />{{ t('nodata') }}</span>
        </div>
      </nav>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onActivated, onDeactivated } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

import { getRecentlyGameApi, setFavApi, cancalFavApi } from '@/api/game/index'
import { getFavGameListRespItem, getFavRecentlyListData } from '@/api/game/types'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import { getExchangeRate } from '@/composables/getExchangeRate'

import { showToast } from 'vant'
import { startGame } from '@/composables/startGame'

const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 游戏列表查询参数
let query = reactive<getFavRecentlyListData>({
  page: 1,
  pcount: 30
})
// 游戏列表分页
let pageCount = ref(0)
// 游戏列表
let dataList = ref<getFavGameListRespItem[]>([])
const nodata = ref(false)

// 获取游戏列表
// 获取游戏列表
const getRecentlyGameList = () => {
  getRecentlyGameApi(query)
    .then((resp) => {
      dataList.value = [...dataList.value, ...resp.data.items]
      nodata.value = dataList.value.length == 0
      pageCount.value = parseInt(resp.data.pages)
    })
    .catch((error) => {
      console.log(error)
    })
}

// 设置收藏或取消收藏
const setFav = async (gameItem: getFavGameListRespItem) => {
  if (userStore.userInfo.id == '') {
    router.push({ name: 'login' })
  } else {
    // 是否收藏
    if (gameItem.fg) {
      await cancalFavApi({ gameId: gameItem.id })
    } else {
      await setFavApi({ gameId: gameItem.id })
    }
    gameItem.fg = !gameItem.fg
    userStore.getFavCount()
  }
}

// 加载更多
const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getRecentlyGameList()
  } else {
    showToast(t('noMore'))
  }
}

const scrollRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
onActivated(() => {
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollTop.value
  }
})

onDeactivated(() => {
  if (scrollRef.value) {
    scrollTop.value = scrollRef.value.scrollTop
  }
})

getRecentlyGameList()
</script>
