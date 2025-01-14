import VueMatomo from 'vue-matomo'
import type { App } from 'vue'
import { getStatisticsApi } from '@/api/app'

// 用于存储API请求的Promise
let statisticsPromise: Promise<any> | null = null

// 统一的获取统计数据方法
export function getStatisticsData() {
  if (!statisticsPromise) {
    // 根据环境判断使用的域名
    const domain = process.env.NODE_ENV === 'development' ? 'mg91.cc' : window.location.hostname.split('.').slice(-2).join('.')
    // 获取二级域名
    const subDomain = process.env.NODE_ENV === 'development' ? '' : window.location.hostname.split('.')[0]
    console.log('subDomain', subDomain)
    statisticsPromise = getStatisticsApi({ Domain: domain, SubDomain: subDomain })
  }
  return statisticsPromise
}

// Matomo插件
export const matomoPlugin = {
  install: (app: App) => {
    getStatisticsData()
      .then(({ data: { data } }) => {
        if (data?.code) {
          app.use(VueMatomo, {
            host: 'https://www.mgtags.com',
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
