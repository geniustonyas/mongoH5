import { createApp } from 'vue'
import store from './store'
import { useAppStore } from './store/app'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import lazyDecrypt from '@/utils/lazyDecrypt'

import 'vant/lib/index.css'
import './assets/less-new/black.less'

// 懒加载图片
const errorImage = new URL(`./assets/imgs/default.gif`, import.meta.url).href

const app = createApp(App)

import FingerprintJS from '@fingerprintjs/fingerprintjs';
// 初始化 FingerprintJS
const fpPromise = FingerprintJS.load();

// 获取设备指纹
async function getDeviceFingerprint() {
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId; // 这是设备的唯一标识符
}

// 使用设备指纹
getDeviceFingerprint().then((visitorId) => {
  console.log('Device fingerprint:', visitorId);
  // 可以将 visitorId 发送到服务器以跟踪用户
});

app.use(store)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage,
  loading: errorImage,
  attempt: 1
})
app.use(router)
app.directive('lazy-decrypt', lazyDecrypt)

// 显示开屏广告
const splashAd = document.getElementById('splash-ad')
const splashAdImg = document.getElementById('splash-ad-img') as HTMLImageElement
const closeSplashAdButton = document.getElementById('close-splash-ad')
const countdownElement = document.getElementById('countdown')

// 关闭广告
const closeSplashAd = () => {
  if (splashAd) {
    splashAd.style.display = 'none'
  }
}

closeSplashAdButton?.addEventListener('click', closeSplashAd)

// 获取广告数据并显示
const fetchAndShowAd = async () => {
  try {
    const appStore = useAppStore()
    await appStore.fetConfig()

    splashAdImg.src = appStore.sAds
    splashAdImg.onclick = () => {
      window.open(appStore.sAdsRoute)
    }

    // 显示广告
    splashAd.style.display = 'flex'

    // 设置倒计时
    let countdown = 3
    const countdownInterval = setInterval(() => {
      countdown -= 1
      if (countdownElement) {
        countdownElement.textContent = countdown.toString()
      }
      if (countdown <= 0) {
        clearInterval(countdownInterval)
        closeSplashAd()
      }
    }, 1000)
  } catch (error) {
    console.error('Failed to fetch or decrypt ad:', error)
    closeSplashAd()
  }
}

fetchAndShowAd()

router.isReady().then(() => {
  app.mount('#app')
})
