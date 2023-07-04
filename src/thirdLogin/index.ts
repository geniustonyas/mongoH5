import { thirdData } from '@/api/user/types'
import { checkThirdUserApi, facebookValidateApi, telegramValidateApi, googleValidateApi } from '@/api/user/index'
import { awaitWraper } from '@/utils/index'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

import facebookWebLogin from './plugin/facebookWebLogin'
import { googleTokenLogin } from 'vue3-google-login'
import { get } from 'lodash-es'
import { showToast } from 'vant'
import 'vant/es/toast/style'

// telegram 信息
const BOT_ID = '5984604441'
// 谷歌app信息
const GOOGLE_CLIENT_ID = '761335815308-g5tbur6tcihf1j6iv7kboqnim1l4tj5a.apps.googleusercontent.com'
// Facebook ID
const FACEBOOK_APPID = '663909171737293'
// 第三方登录接口参数
const loginData = <thirdData>{
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

export const facebookInit = () => {
  facebookWebLogin.init(FACEBOOK_APPID, (status) => {
    if (status) {
      console.log('Facebook授权登录环境配置成功')
    }
  })
}

export const facebookLogin = () => {
  facebookWebLogin.login(
    () => {
      facebookWebLogin.getLoginStatus((resp) => {
        console.log(resp)
        if (resp.status == 'connected') {
          facebookValidateApi({ access_token: resp.authResponse.accessToken })
            .then((resp) => {
              console.log(resp)
              if (resp.data.ischecked) {
                handleThirdLogin({ ThirdPartyType: '2', ThirdPartyId: resp.data.userInfo.user_id, ThirdPartyName: 'Facebook' }, resp.data.sign)
              } else {
                showToast('非法用户')
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('当前用户未登录facebook')
        }
      })
    },
    {
      scope: 'email',
      return_scopes: true
    }
  )
}

export const telegramLogin = () => {
  // @ts-ignore
  window.Telegram.Login.auth({ bot_id: BOT_ID, request_access: 'write', embed: 1 }, (data) => {
    if (data) {
      telegramValidateApi(data)
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
const handleThirdLogin = async (data: thirdData, sign: string) => {
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
