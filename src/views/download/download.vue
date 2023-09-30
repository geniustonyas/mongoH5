<template>
  <div class="page">
    <CommonHeader :title="t('downloadApp')" />
    <main class="main">
      <div class="download-box">
        <div class="db-banner">
          <img :src="getAssetsFile('download/d_banner1.png')" />
        </div>
        <div class="db-info">
          <h2>{{ t('downloadTitle') }}</h2>
          <p>{{ t('downloadDesc') }}</p>
        </div>
        <div class="radio-tabs db-tabs">
          <span :class="{ active: tab == 1 }" @click="tab = 1"><i class="iconfont icon-ios" />IOS</span>
          <span :class="{ active: tab == 2 }" @click="tab = 2"><i class="iconfont icon-android" />Android</span>
        </div>
        <div class="db-conts">
          <div v-show="tab == 1" class="dc-panel">
            <ul class="ul_ios">
              <li>
                <img :src="getAssetsFile('download/d_i_1.png')" />
                <span>{{ t('step') }}1</span>
                <p>{{ t('clickSave') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_i_2.png')" />
                <span>{{ t('step') }}2</span>
                <p>{{ t('addDesk') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_i_3.png')" />
                <span>{{ t('step') }}3</span>
                <p>{{ t('clickAdd') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_i_4.png')" />
                <span>{{ t('step') }}4</span>
                <p>{{ t('finishedDown') }}</p>
              </li>
            </ul>
          </div>
          <div v-show="tab == 2" class="dc-panel">
            <ul class="ul_android">
              <li>
                <img :src="getAssetsFile('download/d_a_1.png')" />
                <span>{{ t('step') }}1</span>
                <p>{{ t('addToDesk') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_a_2.png')" />
                <span>{{ t('step') }}2</span>
                <p>{{ t('clickDesk') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_i_3.png')" />
                <span>{{ t('step') }}3</span>
                <p>{{ t('clickAddAndroid') }}</p>
              </li>
              <li>
                <img :src="getAssetsFile('download/d_a_4.png')" />
                <span>{{ t('step') }}4</span>
                <p>{{ t('finishedDown') }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import CommonHeader from '@/components/layout/CommonHeader.vue'

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { getAssetsFile } from '@/utils/index'

const { t } = useI18n()

// 切换安卓或苹果
const tab = ref(1)
</script>
