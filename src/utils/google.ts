import { thirdUserExistData, thirdLoginData } from '@/api/user/types'
import { googleValidateApi, checkThirdUserApi } from '@/api/user/index'
import { awaitWraper } from './index'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

import { googleTokenLogin } from 'vue3-google-login'
import { get } from 'lodash-es'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const GOOGLE_CLIENT_ID = '761335815308-g5tbur6tcihf1j6iv7kboqnim1l4tj5a.apps.googleusercontent.com'
const loginData = <thirdLoginData>{
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

export const googleLogin = () => {
  googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    googleValidateApi({ access_token: response.access_token })
      .then((resp) => {
        if (resp.data?.userInfo?.id) {
          handleThirdLogin({ ThirdPartyType: '4', ThirdPartyId: resp.data?.userInfo?.id, ThirdPartyName: 'Google' }, resp.data.sign)
        } else {
          showToast('非法用户')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

// 用户存在则直接登录， 否则跳转注册
export const handleThirdLogin = async (data: thirdUserExistData, sign: string) => {
  const isExistResp = await awaitWraper(checkThirdUserApi(data))
  const isExist = get(isExistResp, '[1].data', false)
  loginData.Sign = sign
  Object.assign(loginData, data)
  if (isExist) {
    const userStore = useUserStore()
    const loginRes = await awaitWraper(userStore.thirdLogin(loginData))
    if (loginRes[0]) {
      showToast(loginRes[0])
    } else {
      router.push({ name: 'index' })
    }
  } else {
    // 跳转到第三方注册补充资料
    router.push({ name: 'thirdReg', query: { ThirdPartyType: loginData.ThirdPartyType, ThirdPartyId: loginData.ThirdPartyId, ThirdPartyName: loginData.ThirdPartyName, Sign: loginData.Sign } })
  }
}
