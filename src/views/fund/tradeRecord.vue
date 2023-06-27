<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" @click="router.back()">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">Transaction history</div>
      </div>
    </header>
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-tabs">
            <span :class="{ active: tab == 'deposit' }" @click="selTab('deposit')">Deposits</span>
            <span :class="{ active: tab == 'withdraw' }" @click="selTab('withdraw')">Withdrawals</span>
            <span :class="{ active: tab == 'bet' }" @click="selTab('bet')">Bets</span>
            <span :class="{ active: tab == 'win' }" @click="selTab('win')">Wins</span>
          </div>
          <div class="line-options">
            <!--此处参考sportsbet.io，一个带图标的下拉框，一个日期控件-->
            <div class="o-item">CURRENCY</div>
            <div class="o-item" @click="showDatePicker = !showDatePicker">FILTER BY DATE</div>
          </div>
        </div>
        <div class="mb-conts">
          <div :class="tab == 'deposit' ? 'mc-box active' : 'mc-box '">
            <div class="record-list">
              <div class="rl-item">
                <div class="i-row">
                  <div class="r-col">2023-06-23 00:24</div>
                  <div class="r-col">
                    <b>200.00 CNY</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">人民币存款</div>
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
                    <b>200.00 CNY</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">人民币存款</div>
                  <div class="r-col">余额：450.00 CNY</div>
                </div>
                <div class="i-row flex-end">
                  <div class="r-col">
                    <span class="c-status incomplete">未完成</span>
                  </div>
                </div>
              </div>
              <div class="rl-item">
                <div class="i-row">
                  <div class="r-col">2023-06-23 00:24</div>
                  <div class="r-col">
                    <b>300.00TRX</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">TRX存款</div>
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
              <div class="rl-item">
                <div class="i-row">
                  <div class="r-col">2023-06-23 00:24</div>
                  <div class="r-col">
                    <b>300.00USDT</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">USDT存款</div>
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
              <div class="rl-item">
                <div class="i-row">
                  <div class="r-col">2023-06-23 00:24</div>
                  <div class="r-col">
                    <b>200.00 CNY</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">人民币存款</div>
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
                    <b>200.00 CNY</b>
                  </div>
                </div>
                <div class="i-row">
                  <div class="r-col">人民币存款</div>
                  <div class="r-col">余额：450.00 CNY</div>
                </div>
                <div class="i-row flex-end">
                  <div class="r-col">
                    <span class="c-status confirmed">已确认</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </main>
    <ConfigProvider theme="dark">
      <Calendar v-model:show="showDatePicker" type="range" :min-date="minDate" :max-date="maxDate" color="#f7cc00" :style="{ height: '500px' }" round :show-confirm="false" @confirm="customDate" />
    </ConfigProvider>
  </div>
</template>

<script setup name="FundWithdraw">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Nodata from '@/components/Nodata.vue'

import { getTradeRecord } from '@/api/fund/index'

import dayjs from 'dayjs'
import { showToast, Calendar, ConfigProvider, PullRefresh, List } from 'vant'
import 'vant/es/toast/style'
import 'vant/es/calendar/style'

const router = useRouter()
const route = useRoute()

const tab = ref('deposit')

// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
let showDatePicker = ref(false)
// 币种
let showCurrencyBox = ref(false)

const recordForm = reactive({
  StartDate: '',
  EndDate: ''
})

const dataList = ref([])

const selTab = (tabs) => {
  if (tab.value == tabs) {
    return false
  } else {
    tab.value = tabs
    getTradeRecordList()
  }
}

// 获取余额列表
const getTradeRecordList = () => {
  switch (tab.value) {
    case 'deposit':
      getTradeRecord()
      break
    default:
      break
  }
  getTradeRecord()
    .then((resp) => {
      dataList.value = resp.data
    })
    .catch((error) => {
      showToast('获取交易记录失败')
      console.log(error)
    })
}

const customDate = (time) => {
  recordForm.StartDate = dayjs(time[0]).format('YYYY-MM-DD')
  recordForm.EndDate = dayjs(time[1]).format('YYYY-MM-DD')
  getTradeRecordList()
  showDatePicker.value = false
}

getTradeRecordList()
</script>
