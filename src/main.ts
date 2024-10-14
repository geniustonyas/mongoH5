import { createApp } from 'vue'
import store from '@/store'

import App from './App.vue'
import router from './router'
import { Lazyload } from 'vant'

import 'vant/lib/index.css'
import './assets/less/main.less'

// 懒加载图片
const lazyImage = new URL(`./assets/imgs/logo.png`, import.meta.url).href

const app = createApp(App)
app.use(store)
app.use(Lazyload, {
  loading: lazyImage,
  error: lazyImage
})
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
