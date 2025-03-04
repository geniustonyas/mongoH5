<template>
  <div v-if="userStore" id="loginDialog" class="au-pop" v-show="userStore.showLoginDialog">
    <div class="ap-bg" />
    <div class="ap-bd">
      <div class="p-login">
        <div class="pl-c">
          <div class="l-a">
            <div class="a-l">
              <span @click="isLoginMode = true" :class="{ active: isLoginMode }"> {{ $t('login.login') }} </span>
              <span @click="isLoginMode = false" :class="{ active: !isLoginMode }"> {{ $t('login.register') }} </span>
            </div>
            <div class="a-r">
              <span @click="userStore.showLoginDialog = false"><i class="mvfont mv-close" /></span>
            </div>
          </div>
          <div class="l-b">
            <div class="au-form-goup">
              <ul class="f-a">
                <li v-if="isLoginMode">
                  <i class="mvfont mv-user" />
                  <input v-model="formData.UserName" :placeholder="$t('login.username')" />
                </li>
                <li v-else>
                  <i class="mvfont mv-user" />
                  <input v-model="formData.PhoneNumber" :placeholder="$t('login.username')" />
                </li>
                <li v-if="!isLoginMode && appStore.regSms == '1'">
                  <i class="mvfont mv-yzm" />
                  <input v-model="formData.VerifCode" :placeholder="$t('login.verificationCode')" maxlength="6" />
                  <a @click="handleGetCode" :class="{ disabled: countdown > 0 }">
                    {{ countdown > 0 ? $t('login.retryAfterSeconds', { seconds: countdown }) : $t('login.getCode') }}
                  </a>
                </li>
                <li>
                  <i class="mvfont mv-password" />
                  <input v-model="formData.Password" type="password" :placeholder="$t('login.password')" />
                </li>
              </ul>
              <div class="f-b">
                <a @click="handleSubmit" class="btn btn1">{{ isLoginMode ? $t('login.loginNow') : $t('login.registerNow') }}</a>
              </div>
              <div class="f-c" v-if="isLoginMode">
                <!-- <a @click="isLoginMode = false">{{ $t('login.forgotPassword') }}</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, watch, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { userLogin, userRegister } from '@/api/user'
import { getCodeApi } from '@/api/app'
import { showToast } from 'vant'
import { setToken } from '@/utils/auth'
import type { loginForm } from '@/types/user'
import { isPhone, isPwd, isUname } from '@/utils/validate'
import { useAppStore } from '@/store/app'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const appStore = useAppStore()
const userStore = useUserStore()
const isLoginMode = ref(true)
const inviteCode = computed(() => localStorage.getItem('inviteCode'))

const formData = reactive<loginForm>({
  UserName: '',
  Password: '',
  PhoneNumber: '',
  VerifCode: '',
  InvitationCode: ''
})

const countdown = ref(0)
const timer = ref<ReturnType<typeof setInterval> | null>(null)

watch(isLoginMode, (newVal) => {
  if (newVal) {
    formData.VerifCode = ''
    formData.InvitationCode = ''
    formData.UserName = ''
    formData.Password = ''
    formData.PhoneNumber = ''
  }
})

onMounted(() => {
  const storedCountdown = localStorage.getItem('codeCountdown')
  if (storedCountdown) {
    const remainingTime = parseInt(storedCountdown) - Math.floor(Date.now() / 1000)
    if (remainingTime > 0) {
      startCountdown(remainingTime)
    } else {
      localStorage.removeItem('codeCountdown')
    }
  }

  formData.InvitationCode = inviteCode.value
})

const startCountdown = (duration: number) => {
  countdown.value = duration
  timer.value = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer.value!)
      localStorage.removeItem('codeCountdown')
    } else {
      localStorage.setItem('codeCountdown', (Math.floor(Date.now() / 1000) + countdown.value).toString())
    }
  }, 1000)
}

const handleGetCode = async () => {
  if (countdown.value > 0) return
  if (!isPhone(formData.PhoneNumber)) {
    showToast(t('login.enterValidPhone'))
    return
  }
  try {
    const { data } = await getCodeApi({ phone: formData.PhoneNumber, type: 'register' })
    if (data) {
      showToast(t('login.codeSent'))
      startCountdown(60)
    } else {
      showToast(data.message || t('login.codeSendFail'))
    }
  } catch (error) {
    showToast(error.resp?.data?.message || '获取验证码失败')
  }
}

const handleSubmit = async () => {
  if (isLoginMode.value) {
    if (!formData.UserName || !formData.Password) {
      showToast(t('login.enterUsernameAndPassword'))
      return
    }
    if (!isPhone(formData.UserName) && !isUname(formData.UserName)) {
      showToast(t('login.enterValidUsernameOrPhone'))
      return
    }
  } else {
    formData.UserName = formData.PhoneNumber
    if (!isPhone(formData.PhoneNumber) && !isUname(formData.UserName)) {
      showToast(t('login.enterValidUsernameOrPhone'))
      return
    }
    if (!formData.Password) {
      showToast(t('login.enterPassword'))
      return
    }
    if (appStore.regSms == '1' && !formData.VerifCode) {
      showToast(t('login.enterVerificationCode'))
      return
    }
  }

  if (!isPwd(formData.Password)) {
    showToast(t('login.enterValidPassword'))
    return
  }

  try {
    if (isLoginMode.value) {
      await login()
      isLoginMode.value = !isLoginMode.value
      userStore.showLoginDialog = false
    } else {
      const {
        data: { code, message }
      } = await userRegister(formData)
      if (code == '200') {
        await login()
        isLoginMode.value = !isLoginMode.value
        userStore.showLoginDialog = false
        showToast(t('login.registerSuccess'))
        // Clear inviteCode from localStorage after successful registration
        localStorage.removeItem('inviteCode')
      } else {
        showToast(message || t('login.registerFail'))
      }
    }
  } catch (error) {
    showToast(error.message || (isLoginMode.value ? t('login.loginFail') : t('login.registerFail')))
  }
}

const login = async () => {
  const {
    data: { code, data, message }
  } = await userLogin(formData)
  if (code == '200' && data.token) {
    setToken(data.token)
    await userStore.fetchUserInfo()
  } else {
    showToast(message || t('login.loginFail'))
  }
}
</script>
<style scoped>
#loginDialog {
  z-index: 999999;
}
</style>
