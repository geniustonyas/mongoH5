import { defineStore } from 'pinia'
import { getUserInfo, userLogout } from '@/api/user'
import store from '@/store'
import type { UserInfo } from '@/types/user'
import { clearToken } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        id: '',
        userName: '',
        phoneNumber: '',
        withdrawPassWord: '',
        invitationCode: '',
        realName: '',
        idCardNumber: '',
        balance: 0,
        qq: '',
        wx: '',
        mchat: '',
        freezeAmount: 0,
        firstChildCount: '',
        secondChildCount: '',
        thirdChildCount: '',
        nickName: '',
        paymentStatus: false,
        depositStatus: false,
        paymentRate: 0,
        depositRate: 0,
        totalPaymentAmount: 0,
        totalPaymentOrderCount: '',
        totalSuccessPaymentOrderCount: '',
        totalPaymentCommon: 0,
        totalDepositAmount: 0,
        totalDepositCommon: 0,
        totalDepositOrderCount: '',
        totalAgentCommon: 0,
        totalCommon: 0,
        avatar: '',
        remark: '',
        vip: {
          id: '',
          vipId: '',
          vipName: '',
          remark: '',
          paymentFeeRate: 0,
          depositFeeRate: 0,
          c1PaymentFeeRate: 0,
          c1DepositFeeRate: 0,
          c2PaymentFeeRate: 0,
          c2DepositFeeRate: 0,
          c3PaymentFeeRate: 0,
          c3DepositFeeRate: 0,
          withdrawFeeRate: 0,
          withdrawSingleFee: 0,
          maxPaymentAmount: 0,
          maxDepositAmount: 0,
          upgradeOrderCount: '',
          paymentOrderCompleteTime: '',
          bank: false,
          wechat: false,
          alipay: false,
          createTime: '',
          updateTime: '',
          recordStatus: 0
        }
      },
      showLoginDialog: false
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },

    async fetchUserInfo() {
      try {
        const { data } = await getUserInfo()
        if (data.code == 200 && data.data) {
          this.userInfo = data.data
        } else {
          this.clearLogin()
        }
      } catch (error) {
        this.clearLogin()
        console.error('获取用户信息失败:', error)
      }
    },

    clearLogin() {
      userLogout()
      this.userInfo = {
        id: '',
        userName: '',
        phoneNumber: '',
        withdrawPassWord: '',
        invitationCode: '',
        realName: '',
        idCardNumber: '',
        balance: 0,
        qq: '',
        wx: '',
        mchat: '',
        freezeAmount: 0,
        firstChildCount: '',
        secondChildCount: '',
        thirdChildCount: '',
        nickName: '',
        paymentStatus: false,
        depositStatus: false,
        paymentRate: 0,
        depositRate: 0,
        totalPaymentAmount: 0,
        totalPaymentOrderCount: '',
        totalSuccessPaymentOrderCount: '',
        totalPaymentCommon: 0,
        totalDepositAmount: 0,
        totalDepositCommon: 0,
        totalDepositOrderCount: '',
        totalAgentCommon: 0,
        totalCommon: 0,
        avatar: '',
        remark: '',
        vip: {
          id: '',
          vipId: '',
          vipName: '',
          remark: '',
          paymentFeeRate: 0,
          depositFeeRate: 0,
          c1PaymentFeeRate: 0,
          c1DepositFeeRate: 0,
          c2PaymentFeeRate: 0,
          c2DepositFeeRate: 0,
          c3PaymentFeeRate: 0,
          c3DepositFeeRate: 0,
          withdrawFeeRate: 0,
          withdrawSingleFee: 0,
          maxPaymentAmount: 0,
          maxDepositAmount: 0,
          upgradeOrderCount: '',
          paymentOrderCompleteTime: '',
          bank: false,
          wechat: false,
          alipay: false,
          createTime: '',
          updateTime: '',
          recordStatus: 0
        }
      }
      clearToken()
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useUserStoreHook() {
  return useUserStore(store)
}
