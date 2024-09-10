<template>
  <div class="page">
    <!-- 头部 -->
    <CommonHeader :title="t('fundAccount')" />
    <main class="main">
      <div class="fund-box">
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">{{ t('fundCurrency') }}</div>
            <!-- 余额框 -->
            <div v-if="selCurrencyItem.name != ''" class="r-card" @click="showCurrencyItemBox = true">
              <div class="rc-l">
                <img :src="getAssetsFile(`coin/${selCurrencyItem.name.toLocaleLowerCase()}.svg`)" />
                <span>
                  <b>{{ selCurrencyItem.subtitle }}</b>
                  <small>{{ currenyName(selCurrencyItem.name) }}</small>
                </span>
              </div>
              <!-- 弹出余额列表框 -->
              <div class="rc-r">
                <span>
                  <b>{{ moneyFormat(selCurrencyItem.balance) }} {{ selCurrencyItem.unit }}</b>
                  <small>${{ moneyFormat(selCurrencyItem.usdAmount) }} USD</small>
                </span>
                <i class="iconfont icon-down" />
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row">
          <!-- 选择余额 -->
          <div class="row-body">
            <div class="inner-tabs">
              <span :class="{ active: fundTab == 'deposit' }" @click="fundTab = 'deposit'">{{ t('deposit') }}</span>
              <span :class="{ active: fundTab == 'buyCrypto' }" @click="fundTab = 'buyCrypto'">{{ t('buyCrypto') }}</span>
              <span :class="{ active: fundTab == 'widthdraw' }" @click="fundTab = 'widthdraw'">{{ t('withdraw') }}</span>
            </div>
            <div v-show="fundTab == 'deposit'">
              <template v-if="selCurrencyItem.currencyType != '20'">
                <div class="r-title">{{ t('youDepositAddress') }}</div>
                <div class="r-group-card">
                  <!-- 选择链 -->
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

                  <!-- 充值地址二维码. 汇率 -->
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
                        1 {{ depositInfo.currencyCode }} ≈ <span>USD ${{ moneyFormat(depositInfo.exchangeRate) }}</span>
                      </p>
                      <!-- <p>
                        {{ t('minDepositAmount') }}:
                        <span>{{ moneyFormat(depositInfo.minDepositAmount) }} {{ depositInfo.currencyCode }}</span>
                      </p> -->
                    </div>
                  </div>

                  <!-- 充值地址 -->
                  <div class="gc-b">
                    <div class="b-l">
                      <small>{{ t('address') }}</small>
                      <span @click="showAddress = true" :class="showAddress ? 'show-all' : ''">{{ depositInfo.walletAddress }}</span>
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
              </template>
              <template v-else>
                <div class="r-group-card">
                  <div v-for="(item, index) of fiatChannels" :key="index" class="bourse" @click="selFiatChannel(item)">
                    <div class="t-l">
                      <div class="t-icon">
                        <img :src="getAssetsFile(`coin/${selCurrencyItem.name.toLocaleLowerCase()}.svg`)" />
                      </div>
                      <div class="t-txt">
                        <span class="t-name">{{ item.name }}</span>
                        <span class="t-sub">{{ moneyFormat(item.min) }} ~ {{ moneyFormat(item.max) }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <i class="iconfont icon-right" />
                    </div>
                  </div>
                </div>
                <!-- <div class="r-group-card">
                  <template v-if="selFiatChannelItem">
                    <div v-for="(item, index) of selFiatChannelItem.methods" :key="index" class="bourse" @click="selVnPayItem(item)">
                      <div class="t-l">
                        <div class="t-icon">
                          <img :src="getAssetsFile(getVnPayData(item.code)?.icon)" />
                        </div>
                        <div class="t-txt">
                          <span class="t-name">{{ getVnPayData(item.code)?.payName }}</span>
                        </div>
                      </div>
                      <div class="t-r">
                        <i class="iconfont icon-right" />
                      </div>
                    </div>
                  </template>
                </div> -->
              </template>
            </div>
            <div v-show="fundTab == 'buyCrypto'">
              <div class="r-group-card">
                <div v-for="(item, index) of buyCrypto" :key="index" class="bourse" @click="openBourse(item.url)">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="item.img" />
                    </div>
                    <div class="t-txt">
                      <span class="t-name">{{ item.name }}</span>
                      <span class="t-sub">{{ item.sub }}</span>
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
                <div class="bourse" @click="router.push({ name: 'withdraw', query: { CurrencyCode: selCurrencyItem.name, CurrencyType: selCurrencyItem.currencyType } })">
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
            <div class="r-card-txt"><i class="iconfont icon-info" />{{ t('quickTipCont') }}</div>
          </div>
        </div>
        <FundFooter />
        <!-- 选择余额 -->
        <ConfigProvider theme="dark">
          <Popup v-model:show="showCurrencyItemBox" position="bottom" round style="padding: 0px 15px; padding-top: 20px" :closeable="true" @close="depositTab = 'digital'">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>{{ t('activeBalance') }}</h3>
                <p>{{ t('chooseCrypto') }}</p>
              </div>
              <div class="inner-tabs">
                <span :class="{ active: depositTab == 'digital' }" @click="depositTab = 'digital'">{{ t('cryptoCurrency') }}</span>
                <span :class="{ active: depositTab == 'bank' }" @click="depositTab = 'bank'">{{ t('bank') }}</span>
              </div>
              <!-- 选择数字货币 -->
              <ul v-show="depositTab == 'digital'" class="bb-cont">
                <li v-for="(item, index) of digitalList" :key="index" @click="selCurrency(item)">
                  <img :src="getAssetsFile(`coin/${item.name.toLocaleLowerCase()}.svg`)" />
                  <div class="bbc-md">
                    <p>{{ currenyName(item.name) }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="bbc-mr">
                    <p>{{ moneyFormat(item.balance) }} {{ item.unit }}</p>
                    <p>$ {{ moneyFormat(item.usdAmount) }}</p>
                  </div>
                </li>
              </ul>
              <!-- 选择银行 -->
              <ul v-show="depositTab == 'bank'" class="bb-cont">
                <li v-for="(item, index) of bankList" :key="index" @click="selCurrency(item)">
                  <img :src="getAssetsFile(`coin/${item.name.toLocaleLowerCase()}.svg`)" />
                  <div class="bbc-md">
                    <p>{{ currenyName(item.name) }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="bbc-mr">
                    <p>{{ moneyFormat(item.balance) }} {{ item.unit }}</p>
                    <p>$ {{ moneyFormat(item.usdAmount) }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Popup>
          <!-- 如果是USDT， 选择存款网络 -->
          <Popup v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
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
          <!-- 充值 -->
          <Popup v-model:show="showFiatDepositBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true" @closed="closeFiatDepositBox">
            <div class="fund-pop-box">
              <div class="bb-title">
                <h3>{{ selCurrencyItem.name }} {{ t('deposit') }}</h3>
              </div>
              <div class="fund-fiat-form fund-form">
                <div v-if="selFiatChannelItem" class="ff-group">
                  <label>{{ t('rechargeType') }}</label>
                  <div class="r-bank">
                    <ul class="vn-bank">
                      <li v-for="(item, index) of selFiatChannelItem.methods" :key="index" :class="{ active: item.code == vnPayItem.code }" @click="selVnPayItem(item)">
                        <img :src="getAssetsFile(getVnPayData(item.code)?.icon)" class="bank" />
                        <span>{{ getVnPayData(item.code)?.payName }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="vnPayItem.items.length > 1" class="ff-group">
                  <label>{{ t('bankList') }}</label>
                  <div class="r-bank">
                    <ul class="vn-bank">
                      <li v-for="(item, index) of vnPayItem.items" :key="index" :class="{ active: item.id == fiatDepositForm.channelItemId }" @click="fiatDepositForm.channelItemId = item.id">
                        <img :src="getAssetsFile(`pay/${item.name}.png`)" class="bank" />
                        <span>{{ item.name }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ff-group">
                  <label>{{ t('amount') }}</label>
                  <input v-model="tmpAmount" type="text" ref="amountDom" :placeholder="t('inputAmount')" autocomplete="off" />
                  <div id="amountTip" class="tip" />
                  <div v-if="selCurrencyItem.name == 'VND'" class="amountNote">{{ t('sameAs') }}： {{ tmpAmount == '' ? 0 : parseFloat(tmpAmount) * 1000 }} VND</div>
                </div>
                <div class="ff-rmark">
                  <i class="iconfont icon-info" />
                  {{ t('depositLimit') }}
                  <b v-if="selCurrencyItem.name == 'VND'">{{ moneyFormat(selFiatChannelItem.min / 1000) }} ~ {{ moneyFormat(selFiatChannelItem.max / 1000) }}</b>
                  <b v-else>{{ moneyFormat(selFiatChannelItem.min) }} ~ {{ moneyFormat(selFiatChannelItem.max) }}</b>
                </div>
              </div>
              <div class="fund-btn">
                <a class="btn btn-primary" @click="fiatDeposit"><i v-show="fiatDepositLoading" class="iconfont icon-loading" />{{ t('submit') }}</a>
                <div v-if="selCurrencyItem.name == 'VND'" class="amount-exchange">{{ t('exhange') }}： 1 = 1000 VND</div>
              </div>
            </div>
          </Popup>
        </ConfigProvider>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import FundFooter from '@/components/layout/FundFooter.vue'
// import { getExchangeRateApi } from '@/api/app/index'
import { getBalanceApi, getDepositAddressApi, setDefaultCurrencyApi, getFiatChannelsApi, fiatDepositApi } from '@/api/fund/index'
import { getBalanceItemResponse, getFiatChannelsRespItems, getFiatChannelsMethods } from '@/api/fund/types'
import { getAssetsFile, copy, moneyFormat } from '@/utils'
import { usdtChainListData, usdtChainListTypes, currenyListData, buyCryptoData, vnPayDataList } from '@/utils/config'

import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { ConfigProvider, Popup, showConfirmDialog } from 'vant'
import { useUserStore } from '@/store/modules/user'
import { cloneDeep } from 'lodash-es'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const usdtChainList = usdtChainListData()
const currenyList = currenyListData()
const buyCrypto = buyCryptoData()
const vnPayData = vnPayDataList()

// 数字货币和银行切换
const depositTab = ref('digital')

// 存款|提款|购买数字货币切换
const fundTab = ref('deposit')

// 是否显示完整地址
const showAddress = ref(true)

// 是否显示法币充值表单
const showFiatDepositBox = ref(false)
const selFiatChannelItem = reactive<getFiatChannelsRespItems>({
  id: 0,
  name: '',
  currencyCode: '',
  currencyUnit: '',
  min: 0,
  max: 0,
  expire: 0,
  methods: []
})

const tmpAmount = ref('')
const fiatDepositForm = reactive({
  channelId: 0,
  channelItemId: 0,
  amount: '',
  fields: {
    bankfullname: '',
    banknumber: '',
    bankname: '',
    bankzhiname: ''
  }
})
const defaultFiatDepositForm = cloneDeep(fiatDepositForm)

// 余额列表
const showCurrencyItemBox = ref(false)
const digitalList = ref<getBalanceItemResponse[]>([])
const bankList = ref<getBalanceItemResponse[]>([])
const fiatChannels = ref<getFiatChannelsRespItems[]>([])
const selCurrencyItem = reactive<getBalanceItemResponse>({
  balance: '',
  name: '',
  subtitle: '',
  unit: '',
  currencyType: '',
  usdAmount: ''
})

// 越南支付 选择支付方式
const vnPayItem = reactive<getFiatChannelsMethods>({
  icon: '',
  code: '',
  name: '',
  items: []
})

// 如果是USDT 选择转账链
const showBlockChainBox = ref(false)
const selBlockChainItem = reactive({
  chainName: '',
  subtitle: '',
  code: '',
  icon: ''
})

// 充值地址列表
const depositInfo = reactive({
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
const defaultDepositInfo = cloneDeep(depositInfo)
const showDepositQrcode = ref(true)

// 替换币种名称
const currenyName = (code: string) => {
  const tmp = currenyList.find((item) => item.code == code)
  return tmp ? tmp.currenyName : code
}

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      if (resp.data.length > 0) {
        // 根据默认币种获取余额
        const item = resp.data.find((item) => item.name == userStore.userInfo.defaultCurrencyCode)
        selCurrency(item ? item : resp.data[0])
        digitalList.value = resp.data.filter((item) => item.currencyType != '20')
        bankList.value = resp.data.filter((item) => item.currencyType == '20' && ['INR', 'THB', 'BRL', 'PHP', 'VND'].includes(item.name))
        showDepositQrcode.value = true
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 选择币种余额
const selCurrency = (item: getBalanceItemResponse) => {
  Object.assign(selCurrencyItem, item)
  // 如果是usdt, 则设置默认链为trc20
  if (selCurrencyItem.name == 'USDT') {
    Object.assign(selBlockChainItem, usdtChainList[1])
  }
  showCurrencyItemBox.value = false
  // 切换币种
  if (userStore.userInfo.defaultCurrencyCode != selCurrencyItem.name) {
    setDefaultCurrency()
  }

  // 数字货币获取充值地址
  if (selCurrencyItem.currencyType != '20') {
    getDeposit()
  } else {
    // 获取法币充值渠道
    getFiatChannelsApi({ CurrencyCode: selCurrencyItem.name })
      .then((resp) => {
        fiatChannels.value = resp.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// 设置默认币种并刷新用户信息
const setDefaultCurrency = () => {
  setDefaultCurrencyApi({ CurrencyCode: selCurrencyItem.name })
    .then(() => {
      userStore.getUserInfo({ noLoading: false })
    })
    .catch((error) => {
      console.log(error)
    })
}

// USDT 选择trc20或trc20
const selBlockChain = (item: usdtChainListTypes) => {
  Object.assign(selBlockChainItem, item)
  showBlockChainBox.value = false
  getDeposit()
}

const selFiatChannel = (item: getFiatChannelsRespItems) => {
  Object.assign(selFiatChannelItem, item)
  fiatDepositForm.channelId = selFiatChannelItem.id
  showFiatDepositBox.value = true

  // if (selCurrencyItem.name == 'VND') {
  //   Object.assign(selFiatChannelItem, resp.data[0])
  //   fiatDepositForm.channelId = selFiatChannelItem.id
  // }
  if (selFiatChannelItem && selFiatChannelItem.methods && selFiatChannelItem.methods.length > 0) {
    selVnPayItem(selFiatChannelItem.methods[0])
  }
}

// 越南支付选择支付
const selVnPayItem = (item: getFiatChannelsMethods) => {
  Object.assign(vnPayItem, item)
  fiatDepositForm.channelId = selFiatChannelItem.id
  fiatDepositForm.channelItemId = vnPayItem.items[0].id
  showFiatDepositBox.value = true
}

const fiatDepositLoading = ref(false)
const errorMsg = ref('')
const fiatDeposit = () => {
  if (fiatDepositLoading.value) {
    return false
  }
  fiatDepositLoading.value = true
  errorMsg.value = ''
  const allTip = document.getElementsByClassName('tip')
  for (var i = 0; i < allTip.length; i++) {
    allTip[i].innerHTML = ''
  }

  const amountTip = document.getElementById('amountTip')
  // const banknumberTip = document.getElementById('banknumberTip')
  // const bankfullnameTip = document.getElementById('bankfullnameTip')
  // const banknameTip = document.getElementById('banknameTip')
  // const bankzhinameTip = document.getElementById('bankzhinameTip')
  if (selCurrencyItem.name == 'VND') {
    //@ts-ignore
    fiatDepositForm.amount = tmpAmount.value == '' ? tmpAmount : (parseFloat(tmpAmount.value) * 1000).toString()
  } else {
    fiatDepositForm.amount = tmpAmount.value
    //@ts-ignore
    fiatDepositForm.channelItemId = null
  }
  if (fiatDepositForm.amount == '') {
    errorMsg.value = t('inputDepositAmount')
    amountTip!.innerHTML = errorMsg.value
    fiatDepositLoading.value = false
    return false
  } else if (parseFloat(fiatDepositForm.amount) > selFiatChannelItem.max) {
    errorMsg.value = t('depositAmountOver')
    amountTip!.innerHTML = errorMsg.value
    fiatDepositLoading.value = false
    return false
  } else if (parseFloat(fiatDepositForm.amount) < selFiatChannelItem.min) {
    errorMsg.value = t('depositAmountUnder')
    amountTip!.innerHTML = errorMsg.value
    fiatDepositLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    amountTip!.innerHTML = ''
  }

  // @ts-ignore
  fiatDepositForm.amount = parseFloat(fiatDepositForm.amount)

  fiatDepositApi(fiatDepositForm)
    .then((resp) => {
      // ElMessage({ type: 'success', message: '提交成功！' })
      Object.assign(fiatDepositForm, defaultFiatDepositForm)
      fiatDepositLoading.value = false
      if (resp.data.fiatPayUrl && resp.data.fiatPayUrl != '') {
        const wd = window.open(resp.data.fiatPayUrl)
        if (!wd) {
          showConfirmDialog({
            title: t(''),
            message: t('depositNewWindow')
          })
            .then(() => {
              window.open(resp.data.fiatPayUrl)
            })
            .catch(() => {
              return false
            })
        }
      }
      showFiatDepositBox.value = false
    })
    .catch((error) => {
      console.log(error)
      fiatDepositLoading.value = false
    })
}

const closeFiatDepositBox = () => {
  Object.assign(fiatDepositForm, defaultFiatDepositForm)
  document.getElementById('amountTip')!.innerHTML = ''
  tmpAmount.value = ''
}

// 获取充值地址
const getDeposit = () => {
  getDepositAddressApi({ BlockchainCode: selCurrencyItem.name == 'USDT' ? selBlockChainItem.code : ' ', CurrencyCode: selCurrencyItem.name })
    .then((resp) => {
      Object.assign(depositInfo, resp.data)
      nextTick(() => {
        copy('.copy')
      })
    })
    .catch((error) => {
      Object.assign(depositInfo, defaultDepositInfo)
      console.log(error)
    })
}

// 打开购买加密货币链接
const openBourse = (url: string) => {
  const wd = window.open(url)
  if (!wd) {
    showConfirmDialog({
      title: t(''),
      message: t('tips.openExchange')
    })
      .then(() => {
        window.open(url)
      })
      .catch(() => {
        return false
      })
  }
}

const getVnPayData = (code: string) => {
  const tmp = vnPayData.find((item) => item.code == code)
  if (tmp) {
    return tmp
  } else {
    return vnPayData[0]
  }
}

if (route.query.tab) {
  fundTab.value = route.query.tab as any
}

getBalanceList()
</script>
