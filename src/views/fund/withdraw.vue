<template>
  <div class="page">
    <CommonHeader :title="t('withdraw')" />
    <main class="main">
      <div class="fund-box">
        <ul v-show="step != 4" class="progress-bar">
          <li :class="{ active: step >= 1 }" @click="jumpStep(1)">{{ t('inputAmount') }}</li>
          <li :class="{ active: step >= 2 }" @click="jumpStep(2)">{{ t('walletDetails') }}</li>
          <li :class="{ active: step == 3 }" @click="jumpStep(3)">{{ t('waitingResults') }}</li>
        </ul>

        <!-- step 1 -->
        <div v-show="step == 1" class="fund-form">
          <div class="ff-title">{{ t('withdrawUsdt', { curreny: currenyName() }) }}</div>
          <div class="ff-balance">
            {{ t('currentBalance') }}
            <!-- {{  }} -->
            <span>{{ moneyFormat(withdrawBalanceItem.balance) }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>
          <div class="ff-group">
            <label>{{ t('amount') }}</label>
            <input v-model="tmpAmount" type="text" ref="amountDom" :placeholder="t('inputAmount')" autocomplete="off" />
            <div v-if="route.query?.CurrencyCode == 'VND'" class="amountNote">{{ t('sameAs') }}： {{ tmpAmount == '' ? 0 : moneyFormat(parseFloat(tmpAmount) * 1000) }} VND</div>
          </div>
          <ul class="ff-amounts">
            <li :class="{ active: percent == 0.25 }">
              <span @click="computeAmount(0.25)">25%</span>
            </li>
            <li :class="{ active: percent == 0.5 }">
              <span @click="computeAmount(0.5)">50%</span>
            </li>
            <li :class="{ active: percent == 1 }">
              <span @click="computeAmount(1)">100%</span>
            </li>
          </ul>
          <div class="ff-rmark">
            <i class="iconfont icon-info" />
            {{ t('minWithdrawAmount') }}
            <b v-if="route.query?.CurrencyCode == 'VND'">{{ moneyFormat(parseFloat(minWithdrawAmount) / 1000) }} {{ withdrawBalanceItem.unit }}</b>
            <b v-else>{{ moneyFormat(minWithdrawAmount) }} {{ withdrawBalanceItem.unit }}</b>
          </div>
        </div>
        <div v-show="step == 1" class="fund-btn">
          <a :class="tmpAmount == '' ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="selTab()">{{ t('next') }}</a>
          <div v-if="route.query?.CurrencyCode == 'VND'" class="amount-exchange">{{ t('exhange') }}： 1 = 1000 VND</div>
        </div>
        <!-- step 2 -->
        <div v-show="step == 2" class="fund-fiat-form fund-form fund-withdraw-form">
          <div class="ff-title">{{ t('walletDetails') }}</div>
          <div class="ff-balance">
            {{ t('currentBalance') }}:
            <span>{{ moneyFormat(withdrawBalanceItem.balance) }}</span>
            {{ withdrawBalanceItem.unit }}
          </div>

          <template v-if="route.query.CurrencyType != '20'">
            <div class="fb-row">
              <div class="row-body">
                <div class="r-title">{{ t('youWithdrawAddress') }}</div>
                <div class="r-group-card">
                  <div v-show="withdrawBalanceItem.name == 'USDT'" class="gc-t" @click="showBlockChainBox = true">
                    <div class="t-l">
                      <div class="t-icon">
                        <img :src="getAssetsFile('coin/usdt.svg')" />
                        <em><i :class="selBlockChainItem.icon" /></em>
                      </div>
                      <div class="t-txt">
                        <span>{{ selBlockChainItem.chainName }}</span>
                        <small>{{ selBlockChainItem.subtitle }}</small>
                      </div>
                    </div>
                    <div class="t-r">
                      <i class="iconfont icon-down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ff-group">
              <label>{{ t('payto') }}</label>
              <input v-model="withdrawForm.PayeeAddress" ref="addressDom" type="text" :placeholder="t('walletAddress')" />
            </div>
            <div class="ff-rmark"><i class="iconfont icon-info" />{{ t('checkWithdrawAddress') }}</div>
          </template>
          <template v-else>
            <template v-if="route.query?.CurrencyCode == 'BRL'">
              <div class="ff-info">{{ t('providerInfo') }}</div>
              <div class="ff-group">
                <label>CPF</label>
                <input v-model="withdrawForm.PayeeData.banknumber" type="text" ref="banknumberDom" :placeholder="t('fiatCpfHolder')" autocomplete="off" />
                <div id="banknumberTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('fiatName') }}</label>
                <input v-model="withdrawForm.PayeeData.bankfullname" type="text" ref="bankfullnameDom" :placeholder="t('fiatNameHolder')" autocomplete="off" />
                <div id="bankfullnameTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('fiatPixType') }}</label>
                <input v-model="withdrawForm.PayeeData.bankname" readonly type="text" ref="banknameDom" :placeholder="t('fiatPixTypeHolder')" autocomplete="off" @focus="showPixPicker = true" />
                <i class="iconfont icon-down down" />
                <div id="banknameTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('fiatPixAccount') }}</label>
                <input v-model="withdrawForm.PayeeData.bankzhiname" type="text" ref="bankzhinameDom" :placeholder="t('fiatPixAccountHolder')" autocomplete="off" />
                <div id="bankzhinameTip" class="tip" />
              </div>
            </template>
            <template v-if="route.query?.CurrencyCode == 'INR'">
              <div class="ff-info">{{ t('providerInfo') }}</div>
              <div class="ff-group">
                <label>{{ t('bankCode') }}</label>
                <input :value="getBankName()" type="text" ref="bankCodeDom" :placeholder="t('bankCodeHolder')" autocomplete="off" readonly @focus="showBankPicker = true" />
                <i class="iconfont icon-down down" />
                <div id="bankCodeTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountNo') }}</label>
                <input v-model="withdrawForm.PayeeData.accountno" type="text" ref="accountNoDom" :placeholder="t('bankAccountNoHolder')" autocomplete="off" />
                <div id="accountNoTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountName') }}</label>
                <input v-model="withdrawForm.PayeeData.accountname" type="text" ref="accountNameDom" :placeholder="t('bankAccountNameHolder')" autocomplete="off" />
                <div id="accountNameTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('ifsc') }}</label>
                <input v-model="withdrawForm.PayeeData.ifsc" type="text" ref="ifscDom" :placeholder="t('ifscHolder')" autocomplete="off" />
                <div id="ifscTip" class="tip" />
              </div>
            </template>
            <template v-if="route.query?.CurrencyCode == 'THB'">
              <div class="ff-info">{{ t('providerInfo') }}</div>
              <div class="ff-group">
                <label>{{ t('bankCode') }}</label>
                <input :value="getBankName()" type="text" ref="bankCodeDom" :placeholder="t('bankCodeHolder')" autocomplete="off" readonly @focus="showBankPicker = true" />
                <i class="iconfont icon-down down" />
                <div id="bankCodeTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountNo') }}</label>
                <input v-model="withdrawForm.PayeeData.accountno" type="text" ref="accountNoDom" :placeholder="t('bankAccountNoHolder')" autocomplete="off" />
                <div id="accountNoTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountName') }}</label>
                <input v-model="withdrawForm.PayeeData.accountname" type="text" ref="accountNameDom" :placeholder="t('bankAccountNameHolder')" autocomplete="off" />
                <div id="accountNameTip" class="tip" />
              </div>
            </template>
            <template v-if="route.query?.CurrencyCode == 'VND'">
              <div class="ff-info">{{ t('providerInfo') }}</div>
              <div class="ff-group">
                <label>{{ t('bankCode') }}</label>
                <input :value="getBankName()" type="text" ref="bankCodeDom" :placeholder="t('bankCodeHolder')" autocomplete="off" readonly @focus="showBankPicker = true" />
                <i class="iconfont icon-down down" />
                <div id="bankCodeTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountNo') }}</label>
                <input v-model="withdrawForm.PayeeData.accountno" type="text" ref="accountNoDom" :placeholder="t('bankAccountNoHolder')" autocomplete="off" />
                <div id="accountNoTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountName') }}</label>
                <input v-model="withdrawForm.PayeeData.accountname" type="text" ref="accountNameDom" :placeholder="t('bankAccountNameHolder')" autocomplete="off" />
                <div id="accountNameTip" class="tip" />
              </div>
            </template>
            <template v-if="route.query?.CurrencyCode == 'PHP'">
              <div class="ff-info">{{ t('providerInfo') }}</div>
              <div class="ff-group">
                <label>{{ t('bankCode') }}</label>
                <input :value="getBankName()" type="text" ref="bankCodeDom" :placeholder="t('bankCodeHolder')" autocomplete="off" readonly @focus="showBankPicker = true" />
                <i class="iconfont icon-down down" />
                <div id="bankCodeTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountNo') }}</label>
                <input v-model="withdrawForm.PayeeData.accountno" type="text" ref="accountNoDom" :placeholder="t('bankAccountNoHolder')" autocomplete="off" />
                <div id="accountNoTip" class="tip" />
              </div>

              <div class="ff-group">
                <label>{{ t('bankAccountName') }}</label>
                <input v-model="withdrawForm.PayeeData.accountname" type="text" ref="accountNameDom" :placeholder="t('bankAccountNameHolder')" autocomplete="off" />
                <div id="accountNameTip" class="tip" />
              </div>
            </template>
          </template>
        </div>
        <div v-show="step == 2" class="fund-btn">
          <a class="btn btn-primary" @click="selTab()">{{ t('previewWithdraw') }}</a>
        </div>
        <!-- step 3 -->
        <div v-show="step == 3" class="fund-form">
          <div class="ff-title">{{ t('previewWithdraw') }}</div>
          <div class="ff-balance">{{ t('confirmWithdrawInfo') }}</div>

          <div class="fb-row">
            <div class="row-body">
              <template v-if="route.query.CurrencyType != '20'">
                <div class="r-title">{{ t('walletAddressBig') }}</div>
                <div class="r-group-card">
                  <div class="gc-t">
                    <div class="t-l">
                      <div class="t-icon">
                        <img v-if="withdrawForm.CurrencyCode != 'USDT'" :src="getAssetsFile(currenyImg())" />
                        <template v-else>
                          <img :src="getAssetsFile('coin/usdt.svg')" />
                          <em><i :class="withdrawForm.BlockchainCode == 'Tron' ? 'iconfont icon-trx' : 'iconfont icon-eth'" /></em>
                        </template>
                      </div>
                      <div class="t-txt">
                        <span>{{ withdrawForm.CurrencyCode }}{{ withdrawForm.CurrencyCode == 'USDT' ? `(${withdrawForm.BlockchainCode})` : '' }}</span>
                        <small>{{ withdrawForm.PayeeAddress }}</small>
                      </div>
                    </div>
                    <div class="t-r" @click="step = 2">
                      <i class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="r-title">{{ t('withdrawInfo') }}</div>
                <div v-if="route.query?.CurrencyCode == 'BRL'" class="r-group-card">
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>CPF</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.banknumber }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('fiatName') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.bankfullname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('fiatPixType') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.bankname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('fiatPixAccount') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.bankzhiname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
                <div v-if="route.query?.CurrencyCode == 'INR'" class="r-group-card">
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankCode') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ getBankName() }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountNo') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountno }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountName') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('ifsc') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.ifsc }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
                <div v-if="route.query?.CurrencyCode == 'THB'" class="r-group-card">
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankCode') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ getBankName() }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountNo') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountno }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountName') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
                <div v-if="route.query?.CurrencyCode == 'VND'" class="r-group-card">
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankCode') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ getBankName() }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountNo') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountno }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountName') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
                <div v-if="route.query?.CurrencyCode == 'PHP'" class="r-group-card">
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankCode') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ getBankName() }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountNo') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountno }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                  <div class="gc-t gc-t-fiat">
                    <div class="t-l">
                      <div class="t-txt">
                        <span>{{ t('bankAccountName') }}</span>
                      </div>
                    </div>
                    <div class="t-r">
                      <span>{{ withdrawForm.PayeeData.accountname }} </span>
                      <i @click="step = 2" class="iconfont icon-bianji" />
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <dl class="ff-rows">
            <dt>{{ t('summary') }}</dt>
            <dd>
              {{ t('currency') }}:
              <span>{{ withdrawForm.CurrencyCode }}</span>
            </dd>
            <dd>
              {{ t('amount') }}:
              <span>{{ moneyFormat(tmpAmount) }} {{ withdrawBalanceItem.unit }}</span>
            </dd>
            <dd v-if="withdrawForm.CurrencyCode == 'USDT'">
              {{ t('network') }}:
              <span>{{ withdrawForm.BlockchainCode }}</span>
            </dd>
          </dl>
          <div v-if="userStore.userInfo.isBindGoogleAuth" class="ff-group">
            <input v-model="withdrawForm.VerificationCode" ref="googleCodeDom" type="text" :placeholder="t('inputGoole')" autocomplete="off" />
          </div>
        </div>
        <div v-show="step == 3" class="fund-btn">
          <a class="btn btn-primary" @click="selTab()">
            <i v-show="btnLoading" class="iconfont icon-loading" />
            <span>{{ t('confirm') }}</span>
          </a>
          <div v-if="route.query?.CurrencyCode == 'VND'" class="amount-exchange">{{ t('exhange') }}： 1 = 1000 VND</div>
        </div>
        <!-- step 4 -->
        <div v-show="step == 4" class="fund-form wa">
          <div class="ff-w-a-t">
            <p>{{ t('withdrawing') }}</p>
            <h2>{{ moneyFormat(withdrawDetail.amount) }}&nbsp;{{ withdrawDetail.currencyCode }}</h2>
          </div>
          <dl class="ff-rows">
            <dt>{{ t('walletDetails') }}</dt>
            <dd>
              {{ t('currency') }}:
              <span>{{ withdrawDetail.currencyCode }}</span>
            </dd>
            <dd v-if="route.query.CurrencyType != '20'">
              {{ t('address') }}:
              <span>{{ withdrawForm.PayeeAddress }}</span>
            </dd>
          </dl>
          <dl class="ff-rows">
            <dt>{{ t('summary') }}</dt>
            <dd>
              {{ t('date') }}:
              <span>{{ withdrawDetail.createTime }}</span>
            </dd>
            <dd>
              {{ t('transactionType') }}：
              <span>{{ t('withdraw') }}</span>
            </dd>
            <dd>
              {{ t('finalBalance') }}：
              <span>{{ moneyFormat(withdrawDetail.afterAmount) }} {{ withdrawDetail.currencyCode }}</span>
            </dd>
          </dl>
        </div>
        <div v-show="step == 4" class="fund-btn wa">
          <a class="btn btn-primary" @click="router.push({ name: 'fund' })">{{ t('backToFund') }}</a>
        </div>
        <dl v-show="step != 4" class="cur-lsit">
          <dt>{{ t('support2') }}</dt>
          <dd>
            <a @click="router.push({ name: 'faq' })">
              <span> <i class="iconfont icon-guanyuwomen" />{{ t('question') }} </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
          <dd>
            <a @click="liveChatCall('maximize')">
              <span> <i class="iconfont icon-xiaoxi" />{{ t('liveSupport') }} </span>
              <i class="iconfont icon-right" />
            </a>
          </dd>
        </dl>
      </div>
      <ConfigProvider theme="dark">
        <Popup id="promotion" v-model:show="showBlockChainBox" position="bottom" close-icon-position="top-right" round style="padding: 0px 15px; padding-top: 20px" :closeable="true">
          <div class="fund-pop-box">
            <div class="bb-title">
              <h3>{{ t('chooseWithdrawChain') }}</h3>
              <p>{{ t('confirmWithdrawAddress') }}</p>
            </div>
            <ul class="bb-cont" style="height: 260px">
              <li v-for="(item, index) of usdtChainList" :key="index" @click="selBlockChain(item)">
                <div class="bbc-ml">
                  <img :src="getAssetsFile(`coin/usdt.svg`)" />
                  <em><i :class="item.icon" /></em>
                </div>
                <div class="bbc-md">
                  <p>{{ item.chainName }}</p>
                  <p>{{ item.subtitle }}</p>
                </div>
                <div class="bbc-mr" />
              </li>
            </ul>
          </div>
        </Popup>
        <Popup v-model:show="showPixPicker" round position="bottom">
          <Picker :columns="pixType" @confirm="confirmPixType" @cancel="showPixPicker = false" />
        </Popup>
        <Popup v-model:show="showBankPicker" round position="bottom">
          <Picker :columns="bankList" @confirm="confirmBank" @cancel="showBankPicker = false" />
        </Popup>
      </ConfigProvider>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { getMinWithdrawAmountApi, getBalanceApi, withdrawOrderApi, getTradeDetailApi } from '@/api/fund/index'
