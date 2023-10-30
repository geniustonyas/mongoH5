<template>
  <div class="page">
    <CommonHeader :title="t('overview')" />
    <main class="main">
      <div class="agent-overview">
        <div class="banner">
          <img src="http://d1uck6akni5eri.cloudfront.net/d1d707cbb8f14f28b323ccc6d410f216.jpg" />
        </div>
        <div class="ao-row">
          <div class="r-title">SEABET.IO</div>
          <div class="r-cont">{{ t('overviewDesc') }}</div>
        </div>
        <div class="ao-row">
          <div class="r-title">{{ t('bePartner') }}</div>
          <div class="r-cont">
            {{ t('howBePartner') }}：
            <h3>{{ t('commissionDetails') }}</h3>
            <div class="table-box index-tb">
              <dl>
                <dt>
                  <span>{{ t('level') }}</span>
                  <span>{{ t('monthActivePlayer') }}</span>
                  <span>{{ t('commissionRate') }}</span>
                </dt>
                <dd><span>1</span><span>1-5</span><span>30%</span></dd>
                <dd><span>2</span><span>6-15</span><span>35%</span></dd>
                <dd><span>3</span><span>16-30</span><span>40%</span></dd>
                <dd><span>4</span><span>31-50</span><span>45%</span></dd>
                <dd><span>5</span><span>51+</span><span>50%</span></dd>
              </dl>
            </div>
            <div class="mark">{{ t('activePlayerDesc') }}</div>

            <div class="share">
              <div class="s-l">
                <p>{{ t('recommendLink') }}</p>
                <div class="s-txt">
                  <!--<select>
                    <option>https:www.seabet1.io?ag=11</option>
                    <option>https:www.seabet2.io?ag=11</option>
                  </select>-->
                  <a>{{ recommendUrl }}</a>
                  <span ref="copyDom" :data-clipboard-text="recommendUrl"><i class="iconfont icon-fuzhi" /></span>
                </div>
              </div>
              <div class="s-r">
                <a class="btn btn-primary">{{ t('downloadBanner') }}<i class="iconfont icon-share" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, copy } from '@/utils'

const userStore = useUserStore()
const { t } = useI18n()

const recommendUrl = window.location.origin + '/#/user/reg?agentId=' + userStore.userInfo.id
const copyDom = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    copy(copyDom.value)
  })
})
</script>
