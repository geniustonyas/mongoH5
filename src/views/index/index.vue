<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <header class="header">
      <nav class="head-menu">
        <div class="hm-l">
          <a @click="appStore.showSideBar = !appStore.showSideBar" class="icon-btn navbar-left">
            <i class="iconfont icon-zhedie1" />
          </a>
        </div>
        <div class="hm-m">
          <template v-if="userStore.userInfo.id">
            <div class="user-info" @click="router.push({ name: 'fund' })">
              <b>{{ userStore.userInfo.userName }}</b>
              <a>
                <label>+</label>
                <span>{{ moneyFormat(userStore.userInfo?.balance) }}</span>
                {{ userStore.userInfo?.defaultCurrencyCode == 'btc' ? userStore.userInfo?.btcUnit?.currencyUnit : userStore.userInfo?.defaultCurrencyCode }}
              </a>
            </div>
          </template>
        </div>
        <div class="hm-r">
          <template v-if="userStore.userInfo.id">
            <a class="icon-btn" @click="router.push({ name: 'message' })">
              <i class="iconfont icon-message" />
              <em v-if="userStore.newMessageCount > 0" class="badge" />
            </a>
          </template>
          <template v-else>
            <a class="btn" @click="router.push({ name: 'reg' })">{{ t('reg') }}</a>
            <a class="btn btn-primary" @click="router.push({ name: 'login' })">{{ t('login') }}</a>
          </template>
        </div>
      </nav>
    </header>
    <main class="main">
      <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </nav>
      <nav class="m-menu">
        <a @click="toggleTab('sports')"> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }}</a>
        <a :class="{ active: tab == 'livecasino' }" @click="toggleTab('livecasino')"> <img :src="getAssetsFile('svg/livecasino.svg')" />{{ t('liveCasino') }}</a>
        <a :class="{ active: tab == 'slots' }" @click="toggleTab('slots')"> <img :src="getAssetsFile('svg/slots.svg')" />{{ t('slots') }} </a>
      </nav>

      <div v-show="tab == 'sports'">
        <nav class="swiper m-banner">
          <Swipe :autoplay="3500" class="my-swipe">
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-1.jpg')">
              <div class="t-cont">
                <h2>$100 FREE</h2>
                <h2>Bonus Round</h2>
                <p>with every referral done</p>
              </div>
            </SwipeItem>
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-2.jpg')" />
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-3.jpg')" />
          </Swipe>
          <!-- <div class="swiper-wrapper">
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-1.jpg')">
              <div class="t-cont">
                <h2>$100 FREE</h2>
                <h2>Bonus Round</h2>
                <p>with every referral done</p>
              </div>
            </div>
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-2.jpg')">Slide 2</div>
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-3.jpg')">Slide 3</div>
          </div>
          <div class="swiper-pagination" /> -->
        </nav>
        <!-- <NoticeBar left-icon="volume-o" :text="marqueeContent" /> -->
        <nav class="m-notice">
          <span class="mn-icon">
            <i class="iconfont icon-notice" />
          </span>
          <div class="mn-txt">
            <marquee align="left" behavior="scroll" width="100%" loop="-1" scrollamount="7" scrolldelay="180" onmouseout="this.start()" onmouseover="this.stop()" id="announcement-box">
              {{ marqueeContent }}
            </marquee>
          </div>
        </nav>
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
        <nav class="m-win">
          <div class="mw-menu">
            <span class="active">{{ t('sportsBet') }}</span>
            <span>{{ t('liveCasinoBet') }}</span>
            <span>{{ t('slotBet') }}</span>
          </div>
          <table class="mw-list">
            <thead>
              <tr>
                <th>GAME</th>
                <th>USER</th>
                <th>PAYOUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>

      <div v-show="tab == 'livecasino'">
        <nav class="gamebox">
          <div class="g-head">
            <div class="gh-t">
              <div class="gh-l">Live Casino</div>
              <div class="gh-r">
                <span class="btn btn-light optgame" @click="gridShow = !gridShow">
                  <i class="iconfont icon-caidan2" />
                </span>
                <span class="btn btn-light optbtn" @click="showGameOption = !showGameOption">
                  <i class="iconfont icon-tiaozheng" />
                </span>
              </div>
            </div>
            <Vue3SlideUpDown v-model="showGameOption">
              <div class="gh-b optstion">
                <div class="form-row">
                  <label class="form-label">Providers</label>
                  <ConfigProvider theme="dark">
                    <DropdownMenu v-if="pslist.length > 0" direction="down">
                      <DropdownItem title="All Game Providers" ref="currenyDom">
                        <div class="drop-item" v-for="(item, index) of pslist" :key="index" @click="selGameProvider(item)">
                          <span :class="{ active: query.ps.includes(parseInt(item.id)) }">{{ item.name }}({{ item.count }})</span>
                          <Icon name="success" :class="{ active: query.ps.includes(parseInt(item.id)) }" />
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </ConfigProvider>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <ConfigProvider theme="dark">
                    <DropdownMenu v-if="pslist.length > 0" direction="down">
                      <DropdownItem v-model="query.sortBy" :options="sortBy" @change="sortGame()" />
                    </DropdownMenu>
                  </ConfigProvider>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div v-if="dataList.length > 0" :class="gridShow ? 'g-list' : 'g-list row'">
            <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item)">
              <div class="i-bd">
                <div class="i-img">
                  <img v-lazy="appStore.cdnurl + item.img" />
                  <!-- <span class="red">FEATURED</span> -->
                </div>
                <div class="i-txt">
                  <strong>{{ item.name }}</strong>
                  <!-- <span>{{ item.pname }}</span> -->
                </div>
              </div>
            </div>
          </div>
          <div v-if="pageCount > 0" class="g-btn">
            <a :class="query.page >= pageCount ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="loadMore()">加载更多</a>
          </div>
        </nav>
      </div>

      <div v-show="tab == 'slots'">
        <nav class="gamebox">
          <div class="g-head">
            <div class="gh-t">
              <div class="gh-l">Slots</div>
              <div class="gh-r">
                <span class="btn btn-light optgame" @click="gridShow = !gridShow">
                  <i class="iconfont icon-caidan2" />
                </span>
                <span class="btn btn-light optbtn" @click="showGameOption = !showGameOption">
                  <i class="iconfont icon-tiaozheng" />
                </span>
              </div>
            </div>
            <Vue3SlideUpDown v-model="showGameOption">
              <div class="gh-b optstion">
                <div class="form-row">
                  <label class="form-label">Providers</label>
                  <ConfigProvider theme="dark">
                    <DropdownMenu v-if="pslist.length > 0" direction="down">
                      <DropdownItem title="All Game Providers" ref="currenyDom" teleport="body">
                        <div class="drop-item" v-for="(item, index) of pslist" :key="index" @click="selGameProvider(item)">
                          <span :class="{ active: query.ps.includes(parseInt(item.id)) }">{{ item.name }}({{ item.count }})</span>
                          <Icon name="success" :class="{ active: query.ps.includes(parseInt(item.id)) }" />
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </ConfigProvider>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <ConfigProvider theme="dark">
                    <DropdownMenu v-if="pslist.length > 0" direction="down">
                      <DropdownItem v-model="query.sortBy" :options="sortBy" @change="sortGame()" />
                    </DropdownMenu>
                  </ConfigProvider>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div v-if="dataList.length > 0" :class="gridShow ? 'g-list' : 'g-list row'">
            <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item)">
              <div class="i-bd">
                <div class="i-img">
                  <img v-lazy="appStore.cdnurl + item.img" />
                  <!-- <span class="red">FEATURED</span> -->
                </div>
                <div class="i-txt">
                  <strong>{{ item.name }}</strong>
                  <!-- <span>{{ item.pname }}</span> -->
                </div>
              </div>
            </div>
          </div>
          <div class="g-btn">
            <a :class="query.page >= pageCount ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="loadMore()">加载更多</a>
          </div>
        </nav>
      </div>

      <nav class="m-rate">
        1
        <b>{{ currencyCode }}</b>
        = {{ moneyFormat(cxchangeRate) }}
        <b>USDT</b>
      </nav>
      <nav class="m-term">
        <dl>
          <dt>Seabet</dt>
          <dd><a href="#">Promotions</a></dd>
          <dd><a href="#">VIP Club</a></dd>
          <dd><a href="#">Store</a></dd>
        </dl>
        <dl>
          <dt>Game</dt>
          <dd><a href="#">Sports</a></dd>
          <dd><a href="#">Live Casino</a></dd>
          <dd><a href="#">Slots</a></dd>
        </dl>
        <dl>
          <dt>About Us</dt>
          <dd>
            <a href="#">Rules & Terms <i class="iconfont icon-share" /></a>
          </dd>
          <dd><a href="#">Responsible Gambling</a></dd>
          <dd><a href="#">AML Policy</a></dd>
          <dd><a href="#">Self Exclusion</a></dd>
          <dd><a href="#">Privacy Policy</a></dd>
        </dl>
        <dl>
          <dt>Follow Us</dt>
          <dd>
            <a href="#">Facebook <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Twitter <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Instagram <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Youtube <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Tiktok <i class="iconfont icon-share" /></a>
          </dd>
        </dl>
        <dl>
          <dt>Support</dt>
          <dd><a href="#">Fairness</a></dd>
          <dd>
            <a href="#">Live Support <i class="iconfont icon-share" /></a>
          </dd>
          <dd><a href="#">Help Center</a></dd>
        </dl>
        <dl>
          <dt>Language</dt>
          <dd><a href="#">English</a></dd>
        </dl>
      </nav>
      <nav class="m-accepted">
        <dl>
          <dt>Cryptocurrencies Accepted</dt>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/btc.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/ltc.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/tether.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/eth.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/trx.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/cardano.svg')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/busd.svg')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/bnb.svg')" /></a>
          </dd>
        </dl>
      </nav>
      <nav class="m-security">
        <dl>
          <dt>Licences & Security</dt>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-1.svg')" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-2.svg')" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-3.svg')" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-4.svg')" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-5.svg')" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <img :src="getAssetsFile('svg/ls-6.svg')" />
            </a>
          </dd>
        </dl>
      </nav>
    </main>
    <Footer />
    <Sidebar :currency-code="currencyCode" :cxchange-rate="cxchangeRate" />
  </div>