// import { getTradeDetailResponse } from '@/api/fund/type'
import { getAssetsFile, moneyFormat } from '@/utils'
import { usdtChainListData, currenyListData, usdtChainListTypes, pixTypeData, indiaBankData, thaiBankData, vnBankData, phpBankData } from '@/utils/config'
import { useI18n } from 'vue-i18n'
import { liveChatCall } from '@/composables/startGame'

import BigNumber from 'bignumber.js'
import { showToast, Popup, ConfigProvider, Picker } from 'vant'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const usdtChainList = usdtChainListData()
const currenyList = currenyListData()
const pixType = pixTypeData()

let bankList: any = []
if (route.query?.CurrencyCode == 'INR') {
  bankList = indiaBankData()
}
if (route.query?.CurrencyCode == 'THB') {
  bankList = thaiBankData()
}
if (route.query?.CurrencyCode == 'VND') {
  bankList = vnBankData()
}
if (route.query?.CurrencyCode == 'PHP') {
  bankList = phpBankData()
}

let btnLoading = ref(false)
const step = ref(1)
// 快捷提现比例
const percent = ref(0.25)
// 查询提现详情返回数据
const withdrawDetail = reactive({
  blockchainCode: '',
  createTime: '',
  currencyCode: '',
  orderId: '',
  txId: '',
  amount: '0',
  afterAmount: '',
  orderType: '',
  orderStatus: ''
})
// 余额列表
const withdrawBalanceItem = reactive({
  balance: '0',
  name: '',
  subtitle: '',
  unit: '',
  currencyType: 0,
  usdAmount: 0
})
// 最低充值
let minWithdrawAmount = ref('0')
// 最低提现金额请求参数
const getWithdrawAmountForm = reactive({
  BlockchainCode: route.query?.BlockchainCode as string,
  CurrencyCode: route.query?.CurrencyCode as string
})

