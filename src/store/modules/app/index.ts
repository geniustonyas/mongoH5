import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getConfigApi } from '@/api/app/index'
import store from '@/store'
import { thirdData } from '@/api/user/types'
import { cloneDeep } from 'lodash-es'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const showSideBar = ref(false)
  const chat = ref('')
  const email = ref('')
  const cdnurl = ref('')
  const googleEmail = ref('')
  const thirdData = <thirdData>reactive({
    ThirdPartyType: '',
    ThirdPartyId: '',
    ThirdPartyName: '',
    Sign: ''
  })
  const defaultThirdData = cloneDeep<thirdData>(thirdData)

  // 获取系统配置
  const getConfig = () => {
    return new Promise((resolve, reject) => {
      getConfigApi()
        .then((resp: any) => {
          chat.value = resp.data.find((item: any) => item.pKey == 'chat').value1
          email.value = resp.data.find((item: any) => item.pKey == 'email').value1
          cdnurl.value = resp.data.find((item: any) => item.pKey == 'CDNURL').value1
          resolve(resp)
        })
        .catch((error: any) => {
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
    googleEmail,
    thirdData,
    getConfig,
    resetThirdData
  }
})
export function useAppStoreHook() {
  return useAppStore(store)
}
