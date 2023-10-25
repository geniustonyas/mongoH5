<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return" /></div>
        <div class="hml-m">成员信息</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col">
            <select class="form-control">
              <option>是否投注</option>
            </select>
          </div>
          <div class="a-col"><input class="form-control" placeholder="注册时间" /></div>
          <div class="a-col"><input class="form-control" placeholder="统计时间" /></div>
          <div class="a-col col-2"><input class="form-control" placeholder="会员账号" /></div>
          <div class="a-col"><a class="btn btn-primary">筛选</a></div>
        </div>

        <div class="ar-c">
          <ul>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>存款</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>提款</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>总输赢</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>注册时间</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>统计时间</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>存款</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>提款</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>总输赢</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>注册时间</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>统计时间</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="l-bd">
                <div class="d-a">
                  <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                </div>
                <div class="d-b">
                  <div class="db-col">
                    <span>存款</span>
                    <b>1000</b>
                  </div>
                  <div class="db-col">
                    <span>提款</span>
                    <b>200</b>
                  </div>
                  <div class="db-col">
                    <span>总输赢</span>
                    <b>8,2711</b>
                  </div>
                </div>
                <div class="d-c">
                  <div class="dc-col">
                    <p>注册时间</p>
                    2023-10-10 11:22
                  </div>
                  <div class="dc-col">
                    <p>统计时间</p>
                    2023-10-10 11:22
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="ar-b">
          <table>
            <tr>
              <th>账号</th>
              <th>级别</th>
              <th>存款</th>
              <th>提款</th>
              <th>总输赢</th>
              <th>注册时间</th>
              <th>最后登录时间</th>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
            <tr>
              <td>bb001</td>
              <td>白银</td>
              <td><b>1400</b></td>
              <td><b>400</b></td>
              <td><b class="green">400</b></td>
              <td>2023-10-10 22:22</td>
              <td>2023-10-10 22:22</td>
            </tr>
          </table>
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
