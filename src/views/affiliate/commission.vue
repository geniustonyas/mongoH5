<template>
  <div class="page">
    <CommonHeader :title="t('commissioneport')" />
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col col-2">
            <select class="form-control">
              <option>2023-10</option>
            </select>
          </div>
          <div class="a-col">
            <a class="btn btn-primary">{{ t('filter') }}</a>
          </div>
        </div>
        <div class="ar-d">
          <div class="d-item">
            <div class="di-l">{{ t('releaseTime') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('activityUser') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('newRegValid') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('totalWinLose') }}</div>
            <div class="di-r"><b class="txt-red">-1000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('netFee') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('reward') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('ctfee') }}</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('jingWinLose') }}</div>
            <div class="di-r"><b class="txt-green">2000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('commissionRate') }}</div>
            <div class="di-r">35%</div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('commission') }}</div>
            <div class="di-r"><b>6000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('lastMonthRemain') }}</div>
            <div class="di-r"><b>100</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">{{ t('infactCommission') }}</div>
            <div class="di-r"><b>200</b></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CommonHeader from '@/components/layout/CommonHeader.vue'

const { t } = useI18n()
</script>
