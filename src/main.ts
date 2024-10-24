import { createApp } from 'vue'
import store from '@/store'

import App from './App.vue'
import router from './router'
import { Lazyload } from 'vant'

import 'vant/lib/index.css'
import './assets/less/black.less'

// 懒加载图片
// const loadingImage = new URL(`./assets/imgs/logo-1.png`, import.meta.url).href
const errorImage = new URL(`./assets/imgs/logo.png`, import.meta.url).href

const app = createApp(App)
app.use(store)
app.use(Lazyload, {
  // loading: loadingImage,
  error: errorImage
})
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
