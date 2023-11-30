<template>
  <div class="page">
    <CommonHeader :title="siteName + ' ' + t(`html.vipTitle`)" />
    <div class="newvip-box">
      <div class="nb-a">
        <div class="a-bg">
          <img :src="getAssetsFile('vip/nh1.png')" />
        </div>
        <div class="a-introduce">
          <div class="a-c">
            <p v-html="t('vip.vipWelH5')" />
          </div>
        </div>
      </div>
      <div class="nb-x">
        <div class="nb-b">
          <div class="b-perks">
            <div class="item">
              <div class="i-bd">
                <dl v-html="t('vip.vipManage')" />
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl v-html="t('vip.vipHighReward')" />
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl v-html="t('vip.highLimit')" />
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl v-html="t('vip.vipPromotion')" />
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl v-html="t('vip.noQueue')" />
              </div>
            </div>
          </div>
          <div class="b-reward">
            <div class="br-title">
              <h2>{{ t('vip.vipRewardDetailsTitle') }}</h2>
            </div>
            <div class="br-cont">
              <div class="bc-levels">
                <div v-for="(item, index) of vipTabs" :key="index" :class="item.code == selItem.code ? 'active l-item' : 'l-item'" @click="selVipTab(item.code)">
                  <img :src="getAssetsFile(`grade/${item.code}.png`)" />
                  <h2>{{ t('userLevels.' + item.code) }}</h2>
                  <!-- <span>{{ item.title }}</span> -->
                </div>
              </div>
              <div class="bc-upgrade">
                <div class="u-item">
                  <div class="u-a">
                    <div :class="'a-grade lv' + selItem.code">{{ selItem.title }}</div>
                    <div class="a-amount">
                      {{ selItem.amount }}
                      <b>{{ t('vip.usdtAmount') }}</b>
                    </div>
                  </div>
                  <div v-if="selItem.rewards" class="u-b">
                    <div v-for="(item, index) of selItem.rewards" :key="index" class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i :class="computeLock(index)" />
                        </div>
                        <div class="i-r">
                          <h3>{{ item.title }}</h3>
                          <p v-html="item.content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nb-c">
          <div class="rows">
            <div class="r-banner">
              <img :src="getAssetsFile('vip/nh2.jpg')" />
            </div>
            <div class="r-title">{{ t('vip.vipRewardDetailTitle') }}</div>
            <div class="r-cont">
              <dl v-html="t('vip.vipRewardDetailContent')" />
            </div>
          </div>
          <div class="rows">
            <div class="r-banner">
              <img :src="getAssetsFile('vip/nh3.jpg')" />
            </div>
            <div class="r-title">{{ t('vip.howBeVipTitle') }}</div>
            <div class="r-cont">
              <dl v-html="t('vip.howBeVipContent')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/modules/user'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import { useI18n } from 'vue-i18n'

import { getAssetsFile } from '@/utils/index'

const siteName = import.meta.env.VITE_APP_SITE_NAME
const userStore = useUserStore()
const { t } = useI18n()

const vipTabs = [
  {
    code: '102',
    title: t('vip.subTitle.102'),
    amount: t('vip.amount.102'),
    rewards: [
      { title: t('vip.rewards.102.0.title'), content: t('vip.rewards.102.0.content') },
      { title: t('vip.rewards.102.1.title'), content: t('vip.rewards.102.1.content') },
      { title: t('vip.rewards.102.2.title'), content: t('vip.rewards.102.2.content') }
    ]
  },
  {
    code: '103',
    title: t('vip.subTitle.103'),
    amount: t('vip.amount.103'),
    rewards: [
      { title: t('vip.rewards.103.0.title'), content: t('vip.rewards.103.0.content') },
      { title: t('vip.rewards.103.1.title'), content: t('vip.rewards.103.1.content') },
      { title: t('vip.rewards.103.2.title'), content: t('vip.rewards.103.2.content') }
    ]
  },
  {
    code: '104',
    title: t('vip.subTitle.104'),
    amount: t('vip.amount.104'),
    rewards: [
      { title: t('vip.rewards.104.0.title'), content: t('vip.rewards.104.0.content') },
      { title: t('vip.rewards.104.1.title'), content: t('vip.rewards.104.1.content') },
      { title: t('vip.rewards.104.2.title'), content: t('vip.rewards.104.2.content') },
      { title: t('vip.rewards.104.3.title'), content: t('vip.rewards.104.3.content') }
    ]
  },
  {
    code: '105',
    title: t('vip.subTitle.105'),
    amount: t('vip.amount.105'),
    rewards: [
      { title: t('vip.rewards.105.0.title'), content: t('vip.rewards.105.0.content') },
      { title: t('vip.rewards.105.1.title'), content: t('vip.rewards.105.1.content') },
      { title: t('vip.rewards.105.2.title'), content: t('vip.rewards.105.2.content') },
      { title: t('vip.rewards.105.3.title'), content: t('vip.rewards.105.3.content') },
      { title: t('vip.rewards.105.4.title'), content: t('vip.rewards.105.4.content') }
    ]
  },
  {
    code: '106',
    title: t('vip.subTitle.106'),
    amount: t('vip.amount.106'),
    rewards: [
      { title: t('vip.rewards.106.0.title'), content: t('vip.rewards.106.0.content') },
      { title: t('vip.rewards.106.1.title'), content: t('vip.rewards.106.1.content') },
      { title: t('vip.rewards.106.2.title'), content: t('vip.rewards.106.2.content') },
      { title: t('vip.rewards.106.3.title'), content: t('vip.rewards.106.3.content') },
      { title: t('vip.rewards.106.4.title'), content: t('vip.rewards.106.4.content') }
    ]
  },
  {
    code: '107',
    title: t('vip.subTitle.107'),
    amount: t('vip.amount.107'),
    rewards: [
      { title: t('vip.rewards.107.0.title'), content: t('vip.rewards.107.0.content') },
      { title: t('vip.rewards.107.1.title'), content: t('vip.rewards.107.1.content') },
      { title: t('vip.rewards.107.2.title'), content: t('vip.rewards.107.2.content') },
      { title: t('vip.rewards.107.3.title'), content: t('vip.rewards.107.3.content') },
      { title: t('vip.rewards.107.4.title'), content: t('vip.rewards.107.4.content') },
      { title: t('vip.rewards.107.5.title'), content: t('vip.rewards.107.5.content') }
    ]
  }
]

const computeLock = computed(() => (index: number) => {
  let lockCss = 'lock'
  if (userStore.userInfo.id) {
    // 存300送300活动必须在黄金2以上才能解锁
    if (selItem.value.code == '104' && index == 1) {
      console.log(index)
      lockCss = parseInt(userStore.userInfo.subCode) >= 10402 ? 'lock un' : 'lock'
    } else {
      if (parseInt(userStore.userInfo.vipCode) >= parseInt(selItem.value.code)) {
        lockCss = 'lock un'
      }
    }
  }
  return lockCss
})

const selItem = ref(vipTabs[0])

const selVipTab = (code: string) => {
  const item = vipTabs.find((item) => item.code == code)
  if (item) {
    //@ts-ignore
    selItem.value = item
  }
}
if (userStore.userInfo.id) {
  selVipTab(userStore.userInfo.vipCode)
}
</script>
