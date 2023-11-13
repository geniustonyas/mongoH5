<template>
  <div class="page">
    <CommonHeader :title="t('financeReport')" />
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-e">
          <div class="a-l">
            <a v-for="(item, index) of shotBtnDate" :key="index" :class="tab == item.tab ? 'btn btn-light active' : 'btn btn-light'" @click="shotQuery(item.value, item.tab)">{{ item.text }}</a>
          </div>
          <div class="a-r">
            <input readonly class="form-control" :value="query.start != '' ? query.start + ' - ' + query.end : ''" :placeholder="t('statTime')" @focus="showDatePicker = true" />
            <a class="btn btn-primary" @click="getFinanceData">{{ t('filter') }}</a>
          </div>
        </div>
        <div class="ar-b">
          <div class="report-finance-box">
            <ul>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('deposit') }}</span>
                      <b>{{ financeData.deposit }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-chongbi1" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="router.push({ name: 'financeDetails', query: { title: 'depositDetails', tab: tab } })">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <div class="it-l">
                        <span>{{ t('withdraw') }}</span>
                        <b>{{ financeData.withdraw }}</b>
                      </div>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-tibi1" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="router.push({ name: 'financeDetails', query: { title: 'withdrawDetails', tab: tab } })">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('rewards') }}</span>
                      <b>{{ financeData.reward }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-pingtaihongli" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="router.push({ name: 'financeDetails', query: { title: 'rewardDetails', tab: tab } })">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('netFee') }}</span>
                      <b>{{ financeData.network }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-wangluofei" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('totalWinLose') }}</span>
                      <b>{{ financeData.winlose }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-zongshuying" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="router.push({ name: 'financeDetails', query: { title: 'totalWinLose', tab: tab } })">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('ctfee') }}</span>
                      <b>{{ financeData.fee }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-shouxufei" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="router.push({ name: 'financeDetails', query: { title: 'ctfee', tab: tab } })">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('jingWinLose') }}</span>
                      <b>{{ financeData.netwin }}</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-jinglirun" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ar-m"><i class="iconfont icon-info" />{{ t('winLoseTip') }}</div>
      </div>
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
          @confirm="customRegDate"
        />
      </ConfigProvider>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import { getFinanceDataApi } from '@/api/affiliate'
import { getFinanceDataRespItem, getFinanceDataResp } from '@/api/affiliate/types'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { Calendar } from 'vant'
import dayjs from 'dayjs'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const showDatePicker = ref(false)
// 默认日期
let defaultDate = [dayjs().subtract(7, 'day').toDate(), dayjs().add(1, 'day').toDate()]
// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}
const customRegDate = (time: any) => {
  query.start = dayjs(time[0]).format('YYYY-MM-DD')
  query.end = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  showDatePicker.value = false
  tab.value = 0
}

// 快捷选项激活的tab
const tab = ref(0)
// 利用dayjs生成今日，昨日，本周，上周，本月的YYYY-MM-DD格式的日期
const shotBtnDate = computed(() => {
  return [
    { tab: 1, text: t('today'), value: [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')] },
    { tab: 2, text: t('yestoday'), value: [dayjs().subtract(1, 'day').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')] },
    { tab: 3, text: t('currentWeek'), value: [dayjs().startOf('week').format('YYYY-MM-DD'), dayjs().endOf('week').format('YYYY-MM-DD')] },
    { tab: 4, text: t('laskWeek'), value: [dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'), dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD')] },
    { tab: 5, text: t('currentMonth'), value: [dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD')] }
  ]
})

// 请求参数
const query = reactive({
  start: '',
  end: ''
})

const financeData = reactive<getFinanceDataRespItem>({
  deposit: 0,
  withdraw: 0,
  reward: 0,
  fee: 0,
  winlose: 0,
  network: 0,
  netwin: 0
})

const getFinanceData = () => {
  getFinanceDataApi({ start: query.start, end: dayjs(query.end).add(1, 'day').format('YYYY-MM-DD') })
    .then((resp: getFinanceDataResp) => {
      Object.assign(financeData, resp.data)
    })
    .catch((err: any) => {
      console.log(err)
    })
}

const shotQuery = (time: string[], tb: number) => {
  tab.value = tb
  query.start = time[0]
  query.end = time[1]
  getFinanceData()
}

if (route.query.tab) {
  const timeItem = shotBtnDate.value.find((item: any) => {
    return item.tab == route.query.tab
  })
  tab.value = parseInt(route.query.tab as string)
  if (timeItem) {
    query.start = timeItem.value[0]
    query.end = dayjs(timeItem.value[1]).format('YYYY-MM-DD') || ''
  }
  getFinanceData()
} else {
  shotQuery(shotBtnDate.value[0].value, shotBtnDate.value[0].tab)
}
</script>
