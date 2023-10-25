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
              {{ t('regPage.isAdult') }}
              <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('regPage.termCondition') }}</a>
              {{ t('and') }}
              <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('regPage.privacyPolicy') }}</a>
              <div id="privacyTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div ref="isAgreeDom" class="cr-mark cm-checkbox">
              <input v-model="isAgree" type="checkbox" />
              {{ t('regPage.isAgree') }}
              <div id="agreeTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full loading-btn" @click="handleReg()">
                <span>{{ t('createUser') }}</span>
                <Loading v-show="btnLoading" color="#363636" size="18" />
              </a>
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
import { showToast, Loading } from 'vant'
import { onMounted } from 'vue'

const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()

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

  try {
    await regApi(regForm)
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
  } catch (error: any) {
    // showToast(error)
    btnLoading.value = false
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
