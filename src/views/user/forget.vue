<template>
  <div class="page">
    <UserHeader />
    <main class="main">
      <div class="loginbox">
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="resetForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" />
              <!-- <Loading v-show="showloading" size="20px" class="captcha" /> -->
              <span v-if="!showloading" class="captcha" @click="sendEmail()">{{ forgetCount === 0 ? t('sendEmail') : forgetCount }}</span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="resetForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('password') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="resetForm.PassWord" ref="pwdDom" :type="showPwd ? 'text' : 'password'" class="form-control" :placeholder="t('password')" />
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
              <input v-model.trim="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" :placeholder="t('confirmPwd')" />
              <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
              </span>
            </div>
          </div>
          <!--
          <div class="cf-row" v-show="useGoogleAuthenticatore">
            <div class="cr-label">
              <span>Google Authenticator</span>
            </div>
            <div class="cr-input">
              <input ref="verificationCode" v-model="resetForm.VerificationCode" type="text" class="form-control" placeholder="" />
            </div>
          </div> -->
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="resetPassword()">{{ $t('resetPwd') }}</a>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-bo" @click="router.push({ name: 'reg' })">
              {{ $t('noUser') }}
              <a>
                {{ $t('createUser') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

// import { useUserStore } from '@/store/modules/user'
import { resetPwdApi, sendEmailApi, checkEmailApi } from '@/api/user/index'
import { isPwd, isEmail } from '@/utils/validate'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
// const userStore = useUserStore()
const { t } = useI18n()

// 发送邮件倒计时60秒
let forgetCount = ref(0)
const forgetTimer = ref(0)

// 临时存储表单值
let showPwd = ref(false)
let confirmPwd = ref('')
let showConfirmPwd = ref(false)
let showloading = ref(false)

let resetForm = reactive({
  Email: '',
  PassWord: '',
  VerificationCode: ''
})
let emailDom = ref<HTMLInputElement | null>(null)
let verificationCodeDom = ref<HTMLInputElement | null>(null)
let pwdDom = ref<HTMLInputElement | null>(null)
let confirmPwdDom = ref<HTMLInputElement | null>(null)

// 发送验证码
const sendEmail = async () => {
  if (forgetCount.value > 0) {
    return false
  }
  if (!isEmail(resetForm.Email)) {
    showToast(t('tips.isEmail'))
    emailDom.value?.focus()
    return false
  }
  const isExistEmail = await checkEmailApi({ Keyword: resetForm.Email, noLoading: true })
  if (!isExistEmail.data) {
    showToast(t('tips.emailNotExist'))
    emailDom.value?.focus()
    return false
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 1, Email: resetForm.Email })
    .then((resp) => {
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      forgetCount.value = 60
      forgetTimer.value = window.setInterval(() => {
        forgetCount.value--
        localStorage.setItem('forgetCount', forgetCount.value.toString())
        if (forgetCount.value == 0) {
          clearInterval(forgetTimer.value)
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

/** 重置密码 */
const resetPassword = () => {
  if (resetForm.Email == '') {
    showToast(t('tips.inputEmail'))
    emailDom.value?.focus()
    return false
  }
  if (!isEmail(resetForm.Email)) {
    showToast(t('tips.isEmail'))
    emailDom.value?.focus()
    return false
  }
  if (resetForm.VerificationCode == '') {
    showToast(t('tips.inputEmailcapcha'))
    verificationCodeDom.value?.focus()
    return false
  }
  if (!isPwd(resetForm.PassWord)) {
    showToast(t('tips.isPwd'))
    pwdDom.value?.focus()
    return false
  }
  if (resetForm.PassWord != confirmPwd.value) {
    showToast(t('tips.pwdNotMatch'))
    confirmPwdDom.value?.focus()
    return false
  }
  resetPwdApi(resetForm)
    .then(() => {
      showToast(t('tips.resetSuccess'))
      router.push({ name: 'login' })
      return false
    })
    .catch((error) => {
      // showToast(t(error))
      console.log(error)
      return false
    })
}

onMounted(() => {
  // 设置点击发送邮件后倒计时60秒
  const regCountStorage = localStorage.getItem('forgetCount')
  if (regCountStorage && parseInt(regCountStorage) > 0) {
    forgetCount.value = parseInt(regCountStorage)
  }
  if (forgetCount.value > 0) {
    forgetTimer.value = window.setInterval(() => {
      forgetCount.value--
      localStorage.setItem('forgetCount', forgetCount.value.toString())
      if (forgetCount.value == 0) {
        clearInterval(forgetTimer.value)
      }
    }, 1000)
  }
})
</script>
