<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab tab="sports" />
      <!-- 体育 -->
      <div class="sports-box">
        <div class="sb-a">
          <div class="item">
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/seabetSport.svg')" />{{ t('provider.btiSports') }}</div>
              <div class="ir-b">{{ t('btiSportIntro') }}</div>
              <div class="ir-c">
                <div class="currency" @click.prevent="currencySeabetBox()">
                  <span>{{ seabetCurrency }}</span>
                  <i class="iconfont icon-down" />
                </div>
                <a class="btn btn-primary" @click="startGame('2110', GameType.Sports)">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/SabaSports.svg')" />{{ t('provider.sabaSports') }}</div>
              <div class="ir-b">{{ t('sabaSportIntro') }}</div>
              <div class="ir-c">
                <div class="currency" @click.prevent="currencySabaBox()">
                  <span>{{ sabaCurrency }}</span>
                  <i class="iconfont icon-down" />
                </div>
                <a class="btn btn-primary" @click="startGame('1439', GameType.Sports)">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <ConfigProvider theme="dark">
      <Popup v-model:show="showSeabetCurrencyBox" position="bottom" round :closeable="true">
        <div class="picker-box">
          <div class="pb-title">{{ t('gameCurrency') }}</div>
          <ul>
            <li v-for="(item, index) of sortedSeabetCurrencyCode" :key="index" @click="confirmSeabetCurreny(item)">
              <span>{{ item }}</span>
              <Icon v-if="item == seabetCurrency" name="success" class="active" />
              <Icon v-else />
            </li>
          </ul>
        </div>
      </Popup>

      <Popup v-model:show="showSabaCurrencyBox" position="bottom" round :closeable="true">
        <div class="picker-box">
          <div class="pb-title">{{ t('gameCurrency') }}</div>
          <ul>
            <li v-for="(item, index) of sortedSabaCurrencyCode" :key="index" @click="confirmSabaCurreny(item)">
              <span>{{ item }}</span>
              <Icon v-if="item == sabaCurrency" name="success" class="active" />
              <Icon v-else />
            </li>
          </ul>
        </div>
      </Popup>
    </ConfigProvider>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'
import { getAssetsFile } from '@/utils'
import { startGame } from '@/composables/startGame'

import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getExchangeRate } from '@/composables/getExchangeRate'
import { GameType, PlatForm } from '@/utils/constant'

import { getGameDetailsApi, setGameDefaultCurrency } from '@/api/game/index'
import { getGameDetailsRespItem } from '@/api/game/types'
import { ConfigProvider, Popup, Icon } from 'vant'
import router from '@/router'

const userStore = useUserStore()
const appStore = useAppStore()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

const currencyCodeSort = ref(['USD', 'USDT', 'JPY', 'INR', 'EUR', 'CNY', 'KRW', 'THB', 'BRL', 'MYR', 'VND', 'PHP', 'IDR'])
const sortedSeabetCurrencyCode = ref([])
const sortedSabaCurrencyCode = ref([])
const showSeabetCurrencyBox = ref(false)
const showSabaCurrencyBox = ref(false)
const seabetCurrency = ref('')
const sabaCurrency = ref('')

// 获取体育详情
const seabetDetailsData = reactive<getGameDetailsRespItem>({
  currencyCode: '',
  currencyCodes: [],
  gameCurrency: null,
  defaultRTPName: '',
  volatility: '',
  lines: '',
  minBetAmount: '',
  maxBetAmount: '',
  gameType: '',
  providerCode: '',
  providerId: '',
  providerName: '',
  name: '',
  id: '',
  imageName: '',
  game: [],
  hitRatio: '',
  paylines: '',
  fg: false
})
const sabaDetailsData = reactive<getGameDetailsRespItem>({
  currencyCode: '',
  currencyCodes: [],
  gameCurrency: null,
  defaultRTPName: '',
  volatility: '',
  lines: '',
  minBetAmount: '',
  maxBetAmount: '',
  gameType: '',
  providerCode: '',
  providerId: '',
  providerName: '',
  name: '',
  id: '',
  imageName: '',
  game: [],
  hitRatio: '',
  paylines: '',
  fg: false
})

const getSeabetGameDetails = () => {
  getGameDetailsApi({ Id: '2110', platform: PlatForm.H5 })
    .then((resp) => {
      Object.assign(seabetDetailsData, resp.data)
      if (seabetDetailsData.currencyCodes.length > 0) {
        //@ts-ignore
        sortedSeabetCurrencyCode.value = currencyCodeSort.value.filter((items) => seabetDetailsData.currencyCodes.some((item) => item == items))
      }

      // 如果游戏支持的币种与默认币种一致， 则设置显示为默认币种， 否则设置显示为usd或者USDT
      if (seabetDetailsData.gameCurrency != null && seabetDetailsData.currencyCodes.includes(seabetDetailsData.gameCurrency)) {
        seabetCurrency.value = seabetDetailsData.gameCurrency
      } else {
        if (seabetDetailsData.currencyCodes.includes('USD')) {
          seabetCurrency.value = 'USD'
        }
        if (seabetDetailsData.currencyCodes.includes('USDT')) {
          seabetCurrency.value = 'USDT'
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const getSabaGameDetails = () => {
  getGameDetailsApi({ Id: '1439', platform: PlatForm.H5 })
    .then((resp) => {
      Object.assign(sabaDetailsData, resp.data)
      if (sabaDetailsData.currencyCodes.length > 0) {
        //@ts-ignore
        sortedSabaCurrencyCode.value = currencyCodeSort.value.filter((items) => sabaDetailsData.currencyCodes.some((item) => item == items))
      }

      // 如果游戏支持的币种与默认币种一致， 则设置显示为默认币种， 否则设置显示为usd或者USDT
      if (sabaDetailsData.gameCurrency != null && sabaDetailsData.currencyCodes.includes(sabaDetailsData.gameCurrency)) {
        sabaCurrency.value = sabaDetailsData.gameCurrency
      } else {
        if (sabaDetailsData.currencyCodes.includes('USD')) {
          sabaCurrency.value = 'USD'
        }
        if (sabaDetailsData.currencyCodes.includes('USDT')) {
          sabaCurrency.value = 'USDT'
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 切换币种
const confirmSeabetCurreny = (currency: string) => {
  seabetCurrency.value = currency
  setGameDefaultCurrency({ currency: currency })
    .then(() => {
      showSeabetCurrencyBox.value = false
      getSeabetGameDetails()
    })
    .catch((error) => {
      console.log(error)
    })
}

// 切换币种
const confirmSabaCurreny = (currency: string) => {
  sabaCurrency.value = currency
  setGameDefaultCurrency({ currency: currency })
    .then(() => {
      showSabaCurrencyBox.value = false
      getSabaGameDetails()
    })
    .catch((error) => {
      console.log(error)
    })
}

const currencySeabetBox = () => {
  if (userStore.userInfo.id) {
    showSeabetCurrencyBox.value = true
  } else {
    router.push({ name: 'login' })
  }
}

const currencySabaBox = () => {
  if (userStore.userInfo.id) {
    showSabaCurrencyBox.value = true
  } else {
    router.push({ name: 'login' })
  }
}

getSabaGameDetails()
getSeabetGameDetails()
</script>
