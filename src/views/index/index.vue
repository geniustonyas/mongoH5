<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <Header />
    <main class="main">
      <nav class="m-logo">
        <a href="index.html"><img :src="getAssetsFile('logo.png')" /></a>
      </nav>
      <nav class="m-menu">
        <a @click="toggleTab('sports')"> <img :src="getAssetsFile('svg/sports.svg')" />Sports </a>
        <a :class="{ active: tab == 'livecasino' }" @click="toggleTab('livecasino')"> <img :src="getAssetsFile('svg/livecasino.svg')" />Live Casino </a>
        <a :class="{ active: tab == 'slots' }" @click="toggleTab('slots')"> <img :src="getAssetsFile('svg/slots.svg')" />Slots </a>
      </nav>

      <div v-show="tab == 'sports'">
        <nav class="swiper m-banner">
          <Swipe :autoplay="3500" class="my-swipe" lazy-render>
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-1.jpg')">
              <div class="t-cont">
                <h2>$100 FREE</h2>
                <h2>Bonus Round</h2>
                <p>with every referral done</p>
              </div>
            </SwipeItem>
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-2.jpg')" />
            <SwipeItem v-lazy:background-image="getAssetsFile('bannber/bannber-3.jpg')" />
          </Swipe>
          <!-- <div class="swiper-wrapper">
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-1.jpg')">
              <div class="t-cont">
                <h2>$100 FREE</h2>
                <h2>Bonus Round</h2>
                <p>with every referral done</p>
              </div>
            </div>
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-2.jpg')">Slide 2</div>
            <div class="swiper-slide" v-lazy:background-image="getAssetsFile('bannber/bannber-3.jpg')">Slide 3</div>
          </div>
          <div class="swiper-pagination" /> -->
        </nav>
        <nav class="m-notice">
          <span class="mn-icon">
            <i class="iconfont icon-notice" />
          </span>
          <div class="mn-txt">
            <marquee align="left" behavior="scroll" width="100%" loop="-1" scrollamount="7" scrolldelay="180" onmouseout="this.start()" onmouseover="this.stop()" id="announcement-box">
              1、Promotional betting round starts 12:00 SET 10 May.Allow for some time. 2、Promotional betting round starts 12:00 SET 10 May.Allow for some time. 3、Promotional betting round starts
              12:00 SET 10 May.Allow for some time.
            </marquee>
          </div>
        </nav>
        <nav class="m-card">
          <div class="mc-t">
            <div class="mt-l">
              <b>Global Payment Solutions</b>
              <p>Cryptocurrency &<br />Other Popular Payment Gateways</p>
            </div>
            <a class="btn btn-primary-bordered"> Buy CryPto </a>
          </div>
          <div class="mc-b">
            <a href="#">
              <img :src="getAssetsFile('payment/mastercard.png')" />
            </a>
            <a href="#">
              <img :src="getAssetsFile('payment/visa.png')" />
            </a>
            <a href="#">
              <img :src="getAssetsFile('payment/samsung_pay.png')" />
            </a>
            <a href="#">
              <img :src="getAssetsFile('payment/google_pay.png')" />
            </a>
            <a href="#">
              <img :src="getAssetsFile('payment/apple_pay.png')" />
            </a>
          </div>
        </nav>
        <nav class="m-win">
          <div class="mw-menu">
            <span class="active">Sports Bet</span>
            <span>Live Casino Bet</span>
            <span>Slots Bet</span>
          </div>
          <table class="mw-list">
            <thead>
              <tr>
                <th>GAME</th>
                <th>USER</th>
                <th>PAYOUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
              <tr>
                <td>Baccarat</td>
                <td>
                  <span class="sp-user"><i class="iconfont icon-user_full" /></span>Hidden
                </td>
                <td>+0.12348934432</td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>

      <div v-show="tab == 'livecasino'">
        <nav class="gamebox">
          <div class="g-head">
            <div class="gh-t">
              <div class="gh-l">Live Casino</div>
              <div class="gh-r">
                <span class="btn btn-light optgame" @click="gridShow = !gridShow">
                  <i class="iconfont icon-caidan2" />
                </span>
                <span class="btn btn-light optbtn" @click="showGameOption = !showGameOption">
                  <i class="iconfont icon-tiaozheng" />
                </span>
              </div>
            </div>
            <Vue3SlideUpDown v-model="showGameOption">
              <div class="gh-b optstion">
                <div class="form-row">
                  <label class="form-label">Providers</label>
                  <select class="form-control">
                    <option>All Game Providers</option>
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <select class="form-control">
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div :class="gridShow ? 'g-list' : 'g-list row'">
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game1.jpg')" />
                  <span class="red">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Wild Coyote Megaways</strong>
                  <span>ONETOUCH</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game2.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game3.jpg')" />
                </div>
                <div class="i-txt">
                  <strong>Evolution Live Baccarat Lobby</strong>
                  <span>EVOLUTION</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game4.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game5.jpg')" />
                  <span class="red">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Wild Coyote Megaways</strong>
                  <span>ONETOUCH</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game6.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game7.jpg')" />
                </div>
                <div class="i-txt">
                  <strong>Evolution Live Baccarat Lobby</strong>
                  <span>EVOLUTION</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game8.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div v-show="tab == 'slots'">
        <nav class="gamebox">
          <div class="g-head">
            <div class="gh-t">
              <div class="gh-l">Slots</div>
              <div class="gh-r">
                <span class="btn btn-light optgame" @click="gridShow = !gridShow">
                  <i class="iconfont icon-caidan2" />
                </span>
                <span class="btn btn-light optbtn" @click="showGameOption = !showGameOption">
                  <i class="iconfont icon-tiaozheng" />
                </span>
              </div>
            </div>
            <Vue3SlideUpDown v-model="showGameOption">
              <div class="gh-b optstion" v-show="showGameOption">
                <div class="form-row">
                  <label class="form-label">Providers</label>
                  <select class="form-control">
                    <option>All Game Providers</option>
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">Sort by</label>
                  <select class="form-control">
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div :class="gridShow ? 'g-list' : 'g-list row'">
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game9.jpg')" />
                  <span class="red">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Wild Coyote Megaways</strong>
                  <span>ONETOUCH</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game8.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game7.jpg')" />
                </div>
                <div class="i-txt">
                  <strong>Evolution Live Baccarat Lobby</strong>
                  <span>EVOLUTION</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game6.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game5.jpg')" />
                  <span class="red">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Wild Coyote Megaways</strong>
                  <span>ONETOUCH</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game4.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game3.jpg')" />
                </div>
                <div class="i-txt">
                  <strong>Evolution Live Baccarat Lobby</strong>
                  <span>EVOLUTION</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <div class="i-img">
                  <img :src="getAssetsFile('game/game2.jpg')" />
                  <span class="dark">FEATURED</span>
                </div>
                <div class="i-txt">
                  <strong>Kasahara vs lto Baccarat</strong>
                  <span>EXCLUSIVE</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <nav class="m-rate">1<b>BTC</b>=25,006,02<b>EUR</b></nav>
      <nav class="m-term">
        <dl>
          <dt>Seabet</dt>
          <dd><a href="#">Promotions</a></dd>
          <dd><a href="#">VIP Club</a></dd>
          <dd><a href="#">Store</a></dd>
        </dl>
        <dl>
          <dt>Game</dt>
          <dd><a href="#">Sports</a></dd>
          <dd><a href="#">Live Casino</a></dd>
          <dd><a href="#">Slots</a></dd>
        </dl>
        <dl>
          <dt>About Us</dt>
          <dd>
            <a href="#">Rules & Terms <i class="iconfont icon-share" /></a>
          </dd>
          <dd><a href="#">Responsible Gambling</a></dd>
          <dd><a href="#">AML Policy</a></dd>
          <dd><a href="#">Self Exclusion</a></dd>
          <dd><a href="#">Privacy Policy</a></dd>
        </dl>
        <dl>
          <dt>Follow Us</dt>
          <dd>
            <a href="#">Facebook <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Twitter <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Instagram <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Youtube <i class="iconfont icon-share" /></a>
          </dd>
          <dd>
            <a href="#">Tiktok <i class="iconfont icon-share" /></a>
          </dd>
        </dl>
        <dl>
          <dt>Support</dt>
          <dd><a href="#">Fairness</a></dd>
          <dd>
            <a href="#">Live Support <i class="iconfont icon-share" /></a>
          </dd>
          <dd><a href="#">Help Center</a></dd>
        </dl>
        <dl>
          <dt>Language</dt>
          <dd><a href="#">English</a></dd>
        </dl>
      </nav>
      <nav class="m-accepted">
        <dl>
          <dt>Cryptocurrencies Accepted</dt>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/btc.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/ltc.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/tether.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/eth.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/trx.png')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/cardano.svg')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/busd.svg')" /></a>
          </dd>
          <dd>
            <a href="#"><img :src="getAssetsFile('payment/bnb.svg')" /></a>
          </dd>
        </dl>
      </nav>
      <nav class="m-security">
        <dl>
          <dt>Licences and Security</dt>
          <dd>
            <a href="#">
              <svg height="16" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.88202 10H4.50602V0.381999H3.19002L0.376023 2.426L1.14602 3.63L2.88202 2.328V10ZM9.74782 10.098C11.6798 10.098 13.2058 9.048 13.2058 7.354C13.2058 6.038 12.4638 5.156 11.5398 4.806V4.778C12.1138 4.54 12.7298 3.742 12.7298 2.762C12.7298 1.236 11.4978 0.284 9.74782 0.284C8.06782 0.284 6.79382 1.18 6.79382 2.762C6.79382 3.728 7.39582 4.498 7.96982 4.778V4.806C7.05982 5.17 6.31782 6.052 6.31782 7.354C6.31782 8.978 7.75982 10.098 9.74782 10.098ZM9.74782 4.106C8.92182 4.106 8.33382 3.63 8.33382 2.916C8.33382 2.272 8.90782 1.712 9.74782 1.712C10.5738 1.712 11.1758 2.23 11.1758 2.916C11.1758 3.63 10.5878 4.106 9.74782 4.106ZM9.74782 8.656C8.75382 8.656 7.96982 7.998 7.96982 7.144C7.96982 6.234 8.68382 5.59 9.74782 5.59C10.8118 5.59 11.5398 6.234 11.5398 7.144C11.5398 7.942 10.8258 8.656 9.74782 8.656ZM17.1002 9.412H18.5422V6.836H21.1322V5.408H18.5422V2.818H17.1002V5.408H14.5102V6.836H17.1002V9.412Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </dd>
          <dd>
            <a href="#">
              <svg height="32" viewBox="0 0 115 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2398 0.288102C16.2264 0.306831 20.2554 4.37064 20.243 9.36897C20.2305 14.3673 16.1813 18.4109 11.1947 18.4047C6.20813 18.3985 2.16898 14.3448 2.16895 9.34643C2.17835 4.3343 6.23949 0.278779 11.2398 0.288102Z"
                  fill="#09B2DE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2665 29.2748C21.2575 29.2748 25.3035 25.2193 25.3035 20.2165C25.3035 15.2137 21.2575 11.1582 16.2665 11.1582C11.2755 11.1582 7.22949 15.2137 7.22949 20.2165C7.22949 25.2193 11.2755 29.2748 16.2665 29.2748Z"
                  fill="#1965AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.22962 29.9991C11.2224 29.9991 14.4592 26.9169 14.4592 23.1148C14.4592 19.3127 11.2224 16.2305 7.22962 16.2305C3.23681 16.2305 0 19.3127 0 23.1148C0 26.9169 3.23681 29.9991 7.22962 29.9991Z"
                  fill="#2B4BCE"
                />
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5979 14.0566C27.3907 14.0662 29.6478 16.3415 29.6415 19.1408C29.6351 21.9402 27.3676 24.2052 24.5749 24.2019C21.7821 24.1987 19.5199 21.9284 19.52 19.1291C19.5249 16.3229 21.7983 14.0519 24.5979 14.0566Z"
                  fill="#052B73"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.7712 4.308H40.0452V0.0480001H41.5872C42.6072 0.0480001 43.0452 0.636 43.0452 1.428C43.0452 2.352 42.4212 2.79 41.5032 2.79H40.7712V4.308ZM40.7712 0.696V2.136H41.4312C42.0252 2.136 42.2952 1.836 42.2952 1.416C42.2952 0.966 42.0072 0.696 41.4852 0.696H40.7712ZM48.9286 2.178C48.9286 3.474 48.0106 4.356 46.7806 4.356C45.5026 4.356 44.6266 3.432 44.6266 2.178C44.6266 0.924 45.5026 0 46.7806 0C48.0106 0 48.9286 0.876 48.9286 2.178ZM45.3766 2.178C45.3766 3.012 45.9466 3.678 46.7806 3.678C47.5666 3.678 48.1726 3.048 48.1726 2.178C48.1726 1.302 47.5666 0.678 46.7806 0.678C45.9466 0.678 45.3766 1.344 45.3766 2.178ZM52.1807 4.308H51.5027L50.1527 0.0480001H50.9267L51.8387 3.12H51.8507L52.6847 0.0480001H53.4527L54.2807 3.114H54.2927L55.2107 0.0480001H55.9787L54.6287 4.308H53.9507L53.0807 1.104H53.0687L52.1807 4.308ZM60.5016 4.308H57.6936V0.0480001H60.3756V0.696H58.4196V1.872H59.9976V2.52H58.4196V3.66H60.5016V4.308ZM63.0642 4.308H62.3382V0.0480001H63.9102C64.9242 0.0480001 65.3682 0.636 65.3682 1.428C65.3682 2.094 65.0442 2.538 64.4202 2.718L65.5242 4.308H64.6542L63.6342 2.79H63.0642V4.308ZM63.8022 0.696H63.0642V2.136H63.7542C64.3362 2.136 64.6182 1.836 64.6182 1.416C64.6182 0.966 64.3242 0.696 63.8022 0.696ZM70.1012 4.308H67.2932V0.0480001H69.9752V0.696H68.0192V1.872H69.5972V2.52H68.0192V3.66H70.1012V4.308ZM73.3118 4.308H71.9378V0.0480001H73.2938C74.6438 0.0480001 75.5078 0.924 75.5078 2.184C75.5078 3.438 74.6798 4.308 73.3118 4.308ZM73.3058 0.696H72.6638V3.66H73.2698C74.1698 3.66 74.7578 3.03 74.7578 2.184C74.7578 1.32 74.1638 0.696 73.3058 0.696ZM81.6472 4.308H79.9612V0.0480001H81.4432C82.3192 0.0480001 82.8292 0.39 82.8292 1.086C82.8292 1.482 82.6372 1.878 82.1992 2.052V2.058C82.6972 2.178 83.0452 2.55 83.0452 3.138C83.0452 3.816 82.5892 4.308 81.6472 4.308ZM80.6872 0.696V1.812H81.3892C81.7972 1.812 82.0912 1.65 82.0912 1.248C82.0912 0.912 81.8632 0.69 81.3652 0.69L80.6872 0.696ZM80.6872 2.436V3.66H81.5572C82.0072 3.66 82.2892 3.462 82.2892 3.06C82.2892 2.682 82.0072 2.436 81.4432 2.436H80.6872ZM86.5208 4.308H85.7948V2.424L84.3728 0.0480001H85.2008L86.1548 1.698H86.1668L87.1148 0.0480001H87.9548L86.5208 2.424V4.308ZM84.4257 23.1094C84.4257 27.3271 81.2749 30 77.9489 30C76.1484 30 74.573 29.2153 73.6727 27.8911V29.7303H70.2718V10.3826H73.6977V18.3031C74.598 17.028 76.0984 16.2188 77.9239 16.2188C81.3249 16.2188 84.4257 18.8916 84.4257 23.1094ZM73.4977 23.0849C73.4977 25.1447 75.1231 26.8122 77.2487 26.8122C79.3243 26.8122 80.9748 25.1692 80.9748 23.0849C80.9748 21.0005 79.3243 19.3576 77.2487 19.3576C75.1231 19.3576 73.4977 21.025 73.4977 23.0849ZM39.8677 29.7303H43.2936V22.4228C43.2936 20.363 44.544 19.1859 46.1695 19.1859C47.995 19.1859 48.9202 20.363 48.9202 22.2511V29.7303H52.4712V21.7362C52.4712 18.2786 50.4207 16.2188 47.2197 16.2188C45.5693 16.2188 44.1939 16.9299 43.2936 18.107V10.4071H39.8677V29.7303ZM60.1863 30C61.8368 30 63.2121 29.2644 64.0874 28.0628V29.7303L67.5384 29.7058V16.464L64.0374 16.4885V23.7715C64.0374 25.8313 62.837 26.9838 61.2116 26.9838C59.3611 26.9838 58.4608 25.8313 58.4608 23.9677V16.4885H54.9348V24.4336C54.9348 27.9157 56.8604 30 60.1863 30ZM93.0844 29.9755C97.2606 29.9755 99.7613 27.7931 99.7613 24.36C99.7613 22.5699 98.9111 21.1477 97.5107 20.2158C98.536 19.3576 99.1612 18.156 99.1612 16.7092C99.1612 13.5949 96.6855 11.5842 93.1345 11.5842C89.5084 11.5842 87.0577 13.5949 87.0577 16.7092C87.0577 18.156 87.7329 19.333 88.7332 20.1913C87.2828 21.1477 86.3825 22.5944 86.3825 24.36C86.3825 27.7931 88.8332 29.9755 93.0844 29.9755ZM93.0844 26.9348C90.9088 26.9348 89.7835 25.7823 89.7835 24.36C89.7835 22.9377 90.9588 21.7852 93.1345 21.7852C95.2851 21.7852 96.4104 22.9377 96.4104 24.36C96.4104 25.7823 95.2601 26.9348 93.0844 26.9348ZM93.1094 18.9652C91.1089 18.9652 90.2836 18.0089 90.2836 16.7337C90.2836 15.4831 91.2589 14.4777 93.1595 14.4777C95.035 14.4777 95.9602 15.4831 95.9602 16.7337C95.9602 18.0334 95.035 18.9652 93.1094 18.9652ZM115 24.36C115 27.7931 112.499 29.9755 108.323 29.9755C104.072 29.9755 101.621 27.7931 101.621 24.36C101.621 22.5944 102.521 21.1477 103.972 20.1913C102.972 19.333 102.296 18.156 102.296 16.7092C102.296 13.5949 104.747 11.5842 108.373 11.5842C111.924 11.5842 114.4 13.5949 114.4 16.7092C114.4 18.156 113.775 19.3576 112.749 20.2158C114.15 21.1477 115 22.5699 115 24.36ZM105.022 24.36C105.022 25.7823 106.147 26.9348 108.323 26.9348C110.499 26.9348 111.649 25.7823 111.649 24.36C111.649 22.9377 110.524 21.7852 108.373 21.7852C106.198 21.7852 105.022 22.9377 105.022 24.36ZM105.522 16.7337C105.522 18.0089 106.348 18.9652 108.348 18.9652C110.274 18.9652 111.199 18.0334 111.199 16.7337C111.199 15.4831 110.274 14.4777 108.398 14.4777C106.498 14.4777 105.522 15.4831 105.522 16.7337Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2398 0.288102C16.2264 0.306831 20.2554 4.37064 20.243 9.36897C20.2305 14.3673 16.1813 18.4109 11.1947 18.4047C6.20813 18.3985 2.16898 14.3448 2.16895 9.34643C2.17835 4.3343 6.23949 0.278779 11.2398 0.288102Z"
                  fill="#09B2DE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2665 29.2748C21.2575 29.2748 25.3035 25.2193 25.3035 20.2165C25.3035 15.2137 21.2575 11.1582 16.2665 11.1582C11.2755 11.1582 7.22949 15.2137 7.22949 20.2165C7.22949 25.2193 11.2755 29.2748 16.2665 29.2748Z"
                  fill="#1965AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.22962 29.9991C11.2224 29.9991 14.4592 26.9169 14.4592 23.1148C14.4592 19.3127 11.2224 16.2305 7.22962 16.2305C3.23681 16.2305 0 19.3127 0 23.1148C0 26.9169 3.23681 29.9991 7.22962 29.9991Z"
                  fill="#2B4BCE"
                />
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5979 14.0566C27.3907 14.0662 29.6478 16.3415 29.6415 19.1408C29.6351 21.9402 27.3676 24.2052 24.5749 24.2019C21.7821 24.1987 19.5199 21.9284 19.52 19.1291C19.5249 16.3229 21.7983 14.0519 24.5979 14.0566Z"
                  fill="#052B73"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.7712 4.308H40.0452V0.0480001H41.5872C42.6072 0.0480001 43.0452 0.636 43.0452 1.428C43.0452 2.352 42.4212 2.79 41.5032 2.79H40.7712V4.308ZM40.7712 0.696V2.136H41.4312C42.0252 2.136 42.2952 1.836 42.2952 1.416C42.2952 0.966 42.0072 0.696 41.4852 0.696H40.7712ZM48.9286 2.178C48.9286 3.474 48.0106 4.356 46.7806 4.356C45.5026 4.356 44.6266 3.432 44.6266 2.178C44.6266 0.924 45.5026 0 46.7806 0C48.0106 0 48.9286 0.876 48.9286 2.178ZM45.3766 2.178C45.3766 3.012 45.9466 3.678 46.7806 3.678C47.5666 3.678 48.1726 3.048 48.1726 2.178C48.1726 1.302 47.5666 0.678 46.7806 0.678C45.9466 0.678 45.3766 1.344 45.3766 2.178ZM52.1807 4.308H51.5027L50.1527 0.0480001H50.9267L51.8387 3.12H51.8507L52.6847 0.0480001H53.4527L54.2807 3.114H54.2927L55.2107 0.0480001H55.9787L54.6287 4.308H53.9507L53.0807 1.104H53.0687L52.1807 4.308ZM60.5016 4.308H57.6936V0.0480001H60.3756V0.696H58.4196V1.872H59.9976V2.52H58.4196V3.66H60.5016V4.308ZM63.0642 4.308H62.3382V0.0480001H63.9102C64.9242 0.0480001 65.3682 0.636 65.3682 1.428C65.3682 2.094 65.0442 2.538 64.4202 2.718L65.5242 4.308H64.6542L63.6342 2.79H63.0642V4.308ZM63.8022 0.696H63.0642V2.136H63.7542C64.3362 2.136 64.6182 1.836 64.6182 1.416C64.6182 0.966 64.3242 0.696 63.8022 0.696ZM70.1012 4.308H67.2932V0.0480001H69.9752V0.696H68.0192V1.872H69.5972V2.52H68.0192V3.66H70.1012V4.308ZM73.3118 4.308H71.9378V0.0480001H73.2938C74.6438 0.0480001 75.5078 0.924 75.5078 2.184C75.5078 3.438 74.6798 4.308 73.3118 4.308ZM73.3058 0.696H72.6638V3.66H73.2698C74.1698 3.66 74.7578 3.03 74.7578 2.184C74.7578 1.32 74.1638 0.696 73.3058 0.696ZM81.6472 4.308H79.9612V0.0480001H81.4432C82.3192 0.0480001 82.8292 0.39 82.8292 1.086C82.8292 1.482 82.6372 1.878 82.1992 2.052V2.058C82.6972 2.178 83.0452 2.55 83.0452 3.138C83.0452 3.816 82.5892 4.308 81.6472 4.308ZM80.6872 0.696V1.812H81.3892C81.7972 1.812 82.0912 1.65 82.0912 1.248C82.0912 0.912 81.8632 0.69 81.3652 0.69L80.6872 0.696ZM80.6872 2.436V3.66H81.5572C82.0072 3.66 82.2892 3.462 82.2892 3.06C82.2892 2.682 82.0072 2.436 81.4432 2.436H80.6872ZM86.5208 4.308H85.7948V2.424L84.3728 0.0480001H85.2008L86.1548 1.698H86.1668L87.1148 0.0480001H87.9548L86.5208 2.424V4.308ZM84.4257 23.1094C84.4257 27.3271 81.2749 30 77.9489 30C76.1484 30 74.573 29.2153 73.6727 27.8911V29.7303H70.2718V10.3826H73.6977V18.3031C74.598 17.028 76.0984 16.2188 77.9239 16.2188C81.3249 16.2188 84.4257 18.8916 84.4257 23.1094ZM73.4977 23.0849C73.4977 25.1447 75.1231 26.8122 77.2487 26.8122C79.3243 26.8122 80.9748 25.1692 80.9748 23.0849C80.9748 21.0005 79.3243 19.3576 77.2487 19.3576C75.1231 19.3576 73.4977 21.025 73.4977 23.0849ZM39.8677 29.7303H43.2936V22.4228C43.2936 20.363 44.544 19.1859 46.1695 19.1859C47.995 19.1859 48.9202 20.363 48.9202 22.2511V29.7303H52.4712V21.7362C52.4712 18.2786 50.4207 16.2188 47.2197 16.2188C45.5693 16.2188 44.1939 16.9299 43.2936 18.107V10.4071H39.8677V29.7303ZM60.1863 30C61.8368 30 63.2121 29.2644 64.0874 28.0628V29.7303L67.5384 29.7058V16.464L64.0374 16.4885V23.7715C64.0374 25.8313 62.837 26.9838 61.2116 26.9838C59.3611 26.9838 58.4608 25.8313 58.4608 23.9677V16.4885H54.9348V24.4336C54.9348 27.9157 56.8604 30 60.1863 30ZM93.0844 29.9755C97.2606 29.9755 99.7613 27.7931 99.7613 24.36C99.7613 22.5699 98.9111 21.1477 97.5107 20.2158C98.536 19.3576 99.1612 18.156 99.1612 16.7092C99.1612 13.5949 96.6855 11.5842 93.1345 11.5842C89.5084 11.5842 87.0577 13.5949 87.0577 16.7092C87.0577 18.156 87.7329 19.333 88.7332 20.1913C87.2828 21.1477 86.3825 22.5944 86.3825 24.36C86.3825 27.7931 88.8332 29.9755 93.0844 29.9755ZM93.0844 26.9348C90.9088 26.9348 89.7835 25.7823 89.7835 24.36C89.7835 22.9377 90.9588 21.7852 93.1345 21.7852C95.2851 21.7852 96.4104 22.9377 96.4104 24.36C96.4104 25.7823 95.2601 26.9348 93.0844 26.9348ZM93.1094 18.9652C91.1089 18.9652 90.2836 18.0089 90.2836 16.7337C90.2836 15.4831 91.2589 14.4777 93.1595 14.4777C95.035 14.4777 95.9602 15.4831 95.9602 16.7337C95.9602 18.0334 95.035 18.9652 93.1094 18.9652ZM115 24.36C115 27.7931 112.499 29.9755 108.323 29.9755C104.072 29.9755 101.621 27.7931 101.621 24.36C101.621 22.5944 102.521 21.1477 103.972 20.1913C102.972 19.333 102.296 18.156 102.296 16.7092C102.296 13.5949 104.747 11.5842 108.373 11.5842C111.924 11.5842 114.4 13.5949 114.4 16.7092C114.4 18.156 113.775 19.3576 112.749 20.2158C114.15 21.1477 115 22.5699 115 24.36ZM105.022 24.36C105.022 25.7823 106.147 26.9348 108.323 26.9348C110.499 26.9348 111.649 25.7823 111.649 24.36C111.649 22.9377 110.524 21.7852 108.373 21.7852C106.198 21.7852 105.022 22.9377 105.022 24.36ZM105.522 16.7337C105.522 18.0089 106.348 18.9652 108.348 18.9652C110.274 18.9652 111.199 18.0334 111.199 16.7337C111.199 15.4831 110.274 14.4777 108.398 14.4777C106.498 14.4777 105.522 15.4831 105.522 16.7337Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </dd>
          <dd>
            <a href="#">
              <svg height="32" viewBox="0 0 82 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.91178 28.9422H0V10.5926H4.91178V12.9941H4.94927C6.41156 11.2305 8.39879 10.3299 10.4235 10.3299C12.8231 10.3299 14.7353 11.2305 15.8227 13.2193H15.8977C17.3974 11.3056 19.6846 10.3299 22.3092 10.3299C26.2462 10.3299 28.7583 12.694 28.7583 18.3227V28.9422H23.8465V19.4859C23.8465 16.559 22.9467 14.7203 20.6595 14.7203C18.5973 14.7203 16.91 16.484 16.91 19.7862V28.9422H11.9982V19.4859C11.9982 16.559 11.0234 14.7203 8.77372 14.7203C6.56154 14.7203 4.91178 16.484 4.91178 19.7862V28.9422Z"
                  fill="currentcolor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.0755 20.0238C52.0755 25.1635 47.8997 29.3299 42.7485 29.3299C37.5974 29.3299 33.4215 25.1635 33.4215 20.0238C33.4215 14.8842 37.5974 10.7177 42.7485 10.7177C47.8997 10.7177 52.0755 14.8842 52.0755 20.0238ZM45.8575 20.0238C45.8575 21.7371 44.4656 23.1258 42.7485 23.1258C41.0315 23.1258 39.6395 21.7371 39.6395 20.0238C39.6395 18.3106 41.0315 16.9218 42.7485 16.9218C44.4656 16.9218 45.8575 18.3106 45.8575 20.0238Z"
                  fill="currentcolor"
                />
                <path
                  d="M59.8481 13.8198C59.8481 15.5329 58.4562 16.9218 56.7391 16.9218C55.022 16.9218 53.6301 15.5329 53.6301 13.8198C53.6301 12.1065 55.022 10.7177 56.7391 10.7177C58.4562 10.7177 59.8481 12.1065 59.8481 13.8198Z"
                  fill="currentcolor"
                />
                <path
                  d="M69.4282 28.9422H64.512V10.5926H69.4282V12.9567H69.5032C70.9669 11.2305 73.0685 10.3299 75.3574 10.3299C79.2609 10.3299 82.0001 12.4313 82.0001 18.06V28.9422H77.0836V19.2983C77.0836 15.8085 75.8452 14.7203 73.5562 14.7203C71.0793 14.7203 69.4282 16.4464 69.4282 19.7486V28.9422Z"
                  fill="currentcolor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.06002 4.308H0.334015V0.048H1.87601C2.89601 0.048 3.33401 0.636 3.33401 1.428C3.33401 2.352 2.71002 2.79 1.79202 2.79H1.06002V4.308ZM1.06002 0.696V2.136H1.72002C2.31402 2.136 2.58401 1.836 2.58401 1.416C2.58401 0.966 2.29601 0.696 1.77401 0.696H1.06002ZM9.21801 2.178C9.21801 3.474 8.30001 4.356 7.07001 4.356C5.79201 4.356 4.91602 3.432 4.91602 2.178C4.91602 0.924 5.79201 0 7.07001 0C8.30001 0 9.21801 0.876 9.21801 2.178ZM5.66602 2.178C5.66602 3.012 6.23601 3.678 7.07001 3.678C7.85601 3.678 8.46202 3.048 8.46202 2.178C8.46202 1.302 7.85601 0.678 7.07001 0.678C6.23601 0.678 5.66602 1.344 5.66602 2.178ZM12.47 4.308H11.792L10.442 0.048H11.216L12.128 3.12H12.14L12.974 0.048H13.742L14.57 3.114H14.582L15.5 0.048H16.268L14.918 4.308H14.24L13.37 1.104H13.358L12.47 4.308ZM20.79 4.308H17.983V0.048H20.665V0.696H18.709V1.872H20.287V2.52H18.709V3.66H20.791L20.79 4.308ZM23.353 4.308H22.627V0.048H24.2C25.214 0.048 25.658 0.636 25.658 1.428C25.658 2.094 25.334 2.538 24.71 2.718L25.814 4.308H24.944L23.924 2.79H23.354L23.353 4.308ZM24.091 0.696H23.353V2.136H24.043C24.625 2.136 24.907 1.836 24.907 1.416C24.907 0.966 24.613 0.696 24.091 0.696ZM30.391 4.308H27.582V0.048H30.264V0.696H28.308V1.872H29.886V2.52H28.308V3.66H30.39L30.391 4.308ZM33.601 4.308H32.227V0.048H33.583C34.933 0.048 35.797 0.924 35.797 2.184C35.797 3.438 34.969 4.308 33.601 4.308ZM33.595 0.696H32.953V3.66H33.559C34.459 3.66 35.047 3.03 35.047 2.184C35.047 1.32 34.453 0.696 33.595 0.696ZM41.936 4.308H40.25V0.048H41.732C42.608 0.048 43.118 0.39 43.118 1.086C43.118 1.482 42.926 1.878 42.488 2.052V2.058C42.986 2.178 43.334 2.55 43.334 3.138C43.334 3.816 42.878 4.308 41.936 4.308ZM40.976 0.696V1.812H41.678C42.086 1.812 42.38 1.65 42.38 1.248C42.38 0.912 42.152 0.69 41.654 0.69L40.976 0.696ZM40.976 2.436V3.66H41.846C42.296 3.66 42.578 3.462 42.578 3.06C42.578 2.682 42.296 2.436 41.732 2.436H40.976ZM46.81 4.308H46.084V2.424L44.662 0.048H45.49L46.444 1.698H46.456L47.404 0.048H48.244L46.81 2.424V4.308Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </dd>
        </dl>
      </nav>
    </main>
    <Footer />
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
// vue自带
import { ref } from 'vue'
// 自定义组件
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
// 引用方法
import { useAppStore } from '@/store/modules/app'
import { getAssetsFile } from '@/utils'
//第三方插件
import { Swipe, SwipeItem } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import 'vant/es/swipe/style'

const appStore = useAppStore()
// 切换tab选项卡
let tab = ref('sports')
// 显示游戏筛选
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)

// 切换选项卡
const toggleTab = (tabs: string) => {
  tab.value = tabs
  showGameOption.value = false
}
</script>

<style>
.my-swipe {
  height: 100%;
}
</style>
