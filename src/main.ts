import { createApp } from 'vue'

import App from './App.vue'
import store from '@/store'
import router from './router'
import i18n from './i18n'
import { Lazyload } from 'vant'

import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'

import 'vant/lib/index.css'
import './assets/less/main.less'

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(Lazyload)
app.use(router)
app.use(
  createWeb3Auth({
    // autoInit: true,
    projectId: '57a3047717eb3ab7e00969b66dfbbed8',
    chains: [Chains.mainnet, Chains.polygon, Chains.avalanche, Chains.arbitrum, Chains.bsc],
    // autoConnect: true,
    // disconnectUnknownChain: true,
    // reconnectToChain: true,
    // logEnabled: true,
    // enableCustomProvider: true,
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
