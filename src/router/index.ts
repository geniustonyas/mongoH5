import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AppMain from '@/components/layout/AppMain.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/index/test.vue')
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
      }
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: { transition: '', needLogin: false }
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
        path: 'promoDetails',
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
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'clubHouse',
        name: 'clubHouse',
        component: () => import('@/views/home/clubHouse.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/home/account.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'betRecord',
        name: 'betRecord',
        component: () => import('@/views/home/betRecord.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'rewards',
        name: 'rewards',
        component: () => import('@/views/home/rewards.vue'),
        meta: { transition: '', needLogin: false }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/home/message.vue'),
        meta: { transition: '', needLogin: false }
      }
    ]
  }
]

const router = createRouter({
  history: import.meta.env.VITE_ROUTER_HISTORY === 'hash' ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH) : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  linkActiveClass: 'active',
  routes
})

export default router
