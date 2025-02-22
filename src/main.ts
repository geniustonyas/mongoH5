import { createApp } from 'vue'
import store from './store'
import { useAppStore } from './store/app'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import lazyDecrypt from '@/utils/lazyDecrypt'

import decryptionService from '@/utils/decryptionService'

import 'vant/lib/index.css'
import './assets/less/black.less'

// 懒加载图片
const errorImage = new URL(`./assets/imgs/default.gif`, import.meta.url).href

const app = createApp(App)

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
    // await appStore.fetConfig()
    await appStore.fetAdvertisement()
    const splashAds = appStore.getAdvertisementById(1).items

    // 检查广告列表是否为空
    if (!splashAds || splashAds.length == 0) {
      console.log('No ads available to display.')
      return
    }

    // 计算权重总和
    const totalWeight = splashAds.reduce((sum, ad) => sum + parseInt(ad.downloadCount, 10), 0)

    // 根据权重随机选择广告
    const getRandomAd = () => {
      const randomNum = Math.random() * totalWeight
      let cumulativeWeight = 0

      for (const ad of splashAds) {
        cumulativeWeight += parseInt(ad.downloadCount, 10)
        if (randomNum < cumulativeWeight) {
          return ad
        }
      }
    }

    // 选择广告并解密图片
    const selectedAd = getRandomAd()
    if (selectedAd) {
      const decrypted = new decryptionService()
      appStore.cdnUrl = 'https://video.j89pk.com/'
      const decryptedImageUrl = await decrypted.fetchAndDecrypt(appStore.cdnUrl + selectedAd.imgUrl)

      // 设置广告图片和点击事件
      splashAdImg.src = URL.createObjectURL(decryptedImageUrl)
      splashAdImg.onclick = () => {
        window.open(selectedAd.targetUrl)
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
    }
  } catch (error) {
    console.error('Failed to fetch or decrypt ad:', error)
    closeSplashAd()
  }
}

fetchAndShowAd()

router.isReady().then(() => {
  app.mount('#app')
})
