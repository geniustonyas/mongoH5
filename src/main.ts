import './assets/less/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import store from '@/store'
import router from './router'
import i18n from './i18n'
import { Lazyload } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
app.use(i18n)
app.use(Lazyload)

router.isReady().then(() => {
  app.mount('#app')
})
