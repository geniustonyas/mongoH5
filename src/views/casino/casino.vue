<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
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
                    <DropdownItem title="All Game Providers" ref="currenyDom">
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
          <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item.id)">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.img}?auto=compress,format&w=200&h=152&q=20&dpr=2`" />
                <!-- <span>{{ item.pn }}</span> -->
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
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

import { getGameListApi } from '@/api/game/index'
import { getGameListRespItem, getGameListGsItemResp, getGameListData } from '@/api/game/types'
import { startGame } from '@/composables/startGame'
import { useAppStore } from '@/store/modules/app'
import { GameType } from '@/utils/constant'
import { getExchangeRate } from '@/composables/getExchangeRate'

import { showToast, ConfigProvider, DropdownMenu, DropdownItem, Icon } from 'vant'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const appStore = useAppStore()
const route = useRoute()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// 游戏列表显示or隐藏筛选条件
let showGameOption = ref(false)
// 列表显示or表格显示
let gridShow = ref(true)
// 游戏列表排序规则
const sortBy = [
  { text: t('polular'), value: 3 },
  { text: 'A-Z', value: 1 },
  { text: 'RTP', value: 2 }
]
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
  console.log(query.ps)
  console.log(index)
  if (index > -1) {
    query.ps.splice(index, 1)
  } else {
    query.ps.push(id)
  }
  console.log(query.ps)
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

// 加载更多
const loadMore = () => {
  if (query.page <= pageCount.value) {
    query.page++
    getGameList()
  } else {
    showToast(t('noMore'))
  }
}

// 观察路由请求参数providerId变化
watch(
  () => route.query.providerId,
  (val) => {
    if (val) {
      showGameOption.value = true
      query.ps = [parseInt(route.query.providerId as string)]
    } else {
      query.ps = []
    }
    getGameList()
  },
  { immediate: true }
)
</script>
