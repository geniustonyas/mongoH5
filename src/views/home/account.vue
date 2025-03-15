<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">
        <span>个人设置</span>
      </div>
      <div class="d-r" />
    </header>
    <section class="au-main">
      <div class="hpb-setting">
        <div class="hs-a">
          <div class="a-a" @click="selectAvatar">
            <img :src="userStore.userInfo.avatar || getAssetsFile('u_video.png')" />
            <i class="mvfont mv-xiangji" />
          </div>
          <div class="a-b">修改头像</div>
        </div>
        <div class="aut-card">
          <div class="item">
            <div class="i-l">推荐码</div>
            <div class="i-r">27044<i class="mvfont mv-fuzhi" /></div>
          </div>
          <div class="item">
            <div class="i-l">昵称</div>
            <div class="i-r">小洋人<i class="mvfont mv-right3" /></div>
          </div>
          <div class="item">
            <div class="i-l">简介</div>
            <div class="i-r">{{ userStore.userInfo.remark || '这人很懒，啥都没留下' }}<i class="mvfont mv-right3" /></div>
          </div>
          <!-- <div class="item">
            <div class="i-l">手机号</div>
            <div class="i-r">
              <span class="s-red"><i class="mvfont mv-jinyong" />未设置</span>
              <i class="mvfont mv-right3" />
            </div>
          </div> -->
          <div class="item">
            <div class="i-l">修改密码</div>
            <div class="i-r">修改<i class="mvfont mv-right3" /></div>
          </div>
          <div class="item">
            <div class="i-l">当前版本</div>
            <div class="i-r">v1.02</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getAssetsFile } from '@/utils'
  import { useUserStoreHook } from '@/store/user'
  import { uploadFileApi } from '@/api/app'
  import { updateUserInfo } from '@/api/user'

  const userStore = useUserStoreHook()
  const fileInput = ref<HTMLInputElement | null>(null)

  const selectAvatar = () => {
    if (!fileInput.value) {
      fileInput.value = document.createElement('input')
      fileInput.value.type = 'file'
      fileInput.value.accept = 'image/*'
      fileInput.value.onchange = async () => {
        const files = fileInput.value?.files
        if (files && files.length > 0) {
          const formData = new FormData()
          try {
            formData.append('files', files[0])
            const { data } = await uploadFileApi(formData)
            console.log(data)
            if (response.data.code === 200) {
              const avatarUrl = response.data.data.url
              await updateUserInfo({
                NickName: userStore.userInfo.nickName,
                Avatar: avatarUrl,
                Remark: userStore.userInfo.remark,
                QQ: userStore.userInfo.qq,
                WX: userStore.userInfo.wx
              })
              userStore.userInfo.avatar = avatarUrl
            }
          } catch (error) {
            console.error('上传头像失败:', error)
          }
        }
      }
    }
    fileInput.value.click()
  }
</script>
