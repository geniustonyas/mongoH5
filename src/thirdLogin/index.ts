import axios from 'axios'

import { thirdData } from '@/api/user/types'
import { checkThirdUserApi, googleValidateApi, facebookValidateApi, telegramValidateApi, lineValidateApi } from '@/api/user/index'
import { awaitWraper } from '@/utils/index'
import { useUserStoreHook } from '@/store/modules/user'
import { useAppStoreHook } from '@/store/modules/app'
import router from '@/router'

import facebookWebLogin from './plugin/facebookWebLogin'
import { googleTokenLogin } from 'vue3-google-login'
import { get } from 'lodash-es'
import { showToast } from 'vant'

import i18n from '@/i18n'
const { t } = i18n.global
const userStore = useUserStoreHook()
const appStore = useAppStoreHook()

// telegram bot id
const BOT_ID = '6360341967'

// 谷歌app信息
const GOOGLE_CLIENT_ID = '213787019958-ojer4h9l5k216et4f5rp52ektlrjn5cv.apps.googleusercontent.com'

// Facebook ID
const FACEBOOK_APPID = '354611000247668'
// const FACEBOOK_APPID = '1082486833129089'

// Line
const LINE_CLIENT_ID = '2000085263'
const LINE_CLIENT_SECRET = '6e1c3b6c5da651f1e9c6d052c351e358'

// 第三方登录接口参数
const loginData = <thirdData>{
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}
let openWindow: any = null

export const googleLogin = () => {
  googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    googleValidateApi({ access_token: response.access_token })
      .then((resp) => {
        if (resp.data?.userInfo?.id) {
          handleThirdLogin({ ThirdPartyType: '4', ThirdPartyId: resp.data?.userInfo?.id, ThirdPartyName: 'Google' }, resp.data.sign, resp.data?.userInfo?.email)
        } else {
          showToast(t('tips.invalidThirdUser'))
        }
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

export const facebookInit = () => {
  facebookWebLogin.init(FACEBOOK_APPID, (status) => {
    if (status) {
      console.log('Facebook auth success')
    }
  })
}

export const facebookLogin = () => {
  facebookWebLogin.login(
    () => {
      facebookWebLogin.getLoginStatus((resp) => {
        if (resp.status == 'connected') {
          facebookValidateApi({ access_token: resp.authResponse.accessToken })
            .then((resp) => {
              if (resp.data.ischecked) {
                handleThirdLogin({ ThirdPartyType: '0', ThirdPartyId: resp.data.userInfo.user_id, ThirdPartyName: 'Facebook' }, resp.data.sign)
              } else {
                showToast(t('tips.invalidThirdUser'))
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          showToast(t('tips.authFail'))
        }
      })
    },
    {
      scope: 'email',
      return_scopes: true
    }
  )
}

// twitter登录， 已经改为后端对接登录模式
export const twitterLogin = () => {
  const callBackUrl = encodeURIComponent(`${location.origin}/#/user/authCallback`)
  const url = import.meta.env.VITE_THIRD_API + `/auth/twitter?date=${Date.now()}&callBackUrl=${callBackUrl}`
  openWindow = window.open(`${url}`, '', 'width=500,height=700,top=0,left=0,titlebar=no, menubar=no, scrollbars=yes, resizable=yes, status=yes, toolbar=no, location=yes')
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
            showToast(t('tips.invalidThirdUser'))
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      showToast(t('tips.authFail'))
    }
  })
}

export const lineLogin = () => {
  const line_auth = 'https://access.line.me/oauth2/v2.1/authorize'
  const auth_params = {
    response_type: 'code',
    client_id: LINE_CLIENT_ID,
    redirect_uri: window.location.origin + '/#/user/authCallback/', // 在LINE Developers Console上注册的回调 URL 的 URL 编码字符串。您可以添加任何查询参数。
    state: 'STATE', // 用于防止跨站点请求伪造的唯一字母数字字符串. 您的网络应用应为每个登录会话生成一个随机值。这不能是 URL 编码的字符串。
    scope: 'profile openid email' // 向用户请求的权限,查询范围可以看官网(https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)
  }
  const queryString = Object.keys(auth_params)
    .map((key) => {
      //@ts-ignore
      return encodeURIComponent(key) + '=' + encodeURIComponent(auth_params[key])
    })
    .join('&')
  openWindow = window.open(`${line_auth}?${queryString}`, '', 'width=500,height=700,top=0,left=0,titlebar=no, menubar=no, scrollbars=yes, resizable=yes, status=yes, toolbar=no, location=yes')
}

// line登录监听打开窗口获取到的code
window.addEventListener('message', async (event) => {
  if (event.origin !== window.location.origin) {
    return false
  }
  if (event.data.lineCode && event.data.lineCode.length > 0) {
    try {
      const data = {
        grant_type: 'authorization_code', // 固定值
        code: event.data.lineCode, // 从 LINE 平台收到的授权码
        client_id: LINE_CLIENT_ID,
        client_secret: LINE_CLIENT_SECRET,
        redirect_uri: window.location.origin + '/#/user/authCallback'
      }
      const resp = await axios({
        url: 'https://api.line.me/oauth2/v2.1/token',
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      })
      const userInfo = await axios({
        url: 'https://api.line.me/oauth2/v2.1/userinfo',
        // @ts-ignore
        headers: { Authorization: `Bearer ${resp.data.access_token}` }
      })
      const result = await lineValidateApi({ userId: userInfo.data.sub })
      if (result.data.ischecked) {
        handleThirdLogin({ ThirdPartyType: '1', ThirdPartyId: userInfo.data.sub, ThirdPartyName: 'Line' }, result.data.sign)
        openWindow.close()
      } else {
        showToast(t('tips.invalidThirdUser'))
      }
    } catch (error) {
      console.log(error)
    }
  }
})

// twitter 监听storage登录
window.addEventListener('storage', async (event) => {
  // 判断事件来源是否为目标存储区域（例如 localStorage）
  if (event.storageArea === localStorage) {
    const twitterId = localStorage.getItem('twitterId')
    const sign = localStorage.getItem('twitterSign')
    if (twitterId && sign) {
      handleThirdLogin({ ThirdPartyType: '3', ThirdPartyId: twitterId, ThirdPartyName: 'Twitter' }, sign)
      localStorage.removeItem('twitterId')
      localStorage.removeItem('twitterSign')
      openWindow.close()
    }
  }
})

// 用户存在则直接登录， 否则跳转注册
const handleThirdLogin = async (data: thirdData, sign: string, email = '') => {
  const isExistResp = await awaitWraper(checkThirdUserApi(data))
  const isExist = get(isExistResp, '[1].data', false)
  loginData.Sign = sign
  Object.assign(loginData, data)
  if (isExist) {
    const loginRes = await awaitWraper(userStore.thirdLogin(loginData))
    if (loginRes[0]) {
      showToast(loginRes[0])
    } else {
      router.push({ name: 'index' })
    }
  } else {
    // 如果是google登录则设置邮箱
    if (loginData.ThirdPartyType == '4') {
      appStore.googleEmail = email
    }
    appStore.thirdData = loginData
    router.push({ name: 'thirdReg' })
  }
}
