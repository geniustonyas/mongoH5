<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l d-btn" onclick="javascript:history.go(-1)">
        <span>取消</span>
      </div>
      <div class="d-m">
        <span>发布帖子</span>
      </div>
      <div class="d-r d-btn">
        <a class="btn btn1">发布</a>
      </div>
    </header>
    <main class="b-p-a">
      <div class="aui-card">
        <div class="item">
          <div class="i-t">板块</div>
          <div class="i-c">
            <input class="f-control" placeholder="请选择：" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">标题</div>
          <div class="i-c">
            <textarea class="f-control" rows="4" placeholder="请输入标题" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">内容</div>
          <div class="i-c">
            <textarea class="f-control" rows="20" placeholder="请输入内容" />
          </div>
        </div>
        <div class="item">
          <div class="i-b">
            <a><i class="mvfont mv-tuji1" />添加图片</a><a><i class="mvfont mv-dianying" />添加视频</a>
          </div>
        </div>

        <!--<div class="item">
            <div class="i-l">
                <i class="iconfont icon-mingxi"></i>板块
            </div>
            <div class="i-r">0.00<i class="iconfont icon-you"></i></div>
        </div>
        <div class="item">
            <div class="i-l">
                <i class="iconfont icon-ziliao"></i>标题
            </div>
            <div class="i-r"><i class="iconfont icon-you"></i></div>
        </div>
        <div class="item">
            <div class="i-l">
                <i class="iconfont icon-yanzheng"></i>标签
            </div>
            <div class="i-r"><span class="txt-red">未验证</span><i class="iconfont icon-you"></i></div>
        </div>-->
      </div>

      <!--<div class="aui-list">
        <div class="aui-card">
            <div class="item">
                <div class="i-l">
                    <i class="iconfont icon-mingxi"></i>板块
                </div>
                <div class="i-r">0.00<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item">
                <div class="i-l">
                    <i class="iconfont icon-ziliao"></i>标题
                </div>
                <div class="i-r"><i class="iconfont icon-you"></i></div>
            </div>
            <div class="item">
                <div class="i-l">
                    <i class="iconfont icon-yanzheng"></i>标签
                </div>
                <div class="i-r"><span class="txt-red">未验证</span><i class="iconfont icon-you"></i></div>
            </div>
        </div>
        <div class="aui-card">
            <div class="item">
                <div class="i-l">
                    <i class="iconfont icon-kefu_fill"></i>内容
                </div>
                <div class="i-r">0.00<i class="iconfont icon-you"></i></div>
            </div>
        </div>
    </div>-->
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
