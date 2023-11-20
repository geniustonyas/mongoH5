<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" @click="router.replace({ name: 'finance', query: { tab: route.query.tab } })">
          <!-- <div class="hml-l" @click="$router.back()"> -->
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">{{ t(route.query.title as string) }}</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col col-2"><input v-model="query.name" class="form-control" :placeholder="t('memberAccount')" /></div>
          <div class="a-col">
            <a class="btn btn-primary" @click="filterGetMemberInfo">{{ t('filter') }}</a>
          </div>
        </div>

        <template v-if="dataList.length > 0">
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
              <div class="ar-b">
                <table>
                  <tr>
                    <th>{{ t('memberAccount') }}</th>
                    <th>{{ t('level') }}</th>
                    <th v-if="route.query.title == 'depositDetails'">{{ t('deposit') }}</th>
                    <th v-if="route.query.title == 'withdrawDetails'">{{ t('withdraw') }}</th>
                    <th v-if="route.query.title == 'rewardDetails'">{{ t('rewards') }}</th>
                    <th v-if="route.query.title == 'totalWinLose'">{{ t('totalWinLose') }}</th>
                    <th v-if="route.query.title == 'ctfee'">{{ t('ctfee') }}</th>
                    <th>{{ t('regTime') }}</th>
                    <th>{{ t('lastLoginTime') }}</th>
                  </tr>
                  <tr v-for="(item, index) of dataList" class="rl-item" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.vip ? t('userLevels.' + item.vip) : t('userLevels.101') }}</td>
                    <td v-if="route.query.title == 'depositDetails'">
                      <b>{{ moneyFormat(item.deposit) }}</b>
                    </td>
                    <td v-if="route.query.title == 'withdrawDetails'">
                      <b>{{ moneyFormat(item.withdraw) }}</b>
                    </td>
                    <td v-if="route.query.title == 'rewardDetails'">
                      <b>{{ moneyFormat(item.reward) }}</b>
                    </td>
                    <td v-if="route.query.title == 'totalWinLose'">
                      <b v-if="item.win > 0" class="txt-green">{{ moneyFormat(item.win) }}</b>
                      <b v-else-if="item.win < 0" class="txt-red">{{ moneyFormat(item.win) }}</b>
                      <b v-else>{{ moneyFormat(item.win) }}</b>
                    </td>
                    <td v-if="route.query.title == 'ctfee'">
                      <b>{{ moneyFormat(item.fee) }}</b>
                    </td>
                    <td>{{ dayjs(item.regTime).format('YYYY-MM-DD') }}</td>
                    <td>{{ dayjs(item.lastTime).format('YYYY-MM-DD') }}</td>
                  </tr>
                </table>
              </div>
            </List>
          </PullRefresh>
        </template>
        <Nodata v-show="nodata" :message="t('nodata')" />
      </div>
    </main>
    <ConfigProvider theme="dark">
      <Calendar
        v-model:show="showRegDatePicker"
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
      <Calendar
        v-model:show="showStatDatePicker"
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
        @confirm="customStatDate"
      />
    </ConfigProvider>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import { moneyFormat } from '@/utils/index'
import { getMemberInfoApi } from '@/api/affiliate'
import { getMemberInfoDataResp, getMemberInfoRespItem } from '@/api/affiliate/types'
import { useUserStore } from '@/store/modules/user'

import Nodata from '@/components/Nodata.vue'

import dayjs from 'dayjs'
import { ConfigProvider, Calendar, PullRefresh, List } from 'vant'
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/zh-cn'
dayjs.extend(weekday)
dayjs.locale('zh-cn')

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const shotBtnDate = computed(() => {
  return [
    { tab: 1, text: t('today'), value: [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')] },
    { tab: 2, text: t('yestoday'), value: [dayjs().subtract(1, 'day').format('YYYY-MM-DD'), dayjs().subtract(1, 'day').format('YYYY-MM-DD')] },
    { tab: 3, text: t('currentWeek'), value: [dayjs().startOf('week').format('YYYY-MM-DD'), dayjs().endOf('week').format('YYYY-MM-DD')] },
    {
      tab: 4,
      text: t('laskWeek'),
      value: [dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'), dayjs().subtract(1, 'week').endOf('week').add(1, 'day').format('YYYY-MM-DD')]
    },
    { tab: 5, text: t('currentMonth'), value: [dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD')] }
  ]
})

// 默认日期
let defaultDate = [dayjs().startOf('month').toDate(), dayjs().add(1, 'day').toDate()]
// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
const showRegDatePicker = ref(false)
const showStatDatePicker = ref(false)
// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}

// 选择注册时间回调
const customRegDate = (time: any) => {
  query.startreg = dayjs(time[0]).format('YYYY-MM-DD')
  query.endreg = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  showRegDatePicker.value = false
}

// 选择统计时间回调
const customStatDate = (time: any) => {
  query.start = dayjs(time[0]).format('YYYY-MM-DD')
  query.end = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  showStatDatePicker.value = false
}

const query = reactive({
  agentId: userStore.userInfo.id,
  agentName: null,
  name: null,
  startreg: '',
  endreg: '',
  start: '',
  end: '',
  bet: -1,
  field: route.query.field as string,
  page: 1,
  pcount: 20
})

const timeItem = shotBtnDate.value.find((item: any) => {
  return item.tab == route.query.tab
})
if (timeItem) {
  query.start = timeItem.value[0]
  query.end = dayjs(timeItem.value[1]).add(1, 'day').format('YYYY-MM-DD') || ''
}

// 列表刷新下拉等参数
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
const nodata = ref(false)
const dataList = ref<getMemberInfoRespItem[]>([])

// 获取数据
const getMemberInfo = () => {
  getMemberInfoApi(query)
    .then((resp: getMemberInfoDataResp) => {
      if (refreshing.value) {
        dataList.value = resp.data.items
      } else {
        dataList.value.push(...resp.data.items)
      }
      nodata.value = dataList.value.length == 0
      refreshing.value = false
      finished.value = resp.data.items.length < query.pcount
      listLoading.value = false
    })
    .catch((error: any) => {
      listLoading.value = false
      refreshing.value = false
      console.log(error)
    })
}

// 刷新
const fresh = () => {
  query.page = 1
  getMemberInfo()
}

// 上拉加载更多数据
const loadData = () => {
  query.page += 1
  getMemberInfo()
}

const filterGetMemberInfo = () => {
  query.page = 1
  dataList.value = []
  listLoading.value = true
  getMemberInfo()
}

getMemberInfo()
</script>
