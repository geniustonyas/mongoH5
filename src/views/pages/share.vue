<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">{{ $t('share.title') }}</div>
    </header>
    <section class="s-h-b">
      <div class="sb-a">
        <dl>
          <dt>{{ $t('share.rules') }}</dt>
          <dd v-html="$t('share.rule1')" />
          <dd v-html="$t('share.rule2')" />
          <dd v-html="$t('share.rule3')" />
        </dl>
      </div>
      <div class="sb-b">
        <div class="t-tickets">
          <div class="i-t">{{ $t('share.invitationCode') }}</div>
          <div class="i-c">
            <span v-for="(digit, index) in userStore.userInfo.invitationCode" :key="index">{{ digit }}</span>
          </div>
        </div>
        <div class="b-tickets">
          <div class="b-t">
            <span v-html="$t('share.inviteCount', { count: inviteCount })" />
            <a @click="router.push({ name: 'shareRecord' })">{{ $t('share.inviteRecord') }}<i class="mvfont mv-right" /></a>
          </div>
          <div class="b-q">
            <qrcode-vue :value="shareLink" :size="160" level="H" />
          </div>
          <div class="b-l">
            <p>{{ $t('share.exclusiveLink') }}</p>
            <a :href="shareLink">{{ shareLink }}</a>
          </div>
        </div>
      </div>
      <div class="sb-c">
        <a @click="saveQrCode">{{ $t('share.saveImage') }}</a>
        <a @click="copyLink" :data-clipboard-text="shareLink">{{ $t('share.copyLink') }}</a>
      </div>
    </section>
    <NavBar active-menu="share" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import { useUserStoreHook } from '@/store/user'
import { copy } from '@/utils/index'
import { userShareCount } from '@/api/user'
import { useAppStore } from '@/store/app'
import NavBar from '@/components/layout/NavBar.vue'

const appStore = useAppStore()
const userStore = useUserStoreHook()
const router = useRouter()
// 获取当前域名
const currentDomain = window.location.origin

// 计算分享链接，只包含域名和邀请码
const shareLink = computed(() => `${currentDomain}/#/index?inviteCode=${userStore.userInfo.invitationCode}`)

// 声明邀请人数变量
const inviteCount = ref('0') // 初始值为0，后续可以通过接口更新

// 获取邀请人数
const fetchInviteCount = async () => {
  const { data } = await userShareCount()
  inviteCount.value = data.data
}

// 复制链接
const copyLink = () => {
  copy('.sb-c a:last-child', '链接已复制到剪贴板')
}

// 保存二维码图片
const saveQrCode = () => {
  const canvas = document.querySelector('.b-q canvas') as HTMLCanvasElement
  if (canvas) {
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'qrcode.png'
    link.click()
  }
}

// 立即执行
;(async () => {
  await fetchInviteCount()
})()
</script>
