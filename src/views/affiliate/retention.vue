<template>
  <div class="page">
    <CommonHeader :title="t('affiliateQuestion')" />
    <main class="main">
      <div class="agent-overview">
        <div class="ao-row">
          <div class="r-title">{{ t('retentionTitle') }}</div>
          <div class="r-cont">
            {{ t('retentionSubTitle') }}
            <h3>{{ t('generalInfo') }}</h3>
            <div class="cb_help">
              <ul class="faq-box faq-page">
                <li>
                  <div class="l-title" @click="showQuestion1 = !showQuestion1">
                    <span>{{ t('retentionQ1') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion1">
                    <div class="l-cont">
                      <p>{{ t('retentionA1') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion2 = !showQuestion2">
                    <span>{{ t('retentionQ2') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion2">
                    <div class="l-cont">
                      <p>{{ t('retentionA2') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion3 = !showQuestion3">
                    <span>{{ t('retentionQ3') }}?</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion3">
                    <div class="l-cont">
                      <p>{{ t('retentionA3') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion4 = !showQuestion4">
                    <span>{{ t('retentionQ4') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion4">
                    <div class="l-cont">
                      <p>{{ t('retentionA4') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion5 = !showQuestion5">
                    <span>{{ t('retentionQ5') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion5">
                    <div class="l-cont">
                      <p>{{ t('retentionA5') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion6 = !showQuestion6">
                    <span>{{ t('retentionQ6') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion6">
                    <div class="l-cont">
                      <p>{{ t('retentionA6') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
              </ul>
            </div>
            <h3>{{ t('commission') }}</h3>
            <div class="cb_help">
              <ul class="faq-box faq-page">
                <li>
                  <div class="l-title" @click="showQuestion7 = !showQuestion7">
                    <span>{{ t('commissionQ1') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion7">
                    <div class="l-cont">
                      <p>{{ t('commissionA1') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion8 = !showQuestion8">
                    <span>{{ t('commissionQ1') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion8">
                    <div class="l-cont">
                      <p>
                        {{ t('commissionA2') }}
                        <br />{{ t('commissionQ2Desc') }}
                      </p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion9 = !showQuestion9">
                    <span>{{ t('commissionQ3') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion9">
                    <div class="l-cont">
                      <p>{{ t('commissionA3') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion10 = !showQuestion10">
                    <span>{{ t('commissionQ4') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion10">
                    <div class="l-cont">
                      <p>{{ t('commissionA4') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion11 = !showQuestion11">
                    <span>{{ t('commissionQ5') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion11">
                    <div class="l-cont">
                      <p>{{ t('commissionA5') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion12 = !showQuestion12">
                    <span>{{ t('commissionQ6') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion12">
                    <div class="l-cont">
                      <p>{{ t('commissionA6') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
                <li>
                  <div class="l-title" @click="showQuestion13 = !showQuestion13">
                    <span>{{ t('commissionQ7') }}</span>
                    <i class="iconfont icon-down" />
                  </div>
                  <Vue3SlideUpDown v-model="showQuestion13">
                    <div class="l-cont">
                      <p>{{ t('commissionA7') }}</p>
                    </div>
                  </Vue3SlideUpDown>
                </li>
              </ul>
            </div>
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
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const { t } = useI18n()

const showQuestion1 = ref(true)
const showQuestion2 = ref(true)
const showQuestion3 = ref(true)
const showQuestion4 = ref(true)
const showQuestion5 = ref(true)
const showQuestion6 = ref(true)
const showQuestion7 = ref(true)
const showQuestion8 = ref(true)
const showQuestion9 = ref(true)
const showQuestion10 = ref(true)
const showQuestion11 = ref(true)
const showQuestion12 = ref(true)
const showQuestion13 = ref(true)
</script>
