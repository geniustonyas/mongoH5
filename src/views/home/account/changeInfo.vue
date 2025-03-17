<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">
        <span>修改信息</span>
      </div>
      <div class="d-r" />
    </header>

    <section class="au-main">
      <van-config-provider theme="dark">
        <van-form @submit="onSubmit">
          <van-field v-model="nickName" label="昵称" placeholder="请输入昵称" />
          <van-field v-model="remark" label="简介" placeholder="请输入简介" />
          <van-button round block type="primary" color="var(--color-primary)" native-type="submit">保存</van-button>
        </van-form>
      </van-config-provider>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStoreHook } from '@/store/user'
  import { useAppStoreHook } from '@/store/app'
  import { showToast } from 'vant'
  import { updateUserInfo } from '@/api/user'

  const router = useRouter()
  const userStore = useUserStoreHook()
  const appStore = useAppStoreHook()
  const nickName = ref(userStore.userInfo.nickName)
  const remark = ref(userStore.userInfo.remark)

  const onSubmit = async () => {
    if (!nickName.value.trim() || !remark.value.trim()) {
      showToast('昵称和简介不能为空')
      return
    }
    try {
      await updateUserInfo({ NickName: nickName.value, Remark: remark.value })
      userStore.setUserInfo({ ...userStore.userInfo, nickName: nickName.value, remark: remark.value })
      showToast('信息已更新')
      router.back()
    } catch (error) {
      showToast('更新失败，请重试')
      console.error('更新用户信息失败:', error)
    }
  }
</script>

<style lang="less" scoped>
  .van-button {
    width: 60%;
    margin: 20px auto;
  }
</style>
