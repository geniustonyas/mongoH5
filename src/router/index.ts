import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AppMain from '@/components/layout/AppMain.vue'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import { getToken } from '@/utils/auth'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('@/views/sports/sports.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/casino',
    name: 'casino',
    component: () => import('@/views/casino/casino.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('@/views/slots/slots.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/fund',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'fund',
        component: () => import('@/views/fund/fund.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: () => import('@/views/fund/withdraw.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'tradeRecord',
        name: 'tradeRecord',
        component: () => import('@/views/fund/tradeRecord.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'walletSetting',
        name: 'walletSetting',
        component: () => import('@/views/fund/walletSetting.vue'),
        meta: { transition: '', needLogin: true }
      }
    ]
  },
  {
    path: '/user',
    component: AppMain,
    redirect: { name: 'login' },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'reg',
        name: 'reg',
        component: () => import('@/views/user/reg.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'forget',
        name: 'forget',
        component: () => import('@/views/user/forget.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'thirdReg',
        name: 'thirdReg',
        component: () => import('@/views/user/thirdReg.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'authCallback',
        name: 'authCallback',
        component: () => import('@/views/user/authCallback.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/search.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/promo',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'promo',
        component: () => import('@/views/promo/promo.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: ':id(\\d+)',
        name: 'promoDetails',
        component: () => import('@/views/promo/promoDetails.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('@/views/support/support.vue'),
    meta: { transition: '', needLogin: false }
  },
  {
    path: '/home',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'clubHouse',
        name: 'clubHouse',
        component: () => import('@/views/home/clubHouse.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/home/account.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'fundRecord',
        name: 'fundRecord',
        component: () => import('@/views/home/fundRecord.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'wallet',
        name: 'wallet',
        component: () => import('@/views/home/wallet.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'rewards',
        name: 'rewards',
        component: () => import('@/views/home/rewards.vue'),
        meta: { transition: '', needLogin: true }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/home/message.vue'),
        meta: { transition: '', needLogin: true }
      }
    ]
  },
  {
    path: '/terms',
    component: AppMain,
    children: [
      {
        path: ':type(rules|responsible|aml|selfExclusion)',
        name: 'terms',
        component: () => import('@/views/terms/terms.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  },
  {
    path: '/vips',
    component: AppMain,
    children: [
      {
        path: 'vip',
        name: 'vip',
        component: () => import('@/views/vips/vip.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  },
  {
    path: '/mall',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'mall',
        component: () => import('@/views/mall/mall.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: 'index' },
    meta: { transition: '', needLogin: false }
  }
]

const router = createRouter({
  history: import.meta.env.VITE_ROUTER_HISTORY === 'hash' ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH) : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  linkActiveClass: 'active',
  routes
})

// 验证是否需要登录
router.beforeEach((to, from, next) => {
  const token = getToken()
  let userStore: any = null
  let appStore: any = null
  if (appStore === null) {
    appStore = useAppStore()
    if (appStore.chat == '') {
      appStore.getConfig()
    }
  }
  if (token) {
    if (userStore === null) {
      userStore = useUserStore()
    }
    if (userStore.userInfo.id) {
      next()
    } else {
      try {
        userStore.refreshToken()
        userStore.refreshNewMessageCount()
        userStore
          .refreshUserInfo()
          .then(() => {
            next()
          })
          .catch((error: any) => {
            console.log(error)
            next({ name: 'login', query: from.query })
          })
      } catch (error) {
        console.log(error)
        next()
      }
    }
  } else {
    if (to.meta.needLogin) {
      next({ name: 'login', query: from.query })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth == fromDepth ? '' : toDepth < fromDepth ? 'slide-left' : 'slide-right'
})

export default router
