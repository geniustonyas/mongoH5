import { createApp } from 'vue'

import App from './App.vue'
import store from '@/store'
import router from './router'
import i18n from './i18n'
import { Lazyload } from 'vant'

import 'vant/lib/index.css'
import './assets/less/main.less'

// 懒加载图片
const lazyImage = new URL(`./assets/imgs/seabetio.png`, import.meta.url).href

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(Lazyload, {
  loading: lazyImage,
  error: lazyImage
})
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
