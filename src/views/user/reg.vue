<template>
  <div class="page">
    <UserHeader :route-name="'index'" />
    <main class="main">
      <div class="loginbox">
        <div class="l-signin">
          <h2>{{ t('createUser') }}</h2>
          <div class="ls-third">
            <div class="t-list">
              <a @click="googleLogin"> <img :src="getAssetsFile('svg/google-oauth2.svg')" /> Google</a>
              <a @click="facebookLogin"> <img :src="getAssetsFile('svg/facebook.svg')" />Facebook </a>
            </div>
            <span class="btn btn-light" @click="setShowThirdLoginBox()">
              <i class="iconfont icon-add" />
            </span>
          </div>
        </div>
        <div class="l-line">
          <span> {{ t('or') }} </span>
        </div>
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('userName') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" autocomplete="off" />
              <div id="userNameTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" autocomplete="off" />
              <span v-if="!showloading" class="captcha" @click="sendEmail()">{{ regCount === 0 ? t('sendEmail') : regCount }}</span>
              <div id="emailTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" autocomplete="off" />
              <div id="captchaTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('password') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Password" ref="pwdDom" :type="showPwd ? 'text' : 'password'" class="form-control" autocomplete="off" :placeholder="t('password')" />
              <span :class="showPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showPwd = !showPwd" />
              </span>
              <div id="pwdTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('confirmPwd') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" autocomplete="off" :placeholder="t('confirmPwd')" />
              <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
              </span>
              <div id="confirmPwdTip" class="tip" />
            </div>
          </div>

          <!-- 是否接受协议 -->
          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input v-model="isAudit" ref="isAuditDom" type="checkbox" />
              <div class="desc">
                {{ t('regPage.isAdult') }}
                <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('regPage.termCondition') }}</a>
                {{ t('and') }}
                <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('regPage.privacyPolicy') }}</a>
                <div id="privacyTip" class="tip" />
              </div>
            </div>
          </div>
          <div class="cf-row">
            <div ref="isAgreeDom" class="cr-mark cm-checkbox">
              <input v-model="isAgree" type="checkbox" />
              <div class="desc">
                {{ t('regPage.isAgree') }}
                <div id="agreeTip" class="tip" />
              </div>
            </div>
          </div>
          <div class="cf-row">
            <div id="captcha" />
            <div id="captEl" class="tip" />
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full loading-btn" @click="handleReg()">
                <i v-show="btnLoading" class="iconfont icon-loading" />
                {{ t('createUser') }}
              </a>
            </div>
          </div>
          <div v-if="appStore.robotCheck" class="cf-row">
            <div ref="turnstileBox" id="turnstile-box" />
          </div>
          <div class="cf-row">
            <div class="cr-bo" @click="router.push({ name: 'login' })">
              {{ t('hasAccount') }}
              <a>
                {{ t('login') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="mask-box" id="other-signin" v-show="showThirdLoginBox">
      <div class="mb-bd">
        <div class="other-signin">
          <dl>
            <dt>{{ $t('otherMethod') }}</dt>
            <dd>
              <a @click="twitterLogin"> <img :src="getAssetsFile('svg/twiter.svg')" />Twitter </a>
            </dd>
            <dd>
              <a @click="lineLogin"> <img :src="getAssetsFile('svg/line.svg')" />Line </a>
            </dd>
            <dd>
              <a @click="telegramLogin()"> <img :src="getAssetsFile('svg/telegram.svg')" />Telegram </a>
            </dd>
          </dl>
          <span class="icon-btn" @click="setShowThirdLoginBox()">
            <i class="iconfont icon-close" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, reactive, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { telegramLogin, googleLogin, facebookInit, facebookLogin, lineLogin, twitterLogin } from '@/thirdLogin/index'
import { getCookieValue } from '@/utils/index'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, loadJs } from '@/utils'
import { isPwd, isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, sendEmailApi, regApi, facebookRegApi } from '@/api/user/index'
import { useAppStore } from '@/store/modules/app'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'

const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
const { t, locale } = useI18n()

// 发送邮件倒计时60秒
let regCount = ref(0)
const regTimer = ref(0)
let btnLoading = ref(false)
// 是否显示第三方登录框
let showPwd = ref(false)
let showThirdLoginBox = ref(false)
// 临时存储表单值
let confirmPwd = ref('')
let showConfirmPwd = ref(false)
let showloading = ref(false)
let isAudit = ref(false)
let isAgree = ref(true)
// dom元素
let userNameDom = ref<HTMLInputElement | null>(null)
let emailDom = ref<HTMLInputElement | null>(null)
let pwdDom = ref<HTMLInputElement | null>(null)
let confirmPwdDom = ref<HTMLInputElement | null>(null)
let isAuditDom = ref<HTMLInputElement | null>(null)
let isAgreeDom = ref<HTMLInputElement | null>(null)
let verificationCodeDom = ref<HTMLInputElement | null>(null)

// 错误信息
let errorMsg = ref('')

const agentId = localStorage.getItem('agentId')
let regForm = reactive({
  UserName: '',
  Password: '',
  CountryCode: '',
  PhoneNumber: '',
  Email: '',
  AgentId: agentId || '',
  DateOfBirth: '',
  RegisterUrl: document.domain,
  VerificationCode: '',
  Token: '',
  Currency: ''
})

let currency = localStorage.getItem('Currency')
if (currency) {
  regForm.Currency = currency
}

const setShowThirdLoginBox = () => {
  showThirdLoginBox.value = !showThirdLoginBox.value
  console.log(showThirdLoginBox.value)
}

// 发送验证码
const sendEmail = async () => {
  if (regCount.value > 0) {
    return false
  }
  const dm = document.getElementById('emailTip')
  if (!isEmail(regForm.Email)) {
    errorMsg.value = t('tips.isEmail')
    dm!.innerHTML = errorMsg.value
    return false
  } else {
    errorMsg.value = ''
    dm!.innerHTML = ''
  }
  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    errorMsg.value = t('tips.emailExist')
    dm!.innerHTML = errorMsg.value
    return false
  } else {
    dm!.innerHTML = ''
    errorMsg.value = ''
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      errorMsg.value = ''
      dm!.innerHTML = errorMsg.value
      regCount.value = 60
      regTimer.value = window.setInterval(() => {
        regCount.value--
        localStorage.setItem('regCount', regCount.value.toString())
        if (regCount.value == 0) {
          clearInterval(regTimer.value)
        }
      }, 1000)
      console.log(resp)
    })
    .catch((error) => {
      showloading.value = false
      // showToast(t('tips.sendFail'))
      console.log(error)
    })
}

