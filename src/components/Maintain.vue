<template>
  <div class="upgrade-box">
    <div class="ub-t">
      <img :src="getAssetsFile('logo.svg')" />
    </div>
    <div class="ub-m">
      <div class="um-t">
        <p>{{ t('remainTime') }}</p>
        <CountDown :time="appStore.maintainTime" format="HH : mm : ss">
          <template #default="timeData">
            <b class="block">{{ timeData.hours < 10 ? '0' + timeData.hours : timeData.hours }}</b>
            <em class="colon">:</em>
            <b class="block">{{ timeData.minutes < 10 ? '0' + timeData.minutes : timeData.minutes }}</b>
            <em class="colon">:</em>
            <b class="block">{{ timeData.seconds < 10 ? '0' + timeData.seconds : timeData.seconds }}</b>
          </template>
        </CountDown>
      </div>
      <div class="um-b">
        <img :src="getAssetsFile('update.png')" />
        <h2>{{ t('upgrading') }}</h2>
        <p>{{ t('upgradingTxt') }}</p>
        <a class="iconfont" @click="liveChatCall('maximize')">
          <i class="iconfont icon-support" />
          <span>{{ t('liveSupport') }}</span>
        </a>
      </div>
    </div>
    <div class="ub-b">
      <p>
        <span>{{ t('followUs') }}</span>
      </p>
      <ul>
        <li>
          <a target="_blank" :href="appStore.followUrl.facebook">
            <i class="iconfont icon-facebook" />
          </a>
        </li>
        <li>
          <a target="_blank" :href="appStore.followUrl.twitter">
            <i class="iconfont icon-twitter" />
          </a>
        </li>
        <li>
          <a target="_blank" :href="appStore.followUrl.instagram">
            <i class="iconfont icon-instagram" />
          </a>
        </li>
        <li>
          <a target="_blank" :href="appStore.followUrl.youtube">
            <i class="iconfont icon-youtube" />
          </a>
        </li>
        <li>
          <a target="_blank" :href="appStore.followUrl.tiktok">
            <i class="iconfont icon-tiktok" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

import { getAssetsFile } from '@/utils'
import { useAppStore } from '@/store/modules/app'
import { liveChatCall } from '@/composables/startGame'

import { CountDown } from 'vant'

const appStore = useAppStore()
const { t } = useI18n()

// 观察维护状态，如果维护时间结束则刷新当前页面
watch(
  () => appStore.maintainStatus,
  (val: Boolean) => {
    if (!val) {
      window.location.href = window.location.protocol + '//' + window.location.host
    }
  }
)

onMounted(() => {
  nextTick(() => {
    const node = document.getElementById('app')
    if (node) {
      node.classList.remove('upgrade-body')
      node.classList.add('upgrade-body')
    }
  })
})
</script>
