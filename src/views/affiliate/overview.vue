<template>概要</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import BigNumber from 'bignumber.js'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import { getAssetsFile } from '@/utils'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()
const { t } = useI18n()

// 下一奖励进度
const rewardProgressWidth = computed(() => {
  let width = '0'
  if (userStore.userInfo.nextVipRequiredTotalBetAmount != '' && userStore.userInfo.totalBetAmount != '') {
    width = new BigNumber(userStore.userInfo.totalBetAmount).dividedBy(parseInt(userStore.userInfo.nextVipRequiredTotalBetAmount)).multipliedBy(100).toFixed(2)
  }
  return width
})

const handleLogout = () => {
  router.push({ name: 'logout' })
}
</script>
