<template>
  <div class="page">
    <UserHeader />
    <main class="main">
      <div class="loginbox">
        <UserPartner />
        <div class="l-signin">
          <h2>{{ t('createUser') }}</h2>
          <div class="ls-third">
            <div class="t-list">
              <a @click="googleLogin()">
                <img :src="getAssetsFile('svg/google-oauth2.svg')" />
                Google
              </a>
              <a>
                <img :src="getAssetsFile('svg/facebook.svg')" />
                Facebook
              </a>
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
              <input v-model.trim="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" @blur="checkUserExist()" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" />
              <Loading v-show="showloading" size="20px" class="captcha" />
              <span v-show="!showloading" :class="sended || regForm.Email.length == 0 ? 'captcha sended' : 'captcha'" @click="sendEmail()">{{ sended ? t('sended') : t('sendEmail') }}</span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('birthday') }}</span>
            </div>
            <div class="cr-input group">
              <select class="form-control" v-model="day" ref="dayDom">
                <option v-for="item in 31" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
              </select>
              <select class="form-control" v-model="month" ref="monthDom">
                <option v-for="item in 12" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
              </select>
              <select class="form-control" v-model="year" ref="yearDom">
                <option v-for="item in getYearList()" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('telephone') }}</span>
            </div>
            <div class="cr-input group g-tel">
              <select v-model="regForm.CountryCode" ref="countryDom" class="form-control">
                <option v-for="(item, index) of countryCode" :key="index" :value="`${item.country_code} (+${item.phone_code})`">{{ `${item.country_code} (+${item.phone_code})` }}</option>
              </select>
              <input v-model.trim="regForm.PhoneNumber" ref="phoneDom" type="tel" class="form-control" :placeholder="t('regPage.holderTelephone')" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('password') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Password" ref="pwdDom" :type="showPwd ? 'text' : 'password'" class="form-control" placeholder="" />
              <span :class="showPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showPwd = !showPwd" />
              </span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('confirmPwd') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" placeholder="" />
              <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
              </span>
            </div>
          </div>

          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input v-model="isAudit" ref="isAuditDom" type="checkbox" />
              {{ t('regPage.isAdult') }}
              <a href="#">{{ t('regPage.termCondition') }}</a>
              {{ t('and') }}
              <a href="#">{{ t('regPage.privacyPolicy') }}</a>
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
              <a @click="router.push({ name: 'login' })">
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
            <dt>{{ t('otherMethod') }}</dt>
            <dd>
              <a href="#"> <img :src="getAssetsFile('svg/twiter.svg')" />Twitter </a>
            </dd>
            <dd>
              <a href="#"> <img :src="getAssetsFile('svg/line.svg')" />Line </a>
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import UserPartner from '@/components/layout/UserPartner.vue'
import UserHeader from '@/components/layout/UserHeader.vue'

import { telegramLogin, googleLogin } from '@/thirdLogin/index'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile, getYearList } from '@/utils'
import { countryCode } from '@/utils/countryCode'
import { isPwd, isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, sendEmailApi, regApi } from '@/api/user/index'

import { useI18n } from 'vue-i18n'
import { showToast, Loading } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()

// 是否显示第三方登录框
let showPwd = ref(false)
let showThirdLoginBox = ref(false)
// 临时存储表单值
let confirmPwd = ref('')
let showConfirmPwd = ref(false)
let sended = ref(false)
let showloading = ref(false)
let day = ref<string | number>('')
let month = ref<string | number>('')
let year = ref<string | number>('')
let isAudit = ref(true)
let isAgree = ref(true)
// dom元素
let userNameDom = ref<HTMLInputElement | null>(null)
let emailDom = ref<HTMLInputElement | null>(null)
let dayDom = ref<HTMLInputElement | null>(null)
let monthDom = ref<HTMLInputElement | null>(null)
let yearDom = ref<HTMLInputElement | null>(null)
let countryDom = ref<HTMLInputElement | null>(null)
let phoneDom = ref<HTMLInputElement | null>(null)
let pwdDom = ref<HTMLInputElement | null>(null)
let confirmPwdDom = ref<HTMLInputElement | null>(null)
let isAuditDom = ref<HTMLInputElement | null>(null)
let isAgreeDom = ref<HTMLInputElement | null>(null)
let verificationCodeDom = ref<HTMLInputElement | null>(null)

let regForm = reactive({
  UserName: '',
  Password: '',
  CountryCode: '',
  PhoneNumber: '',
  Email: '',
  AgentId: '',
  DateOfBirth: '',
  RegisterUrl: document.domain,
  VerificationCode: ''
})

const setShowThirdLoginBox = () => {
  showThirdLoginBox.value = !showThirdLoginBox.value
  console.log(showThirdLoginBox.value)
}

// 发送验证码
const sendEmail = async () => {
  if (sended.value) {
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
      sended.value = true
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      console.log(resp)
    })
    .catch((error) => {
      showloading.value = false
      showToast(t('tips.sendFail'))
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
    showToast(error)
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
    showToast(error)
    return false
  }
}

/** 注册逻辑 */
const handleReg = async () => {
  if (regForm.UserName == '') {
    showToast(t('tips.inputAccount'))
    userNameDom.value?.focus()
    return false
  }
  if (!isUname(regForm.UserName)) {
    showToast(t('tips.isAccount'))
    showToast.value?.focus()
    return false
  }
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
  if (day.value == '') {
    showToast(t('tips.inputDay'))
    dayDom.value?.focus()
    return false
  }
  if (month.value == '') {
    showToast(t('tips.inputMonth'))
    monthDom.value?.focus()
    return false
  }
  if (year.value == '') {
    showToast(t('tips.inputYear'))
    yearDom.value?.focus()
    return false
  }
  if (regForm.CountryCode == '') {
    showToast(t('tips.inputCountryCode'))
    countryDom.value?.focus()
    return false
  }
  if (regForm.PhoneNumber == '') {
    showToast(t('tips.inputphoneNumber'))
    phoneDom.value?.focus()
    return false
  }
  if (!isPwd(regForm.Password)) {
    showToast(t('tips.isPwd'))
    pwdDom.value?.focus()
    return false
  }
  if (regForm.Password != confirmPwd.value) {
    showToast(t('tips.pwdNotMatch'))
    confirmPwdDom.value?.focus()
    return false
  }
  if (!isAudit.value) {
    showToast(t('tips.isAgree'))
    isAuditDom.value?.focus()
    return false
  }
  if (!isAgree.value) {
    showToast(t('tips.isAgree'))
    isAgreeDom.value?.focus()
    return false
  }
  try {
    const isExistUserResp = await checkUserApi({ UserName: regForm.UserName })
    if (isExistUserResp.data) {
      userNameDom.value?.focus()
      showToast(t('tips.userNameExist'))
      return false
    }
  } catch (error: any) {
    showToast(error)
    return false
  }
  try {
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email })
    if (isExistEmailResp.data) {
      emailDom.value?.focus()
      showToast(t('tips.emailExist'))
      return false
    }
  } catch (error: any) {
    showToast(error)
    return false
  }
  try {
    regForm.DateOfBirth = `${year.value}-${month.value}-${day.value}`
    await regApi(regForm)
    userStore
      .login({ UserName: regForm.UserName, PassWord: regForm.Password })
      .then(() => {
        showToast(t('tips.regSuccess'))
        router.push({ name: 'index' })
        return false
      })
      .catch((error) => {
        showToast(error)
        router.push({ name: 'login' })
        return false
      })
  } catch (error: any) {
    showToast(error)
    return false
  }
}
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
