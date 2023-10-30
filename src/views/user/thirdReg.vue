<template>
  <div class="page">
    <UserHeader :route-name="'index'" />
    <main class="main">
      <div class="loginbox">
        <div class="l-signin third-reg">
          <h1>{{ t('thirdRegPage.beFinished') }}</h1>
          <h3>{{ t('thirdRegPage.fixInfo') }}</h3>
        </div>
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('userName') }}</span>
            </div>
            <div class="cr-input">
              <input v-model="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" />
              <div id="userNameTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" />
              <span v-if="!isGoogle" v-show="!showloading" class="captcha" @click="sendEmail()">{{ thirdRegCount === 0 ? t('sendEmail') : thirdRegCount }}</span>
              <div id="emailTip" class="tip" />
            </div>
          </div>
          <!-- 邮箱验证码 -->
          <div v-show="!isGoogle" class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
              <div id="captchaTip" class="tip" />
            </div>
          </div>
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
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="handleReg()"><i v-show="btnLoading" class="iconfont icon-loading" />{{ t('createUser') }}</a>
            </div>
          </div>
          <div v-if="appStore.robotCheck" class="cf-row">
            <div ref="turnstileBox" id="turnstile-box" />
          </div>
          <div class="cf-row">
            <div class="cr-bo">
              {{ t('hasAccount') }}
              <a @click="router.push({ name: 'login' })">{{ t('login') }}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { awaitWraper } from '@/utils'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, thirdRegApi, sendEmailApi } from '@/api/user'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
const { t, locale } = useI18n()

const userStore = useUserStore()
const appStore = useAppStore()

const isGoogle = ref(false)

// 发送邮件倒计时60秒
let thirdRegCount = ref(0)
const thirdRegTimer = ref(0)
let btnLoading = ref(false)

let showloading = ref(false)
// let day = ref<string | number>('')
// let month = ref<string | number>('')
// let year = ref<string | number>('')
let isAudit = ref(false)
let isAgree = ref(true)

// dom元素
let userNameDom = ref<HTMLInputElement | null>(null)
let emailDom = ref<HTMLInputElement | null>(null)
// let dayDom = ref<HTMLInputElement | null>(null)
// let monthDom = ref<HTMLInputElement | null>(null)
// let yearDom = ref<HTMLInputElement | null>(null)
// let countryDom = ref<HTMLInputElement | null>(null)
// let phoneDom = ref<HTMLInputElement | null>(null)
let isAuditDom = ref<HTMLInputElement | null>(null)
let isAgreeDom = ref<HTMLInputElement | null>(null)
let verificationCodeDom = ref<HTMLInputElement | null>(null)

const agentId = localStorage.getItem('agentId')
let regForm = reactive({
  UserName: '',
  CountryCode: '',
  // PhoneNumber: '',
  Email: '',
  AgentId: agentId || '',
  // DateOfBirth: '',
  RegisterUrl: document.domain,
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: '',
  VerificationCode: '',
  Token: ''
})
let loginForm = {
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

// 错误信息
let errorMsg = ref('')

// 发送验证码
const sendEmail = async () => {
  if (thirdRegCount.value > 0) {
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
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      errorMsg.value = ''
      dm!.innerHTML = errorMsg.value
      // 倒计时
      thirdRegCount.value = 60
      thirdRegTimer.value = window.setInterval(() => {
        thirdRegCount.value--
        localStorage.setItem('thirdRegCount', thirdRegCount.value.toString())
        if (thirdRegCount.value == 0) {
          clearInterval(thirdRegTimer.value)
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

/** 登录逻辑 */
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
  const privacyEl = document.getElementById('privacyTip')
  const agreeEl = document.getElementById('agreeTip')

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
  if (regForm.VerificationCode == '' && !isGoogle.value) {
    errorMsg.value = t('tips.inputEmailcapcha')
    captchaEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    if (captchaEl) {
      captchaEl!.innerHTML = ''
    }
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
      reRobotCheck()
      btnLoading.value = false
      return false
    } else {
      errorMsg.value = ''
    }
  }

  Object.assign(regForm, appStore.thirdData)
  Object.assign(loginForm, appStore.thirdData)
  const regResult = await awaitWraper(thirdRegApi(regForm))
  if (regResult[0]) {
    if (regResult[0].code && regResult[0].code == '1036') {
      reRobotCheck()
    } else {
      showToast(t('tips.regFail'))
    }
    btnLoading.value = false
    return false
  } else {
    userStore
      .thirdLogin(loginForm)
      .then(() => {
        showToast(t('tips.regSuccess'))
        router.push({ name: 'index' })
        appStore.resetThirdData()
        btnLoading.value = false
        return false
      })
      .catch((error) => {
        // showToast(error)
        console.log(error)
        router.push({ name: 'login' })
        btnLoading.value = false
        return false
      })
  }
}

onMounted(() => {
  isGoogle.value = appStore.thirdData.ThirdPartyType == '4' && appStore.googleEmail != ''
  // 如果没有参数， 则跳转回登录页
  if (appStore.thirdData.ThirdPartyType == '' || appStore.thirdData.ThirdPartyId == '' || appStore.thirdData.ThirdPartyName == '' || appStore.thirdData.Sign == '') {
    showToast(t('errorCodes.1005'))
    router.back()
  }

  // 如果是google登录，则设置表单邮箱为google邮箱，并且禁用邮箱输入框
  if (appStore.thirdData.ThirdPartyType == '4') {
    regForm.Email = appStore.googleEmail
    nextTick(() => {
      emailDom.value?.setAttribute('disabled', 'disabled')
      userNameDom.value?.focus()
    })
  }

  // 设置点击发送邮件后倒计时60秒
  const regCountStorage = localStorage.getItem('thirdRegCount')
  if (regCountStorage && parseInt(regCountStorage) > 0) {
    thirdRegCount.value = parseInt(regCountStorage)
  }
  if (thirdRegCount.value > 0) {
    thirdRegTimer.value = window.setInterval(() => {
      thirdRegCount.value--
      localStorage.setItem('thirdRegCount', thirdRegCount.value.toString())
      if (thirdRegCount.value == 0) {
        clearInterval(thirdRegTimer.value)
      }
    }, 1000)
  }

  reRobotCheck()
})

onBeforeUnmount(() => {
  if (appStore.widgetId) {
    //@ts-ignore
    window.turnstile.remove(appStore.widgetId)
  }
})

const reRobotCheck = () => {
  // 如果开启了人机验证
  if (appStore.robotCheck) {
    //@ts-ignore
    if (window.turnstile === null || !window.turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      //@ts-ignore
      window.onloadTurnstileCallback = () => {
        //@ts-ignore
        appStore.widgetId = window?.turnstile?.render('#turnstile-box', {
          sitekey: '0x4AAAAAAAMV9yl4RvTQfcIH',
          callback: (response: string) => verify(response),
          language: locale.value
        })
      }
    } else {
      nextTick(() => {
        if (appStore.widgetId) {
          //@ts-ignore
          window.turnstile.remove(appStore.widgetId)
        }
        //@ts-ignore
        appStore.widgetId = window?.turnstile?.render('#turnstile-box', {
          sitekey: '0x4AAAAAAAMV9yl4RvTQfcIH',
          callback: (response: string) => verify(response),
          language: locale.value
        })
      })
    }
  }
}

const verify = (token: string) => {
  regForm.Token = token
}
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
