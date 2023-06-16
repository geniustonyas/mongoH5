<template>
  <div style="height: 200px; width: 100%">
    <!-- <Swipe :autoplay="3500" width="100%" class="my-swipe">
      <SwipeItem><img :src="getAssetsFile('bannber/bannber-1.jpg')" style="width: 100%" /></SwipeItem>
      <SwipeItem><img :src="getAssetsFile('bannber/bannber-2.jpg')" style="width: 100%" /></SwipeItem>
      <SwipeItem><img :src="getAssetsFile('bannber/bannber-3.jpg')" style="width: 100%" /></SwipeItem>
    </Swipe> -->
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
      <SwipeItem>4</SwipeItem>
    </Swipe>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import { Swipe, SwipeItem } from 'vant'
import 'vant/es/swipe/style'
</script>
<style>
.my-swipe {
  width: 100%;
  height: 200px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 200px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
