<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input id="searchInput" class="search-inputs" />
            <i class="mvfont mv-search1" />
          </div>
          <swiper
            v-if="appStore.searchInputText && keepAlive"
            @swiper="searchSwiper"
            :modules="[Autoplay]"
            :slides-per-view="1"
            :auto-height="true"
            direction="vertical"
            :centered-slides="true"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false } as any"
            :nested="true"
            class="swiper-container sb-t"
            style="line-height: 50px"
          >
            <swiper-slide v-for="item in appStore.searchInputText.split(',')" :key="item">
              <span>{{ item }}</span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="hs-c">
          <a @click="showToast('暂未开放')"><img :src="getAssetsFile('icon/vip2.svg')" /></a>
          <a @click="router.push({ name: 'history' })"><img :src="getAssetsFile('icon/ClockCircleFilled.svg')" /></a>
        </div>
      </div>
      <div v-if="appStore.isPc" class="head-menu">
        <div class="hm-a">
          <a :class="{ active: activeId === 0 }" @click="clickTabPc(0)">推荐</a>
          <a v-for="(category, index) in appStore.categorys" :key="category.d" :class="{ active: activeId === index + 1 }" @click="clickTabPc(index + 1)">
            {{ category.t }}
          </a>
        </div>
        <div class="hm-b">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
      <div v-else class="category-tabs">
        <Tabs v-model:active="activeId" class="vant-tabs" @click-tab="clickTab" title-active-color="transparent">
          <Tab title="首页" name="0" />
          <Tab v-for="category in appStore.categorys" :key="category.d" :title="category.t" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <!-- <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="swipePage" no-swiping-class="no-swipe"> -->
      <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="swipePage" :allow-touch-move="!appStore.isPc" :no-swiping="!appStore.isPc" no-swiping-class="no-swipe">
        <swiper-slide>
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="web-col">
              <nav v-if="bannerAdvertisement && bannerAdvertisement.length > 0 && keepAlive" id="index-banner" class="swiper-container">
                <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                  <swiper-slide v-for="ad in bannerAdvertisement" :key="ad.id">
                    <a target="_blank" @click="openAd(ad.targetUrl, '首页banner', 'click', ad.id)">
                      <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" @load="onImageLoad" />
                    </a>
                  </swiper-slide>
                </swiper>
              </nav>
              <div v-if="isDecrypting" class="load-box">
                <div class="lb-index-banner">
                  <div class="lb-s" />
                </div>
              </div>

              <nav class="i-m-b">
                <div class="e-row">
                  <!--<div class="er-t">热门聚集地</div>-->
                  <div class="er-c">
                    <div class="ct-a">
                      <div class="row1" @click="router.push({ name: 'hotVideo' })">
                        <div class="r-l">
                          <b>主题热榜</b>
                          <span>查看详情<i class="mvfont mv-right1" /></span>
                        </div>
                        <div class="r-r">
                          <img :src="getAssetsFile('icon/Item_hot.svg')" />
                        </div>
                      </div>
                      <div class="row2" @click="router.push({ name: 'collection' })">
                        <b>专题合集</b>
                        <span>{{ homeCollectionCount }}个合集<i class="mvfont mv-right1" /></span>
                      </div>
                    </div>
                    <swiper
                      v-if="homeCollectionItems.length > 0"
                      :modules="[Scrollbar]"
                      :slides-per-view="1"
                      :centered-slides="true"
                      :loop="true"
                      :nested="true"
                      :scrollbar="{ el: '.rf-page', draggable: true } as any"
                    >
                      <swiper-slide v-for="(groups, index) in homeCollectionItems" :key="index">
                        <div class="ct-b">
                          <span
                            v-for="(item, mindex) in groups"
                            @click="router.push({ name: 'videoList', params: { id: item.id } })"
                            :key="item.id"
                            :class="getStyleClass(mindex)"
                          >
                            {{ item.title }}
                          </span>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
                  <div class="er-f">
                    <div class="rf-page" />
                  </div>
                </div>

                <div class="f-row">
                  <div class="fr-t">
                    <div class="t-l">
                      大家都在
                      <span>玩</span>
                    </div>
                    <div class="t-r">
                      <NoticeBar
                        v-if="noticeAdvertisement && noticeAdvertisement.length > 0"
                        @click="openAd(noticeAdvertisement[0].targetUrl, '首页滚动公告', 'click', noticeAdvertisement[0].id)"
                        :text="noticeAdvertisement.length > 0 ? decodeHtmlEntities(noticeAdvertisement[0].introduction) : ''"
                        :delay="1"
                      />
                    </div>
                  </div>

                  <IconAdNew />
                </div>
              </nav>
            </div>

            <!-- 最新视频 -->
            <nav v-if="latestVideos.length > 0" class="mv-t-c">
              <div class="mc-a">
                <div class="a-l">
                  <span>最新更新</span>
                </div>
                <div class="a-r">
                  <span @click="router.push({ name: 'videoList', params: { id: 1 } })">更多<i class="mvfont mv-right" /></span>
                  <span @click="latestSwiperInstance?.slidePrev()" :class="{ un: latestSwiperInstance?.isBeginning }">
                    <i class="mvfont mv-Left3" />
                  </span>
                  <span @click="latestSwiperInstance?.slideNext()" :class="{ un: latestSwiperInstance?.isEnd }">
                    <i class="mvfont mv-right3" />
                  </span>
                </div>
              </div>
              <div class="mc-b">
                <swiper @swiper="initLatestSwiper" :modules="[Pagination]" :slides-per-view="1" class="no-swipe">
                  <swiper-slide v-for="(chunk, index) in latestVideos" :key="index">
                    <nav class="mv-t-l">
                      <div class="m-b">
                        <VideoGridItem v-for="video in chunk" :key="video.id" :video="video" @click="clickVideo(video)" />
                      </div>
                    </nav>
                  </swiper-slide>
                </swiper>
              </div>
            </nav>

            <div v-if="loadingIndexVideos" class="load-box">
              <div class="lb-mv-t-c">
                <div class="mc-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <div class="lb-s" />
                  </div>
                  <div class="a-r">
                    <div class="lb-s" />
                    <div class="lb-s" />
                  </div>
                </div>
                <div class="mc-b">
                  <div class="mv-t-l lb-mv-t-l">
                    <div class="m-b">
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="i-a">
                          <div class="lb-s" />
                        </div>
                        <div class="i-b">
                          <div class="b-a">
                            <div class="lb-s" />
                          </div>
                          <div class="b-dv">
                            <div class="p-c">
                              <div class="lb-s" />
                              <div class="lb-s" />
                            </div>
                            <div class="p-c">
                              <div class="lb-s" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <IndexAd v-if="listBannerAdvertisement[0]" :ad="listBannerAdvertisement[0]" />
            <!-- 热门推荐 -->
            <nav v-if="recommendedVideos.length > 0" class="mv-t-c">
              <div class="mc-a">
                <div class="a-l">
                  <span>热门推荐</span>
                </div>
                <div class="a-r">
                  <span @click="router.push({ name: 'videoList', params: { id: 2 } })">更多<i class="mvfont mv-right" /></span>
                  <span @click="recommendedSwiperInstance?.slidePrev()" :class="{ un: recommendedSwiperInstance?.isBeginning }">
                    <i class="mvfont mv-Left3" />
                  </span>
                  <span @click="recommendedSwiperInstance?.slideNext()" :class="{ un: recommendedSwiperInstance?.isEnd }">
                    <i class="mvfont mv-right3" />
                  </span>
                </div>
              </div>
              <div class="mc-b">
                <swiper @swiper="initRecommendedSwiper" :modules="[Pagination]" :slides-per-view="1" class="no-swipe">
                  <swiper-slide v-for="(chunk, index) in recommendedVideos" :key="index">
                    <nav class="mv-t-l">
                      <div class="m-b">
                        <VideoGridItem v-for="video in chunk" :key="video.id" :video="video" @click="clickVideo(video)" />
                      </div>
                    </nav>
                  </swiper-slide>
                </swiper>
              </div>
            </nav>

            <IndexAd v-if="listBannerAdvertisement[1]" :ad="listBannerAdvertisement[1]" />

            <template v-for="(channel, channelIndex) in channelVideos" :key="channel.label">
              <nav v-if="channel.videos.length > 0" class="mv-t-c" :key="channelIndex">
                <div class="mc-a">
                  <div class="a-l">
                    <span>{{ channel.label }}</span>
                  </div>
                  <div class="a-r">
                    <!-- <span>
                      <em v-for="(chunk, index) in channel.videos" :key="index" :class="{ active: index == channelActiveIndices[channelIndex] }" />
                    </span> -->
                    <span @click="redirectCategory(channelIndex + 1, '')">更多<i class="mvfont mv-right" /></span>
                  </div>
                </div>
                <div class="mc-b">
                  <nav class="mv-t-l">
                    <div class="m-b">
                      <VideoGridItem v-for="video in channel.videos" :key="video.id" :video="video" @click="clickVideo(video)" />
                    </div>
                    <div class="mc-c">
                      <span @click="redirectCategory(channelIndex + 1, '')">更多内容</span>
                      <span @click="refreshChannelVideos(channelIndex)">换一换</span>
                    </div>
                  </nav>
                </div>
              </nav>

              <IndexAd v-if="listBannerAdvertisement[channelIndex + 2]" :ad="listBannerAdvertisement[channelIndex + 2]" />
            </template>
          </PullRefresh>
        </swiper-slide>

        <!-- 分类 -->
        <swiper-slide v-for="category in appStore.categorys" :key="category.d">
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <!-- 分类广告 -->
            <div v-if="categoryBannerVideosMap[category.d] && categoryBannerVideosMap[category.d].length > 0 && keepAlive" class="mv-swiper">
              <swiper :modules="[Autoplay]" :slides-per-view="appStore.isPc ? 5 : 2" :centered-slides="!appStore.isPc" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                <swiper-slide v-for="video in categoryBannerVideosMap[category.d]" :key="video.id">
                  <a @click="router.push({ name: 'play', params: { id: video.id } })">
                    <img v-lazy-decrypt="video.imgUrl" :alt="video.title" />
                  </a>
                </swiper-slide>
              </swiper>
            </div>
            <div v-if="query.IsFirst" class="load-box">
              <div class="lb-mv-swiper">
                <div class="lb-s" />
                <div class="lb-s" />
                <div class="lb-s" />
              </div>
            </div>
            <IconAd />
            <!-- 分类 -->
            <section class="m-l-b">
              <nav v-if="category.s && category.s.length > 0" class="b-a no-swipe">
                <span :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')">全部</span>
                <span v-for="cates in category.s" :key="cates.d" :class="{ active: categorySubChannelId[query.ChannelId] == cates.d }" @click="selectCategory(cates.d)">
                  {{ cates.t }}
                </span>
              </nav>

              <div v-if="query.IsFirst" class="load-box">
                <div class="lb-m-l-b">
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                  <div class="lb-s" />
                </div>
              </div>

              <nav class="b-b">
                <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: categorySortType[query.ChannelId] == sort.value }" @click="changeSort(sort.value)">
                  {{ sort.label }}
                </span>
              </nav>
              <nav class="mv-t-l">
                <div v-if="loadingCategoryVideos" class="load-box">
                  <div class="lb-mv-t-c">
                    <div class="mc-a">
                      <div class="a-l">
                        <i class="mvfont mv-xietiao" />
                        <div class="lb-s" />
                      </div>
                      <div class="a-r">
                        <div class="lb-s" />
                        <div class="lb-s" />
                      </div>
                    </div>
                    <div class="mc-b">
                      <div class="mv-t-l lb-mv-t-l">
                        <div class="m-b">
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="i-a">
                              <div class="lb-s" />
                            </div>
                            <div class="i-b">
                              <div class="b-a">
                                <div class="lb-s" />
                              </div>
                              <div class="b-dv">
                                <div class="p-c">
                                  <div class="lb-s" />
                                  <div class="lb-s" />
                                </div>
                                <div class="p-c">
                                  <div class="lb-s" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-b" v-if="categoryVideosMap[category.d]">
                  <VideoGridItem v-for="(video, index) in categoryVideosMap[category.d]" :key="index" :video="video" @click="clickVideo(video)" />
                </div>

                <template v-if="categoryTotalPages[category.d] > 1 && categoryVideosMap[category.d].length > 0">
                  <div class="au-pagination-box" v-if="appStore.isPc || (!appStore.isPc && categoryTotalPages[category.d] > 9)">
                    <div class="pb-x">
                      <a @click="changePage(categoryPageIndex[category.d] - 1)" :class="{ disabled: categoryPageIndex[category.d] == 1 }">上一页</a>
                    </div>
                    <div class="pb-x">
                      <input v-model="categoryPageIndex[category.d]" @change="handlePageChange" type="number" min="1" :max="categoryTotalPages[category.d]" />
                      <span>/ {{ categoryTotalPages[category.d] }}</span>
                    </div>
                    <div class="pb-x">
                      <a @click="changePage(categoryPageIndex[category.d] + 1)" :class="{ disabled: categoryPageIndex[category.d] == categoryTotalPages[category.d] }">下一页</a>
                    </div>
                  </div>
                  <div v-else class="more-box"><a v-if="categoryPageIndex[category.d] < categoryTotalPages[category.d]" @click="loadMore">加载更多</a></div>
                </template>
              </nav>
            </section>
          </PullRefresh>
        </swiper-slide>
      </swiper>
      <!-- 首页弹窗 安卓弹窗 -->
      <Popup v-model:show="showPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a @click="openAd(currentPopAd.targetUrl, '首页弹窗', 'click', currentPopAd.id, 1, '', currentPopAd)"><img :src="currentPopAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closePopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
      <!-- 首页弹窗 苹果弹窗 -->
      <Popup v-model:show="showIosPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a @click="openAd(currentIosPopAd.targetUrl, '首页弹窗', 'click', currentIosPopAd.id, 1, '', currentIosPopAd)"><img :src="currentIosPopAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closeIosPopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
      <!-- 首页广告 -->
      <Popup v-model:show="showAdPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a @click="openAd(currentAd.targetUrl, '首页广告', 'click', currentAd.id, 1, '', currentAd)"><img :src="currentAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closeAdPopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
    </main>
    <Footer active-menu="index" />
    <NavBar active-menu="index" />
    <Suggestion v-model:show-btn="showSuggestion" v-model:show-popup="showSuggestionPopup" />
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, nextTick, computed, watch, onMounted, onActivated, onDeactivated } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import NavBar from '@/components/layout/NavBar.vue'
  import Suggestion from '@/components/Suggestion.vue'
  import IconAd from '@/components/Advertisement/IconAd.vue'
  import IconAdNew from '@/components/Advertisement/IconAdNew.vue'
  import { getIndexVideoListApi, getVideoListApi } from '@/api/video'
  import { getHomeCollectionCountApi } from '@/api/collection'
  import { PullRefresh, Popup, Icon, Tabs, Tab, NoticeBar, showToast } from 'vant'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { useAppStoreHook } from '@/store/app'
  import type { VideoListRequest, Video } from '@/types/video'
  import type { DataWithAd } from '@/types/global.d'
  import { getAssetsFile, openAd, decodeHtmlEntities, chunkArray, shuffleArray, insertAds } from '@/utils'
  import { Autoplay, Pagination, Scrollbar } from 'swiper/modules'
  import { dashen, madou, indexCategory } from '@/utils/cryptedData'
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'
  import 'swiper/css/free-mode'

  import Footer from '@/components/layout/Footer.vue'
  import VideoGridItem from '@/components/VideoGridItem.vue'
  import IndexAd from '@/components/Advertisement/indexAd.vue'
  import decryptionService from '@/utils/decryptionService'

  const router = useRouter()
  const route = useRoute()
  const appStore = useAppStoreHook()
  const decrypted = new decryptionService()

  const homeCollectionCount = ref(0)
  const homeCollectionItems = ref<{ id: string; title: string }[][]>([])

  const showSuggestion = ref(true)
  const showSuggestionPopup = ref(false)
  const keepAlive = ref(true)
  const swiperInstance = ref<any>(null)
  const searchSwiperInstance = ref<any>(null)

  const refreshing = ref(false)
  const isRedirectCategory = ref(false)

  const activeId = ref(0)
  const recommendedVideos = ref<Video[][]>([])
  const latestVideos = ref<Video[][]>([])
  const channelVideos = ref<{ label: string; value: string; videos: Video[] }[]>([])

  const categoryVideosMap = ref({})
  const categoryBannerVideosMap = ref({})
  const categoryTotalPages = ref({})
  const categoryPageIndex = ref({})
  const categorySortType = ref({})
  const categorySubChannelId = ref({})

  const sortOptions = [
    { label: '按最新', value: 1 },
    { label: '按最热', value: 2 },
    { label: '按好评', value: 3 }
  ]

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }

  const searchSwiper = (swiper: any) => {
    searchSwiperInstance.value = swiper
  }

  const query = reactive<VideoListRequest>({
    ChannelId: '',
    SubChannelId: '',
    SortType: 2,
    IsFirst: true,
    PageIndex: 1,
    PageSize: 20
  })

  const showPopup = ref(false)
  const showIosPopup = ref(false)
  const showAdPopup = ref(false)
  const currentPopAdIndex = ref(0)
  const currentIosPopAdIndex = ref(0)
  const currentAdIndex = ref(0)
  const bannerAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(2).items
    return tmp || []
  })

  // 谈窗框广告图片先解密, 不使用懒加载
  const decryptedPopAds = ref([])
  const decryptAdvertisements = async () => {
    const tmp = appStore.getAdvertisementById(3).items || []
    decryptedPopAds.value = await Promise.all(
      tmp.map(async ad => {
        if (ad.imgUrl) {
          const tmp = await decrypted.fetchAndDecrypt(appStore.cdnUrl + ad.imgUrl)
          ad.imgUrl = URL.createObjectURL(tmp)
        }
        return ad
      })
    )
  }

  const popAdvertisement = computed(() => {
    return decryptedPopAds.value.filter(ad => ad.introduction == 2)
  })

  const iosPopAdvertisement = computed(() => {
    return decryptedPopAds.value.filter(ad => ad.introduction == 1)
  })

  const adPopupAdvertisement = computed(() => {
    return decryptedPopAds.value.filter(ad => ad.introduction == 3)
  })

  const listBannerAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(19).items
    if (tmp && tmp.length > 0) {
      return shuffleArray<{ targetUrl: string; id: string; imgUrl: string; title: string }>(tmp)
    }
    return []
  })

  const noticeAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(17).items
    console.log(tmp)
    return tmp || []
  })

  const getStyleClass = (index: number) => {
    const styles = ['sc1', 'sc2', 'sc3', 'sc4', 'sc5']
    return (index + 1) % 3 === 0 ? styles[Math.floor(index / 3) % styles.length] : ''
  }

  // 获取视屏列表广告
  const videoListAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(28).items
    return tmp || []
  })

  const currentPopAd = computed(() => {
    var item = popAdvertisement.value[currentPopAdIndex.value]
    return item || {}
  })

  const currentIosPopAd = computed(() => {
    var item = iosPopAdvertisement.value[currentIosPopAdIndex.value]
    return item || {}
  })

  const currentAd = computed(() => {
    var item = adPopupAdvertisement.value[currentAdIndex.value]
    return item || {}
  })

  // 监听邀请码
  watch(
    () => route.query.inviteCode,
    newVal => {
      if (newVal) {
        localStorage.setItem('inviteCode', newVal as string)
      }
    },
    { immediate: true }
  )

  watch(
    popAdvertisement,
    newVal => {
      if (newVal.length > 0) {
        const nu = localStorage.getItem('nu')
        const isIOS = /iPad|iPhone|iPod|IOS|Ios/.test(navigator.userAgent)
        if (!isIOS) {
          if ((nu && nu != 'a1') || !nu) {
            showPopup.value = true
          } else {
            if (adPopupAdvertisement.value.length > 0) {
              showAdPopup.value = true
            }
          }
        }
      }
    },
    { immediate: true }
  )

  watch(
    iosPopAdvertisement,
    newVal => {
      if (newVal.length > 0) {
        const nu = localStorage.getItem('nu')
        const isIOS = /iPad|iPhone|iPod|IOS|Ios/.test(navigator.userAgent)
        if (isIOS) {
          if ((nu && nu != 'a3') || !nu) {
            showIosPopup.value = true
          } else {
            if (adPopupAdvertisement.value.length > 0) {
              showAdPopup.value = true
            }
          }
        }
      }
    },
    { immediate: true }
  )

  const closePopup = () => {
    if (currentPopAdIndex.value < popAdvertisement.value.length - 1) {
      currentPopAdIndex.value++
      showPopup.value = true
    } else {
      showPopup.value = false
      if (adPopupAdvertisement.value.length > 0) {
        showAdPopup.value = true
      }
      appStore.hasShownAnnouncement = false
    }
  }

  const closeIosPopup = () => {
    if (currentIosPopAdIndex.value < iosPopAdvertisement.value.length - 1) {
      currentIosPopAdIndex.value++
      showIosPopup.value = true
    } else {
      showIosPopup.value = false
      if (adPopupAdvertisement.value.length > 0) {
        showAdPopup.value = true
      }
      appStore.hasShownAnnouncement = false
    }
  }

  const closeAdPopup = () => {
    showAdPopup.value = false
  }

  const getHomeCollection = async () => {
    try {
      const {
        data: { data }
      } = await getHomeCollectionCountApi()
      homeCollectionCount.value = parseInt(data.count)
      homeCollectionItems.value = chunkArray(data.items, 15)
    } catch (error) {
      console.error(`获取首页合集失败:`, error)
    }
  }

  const loadingCategoryVideos = ref(false)
  const fetchVideos = async (params: VideoListRequest, loadMore = false) => {
    loadingCategoryVideos.value = true
    const currentChannelId = params.ChannelId // 保存当前的 ChannelId
    const isFirst = params.IsFirst
    try {
      const {
        data: { data }
      } = await getVideoListApi(params)
      if (data && Array.isArray(data.items)) {
        const videos = insertAds(data.items, videoListAdvertisement.value, 5, 7, true)
        if (loadMore) {
          categoryVideosMap.value[currentChannelId] = categoryVideosMap.value[currentChannelId].concat(videos)
        } else {
          categoryVideosMap.value[currentChannelId] = videos
        }
        if (isFirst) {
          categoryBannerVideosMap.value[currentChannelId] = data.newVideos
        }
        query.IsFirst = false
        categoryTotalPages.value[currentChannelId] = parseInt(data.pageCount)
        categoryPageIndex.value[currentChannelId] = parseInt(data.pageIndex)
        nextTick(() => {
          swiperInstance.value.updateAutoHeight()
        })
      } else {
        console.error('响应数据结构不正确')
        return []
      }
    } catch (error) {
      console.error(`获取视频列表失败:`, error)
      return []
    } finally {
      loadingCategoryVideos.value = false
    }
  }

  const latestSwiperInstance = ref<any>(null)
  const recommendedSwiperInstance = ref<any>(null)

  const initLatestSwiper = (swiper: any) => {
    latestSwiperInstance.value = swiper
    console.log('aa:', latestSwiperInstance.value)
  }

  const initRecommendedSwiper = (swiper: any) => {
    recommendedSwiperInstance.value = swiper
    console.log('bb:', recommendedSwiperInstance.value)
  }

  // const onChannelSlideChange = (index: number, swiper: any) => {
  //   channelActiveIndices.value[index] = swiper.activeIndex
  // }

  const loadingIndexVideos = ref(false)
  const fetchIndexVideos = async () => {
    loadingIndexVideos.value = true
    try {
      const {
        data: { data }
      } = await getIndexVideoListApi()
      // 解密视频
      // recommendedVideos.value = data.Recommended
      // latestVideos.value = data.Latest
      const recommendedVideAds = insertAds(data.Recommended, videoListAdvertisement.value, 5, 6, false)
      recommendedVideos.value = chunkArray(recommendedVideAds, 6).slice(0, 4)
      const latestVideAds = insertAds(data.Latest, videoListAdvertisement.value, 5, 6, false)
      latestVideos.value = chunkArray(latestVideAds, 6).slice(0, 4)

      // 合并 indexCategory 和 Channels 数据
      if (data.Channels && data.Channels.length > 0) {
        channelVideos.value = indexCategory.map(category => {
          const channel = data.Channels.find(ch => ch.channel == category.value.toString())
          if (channel && channel.items) {
            channel.items = insertAds(channel.items, videoListAdvertisement.value, 5, 7, false)
            channel.items = channel.items.slice(0, 6)
          }
          return {
            label: category.label,
            value: category.value,
            videos: channel ? channel.items : []
          }
        })
      }
    } catch (error) {
      console.error(`获取首页视频列表失败:`, error)
      return []
    } finally {
      loadingIndexVideos.value = false
    }
  }

  // 选择二级分类
  const selectCategory = async (categoryId: string | number) => {
    query.PageIndex = 1
    query.SubChannelId = categoryId
    categoryPageIndex.value[query.ChannelId] = query.PageIndex
    categorySortType.value[query.ChannelId] = query.SortType
    categorySubChannelId.value[query.ChannelId] = query.SubChannelId
    categoryVideosMap.value[query.ChannelId] = []
    query.IsFirst = false
    await fetchVideos(query)
  }

  // 切换页码
  const changePage = async (newPage: number) => {
    if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
      categoryPageIndex.value[query.ChannelId] = newPage
      query.PageIndex = newPage
      query.IsFirst = false
      categoryVideosMap.value[query.ChannelId] = []
      await fetchVideos(query)
      // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  }

  // 加载更多
  const loadMore = async () => {
    const newPage = query.PageIndex + 1
    if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
      query.PageIndex = newPage
      query.IsFirst = false
      await fetchVideos(query, true)
    }
  }

  // PC端方法来切换 tab
  const clickTabPc = (index: number) => {
    activeId.value = index
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(index, 0)
    }
  }

  // 点击tab滑动到对应分类, 并重新获取数据
  const clickTab = () => {
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(activeId.value, 0)
    }
  }

  const clickVideo = (video: DataWithAd<Video>) => {
    if (video.isAd) {
      openAd(video.targetUrl, '视频列表广告', 'click', video.title, 1, video.id)
    } else {
      router.push({ name: 'play', params: { id: video.id } })
    }
  }

  // 切换分类
  const handleCategoryChange = async (isRefresh = false) => {
    query.PageIndex = 1
    categoryPageIndex.value[query.ChannelId] = 1
    if (isRefresh) {
      refreshing.value = true
    }
    if (activeId.value == 0) {
      await fetchIndexVideos()
      refreshing.value = false
    } else {
      query.IsFirst = true
      await fetchVideos(query)
      refreshing.value = false
    }
  }

  const swipePage = (swiper: any) => {
    activeId.value = swiper.activeIndex
    query.ChannelId = activeId.value == 0 ? '' : appStore.categorys[activeId.value - 1].d
    // 如果没有数据。则重新获取数据
    if (categoryVideosMap.value[query.ChannelId] == undefined) {
      query.PageIndex = 1
      query.SortType = 1
      categoryPageIndex.value[query.ChannelId] = 1
      if (isRedirectCategory.value) {
        categoryPageIndex.value[query.ChannelId] = query.PageIndex
        categorySortType.value[query.ChannelId] = query.SortType
        categorySubChannelId.value[query.ChannelId] = query.SubChannelId
      } else {
        query.SubChannelId = ''
        // categorySubChannelId.value[query.ChannelId] = query.SubChannelId
      }
      categorySortType.value[query.ChannelId] = query.SortType
      handleCategoryChange()
    } else {
      // 如果有数据, 则切换到对应分类, 获取数据
      if (isRedirectCategory.value) {
        categorySubChannelId.value[query.ChannelId] = query.SubChannelId
      }
      selectCategory(categorySubChannelId.value[query.ChannelId])
    }
    isRedirectCategory.value = false
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  }

  // 打开到指定的顶级分类和二级分类
  const redirectCategory = (channelId: number, subChannelId: number | string) => {
    isRedirectCategory.value = true
    query.SubChannelId = subChannelId
    clickTabPc(channelId)
  }

  // 分类页切换排序
  const changeSort = async sortValue => {
    query.SortType = sortValue
    query.PageIndex = 1
    categoryPageIndex.value[query.ChannelId] = 1
    categorySortType.value[query.ChannelId] = query.SortType
    categoryVideosMap.value[query.ChannelId] = []
    await fetchVideos(query)
  }

  // 页码变化
  const handlePageChange = async () => {
    if (categoryPageIndex.value[query.ChannelId] >= 1 && categoryPageIndex.value[query.ChannelId] <= categoryTotalPages.value[query.ChannelId]) {
      query.PageIndex = categoryPageIndex.value[query.ChannelId]
      await fetchVideos(query)

      // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
      window.scrollTo(0, 0)
    }
  }

  const isDecrypting = ref(true)
  const onImageLoad = () => {
    isDecrypting.value = false
  }

  // 立即执行
  ;(async () => {
    await handleCategoryChange()
    await getHomeCollection()
    if (appStore.advertisement.length == 0) {
      await appStore.fetAdvertisement()
    }
  })()

  // const openDownloadPage = () => {
  //   if (appStore.isPc) {
  //     window.open('https://mg14.cc/', '_blank')
  //   } else {
  //     const ua = navigator.userAgent
  //     if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
  //       window.open(appStore.iosDownloadUrl, '_blank')
  //     } else {
  //       window.open(appStore.androidDownloadUrl, '_blank')
  //     }
  //   }
  // }

  onActivated(() => {
    // 进入页面后重新渲染swiper, 避免出现keep-alive后swiper不自动轮播
    keepAlive.value = true
    window.scrollTo(0, 0)
    if (swiperInstance.value) {
      swiperInstance.value.updateAutoHeight()
    }
  })

  onDeactivated(() => {
    keepAlive.value = false
  })

  onMounted(() => {
    decryptAdvertisements()
  })

  // 添加一个记录每个频道当前页码的对象
  const channelPageIndexMap = ref<Record<string, number>>({})

  // 添加换一换方法
  const refreshChannelVideos = async (channelIndex: number) => {
    const channel = channelVideos.value[channelIndex]
    if (!channel) return

    // 获取或初始化当前页码
    if (!channelPageIndexMap.value[channel.value]) {
      channelPageIndexMap.value[channel.value] = 1
    }
    try {
      const {
        data: { data }
      } = await getVideoListApi({
        ChannelId: channel.value,
        SubChannelId: '',
        SortType: 1,
        PageIndex: channelPageIndexMap.value[channel.value] + 1,
        PageSize: videoListAdvertisement.value > 0 ? 5 : 6,
        IsFirst: false
      })

      if (data && data.items) {
        if (data.items.length > 0) {
          if (videoListAdvertisement.value > 0) {
            data.items = insertAds(data.items, videoListAdvertisement.value, 5, 7)
          }

          channelVideos.value[channelIndex].videos = data.items
          channelPageIndexMap.value[channel.value]++
        } else {
          // 如果没有更多数据，重置到第一页
          channelPageIndexMap.value[channel.value] = 1
          const {
            data: { data: firstPageData }
          } = await getVideoListApi({
            ChannelId: channel.value,
            SubChannelId: '',
            SortType: 1,
            PageIndex: 1,
            PageSize: 6,
            IsFirst: false
          })
          if (firstPageData && firstPageData.items) {
            channelVideos.value[channelIndex].videos = firstPageData.items
          }
        }
      }
    } catch (error) {
      console.error('获取视频列表失败:', error)
    }
  }
</script>
