<template>
  <div class="page">
    <CommonHeader :title="t('question')" />
    <main class="main">
      <ul class="faq-box">
        <li v-if="t('faqs.q1') != ''">
          <div class="l-title" @click="showQuestion1 = !showQuestion1">
            <span>{{ t('faqs.q1') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion1">
            <div class="l-cont" v-html="t('faqs.a1')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q2') != ''">
          <div class="l-title" @click="showQuestion2 = !showQuestion2">
            <span>{{ t('faqs.q2') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion2">
            <div class="l-cont" v-html="t('faqs.a2')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q3') != ''">
          <div class="l-title" @click="showQuestion3 = !showQuestion3">
            <span>{{ t('faqs.q3') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion3">
            <div class="l-cont" v-html="t('faqs.a3')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q4') != ''">
          <div class="l-title" @click="showQuestion4 = !showQuestion4">
            <span>{{ t('faqs.q4') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion4">
            <div class="l-cont" v-html="t('faqs.a4')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q5') != ''">
          <div class="l-title" @click="showQuestion5 = !showQuestion5">
            <span>{{ t('faqs.q5') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont" v-html="t('faqs.a5')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q6') != ''">
          <div class="l-title" @click="showQuestion6 = !showQuestion6">
            <span>{{ t('faqs.q6') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion6">
            <div class="l-cont" v-html="t('faqs.a6')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q7') != ''">
          <div class="l-title" @click="showQuestion7 = !showQuestion7">
            <span>{{ t('faqs.q7') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion7">
            <div class="l-cont" v-html="t('faqs.a7')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q8') != ''">
          <div class="l-title" @click="showQuestion8 = !showQuestion8">
            <span>{{ t('faqs.q8') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion8">
            <div class="li-cont" v-html="t('faqs.a8')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q9') != ''">
          <div class="l-title" @click="showQuestion9 = !showQuestion9">
            <span>{{ t('faqs.q9') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion9">
            <div class="l-cont" v-html="t('faqs.a9')" />
          </Vue3SlideUpDown>
        </li>
        <li v-if="t('faqs.q10') != ''">
          <div class="l-title" @click="showQuestion10 = !showQuestion10">
            <span>{{ t('faqs.q10') }}</span
            ><i class="iconfont icon-down" />
          </div>
          <Vue3SlideUpDown v-model="showQuestion10">
            <div class="l-cont" v-html="t('faqs.a10')" />
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
const showQuestion8 = ref(false)
const showQuestion9 = ref(false)
const showQuestion10 = ref(false)
</script>
