// src/router/guard.ts
import { Router } from 'vue-router'
import { useAppStore } from '@/store/app'
import { HOME_ACTIVE_MENU } from '@/utils/constant'

export function setupRouteGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const appStore = useAppStore()

    // Map routes to menu types
    switch (to.name) {
      case 'shortList':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.discover)
        break
      case 'shortVideo':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.shortVideo)
        break
      case 'disclose':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.pictures)
        break
      case 'shortDrama':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.shortDrama)
        break
      case 'novel':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.novel)
        break
      case 'commic':
        appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.commic)
        break
      // Add other routes as needed
    }

    next()
  })
}
