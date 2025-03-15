<script setup lang="ts">
import { useUserStoreHook } from '@/store/user'

const userStore = useUserStoreHook()

const handleLogout = () => {
  userStore.clearLogin()
}
</script>

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
          <div class="a-a">
            <img src="assets/imgs/u_video.png" />
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
            <div class="i-r">这人很懒，啥都没留下<i class="mvfont mv-right3" /></div>
          </div>
          <div class="item">
            <div class="i-l">手机号</div>
            <div class="i-r">
              <span class="s-red"><i class="mvfont mv-jinyong" />未设置</span>
              <i class="mvfont mv-right3" />
            </div>
          </div>
          <div class="item">
            <div class="i-l">修改密码</div>
            <div class="i-r">修改<i class="mvfont mv-right3" /></div>
          </div>
          <div class="item">
            <div class="i-l">当前版本</div>
            <div class="i-r">v1.02</div>
          </div>
          <div class="item">
            <div class="i-l">退出登录</div>
            <div class="i-r">
              <button @click="handleLogout">退出</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
