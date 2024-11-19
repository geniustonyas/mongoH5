<template>
  <div class="page">
    <div id="header" class="header">
      <div class="head-def">
        <div class="hd-l" onclick="javascript:history.go(-1)"><i class="iconfont icon-left" /></div>
        <div class="hd-m">评论详情</div>
        <!-- <div class="hd-r w80" @click="$router.push({ 'name': 'step1' })">
          <i class="iconfont icon-jianyi"></i>写推荐
        </div> -->
      </div>
    </div>
    <main class="main">
      <ttLoading v-show="loading" />
      <div class="recommend-detail" v-if="detailsData != null">
        <div id="info" class="row">
          <div class="conts">
            <ul class="comment-list">
              <li>
                <a @click="$router.push({ name: 'myRecommend', query: { id: detailsData.userId } })" class="photo">
                  <img v-lazy="{ src: cdnUrl + detailsData.avatar, error: errorImg, loading: loadingImg }" />
                  <i class="lvl" />
                </a>
                <div class="info">
                  <div class="i-t">
                    <span>{{ detailsData.userName }}</span>
                    <span>楼主</span>
                    <label>{{ detailsData.label }}</label>
                  </div>
                  <div class="i-m" v-html="replaceEmoji(detailsData.commentContent)" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="row" style="background-color: ">
          <div class="title">
            <i class="iconfont icon-wenzi" />全部回复<span class="col2">（{{ detailsData.replyCount }}）</span>
          </div>

          <ttLoading v-show="loading" />
          <div v-show="nodata && !loading" class="norecord"><span>暂无回复</span></div>
          <Scroller v-show="dataList.length > 0" ref="allScroller" v-model="scrollerStatus" :height="height" :lock-x="true" :use-pulldown="true" :use-pullup="true" :pulldown-config="pulldownDefaultConfig" :pullup-config="pullupDefaultConfig" :scroll-bottom-offset="10" @on-pulldown-loading="refreshDataList" @on-pullup-loading="moreDataList">
            <div class="conts">
              <ul class="comment-list" v-if="dataList.length > 0">
                <li v-for="(item, index) of dataList" :key="index">
                  <a @click="$router.push({ name: 'myRecommend', query: { id: item.userId } })" class="photo">
                    <img v-lazy="{ src: cdnUrl + item.avatar, error: errorImg, loading: loadingImg }" />
                    <i class="lvl" />
                  </a>
                  <div class="info">
                    <div @click="$router.push({ name: 'myRecommend', query: { id: item.userId } })" class="i-t">
                      <span>{{ item.nickName }}</span>
                      <label>{{ item.label }}</label>
                    </div>
                    <div v-html="replaceEmoji(item.commentContent)" />
                    <div class="i-b">
                      <label>{{ item.timeFrom }}</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Scroller>
        </div>
      </div>
    </main>

    <!-- 如果需要购买则不显示评论框 -->
    <footer v-if="detailsData != null" id="footer" class="footer-commentbox">
      <div class="mini">
        <div class="bd">
          <img :src="UserInfo.avatar == '' ? errorImg : cdnUrl + UserInfo.avatar" />
          <div class="input">{{ UserInfo.id == null ? '请登录后输入回复内容' : '请输入回复内容' }}</div>
          <i class="iconfont icon-biaoqing" />
        </div>
      </div>
      <div class="enlarge">
        <textarea id="commentContent" placeholder="请输入回复内容(500字)" rows="5" />
        <div class="opts">
          <div class="expre">
            <i class="iconfont icon-biaoqing" />
          </div>
          <a @click="publishReply()" class="btn btn1">发布</a>
        </div>
        <div class="swiper-container swiper-expre">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(items, index) of groupEmoji" :key="index">
              <span v-for="(item, i) of items" :key="i">
                <img @click="inputEmoji(item)" v-lazy="{ src: cdnUrl + item.src, error: errorImg, loading: loadingImg }" :title="item.title" />
              </span>
              <span @click="deleteEmoji()"><i class="iconfont icon-shanchu1" /></span>
            </div>
          </div>
          <div class="swiper-pagination" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { groupEmoji, inputEmoji, deleteEmoji } from '@/utils/emojiHandle'
