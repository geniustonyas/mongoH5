import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppMain from '@/components/layout/AppMain.vue'
import { useUserStore } from '@/store/user'
import { useAppStore, useAppStoreHook } from '@/store/app'
import { getToken } from '@/utils/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: (to: any) => {
      const isPc = useAppStoreHook().isPc
      return {
        name: isPc ? 'index' : 'elites',
        query: to.query
      }
    }
  },
  {
    path: '/index',
    name: 'index',
    meta: { needLogin: false, keepAlive: false, title: '首页' },
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: { needLogin: false, keepAlive: false, title: '测试' },
    component: () => import('@/views/shortVideo/test.vue')
  },
  {
    path: '/videoList/:id',
    name: 'videoList',
    meta: { needLogin: false, keepAlive: false, title: '视频列表' },
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
        meta: { needLogin: false, keepAlive: false, title: '主题' }
      },
      {
        path: 'hotVideo',
        name: 'hotVideo',
        component: () => import('@/views/theme/hotVideo.vue'),
        meta: { needLogin: false, keepAlive: false, title: '视频热榜' }
      },
      {
        path: 'actor',
        name: 'actor',
        component: () => import('@/views/theme/actor.vue'),
        meta: { needLogin: false, keepAlive: false, title: '演员' }
      },
      {
        path: 'actorDetail/:id',
        name: 'actorDetail',
        component: () => import('@/views/theme/actorDetail.vue'),
        meta: { needLogin: false, keepAlive: false, title: '演员详情' }
      }
    ]
  },
  {
    path: '/elites',
    name: 'elites',
    component: () => import('@/views/elite/elites.vue'),
    meta: { needLogin: false, keepAlive: false, title: '精选' }
  },
  {
    path: '/disclose',
    name: 'disclose',
    component: () => import('@/views/elite/disclose.vue'),
    meta: { needLogin: false, keepAlive: false, title: '吃瓜' }
  },
  {
    path: '/bbs',
    name: 'bbs',
    component: () => import('@/views/bbs/bbs.vue'),
    meta: { needLogin: false, keepAlive: false, title: '论坛' }
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
        meta: { needLogin: false, keepAlive: false, title: '维密' }
      },
      {
        path: 'bbsDetail/:id',
        name: 'bbsDetail',
        component: () => import('@/views/bbs/bbsDetail.vue'),
        meta: { needLogin: false, keepAlive: false, title: '论坛详情' }
      },
      {
        path: 'bbsSearch',
        name: 'bbsSearch',
        component: () => import('@/views/bbs/bbsSearch.vue'),
        meta: { needLogin: false, keepAlive: false, title: '搜索' }
      }
    ]
  },
  {
    path: '/shortVideo',
    name: 'shortVideo',
    component: () => import('@/views/shortVideo/shortVideo.vue'),
    meta: { needLogin: false, keepAlive: false, title: '短视频' }
  },
  {
    path: '/shortList',
    name: 'shortList',
    component: () => import('@/views/shortVideo/shortList.vue'),
    meta: { needLogin: false, keepAlive: false, title: '短视频列表' }
  },
  {
    path: '/shortPlay',
    name: 'shortPlay',
    component: () => import('@/views/shortVideo/playlet.vue'),
    meta: { needLogin: false, keepAlive: false, title: '短视频播放' }
  },
  {
    path: '/shortVideo/moreShortPlay',
    name: 'moreShortPlay',
    component: () => import('@/views/shortVideo/moreShortPlay.vue'),
    meta: { needLogin: false, keepAlive: false, title: '更多短视频' }
  },
  {
    path: '/video/search',
    name: 'search',
    component: () => import('@/views/search/search.vue'),
    meta: { needLogin: false, keepAlive: false, title: '搜索' }
  },
  {
    path: '/video/play/:id',
    name: 'play',
    component: () => import('@/views/play/play.vue'),
    meta: { needLogin: false, keepAlive: false, title: '视频详情' }
  },
  {
    path: '/home',
    component: AppMain,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: { needLogin: false, keepAlive: false, title: '用户中心' }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/home/message.vue'),
        meta: { needLogin: true, keepAlive: false, title: '站内信-消息' }
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/home/history.vue'),
        meta: { needLogin: true, keepAlive: false, title: '我的足迹' }
      },
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/home/collect.vue'),
        meta: { needLogin: true, keepAlive: false, title: '我的收藏' }
      },
      {
        path: 'buyRecord',
        name: 'buyRecord',
        component: () => import('@/views/home/buyRecord.vue'),
        meta: { needLogin: true, keepAlive: false, title: '购买记录' }
      },
      {
        path: 'shareRecord',
        name: 'shareRecord',
        component: () => import('@/views/home/shareRecord.vue'),
        meta: { needLogin: true, keepAlive: false, title: '分享记录' }
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
        meta: { needLogin: false, keepAlive: false, title: '下载' }
      },
      {
        path: 'share',
        name: 'share',
        component: () => import('../views/pages/share.vue'),
        meta: { needLogin: true, keepAlive: false, title: '分享' }
      },
      {
        path: 'spare',
        name: 'spare',
        component: () => import('@/views/pages/spare.vue'),
        meta: { needLogin: false, keepAlive: false, title: '找回我们  ' }
      },
      {
        path: 'problem',
        name: 'problem',
        component: () => import('@/views/pages/problem.vue'),
        meta: { needLogin: false, keepAlive: false, title: '问题反馈' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: 'index' },
    meta: { needLogin: false, keepAlive: false, title: '404-跳转首页' }
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

let currentUrl = location.href
const isFirstPageView = true
router.afterEach((to, from) => {
  const appStore = useAppStore()
  if (to.meta.transition !== 'no' && !appStore.isPc) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'slide-left' : 'slide-right'
  }

  // @ts-ignore
  if (window._paq) {
    // if (window._paq && to.path !== '/') {
    // @ts-ignore 设置引荐来源为前一个页面
    if (!isFirstPageView) {
      // @ts-ignore
      window._paq.push(['setReferrerUrl', currentUrl])
    }
    // 更新当前 URL
    currentUrl = window.location.origin + to.path
    // @ts-ignore
    window._paq.push(['setCustomUrl', currentUrl])
    // @ts-ignore
    window._paq.push(['setDocumentTitle', to.meta.title || document.title])
    // @ts-ignore
    window._paq.push(['trackPageView'])
  }

  if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1] !== to.fullPath) {
    navigationStack.push(to.fullPath)
  } else {
    navigationStack.pop()
  }

  appStore.isProgrammaticBack = false
})

export default router
