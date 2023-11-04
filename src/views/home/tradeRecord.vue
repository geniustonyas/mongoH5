<template>
  <div class="page">
    <CommonHeader :title="t('transactionHistory')" />
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-tabs">
            <span :class="{ active: query.RecordType == HisotyReocrdType.Deposit }" @click="selTab(HisotyReocrdType.Deposit)">{{ t('deposit') }}</span>
            <span :class="{ active: query.RecordType == HisotyReocrdType.Withdraw }" @click="selTab(HisotyReocrdType.Withdraw)">{{ t('withdraw') }}</span>
            <span :class="{ active: query.RecordType == HisotyReocrdType.Bet }" @click="selTab(HisotyReocrdType.Bet)">{{ t('bets') }}</span>
            <span :class="{ active: query.RecordType == HisotyReocrdType.Reward }" @click="selTab(HisotyReocrdType.Reward)">{{ t('wins') }}</span>
          </div>
          <div class="line-options">
            <ConfigProvider theme="dark" class="o-item">
              <DropdownMenu direction="down">
                <DropdownItem :title="t('currencyFilter')" ref="currenyDom" teleport="body">
                  <div class="drop-item" v-for="(item, index) of currenyList" :key="index" @click="selCurrency(item)">
                    <img :src="getAssetsFile(item.icon)" />
                    <span>{{ item.currenyName }}</span>
                    <span><Icon v-show="checkedCurrency.includes(item.code)" name="success" class="active" /></span>
                  </div>
                  <div class="drop-btn">
                    <a class="btn btn-primary" @click="confirmCurreny()">{{ t('confirm') }}</a>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </ConfigProvider>
            <div class="o-item" @click="showDatePicker = !showDatePicker">{{ t('dateFilter') }}</div>
          </div>
        </div>
        <div class="mb-conts">
          <div v-if="dataList.length > 0" class="mc-box">
            <div class="record-list">
              <PullRefresh v-model="refreshing" :success-text="t('refreshSuccess')" @refresh="fresh">
                <List
                  v-model:loading="listLoading"
                  :offset="20"
                  :finished="finished"
                  :immediate-check="false"
                  v-model:error="error"
                  :error-text="t('loadingFail')"
                  :finished-text="t('noMore')"
                  @load="loadData"
                >
                  <div v-for="(item, index) of dataList" class="rl-item" :key="index" @click="getTradeDetail(item)">
                    <div class="i-row">
                      <div class="r-col">{{ item.createTime }}</div>
                      <div class="r-col">
                        <b>{{ moneyFormat(item.amount) }} {{ item.currencyCode }}</b>
                      </div>
                    </div>
                    <div class="i-row">
                      <div class="r-col">{{ item.category == 1 || item.category == 2 ? item.currencyCode : '' }} {{ t('fundCategory.' + item.category) }}</div>
                      <div class="r-col">
                        <span :class="`${orderStatusCss[item.orderStatus]} c-status`">{{ t(`withdrawStatus[${item.orderStatus}]`) }}</span>
                      </div>
                    </div>
                    <!-- <div v-if="item.remark && item.remark != ''" class="i-row wrap">
                      {{ t('remark') }}：
                      {{ item.remark }}
                    </div> -->
                  </div>
                </List>
              </PullRefresh>
            </div>
          </div>
          <Nodata v-show="nodata" :message="t('nodata')" />
        </div>
      </div>
    </main>
    <ConfigProvider theme="dark">
      <Calendar
        v-model:show="showDatePicker"
        :default-date="defaultDate"
        type="range"
        :min-date="minDate"
        :max-date="maxDate"
        color="#f7cc00"
        :allow-same-day="true"
        :style="{ height: '500px' }"
        round
        :show-confirm="false"
        :show-mark="false"
        :formatter="dayFormatter"
        @confirm="customDate"
      />
      <Popup v-model:show="showDetailsBox" round style="width: 80%" :closeable="true" @closed="clearData">
        <div v-if="detailsData.id" class="fund-form wa" style="">
          <div class="ff-w-a">
            <h2>{{ t('tradeDetails') }}</h2>
            <p v-if="detailsData.category == 1">{{ detailsData.currencyCode }} {{ t('fundCategory.' + detailsData.category) }}</p>
            <p v-else-if="detailsData.category == 2">{{ detailsData.currencyCode }} {{ t('fundCategory.' + detailsData.category) }}</p>
            <p v-else-if="detailsData.category == 3">{{ t('fundCategory.' + detailsData.category) + ' ' + detailsData.gameName }}</p>
            <p v-else-if="detailsData.category == 4">{{ t('fundCategory.' + detailsData.category) + ' ' + detailsData.gameName }}</p>
            <p v-else-if="detailsData.category == 8">{{ t('fundCategory.' + detailsData.category) + ' ' + detailsData.gameName }}</p>
            <p v-else>{{ t('fundCategory.' + detailsData.category) }}</p>
          </div>
          <dl class="ff-rows">
            <dt>{{ t('summary') }}</dt>
            <dd>
              {{ t('status') }}: <span>{{ t(`withdrawStatus[${detailsData.orderStatus}]`) }}</span>
            </dd>
            <dd>
              {{ t('date') }}:
              <span>{{ dayjs(detailsData.createTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
            </dd>
            <dd>
              {{ t('transactionType') }}:
              <span>{{ detailsData.category == 1 || detailsData.category == 2 ? detailsData.currencyCode : '' }} {{ t('fundCategory.' + detailsData.category) }}</span>
            </dd>
            <dd>
              {{ t('amount') }}:
              <span>{{ moneyFormat(detailsData.amount) }}&nbsp;{{ detailsData.currencyCode }}</span>
            </dd>
            <dd>
              {{ t('finalBalance') }}:
              <span>{{ moneyFormat(detailsData.afterBalance) }}&nbsp;{{ detailsData.currencyCode }}</span>
            </dd>
            <dd v-if="detailsData.remark && detailsData.remark != ''">
              {{ t('remark') }}:
              <span>{{ detailsData.remark }}</span>
            </dd>
          </dl>
          <template v-if="detailsData.txId && detailsData.txId != ''">
            <div class="txid-cont">
              <div class="tc-title">{{ t('tradeCode') }}</div>
              <div class="tc_id" @click="openExplorer(detailsData)">
                <span>{{ detailsData.txId }}</span>
                <i class="iconfont icon-tiaozhuan" />
              </div>
              <div class="tx-btn">
                <a class="btn btn-primary copy" :data-clipboard-text="detailsData.txId">
                  {{ t('copyTradeCode') }}
                </a>
              </div>
            </div>
          </template>
          <dl class="cur-lsit">
            <dt>{{ t('support2') }}</dt>
            <dd>
              <a @click="router.push({ name: 'faq' })">
                <span> <i class="iconfont icon-guanyuwomen" />{{ t('question') }} </span>
                <i class="iconfont icon-right" />
              </a>
            </dd>
            <dd>
              <a @click="liveChatCall('maximize')">
                <span> <i class="iconfont icon-xiaoxi" />{{ t('liveSupport') }} </span>
                <i class="iconfont icon-right" />
              </a>
            </dd>
          </dl>
        </div>
      </Popup>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

import { getHistoryRecordApi, getHistoryRecordDetailsApi } from '@/api/fund/index'
import { getHistoryRecordItems, getHistoryRecordDetails } from '@/api/fund/types'
import { getAssetsFile, copy } from '@/utils/index'
import { currenyListData, currenyListTypes } from '@/utils/config'
import { HisotyReocrdType } from '@/utils/constant'
import dynamicObject from '@/types/dynamicObject'
import { useI18n } from 'vue-i18n'
import { liveChatCall } from '@/composables/startGame'
import { moneyFormat } from '@/utils/index'
import dayjs from 'dayjs'
import { Calendar, ConfigProvider, DropdownMenu, DropdownItem, Icon, PullRefresh, List, Popup, showConfirmDialog } from 'vant'
import type { DropdownItemInstance } from 'vant'
import { cloneDeep } from 'lodash-es'

const router = useRouter()
const { t, locale } = useI18n()
const currenyList = currenyListData()

// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
let showDatePicker = ref(false)
//
let currenyDom = ref<DropdownItemInstance>()
//  选择的币种
let checkedCurrency = ref<string[]>([])

// 列表刷新下拉等参数
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
let nodata = ref(false)
let defaultDate = [dayjs().subtract(7, 'day').toDate(), dayjs().add(1, 'day').toDate()]
const query = reactive({
  CurrencyCode: '',
  RecordType: HisotyReocrdType.Deposit,
  StartTime: dayjs(defaultDate[0]).format('YYYY-MM-DD'),
  EndTime: dayjs(defaultDate[1]).format('YYYY-MM-DD'),
  PageIndex: '1',
  PageSize: '10',
  noLoading: false
})

// // 区块链浏览器映射
// const explorer = reactive({
//   Binance: 'https://bscscan.com/tx/',
//   Bitcoin: 'https://www.blockchain.com/explorer/transactions/btc/',
//   Cardano: 'https://blockchair.com/cardano/transaction/',
//   Dogecoin: 'https://blockchair.com/dogecoin/transaction/',
//   Ethereum: 'https://etherscan.io/tx/',
//   Litecoin: 'https://blockchair.com/litecoin/transaction/',
//   Ripple: 'https://blockchair.com/ripple/transaction/',
//   Toncoin: 'https://etherscan.io/tx/',
//   Tron: 'https://tronscan.org/#/transaction/'
// })

const coinMap = {
  Binance: 'bnb',
  Bitcoin: 'bitcoin',
  Cardano: 'cardano',
  Dogecoin: 'dogecoin',
  Ethereum: 'ethereum',
  Litecoin: 'litecoin',
  Ripple: 'ripple',
  Toncoin: 'ethereum',
  Tron: 'ethereum'
}

const langMap = {
  ja: 'https://blockchair.com/ja',
  es: 'https://blockchair.com/es',
  pt: 'https://blockchair.com/pt',
  tr: 'https://blockchair.com/tr',
  th: 'https://blockchair.com',
  en: 'https://blockchair.com',
  de: 'https://blockchair.com/de',
  zh: 'https://blockchair.com/zh',
  fr: 'https://blockchair.com/fr',
  ko: 'https://blockchair.com/ko',
  vi: 'https://blockchair.com'
}

const orderStatusCss = ref<dynamicObject>(['', 'incomplete', 'confirmed', 'deleted'])
const dataList = ref<getHistoryRecordItems[]>([])

// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}

// 交易详情
const showDetailsBox = ref(false)
const detailsData = reactive<getHistoryRecordDetails>({
  id: '',
  category: 0,
  amount: '',
  orderStatus: '',
  createTime: '',
  currencyCode: '',
  afterBalance: '',
  gameName: '',
  orderId: '',
  txId: '',
  toAddress: '',
  blockchainCode: '',
  remark: ''
})
const defaultDetailsData = cloneDeep(detailsData)

// 列表切换
const selTab = (tabs: HisotyReocrdType) => {
  nodata.value = false
  query.PageIndex = '1'
  query.noLoading = false
  dataList.value = []
  if (query.RecordType == tabs) {
    return false
  } else {
    query.RecordType = tabs
    getTradeRecordList()
  }
}

// 选择币种
const selCurrency = (item: currenyListTypes) => {
  const index = checkedCurrency.value.indexOf(item.code)
  if (index > -1) {
    checkedCurrency.value.splice(index, 1)
  } else {
    checkedCurrency.value.push(item.code)
  }
}

// 选择币种后查询交易列表
const confirmCurreny = () => {
  currenyDom?.value!.toggle()
  query.PageIndex = '1'
  dataList.value = []
  getTradeRecordList()
}

// 获取记录
const getTradeRecordList = () => {
  query.CurrencyCode = checkedCurrency.value.join(',')
  getHistoryRecordApi(query)
    .then((resp) => {
      if (refreshing.value) {
        dataList.value = resp.data.items
      } else {
        dataList.value.push(...resp.data.items)
      }
      // dataList.value[0].amount = '0.000018'
      nodata.value = dataList.value.length == 0
      refreshing.value = false
      finished.value = resp.data.items.length < parseInt(query.PageSize)
      listLoading.value = false
    })
    .catch((error: any) => {
      listLoading.value = false
      refreshing.value = false
      console.log(error)
    })
}

// 获取交易详情
const getTradeDetail = (item: getHistoryRecordItems) => {
  getHistoryRecordDetailsApi({ Id: item.id })
    .then((resp) => {
      Object.assign(detailsData, resp.data)
      nextTick(() => {
        copy('.copy')
      })
      showDetailsBox.value = true
    })
    .catch((error) => {
      console.log(error)
    })
}

// 刷新
const fresh = () => {
  query.noLoading = true
  query.PageIndex = '1'
  listLoading.value = true
  getTradeRecordList()
}

// 上拉加载更多数据
const loadData = () => {
  listLoading.value = true
  query.noLoading = true
  query.PageIndex = (parseInt(query.PageIndex) + 1).toString()
  getTradeRecordList()
}

const customDate = (time: any) => {
  query.StartTime = dayjs(time[0]).format('YYYY-MM-DD')
  query.EndTime = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  dataList.value = []
  getTradeRecordList()
  showDatePicker.value = false
}

const openExplorer = (detailsData: getHistoryRecordDetails) => {
  if (detailsData.blockchainCode) {
    let url = ''
    if (detailsData.blockchainCode != 'Tron') {
      //@ts-ignore
      url = langMap[locale.value] + '/' + coinMap[detailsData.blockchainCode] + '/transaction/' + detailsData.txId
    } else {
      url = 'https://tronscan.org/#/transaction/' + detailsData.txId
    }
    const wd = window.open(url)
    if (!wd) {
      showConfirmDialog({
        title: t(''),
        message: t('tips.openWindow')
      })
        .then(() => {
          if (detailsData.blockchainCode) {
            window.open(url)
          }
        })
        .catch(() => {
          return false
        })
    }
  }
}

const clearData = () => {
  Object.assign(detailsData, defaultDetailsData)
}

checkedCurrency.value = currenyList.map((item) => item.code)
getTradeRecordList()
// getTradeRecordList()
// setInterval(() => {
//   getTradeRecordList()
// }, 30 * 1000)
</script>
