<template>
  <div class="page">
    <CommonHeader :title="t('fundAccount')" />
    <main class="main">
      <div class="fund-box">
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">{{ t('activeBalance') }}</div>
            <div v-if="selCurrencyItem.name != ''" class="r-card">
              <div class="rc-l">
                <img :src="getAssetsFile(`coin/${selCurrencyItem.name.toLocaleLowerCase()}.svg`)" />
                <span>
                  <b>{{ selCurrencyItem.subtitle }}</b>
                  <small>{{ selCurrencyItem.name }}</small>
                </span>
              </div>
              <div class="rc-r" @click="showCurrencyItemBox = true">
                <span>
                  <b>{{ moneyFormat(selCurrencyItem.balance) }} {{ selCurrencyItem.unit }}</b>
                  <small>${{ moneyFormat(selCurrencyItem.usdAmount) }} US</small>
                </span>
                <i class="iconfont icon-down" />
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row">
          <div class="row-body">
            <div class="inner-tabs">
              <span :class="{ active: fundTab == 'deposit' }" @click="fundTab = 'deposit'">{{ t('deposit') }}</span>
              <span :class="{ active: fundTab == 'buyCrypto' }" @click="fundTab = 'buyCrypto'">{{ t('buyCrypto') }}</span>
              <span :class="{ active: fundTab == 'widthdraw' }" @click="fundTab = 'widthdraw'">{{ t('withdraw') }}</span>
            </div>
            <div v-show="fundTab == 'deposit'">
              <div class="r-title">{{ t('youDepositAddress') }}</div>
              <div class="r-group-card">
                <div v-show="selCurrencyItem.name == 'USDT'" class="gc-t" @click="showBlockChainBox = true">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="getAssetsFile('coin/usdt.svg')" />
                      <em><i :class="selBlockChainItem.icon" /></em>
                    </div>
                    <div class="t-txt">
                      <span>{{ selBlockChainItem.chainName }}</span>
                      <small>{{ selBlockChainItem.subtitle }}</small>
                    </div>
                  </div>
                  <div class="t-r">
                    <i class="iconfont icon-down" />
                  </div>
                </div>
                <div class="gc-m">
                  <template v-if="depositInfo.walletAddress != ''">
                    <Vue3SlideUpDown v-model="showDepositQrcode">
                      <div class="gc-mh">
                        <qrcode-vue :value="depositInfo.walletAddress" :size="150" level="H" />
                      </div>
                    </Vue3SlideUpDown>
                  </template>
                  <div class="gc-md">
                    <p>
                      1 USDT ≈ <span>US ${{ moneyFormat(depositInfo.exchangeRate) }}</span>
                    </p>
                    <p>
                      {{ t('minDepositAmount') }}:
                      <span>{{ moneyFormat(depositInfo.minDepositAmount) }} {{ depositInfo.currencyUnit }}</span>
                    </p>
                  </div>
                </div>
                <div class="gc-b">
                  <div class="b-l">
                    <small>{{ t('address') }}</small>
                    <span>{{ formatAddress(depositInfo.walletAddress) }}</span>
                  </div>
                  <div class="b-r">
                    <span @click="showDepositQrcode = !showDepositQrcode">
                      <i class="iconfont icon-saoyisaoerweima" />
                    </span>
                    <span class="copy" :data-clipboard-text="depositInfo.walletAddress">
                      <i class="iconfont icon-fuzhi" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="fundTab == 'buyCrypto'">
              <div class="r-group-card">
                <div class="bourse" @click="openBourse('https://www.binance.com/')">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="getAssetsFile('coin/binance_icon.svg')" />
                    </div>
                    <div class="t-txt">
                      <span class="t-name">Binance</span>
                      <span class="t-sub">{{ t('recommendExchange') }}</span>
                    </div>
                  </div>
                  <div class="t-r">
                    <i class="iconfont icon-right" />
                  </div>
                </div>
                <div class="bourse" @click="openBourse('https://bitflyer.com/')">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="getAssetsFile('coin/bitflyer_icon.svg')" />
                    </div>
                    <div class="t-txt">
                      <span class="t-name">Bitflyer</span>
                      <span class="t-sub" />
                    </div>
                  </div>
                  <div class="t-r">
                    <i class="iconfont icon-right" />
                  </div>
                </div>
              </div>
            </div>
            <div v-show="fundTab == 'widthdraw'">
              <div class="r-group-card">
                <div class="bourse" @click="router.push({ name: 'withdraw', query: { CurrencyCode: selCurrencyItem.name } })">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="getAssetsFile(`coin/${selCurrencyItem.name.toLocaleLowerCase()}.svg`)" />
                    </div>
                    <div class="t-txt">
                      <span class="t-name">{{ selCurrencyItem.name }}</span>
                      <span class="t-sub">{{ selCurrencyItem.name }} {{ t('withdraw') }}</span>
                    </div>
                  </div>
                  <div class="t-r">
                    <i class="iconfont icon-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">{{ t('quickTips') }}</div>
            <div class="r-card-txt">{{ t('quickTipCont') }}</div>
          </div>
        </div>
        <FundFooter />
        <!-- 选择币种 -->
        <ConfigProvider theme="dark">
          <Popup id="promotion" v-model:show="showCurrencyItemBox" position="bottom" round style="padding: 0px 15px; padding-top: 20px" :closeable="true" @close="depositTab = 'digital'">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>{{ t('activeBalance') }}</h3>
                <p>{{ t('chooseCrypto') }}</p>
              </div>
              <div class="inner-tabs">
                <span :class="{ active: depositTab == 'digital' }" @click="depositTab = 'digital'">{{ t('cryptoCurrency') }}</span>
                <span :class="{ active: depositTab == 'bank' }" @click="depositTab = 'bank'">{{ t('bank') }}</span>
              </div>
              <ul v-show="depositTab == 'digital'" class="bb-cont">
                <li v-for="(item, index) of digitalList" :key="index" @click="selCurrency(item)">
                  <img :src="getAssetsFile(`coin/${item.name.toLocaleLowerCase()}.svg`)" />
                  <div class="bbc-md">
                    <p>{{ item.subtitle }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="bbc-mr">
                    <p>{{ moneyFormat(item.balance) }} {{ item.unit }}</p>
                    <p>$ {{ moneyFormat(item.usdAmount) }}</p>
                  </div>
                </li>
              </ul>
              <ul v-show="depositTab == 'bank'" class="bb-cont">
                <li v-for="(item, index) of bankList" :key="index" @click="selCurrency(item)">
                  <img :src="getAssetsFile(`coin/${item.name.toLocaleLowerCase()}.svg`)" />
                  <div class="bbc-md">
                    <p>{{ item.subtitle }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="bbc-mr">
                    <p>{{ moneyFormat(item.balance) }} {{ item.unit }}</p>
                    <p>{{ moneyFormat(item.usdAmount) }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Popup>
          <!-- 如果是USDT， 选择存款网络 -->
          <Popup id="promotion" v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>{{ t('chooseDepositChain') }}</h3>
                <p>{{ t('confirmDepositAddress') }}</p>
              </div>
              <ul class="bb-cont" style="height: 260px">
                <li v-for="(item, index) of usdtChainList" :key="index" @click="selBlockChain(item)">
                  <div class="bbc-ml">
                    <img :src="getAssetsFile(`coin/usdt.svg`)" />
                    <em><i :class="item.icon" /></em>
                  </div>
                  <div class="bbc-md">
                    <p>{{ item.chainName }}</p>
                    <p>{{ item.subtitle }}</p>
                  </div>
                  <div class="bbc-mr" />
                </li>
              </ul>
            </div>
          </Popup>
        </ConfigProvider>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import FundFooter from '@/components/layout/FundFooter.vue'
// import { getExchangeRateApi } from '@/api/app/index'
import { getBalanceApi, getDepositAddressApi } from '@/api/fund/index'
import { getBalanceItemResponse } from '@/api/fund/types'
import { getAssetsFile, copy, moneyFormat, formatAddress } from '@/utils'
import { usdtChainList, usdtChainListTypes } from '@/utils/blockChain'

import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { ConfigProvider, Popup } from 'vant'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const depositTab = ref('digital')
const fundTab = ref<string>('deposit')
if (route.query.tab) {
  fundTab.value = route.query.tab as any
}
// 余额列表
let showCurrencyItemBox = ref(false)
let digitalList = ref<getBalanceItemResponse[]>([])
let bankList = ref<getBalanceItemResponse[]>([])
let selCurrencyItem = reactive<getBalanceItemResponse>({
  balance: '',
  name: '',
  subtitle: '',
  unit: '',
  currencyType: '',
  usdAmount: ''
})
// 如果是USDT 选择转账链
let showBlockChainBox = ref(false)
let selBlockChainItem = reactive({
  chainName: '',
  subtitle: '',
  code: '',
  icon: ''
})

// 充值地址列表
let depositInfo = reactive({
  channelId: 0,
  channelCode: '',
  channelName: '',
  currencyType: 0,
  blockchainCode: '',
  currencyCode: '',
  currencyUnit: '',
  subtitle: '',
  balance: 0,
  walletAddress: '',
  exchangeRate: 0,
  minDepositAmount: 0
})
let showDepositQrcode = ref(false)

// let currencyCode = ref('')
// let cxchangeRate = ref('')

// // 获取汇率
// const getExchangeRate = () => {
//   getExchangeRateApi()
//     .then((resp) => {
//       currencyCode.value = resp.data[0].currencyCode
//       cxchangeRate.value = resp.data[0].cxchangeRate
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      if (resp.data.length > 0) {
        selCurrency(resp.data[0])
        digitalList.value = resp.data.filter((item) => item.currencyType != '20')
        bankList.value = resp.data.filter((item) => item.currencyType == '20')
        showDepositQrcode.value = false
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 选择币种余额
const selCurrency = (item: getBalanceItemResponse) => {
  Object.assign(selCurrencyItem, item)
  if (selCurrencyItem.name == 'USDT') {
    Object.assign(selBlockChainItem, usdtChainList[1])
  }
  showCurrencyItemBox.value = false
  getDeposit()
}

// USDT 选择trc20或trc20
const selBlockChain = (item: usdtChainListTypes) => {
  Object.assign(selBlockChainItem, item)
  showBlockChainBox.value = false
  getDeposit()
}

// 获取充值地址
const getDeposit = () => {
  getDepositAddressApi({ BlockchainCode: selCurrencyItem.name == 'USDT' ? selBlockChainItem.code : ' ', CurrencyCode: selCurrencyItem.name })
    .then((resp) => {
      Object.assign(depositInfo, resp.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const openBourse = (url: string) => {
  window.open(url)
}

onMounted(() => {
  copy('.copy')
})

// getExchangeRate()
getBalanceList()
</script>
