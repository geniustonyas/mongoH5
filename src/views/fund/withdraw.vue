<template>
  <div class="page">
    <CommonHeader :title="t('withdraw')" />
    <main class="main">
      <div class="fund-box">
        <ul v-show="step != 4" class="progress-bar">
          <li :class="{ active: step == 1 }" @click="jumpStep(1)">{{ t('inputAmount') }}</li>
          <li :class="{ active: step == 2 }" @click="jumpStep(2)">{{ t('walletDetails') }}</li>
          <li :class="{ active: step == 3 }" @click="jumpStep(3)">{{ t('waitingResults') }}</li>
        </ul>

        <!-- step 1 -->
        <div v-show="step == 1" class="fund-form">
          <div class="ff-title">{{ t('withdrawUsdt') }}</div>
          <div class="ff-balance">
            {{ t('currentBalance') }}
            <!-- {{  }} -->
            <span>{{ moneyFormat(withdrawBalanceItem.balance) }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>
          <div class="ff-group">
            <label>{{ t('amount') }}</label>
            <input v-model="withdrawForm.Amount" type="number" ref="amountDom" :placeholder="t('inputAmount')" autocomplete="off" />
          </div>
          <ul class="ff-amounts">
            <li :class="{ active: percent == 0.25 }">
              <span @click="computeAmount(0.25)">25%</span>
            </li>
            <li :class="{ active: percent == 0.5 }">
              <span @click="computeAmount(0.5)">50%</span>
            </li>
            <li :class="{ active: percent == 1 }">
              <span @click="computeAmount(1)">100%</span>
            </li>
          </ul>
          <div class="ff-rmark">
            {{ t('minWithdrawAmount') }}
            <b>{{ moneyFormat(minWithdrawAmount) }} {{ withdrawBalanceItem.unit }}</b>
          </div>
        </div>
        <div v-show="step == 1" class="fund-btn">
          <a :class="withdrawForm.Amount == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab()">{{ t('next') }}</a>
        </div>
        <!-- step 2 -->
        <div v-show="step == 2" class="fund-form">
          <div class="ff-title">{{ t('walletDetails') }}</div>
          <div class="ff-balance">
            {{ t('currentBalance') }}:
            <span>{{ moneyFormat(withdrawBalanceItem.balance) }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>

          <div class="fb-row">
            <div class="row-body">
              <div class="r-title">{{ t('youWithdrawAddress') }}</div>
              <div class="r-group-card">
                <div v-show="withdrawBalanceItem.name == 'USDT'" class="gc-t" @click="showBlockChainBox = true">
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
              </div>
            </div>
          </div>
          <div class="ff-group">
            <label>{{ t('payto') }}</label>
            <input v-model="withdrawForm.PayeeAddress" ref="addressDom" type="text" :placeholder="t('walletAddress')" />
          </div>
          <div class="ff-rmark">{{ t('checkWithdrawAddress') }}</div>
        </div>
        <div v-show="step == 2" class="fund-btn">
          <a :class="withdrawForm.PayeeAddress == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab()">{{ t('previewWithdraw') }}</a>
        </div>
        <!-- step 3 -->
        <div v-show="step == 3" class="fund-form">
          <div class="ff-title">{{ t('previewWithdraw') }}</div>
          <div class="ff-balance">{{ t('confirmWithdrawInfo') }}</div>

          <div class="fb-row">
            <div class="row-body">
              <div class="r-title">{{ t('walletAddressBig') }}</div>
              <div class="r-group-card">
                <div class="gc-t">
                  <div class="t-l">
                    <div class="t-icon">
                      <img :src="getAssetsFile('coin/usdt.svg')" />
                    </div>
                    <div class="t-txt">
                      <span>{{ withdrawForm.CurrencyCode }}{{ withdrawForm.CurrencyCode == 'USDT' ? `(${withdrawForm.BlockchainCode})` : '' }}</span>
                      <small>{{ withdrawForm.PayeeAddress }}</small>
                    </div>
                  </div>
                  <div class="t-r" @click="step = 2">
                    <i class="iconfont icon-bianji" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <dl class="ff-rows">
            <dt>{{ t('summary') }}</dt>
            <dd>
              {{ t('currency') }}:
              <span>{{ withdrawForm.CurrencyCode }}</span>
            </dd>
            <dd>
              {{ t('amount') }}:
              <span>{{ moneyFormat(withdrawForm.Amount) }} {{ withdrawBalanceItem.unit }}</span>
            </dd>
            <dd>
              {{ t('network') }}:
              <span>{{ withdrawForm.BlockchainCode }}</span>
            </dd>
          </dl>
          <div v-if="userStore.userInfo.isBindGoogleAuth" class="ff-group">
            <input v-model="withdrawForm.VerificationCode" ref="googleCodeDom" type="text" :placeholder="t('inputGoole')" autocomplete="off" />
          </div>
        </div>
        <div v-show="step == 3" class="fund-btn">
          <a :class="withdrawForm.PayeeAddress == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab()">{{ t('confirm') }}</a>
        </div>
        <!-- step 4 -->
        <div v-show="step == 4" class="fund-form wa">
          <div class="ff-w-a">
            <p>{{ t('withdrawing') }}</p>
            <h2>{{ moneyFormat(withdrawDetail.amount) }}&nbsp;{{ withdrawDetail.currencyCode }}</h2>
          </div>
          <dl class="ff-rows">
            <dt>{{ t('walletDetails') }}</dt>
            <dd>
              {{ t('currency') }}:
              <span>{{ withdrawDetail.currencyCode }}</span>
            </dd>
            <dd>
              {{ t('address') }}:
              <span>{{ withdrawForm.PayeeAddress }}</span>
            </dd>
          </dl>
          <dl class="ff-rows">
            <dt>{{ t('summary') }}</dt>
            <dd>
              {{ t('date') }}:
              <span>{{ withdrawDetail.createTime }}</span>
            </dd>
            <dd>
              {{ t('transactionType') }}：
              <span>{{ t('withdraw') }}</span>
            </dd>
            <dd>
              {{ t('finalBalance') }}：
              <span>{{ moneyFormat(withdrawDetail.afterAmount) }} {{ withdrawDetail.currencyCode }}</span>
            </dd>
          </dl>
        </div>
        <div v-show="step == 4" class="fund-btn wa">
          <a class="btn btn-primary" @click="router.push({ name: 'fund' })">{{ t('backToFund') }}</a>
        </div>
        <dl v-show="step != 4" class="cur-lsit">
          <dt>{{ t('supportSettings') }}</dt>
          <dd>
            <a @click="router.push({ name: 'walletSetting' })">
              <span> <i class="iconfont icon-setting" />{{ t('walletSettings') }}</span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <!-- <dd>
            <a href="#">
              <span> <i class="iconfont icon-guanyuwomen" />{{ t('faq') }} </span>
              <i class="iconfont icon-right" />
            </a>
          </dd> -->
          <dd>
            <a @click="router.push({ name: 'support' })">
              <span> <i class="iconfont icon-xiaoxi" />{{ t('liveSupport') }} </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
      </div>
      <ConfigProvider theme="dark">
        <Popup id="promotion" v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
          <div class="fund-pop-box">
            <div class="bb-title">
              <h3>{{ t('chooseWithdrawChain') }}</h3>
              <p>{{ t('confirmWithdrawAddress') }}</p>
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { getMinWithdrawAmountApi, getBalanceApi, withdrawOrderApi, getTradeDetailApi } from '@/api/fund/index'
// import { getTradeDetailResponse } from '@/api/fund/type'
import { getAssetsFile, moneyFormat } from '@/utils'
import { usdtChainList, usdtChainListTypes } from '@/utils/blockChain'
import { useI18n } from 'vue-i18n'

import BigNumber from 'bignumber.js'
import { showToast, Popup, ConfigProvider } from 'vant'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const step = ref(1)
// 快捷提现比例
const percent = ref(0.25)
// 查询提现详情返回数据
const withdrawDetail = reactive({
  blockchainCode: '',
  createTime: '',
  currencyCode: '',
  orderId: '',
  txId: '',
  amount: '0',
  afterAmount: '',
  orderType: '',
  orderStatus: ''
})
// 余额列表
const withdrawBalanceItem = reactive({
  balance: '0',
  name: '',
  subtitle: '',
  unit: '',
  currencyType: 0,
  usdAmount: 0
})
// 最低充值
let minWithdrawAmount = ref('0')
// 最低提现金额请求参数
const getWithdrawAmountForm = reactive({
  BlockchainCode: route.query?.BlockchainCode as string,
  CurrencyCode: route.query?.CurrencyCode as string
})

// 第二步： 选择提现链
let showBlockChainBox = ref(false)
let selBlockChainItem = reactive<usdtChainListTypes>({
  chainName: '',
  subtitle: '',
  code: '',
  icon: ''
})

//
let amountDom = ref<HTMLInputElement | null>(null)
let addressDom = ref<HTMLInputElement | null>(null)
let googleCodeDom = ref<HTMLInputElement | null>(null)
// 提现表单
const withdrawForm = reactive({
  CurrencyCode: route.query?.CurrencyCode as string,
  BlockchainCode: '',
  VerificationCode: '',
  PayeeAddress: '',
  Amount: ''
})

// 跳转步骤
const jumpStep = (jumpTo: number) => {
  if (step.value < jumpTo) {
    return false
  }
  step.value = jumpTo
}

// 获取最低提现金额
const getMinWithdraw = () => {
  getMinWithdrawAmountApi(getWithdrawAmountForm)
    .then((resp) => {
      minWithdrawAmount.value = resp.data?.minimumWithdrawAmount
    })
    .catch((error) => {
      // showToast('获取最低充值金额失败')
      console.log(error)
    })
}

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      const item = resp.data.find((item) => item.name == getWithdrawAmountForm.CurrencyCode)
      if (item) {
        Object.assign(withdrawBalanceItem, item)
        computeAmount(percent.value)
        getMinWithdraw()
      }
    })
    .catch((error) => {
      // showToast('获取充值地址失败')
      console.log(error)
    })
}

