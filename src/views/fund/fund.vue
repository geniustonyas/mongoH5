<template>
  <div class="page">
    <CommonHeader title="Fund Account" />
    <main class="main">
      <div class="fund-box">
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">ACTIVE BALANCE</div>
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
                  <b>{{ selCurrencyItem.balance }} USDT</b>
                  <small>${{ selCurrencyItem.usdAmount }} US</small>
                </span>
                <i class="iconfont icon-down" />
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row">
          <div class="row-body">
            <div class="inner-tabs">
              <span :class="{ active: fundTab == 'deposit' }" @click="fundTab = 'deposit'">Deposit</span>
              <span :class="{ active: fundTab == 'buyCrypto' }" @click="fundTab = 'buyCrypto'">Buy Crypto</span>
              <span :class="{ active: fundTab == 'widthdraw' }" @click="fundTab = 'widthdraw'">Withdraw</span>
            </div>
            <div v-show="fundTab == 'deposit'">
              <div class="r-title">YOUR DEPOSIT ADDRESS</div>
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
                      1 USDT ≈ <span>US ${{ depositInfo.exchangeRate }}</span>
                    </p>
                    <p>
                      Minimum deposit amount:
                      <span>{{ depositInfo.minDepositAmount }} {{ depositInfo.currencyUnit }}</span>
                    </p>
                  </div>
                </div>
                <div class="gc-b">
                  <div class="b-l">
                    <small>ADDRESS</small>
                    <span>{{ depositInfo.walletAddress }}</span>
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
                      <span class="t-sub">从我们推荐的交易所购买加密货币</span>
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
                      <span class="t-name">Binance</span>
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
                      <span class="t-sub">{{ selCurrencyItem.name }}取款</span>
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
            <div class="r-title">QUICK TIPS</div>
            <div class="r-card-txt">Please always check your deposit wallet address on our site before making your transactions.</div>
          </div>
        </div>
        <dl class="cur-lsit">
          <dt>REWARDS</dt>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-rewards" />Promotion code </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-jiangli" />My Rewards </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
        <dl class="cur-lsit">
          <dt>RECENT TRANSACTIONS</dt>
          <dd>
            <a @click="router.push({ name: 'tradeRecord' })">
              <span> <i class="iconfont icon-zzjl" />Transaction history </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
        <dl class="cur-lsit">
          <dt>SUPPORT SETTINGS</dt>
          <dd>
            <a @click="router.push({ name: 'walletSetting' })">
              <span> <i class="iconfont icon-setting" />Wallet settings </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-guanyuwomen" />FAQ </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-xiaoxi" />Live Support </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
        <!-- 选择币种 -->
        <ConfigProvider theme="dark">
          <Popup id="promotion" v-model:show="showCurrencyItemBox" position="bottom" round style="padding: 0px 15px; padding-top: 20px" :closeable="true" @close="depositTab = 'digital'">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>当前余额</h3>
                <p>选择您偏好的货币</p>
              </div>
              <div class="inner-tabs">
                <span :class="{ active: depositTab == 'digital' }" @click="depositTab = 'digital'">加密货币</span>
                <span :class="{ active: depositTab == 'bank' }" @click="depositTab = 'bank'">银行</span>
              </div>
              <ul v-show="depositTab == 'digital'" class="bb-cont">
                <li v-for="(item, index) of digitalList" :key="index" @click="selCurrency(item)">
                  <img :src="getAssetsFile(`coin/${item.name.toLocaleLowerCase()}.svg`)" />
                  <div class="bbc-md">
                    <p>{{ item.subtitle }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="bbc-mr">
                    <p>{{ item.balance }} {{ item.unit }}</p>
                    <p>€ {{ item.usdAmount }}</p>
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
                    <p>{{ item.balance }} {{ item.unit }}</p>
                    <p>€ {{ item.usdAmount }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Popup>
        </ConfigProvider>
        <!-- 如果是USDT， 选择存款网络 -->
        <ConfigProvider theme="dark">
          <Popup id="promotion" v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>选择存款网络</h3>
                <p>请在执行交易前确认您的存款地址</p>
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
    <Footer />
  </div>
</template>

<script setup name="Fund">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Footer from '@/components/layout/Footer.vue'

import { getBalanceApi, getDepositAddressApi } from '@/api/fund/index'
import { getAssetsFile, copy } from '@/utils'
import { usdtChainList } from '@/utils/blockChain'

import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { ConfigProvider, showToast, Popup } from 'vant'
import 'vant/es/empty/style'
import 'vant/es/popup/style'

const router = useRouter()
const { t } = useI18n()

const depositTab = ref('digital')
const fundTab = ref('deposit')
// 余额列表
let showCurrencyItemBox = ref(false)
let digitalList = ref([])
let bankList = ref([])
let selCurrencyItem = reactive({
  balance: 0,
  name: '',
  subtitle: '',
  unit: '',
  currencyType: 0,
  usdAmount: 0
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

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      selCurrency(resp.data[0])
      digitalList.value = resp.data.filter((item) => item.currencyType != 20)
      bankList.value = resp.data.filter((item) => item.currencyType == 20)
      showDepositQrcode.value = false
    })
    .catch((error) => {
      showToast('获取充值地址失败')
      console.log(error)
    })
}

// 选择币种余额
const selCurrency = (item) => {
  Object.assign(selCurrencyItem, item)
  if (selCurrencyItem.name == 'USDT') {
    Object.assign(selBlockChainItem, usdtChainList[1])
  }
  showCurrencyItemBox.value = false
  getDeposit()
}

// USDT 选择trc20或trc20
const selBlockChain = (item) => {
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
      showToast('获取充值地址失败')
      console.log(error)
    })
}

const openBourse = (url) => {
  window.open(url)
}

getBalanceList()

onMounted(() => {
  copy('.copy')
})
</script>
