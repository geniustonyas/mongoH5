import VueMatomo from 'vue-matomo'
import type { App } from 'vue'
import { getStatisticsApi } from '@/api/app'

export const matomoPlugin = {
  install: (app: App) => {
    // 获取当前顶级域名
    const domain = window.location.host.split('.').slice(-2).join('.')
    // 请求统计配置
    getStatisticsApi({ Domain: domain })
      .then(({ data: { data } }) => {
        if (data?.code) {
          app.use(VueMatomo, {
            host: 'https://tj.aj666888.com',
            siteId: data.code
            // requireConsent: false,
            // trackInitialView: true,
            // enableLinkTracking: true
          })
        } else {
          console.warn('No Matomo configuration found for domain:', domain)
        }
      })
      .catch((error) => {
        console.error('Matomo setup failed:', error)
      })
  }
}
