<template>
  <div>
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'

import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile } from '@/utils'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
</script>
