<template>
  <div class="page">
    <CommonHeader :title="t('dashboard')" />
    <main class="main">
      <div class="agent-dashboard">
        <div class="ad-a">
          <div class="a-t">
            <span>{{ t('winLoseMonth') }}(USDT)</span>
            <b>{{ dashboardData.commission.netWinlose }}</b>
          </div>
          <div class="a-b">
            <ul>
              <li>
                <div class="l-bd">
                  <span>{{ t('childMember') }}</span>
                  <b>{{ dashboardData.members }}</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('firshRecharge') }}</span>
                  <b>{{ dashboardData.first }}</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('newRegMonth') }}</span>
                  <b>{{ dashboardData.reg }}</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('newRegValid') }}</span>
                  <b>{{ dashboardData.commission.newPlayers }}</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('activityMemberMonth') }}</span>
                  <b>{{ dashboardData.commission.activePlayers }}</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('commissionRate') }}</span>
                  <b>{{ dashboardData.commission.rate }}</b>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ad-h">
          <div class="h-l">{{ t('dataCompare') }}</div>
          <div class="h-r">
            <div class="radio-tabs">
              <span :class="{ active: chartTab == 'amountChart' }" @click="toggleChart()">{{ t('amount') }}</span>
              <span :class="{ active: chartTab == 'countChart' }" @click="toggleChart()">{{ t('peopleCount') }}</span>
            </div>
          </div>
        </div>
        <div id="bannerChart" class="ad-c" />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, nextTick, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

import { getDashboardApi } from '@/api/affiliate'
import { getDashboardRespItem, chartItem } from '@/api/affiliate/types'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { LineChart, BarChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

const { t } = useI18n()

const dashboardData = reactive({
  members: 0,
  first: 0,
  reg: 0,
  commission: {
    year: 0,
    month: 0,
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
  },
  chart: {
    labels: [],
    //@ts-ignore
    datasets: <chartItem[]>[]
  }
})

// 切换图表
const chartTab = ref('countChart')
let bannerChart: any = null

// 切换chart
const toggleChart = () => {
  chartTab.value = chartTab.value == 'countChart' ? 'amountChart' : 'countChart'
  getDashboardApi({ t: 1 })
    .then((resp: any) => {
      Object.assign(dashboardData, resp.data)
      initBannerChart()
    })
    .catch((err) => {
      console.log(err)
    })
}

// 初始化横幅大bannner
const initBannerChart = () => {
  nextTick(() => {
    if (bannerChart) {
      bannerChart.dispose()
    }
    echarts.use([GridComponent, TooltipComponent, LegendComponent, LineChart, BarChart, CanvasRenderer, UniversalTransition])

    let chartDom = document.getElementById('bannerChart')
    bannerChart = echarts.init(chartDom)
    let amountOption = {
      grid: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 15
      },
      backgroundColor: '#171717',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      legend: {
        // type: 'scroll',
        // orient: 'vertical',
        // right: 10,
        top: 10,
        data: [t('deposit'), t('withdraw')],
        // backgroundColor: '#ccc',
        textStyle: {
          color: '#b4b4b4'
        }
      },
      xAxis: {
        type: 'category',
        data: dashboardData.chart.labels.map((item) => t('weeks.' + item))
      },
      yAxis: {
        type: 'value',
        minInterval: 1, //最小刻度是1
        splitNumber: 5, //段数是5
        min: 0, //最小是0
        interval: computeYaxis(dashboardData.chart.datasets[0].data, dashboardData.chart.datasets[1].data).interval,
        max: computeYaxis(dashboardData.chart.datasets[0].data, dashboardData.chart.datasets[1].data).max
      },
      series: [
        {
          name: t('deposit'),
          data: dashboardData.chart.datasets[0].data,
          type: 'line',
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: t('withdraw'),
          data: dashboardData.chart.datasets[1].data,
          type: 'line',
          itemStyle: {
            color: '#f7cc00'
          }
        }
      ]
    }

    let countOption = {
      grid: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 15
      },
      backgroundColor: '#171717',
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        // type: 'scroll',
        // orient: 'vertical',
        // right: 10,
        top: 10,
        data: [t('regCount'), t('firshRechargeCount')],
        // backgroundColor: '#ccc',
        textStyle: {
          color: '#b4b4b4'
        }
      },
      xAxis: {
        type: 'category',
        data: dashboardData.chart.labels.map((item) => t('weeks.' + item))
      },
      yAxis: {
        type: 'value',
        minInterval: 1, //最小刻度是1
        splitNumber: 5, //段数是5
        min: 0, //最小是0
        interval: computeYaxis(dashboardData.chart.datasets[2].data, dashboardData.chart.datasets[3].data).interval,
        max: computeYaxis(dashboardData.chart.datasets[2].data, dashboardData.chart.datasets[3].data).max
      },
      series: [
        {
          name: t('regCount'),
          data: dashboardData.chart.datasets[2].data,
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: t('firshRechargeCount'),
          data: dashboardData.chart.datasets[3].data,
          type: 'bar',
          barWidth: 10
        }
      ]
    }

    if (chartTab.value == 'amountChart') {
      bannerChart.setOption(amountOption)
    } else {
      bannerChart.setOption(countOption)
    }
  })
}

// 离开前清除掉chart
onBeforeUnmount(() => {
  if (bannerChart) {
    bannerChart.dispose()
  }
})

// 根据Y轴最大值来设置刻度
const computeYaxis = (data1: number[], data2: number[]) => {
  let max = 0
  max = Math.max.apply(null, data1) > Math.max.apply(null, data2) ? Math.max.apply(null, data1) : Math.max.apply(null, data2)
  let interval = Math.ceil(max / 5) || 1
  let maxVal = Math.ceil(max / 5) * 5 || 5
  return {
    interval,
    max: maxVal
  }
}

// 初始化图标
toggleChart()
</script>
