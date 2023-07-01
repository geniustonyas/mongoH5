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
                <span>{{ userStore.userInfo?.balance }}</span>
                {{ userStore.userInfo?.defaultCurrencyCode == 'btc' ? userStore.userInfo?.btcUnit?.currencyUnit : userStore.userInfo?.defaultCurrencyCode }}
              </a>
            </div>
          </template>
        </div>
        <div class="hm-r">
          <template v-if="userStore.userInfo.id">
            <a class="icon-btn" @click="router.push({ name: 'message' })">
              <i class="iconfont icon-message" />
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
          <Swipe :autoplay="3500" class="my-swipe" lazy-render>
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
        <nav class="m-notice">
          <span class="mn-icon">
            <i class="iconfont icon-notice" />
          </span>
          <div class="mn-txt">
            <marquee align="left" behavior="scroll" width="100%" loop="-1" scrollamount="7" scrolldelay="180" onmouseout="this.start()" onmouseover="this.stop()" id="announcement-box">
              1、Promotional betting round starts 12:00 SET 10 May.Allow for some time. 2、Promotional betting round starts 12:00 SET 10 May.Allow for some time. 3、Promotional betting round starts
              12:00 SET 10 May.Allow for some time.
            </marquee>
          </div>
        </nav>
        <nav class="m-card">
          <div class="mc-t">
            <div class="mt-l">
              <b>Global Payment Solutions</b>
              <p>Cryptocurrency &<br />Other Popular Payment Gateways</p>
            </div>
            <a class="btn btn-primary-bordered"> Buy CryPto </a>
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
            <span class="active">Sports Bet</span>
            <span>Live Casino Bet</span>
            <span>Slots Bet</span>
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
                  <select class="form-control">
                    <option>All Game Providers</option>
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <select class="form-control">
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div :class="gridShow ? 'g-list' : 'g-list row'">
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game1.jpg')" />
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
                  <img :src="getAssetsFile('game/game2.jpg')" />
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
                  <img :src="getAssetsFile('game/game3.jpg')" />
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
                  <img :src="getAssetsFile('game/game4.jpg')" />
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
                  <img :src="getAssetsFile('game/game5.jpg')" />
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
                  <img :src="getAssetsFile('game/game6.jpg')" />
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
                  <img :src="getAssetsFile('game/game7.jpg')" />
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
                  <img :src="getAssetsFile('game/game8.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
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
              <div class="gh-b optstion" v-show="showGameOption">
                <div class="form-row">
                  <label class="form-label">Providers</label>
                  <select class="form-control">
                    <option>All Game Providers</option>
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <select class="form-control">
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div :class="gridShow ? 'g-list' : 'g-list row'">
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game9.jpg')" />
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
                  <img :src="getAssetsFile('game/game8.jpg')" />
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
                  <img :src="getAssetsFile('game/game7.jpg')" />
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
                  <img :src="getAssetsFile('game/game6.jpg')" />
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
                  <img :src="getAssetsFile('game/game5.jpg')" />
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
                  <img :src="getAssetsFile('game/game4.jpg')" />
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
                  <img :src="getAssetsFile('game/game3.jpg')" />
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
                  <img :src="getAssetsFile('game/game2.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <nav class="m-rate">1<b>BTC</b>=25,006,02<b>EUR</b></nav>
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
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
// vue自带
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 自定义组件
// import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'
// 引用方法
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile } from '@/utils'
//第三方插件
import { useI18n } from 'vue-i18n'
import { Swipe, SwipeItem } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import 'vant/es/swipe/style'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()
// 切换tab选项卡
let tab = ref('sports')
// 显示游戏筛选
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)

// 切换选项卡
const toggleTab = (tabs: string) => {
  tab.value = tabs
  showGameOption.value = false
}
</script>

<style>
.my-swipe {
  height: 100%;
}
</style>
