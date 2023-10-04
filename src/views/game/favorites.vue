<template>
  <div class="page">
    <CommonHeader :title="t('favariateGame')" />
    <main class="main" ref="scrollRef">
      <!-- 真人 -->
      <nav class="gamebox">
        <div v-if="dataList.length > 0" class="g-list">
          <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item.id, item.type)">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.img}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                <div v-if="userStore.userInfo.id" class="sp_sc" @click.stop="setFav(item)">
                  <i class="iconfont icon-shoucang_fill" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onActivated, onDeactivated } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Footer from '@/components/layout/Footer.vue'

import { getFavGameListApi, setFavApi, cancalFavApi } from '@/api/game/index'
import { getFavGameListRespItem, getFavRecentlyListData } from '@/api/game/types'
import { useUserStore } from '@/store/modules/user'
import { getExchangeRate } from '@/composables/getExchangeRate'

import { showToast } from 'vant'
import { startGame } from '@/composables/startGame'

const router = useRouter()
const userStore = useUserStore()
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
const getFavGameList = () => {
  getFavGameListApi(query)
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
    await cancalFavApi({ gameId: gameItem.id })
    // 取消收藏后从dataList中删除该项
    const index = dataList.value.findIndex((item) => item.id == gameItem.id)
    dataList.value.splice(index, 1)
    userStore.getFavCount()
  }
}

// 加载更多
const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getFavGameList()
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

getFavGameList()
</script>
