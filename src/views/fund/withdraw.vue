<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" @click="router.back()">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">withdraw</div>
      </div>
    </header>
    <main class="main">
      <div class="fund-box">
        <ul v-show="step != 4" class="progress-bar">
          <li :class="{ active: step == 1 }" @click="jumpStep(1)">Input amount</li>
          <li :class="{ active: step == 2 }" @click="jumpStep(2)">Wallet details</li>
          <li :class="{ active: step == 3 }" @click="jumpStep(3)">Waiting results</li>
        </ul>

        <!-- step 1 -->
        <div v-show="step == 1" class="fund-form">
          <div class="ff-title">Withdraw USDT</div>
          <div class="ff-balance">
            Current balance:
            <span>{{ withdrawBalanceItem.balance }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>
          <div class="ff-group">
            <label>AMOUNT</label>
            <input v-model="withdrawForm.Amount" type="number" id="amountInput" />
          </div>
          <ul class="ff-amounts">
            <li :class="{ active: percent == 0.25 }">
              <span @click="computeAMount(0.25)">25%</span>
            </li>
            <li :class="{ active: percent == 0.5 }">
              <span @click="computeAMount(0.5)">50%</span>
            </li>
            <li :class="{ active: percent == 1 }">
              <span @click="computeAMount(1)">100%</span>
            </li>
          </ul>
          <div class="ff-rmark">
            Minimum withdrawal amount：
            <b>{{ minWithdrawAmount }} {{ withdrawBalanceItem.unit }}</b>
          </div>
        </div>
        <div v-show="step == 1" class="fund-btn">
          <a :class="withdrawForm.Amount == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab(2)">Next</a>
        </div>
        <!-- step 2 -->
        <div v-show="step == 2" class="fund-form">
          <div class="ff-title">Wallet details</div>
          <div class="ff-balance">
            Current balance:
            <span>{{ withdrawBalanceItem.balance }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>

          <div class="fb-row">
            <div class="row-body">
              <div class="r-title">YOUR DEPOSIT ADDRESS</div>
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
            <label>PAY TO</label>
            <input v-model="withdrawForm.PayeeAddress" id="address" type="text" placeholder="Wallet address" />
          </div>
          <div class="ff-rmark">Please always check your withdrawal wallet address before making your transactions.</div>
        </div>
        <div v-show="step == 2" class="fund-btn">
          <a :class="withdrawForm.PayeeAddress == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab(3)">Preview withdraw</a>
        </div>
        <!-- step 3 -->
        <div v-show="step == 3" class="fund-form">
          <div class="ff-title">Preview withdraw</div>
          <div class="ff-balance">Make sure everything is correct</div>

          <div class="fb-row">
            <div class="row-body">
              <div class="r-title">WALLET ADDRESS</div>
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
                  <div class="t-r">
                    <i class="iconfont icon-bianji" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <dl class="ff-rows">
            <dt>SUMMARY</dt>
            <dd>
              Currency：
              <span>{{ withdrawForm.CurrencyCode }}</span>
            </dd>
            <dd>
              Amount：
              <span>{{ withdrawForm.Amount }} {{ withdrawBalanceItem.unit }}</span>
            </dd>
            <dd>
              Network：
              <span>{{ withdrawForm.BlockchainCode }}</span>
            </dd>
          </dl>
          <div v-if="userStore.userInfo.isBindGoogleAuth" class="ff-group">
            <input v-model="withdrawForm.VerificationCode" id="googleCode" type="text" placeholder="输入谷歌身份验证码" />
          </div>
        </div>
        <div v-show="step == 3" class="fund-btn">
          <a :class="withdrawForm.PayeeAddress == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab(4)">Confirm</a>
        </div>
        <!-- step 4 -->
        <div v-show="step == 4" class="fund-form wa">
          <div class="ff-w-a">
            <p>提款进行中</p>
            <h2>{{ withdrawForm.Amount }}&nbsp;{{ withdrawBalanceItem.unit }}</h2>
          </div>
          <dl class="ff-rows">
            <dt>钱包细节</dt>
            <dd>
              货币：
              <span>{{ withdrawForm.CurrencyCode }}</span>
            </dd>
            <dd>
              地址：
              <span>{{ withdrawForm.PayeeAddress }}</span>
            </dd>
          </dl>
          <dl class="ff-rows">
            <dt>总结</dt>
            <dd>
              日期：
              <span>2023年6月27日 17:23</span>
            </dd>
            <dd>
              交易类型：
              <span>提款</span>
            </dd>
            <dd>
              最终余额：
              <span>{{ userStore.userInfo.balance }} usdt</span>
            </dd>
          </dl>
        </div>
        <div v-show="step == 4" class="fund-btn wa">
          <a class="btn btn-primary" href="fund.html">回到资金</a>
        </div>
        <dl v-show="step != 4" class="cur-lsit">
          <dt>SUPPORT SETTINGS</dt>
          <dd>
            <a href="#">
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
      </div>
      <ConfigProvider theme="dark">
        <Popup id="promotion" v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
          <div class="fund-pop-box">
            <div class="bb-title">
              <h3>选择提现网络</h3>
              <p>请在执行交易前确认您的提现地址</p>
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

<script setup name="FundWithdraw">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useUserStore } from '@/store/modules/user'
import { getMinWithdrawAmount, getBalance, withdrawOrder } from '@/api/fund/index'
import { getAssetsFile } from '@/utils'
import { usdtChainList } from '@/utils/blockChain'

import BigNumber from 'bignumber.js'
import { showToast, Popup, ConfigProvider } from 'vant'
import 'vant/es/toast/style'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const step = ref(1)
const percent = ref(0.25)

// 余额列表
const withdrawBalanceItem = reactive({
  balance: 0,
  name: '',
  subtitle: '',
  unit: '',
  currencyType: 0,
  usdAmount: 0
})
// 最低充值
let minWithdrawAmount = ref(0)
// 最低提现金额请求参数
const getWithdrawAmountForm = reactive({
  BlockchainCode: route.query?.BlockchainCode,
  CurrencyCode: route.query?.CurrencyCode
})

// step 2
let showBlockChainBox = ref(false)
let selBlockChainItem = reactive({
  chainName: '',
  subtitle: '',
  code: '',
  icon: ''
})

const withdrawForm = reactive({
  CurrencyCode: route.query?.CurrencyCode,
  BlockchainCode: '',
  VerificationCode: '',
  PayeeAddress: '',
  Amount: ''
})

// 跳转步骤
const jumpStep = (jumpTo) => {
  if (step.value < jumpTo) {
    return false
  }
  step.value = jumpTo
}

// 获取最低提现金额
const getMinWithdraw = () => {
  getMinWithdrawAmount(getWithdrawAmountForm)
    .then((resp) => {
      minWithdrawAmount.value = resp.data?.minimumWithdrawAmount
    })
    .catch((error) => {
      showToast('获取最低充值金额失败')
      console.log(error)
    })
}

// 获取余额列表
const getBalanceList = () => {
  getBalance()
    .then((resp) => {
      const item = resp.data.find((item) => item.name == getWithdrawAmountForm.CurrencyCode)
      if (item) {
        Object.assign(withdrawBalanceItem, item)
        getMinWithdraw()
      }
    })
    .catch((error) => {
      showToast('获取充值地址失败')
      console.log(error)
    })
}

// 输入提现金额进行精确计算
const computeAMount = (arg) => {
  percent.value = arg
  const barg = new BigNumber(arg)
  withdrawForm.Amount = barg.multipliedBy(withdrawBalanceItem.balance)
}

// USDT 选择trc20或trc20
const selBlockChain = (item) => {
  Object.assign(selBlockChainItem, item)
  showBlockChainBox.value = false
  withdrawForm.BlockchainCode = item.code
}

// 提现步骤选择
const selTab = () => {
  if (step.value == 1) {
    if (withdrawForm.Amount == '') {
      document.getElementById('amountInput').focus()
      showToast('请输入提现金额')
      return false
    }
    if (withdrawForm.Amount > withdrawBalanceItem.balance) {
      document.getElementById('amountInput').focus()
      showToast('提现金额不能大于余额')
      return false
    }
    if (withdrawForm.Amount < minWithdrawAmount.value) {
      document.getElementById('amountInput').focus()
      showToast('提现金额必须大于最低金额')
      return false
    }
    step.value = 2
  } else if (step.value == 2) {
    if (withdrawForm.PayeeAddress == '') {
      document.getElementById('address').focus()
      showToast('请输入提现地址')
      return false
    }
    withdrawForm.BlockchainCode = withdrawForm.BlockchainCode == '' ? selBlockChainItem.code : withdrawForm.BlockchainCode
    step.value = 3
  } else if (step.value == 3) {
    if (userStore.userInfo.isBindGoogleAuth && withdrawForm.VerificationCode == '') {
      showToast('Google验证码不能为空')
      document.getElementById('googleCode').focus()
      return false
    }
    withdrawOrder(withdrawForm)
      .then((resp) => {
        showToast('申请提现成功')
        userStore.getUserInfo()
        console.log(resp)
        step.value = 4
      })
      .catch((error) => {
        showToast('申请提现失败')
        console.log(error)
      })
  }
}

Object.assign(selBlockChainItem, usdtChainList[1])

getBalanceList()
</script>
