<template>
  <div>
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

import { showToast } from 'vant'

// const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()
userStore
  .logout()
  .then(() => {
    showToast(t('tips.logoutSuccess'))
    // router.push({ name: 'index' })
  })
  .catch((error) => {
    console.log(error)
  })
</script>
