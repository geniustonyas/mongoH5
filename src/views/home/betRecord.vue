<template>
  <div class="page">
    <CommonHeader :title="t('myBets')" />
    <main class="main">
      <div class="mybets-box">
        <div class="line-tabs">
          <span :class="{ active: tab == 'unsettled' }">{{ t('unSettledBet') }}</span>
          <span :class="{ active: tab == 'settled' }">{{ t('settledBet') }}</span>
        </div>
        <div class="mb-conts">
          <div class="mc-box active">
            <Nodata :message="t('noUnSettledBetData')" />
          </div>
          <div class="mc-box">
            <Nodata :message="t('noSettledBetData')" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup name="HomeAccount">
import { ref, reactive } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

import { useI18n } from 'vue-i18n'

let tab = ref('unsettled')

const { t } = useI18n()
</script>

<style lang="less" scoped></style>
