<template>
  <div class="page">
    <div class="page login-page">
      <div style="position: relative; top: 10px; left: 10px; color: white"><i style="font-size: 2rem" class="iconfont icon-fanhui1" @click="router.back()" /></div>
      <div class="lg-logo" @click="router.push({ name: 'index' })">
        <!-- <img :src="logo"> -->
      </div>
      <div class="lg-form">
        <div class="item">
          <i class="iconfont icon-phone" />
          <input v-model="loginForm.UserName" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码" autocomplete="on" />
        </div>
        <!-- <div class="item">
          <i class="iconfont icon-yzm" />
          <input v-model="loginForm.VerifCode" type="number" class="input-code" placeholder="请输入验证码" maxlength="6" autocomplete="off" oninput="if(value.length>6)value=value.slice(0,6)" />
          <a @click="getCaptcha()">
            <template v-if="loginCount === 0">发送验证码</template>
            <template v-else>
              <b>{{ loginCount }}</b>
              秒
            </template>
          </a>
        </div> -->
        <div class="item">
          <i class="iconfont icon-mima2" />
          <input v-model="loginForm.PassWord" type="password" maxlength="16" placeholder="请输入密码" autocomplete="on" />
        </div>
        <div class="i-btn" @click="handleLogin()">登录</div>
        <div class="i-txt"><a @click="router.push({ name: 'forget' })">忘记密码？</a><em>|</em><a @click="router.push({ name: 'reg' })">立即注册</a></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { isPwd } from '@/utils/validate'
import { useUserStore } from '@/store/modules/user'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
const useUser = useUserStore()
// let loginCount = ref(0)
let loginForm = reactive({
  UserName: '',
  PassWord: '',
  VerificationCode: ''
})
/** 登录逻辑 */
const handleLogin = () => {
  if (loginForm.UserName == '' || loginForm.UserName.length < 5) {
    showToast('用户名输入错误')
    return
  }
  if (!isPwd(loginForm.PassWord)) {
    showToast('密码输入错误')
    return
  }
  // if (loginForm.VerificationCode == '') {
  //   showToast('请输入验证码')
  //   return false
  // }
  useUser
    .login(loginForm)
    .then(() => {
      router.push({ name: 'index' })
    })
    .catch((error) => {
      showToast(error)
    })
}
</script>
