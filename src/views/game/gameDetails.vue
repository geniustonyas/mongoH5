<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="gamebox">
        <div class="gb-detail">
          <div class="gd-a">
            <div class="a-l">
              <img v-lazy="getAssetsFile('game/game9.jpg')" />
            </div>
            <div class="a-r">
              <span>{{ t('newGame') }}</span>
              <h3>Wild Coyote Megaways</h3>
              <p>
                <label>ELK</label>
                <label>ELK</label>
              </p>
            </div>
          </div>
          <div class="gd-b">
            <div class="st-item">
              <span class="active">{{ t('oneDay') }}<b>58.58%</b><i class="iconfont icon-xj" /> </span>
              <span> {{ t('week') }}<b>59.58%</b><i class="iconfont icon-ss" /> </span>
              <span> {{ t('month') }}<b>81.73%</b><i class="iconfont icon-xj" /> </span>
            </div>
            <div class="item"><label>RTP</label><span>94%</span></div>
            <div class="item"><label>最小-最大投注</label><span>0.2 - 100 USDT</span></div>
            <div class="item"><label>波动性</label><span>高波动性</span></div>
            <div class="item"><label>命中率</label><span>30%</span></div>
            <a class="btn btn-primary">真钱游戏</a>
            <div class="sb-item">
              <a>#高波动性</a>
              <a>#历史</a>
              <a>#定制老虎机</a>
            </div>
          </div>
        </div>
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">更多游戏</div>
          </div>
        </div>
        <div class="g-list">
          <div class="item" onclick="location='game-detail.html'">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="getAssetsFile('game/game9.jpg')" />
                <span class="red">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Wild Coyote Megaways</strong>
                <span>ONETOUCH</span>
              </div>
            </div>
          </div>
          <div class="item" onclick="location='game-detail.html'">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game8.jpg" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game7.jpg" />
              </div>
              <div class="i-txt">
                <strong>Evolution Live Baccarat Lobby</strong>
                <span>EVOLUTION</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game6.jpg" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game5.jpg" />
                <span class="red">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Wild Coyote Megaways</strong>
                <span>ONETOUCH</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game4.jpg" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game3.jpg" />
              </div>
              <div class="i-txt">
                <strong>Evolution Live Baccarat Lobby</strong>
                <span>EVOLUTION</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img src="assets/imgs/game/game2.jpg" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { getAssetsFile } from '@/utils/index'
import CommonHeader from '@/components/layout/CommonHeader.vue'

import { getGameListApi } from '@/api/game/index'
import { getGameListRespItem, getGameListGsItemResp, getGameListData } from '@/api/game/types'
import { useAppStore } from '@/store/modules/app'
import { GameType } from '@/utils/constant'
import { getExchangeRate } from '@/composables/getExchangeRate'
import { startGame } from '@/composables/startGame'

import { showToast, ConfigProvider, DropdownMenu, DropdownItem, Icon } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const appStore = useAppStore()
const route = useRoute()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 游戏列表显示or隐藏筛选条件
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)
// 游戏列表排序规则
const sortBy = [
  { text: t('polular'), value: 3 },
  { text: 'A-Z', value: 1 },
  { text: 'RTP', value: 2 }
]
// 游戏列表查询参数
let query = reactive<getGameListData>({
  ps: [],
  cs: [],
  gts: [GameType.Casino],
  ct: 1,
  sortBy: 3,
  page: 1
})
// 游戏列表分页
let pageCount = ref(0)
// 运营商分类
let pslist = ref<getGameListRespItem[]>([])
// 游戏分类-暂时没用
let cslist = ref<getGameListRespItem[]>([])
// 游戏列表
let dataList = ref<getGameListGsItemResp[]>([])

// 选择运营商
const selGameProvider = (id: number) => {
  showGameOption.value = true
  const index = query.ps.indexOf(id)
  if (index > -1) {
    query.ps.splice(index, 1)
  } else {
    query.ps.push(id)
  }
  query.page = 1
  dataList.value = []
  getGameList()
}

// 游戏列表排序
const sortGame = () => {
  query.page = 1
  dataList.value = []
  getGameList()
}

// 获取游戏列表
const getGameList = () => {
  getGameListApi(query)
    .then((resp) => {
      pslist.value = resp.data!.ps
      cslist.value = resp.data!.cs
      dataList.value = [...dataList.value, ...resp.data!.gs.items]
      pageCount.value = parseInt(resp.data!.gs.pages)
    })
    .catch((error) => {
      console.log(error)
    })
}

// 加载更多
const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getGameList()
  } else {
    showToast(t('noMore'))
  }
}

// 观察路由请求参数providerId变化
watch(
  () => route.query.providerId,
  (val) => {
    if (val) {
      showGameOption.value = true
      query.ps = [parseInt(route.query.providerId as string)]
    } else {
      query.ps = []
    }
    dataList.value = []
    getGameList()
  },
  { immediate: true }
)
</script>
