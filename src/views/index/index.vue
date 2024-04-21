<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab />

      <!-- swiper图片 -->
      <nav v-if="swipeImg.length > 0" class="swiper m-banner">
        <Swipe :autoplay="3500" class="my-swipe">
          <SwipeItem v-for="(item, index) of swipeImg" :key="index" v-lazy:background-image="appStore.cdnurl + item.imageName" @click="routeTo(item)" />
        </Swipe>
      </nav>

      <!-- 跑马灯开始 -->
      <ConfigProvider theme="dark">
        <NoticeBar :speed="30" left-icon="volume-o" :text="marqueeContent" @click="loginTo('message')" />
      </ConfigProvider>

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

      <div class="index-slide-tab">
        <div class="st-head">
          <div class="sh-l">
            <img :src="getAssetsFile('svg/most-popular.svg')" />
            <h3>{{ t('seabetGame') }}</h3>
          </div>
          <div class="sh-r">
            <div class="slide-btns">
              <span @click="navSlide(popularSwiper, 'prev', $event)" class="on"><i class="iconfont icon-return" /></span>
              <span @click="navSlide(popularSwiper, 'next', $event)"><i class="iconfont icon-enter" /></span>
            </div>
          </div>
        </div>
        <div class="st-cont">
          <div v-if="gameListLoading">
            <div class="load-box">
              <div class="lb-gamebox">
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="gamebox swiper-popular">
            <div class="g-list swiper-wrapper">
              <div v-for="(item, index) of hotGameList" :key="index" class="swiper-slide item" @click.stop="startGame(item.gameItemId, item.gameType)">
                <div class="i-bd">
                  <div class="i-img">
                    <img v-lazy="`https://seabet.imgix.net/${item.imageName}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                  </div>
                  <div class="i-txt">
                    <strong>{{ item.gameName }}</strong>
                    <span>{{ item.providerName }}</span>
                  </div>
                </div>
              </div>
              <div v-if="hotGameList.length > 0" class="swiper-slide item" @click="router.push({ name: 'slots' })">
                <div class="i-bd">
                  <div class="i-img last" v-lazy:background-image="getAssetsFile('other/seeAll.jpg')" />
                  <div class="i-all-btns">
                    <div class="ib-bd">{{ t('viewAll') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-slide-tab">
        <div class="st-head">
          <div class="sh-l">
            <img :src="getAssetsFile('svg/slots-icon.svg')" />
            <h3>{{ t('slots') }}</h3>
          </div>
          <div class="sh-r">
            <div class="slide-btns">
              <span @click="navSlide(slotSwiper, 'prev', $event)" class="on"><i class="iconfont icon-return" /></span>
              <span @click="navSlide(slotSwiper, 'next', $event)"><i class="iconfont icon-enter" /></span>
            </div>
          </div>
        </div>
        <div class="st-cont">
          <div v-if="gameListLoading">
            <div class="load-box">
              <div class="lb-gamebox">
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="gamebox swiper-slot">
            <div class="g-list swiper-wrapper">
              <div v-for="(item, index) of slotGameList" :key="index" class="swiper-slide item" @click.stop="startGame(item.gameItemId, item.gameType)">
                <div class="i-bd">
                  <div class="i-img">
                    <img v-lazy="`https://seabet.imgix.net/${item.imageName}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                  </div>
                  <div class="i-txt">
                    <strong>{{ item.gameName }}</strong>
                    <span>{{ item.providerName }}</span>
                  </div>
                </div>
              </div>
              <div v-if="slotGameList.length > 0" class="swiper-slide item" @click="router.push({ name: 'slots' })">
                <div class="i-bd">
                  <div class="i-img last" v-lazy:background-image="getAssetsFile('other/seeAll.jpg')" />
                  <div class="i-all-btns">
                    <div class="ib-bd">{{ t('viewAll') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-slide-tab">
        <div class="st-head">
          <div class="sh-l">
            <img :src="getAssetsFile('svg/game-provider.svg')" />
            <h3>{{ t('gameProviders') }}</h3>
          </div>
          <div class="sh-r">
            <div class="slide-btns">
              <span @click="navSlide(providerSwiper, 'prev', $event)" class="on"><i class="iconfont icon-return" /></span>
              <span @click="navSlide(providerSwiper, 'next', $event)"><i class="iconfont icon-enter" /></span>
            </div>
          </div>
        </div>
        <div class="st-cont">
          <!--骨架loading-->
          <div v-if="gameListLoading" class="load-box">
            <div class="lb-providerbox">
              <div class="lb-s"><span /><label /></div>
              <div class="lb-s"><span /><label /></div>
              <div class="lb-s"><span /><label /></div>
            </div>
          </div>
          <div v-else class="gamebox swiper-provider">
            <div class="provider-box swiper-wrapper">
              <div v-for="(item, index) of providerList" :key="index" class="swiper-slide item" @click="router.push({ name: item.tab, query: { providerId: item.id } })">
                <img class="provider-img" :src="item.indexImg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-slide-tab">
        <div class="st-head">
          <div class="sh-l">
            <img :src="getAssetsFile('svg/live-casino.svg')" />
            <h3>{{ t('liveCasino') }}</h3>
          </div>
          <div class="sh-r">
            <div class="slide-btns">
              <span @click="navSlide(casinoSwiper, 'prev', $event)" class="on"><i class="iconfont icon-return" /></span>
              <span @click="navSlide(casinoSwiper, 'next', $event)"><i class="iconfont icon-enter" /></span>
            </div>
          </div>
        </div>
        <div class="st-cont">
          <div v-if="gameListLoading">
            <div class="load-box">
              <div class="lb-gamebox">
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
                <div class="lb-item">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="gamebox swiper-casino">
            <div class="g-list swiper-wrapper">
              <div v-for="(item, index) of casinoGameList" :key="index" class="swiper-slide item" @click.stop="startGame(item.gameItemId, item.gameType)">
                <div class="i-bd">
                  <div class="i-img">
                    <img v-lazy="`https://seabet.imgix.net/${item.imageName}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                  </div>
                  <div class="i-txt">
                    <strong>{{ item.gameName }}</strong>
                    <span>{{ item.providerName }}</span>
                  </div>
                </div>
              </div>
              <div v-if="casinoGameList.length > 0" class="swiper-slide item" @click="router.push({ name: 'casino' })">
                <div class="i-bd">
                  <div class="i-img last" v-lazy:background-image="getAssetsFile('other/seeAll.jpg')" />
                  <div class="i-all-btns">
                    <div class="ib-bd">{{ t('viewAll') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <span class="sp-user"><img :src="getAssetsFile('svg/tb_user.svg')" /></span>
                  {{ t('invisibility') }}
                </template>
                <template v-else>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>
                  {{ item.memberuserName }}
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
              <a @click="startGame(betDetailsItem.gameId, betDetailsItem.gameType)">{{ t('goto') }} {{ betDetailsItem.gameName }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="newRewardVipCode != 0" class="popup-new-reward" @click.stop="router.push({ name: 'clubHouse' })">
      <div class="close" @click.stop="newRewardVipCode = 0"><i class="iconfont icon-close" /></div>
      <div class="pnr-top">
        <img :src="getAssetsFile(`grade/${newRewardVipCode}.png`)" />
        <h3>{{ t('unlockNewReward') }}</h3>
      </div>
      <div class="pnr-cont">{{ t('unlockNewRewardTip') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue自带
import { ref, reactive, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
// 自定义组件
import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

// 引用方法
import { getAnnouncementListApi, getBannerApi, getRemindApi, getGameListApi } from '@/api/app/index'
import { getBannerRespItem, getGameListRespItem } from '@/api/app/types'
import { getRankListApi } from '@/api/game/index'
import { getRankListRespItem } from '@/api/game/types'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, moneyFormat, loginTo } from '@/utils'
import { getExchangeRate } from '@/composables/getExchangeRate'
import { providerListData } from '@/utils/config'

//第三方插件
import { useI18n } from 'vue-i18n'
import { Swipe, SwipeItem, NoticeBar, ConfigProvider } from 'vant'
import { startGame } from '@/composables/startGame'
import { PlatForm } from '@/utils/constant'
import { orderBy } from 'lodash-es'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const providerList = orderBy(providerListData(), 'indexSort', 'asc')
const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const { t } = useI18n()

const newRewardVipCode = ref(0)

const refreshRankTimer = ref(0)
const refreshRemindTimer = ref(0)
// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 跑马灯内容
let marqueeContent = ref('')

// 首页swiper 和下面banner
let swipeImg = ref<getBannerRespItem[]>([])
let bannerImg = ref<getBannerRespItem[]>([])

// 游戏swiper
let popularSwiper = ref<any>(null)
let slotSwiper = ref<any>(null)
let casinoSwiper = ref<any>(null)
let providerSwiper = ref<any>(null)

// 首页游戏列表
const gameListLoading = ref(false)
const hotGameList = ref<getGameListRespItem[]>([])
const slotGameList = ref<getGameListRespItem[]>([])
const casinoGameList = ref<getGameListRespItem[]>([])

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
  getBannerApi({ platform: PlatForm.H5 })
    .then((resp) => {
      swipeImg.value = resp.data.filter((item) => item.positionCode == '101')
      bannerImg.value = resp.data.filter((item) => item.positionCode == '102')
    })
    .catch((error) => {
      console.log(error)
    })
}

// 点击banner跳转
const routeTo = (item: getBannerRespItem) => {
  if (item.targetUrl == '') {
    return false
  }
  if (item.targetUrl && (item.targetUrl.indexOf('http') > -1 || item.targetUrl.indexOf('https') > -1)) {
    window.open(item.targetUrl)
  } else {
    if (item.targetUrl.indexOf('gameType') > -1 && item.targetUrl.indexOf('providerId') > -1) {
      const params = new URLSearchParams(item.targetUrl)
      // routeToGame(params.get('gameType'), params.get('providerId'))
      //@ts-ignore
      router.push({ name: params.get('gameType'), query: { providerId: params.get('providerId') } })
      // appStore.showSideBar = !appStore.showSideBar
    } else {
      router.push({ path: item.targetUrl })
    }
  }
}

// 获取首页跑马灯
const getAnnouncementList = () => {
  getAnnouncementListApi({ PageIndex: 1, PageSize: 3 })
    .then((resp) => {
      marqueeContent.value = resp.data!.items.reduce((notice, item, index) => {
        return notice + (index + 1) + '. ' + item.content + '. '
      }, '')
    })
    .catch((error) => {
      console.log(error)
    })
}

// 获取首页游戏列表
const getGameList = () => {
  gameListLoading.value = true
  getGameListApi({ id: 0, platform: PlatForm.H5 })
    .then((resp) => {
      hotGameList.value = resp.data.hot
      slotGameList.value = resp.data.slot
      casinoGameList.value = resp.data.casino
      gameListLoading.value = false
      // 初始化banner
      nextTick(() => {
        popularSwiper.value = new Swiper('.swiper-popular', {
          spaceBetween: 8,
          slidesPerView: 'auto',
          slidesPerGroup: 3
        })

        slotSwiper.value = new Swiper('.swiper-slot', {
          spaceBetween: 8,
          slidesPerView: 3,
          slidesPerGroup: 3
        })

        casinoSwiper.value = new Swiper('.swiper-casino', {
          spaceBetween: 8,
          slidesPerView: 3,
          slidesPerGroup: 3
        })

        providerSwiper.value = new Swiper('.swiper-provider', {
          spaceBetween: 8,
          slidesPerView: 3,
          slidesPerGroup: 3
        })
      })
    })
    .catch((error) => {
      gameListLoading.value = false
      console.log(error)
    })
}

// 首页游戏翻页
const navSlide = (swiper: any, mode = 'next', e: any) => {
  nextTick(() => {
    if (mode == 'next') {
      swiper.slideNext()
      if (swiper.isEnd) {
        e.currentTarget.className = 'on'
      } else {
        e.currentTarget.classList.remove('on')
      }
      e.currentTarget.previousElementSibling.classList.remove('on')
    } else {
      swiper.slidePrev()
      if (swiper.isBeginning) {
        e.currentTarget.className = 'on'
      } else {
        e.currentTarget.classList.remove('on')
      }
      e.currentTarget.nextSibling.classList.remove('on')
    }
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
getGameList()

if (refreshRankTimer.value && refreshRankTimer.value > 0) {
  window.clearInterval(refreshRankTimer.value)
}
refreshRankTimer.value = window.setInterval(() => {
  getRankList()
}, 10 * 1000)

if (refreshRemindTimer.value && refreshRemindTimer.value > 0) {
  window.clearInterval(refreshRemindTimer.value)
}
refreshRemindTimer.value = window.setInterval(() => {
  getRemind()
}, 30 * 1000)

onBeforeUnmount(() => {
  if (refreshRankTimer.value && refreshRankTimer.value > 0) {
    window.clearInterval(refreshRankTimer.value)
  }
  if (refreshRemindTimer.value && refreshRemindTimer.value > 0) {
    window.clearInterval(refreshRemindTimer.value)
  }
})
</script>

<style>
.my-swipe {
  height: 100%;
}
</style>
