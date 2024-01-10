<template>
  <div class="page">
    <CommonHeader :title="t('overview')" />
    <main class="main">
      <div class="agent-overview">
        <!-- <div class="banner">
          <img src="http://d1uck6akni5eri.cloudfront.net/d1d707cbb8f14f28b323ccc6d410f216.jpg" />
        </div> -->
        <div class="ao-row">
          <div class="r-title">SEABET.IO</div>
          <div class="r-cont">
            {{ t('overviewDesc') }}
            <div class="sub-cont">{{ t('mailUs') }}</div>
            <div class="contact">
              <span class="ac-l" ref="mailDom" data-clipboard-text="affiliate@seabet.io">affiliate@seabet.io <i class="iconfont icon-fuzhi" /></span>
              <a href="mailto:affiliate@seabet.io" class="ac-r">{{ t('sendNow') }}<i class="iconfont icon-email_full" /></a>
            </div>
          </div>
        </div>
        <div class="ao-row">
          <div class="r-title">{{ t('bePartner') }}</div>
          <div class="r-cont">
            {{ t('howBePartner') }}
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

            <div v-if="userStore.userInfo.id" class="share">
              <div class="s-l">
                <p>{{ t('recommendLink') }}</p>
                <div class="s-txt">
                  <template v-if="recommendUrls.length > 1">
                    <select v-model="currentUrl" class="form-control">
                      <option v-for="(item, index) of recommendUrls" :key="index">{{ item }}</option>
                    </select>
                  </template>
                  <a v-else>{{ recommendUrls[0] }}</a>
                  <span ref="copyDom" :data-clipboard-text="currentUrl"><i class="iconfont icon-fuzhi" /></span>
                </div>
              </div>
              <div class="s-r">
                <a class="btn btn-primary" href="https://www.dropbox.com/scl/fo/pb09zvjl36685keabpqxa/h?rlkey=e39s9cqg8hdocgt4ypymq99dk&dl=0" target="_blank"
                  >{{ t('downloadBanner') }}<i class="iconfont icon-share"
                /></a>
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
import { copy } from '@/utils'

const userStore = useUserStore()
const { t } = useI18n()

const copyDom = ref<HTMLElement | null>(null)
const mailDom = ref<HTMLElement | null>(null)
const recommendUrls = ref<string[]>([])
recommendUrls.value = ['seabet.io/#/?agentId=' + userStore.userInfo.id]

if (userStore.userInfo.domain && userStore.userInfo.domain != '') {
  const tmp = userStore.userInfo.domain.split(',').map((item: string) => {
    return item
  })
  recommendUrls.value = [...tmp, ...recommendUrls.value]
}
const currentUrl = ref<string>(recommendUrls.value[0])
onMounted(() => {
  nextTick(() => {
    if (userStore.userInfo.id) {
      //@ts-ignore
      copy(copyDom.value)
    }
    //@ts-ignore
    copy(mailDom.value)
  })
})
</script>
