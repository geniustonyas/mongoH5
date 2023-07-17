import { createApp } from 'vue'

import App from './App.vue'
import store from '@/store'
import router from './router'
import i18n from './i18n'
// import { Lazyload, Locale } from 'vant'
import { Lazyload } from 'vant'

import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'

import 'vant/lib/index.css'
import './assets/less/main.less'

// const { t } = i18n.global

// // const lang = {
// //   save: t('save'),
// //   confirm: t('confirm'),
// //   cancel: t('cancel'),
// //   loading: t('loading'),
// //   vanCalendar: {
// //     end: t('end'),
// //     start: t('start'),
// //     title: t('vant.title'),
// //     confirm: t('confirm'),
// //     startEnd: `${t('start')}/${t('end')}`,
// //     weekdays: [t('vant.tian'), t('vant.yi'), t('vant.er'), t('vant.san'), t('vant.si'), t('vant.wu'), t('vant.liu')],
// //     monthTitle: (year: number, month: number) => `${year}${t('vant.year')}${month}${t('vant.month')}`,
// //     rangePrompt: (maxRange: number) => `${t('vant.xzts')} ${maxRange} ${t('vant.tian')}`
// //   }
// // }
// // const messages = {
// //   'zh-CN': lang,
// //   'en-US': lang
// // }
// // Locale.add(messages)

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(Lazyload)
app.use(router)
app.use(
  createWeb3Auth({
    autoInit: true,
    projectId: '57a3047717eb3ab7e00969b66dfbbed8',
    chains: [Chains.mainnet, Chains.polygon, Chains.avalanche, Chains.arbitrum, Chains.bsc],
    autoConnect: true,
    disconnectUnknownChain: true,
    reconnectToChain: true,
    logEnabled: true,
    enableCustomProvider: true,
    web3modalOptions: {
      themeMode: 'dark',
      themeVariables: {
        // '--w3m-accent-color': '#0d6efd',
        // '--w3m-background-color': '#0d6efd',
        // '--w3m-background-border-radius': '0.375rem',
        // '--w3m-container-border-radius': '0.375rem',
        // '--w3m-wallet-icon-border-radius': '0.375rem',
        // '--w3m-wallet-icon-large-border-radius': '0.375rem',
        // '--w3m-wallet-icon-small-border-radius': '0.375rem',
        // '--w3m-input-border-radius': '0.375rem',
        // '--w3m-notification-border-radius': '0.375rem',
        // '--w3m-button-border-radius': '0.375rem',
        // '--w3m-secondary-button-border-radius': '0.375rem',
        // '--w3m-icon-button-border-radius': '0.375rem',
        // '--w3m-button-hover-highlight-border-radius': '0.375rem'
      }
    }
  })
)

router.isReady().then(() => {
  app.mount('#app')
})
