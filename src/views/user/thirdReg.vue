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
              <input v-model="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" @blur="checkUserExist()" />
              <div v-if="errorMsg.userNameMsg" class="tip">{{ errorMsg.userNameMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" />
              <span v-if="!isGoogle" class="captcha" @click="sendEmail()">{{ thirdRegCount === 0 ? t('sendEmail') : thirdRegCount }}</span>
              <div v-if="errorMsg.emailMsg" class="tip">{{ errorMsg.emailMsg }}</div>
            </div>
          </div>
          <!-- 邮箱验证码 -->
          <div v-if="!isGoogle" class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" @blur="checkCaptcha()" />
              <div v-if="errorMsg.captchaMsg" class="tip">{{ errorMsg.captchaMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input v-model="isAudit" ref="isAuditDom" type="checkbox" @blur="checkAudit" />
              {{ t('regPage.isAdult') }}
              <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('regPage.termCondition') }}</a>
              {{ t('and') }}
              <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('regPage.privacyPolicy') }}</a>
              <div v-if="errorMsg.isAuditMsg" class="tip">{{ errorMsg.isAuditMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div ref="isAgreeDom" class="cr-mark cm-checkbox">
              <input v-model="isAgree" type="checkbox" @blur="checkAgree" />
              {{ t('regPage.isAgree') }}
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="handleReg()">{{ t('createUser') }}</a>
            </div>
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
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { awaitWraper } from '@/utils'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, thirdRegApi, sendEmailApi } from '@/api/user'

import { cloneDeep } from 'lodash-es'
import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
const { t } = useI18n()

const userStore = useUserStore()
const appStore = useAppStore()

const isGoogle = ref(false)

// 发送邮件倒计时60秒
let thirdRegCount = ref(0)
const thirdRegTimer = ref(0)

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

let regForm = reactive({
  UserName: '',
  CountryCode: '',
  // PhoneNumber: '',
  Email: '',
  AgentId: '',
  // DateOfBirth: '',
  RegisterUrl: document.domain,
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: '',
  VerificationCode: ''
})
let loginForm = {
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

// 错误信息
const errorMsg = reactive({
  userNameMsg: '',
  emailMsg: '',
  captchaMsg: '',
  isAgreeMsg: '',
  isAuditMsg: ''
})
const defaultMsg = cloneDeep(errorMsg)

// 发送验证码
const sendEmail = async () => {
  if (thirdRegCount.value > 0) {
    return false
  }
  if (!isEmail(regForm.Email)) {
    // showToast(t('tips.isEmail'))
    errorMsg.emailMsg = t('tips.isEmail')
    // emailDom.value?.focus()
    return false
  }
  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    errorMsg.emailMsg = t('tips.emailExist')
    return false
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      errorMsg.emailMsg = ''
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

// 检查用户名是否占用
const checkUserExist = async () => {
  try {
    if (regForm.UserName == '') {
      errorMsg.userNameMsg = t('tips.inputAccount')
      return false
    } else {
      errorMsg.userNameMsg = ''
    }
    if (!isUname(regForm.UserName)) {
      errorMsg.userNameMsg = t('tips.isAccount')
      return false
    } else {
      errorMsg.userNameMsg = ''
    }
    const isExistUserResp = await checkUserApi({ UserName: regForm.UserName, noLoading: true })
    if (isExistUserResp.data) {
      errorMsg.userNameMsg = t('tips.userNameExist')
      // showToast(t('tips.userNameExist'))
      return false
    } else {
      errorMsg.userNameMsg = ''
    }
    return true
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

// 检查邮箱是否占用
const checkEmailExist = async () => {
  try {
    if (regForm.Email == '') {
      errorMsg.emailMsg = t('tips.inputEmail')
      return false
    } else {
      errorMsg.emailMsg = ''
    }
    if (!isEmail(regForm.Email)) {
      errorMsg.emailMsg = t('tips.isEmail')
      return false
    } else {
      errorMsg.emailMsg = ''
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email, noLoading: true })
    if (isExistEmailResp.data) {
      errorMsg.emailMsg = t('tips.emailExist')
      return true
      // showToast(t('tips.emailExist'))
    } else {
      errorMsg.emailMsg = ''
    }
    return false
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

const checkCaptcha = () => {
  if (regForm.VerificationCode == '') {
    errorMsg.captchaMsg = t('tips.inputEmailcapcha')
  } else {
    errorMsg.captchaMsg = ''
  }
}

const checkAudit = () => {
  if (!isAudit.value) {
    errorMsg.isAuditMsg = t('tips.isAudit')
  } else {
    errorMsg.isAuditMsg = ''
  }
}

const checkAgree = () => {
  if (!isAgree.value) {
    errorMsg.isAgreeMsg = t('tips.isAgree')
  } else {
    errorMsg.isAgreeMsg = ''
  }
}

/** 登录逻辑 */
const handleReg = async () => {
  Object.assign(errorMsg, defaultMsg)
  await checkUserExist()
  await checkEmailExist()
  checkAudit()
  checkAgree()

  if (errorMsg.userNameMsg || errorMsg.emailMsg || errorMsg.captchaMsg || errorMsg.isAuditMsg || errorMsg.isAgreeMsg) {
    return false
  }
  Object.assign(regForm, appStore.thirdData)
  Object.assign(loginForm, appStore.thirdData)
  // regForm.DateOfBirth = `${year.value}-${month.value}-${day.value}`
  const regResult = await awaitWraper(thirdRegApi(regForm))
  if (regResult[0]) {
    showToast(t('tips.regFail'))
    return false
  } else {
    userStore
      .thirdLogin(loginForm)
      .then(() => {
        showToast(t('tips.regSuccess'))
        router.push({ name: 'index' })
        appStore.resetThirdData()
        return false
      })
      .catch((error) => {
        // showToast(error)
        console.log(error)
        router.push({ name: 'login' })
        return false
      })
  }
}

onMounted(() => {
  isGoogle.value = appStore.thirdData.ThirdPartyType == '4' && appStore.googleEmail != ''
  // 如果没有参数， 则跳转回登录页
  if (appStore.thirdData.ThirdPartyType == '' || appStore.thirdData.ThirdPartyId == '' || appStore.thirdData.ThirdPartyName == '' || appStore.thirdData.Sign == '') {
    showToast(t('errorCodes.1005'))
    // router.back()
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
})
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
