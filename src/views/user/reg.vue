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
        <Form class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('userName') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" @blur="checkUserExist()" autocomplete="off" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" autocomplete="off" />
              <!-- <Loading v-show="showloading" size="20px" class="captcha" /> -->
              <span v-show="!showloading" :class="sended || regForm.Email.length == 0 ? 'captcha sended' : 'captcha'" @click="sendEmail()">{{ sended ? t('sended') : t('sendEmail') }}</span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" autocomplete="off" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('password') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Password" ref="pwdDom" :type="showPwd ? 'text' : 'password'" class="form-control" placeholder="" autocomplete="off" />
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
              <input v-model.trim="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" placeholder="" autocomplete="off" />
              <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
              </span>
            </div>
          </div>

          <!-- 是否接受协议 -->
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
            <div class="cr-bo" @click="router.push({ name: 'login' })">
              {{ t('hasAccount') }}
              <a>
                {{ t('login') }}
              </a>
            </div>
          </div>
        </Form>
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { telegramLogin, googleLogin, facebookInit, facebookLogin, lineLogin, twitterInit, twitterLogin } from '@/thirdLogin/index'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile } from '@/utils'
import { isPwd, isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, sendEmailApi, regApi } from '@/api/user/index'

import { useI18n } from 'vue-i18n'
import { showToast, Form } from 'vant'

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

/** 注册逻辑 */
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
    showToast(t('tips.isAudit'))
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
    // showToast(error)
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
    // showToast(error)
    return false
  }
  try {
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
    // showToast(error)
    return false
  }
}

facebookInit()
twitterInit()
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