import { getCommentReplyList, getCommentDetails, replyComment } from '@/api/comment'
import { emoji } from '@/utils/emoji'
import { isEmpty } from '@/utils/validate'
import { Scroller } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'CommentDetails',
  components: { Scroller },
  data() {
    return {
      loading: false,
      nodata: false,
      loadingImg: require('@/assets/imgs/lazyLoading.svg'),
      errorImg: require('@/assets/imgs/avatar/touxiang.svg'),

      id: '',
      detailsData: null, // 评论详情
      emoji: emoji, // 原始表情数组
      groupEmoji: [], // 分组后的表情

      // 评论列表参数
      query: {
        RecommendCommentId: '',
        PageIndex: 1,
        PageSize: 10
      },

      reply: {
        RecommendCommentId: '',
        ReplyContent: ''
      },

      dataList: [],
      newDataList: [],

      isRefresh: true, // 默认刷新请求,不合并数据
      height: '0',
      scrollerStatus: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      pulldownDefaultConfig: {
        content: '下拉刷新',
        height: 40,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '正在刷新...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pullupDefaultConfig: {
        content: '上拉加载更多',
        pullUpHeight: 10,
        height: 30,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },

  computed: {
    ...mapGetters(['cdnUrl', 'UserInfo', 'playTypes']),
    replaceEmoji: function () {
      return function (content) {
        if (content != '' && content != null && content.length > 0) {
          var newContent = ''
          emoji.forEach((item) => {
            var reg = '/\\' + item.title.replace(']', '\\]') + '/g'
            content = content.replace(eval(reg), `<img src="${this.cdnUrl + item.src}" />`)
          })
        }
        return content
      }
    }
  },

  created() {
    this.groupEmoji = groupEmoji() // 初始化表情
    this.id = this.$route.query.id // 评论ID
    this.query.RecommendCommentId = this.id
    this.reply.RecommendCommentId = this.id
    if (typeof this.id == undefined || this.id == null || this.id == '') {
      this.$router.go(-1)
    } else {
      this.loading = true
      this.getDetails()
    }
  },

  methods: {
    // 获取推荐列表
    getDetails() {
      this.$message.closeAll()
      getCommentDetails({ Id: this.id })
        .then((resp) => {
          this.detailsData = resp.data
          this.getReply()
          this.$nextTick(function () {
            // 获取到评论 绑定数据后，绑定点击事件
            var ts = this
            $('.footer-commentbox .mini .input').click(function () {
              if (ts.UserInfo.id == null) {
                ts.$router.push('/login')
              } else {
                $('.footer-commentbox .mini').hide()
                $('.footer-commentbox .enlarge').show()
                $('.footer-commentbox .enlarge textarea').focus()
              }
            })
            // 显示表情以及表情滑动
            $('.expre').click(function () {
              if ($('.swiper-expre').is(':hidden')) {
                $('.swiper-expre').show()
                var swiper = new Swiper('.swiper-container', {
                  pagination: {
                    el: '.swiper-pagination'
                  }
                })
              } else {
                $('.swiper-expre').hide()
              }
            })
            // 点击其他位置切换隐藏效果
            $(document).bind('click', function (e) {
              // 如果未找到enlarge和mini， 则代表点击的不是textarea ， 则隐藏textatrea
              if ($(e.target).closest('.enlarge').length == 0 && $(e.target).closest('.mini').length == 0) {
                $('.enlarge').hide()
                $('.mini').show()
              }
            })
            this.height = '-' + ($('#header').innerHeight() + $('#info').innerHeight() + $('#footer').innerHeight() + 10)
          })
          this.loading = false
        })
        .catch((error) => {
          this.$message({ message: error, type: 'error' })
          this.loading = false
        })
    },

    getReply() {
      this.$message.closeAll()
      getCommentReplyList(this.query)
        .then((resp) => {
          this.newDataList = resp.data
          this.dataList = this.isRefresh ? this.newDataList : this.dataList.concat(this.newDataList)
          this.$nextTick(() => {
            if (this.newDataList.length < this.query.PageSize) {
              // 如果返回的数据小于分页数， 则禁用上拉功能
              this.scrollerStatus.pullupStatus = 'disabled'
            }
          })
          this.nodata = this.dataList.length == 0
          this.loading = false
        })
        .catch((error) => {
          this.$message({ message: error, type: 'error' })
          this.loading = false
        })
    },

    // 刷新记录
    refreshDataList() {
      this.query.PageIndex = 1
      this.isRefresh = true
      this.getReply()
      this.$nextTick(function () {
        this.$refs.allScroller.donePulldown()
        this.$refs.allScroller.reset().this.$refs.allScroller.enablePullup()
      })
    },

    // 加载更多记录
    moreDataList() {
      this.query.PageIndex += 1
      this.isRefresh = false
      this.getReply()
      this.$nextTick(function () {
        this.$refs.allScroller.donePullup()
        // this.$refs.allScroller.reset()
      })
    },

    // 输入表情
    inputEmoji(item) {
      inputEmoji(item.title)
    },

    // 删除表情和内容
    deleteEmoji() {
      deleteEmoji()
    },

    // 发布回复
    publishReply() {
      this.$message.closeAll()
      this.reply.ReplyContent = $('#commentContent').val()
      if (isEmpty(this.reply.ReplyContent)) {
        this.$message({ message: '请输入回复内容', type: 'warning' })
        return
      }

      if (this.reply.ReplyContent.length > 500) {
        this.$message({ message: '回复内容不能超过500个字符', type: 'warning' })
        return
      }

      this.loading = true
      replyComment(this.reply)
        .then((resp) => {
          if (resp.code == 200) {
            this.reply.ReplyContent = ''
            $('#commentContent').val('')
            $('.enlarge').hide()
            $('.mini').show()

            this.query.PageIndex = 1
            this.isRefresh = true
            this.getReply()
            this.$message({ message: '发布成功', type: 'success' })
          } else {
            this.$message({ message: `发布失败：${resp.msg}`, type: 'error' })
          }
          this.loading = false
        })
        .catch((error) => {
          this.$message({ message: error, type: 'error' })
          this.loading = false
        })
    }
  }
}
</script>
