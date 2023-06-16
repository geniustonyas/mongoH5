<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition :name="(route.meta.transition as string)"> -->
    <component :is="Component" :key="route.path" />
    <!-- </transition> -->
  </router-view>
</template>

<script setup lang="ts"></script>
