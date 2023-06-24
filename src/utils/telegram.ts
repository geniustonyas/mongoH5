import { thirdUserExistData, thirdLoginData } from '@/api/user/types'
import { telegramValidate, checkThirdUser } from '@/api/user/index'
import { awaitWraper } from './index'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

import { get } from 'lodash-es'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const BOT_ID = '5984604441'
const loginData = <thirdLoginData>{
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

export const telegramLogin = () => {
  // @ts-ignore
  window.Telegram.Login.auth({ bot_id: BOT_ID, request_access: 'write', embed: 1 }, (data) => {
    if (data) {
      telegramValidate(data)
        .then((resp) => {
          if (resp.data.ischecked) {
            handleThirdLogin({ ThirdPartyType: '2', ThirdPartyId: data.id, ThirdPartyName: 'Telegram' }, resp.data.sign)
          } else {
            showToast('非法用户')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      showToast('telegram授权失败')
    }
  })
}

// 用户存在则直接登录， 否则跳转注册
export const handleThirdLogin = async (data: thirdUserExistData, sign: string) => {
  const isExistResp = await awaitWraper(checkThirdUser(data))
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
