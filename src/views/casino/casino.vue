<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="scrollRef">
      <!-- 切换体育真人老虎机 -->
      <IndexTab tab="casino" />

      <!-- 真人 -->
      <nav class="gamebox">
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('liveCasino') }}</div>
            <div class="gh-r">
              <span class="btn btn-light optgame" @click="gridShow = !gridShow">
                <i class="iconfont icon-caidan2" />
              </span>
              <span class="btn btn-light optbtn" @click="showGameOption = !showGameOption">
                <i class="iconfont icon-tiaozheng" />
              </span>
            </div>
          </div>

          <!-- 游戏筛选 -->
          <Vue3SlideUpDown v-model="showGameOption">
            <div class="gh-b optstion">
              <div class="form-row">
                <label class="form-label">{{ t('providers') }}</label>
                <ConfigProvider theme="dark">
                  <DropdownMenu v-if="pslist.length > 0" direction="down">
                    <DropdownItem :title="selectTitle()" ref="providerSelect">
                      <div class="drop-item" v-for="(item, index) of pslist" :key="index" @click="selGameProvider(parseInt(item.id))">
                        <span :attr="item.id" :class="{ active: query.ps.includes(parseInt(item.id)) }">{{ item.name }}({{ item.count }})</span>
                        <span><Icon v-show="query.ps.includes(parseInt(item.id))" name="success" class="active" /></span>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </ConfigProvider>
              </div>
              <div class="form-row">
                <label class="form-label">{{ t('sortBy') }}</label>
                <ConfigProvider theme="dark">
                  <DropdownMenu v-if="pslist.length > 0" direction="down">
                    <DropdownItem v-model="query.sortBy" :options="sortBy" @change="sortGame()" />
                  </DropdownMenu>
                </ConfigProvider>
              </div>
            </div>
          </Vue3SlideUpDown>
        </div>

        <div v-if="dataList.length > 0" :class="gridShow ? 'g-list' : 'g-list row'">
          <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item.id, item.type)">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.img}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                <!-- <span>{{ item.pn }}</span> -->
                <div v-if="userStore.userInfo.id" class="sp_sc">
                  <i :class="isFavClass(item)" @click.stop="setFav(item)" />
                </div>
              </div>
              <div class="i-txt">
                <strong>{{ item.name }}</strong>
                <span>{{ item.pn }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pageCount > 1" class="g-btn">
          <a :class="query.page >= pageCount ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="loadMore()">{{ t('more') }}</a>
        </div>
      </nav>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onActivated, onDeactivated } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

import { getGameListApi, setFavApi, cancalFavApi } from '@/api/game/index'
import { getGameListRespItem, getGameListGsItemResp, getGameListData } from '@/api/game/types'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { GameType } from '@/utils/constant'
import { getExchangeRate } from '@/composables/getExchangeRate'

import { showToast, ConfigProvider, DropdownMenu, DropdownItem, Icon } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { startGame } from '@/composables/startGame'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
const { t } = useI18n()

const providerId = ref<string | number>('')
const providerSelect = ref<HTMLElement>(null)
// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 游戏列表显示or隐藏筛选条件
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)
// 游戏列表排序规则
const sortBy = computed(() => {
  return [
    { text: t('polular'), value: 3 },
    { text: 'A-Z', value: 1 },
    { text: 'RTP', value: 2 }
  ]
})
// 游戏列表查询参数
let query = reactive<getGameListData>({
  ps: [],
  cs: [],
  gts: [GameType.Casino],
  ct: 1,
  sortBy: 3,
  page: 1
})
// 游戏列表分页
let pageCount = ref(0)
// 运营商分类
let pslist = ref<getGameListRespItem[]>([])
// 游戏分类-暂时没用
let cslist = ref<getGameListRespItem[]>([])
// 游戏列表
let dataList = ref<getGameListGsItemResp[]>([])

