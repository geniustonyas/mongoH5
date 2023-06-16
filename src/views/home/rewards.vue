<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" onclick="window.history.go(-1) ">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">Rewards</div>
        <div class="hml-r t-i-w" onclick="addRewards()">
          claim reward<span><i class="iconfont icon-add" /></span>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="rewards-box">
        <div class="rb-title">RECENT TRANSACTIONS</div>
        <ul class="rb-list">
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <div class="mask-box" id="claimReward">
      <div class="mb-bd">
        <div class="claim-reward-box">
          <span class="icon-btn" onclick="$('#claimReward').hide()">
            <i class="iconfont icon-close" />
          </span>
          <h2>Claim new reward</h2>
          <div class="custom-form">
            <div class="cf-row">
              <!--<div class="cr-label">
                                <span>Claim new reward</span>
                            </div>-->
              <div class="cr-input">
                <input type="text" class="form-control" placeholder="Reward code" />
              </div>
            </div>

            <div class="cf-row">
              <div class="cr-btns">
                <a class="btn btn-primary full" href="#">Claim</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomeAccount">
// const { proxy } = getCurrentInstance()
// const router = useRouter()
// const route = useRoute()
</script>

<style lang="less" scoped></style>
