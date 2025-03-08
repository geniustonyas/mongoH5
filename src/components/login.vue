<template>
  <div v-if="userStore" id="loginDialog" class="au-pop" v-show="userStore.showLoginDialog">
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
                  <input v-model="formData.UserName" placeholder="用户名" />
                </li>
                <li v-else>
                  <i class="mvfont mv-user" />
                  <input v-model="formData.PhoneNumber" placeholder="用户名" />
                </li>
                <li v-if="!isLoginMode && appStore.regSms == '1'">
                  <i class="mvfont mv-yzm" />
                  <input v-model="formData.VerifCode" placeholder="手机验证码" maxlength="6" />
                  <a @click="handleGetCode" :class="{ disabled: countdown > 0 }">
                    {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
                  </a>
                </li>
                <li>
                  <i class="mvfont mv-password" />
                  <input v-model="formData.Password" type="password" placeholder="密码" />
                </li>
              </ul>
              <div class="f-b">
                <a @click="handleSubmit" class="btn btn1" :class="{ disabled: isSubmitting }" :disabled="isSubmitting">
                  {{ isLoginMode ? '立即登录' : '立即注册' }}
                </a>
              </div>
              <div class="f-c" v-if="isLoginMode">
                <!-- <a>忘记密码？</a> -->
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
const isSubmitting = ref(false)

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
    showToast('请输入正确的手机号')
    return
  }
  try {
    const { data } = await getCodeApi({ phone: formData.PhoneNumber, type: 'register' })
    if (data) {
      showToast('验证码已发送')
      startCountdown(60)
    } else {
      showToast(data.message || '获取验证码失败')
    }
  } catch (error) {
    showToast(error.resp?.data?.message || '获取验证码失败')
  }
}

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    if (isLoginMode.value) {
      if (!formData.UserName || !formData.Password) {
        showToast('请输入用户名和密码');
        return;
      }
      if (!isPhone(formData.UserName) && !isUname(formData.UserName)) {
        showToast('请输入以字母开头的5-12位用户名或手机号');
        return;
      }
    } else {
      formData.UserName = formData.PhoneNumber;
      if (!isPhone(formData.PhoneNumber) && !isUname(formData.UserName)) {
        showToast('请输入以字母开头的5-12位用户名或手机号');
        return;
      }
      if (!formData.Password) {
        showToast('请输入密码');
        return;
      }
      if (appStore.regSms == '1' && !formData.VerifCode) {
        showToast('请输入验证码');
        return;
      }
    }

    if (!isPwd(formData.Password)) {
      showToast('密码格式不正确，请输入6-16位包含字母、数字或特殊字符的密码');
      return;
    }

    if (isLoginMode.value) {
      await login();
      isLoginMode.value = !isLoginMode.value;
      userStore.showLoginDialog = false;
    } else {
      const {
        data: { code, message }
      } = await userRegister(formData);
      if (code == '200') {
        await login();
        isLoginMode.value = !isLoginMode.value;
        userStore.showLoginDialog = false;
        showToast('注册成功');
        localStorage.removeItem('inviteCode');
      } else {
        showToast(message || '注册失败');
      }
    }
  } catch (error) {
    showToast(error.message || (isLoginMode.value ? '登录失败' : '注册失败'));
  } finally {
    isSubmitting.value = false;
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
    showToast(message || '登录失败')
  }
}
</script>
<style scoped>
#loginDialog {
  z-index: 999999;
}
</style>