const showPixPicker = ref(false)
const showBankPicker = ref(false)

// 第二步： 选择提现链
let showBlockChainBox = ref(false)
let selBlockChainItem = reactive<usdtChainListTypes>({
  chainName: '',
  subtitle: '',
  code: '',
  icon: ''
})

//
let amountDom = ref<HTMLInputElement | null>(null)
let addressDom = ref<HTMLInputElement | null>(null)
let banknumberDom = ref<HTMLInputElement | null>(null)
let bankfullnameDom = ref<HTMLInputElement | null>(null)
let banknameDom = ref<HTMLInputElement | null>(null)
let bankzhinameDom = ref<HTMLInputElement | null>(null)
let accountNoDom = ref<HTMLInputElement | null>(null)
let accountNameDom = ref<HTMLInputElement | null>(null)
let bankCodeDom = ref<HTMLInputElement | null>(null)
let ifscDom = ref<HTMLInputElement | null>(null)
let googleCodeDom = ref<HTMLInputElement | null>(null)

const tmpAmount = ref('')
// 提现表单
const withdrawForm = reactive({
  CurrencyCode: route.query?.CurrencyCode as string,
  BlockchainCode: '',
  VerificationCode: '',
  PayeeAddress: '',
  Amount: '',
  PayeeData: {
    bankfullname: '',
    banknumber: '',
    bankname: '',
    bankzhiname: '',
    accounttype: 'PERSONAL_BANK',
    bankcode: '',
    accountno: '',
    accountname: '',
    ifsc: ''
  }
})

