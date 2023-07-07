<template>
  <div class="page">
    <CommonHeader :title="t('transactionHistory')" />
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-tabs">
            <span :class="{ active: tab == 'deposit' }" @click="selTab('deposit')">{{ t('deposits') }}</span>
            <span :class="{ active: tab == 'withdraw' }" @click="selTab('withdraw')">{{ t('withdrawals') }}</span>
            <span :class="{ active: tab == 'bet' }" @click="selTab('bet')">{{ t('bets') }}</span>
            <span :class="{ active: tab == 'win' }" @click="selTab('win')">{{ t('wins') }}</span>
          </div>
          <div class="line-options">
            <!--此处参考sportsbet.io，一个带图标的下拉框，一个日期控件-->
            <ConfigProvider theme="dark" class="o-item">
              <DropdownMenu direction="down">
                <DropdownItem :title="t('currencyFilter')" ref="currenyDom" teleport="body">
                  <div class="drop-item" v-for="(item, index) of currenyList" :key="index" @click="selCurrency(item, index)">
                    <img :src="getAssetsFile(item.icon)" />
                    <span>{{ item.currenyName }}</span>
                    <Icon name="success" :class="{ active: checkedCurrency.includes(item.code) }" />
                  </div>
                  <div class="drop-btn">
                    <a class="btn btn-primary" @click="confirmCurreny()">{{ confirm }}</a>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </ConfigProvider>
            <div class="o-item" @click="showDatePicker = !showDatePicker">{{ t('dateFilter') }}</div>
          </div>
        </div>
        <div class="mb-conts">
          <template v-if="dataList.length > 0">
            <PullRefresh v-model="refreshing" :success-text="t('refreshSuccess')" @refresh="fresh">
              <List v-model="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" :error-text="t('loadingFail')" :finished-text="t('noMore')" @load="loadData">
                <div :class="tab == 'deposit' ? 'mc-box active' : 'mc-box'">
                  <div class="record-list">
                    <div v-for="(item, index) of dataList" class="rl-item" :key="index">
                      <div class="i-row">
                        <div class="r-col">{{ item.createTime }}</div>
                        <div class="r-col">
                          <b>{{ item.amount }} {{ item.currencyCode }}</b>
                        </div>
                      </div>
                      <div class="i-row">
                        <div class="r-col">{{ item.currencyCode }}</div>
                        <!-- <div class="r-col">余额：450.00 {{ item.currencyCode }}</div> -->
                      </div>
                      <div class="i-row flex-end">
                        <div class="r-col">
                          <span :class="`${orderStatusCss[item.orderStatus]} c-status`">{{ item.orderStatus }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </PullRefresh>
            <div :class="tab == 'withdraw' ? 'mc-box active' : 'mc-box '">
              <div class="record-list">
                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>200.00 CNY</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">人民币提款</div>
                    <div class="r-col">余额：450.00 CNY</div>
                  </div>
                  <div class="i-row flex-end">
                    <div class="r-col">
                      <span class="c-status confirmed">已确认</span>
                    </div>
                  </div>
                </div>

                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>300.00USDT</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">USDT提款</div>
                    <div class="r-col">余额：600.00 TRX</div>
                  </div>
                  <div class="i-row flex-end">
                    <div class="r-col">
                      <span class="c-status confirmed">已确认</span>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col line-col">
                      <div class="cc-l">交易号：651rx3234x9exe9e9x93x93x939x9x93x9x900..</div>
                      <div class="cc-r">
                        <span><i class="iconfont icon-tiaozhuan" /></span>
                        <span><i class="iconfont icon-fuzhi" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="tab == 'bet' ? 'mc-box active' : 'mc-box '">
              <div class="record-list">
                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>200.00 CNY</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">老虎机-PT</div>
                    <div class="r-col">余额：450.00 CNY</div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">电动吃饺子</div>
                    <div class="r-col">
                      <span class="c-status confirmed">已确认</span>
                    </div>
                  </div>
                </div>
                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>200.00 CNY</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">老虎机-PT</div>
                    <div class="r-col">余额：450.00 CNY</div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">电动吃饺子</div>
                    <div class="r-col">
                      <span class="c-status confirmed">已确认</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="tab == 'win' ? 'mc-box active' : 'mc-box '">
              <div class="record-list">
                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>200.00 CNY</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">输赢：<span class="txt-red">-40.00 CNY</span></div>
                    <div class="r-col">余额：450.00 CNY</div>
                  </div>
                </div>
                <div class="rl-item">
                  <div class="i-row">
                    <div class="r-col">2023-06-23 00:24</div>
                    <div class="r-col">
                      <b>200.00 CNY</b>
                    </div>
                  </div>
                  <div class="i-row">
                    <div class="r-col">输赢：<span class="txt-white">60.00 CNY</span></div>
                    <div class="r-col">余额：450.00 CNY</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
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

<script setup name="FundWithdraw">
import { ref, reactive } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

import { getDepositListApi, getWithdrawListApi, getBetListApi, getWinListApi } from '@/api/fund/index'
import { getAssetsFile } from '@/utils/index'
import { currenyList } from '@/utils/blockChain'
import { useI18n } from 'vue-i18n'

import dayjs from 'dayjs'
import { Calendar, ConfigProvider, DropdownMenu, DropdownItem, Icon, PullRefresh, List } from 'vant'
import 'vant/es/toast/style'
import 'vant/es/calendar/style'
import 'vant/es/dropdown-menu/style'
import 'vant/es/dropdown-item/style'
import 'vant/es/icon/style'
import 'vant/es/pull-refresh/style'
import 'vant/es/list/style'

const { t } = useI18n()

const tab = ref('deposit')

// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
let showDatePicker = ref(false)
//
let currenyDom = ref(null)
//  选择的币种
let checkedCurrency = ref([])

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

const orderStatusCss = ref(['', 'incomplete', 'confirmed', 'deleted'])
const dataList = ref([])

// 日期控件去掉日历格子下文字信息
const dayFormatter = (day) => {
  day.bottomInfo = ''
  return day
}

// 列表切换
const selTab = (tabs) => {
  if (tab.value == tabs) {
    return false
  } else {
    tab.value = tabs
    getTradeRecordList()
  }
}

// 选择币种
const selCurrency = (item) => {
  const index = checkedCurrency.value.indexOf(item.code)
  if (index > -1) {
    checkedCurrency.value.splice(index, 1)
  } else {
    checkedCurrency.value.push(item.code)
  }
}

// 选择币种后查询交易列表
const confirmCurreny = () => {
  currenyDom.value.toggle()
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
    case 'bet':
      getBetList()
      break
    case 'win':
      getWinList()
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

// 获取投注记录
const getBetList = () => {
  getBetListApi(query)
    .then((resp) => getListSuccess(resp))
    .catch((error) => getListFail(error))
}

// 获取中奖记录
const getWinList = () => {
  getWinListApi(query)
    .then((resp) => getListSuccess(resp))
    .catch((error) => getListFail(error))
}

const getListSuccess = (resp) => {
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

const getListFail = (error) => {
  listLoading.value = false
  refreshing.value = false
  console.log(error)
}

// 刷新
const fresh = () => {
  query.noLoading = true
  query.PageIndex = 1
  getTradeRecordList()
}

// 上拉加载更多数据
const loadData = () => {
  query.noLoading = true
  query.PageIndex++
  getTradeRecordList()
}

const customDate = (time) => {
  query.StartTime = dayjs(time[0]).format('YYYY-MM-DD')
  query.EndTime = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  getTradeRecordList()
  showDatePicker.value = false
}

checkedCurrency.value = currenyList.map((item) => item.code)

getTradeRecordList()
</script>
