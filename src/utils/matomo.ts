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
            siteId: data.selfCode,

            router: app.config.globalProperties.$router, // 添加路由自动跟踪
            trackInitialView: true, // 跟踪首次访问
            enableLinkTracking: true, // 启用链接跟踪

            // 性能监控相关
            enableHeartBeatTimer: true, // 启用心跳计时器
            heartBeatTimerInterval: 15, // 设置心跳间隔

            // 调试相关
            debug: process.env.NODE_ENV === 'development'
          })
        }
      })
      .catch((error) => {
        console.error('Matomo setup failed:', error)
      })
  }
}
