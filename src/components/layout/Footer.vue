<template>
  <footer class="footer">
    <nav class="foot-menu">
      <router-link to="/index"><i />{{ t('home') }} </router-link>
      <router-link to="/search"><i />{{ t('search') }} </router-link>
      <router-link to="/promo"><i />{{ t('promo') }} </router-link>
      <router-link to="/support"><i />{{ t('support') }} </router-link>
      <router-link to="/home"><i />{{ t('account') }} </router-link>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
