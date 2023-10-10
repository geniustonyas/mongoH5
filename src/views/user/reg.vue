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
              <input v-model.trim="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" @blur="checkUserExist()" autocomplete="off" />
              <div v-if="errorMsg.userNameMsg" class="tip">{{ errorMsg.userNameMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" autocomplete="off" />
              <span v-if="!showloading" class="captcha" @click="sendEmail()">{{ regCount === 0 ? t('sendEmail') : regCount }}</span>
              <div v-if="errorMsg.emailMsg" class="tip">{{ errorMsg.emailMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input
                v-model.trim="regForm.VerificationCode"
                ref="verificationCodeDom"
                type="text"
                class="form-control"
                :placeholder="t('tips.inputEmailcapcha')"
                autocomplete="off"
                @blur="checkCaptcha()"
              />
              <div v-if="errorMsg.captchaMsg" class="tip">{{ errorMsg.captchaMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('password') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Password" ref="pwdDom" :type="showPwd ? 'text' : 'password'" class="form-control" autocomplete="off" :placeholder="t('password')" @blur="checkPwd()" />
              <span :class="showPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showPwd = !showPwd" />
              </span>
              <div v-if="errorMsg.pwdMsg" class="tip">{{ errorMsg.pwdMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('confirmPwd') }}</span>
            </div>
            <div class="cr-input">
              <input
                v-model.trim="confirmPwd"
                ref="confirmPwdDom"
                :type="showConfirmPwd ? 'text' : 'password'"
                class="form-control"
                autocomplete="off"
                :placeholder="t('confirmPwd')"
                @blur="checkConfirmPwd()"
              />
              <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
              </span>
              <div v-if="errorMsg.confirmPwdMsg" class="tip">{{ errorMsg.confirmPwdMsg }}</div>
            </div>
          </div>

          <!-- 是否接受协议 -->
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
              <div v-if="errorMsg.isAgreeMsg" class="tip">{{ errorMsg.isAgreeMsg }}</div>
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { telegramLogin, googleLogin, facebookInit, facebookLogin, lineLogin, twitterLogin } from '@/thirdLogin/index'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile } from '@/utils'
import { isPwd, isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, sendEmailApi, regApi } from '@/api/user/index'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import { onMounted } from 'vue'
import { cloneDeep } from 'lodash-es'

const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()

// 发送邮件倒计时60秒
let regCount = ref(0)
const regTimer = ref(0)

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
const errorMsg = reactive({
  userNameMsg: '',
  emailMsg: '',
  captchaMsg: '',
  pwdMsg: '',
  confirmPwdMsg: '',
  isAgreeMsg: '',
  isAuditMsg: ''
})
const defaultMsg = cloneDeep(errorMsg)

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
  if (regCount.value > 0) {
    return false
  }
  if (!isEmail(regForm.Email)) {
    // showToast(t('tips.isEmail'))
    errorMsg.emailMsg = t('tips.isEmail')
    return false
  } else {
    errorMsg.emailMsg = ''
  }
  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    errorMsg.emailMsg = t('tips.emailExist')
    return false
  } else {
    errorMsg.emailMsg = ''
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      errorMsg.emailMsg = ''
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
      return false
    } else {
      errorMsg.userNameMsg = ''
    }
    return true
  } catch (error: any) {
    return false
  }
}

// 检查邮箱是否占用
const checkEmailExist = async () => {
  try {
    if (regForm.Email == '') {
      errorMsg.emailMsg = t('tips.inputEmail')
      return true
    } else {
      errorMsg.emailMsg = ''
    }
    if (!isEmail(regForm.Email)) {
      errorMsg.emailMsg = t('tips.isEmail')
      return true
    } else {
      errorMsg.emailMsg = ''
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email, noLoading: true })
    if (isExistEmailResp.data) {
      errorMsg.emailMsg = t('tips.emailExist')
      return true
    } else {
      errorMsg.emailMsg = ''
    }
    return false
  } catch (error: any) {
    // showToast(error)
    return true
  }
}

const checkCaptcha = () => {
  if (regForm.VerificationCode == '') {
    errorMsg.captchaMsg = t('tips.inputEmailcapcha')
  } else {
    errorMsg.captchaMsg = ''
  }
}

const checkPwd = () => {
  if (regForm.Password == '' || !isPwd(regForm.Password)) {
    errorMsg.pwdMsg = t('tips.isPwd')
  } else if (regForm.Password == regForm.UserName) {
    errorMsg.pwdMsg = t('tips.pwdName')
  } else {
    errorMsg.pwdMsg = ''
  }
}

const checkConfirmPwd = () => {
  if (regForm.Password != confirmPwd.value) {
    errorMsg.confirmPwdMsg = t('tips.pwdNotMatch')
  } else {
    errorMsg.confirmPwdMsg = ''
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

/** 注册逻辑 */
const handleReg = async () => {
  Object.assign(errorMsg, defaultMsg)
  await checkUserExist()
  await checkEmailExist()
  checkCaptcha()
  checkPwd()
  checkConfirmPwd()
  checkAudit()
  checkAgree()

  if (errorMsg.userNameMsg || errorMsg.emailMsg || errorMsg.captchaMsg || errorMsg.pwdMsg || errorMsg.confirmPwdMsg || errorMsg.isAuditMsg || errorMsg.isAgreeMsg) {
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
})

facebookInit()
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
