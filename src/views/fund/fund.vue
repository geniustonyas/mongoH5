<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" onclick="window.history.go(-1) ">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">Fund Account</div>
      </div>
    </header>
    <main class="main">
      <div class="fund-box">
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">ACTIVE BALANCE</div>
            <div class="r-card">
              <div class="rc-l">
                <img :src="getAssetsFile('payment/tether.png')" />
                <span>
                  <b>Tether</b>
                  <small>USDT</small>
                </span>
              </div>
              <div class="rc-r">
                <span>
                  <b>0.00 USDT</b>
                  <small>$0.00 US</small>
                </span>
                <i class="iconfont icon-down" />
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row">
          <div class="row-body">
            <div class="inner-tabs">
              <span class="active">Deposit</span>
              <span>Buy Crypto</span>
              <span>Withdraw</span>
            </div>
            <div class="r-title">YOUR DEPOSIT ADDRESS</div>
            <div class="r-group-card">
              <div class="gc-t">
                <div class="t-l">
                  <div class="t-icon">
                    <img :src="getAssetsFile('payment/tether.png')" />
                    <em><i class="iconfont icon-trx" /></em>
                  </div>
                  <div class="t-txt">
                    <span>Tron(TRC20)</span>
                    <small>Tether</small>
                  </div>
                </div>
                <div class="t-r">
                  <i class="iconfont icon-down" />
                </div>
              </div>
              <div class="gc-m">
                <p>1 USDT ≈ <span>US $1.0016</span></p>
                <p>Minimum deposit amount:<span>10 USDT</span></p>
              </div>
              <div class="gc-b">
                <div class="b-l">
                  <small>ADDRESS</small>
                  <span>TLr8D....2ygqz</span>
                </div>
                <div class="b-r">
                  <span>
                    <i class="iconfont icon-saoyisaoerweima" />
                  </span>
                  <span>
                    <i class="iconfont icon-fuzhi" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fb-row line">
          <div class="row-body">
            <div class="r-title">QUICK TIPS</div>
            <div class="r-card-txt">Please always check your deposit wallet address on our site before making your transactions.</div>
          </div>
        </div>
        <dl class="cur-lsit">
          <dt>REWARDS</dt>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-rewards" />Promotion code </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-jiangli" />My Rewards </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
        <dl class="cur-lsit">
          <dt>RECENT TRANSACTIONS</dt>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-zzjl" />Transaction history </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
        <dl class="cur-lsit">
          <dt>SUPPORT SETTINGS</dt>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-setting" />Wallet settings </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-guanyuwomen" />FAQ </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a href="#">
              <span> <i class="iconfont icon-xiaoxi" />Live Support </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup name="Fund">
import Footer from '@/components/layout/Footer.vue'

import { getAssetsFile } from '@/utils'
// import { useRouter } from 'vue-router'

// const router = useRouter()
// const route = useRoute()
</script>

<style lang="less" scoped></style>
