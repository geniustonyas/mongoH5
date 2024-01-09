import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AppMain from '@/components/layout/AppMain.vue'
import Affiliate from '@/components/layout/Affiliate.vue'
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
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('@/views/sports/sports.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/casino',
    name: 'casino',
    component: () => import('@/views/casino/casino.vue'),
    meta: { needLogin: false, keepAlive: true }
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('@/views/slots/slots.vue'),
    meta: { needLogin: false, keepAlive: true }
  },
  {
    path: '/game',
    component: AppMain,
    meta: { needLogin: false, keepAlive: false },
    children: [
      {
        path: 'gameDetails/:id',
        name: 'gameDetails',
        component: () => import('@/views/game/gameDetails.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'gameIframe',
        name: 'gameIframe',
        component: () => import('@/views/game/gameIframe.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/fund',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'fund',
        component: () => import('@/views/fund/fund.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: () => import('@/views/fund/withdraw.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'walletSetting',
        name: 'walletSetting',
        component: () => import('@/views/fund/walletSetting.vue'),
        meta: { needLogin: true, keepAlive: false }
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
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'logout',
        name: 'logout',
        component: () => import('@/views/user/logout.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'reg',
        name: 'reg',
        component: () => import('@/views/user/reg.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'forget',
        name: 'forget',
        component: () => import('@/views/user/forget.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'googleCode',
        name: 'googleCode',
        component: () => import('@/views/user/googleCode.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'thirdReg',
        name: 'thirdReg',
        component: () => import('@/views/user/thirdReg.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'authCallback',
        name: 'authCallback',
        component: () => import('@/views/user/authCallback.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'cancelAuth',
        name: 'cancelAuth',
        component: () => import('@/views/user/authCallback.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/search.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/promo',
    name: 'promo',
    component: () => import('@/views/promo/promo.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/promoDetails',
    component: AppMain,
    children: [
      {
        path: ':id(\\d+)',
        name: 'promoDetails',
        component: () => import('@/views/promo/promoDetails.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/home',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'clubHouse',
        name: 'clubHouse',
        component: () => import('@/views/home/clubHouse.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/home/account.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'tradeRecord',
        name: 'tradeRecord',
        component: () => import('@/views/home/tradeRecord.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'rewards',
        name: 'rewards',
        component: () => import('@/views/home/rewards.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/home/message.vue'),
        meta: { needLogin: true, keepAlive: false }
      }
    ]
  },
  {
    path: '/affiliate',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'affiliate',
        component: () => import('@/views/affiliate/affiliate.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'overview',
        name: 'overview',
        component: () => import('@/views/affiliate/overview.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'advantage',
        name: 'advantage',
        component: () => import('@/views/affiliate/advantage.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'retention',
        name: 'retention',
        component: () => import('@/views/affiliate/retention.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/affiliate/dashboard.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'memberInfo',
        name: 'memberInfo',
        component: () => import('@/views/affiliate/memberInfo.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'memberRecord',
        name: 'memberRecord',
        component: () => import('@/views/affiliate/memberRecord.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'memberDeposit',
        name: 'memberDeposit',
        component: () => import('@/views/affiliate/memberDeposit.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'commission',
        name: 'commission',
        component: () => import('@/views/affiliate/commission.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'finance',
        name: 'finance',
        component: () => import('@/views/affiliate/finance.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'finance',
        component: Affiliate,
        children: [
          {
            path: 'financeDetails',
            name: 'financeDetails',
            component: () => import('@/views/affiliate/financeDetails.vue'),
            meta: { needLogin: true, keepAlive: false }
          }
        ]
      }
    ]
  },
  {
    path: '/terms',
    component: AppMain,
    children: [
      {
        path: ':type(rules|responsible|aml|selfExclusion|fairness|privacy)',
        name: 'terms',
        component: () => import('@/views/terms/terms.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/vips',
    component: AppMain,
    children: [
      {
        path: 'newVip',
        name: 'newVip',
        component: () => import('@/views/vips/newVip.vue'),
        meta: { needLogin: false, keepAlive: false }
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
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/faq',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'faq',
        component: () => import('@/views/faq/faq.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/views/download/download.vue'),
    meta: { needLogin: false, keepAlive: true }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/game/favorites.vue'),
    meta: { needLogin: true, savePosition: true }
  },
  {
    path: '/recently',
    name: 'recently',
    component: () => import('@/views/game/rencently.vue'),
    meta: { needLogin: true, savePosition: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: 'index' },
    meta: { needLogin: false, keepAlive: false }
  }
]

const router = createRouter({
  history: import.meta.env.VITE_ROUTER_HISTORY === 'hash' ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH) : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  linkActiveClass: 'active',
  routes
  // @ts-ignore 注意： scrollBehavior 这个方法只在 history 模式下可用
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.getElementById('main').scrollTop
  //       console.log(from.meta.savedPosition)
  //     }
  //     console.log(to.meta.savedPosition)
  //     return { el: '#main', x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
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
      appStore.refreshMainStatus()
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
        // 如果有token 跳转路由时就调用一下定时任务方法，目的是确保刷新后有数据
        userStore.refreshToken()
        userStore.refreshNewMessageCount()
        userStore
          .refreshUserInfo()
          .then(() => {
            next()
          })
          .catch(() => {
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
