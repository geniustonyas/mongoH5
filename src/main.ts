import { createApp } from 'vue'
import './assets/less/main.less'

import App from './App.vue'
import store from '@/store'
import router from './router'
import i18n from './i18n'
import { Lazyload, ConfigProvider } from 'vant'

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(Lazyload)
app.use(ConfigProvider)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
