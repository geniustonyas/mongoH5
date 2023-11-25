<template>
  <div class="page">
    <CommonHeader :title="siteName + ' ' + t(`html.vipTitle`)" />
    <div class="newvip-box">
      <div class="nb-a">
       <div class="a-bg">
          <img src="../../assets/imgs/vip/nh1.png" />
       </div> 
        <div class="a-introduce">
          <div class="a-c">
            <p>在Seabet，我们致力于提升游戏品质，并提供最佳的游戏体验。我们推出了一个全新的尊贵会员俱乐部，以奖励在我们网站花费时间游戏并忠实于我们网站的会员朋友。</p>
          </div>
        </div>

      </div>
      <div class="nb-x">
        <div class="nb-b">
          <div class="b-perks">
            <div class="item">
              <div class="i-bd">
                <dl>
                  <dt>VIP专属经理</dt>
                  <dd>只关注您的需求</dd>
                  <dd>专为您量身定制的私人游戏体验</dd>
                </dl>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl>
                  <dt>高额奖励</dt>
                  <dd>专为您设计的优惠</dd>
                  <dd>免下注奖励</dd>
                  <!--<dd>高快速的积分获取速度</dd>-->
                </dl>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl>
                  <dt>业内最高投注限额</dt>
                  <dd>通过加密货币每日无限次的存款和取款</dd>
                </dl>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl>
                  <dt>VIP专属促销</dt>
                  <dd>区别于普通会员的促销优惠</dd>
                  <dd>仅VIP用户可见</dd>
                  <!--<dd>个性化优惠</dd>
                  <dd>为您定制专属于您的娱乐服务</dd>-->
                </dl>
              </div>
            </div>
            <div class="item">
              <div class="i-bd">
                <dl>
                  <dt>7*24小时优先服务</dt>
                  <dd>无需排队，无需等待</dd>
                  <dd>我们首先关注您的需求</dd>
                  <!--<dd>多种社交媒体联系方式，专属客户经理在线服务</dd>-->
                </dl>
              </div>
            </div>
          </div>
          <div class="b-reward">
            <div class="br-title">
              <h2>VIP奖励明细</h2> 
            </div>
            <div class="br-cont">
              <div class="bc-levels">
                <div class="l-item active">
                  <img src="../../assets/imgs/grade/102.png" />
                  <h2>青铜</h2>
                  <!--<span>青铜1</span>-->
                </div>
                <div class="l-item">
                  <img src="../../assets/imgs/grade/103.png" />
                  <h2>白银</h2>
                  <!--<span>白银1-5</span>-->
                </div>
                <div class="l-item">
                  <img src="../../assets/imgs/grade/104.png" />
                  <h2>黄金</h2>
                  <!--<span>黄金1-8</span>-->
                </div>
                <div class="l-item">
                  <img src="../../assets/imgs/grade/105.png" />
                  <h2>铂金</h2>
                  <!--<span>铂金1-10</span>-->
                </div>
                <div class="l-item">
                  <img src="../../assets/imgs/grade/106.png" />
                  <h2>钛金</h2>
                  <!--<span>钛金1-10</span>-->
                </div>
                <div class="l-item">
                  <img src="../../assets/imgs/grade/107.png" />
                  <h2>钻石</h2>
                  <!--<span>钻石1-6</span>-->
                </div>
              </div>
              <div class="bc-upgrade">
                <div class="u-item active">
                  <div class="u-a">
                    <div class="a-grade lv2">青铜1</div>
                    <div class="a-amount">100 USDT<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock un" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>晋级奖金<span>5USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock un" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>订阅促销邮箱，免费领取<span>10USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*1</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-item">
                  <div class="u-a">
                    <div class="a-grade lv3">白银1-5</div>
                    <div class="a-amount">500-1万USDT<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>白银5累计领取升级奖金<span>135USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>老虎机游戏免费旋转<span>30</span>次</p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*1.1</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-item">
                  <div class="u-a">
                    <div class="a-grade lv4">黄金1-8</div>
                    <div class="a-amount">1.5万-19万USDT<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>黄金8累计领取升级奖金<span>1,255USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>存<span>300USDT</span>送<span>300USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*1.2</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>周度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每周投注<span>*1%*5%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-item">
                  <div class="u-a">
                    <div class="a-grade lv5">铂金1-10</div>
                    <div class="a-amount">30万-160万USDT<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>铂金10累计领取升级奖金<span>6,025USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>存<span>1,000USDT</span>送<span>1,000USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*1.3</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>周度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每周投注<span>*1%*5%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>月度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每月投注<span>*1%*3%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-item">
                  <div class="u-a">
                    <div class="a-grade lv6">钛金1-10</div>
                    <div class="a-amount">190万-500万USDT<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>钛金10累计领取升级奖金<span>18,555USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>存<span>3,000USDT</span>送<span>3,000USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*1.5</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>周度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每周投注<span>*1%*8%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>月度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每月投注<span>*1%*5%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-item">
                  <div class="u-a">
                    <div class="a-grade lv7">钻石1-6</div>
                    <div class="a-amount">600万+<b>投注金额</b></div>
                  </div>
                  <div class="u-b">
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>升级奖励</h3>
                          <p>钻石6累计领取升级奖金<span>105,555USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>充值奖金</h3>
                          <p>存<span>10,000USDT</span>送<span>10,000USDT</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>积分获取</h3>
                          <p>每日投注<span>*1%*2</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>周度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每周投注<span>*1%*10%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>月度奖金</h3>
                          <p>每周现金返还根据您的投注金额，您将获得每月投注<span>*1%*8%</span>的奖金</p>
                        </div>
                      </div>
                    </div>
                    <div class="b-item">
                      <div class="bi-bd">
                        <div class="i-l">
                          <i class="lock" />
                        </div>
                        <div class="i-r">
                          <h3>特别奖励</h3>
                          <p>钻石6，至尊荣誉特别奖金<span>20,000USDT</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nb-c">
          <div class="rows">
            <div class="r-banner">
              <img src="../../assets/imgs/vip/nh2.jpg" />
            </div>
            <div class="r-title">VIP俱乐部福利细节</div>
            <div class="r-cont">
              <dl>
                <dd>订阅促销邮箱奖金，将通过促销邮箱发送代码，使用代码在“奖励”页面兑换即可.</dd>
                <dd>白银VIP的免费旋转，将于次日添加至Play’N GO平台，支持的游戏Moon Princess Trinity/Honey Rush 100/Hotel Yeti-Way</dd>
                <dd>所有等级的充值奖金限领取一次，需完成10倍的投注金额，可投注于任意游戏. 例：（1000+1000）*10=20000</dd>
                <dd>充值奖金需要在存款完成之后，且未投注之前联系在线客服申请.</dd>
                <dd>积分奖励将根据投注金额于次日自动添加至账户内.</dd>
                <dd>周度奖金和月度奖金，将于下周或下月开始后48小时内自动添加至账户内.</dd>
                <dd>所有的奖金计算周期将使用香港时间，Hong Kong, China (UTC+8)</dd>
              </dl>
            </div>
          </div>
          <div class="rows">
            <div class="r-banner">
              <img src="../../assets/imgs/vip/nh3.jpg" />
            </div>
            <div class="r-title">如何成为我们的VIP会员</div>
            <div class="r-cont">
              <dl>
                <dd>
                  继续投注：成为 VIP 的关键是始终投注各种体育赛事和赌场游戏。Seabet 将奖励您的一致性。作为顶级加密博彩网站，请定期使用您的数字资产对 Seabet 提供的任何赛事和赌场游戏进行投注。也可以尝试
                  USDT 投注，并持续使用您的资金。
                </dd>
                <dd>
                  参加定期活动：Seabet 的促销活动包括您可以随时参加的各种活动和竞赛。定期参加其中任何一个活动都会让您更有机会获得 VIP 会所邀请。不仅如此，您还可以在 Seabet 的其他俱乐部功能中更加活跃
                </dd>
                <dd>等待邀请：您需要做的最后一件事就是等待我们向您发送邀请。继续玩游戏并参加豪客赛。经过几次赌场博彩和体育博彩后，一旦您被认为值得成为 VIP 俱乐部会员，您将立即获得邀请。</dd>
                <dd>
                  作为Seabet会所VIP体验高尚生活：将您的 USDT 博彩体验带入一个全新的世界，同时享受作为 Seabet
                  贵宾俱乐部会员的顶级福利。当您进行体育博彩和赌场游戏时，作为有价值的玩家享受最好的乐趣、快速和公平的投注。
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CommonHeader from '@/components/layout/CommonHeader.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const siteName = import.meta.env.VITE_APP_SITE_NAME
</script>
