<template>
  <template v-if="!appStore.maintainStatus">
    <router-view v-slot="{ Component, route }">
      <transition :name="getTransition(route.meta.transition)">
        <keep-alive :include="['casino', 'slots', 'index', 'search', 'promoList', 'promo', 'finance']">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <Overlay class-name="loading" style="background-color: transparent" :show="appStore.loading" :z-index="9999">
      <!-- <Loading /> -->
    </Overlay>
  </template>
  <Maintain v-else />
</template>

<script setup lang="ts">
//@ts-nocheck
import { watch } from 'vue'
import { useRoute } from 'vue-router'
// import { Overlay, Loading } from 'vant'
import { useAppStore } from '@/store/modules/app'
import { useI18n } from 'vue-i18n'
import { useUserStore } from './store/modules/user'
import { liveChatCall } from '@/composables/startGame'
import dayjs from 'dayjs'
import { currenyListData } from '@/utils/config'
import { HisotyReocrdType } from '@/utils/constant'
import { getHistoryRecordApi } from '@/api/fund/index'

import Maintain from './components/Maintain.vue'

const appStore = useAppStore()
const userStore = useUserStore()
const route = useRoute()
const { t } = useI18n()
const currenyList = currenyListData()

const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}

document.title = t('siteTitle')

watch(
  () => userStore.userInfo.userName,
  (val) => {
    if (val && val != '') {
      liveChatCall('set_customer_name', userStore.userInfo.userName)
      liveChatCall('set_customer_email', userStore.userInfo.email)
    }
  }
)

if (window.top && window.self !== window.top) {
  window.top.location = window.self.location
}

if (route.query.agentId && route.query.agentId != '') {
  localStorage.setItem('agentId', route.query.agentId as string)
}

if (route.query.fb_dynamic_pixel && route.query.fb_dynamic_pixel != '') {
  const fb_id = localStorage.getItem('fb_id')
  if (fb_id != route.query.fb_dynamic_pixel) {
    localStorage.setItem('fb_id', route.query.fb_dynamic_pixel as string)
    localStorage.setItem('fb_over_time', dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'))
  }
}

// 如果有fb id, 有over_time，则每10分钟查询一次是否有超过24小时,如果超过则取消查询
const fb_over_time = localStorage.getItem('fb_over_time')
const fb_id = localStorage.getItem('fb_id')
let fb_timer = null
if (fb_over_time && fb_id) {
  const over_time = dayjs(fb_over_time).toDate()
  const now = new Date()
  if (over_time > now) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    // fbq('init', '331446269642463')
    fbq('init', fb_id)

    fb_timer = setInterval(() => {
      const fb_over_times = localStorage.getItem('fb_over_time')
      const over_times = dayjs(fb_over_times).toDate()
      const now = new Date()
      if (now > over_times) {
        console.log('aaa')
        clearInterval(fb_timer)
      } else {
        console.log('bbb')
        getHistoryRecordApi({
          CurrencyCode: currenyList.map((item) => item.code).join(','),
          RecordType: HisotyReocrdType.Deposit,
          StartTime: dayjs().format('YYYY-MM-DD'),
          EndTime: fb_over_time,
          PageIndex: 1,
          PageSize: 10
        })
          .then((resp) => {
            if (resp.data.items && resp.data.items.length > 0) {
              fbq('track', 'Purchase', { currency: 'USD', value: 0 })
              // localStorage.removeItem('fb_id')
              localStorage.removeItem('fb_over_time')
              clearInterval(fb_timer)
            }
          })
          .catch((error: any) => {
            console.log(error)
          })
      }
    }, 10 * 60 * 1000)
  } else {
    localStorage.removeItem('fb_over_time')
  }
}
</script>

<style>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  transition: transform 400ms;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(-100%);
}
</style>
