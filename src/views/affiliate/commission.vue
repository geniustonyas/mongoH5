<template>
  <div class="page">
    <CommonHeader :title="t('commissionReport')" />
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col col-2">
            <ConfigProvider theme="dark" class="agent-sel">
              <DropdownMenu direction="down">
                <DropdownItem v-model="query.date" ref="categoryDom" :options="options" />
              </DropdownMenu>
            </ConfigProvider>
          </div>
          <div class="a-col">
            <a class="btn btn-primary" @click="getCommissionData">{{ t('filter') }}</a>
          </div>
        </div>
        <div class="ar-d">
          <div class="d-item">
            <div class="i-l">{{ t('releaseStatus') }}</div>
            <div class="i-r">{{ t('releaseStatusTrans.' + commissionData.status) }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('releaseTime') }}</div>
            <div class="di-r">{{ commissionData.payTime || '--' }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('activityUser') }}</div>
            <div class="di-r">{{ commissionData.activePlayers }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('newRegValid') }}</div>
            <div class="di-r">{{ commissionData.newPlayers }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('totalWinLose') }}</div>
            <div class="di-r">
              <b v-if="commissionData.winlose > 0" class="txt-green">{{ commissionData.winlose }}</b>
              <b v-else-if="commissionData.winlose < 0" class="txt-red">{{ commissionData.winlose }}</b>
              <b v-else>{{ commissionData.winlose }}</b>
            </div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('netFee') }}</div>
            <div class="di-r">{{ commissionData.network }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('rewards') }}</div>
            <div class="di-r">{{ commissionData.reward }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('ctfee') }}</div>
            <div class="di-r">{{ commissionData.fee }}</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('jingWinLose') }}</div>
            <div class="di-r">
              <b v-if="commissionData.netWinlose > 0" class="txt-green">{{ commissionData.netWinlose }}</b>
              <b v-else-if="commissionData.netWinlose < 0" class="txt-red">{{ commissionData.netWinlose }}</b>
              <b v-else>{{ commissionData.netWinlose }}</b>
            </div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('commissionRate') }}</div>
            <div class="di-r">{{ commissionData.rate * 100 }}%</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('commission') }}</div>
            <div class="di-r">
              <b>{{ commissionData.comm }}</b>
            </div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('lastMonthRemain') }}</div>
            <div class="di-r">
              <b>{{ commissionData.last }}</b>
            </div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('infactCommission') }}</div>
            <div class="di-r">
              <b>{{ commissionData.actComm }}</b>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import { getCommissionDataApi } from '@/api/affiliate'
import { getCommissionDataRespItem, getCommissionDataResp } from '@/api/affiliate/types'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { DropdownMenu, DropdownItem, ConfigProvider } from 'vant'
import dayjs from 'dayjs'

const { t } = useI18n()

// 利用dayjs获取前6个月的年月并组成vant下拉列表options
interface dateOption {
  text: string
  value: string
}
const options = ref<dateOption[]>([])
for (let i = 0; i < 6; i++) {
  const date = dayjs().subtract(i, 'month').format('YYYY-MM')
  options.value.push({ text: date, value: date })
}

const query = reactive({
  date: options.value[0].value
})

const commissionData = reactive<getCommissionDataRespItem>({
  status: 0,
  year: 0,
  month: 0,
  payTime: '',
  activePlayers: 0,
  newPlayers: 0,
  winlose: 0,
  network: 0,
  reward: 0,
  fee: 0,
  netWinlose: 0,
  rate: 0,
  comm: 0,
  last: 0,
  actComm: 0
})

const getCommissionData = () => {
  getCommissionDataApi(query)
    .then((resp: getCommissionDataResp) => {
      Object.assign(commissionData, resp.data)
    })
    .catch((err: any) => {
      console.log(err)
    })
}

getCommissionData()
</script>
