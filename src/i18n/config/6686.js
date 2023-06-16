module.exports = {
  // 操作性表单文字
  confirm: 'common.determine',
  removeAll: 'bet.deleteAll',
  submit: 'common.submit',
  others: 'Lainnya',
  notice: 'gameResult.eventAnnouncement',
  close: 'Penutupan',
  stay: 'bet.keepOddsList',
  all: 'betRecord.all',
  login: 'common.customInfo',
  search: 'betRecord.search',
  to: ' betRecord.to ',
  suoyou: 'sport.commom.all',
  options: 'bet.option',
  account: 'Akun',
  password: 'kata sandi',
  language: 'bahasa',
  comingSoon: 'tetap disini',
  allDay: 'Sepanjang hari',
  future: 'segera hadir',
  worldCup: 'world cup',

  // 左侧菜单文字
  myBets: 'betRecord.betRecord',
  balance: 'betRecord.balance',
  inplay: 'label.inplay',
  today: 'Hari ini',
  early: 'Awal',
  parlay: 'Parlay',
  zhuye: 'Home',
  sport: 'Sport',
  sports: 'Sports',
  more: 'common.more',
  outright: 'Outrights',
  coming: 'label.incoming',
  comingMatch: 'Segera',
  results: 'betRecord.matchResults',
  sportHome: 'Home',
  todayMatchs: 'menu.tc',
  esportFootball: 'Segera dimulai',
  settings: 'Pengaturan',
  handicapTyps: 'menu.handicapType',
  featured: 'Populer',
  matchs: 'ommon.match',
  matchBig: 'Pertandingan',
  showAll: 'Tampilkan Semua',
  shousuo: 'menyusut',
  zhankai: 'perluas',

  // 上方菜单
  odds: 'common.odds',
  handicapType: { 1: 'common.marketType.EU', 2: 'common.marketType.HK', 3: 'common.marketType.ML', 4: 'common.marketType.IN' },
  sortType: { 1: '按热门', 2: 'sort.byTime', 3: 'sort.byLeague' },
  recommendOdds: { 1: '最佳赔率', 2: '最高赔率' },
  //   showAllMarket: '显示全部市场',
  //   showMainMarket: '仅显示主要市场',
  sort: '排序',
  h: 'sport.common.home',
  a: 'sport.common.away',
  he: 'sport.common.draw',

  // 底部菜单
  rule: 'Aturan Tutorial',

  // 市场选择
  mainMarket: 'Pasaran Utama',
  goalsOu: 'Gol Atas / Bawah',
  //   cornerOu: '角球 大小',
  //   combinationHandicap: '组合盘口',
  //   cb1: '独赢&大球2.5',
  //   cb2: '独赢&都得分',
  teamGoals: 'Total Poin',
  matchList: '',
  matchDetails: '赛事详情',
  // 右侧投注
  betSlip: 'Slip Taruhan',
  //   addOdds: '添加选项到投注单',
  //   liveCenter: '直播中心',
  stake: 'betRecord.betAmount',
  toWin: 'betRecord.winable',
  betAmount: 'bet.limit',
  max: 'max',
  viewDetails: 'betRecord.detail2',
  minBet: 'bet.low',
  maxBet: 'bet.height',
  singleBet: 'bet.singleBet',
  parlayBetSlip: 'bet.parlayBet',
  allBets: 'Total Taruhan',
  placeBet: 'bet.bet',
  placeBetting: 'bet.bet...',
  orderNo: 'betRecord.betSlipNum',
  orderStatus: {
    0: 'betRecord.toBeConfirmed',
    1: 'common.confirmed',
    2: 'cancel.FORMAT_CHANGE',
    3: 'betRecord.cancel'
  },

  markets: '市场',
  overView: '总览',
  lineUp: '比赛阵容',
  analysis: '分析',
  liveStatic: '统计',
  headToHead: '对决',
  viewAllOption: 'Tampilkan semua Pilihan Parlay',

  // 投注记录
  betDate: 'betRecord.bettingDate',
  betDesc: 'betRecord.betInfo',
  dateArr: ['dates.today', 'dates.yseterday', 'dates.last30', 'dates.last30', 'betRecord.custom'],
  selectDate: 'common.dateSelection',
  matchStartTime: 'betRecord.startDate',
  settleStatus: ['betRecord.unsettledOrder', 'betRecord.settledOrder'],
  orderType: { 1: 'betRecord.single', 2: 'betRecord.deplex', 3: 'subMenu.orc' },
  no: 'betRecord.orderId',
  betStake: 'betRecord.betAmount',
  winLose: 'betRecord.winStatus',
  status: 'betRecord.status',
  //   prevPage: '上一页',
  //   nextPage: '下一页',
  //   total: '总计',
  settleResult: {
    10: 'betRecord.win',
    11: 'betRecord.winHalf',
    20: 'betRecord.lose',
    21: 'betRecord.loseHalf',
    30: 'sport.common.draw',
    50: 'betRecord.orderCancel',
    60: 'betRecord.orderCancel',
    99: 'betRecord.orderCancel'
  },
  cancelReason: {
    1: 'bet.handicapClose',
    2: 'cancel.A_CANCEL_19',
    3: 'cancel.A_CANCEL_14',
    4: 'cancel.ABANDONED_EVENT',
    5: 'cancel.A_CANCEL_04',
    6: 'cancel.A_CANCEL_16',
    7: 'sport.football.80',
    8: 'cancel.A_CANCEL_24',
    9: 'cancel.A_CANCEL_21',
    10: 'sport.football.80'
  },
  resultScore: {
    1: { 0: 'gameResult.full', 1: 'football.banner.1h' },
    2: { 0: 'gameResult.full', 1: 'gameResult.basketball.sections.0', 2: '第二节', 3: '第三节', 4: '第四节', 6: '上半场', 7: '下半场' },
    3: { 0: 'gameResult.full', 1: 'gameResult.tennis.sets.0', 2: '第二盘', 3: '第三盘', 4: '第四盘', 5: '第五盘', 6: 'gameResult.tennis.game' },
    4: { 0: 'gameResult.full', 1: 'sport.common.f5in' }
  },

  // store 中的相关配置
  handicaps: ['common.marketType.eu', 'common.marketType.hk', 'common.marketType.id', 'common.marketType.ml'],
  handicapTypeName: ['大', '小', 'sport.interCate.oe', 'sport.interCate.oe'],

  // 球类
  ball: {
    1: 'Sepakbola',
    2: 'Bola Basket',
    3: 'Tenis',
    4: 'Baseball',
    5: '高尔夫',
    6: '彩票',
    7: '美式足球',
    8: '拳击',
    9: '羽毛球',
    10: '金融投注',
    13: '排球',
    15: '特别项目',
    16: '手球',
    17: '赛车',
    20: '乒乓球',
    21: '斯诺克/台球',
    23: '电子竞技',
    24: '室内足球',
    26: '冰球',
    30: '自行车'
  },

  // 接口数据盘口名称-对应中文
  handicapName: {
    ah: { 1: 'Handicap', 3: 'sport.tennis.ah', 4: 'Handicap' },
    ahfts: 'sport.simpleTitle.ah_game',
    ah1st: 'sport.basketball.ah_1h',
    // ahf5in: '让球-前五局',
    oe: 'sport.common.oe',
    oe1st: 'sport.common.oe_1st',
    tg: 'subMenu.tg',
    tg1st: '总入球-上半场',
    hf: 'sport.basketball.hf',
    htft: 'sport.basketball.hf',
    stcs: 'subMenu.cs_sets',
    cs1st: 'sport.common.cs_1st',
    cs: 'sport.common.cs',
    or: 'sport.baseball.or',
    // 独赢
    '1x2': 'sport.common.1x2',
    '1x21st': 'sport.common.1x2_1st',
    ftht1x2: 'key-43',
    ml: 'sport.common.ml',
    ml1st: 'port.common.1x2_1st',
    mls1: 'sport.tennis.ml_s1',
    mls2: '独赢-第二盘',
    mls3: '独赢-第三盘',
    mls4: '独赢-第四盘',
    mls5: '独赢-第五盘',
    // 大小
    ou: 'sport.common.ou',
    ouf5in: 'key-270',
    oufts: 'sport.tennis.ou_fts_title',
    ou1st: 'key-201',
    t1ou: 'key-210',
    t1ouq1: 'key-212',
    t1ouq2: 'key-213',
    t1ouq3: 'key-214',
    t1ouq4: 'key-215',
    t1ou1st: 'key-211',
    ouq1: 'key-203',
    ouq2: 'key-204',
    ouq3: 'key-205',
    ouq4: 'key-206',
    t2ou: 'key-216',
    t2ouq1: 'key-218',
    t2ouq2: 'key-219',
    t2ouq3: 'key-220',
    t2ouq4: 'key-221',
    t2ou1st: 'key-217',
    ous1: 'sport.tennis.ou_s1',
    ous2: '大/小-第二盘',
    ous3: '大/小-第三盘',
    ous4: '大/小-第四盘',
    ous5: '大/小-第五盘'
  },

  // 列表数据表头
  thead: {
    fullTime: 'gameResult.full',
    halfTime: '',
    '1stHalf': 'gameResult.half',
    '1x2': 'sport.common.1x2',
    ah: 'sport.common.ah',
    ahf5in: 'sport.common.f5i"',
    ahfts: 'sport.simpleTitle.ah_game',
    ahset: 'sport.simpleTitle.ah_set',
    ou: '大/小 sport.common.ou',
    ouf5in: 'sport.common.f5in',
    oufts: '局-sport.tennis.ou_fts_title',
    tou: '球队 大/小',
    t1ou: '第1队得分',
    t2ou: '第2队得分',
    oddEven: '单/双',
    bothTeamsToScore: 'sport.football.btts',
    otherScore: 'other3',

    '1x2handicap': 'key-43'
  },

  detailsHead: {
    fav: 'sport.football.popular',
    ahou: 'banner.ah_ou',
    goalsIn: 'banner.sco'
  },

  //   oddsHandicapName: {
  //     tg: ['0-1球', '2-3球', '4-6球', '7或以上' ],
  //     tg1st: ['0球', '1球', '2球', '3或以上' ],
  //   },

  corner: 'football.banner.corners',
  bookings: 'football.banner.bookings',
  // allHandicap: '查看所有盘口',
  // favorates: '添加到我的收藏',
  // comingInplay: '即将滚球',
  // matchLive: '滚球赛事直播',
  // currentTotal: '当前总数',

  seconds: {
    qs: ['gameResult.basketball.sections.0', '第二节', '第三节', '第四节', '第五节'],
    sets: ['gameResult.tennis.sets.0', '第二盘', '第三盘', '第四盘', '第五盘'],
    games: ['sport.tennis.ml_g1', '第二局', '第三局', '第四局', '第五局']
  },
  ls: {
    Q1: '第一节sport.basketball.ah_q1',
    Q2: '第二节',
    Q3: '第三节',
    Q4: '第四节',
    HT: 'sport.common.ht',
    '1H': 'banner.1h',
    '2H': '下半场',
    OT: 'gameResult.football.ot',
    S1: '第一盘sport.interCate.s1',
    S2: '第二盘',
    S3: '第三盘',
    S4: '第四盘',
    S5: '第五盘'
  },
  set3win: '三盘两胜',
  set5win: '五盘三胜',
  fivein: '5局',

  // 提示信息
  tips: {
    inputAccount: 'silahkan masuk akun',
    underAccount: 'Panjang akun tidak boleh kurang dari 5 karakter',
    overAccount: 'Panjang akun tidak boleh melebihi 128 karakter',
    inputPassword: 'Silakan masukkan kata sandi',
    underPassword: 'Panjang kata sandi tidak boleh kurang dari 5 karakter',
    overPassword: 'Panjang kata sandi tidak boleh melebihi 128 karakter',

    oddsChanged: 'bet.oddsUpdated',
    oddsChangedTip: 'Satu atau lebih peluang pilihan untuk taruhan yang dipilih telah diubah',
    noLiveMatch: 'Saat ini tidak ada siaran langsung',
    nodata: 'Belum ada kompetisi yang diadakan',
    matchOverd: 'Pertandingan telah berakhir',
    matchClosed: 'Pertandingan telah ditutup',
    matchCanceld: 'Pertandingan telah dibatalkan',
    addOdds: 'Tambahkan opsi ke slip taruhan.',
    overLimit: 'Item taruhan tidak boleh melebihi 10',
    noParlay: 'Opsi merah tidak dapat digabungkan untuk taruhan parlay.',
    noBalance: 'Jumlah taruhan melebihi saldo akun Anda, silakan isi ulang terlebih dahulu!',
    noLogin: 'Anda belum masuk, harap masuk sebelum melanjutkan.',
    noAmount: 'Silakan masukkan jumlah taruhan.',
    betFaild: 'Taruhan kalah, kesalahan tidak diketahui',
    noBet: 'Belum ada catatan taruhan',
    minBet: 'Taruhan minimum tunggal adalah',
    maxBet: 'Melebihi batas taruhan maksimum. Taruhan maksimum Anda adalah',
    loginTimeOut: 'Waktu masuk habis',
    requestTimeOut: 'Waktu permintaan habis, harap periksa jaringan Anda',
    requestAgain: 'Gagal memuat, silakan klik untuk mencoba lagi',
    handicapClosed: 'Pasar pertandingan saat ini ditutup',
    inputTeam: 'Silakan masukkan nama tim',
    inputLeague: 'Silakan masukkan nama liga'
  },

  // 服务端返回错误信息代码
  msg: {
    bet: {
      0: 'Taruhan Anda telah dikonfirmasi'
    }
  },

  rules: ` <header class="header">
          <div class="hp-tabs">
              <div class="ht-items">
                  <span class="active">教程</span>
                  <span>规则</span>
              </div>
          </div>
          <div class="hp-menus">
              <div class="hm-cont active">
                  <div class="txt-tabs">
                      <span class="active">让球</span>
                      <span>大小球</span>
                  </div>
                  <div class="rule-menu hm-hd" data-ix="0">
                      <a class="active">0</a>
                      <a>0/0.5</a>
                      <a>0.5</a>
                      <a>0.5/1</a>
                      <a>1</a>
                      <a>1/1.5</a>
                      <a>1.5</a>
                      <a>1.5/2</a>
                  </div>
              </div>
              <div class="hm-cont">
                  <div class="rule-menu" data-ix="1">
                      <a>一般体育说明</a>
                      <a>足球</a>
                      <a>篮球</a>
                      <a>网球</a>
                      <a>棒球</a>
                      <a>串关</a>
                      <a>冠军</a>
                      <a>独赢及位置的投注规则</a>
                  </div>
              </div>
          </div>
          </header>
          <main class="main">
          <div class="help-box">
              <div class="hb-cont active">
                  <!-- 0 -->
                  <div class="hb-rows active">
                      <div class="hr-t"><div class="hrt-l"><span>0</span>(平手盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>0</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主客实力相当，均不让球即0(平手盘)</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>0</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主客谁赢球即全赢，打平则退还本金（走水）
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b>
                                      <label>反之亦然</label>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b>退还本金</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b>退还本金</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--0/0.5-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>0/0.5</span>(平手半球盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-0/0.5</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让0/0.5球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+0/0.5</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球或以上，投注主队全赢，投注客队全输
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b>
                                      <label>反之亦然</label>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  打平，投注主队输一半，投注客队赢一半
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">输一半</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">赢一半</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- 0.5 -->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>0.5</span>(半球盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-0.5</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让0.5球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+0.5</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球或以上，投注主队全赢，投注客队全输
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--0.5/1-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>0.5/1</span>(半球/一球盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-0.5/1</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让0.5/1球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+0.5/1</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球，投注主队赢一半，投注客队输一半
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">赢一半</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b> 
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">输一半</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢2球或以上，投注主队全赢，投注客队全输
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>2-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- 1 -->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>1</span>(一球盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-1</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让1球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+1</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球，投注主客均退回本金（走水）
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b>退回本金</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b>退回本金</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢2球或以上，投注主队全赢，投注客队全输
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>2-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--1/1.5-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>1/1.5</span>(一球/球半盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-1/1.5</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让1/1.5球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+1/1.5</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球，投注主队输一半，投注客队赢一半
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">输一半</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b> 
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">赢一半</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢2球或以上，投注主队全赢，投注客队全输
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>2-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- 1.5 -->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>1.5</span>(球半盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-1.5</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让1.5球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+1.5</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球，投注主队全输，投注客队全赢
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢2球或以上，投注主队全赢，投注客队全输
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>2-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--1.5/2-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>1.5/2</span>(球半/两球盘)</div></div>
                      <div class="hr-c">
                          <div class="hc-t">
                              <div class="t-l">
                                  <span>
                                      主队<b>-1.5/2</b>
                                  </span>
                                  <i class="iconfont icon-zhenrong"></i>
                              </div>
                              <div class="t-m">
                                  <i class="iconfont icon-duizhan"></i>
                                  <span>主队让1.5/2球</span>
                              </div>
                              <div class="t-r">
                                  <i class="iconfont icon-zhenrong"></i>
                                  <span>
                                      客队<b>+1.5/2</b>
                                  </span>
                              </div>
                          </div>
                          <div class="hc-m">
                              <i class="iconfont icon-caipan2"></i>
                              主队赢1球，投注主队全输，投注客队全赢
                          </div>
                          <div class="hc-s">
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>1-0</b> 
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢2球，投注主队赢一半，投注客队输一半
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">赢一半</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>2-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">输一半</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队赢3球或以上，投注主队全赢，投注客队全输
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="green">全赢</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>3-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="red">全输</b>
                                  </div>
                              </div>
                              <div class="hc-m">
                                  <i class="iconfont icon-caipan2"></i>
                                  主队打平或输球，投注主队全输，投注客队全赢
                              </div>
                              <div class="item">
                                  <div class="i-l">
                                      投注主队
                                      <b class="red">全输</b>
                                  </div>
                                  <div class="i-m">
                                      <span>赛果</span>
                                      <b>0-0</b>
                                  </div>
                                  <div class="i-r">
                                      投注客队
                                      <b class="green">全赢</b>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="hb-cont">
                  <!--一般体育说明-->
                  <div class="hb-rows">
                      <div class="hr-t">
                          <div class="hrt-l">一般体育说明</div>
                          <div class="hrt-r">最后更新:2021/04/30</div>
                      </div>
                      <div class="hr-c">
                          <p class="org">概述</p>
                          <p> 此规则与条款将适用于本公司所有的投注种类。会员们有责任确保您获知所有的规则与条款，我们保留随时修改条款的权利，并且会将修改的内容公布在本网站上。公布在网站公告上的信息可作为投注附加的规则与条款，若有任何差异或矛盾的地方，将以附加信息为准。</p>
                          <p>本公司对此条款视为公平公正的，若您有任何意见或疑问，您可以联络我们的客服部，我们的客服团队将热诚协助每位客户，并确保能及时友善的解决您的问题。对于任何错误或争论，我们的客服团队将竭力提供服务。</p>
                          <p>所有的条款用于在会员与公司之间建立一般的原则。对产生的任何争议，希望通过该条款让双方都得到满意的解决方案。</p>
                          <p class="org">一般体育规则</p>
                          <p>所有在本公司进行的投注都需要依照以下规则与条款处理。在个别体育项目里注明的规则将视为体育主要规则:</p>
                          <ul>
                              <li>所有投注项目的最高和最低投注额将由公司决定，如有任何更改无需提前通知。</li>
                              <li>会员申请账户时需提供正确的个人信息，本公司对提供伪造或错误信息的账户将不负任何责任。</li>
                              <li>会员将全权负责账户提交的所有交易。在投注前请仔细检查选项，一旦投注提交成功后，将无法更改或取消。公司对会员自身原因造成的遗漏或重复投注不负任何责任。会员可以在"交易记录"中查看详情确保所有提交的注单已成功。</li>
                              <li>在任何投诉中，如果在公司的数据库中没有存储任何记录，公司将不接受也不认可任何会员提供的复印件或单据。</li>
                              <li>公司保留在任何时候关闭或冻结会员账号的权利。</li>
                              <li>公司保留在任何时候暂停/中止会员对任何盘口进行投注的权利。</li>
                              <li>公司保留对已预先知道赛果的投注作出取消的权利。如果由于"滚球现场"延迟而引起盘口的赔率错误，此期间的注单将视为无效。</li>
                              <li>有关赛事的讯息（例：日期，时间，比分，统计，新闻，红卡，中场等等）仅供参考而已。公司对此讯息的准确性不负任何责任。</li>
                              <li>如果比赛或赛事取消，中断或延迟并且没有在官方指定开球时间的36小时内重新开始，所有该场赛事的投注即被视为无效且取消，除非在个别体育规则里另有指定注明。某些无条件终止的盘口将会相应地结算。单独的体育规则中对此类盘口的结算程序做了说明。 公司取消该赛事所有注单的结果被视为最终决定，无需参考官方赛事裁判或相关部门的决定。连串投注将会继续按照注单剩余赛事的赛果结算，该取消赛事的赔率将会按照1计算。</li>
                              <li>如果比赛或是赛事取消，所有该场赛事的投注即被视为无效且取消，除非在个别体育规则里另有指定注明。对于取消的定义和处理本公司拥有最终解释权</li>
                              <li>如果对其它语言版本的信息或球赛队名有争议，请以英文网站的名称为准</li>
                              <li>
                                  由以下事件造成的任何损失，公司不赋予任何责任:
                                  <ol>
                                      <li>公司的网站、服务器或网络中断。</li>
                                      <li>公司数据库、服务器丢失信息或信息遭受破坏。</li>
                                      <li>不法分子攻击网站、服务器或网络供应商。</li>
                                      <li>进入网站时由于网络供应商原因造成的网络缓慢。</li>
                                  </ol>
                              </li>
                              <li>如果对此规则与条款的内容有任何疑义，请以公司的解释为准。</li>
                          </ul>
                          <p class="org">赛果与派彩</p>
                          <ul>
                              <li>赛果均在赛事结束后判定，除非在个别体育规则里另有注明。赛果公布72小时后，若对任何赛果有争议，本公司将不认可。在赛果公布72小时内,除了任何体育纪律委员会所重新裁决之赛果，本公司只会修正人为、系统或参考赛果的相关网页失误等原因的错误。</li>
                              <li>投注通常在赛事结束后派彩。但考虑到会员的利益，某些投注会在官方公布赛事结果之前就进行派彩。这些投注会在无条件确定结果的情况下派彩，可以包括被放弃，暂停或推迟的赛事。为此，公司保留对此而造成的错误进行更改的权利。</li>
                              <li>派彩是根据官方来源或相关体育权威机构判定的结果为准。</li>
                              <li>所有的交易将以公司最新备份数据记录为准，公司不接纳任何投诉或争议，除非会员提供交易记录的截图或影印证据，否则公司的数据记录将作为最终证明。</li>
                          </ul>
                          <p class="org">滚球类型投注规则</p>
                          <p>滚球投注是指对正在进行比赛的赛事进行投注。注单会在赛事进行比赛后开始接收并且在盘口关盘后停止所有交易。个别体育会开出多个滚球种类的盘口供投注。<br></p>
                          <ul>
                              <li>所有滚球投注均需要遵守系统验收程序。这可能会导致每笔投注延迟确认或出现投注失败的情况。</li>
                              <li>所有在注单上显示“待确认”的字眼则表示注单正在等待系统的判断投注是否成功。这表示注单在等待被确认或可能被取消。</li>
                              <li>在赛事有事件发生或出现其他特殊情况时，所有待确认中的注单将不被确认并视为投注失败。此事件可包含进球，红卡，点球或技术上问题等等。(其他例子并不一一详尽列出)<br></li>
                              <li>当有重大事件发生时，会应用电视裁判助理（VAR）来判定，这可能会导致之前已确定的注单被取消。注单被取消始于重大事件发生的开端直到VAR的最终官方判定已宣布。</li>
                              <li>
                                  在滚球投注中，本公司需强调以下条款，确保投注是按照正确的时间、金额和在正确的情况下进行:
  
                                  <ol>
                                      <li>比赛赛果和入球时间以本公司网站公布的为准，我们不参考任何其它官方网站，体育网站，或"即时比分"等网站公布的赛果或入球时间。</li>
                                      <li>
                                          如果有合理的理由怀疑投注是在比赛时某个事件发生后才提交的，本公司将保留取消此注单且不需提供任何理由和证明的权利。
                                      </li>
                                      <li>如果出现网站无法更新比分、赔率或盘口的情况，本公司保留权利取消所有未确认且处理中的注单。 </li>
                                  </ol>
                              </li>
                          </ul>
                          <p class="org">有关时间规则</p>
                          <ul>
                              <li>如比赛在法定时间提前进行，在比赛开始前的投注依然有效，在比赛开始后的所有投注均视为无效(滚球投注另作别论)。</li>
                              <li>足球球赛的正常完场时间包括任何球员受伤的补时。</li>
                              <li>除非在个别体育规则另有注明，加时得分则不计算在正常完场时间内。</li>
                          </ul>
                          <p class="org">并列名次规则 (平手规则使用)</p>
                          <ul>
                              <li>一场赛事的盘口产生2名或者以上的获胜者，那么赢利金额将减少。计算方法是将本金除以获胜者人数，然后乘以原赔率。这部分本金及赢利将返还给会员，剩余的本金将输掉。</li>
                              <li>
                                  例如：<br>
                                  <p>第一阶段-您投注5英镑，赔率16.0（可能的赢利金额为75英镑） </p>
                                  <p>第二阶段-您投注的对象与另一名对象同时获胜 </p>
                                  <p>第三阶段-您本金的一半将会乘以原赔率计算，剩下的部分将输掉。因此2.5英镑乘以16.0 =37.50英镑+2.5英镑的返还的本金就是总赢利 </p>
                                  <p>如果有2名以上的获胜者，注金将会分成相应的等份 </p>
                                  <p>实际上在2名获胜者的情况下，本金的一半（50%）将乘以原赔率，剩余的一半（50%）将输掉。 </p>
                              </li>
                              <li>并列名次规则将不适用于，如果我们最终决定，可由排名準則决定排序的赛事。（例如小组赛事） </li>
                          </ul>
                          <p class="org">场地变更</p>
                          <ul>
                              <li>如果比赛场地有变更（主客队调换），所有此注单将被取消。</li>
                              <li>本公司保留权利取消因更换场地而可能对赛事结果有影响的注单，例如：网球比赛更换场地表面。</li>
                              <li>若比赛原定在中立场进行改为在非中立场进行且在本公司判定下对比赛没有影响，注单将继续保持有效。</li>
                              <li>在个别体育项目里若有特别注明将覆盖以上规则。</li>
                          </ul>
                          <p class="org">错误</p>
                          <ul>
                              <li>本公司力求错误发生的机率保持最低，但若有注单显然是在盘口有错误的情况下提交，我们将保留取消此注单的权利。错误的情况包括：</li>
                              <li>
                                  <ol>
                                      <li>赔率错误 （和市场上提供的有明显差别）；</li>
                                      <li>盘口信息错误， 例如：让球数，大小数等；</li>
                                      <li>赛事信息错误，例如：参赛队名或队员， 赛事日期或开赛时间。</li>
                                  </ol>
                              </li>
                              <li>若因遇到以上的情况而需取消任何注单，我们会尽可能的与客户取得联系，有关讯息也会及时在公告栏里发布。</li>
                          </ul>
                          <p class="org">异常投注行为</p>
                          <ul>
                              <li>对任何怀疑在投注时涉嫌作弊或破坏本公司投注平台的会员，公司有权在毫无警告或通知下取消此会员所有的注单并且冻结账户。异常行为包括使用任何设备，自动设备，软件，程序等方式干涉本网站的运作。</li>
                          </ul>
                          <p class="org">最高派彩金额</p>
                          <ul>
                              <li>
                                  所有比赛项目或投注种类，每日每位会员可得最高派彩金额是150万美金（不包括投注本金），或其他等值货币。以下列出个别体育的最高派彩金额为参考：
                                  <ol>
                                      <li>足球与篮球 –150万美金或其他等值货币</li>
                                      <li>电竞足球,电竞篮球, 电子竞技, 网球，美式足球，棒球，冰球， 橄榄球，排球 –30万美金或其他等值货币</li>
                                      <li>其他体育 – 20万美金或其他等值货币</li>
                                      <li>新颖盘口 –2万5千美金或其他等值货币</li>
                                  </ol>
                              </li>
                              <li>连串过关如果涉及不同体育级别的限制，系统将以体育级别最低派彩金额限制为准。</li>
                          </ul>
                          <p class="org">接受更好的赔率</p>
                          <p>
                              “术语”“接受更好的赔率”“即添加到该选项的所有投注单，只要在选择的时间所提供的可能性表现出比最初显示更高的回报，就可以自动进行处理。
                              &nbsp;如果调整后的投注单盘口显示出比原先的返回值较低，那么该投注将不会被自动处理。
                              ”接受更好的赔率“这个功能可以通过勾选投注单中“选择“或是“取消选择“来开启或是关闭。
                          </p>
                          <p class="org">更高赔率 / 复式过关 (特优赔率)</p>
                          <ul style="list-style-type:decimal">
                              <li>
                                  本公司拥有提供以及随时撤回所有更高赔率/复式过关 (特优赔率)的权利。<br>
                              </li>
                              <li>
                                  所有更高赔率投注/复式过关(特优赔率)的限额，可能在任何时间进行调整。<br>
                              </li>
                              <li>
                                  所有更高赔率/复式过关(特优赔率)规则相同于一般规则及上述各体育规则中的规定。<br>
                                  - 以足球为例- “曼联胜出及大/小2.5”将遵守“独赢盘和进球数大/小盘”足球规则。<br>
                              </li>
                              <li>
                                  足球的更高赔率/复式过关(特优赔率)是计算在常规时间内，不包括额外时间或罚球（除非另有说明）<br>
                              </li>
                              <li>
                                  对于复式过关(特优赔率)，如果您投注的项目在无条件确定结果的情况下，则该投注根据结果相应的结算为“赢”或“输”。&nbsp;<br>
                                  - 以足球为例：如果您选择进球数超过2.5个，并且在暂停时比分是2：1，则您的投注将被视为“赢”。<br>
                              </li>
                              <li>
                                  对于复式过关(特优赔率)，如果您投注的项目在结果未确定时被暂停，则将视为无效投注。
                                  - 以足球为例：如果您选择的比分是2-2（全赛时），并且在暂停时比分为1-1，则您的投注将被视为无效<br>
                              </li>
                              <li>对于复式过关(特优赔率)，单一项目或多个项目是平局或无效的情况下，赔率会重新调整。 </li>
  
                          </ul>
                      </div>
                  </div>
                  <!--足球-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">足球</div><div class="hrt-r">最后更新:2020/05/21</div></div>
                      <div class="hr-c">
                          <div class="sub-menu">
                              <a href="#dr-1">一般规则</a>
                              <a href="#dr-2">主要市场</a>
                              <a href="#dr-3">进球集锦</a>
                              <a href="#dr-4">球员</a>
                              <a href="#dr-5">特别</a>
                              <a href="#dr-6">角球</a>
                              <a href="#dr-7">牌/卡</a>
                              <a href="#dr-8">任意球</a>
                              <a href="#dr-9">射门</a>
                              <a href="#dr-10">界外球</a>
                              <a href="#dr-11">替补</a>
                              <a href="#dr-12">越位</a>
                              <a href="#dr-13">点球</a>
                              <a href="#dr-14">比赛</a>
                              <a href="#dr-15">综合市场</a>
                              <a href="#dr-16">其他</a>
                              <a href="#dr-17">奇幻赛事</a>
                              <a href="#dr-18">电竞足球赛事</a>
                          </div>
                          <p class="org" id="dr-1">一般规则</p>
                          <ul>
                              <li>除非另有注明，所有足球投注的结算皆以球赛所规定的完场时间90分钟为准。 </li>
                              <li>完场时间90分钟包括球员伤停补时。加时赛、淘汰赛、点球，以及赛事后如果裁判或相关管理机构更改任何赛果则不计算在内。 </li>
                              <li>除非在个别玩法规则另有注明，所有滚球投注的结算将以90分钟的赛果为准。 </li>
                              <li>完场时间45分钟是指赛事上半场，其中包含伤停补时。加时赛、淘汰赛、点球，以及赛事后如果裁判或相关管理机构更改任何赛果则不计算在内。</li>
                              <li>对于某些以全场完场时间为80分钟（2 x40分钟）的特定赛事或者友谊赛，所有投注的结算皆以完场时间为准。 </li>
                              <li>若少年赛、友谊赛的完场时间为70分钟（2 x       35分钟）或更少，本公司将在开赛前做出公布，否则该场赛事的注单一律作废。 </li>
                              <li>如果赛事中断或延迟，并且没有在36小时内重新开始，所有该场赛事的投注即被视为无效且取消，除非在个别投注类型规则里另有指定注明。 </li>
                              <li>如果赛事确认取消，所有该场赛事的投注即被视为无效且取消，除非在个别投注类型规则里另有指定注明。如果赛事是在上半场中断，所有上半场的注单将被取消。如果赛事是在下半场中断所有上半场的投注保持有效，但所有下半场的注单将被取消，除非在个别玩法规则另有注明。 </li>
                              <li>除非在个别玩法规则另有注明，乌龙球将予以计算在内。 </li>
                              <li>如果比赛场地有变更（主客队调换），所有此注单将被取消。 </li>
                              <li>对于国际赛事，只要变更的场地仍在同一个国家内，所有注单将保持有效。 </li>
                              <li>对于国际赛事，只要变更的场地仍在联赛原定举办的国家内，所有注单将保持有效。 </li>
                              <li>本公司保留权利取消任何因更换场地而可能对赛事结果有影响的注单。 </li>
                              <li>若赛事的确切开赛时间不明（比如，由于电视直播时间安排的问题），要是在原本开赛时间的72小时之内，本平台保留调整该开赛时间的权利。</li>
                          </ul>
                          <p class="org" id="dr-2">主要市场</p>
                          <p style="margin-left:15px; font-size:14px"><strong>让球盘</strong></p>
                          <p style="margin-left:20px;">
                              <strong>一般规则</strong>
                          </p>
                          <ul style="margin:10px;">
                              <li>预测哪一支球队在盘口指定的让球数在全场/半场/赛事某个时节赢得比赛。</li>
                              <li>“让球盘”则定义为在比赛正式开始前，一方球队已得到另一方让的虚拟分数，以领先的情况下开始比赛。</li>
                              <li>所有注单将按盘口开出的让球数在玩法的时节结束后结算。</li>
                              <li>让球队（优势球队）将给出让球，让球数将显示在赔率的左侧，让球队在盘面上也会以粗型字体显示</li>
                              <li>
                                  让球盘的玩法分为以下几种：
                                  <ul style="list-style:lower-alpha">
                                      <li>整数让球也或称为让‘一球’（如：-1，-2，-3，等）</li>
                                      <li>非整数让球也或称为‘半球’（如：-0.5，-1.5，-2.5，等）</li>
                                      <li>混合以上让‘半球/一球’的方式（如：-0/0.5，-0.5/1，-1/1.5，等）</li>
                                  </ul>
                              </li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>让球 </strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>根据盘口让球信息预测最终获得胜利的球队。</li>
                              <li>投注的结算皆以球赛所规定的完场时间90分钟为准。</li>
                              <li>如果赛事在90分钟结束前取消或中断，所有注单将会被视为无效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>让球 - 上半场</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有上半场的投注将以上半场45分钟其中包含伤停补时后的赛果结算。</li>
                              <li>如果赛事在上半场时节因任何理由取消或中断，所有上半场注单将被取消。</li>
                              <li>如果赛事在下半场或加时赛因任何理由取消或中断，所有上半场注单保持有效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>滚球让球</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有注单将按照盘口开出让球信息，在相应投注类型结束后结算。</li>
                              <li>结算是以投注时到比赛/时节结束后的赛果做裁决。即是以赛事完场比分减去投注当时的比分。上半场的滚球让球投注将以上半场结束后的赛果结算。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 让球 </strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有注单将按照盘口开出让球信息，在30分钟加时赛结束后计算，包含补时。</li>
                              <li>如果赛事在加时赛结束前取消或中断，所有注单将会被视为无效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 让球-上半场 </strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有注单将按照盘口开出让球信息，在15分钟加时赛结束后计算，包含补时。</li>
                              <li>加时赛中如果赛事在上半场取消或中断，所有上半场注单将会被视为无效。</li>
                              <li>加时赛中如果赛事在下半场或补时阶段取消或中断，所有上半场注单将会被视为有效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>15 分钟进球数 （让球）</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>根据盘口让球信息预测最终获得15分钟内比赛胜利的球队。</li>
                              <li>在每个15分钟开始，所有球队在开始此时段比赛都是0-0，之前的得分点是没有影响的。</li>
                              <li>所有的投注将以开始下个时节前的赛果结算。</li>
                              <li>
                                  如果赛事中断，所有当前15分钟时段的投注以及将要进行的下一个15分钟时段投注将视为无效，任何15分钟时段投注，如果该时段完整结束，注单将被视为有效。<br>
  
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>15分钟-时段1</td>
                                              <td>上半场开始-14分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段2</td>
                                              <td>15分钟-29分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段3</td>
                                              <td>30分钟-半场</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段4</td>
                                              <td>下半场开始-59分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段5</td>
                                              <td>60分钟-74分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段6</td>
                                              <td>75分钟-全场</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </li>
                          </ul>
                          <p style="margin-left:15px; font-size:14px"><strong>大小盘</strong></p>
                          <p style="margin-left:20px;">
                              <strong>一般规则</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测赛事总入球数将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>如果赛事的总入球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。</li>
                              <li>所有注单将按盘口开出的大/小盘球数在玩法的时节结束后结算。</li>
                              <li>
                                  大/小盘的玩法分为以下几种：
                                  <ul style="list-style:lower-alpha">
                                      <li>大/小于‘一球’（如：2，3，4，等）</li>
                                      <li>大/小于‘半球’（如：1.5，2.5，3.5，等）</li>
                                      <li>混合以上‘半球/一球’的方式（如：1.5/2，2.5/3，3.5/4，等）</li>
                                  </ul>
                              </li>
                              <li>
                                  如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。请参考以上范例：
                                  <ul style="list-style: lower-alpha">
                                      <li>
                                          范例1：会员投注大于2.5球：
                                          <ul style="list-style:lower-roman">
                                              <li>赛事在比分2-1时中断。</li>
                                              <li>尽管赛事中断，但因结果已经明确并且若之后有任何潜在进球将对盘口结算裁决没有影响，所有此会员注单结算为赢。</li>
                                          </ul>
                                      </li>
                                      <li>
                                          范例2：会员投注小于2.5球：
                                          <ul style="list-style:lower-roman">
                                              <li>赛事在比分2-1时中断。</li>
                                              <li>尽管赛事中断，但因结果已经明确并且若之后有任何潜在进球将对盘口结算裁决没有影响，所有此会员注单结算为输。</li>
                                          </ul>
                                      </li>
                                      <li>
                                          范例3：会员投注大于3.5球：
                                          <ul style="list-style:lower-roman">
                                              <li>赛事在比分2-1时中断。</li>
                                              <li>由于赛事在未有明确的结果能裁决会员的注单前中断，此会员的注单将被取消。</li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>进球: 大 / 小 </strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有的投注将以全场90分钟的赛果结算。</li>
                              <li>如果比赛停止，取消或中断，所有投注将被视为无效，除非在赛事取消或中断前，结果已经明确。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>进球: 大 / 小 - 上半场</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有上半场的投注将以上半场45分钟的赛果结算。</li>
                              <li>如果赛事在上半场时节因任何理由取消或中断，所有上半场注单将被取消。除非在赛事取消或中断前，结果已经明确。</li>
                              <li>如果赛事在下半场或加时时段因任何理由取消或中断，所有上半场注单保持有效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>滚球大小盘</strong>
                          </p>
                          <ul style="list-style:none; margin:10px;">
                              <li>结算是以双方球队在90分钟内的总进球数为依据。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 进球: 大 / 小</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>两支球队开始加时赛的比分为0-0，之前赛果属于常规时间内入球不会计算在内。</li>
                              <li>所有的投注将以30分钟加时赛后结果结算，包括补时。</li>
                              <li>在加时赛结束前如果比赛停止，取消或中断，所有投注将被视为无效，除非在赛事取消或中断前，结果已经明确。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 进球: 大 / 小 - 上半场</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有投注将会按照15分钟赛事结束后赛果为准，包含补时。</li>
                              <li>如果比赛在上半场停止，取消或者中断，所有上半场注单将被视为无效。</li>
                              <li>如果比赛在下半场或补时期间停止，取消或者中断，所有上半场注单将被视为有效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>球队进球数 - 大 / 小</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测在特定的比赛有关期间内，其中一支球队的总入球数将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>如果赛事的总入球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。</li>
                              <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，注单才会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>15 分钟进球数 (大 / 小)</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测赛事总入球数将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>如果总进球数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。</li>
                              <li>在每个15分钟时开始，所有球队在开始此时节比赛都是0-0，之前的得分是没有影响的。 </li>
                              <li>
                                  如果比赛被中断，所有将要进行的15分钟时段投注将被视为无效。任何15分钟时段投注，如果该时段中赛事进行完整，此注单将被视为有效。在15分钟时段中，如果赛事已有明确结果并且之后对赛事没有任何影响，总进球数大/小盘注单才会被结算。任何其他的情况，投注将被视为无效。<br>
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>15分钟-时段1</td>
                                              <td>上半场开始-14分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段2</td>
                                              <td>15分钟-29分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段3</td>
                                              <td>30分钟-半场结束</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段4</td>
                                              <td>下半场开始-59分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段5</td>
                                              <td>60分钟-74分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段6</td>
                                              <td>75分钟-全场结束</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </li>
                          </ul>
                          <p style="margin-left:15px; font-size:14px"><strong>加时赛</strong><strong> - 5 分钟进球数 (大 / 小)</strong></p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测赛事总入球数将大于或小于在盘口指定的大/小盘球数。 </li>
                              <li>如果总进球数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。 </li>
                              <li>在每个5分钟时开始，所有球队在开始此时节比赛都是0-0，之前的得分是没有影响的。 </li>
                              <li>如果比赛被中断，所有将要进行的5分钟时段投注将被视为无效。任何5分钟时段投注，如果该时段中赛事进行完整，此注单将被视为有效。在5分钟时段中，如果赛事已有明确结果并且之后对赛事没有任何影响，总进球数大/小盘注单才会被结算。任何其他的情况，投注将被视为无效。 </li>
                              <li>
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>5分钟-时段1</td>
                                              <td>上半场开始-04分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>5分钟-时段2</td>
                                              <td>05分钟-09分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>5分钟-时段3</td>
                                              <td>10分钟-半场结束</td>
                                          </tr>
                                          <tr>
                                              <td>5分钟-时段4</td>
                                              <td>下半场开始-19分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>5分钟-时段5</td>
                                              <td>20分钟-24分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>5分钟-时段6</td>
                                              <td>25分钟-全场结束</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </li>
                          </ul>
                          <p style="margin-left:15px; font-size:14px"><strong>1 X 2（独赢盘）</strong></p>
                          <p style="margin-left:20px;">
                              <strong>一般规则</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测哪一支球队将在比赛胜出。盘口提供两支球队和平局为投注选项。</li>
                              <li>投注将以0-0的比分作为计算基础（让球并不计算在内）。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>独赢</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测哪一支球队将在90分钟比赛胜出或赛事和局。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>独赢 - 上半场</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>所有上半场的投注将以上半场45分钟赛果结算。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>滚球独赢</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测滚球时，哪一支球队胜出。</li>
                              <li>投注的结算将以90分钟完场赛果为准。</li>
                              <li>
                                  以下为滚球独赢盘范例。
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td></td>
                                              <td>目前得分</td>
                                              <td>赔率</td>
                                          </tr>
                                          <tr>
                                              <td>阿森纳（主）</td>
                                              <td>1</td>
                                              <td>1.61</td>
                                          </tr>
                                          <tr>
                                              <td>曼联</td>
                                              <td>0</td>
                                              <td>6.0</td>
                                          </tr>
                                          <tr>
                                              <td>和局</td>
                                              <td></td>
                                              <td>3.8</td>
                                          </tr>
                                      </tbody>
                                  </table>
  
                                  <ul style="list-style:lower-alpha">
                                      <li>
                                          范例1：在赛事比分为阿森纳1-0曼联时，会员投注滚球独赢盘 – 阿森纳赢：
                                          <ul style="list-style:lower-roman">
                                              <li>完场赛果为阿森纳2-1曼联。</li>
                                              <li>因阿森纳在完场时胜出，所有投注阿森纳的注单结算为赢。</li>
                                              <li>所有在比分1-0时投注曼联或平局的注单将结算为输。</li>
                                          </ul>
                                      </li>
                                      <li>
                                          范例2：在赛事比分为阿森纳1-0曼联时，会员投注滚球独赢盘 –曼联赢：
                                          <ul style="list-style:lower-roman">
                                              <li>完场赛果为阿森纳1-1曼联。</li>
                                              <li>因完场赛果为平局，所有投注曼联以及阿森纳的注单将结算为输。</li>
                                              <li>所有投注平局的注单将结算为赢。</li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li>加时赛则视为一场新的赛事并且会开出加时赛盘口。投注将按加时赛时节的结果做结算。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 独赢</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测哪一支球队将会在30分钟内胜出，或赛事平局，包含补时。</li>
                              <li>如果比赛在加时赛结束前暂停，取消或中止，所有投注将被视为无效。</li>
                          </ul>
                          <p style="margin-left:20px;"><strong>加时赛 - 独赢 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测哪一支球队将会在15分钟内胜出，或赛事平局，包含补时。</li>
                              <li>如果赛事在加时赛上半场取消或中断，所有上半场注单将会被取消。</li>
                              <li>如果赛事在加时赛下半场取消或中断，所有上半场注单将被会视为有效。</li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>15 分钟进球数 (独赢)</strong>
                          </p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测在规定时段内哪一支球队将会获胜，赛事盘口将会提供两支球队，以及和局。</li>
                              <li>所有两支球队在每时段开始时比分将按照0-0计算，之前比分不计算在内。</li>
                              <li>
                                  如果赛事中断，所有当前15分钟时段的投注以及将要进行的下一个15分钟时段投注将视为无效，任何15分钟时段投注，如果该时段完整结束，注单将被视为有效。<br>
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>15分钟-时段1</td>
                                              <td>上半场开始-14分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段2</td>
                                              <td>15分钟-29分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段3</td>
                                              <td>30分钟-半场</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段4</td>
                                              <td>下半场开始-59分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段5</td>
                                              <td>60分钟-74分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段6</td>
                                              <td>75分钟-全场</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </li>
                          </ul>
                          <p style="margin-left:15px; font-size:14px"><strong>进球数 - 单 / 双 </strong></p>
                          <p style="margin-left:20px;">
                              <strong>进球数: 单 / 双 </strong>
                          </p><ul style="list-style:decimal; margin:10px;">
                              <li>预测90分钟内，赛事总入球对单或双。</li>
                              <li>若最终比分为：0-0，将会按照“双”来计算。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>进球数: 单 / 双 - 上半场 </strong>
                          </p><ul style="list-style:decimal; margin:10px;">
                              <li>预测45分钟赛事的总入球数是单数或双数。</li>
                              <li>若最终比分为：0-0，将会按照“双”来计算。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 进球数: 单 / 双 </strong>
                          </p><ul style="list-style:decimal; margin:10px;">
                              <li>预测加时30分钟赛事的总入球数是单数或双数，包含补时。</li>
                              <li>若最终比分为：0-0，将会按照“双”来计算。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>加时赛 - 进球数: 单 / 双 -上半场 </strong>
                          </p><ul style="list-style:decimal; margin:10px;">
                              <li>预测加时赛15分钟内的总进球数是单数或双数，包括补时。</li>
                              <li>若最终比分为：0-0，将会按照“双”来计算。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>15 分钟进球数 (单 / 双) </strong>
                          </p><ul style="list-style:decimal; margin:10px;">
                              <li>预测在规定时间内进球数是单或双。</li>
                              <li>所有两支球队在每时段开始时比分将按照0-0计算，之前比分不计算在内。</li>
                              <li>
                                  如果赛事中断，所有当前15分钟时段的投注以及将要进行的下一个15分钟时段投注将视为无效，任何15分钟时段投注，如果该时段完整结束，注单将被视为有效。<br>
  
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>15分钟-时段1</td>
                                              <td>上半场开始-14分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段2</td>
                                              <td>15分钟-29分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段3</td>
                                              <td>30分钟-半场</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段4</td>
                                              <td>下半场开始-59分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段5</td>
                                              <td>60分钟-74分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段6</td>
                                              <td>75分钟-全场</td>
                                          </tr>
                                      </tbody>
                                  </table>
  
                              </li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>波胆</strong></p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测一场特定赛事中相关时间段的准确比分。</li>
                              <li>"任何其他比分"是指任何的比分，而不是一个市场选项列表类型。</li>
                          </ul>
  
                          <p style="margin-left:60px;">
                              <strong>波胆</strong>
                          </p><ul style="list-style:decimal; margin:10px; margin-left:50px;">
                              <li>预测一场特定赛事的全场准确比分。</li>
                              <li>全场波胆投注的结算根据90分钟完场比分做出裁决。</li>
                              <li>如果赛事取消，全场波胆投注在“其它比分”为仅有可能获胜的选项，投注将被视为有效；所有其他的投注则被视为无效，此是由于赛事无条件决定后面的进球不会影响赛事的结果。</li>
                          </ul>
  
                          <p style="margin-left:60px;">
                              <strong>波胆 - 上半场</strong>
                          </p><ul style="list-style:decimal; margin:10px; margin-left:50px;">
                              <li>预测一场特定赛事半场的准确比分。 </li>
                              <li>半场波胆投注是指投注上半场的比赛，投注的结算根据半场“45分钟”结束后的比分做出裁决。</li>
                              <li>如果赛事在上半场取消，所有半场波胆投注在“其它比分”为仅有可能获胜的选项，投注将被视为有效；所有其他的投注则被视为无效，此是由于赛事无条件决定后面的进球不会影响赛事的结果。</li>
                              <li>如果赛事在下半场取消，所有半场波胆的投注被视为有效。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>半场/全场</strong></p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测赛事的半/全场结果。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>净胜球数</strong></p>
                          <ul style="list-style:decimal; margin:10px;">
                              <li>预测完场比赛结束后的净胜球数。</li>
                              <li>投注的结算根据90分钟完场赛事比分的差别做裁决。</li>
                              <li>比赛结束为平局将根据比分战平结算。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>加时赛</strong><strong> - </strong><strong>净胜球数</strong><strong> </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测加时赛结束后的净胜球数。 </li>
                              <li>所有的投注将以30分钟加时赛后结果结算，包括补时。</li>
                              <li>比赛结束为平局将根据比分战平结算。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>双重机会</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>在三种可能出现的赛果中选择两种进行投注; 主场赢或打平（1和X）, 客场赢或打平（2和X）或主场或客场赢（1和2）。</li>
                              <li>
                                  共有三种选择: 1 X, X 2, 1 2：
                                  <ol style="list-style:lower-alpha">
                                      <li>"1" 代表: 主场赢。</li>
                                      <li>"X" 代表: 平手。</li>
                                      <li>"2" 代表: 客场赢。</li>
                                  </ol>
                              </li>
                              <li>如果比赛在中立场进行﹐列在盘面的上方球队则被视为主队。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>三项让球投注</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>根据盘口开出信息预测最终获胜球队，包括和局以及第三个可能出现的结果。</li>
                              <li>结算将会根据选择的球队包括和局，并最终在比赛中获得有利的结果。</li>
                              <li>和局将会显示的主场让球盘， 用于区分作用</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
  
                                      <li>主场[-1]=主场让一球半</li>
                                      <li>和局[-1]=主场净胜一球</li>
                                      <li>客场[+1]=客场受让半球</li>
  
                                      <li>主场[+2]=主场受让一球半</li>
                                      <li>和局[+2]=客场净胜二球</li>
                                      <li>客场[-2]=客场让二球半</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>落后反超获胜</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队在比赛的任何时间里都为输，然而却在最后“90分钟”反超为赢。</li>
                              <li>选择的球队必须在比赛的任何时间里都为输，但是在接下来的最后“90分钟”却获胜为赢。</li>
                              <li>如果比赛被中断，所有的投注均视为无效。</li>
                          </ul>
  
                          <p style="margin-left:15px; font-size:14px"><strong>平局退单</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在比赛胜出。但若比赛结果为平局，所有投注将被取消。</li>
                          </ul>
                          <p class="org" id="dr-3">进球集锦</p>
                          <p style="margin-left:10px; font-size:14px"><strong>总进球数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测一个特定赛事相关时间段两队的总入球数。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>总进球数</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测全场两队的总入球数。</li>
                              <li>全场总入球数注单结算是根据全场“90分钟”为准。</li>
                              <li>如果赛事中断，总入球数投注将仅结算当赛事进球7个或更多，这是由于任何后面的进球不会影响赛事结果。任何其他的情况，投注将被视为无效。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>总进球数 - 上半场 </strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测半场两队的总入球数。</li>
                              <li>半场总入球数注单仅限于上半场。注单结算是根据上半场“45分钟”为准。</li>
                              <li>如果赛事中断，总入球数投注将仅结算当赛事进球4个或更多，这是由于任何后面的进球不会影响赛事结果。任何其他的情况，投注将被视为无效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后进球球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>在法定比赛90分钟内，预测最先或最后进球的球队。</li>
                              <li>乌龙球将予以计算为得分那方入球。比如: A队VS B队，B 队踢进一个乌龙球造成比分1-0，此球计为A队先进球。</li>
                              <li>如果赛事在有进球后中断，所有最先进球球队注单保持有效。</li>
                              <li>如果赛事中断，所有最后进球球队注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>滚球-下一支进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛进行时，哪一支球队会进下一个球。</li>
                              <li>加时赛则视为一场新的赛事并且会开出加时赛盘口。</li>
                              <li>请注意，乌龙球也属于进球范围内。</li>
                              <li>如果赛事断，那么所有投注此注单将被视为有效，除非赛事已有明确结果并且之后对赛事没有任何影响。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>X 进球 (下一个进球) </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测双方球队在90分钟完场时间内是否进球。</li>
                              <li>如果赛事在双方球队都有进球后中断，所有注单保持有效。</li>
                              <li>乌龙球将予以计算为得分那方入球。例：A队VS B队，如A 队踢进一个乌龙球，此球计为B队的分数。</li>
                              <li>如果赛事在没有进球前中断或延后，所有注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>双方球队进球- 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测双方球队在第一个45分钟时间内是否进球。</li>
                              <li>如果赛事在上半场双方球队都有进球后中断，所有注单保持有效。</li>
                              <li>如果赛事在上半场双方球队没有进球前中断或延迟，所有注单将被取消。</li>
                              <li>乌龙球将予以计算为得分那方入球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>双方球队进球- 下半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测双方球队在第二个45分钟时间内是否进球。</li>
                              <li>如果赛事在下半场双方球队都有进球后中断，所有注单保持有效。</li>
                              <li>如果赛事在下半场双方球队没有进球前中断或延迟，所有注单将被取消。</li>
                              <li>乌龙球将予以计算为得分那方入球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>零失球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测某个球队在90分钟的比赛中，没有任何失球。</li>
                              <li>选择投注球队不需要赢得比赛，例如：赛果 0-0，注单为赢。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>零失球获胜</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测您投注的球队在90分钟完场时间内没让敌方攻入任何一球且取得胜利。</li>
                              <li>*零*失球是指球队在赛事中没让敌方攻入任何一球，争取完美防守。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>先进2球/3球的一方</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队先进2/3球。</li>
                              <li>如果赛事在一方球队已经进2/3球后中断，所有注单将保持有效。</li>
                              <li>如果所选球队没有进球，则将被视为本注单为输。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最多进球的半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>在赛事90分钟结束后，猜测哪个“45分钟”半场入球最多。</li>
                              <li>盘口提供两种投注选择，如上下半场入球数一样，注单将被视为无效。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>上半场</li>
                                      <li>下半场</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最多进球的半场 - 独赢</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个半场将会进最多球。</li>
                              <li>盘口提供三种投注选择，如上下半场入球数一样，投注“和”将会为赢。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>上半场</li>
                                      <li>下半场</li>
                                      <li>平局</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>双半场进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测主队/客队在90分钟完场时间内是否在上下半场都至少进一球。</li>
                              <li>如果投注球队只有在一个半场有入球，或未入球，注单为输。</li>
                              <li>乌龙球将只会被计算在得分球队一方。</li>
                              <li>如果赛事在所投注的球队已在两个半场都进球后中断，所有投注此球队的注单将结算为赢。</li>
                              <li>如果赛事在下半场中断，并且所投注的球队并未在上半场进球，所有投注此球队的注单将结算为输。</li>
                              <li>如果上半场进球球队已经确认，而赛事在下半场中断，那么所有投注该球队注单将被视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>首个进球方式</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测首个进球的方式。</li>
                              <li>如果赛事在首个进球后中断，所有首个进球方式的注单将保持有效。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>任意球：球必须是直接踢进的方式。间接行的任意球如果最后是罚球者本人踢进则计算在内。</li>
                                      <li>点球：球必须是由罚球者本人直接踢进的方式。若遇到补射的情况，即使是罚球者本人踢进也将不计算在内。</li>
                                      <li>乌龙球：球必须授予为乌龙球。</li>
                                      <li>头球：进球者必须明确的用头进球。</li>
                                      <li>射门：所有其他的进球方式。除了以上所列出的方式，所有其他进球的方式都包含在此方式。</li>
                                      <li>没有进球：赛事没有进球。</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>首个进球时间-3项 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内首个进球时间，盘口提供无进球投注选项。</li>
                              <li>
                                  选项可列为：
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>选项1</td>
                                              <td>上半场开始 – 25:59</td>
                                          </tr>
                                          <tr>
                                              <td>选项 2</td>
                                              <td>26:00 - 全场</td>
                                          </tr>
                                          <tr>
                                              <td>选项 3</td>
                                              <td>没有进球</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </li>
                              <li>出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。</li>
                              <li>范例：如果投注首个进球时间的选项是‘赛事的第26分钟或之前’，而确实进球的时间为26分钟49秒，进球的范围属于‘第27分钟后’，因此投注将结算为输。</li>
                              <li>如果赛事在首个进球后中断，所有首个进球时间的注单将保持有效。</li>
                              <li>如果赛事在没有进球前中断，所有首个进球时间的注单将被取消。</li>
                              <li>乌龙球将予以计算在内。裁判判定无效的进球是将不予以计算在内。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>首个进球时间</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内首个进球时间。</li>
                              <li>
                                  选项可列为：
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>15分钟-时段1</td>
                                              <td>上半场开始-14分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段2</td>
                                              <td>15分钟-29分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段3</td>
                                              <td>30分钟-半场</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段4</td>
                                              <td>下半场开始-59分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段5</td>
                                              <td>60分钟-74分59秒</td>
                                          </tr>
                                          <tr>
                                              <td>15分钟-时段6</td>
                                              <td>75分钟-全场</td>
                                          </tr>
                                      </tbody>
                                  </table>
  
                              </li>
                              <li>出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。</li>
                              <li>如果赛事在首个进球后中断，所有首个进球时间的注单将保持有效。</li>
                              <li>如果赛事在没有进球前中断，所有首个进球时间的注单将被取消。</li>
                              <li>乌龙球将予以计算在内。裁判判定无效的进球是将不予以计算在内。</li>
                          </ul>
                          <p style="margin-left:10px; font-size:14px"><strong>乌龙球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li> 预测一场比赛中是否会有乌龙球。</li>
                              <li>根据双方球队上场球员是否踢进乌龙球，来进行结算。</li>
                              <li>如果比赛在有乌龙球之前中断，所有该盘口的投注将被视为无效</li>
                          </ul>
                          <p class="org" id="dr-4">球员</p>
                          <p style="margin-left:10px; font-size:14px"><strong>一般规则（第一/最后/任何时间进球得分）</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>“其他”选项是指在官方“90分钟”比赛内没有标注的进球数（不包括乌龙球） </li>
                              <li>'没有进球'的选项是指两队在官方“90分钟”内（即全场0-0）打入0球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最先进球球员</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>按盘口提供的球员出场名单中，预测在90分钟完场时间内最先入球的球员。</li>
                              <li>乌龙球不计于最先进的球。如果出现乌龙球，下一个或之前的进球才被视为有效。</li>
                              <li>如果赛事唯一的进球是乌龙球，盘口上"其他"的选项将结算为赢。</li>
                              <li>如果投注的最先进球球员没有参与该场赛事或在第一个进球后才进场，注单将被取消。</li>
                              <li>如果投注的最先进球球员在没有射入第一个球就被罚下场或被其他球员替代，注单将结算为输。</li>
                              <li>如果赛事在射入第一个球后中断，所有投注最先进球球员的注单将保持有效。</li>
                              <li>如果赛事在没有进球前中断，所有投注最先进球球员的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最后进球球员</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>按盘口提供的球员出场名单中，预测在90分钟完场时间内最后入球的球员。</li>
                              <li>乌龙球将不会被视为最后进球。如果出现乌龙球，下一个或之前的进球才被视为有效。</li>
                              <li>如果赛事唯一的进球是乌龙球，盘口上"其他"的选项将结算为赢。</li>
                              <li>如果投注的最后进球球员在没有射入最后一个进球就被罚下场或被其他球员替代，注单将结算为输</li>
                              <li>任何参赛并且上场的球员都可能是最后进球球员。</li>
                              <li>如果赛事在没有进球前中断，所有投注最后进球球员的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>任何时间进球球员</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>按盘口提供的球员出场名单中，预测在90分钟完场时间内哪位球员会进球。</li>
                              <li>如果投注的球员没有参与该场赛事，注单将被取消。</li>
                              <li>只要球员在比赛的90分钟完场时间内有上场参与比赛，注单则视为有效。</li>
                              <li>如果赛事在已有球员进球后中断，所有投注进球球员的注单将保持有效。</li>
                              <li>如果比赛被取消，所有投注在提名的球员的进球均视作无效。然而，如果提名的球员在比赛取消前被红卡罚下，那么所有与该球员相关的投注注单将视作输来结算。</li>
                              <li>乌龙球，加时赛进球和点球都不计于此玩法。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>球员特殊投注（进球数）</strong></p>
                          <p style="margin-left:20px;">
                              <strong>一般规则</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>上半场投注在45分钟进行。</li>
                              <li>全场投注在90分钟结算。</li>
                              <li>双方球员都必须是比赛先发的11名球员当中注单才视为有效。</li>
                              <li>提供的盘口仅限于球员将参与的指定比赛以及比赛日期。</li>
                              <li>乌龙球将不计算在内。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>让球</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>根据盘口开出信息预测哪一个球员入球最多。</li>
                              <li>如果赛事中断或推迟，所有注单将会被取消，除非赛事已有明确结果并且之后入球对赛事没有任何影响。除非赛事已有明确结果并且之后入球对赛事没有任何影响。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>大 / 小 </strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测赛事中不同球员总进球数将大于或小于在盘口指定的大/小盘数。</li>
                              <li>如果赛事中断或推迟，所有注单将会被取消，除非赛事已有明确结果并且之后入球对赛事没有任何影响。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>独赢</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一个球员将在比赛中入球最多，盘口同样提供选择“平局/和”。</li>
                              <li>如果赛事中断或推迟，所有注单将会被取消，除非赛事已有明确结果并且之后入球对赛事没有任何影响。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>单 / 双 </strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测赛事中球员的总进球数是单数或双数。</li>
                              <li>如果赛事中断或推迟，所有注单将会被取消，除非赛事已有明确结果并且之后入球对赛事没有任何影响。</li>
                              <li>若比赛没有球员进球，赛果为0，投注‘双’注单为赢。</li>
                          </ul>
                          <p class="org" id="dr-5">特别</p>
                          <p style="margin-left:10px; font-size:14px"><strong>开球球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛先开球的球队。</li>
                              <li>如果赛事在开踢后中断，所有投注先开球球队的注单将保持有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>胜出方法</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队能在球赛中指定的时段内赢得比赛。</li>
                              <li>根据指定的球队能否在指定的时段内赢得比赛，来进行结算。时段可分为：“90分钟”，加时赛或点球大战。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>晋级方法</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队能在球赛中指定的时段内赢得比赛，从而晋级到联赛的下一阶段。</li>
                              <li>根据指定的球队能否在指定的时段内赢得比赛，来进行结算。时段可以选择：“90分钟”，加时赛或点球大战。</li>
                              <li> 一场比赛的两个回合的总比分（包括客场进球规则）将计入“90分钟”结束的结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>赢得所有半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测选择的球队在90分钟完场时间内（不包括加时赛及点球赛）是否在上半场和下半场的进球数多于对手。</li>
                              <li>如果赛事中断，所有注单将被取消。</li>
                              <li>如果任何一个半场或上/下半场的结果是平局或没有进球，所有注单将结算为输。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>赢得任一半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测选择的球队在90分钟完场时间内（不包括加时赛及点球赛）是否在上/下半场的其中一个半场进球数多于对手。</li>
                              <li>如果赛事在下半场中断，但在上半场其中一方球队已经获胜，注单将保持有效。如果两支球队在上半场平局，注单将被取消。</li>
                              <li>如果赛事出现平局或上下半场均无进球，所有注单将视为输。如双方球队各赢半场，则投注两个球队注单为赢。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>射正次数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内两个球队标射正次数。</li>
                              <li>注单的结算将根据官方赛果或赛事权威机构判定的结果为准。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>上半场–第一个行动</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在45分钟完场时间内完成一系列的第一个行动。</li>
                              <li>选项有分为：任意球，球门球，界外球，越位，进球，罚牌和等等。</li>
                              <li>如果赛事在上半场中断，所有注单将被视为无效，除了第一个行动注单已有结果。如果赛事在下半场中断，所有上半场投注将会被视为有效。</li>
                              <li>全部的单子会依据赛事的官方数据结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>下半场–第一个行动</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在第二段的45分钟完场时间内完成一系列的第一个行动。</li>
                              <li>选项有分为：任意球，球门球，界外球，越位，进球，罚牌和等等。</li>
                              <li>如果赛事在下半场中断，所有注单将被视为无效，除了第一个行动注单已有结果。</li>
                              <li>全部的单子会依据赛事的官方数据结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>半场伤停补时时间预测</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测半场结束伤停补时具体时间。</li>
                              <li>所有注单结算将会按照半场结束后第四裁判举牌补时的时间为准。</li>
                              <li>预测伤停补时时间，只计算在官方正常90分钟赛事内的补时，加时赛将不包含在内。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>上半场伤停补时大/小</strong>
                          </p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测上半场官方时间45分钟后的伤停补时时间。</li>
                              <li>如果补时总时间，多于盘口的大/小盘时间，则为大盘。如果少于盘口的大/小盘时间，则为小盘。</li>
                              <li>所有注单结算将会按照第四裁判举牌补时时间为准，在赛事正常45分钟结束后确定的补时时间。</li>
                              <li>如果赛事在官方时间45分钟之内中断，所有投注上半场伤停补时注单将会取消。</li>
                              <li>如果赛事是在上半场比赛确认结束后中断，所有投注上半场伤停补时将会被视为有效的。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>下半场伤停补时大/小</strong>
                          </p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测下半场的伤停补时时间。</li>
                              <li>如果补时总时间，多于盘口的大/小盘时间，则为大盘。如果少于盘口的大/小盘时间，则为小盘。</li>
                              <li>所有注单结算将会按照第四裁判举牌补时时间为准，在赛事正常90分钟结束后确定的补时时间。</li>
                              <li>如果赛事在官方时间90分钟之内中断，所有投注下半场伤停补时注单将会取消。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>双半场总伤停补时—大/小</strong>
                          </p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测上半场和下半场的伤停补时时间。</li>
                              <li>一旦赛事在官方时间90分钟完成，总伤停补时将会以上半场和下半场伤停补时之和为结果。</li>
                              <li>如果伤停补时时间多于盘口的大/小盘时间，则为大盘；如果少于盘口的大/小盘时间，则为小盘。</li>
                              <li>如果赛事在官方时间90分钟之内中断，所有投注双半场总伤停补时的注单将会取消。</li>
                          </ul>
                          <p class="org" id="dr-6">角球</p>
                          <p style="margin-left:10px; font-size:14px"><strong>角球：一般规则</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>被裁定但并未实际执行的角球将不予以计算在内。</li>
                              <li>注单的结算将根据官方赛果或赛事权威机构判定的结果为准。</li>
                              <li>如果角球需重新进行(例如，在禁区内犯规)，重新进行的角球仍计为同一个角球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 让球 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪一支球队在盘口指定的让球数获得最多角球。</li>
                              <li>所有注单将按盘口开出的让球数在玩法的时节结束后结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 让球 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在45分钟完场时间内哪一支球队在盘口指定的让球数获得最多角球。</li>
                              <li>所有注单将按盘口开出的让球数在玩法的时节结束后结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 大/小 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟后完成时间内（包括伤停补时）总获得的角球将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>如果赛事获得的总角球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。</li>
                              <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，角球的大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 大 / 小 - 上半场 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在45分钟后完成时间内总获得的角球将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>如果赛事获得的总角球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。</li>
                              <li>如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。</li>
                              <li>如果赛事在下半场中断，所有投注上半场角球大/小盘将会被视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 独赢</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在90分钟比赛内获得更多角球数，盘口提供两支球队和平局为投注选项。</li>
                              <li>如果赛事中断前已有明确结果并且之后角球对赛事没有任何影响，总角球数独赢盘注单将会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
  
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 单 / 双</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测90分钟内赛事的总角球数是单数或双数。</li>
                              <li>若比赛没有角球，结果为0，投注‘双’注单将会盈利。</li>
                              <li>如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球: 单 / 双 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测45分钟内赛事的总角球数是单数或双数。</li>
                              <li>如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。</li>
                              <li>如果赛事在下半场中断，所有投注上半场角球单/双盘将会被视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后角球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内，第一或最后获得角球的球队。</li>
                              <li>如果赛事在获得第一个角球后中断，所有第一个角球的注单将保持有效。</li>
                              <li>如果赛事中断，所有最后一个角球的注单将被取消。</li>
                              <li>如果赛事并没有获得角球，所有第一和最后一个角球的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最多角球的半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个半场将会获得最多角球。</li>
                              <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，注单才会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
  
  
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球 - X角球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪支球队将踢进指定的角球。</li>
                              <li>指定角球将提前提供一个或多个选择，例如，第四个角球或第四和第五个角球（各自为独立盘口）。</li>
                              <li>重踢的角球将只计算为一次。</li>
                              <li>如果在踢出指定的角球之前比赛中断，该角球的投注将被视为无效。所有比赛中断之前记录的角球将视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>首个角球时间</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测获得首个角球的时间。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>赛事的第8分钟或之前。</li>
                                      <li>第9分钟后。</li>
                                  </ul>
                              </li>
                              <li>出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。</li>
                              <li>范例：如果投注首个角球时间的选项是‘赛事的第8分钟或之前’，而确实踢角球的时间为8分钟49秒，踢角球时间的范围属于‘第9分钟后’，因此投注将结算为输。</li>
                              <li>如果赛事在获得第一个角球后中断，所有首个角球时间的注单将保持有效。</li>
                              <li>如果赛事在没有获得角球前中断，所有首个角球时间的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未获得角球，所有首个角球时间的注单将被取消。</li>
                              <li>如果首个角球需重新进行，那首个角球时间将以重新进行的角球时间为准。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>15分钟角球数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>依照以上主要市场陈列的15分钟规则，预测哪队将在让球，独赢，大小或单双盘口取得胜利。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>角球双 - 双重机会 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>在三种可能出现的赛果中选择两种进行投注; 主场赢或打平（1和X）,客场赢或打平（2和X）或主场或客场赢（1和2）。</li>
                              <li>
                                  共有三种选择: 1 X, X 2, 1 2：
                                  <ol style="list-style:lower-alpha">
                                      <li>"1" 代表: 主场赢。</li>
                                      <li>"X" 代表: 平手。</li>
                                      <li>"2" 代表: 客场赢。</li>
                                  </ol>
                              </li>
                          </ul>
                          <p class="org" id="dr-7">牌/卡</p>
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌：一般规则</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>针对非球员（例如：教练，場下的替补球员等等）出示的任何罚牌将不计算在内。</li>
                              <li>黄卡将占1分，红卡占2分。如果球员获发两张黄卡，此球员所获发的总罚牌数将计算为黄卡占1分以及红卡占2分，总分三分。（单场赛事每个球员最高可计3分）</li>
                              <li>注单的结算将根据官方赛果或赛事权威机构判定的结果为准。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 让球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪一支球队根据盘口让牌信息获发最多罚牌。</li>
                              <li>所有注单将按盘口开出让牌信息，在相应投注类型结束后结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 让球 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在45分钟完场时间内哪一支球队在盘口指定的让球数获发最多罚牌。</li>
                              <li>所有注单将按盘口开出的让球数在玩法的时节结束后结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 大 / 小</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟比赛结束后总出示的罚牌数将大于或小于在盘口指定的大/小盘牌数。</li>
                              <li>如果出示的总罚牌数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。</li>
                              <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，总罚牌的大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 大 / 小 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在半场“45分钟”比赛结束后总出示的罚牌将大于或小于在盘口指定的大/小盘牌数。</li>
                              <li>如果出示的总罚牌数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。</li>
                              <li>如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。</li>
                              <li>如果赛事在下半场中断，那么所有投注上半场注单均视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 独赢</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在90分钟比赛内获得最多罚牌，盘口提供两支球队和平局为投注选项。</li>
                              <li>如果赛事中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。 </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 独赢 - 上半场</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在45分钟比赛内获得最多罚牌，盘口提供两支球队和平局为投注选项。</li>
                              <li>如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。</li>
                              <li>如果赛事在下半场中断，那么所有投注上半场注单均视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 单 / 双</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测90分钟内赛事的总罚牌数是单数或双数。</li>
                              <li>如果赛事中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。 </li>
                              <li>如无红、黄牌出现，即“0”，此局可视为平局。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌数: 单 / 双 - 上半场 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测45分钟内赛事的总罚牌数是单数或双数。</li>
                              <li>如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。</li>
                              <li>如果赛事在下半场中断，那么所有投注上半场注单均视为有效。</li>
                              <li>如无红、黄牌出现，即“0”，此局可视为平局。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>第一张/最后一张罚牌</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内主队或客队里的球员是否会收到首个或最后一个罚牌（黄卡或红卡）。</li>
                              <li>如果两位或以上球员因一个事件获发罚牌，首先被裁判员出示黄卡或红卡的球员，将被视为"优胜者"为注单进行结算。</li>
                              <li>针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。</li>
                              <li>如果赛事在出示首个罚牌后中断，所有首个罚牌的注单将保持有效。</li>
                              <li>如果赛事在出示首个罚牌后中断，所有最后一个罚牌的注单将被取消。</li>
                              <li>如果赛事在没有出示任何罚牌前中断，所有首个和最后一个罚牌的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未出示任何罚牌，所有首个和最后一个罚牌的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌 – X罚牌</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪支球队将被判罚指定的罚牌。</li>
                              <li>指定罚牌将提前提供一张或多张选择，例如，第四张罚牌或第四和第五张罚牌（各自独立的盘口）</li>
                              <li>如果在指定的罚牌被记录之前比赛中断，该张罚牌的投注将被视为无效。所有比赛中断之前记录的罚牌将视为有效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌最多的球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将由获收的罚牌累积最多分数。</li>
                              <li>注单将按照90分钟完场赛事时间内所获收的黄卡和红卡累积最高分数的球队做结算。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>球队A</li>
                                      <li>球队B</li>
                                      <li>平局</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>第一张罚牌时间</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测出示首个罚牌的时间。</li>
                              <li>
                                  选项可列为：
                                  <ul style="list-style:lower-alpha">
                                      <li>赛事的第8分钟或之前。</li>
                                      <li>第9分钟后。</li>
                                  </ul>
                              </li>
                              <li>出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。</li>
                              <li>范例：如果投注第一张罚牌时间的选项是‘赛事的第8分钟或之前’，而确实出示罚牌的时间为8分钟49秒，罚牌出示时间的范围属于‘第9分钟后’，因此投注将结算为输。</li>
                              <li>针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。</li>
                              <li>如果赛事在出示首个罚牌后中断，所有第一张罚牌时间的注单将保持有效。</li>
                              <li>如果赛事在没有出示任何罚牌前中断，所有第一张罚牌时间的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未出示任何罚牌，所有第一张罚牌时间的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>红卡（球员）</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内是否会出示红卡。</li>
                              <li>针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。</li>
                              <li>如果赛事在出示一个红卡后中断, 所有是否出示红卡的注单将保持有效。</li>
                              <li>如果赛事在没有红卡出示前中断， 所有是否出示红卡的注单将被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>15分钟罚牌数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>依照以上主要市场陈列的15分钟规则，预测哪队将在让球，独赢，大小或单双盘口取得胜利。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>罚牌 - 双重机会 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>在三种可能出现的赛果中选择两种进行投注; 主场赢或打平（1和X）, 客场赢或打平（2和X）或主场或客场赢（1和2）。</li>
                              <li>
                                  共有三种选择: 1 X, X 2, 1 2：
                                  <ul style="list-style:lower-alpha">
                                      <li>"1" 代表: 主场赢。</li>
                                      <li>"X" 代表: 平手。</li>
                                      <li>"2" 代表: 客场赢。</li>
                                  </ul>
                              </li>
                          </ul>
                          <p class="org" id="dr-8">任意球</p>
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后任意球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队会发出第一或最后一个任意球。</li>
                              <li>如果赛事在发出第一个任意球后中断，所有第一个任意球的注单将保持有效。</li>
                              <li>如果赛事在发出第一个任意球后中断，所有最后一个任意球的注单将被取消。</li>
                              <li>如果赛事在没有发出任何任意球前中断，所有第一个和最后一个任意球的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未发出任何任意球，所有第一个和最后一个任意球的注单将被取消。</li>
                          </ul>
                          <p class="org" id="dr-9">射门</p>
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后球门球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队会发出第一或最后一个球门球。</li>
                              <li>如果赛事在发出第一个球门球后中断，所有第一个球门球的注单将保持有效。</li>
                              <li>如果赛事在发出第一个球门球后中断，所有最后一个球门球的注单将被取消。</li>
                              <li>如果赛事在没有发出任何球门球前中断，所有第一个和最后一个球门球的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未发出任何球门球，所有第一个和最后一个球门球的注单将被取消。</li>
                          </ul>
                          <p class="org" id="dr-10">界外球</p>
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后界外球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队会发出第一或最后一个界外球。</li>
                              <li>如果赛事在发出第一个界外球后中断，所有第一个界外球的注单将保持有效。</li>
                              <li>如果赛事在发出第一个界外球后中断，所有最后一个界外球的注单将被取消。</li>
                              <li>如果赛事在没有发出任何界外球前中断，所有第一个和最后一个界外球的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未发出任何界外球，所有第一个和最后一个界外球的注单将被取消。</li>
                          </ul>
                          <p class="org" id="dr-11">替补</p>
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后替补</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队会最先或最后替补球员。</li>
                              <li>如果两位或以上球员同时被替补，首先被裁判员出示替补的球员，将被视为"优胜者"为注单进行结算。</li>
                              <li>如果赛事在替补第一个球员后中断，所有第一个替补的注单将保持有效。</li>
                              <li>如果赛事在替补第一个球员后中断，所有最后一个替补的注单将被取消，除非在赛事中断前，结果已经明确并且若之后有任何潜在替补将对盘口结算裁决没有影响。此情况只有当双方球队都将已分配好的替补机会用完。若遇到任何其他情况，注单将一律被取消。</li>
                              <li>如果赛事在没有任何替补前中断，所有第一个和最后一个替补的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未任何替补，所有第一个和最后一个替补的注单将被取消。</li>
                          </ul>
                          <p class="org" id="dr-12">越位 </p>
                          <p style="margin-left:10px; font-size:14px"><strong>最先/最后越位</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪个球队的球员会最先或最后越位。</li>
                              <li>如果赛事在第一个球员越位后中断，所有第一个越位的注单将保持有效。</li>
                              <li>如果赛事在第一个球员越位后中断，所有最后一个越位的注单将被取消。</li>
                              <li>如果赛事在没有任何球员越位前中断，所有第一个和最后一个越位的注单将被取消。</li>
                              <li>如果在90分钟完场时间内并未有任何球员越位，所有第一个和最后一个越位的注单将被取消。</li>
                          </ul>
                          <p class="org" id="dr-13">点球</p>
                          <p style="margin-left:10px; font-size:14px"><strong>一般规则</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>点球大战将根据胜出回合(和已踢进的点球)来进行结算。</li>
                              <li>如果比赛规则注明必须完成全部点球，任何在已有明确胜出结果后的点球将不计于结算成绩内。</li>
                          </ul>
                          <p style="margin-left:10px; font-size:14px"><strong>点球荣获</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内是否会罚点球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战 - 让球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队根据盘口指定的让球数在点球赛里获胜。</li>
                              <li>驟死賽得分也包括在点球让球盘。</li>
                              <li>如果赛事并未进行点球，所有注单将被取消。</li>
                              <li>在90分钟完场时间内以及加时赛踢进的点球将不计算在内。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战 – 大小盘</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测点球赛总入球数将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>点球大小盘只以10个点球为准（每队5球）。驟死賽得分不包括在点球大小盘。</li>
                              <li>
                                  范例：
                                  <ul style="list-style:lower-alpha">
                                      <li>利物浦 4-1托特纳姆热刺 – 大小球以5球结算。</li>
                                      <li>利物浦6-5托特纳姆热刺（每队踢5个点球后的结果为：利物浦4-4托特纳姆热刺）-大小盘在每队踢5个点球后的8球得分结算。</li>
                                  </ul>
                              </li>
                              <li>如果赛事并未进行点球，所有注单将被取消。</li>
                              <li>在90分钟完场时间内以及加时赛踢进的点球将不计算在内。</li>
                              <li>如果赛事在点球赛时中断，而在赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战 - 独赢 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在点球大战胜出或和局。</li>
                              <li>驟死賽(第6回合起) 将不计算在内。</li>
                              <li>点球独赢盘只计算球队在前5回合的进球。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球：进球/无进球 </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测特定的球队是否会踢进指定的点球。</li>
                              <li>根据点球是否进球来进行结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战</strong><strong> </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测一场比赛是否会有点球大战 </li>
                              <li>无论此前是否有进行加时赛， 将根据比赛是否有点球大战来进行结算。 </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战</strong><strong>&nbsp;– X</strong><strong>回合</strong><strong> </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队将在点球大战的X回合胜出或和局。</li>
                              <li>
                                  X回合是指两个球队在该回合的点球比分<br>
                                  范例1: (点球大战开始) - A队第一个点球和B队第一个点球为第一回合<br>
                                  范例2: (驟死賽开始) - A队第六个点球和B队第六个点球为第六回合
                              </li>
                              <li>根据点球大战每个回合的所进的点球来进行结算 </li>
                              <li>如果点球大战在指定回合前结束,投注将视为无效</li>
                          </ul>
                          <p style="margin-left:10px; font-size:14px"><strong>点球大战</strong><strong>&nbsp;– </strong><strong>结束回合</strong><strong> </strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测点球大战将的结束回合 </li>
                              <li>根据点球大战是在第三，第四，第五，第六或以后的回合来进行结算 </li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效 </li>
                          </ul>
  
                          <p class="org" id="dr-14">比赛</p>
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：一般规则</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>赛果确认完成后将进行派彩。</li>
                              <li>联赛的派彩将以官方来源或相关体育权威机构判定的结果为准。</li>
                              <li>所有联赛的积分扣除都予以计算。</li>
                              <li>冠军比赛规则适用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>小组赛</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测整个赛季中排名最高的球队。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>排名前4、6、10等</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测整个赛季中排名在前4、6、10等的球队。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>没有球队X的联赛冠军</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测整个赛季中，当所列出的球队或某球队从联赛表中移除后，哪一支球队将获得冠军。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：赛季让分盘</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>根据每一队让分盘口的差点预测哪支球队将会获胜。</li>
                              <li>各球队的让分数将会添加到该队赛季的最终积分里。</li>
                              <li>拥有最高综合总分(让分数和赛季最终积分)的球队为赢家。</li>
                              <li>此盘口将采用并列名次规则。</li>
                              <li>球队让分数将不会在赛季中变更,然而赔率将会有所调整。 </li>
                              <li>球队(赛季前)让分数将显示在各别球队名旁。</li>
                              <li>
                                  下列为5队联赛例子
                                  <table class="tblrules">
                                      <tbody>
                                          <tr>
                                              <td>球队</td>
                                              <td>赛季最终积分</td>
                                              <td>让分数</td>
                                              <td>综合总分</td>
                                              <td>最终排名</td>
                                          </tr>
                                          <tr>
                                              <td>球队1</td>
                                              <td>90</td>
                                              <td>3</td>
                                              <td>93</td>
                                              <td>第2</td>
                                          </tr>
                                          <tr>
                                              <td>球队2</td>
                                              <td>85</td>
                                              <td>0</td>
                                              <td>85</td>
                                              <td>第5</td>
                                          </tr>
                                          <tr>
                                              <td>球队3</td>
                                              <td>82</td>
                                              <td>5</td>
                                              <td>87</td>
                                              <td>第4</td>
                                          </tr>
                                          <tr>
                                              <td>球队4</td>
                                              <td>79</td>
                                              <td>15</td>
                                              <td>94</td>
                                              <td>第1</td>
                                          </tr>
                                          <tr>
                                              <td>球队5</td>
                                              <td>79</td>
                                              <td>9</td>
                                              <td>88</td>
                                              <td>第3</td>
                                          </tr>
                                      </tbody>
                                  </table>
  
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：最后一名球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测整个赛季中哪一支球队会成为最后一名。</li>
                              <li>此类投注也被称为最低分。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：被降级的球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一支球队会被降级。</li>
                              <li>所有被降级球队将以全赢作为计算标准，比如：并列名次规则不适用。</li>
                              <li>如果一支球队从联赛中被移除或清除，投注在此球队的注单将被视为无效。如果在赛季开始之前出现此情况，所有的投注都无效，将会另外开设盘口。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：球队保持原位</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛中哪一支球队不会被降级。</li>
                              <li>所有没有被降级的球队将以全赢作为计算标准，比如：并列名次规则不适用。</li>
                              <li>如果一支球队从联赛中被移除或清除，投注在此球队的注单将被视为无效。如果在赛季开始之前出现此情况，所有的投注都无效，将会另外开设盘口。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：球队晋级</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛中哪一支球队会晋级。</li>
                              <li>投注包括自动晋级以及在特定比赛中通过加赛后的晋级。</li>
                              <li>所有晋级的球队将以全赢作为计算标准，比如：并列名次规则不适用。</li>
                              <li>如果一支球队从联赛中被移除或清除，投注在此球队的注单将被视为无效。如果在赛季开始之前出现此情况，所有的投注都无效，将会另外开设盘口。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>联赛：最佳新秀</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支最新晋级的球队将在赛季中获得最高排名。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 进球最多的球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一个球队进球最多。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>进球数不包括点球。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 失球最多的球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一个球队失球最多。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>在点球中的失球不予计算。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 总进球数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中进球的数量。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>在比赛中点球的进球不予计算。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 帽子戏法</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中任何一位球员进3个或以上的球。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>帽子戏法不包含点球中的进球。</li>
                              <li>在一场比赛中如果一个球员进球3个或更多，即为帽子戏法。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的得分。如果帽子戏法是在赛事中断前，且赛事在0-0的情况下或者其它官方单位分配的比分下重新开始，将不予计算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 总帽子戏法</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中获得了多少帽子戏法。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>帽子戏法不包含点球中的进球。</li>
                              <li>在一场比赛中如果一个球员进球3个或更多，即为帽子戏法。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。如果帽子戏法是在赛事中断前，且赛事在0-0的情况下或者其它官方单位分配的比分下重新开始，将不予计算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 总红卡数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中红卡的数量。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>任何非球员的红卡（例如.经理、教练或替补）不予计算。</li>
                              <li>点球中的红卡不予计算。</li>
                              <li>如果赛事在出现红卡之后中断，红卡仍然计算在总红卡数中。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 总黄卡数</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中黄卡的数量。</li>
                              <li>所有的投注以赛事官方90分钟为完场时间，包括加时、伤停补时。</li>
                              <li>任何非球员的黄卡（例如.经理、教练或替补）不予计算</li>
                              <li>点球中的黄卡不予计算</li>
                              <li>如果同个球员被出示第二张黄卡，第二张黄卡会被计算在内。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 进球最多的城市</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一个城市将会进球最多。</li>
                              <li>所有的投注以官方时间90分钟为准，包括加时、伤停补时。</li>
                              <li>点球中的进球不予计算。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 获胜小组</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一个小组将会获胜。</li>
                              <li>冠军比赛规则适用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>锦标赛 – 小组最后一名球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一个球队为最后一名。</li>
                              <li>冠军比赛规则适用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>冠军所属地</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛的冠军来自哪里。</li>
                              <li>来源地可以是冠军球队的所属地区、国家或洲。</li>
                              <li>冠军比赛规则使用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛-晋级</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测那支队伍会晋级去下一轮赛事。</li>
                              <li>投注包括自动晋级以及在加时赛与点球大战后的晋级。</li>
                              <li>符合冠军规则。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 阶段淘汰</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛中该球队会在哪一个阶段被淘汰。</li>
                              <li>冠军比赛规则使用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 - 提名入围。</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪一支球队会进入决赛。</li>
                              <li>冠军比赛规则适用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛 – 最终裁判员</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测决赛中的裁判员是哪一位。</li>
                              <li>无论此前是否有任何公告，将根据决赛开始后的裁判为派彩依据。</li>
                              <li>冠军比赛规则适用。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>直接预测排名（联赛、比赛）</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛或联赛中哪两个球队获得第1名和第2名的顺序排名。</li>
                              <li>所有的投注以官方时间90分钟为准，包括加时、伤停补时。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>双预测排名</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛或联赛中哪两个球队为前两名的排名。</li>
                              <li>所有的投注以官方时间90分钟为准，包括加时、伤停补时。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最佳射手</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在一场特定比赛中进球最多的球员。</li>
                              <li>如果产生超过一个冠军数量, 请以并列名次规则参考结算方式。</li>
                              <li>投注在被列出的该球队球员将被视为有效，无论他们是否受伤、暂停、不参与比赛或其它任何原因。</li>
                              <li>如果联赛中途有球员转到同一个联赛的另一个球队, 球员在转到另一个球队前所进得球数将继续计算在内。如果球员是转到不同联赛的球队，在转之前进得球数将不会继续带到新联赛去。两种情况下，投注此球员的注单将保持有效。</li>
                              <li>乌龙球将不予计算在内。</li>
                              <li>按照单纯的联赛比赛玩法，只有在联赛中进得球才计算在内。在季後赛进得球将不予计算在内。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最佳射手球队</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛中哪一个球员在所属球队中进球最多。</li>
                              <li>所有的投注以官方时间90分钟为准，包括加时、伤停补时。</li>
                              <li>进球数不包括点球。</li>
                              <li>投注适用于所有比赛的球队。</li>
                              <li>并列名次规则适用；任何用于决定和局的方法不可作为结算依据，比如：计数协助。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>最佳射手/比赛双赢</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测比赛中哪一个球员进球最多和哪一支球队获胜。</li>
                              <li>所有的投注以官方时间90分钟为准，包括加时、伤停补时。</li>
                              <li>进球数不包括点球。</li>
                              <li>如果多于一个球员和最佳射手打平，并列名次规则适用；任何用于决定和局的方法不可作为结算依据，比如：计数协助。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>进球最多的小组</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测在比赛中哪一组进球最多。</li>
                              <li>只计算在小组阶段的进球。</li>
                              <li>所有的投注以赛事官方单位90分钟为完场时间，包括球员伤停补时。</li>
                              <li>如果赛事中断，将以官方单位公布的最后赛果为准，其中包括赛事重新开始或指定的分数。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>加时赛</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测一场比赛是否会有加时赛。</li>
                              <li>根据比赛是否在正常的“90分钟”结束，还是进行了加时赛结束，来进行结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛-季军</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>预测哪支队伍会在季军战胜出。</li>
                              <li>投注包括自动晋级以及在加时赛与点球大战后的晋级。</li>
                              <li>符合冠军规则。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>比赛-分组赛冠军</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>从指定的两个球队预测选出谁将荣登小组榜首。</li>
                              <li>结算以整个小组所有赛事结束后并且官方宣布的结果为准。</li>
                              <li>如果出现两个球队比分相同的情况，结果将以官方宣布的获胜者将为准（球分差异，净胜球等等）。</li>
                              <li>如果官方没有宣布获胜者，所有投注将会被取消。</li>
                          </ul>
                          <p style="margin-left:10px; font-size:14px">&nbsp;</p>
                          <p class="org" id="dr-15">综合市场</p>
                          <p style="margin-left:10px; font-size:14px"><strong>独赢 &amp; 进球 大/小</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测“90分钟”后的比赛结果，以及赛事总入球数将大于或小于在盘口指定的大/小盘球数。</li>
                              <li>根据所选球队的输、赢或和局，以及全场比赛的总进球数，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>独赢 &amp; 双方球队进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测“90分钟”后的比赛结果，以及双方球队是否都有进球。</li>
                              <li>根据所选特定球队的输、赢或和局，以及每支球队的进球数，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>独赢 &amp; 最先进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测“90分钟”后的比赛结果，以及哪支球队将最先进球。</li>
                              <li>根据所选球队的输、赢或和局，以及是否正确的选择了最先进球球队，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效</li>
                              <li>如果赛事中没有首个进球，所有投注将会以输结算。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>独赢 &amp; 进球 单/双</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测“90分钟”后的比赛结果，以及双方球队总进球数的奇偶。</li>
                              <li>根据所选球队的输、赢或和局，以及双方球队总进球数的奇偶，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>进球 大/小 &amp; 双方球队进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测赛事总入球数将大于或小于在盘口指定的大/小盘球数，以及双方球队是否都有进球。</li>
                              <li>根据90分钟后的总进球数，以及两队是否都有进球，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，将根据以下规则进行处理：</li>
                              <li>
                                  <ul style="list-style: circle">
                                      <li> 如果在比赛中断那一刻，双方球队都已经进1球或以上，并且总进球数大于盘口指定的大/小盘球数，投注将被视为有效。</li>
                                      <li>如果在比赛中断那一刻，双方球队没有都进1球或以上，投注将被视为无效。</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>进球 大/小 &amp; 进球 单/双</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>同时预测赛事总入球数将大于或小于在盘口指定的大/小盘球数，以及总进球数的奇偶。</li>
                              <li>根据90分钟后的总进球数，以及总进球数的奇偶，来进行结算。</li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>进球 大/小 &amp; 最先进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li> 同时预测赛事总入球数将大于或小于在盘口指定的大/小盘球数，以及哪只球队将成为首先进球球队。</li>
                              <li> 根据90分钟后的总进球数，以及是否正确的选择了最先进球球队，来进行结算。</li>
                              <li> 如果在赛果公布之前比赛中断，将根据以下规则进行处理：</li>
                              <li>
                                  <ul style="list-style:circle;">
                                      <li> 如果在比赛中断那一刻的总进球数大于指定的大/小盘球数，投注将被视为有效。</li>
                                      <li> 如果在比赛中断那一刻的总进球数小于指定的大/小盘球数，投注将被视为无效。</li>
                                  </ul>
                              </li>
                              <li>如果赛事中没有首个进球，所有投注将会以输结算。</li>
                          </ul>
                          <p style="margin-left:10px; font-size:14px"><strong>双重机会 &amp; 进球 大/小</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li> 从可选的结果中预测正确的结果，以及总进球数对比指定数值的大小。</li>
                              <li> 根据是否正确的选择了可能的结果，以及“90分钟”后的总进球数，来进行结算。</li>
                              <li> 3种可能的结果是：</li>
                              <li>
                                  <ul style="list-style:circle;">
                                      <li> 主队胜出或和局（1 &amp; X）</li>
                                      <li>客队胜出或和局（1 &amp; 2）</li>
                                      <li>主队胜出或客队胜出（1 &amp; 2）</li>
                                  </ul>
                              </li>
                              <li>如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效。</li>
                          </ul>
  
                          <p style="margin-left:10px; font-size:14px"><strong>双重机会 &amp; 双方球队进球</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li> 从可选的结果中预测正确的结果以及两队是否都会得分。</li>
                              <li>根据是否在可能的结果中做出了正确的选择以及两队是否都有进球，来进行结算。</li>
                              <li> 3种可能的结果是：</li>
                              <li>
                                  <ul style="list-style:circle;">
                                      <li>主队胜出或和局（1 &amp; X）</li>
                                      <li> 客队胜出或和局（X &amp; 2）</li>
                                      <li>主队胜出或客队胜出（1 &amp; 2）</li>
                                  </ul>
                              </li>
                              <li> 如果在赛果公布之前比赛中断，所有该盘口的投注将被视为无效。</li>
                          </ul>
                          <p class="org" id="dr-16">其他</p>
                          <p style="margin-left:10px; font-size:14px"><strong>特定联赛里主客队的总进球数</strong></p>
                          <p style="margin-left:10px">本公司在某些联赛里会提供某种结合性赛事结果的投注。盘口的玩法将结合主场与客场球队在整个联赛里的赛果之后分出胜负。中立场的比赛，第一个球队被视为这一场赛事的主队。以下列出所提供的个别替补玩法规则。</p>
                          <p style="margin-left:20px;"><strong>在特定联赛中的主队和客队进球数：独赢和双重机会</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              根据得分的进球数预测所有主队对阵所有客队的结果。 例如，如果主队目标是6颗进球，客队目标是8颗进球，那么获胜的选择将是：
                              <li>
                                  <ul style="list-style:lower-alpha">
                                      <li>‘客队’ (独赢)</li>
                                      <li>‘客队 / 平局’ 和 ‘主队 / 客队’ (双重机会)</li>
                                  </ul>
                              </li>
                          </ul>
                          <p style="margin-left:20px;">
                              <strong>特定联赛里主客队的总进球数：一般规则</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>如果联赛中有一场赛事中断或取消，所有特定联赛里主客队的总进球数注单将被取消。</li>
                              <li>
                                  比赛日程以及赛事场次将会明确的在盘口显示。例如：
                                  <ul style="list-style:lower-alpha">
                                      <li>主队-周五-3场赛事</li>
                                      <li>客队-周五-3场赛事</li>
                                  </ul>
                              </li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>特定联赛里主客队的进球数：让球</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测在90分钟完场时间内哪一支球队在结合整个联赛里的赛果后在盘口指定的让球数胜出。</li>
                          </ul>
  
                          <p style="margin-left:20px;">
                              <strong>特定联赛里主客队的进球数：进球: 大 / 小</strong>
                          </p><ul style="list-style:decimal; margin-left:20px">
                              <li>预测主客队的总进球数将大于或小于在盘口指定的大/小盘牌数。</li>
                          </ul>
                          <p class="org" id="dr-17">奇幻赛事</p>
                          <p style="margin-left:10px; font-size:14px"><strong>奇幻赛事是以2个不同赛事的2场比赛为组合进行结果预测的竞猜游戏。</strong></p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>奇幻赛事的竞猜结果以选定的2场赛事的实际比赛结果为准。</li>
                              <li>如两场赛事中的任意一场（或两场）被取消、终止或延长后的36个小时内无最终结果，奇幻赛事对应竞猜游戏的结果将以无效处理。</li>
                              <li>如两场赛事中的任意一场（或两场）进行加时赛或点球大战时，此次竞猜将以正式比赛中的90分钟赛事结果为准。</li>
                              <li>主客场因素将不作为影响奇幻赛事的影响因素。</li>
                              <li>奇幻赛事所有内容将遵守以上赛事规则。</li>
                          </ul>
                          <p class="org" id="dr-18">电竞足球赛事</p>
                          <ul style="list-style:decimal; margin-left:20px">
                              <li>比赛将以虚拟或真实玩家对决(PVP)模式开打.</li>
                              <li>盘口的比赛名称将注明比赛时间(例如：12分钟), 且作为最终结算根据</li>
                              <li>比赛时间若无注明时，结算将以官方或相关体育权威机构数据结果为准</li>
                              <li>如果比赛因突发情况重制且分隔时间不超过12小时，投注将根据官方结果进行结算。</li>
                              <li>主/客场排序将不影响结算。例：赛事注明一队对垒二队，但官方显示二队对垒一队，投注仍视为有效。</li>
                          </ul>
                      </div>
                  </div>
                  <!--篮球-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">篮球</div><div class="hrt-r">最后更新:2020/07/08</div></div>
                      <div class="hr-c">
                          <div class="maindiv stlnt en-gb font16">
  
                              <p class="org">一般规则</p>
                              <ul style="list-style:decimal;">
                                  <li>如果比赛场地有更改，所有注单将被视为无效。 </li>
                                  <li>如果赛事是在上半场中断，所有上半场的注单将被视为无效。如果赛事是在下半场中断，所有上半场的投注保持有效，但所有下半场的注单将被视为无效，除非在个别玩法规则另有注明。 </li>
                                  <li>单节/半场的投注，比赛必须完成赛节注单才被视为有效，除非在个别玩法规则另有注明。 </li>
                                  <li>美国大学篮球联赛场地规则：盘口指示的"主场"和"客场"信息仅供参考。无论原定场地是否更改为"主场"，"客场"或"中立场"，所有注单将保持有效。 </li>
                                  <li>如比赛在法定时间提前进行，在比赛开始前的投注依然有效，在比赛开始后的所有投注均视为无效(滚球投注另作别论)。 </li>
                                  <li>对比赛的所有投注和下半场或两回合制的投注都包括加时赛,除非另有注明。第四节投注不包括加时赛。 </li>
                                  <li>对于3 x3篮球,结算将基于官方比赛规则。</li>
                              </ul>
                              <p class="org">投注类型</p>
                              <p style="margin-left:15px; font-size:16px"><strong>独赢盘</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测哪一支球队将在比赛胜出。盘口提供两支球队为投注选项。</li>
                                  <li>赛事盘口包括全场、半场或单节投注。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>让球 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测哪一支球队在盘口指定的让分球数在半场/全场/赛事单节赢得比赛。</li>
                                  <li>如果赛事在下半场取消或中断，所有上半场注单保持有效。</li>
                                  <li>如果赛事在下半场取消或中断，所有下半场注单将被视为无效。</li>
                                  <li>赛事盘口包括全场、半场或单节投注。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>滚球让球 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测哪一支球队在盘口指定的让分数里赢得半场/全场/赛事单节的比赛。</li>
                                  <li>赛事盘口包括全场、半场或单节投注。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>总分： 大 / 小 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测赛事总比分将大于或小于在盘口指定的大/小盘分数。</li>
                                  <li>赛事盘口包括全场、半场或单节投注。</li>
                                  <li>如果赛事中断，大/小盘将仅会结算任何将来的得分不会影响到赛果的注单。若遇到任何其它情况，注单将一律被视为无效。</li>
                                  <li>如果赛事在上半场中断，所有上半场注单将被取消，除非中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况注单才会被结算。</li>
                                  <li>如果赛事在下半场取消或中断，所有上半场注单保持有效。</li>
                                  <li>如果赛事在下半场取消或中断，所有下半场注单将被取消，除非中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况注单才会被结算。</li>
                                  <li>
                                      如果赛事中断, 所有时节的注单将被取消除非遇到以下其中一个情况：
                                      <ul style="list-style:lower-alpha">
                                          <li>投注的时节是在比赛中断前。</li>
                                          <li>比赛中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况。</li>
                                      </ul>
                                  </li>
                              </ul>
                              <p style="margin-left:15px; font-size:16px"><strong>滚球总分： 大 / 小 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测赛事总比分将大于或小于在盘口指定的大/小盘分数。</li>
                                  <li>结算是以0-0的比分在比赛/时节结束后按盘口开出的让分数做裁决。</li>
                                  <li>如果赛事中断，大/小盘将仅会结算任何将来的得分不会影响到赛果的注单。若遇到任何其它情况，注单将一律被视为无效。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>球队得分 - 大 / 小</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测赛事主队/客队的总分数将大于或小于在盘口指定的大/小盘分数。</li>
                                  <li>如果赛事取消，所有的注单将会被认为无效，除非注单在中断前已经结算或者在中断前已有明确的结果并且之后没有任何显著会影响赛事结果的情况注单才会被结算。</li>
                                  <li>所有注单的结算都是依据相关体育机构的官方统计数据为准。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>总分: 单 / 双 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测赛事的总比分是单数或双数。</li>
                                  <li>赛事盘口包括全场、半场或单节投注。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong> 最先得分球队 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测最先得分的球队。</li>
                                  <li>如果赛事在有得分后中断，所有最先得分球队的注单将保持有效。</li>
                                  <li>如果赛事在没有球队得分前中断，所有最先得分球队的注单将被视为无效。</li>
                                  <li>如果赛事在4节完场时间以及加时赛内没有球队得分，所有最先得分球队的注单将被视为无效。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>最后得分球队</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测最后得分的球队。</li>
                                  <li>如果赛事中断， 所有最后得分球队的注单将被视为无效。</li>
                                  <li>如果赛事在4节完场时间以及加时赛内没有球队得分，所有最后得分球队的注单将被视为无效。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>单节最高得分球队 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测单节最高得分的球队。</li>
                                  <li>加时赛不计算在内。</li>
                                  <li>如果赛事中断，所有单节最高得分球队的注单将被视为无效。</li>
                                  <li>如果赛事在4节完场时间以及加时赛内没有球队得分，所有最后单节最高得分球队的注单将被视为无效。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>每节最先获得20分的球队</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测每节最先得20分的球队。</li>
                                  <li>加时赛不计算在内。</li>
                                  <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，注单才会被结算。若遇到任何其他情况，注单将一律被视为无效。</li>
                                  <li>如果每节都没有球队获得20分，所有注单将被视为无效。</li>
                                  <li>取决于赛事的情况，玩法指定球队需最先获得的分数可能有变化，并且此信息会清楚的显示在盘口。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>篮球特别投注</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测比分，抢断，篮板，助攻，3分球等。</li>
                                  <li>双方球员/球队必须参与比赛，投注才被视为有效。</li>
                                  <li>如果一方或双方球员/球队没有参与比赛，所有注单将被视为无效。</li>
                                  <li>注单的结算将根据NBA或特别官方机构公布的结果为准，并且任何赛后更改的数据将被视为无效。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong>球队得分 – 最后一位数</strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>预测主队或客队最终得分的最后一位数字。</li>
                              </ul>
  
                              <p style="margin-left:15px; font-size:16px"><strong> 梦幻篮球游戏规则 </strong></p>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>梦幻篮球游戏将从同一天的赛事中任意选择两个球队（且原定不是在同一场赛事比赛的球队）进行投注。</li>
                                  <li>梦幻比赛赛果会根据球队真实的比分为准；梦幻比赛的让分数则以球队真实比分来计算。</li>
                                  <li>梦幻赛中的两支球队必须在同一天比赛，投注才被视为有效。</li>
                                  <li>如果球队的比赛时间和本公司网站显示的时间不同，所有涉及此球队的梦幻赛注单将被视为无效。</li>
                                  <li>梦幻赛投注将不考虑赛事实际进行的场地。</li>
                                  <li>
                                      梦幻赛的举例如下:
                                      <ul style=" list-style:lower-alpha">
                                          <li>波士顿凯尔特人101 – 98 芝加哥公牛，洛杉矶湖人118 – 101 奥兰多魔术</li>
                                          <li>梦幻赛1： 波士顿凯尔特人vs 洛杉矶湖人</li>
                                          <li>梦幻赛赛果：波士顿凯尔特人 101 – 118洛杉矶湖人</li>
                                          <li>梦幻赛的结算会根据各球队原定比赛的真实得分为准。</li>
                                      </ul>
                                  </li>
                                  <li>球队一定要实际完成原定比赛并且已在赛事的官方机构（例如：NBA）留下赛果记录，才能让涉及此球队的梦幻赛注单保持有效。如果球队没有完成原定比赛或最终赛果被官方否定，所有涉及此球队的梦幻赛注单将被视为无效。</li>
                                  <li>所有梦幻赛都将按照篮球个别玩法的规则和标准裁决。</li>
                              </ul>
  
                              <div class="sbk-rules-title">电子篮球赛事 </div>
                              <ul style="list-style:decimal;margin:10px;">
                                  <li>比赛将以虚拟或真实玩家对决(PVP)模式开打.</li>
                                  <li>盘口的比赛名称将注明比赛时间(例如：4x4、4x5分钟), 且作为最终结算根据.</li>
                                  <li>比赛时间若无注明时，结算将以官方或相关体育权威机构数据结果为准.</li>
                                  <li>若由于技术或其他因素导致虚拟或真实玩家对战比赛中断且比赛无法继续进行，所有投注将被取消.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <!--网球-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">网球</div><div class="hrt-r">最后更新:2019/06/17</div></div>
                      <div class="hr-c">
                          <p class="org">一般规则</p>
                          <ul style="list-style:decimal;">
                              <li>所有投注的注单均在比赛结束后才被视为有效，除非另有注明。 </li>
                              <li>如果投注的球员没有参与比赛，所有投注此球员的注单（排除独赢）将被取消。</li>
                              <li>如果一名球员或组合在比赛未结束前退出或被取消资格，所有该场比赛的注单将被取消，除非另有注明。 </li>
                              <li>如果比赛预定时间缩短或者需获胜比赛的比分提高，所有注单将被取消。 </li>
                              <li>如果赛事延期或中断，只要比赛最后有完成，所有投注将保持有效。 </li>
                              <li>如果赛事开出单局或单盘的盘口，而球员在赛事的某局或某盘退出或被取消资格，所有投注此局或此盘的注单将被取消，除非另有注明。 </li>
                              <li>如果比赛在法定时间提前进行，在比赛开始前的投注依然有效，在比赛开始后的所有投注均视为无效(滚球投注另作别论)。 </li>
                              <li>在决胜盘中，超级抢十被视为一局。</li>
                              <li>
                                  网球大满贯（四大公开赛：澳洲网球公开赛、美国网球公开赛、法国网球公开赛、温布顿网球公开赛 ），比赛结算方式:
                                  <ul style="list-style:lower-alpha">
                                      <li>男子组比赛：五盘中先赢三盘的球员，为胜方。 </li>
                                      <li>女子组比赛：三盘中先赢两盘的球员，为胜方。 </li>
                                  </ul>
  
                              </li>
                          </ul>
                          <div class="sbk-rules-title">投注类型</div>
                          <p style="margin-left:15px; font-size:16px"><strong>独赢盘</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一位球员将在比赛胜出。盘口提供两位球员为投注选项。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>让盘</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一位球员在盘口指定的让盘数赢得比赛。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>让局</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一位球员在盘口指定的让局数在某个时节（例如:全场比赛/第一盘/第二盘）赢得最多局。 </li>
                              <li>决胜局(抢七局)将视为一局。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>局获胜者（获胜者 – 盘X 局 X）</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测指定盘的指定局谁将获胜（例如第一盘第一局）。</li>
                              <li>抢七决胜局将视为一局（例如第一盘第十三局）。</li>
                              <li>如果某盘没有进行指定局，则该局所有注单将被取消。（例如第一盘第八局，但是该盘结束于1-6）。</li>
                              <li>如果一名球员退出或被取消资格，任何没有最终获胜者的局的所有注单将被取消，已结束局的注单将视为有效。</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>总局数： 大 / 小</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测比赛中的某个时节（例如:全场比赛/第一盘/第二盘）进行的总局数将大于或小于在盘口指定的大/小盘局数。</li>
                              <li>决胜局(抢七局)将视为一局。 </li>
                              <li>如果比赛中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>总局数： 单 / 双</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测比赛中的某个时节（例如:全场比赛/第一盘/第二盘）进行的总局数是单数或双数。 </li>
                              <li>决胜局(抢七局)将视为一局。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>单盘投注 </strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测单盘最终结果。 </li>
                              <li>投注的注单只有在单盘结束后才被视为有效。 </li>
                              <li>如果球员在某盘未结束前退出或被取消资格，所有投注此盘的注单将被取消。</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>波胆</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测比赛的每盘比分。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px">
                              <strong>
                                  总得分-大/小
                              </strong>
                          </p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测提名的球员在某一特定的时间段内的个人总得分将大于或小于盘口指定的总分数线</li>
                              <li>提供的时间段可能包含局，单盘及整场比赛。</li>
                              <li>注单的结算将根据ATP / WTA公布的结果为准</li>
                          </ul>
  
                      </div>
                  </div>
                  <!--棒球-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">棒球</div><div class="hrt-r">最后更新:2020/05/21</div></div>
                      <div class="hr-c">
                          <div class="sbk-rules-title">一般规则</div>
                          <ul style="list-style:decimal;">
                              <li>如果比赛场地有变更，所有注单将被取消。 </li>
                              <li>国际棒球比赛规则:如果比赛最少进行七局后有一队领先10分，或最少进行五局后有一队领先15分，赛事将会提早结束。如果遇此情况，所有的投注将继续保持有效，包括独赢盘，单/双盘，让分盘（让垒盘）和大/小盘（总比分）。</li>
                              <li>若投注让分盘和大/小盘（总比分），比赛结果以9局后为准（如果对手已经领先，结果便以8局半为准）。如果赛事在加局赛时被保留或中断，比分将以最后一局的结果为准，除非主队打成平局，或在加局赛的下半场已经领先对手，比分将以比赛被保留时的结果为准。 </li>
                              <li>结算时, 加时(局)赛将计算在内，除非另有注明。</li>
                              <li>上半场投注是按照第1局到第5局的结果为准。 </li>
                              <li>下半场投注是按照第6局到第9局的结果为准。出于结算的用意，下半场的加时(局)赛将计算在内。</li>
                              <li>在不考虑第一投手的情况下，注单将保持有效。 </li>
                              <li>如果赛事是在下半场中断所有上半场的投注保持有效。 </li>
                              <li>如果赛事是在下半场中断，所有下半场和全场的注单将被取消，除非在个别玩法规则另有注明。 </li>
                              <li>如果比赛在法定时间提前进行，在比赛开始前的投注依然有效，在比赛开始后的所有投注均视为无效(滚球投注另作别论)。 </li>
                          </ul>
  
                          <div class="sbk-rules-title">投注类型</div>
                          <p style="margin-left:15px; font-size:16px"><strong>独赢盘 </strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一支球队将在比赛胜出。 </li>
                              <li>结算时, 加时(局)赛将计算在内。</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>让球</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一支球队在盘口指定的让分数赢得某个时节或全场比赛。 </li>
                              <li>结算时, 加时(局)赛将计算在内。</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>滚球让球</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一支球队在盘口指定的让分数赢得某个时节或全场比赛。</li>
                              <li>
                                  结算时, 加时(局)赛将计算在内。<br>
                              </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>总得分:&nbsp; 大 / 小</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测赛事总比分将大于或小于在盘口指定的大/小盘分数。 </li>
                              <li>结算时, 加时(局)赛将计算在内。 </li>
                              <li>如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。 </li>
                              <li>如果赛事在上半场中断，所有注单将被取消，除非中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况注单才会被结算。 </li>
                              <li>如果赛事在下半场取消或中断，所有上半场注单保持有效。 </li>
                              <li>如果赛事在下半场取消或中断，所有下半场和全场注单将被取消，除非中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况注单才会被结算。 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>滚球总得分:  大 / 小</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测赛事总比分将大于或小于在盘口指定的大/小盘分数。 </li>
                              <li>结算是以0-0的比分按盘口开出的大小盘让分数做裁决。</li>
                              <li>结算时, 加时(局)赛将计算在内</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>总得分: 单 / 双</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测赛事的总比分是单数或双数。 </li>
                              <li>结算时, 加时(局)赛将计算在内。</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>独赢 -  前5局</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪支球队将在前5局结束时获胜或者打平。 </li>
                              <li>只提供于此时间段，不适用于赛事结束时的最终比分 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>球队得分 - 大/小盘</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测指定的球队总跑垒得分将大于或小于盘口指定的大/小盘分数。 </li>
                              <li>结算包括加时赛局 </li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>净胜分数</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测哪一支球队将赢得这场比赛并比他们的对手多多少 </li>
                              <li>举例：A队最后得分是12，B队最后得分是8，那么“净胜分数”就是4。 </li>
                              <li>结算包括加时(局)赛</li>
                          </ul><br>
                          <p style="margin-left:15px; font-size:16px"><strong>加时赛</strong></p>
                          <ul style="list-style:decimal;margin:10px;">
                              <li>预测赛事是否超出常规9局时间（除非另有说明）。 </li>
                              <li>
                                  出于结算的目的，任何常规的比赛延长到第10局或更多，将被视为进入“加时赛”。
                              </li>
                          </ul>
  
                      </div>
                  </div>
                  <!--串关-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">串关</div><div class="hrt-r">最后更新:2020/05/21</div></div>
                      <div class="hr-c">
                          <p class="sbk-rules-title">一般规则</p>
                          <p>连串过关是指选择二个或更多的赛事在一个单一的注单中。每一个选择连串投注的赛事必须获胜此连串的注单才视为获胜。如果第一个注单是获胜的，投注获胜的注单会添加到第二个投注选项，直到连串过关中的所有投注获胜或到有一场失败为结束。某些连串过关是组合几个不同的连串在一个单一的连串注单中。例如：4串11是11个不同的连串投注。请参考"连串过关投注类型"选择查看更多的信息。  </p>
                          <p>例如： 15/12/2017</p>
                          <p>投注一个100元的3串1连串过关在以下的三场赛事: </p>
                          <ul>
                              <li>曼联@ 1.80</li>
                              <li>切尔西@ 1.50 </li>
                              <li>阿森纳@ 1.66 </li>
                          </ul>
  
                          <p>如果所有的三场赛事都获胜，连串过关的盈利为448.20元（包括本金）。详细的计算方式您可以查看以下的信息:</p>
                          <ul>
                              <li>注单1：曼联1.80*$100=返还$180. </li>
                              <li>注单2：切尔西1.50*$180=返还$270.   </li>
                              <li>注单3：阿森纳 1.66*$270=返还$448.20.  </li>
                          </ul>
  
                          <p>连串过关注意事项:</p>
                          <ul>
                              <li>本公司一个注单中最多的连串过关为10串。</li>
                              <li>所有投注赛事都需要根据体育博彩规则为准。 </li>
                              <li>不是所有的赛事都可以投注连串过关。如果您在投注列表中看到不可以组合二个不相关的赛事（可以查看以下的信息关于有关联的连串），那么就是其中一场并没有开出连串过关投注。 </li>
                              <li>连串过关可以投注不同种类的赛事，以及不在同一天的比赛。 </li>
                          </ul>
  
  
                          <p>连串过关中选项</p>
                          <p>连串过关投注，选择组合有关联的同一赛事或投注市场的结果会影响其他另一个投注市场，此注单是不接受的。例如:</p>
                          <p>例如: </p>
                          <p>以下的2串1是不接受的，由于是同一场赛事: </p>
                          <ul>
                              <li>曼联获胜独赢盘口@1.80 </li>
                              <li>曼联2-0获胜，正确比分盘口@7.0 </li>
                          </ul>
                          <p>如果曼联2-0获胜，组合盘口为12.6。其实盘口应该为7.0，因为曼联2-0获胜，那么独赢盘口自然而然为获胜。 </p>
                          <p>连串过关投注，选择组合有关联的同一球队或球员，即使他们是不同的时间，同样是不接受例如一个结果会影响另一个结果。</p>
                          <p>例如: </p>
                          <ul>
                              <li>曼联进入冠军杯决赛@6.0</li>
                              <li>曼联赢得冠军杯冠军@10 </li>
                              <li>组合盘口@60.0 </li>
                          </ul>
                          <p>这个连串过关被视为第二个赛果会影响到第一个赛果。如果曼联获得冠军杯联赛冠军，那么曼联自然而然就进入冠军杯决赛。因此，盘口仅仅为10.0。 </p>
                          <p>本公司有权利取消有关联的连串过关投注。</p>
  
                          <a name="parlaypush"></a>
                          <div class="sbk-rules-title">连串过关</div>
                          <p>在连串过关中有任何的投注赛事无效或者打和（如以下的范例），此连串过关注单仍然有效，并且按照胜出的其余投注结算，范例如下：</p>
                          <ul>
                              <li>投注项1：切尔西（-0.5）-切尔西 赢。 </li>
                              <li>投注项2: 曼联（-1）-曼联赢 1-0. </li>
                              <li>投注项 3: 阿森纳（-0.5）-阿森纳赢。 </li>
                          </ul>
                          <p>正如曼联是以（-1）的亚洲盘口1-0获胜，但在连串过关中的此赛事视为和。因此，当切尔西获胜连串阿森纳获胜过关，此连串过关将被视为切尔西以及阿森纳的2串，而非最初的3串。同时，打和的过关投注项目将会被自动以1计算。</p>
                          <p>过关的计算范例如下 </p>
                          <p>范例1： 其中一个投注项为和:</p>
                          <table class="tblrules">
                              <tbody>
                                  <tr>
                                      <td>投注项</td>
                                      <td>让球</td>
                                      <td>赔率</td>
                                      <td>赛果</td>
                                      <td>结果</td>
                                  </tr>
                                  <tr>
                                      <td>切尔西</td>
                                      <td>(-0.5/1)</td>
                                      <td>1.85</td>
                                      <td>赢 2-0</td>
                                      <td>全赢</td>
                                  </tr>
                                  <tr>
                                      <td>曼联</td>
                                      <td>(-1)</td>
                                      <td>1.95</td>
                                      <td>赢 1-0</td>
                                      <td>和</td>
                                  </tr>
                                  <tr>
                                      <td>阿森纳</td>
                                      <td>(-1/1.5)</td>
                                      <td>2.05</td>
                                      <td>赢3-0</td>
                                      <td>全赢</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p>投注金额：$100 3串一</p>
                          <p>计算方式如下</p>
                          <p>x 1.85 x 1 x 2.05 = $379.25,扣除本金$100=盈利<strong>$279.25</strong></p>
                          <ul>
                              <li>切尔西(-0.5/1)：赢 - $100 x 1.85 =返还$185。此金额将会移至下个选项。 </li>
                              <li>曼联(-1): 和- $185 x 1 = $185. 此金额将会移至到下一选项。 </li>
                              <li>阿森纳(-1/1.5)：赢 - $185 x 2.05 =返还$379.25 </li>
                              <li>盈利：$379.25 – $100 = $279.25. </li>
                          </ul>
                          <p>范例2： 其中一个投注项为赢半平半 </p>
                          <table class="tblrules">
                              <tbody>
                                  <tr>
                                      <td>投注项</td>
                                      <td>让球</td>
                                      <td>赔率</td>
                                      <td>赛果</td>
                                      <td>结果</td>
                                  </tr>
                                  <tr>
                                      <td>投注项</td>
                                      <td>(-0.5/1)</td>
                                      <td>1.85</td>
                                      <td>赢 1-0</td>
                                      <td>赢半 / 平半</td>
                                  </tr>
                                  <tr>
                                      <td>曼联</td>
                                      <td>(-1)</td>
                                      <td>1.95</td>
                                      <td>赢 2-0</td>
                                      <td>全赢</td>
                                  </tr>
                                  <tr>
                                      <td>阿森纳</td>
                                      <td>(-1/1.5)</td>
                                      <td>2.05</td>
                                      <td>赢3-0</td>
                                      <td>全赢</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p>连串投注：$100 3串一</p>
                          <p>计算方式如下：</p>
                          <p>$100 x [1 + 0.5 x 0.85] x 1.95 x 2.05 = $569.64， 扣除本金=赢$469.64</p>
                          <ul>
                              <li>
                                  切尔西(-0.5/1)：赢半/平半 – 此注单被分为两项，只有一半的投注盈利， <br>
                                  盈利的部分$50 x 1.85 = $92.50<br>
                                  打和部分$50 x 1 = 50<br>返还是$92.50 + $50 = $142.50。 此金额将移至下个投注项
                              </li>
                              <li>曼联（-1）:盈利-142.50 x 1.95=$277.87，此金额将移至下个投注项 </li>
                              <li>阿森纳(-1/-1.5):盈利-277.87 x 2.05=$569.64</li>
                              <li>总盈利:$569.64-$100=$469.64. </li>
                          </ul>
  
  
                          <p>范例3：其中一个投注项为输半/平半</p>
                          <table class="tblrules">
                              <tbody>
                                  <tr>
                                      <td>投注项</td>
                                      <td>让球</td>
                                      <td>赔率</td>
                                      <td>赛果</td>
                                      <td>结果</td>
                                  </tr>
                                  <tr>
                                      <td>切尔西</td>
                                      <td>(-0.5/1)</td>
                                      <td>1.85</td>
                                      <td>赢2-0</td>
                                      <td>赢</td>
                                  </tr>
                                  <tr>
                                      <td>曼联</td>
                                      <td>(-1)</td>
                                      <td>1.95</td>
                                      <td>赢2-0</td>
                                      <td>赢</td>
                                  </tr>
                                  <tr>
                                      <td>阿森纳</td>
                                      <td>(-1/1.5)</td>
                                      <td>2.05</td>
                                      <td>赢 1-0</td>
                                      <td>输半 /平半</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p>连串投注：$100 3串一</p>
                          <p>计算方式如下：</p>
                          <p>$100 x 1.85 x 1.95 x 0.5 = $180.38, 扣除本金 $100 = 盈利$80.38</p>
                          <ul>
                              <li>切尔西 (-0.5/1): 赢  $100 x 1.85 = $185 = 返回 $185. 此金额将移至下个投注项 </li>
                              <li>曼联 (-1): 赢  $185 x 1.95 = $360.75. 此金额将移至下个投注项 </li>
                              <li>
                                  阿森纳 (-1/1.5): 输半/平半 – 投注额度将一分为二，其中一半为输。<br>
                                  $360.75 x 0.5 = $180.38.<br>
                                  输半: $180.38<br>
                                  平半: $180.38 x 1 = $180.38
                              </li>
  
                              <li>返回: $180.38 </li>
                              <li>总盈利: $180.38 – $100 = $80.38</li>
                          </ul>
  
                          <a name="typesofparlay"></a>
                          <div class="sbk-rules-title">连串投注种类</div>
                          <p>本公司提供多种多样的连串过关投注。以下的表格可以清楚的查看每一种连串过关的排列组合。</p>
                          <table class="tblrules">
                              <tbody>
                                  <tr>
                                      <td>连串投注种类 </td>
                                      <td>投注选项 </td>
                                      <td>投注总数 </td>
                                      <td>双式投注总数 </td>
                                      <td>三式投注总数 </td>
                                      <td>四串一投注总数 </td>
                                      <td>五串一投注总数 </td>
                                      <td>六串一投注总数 </td>
                                      <td>七串一投注总数 </td>
                                      <td>八串一投注总数 </td>
                                      <td>九串一投注总数 </td>
                                      <td>十串一投注总数 </td>
                                  </tr>
                                  <tr>
                                      <td>2串1 </td>
                                      <td>2</td>
                                      <td>1</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>3串1 </td>
                                      <td>3</td>
                                      <td>1</td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>4串1 </td>
                                      <td>4</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>5串1 </td>
                                      <td>5</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>6串1 </td>
                                      <td>6</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>7串1 </td>
                                      <td>7</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>8串1 </td>
                                      <td>8</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>9串1 </td>
                                      <td>9</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>10串1 </td>
                                      <td>10</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>1</td>
                                  </tr>
                                  <tr>
                                      <td>3串4 </td>
                                      <td>3</td>
                                      <td>4</td>
                                      <td>3</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>4串11 </td>
                                      <td>4</td>
                                      <td>11</td>
                                      <td>6</td>
                                      <td>4</td>
                                      <td>1</td>
  
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>5串26 </td>
                                      <td>5</td>
                                      <td>26</td>
                                      <td>10</td>
                                      <td>10</td>
                                      <td>5</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>6串57 </td>
                                      <td>6</td>
                                      <td>57</td>
                                      <td>15</td>
                                      <td>20</td>
                                      <td>15</td>
                                      <td>6</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>7串120 </td>
                                      <td>7</td>
                                      <td>120</td>
                                      <td>21</td>
                                      <td>35</td>
                                      <td>35</td>
                                      <td>21</td>
                                      <td>7</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>8串247 </td>
                                      <td>8</td>
                                      <td>247</td>
                                      <td>28</td>
                                      <td>56</td>
                                      <td>70</td>
                                      <td>56</td>
                                      <td>28</td>
                                      <td>8</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>9串502 </td>
                                      <td>9</td>
                                      <td>502</td>
                                      <td>36</td>
                                      <td>84</td>
                                      <td>126</td>
                                      <td>126</td>
                                      <td>84</td>
                                      <td>36</td>
                                      <td>9</td>
                                      <td>1</td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td>10串1013 </td>
                                      <td>10</td>
                                      <td>1013</td>
                                      <td>45</td>
                                      <td>120</td>
                                      <td>210</td>
                                      <td>252</td>
                                      <td>210</td>
                                      <td>120</td>
                                      <td>45</td>
                                      <td>10</td>
                                      <td>1</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p>列表中连串过关的详细示意请查看以下信息：</p>     <p><strong>双式投注/ 2串1</strong></p>
                          <ul style="list-style:none">
                              <li>一个复式投注中包括2项不同的赛事。每个选择的赛事必须胜出方为赢。</li>
                          </ul>
                          <p><strong>三式投注/ 3串1</strong></p>
                          <ul style="list-style:none">
                              <li>一个三式投注中包括3项不同的赛事。每个选择的赛事必须胜出方为赢。</li>
                          </ul>
                          <p><strong>复式累计连串</strong></p>
                          <ul style="list-style:none">
                              <li>一个累计连串投注必须4个或更多不同的选项。所有的选项投注必须获胜方为赢。4个累计连串的投注可以参考4串1/4项复式投注；5个累计连串的投注可以参考5串1/5项复式投注，直到10串1/10项复式投注。</li>
                          </ul>
                          <p><strong>3串4投注</strong></p>
                          <ul style="list-style:none">
                              <li>3串4是由3个不同赛事组成的4个不同的投注，可以看作为4个分开的注单，它包括3个双式投注和1个三式投注。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>4串11投注</strong></p>
                          <ul style="list-style:none">
                              <li>4串11是由4个不同赛事组成的11个不同的投注，可以看作为11个分开的注单，它包括6个双式投注，4个三式投注，1个4串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。 </li>
                          </ul>
                          <p><strong>5串26投注</strong></p>
                          <ul style="list-style:none">
                              <li>5串26是由5个不同赛事组成的26个不同的投注，可以看作为26个分开的注单，它包括10个双式投注，10个三式投注，5个4串1投注以及1个5串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>6串57投注</strong></p>
                          <ul style="list-style:none">
                              <li>6串57是由6个不同赛事组成的57个不同的投注，可以看作为57个分开的注单，它包括15个双式投注，20个三式投注，15个4串1投注，6个5串1投注以及一个6串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>7串120投注</strong></p>
                          <ul style="list-style:none">
                              <li>7串120是由7个不同赛事组成的120个不同的投注，可以看作为120个分开的注单，它包括21个双式投注，35个三式投注，35个4串1，21个5串1，7个6串1以及1个7串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>8串247投注</strong></p>
                          <ul style="list-style:none">
                              <li>8串247是由8个不同的赛事组成的247个不同的投注，可以看作为247个分开的注单，它包括28个双式投注，56个三式投注，70个4串1，56个5串1，28个6串1，8个7串1以及1个8串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>9串502投注</strong></p>
                          <ul style="list-style:none">
                              <li>9串502是由9个不同的赛事组成的502个不同的投注，可以看作为502个分开的注单。它包括36个双式投注，84个三式投注，126个4串1，126个5串1，84个6串1，36个7串1，9个8串1以及1个9串1组成。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                          <p><strong>10串1013投注</strong></p>
                          <ul style="list-style:none">
                              <li>10串1013是由10个不同的赛事组成的1013个不同的投注，可以看作为1013个分开的注单。它包括45个双式投注，120个三式投注，210个4串1，252个5串1，210个6串1，120个7串1，45个8串1，10个9串1以及1个10串1。最少其中的2场赛事需要获胜，才会保证获得一些派彩。</li>
                          </ul>
                      </div>
                  </div>
                  <!--冠军-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">冠军</div><div class="hrt-r">最后更新:2020/05/21</div></div>
                      <div class="hr-c">
                          <p>在指定的冠军盘中，预测一场锦标赛, 联赛, 或者比赛的冠军。所选择的队伍或选手获得最终胜利视为符合派彩条件，包括：</p>
                          <ul style="list-style:decimal">
                              <li>联赛的最终结果，例如: 世界杯冠军或F1车手冠军。</li>
                              <li>在预赛中胜出，例如: 世界杯小组冠军。</li>
                              <li>在最后一场赛事中，例如: 能否出线，能否踢加时，能否踢点球。</li>
                              <li>比赛的最终结果，例如：F1赛事的个人冠军。</li>
                              <li>最高得分数。</li>
                              <li>最优秀的选手等。</li>
                          </ul>
                          <div class="sbk-rules-title">一般规则</div>
                          <ul style="list-style:decimal">
                              <li>联赛的派彩将以官方来源或相关体育权威机构判定的结果为准。</li>
                              <li>无论挑选的人或球队是否有参与，所有冠军投注都视为有效。</li>
                              <li>并列名次规则适用于冠军投注市场。</li>
                              <li>无论在什么情况下，如果名称使用“任何其他球员”或“任何其他球队” 将被视为代替无名称的参赛者。</li>
                              <li>如果体育项目有开出特殊规则，则其将取代一般适用规则。</li>
                              <li>冠军项目月份榜首榜尾结算规则: 此项目计算方式于该月第一日至最后一日（英国时间23: 59），如遇最后一日赛事延赛或赛事取消则不予计算，不影响该项目的计算。延迟或取消的赛事不予计算，如果由于人为错误或技术故障，赛果出来后盘口没有关闭，公司有权取消因此错误下注的注单。</li>
                              <li>足球冠军投注仅适用于常规赛季（除非另作说明）。整个赛季赛程结束后球队最终的排名来决定冠军。季后赛或随后查询(潜在扣分)各自联赛将不计算在最终赛果。</li>
                          </ul>
                      </div>
                  </div>
                  <!--独赢及位置的投注规则-->
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l">独赢及位置的投注规则</div><div class="hrt-r">最后更新:2020/05/21</div></div>
                      <div class="hr-c">
                          <p>独赢及位置的投注是由两个独立的投注注单(同等投注金额)组成的一个选项。</p>
                          <ul>
                              <li>如选项赢，则会员可获得独赢及位置两部分的相应本金及赢利。 </li>
                              <li>如所选项仅赢得位置的胜利，会员依然可获得<strong>位置</strong>部分本金及赢利。 </li>
                          </ul>
                          <p>确认下注后，此注单将会分为两个部分显示：“赢”以及“位置”。 </p>
                          <p>项目的不同，对其  “位置（名次和赔率）”的设定标准不同，因此产生的赢利或有不同。 </p>
                          <p>位置项目可理解如下：<strong>1/4</strong><strong>赔率</strong><strong>-</strong><strong>前三名</strong>。这意味着所选对象如能成功进入前三位，位置项目的投注额（即总投注额的一半）的初始赔率的四分之一奖金将会进入会员账户。位置的标准会有不同设定，如<strong>1/5 – </strong><strong>前</strong><strong>5</strong><strong>名</strong><strong> </strong>或<strong> 1/5-</strong><strong>前</strong><strong>7</strong><strong>名等。</strong> </p>
                          <p>独赢及位置的投注可能性结果如下： </p>
                          <ul type="a">
                              <li>独赢及位置选项结果为胜</li>
                              <li>赢的选项为输，位置选项为胜</li>
                              <li>独赢及位置选项结果皆为输</li>
                          </ul>
                          详细投注结果的规则请参考以下内容
                          <div class="sbk-rules-title">
                              <p><strong>一般规则</strong><strong>:</strong></p>
                          </div>
                          <ul>
                              <li>独赢及位置的选项仅针对于部分盘口。该项目的一般规则将同样应用于此项投注。 </li>
                              <li>独赢及位置的选项（位置和赔率）会根据体育项目的进展而变化。如：高尔夫球赛。当前投注的独赢及位置的选项注单不会因为对应高尔夫球赛未来的进展而被改变。 </li>
                              <li>如参赛人数无法满足独赢及位置的选项的要求，则此投注项目将被取消。如：原定5名参赛者的赛事中，只有3人参加。 </li>
                              <li>所有赛事参赛者（队）满足独赢及位置的选项条件，方可连串下注（双式投注、三式投注等）。 </li>
                              <li>所选项的独赢及位置的连串结果需以  “独赢-独赢”和“位置-位置”为准，两项不能混合。如：两个连串选项的结果中只有一个“赢”和“位置”选项获胜，则此连串注单结果中，“独赢-独赢”结果为输；“位置-位置”结果则赢。 </li>
                              <li>多冠军规则同样应用于独赢及位置的投注。</li>
                          </ul>
                          <br>
                          <p><strong>举例说明:</strong></p>
                          <ul>
                              <li>
                                  <p><strong>所选对象独赢（排名第一）</strong></p>
                                  <p>冠军盘口-英超联赛（优胜者） </p>
                                  <p>投注内容：阿森纳<strong>@ 13.0</strong>&nbsp;&nbsp;|&nbsp;&nbsp;赌注: <strong>100.00</strong>&nbsp;&nbsp;|&nbsp;&nbsp;独赢及位置 - <strong>1/4 </strong><strong>赔率，前三名</strong></p>
                                  <p>总投注=200（独赢及位置的投注） </p>
                                  <p>结果：阿森纳获胜 </p>
                                  <p><strong>独赢→</strong>&nbsp;13.0 (赔率) X 100 (独赢本金) – 100（独赢本金） =&nbsp;1,200.00（独赢盈利） </p>
                                  <p><strong>位置→</strong>&nbsp;4.0 (赔率) X 100 (位置本金) – 100（位置本金） =&nbsp;300.00（位置盈利） </p>
                                  <p><strong>赢/输→</strong>&nbsp;1,200 + 300&nbsp;= + 1,500.00</p>
                              </li>
                              <li>
                                  <p><strong>所选对象落败（排名前三）</strong></p>
                                  <p>冠军盘口-英超联赛（优胜者） </p>
                                  <p>投注内容：阿森纳<strong>@ 13.0</strong>&nbsp;&nbsp; |&nbsp;&nbsp; 赌注: <strong>100.00</strong>&nbsp;&nbsp; |&nbsp;&nbsp; 独赢及位置 - <strong>1/4 </strong><strong>赔率，前三名</strong></p>
                                  <p>总投注=200（独赢及位置） </p>
                                  <p>结果：阿森纳第三名 </p>
                                  <p><strong>独赢</strong>→&nbsp;阿森纳未能获得冠军，注单未赢利=<strong>-100.00</strong></p>
                                  <p><strong>位置→</strong>&nbsp;4.0 (赔率) X 100 (位置本金)  – 100（位置本金） =&nbsp;300.00（位置盈利）</p>
                                  <p><strong>赢/输</strong>→&nbsp;-100 + 300 <strong>=  + 200.00</strong></p>
                              </li>
                              <li>
                                  <p><strong>所选对象落败（未进前三）</strong></p>
                                  <p>冠军盘口-英超联赛（优胜者） </p>
                                  <p>投注内容：阿森纳<strong>@ 13.0</strong>&nbsp;&nbsp;|&nbsp;&nbsp;赌注: <strong>100.00</strong>&nbsp;&nbsp;|&nbsp;&nbsp;独赢及位置 - <strong>1/4 </strong><strong>赔率，前三名</strong></p>
                                  <p>总投注=200（独赢及位置） </p>
                                  <p>结果：阿森纳第四名 </p>
                                  <p><strong>独赢</strong>→&nbsp;阿森纳未能获得冠军，注单未赢利=<strong>-100.00</strong></p>
                                  <p><strong>位置→阿森纳未进前三，注单未赢利=-100.00</strong></p>
                                  <p><strong>赢</strong><strong>/</strong><strong>输</strong>→&nbsp;-100 + -100 <strong>= &nbsp;-200.00</strong></p>
                              </li>
                          </ul>
  
                      </div>
                  </div>
              </div>
              <div class="hb-cont">
                  <div class="hb-rows">
                      <div class="hr-t"><div class="hrt-l"><span>大小球</span>全场90分钟 (含伤停补时) 两队进球数的总和</div></div>
                      <div class="hr-c">
                      <div class="hc-t">
                          <div class="t-l">
                          <span>
                              主队
                          </span>
                          <i class="iconfont icon-zhenrong" ></i>
                          </div>
                          <div class="t-m">
                          <i class="iconfont icon-duizhan" ></i>
                          </div>
                          <div class="t-r">
                          <i class="iconfont icon-zhenrong" ></i>
                          <span>
                              客队
                          </span>
                          </div>
                      </div>
                      
                      <div class="hc-s">
                          <div class="item">
                          <div class="i-l">
                              投注大2.5
                              <b class="green">全赢</b>
                          </div>
                          <div class="i-m">
                              <span>进球之和</span>
                              <b>3</b>
                          </div>
                          <div class="i-r">
                              投注小2.5
                              <b class="red">全输</b>
                          </div>
                          </div>
                          <div class="item">
                          <div class="i-l">
                              投注大2.5/3
                              <b class="green">赢一半</b>
                          </div>
                          <div class="i-m">
                              <span>进球之和</span>
                              <b>3</b>
                          </div>
                          <div class="i-r">
                              投注小2.5/3
                              <b class="red">输一半</b>
                          </div>
                          </div>
                          <div class="item">
                          <div class="i-l">
                              投注大3/3.5
                              <b class="red">输一半</b>
                          </div>
                          <div class="i-m">
                              <span>进球之和</span>
                              <b>3</b>
                          </div>
                          <div class="i-r">
                              投注小3/3.5
                              <b class="green">赢一半</b>
                          </div>
                          </div>
                          <div class="item">
                          <div class="i-l">
                              投注大3
                              <b>退回本金</b>
                          </div>
                          <div class="i-m">
                              <span>进球之和</span>
                              <b>3</b>
                          </div>
                          <div class="i-r">
                              投注小3
                              <b>退回本金</b>
                          </div>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
          </main>`
}
