<template>
  <div class="page">
    <CommonHeader :title="t('memberInfo')" />
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col">
            <ConfigProvider theme="dark" class="agent-sel">
              <DropdownMenu direction="down">
                <DropdownItem v-model="query.bet" ref="categoryDom" :options="isBetOption" />
              </DropdownMenu>
            </ConfigProvider>
          </div>
          <div class="a-col">
            <input readonly class="form-control" :value="query.startreg != '' ? query.startreg + ' - ' + query.endreg : ''" :placeholder="t('regTime')" @focus="showRegDatePicker = true" />
          </div>
          <div class="a-col">
            <input readonly class="form-control" :value="query.start != '' ? query.start + ' - ' + query.end : ''" :placeholder="t('statTime')" @focus="showStatDatePicker = true" />
          </div>
          <div class="a-col col-2"><input v-model="query.name" class="form-control" :placeholder="t('memberAccount')" /></div>
          <div class="a-col">
            <a class="btn btn-primary" @click="getMemberInfo">{{ t('filter') }}</a>
          </div>
        </div>

        <div class="ar-c">
          <ul>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>{{ t('deposit') }}</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>{{ t('withdraw') }}</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>{{ t('totalWinLose') }}</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>{{ t('regTime') }}</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>{{ t('statTime') }}</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>存款</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>提款</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>总输赢</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>注册时间</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>统计时间</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>存款</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>提款</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>总输赢</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>注册时间</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>统计时间</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="ar-b">
          <table>
            <tr>
              <th>{{ t('memberAccount') }}</th>
              <th>{{ t('level') }}</th>
              <th>{{ t('deposit') }}</th>
              <th>{{ t('withdraw') }}</th>
              <th>{{ t('totalWinLose') }}</th>
              <th>{{ t('regTime') }}</th>
              <th>{{ t('lastLoginTime') }}</th>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
    <ConfigProvider theme="dark">
      <Calendar
        v-model:show="showRegDatePicker"
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
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import { getMemberInfoApi } from '@/api/affiliate'
import { getMemberInfoDataResp, getMemberInfoRespItem } from '@/api/affiliate/types'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import dayjs from 'dayjs'
import { DropdownMenu, DropdownItem, ConfigProvider, Calendar } from 'vant'

const { t } = useI18n()

const isBetOption = ref([
  { text: t('isBet'), value: null },
  { text: t('no'), value: 0 },
  { text: t('yes'), value: 1 }
])

// 默认日期
let defaultDate = [dayjs().subtract(7, 'day').toDate(), dayjs().add(1, 'day').toDate()]
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
  name: null,
  startreg: '',
  endreg: '',
  start: '',
  end: '',
  bet: null,
  page: 1,
  pcount: 30
})

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
    }).catch((error: any) => {
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

getMemberInfo()
</script>
