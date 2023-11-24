<template>
  <div class="page">
    <CommonHeader :title="t('club')" />
    <main class="main">
      <div class="clubhouse-box">
        <!-- <div class="cb_tips" v-show="showTips">
          <i class="iconfont icon-guanyuwomen" />
          <span>{{ t('clubTips') }}</span>
          <i class="iconfont icon-close" @click="showTips = false" />
        </div> -->
        <div v-if="vipList.length > 0" class="cb-card">
          <div class="c-name">
            {{ t('tiers') }}
            <b>{{ currentData.vipName }}</b>
          </div>
          <div class="c-icon">
            <Circle v-model:current-rate="currentRate" :rate="progressWidth(nextSubItem.requiredTotalBetAmount)" :speed="100" size="125px" :stroke-width="30" layer-color="#333" color="#f7cc00" />
            <div class="cricle_img">
              <img :src="getAssetsFile(`grade/${currentData.vipCode}.png`)" />
            </div>
          </div>
          <div class="c_points">
            <b>{{ currentData.totalBetAmount }}<em>|</em>{{ nextSubItem.requiredTotalBetAmount }}</b>
            {{ t('currentPoints') }}
          </div>
          <div class="c-grade">
            <div class="cg-t">
              <a v-for="(item, index) of vipList" :key="index" :class="currentData.vipCode == item.code ? 'on cur' : currentData.vipCode > item.code ? 'on' : ''">
                <img :src="getAssetsFile(`grade/${item.code}.png`)" />
                <span v-if="currentData.vipCode == item.code" class="tag-complete"><i class="iconfont icon-xuanzhong" /></span>
              </a>
            </div>
            <div class="cg-b">
              <div class="b-l">{{ t('currentPointsMultiplier') }}</div>
              <div class="b-r">
                <b>{{ parseFloat(currentItem.integral) }} x</b>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M20.9101 12.61L21.2401 12.04C21.5792 11.4588 21.7579 10.7979 21.7579 10.125C21.7579 9.45208 21.5792 8.79123 21.2401 8.21L17.8401 2.39C17.5063 1.81579 17.0277 1.33911 16.4522 1.00749C15.8767 0.67587 15.2243 0.500892 14.5601 0.5H7.70012C7.03461 0.501149 6.38094 0.676144 5.80388 1.00765C5.22681 1.33916 4.74636 1.81568 4.41012 2.39L1.00012 8.21C0.668452 8.78648 0.493896 9.43992 0.493896 10.105C0.493896 10.7701 0.668452 11.4235 1.00012 12L4.39012 17.82C4.723 18.4047 5.20441 18.8911 5.78564 19.23C6.36687 19.5689 7.0273 19.7483 7.70012 19.75H12.2601"
                      stroke="#f7cc00"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24.4102 18.73C24.7602 19.1 23.9902 19.73 23.4102 19.3C23.4102 19.3 20.2902 16.9 19.8002 16.9C19.3102 16.9 16.2002 19.3 16.2002 19.3C15.6002 19.77 14.8302 19.1 15.2002 18.73C15.2002 18.73 19.3502 14.38 19.8302 14.38C20.3102 14.38 24.4102 18.73 24.4102 18.73Z"
                      fill="#f7cc00"
                    />
                    <path
                      d="M19.7801 20C20.5484 20.2541 21.2759 20.6178 21.9401 21.08C22.3501 21.36 22.9401 20.74 22.6101 20.45C22.6101 20.45 20.1701 17.79 19.7801 17.79C19.3901 17.79 17.0001 20.42 17.0001 20.42C16.7101 20.71 17.2701 21.33 17.6701 21.05C18.3217 20.6045 19.0318 20.2511 19.7801 20Z"
                      fill="#f7cc00"
                    />
                    <path d="M13.5 8.30999V9.86999H13.8C14.19 9.86999 14.8 9.76999 14.8 9.02999C14.8 8.28999 13.84 8.26999 13.5 8.30999Z" fill="#f7cc00" />
                    <path
                      d="M19.5102 9.71L15.6802 3.33C15.6086 3.20801 15.5063 3.1069 15.3835 3.03672C15.2607 2.96654 15.1216 2.92975 14.9802 2.93H7.27018C7.13002 2.92947 6.99225 2.96624 6.871 3.03653C6.74974 3.10682 6.64937 3.20811 6.58018 3.33L2.75018 9.71C2.67206 9.83432 2.63062 9.97817 2.63062 10.125C2.63062 10.2718 2.67206 10.4157 2.75018 10.54L6.58018 16.92C6.64937 17.0419 6.74974 17.1432 6.871 17.2135C6.99225 17.2838 7.13002 17.3205 7.27018 17.32H13.4202L19.5102 10.54C19.584 10.4142 19.6229 10.2709 19.6229 10.125C19.6229 9.9791 19.584 9.83584 19.5102 9.71ZM10.5902 13.24C10.4577 13.2412 10.3276 13.2052 10.2145 13.1363C10.1014 13.0674 10.0099 12.9682 9.95018 12.85L9.48018 12L9.10018 11.3C9.00018 11.51 8.89018 11.73 8.75018 12L8.32018 12.84C8.26162 12.9628 8.16949 13.0664 8.05446 13.139C7.93942 13.2115 7.80619 13.25 7.67018 13.25H6.43018L8.00018 10.5C8.06416 10.3872 8.0978 10.2597 8.0978 10.13C8.0978 10.0003 8.06416 9.87282 8.00018 9.76L6.49018 7.11H7.75018C7.88362 7.11036 8.01448 7.1468 8.12891 7.21545C8.24333 7.28411 8.33707 7.38242 8.40018 7.5L8.87018 8.39C8.97018 8.6 9.07018 8.78 9.15018 8.96C9.24018 8.78 9.32018 8.6 9.43018 8.4L9.89018 7.5C9.95329 7.38242 10.047 7.28411 10.1615 7.21545C10.2759 7.1468 10.4067 7.11036 10.5402 7.11H11.8002L10.2302 9.73C10.1613 9.84294 10.1248 9.97269 10.1248 10.105C10.1248 10.2373 10.1613 10.3671 10.2302 10.48L11.8602 13.24H10.5902ZM15.7502 10.45C15.2144 10.9225 14.5132 11.1634 13.8002 11.12H13.5002V12.5C13.5002 12.5959 13.4813 12.6908 13.4446 12.7794C13.4079 12.8679 13.3542 12.9484 13.2864 13.0162C13.2186 13.084 13.1381 13.1377 13.0495 13.1744C12.961 13.2111 12.866 13.23 12.7702 13.23C12.6743 13.23 12.5794 13.2111 12.4908 13.1744C12.4023 13.1377 12.3218 13.084 12.254 13.0162C12.1862 12.9484 12.1324 12.8679 12.0957 12.7794C12.0591 12.6908 12.0402 12.5959 12.0402 12.5V7.21H12.2202C12.7593 7.125 13.3045 7.08487 13.8502 7.09C14.4994 7.04163 15.1445 7.22597 15.6702 7.61C15.8695 7.78227 16.0291 7.99578 16.1379 8.23578C16.2467 8.47577 16.302 8.73651 16.3002 9C16.3097 9.26613 16.2659 9.53148 16.1714 9.78048C16.077 10.0295 15.9338 10.2571 15.7502 10.45Z"
                      fill="#f7cc00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0"><rect width="24.5" height="21.12" fill="white" /></clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="cb-list">
          <div class="l-title">{{ t('rewards') }}</div>
          <div v-if="showSubItem != null" class="l-rows">
            <div v-for="(item, index) of vipList" :key="index" class="r-item">
              <div class="ri-t" @click="showSubItem[item.code] = !showSubItem[item.code]">
                <div class="t-l">
                  <img :src="getAssetsFile(`grade/${item.code}.png`)" />
                  <span>
                    <label>{{ t('tiers') }}</label>
                    <b>{{ item.name }}</b>
                  </span>
                </div>
                <div class="t-r">
                  <i class="iconfont icon-down" />
                </div>
              </div>
              <!-- // @ts-ignore -->
              <Vue3SlideUpDown v-model="showSubItem[item.code]" class="ri-b">
                <!-- 如果是钻石VIP等级， 则必须达到钻石等级后才可以查看奖励 -->
                <div v-if="currentData.vipCode != '107' && item.code == '107'" class="row">
                  <div class="r-l">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path
                          d="M20.9101 12.61L21.2401 12.04C21.5792 11.4588 21.7579 10.7979 21.7579 10.125C21.7579 9.45208 21.5792 8.79123 21.2401 8.21L17.8401 2.39C17.5063 1.81579 17.0277 1.33911 16.4522 1.00749C15.8767 0.67587 15.2243 0.500892 14.5601 0.5H7.70012C7.03461 0.501149 6.38094 0.676144 5.80388 1.00765C5.22681 1.33916 4.74636 1.81568 4.41012 2.39L1.00012 8.21C0.668452 8.78648 0.493896 9.43992 0.493896 10.105C0.493896 10.7701 0.668452 11.4235 1.00012 12L4.39012 17.82C4.723 18.4047 5.20441 18.8911 5.78564 19.23C6.36687 19.5689 7.0273 19.7483 7.70012 19.75H12.2601"
                          stroke="#f7cc00"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M24.4102 18.73C24.7602 19.1 23.9902 19.73 23.4102 19.3C23.4102 19.3 20.2902 16.9 19.8002 16.9C19.3102 16.9 16.2002 19.3 16.2002 19.3C15.6002 19.77 14.8302 19.1 15.2002 18.73C15.2002 18.73 19.3502 14.38 19.8302 14.38C20.3102 14.38 24.4102 18.73 24.4102 18.73Z"
                          fill="#f7cc00"
                        />
                        <path
                          d="M19.7801 20C20.5484 20.2541 21.2759 20.6178 21.9401 21.08C22.3501 21.36 22.9401 20.74 22.6101 20.45C22.6101 20.45 20.1701 17.79 19.7801 17.79C19.3901 17.79 17.0001 20.42 17.0001 20.42C16.7101 20.71 17.2701 21.33 17.6701 21.05C18.3217 20.6045 19.0318 20.2511 19.7801 20Z"
                          fill="#f7cc00"
                        />
                        <path d="M13.5 8.30999V9.86999H13.8C14.19 9.86999 14.8 9.76999 14.8 9.02999C14.8 8.28999 13.84 8.26999 13.5 8.30999Z" fill="#f7cc00" />
                        <path
                          d="M19.5102 9.71L15.6802 3.33C15.6086 3.20801 15.5063 3.1069 15.3835 3.03672C15.2607 2.96654 15.1216 2.92975 14.9802 2.93H7.27018C7.13002 2.92947 6.99225 2.96624 6.871 3.03653C6.74974 3.10682 6.64937 3.20811 6.58018 3.33L2.75018 9.71C2.67206 9.83432 2.63062 9.97817 2.63062 10.125C2.63062 10.2718 2.67206 10.4157 2.75018 10.54L6.58018 16.92C6.64937 17.0419 6.74974 17.1432 6.871 17.2135C6.99225 17.2838 7.13002 17.3205 7.27018 17.32H13.4202L19.5102 10.54C19.584 10.4142 19.6229 10.2709 19.6229 10.125C19.6229 9.9791 19.584 9.83584 19.5102 9.71ZM10.5902 13.24C10.4577 13.2412 10.3276 13.2052 10.2145 13.1363C10.1014 13.0674 10.0099 12.9682 9.95018 12.85L9.48018 12L9.10018 11.3C9.00018 11.51 8.89018 11.73 8.75018 12L8.32018 12.84C8.26162 12.9628 8.16949 13.0664 8.05446 13.139C7.93942 13.2115 7.80619 13.25 7.67018 13.25H6.43018L8.00018 10.5C8.06416 10.3872 8.0978 10.2597 8.0978 10.13C8.0978 10.0003 8.06416 9.87282 8.00018 9.76L6.49018 7.11H7.75018C7.88362 7.11036 8.01448 7.1468 8.12891 7.21545C8.24333 7.28411 8.33707 7.38242 8.40018 7.5L8.87018 8.39C8.97018 8.6 9.07018 8.78 9.15018 8.96C9.24018 8.78 9.32018 8.6 9.43018 8.4L9.89018 7.5C9.95329 7.38242 10.047 7.28411 10.1615 7.21545C10.2759 7.1468 10.4067 7.11036 10.5402 7.11H11.8002L10.2302 9.73C10.1613 9.84294 10.1248 9.97269 10.1248 10.105C10.1248 10.2373 10.1613 10.3671 10.2302 10.48L11.8602 13.24H10.5902ZM15.7502 10.45C15.2144 10.9225 14.5132 11.1634 13.8002 11.12H13.5002V12.5C13.5002 12.5959 13.4813 12.6908 13.4446 12.7794C13.4079 12.8679 13.3542 12.9484 13.2864 13.0162C13.2186 13.084 13.1381 13.1377 13.0495 13.1744C12.961 13.2111 12.866 13.23 12.7702 13.23C12.6743 13.23 12.5794 13.2111 12.4908 13.1744C12.4023 13.1377 12.3218 13.084 12.254 13.0162C12.1862 12.9484 12.1324 12.8679 12.0957 12.7794C12.0591 12.6908 12.0402 12.5959 12.0402 12.5V7.21H12.2202C12.7593 7.125 13.3045 7.08487 13.8502 7.09C14.4994 7.04163 15.1445 7.22597 15.6702 7.61C15.8695 7.78227 16.0291 7.99578 16.1379 8.23578C16.2467 8.47577 16.302 8.73651 16.3002 9C16.3097 9.26613 16.2659 9.53148 16.1714 9.78048C16.077 10.0295 15.9338 10.2571 15.7502 10.45Z"
                          fill="#f7cc00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0"><rect width="24.5" height="21.12" fill="white" /></clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="r-r">
                    <p>{{ t('dymondReward') }}</p>
                  </div>
                </div>
                <template v-else>
                  <div v-if="item.items.length > 0" class="reward-items-box">
                    <div v-for="(items, indexs) of item.items" class="items" :key="indexs">
                      <div class="items-l">
                        <div class="itemsl-img">
                          <img :src="getAssetsFile(`grade/${item.code}.png`)" />
                        </div>
                      </div>
                      <!-- 奖励进度 -->
                      <div v-if="items.receivedStatus == '0' && !items.isMerge && !items.isReceived" class="items-r">
                        <div class="itemsr-t">
                          <span class="item-ti">{{ items.name }}</span>
                        </div>
                        <div class="itemsr-b">
                          <div class="schedule-bar">
                            <template v-if="nextSubItem.code == items.code">
                              <div class="sb-line" :style="{ width: progressWidth(nextSubItem.requiredTotalBetAmount) + '%' }" />
                              <span>{{ currentData.totalBetAmount + ' / ' + parseInt(items.requiredTotalBetAmount) }}</span>
                            </template>
                            <span v-else>{{ parseInt(items.requiredTotalBetAmount) }}</span>
                          </div>
                        </div>
                      </div>
                      <!-- 已领取 -->
                      <!-- ="items.receivedStatus == '0' && !items.isMerge && items.isReceived"  -->
                      <div v-else class="items-r completed">
                        <div class="cmpld-l">{{ items.name }}</div>
                        <div class="cmpld-r">
                          <a v-if="items.receivedStatus == '1' && !items.isMerge && !items.isReceived" class="btn btn-primary" @click="receiveReward(items.code)">{{ t('receiveReward') }}</a>
                          <span v-if="items.isMerge">{{ t('mergedReards') }}</span>
                          <span v-if="items.isReceived">{{ t('alreadyReceived') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="row">
                    <div class="r-l">
                      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path
                            d="M20.9101 12.61L21.2401 12.04C21.5792 11.4588 21.7579 10.7979 21.7579 10.125C21.7579 9.45208 21.5792 8.79123 21.2401 8.21L17.8401 2.39C17.5063 1.81579 17.0277 1.33911 16.4522 1.00749C15.8767 0.67587 15.2243 0.500892 14.5601 0.5H7.70012C7.03461 0.501149 6.38094 0.676144 5.80388 1.00765C5.22681 1.33916 4.74636 1.81568 4.41012 2.39L1.00012 8.21C0.668452 8.78648 0.493896 9.43992 0.493896 10.105C0.493896 10.7701 0.668452 11.4235 1.00012 12L4.39012 17.82C4.723 18.4047 5.20441 18.8911 5.78564 19.23C6.36687 19.5689 7.0273 19.7483 7.70012 19.75H12.2601"
                            stroke="#f7cc00"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                          <path
                            d="M24.4102 18.73C24.7602 19.1 23.9902 19.73 23.4102 19.3C23.4102 19.3 20.2902 16.9 19.8002 16.9C19.3102 16.9 16.2002 19.3 16.2002 19.3C15.6002 19.77 14.8302 19.1 15.2002 18.73C15.2002 18.73 19.3502 14.38 19.8302 14.38C20.3102 14.38 24.4102 18.73 24.4102 18.73Z"
                            fill="#f7cc00"
                          />
                          <path
                            d="M19.7801 20C20.5484 20.2541 21.2759 20.6178 21.9401 21.08C22.3501 21.36 22.9401 20.74 22.6101 20.45C22.6101 20.45 20.1701 17.79 19.7801 17.79C19.3901 17.79 17.0001 20.42 17.0001 20.42C16.7101 20.71 17.2701 21.33 17.6701 21.05C18.3217 20.6045 19.0318 20.2511 19.7801 20Z"
                            fill="#f7cc00"
                          />
                          <path d="M13.5 8.30999V9.86999H13.8C14.19 9.86999 14.8 9.76999 14.8 9.02999C14.8 8.28999 13.84 8.26999 13.5 8.30999Z" fill="#f7cc00" />
                          <path
                            d="M19.5102 9.71L15.6802 3.33C15.6086 3.20801 15.5063 3.1069 15.3835 3.03672C15.2607 2.96654 15.1216 2.92975 14.9802 2.93H7.27018C7.13002 2.92947 6.99225 2.96624 6.871 3.03653C6.74974 3.10682 6.64937 3.20811 6.58018 3.33L2.75018 9.71C2.67206 9.83432 2.63062 9.97817 2.63062 10.125C2.63062 10.2718 2.67206 10.4157 2.75018 10.54L6.58018 16.92C6.64937 17.0419 6.74974 17.1432 6.871 17.2135C6.99225 17.2838 7.13002 17.3205 7.27018 17.32H13.4202L19.5102 10.54C19.584 10.4142 19.6229 10.2709 19.6229 10.125C19.6229 9.9791 19.584 9.83584 19.5102 9.71ZM10.5902 13.24C10.4577 13.2412 10.3276 13.2052 10.2145 13.1363C10.1014 13.0674 10.0099 12.9682 9.95018 12.85L9.48018 12L9.10018 11.3C9.00018 11.51 8.89018 11.73 8.75018 12L8.32018 12.84C8.26162 12.9628 8.16949 13.0664 8.05446 13.139C7.93942 13.2115 7.80619 13.25 7.67018 13.25H6.43018L8.00018 10.5C8.06416 10.3872 8.0978 10.2597 8.0978 10.13C8.0978 10.0003 8.06416 9.87282 8.00018 9.76L6.49018 7.11H7.75018C7.88362 7.11036 8.01448 7.1468 8.12891 7.21545C8.24333 7.28411 8.33707 7.38242 8.40018 7.5L8.87018 8.39C8.97018 8.6 9.07018 8.78 9.15018 8.96C9.24018 8.78 9.32018 8.6 9.43018 8.4L9.89018 7.5C9.95329 7.38242 10.047 7.28411 10.1615 7.21545C10.2759 7.1468 10.4067 7.11036 10.5402 7.11H11.8002L10.2302 9.73C10.1613 9.84294 10.1248 9.97269 10.1248 10.105C10.1248 10.2373 10.1613 10.3671 10.2302 10.48L11.8602 13.24H10.5902ZM15.7502 10.45C15.2144 10.9225 14.5132 11.1634 13.8002 11.12H13.5002V12.5C13.5002 12.5959 13.4813 12.6908 13.4446 12.7794C13.4079 12.8679 13.3542 12.9484 13.2864 13.0162C13.2186 13.084 13.1381 13.1377 13.0495 13.1744C12.961 13.2111 12.866 13.23 12.7702 13.23C12.6743 13.23 12.5794 13.2111 12.4908 13.1744C12.4023 13.1377 12.3218 13.084 12.254 13.0162C12.1862 12.9484 12.1324 12.8679 12.0957 12.7794C12.0591 12.6908 12.0402 12.5959 12.0402 12.5V7.21H12.2202C12.7593 7.125 13.3045 7.08487 13.8502 7.09C14.4994 7.04163 15.1445 7.22597 15.6702 7.61C15.8695 7.78227 16.0291 7.99578 16.1379 8.23578C16.2467 8.47577 16.302 8.73651 16.3002 9C16.3097 9.26613 16.2659 9.53148 16.1714 9.78048C16.077 10.0295 15.9338 10.2571 15.7502 10.45Z"
                            fill="#f7cc00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0"><rect width="24.5" height="21.12" fill="white" /></clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="r-r">
                      <p>{{ t('noReward') }}</p>
                    </div>
                  </div>
                </template>
              </Vue3SlideUpDown>
            </div>
          </div>
        </div>

        <div class="cb_help">
          <div class="lm-title">{{ t('question') }}</div>
          <ul class="faq-box">
            <li>
              <div class="l-title" @click="showQuestion1 = !showQuestion1">
                <span>{{ t('problem.whatVip') }}</span
                ><i class="iconfont icon-down" />
              </div>
              <Vue3SlideUpDown v-model="showQuestion1">
                <div class="l-cont" v-html="t('problem.whatVips')" />
              </Vue3SlideUpDown>
            </li>
            <li>
              <div class="l-title" @click="showQuestion2 = !showQuestion2">
                <span>{{ t('problem.howGetIntegrial') }}</span
                ><i class="iconfont icon-down" />
              </div>
              <Vue3SlideUpDown v-model="showQuestion2">
                <div class="l-cont" v-html="t('problem.howGetIntegrials')" />
              </Vue3SlideUpDown>
            </li>
            <li>
              <div class="l-title" @click="showQuestion3 = !showQuestion3">
                <span>{{ t('problem.whatVipLevel') }}</span
                ><i class="iconfont icon-down" />
              </div>
              <Vue3SlideUpDown v-model="showQuestion3">
                <div class="l-cont" v-html="t('problem.whatVipLevels')" />
              </Vue3SlideUpDown>
            </li>
            <template v-if="showMore">
              <li>
                <div class="l-title" @click="showQuestion4 = !showQuestion4">
                  <span>{{ t('problem.howComputeInterial') }}</span
                  ><i class="iconfont icon-down" />
                </div>
                <Vue3SlideUpDown v-model="showQuestion4">
                  <div class="l-cont" v-html="t('problem.howComputeInterials')" />
                </Vue3SlideUpDown>
              </li>
              <li>
                <div class="l-title" @click="showQuestion5 = !showQuestion5">
                  <span>{{ t('problem.whyMergedReward') }}</span
                  ><i class="iconfont icon-down" />
                </div>
                <Vue3SlideUpDown v-model="showQuestion5">
                  <div class="l-cont" v-html="t('problem.whyMergedRewards')" />
                </Vue3SlideUpDown>
              </li>
              <li>
                <div class="l-title" @click="showQuestion6 = !showQuestion6">
                  <span>{{ t('problem.everyGetInterial') }}</span
                  ><i class="iconfont icon-down" />
                </div>
                <Vue3SlideUpDown v-model="showQuestion6">
                  <div class="l-cont" v-html="t('problem.everyGetInterials')" />
                </Vue3SlideUpDown>
              </li>
              <!-- <li>
                <div class="l-title" @click="showQuestion7 = !showQuestion7">
                  <span>{{ t('problem.everyGetInterial') }}</span>
                  <i class="iconfont icon-down" />
                </div>
                <Vue3SlideUpDown v-model="showQuestion7">
                  <div class="l-cont" v-html="t('problem.everyGetInterials')" />
                </Vue3SlideUpDown>
              </li> -->
            </template>
          </ul>
          <div v-if="!showMore" class="lm-bottom">
            <a class="btn btn-primary" @click="showMore = !showMore">{{ t('learnMore') }}</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
// import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { getVipInfoApi, receiveRewardApi } from '@/api/home/index'
import { currentDataResp, vipListItemResp, vipListItemItemsResp } from '@/api/home/types'
// import { dynamicObject } from '@/types/api'
import { getAssetsFile, moneyFormat } from '@/utils'
import dynamicObject from '@/types/dynamicObject'

import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { Circle, showToast } from 'vant'
import { useI18n } from 'vue-i18n'
import BigNumber from 'bignumber.js'

// const router = useRouter()
const { t } = useI18n()

// let showTips = ref(true)

let currentData = reactive<currentDataResp>({
  totalBetAmount: '',
  vipCode: '',
  vipSubItemCode: '',
  vipName: '',
  vipSubItemName: ''
})
let vipList = ref<vipListItemResp[]>([])

// 圆形进度条初始进度
const currentRate = ref(0)

// 当前vip等级在viplist中的item
let currentItem = reactive<vipListItemResp>({
  id: '',
  code: '',
  name: '',
  integral: '',
  requiredTotalBetAmount: '',
  items: []
})
let currentSubItem = reactive<vipListItemItemsResp>({
  id: '',
  name: '',
  code: '',
  requiredTotalBetAmount: '',
  rewardAmount: '',
  receivedStatus: '',
  isReceived: false,
  isMerge: false
})
let nextItem = reactive<vipListItemResp>({
  id: '',
  code: '',
  name: '',
  integral: '',
  requiredTotalBetAmount: '',
  items: []
})
let nextSubItem = reactive<vipListItemItemsResp>({
  id: '',
  name: '',
  code: '',
  requiredTotalBetAmount: '',
  rewardAmount: '',
  receivedStatus: '',
  isReceived: false,
  isMerge: false
})

// 是否显示VIP的子等级
let showSubItem = reactive<dynamicObject>([])

const showMore = ref(false)
const showQuestion1 = ref(false)
const showQuestion2 = ref(false)
const showQuestion3 = ref(false)
const showQuestion4 = ref(false)
const showQuestion5 = ref(false)
const showQuestion6 = ref(false)
// const showQuestion7 = ref(false)

// 下一奖励进度
const progressWidth = computed(() => (requiredTotalBetAmount: string) => {
  let width = '0'
  if (requiredTotalBetAmount != '') {
    width = new BigNumber(currentData.totalBetAmount).dividedBy(parseInt(requiredTotalBetAmount)).multipliedBy(100).toFixed(2)
  } else {
    width = '100'
  }
  return width
})

// 获取VIP信息
const getVipInfo = () => {
  getVipInfoApi()
    .then((resp) => {
      // 当前VIP数据
      Object.assign(currentData, resp.data!.currentData)
      // VIP列表
      vipList.value = resp.data!.vipList
      // 当前vip选项
      Object.assign(
        currentItem,
        vipList.value.find((item: vipListItemResp) => item.code == currentData.vipCode)
      )
      // 当前VIP等级子项
      Object.assign(
        currentSubItem,
        currentItem.items.find((item: vipListItemItemsResp) => item.code == currentData.vipSubItemCode)
      )
      // 是否显示VIP的子等级-动态添加
      if (showSubItem.length == 0) {
        vipList.value.forEach((item: vipListItemResp) => {
          showSubItem[item.code] = item.code == currentData.vipCode
        })
      }
      // 下一个大等级
      const tmpNextItem = vipList.value.find((item: vipListItemResp) => parseInt(item.code) == parseInt(currentData.vipCode) + 1)
      if (tmpNextItem) {
        Object.assign(nextItem, tmpNextItem)
      } else {
        nextItem.requiredTotalBetAmount = '80000000'
      }
      // 下一个子等级, 如果当前大等级中有下一个子等级，则获取， 如果没有，则从下一个大等级中获取第一个子等级， 如果都没有，则是当前子等级
      const tmpNextSubItem = currentItem.items.find((item: vipListItemItemsResp) => parseInt(item.code) == parseInt(currentData.vipSubItemCode) + 1)
      if (tmpNextSubItem) {
        Object.assign(nextSubItem, tmpNextSubItem)
      } else {
        if (nextItem && nextItem.items.length > 0) {
          Object.assign(nextSubItem, nextItem.items[0])
        } else {
          Object.assign(nextSubItem, currentSubItem)
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const receiveReward = (code: string) => {
  receiveRewardApi({ VipSubItemCode: code })
    .then((resp) => {
      showToast(t('receivedSuccess', { amount: moneyFormat(resp.data) }))
      console.log(resp)
      getVipInfo()
    })
    .catch((error) => {
      // showToast(t('tips.receivedRewardFail'))
      console.log(error)
    })
}

getVipInfo()
</script>