// 选择运营商
const selGameProvider = (id: number) => {
  showGameOption.value = true
  const index = query.ps.indexOf(id)
  if (index > -1) {
    query.ps.splice(index, 1)
  } else {
    query.ps.push(id)
  }
  query.page = 1
  dataList.value = []
  getGameList()
}

// 游戏列表排序
const sortGame = () => {
  query.page = 1
  dataList.value = []
  getGameList()
}

// 获取游戏列表
const getGameList = () => {
  getGameListApi(query)
    .then((resp) => {
      pslist.value = resp.data!.ps
      cslist.value = resp.data!.cs
      dataList.value = [...dataList.value, ...resp.data!.gs.items]
      pageCount.value = parseInt(resp.data!.gs.pages)
    })
    .catch((error) => {
      console.log(error)
    })
}

// 是否被收藏
const isFavClass = (item: getGameListGsItemResp) => {
  let css = item.fg ? 'iconfont icon-shoucang_fill' : 'iconfont icon-shoucang'
  if (appStore.detailsFav.includes(item.id)) {
    css = 'iconfont icon-shoucang_fill'
  }
  if (appStore.detailsCancelFav.includes(item.id)) {
    css = 'iconfont icon-shoucang'
  }
  return css
}

// 下拉框标题
const selectTitle = () => {
  let title = t('allProviders')
  if (query.ps.length > 0 && pslist.value.length > 0) {
    const tmp = pslist.value.find((item) => item.id == query.ps[0])
    if (tmp) {
      title = tmp.name
      if(query.ps.length > 1) {
        title += ' (' + query.ps.length +')'
      }
    }
    // query.ps.forEach(ps => {
    //   let index = pslist.value.findIndex((item) => item.id == ps)
    //   if (index != -1) {
    //     title += pslist.value[index].name + ' '
    //   }
    // })
  }
  return title
}

// 设置收藏或取消收藏
const setFav = async (gameItem: getGameListGsItemResp) => {
  if (userStore.userInfo.id == '') {
    router.push({ name: 'login' })
  } else {
    // 是否收藏
    if (gameItem.fg) {
      await cancalFavApi({ gameId: gameItem.id })
    } else {
      await setFavApi({ gameId: gameItem.id })
    }
    gameItem.fg = !gameItem.fg
    userStore.getFavCount()
  }
}

// 加载更多
const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getGameList()
  } else {
    showToast(t('noMore'))
  }
}

const scrollRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
onActivated(() => {
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollTop.value
  }
})

onDeactivated(() => {
  appStore.detailsCancelFav = []
  appStore.detailsFav = []
  if (scrollRef.value) {
    scrollTop.value = scrollRef.value.scrollTop
  }
})

// 观察路由请求参数providerId变化
watch(
  () => [route.query.providerId, route.name],
  // @ts-ignore
  ([newProviderId, newRoute], [oldProviderId, oldRoute]) => {
    if (newRoute == 'casino') {
      if (oldRoute != 'gameDetails') {
        if (newProviderId) {
          providerId.value = parseInt(newProviderId as string)
          query.page = 1
          pageCount.value = 0
          query.ps = [providerId.value]
          showGameOption.value = true
          dataList.value = []
          getGameList()
          if (scrollRef.value)
            scrollRef.value.scrollTop = 0
        } else {
          if (providerId.value) {
            providerId.value = ''
            query.page = 1
            pageCount.value = 0
            query.ps = []
            dataList.value = []
            showGameOption.value = false
            getGameList()
          }
        }
      } else {

      }
    } else {
      if (newRoute != 'gameDetails' && oldRoute == 'casino') {
        
        providerId.value = ''
        query.page = 1
        pageCount.value = 0
        query.ps = []
        dataList.value = []
        showGameOption.value = false
        getGameList()
      }
    }
  }
)

// 第一次进入列表  获取一次数据
if (route.query.providerId) {
  query.page = 1
  providerId.value = route.query.providerId as string
  query.ps = [parseInt(providerId.value)]
  showGameOption.value = true
}
getGameList()
</script>
