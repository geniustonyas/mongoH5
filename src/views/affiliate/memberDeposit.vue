<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return"></i></div>
        <div class="hml-m">成员代存</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-deposit">
        <div class="line-tabs"><span class="active">额度代存</span><span class="">代存记录</span></div>
        <div class="ine-conts">
          <div class="cont">
            <div class="ad-escrow">
              <div class="ae-a">
                <div class="a-l"><span><i class="iconfont icon-wallet"></i></span></div>
                <div class="a-r"><span>可用额度</span><p><b>******</b><i class="iconfont icon-yincang"></i></p></div>
              </div>
              <div class="ae-b">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label"><span>下级账号</span></div>
                      <div class="cr-input">
                        <input type="text" class="form-control" placeholder="请输入下级账号" autocomplete="off">
                      </div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label"><span>代存金额</span></div>
                      <div class="cr-input">
                        <input type="text" class="form-control" placeholder="请输入代存金额" autocomplete="off">
                      </div>
                    </div><p class="cr-tips"><b>1.00≤</b>单次代存金额<b>≤50,000.00</b>，当日限额<b>10,000,000.00</b></p>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label"><span>提款流水倍数</span></div>
                      <div class="cr-input ci-group">
                        <input type="text" class="form-control" placeholder="请输入提款流水倍数" autocomplete="off"><span class="password-addon">倍</span>
                      </div>
                    </div><p class="cr-tips"><b>1≤</b>提款流水倍数<b>≤8</b></p>
                  </div><div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label"><span>备注</span></div>
                      <div class="cr-input"><input type="password" class="form-control" placeholder="请输入备注" autocomplete="off"></div>
                    </div>
                  </div><div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label"><span>登录密码</span></div>
                      <div class="cr-input"><input type="password" class="form-control" placeholder="请输入登录密码" autocomplete="off"></div>
                    </div>
                  </div>
                  <div class="cf-row"><a class="btn btn-primary">保存提交</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont active">
            <div class="agent-report-box">
              <div class="ar-a">
                <div class="a-col col-50"> <select class="form-control"><option>状态</option></select></div>
                <div class="a-col col-50"> <input class="form-control" placeholder="操作时间" /></div>
                <div class="a-col col-2"> <input class="form-control" placeholder="会员账号" /></div>
                <div class="a-col"> <a class="btn btn-primary">筛选</a></div>
              </div>
              <div class="ar-c">
                <ul>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l">
                          <span>bb001</span>-<b>白银</b>
                        </div>
                        <div class="da-r">
                          1711273443074514946
                        </div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>

                    </div>
                  </li>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l">
                          <span>bb001</span>-<b>白银</b>
                        </div>
                        <div class="da-r">
                          1711273443074514946
                        </div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>

                    </div>
                  </li>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l">
                          <span>bb001</span>-<b>白银</b>
                        </div>
                        <div class="da-r">
                          1711273443074514946
                        </div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </div>


            </div>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>