</template>

<script setup lang="ts">
// vue自带
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// 自定义组件
// import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'
// 引用方法
import { getExchangeRateApi, getAnnouncementListApi } from '@/api/app/index'
import { getGameListItemResp, getGameListGsItemResp, getGameListData } from '@/api/game/types'
import { getGameListApi, getGameUrlApi } from '@/api/game/index'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, moneyFormat } from '@/utils'
//第三方插件
import { useI18n } from 'vue-i18n'
import { Swipe, SwipeItem, showToast, ConfigProvider, DropdownMenu, DropdownItem, Icon, showConfirmDialog } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const { t } = useI18n()
// 切换tab选项卡
let tab = ref('sports')
// 显示游戏筛选
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)
// 汇率相关
let currencyCode = ref('')
let cxchangeRate = ref('')
// 跑马灯工改
let marqueeContent = ref('')

//  选择的运营商
// let checkedProvider = ref([])
const sortBy = [
  { text: 'Polular', value: 3 },
  { text: 'A-Z', value: 1 },
  { text: 'RTP', value: 2 }
]

let query = reactive<getGameListData>({
  ps: [],
  cs: [],
  gts: [],
  ct: 1,
  sortBy: 3,
  page: 1
})

// 游戏列表页数
let pageCount = ref(0)
// 运营商分类
let pslist = ref<getGameListItemResp[]>([])
// 游戏分类-暂时没用
let cslist = ref<getGameListItemResp[]>([])
// 游戏列表
let dataList = ref<getGameListGsItemResp[]>([])