// 检查邮箱是否占用
const checkEmailExist = async () => {
  try {
    const dm = document.getElementById('emailTip')
    if (regForm.Email == '') {
      errorMsg.value = t('tips.inputEmail')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      dm!.innerHTML = ''
      errorMsg.value = ''
    }
    if (!isEmail(regForm.Email)) {
      errorMsg.value = t('tips.isEmail')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      dm!.innerHTML = ''
      errorMsg.value = ''
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email, noLoading: true })
    if (isExistEmailResp.data) {
      errorMsg.value = t('tips.emailExist')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      errorMsg.value = ''
      dm!.innerHTML = ''
    }
    return false
  } catch (error: any) {
    // showToast(error)
    return true
  }
}

const fb_id = localStorage.getItem('fb_id')
if (fb_id) {
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  // fbq('init', '331446269642463')
  fbq('init', fb_id)
}

/** 注册逻辑 */
const handleReg = async () => {
  if (btnLoading.value) {
    return false
  }
  btnLoading.value = true
  errorMsg.value = ''
  const allTip = document.getElementsByClassName('tip')
  for (var i = 0; i < allTip.length; i++) {
    allTip[i].innerHTML = ''
  }

  const userEl = document.getElementById('userNameTip')
  const captchaEl = document.getElementById('captchaTip')
  const pwdEl = document.getElementById('pwdTip')
  const confirmPwdEl = document.getElementById('confirmPwdTip')
  const privacyEl = document.getElementById('privacyTip')
  const agreeEl = document.getElementById('agreeTip')
  const captEl = document.getElementById('captEl')

  userEl!.innerHTML = ''
  if (regForm.UserName == '') {
    errorMsg.value = t('tips.inputAccount')
    userEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    userEl!.innerHTML = ''
  }
  if (!isUname(regForm.UserName)) {
    errorMsg.value = t('tips.isAccount')
    userEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    userEl!.innerHTML = ''
  }
  const isExistUserResp = await checkUserApi({ UserName: regForm.UserName, noLoading: true })
  if (isExistUserResp.data) {
    errorMsg.value = t('tips.userNameExist')
    userEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    userEl!.innerHTML = ''
  }
  await checkEmailExist()
  if (errorMsg.value != '') {
    btnLoading.value = false
    return false
  }
  if (regForm.VerificationCode == '') {
    errorMsg.value = t('tips.inputEmailcapcha')
    captchaEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    captchaEl!.innerHTML = ''
  }

  // 验证密码
  if (regForm.Password == '' || !isPwd(regForm.Password)) {
    errorMsg.value = t('tips.isPwd')
    pwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else if (regForm.Password == regForm.UserName) {
    errorMsg.value = t('tips.pwdName')
    pwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    pwdEl!.innerHTML = ''
  }

  // 确认密码
  if (regForm.Password != confirmPwd.value) {
    errorMsg.value = t('tips.pwdNotMatch')
    confirmPwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    confirmPwdEl!.innerHTML = ''
  }

  // 是否成年
  if (!isAudit.value) {
    errorMsg.value = t('tips.isAudit')
    privacyEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    privacyEl!.innerHTML = ''
  }

  // 同意协议
  if (!isAgree.value) {
    errorMsg.value = t('tips.isAgree')
    agreeEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    agreeEl!.innerHTML = ''
  }

  if (appStore.robotCheck) {
    if (regForm.Token == '') {
      captEl!.innerHTML = t('finishCaptcha')
      btnLoading.value = false
      return false
    } else {
      errorMsg.value = ''
      captEl!.innerHTML = ''
    }
  } else {
    errorMsg.value = ''
    captEl!.innerHTML = ''
  }

  try {
    regApi(regForm)
      .then((resp) => {
        console.log(resp)
        if (fb_id) {
          if (fb_id != '387054467539559') {
            fbq('track', 'CompleteRegistration')
          } else {
            facebookReg()
          }
          // fbq('track', 'CompleteRegistration')
          // facebookReg()
        }
        userStore
          .login({ UserName: regForm.UserName, PassWord: regForm.Password })
          .then(() => {
            showToast(t('tips.regSuccess'))
            router.push({ name: 'index' })
            btnLoading.value = false
            return false
          })
          .catch((error) => {
            showToast(error)
            btnLoading.value = false
            router.push({ name: 'login' })
            return false
          })
      })
      .catch((error) => {
        btnLoading.value = false
        if (error.code && error.code == '1036') {
          if (captchaIns) {
            captchaIns.refresh()
          }
        }
      })
  } catch (error: any) {
    // showToast(error)
    btnLoading.value = false
    return false
  }
}

const facebookReg = () => {
  const fbc = getCookieValue('_fbc')
  const fbp = getCookieValue('_fbp')
  const params = {
    fb_id: fb_id,
    email: regForm.Email,
    userAgent: navigator.userAgent,
    fbp: fbp,
    fbc: fbc
  }
  facebookRegApi(params)
}

let captchaIns: any = null
const reRobotCheck = () => {
  if (appStore.robotCheck) {
    let lang = ''
    if (locale.value == 'zh') {
      lang = 'zh-CN'
    } else if (locale.value == 'en') {
      lang = 'en-US'
    } else {
      lang = locale.value
    }
    nextTick(() => {
      //@ts-ignore
      initNECaptcha(
        {
          element: '#captcha',
          captchaId: '03259a03bc094208a087fadc9afedc05',
          width: '320px',
          mode: 'float',
          apiVersion: 2,
          lang: lang,
          onVerify: function (err: any, data: { validate: string }) {
            if (err) return // 当验证失败时，内部会自动refresh方法，无需手动再调用一次
            // 若成功拿到 validate，可向后端发送请求
            regForm.Token = data.validate
          }
        },
        function onload(instance: any) {
          captchaIns = instance
        },
        function onerror(err: any) {
          console.warn(err)
        }
      )
    })
  }
}

onMounted(() => {
  // 设置点击发送邮件后倒计时60秒
  const regCountStorage = localStorage.getItem('regCount')
  if (regCountStorage && parseInt(regCountStorage) > 0) {
    regCount.value = parseInt(regCountStorage)
  }
  if (regCount.value > 0) {
    regTimer.value = window.setInterval(() => {
      regCount.value--
      localStorage.setItem('regCount', regCount.value.toString())
      if (regCount.value == 0) {
        clearInterval(regTimer.value)
      }
    }, 1000)
  }

  appStore.getConfig().then(() => {
    reRobotCheck()
  })
})

onBeforeUnmount(() => {
  if (captchaIns) {
    captchaIns.refresh()
  }
})

loadJs('https://telegram.org/js/telegram-widget.js')
facebookInit()
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
