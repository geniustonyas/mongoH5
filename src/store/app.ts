import { defineStore } from 'pinia'
import { getCategoryApi, getConfigApi, getAdsApi } from '@/api/app'
import router from '@/router'
import { getThemeApi } from '@/api/theme'
import store from '@/store'
import decryptionService from '@/utils/decryptionService'

// 在 store 中创建 decryptionService 实例
const decrypt = new decryptionService()

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      loading: false,
      isProgrammaticBack: false, // 是否是程序返回
      isUserBackNavigation: false, // 是否是用户返回
      hasShownAnnouncement: true, // 用于跟踪公告是否已显示, 默认为true 需要显示
      shownDownload: true, // 用于跟踪下载弹窗是否已显示, 默认为true 需要显示

      // 系统配置项
      regSms: '', // 注册短信
      searchInputText: '', // 搜索框输入内容
      startAdTime: '', // 启动显示广告市
      downloadUrl: '', // 下载地址
      prePlayAdTime: '', // 播放前广告时间
      cdnUrl: '', // cdn地址
      customer_service_link: '', // 客服链接
      sharedUrl: '', // 分享链接
      playDomain: '', // 播放域名
      imageDomain: '', // 图片域名
      bbsSearchTags: [], // bbs搜索标签

      theme: [], // 标签
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

    setBack(isProgrammaticBack: boolean) {
      this.isProgrammaticBack = isProgrammaticBack
      router.back()
    },

    // 获取系统配置
    async fetConfig() {
      try {
        const {
          data: { data }
        } = await getConfigApi()
        this.regSms = data.find((item: any) => item.pKey === 'RegSms')?.value1 || ''
        this.searchInputText = data.find((item: any) => item.pKey === 'SEACHDomain')?.value1 || ''
        this.startAdTime = data.find((item: any) => item.pKey === 'StartAdTime')?.value1 || ''
        this.cdnUrl = data.find((item: any) => item.pKey === 'CDNURL')?.value1 || ''
        this.downloadUrl = data.find((item: any) => item.pKey === 'DownloadUrl')?.value1 || ''
        this.prePlayAdTime = data.find((item: any) => item.pKey === 'PrePlayAdTime')?.value1 || ''
        this.customer_service_link = data.find((item: any) => item.pKey === 'Chat')?.value1 || ''
        this.sharedUrl = data.find((item: any) => item.pKey === 'SharedUrl')?.value1 || ''
        this.playDomain = data.find((item: any) => item.pKey === 'PlayDomain')?.value1 || ''
        this.imageDomain = data.find((item: any) => item.pKey === 'ImageDomain')?.value1 || ''
        this.bbsSearchTags = data.find((item: any) => item.pKey === 'BBSSearchPageTags')?.value1.split(',') || []
      } catch (error) {
        console.error('获取系统配置失败:', error)
      }
    },

    // 获取分类
    async fetCategory() {
      try {
        const {
          data: { data }
        } = await getCategoryApi()
        this.categorys = data || []
      } catch (error) {
        console.error('获取分类失败:', error)
      }
    },

    // 获取广告
    async fetAdvertisement() {
      try {
        const {
          data: { data }
        } = await getAdsApi()
        // 先将广告数据存储用于渲染
        this.advertisement =
          data.map((adPosition) => ({
            ...adPosition,
            items: adPosition.items.map((adItem) => ({
              ...adItem,
              isDecrypted: false
            }))
          })) || []
        console.log('广告:', this.advertisement)
      } catch (error) {
        console.error('获取广告失败:', error)
      }
    },

    // 获取主题
    async fetTheme() {
      try {
        const {
          data: { data }
        } = await getThemeApi()
        this.theme = data || []
      } catch (error) {
        console.error('获取主题失败:', error)
      }
    },

    // 获取配置、分类和广告，并每隔5分钟刷新一次
    async fetchAllData() {
      await this.fetConfig()
      await this.fetCategory()
      await this.fetAdvertisement()
      await this.fetTheme()
      // 每隔5分钟刷新一次数据
      setInterval(async () => {
        await this.fetConfig()
        // await this.fetCategory()
        // await this.fetAdvertisement()
        // await this.fetTheme()
      }, 5 * 60 * 1000) // 5分钟
    },

    setShownDownload(shown: boolean) {
      this.shownDownload = shown
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useAppStoreHook() {
  return useAppStore(store)
}
