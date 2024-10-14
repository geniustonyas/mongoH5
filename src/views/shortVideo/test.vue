<template>
  <div>
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getAssetsFile } from '@/utils'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
</script>
