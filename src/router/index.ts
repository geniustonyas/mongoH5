import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppMain from '@/components/layout/AppMain.vue'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import { getToken } from '@/utils/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    meta: { needLogin: false, keepAlive: false },
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: { needLogin: false, keepAlive: false },
    component: () => import('@/views/test.vue')
  },
  {
    path: '/videoList/:id',
    name: 'videoList',
    meta: { needLogin: false, keepAlive: false },
    component: () => import('@/views/index/videoList.vue')
  },
  {
    path: '/theme',
    component: AppMain,
    children: [
      {
        path: 'theme',
        name: 'theme',
        component: () => import('@/views/theme/theme.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'hotVideo',
        name: 'hotVideo',
        component: () => import('@/views/theme/hotVideo.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'actor',
        name: 'actor',
        component: () => import('@/views/theme/actor.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'actorDetail/:id',
        name: 'actorDetail',
        component: () => import('@/views/theme/actorDetail.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/bbs',
    name: 'bbs',
    component: () => import('@/views/bbs/bbs.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/bbs',
    component: AppMain,
    children: [
      // {
      //   path: '',
      //   name: 'bbs',
      //   component: () => import('@/views/bbs/bbs.vue'),
      //   meta: { needLogin: false, keepAlive: false }
      // },
      {
        path: 'weimi/:id',
        name: 'weimi',
        component: () => import('@/views/bbs/weimi.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'bbsDetail/:id',
        name: 'bbsDetail',
        component: () => import('@/views/bbs/bbsDetail.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'bbsSearch',
        name: 'bbsSearch',
        component: () => import('@/views/bbs/bbsSearch.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/shortVideo',
    name: 'shortVideo',
    component: () => import('@/views/shortVideo/shortVideo.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/shortPlay',
    name: 'shortPlay',
    component: () => import('@/views/shortVideo/playlet.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/shortVideo/moreShortPlay',
    name: 'moreShortPlay',
    component: () => import('@/views/shortVideo/moreShortPlay.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/game/game.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/video/search',
    name: 'search',
    component: () => import('@/views/search/search.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/video/play/:id',
    name: 'play',
    component: () => import('@/views/play/play.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/home',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/home/message.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/home/history.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/home/collect.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'buyRecord',
        name: 'buyRecord',
        component: () => import('@/views/home/buyRecord.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'shareRecord',
        name: 'shareRecord',
        component: () => import('@/views/home/shareRecord.vue'),
        meta: { needLogin: true, keepAlive: false }
      }
    ]
  },
  {
    path: '/pages',
    component: AppMain,
    redirect: { name: 'spare' },
    children: [
      {
        path: 'download',
        name: 'download',
        component: () => import('../views/pages/download.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'share',
        name: 'share',
        component: () => import('../views/pages/share.vue'),
        meta: { needLogin: true, keepAlive: false }
      },
      {
        path: 'spare',
        name: 'spare',
        component: () => import('@/views/pages/spare.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'problem',
        name: 'problem',
        component: () => import('@/views/pages/problem.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: 'index' },
    meta: { needLogin: false, keepAlive: false }
  }
]

const router = createRouter({
  history: import.meta.env.VITE_ROUTER_HISTORY == 'hash' ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH) : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  // linkActiveClass: 'active',
  routes
})

const navigationStack: string[] = []

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  const userStore = useUserStore()
  const appStore = useAppStore()

  // 如果应用配置还未加载，则加载配置
  if (appStore.cdnUrl == '') {
    await appStore.fetchAllData()
  }

  if (token) {
    if (!userStore.userInfo.id) {
      try {
        await userStore.fetchUserInfo()
        next()
      } catch (error) {
        userStore.clearLogin()
        userStore.showLoginDialog = true
        next(false)
      }
    } else {
      next()
    }
  } else {
    if (to.meta.needLogin) {
      userStore.showLoginDialog = true
      next(false)
    } else {
      next()
    }
  }

  // @ts-ignore
  const isIOS = /iPad|iPhone|iPod|IOS|Ios/.test(navigator.userAgent)
  if (isIOS && appStore.isUserBackNavigation && !appStore.isProgrammaticBack) {
    to.meta.transition = 'no'
  }

  appStore.isUserBackNavigation = false
})

router.afterEach((to, from) => {
  const appStore = useAppStore()
  if (to.meta.transition !== 'no') {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'slide-left' : 'slide-right'
  }

  if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1] !== to.fullPath) {
    navigationStack.push(to.fullPath)
  } else {
    navigationStack.pop()
  }

  appStore.isProgrammaticBack = false
})

export default router
