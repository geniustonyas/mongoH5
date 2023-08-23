<template>
  <div class="page">
    <CommonHeader :title="t('question')" />
    <main class="main">
      <ul class="faq-box">
        <li>
          <div class="l-title" @click="showQuestion1 = !showQuestion1"><span>我如何存款？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion1">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion2 = !showQuestion2"><span>我如何提款？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion2">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion3 = !showQuestion3"><span>存款/取款需要多长时间？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion3">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion4 = !showQuestion4"><span>我如何存款？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion4">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion5 = !showQuestion5"><span>我如何提款？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
          </Vue3SlideUpDown>
        </li>
        <li>
          <div class="l-title" @click="showQuestion6 = !showQuestion6"><span>存款/取款需要多长时间？</span><i class="iconfont icon-down" /></div>
          <Vue3SlideUpDown v-model="showQuestion5">
            <div class="l-cont">
              <p>1.选择您选择的加密货币，然后点击存款</p>
              <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
              <p>3.交易一经确认，您将收到通知。</p>
              <a href="#">了解更多</a>
            </div>
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

const showQuestion1 = ref(false)
const showQuestion2 = ref(false)
const showQuestion3 = ref(false)
const showQuestion4 = ref(false)
const showQuestion5 = ref(false)
const showQuestion6 = ref(false)
</script>
