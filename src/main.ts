import { createApp } from 'vue'
import store from '@/store'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import lazyDecrypt from '@/utils/lazyDecrypt'

import 'vant/lib/index.css'
import './assets/less/black.less'

// 懒加载图片
// const loadingImage = new URL(`./assets/imgs/logo-1.png`, import.meta.url).href
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

router.isReady().then(() => {
  app.mount('#app')
})
