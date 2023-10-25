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
              <input v-model.trim="resetForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist" />
              <!-- <Loading v-show="showloading" size="20px" class="captcha" /> -->
              <span v-if="!showloading" :forgetCount="forgetCount" class="captcha" @click="sendEmail()">{{ forgetCount == 0 ? t('sendEmail') : forgetCount }}</span>
              <div id="emailTip" class="tip" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="resetForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
              <div id="captchaTip" class="tip" />
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
              <div id="pwdTip" class="tip" />
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
              <div id="confirmPwdTip" class="tip" />
            </div>
          </div>

          <div class="cf-row">
            <div class="cr-mark">{{ t('changePwdLimit') }}</div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="resetPassword()">
                <i v-show="btnLoading" class="iconfont icon-loading" />
                {{ t('resetPwd') }}
              </a>
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
import { resetPwdApi, sendEmailApi, checkEmailApi, checkEmailThirdReg } from '@/api/user/index'
import { isPwd, isEmail } from '@/utils/validate'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
// const userStore = useUserStore()
const { t } = useI18n()

let btnLoading = ref(false)
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

// 错误信息
const errorMsg = ref('')

// 发送验证码
const sendEmail = async () => {
  // const dm = document.getElementById('emailTip')
  if (forgetCount.value > 0) {
    return false
  }
  await checkEmailExist()
  if (errorMsg.value != '') {
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

// 检查邮箱
const checkEmailExist = async () => {
  try {
    const dm = document.getElementById('emailTip')
    if (resetForm.Email == '') {
      errorMsg.value = t('tips.inputEmail')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      dm!.innerHTML = ''
      errorMsg.value = ''
    }
    if (!isEmail(resetForm.Email)) {
      errorMsg.value = t('tips.isEmail')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      dm!.innerHTML = ''
      errorMsg.value = ''
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: resetForm.Email, noLoading: true })
    if (!isExistEmailResp.data) {
      errorMsg.value = t('tips.emailNotExist')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      errorMsg.value = ''
      dm!.innerHTML = ''
    }
    const isThirdReg = await checkEmailThirdReg({ UserName: resetForm.Email, noLoading: true })
    if (isThirdReg.data) {
      errorMsg.value = t('nopwd')
      dm!.innerHTML = errorMsg.value
      return true
    } else {
      errorMsg.value = ''
      dm!.innerHTML = ''
    }
    return isExistEmailResp.data
  } catch (error: any) {
    // ElMessage({ type: 'error', message: error })
    return true
  }
}

/** 重置密码 */
const resetPassword = async () => {
  if (btnLoading.value) {
    return false
  }
  btnLoading.value = true
  errorMsg.value = ''
  const allTip = document.getElementsByClassName('tip')
  for (var i = 0; i < allTip.length; i++) {
    allTip[i].innerHTML = ''
  }

  await checkEmailExist()
  if (errorMsg.value != '') {
    btnLoading.value = false
    return false
  }
  const captchaEl = document.getElementById('captchaTip')
  const pwdEl = document.getElementById('pwdTip')
  const confirmPwdEl = document.getElementById('confirmPwdTip')
  // 验证码
  if (resetForm.VerificationCode == '') {
    errorMsg.value = t('tips.inputEmailcapcha')
    captchaEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    captchaEl!.innerHTML = ''
  }
  // 验证密码
  if (resetForm.PassWord == '' || !isPwd(resetForm.PassWord)) {
    errorMsg.value = t('tips.isPwd')
    pwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    pwdEl!.innerHTML = ''
  }

  // 确认密码
  if (resetForm.PassWord != confirmPwd.value) {
    errorMsg.value = t('tips.pwdNotMatch')
    confirmPwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    confirmPwdEl!.innerHTML = ''
  }

  resetPwdApi(resetForm)
    .then(() => {
      showToast(t('tips.resetSuccess'))
      router.push({ name: 'login' })
      btnLoading.value = false
      return false
    })
    .catch((error) => {
      // showToast(t(error))
      console.log(error)
      btnLoading.value = false
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
