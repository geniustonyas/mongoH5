import { watchEffect } from 'vue'
import axios from 'axios'

import { thirdData } from '@/api/user/types'
import { checkThirdUserApi, getThirdNonceApi, verifyMessageApi, googleValidateApi, facebookValidateApi, telegramValidateApi, twitterValidateApi, lineValidateApi } from '@/api/user/index'
import { awaitWraper } from '@/utils/index'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

import facebookWebLogin from './plugin/facebookWebLogin'
import { account, connect, signMessage, chain } from '@kolirt/vue-web3-auth'
import { googleTokenLogin } from 'vue3-google-login'
//@ts-ignore
import hello from 'hellojs'
import { SiweMessage } from 'siwe'
import { get } from 'lodash-es'
import { showToast } from 'vant'
import 'vant/es/toast/style'

// web3Modal project_Id
// const projectId = '1a2a6ba4947c7a9802ebcbe6426b3b5b'
// telegram 信息
// const BOT_ID = '5984604441'
const BOT_ID = '6360341967'
// 谷歌app信息
const GOOGLE_CLIENT_ID = '761335815308-g5tbur6tcihf1j6iv7kboqnim1l4tj5a.apps.googleusercontent.com'
// Facebook ID
const FACEBOOK_APPID = '663909171737293'
// Twitter
const API_KEY = 'j0FMRYjdLk1FYeo1s8LXxFE0r'
// const APISECRET = 'dPs7txRNjO8WiGckCqIyazJ2rkBf6ayMQ7aXHZouwwR8Bx22QD'
// const CLIENT_ID = 'a3l5U2w1NF9pRlRERXRIUXl6a2s6MTpjaQ'
// const CLIENT_SECRET = 'efxh_b4aY9n0P1wIauQDY8BLGP710cRE6xj1O-Y7BRp-7-BEmO'
// const Access_Token = '1673429389072306176-gN4fLy2oE0XdXLhNLlk5buUVwDUoaw'
// const Access_Token_Secret = 'DBsRVnIYUUb7RWTUBRXGKMvaTcASDpNgZv6ZqMNDpuPVg'
// const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAKVRogEAAAAAjJ6keGYc%2FCqXAMAWVBxvSRpVe5I%3D3iNGsnLUVh3mRy2rx8VoAebemJFHSlwW8YNmOqfabdDuxeezaN'

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
const userStore = useUserStore()

const signWalletMessage = async () => {
  let nonce = ''
  const nonceResp = await getThirdNonceApi()
  if (!nonceResp.data) {
    return false
  }
  nonce = nonceResp.data
  const message = new SiweMessage({
    domain: window.location.host,
    address: account.address,
    statement: 'Sign in with Ethereum to the app.',
    uri: window.location.origin,
    version: '1',
    chainId: chain.value.id,
    nonce: nonce
  }).prepareMessage()
  const signature = await signMessage(message)
  const verifyResp = await verifyMessageApi({ message, signature, id: account.address })
  if (verifyResp.data.ischecked) {
    //@ts-ignore
    handleThirdLogin({ ThirdPartyType: '5', ThirdPartyId: account.address, ThirdPartyName: 'Wallet' }, verifyResp.data.sign)
  } else {
    showToast('非法用户')
  }
}

watchEffect(async () => {
  if (account.connected) {
    signWalletMessage()
  }
})

export const walletLogin = async () => {
  if (account.connected) {
    signWalletMessage()
  } else {
    connect()
  }
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
        if (resp.status == 'connected') {
          facebookValidateApi({ access_token: resp.authResponse.accessToken })
            .then((resp) => {
              if (resp.data.ischecked) {
                handleThirdLogin({ ThirdPartyType: '0', ThirdPartyId: resp.data.userInfo.user_id, ThirdPartyName: 'Facebook' }, resp.data.sign)
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

export const twitterInit = () => {
  hello.init({ twitter: API_KEY })
}

export const twitterLogin = () => {
  hello('twitter').login()
  // Listen to signin requests
  hello.on('auth.login', function (resp: any) {
    // Get Profile
    hello(resp.network)
      .api('/me')
      .then(function (userInfo: any) {
        if (userInfo.id) {
          twitterValidateApi({ userId: userInfo.id })
            .then((resp) => {
              if (resp.data.ischecked) {
                handleThirdLogin({ ThirdPartyType: '3', ThirdPartyId: userInfo.id, ThirdPartyName: 'Twitter' }, resp.data.sign)
              } else {
                showToast('非法用户')
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
  })
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

export const lineLogin = () => {
  const line_auth = 'https://access.line.me/oauth2/v2.1/authorize'
  const auth_params = {
    response_type: 'code',
    client_id: LINE_CLIENT_ID,
    redirect_uri: location.origin + '/user/authCallback', // 在LINE Developers Console上注册的回调 URL 的 URL 编码字符串。您可以添加任何查询参数。
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
        // redirect_uri: window.location.origin + '/user/authCallback'
        redirect_uri: window.location.origin + '/user/login'
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
        showToast('非法用户')
      }
    } catch (error) {
      console.log(error)
    }
  }
})

// 用户存在则直接登录， 否则跳转注册
const handleThirdLogin = async (data: thirdData, sign: string) => {
  const isExistResp = await awaitWraper(checkThirdUserApi(data))
  const isExist = get(isExistResp, '[1].data', false)
  console.log(isExist)
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
    // 跳转到第三方注册补充资料
    router.push({ name: 'thirdReg', query: { ThirdPartyType: loginData.ThirdPartyType, ThirdPartyId: loginData.ThirdPartyId, ThirdPartyName: loginData.ThirdPartyName, Sign: loginData.Sign } })
  }
}
