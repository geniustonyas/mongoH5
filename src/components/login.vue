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
                <li>
                  <i class="mvfont mv-user" />
                  <input v-model="formData.userName" placeholder="账号/手机号" />
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
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { userLogin, userRegister } from '@/api/user'
import { showToast } from 'vant'
import { setToken } from '@/utils/auth'
import type { loginForm } from '@/types/user'

const userStore = useUserStore()
const isLoginMode = ref(true)

const formData = ref<loginForm>({
  userName: '',
  password: ''
})

const handleSubmit = async () => {
  if (!formData.value.userName || !formData.value.password) {
    showToast('请输入用户名和密码')
    return
  }

  if (formData.value.userName.length < 6 || formData.value.password.length < 6) {
    showToast('用户名和密码不能少于6位')
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
