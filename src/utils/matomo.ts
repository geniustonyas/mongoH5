import VueMatomo from 'vue-matomo'
import type { App } from 'vue'

export async function initMatomo(app: App) {
  try {
    // 获取当前顶级域名
    const domain = window.location.host.split('.').slice(-2).join('.')
    const {
      data: { data }
    } = await getStatisticsApi({ Domain: domain })
    // 如果没有配置则返回
    if (!data?.siteId) {
      console.warn('No Matomo configuration found for domain:', domain)
      return
    }

    // 配置Matomo
    app.use(VueMatomo, {
      host: data.host || 'https://your-default-matomo-host.com',
      siteId: data.siteId,
      // 其他配置
      requireConsent: false,
      trackInitialView: true,
      enableLinkTracking: true,
      requireCookieConsent: false
    })
  } catch (error) {
    console.error('Failed to initialize Matomo:', error)
  }
}
