import { defineStore } from 'pinia'
import { getCategoryApi, getConfigApi, getAdsApi } from '@/api/app'
import store from '@/store'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      loading: false,
      hasShownAnnouncement: true, // 用于跟踪公告是否已显示, 默认为true 需要显示

      // 系统配置项
      searchInputText: '', // 搜索框输入内容
      startAdTime: '', // 启动显示广告市
      downloadUrl: '', // 下载地址
      prePlayAdTime: '', // 播放前广告时间
      cdnUrl: '', // cdn地址
      customer_service_link: '', // 客服链接

      tags: [], // 标签
      categorys: [], // 分类
      advertisement: [], // 广告
      clarity: ['普通', '高清', '超清', '蓝光'] // 清晰度
    }
  },
  getters: {
    // 判断是否显示公告
    showAnnouncement: (state) => {
      const tmp = state.advertisement.find((item: any) => item.id == 3)
      return tmp && tmp.items.length > 0 && state.hasShownAnnouncement
    },
    // 根据广告id获取广告
    getAdvertisementById: (state) => (id: number) => {
      return state.advertisement.find((item: any) => item.id == id) || []
    }
  },
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    },

    // 获取系统配置
    async fetConfig() {
      try {
        const resp = await getConfigApi()
        this.searchInputText = resp.data.find((item: any) => item.pKey === 'SEACHDomain')?.value1 || ''
        this.startAdTime = resp.data.find((item: any) => item.pKey === 'StartAdTime')?.value1 || ''
        this.cdnUrl = resp.data.find((item: any) => item.pKey === 'CDNURL')?.value1 || ''
        this.downloadUrl = resp.data.find((item: any) => item.pKey === 'DownloadUrl')?.value1 || ''
        this.prePlayAdTime = resp.data.find((item: any) => item.pKey === 'PrePlayAdTime')?.value1 || ''
        this.customer_service_link = resp.data.find((item: any) => item.pKey === 'CustomerServiceLink')?.value1 || ''
      } catch (error) {
        console.error('获取系统配置失败:', error)
      }
    },

    // 获取分类
    async fetCategory() {
      try {
        const resp = await getCategoryApi()
        this.categorys = resp.data || []
      } catch (error) {
        console.error('获取分类失败:', error)
      }
    },

    // 获取广告
    async fetAdvertisement() {
      try {
        const resp = await getAdsApi()
        this.advertisement = resp.data || []
      } catch (error) {
        console.error('获取广告失败:', error)
      }
    },

    // 获取配置、分类和广告，并每隔5分钟刷新一次
    async fetchAllData() {
      await this.fetConfig()
      await this.fetCategory()
      await this.fetAdvertisement()

      // 每隔5分钟刷新一次数据
      setInterval(async () => {
        await this.fetConfig()
        await this.fetCategory()
        await this.fetAdvertisement()
      }, 5 * 60 * 1000) // 5分钟
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useAppStoreHook() {
  return useAppStore(store)
}
