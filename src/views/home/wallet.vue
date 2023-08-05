<template>
  <div class="page">
    <CommonHeader :title="t('wallet')" />
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-tabs">
            <span :class="{ active: tab == 'deposit' }" @click="selTab('deposit')">{{ t('deposits') }}</span>
            <span :class="{ active: tab == 'withdraw' }" @click="selTab('withdraw')">{{ t('withdrawals') }}</span>
          </div>
          <div class="line-options">
            <!--此处参考sportsbet.io，一个带图标的下拉框，一个日期控件-->
            <ConfigProvider theme="dark" class="o-item">
              <DropdownMenu direction="down">
                <DropdownItem :title="t('currencyFilter')" ref="currenyDom" teleport="body">
                  <div class="drop-item" v-for="(item, index) of currenyList" :key="index" @click="selCurrency(item)">
                    <img :src="getAssetsFile(item.icon)" />
                    <span>{{ item.currenyName }}</span>
                    <Icon name="success" :class="{ active: checkedCurrency.includes(item.code) }" />
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
            <div v-if="tab == 'deposit' || tab == 'withdraw'" class="record-list">
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
                  <div v-for="(item, index) of dataList" class="rl-item" :key="index">
                    <div class="i-row">
                      <div class="r-col">{{ item.createTime }}</div>
                      <div class="r-col">
                        <b>{{ moneyFormat(item.amount) }} {{ item.currencyCode }}</b>
                      </div>
                    </div>
                    <div class="i-row">
                      <div class="r-col">{{ item.currencyCode }} {{ t(tab == 'deposit' ? 'deposit' : 'withdraw') }}</div>
                      <div class="r-col">{{ t('balance') }}：{{ moneyFormat(item.afterBalance) }} {{ item.currencyCode }}</div>
                    </div>
                    <div class="i-row flex-end">
                      <div class="r-col">
                        <span :class="`${orderStatusCss[item.orderStatus]} c-status`">{{ t(`tradeStatus[${item.orderStatus}]`) }}</span>
                      </div>
                    </div>
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
        type="range"
        :min-date="minDate"
        :max-date="maxDate"
        color="#f7cc00"
        :allow-same-day="true"
        :style="{ height: '500px' }"
        round
        :show-confirm="false"
        :formatter="dayFormatter"
        @confirm="customDate"
      />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

import { getDepositListApi, getWithdrawListApi } from '@/api/fund/index'
import { getRradeRecordResponse } from '@/api/fund/types'
import { getAssetsFile } from '@/utils/index'
import { currenyList, currenyListTypes } from '@/utils/blockChain'
import dynamicObject from '@/types/dynamicObject'
import { useI18n } from 'vue-i18n'

import { moneyFormat } from '@/utils/index'
import dayjs from 'dayjs'
import { Calendar, ConfigProvider, DropdownMenu, DropdownItem, Icon, PullRefresh, List } from 'vant'
import type { DropdownItemInstance } from 'vant'

const { t } = useI18n()

const tab = ref('deposit')

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
const query = reactive({
  CurrencyCode: '',
  StartTime: '',
  EndTime: '',
  PageIndex: '1',
  PageSize: '20',
  noLoading: false
})

const orderStatusCss = ref<dynamicObject>(['', 'incomplete', 'confirmed', 'deleted'])
const dataList = ref<getRradeRecordResponse[]>([])

// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}

// 列表切换
const selTab = (tabs: string) => {
  nodata.value = false
  query.PageIndex = '1'
  dataList.value = []
  if (tab.value == tabs) {
    return false
  } else {
    tab.value = tabs
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
  getTradeRecordList()
}

// 获取交易列表
const getTradeRecordList = () => {
  query.CurrencyCode = checkedCurrency.value.join(',')
  switch (tab.value) {
    case 'deposit':
      getDepositList()
      break
    case 'withdraw':
      getWithdrawList()
      break
    default:
      break
  }
}

// 获取充值记录
const getDepositList = () => {
  getDepositListApi(query)
    .then((resp) => getListSuccess(resp))
    .catch((error) => getListFail(error))
}

// 获取提现记录
const getWithdrawList = () => {
  getWithdrawListApi(query)
    .then((resp) => getListSuccess(resp))
    .catch((error) => getListFail(error))
}

const getListSuccess = (resp: any) => {
  if (refreshing.value) {
    dataList.value = resp.data.items
  } else {
    dataList.value.push(...resp.data.items)
  }
  nodata.value = dataList.value.length == 0
  refreshing.value = false
  finished.value = resp.data.items.length < query.PageSize
  listLoading.value = false
}

const getListFail = (error: any) => {
  listLoading.value = false
  refreshing.value = false
  console.log(error)
}

// 刷新
const fresh = () => {
  query.noLoading = true
  query.PageIndex = '1'
  getTradeRecordList()
}

// 上拉加载更多数据
const loadData = () => {
  query.noLoading = true
  query.PageIndex = (parseInt(query.PageIndex) + 1).toString()
  getTradeRecordList()
}

const customDate = (time: any) => {
  query.StartTime = dayjs(time[0]).format('YYYY-MM-DD')
  query.EndTime = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  getTradeRecordList()
  showDatePicker.value = false
}

checkedCurrency.value = currenyList.map((item) => item.code)

getTradeRecordList()
</script>
