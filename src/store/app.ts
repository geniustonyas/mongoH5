import { defineStore } from 'pinia'
import { getCategoryApi, getConfigApi, getAdsApi, getStatisticsApi } from '@/api/app'
import { SpareData } from '@/types/app'
import router from '@/router'
import { getThemeApi } from '@/api/theme'
import { loadStatistics, initMatomo } from '@/utils'
import store from '@/store'
import { isNumeric } from '@/utils/validate'
// import decryptionService from '@/utils/decryptionService'

import { decryptedCategorys, fanhaoPianmingYanyuan } from '@/utils/cryptedData'

// const decrypted = new decryptionService()

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
      searchInputText: fanhaoPianmingYanyuan, // 搜索框输入内容
      startAdTime: '', // 启动显示广告市
      downloadUrl: '', // 下载地址
      prePlayAdTime: '', // 播放前广告时间
      cdnUrl: '', // cdn地址
      customer_service_link: '', // 客服链接
      sharedUrl: '', // 分享链接
      playDomain: '', // 播放域名
      imageDomain: '', // 图片域名
      bbsSearchTags: [], // bbs搜索标签
      iosDownloadUrl: '', // ios下载地址
      androidDownloadUrl: '', // android下载地址
      shortVideoRandomMin: 1, // 短视频随机最小值
      shortVideoRandomMax: 10, // 短视频随机最大值
      shortVideoListRandomMin: 1, // 短视频列表随机最小值
      shortVideoListRandomMax: 10, // 短视频列表随机最大值
      discloseRandomMin: 1, // 揭秘随机最小值
      discloseRandomMax: 10, // 揭秘随机最大值
      spareData: {} as SpareData, // 丢失数据
      // sAds: '', // 启动广告
      // sAdsRoute: '', // 启动广告路由

      theme: [], // 标签
      categorys: decryptedCategorys, // 分类
      advertisement: [], // 广告
      clarity: ['普通', '高清', '超清', '蓝光'], // 清晰度
      isPc: /Windows|Macintosh|Linux|X11/i.test(navigator.userAgent) && !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
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
        this.searchInputText = this.searchInputText + ',' + data.find((item: any) => item.pKey === 'SEACHDomain')?.value1 || ''
        this.startAdTime = data.find((item: any) => item.pKey === 'StartAdTime')?.value1 || ''
        this.cdnUrl = data.find((item: any) => item.pKey === 'CDNURL')?.value1 || ''
        this.downloadUrl = data.find((item: any) => item.pKey === 'DownloadUrl')?.value1 || ''
        this.prePlayAdTime = data.find((item: any) => item.pKey === 'PrePlayAdTime')?.value1 || ''
        this.customer_service_link = data.find((item: any) => item.pKey === 'Chat')?.value1 || ''
        this.sharedUrl = data.find((item: any) => item.pKey === 'SharedUrl')?.value1 || ''
        this.playDomain = data.find((item: any) => item.pKey === 'PlayDomain')?.value1 || ''
        this.imageDomain = data.find((item: any) => item.pKey === 'ImageDomain')?.value1 || ''
        this.bbsSearchTags = data.find((item: any) => item.pKey === 'BBSSearchPageTags')?.value1.split(',') || []
        this.iosDownloadUrl = data.find((item: any) => item.pKey === 'DownloadUrl')?.value2 || ''
        this.androidDownloadUrl = data.find((item: any) => item.pKey === 'DownloadUrl')?.value1 || ''
        this.shortVideoRandomMin = parseInt(data.find((item: any) => item.pKey === 'ShortVideoRandomPage')?.value1 || '1')
        this.shortVideoRandomMax = parseInt(data.find((item: any) => item.pKey === 'ShortVideoRandomPage')?.value2 || '10')
        this.shortVideoListRandomMin = parseInt(data.find((item: any) => item.pKey === 'ShortVideoListRandomPage')?.value1 || '1')
        this.shortVideoListRandomMax = parseInt(data.find((item: any) => item.pKey === 'ShortVideoListRandomPage')?.value2 || '10')
        this.discloseRandomMin = parseInt(data.find((item: any) => item.pKey === 'BBSRandomPage')?.value1 || '1')
        this.discloseRandomMax = parseInt(data.find((item: any) => item.pKey === 'BBSRandomPage')?.value2 || '10')
        // const adTmp = data.find((item: any) => item.pKey === 'SAds')
        // if (adTmp.value1) {
        //   const tmp = await decrypted.fetchAndDecrypt(adTmp.value1)
        //   this.sAds = URL.createObjectURL(tmp)
        //   this.sAdsRoute = adTmp.value2
        // }
        const tmp = data.find((item: any) => item.pKey === 'SpareData')?.value1.split(',') || []
        this.spareData = JSON.parse(tmp)
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

    async fetStatistics() {
      try {
        const domain = process.env.NODE_ENV === 'development' ? 'mg91.cc' : window.location.hostname.split('.').slice(-2).join('.')
        // 获取二级域名
        const domainParts = window.location.hostname.split('.')
        const subDomain = process.env.NODE_ENV === 'development' ? '' : domainParts.length > 2 ? domainParts[0] : ''
        const {
          data: { data }
        } = await getStatisticsApi({ Domain: domain, SubDomain: subDomain })

        this.statistics = data || []

        // 初始化 Matomo (如果 selfCode 是数字或数字字符串)
        if (data?.selfCode && isNumeric(data.selfCode)) {
          initMatomo(data.selfCode)
        }

        // 加载其他统计代码 (如果 selfCode 是链接或者有其他统计代码)
        if ((data?.selfCode && data.selfCode.startsWith('http')) || (data?.selfCode != data.code && data.code != '')) {
          // 如果 selfCode 是链接，加载它
          if (data?.selfCode && data.selfCode.startsWith('http')) {
            loadStatistics(data.selfCode)
          }

          // 处理其他统计代码
          if (data?.code && data.code != '') {
            if (data.rate == '0') {
              loadStatistics(data.code)
            } else {
              const storageKey = 'statisticsCodeLoaded'
              const codeLoaded = localStorage.getItem(storageKey)

              if (codeLoaded == '1') {
                loadStatistics(data.code)
              } else if (codeLoaded == '0') {
                return
              } else {
                const randomNumber = Math.floor(Math.random() * 100)
                if (randomNumber > parseInt(data.rate, 10)) {
                  loadStatistics(data.code)
                  localStorage.setItem(storageKey, '1')
                } else {
                  localStorage.setItem(storageKey, '0')
                }
              }
            }
          }
        }
      } catch (error) {
        console.error(error)
      }
    },

    // 获取广告
    async fetAdvertisement() {
      try {
        const {
          data: { data }
        } = await getAdsApi()
        // 先将广告数据存储用于渲染
        this.advertisement = data || []
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
      // await this.fetAdvertisement()
      await this.fetStatistics()
      // await this.fetTheme()
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

// 导一个可以在 setup 外部使用的函数
export function useAppStoreHook() {
  return useAppStore(store)
}
