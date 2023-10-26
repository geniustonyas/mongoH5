<template>
  <div class="page">
    <CommonHeader :title="t('dashboard')" />
    <main class="main">
      <div class="agent-dashboard">
        <div class="ad-a">
          <div class="a-t">
            <span>{{ t('winLoseMonth') }}(USDT)</span>
            <b>2,9422</b>
          </div>
          <div class="a-b">
            <ul>
              <li>
                <div class="l-bd">
                  <span>{{ t('childMember') }}</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('firshRecharge') }}</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('newRegMonth') }}</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('newRegValid') }}</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('activityMemberMonth') }}</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>{{ t('winLoseMonth') }}</span>
                  <b>35%</b>
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
<script setup>
import { ref, nextTick, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

import { getAmountCountChart } from '@/api/affiliate'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { LineChart, BarChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

const { t } = useI18n()

// 切换图表
const chartTab = ref('countChart')
let bannerChart = null

// 切换chart
const toggleChart = () => {
  chartTab.value = chartTab.value == 'countChart' ? 'amountChart' : 'countChart'
  initBannerChart()
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
        data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: t('deposit'),
          data: [820, 932, 901, 934, 1290, 1330, 1320, 900, 1000, 1200, 1300, 1400, 1500, 1600, 1700],
          type: 'line',
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: t('withdraw'),
          data: [200, 300, 400, 401, 533, 230, 400, 683, 709, 488, 343, 632, 900, 1255, 1675],
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
        right: 50
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
        data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: t('regCount'),
          data: [820, 932, 901, 934, 1290, 1330, 1320, 900, 1000, 1200, 1300, 1400, 1500, 1600, 1700],
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: t('firshRechargeCount'),
          data: [200, 300, 400, 401, 533, 230, 400, 683, 709, 488, 343, 632, 900, 1255, 1675],
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

// 初始化图标
toggleChart()
</script>
