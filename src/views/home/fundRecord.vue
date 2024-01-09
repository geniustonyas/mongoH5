<template>
  <div class="page">
    <CommonHeader :title="t('fundRecord')" />
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-options">
            <ConfigProvider theme="dark" class="o-item">
              <DropdownMenu direction="down">
                <DropdownItem :title="t('currencyFilter')" ref="currenyDom">
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
            <ConfigProvider theme="dark" class="o-item">
              <DropdownMenu direction="down">
                <DropdownItem v-model="query.Category" ref="categoryDom" :options="fundCategory" @click="selCategory" />
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
                    </div>
                    <div class="i-row">
                      <div class="r-col">{{ formatterCategory(item.category) }}</div>
                      <div class="r-col">{{ moneyFormat(item.amount) }} {{ item.currencyCode }}</div>
                    </div>
                    <div class="i-row">
                      <div class="r-col">
                        {{ t('beforeBalance') }}
                      </div>
                      <div class="r-col">
                        {{ moneyFormat(item.beforeBalance) + item.currencyCode }}
                      </div>
                    </div>
                    <div class="i-row">
                      <div class="r-col">
                        {{ t('afterBalance') }}
                      </div>
                      <div class="r-col">
                        {{ moneyFormat(item.afterBalance) + item.currencyCode }}
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

import { getFundChangeRecordApi } from '@/api/fund/index'
import { getFundChangeRecordRespItems } from '@/api/fund/types'
import { getAssetsFile } from '@/utils/index'
import { currenyListData, currenyListTypes, fundCategoryData } from '@/utils/config'
import { useI18n } from 'vue-i18n'

import { moneyFormat } from '@/utils/index'
import dayjs from 'dayjs'
import { Calendar, ConfigProvider, DropdownMenu, DropdownItem, Icon, PullRefresh, List } from 'vant'
import type { DropdownItemInstance } from 'vant'

const { t } = useI18n()
const currenyList = currenyListData()
const fundCategory = fundCategoryData()

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
  Category: '',
  noLoading: false
})

const dataList = ref<getFundChangeRecordRespItems[]>([])

// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}

// 选择币种
const selCurrency = (item: any) => {
  const index = checkedCurrency.value.indexOf(item.code)
  if (index > -1) {
    checkedCurrency.value.splice(index, 1)
  } else {
    checkedCurrency.value.push(item.code)
  }
}

// 选择分类筛选
const selCategory = () => {
  query.PageIndex = '1'
  dataList.value = []
  nodata.value = false
  getFundChangeRecord()
}

// 选择币种后查询账变记录
const confirmCurreny = () => {
  currenyDom?.value!.toggle()
  getFundChangeRecord()
}

const formatterCategory = (categoryValue: string) => {
  const item = fundCategory.find((item) => item.value == categoryValue)
  return item ? item.text : ''
}

// 获取账变记录
const getFundChangeRecord = () => {
  getFundChangeRecordApi(query)
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
  getFundChangeRecord()
}

// 上拉加载更多数据
const loadData = () => {
  query.noLoading = true
  query.PageIndex = (parseInt(query.PageIndex) + 1).toString()
  getFundChangeRecord()
}

const customDate = (time: any) => {
  query.StartTime = dayjs(time[0]).format('YYYY-MM-DD')
  query.EndTime = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  getFundChangeRecord()
  showDatePicker.value = false
}

checkedCurrency.value = currenyList.map((item) => item.code)

getFundChangeRecord()
</script>
