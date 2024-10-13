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
    component: AppMain,
    meta: { needLogin: false, keepAlive: false },
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/index/recommend.vue'),
        meta: { needLogin: false, keepAlive: false }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/index/category.vue'),
        meta: { needLogin: false, keepAlive: false }
      }
    ]
  },
  {
    path: '/theme',
    component: AppMain,
    children: [
      {
        path: '',
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
    path: '/shortVideo',
    name: 'shortVideo',
    component: () => import('@/views/shortVideo/shortVideo.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/game/game.vue'),
    meta: { needLogin: false, keepAlive: false }
  },
  {
    path: '/search',
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
        meta: { needLogin: true, keepAlive: false }
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
        path: 'share',
        name: 'share',
        component: () => import('@/views/home/share.vue'),
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
      }
    ]
  },
  {
    path: '/pages',
    component: AppMain,
    redirect: { name: 'spare' },
    children: [
      {
        path: 'spare',
        name: 'spare',
        component: () => import('@/views/pages/spare.html'),
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
