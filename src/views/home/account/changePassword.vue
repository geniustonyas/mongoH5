<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">
        <span>修改密码</span>
      </div>
      <div class="d-r" />
    </header>

    <section class="au-main">
      <van-config-provider theme="dark">
        <van-form @submit="onSubmit">
          <van-field v-model="currentPassword" label="当前密码" type="password" placeholder="请输入当前密码" />
          <van-field v-model="newPassword" label="新密码" type="password" placeholder="请输入新密码" />
          <van-field v-model="confirmPassword" label="确认密码" type="password" placeholder="请再次输入新密码" />
          <van-button round block type="primary" color="var(--color-primary)" native-type="submit">保存</van-button>
        </van-form>
      </van-config-provider>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAppStoreHook } from '@/store/app'
  import { showToast } from 'vant'
  import { updatePassword } from '@/api/user'
  import { isPwd } from '@/utils/validate'

  const router = useRouter()
  const appStore = useAppStoreHook()
  const currentPassword = ref('')
  const newPassword = ref('')
  const confirmPassword = ref('')

  const onSubmit = async () => {
    if (!isPwd(newPassword.value)) {
      showToast('密码格式不正确')
      return
    }
    if (newPassword.value !== confirmPassword.value) {
      showToast('两次输入的密码不一致')
      return
    }
    try {
      await updatePassword({ NewPassword: newPassword.value, CurrentPassword: currentPassword.value })
      showToast('密码已更新')
      router.back()
    } catch (error) {
      showToast('更新失败，请重试')
      console.error('更新密码失败:', error)
    }
  }
</script>

<style lang="less" scoped>
  .van-button {
    width: 60%;
    margin: 20px auto;
  }
</style>