const confirmPixType = (selected: any) => {
  withdrawForm.PayeeData.bankname = selected.selectedValues[0]
  showPixPicker.value = false
}

const confirmBank = (selected: any) => {
  withdrawForm.PayeeData.bankname = selected.selectedOptions[0].text
  withdrawForm.PayeeData.bankcode = selected.selectedOptions[0].value
  showBankPicker.value = false
}

const getBankName = () => {
  const item = bankList.find((item: any) => item.value == withdrawForm.PayeeData.bankcode)
  return item ? item.text : ''
}

const currenyName = () => {
  const tmp = currenyList.find((item) => item.code == (route.query?.CurrencyCode as string))
  return tmp ? tmp.currenyName : ''
}

const currenyImg = () => {
  const tmp = currenyList.find((item) => item.code == (route.query?.CurrencyCode as string))
  return tmp ? tmp.icon : ''
}

const currencyChain = () => {
  const tmp = currenyList.find((item) => item.code == (route.query?.CurrencyCode as string))
  return tmp ? tmp.chain : ''
}

// 跳转步骤
const jumpStep = (jumpTo: number) => {
  if (step.value < jumpTo) {
    return false
  }
  step.value = jumpTo
}

// 获取最低提现金额
const getMinWithdraw = () => {
  getMinWithdrawAmountApi(getWithdrawAmountForm)
    .then((resp) => {
      minWithdrawAmount.value = resp.data?.minimumWithdrawAmount
    })
    .catch((error) => {
      console.log(error)
    })
}

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      const item = resp.data.find((item) => item.name == getWithdrawAmountForm.CurrencyCode)
      if (item) {
        Object.assign(withdrawBalanceItem, item)
        computeAmount(percent.value)
        getMinWithdraw()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 输入提现金额进行精确计算
const computeAmount = (rate: number) => {
  percent.value = rate
  const bigBalance = new BigNumber(withdrawBalanceItem.balance)
  let tmp = bigBalance.times(rate)
  tmpAmount.value = tmp.valueOf()
  if (route.query?.CurrencyCode == 'VND') {
    tmpAmount.value = tmp.dividedBy(1000).valueOf()
  }
}

// USDT 选择trc20或trc20
const selBlockChain = (item: usdtChainListTypes) => {
  Object.assign(selBlockChainItem, item)
  showBlockChainBox.value = false
  withdrawForm.BlockchainCode = item.code
}

// 提现
const selTab = () => {
  if (step.value == 1) {
    withdrawForm.Amount = route.query.CurrencyCode == 'VND' ? (parseFloat(tmpAmount.value) * 1000).toString() : tmpAmount.value
    if (withdrawForm.Amount == '') {
      amountDom.value?.focus()
      showToast(t('tips.inputWithdrawAmount'))
      return false
    }
    if (parseFloat(withdrawForm.Amount) > parseFloat(withdrawBalanceItem.balance)) {
      amountDom.value?.focus()
      showToast(t('tips.overMaxWithdrawAmount'))
      return false
    }
    if (parseFloat(withdrawForm.Amount) < parseFloat(minWithdrawAmount.value)) {
      amountDom.value?.focus()
      showToast(t('tips.underMinWithdrawAmount'))
      return false
    }
    step.value = 2
  } else if (step.value == 2) {
    if (route.query.CurrencyType != '20') {
      if (withdrawForm.PayeeAddress == '') {
        addressDom.value?.focus()
        showToast(t('tips.inputWithdrawAddress'))
        return false
      }
      withdrawForm.BlockchainCode = withdrawForm.BlockchainCode == '' ? selBlockChainItem.code : withdrawForm.BlockchainCode
      // 设置提现链
      if (route.query.CurrencyCode == 'USDT') {
        withdrawForm.BlockchainCode = withdrawForm.BlockchainCode == '' ? selBlockChainItem.code : withdrawForm.BlockchainCode
      } else {
        //@ts-ignore
        withdrawForm.BlockchainCode = currencyChain()
      }
    } else {
      if (route.query.CurrencyCode == 'BRL') {
        if (withdrawForm.PayeeData.banknumber == '') {
          banknumberDom.value?.focus()
          showToast(t('fiatCpfHolder'))
          return false
        }
        if (withdrawForm.PayeeData.bankfullname == '') {
          bankfullnameDom.value?.focus()
          showToast(t('fiatNameHolder'))
          return false
        }
        if (withdrawForm.PayeeData.bankname == '') {
          banknameDom.value?.focus()
          showToast(t('fiatPixTypeHolder'))
          return false
        }
        if (withdrawForm.PayeeData.bankzhiname == '') {
          bankzhinameDom.value?.focus()
          showToast(t('fiatPixAccountHolder'))
          return false
        }
      } else if (route.query.CurrencyCode == 'INR') {
        if (withdrawForm.PayeeData.bankcode == '') {
          bankCodeDom.value?.focus()
          showToast(t('bankCodeHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountno == '') {
          accountNoDom.value?.focus()
          showToast(t('bankAccountNoHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountname == '') {
          accountNameDom.value?.focus()
          showToast(t('bankAccountNameHolder'))
          return false
        }
        if (withdrawForm.PayeeData.ifsc == '') {
          ifscDom.value?.focus()
          showToast(t('ifscHolder'))
          return false
        }
      } else if (route.query.CurrencyCode == 'THB') {
        if (withdrawForm.PayeeData.bankcode == '') {
          bankCodeDom.value?.focus()
          showToast(t('bankCodeHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountno == '') {
          accountNoDom.value?.focus()
          showToast(t('bankAccountNoHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountname == '') {
          accountNameDom.value?.focus()
          showToast(t('bankAccountNameHolder'))
          return false
        }
      } else if (route.query.CurrencyCode == 'VND') {
        if (withdrawForm.PayeeData.bankcode == '') {
          bankCodeDom.value?.focus()
          showToast(t('bankCodeHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountno == '') {
          accountNoDom.value?.focus()
          showToast(t('bankAccountNoHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountname == '') {
          accountNameDom.value?.focus()
          showToast(t('bankAccountNameHolder'))
          return false
        }
      } else if (route.query.CurrencyCode == 'PHP') {
        if (withdrawForm.PayeeData.bankcode == '') {
          bankCodeDom.value?.focus()
          showToast(t('bankCodeHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountno == '') {
          accountNoDom.value?.focus()
          showToast(t('bankAccountNoHolder'))
          return false
        }
        if (withdrawForm.PayeeData.accountname == '') {
          accountNameDom.value?.focus()
          showToast(t('bankAccountNameHolder'))
          return false
        }
      }
    }
    step.value = 3
  } else if (step.value == 3) {
    if (btnLoading.value) {
      return false
    }
    btnLoading.value = true
    if (userStore.userInfo.isBindGoogleAuth && withdrawForm.VerificationCode == '') {
      showToast(t('tips.googleCode'))
      googleCodeDom.value?.focus()
      btnLoading.value = false
      return false
    }
    withdrawOrderApi(withdrawForm)
      .then((resp) => {
        getTradeDetailApi({ OrderId: resp.data.orderId, orderType: '2' })
          .then((resp) => {
            showToast(t('tips.withdrawSuccess'))
            Object.assign(withdrawDetail, resp.data)
            btnLoading.value = false
          })
          .catch((error) => {
            btnLoading.value = false
            console.log(error)
          })
        userStore.getUserInfo({ noLoading: true })
        step.value = 4
        btnLoading.value = false
      })
      .catch((error) => {
        // showToast(t('tips.withdrawFail'))
        console.log(error)
        btnLoading.value = false
      })
  }
}

if (route.query?.CurrencyCode == 'USDT') {
  Object.assign(selBlockChainItem, usdtChainList[1])
}

getBalanceList()
</script>
