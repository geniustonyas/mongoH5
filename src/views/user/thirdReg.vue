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
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" />
              <span v-if="!isGoogle" class="captcha" @click="sendEmail()">{{ thirdRegCount === 0 ? t('sendEmail') : thirdRegCount }}</span>
            </div>
          </div>
          <!-- 邮箱验证码 -->
          <div v-if="!isGoogle" class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input v-model="isAudit" ref="isAuditDom" type="checkbox" />
              {{ t('regPage.isAdult') }}
              <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('regPage.termCondition') }}</a>
              {{ t('and') }}
              <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('regPage.privacyPolicy') }}</a>
            </div>
          </div>
          <div class="cf-row">
            <div ref="isAgreeDom" class="cr-mark cm-checkbox">
              <input v-model="isAgree" type="checkbox" />
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

// 发送验证码
const sendEmail = async () => {
  if (thirdRegCount.value > 0) {
    return false
  }
  if (!isEmail(regForm.Email)) {
    showToast(t('tips.isEmail'))
    emailDom.value?.focus()
    return false
  }
  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    return false
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))

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
      return false
    }
    if (!isUname(regForm.UserName)) {
      return false
    }
    const isExistUserResp = await checkUserApi({ UserName: regForm.UserName, noLoading: true })
    if (isExistUserResp.data) {
      userNameDom.value?.focus()
      showToast(t('tips.userNameExist'))
    }
    return isExistUserResp.data
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

// 检查邮箱是否占用
const checkEmailExist = async () => {
  try {
    if (regForm.Email == '') {
      return false
    }
    if (!isEmail(regForm.Email)) {
      return false
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email, noLoading: true })
    if (isExistEmailResp.data) {
      emailDom.value?.focus()
      showToast(t('tips.emailExist'))
    }
    return isExistEmailResp.data
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

/** 登录逻辑 */
const handleReg = async () => {
  if (regForm.UserName == '') {
    showToast(t('tips.inputAccount'))
    userNameDom.value?.focus()
    return false
  }
  if (!isUname(regForm.UserName)) {
    showToast(t('tips.isAccount'))
    userNameDom.value?.focus()
    return false
  }

  if (!isGoogle.value) {
    if (regForm.Email == '') {
      showToast(t('tips.inputEmail'))
      emailDom.value?.focus()
      return false
    }
    if (!isEmail(regForm.Email)) {
      showToast(t('tips.isEmail'))
      emailDom.value?.focus()
      return false
    }
    if (regForm.VerificationCode == '') {
      showToast(t('tips.inputEmailcapcha'))
      verificationCodeDom.value?.focus()
      return false
    }
  }
  if (!isAudit.value) {
    showToast(t('tips.isAudit'))
    isAuditDom.value?.focus()
    return false
  }
  if (!isAgree.value) {
    showToast(t('tips.isAgree'))
    isAgreeDom.value?.focus()
    return false
  }

  const isExistUser = await checkUserExist()
  if (isExistUser) {
    return false
  }

  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
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
})
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
