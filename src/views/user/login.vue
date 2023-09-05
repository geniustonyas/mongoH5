<template>
  <div class="page">
    <UserHeader />
    <main class="main">
      <div class="loginbox">
        <!-- 第三方登录 -->
        <div class="l-signin">
          <h2>{{ t('login') }}</h2>
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
          <span>{{ $t('or') }}</span>
        </div>
        <!-- 登录表单 -->
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ $t('loginPage.userNameOrEmail') }}</span>
            </div>
            <div class="cr-input">
              <input ref="userName" v-model.trim="loginForm.UserName" type="text" class="form-control" placeholder="" @blur="checkIsBindGoogle()" />
            </div>
          </div>

          <div class="cf-row">
            <div class="cr-label">
              <span>{{ $t('password') }}</span>
              <a @click="router.push({ name: 'forget' })">{{ t('forgetPassword') }} ? </a>
            </div>
            <div class="cr-input">
              <input ref="password" v-model.trim="loginForm.PassWord" :type="showPwd ? 'text' : 'password'" class="form-control" placeholder="" />
              <span :class="showPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showPwd = !showPwd" />
              </span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input type="checkbox" v-model="useGoogleAuthenticatore" :readonly="isBind" />
              {{ $t('loginPage.useGoogle') }}
            </div>
          </div>
          <div class="cf-row" v-show="useGoogleAuthenticatore">
            <div class="cr-label">
              <span>{{ $t('loginPage.useGoogle') }}</span>
            </div>
            <div class="cr-input">
              <input ref="verificationCode" v-model.trim="loginForm.VerificationCode" type="text" class="form-control" placeholder="" autocomplete="off" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="handleLogin()">{{ $t('login') }}</a>
            </div>
          </div>
          <div class="cf-row" @click="router.push({ name: 'reg' })">
            <div class="cr-bo">
              {{ $t('noUser') }}
              <a>
                {{ $t('createUser') }}
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
              <a @click="telegramLogin"> <img :src="getAssetsFile('svg/telegram.svg')" />Telegram </a>
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
import { useRoute, useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { getAssetsFile } from '@/utils'
import { telegramLogin, googleLogin, facebookInit, facebookLogin, lineLogin, twitterInit, twitterLogin } from '@/thirdLogin/index'
import { useUserStore } from '@/store/modules/user'
import { checkUserBindGoogleApi } from '@/api/user/index'
import { isPwd, isUname } from '@/utils/validate'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { t } = useI18n()

let showPwd = ref(false)
let showThirdLoginBox = ref(false)
let useGoogleAuthenticatore = ref(false)
let isBind = ref(false)
let loginForm = reactive({
  UserName: '',
  PassWord: '',
  VerificationCode: ''
})
let userName = ref<HTMLInputElement | null>(null)
let password = ref<HTMLInputElement | null>(null)
let verificationCode = ref<HTMLInputElement | null>(null)

const setShowThirdLoginBox = () => {
  showThirdLoginBox.value = !showThirdLoginBox.value
}

// 输入完用户名后 检查是否绑定Google验证码
const checkIsBindGoogle = () => {
  checkUserBindGoogleApi({ UserName: loginForm.UserName, noLoading: true })
    .then((resp) => {
      if (resp.data) {
        useGoogleAuthenticatore.value = true
        isBind.value = true
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

/** 登录逻辑 */
const handleLogin = () => {
  if (loginForm.UserName == '') {
    showToast(t('tips.inputAccount'))
    userName.value?.focus()
    return false
  }
  if (!isUname(loginForm.UserName)) {
    showToast(t('tips.isAccount'))
    userName.value?.focus()
    return false
  }
  if (loginForm.PassWord == '') {
    showToast(t('tips.inputPassword'))
    password.value?.focus()
    return false
  }
  if (!isPwd(loginForm.PassWord)) {
    showToast(t('tips.isPwd'))
    password.value?.focus()
    return false
  }
  if (useGoogleAuthenticatore.value) {
    if (loginForm.VerificationCode == '' || loginForm.VerificationCode.length != 6) {
      showToast(t('tips.googleCode'))
      verificationCode.value?.focus()
      return false
    }
  }
  userStore
    .login(loginForm)
    .then(() => {
      const routeName = route.query.routeTo ? route.query.routeTo.toString() : 'index'
      router.push({ name: routeName })
    })
    .catch((error) => {
      console.log(error)
    })
}

facebookInit()
twitterInit()
</script>

<style type="text/css">
.st0 {
  fill: #0cd664;
}
</style>