// 切换选项卡
const toggleTab = (tabs: string) => {
  tab.value = tabs
  showGameOption.value = false
  if (tabs == 'livecasino' || tabs == 'slots') {
    query.gts = tabs == 'livecasino' ? [2] : [3]
    query.page = 1
    query.sortBy = 3
    pageCount.value = 0
    pslist.value = []
    cslist.value = []
    dataList.value = []
    getGameList()
  }
}

// 获取汇率
const getExchangeRate = () => {
  getExchangeRateApi()
    .then((resp) => {
      currencyCode.value = resp.data[0].currencyCode
      cxchangeRate.value = resp.data[0].cxchangeRate
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

// 选择运营商
const selGameProvider = (item: getGameListItemResp) => {
  const index = query.ps.indexOf(parseInt(item.id))
  if (index > -1) {
    query.ps.splice(index, 1)
  } else {
    query.ps.push(parseInt(item.id))
  }
  query.page = 1
  dataList.value = []
  getGameList()
}

const sortGame = () => {
  query.page = 1
  dataList.value = []
  getGameList()
}

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

const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getGameList()
  } else {
    showToast(t('noMore'))
  }
}

const startGame = (game: getGameListGsItemResp) => {
  if (!userStore.userInfo.id) {
    showConfirmDialog({
      title: t('tips.noLogin'),
      message: t('tips.goLogin')
    })
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch(() => {
        return false
      })
  } else {
    getGameUrlApi({ id: game.id, platform: 1 })
      .then((resp) => {
        window.location.href = resp.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

getAnnouncementList()
getExchangeRate()
</script>

<style>
.my-swipe {
  height: 100%;
}
</style>
