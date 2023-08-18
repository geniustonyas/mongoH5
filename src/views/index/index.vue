<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab />

      <!-- swiper图片 -->
      <nav v-if="swipeImg.length > 0" class="swiper m-banner">
        <Swipe :autoplay="3500" class="my-swipe">
          <SwipeItem v-for="(item, index) of swipeImg" :key="index" v-lazy:background-image="appStore.cdnurl + item.imageName" />
        </Swipe>
      </nav>

      <!-- 跑马灯开始 -->
      <ConfigProvider theme="dark">
        <NoticeBar left-icon="volume-o" :text="marqueeContent" @click="loginTo('message')" />
      </ConfigProvider>
      <!-- <nav class="m-notice">
        <span class="mn-icon">
          <i class="iconfont icon-notice" />
        </span>
        <div class="mn-txt">
          <marquee align="left" behavior="scroll" width="100%" loop="-1" scrollamount="7" scrolldelay="180" onmouseout="this.start()" onmouseover="this.stop()" id="announcement-box">
            {{ marqueeContent }}
          </marquee>
        </div>
      </nav> -->
      <!-- 支付解决方案 -->
      <nav class="m-card">
        <div class="mc-t">
          <div class="mt-l">
            <b>{{ t('globalPaymentSolutions') }}</b>
            <p>{{ t('cryptoCurrency') }} &<br />{{ t('otherPayment') }}</p>
          </div>
          <a class="btn btn-primary-bordered" @click="router.push({ name: 'fund', query: { tab: 'buyCrypto' } })"> {{ t('buyCrypto') }} </a>
        </div>
        <div class="mc-b">
          <a href="#">
            <img :src="getAssetsFile('payment/mastercard.png')" />
          </a>
          <a href="#">
            <img :src="getAssetsFile('payment/visa.png')" />
          </a>
          <a href="#">
            <img :src="getAssetsFile('payment/samsung_pay.png')" />
          </a>
          <a href="#">
            <img :src="getAssetsFile('payment/google_pay.png')" />
          </a>
          <a href="#">
            <img :src="getAssetsFile('payment/apple_pay.png')" />
          </a>
        </div>
      </nav>

      <!-- 排行榜数据 -->
      <nav class="m-win">
        <div class="mw-menu">
          <span :class="{ active: rankTab == 'sport' }" @click="rankTab = 'sport'">{{ t('sportsBet') }}</span>
          <span :class="{ active: rankTab == 'casino' }" @click="rankTab = 'casino'">{{ t('liveCasinoBet') }}</span>
          <span :class="{ active: rankTab == 'slots' }" @click="rankTab = 'slots'">{{ t('slotBet') }}</span>
        </div>
        <table class="mw-list">
          <thead>
            <tr>
              <th>{{ t('gameBig') }}</th>
              <th>{{ t('userBig') }}</th>
              <th>{{ t('payoutBig') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of rankList[rankTab]" :key="index" @click="rankBetDetails(item)">
              <td>{{ item.gameName }}</td>
              <td>
                <template v-if="item.memberuserName == ''">
                  <span class="sp-user"><img :src="getAssetsFile('svg/tb_user.svg')" /></span>{{ t('invisibility') }}
                </template>
                <template v-else>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>{{ item.memberuserName }}
                </template>
              </td>
              <td>{{ moneyFormat(item.winAmount) }}</td>
            </tr>
          </tbody>
        </table>
      </nav>

      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />

    <!-- 排行榜投注详情 -->
    <div v-show="showBetDetailsBox" class="mask-box">
      <div class="mb-bd">
        <div class="win-bet">
          <div class="wb-head">
            <label><i class="iconfont icon-bets" />{{ t('bets') }}</label>
            <span class="icon-btn" @click="showBetDetailsBox = false">
              <i class="iconfont icon-close" />
            </span>
          </div>
          <div class="wb-cont">
            <h2>{{ betDetailsItem.gameName }}</h2>
            <h2>ID {{ betDetailsItem.orderId }}</h2>
            <p>
              {{ t('betUser') }}：
              <template v-if="betDetailsItem.memberuserName == ''">
                <img :src="getAssetsFile('svg/tb_user.svg')" />
                {{ t('invisibility') }}
              </template>
              <template v-else>
                <i class="iconfont icon-user_full" />
                {{ betDetailsItem.memberuserName }}
              </template>
            </p>
            <p>{{ t('at') }} {{ betDetailsItem.betTime.replace('T', ' ') }}</p>
            <div class="b-info">
              <p>{{ t('bets') }}</p>
              <h3>{{ moneyFormat(betDetailsItem.betAmount) }}<img :src="getAssetsFile('payment/tether.png')" /></h3>
              <p>{{ t('multiplier') }}</p>
              <h3>{{ betDetailsItem.winRate }}x</h3>
              <p>{{ t('paymentAmount') }}</p>
              <h4>{{ moneyFormat(betDetailsItem.winAmount) }}<img :src="getAssetsFile('payment/tether.png')" /></h4>
            </div>
            <div class="b-gm">
              <a @click="startGame(betDetailsItem.gameId)">{{ t('goto') }} {{ betDetailsItem.gameName }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="newRewardVipCode != 0" class="popup-new-reward">
      <div class="close"><i class="iconfont icon-close" /></div>
      <div class="pnr-top">
        <img :src="getAssetsFile(`grade/${newRewardVipCode}.png`)" />
        <h3>{{ t('unlockNewReward') }}</h3>
      </div>
      <div class="pnr-cont" @click="router.push({ name: 'clubHouse' })">{{ t('unlockNewRewardTip') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue自带
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// 自定义组件
import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

// 引用方法
import { getAnnouncementListApi, getBannerApi, getRemindApi } from '@/api/app/index'
import { getBannerRespItem } from '@/api/app/types'
import { getRankListApi } from '@/api/game/index'
import { getRankListRespItem } from '@/api/game/types'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, moneyFormat, loginTo } from '@/utils'
import { startGame } from '@/composables/startGame'
import { getExchangeRate } from '@/composables/getExchangeRate'

//第三方插件
import { useI18n } from 'vue-i18n'
import { Swipe, SwipeItem, NoticeBar, ConfigProvider } from 'vant'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const { t } = useI18n()

const newRewardVipCode = ref(0)

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 跑马灯内容
let marqueeContent = ref('')

// 首页swiper 和下面banner
let swipeImg = ref<getBannerRespItem[]>([])
let bannerImg = ref<getBannerRespItem[]>([])

// 排行榜列表数据
let rankList = reactive({
  sport: [],
  casino: [],
  slots: []
})
// 显示排行榜列表投注详情
let showBetDetailsBox = ref(false)
let betDetailsItem = reactive<getRankListRespItem>({
  roundId: '',
  orderId: '',
  memberuserName: '',
  gameName: '',
  betTime: '',
  winAmount: '',
  gameType: 0,
  betAmount: '',
  winRate: '',
  providerId: '',
  providerCode: '',
  gameCode: '',
  gameId: ''
})

// 排行表切换
let rankTab = ref('sport')
// 排行榜列表
const getRankList = () => {
  getRankListApi()
    .then((resp) => {
      Object.assign(rankList, resp.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

// 排行榜投注详情
const rankBetDetails = (item: any) => {
  Object.assign(betDetailsItem, item)
  showBetDetailsBox.value = true
}

// 获取首页Banner
const getBanner = () => {
  getBannerApi()
    .then((resp) => {
      swipeImg.value = resp.data.filter((item) => item.positionCode == '101')
      bannerImg.value = resp.data.filter((item) => item.positionCode == '102')
    })
    .catch((error) => {
      console.log(error)
    })
}

// 获取首页跑马灯
const getAnnouncementList = () => {
  getAnnouncementListApi({ PageIndex: 1, PageSize: 3 })
    .then((resp) => {
      marqueeContent.value = resp.data!.items.reduce((notice, item) => {
        return notice + '  ' + item.content
      }, '')
    })
    .catch((error) => {
      console.log(error)
    })
}

// 解锁新奖励，弹窗提醒
const getRemind = () => {
  if (userStore.userInfo.id == '') {
    newRewardVipCode.value = 0
    return false
  }
  getRemindApi()
    .then((resp) => {
      newRewardVipCode.value = parseFloat(resp.data.vipCode)
    })
    .catch((error) => {
      console.log(error)
    })
}

getBanner()
getAnnouncementList()
getRankList()
getRemind()
</script>

<style>
.my-swipe {
  height: 100%;
}
</style>
