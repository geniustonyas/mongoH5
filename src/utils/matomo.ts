import VueMatomo from 'vue-matomo'
import type { App } from 'vue'
import { getStatisticsApi } from '@/api/app'

// 用于存储API请求的Promise
let statisticsPromise: Promise<any> | null = null

// 统一的获取统计数据方法
export function getStatisticsData() {
  if (!statisticsPromise) {
    // const domain = window.location.host.split('.').slice(-2).join('.')
    const domain = 'mg91.cc'
    statisticsPromise = getStatisticsApi({ Domain: domain })
  }
  return statisticsPromise
}

// Matomo插件
export const matomoPlugin = {
  install: (app: App) => {
    getStatisticsData()
      .then(({ data: { data } }) => {
        if (data?.code) {
          console.log('初始化matomo')
          app.use(VueMatomo, {
            host: 'https://www.mgtags.com/',
            siteId: data.selfCode
          })

          // @ts-ignore
          window._paq.push(['trackPageView'])
        }
      })
      .catch((error) => {
        console.error('Matomo setup failed:', error)
      })
  }
}