// 输入提现金额进行精确计算
const computeAmount = (rate: number) => {
  percent.value = rate
  const bigBalance = new BigNumber(withdrawBalanceItem.balance)
  let tmp = bigBalance.times(rate)
  withdrawForm.Amount = rate == 1 ? tmp.valueOf() : tmp.toFixed(0)
}

// USDT 选择trc20或trc20
const selBlockChain = (item: usdtChainListTypes) => {
  Object.assign(selBlockChainItem, item)
  showBlockChainBox.value = false
  withdrawForm.BlockchainCode = item.code
}

// 提现
const selTab = () => {
  if (step.value == 1) {
    if (withdrawForm.Amount == '') {
      amountDom.value?.focus()
      showToast(t('tips.inputWithdrawAmount'))
      return false
    }
    if (parseFloat(withdrawForm.Amount) > parseFloat(withdrawBalanceItem.balance)) {
      amountDom.value?.focus()
      showToast(t('tips.overMaxWithdrawAmount'))
      return false
    }
    if (withdrawForm.Amount < minWithdrawAmount.value) {
      amountDom.value?.focus()
      showToast(t('tips.underMinWithdrawAmount'))
      return false
    }
    step.value = 2
  } else if (step.value == 2) {
    if (withdrawForm.PayeeAddress == '') {
      addressDom.value?.focus()
      showToast(t('tips.inputWithdrawAddress'))
      return false
    }
    withdrawForm.BlockchainCode = withdrawForm.BlockchainCode == '' ? selBlockChainItem.code : withdrawForm.BlockchainCode
    step.value = 3
  } else if (step.value == 3) {
    if (userStore.userInfo.isBindGoogleAuth && withdrawForm.VerificationCode == '') {
      showToast(t('tips.googleCode'))
      googleCodeDom.value?.focus()
      return false
    }
    withdrawOrderApi(withdrawForm)
      .then((resp) => {
        getTradeDetailApi({ OrderId: resp.data.orderId, orderType: '2' })
          .then((resp) => {
            showToast(t('tips.withdrawSuccess'))
            Object.assign(withdrawDetail, resp.data)
          })
          .catch((error) => {
            console.log(error)
          })
        userStore.getUserInfo({ noLoading: true })
        step.value = 4
      })
      .catch((error) => {
        showToast(t('tips.withdrawFail'))
        console.log(error)
      })
  }
}

Object.assign(selBlockChainItem, usdtChainList[1])

getBalanceList()
</script>
