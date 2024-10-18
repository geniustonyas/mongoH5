<template>
  <div v-if="userStore" class="au-pop" v-show="userStore.showLoginDialog">
    <div class="ap-bg" />
    <div class="ap-bd">
      <div class="p-login">
        <div class="pl-c">
          <div class="l-a">
            <div class="a-l">
              <span @click="isLoginMode = true" :class="{ active: isLoginMode }">登录</span>
              <span @click="isLoginMode = false" :class="{ active: !isLoginMode }">注册</span>
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
                  <input v-model="formData.userName" placeholder="账号/手机号" />
                </li>
                <li v-else>
                  <i class="mvfont mv-user" />
                  <input v-model="formData.phone" placeholder="手机号" />
                </li>
                <li v-if="!isLoginMode">
                  <i class="mvfont mv-yzm" />
                  <input v-model="formData.code" placeholder="手机验证码" maxlength="6" />
                  <a @click="handleGetCode" :class="{ disabled: countdown > 0 }">
                    {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
                  </a>
                </li>
                <li>
                  <i class="mvfont mv-password" />
                  <input v-model="formData.password" type="password" placeholder="密码" />
                </li>
              </ul>
              <div class="f-b">
                <a @click="handleSubmit" class="btn btn1">{{ isLoginMode ? '立即登录' : '立即注册' }}</a>
              </div>
              <div class="f-c" v-if="isLoginMode">
                <a>忘记密码？</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { userLogin, userRegister } from '@/api/user'
import { getCodeApi } from '@/api/app'
import { showToast } from 'vant'
import { setToken } from '@/utils/auth'
import type { loginForm } from '@/types/user'
import { isPhone, isPwd } from '@/utils/validate'

const userStore = useUserStore()
const isLoginMode = ref(true)

const formData = ref<loginForm>({
  userName: '',
  password: '',
  phone: '',
  code: ''
})

const countdown = ref(0)
const timer = ref<ReturnType<typeof setInterval> | null>(null)

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
  if (!isPhone(formData.value.phone)) {
    showToast('请输入正确的手机号')
    return
  }
  try {
    const response = await getCodeApi({ phone: formData.value.phone, type: 'register' })
    if (response.code === 200) {
      showToast('验证码已发送')
      startCountdown(60)
    } else {
      showToast(response.message || '获取验证码失败')
    }
  } catch (error) {
    showToast(error.response?.data?.message || '获取验证码失败')
  }
}

const handleSubmit = async () => {
  if (isLoginMode.value) {
    if (!formData.value.userName || !formData.value.password) {
      showToast('请输入账号和密码')
      return
    }
  } else {
    if (!isPhone(formData.value.phone)) {
      showToast('请输入正确的手机号')
      return
    }
    if (!formData.value.password) {
      showToast('请输入密码')
      return
    }
    if (!formData.value.code) {
      showToast('请输入验证码')
      return
    }
  }

  if (!isPwd(formData.value.password)) {
    showToast('密码格式不正确，请输入6-16位包含字母、数字或特殊字符的密码')
    return
  }

  try {
    let response
    if (isLoginMode.value) {
      response = await userLogin(formData.value)
    } else {
      response = await userRegister(formData.value)
    }
    if (response.code == 200 && response.data.token) {
      setToken(response.data.token)
      if (response.data.user) {
        userStore.setUserInfo(response.data.user)
      } else {
        await userStore.fetchUserInfo()
      }
      showToast(isLoginMode.value ? '登录成功' : '注册成功')
      userStore.showLoginDialog = false
    } else {
      showToast(response.message || (isLoginMode.value ? '登录失败' : '注册失败'))
    }
  } catch (error) {
    showToast(error.response?.data?.message || (isLoginMode.value ? '登录失败' : '注册失败'))
  }
}
</script>
