import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getConfigApi, getMainStatusApi } from '@/api/app/index'
import store from '@/store'
import { thirdData } from '@/api/user/types'
import { cloneDeep } from 'lodash-es'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const showSideBar = ref(false)
  const chat = ref('')
  const email = ref('')
  const cdnurl = ref('')
  const robotCheck = ref(false)
  const withdrawCurrencyCode = ref('')
  const withdrawCurrencyType = ref('')
  const withdrawBlockchainCode = ref('')
  const googleEmail = ref('')
  const thirdData = <thirdData>reactive({
    ThirdPartyType: '',
    ThirdPartyId: '',
    ThirdPartyName: '',
    Sign: ''
  })
  const defaultThirdData = cloneDeep<thirdData>(thirdData)
  const refreshMaintainStatusTimer = ref<null | number>(null)
  const maintainStatus = ref(false)
  const maintainTime = ref<number>(0)
  const detailsFav = ref<string[]>([])
  const detailsCancelFav = ref<string[]>([])
  const followUrl = reactive({
    facebook: 'https://www.facebook.com/seabet.io/',
    twitter: 'https://twitter.com/seabet_io',
    instagram: 'https://www.instagram.com/seabet.io/',
    youtube: 'https://www.youtube.com/channel/UC3L5HrPC4elNgHkrvMSFjCQ',
    tiktok: 'https://www.tiktok.com/@seabet.io?lang=en'
  })
  const subscribeUrl = ref('https://subscribe.seabet.io')
  const widgetId = ref('')

  // 获取系统配置
  const getConfig = () => {
    return new Promise((resolve, reject) => {
      getConfigApi()
        .then((resp: any) => {
          chat.value = resp.data.find((item: any) => item.pKey == 'chat').value1
          email.value = resp.data.find((item: any) => item.pKey == 'email').value1
          cdnurl.value = resp.data.find((item: any) => item.pKey == 'CDNURL').value1
          const tmp = resp.data.find((item: any) => item.pKey == 'RobotCheck')
          if (tmp) {
            robotCheck.value = tmp.value1 == '1'
          }
          resolve(resp)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 获取系统维护状态
  const getMainStatus = () => {
    return new Promise((resolve, reject) => {
      getMainStatusApi()
        .then((resp) => {
          maintainStatus.value = resp.data.isMaintain
          maintainTime.value = resp.data.maintainTime
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 刷新系统维护状态
  const refreshMainStatus = () => {
    return new Promise((resolve, reject) => {
      getMainStatus()
        .then((resp) => {
          if (refreshMaintainStatusTimer.value) {
            clearInterval(refreshMaintainStatusTimer.value)
          }
          refreshMaintainStatusTimer.value = window.setInterval(() => {
            getMainStatus()
          }, 10 * 1000)
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const resetThirdData = () => {
    Object.assign(thirdData, defaultThirdData)
  }

  return {
    loading,
    showSideBar,
    chat,
    email,
    cdnurl,
    robotCheck,
    googleEmail,
    thirdData,
    withdrawCurrencyCode,
    withdrawCurrencyType,
    withdrawBlockchainCode,
    maintainStatus,
    maintainTime,
    detailsFav,
    detailsCancelFav,
    followUrl,
    subscribeUrl,
    widgetId,
    getConfig,
    resetThirdData,
    refreshMainStatus
  }
})
export function useAppStoreHook() {
  return useAppStore(store)
}
