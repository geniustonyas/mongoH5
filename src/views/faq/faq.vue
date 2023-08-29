<template>
  <div class="page">
    <CommonHeader :title="t('question')" />
    <main class="main">
      <ul class="faq-box">
        <li>
          <div class="l-title" @click="showQuestion1 = !showQuestion1">
            <span>{{ t('problem.whatVip') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion1">
            <div class="l-cont" v-html="t('problem.whatVips')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion2 = !showQuestion2">
            <span>{{ t('problem.howGetIntegrial') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion2">
            <div class="l-cont" v-html="t('problem.howGetIntegrials')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion3 = !showQuestion3">
            <span>{{ t('problem.whatVipLevel') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion3">
            <div class="l-cont" v-html="t('problem.whatVipLevels')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion4 = !showQuestion4">
            <span>{{ t('problem.whyMergedReward') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion4">
            <div class="l-cont" v-html="t('problem.howComputeInterials')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion5 = !showQuestion5">
            <span>{{ t('problem.resetVip') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont" v-html="t('problem.whyMergedRewards')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion6 = !showQuestion6">
            <span>{{ t('problem.everyGetInterial') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont" v-html="t('problem.resetVips')" />
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion7 = !showQuestion7">
            <span>{{ t('problem.whatVip') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont" v-html="t('problem.everyGetInterials')" />
          </Vue3SlideUpDown>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// const siteName = import.meta.env.VITE_APP_SITE_NAME
// const route = useRoute()

// const type = route.params.type ? route.params.type : 'rules'

const showQuestion1 = ref(true)
const showQuestion2 = ref(false)
const showQuestion3 = ref(false)
const showQuestion4 = ref(false)
const showQuestion5 = ref(false)
const showQuestion6 = ref(false)
const showQuestion7 = ref(false)
console.log(t('problem.whatVips'))
</script>
