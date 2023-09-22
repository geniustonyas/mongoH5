const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: '首页',
  search: '搜索',
  promo: '促销',
  support: '客服',
  onlineSupport: '客服',
  accountMenu: '我的',
  account: '账户',
  confirm: '确定',
  confirmd: '已确认',
  all: '全部',
  save: '保存',
  cancel: '取消',
  close: '关闭',
  start: '开始',
  loading: '加载中',
  end: '结束',
  to: ' 至 ',
  or: '或',
  and: '和',
  at: '于',
  goto: '前往',
  refreshSuccess: '刷新成功',
  loadingFail: '加载失败',
  noMore: '没有更多了...',
  login: '登录',
  otherMethod: '其他方式',
  reg: '注册',
  userName: '用户名',
  email: '电子邮件',
  sendEmail: '发送验证码',
  sended: '已发送',
  emailCaptcha: '邮箱验证码',
  password: '密码',
  forgetPassword: '忘记密码',
  resetPwd: '重置密码',
  noUser: '没有账号？',
  createUser: '创建账户',
  googleCode: '谷歌身份验证码',
  inputGoole: '输入谷歌身份验证码',
  partner: '官方合作伙伴：',
  date: '日期',
  day: '日',
  month: '月',
  year: '年',
  birthday: '出生日期',
  telephone: '电话',
  country: '国家',
  hasAccount: '已有账号？',
  logout: '登出',
  address: '地址',
  zipCode: '邮编',
  loginPage: {
    useGoogle: '使用谷歌身份验证器',
    userNameOrEmail: '用户名或电子邮件'
  },
  regPage: {
    holderUserName: '创建您的用户名',
    holderEmail: `例如:you{'@'}example.com`,
    holderTelephone: '电话(+66 xxxxxxxxxxx)',
    isAdult: '我确认我已满18周岁, 并接受',
    termCondition: '规则与条款',
    privacyPolicy: '隐私政策',
    isAgree: `我同意接受${site_name}的促销和活动相关的市场信息。`
  },
  thirdRegPage: {
    beFinished: '快完成了哦！',
    fixInfo: '请补充完整您的资料'
  },
  myprfile: '我的档案',
  clubLevel: '俱乐部级别',
  userLevels: {
    '101': '钢铁',
    '102': '青铜',
    '103': '白银',
    '104': '黄金',
    '105': '铂金',
    '106': '钛金',
    '107': '钻石'
  },
  homePage: {
    currentMultiplier: '当前积分倍数',
    nextReward: '下一级别奖励',
    showProgress: '显示我的进度'
  },
  userAccount: '用户账号',
  wallet: '钱包',
  myBets: '历史记录',
  rewards: '奖励',
  notifications: '通知消息',
  // 搜索
  noSearchResult: '很抱歉，没有符合 "{ keyword }" 的结果。请尝试其他搜索词。',
  searchResultNum: '找到了 { searchResult } 个结果',
  // 优惠详情
  promoDetail: '优惠详情',
  // 俱乐部
  club: '俱乐部',
  tiers: '级别',
  clubTips: '每个月您的奖励将会重置，请在月底前领取您的奖励，千万别错过哦。',
  currentPoints: '当前投注额',
  currentPointsMultiplier: '当前积分倍数',
  receiveReward: '领取奖励',
  alreadyReceived: '已领取',
  mergedReards: '已经累计到下一级别合并领取',
  noReward: '暂无奖励，晋升到下一级别，解锁您的首次奖励',
  // vip俱乐部
  vipClub: 'VIP 俱乐部',
  // 积分商城
  mallStore: '积分商城',
  // 账户设置
  generalInformation: '一般信息',
  changePassword: '更换密码',
  googleAuthenticator: '谷歌身份认证',
  privacySetting: '隐私设置',
  currentPwd: '当前密码',
  newPwd: '新密码',
  confirmPwd: '再次确认密码',
  changePwdLimit: '为确保您的资金安全，当您修改密码后， 24小时内您将无法进行提款操作。',
  disabledGoogle: '谷歌身份验证器已停用',
  activeGoogle: '请使用谷歌身份验证器扫描二维码或输入代码激活。',
  whatGoogleCode: '什么是谷歌身份验证器？',
  typeCode: '输入谷歌验证码',
  submitCode: '提交代码',
  keyValue: '关键值',
  // 消息通知
  notice: '公告',
  mail: '站内信',
  makeAllRead: '全部设为已读',
  noMessage: '您没有任何通知消息',
  // 奖励
  claimReward: '领取奖励',
  claimNewReward: '领取新的奖励',
  rewardCode: '奖励代码',
  claim: '领取',
  recentTransaction: '近期交易',
  // 搜索
  searchHolder: '游戏、厂商',
  searchMore: '搜索更多',
  searchRecommend: '为你推荐',
  enter: '进入',
  // fund
  fundAccount: '钱包',
  activeBalance: '余额',
  balance: '余额',
  deposit: '存款',
  buyCrypto: '购买加密货币',
  withdraw: '提款',
  youDepositAddress: '您的存款地址',
  minDepositAmount: '最低存款金额',
  quickTips: '快速提示',
  quickTipCont: '在您每次进行转账时, 请务必使用您在我们出纳柜台的最新存款钱包地址.',
  promoCode: '促销代码',
  currentBalance: '当前余额',
  myRewards: '我的奖励',
  transactionHistory: '历史记录',
  supportSettings: '支持与设置',
  walletSettings: '钱包设置',
  faq: '帮助',
  liveSupport: '在线客服',
  chooseCrypto: '选择您偏好的货币',
  cryptoCurrency: '加密货币',
  bank: '银行',
  chooseDepositChain: '选择存款网络',
  confirmDepositAddress: '请在执行交易前确认您的存款地址',
  recommendExchange: '从我们推荐的交易所购买加密货币',
  // 交易记录
  deposits: '存款',
  withdrawals: '{curreny} 提款',
  bets: '投注',
  wins: '奖金',
  currencyFilter: '按币种筛选',
  dateFilter: '按日期筛选',
  winLose: '输赢',
  nodata: '暂无记录',
  // 钱包设置
  currency: '货币',
  btcUnit: '比特币单位',
  // 提款
  inputAmount: '输入金额',
  walletDetails: '钱包详情',
  walletDetailsBig: '钱包详情',
  waitingResults: '等待审核',
  withdrawUsdt: '{curreny} 提款',
  amount: '金额',
  minWithdrawAmount: '最低提款金额',
  next: '下一步',
  youWithdrawAddress: '您的提款地址',
  payto: '支付到',
  checkWithdrawAddress: '请在每次交易之前务必检查您的提款钱包地址。',
  previewWithdraw: '预览提款',
  confirmWithdrawInfo: '请确认所有资料正确',
  network: '网络',
  withdrawing: '提款进行中',
  summary: '总结',
  transactionType: '交易类型',
  finalBalance: '最终余额',
  backToFund: '回到资金',
  chooseWithdrawChain: '选择提款网络',
  confirmWithdrawAddress: '请在执行交易前确认您的提款地址',
  walletAddress: '钱包地址',
  walletAddressBig: '钱包地址',
  tradeStatus: { 1: '未完成', 2: '已确认', 3: '已删除' },
  // 首页
  readMore: '查看详情',
  sports: '体育',
  liveCasino: '真人娱乐',
  slots: '老虎机',
  sbSport: '沙巴体育',
  fbSport: 'FB体育',
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
  globalPaymentSolutions: '全球支付解决方案',
  otherPayment: '其他主流支付方式',
  sportsBet: '体育投注',
  liveCasinoBet: '真人娱乐投注',
  slotBet: '老虎机投注',
  more: '更多',
  loadMore: '加载更多',
  providers: '运营商',
  allProviders: '全部运营商',
  sortBy: '排序',
  polular: '流行',
  promotions: '促销活动',
  aboutUs: '关于我们',
  selectLanguage: '选择语言',
  ruleTerms: '规则和条款',
  responsibleGambling: '负责任博彩',
  amlPolicy: '反洗钱政策',
  selfExclusion: '自我排除',
  privacyPolicy: '隐私政策',
  fairness: '公平性',
  game: '游戏',
  followUs: '关注我们',
  language: '语言',
  helpCenter: '帮助中心',
  acceptCrypto: '支持的加密货币',
  licencesSecurity: '牌照与安全',
  gameBig: '游戏',
  userBig: '用户',
  payoutBig: '支付',
  betUser: '投注者',
  multiplier: '倍数',
  paymentAmount: '支付额',
  invisibility: '隐身',
  currencyLang: {
    usdt: '泰达币',
    btc: '比特币',
    eth: '以太坊',
    busd: 'Binance USD',
    trx: '波场币',
    xrp: '瑞波币',
    bnb: 'Binance Coin',
    ltc: '莱特币',
    ada: 'Cardano',
    doge: '狗狗币',
    ton: '公开网络',
    usd: '美元',
    cny: '人民币'
  },
  // 积分商城
  points: '积分',
  pointsNum: '积分数量',
  earnPoints: '获得',
  pointType: '类型',
  spentPoints: '消费',
  afterPoints: '账变后积分',
  createTime: '创建时间',
  pointsType: {
    '1': '投注',
    '2': '兑换商品',
    '3': '优惠活动',
    '4': '系统添加',
    '5': '系统扣除',
    '6': '取消兑换'
  },

  // 游戏提供商
  provider: {
    all: 'ALL',
    sabaSports: 'Saba Sports',
    btiSports: 'Seabet Sports',
    fbSports: 'FB Sports',
    evolution: 'Evolution',
    bombayLive: 'Bombay Live',
    ezugi: 'Ezugi',
    asiaGaming: 'Asia Gaming',
    pragmaticPlay: 'Pragmatic Play',
    playingo: "Play'n GO",
    netEnt: 'NetEnt',
    playTech: 'PlayTech',
    microgaming: 'Microgaming',
    sexy: 'Sexy Baccarat'
  },

  // 数据验证提示
  tips: {
    // 用戶-登录注册
    inputAccount: '请输入用户名',
    isAccount: '用户名必须是5-12位以字母开头的字符串',
    inputPassword: '请输入密码',
    isPwd: '密码必须是6-16位的数字或字母',
    pwdNotMatch: '两次密码不一致',
    googleCode: '谷歌身份验证码必须是6位数字',
    loginFail: '登录失败',
    inputEmail: '请输入邮箱',
    isEmail: '邮箱格式错误',
    inputEmailcapcha: '请输入邮箱验证码',
    inputDay: '请选择出生日',
    inputMonth: '请选择出生月份',
    inputYear: '请选择出生年份',
    inputCountryCode: '请输入国家代码',
    inputphoneNumber: '请输入手机号码',
    inputAddress: '请输入地址',
    inputZipCode: '请输入邮政编码',
    userNameExist: '用户名已存在',
    emailExist: '邮箱已存在',
    emailNotExist: '邮箱不存在',
    isAudit: '请确认您已经成年并接受隐私策略',
    isAgree: '请阅读并接受相关市场活动信息',
    regSuccess: '注册成功',
    regFail: '注册失败',
    loginSuccess: '登录成功',
    sendSuccess: '发送成功',
    resetSuccess: '重置密码成功，请重新登录',
    resetFail: '重置密码失败',
    sendFail: '发送失败',
    editUserInfoSuccess: '修改用户信息成功',
    inputNewPwd: '请输入新密码',
    isNewPwd: '新密码必须是6-16位的数字或字母',
    inputOldPwd: '请输入旧密码',
    isOldPwd: '旧密码必须是6-16位的数字或字母',
    editPwdSuccess: '修改密码成功，请重新登录',
    bindGoogleSuccess: '绑定谷歌验证码成功',
    logoutSuccess: '退出登录成功',
    setSuccess: '设置成功',
    inputWithdrawAmount: '请输入提款金额',
    overMaxWithdrawAmount: '提款金额不能大于余额',
    underMinWithdrawAmount: '提款金额必须大于最低金额',
    inputWithdrawAddress: '请输入提款地址',
    withdrawSuccess: '申请提款成功',
    withdrawFail: '申请提款失败',
    receivedRewardSuccess: '领取成功',
    receivedRewardFail: '领取失败',
    noLogin: '您尚未登录',
    goLogin: '立即前往登录',
    invalidThirdUser: '验证第三方用户失败',
    authFail: '授权失败',
    copySuccess: '复制成功',
    copyFail: '该浏览器不支持自动复制，请手动复制',
    inputExhangeCode: '请输入兑换码',
    startGameFail: '启动游戏失败',
    insufficientPoints: '积分不足',
    exhangeSuccess: '兑换成功',
    openWindow: '即将为您打开窗口进行游戏，祝您游戏愉快',
    openExchange: '即将为您打开窗口进入交易所',
    unBindGoogleSuccess: '解绑成功',
    openExplorer: '即将为您打开窗口查询交易',

    inputTrueName: '请输入姓名',
    selectDocType: '点击选择证件类型',
    inputDocType: '请选择证件类型',
    inputDdocNumber: '请输入证件号码',
    airlineCompany: '请输入航空公司',
    inputDeparture: '请输入出发地',
    inputDestination: '请输入目的地',
    inputHotelName: '请输入酒店名称',
    inputCity: '请输入酒店所在城市',
    inputCountry: '请输入酒店所在国家',
    inputRoomNum: '请输入酒店房间数量',
    inputInRoomDay: '请输入入住天数',
    betHolder: '投注时间',
    inputBetTime: '请选择投注时间',
    inputOrderId: '请输入注单号码',
    orderNoholder: "注单号码，多个请用'，'隔开",
    applySuccess: '申请成功',
    applyFail: '申请失败'
  },

  rewardsBig: '奖励',
  myStats: '积分记录',
  exclusiveRewards: '专属奖励',
  quickBuys: '快速购买',
  earned: '赚取',
  spent: '消费',
  pointsHistory: '积分记录',
  earnPointsAndTrack: '赚取积分并跟踪他们',
  viewPointsRecord: '查看您所有的积分消费记录',
  buyNow: '立即兑换',
  youWillGet: '您将获得',
  bonusValue: '筹码价值',
  wageringRequirement: '投注要求',
  enableVisible: '启用隐身模式',
  hiddenYourBet: '您的投注不会出现在公开投注动态和投注预览中',
  startNow: '立即开始',
  withdrawStatus: { 1: '处理中', 2: '成功', 3: '失败' },
  time: '时间',
  betAmount: '投注金额',
  support2: '支持',
  btiSportIntro: '多年体育平台运营经验，Seabet体育博彩平台为玩家提供身临其境、优化的体育博彩游戏体验。',
  sabaSportIntro: '经过近二十年的多方证实，沙巴体育平台提供广泛的体育赛事、多种创新投注类型、业界最佳赔率。',
  fundRecord: '账变记录',
  categoryFilter: '按分类筛选',
  fundCategory: {
    1: '存款',
    2: '提款',
    3: '投注',
    4: '结算',
    5: '系统加款',
    6: '系统扣款',
    7: '促销活动赠送',
    8: '退款',
    9: 'VIP升级奖励',
    10: '兑换筹码',
    17: '提款失败'
  },
  beforeBalance: '账变前余额',
  afterBalance: '账变后余额',
  tradeDetails: '交易详情',
  tradeNo: '订单号',
  orderStatus: '订单状态',
  orderType: '订单类型',
  orderTypes: { 1: '存款', 2: '提现', 3: '投注', 4: '奖金' },
  blockChain: '链',
  betAndEarn: '下注 & 赢取',
  placeAndEarn: '投注 & 赢取',
  spinAndEarn: '旋转 & 赢取',
  enabledGoogle: '谷歌身份验证器已启用',
  stopGoogle: '谷歌身份验证器已启用, 如果想关闭此功能, 请使输入谷歌验证码后点击"提交代码"关闭。',
  unlockNewReward: '新奖励已解锁！',
  unlockNewRewardTip: '恭喜您！ 刚刚解锁了新奖励。点击此处选择您的奖励类型',
  dymondReward: '当您达到该等级时，将会自动生成奖励',
  siteTitle: '最领先的加密货币赌场及体育博彩平台',
  unlockAllReward: '恭喜您！ 解锁了全部奖励',
  newGame: '新游戏',
  oneDay: '24小时',
  week: '周',
  moreGame: '更多游戏',
  question: '常见问题',
  status: '状态',
  tradeCode: '交易代码',
  copyTradeCode: '复制交易代码',
  realName: '姓名',
  sex: '性别',
  male: '男',
  female: '女',
  documentType: '证件类型',
  documentNumber: '证件号码',
  airlineCompany: '航空公司',
  placeOfDeparture: '出发地',
  destination: '目的地',
  onewayOrRoundtrip: '是否往返',
  oneway: '单程',
  roundtrip: '往返',
  engineroomType: '机舱类型',
  economyClass: '经济舱',
  businessClass: '商务舱',
  firstClass: '头等舱',
  submit: '提交',
  hotelName: '酒店名称',
  city: '城市',
  roomType: '房间类型',
  presidentialSuite: '总统套房',
  luxurySuite: '豪华套房',
  businessSuite: '商务套房',
  roomNum: '房间数量',
  roomDay: '入住天数',
  otherService: '其他服务',
  idCard: '身份证',
  passport: '护照',
  militaryId: '军官证',
  diplomaticCard: '护照',
  moonpayExchange: '使用借记卡/信用卡购买加密货币',
  learnMore: '了解更多',
  comingSoon: '即将开放...',
  affiliate: '联盟计划',
  rewardActivities: '奖励活动',
  rewardRecords: '奖励记录',
  applyPromo: '申请奖励',
  applyNow: '立即申请',
  rewardStatus: { 0: '处理中', 1: '通过', 2: '拒绝' },
  betTime: '投注时间',
  betOrderNo: '注单号码',
  startEarning: '开始赚取',
  historyType: '类型',
  rewardName: '奖励名称',
  startTime: '开始时间',
  endTime: '结束时间',
  minMaxBet: '最小-最大投注',
  volatility: '波动性',
  volatilitys: { 1: '低', 2: '中低', 3: '中', 4: '中高', 5: '高', 6: '非常高', 7: '非常低' },
  myPoints: '我的积分',
  backPromo: '返回促销',
  noSupportFullScreen: '当前浏览器不支持全屏',
  pointsExchange: '积分兑换',
  view: '详情',
  oprate: '查看',
  remain: '剩余',
  directlyLogin: '或者使用',
  fastDeposit: '快速存款',
  demoMode: '乐趣试玩',
  trueMode: '真钱模式',
  gameStatic: '游戏数据统计',
  receivedSuccess: '{ amount } USDT 已领取成功',
  goTime: '出行时间',
  backTime: '返程时间',
  inTime: '入住时间',
  outTime: '退房时间',
  sabaSportDesc: {
    0: '超全赛事',
    1: '多终端支持',
    2: '安全加密',
    3: '准确即时赔率',
    4: '独立后台'
  },
  seabetSportDesc: {
    0: '自主研发',
    1: '最高赔率',
    2: '定制级投注界面',
    3: '精确结算系统',
    4: '上百种投注选择'
  },
  pickDate: '选择日期',
  inputGotime: '请选择出行时间',
  inputBacktime: '请选择返程时间',
  inputInTime: '请选择入住时间',
  inputOutTime: '请选择退房时间',
  hotelTimeError: '退房时间不能小于入住时间',
  ticketTimeError: '返程时间不能小于出行时间',
  countryHolder: '+86',
  numberHolder: '138xxxxxxxx',
  submitInfoSuccess: '您的信息提交成功',
  back: '返回',

  problem: {
    whatVip: '1. 什么是VIP俱乐部?',
    whatVips: `<p>Seabet.ioVIP俱乐部是专门为加密货币客户开放的社区，让他们可以随时在网站上享受所有优惠活动。您的每一次投注，每次旋转和每手游戏都将进行累积，您将在俱乐部中逐渐升级，并一路解锁惊喜奖励。在解锁VIP等级的同时您也将获得Seabet投注积分，通过积分您将获得更加丰富的奖励和服务。</p>
    <p>其实简单来说就是： 您玩游戏，我们奖励</p>`,
    howGetIntegrial: '2. 如何获得积分?',
    howGetIntegrials: `<p>您每次投注，老虎机旋转和牌桌游戏都会获得俱乐部积分。收集的积分越多，获得的等级越高。当您通过不断晋级的过程中，将伴着花式惊喜奖励。一路解锁，奖励一路升高</p>`,
    whatVipLevel: '3. 什么是VIP等级?',
    whatVipLevels: `<p>俱乐部等级决定您可以领取奖励的价值和类型。在俱乐部逐渐晋级的过程中，您的奖励也将不断提高.</p>
                    <table>
                      <tr>
                        <th>VIP级别</th>
                        <th>所需投注额</th>
                        <th>奖励次数</th>
                      </tr>
                      <tr>
                        <td>青铜</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>白银</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>黄金</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>铂金</td>
                        <td>30万</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>钛金</td>
                        <td>190万</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>钻石</td>
                        <td>600万</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4. 积分如何计算?',
    howComputeInterials: `<p>不论是体育投注，还是玩娱乐场游戏旋转时，使用加密货币都将可以得积分。为了计算您每次下注所赚取的积分，我们将在结算注单时按照实时市场汇率将您的下注金额转换为USDT，从而使无论您使用哪种加密货币，所有点数收集都是公平的。由于转换率会长期波动，因此我们在计算积分时会始终遵守四舍五入到最接近的整数的原则来进行补偿。</p>
                        <p>Seabet积分获取公式为玩家在任意场馆的投注金额*0.01*对应级别的积分系数，如玩家等级为铂金，投注金额为5000，那么根据积分计算公式，该玩家所获积分为5000*0.01*1.3=65积分。Seabet积分用途广泛，玩家可通过积分在积分商城中兑换等值礼品及服务项目。</p>`,
    whyMergedReward: '5. 为什么我的奖励被合并?',
    whyMergedRewards: `<p>您的奖励被合并是因为您的一次投注有可能解锁多个奖励。为了方便您使用，我们将奖励价值相加，并显示为一种奖励。</p>`,
    resetVip: '6. 我的VIP等级何时重置?',
    resetVips: '<p>您的VIP等级将在每个月初重置为0。然后，您可以从青铜等级开始再次领取下一级别的所有奖励。您积分仍将被保留，以兑换更多的奖励及服务。</p>',
    everyGetInterial: '7. 是否每个投注都可收集俱乐部积分?',
    everyGetInterials: `<p>不是。只有用真钱投注才会累积俱乐部积分。</p>
                        <p>赛马</p>
                        <p>电竞游戏</p>
                        <p>此外，以下的赌场游戏也不包含在俱乐部内，对它们下注将不会为您赚取积分</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },

  faqs: {
    q1: '我如何存款？',
    a1: `<p>1.选择您选择的加密货币，然后点击存款</p>
          <p>2.复制一次性充值地址，在钱包中使用（或扫描二维码）。</p>
          <p>3.交易一经确认，您将收到通知。</p>`,
    q2: '我如何提款？',
    a2: `<p>1. 选择您要提现的加密货币，然后点击提现。</p>
          <p>2. 输入您要提取的金额。</p>
          <p>3. 输入你的钱包地址。</p>
          <p>4. 单击提款按钮。</p>`,
    q3: '存款/取款需要多长时间？',
    a3: `<p><b> 存款 </b></p>
          <p>大多数加密货币存款都以闪电般的速度处理。但是，第三方服务可能会有一些延迟。</p>
          <p><b> 取款 </b></p>
          <p>大多数提款都会立即处理。在大额提款的情况下，我们会手动处理这些提款，因此可能会稍有延迟。</p>`,
    q4: '你们提供哪些付款方式？',
    a4: `<p>Seabet.io 中可用的货币选项有：</p>
          <p>• @:currencyLang.usdt </p>
          <p>• @:currencyLang.btc </p>
          <p>• @:currencyLang.eth </p>
          <p>• @:currencyLang.busd </p>
          <p>• @:currencyLang.trx </p>
          <p>• @:currencyLang.xrp </p>
          <p>• @:currencyLang.bnb </p>
          <p>• @:currencyLang.ltc </p>
          <p>• @:currencyLang.ada </p>
          <p>• @:currencyLang.doge </p>
          <p>• @:currencyLang.ton </p>`,
    q5: '你们对交易收取费用吗？',
    a5: `<p>虽然我们不对 Seabet.io 的存款和取款收取任何交易费用，但您可能需要为使用区块链支付交易费用。</p>`
  },

  errorCodes: {
    1001: '记录不存在',
    1002: '活动已关闭',
    1003: '数据已存在',
    1004: '数据错误',
    1005: '参数错误',
    1006: '您未达到领取要求',
    1007: '您今日已提交过该优惠申请',
    1008: '优惠活动已过期',
    1009: '您已领取过此优惠',
    1010: '没有符合要求的存款订单',
    1011: '存款金额未达到领取要求',
    1012: '谷歌验证码错误',
    1013: '还需要完成 { data } USD有效投注才能提款',
    1014: '用户名已存在',
    1015: '手机号码已存在',
    1016: '邮箱地址已存在',
    1017: '用户名格式错误',
    1018: '密码格式错误',
    1019: '验证码错误',
    1020: '系统繁忙，请稍后再试',
    1021: '签名错误',
    1022: '您的账号已被停用，请联系客服',
    1023: '用户名或密码错误',
    1024: '账号已被锁定',
    1025: 'Google验证器已绑定',
    1026: '未绑定Google验证器',
    1027: '当前密码错误',
    1028: '邮箱地址格式错误',
    1029: '邮件发送失败',
    1030: '商品数量不足',
    1031: '可用积分不足',
    1101: '可用余额不足',
    1032: '为确保您的资金安全，当您修改密码后， 24小时内您将无法进行提款操作。',
    1033: '邮箱验证码错误'
  },

  // 条款协议等内容
  html: {
    // html标题
    vipTitle: 'VIP 俱乐部',
    rulesTitle: '规则与条款',
    responsibleTitle: '博彩责任',
    amlTitle: '反洗钱政策',
    selfExclusionTitle: '自我排除',
    privacyTitle: '隐私政策',
    fairnessTitle: '公平性',

    // html内容
    vipContent: `<div class="vip-clubhouse-box">
                    <div class="vc-rows">
                      <div class="vr-title">一、VIP俱乐部介绍</div>
                      <div class="vr-conts">
                        <p>欢迎来到${site_name}尊贵会员俱乐部</p>
                        <p>在${site_name}，我们致力于提升游戏品质，并提供最佳的游戏体验。我们推出了一个全新的尊贵会员俱乐部，以奖励在我们网站花费时间游戏并忠实于我们网站的会员朋友。</p>
                        <p>只需投注您所喜爱的游戏、体育赛事等任意一款由${site_name}提供的游戏服务并通过等级的上升即可解锁独家奖励。</p>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">二、个性化服务</div>
                      <div class="vr-conts">
                        <p>专业的客户经理团队确保您的一切需求并始终达到行业最高标准，VIP会员可享受独家奖金、受邀参加著名活动以及为您制定快速、有趣、高效的游戏体验，为您量身定制的多种多样的奖励机制。</p>
                        <dl>
                          <dt>VIP专属经理：</dt>
                          <dd>只关注您的需求</dd>
                          <dd>专为您量身定制的私人游戏体验</dd>
                        </dl>
                        <dl>
                          <dt>高额奖励：</dt>
                          <dd>专为您设计的优惠</dd>
                          <dd>免下注奖励</dd>
                          <dd>高快速的积分获取速度</dd>
                        </dl>
                        <dl>
                          <dt>业内最高投注限额：</dt>
                          <dd>通过加密货币每日无限次的存款和取款</dd>
                        </dl>
                        <dl>
                          <dt>VIP专属促销：</dt>
                          <dd>区别于普通会员的促销优惠</dd>
                          <dd>为您保留最好的游戏体验</dd>
                          <dd>仅VIP用户可见</dd>
                          <dd>个性化优惠</dd>
                          <dd>为您定制专属于您的娱乐服务</dd>
                        </dl>
                        <dl>
                          <dt>7*24小时优先服务：</dt>
                          <dd>无需排队，无需等待</dd>
                          <dd>我们首先关注您的需求</dd>
                          <dd>多种社交媒体联系方式，专属客户经理在线服务</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">三、等级设置</div>
                      <div class="vr-conts">
                        <p>六种VIP等级，完整涵盖了您整个的游戏旅程</p>
                        <dl>
                          <dd>青铜：青铜1</dd>
                          <dd>白银：白银1-白银5</dd>
                          <dd>黄金：黄金1-黄金8</dd>
                          <dd>铂金：铂金1-铂金10</dd>
                          <dd>钛金：钛金1-钛金10</dd>
                          <dd>钻石：钻石1-钻石6</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">四、VIP俱乐部成员能够享受到的福利</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>升级奖金：在每达到下个级别后获取奖金，所达到的级别越高，奖金越多</dd>
                          <dd>定制只属于您的优惠：对常规优惠不感兴趣？没关系，当您达到相应的VIP等级后，我们将会为您特别定制您所感兴趣的优惠内容，仅属于您个人的优惠内容</dd>
                          <dd>私人定制级娱乐体验：无论是各大赛事、演唱会、音乐会还是一场豪华旅行，当您成为我们的高级VIP会员，您的一切个人花销均由您所信赖的${site_name}提供，您的行程由我们来安排</dd>
                          <dd>专属VIP服务：为您分配一名支持并满足您的投注需求的专属VIP服务代表</dd>
                          <dd>更快速的积分获取：不同的VIP等级所获取的积分速度对比普通会员更快，更高的等级获取的积分也会更多，所能兑换的奖品也将更丰富</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">五、如何成为我们的VIP会员</div>
                      <div class="vr-conts">
                        <p>要成为Seabet的VIP俱乐部会员，请遵循以下步骤：</p>
                        <dl>
                          <dd>
                            继续投注：成为 VIP 的关键是始终投注各种体育赛事和赌场游戏。${site_name} 将奖励您的一致性。作为顶级加密博彩网站，请定期使用您的数字资产对 ${site_name} 提供的任何赛事和赌场游戏进行投注。也可以尝试
                            USDT 投注，并持续使用您的资金。
                          </dd>
                          <dd>
                            参加定期活动：${site_name} 的促销活动包括您可以随时参加的各种活动和竞赛。定期参加其中任何一个活动都会让您更有机会获得 VIP 会所邀请。不仅如此，您还可以在 ${site_name} 的其他俱乐部功能中更加活跃
                          </dd>
                          <dd>等待邀请：您需要做的最后一件事就是等待我们向您发送邀请。继续玩游戏并参加豪客赛。经过几次赌场博彩和体育博彩后，一旦您被认为值得成为 VIP 俱乐部会员，您将立即获得邀请。</dd>
                          <dd>
                            作为${site_name}会所VIP体验高尚生活：将您的 USDT 博彩体验带入一个全新的世界，同时享受作为 ${site_name}
                            贵宾俱乐部会员的顶级福利。当您进行体育博彩和赌场游戏时，作为有价值的玩家享受最好的乐趣、快速和公平的投注。
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>`,

    rulesContent: `<div>
                    <h2>规则和条款</h2>
                    <h3>1. Seabet.io</h3>
                    <h3>2. 重要通知</h3>
                    <p><b>2.1 </b>当您在WWW.SEABET.IO（以下简称“本网站”）注册时，您即签订了合同，并同意受以下内容约束： </p>
                    <p>（I） 这些条款和条件; </p>
                    <p>（II） 我们的隐私政策; </p>
                    <p>（III） 我们的 COOKIE 政策和 </p>
                    <p>（IV） 适用于我们的投注或游戏产品的规则，如这些条款和条件（“条款和条件”或“协议”）以及投注和/或游戏特定规则，并被视为已接受并理解所有条款。</p>

                    <p><b>2.2 </b>请您仔细阅读本协议，确保您完全理解本协议内容。如果您对因接受本协议而产生的权利和义务有任何疑问，请在进一步使用本网站和访问其内容之前咨询您所在司法管辖区的法律顾问。如果您不接受本条款，请勿使用、访问或访问本网站的任何部分（包括但不限于子域、源代码和/或网站 API，无论是否可见）。</p>
                    <h3>3. 通用条款</h3>
                    <p><b>3.1</b>当您在www.Seabet.io进行注册时， 您（“您”，“您的”，您自己“或”玩家“互换）与Seabet签订协议。</p>
                    <p><b>3.2 </b>在您使用Seabet的服务或产品之前，您应完整阅读本协议。请注意，本协议构成您与Seabet之间具有法律约束力的协议。</p>
                    <p><b>3.3 </b>这些条款和条件在您完成注册过程后立即生效，其中包括选中接受这些条款和条件的框并成功创建帐户。在创建帐户后使用本网站的任何部分，即表示您同意适用于本网站使用的这些条款和条件。</p>
                    <p><b>3.4 </b>我们有权随时修改这些条款和条件，恕不另行通知。如果我们进行此类修改，我们可能会采取适当措施提请您注意此类更改（例如通过电子邮件或在网站上的显着位置发布通知，以及修订后的条款和条件），但您应自行负责检查是否有任何修订、更新和/或修改。在对条款和条件进行任何此类修订后，您继续使用本网站服务将被视为您接受并同意受此类修订、更新和/或修改的约束。</p>
                    <p><b>3.5 </b>如果本条款和条件的条款与本条款和条件中提及的任何游戏规则或其他文件之间存在任何冲突，则以本条款和条件的条款为准。</p>
                    <p><b>3.6 </b>这些条款和条件以多种语言发布，以供参考和方便玩家访问。英文版本是您与我们之间关系的唯一法律依据，如果任何类型的翻译有任何差异，则以这些条款和条件的英文版本为准。</p>

                    <h3>4. SEABET账户</h3>
                    <p>注册</p>
                    <p><b>4.1 </b>为了使您能够在 Seabet.io 上下注，您必须首先亲自在我们这里注册一个账户（“Seabet账户”）。</p>
                    <p><b>4.2 </b>为注册成为Seabet的用户并使用其网站服务，相关个体需提交注册并创建Seabet账户的申请。创建Seabet账户的申请须由本人直接提交，并需要提供一组个人信息，包括但不限于电子邮件地址、全名、出生日期及联系地址等。</p>
                    <p><b>4.3 </b>如果<b>4.2.</b>中规定的信息在任何情况下，若用户信息未提供、被视为不完整、不准确或已过时，Seabet将保留其暂停该Seabet账户注册的权利，并且，任何后续可能被接受的存款将被视为无效，包括由此产生的任何奖金也将被视为无效。如果您的Seabet账户遭到暂停，请通过 （ support{'@'}Seabet.io）与我们的客户支持部门取得联系。</p>
                    <p><b>4.4 </b>所有申请人必须年满 18 岁或适用于您的任何法律确定的其他法定成年年龄，以年龄较大或更大者为准。Seabet保留要求任何玩家提供年龄证明并暂停其Seabet帐户的权利，直到提供令人满意的文件为止。Seabet非常重视其在未成年人和负责任赌博方面的责任。</p>
                    <p><b>4.5 </b>Seabet不接受以下个人的注册：</p>
                    <p>a） 未满 18 岁或未达到其管辖范围内的法定成年年龄或赌博;</p>
                    <p>b） 居住在非法或不允许赌博的司法管辖区。Seabet无法在每个司法管辖区验证服务的合法性，用户有责任确保他们对服务的使用是合法的;</p>
                    <p>c） 提供误导性信息或试图通过第三方。</p>
                    <p><b>4.6 </b>Seabet 保留自行决定拒绝任何Seabet账户申请的权利。</p>

                    <p>了解您的客户</p>
                    <p><b>4.7 </b>您声明并保证您在申请表上提供的任何信息都是真实、最新和正确的。</p>
                    <p><b>4.8 </b>Seabet保留随时要求提供其认为必要的任何KYC文件的权利，以确定玩家的身份和位置。Seabet保留限制服务，付款或提款的权利，直到身份得到充分确定，或Seabet自行决定的任何其他原因。Seabet还保留在适当的情况下披露玩家信息的权利，以遵守法律程序或Seabet（Seabet的所有者和运营商）隐私政策允许的其他方式，并且通过使用服务，您承认并同意此类披露的可能性。</p>

                    <p>多个帐户</p>
                    <p><b>4.9 </b>每位玩家只允许一个Seabet账户。如果您尝试或成功以自己的名义或任何其他名义开设多个Seabet账户，或者您尝试或成功通过任何其他人的Seabet账户使用本网站，Seabet将有权立即关闭您的所有Seabet账户，保留此类Seabet账户中的所有资金，并禁止您将来使用本网站。</p>
                    <p><b>4.10 </b>如果Seabet有理由相信您已经注册和/或使用多个Seabet账户，或与一个或多个使用多个不同Seabet账户的其他个人串通，Seabet有权将此类账户视为构成多个Seabet账户，并暂停或关闭所有此类Seabet账户。Seabet也有权保留资金，直到玩家证明他没有尝试创建多个帐户。</p>
                    <p><b>4.11 </b>如果您发现您拥有多个已注册的Seabet账户，您必须立即通知我们。否则可能会导致您的Seabet账户被冻结并保留资金。</p>

                    <strong>用户责任</strong>
                    <p><b>4.12 </b>确保您的登录详细信息得到安全保存是您的唯一责任。您不得向任何人透露您的登录详细信息。</p>
                    <p><b>4.13 </b>对于因您有意、无意、主动或被动地向任何第三方披露您的登录详细信息而导致第三方滥用或误用您的Seabet账户，我们概不负责。</p>
                    <p><b>4.14 </b>您不得向其他玩家出售、转让或获取Seabet账户。</p>
                    <p><b>4.15 </b>一旦您发现有关您的帐户的任何错误或与您下的任何投注有关的任何计算，您将立即通知我们。我们保留宣布任何受此类错误影响的投注无效的权利。</p>
                    <p><b>4.16 </b>您对您帐户下发生的所有活动负责。</p>

                    <p>安全特性</p>
                    <p><b>4.17 </b>我们建议您启用两步验证以增强您的账户安全性。</p>
                    <p><b>4.18 </b>我们可能会不时提供其他安全措施，我们鼓励您使用这些措施。</p>

                    <p>Seabet暂停和关闭</p>
                    <p><b>4.19 </b>在以下情况下，Seabet有权关闭或暂停您的Seabet帐户：</p>
                    <p>a） Seabet认为您正在或已经以欺诈或串通的方式或出于非法和/或非法或不正当目的使用本网站;</p>
                    <p>b） Seabet认为您正在或已经以不公平的方式使用本网站，故意欺骗或不公平地利用Seabet或其任何客户，或者如果您的Seabet帐户被用于第三方的利益;</p>
                    <p>c） Seabet应警方、任何监管机构或法院的要求，或者Seabet无法按照适用法规的明确要求验证您的身份、职业或资金来源;</p>
                    <p>d） 您违反了这些条款和条件，适用法规或合理使用我们的服务，或者Seabet担心您是一个强迫性问题赌徒，而没有被自我排除;</p>
                    <p>e） Seabet认为上述（a）至（e）中提及的任何事件可能已经发生或可能发生。</p>
                    <p><b>4.20 </b>如果Seabet因<b>4.15中</b>提及的任何原因关闭或暂停您的  Seabet账户，在适用法律允许的范围内，您应对Seabet由此产生或遭受的任何和所有索赔、直接损失、责任、损害、成本和费用（统称为“索赔”）承担责任，并在适用法律允许的范围内， 赔偿并使Seabet免受此类索赔的损害。</p>
                    <p><b>4.21 </b>在<b>4.15所</b>述的情况下，Seabet也有权在您采取此类行动后取消您的任何投注，或在法律允许的范围内扣留和/或保留本应支付或应付给您的任何和所有金额（包括任何奖金）。</p>
                    <p><b>4.22 </b>如果我们怀疑您的帐户已被泄露或被违反我们的服务条款使用，我们保留随时暂停或终止您的帐户的权利，恕不另行通知。</p>
                    <p><b>4.23 </b>如果Seabet  关闭您的Seabet账户，它将通知您提取Seabet账户余额的可用方法。</p>

                    <p>我们的责任</p>
                    <p><b>4.24 </b>对于您因未经授权访问您的帐户而可能遭受的任何损失或损害，我们概不负责。</p>
                    <p><b>4.25 </b>对于因您未能保持登录安全和私密而可能遭受的任何损失或损害，我们概不负责。</p>

                    <h3>5. 您的保证</h3>
                    <p><b>5.1 </b>在您持续使用服务之前，您声明、保证、承诺并同意：</p>
                    <p>能力</p>
                    <p>a） 您已年满 18 岁或由适用于您的任何法律确定的其他法定成年年龄，以较大年龄为准;</p>
                    <p>b） 您完全有能力与我们签订具有法律约束力的协议，并且您不受任何形式的有限法律行为能力的限制;</p>
                    <p>c） 您未被诊断或归类为强迫性或问题赌徒;</p>
                    <p>d） 您目前未被自我排除在任何赌博网站或赌博场所之外。如果您与任何赌博提供商签订自我排除协议，您将立即通知Seabet。</p>

                    <p>管辖</p>
                    <p>e） 您从合法的司法管辖区访问 Seabet.io;</p>
                    <p>f） 您不会在位于禁止在线下注和/或玩赌场和/或真人游戏的任何司法管辖区使用我们的服务;</p>
                    <p>g） 您接受并承认我们保留检测和防止使用禁止技术的权利，包括但不限于欺诈易检测、自动注册和注册、游戏和屏幕捕获技术。这些步骤可能包括但不限于检查玩家设备属性、检测地理位置和 IP 屏蔽、交易和区块链分析;</p>


                    <p>基金和税收</p>
                    <p>h） 对于您从我们这里收到的任何奖金，您全权负责报告和核算根据相关法律适用于您的任何税款;</p>
                    <p>i） 您全权负责通过您使用服务授予您的加密货币可能支付的任何适用税款;</p>
                    <p>j） 在使用服务时存在丢失加密货币的风险，Seabet对您任何此类损失不承担任何责任;</p>
                    <p>k） 您不会存入来自犯罪或其他未经授权的活动的资金;</p>
                    <p>l） 您不会使用不属于您的付款方式存入资金;</p>
                    <p>m） 所有存入的资金将专门用于网站上提供的服务;</p>
                    <p>n） 您不会提款或试图撤回不属于您的付款方式;</p>
                    <p>o） 您了解，通过参与网站上提供的服务，您将承担损失存款的风险。</p>
                    <p>p） 您接受并承认加密货币的价值可能会根据市场价值而发生巨大变化;</p>
                    <p>q） Seabet不应被视为金融机构;</p>

                    <p>其他</p>
                    <p>r） 您对服务的使用由您自行选择、酌情决定并承担风险;</p>
                    <p>s） 您不会通过Seabet账户进行犯罪活动;</p>
                    <p>t） 您在本协议有效期内提供给我们的所有信息都是真实、完整、正确的，并且您应立即通知我们此类信息的任何更改;</p>
                    <p>u） 您严格以个人和非专业身份参加游戏，并且仅出于娱乐和娱乐目的参加;</p>
                    <p>v） 您代表自己而非代表任何其他人参加游戏;</p>
                    <p>w） 您在我们这里只有一个账户，并同意不再在我们这里开立任何账户;</p>
                    <p>x） 您访问和使用本服务所需的电信网络和互联网接入服务完全超出Seabet的控制范围，Seabet对任何影响其的中断、缓慢、容量限制或其他缺陷不承担任何责任;</p>
                    <p>y） 您不会参与与您或任何第三方参与本网站上的任何游戏和/或服务有关的任何欺诈、串通、修复或其他非法活动，也不得使用任何软件辅助方法或技术或硬件设备参与本网站上的任何游戏和/或服务;</p>
                    <p>z） 如果您有权访问与赛事相关的非公开信息或可能影响赛事或投注类型结果的非公开信息，则您不会投注由相关体育/赛事管理机构监督的任何赛事;</p>
                    <p>aa） 如果您是运动员、教练、经理、所有者、裁判或任何有足够权力影响赛事结果的人，您不会投注由管理机构的相关运动或赛事监督的任何赛事;</p>
                    <p>bb） 如果您是体育管理机构或成员团队的所有者（直接或间接合法或受益所有者 10% 或以上的人），您不会投注由体育管理机构监督的任何赛事或该运动或赛事管理机构的成员团队参加的任何赛事;</p>
                    <p>cc） 如果您参与某项运动或活动，您将不会参与编制您参与的比赛的投注赔率。</p>
                    <p><b>5.2 </b>如果违反<b>5.1中</b>提及的任何陈述、认股权证或契约，Seabet保留自行决定关闭或暂停您的Seabet账户并在法律适用的范围内取消任何投注的权利。</p>

                    <h3>6. SEABET保证</h3>
                    <p><b>6.1 </b>Seabet保证他们将：</p>
                    <p>a） 以安全和适当的方式管理属于玩家的资金;和</p>
                    <p>b） 根据适用法律及其隐私政策管理与玩家有关的个人信息。</p>
                    <p><b>6.2 </b>本网站按“原样”提供，不作任何明示或暗示、法定或其他形式的保证、条件、承诺或陈述。Seabet特此排除所有默示条款、陈述、条件和保证（包括任何适销性、适销质量、满意质量和对任何特定用途的适用性）。 </p>
                    <p>Seabet不保证： </p>
                    <p>(一)网站和服务将满足您的要求; </p>
                    <p>(二)本网站和服务不会侵犯任何第三方的知识产权;</p>
                    <p>(三)网站和服务的操作将无错误或不间断;</p>
                    <p>(四)网站和服务中的任何缺陷都将得到纠正;或 </p>
                    <p>(五)本网站或服务器没有病毒。</p>

                    <p><b>6.3 </b>您可以通过以下方式联系Seabet：电子邮件地址（ support{'@'}Seabet.io） 或我们全天候（24/7）的实时在线聊天服务。只需登录您的Seabet账户，即可使用实时在线聊天功能。 然而，若Seabet自行判断出，您通过实时在线聊天、电子邮件或任何其他通讯方式，对Seabet、其关联公司，或我们的第三方服务提供商的任何员工，采取了侮辱或贬损的行为，Seabet有权利采取必要措施，包括但不限于限制、暂停或终止您的Seabet帐户的使用权限。</p>

                    <h3>7. 存款</h3>
                    <p><b>7.1 </b>只有当您的Seabet账户中有足够的资金参与任何游戏时，您才能参加任何游戏。为此，您应使用网站上提供的付款方式存入您的资金。Seabet不会因您参与任何游戏而给予任何积分。</p>
                    <p><b>7.2 </b>您必须使用www.Seabet.io上提供的付款方式将资金存入您的Seabet账户。</p>
                    <p><b>7.3 </b>您应确保存入Seabet账户的资金完全符合法律规定，特别是必须确认该资金不来自任何违法行为或非法来源。</p>
                    <p><b>7.4 </b>要将资金存入您的Seabet账户，您可以从您控制的加密钱包或通过 Seabet.io 上提供的任何其他付款方式转移资金。存款只能用您自己的资金进行。</p>
                    <p><b>7.5 </b>您只应将资金存入您的帐户，以便您使用此类资金在网站上下注/下注。Seabet有权暂停或关闭您的账户，如果我们合理地认为您存入资金而无意进行体育和/或博彩投注。在这种情况下，我们也可能向有关当局报告此活动。</p>
                    <p><b>7.6 </b>您承认并理解，您的Seabet账户注资只能通过您拥有的付款方式注资。</p>
                    <p><b>7.7 </b>您进一步理解、同意并承认，如果Seabet发现、检测和/或识别您：</p>
                    <p>a） 使用第三方支付方式为您的Seabet账户注资/正在注资;和/或</p>
                    <p>b） 用非法资金为您的Seabet账户注资/正在注资，此类活动将被视为构成违反服务条款的欺诈行为，并延伸至：</p>
                    <p>i） Seabet保留自行决定暂停或关闭您的Seabet账户的权利;和</p>
                    <p>ii） Seabet保留自行决定取消，撤销或调整任何交易以及没收存入的资金和/或从存入的资金中产生的奖金的权利。</p>
                    <p><b>7.8 </b>Seabet可以根据自己的描述设定最低存款金额。最低存款金额可以随时根据Seabet的描述进行更改，并将在网站上确定。请注意，根据您使用的付款方式，付款提供商可能会收取额外费用。</p>
                    <p><b>7.9 </b>您可以使用的付款方式以及最低和最高存款限额可以在本网站的存款部分找到。可能会收取和更改适用的服务费。某些付款方式可能并非在所有国家/地区都可用。</p>
                    <p><b>7.10 </b>每当使用支付服务提供商时，存款将立即处理，更新的余额会立即显示在Seabet账户中。Seabet对由于其支付系统或任何第三方造成的延误不承担任何责任。请注意：</p>
                    <p>a） 某些付款方式可能包含额外费用。在这种情况下，费用将在收银台中清晰可见。</p>
                    <p>b） 您的银行或支付服务提供商可能会根据其条款和条件以及您的用户协议向您收取额外的货币兑换存款费用。</p>
                    <p><b>7.11 </b>我们保留在处理您的Seabet账户存款时使用其他程序和手段来验证您的身份的权利。</p>
                    <p><b>7.12 </b>资金不能从您的Seabet账户转入其他玩家的Seabet账户。</p>
                    <p><b>7.13 </b>Seabet可以自行拒绝任何存款。账户被冻结或暂停的用户应避免在 www.Seabet.io存款</p>
                    <p><b>7.14 </b>如果玩家在其账户被冻结或暂停时试图存款，Seabet将有权保留资金。</p>

                    <h3>8. 提款</h3>
                    <p><b>8.1 </b>Seabet  保留拒绝玩家从其Seabet账户提款的权利，直到：</p>
                    <p>a） 玩家的身份已得到验证，Seabet已确认提款是由Seabet账户的持有人进行的;</p>
                    <p>b） 提款被转移到玩家是合法持有人的账户;</p>
                    <p>c） 已提供Seabet要求的任何其他信息;和</p>
                    <p>d） 玩家已遵守每笔存款的最低下注要求。</p>
                    <p><b>8.2 </b>Seabet保留调查您的帐户和游戏活动的所有权利。如果Seabet合理怀疑您的帐户或游戏活动违反了这些服务条款或适用的法律或法规，则Seabet可以在进行调查时自行决定延迟或拒绝进一步的存款，取款和/或游戏。您承认并接受Seabet可能无法就其调查的性质提供解释。</p>
                    <p><b>8.3 </b>所有提款必须通过您在存款时选择的相同付款方式进行，除非我们另有决定或无法这样做。如果您使用多种付款方式存款，我们保留将您的提款拆分为这些付款方式的权利，并根据我们的判断并根据反洗钱政策和法规通过相应的付款方式处理每个部分。</p>
                    <p><b>8.4 </b>如果我们错误地将不属于您的奖金记入您的Seabet账户，无论是由于赔率表中的技术错误，还是人为错误或其他原因，该金额将保留为我们的财产，并将从您的Seabet帐户中扣除。如果您在我们意识到错误之前提取了不属于您的资金，则错误支付的金额将（不影响法律上可能提供的其他补救措施和诉讼）构成您对我们的债务。如果贷记不正确，您有义务立即通过电子邮件通知我们。</p>

                    <p>法币提款</p>
                    <p><b>8.5 </b>您需要下注存款价值的100%才能请求法定提款。</p>
                    <p><b>8.6 </b>从Seabet  账户提款是通过向玩家付款或转入以玩家名义持有的银行账户进行的，正如玩家向Seabet建议的那样。在处理任何提款之前，Seabet保留在必要时进行强化尽职调查的权利。</p>
                    <p><b>8.7 </b>最低提款金额将在执行提款时在网站上确定。</p>
                    <p><b>8.8 </b>如果您有多次提款待处理，Seabet保留拒绝所有提款的权利，并要求您执行一次提款，所有多次提款的总和。</p>
                    <p><b>8.9 </b>Seabet不会向您收取任何提款费用。但是，建议您检查您使用的付款方式是否收取任何额外费用。Seabet将不负责第三方（如您的银行）向您收取的任何佣金或手续费，因为这超出了我们的控制范围。</p>

                    <p>加密货币提款</p>
                    <p><b>8.10 </b>在提出有效的提款请求时，加密货币提款将发送到您指定的加密货币钱包地址。</p>
                    <p><b>8.11 </b>Seabet保留对任何提款进行额外KYC验证程序的权利。希望收回已关闭、锁定或排除账户中的资金的玩家，建议与www.Seabet.io 联系。</p>
                    <p><b>8.12 </b>应检查所有交易，以防止洗钱。如果玩家发现与本网站任何游戏有关的任何可疑活动，他/她必须立即向Seabet报告。Seabet可以暂停，阻止或关闭Seabet帐户，并根据“防止洗钱法”或任何国家当局要求的任何其他法律依据要求这样做。您承认您帐户中的资金在玩游戏时会立即消耗掉，我们不提供退货、退款或追溯取消您的帐户。</p>

                    <h3>9. 玩家资金保护和拒付</h3>
                    <p><b>9.1 </b>您在Seabet账户中存入我们的任何资金，连同任何奖金，将为您存放在单独的客户银行账户/加密钱包中，仅用于您进行体育和游戏投注以及结算您可能因使用我们的服务而产生的任何费用或收费。这意味着您的资金受到保护，不会用于任何其他目的。</p>
                    <p><b>9.2 </b>如果我们因您的Seabet  账户原因导致Seabet遭受任何退款、撤销或拒绝付款，或Seabet因此遭受的任何损失，我们保留向您收取相关金额的权利。</p>
                    <p><b>9.3 </b>我们可以随时从您欠Seabet的任何金额中抵销您账户的任何正余额。</p>
                    <h3>10. 下注/下注</h3>
                    <p><b>10.1 </b>您可以在网站上提供的市场/产品上下注/下注。Seabet没有义务接受您的任何投注/投注，只有当您收到Seabet确认接受您的投注/投注时，投注/投注才会被视为有效和最终确定，因此被Seabet接受。</p>
                    <p><b>10.2 </b>Seabet只接受在线投注（包括通过移动设备进行的投注）。不接受任何其他形式（邮寄，电子邮件，传真等）的投注/下注，并且收到的将是无效的 - 赢或输。</p>
                    <p><b>10.3 </b>您有责任确保投注/投注的详细信息正确无误。一旦下注/下注，您不得取消。投注只能由您使用我们的编辑投注功能（如果可用）进行更改。Seabet只能在以下情况下取消或修改投注/投注：相关赛事已被暂停或取消，相关投注或其赔率存在明显错误，投注违反条款或出于法律或监管原因要求这样做。</p>
                    <p><b>10.4 </b>您的资金将按照下注顺序分配给投注/下注，并且不可用于任何其他用途。Seabet保留在当时或事后取消和/或撤销涉及已分配资金的投注/投注后进行的任何交易的权利。</p>
                    <h3>11. 投注/投注确认</h3>
                    <p><b>11.1 </b>投注/投注仅在您收到接受您的投注/投注的确认后才有效。您账户中资金不足的投注/下注将无效。</p>
                    <p><b>11.2 </b>您要求的投注/投注只有在Seabet接受后才有效。每个有效的投注/投注将收到一个唯一的交易代码。对于任何未使用唯一交易代码发行的投注/赌注的结算，我们概不负责。如果您不确定投注/下注的有效性，请查看您的帐户历史记录，或联系我们的客户支持团队（ support{'@'}Seabet.io）。</p>
                    <p><b>11.3 </b>如对投注内容发生争议，您和Seabet同意，其内部控制系统的Seabet交易日志数据库为此类事项的最终权威。</p>
                    <h3>12. 奖金</h3>
                    <p><b>12.1 </b>Seabet可自行决定不时提供一些奖金和促销活动。</p>


                    <p>资格</p>
                    <p><b>12.2 </b>成功注册Seabet账户后，您可能有资格获得Seabet促销和奖金。通过接受本协议并在网站上注册Seabet帐户，您也承认并接受与Seabet提供给您的任何促销和奖金相关的规则和条例的约束。</p>
                    <p>奖金条款和条件</p>
                    <p><b>12.3 </b>所有促销、奖金或特别优惠均受网站上提供的任何奖金的明确条款以及促销特定条款和条件（如适用）的约束，并且记入您帐户的任何奖金的使用必须遵守此类条款和条件。接受网站上提供的促销、奖金或特别优惠，即表示您同意此类促销、奖金或特别优惠的条款和条件，并承认在奖金余额可用于下注之前，必须始终以现金余额下注。我们保留随时撤销任何促销、奖金或特别优惠的权利。</p>
                    <p>激活和到期</p>
                    <p><b>12.4 </b>通过激活奖金或促销活动，您确认您也同意适用的条款和条件。</p>
                    <p><b>12.5 </b>在促销、奖金或特别优惠到期后，Seabet将不接受或兑现任何促销、奖金或特别优惠，除非Seabet自行决定选择针对任何特定客户、促销、奖金或特别优惠。到期日期将在特定促销、奖金或特别优惠的特定规则或条款和条件中规定。此外，Seabet保留自行决定更改或修改有关奖金赚取或到期的任何政策的权利。</p>
                    <p><b>12.6 </b>一旦被没收或停用，您将不再使用奖金（此后任何时候都不能重新激活）。任何已记入Seabet账户余额的赠金金额仍可供您使用。</p>
                    <p>奖金滥用和欺诈</p>
                    <p><b>12.7 </b>如果Seabet  认为服务玩家正在滥用或试图滥用奖金或其他促销活动，或者可能因滥用或缺乏Seabet采用的政策而受益，则Seabet可以自行决定拒绝，扣留或从任何玩家撤回任何奖金或促销活动， 或暂时或永久终止该玩家对服务、软件的访问和/或锁定该玩家的帐户。</p>
                    <p><b>12.8 </b>您只能在网站上开设一（1）个帐户。为了积累奖金、促销、特别优惠或其他目的而在网站上开设多个帐户应被视为滥用行为。</p>

                    <p>SEABET权利</p>
                    <p><b>12.9 </b>Seabet保留从所有不活跃账户或被认定为“奖金滥用者”的账户中删除奖金的权利。</p>
                    <p><b>12.10 </b>Seabet保留取消所有在索赔期内或60天内未领取的奖金的权利，两者中较短者为准。</p>
                    <p><b>12.11 </b>Seabet保留取消任何奖金的权利。</p>

                    <h3>13. 授权/服务条款</h3>
                    <p><b>13.1 </b>您同意 Seabet.io 网站上描述的游戏规则。Seabet保留对服务的发布，维护和关闭的权力。Seabet管理层关于任何服务使用或争议解决的决定是最终决定，不得进行审查或上诉。</p>

                    <h3>14. 禁止使用</h3>
                    <p>个人使用</p>
                    <p><b>14.1 </b>本服务仅供用户个人使用。用户只能为他/她的个人娱乐下注。用户不得出于串通、体育博彩和/或滥用服务的目的创建多个帐户。</p>

                    <p>反洗钱和制裁合规</p>
                    <p><b>14.2 </b>Seabet明确禁止并拒绝将服务用于任何形式的非法活动，包括洗钱，恐怖主义融资或违反贸易制裁，符合各个司法管辖区的法律，法规和规范。为此，本服务不提供给受美国、欧盟或其他全球制裁或观察名单约束的个人或实体。通过使用服务，您声明并保证您不是这样的主体。</p>
                    <p>司法管辖 区</p>
                    <p><b>14.3 </b>位于或居住在阿富汗、澳大利亚、白俄罗斯、比利时、科特迪瓦、古巴、库拉索岛、捷克共和国、刚果民主共和国、丹麦、法国、德国、希腊、伊朗、伊拉克、意大利、利比里亚、利比亚、立陶宛、荷兰、朝鲜、安大略、葡萄牙、塞尔维亚、斯洛伐克、南苏丹、西班牙、苏丹、叙利亚、瑞士、英国、美国、津巴布韦（“禁止的司法管辖区”）的人员不得使用本服务。为免生疑问，上述对在禁止司法管辖区进行真钱游戏的限制同样适用于位于禁止司法管辖区的其他国家的居民和公民。任何试图规避位于禁止司法管辖区或受限司法管辖区的任何人的游戏限制的行为均违反本协议。规避企图包括但不限于操纵Seabet用于识别您的位置的信息，并向Seabet提供有关您的位置或居住地的虚假或误导性信息。</p>

                    <p><b>14.4 </b>试图通过使用VPN、代理或类似服务或通过提供有关您居住地的错误或误导性信息来操纵您的真实位置，以规避地理封锁或管辖权限制，构成违反本服务条款第 5 条。</p>

                    <h3>15. 您的设备</h3>
                    <p><b>15.1 </b>阁下的电脑设备或流动装置及互联网连接可能会影响本网站的性能及/或运作。Seabet不保证本网站的运行没有故障或错误，也不保证Seabet服务不会中断。Seabet对因您的设备，互联网连接或互联网或电信服务提供商而引起的任何故障或问题（包括，例如，如果您无法下注或下注或查看或接收与特定事件相关的某些信息）不承担任何责任。</p>
                    <p><b>15.2 </b>对于使用移动设备下注/下注的客户，请注意，Seabet对安装软件的移动设备的任何损坏或数据丢失概不负责，也不对使用软件时产生的任何电话、数据或其他费用负责。</p>
                    <p><b>15.3 </b>由于移动设备上的显示尺寸有限，移动体验可能与其他平台略有不同。差异可能包括但不限于某些信息在平台上的位置以及游戏名称在所有游戏页面上不可见。</p>

                    <h3>16. 合理使用</h3>
                    <p><b>16.1 </b>本网站和服务只能通过对活动和/或游戏产品下注和下注来用于娱乐目的。</p>
                    <p><b>16.2 </b>您不得为第三方的利益或出于任何非法、诽谤、辱骂或淫秽的目的，或Seabet认为歧视、欺诈、不诚实或不适当的目的使用本网站。Seabet可以向当局报告其认为可疑和/或违反本段的任何活动。</p>
                    <p><b>16.3 </b>如果Seabet有理由怀疑您通过网站或服务或与网站或服务相关的适用法律规定的欺诈、不诚实或犯罪行为，Seabet可能会对您寻求刑事和合同制裁。Seabet将扣留任何怀疑的付款或怀疑付款是为了第三方的利益的任何客户。</p>
                    <p><b>16.4 </b>您应赔偿并有责任按要求向Seabet支付我们和我们的关联公司遭受或招致的所有费用、费用或损失（包括任何直接、间接或后果性损失、利润损失和声誉损失），就您在使用本网站或服务时直接或间接引起的所有索赔</p>
                    <p><b>16.5 </b>此外，我们保留不接受、处理和/或兑现适用法律或法规禁止、非法或非法的投注/投注的权利。</p>

                    <h3>17. 软件和技术问题</h3>
                    <p><b>17.1 </b>为了使用本网站和服务，您可能需要下载一些软件（例如，通过Flash播放器提供的赌场游戏）。此外，某些第三方产品提供商可能会要求您同意本网站上或通过本网站提供的有关使用其产品的附加条款和条件。如果您不接受这些第三方条款和条件，请勿使用相关的第三方软件。Seabet对任何第三方软件不承担任何责任。</p>
                    <p><b>17.2 </b>您只能出于使用本网站和服务的目的使用通过本网站提供给您的任何和所有软件，除非适用法律允许，否则不得用于任何其他目的。</p>
                    <p><b>17.3 </b>我们特此授予您一项个人的、非排他性的、不可转让的权利，以根据这些条款和条件，仅出于访问和使用本网站上服务的目的使用本网站。使用我们网站的权利，一旦您的用户注册因任何原因被取消，特别是但不限于，如果您使用该权利的目的是在我们的网站或我们的产品中生成一个平行企业，或者目的是使用自动化服务或软件分析， 捕获或以某种方式使用我们网站上显示的信息。</p>
                    <p><b>17.4 </b>您不得：</p>
                    <p>a） 将构成本网站一部分的软件安装或加载到服务器或其他联网设备上，或采取其他步骤通过任何形式的“公告板”、在线服务或远程拨入或网络向任何其他人提供软件;</p>
                    <p>b） 再许可、转让、出租、租赁、出借、转让或复制（除非本条款和条件另有明确规定）您使用本网站或构成本网站一部分的软件的权利，或制作或分发其副本的权利;</p>
                    <p>c） 进入、访问或试图进入或访问或以其他方式绕过Seabet的安全系统，或以任何方式（包括但不限于机器人或类似设备）干扰产品或网站，或试图对软件和/或其任何功能或组件进行任何修改;</p>
                    <p>d） 复制或翻译“在线”或电子格式提供的任何用户文档。</p>
                    <p>e） 此外，除非适用法律允许的与计算机程序相关的最小范围，否则您不得：（i） 翻译、逆向工程、反编译、反汇编、修改、基于本网站创建衍生作品或以其他方式修改本网站;或 （ii） 逆向工程、反编译、反汇编、修改、改编、翻译、尝试发现构成本网站一部分的软件的源代码，或基于本网站的全部或任何部分创建衍生作品。</p>
                    <p><b>17.5 </b>您不拥有构成本网站一部分的软件。此类软件是Seabet或第三方软件提供商公司（任何此类第三方提供商，“软件提供商”）拥有并专有的财产。任何已授权给Seabet的软件和随附文档均为软件提供商的专有产品，并在全球范围内受版权法保护。您使用本软件并不赋予您对本软件的任何知识产权的所有权。</p>
                    <p><b>17.6 </b>本网站按“原样”提供，不作任何明示或暗示、法定或其他形式的保证、条件、承诺或陈述。Seabet特此排除所有默示的条款、条件和保证，包括任何适销性、适销质量、令人满意的质量和对任何特定用途的适用性、服务或软件的完整性或准确性或违反适用法律和法规的行为。Seabet不保证或条件： </p>
                    <p>（i） 该软件将满足您的要求; </p>
                    <p>（ii） 本软件不会侵犯任何第三方的知识产权; </p>
                    <p>（iii） 软件的运行将无错误或不间断;（iv） 软件中的任何缺陷将得到纠正;或 </p>
                    <p>（v） 软件或服务器没有病毒。</p>

                    <p><b>17.7 </b>如果发生与帐户结算或软件的其他功能或组件有关的通信或系统错误，Seabet和软件提供商均不对您或任何第三方承担任何此类错误的责任。Seabet保留在发生此类错误时从网站上删除所有相关产品并采取任何其他行动纠正此类错误的权利。</p>
                    <p><b>17.8 </b>您在此确认，您如何使用软件不在Seabet的控制范围内。因此，您安装和/或使用该软件的风险由您自行承担。Seabet对您或任何第三方对您接收和/或使用该软件不承担任何责任。</p>
                    <p><b>17.9 </b>本软件可能包含对软件提供商和/或Seabet保密且有价值的机密信息。除非严格按照这些条款和条件，否则您无权使用或披露该机密信息。</p>
                    <p><b>17.10 </b>如果由于任何原因本网站在任何时间或任何时期不可用，Seabet概不负责。我们保留对本网站的任何方面以及通过本网站提供的内容、服务或产品（包括您对本网站的访问）进行更改或更正或更改、暂停或终止的权利。</p>
                    <p><b>17.11 </b>您不得通过引入病毒、木马、蠕虫、逻辑炸弹或其他恶意或技术上有害的材料来滥用本网站。特别是，您不得未经授权访问本网站，干扰，损坏或破坏本网站或其任何部分，托管本网站的任何设备或网络，与提供本网站有关的任何软件，或第三方拥有或使用的任何设备，软件或网站。您不得通过拒绝服务攻击来攻击我们的网站。对于因您使用本网站、软件或下载本网站上发布的任何材料或链接到本网站的任何网站而可能感染您的计算机设备、计算机程序、数据或其他专有材料的分布式拒绝服务攻击、病毒或其他技术上有害的材料造成的任何损失或损害，我们概不负责。</p>

                    <h3>18. 第三方内容</h3>
                    <p><b>18.1 </b>Seabet从多家供应商处接收信息、评论和内容。某些第三方产品提供商可能会要求您同意管理其 Feed、评论和内容的使用的其他条款和条件。如果您不接受相关的第三方条款和条件，您同意不使用相关的提要、评论或内容。</p>
                    <p><b>18.2 </b>Seabet不对任何第三方提要、评论和内容承担任何责任。</p>
                    <p><b>18.3 </b>如果本网站包含指向第三方网站和资源的链接，则这些链接仅供您参考。Seabet无法控制这些网站或资源的内容，也不对它们或因您使用它们而可能产生的任何损失或损害承担任何责任。包含指向第三方网站的链接并不构成对该第三方网站、产品或服务（如适用）的认可。</p>

                    <h3>19. 错误</h3>
                    <p><b>19.1 </b>如果您故意恶意行事，则Seabet将不承担任何责任，如果您试图从网站上投注或投注的任何错误中获得利益，包括： </p>
                    <p>（i） 相关赔率、点差、让分、总分、套现有明显误差; </p>
                    <p>（ii） Seabet继续接受封闭或暂停市场的投注或投注; </p>
                    <p>（iii） Seabet错误地计算或支付结算金额，包括投注被兑现为全部结算金额，或投注错误地无效，在下注时选择了“如果玩家未开始，则无效”;或 </p>
                    <p>（iv） 任何游戏或产品中包含、合并或使用的随机数生成器或付费表发生任何错误。</p>

                    <h3>20. 违约</h3>
                    <p><b>20.1 </b>在不影响任何其他权利的情况下，如果用户全部或部分违反此处包含的任何条款，Seabet保留采取其认为适当的行动的权利，包括终止本协议或与用户签订的任何其他协议和/或对该用户采取法律行动。</p>
                    <p><b>20.2 </b>您同意对Seabet及其股东、董事、代理人和员工进行全额赔偿、辩护并使其免受因以下原因引起的所有索赔、要求、责任、损害、损失、成本和费用，包括法律费用和任何其他费用，无论其原因如何：</p>
                    <p>a） 您全部或部分违反本协议;</p>
                    <p>b） 您违反任何法律或任何第三方权利;和</p>
                    <p>c） 您对服务的使用。</p>

                    <h3>21. 限制和责任</h3>
                    <p><b>21.1 </b>在任何情况下，包括疏忽，Seabet均不对因使用（或误用）服务而引起的任何特殊、附带、直接、间接或后果性损害（包括但不限于业务利润损失、业务中断、业务信息丢失或任何其他金钱损失）负责，即使Seabet事先知道此类损害的可能性。</p>
                    <p><b>21.2 </b>本协议中的任何内容均不排除或限制Seabet对其疏忽造成的死亡或人身伤害的责任。</p>

                    <h3>22. 知识产权</h3>
                    <p><b>22.1 </b>Seabet及其许可方是服务以及代码、结构和组织的所有权利的唯一持有人，包括版权、商业秘密、知识产权和其他权利。在适用法律规定的范围内，您不得： </p>
                    <p>（a） 复制、分发、发布、反向工程、反编译、反汇编、修改或翻译网站;或 </p>
                    <p>（b） 以适用法律或法规禁止的方式使用服务（上述每一项均为“未经授权的使用”）。 </p>
                    <p>Seabet保留本协议未明确授予用户的任何和所有暗示或其他权利，并保留对服务的所有权利，所有权和利益。您同意，对于因您委托任何未经授权的使用而引起或与之相关的任何损害、成本或费用，您将承担全部责任。 </p>
                    <p>您应在发现任何人对任何未经授权的使用进行委托后立即通知Seabet，并应根据您在这方面提供的信息向Seabet提供合理的协助，以开展任何调查。</p>
                    <p><b>22.2 </b>Seabet  一词、其域名和Seabet作为服务的一部分使用的任何其他商标或服务标志（“商标”）均由Seabet全权拥有。此外，网站上的所有内容，包括但不限于图像、图片、图形、照片、动画、视频、音乐、音频和文本（“网站内容”）均属于Seabet，并受版权和/或其他知识产权或其他权利的保护。您特此承认，通过使用服务，您不会获得网站内容和/或商标或其任何部分的任何权利。在任何情况下，未经Seabet事先书面同意，您均不得使用本网站内容和/或商标。此外，您同意不做任何会损害或可能损害Seabet权利的事情，包括Seabet的知识产权。</p>

                    <h3>23. 争议</h3>
                    <p><b>23.1 </b>如果用户希望提出投诉，请（ support{'@'}Seabet.io） 联系Seabet的客户服务团队。如果任何争议未能得到令您满意的解决，您可以在下文规定的管辖法律管辖范围内寻求补救措施。</p>

                    <h3>24. 修订</h3>
                    <p><b>24.1 </b>Seabet保留随时更新或修改本协议或其任何部分或以其他方式更改服务的权利，恕不另行通知，您将在发布时受修订后的协议的约束。因此，我们建议您查看当时有效的协议版本中包含的条款和条件。您继续使用本服务将被视为证明您同意对本协议的任何修订。</p>

                    <h3>25. 可分割性</h3>
                    <p><b>25.1 </b>如果本协议的某项条款在任何司法管辖区是或成为非法、无效或不可执行的，则不影响本协议任何其他条款在该司法管辖区的有效性或可执行性，也不会影响该条款或本协议任何其他条款在其他司法管辖区的有效性或可执行性。</p>

                    <h3>26. 转让</h3>
                    <p><b>26.1 </b>Seabet保留随时转让本协议全部或部分内容的权利，恕不另行通知。用户不得转让其在本协议下的任何权利或义务。</p>

                    <h3>27. 其他</h3>
                    <p><b>27.1 </b>Seabet对任何违反本协议任何条款的行为（包括Seabet未能要求严格和字面地履行或遵守本协议的任何条款）的弃权，不得以任何方式解释为放弃追究任何随后违反该条款的行为或任何违反本协议任何其他条款的行为。</p>
                    <p><b>27.2 </b>本协议中的任何内容均不得为非本协议一方的任何第三方创造或授予任何权利或其他利益。</p>
                    <p><b>27.3 </b>本协议中的任何内容均不得在您与Seabet之间建立或被视为建立合伙、代理、信托安排、信托关系或合资企业。</p>
                    <p><b>27.4 </b>Seabet可将本协议转让、转让、收费、再许可或以任何其他方式处理本协议，或将其在本协议下的任何权利和义务分包给任何其他方。</p>
                    <p><b>27.5 </b>本协议构成您与Seabet之间关于服务的完整理解和协议，并取代您与Seabet之前的任何协议、谅解或安排。</p>

                    <h3>28. 投诉</h3>
                    <p><b>28.1 </b>如您对我们的服务有任何不满或投诉，您可通过网站上提供的聊天功能或电子邮件地址（support{'@'}Seabet.io）与我们的客户服务团队取得联系。我们将竭尽全力在最短的时间内解决您所面临的问题。</p>

                  </div>`,
    responsibleContent: `<div>
                          <h2>有责任博彩</h2>
                          <p>在 Seabet.io;我们提供的平台和服务使我们的客户能够享受游戏和投注。我们的目标是为您提供一个安全，可靠，规范的环境，为您提供愉快和有益的体验。我们鼓励客户以负责任和合理的方式使用我们的服务。</p>
                          <p>各类的博彩游戏已经流行了多年，在Seabet.io游戏是为了给大家带来乐趣。我们还鼓励我们的玩家，在享受乐趣的同时，不要让游戏影响到他们的日常生活，并占据与家人和朋友所相处的时间。确保游戏所花费的金额仅是生活中除去所有开销之后所剩余的零钱或者闲钱，非常重要的一点是游戏并不能作为谋生手段，因为您无法保证从中盈利 。</p>
                          <p>虽然大部分的玩家游戏时会正常的负责任地进行游戏。但不幸的是，有少数的玩家可能会出现沉迷赌博的问题。</p>
                          <p>在 Seabet.io，玩家的生活/心理质量对我们至关重要，我们非常重视我们在负责任博彩中所担当的角色并建议您 ：</p>
                          <ul>
                            <li>将您的投注和游戏视为一种娱乐形式，只使用您为娱乐预留的钱。</li>
                            <li>不要下注或下注金额超过您的承受能力。</li>
                            <li>不要用你输不起的钱下注或下注。</li>
                            <li>不要追逐你的损失。</li>
                            <li>不要让您的投注和/或游戏占用您通常花在其他活动上的时间。</li>
                          </ul>

                          <p>如果您对赌博习惯有任何疑虑，并且觉得您无法遵循这些建议，我们强烈建议您向以下可以提供帮助和建议的认可组织寻求建议：</p>

                          <ul>
                            <li><a target="_blank" href="https://www.gamcare.org.uk/">GamCare</a></li>
                            <li><a target="_blank" href="https://keepitfun.rank.com/">Keep It Fun</a></li>
                            <li><a target="_blank" href="https://www.gamblingtherapy.org/">Gambling Therapy</a></li>
                          </ul>

                          <p>此外，如果您想了解我们的自我排除流程，您可以发送电子邮件至 (support{'@'}Seabet.io)系我们友好的Seabet.io客服。有时短暂休息可以帮助您沉淀您的想法并阻止你做出与往常不符的任何轻率的投注决定</p>
                          <p>根据要求，我们会将您的帐户置于至少 24 小时的冷静期。随后，我们的一位支持代理将通知您可用的自愿 1 周、1 个月、3 个月、6 个月或永久自我排除。</p>
                          <p>请注意;根据我们的自我排除政策关闭的账户不能以任何理由撤销或重新打开。但是，一旦您的自我排除到期，我们将向您发送电子邮件，告知您您的帐户再次处于活动状态。永久的自我排除将无限期地存在。</p>

                          <p>未成年</p>
                          <p>如果您想在 Seabet.io 与我们赌博，您必须年满 18 岁或您根据适用于您的法律所持有的司法管辖区的法定最低赌博年龄（如果更小）。</p>

                          <p>我们建议您，如果您的家中有任何未成年人，请查看以下家长控制软件链接，这些链接可能是一个有用的工具，用于控制和限制设备上可访问的内容。</p>

                          <ul>
                            <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                            <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                          </ul>
                        </div>`,
    amlContent: ` <div>
                    <h3>反洗钱、反恐怖主义融资声明</h3>
                    <h4>1.公司业务模型</h4>
                    <p>Seabet目前在全球超过169个国家为用户提供支持。作为其全球运营的一部分，Seabet已建立与其服务和产品相称的合规措施，这些措施旨在防止并检测其平台上的非法活动。这些措施包括对其客户的入职和合规筛选以及基于交易的控制措施。</p>
                    <h4>2. 公司政策声明</h4>
                    <p>Seabet明确禁止并拒绝使用Seabet产品进行任何形式的非法活动，包括洗钱、恐怖主义融资或违反贸易制裁，这与各国反洗钱（AML）法律、法规和准则一致。
                        Seabet继续监控金融行动特别工作组（FATF）和某些博彩贸易组织以及库拉索博彩控制委员会制定的准则设定参数，并将采取它认为适当的行动反映法律变化。
                        Seabet的意图是遵循全球最佳实践，防止Seabet产品被用来促进此类活动。这些最佳实践包括：</p>
                    <ul>
                      <li>采纳书面政策，以及合理设计的程序和控制措施，以防止洗钱、恐怖主义融资和违反贸易制裁；</li>
                      <li>在适当的情况下，指定一名合规官员来监督政策、程序和控制措施的实施；</li>
                      <li>向相关人员提供相关教育和培训；</li>
                      <li>对政策、程序和控制措施进行独立审查、监控和维护。</li>
                    </ul>
                    <h3>3.定义</h3>
                    <p>以下定义术语在行业中广泛使用：</p>
                    <p>洗钱：使非法获得的收益显得合法的过程。这个过程通常分为三个步骤：存放、分层和整合。</p>
                    <p>存放：将非法收益存入传统金融机构的过程，通过存款或其他途径。</p>
                    <p>分层：通过使用层次复杂的金融交易（例如，将现金转换为旅行支票、汇票、电汇、信用证、股票、债券或购买资产）将犯罪活动的收益与其来源分离的过程。</p>
                    <p>整合：使用看似合法的交易来掩盖非法收益，使洗钱的资金能够重新分发给犯罪分子；将现在的洗钱资金整合回正常使用。</p>
                    <p>可疑活动：用户或非用户使用该机构进行的活动，有迹象表明进行交易的人可能是出于欺诈或非法目的。</p>
                    <p>制裁：制裁是国际社会进行的活动，用以禁止或限制制裁目标的活动。例如，它们被用来：</p>
                    <ul>
                      <li>鼓励目标国家或政权改变行为；</li>
                      <li>对目标国家施压以遵守设定的目标；</li>
                      <li>当国际和平和安全受到威胁，外交努力失败时，作为一种执法工具；</li>
                      <li>防止和打击恐怖分子或恐怖主义行为的融资。</li>
                    </ul>

                    <h3>4. 治理和监督</h3>
                    <p>Seabet已任命一名首席合规官（CCO）负责协调AML政策和政策计划的实施。首席合规官的职责还包括制定AML计划，与其他利益相关者一起修订AML政策，评估新的监管要求和调查可能的可疑或不寻常的活动。Seabet还定期为所有员工提供AML培训。</p>
                    <h3>5. 教育和培训</h3>
                    <p>Seabet在其法律顾问的协助下，并在其CCO的监督下，Seabet可能会根据需要定期为员工提供反洗钱、反恐融资和贸易制裁合规培训。</p>
                    <h3>6. 报告</h3>
                    <p>Seabet有义务根据国家法令报告任何不寻常或可疑的交易。被确定在制裁名单上，与洗钱或恐怖融资或其他犯罪活动有关的客户将被作为可疑活动报告给监管机构。</p>
                  </div>`,
    selfExclusionContent: `<div>
                            <h2>自我排除</h2>
                            <p>如果您觉得自己无法再安全地控制赌博或赌博，我们为您提供自我排除在我们这里投注的选项。要开始如下所述的冷静期，请访问您的帐户首选项。</p>

                            <h3>1. 概述</h3>
                            <p>对于大多数人来说，赌博是一种令人愉快的休闲和娱乐活动。但对一些人来说，赌博可能会产生负面影响。因此，我们制定了这项政策，以传达我们负责任赌博的方法，并尽量减少对可能容易受到问题赌博影响的消费者的伤害。</p>

                            <h3>2. 什么是负责任赌博？</h3>
                            <p>「负责任赌博」是一个宽泛的概念，旨在确保赌博的进行方式能够最大限度地减少与问题赌博相关的潜在危害。它尊重个人对自己行为的责任，但也承认服务提供商的责任。</p>

                            <h3>3. 什么是问题赌博？</h3>
                            <p>当一个人失去对赌博的控制时，就会发生问题赌博，尤其是赌博的金额和用于赌博的时间。</p>

                            <h3>4. 客户服务原则</h3>
                            <p>在 Seabet.io，我们希望成为为客户提供安全环境的行业领导者。我们积极鼓励和促进负责任的赌博行为，并提供工具协助我们的客户保持对赌博的控制。</p>

                            <h3>5. 负责任赌博政策</h3>
                            <p>我们致力与政府、社区及个人共同责任，协助客户控制赌博，并帮助问题赌徒识别问题并寻求协助。 我们这样做的一些方式是：</p>
                            <p>我们这样做的一些方式是：i. 允许我们的客户自我排除（暂时或永久）与我们投注;ii. 向我们的客户提供负责任赌博信息和信息;iii. 在入职培训时对员工进行负责任赌博培训，每年至少一次;iv. 并将受问题赌博影响的客户转介给与赌博相关的支持服务。</p>
                            <p>我们的目标是实现以下成果：</p>
                            <ul>
                              <li>尽量减少赌博对个人和更广泛社区的伤害程度;</li>
                              <li>使客户能够就其赌博行为做出明智的决定;</li>
                              <li>使受赌博不利影响的人能够获得及时和适当的援助和信息;</li>
                              <li>促进个人、社区、博彩业和政府之间对负责任赌博行为的共同理解;</li>
                              <li>确保赌博业为提供赌博产品和服务提供安全和支持性的环境。</li>
                            </ul>

                            <h3>6. 未成年人</h3>
                            <p>作为一家负责任的运营商，我们致力于通过积极采取措施阻止未成年人使用我们的投注平台下注来保护未成年人。我们的服务旨在吸引年满 18 岁的人，并由他们使用。</p>

                            <h3>7. 过滤选项</h3>
                            <p>可以启用过滤选项以帮助防止人们进入在线赌场或在线体育博彩网站。如果未成年人可以访问您用于访问我们博彩平台的设备，我们建议您使用过滤软件来防止未成年人访问我们的博彩平台。</p>

                            <h3>8. 其他帮助</h3>
                            <p>如果需要帮助，请通过（ support{'@'}Seabet.io）或我们的实时聊天系统联系我们的支持团队，我们的一位代理将能够为您提供您所在国家/地区可用的协会详细信息和帮助电话号码。</p>

                            <h3>9. 条件和流程</h3>
                            <p>自我排除意味着在设定的时间内停止投注或赌博。自我排除可以是暂时的，也可以是永久性的。</p>
                            <p>通过请求我们提供的自我排除时间段之一，您同意以下条款和条件，这些条款和条件将从您收到所选自我排除的确认电子邮件的那一刻起生效，此电子邮件将仅发送到用于注册您的帐户的电子邮件地址，并将显示自我排除完成的日期。</p>
                            <p>通过我们的聊天功能提出的请求将不予处理。但是，客户支持代理会将您引导至我们的客户支持电子邮件服务。</p>
                            <p>在收到关闭帐户的电子邮件请求后，所请求的帐户和任何关联的帐户将被置于我们的第一阶段，即24小时冷静期，这将禁用您的帐户或帐户，不允许赌博活动。一旦这个时间过去了;当您的帐户保持关闭状态时，客户支持代理将通知您可用的 1 周、1 个月、6 个月和永久自我排除。这些时间段不会有变化。要继续此过程，我们将需要电子邮件回复。如果我们在接下来的 24 小时内没有收到回复，您的帐户将重新打开并通过电子邮件确认。</p>

                            <p>如果在查看我们的自我排除选项后，您决定要进行永久自我排除，则需要在出现提示时设置排除期。有时，如果我们认为需要和/或对客户有利，我们可能会决定将帐户置于较短的自我排除期。这将通过电子邮件传达;以上条款及细则将适用。</p>

                            <p>在自我排除时间段内，您不得在您的帐户中留下任何余额。在您请求的自我排除期间，您将无法访问您的帐户以提取任何资金。如果您的账户受到自我排除的影响，并且有任何活跃的投注，则在自我排除确认时将应用提现功能。投注不会无效;在自我排除时间段内，赌注将不会退还或保持活动状态。完成自我排除后，投注将不会恢复。在自我排除期间，您没有资格获得任何形式的福利、奖金或充值。</p>

                            <p>一旦对您的帐户应用了自我排除，它将一直存在，直到请求时间结束，它不会因任何原因而被撤销或减少。永久自我排除将无限期关闭。</p>

                            <p>我们将尽一切合理努力确保遵守我们的负责任赌博自我排除政策。但是，您接受，如果您尝试开设任何新帐户或确实成功，我们将不承担任何责任或义务。此外，如果您继续使用以前未披露的其他账户进行存款和下注，我们将不承担任何责任或义务。在要求的自我排除时间内，任何未来的投注、奖励资金和任何促销活动的参与都将被没收，导致不会退还本金或支付奖金。如果在自我排除期后重新开设帐户，我们将无法恢复这些帐户。自我排除后，您承认：</p>

                            <p>在您选择的自我排除期间，您不应尝试在您要求被排除的任何帐户上存入或下注。</p>

                            <p>在自我排除期间，您不应尝试或继续开设任何新帐户，如果选择了永久自我排除，则无限期地开设。</p>

                            <p>如果您在自我排除期内成功开立新账户，我们将尽力尽早关闭任何和所有此类账户。</p>
                            <p>我们的责任只是采取合理措施防止您在我们的任何产品上赌博。客户也有责任避免违反这些商定的条款。</p>

                            <p>自我排除请求是您自愿提出的请求。如果您继续违反此类要求，其任何员工或关联人员均不对您可能遭受的任何损失负责或承担责任。在排除您自己期间发生的任何损失将不予退还。</p>

                            <p>如果您的行为与自我排除请求背道而驰，我们保留终止或取消您下的任何赌注以及采取其他适当行动的自由裁量权。此外，如果我们怀疑或进一步调查提供证据证明您积极试图掩盖您的帐户或帐户的来源，这影响了我们及时阻止您的帐户的能力，公司保留终止或取消您下的任何赌注并采取其他适当行动的自由裁量权。</p>

                            <p>一旦您选择的自我排除结束，您的帐户将自动重新打开。但是，您将收到一封确认此信息的电子邮件，该电子邮件将发送到您注册的电子邮件地址。</p>
                          </div>`,
    privacyContent: ` <div>
                        <h2>隐私政策 </h2>
                        <p>Seabet.io尊重并保护所有使用我们服务的用户的隐私。本隐私政策（以下简称“本政策”）详述了我们收集、存储、使用和披露您的个人信息的方式。</p>
                        <h3>1.范围与适用 </h3>
                        <p>本政策适用于您访问和使用https://Seabet.io （以下简称“本网站”）以及所有Seabet品牌下的网站和应用程序，包括我们所有的移动应用程序和平板电脑应用程序。此外，本政策也适用于我们以其他方式与您交互的情况。</p>
                        <p>2用户的同意与修改</p>
                        <p>当您使用Seabet的网站时，即表明您同意接受本政策的约束。我们保留在任何时候，自行决定修改或变更本政策的权利，我们将在本网站上发布此类变更，此类变更将在发布之后立即生效。如果您在变更后继续使用本网站，即表示您接受此类更改。本政策不适用于链接到本网站的其他网站。</p>
                        <h3>3.收集的个人信息</h3>
                        <ul>
                          <li>我们可能收集和处理以下类型的个人信息：</li>
                          <li>姓名</li>
                          <li>电子邮件地址</li>
                          <li>用户提交的偏好信息</li>
                          <li>出生日期</li>
                          <li>国籍</li>
                          <li>实际住址</li>
                          <li>识别号码政</li>
                          <li>府签发的身份证件</li>
                          <li>位置数据</li>
                          <li>设备信息</li>
                          <li>IP地址</li>
                        </ul>
                        <p>这些信息主要来源于您在注册账户或与我们沟通时提供的信息。</p>
                        <h3>4.收集信息的目的</h3>
                        <p>我们收集您的个人信息是为了：</p>
                        <ul>
                          <li>进行客户身份验证（KYC）</li>
                          <li>让您能够订阅我们的营销通讯</li>
                          <li>处理您的会员申请</li>
                          <li>提供并改善我们的服务</li>
                          <li>识别和验证您的身份</li>
                          <li>与您沟通</li>
                          <li>进行市场研究和促销活动</li>
                          <li>回答您的问题和请求</li>
                          <li>遵守我们的合同和法律义务</li>
                        </ul>
                        <h3>5.个人信息的使用和披露</h3>
                        <p>我们可能会使用您的个人信息进行营销活动，并可能通过电子邮件、短信或电话向您介绍我们认为您可能感兴趣的产品或服务。如果您不再希望收到我们的营销或促销信息，您可以随时通过电子邮件与我们联系以取消订阅。</p>
                        <h3>6. 个人信息的安全保障</h3>
                        <p>用户需了解互联网数据传输并非绝对安全，Seabet.io无法保证用户上传至平台的信息绝对安全，该风险需由用户自行承担。然而，Seabet.io在收到用户的信息传输后，将采取适当措施防止用户个人信息被滥用、丢失以及遭到未经授权的访问、修改和披露。这包括采用密码保护系统和数据库，以及使用安全套接字层（SSL）技术。使用我们的服务或提供个人信息即视为用户同意我们可以以电子方式就与服务使用相关的安全、隐私和管理问题与您沟通。Seabet.io的员工、代理人和承包商须对会员的个人信息和交易行为保密。用户在公共平台或社交媒体环境（例如，Facebook，Twitter）发布的信息将被视为公开信息，Seabet.io无法保证此类信息的安全性。</p>
                        <p>我们强调，我们的服务并非面向儿童，我们不会接受其开设账户或提供个人信息。然而，家长或监护人有义务监管其孩子的互联网活动。请确保在使用完网站后，立即注销账户，尤其在共享设备的情况下。用户应对使用访问本网站的设备的安全和访问权限负责。最终，用户需自行维护用户名、密码和账户信息的保密性，并在使用互联网和我们网站时保持警惕。</p>
                        <h3>7.访问个人信息</h3>
                        <p>用户可通过点击网站上的“设置”链接或发送电子邮件至support{'@'}Seabet.io来访问Seabet.io收集的个人信息。我们将在合理期限内响应用户的访问请求。如果我们无法满足您的请求，我们将以书面形式告知您拒绝访问的原因以及投诉机制。</p>
                        <h3>8.删除个人数据</h3>
                        <p>如无法继续合法处理或存储用户个人数据，用户有权要求删除。然而，此权利并非绝对，如Seabet.io受法律义务约束，将无法满足用户的要求。请通过发送电子邮件至support{'@'}Seabet.io提出删除请求。</p>
                        <h3>9.联系方式</h3>
                        <p>如对我们处理您的个人信息有任何疑问、请求或投诉，请通过电子邮件support{'@'}Seabet.io或网站客户支持聊天功能与我们联系。</p>
                        <h3>10. 国际数据传输</h3>
                        <p>我们可能会在全球范围内进行信息传输、处理和存储，包括但不限于其他国家/地区，其数据保护法律可能与您所在地不同。我们会尽可能按照适用法律要求保护您的信息。</p>
                        <h3>11.处理的法律依据根</h3>
                        <p>据全球通用数据保护条例，Seabet.io处理您的个人信息有以下合法依据：履行合同、合法利益、用户同意以及遵守法律义务。</p>

                        <p>12隐私政策更新</p>
                        <p>Seabet.io可能会定期审查、更改和更新本隐私政策以反映我们的实践和责任。我们将在网站https://Seabet.io上发布最新的隐私政策。用户应定期查看本隐私政策以熟悉其条款。</p>
                      </div>`,
    fairnessContent: `<div>
                        <h2>公平性</h2>
                        <p>在您以包含加密货币在内的法定货币进行投注前，您必须在Seabet.io网站上注册账户。您在Seabet.io（以下简称“网站”）的使用，以及对Seabet.io账户的开设，均视为您已阅读、理解并接受本条款与条件的约束。</p>

                        <p>定义</p>
                        <p>Seabet.io – 被称为“我们”或“公司”。</p>
                        <p>玩家 – 称为“您”或“玩家”或“会员”或“客户”或“帐户持有人”。</p>
                        <p>游戏 – 指赌场和其他 RNG（随机数生成器）游戏，它们可能不时在网站上可用。</p>
                        <p>网站 – 指通过桌面、移动或其他平台 Seabet.io 玩家使用的网站。</p>
                        <p>会员帐户 - 访问和使用本网站所需的用户帐户。</p>
                        <p>客户支持 - 公司向其客户提供的协助和支持服务。</p>
                        <p>事件 - 指体育或投注赛事或运动中的比赛或游戏，其中客户可以对结果下注。</p>
                        <p>加密货币 - 应进一步解读为“比特币、山寨币, 和/或（如适用）其他支持的加密货币。</p>
                        <p>法定货币 - 由政府或中央银行管理局发行的不受支持的货币实物商品，如黄金或白银（如美元、巴西雷亚尔、日元、人）。</p>
                        <p>受限制的司法管辖区 - 受我们游戏限制的特定国家或地区许可证，因此，位于这些地区或来自这些地区的用户被禁止注册并在网站上播放。受限制的司法管辖区列表可能会不时更新至时间，可以通过以下链接访问。</p>

                        <h3>1. 总则</h3>
                        <p><b>1.1 </b>这些条款和条件（“条款和条件”）适用于投注体育和使用可通过网站访问的赌场式游戏。</p>

                        <p><b>1.2 </b>这些条款和条件在您完成注册后立即生效过程，包括选中接受这些条款和条件的框并成功</p>
                        <p>创建一个帐户。在创建帐户后使用本网站的任何部分，即表示您同意这些条款和条件适用于本网站的使用。</p>

                        <p><b>1.3 </b>在创建帐户。如果您不同意这些条款和条件的任何规定，则不得创建一个帐户或继续使用本网站。</p>

                        <p><b>1.4 </b>我们保留在任何时间修改本条款和条件的权利，且无需另行告知。若我们进行此类修改，我们可能会采取适当措施提醒您这些更改，例如通过电子邮件或在网站上发布通知以及修订后的条款和条件，但您应自行负责检查是否有任何修订、更新和/或修改。若我们确定对这些条款进行了任何更改并且被视为对您在此条款和条件下的权利或义务有“重大”影响，我们将尽合理努力通过电子邮件或在网站上发布通知您。您在对条款和条件进行任何此类修订后继续使用本公司的服务和网站将被视为您接受并同意受此类修订、更新和/或修改的约束。</p>

                        <p><b>1.5 </b>这些条款和条件可能以多种语言发布以供参考目的和玩家访问的便利性。英文版是您与我们之间的关系以及翻译方面存在任何差异的情况对于任何种类，均应以本条款和条件的英文版本为准。</p>

                        <h3>2. 具有约束力的声明</h3>
                        <p><b>2.1 </b>同意受这些条款和条件的约束，即表示您也同意受网站规则和隐私政策，特此通过引用纳入这些条款，以及条件。如有任何不一致之处，以本条款及细则为准。你特此声明并保证：</p>

                        <p><b>2.1.1 </b>您已年满18周岁;</p>

                        <p><b>2.1.2 </b>您完全有能力与我们签订具有法律约束力的协议，而您不是受到任何形式的有限法律行为能力的限制;</p>

                        <p><b>2.1.3 </b>您严格以个人和非专业身份参加游戏; 以及仅出于娱乐和娱乐目的参加;</p>

                        <p><b>2.1.4 </b>您代表自己而不是代表任何其他人;</p>

                        <p><b>2.1.5 </b>您在本协议有效期内向我们提供的所有信息均属实，完整、正确，并且您应立即通知我们此类信息的任何更改;</p>

                        <p><b>2.1.6 </b>您全权负责报告和核算任何税款、费用、收费或根据您居住地的任何当地或相关法律适用于您的征税，用于任何奖金您从我们这里收到;</p>

                        <p><b>2.1.7 </b>您理解，通过使用我们的服务，您将承担损失存入的资金的风险您的会员帐户，并接受您对任何此类损失承担全部责任;</p>

                        <p><b>2.1.8 </b>您不会在位于我们列表上的任何司法管辖区使用我们的服务受限制的司法管辖区。</p>

                        <p><b>2.1.9 </b>您所在的司法管辖区允许您使用在线体育博彩和赌场服务;</p>

                        <p><b>2.1.10 </b>关于向您的会员账户存入和提取资金，您只能使用加密货币和/或任何有效且合法属于您的法定货币;</p>

                        <p><b>2.1.11 </b>您接受并承认加密货币的价值可能会发生巨大变化取决于市场价值。</p>

                        <p><b>2.1.12 </b>计算机软件、计算机图形、网站和用户界面我们向您提供的由公司或其关联公司拥有，并受其保护版权法。您只能将该软件用于您自己的个人娱乐用途：根据我们制定的所有规则、条款和条件，并符合所有库拉索岛博彩牌照下的适用法律、规则和条例;</p>

                        <p><b>2.1.13 </b>您了解加密货币不被视为法定货币或货币，因此网站 它们被视为没有内在价值的虚拟资金。</p>

                        <p><b>2.1.14 </b>您确认您不是公司的高级职员、董事、雇员、顾问或代理人或为与公司有关的任何公司工作，或为上述任何一方的亲属或配偶工作;</p>

                        <p><b>2.1.15 </b>您未被诊断或归类为强迫性或问题赌徒。我们不是如果在使用我们的服务时出现此类问题赌博，我们将负责，但将努力告知可用的相关援助。我们保留实施冷静期的权利，如果我们相信这样的行动将是有益的。</p>

                        <p><b>2.1.16 </b>如果您是政治公众人物或政治公众人物的家庭成员，您接受并承认，我们可能需要在没有事先的情况下审查或暂停您的帐通知您，以便我们履行我们可能承担的任何尽职调查义务。你承认有关您帐户状态的任何决定仅在我们自行决定，其中可能包括永久关闭您的帐户;</p>

                        <p><b>2.1.17 </b>您在我们这里只有一个账户，并同意不再在我们这里开立任何账户;</p>

                        <p><b>2.1.18 </b>您接受并承认，我们保留检测和防止使用禁止的技术，包括但不限于欺诈易检测，自动化注册和注册，游戏玩法和屏幕捕获技术。这些步骤可能包括，但不限于检查播放器设备性，检测地理位置和IP屏蔽、交易和区块链分析;</p>

                        <p><b>2.1.19 </b>您接受我们终止和/或更改在网站，并拒绝和/或限制投注;</p>

                        <h3>3. 注册和开设您的会员账户</h3>
                        <p><b>3.1 </b>为了能够在我们的网站上下注，您必须首先亲自注册我们的账户（“会员账户”）。</p>

                        <p><b>3.2 </b>您不得注册，我们也不接受来自有限管辖权。您有责任确定您是否正在访问和使用我们的网站符合适用于您的任何规则、法律和法规，并且您保证对我们来说，赌博在您居住的地区并不违法。通过注册帐户我们和使用本网站即表示您确认您不在受限制的司法管辖区内或来自受限制的司法管辖区并且不使用任何第三方软件从受限制的司法管辖区访问我们的网站。</p>

                        <p><b>3.3 </b>如果您位于或来自受限制的司法管辖区，并且您打开或使用本网站：您的我们可能会立即关闭帐户; 任何奖金和奖励将被没收，并且退还的余额（需支付合理的费用），以及任何退货、奖金您获得或累积的奖励将被您没收，并可能被我们收回; 您将根据要求将任何已提取的此类资金退还给我们。</p>

                        <p><b>3.4 </b>如果您尝试开设多个会员账户，我们保留阻止，暂停或关闭您的会员账户，以及冻结记入您账户的任何资金。</p>

                        <p><b>3.5 </b>如果您发现您拥有多个注册会员帐户，您必须马上通知我们。否则可能会导致您的会员账户被冻结。</p>

                        <p><b>3.6 </b>在您发现与您的账户相关的任何误差，或者与您所下的任何赌注相关的任何计算错误时，我们期望您立即告知我们。我们保留宣布任何受此类误差影响的投注无效，并进行相应的撤销的权利。</p>

                        <p><b>3.7 </b>如果您 3 个月内不使用余额为正的帐户，您将收到我们的通知。如果您在我们通知后的 1 个月内未使用您的余额，我们可能会从您的帐户中删除余额以保护您的资金。如果发生这种情况，请通过以下方式与我们联系（ support{'@'}Seabet.io）重新打开您的帐户并取回资金。</p>

                        <p><b>3.8 </b>如果您的帐户余额为正且已闲置超过 12 个月，我们保留从您的余额中扣除相当于5%的每月管理费用的权利</p>

                        <p><b>3.9 </b>您必须在注册表中输入要求的所有必填信息，包括有效的电子邮件地址。如果您没有输入有效的电子邮件地址，我们将无法为您提供帮助恢复任何 “忘记的密码” 。您全权负责确保信息您提供的真实、完整和正确。</p>

                        <p><b>3.10 </b>我们有权执行“KYC”（了解您的客户）验证程序和如果我们确定您有提供虚假或误导性信息。</p>

                        <p><b>3.11作</b>为注册程序的一部分，您有义务完成对本网站的登录过程。您需要选择一个不含有攻击性或引发纷争的用户名。您对保护您的登录详细信息的安全性负有责任，严禁向任何人泄露。您将对任何由于您的披露，导致第三方滥用您的会员账户的行为负责，无论这种披露是故意的、意外的，还是主动或被动地将您的登录详细信息提供给任何第三方。</p>

                        <p><b>3.12 </b>如果您更改密码，出于安全原因，您将在24小时内无法提款原因。</p>

                        <h3>4. 安全</h3>
                        <p><b>4.1 </b>通过网站注册时，您将需要选择一个密码进行身份验证您在网站上使用的会员帐户。</p>

                        <p><b>4.2 </b>您同意对您的密码保密，并对任何滥用您的密码。在任何情况下因第三方使用您的帐户而遭受的任何损失我们不会退款，此外，您对任何第三方承担全部责任使用您的登录详细信息，并应使我们免受因后果。</p>

                        <p><b>4.3 </b>您同意，如果您认为您的帐户信息正在被第三方滥用，以便我们可以暂停您的帐户。我们建议您禁用浏览器中的任何自动密码记忆，使用两步验证和其他此类限制未经授权使用您的帐户的风险的措施。</p>

                        <h3>5. 存款</h3>
                        <p><b>5.1 </b>只有当您的会员账户中有足够的资金时，您才能参加任何游戏对于这种参与。</p>

                        <p><b>5.2 </b>您可以以加密货币或法定货币存款。最低存款金额可以是在我们的存款中心找到。指定的所有最低存款金额均为每笔交易。较小的存款将不相加。任何低于指定最低存款额的存款金额无效，不会记入您的用户帐户余额或退还给源。如果存款不符合我们列出的最低存款，公司概不负责要求。</p>

                        <p><b>5.3 </b>要将资金存入您的会员账户，您可以从加密钱包和您控制下的帐户。存款只能用您自己的资金进行。</p>

                        <p><b>5.4 </b>本网站不能保证所有货币在游戏中得到原生支持。</p>

                        <p><b>5.5 </b>在您首次存款时以及您账户的整个生命周期内，我们保留以下权利：在处理存款时，使用其他程序和方法来验证您的身份会员账户。验证将涉及个人身份证件。我们可能还需要确认您的付款方式和地址所有权的其他文件，以及验证过程的一部分。</p>

                        <p><b>5.6 </b>某些付款方式可能包含额外费用。在这种情况下，费用将很清楚在收银台中可见。</p>

                        <p><b>5.7 </b>您的银行或支付服务提供商可能会向您收取额外的货币费用在存款过程中根据他们的条款和条件以及您的用户进行转换协议。</p>
                        <h3>6. 提款</h3>
                        <p><b>6.1 </b>所有提款均应根据我们以下的提款政策进行处理。加密提款将在您输入的加密货币钱包地址进行有效时进行提款请求。要提款，您首先需要验证您注册的电子邮件地址从您的帐户资料中。要提取任何已存入的资金，我们需要在那里在请求提款之前，至少要对存款进行3次区块链确认。法定提款应在进行有效提款时存入您的个人法币账户请求。法定货币提款可能需要3个工作日，从他们开始根据支付服务提供商批准。</p>

                        <p><b>6.2 </b>最低提款金额可在我们的提款中心找到。所有指定金额是每笔交易。</p>

                        <p><b>6.3 </b>任何被错误地记入您帐户的奖金的金额仍然是财产网站，并在出现错误时自动从您的帐户中扣除检测。如果记入不正确，您有义务立即通知我们。任何奖金错误地记入您的帐户，随后由您提取（没有损害法律上可能提供的其他补救措施和诉讼）构成您欠公司的有效法律可执行债务，金额为此类错误归属的金额奖金。在这种情况下，我们保留启动债务追讨程序的权利，如果您未能自愿清偿未偿债务。</p>

                        <p><b>6.4 </b>对于法定货币和加密货币提款，本网站保留要求 1 倍下注的权利相当于接受提款请求之前的存款金额。</p>

                        <p><b>6.5 </b>我们保留阻止/延迟处理提款请求的权利，直到提出要求提供有效的带照片的身份证件、地址证明和/或借记卡的复印件我们的满意度（KYC）。</p>

                        <p><b>6.6 </b>本网站保留对任何内容执行额外的KYC验证程序的权利提款超过 2500 欧元或等值金额的加密货币，受我们的监管博彩牌照，并进一步保留在以下情况下执行此类验证程序的权利较小的提款，根据我们的游戏许可证的要求。希望追回的账户持有人建议在已关闭、锁定或排除在外的账户中持有的资金联系客户支持。</p>

                        <p><b>6.7 </b>应检查所有交易，以防止洗钱。本网站可能暂停、冻结或关闭您的会员账户，并扣留资金（如果要求这样做）根据《防止洗钱法》或《防止洗钱法》要求的任何其他法律依据任何国当局。可以对提取资金进行加强尽职调查，而不是用于下注，如果您未能处理提款，我们保留绝处理提款的权利遵守此类额外的尽职调查要求。</p>

                        <p><b>6.8 </b>我们保留应用至少5（五）倍存款的下注要求的权利金额，如果我们怀疑用户正在使用我们的服务作为混合器。严禁使用我们的用于娱乐以外的任何其他目的的服务。</p>

                        <p><b>6.9 </b>您承认您账户中的资金在玩游戏时会立即消耗掉，并且我们不提供退货、退款或追溯取消您的帐户。</p>

                        <p><b>6.10 </b>如果出现大量提款请求，我们可能会选择处理不超过100万每周USDT或等值的其他货币，直到全额结算。</p>

                        <p><b>6.11 </b>我们保留从任何交易费用或其他费用中扣除任何产生的交易费用或其他费用的权利</p>
                        <p>您提取的金额。</p>

                        <p><b>6.12 </b>您接受某些促销活动可能受到提款限制和/或在将资金记入促销活动之前需要满足的要求孤僻。此类条款应作为促销活动的一部分正式发布并提供。如果您选择在满足适用的投注要求之前提款，我们将扣除全部奖励金额以及与使用奖励相关的任何奖金批准任何提款之前的金额。本网站保留自行施加的权利个人奖励计划的酌情权、地理限制。</p>

                        <p><b>6.13 </b>请注意，某些付款方式可能包含额外费用。在这种情况下，费用将是在收银台上清晰可见。</p>

                        <p><b>6.14 </b>请注意，您的银行或支付服务提供商可能会向您收取额外费用存款，取款货币兑换根据其条款和条件以及您的用户协议。</p>

                        <h3>7. 基金</h3>
                        <p><b>7.1 </b>客户不能在钱包和货币之间转移或转换资金。</p>

                        <p><b>7.2 </b>您在网站上提供了进行加密货币存款所需的详细信息在存款页面。</p>

                        <p><b>7.3 </b>我们不会为使用我们的服务提供信用。</p>

                        <p><b>7.4 </b>您不会从您在本网站持有的余额中获得任何利息，并承认公司不是金融机构。</p>

                        <p><b>7.5 </b>如果您的帐户因任何类型的错误或提款请求而透支出于任何原因处理两次或更多次，您同意全额偿还本网站的任何此类费用透支金额。</p>

                        <p><b>7.6 </b>如果我们自行决定您正在使用 “双花” 方法，本网站将取消所有投注和奖金。具体来说，如果您赢了，请确认您的存款区块链并尝试提款，所有奖金将被没收，您的帐户将被没收永久关闭。如果试图从任何已连接的帐户。</p>


                        <h3>8. 奖励和促销</h3>
                        <p><b>8.1 </b>本网站保留取消任何促销、奖励或奖励计划的权利（包括但不限于免费货币奖励、存款奖励、充值奖励和忠诚度计划），如果我们认为奖励设置不正确或正在被滥用，在您的帐户收到后 72 小时内未使用，除非促销、奖励或特别优惠的单独条款和条件另有说明，并且所述奖励已支付，我们保留拒绝任何提款请求的权利，并从您的帐户中扣除该金额。是否设置奖励不正确或滥用应由本网站自行确定。</p>

                        <p><b>8.2 </b>如果您使用存款奖励，则不接受之前提取您的原始存款您已达到存款条款和条件规定的要求奖励。</p>

                        <p><b>8.3 </b>违反优惠或促销的任何条款，或有任何证据表明有一系列由一个客户或一组客户下注，由于存款奖励，增强付款，免费投注，无风险投注或任何其他促销优惠结果保证无论结果如何，无论是个人还是作为集团的一部分，客户利润网站保留收回此类优惠的奖励元素的权利，并绝对保留其绝对价值酌情决定以正确的赔率结算投注，取消免费投注奖励和无风险投注或取消任何由存款奖励资助的投注。此外，本网站保留征收对客户的管理费用，最高可达存款奖励的价值，免费投注奖励，无风险投注或额外付款以支付管理费用。我们进一步保留以下权利：要求任何客户提供足够的文件，让我们绝对满意在我们记入任何奖励、免费投注、无风险投注或提供给他们的帐户。</p>

                        <p><b>8.4 </b>所有网站优惠均面向休闲玩家，本网站可自行提供酌情限制客户参与全部或部分促销活动的资格。</p>

                        <p><b>8.5 </b>网站保留自行修改、取消、收回或拒绝任何促销活动的权利自由裁量权。</p>

                        <p><b>8.6 </b>每人/账户、家庭、住户、地址、电子邮件地址、IP 地址和共享计算机的环境（大学、学校、公共场所图书馆、工作场所等）只能领取一次奖励。公司保留关闭您的账户并没收的权利如果发现滥用/欺诈证据，则任何现有资金。</p>

                        <p><b>8.7 </b>您承认并理解，对于以下方面存在单独的条款和条件促销、奖励和特别优惠，以及这些条款和条件的补充。这些条款和条件在网站的相应内容页面中列出，或者已经视情况而定，亲自提供给您。如果发生冲突此类促销、奖励和特别优惠的规定，以及这些条款的规定和条件，以此类促销、奖励和特别优惠的规定为准。</p>

                        <p><b>8.8 </b>我们保留坚持要求您在自己的存款中下注一定金额的权利可以使用我们记入您帐户的任何奖励资金下注。具体金额以促销活动条款和条件中规定的要求。</p>

                        <p><b>8.9 </b>，您参与某些促销活动可能会受到取款限制，并/或在将资金计入促销活动前，可能需要满足一些特定要求。这些条款将作为促销活动组成部分，正式发布并供您参考。如果在未达到适用的投注要求的情况下您选择提款，我们将从您的账户中扣除全部奖励金额以及使用奖励所产生的所有相关奖金，此后我们才可能批准任何提款申请</p>
                        <p><b>8.10 </b>使用免费投注下注的奖金计算为 “总回报减去质押金额（包括免费投注金额）。您的免费投注的价值是因此，不包括在，也不能作为您从免费投注。</p>

                        <p><b>8.11 </b>请注意，如果投注无效，免费投注的本金不会退还。</p>

                        <p><b>8.12 </b>您必须在收到您的会员帐户上的奖励，除非促销、奖励或特别优惠另有说明。当奖励和/或奖励计划时在收到后72小时内未使用，本网站保留取消任何的权利此类奖励和/或奖励计划并可能扣除奖励或类似奖励的奖励或免费72 小时后立即旋转。</p>

                        <p><b>8.13 </b>当提供奖励（包括但不限于免费投注或免费旋转）时交换客户意见、意见、反馈或行动，例如完成客户调查中，这些激励措施将严格限制在相关时间段内每位用户一次调查/促销。</p>

                        <p><b>8.14 </b>促销活动可能以多种语言发布，以供参考和方便玩家访问。英文版本是您与之间关系的唯一法律依据我们，如果任何类型的翻译有任何差异，英语以本条款和条件的版本为准。</p>

                        <p><b>8.15 </b>某些游戏可能有不同的最高赢利金额。如果是这样，将显示此类限制在游戏内的信息页面中。</p>

                        <p><b>8.16 </b>某些娱乐场游戏不包括忠诚度和奖励投注。</p>

                        <p><b>8.17 </b>对于有下注要求的奖励金，玩家必须交出奖励及其在能够提款之前赢得指定次数。下注</p>
                        <p>奖励金的贡献取决于游戏类别。细分如下： 插槽– 100% 桌面游戏 – 20% 真人荷官游戏 – 20%</p>

                        <p><b>8.18 </b>某些促销活动可能会被取消和/或取消，并且只能在特定时期和某些特定条款下可用。您必须确保促销您感兴趣的内容仍然可用，您符合条件，您了解以下任何条款申请，并且您已选择在适用的情况下加入。 </p>

                        <h3>9. 关闭会员账户</h3>
                        <p><b>9.1 </b>如果您希望关闭您的会员账户，您可以随时联系通过电子邮件以书面形式提供客户支持。账户的有效关闭将相应终止条款和条件。如果关闭帐户背后的原因与担心可能的赌博成瘾或问题赌博有关，您应指出这是在请求关闭帐户时以书面形式进行的。如果不是负责任的赌博问题披露和/或给出帐户关闭的原因，您可以要求重新激活您的通过电子邮件帐户。帐户重新激活由我们自行决定。我们保留拒绝的权利复活。</p>

                        <p><b>9.2 </b>网站保留自行决定拒绝或关闭会员帐户的权利，而无需事先通知或有义务说明或证明原因。在没有涉嫌欺诈的情况下，金钱洗钱或非法行为，我们会将您的账户余额转入加密货币在您的帐户关闭之前，您选择的钱包（基于您的帐户余额）。您的法定货币账户余额将以您用制作存款。如果您使用仅存款的方式，我们将与您联系并找到其他退货方式账户关闭前的资金。</p>

                        <h3>10. 支持服务</h3>
                        <p><b>10.1 </b>作为您使用本网站的一部分，我们可能会通过多种方式为您提供支持服务沟通渠道，由我们审核并受控制。</p>

                        <p><b>10.2 </b>我们保留审查和记录通过任何沟通渠道。您使用我们的支持服务应是为了获得帮助和</p>
                        <p>仅供参考。</p>

                        <p><b>10.3 </b>我们有权删除或限制实时支持服务或立即终止您的会员账户并退还您的账户余额，如果您：</p>
                        <p>（a） 作出任何声明或分享任何侮辱、辱骂、诽谤、骚扰、露骨或严重冒犯的材料，包括但不限于表达亵渎、偏见、种族主义或仇恨;</p>
                        <p>（b） 使用我们的任何一项支持服务，以宣传、推广或以其他方式与任何其他在线实体相关;</p>
                        <p>（c） 是有理由相信试图不公平地利用我们的服务，例如，通过对同一案件、交易或特征的重复不真实陈述;</p>
                        <p>（d） 使关于公司或连接到本网站的任何其他互联网网站的声明不真实和/或恶意和/或对公司造成损害;</p>
                        <p>（e） 使用我们的任何支持服务来串通、从事非法行为或鼓励我们认为严重不当的行为。任何有关可疑活动的陈述可向主管当局报告。</p>

                        <p><b>10.4 </b>我们的支持服务用作您与我们之间的一种沟通形式，并且应该未经我们事先同意，不得复制或与任何第三方共享。</p>

                        <h3>11. 一般投注规则</h3>
                        <p><b>11.1.</b>只能由注册账户持有人下注。</p>

                        <p><b>11.2 </b>已下注并接受的投注不能修改、撤销或取消你。您可以在网站上找到所有投注的列表，其状态和详细信息。</p>

                        <p><b>11.3 </b>投注只能通过互联网进行。</p>

                        <p><b>11.4 </b>只有在您在网站上的帐户中有足够的资金时，您才能下注。</p>

                        <p><b>11.5 </b>投注一旦结束，将受有效的条款和条件版本的约束并在接受投注时在网站上提供。</p>

                        <p><b>11.6 </b>获胜投注的任何支出都将记入您的帐户，包括本金乘以下注的赔率。</p>

                        <p><b>11.7 </b>当您下注时，您承认您已阅读并完全理解所有内容这些关于网站上所述的投注的条款和条件。</p>

                        <p><b>11.8 </b>网站管理您的帐户，计算可用资金，待处理资金，投注资金以及奖金金额。这些金额被视为最终金额，并在没有任何明显错误，不会根据查询进行修改，外部审计或调查。</p>

                        <p><b>11.9 </b>您对下注负全部责任。</p>

                        <p><b>11.10 </b>奖金将在官方确认最终结果后支付到您的帐户相关运动或比赛的管理机构。</p>

                        <p><b>11.11 </b>除非我们的监管机构另有决定，否则本网站保留撤销的权利任何奖金，如果因涉嫌犯罪活动而受到任何调查，或任何可能影响结果的操作。如果投注模式中存在违规行为或活动结果由管理机构、第三方或网站、网站确认保留自行决定取消和/或退还活动上的任何质押金额的权利。如果已经产生了任何投注，本网站保留重新结算的权利活动结果并没收任何相关的奖金。</p>

                        <p><b>11.12 </b>如果您对与本网站投注有关的任何事项不满意，请通知网站在交易发生后7天内以书面形式提供。之后发出的通知7天期限将被忽略。万一结果之间存在差异出现在您的设备上，结果出现在我们系统的交易日志中，您同意由网站官员验证的我们系统交易日志中的结果将是最终的，结论性和约束力。</p>

                        <p><b>11.13 </b>如果本网站发现您下了来自不同的投注您不定期开设的账户，所有投注均可由网站。本网站保留在其认为必要时采取进一步行动的权利。</p>

                        <p><b>11.14 </b>如果超过规定的最大投注金额被错误地接受网站，超出的金额将被忽略，下注金额将被修改因此，差额应退还/记入您的帐户。</p>
                        <p><b>11.15本</b>网站所提供的实时视频流、统计数据、实时比分以及现场投注等信息，皆为增值信息服务。然而，本网站不承担任何责任，无论出现任何信息的不准确或错误。</p>

                        <p><b>11.16 </b>如果比赛没有在预定的开始日期开始或稍后开始和/或放弃且在下一个日历日期结束时未完成（恢复），所有投注将无效，除非根据相关规则确定为无条件的任何投注市场，在这种情况下，赌注可能会成立。</p>

                        <p><b>11.17 </b>本网站保留采用适用于特定比赛或可能与体育博彩规则相抵触的事件。此类特殊规则可能会发布结合特定地区、客户、比赛和/或赛事的公布赔率。</p>

                        <p><b>11.18 </b>下注后沟通中断和/或您没有收到视觉确认已成功下注，但投注已正确接收我们的服务器，投注应被视为有效并被接受。您将被告知您是否一旦重新建立沟通并确定结果，就会赢或输。如果赌注是由于通信错误，我们的服务器上未正确接收，不应被视为有效并被接受; 失败的投注将退还到您的帐户余额中。</p>

                        <p><b>11.19 </b>您承认并确认，下注后，您可能会收到确认告知您潜在的财务风险（如果有任何不确定性，请联系网站的客户支持）。收到此类确认后，您同意您已已得到充分通知。</p>

                        <p><b>11.20 </b>若外部来源提供的竞赛统计数据存在差异，应依据在我们公开的一般体育博彩规则页面中列出的数据来源为准。</p>
                        <p><b>11.21 </b>最大投注限额将取决于您在接受投注时，网站允许的接受金额。</p>

                        <p><b>11.23 </b>以下与提现功能有关：</p>

                        <p><b>11.23.1 </b>提现适用于赛前和赛中选定的赛事、赛程和盘口，单次和多次投注。</p>

                        <p><b>11.23.2 </b>接受提现请求的时间延迟。如果价格或市场发生变化暂停，则提现请求可能无法成功。</p>

                        <p><b>11.23.3若</b>提现申请获得批准，相应的投注款项将立即显示并进行结算。原先投注的实际最后结果并不会对提现进程产生影响。</p>

                        <p><b>11.23.4 </b>在任何情况下，成功提出提现请求后，退款的总金额将返回到您的账户。</p>

                        <p><b>11.23.5 </b>本网站不能保证您的投注可以使用提现功能选择。如果活动前有提现，我们不承保或停止承保赛事滚球，一旦赛事开始或我们的滚球赛，提现将不可用覆盖范围停止。当市场暂停时，将不提供提现。</p>

                        <p><b>11.23.6 </b>本网站保留对客户或客户群进行全面或部分撤回功能剥离的权利。在合理怀疑客户或客户群滥用提现功能以利用活动前价格变动，或经常性使用提现功能来在活动开始前关闭投注的情况下，我们将行使该权利。</p>

                        <p><b>11.23.7 </b>如果于技术原因导致提现功能不可用，本网站将不对此负责。此外，在此类情况下的任何投注行为将维持其原始的下注状态，本网站同样不承担任何责任。</p>

                        <p><b>11.23.8 </b>本网站保留接受或拒绝任何投注/投注的权利套现功能中包含的体育、比赛、市场或投注类型。</p>

                        <p><b>11.24 </b>最高奖金以美元作为基础货币报价，以确保 世界，但货币等值适用于实际支出。多重投注的位置其中涉及具有不同最高奖金限额的赛事，则将适用最低限额。都最高奖金限额适用于我们所有的客户或客户群，他们使用不同的投注账户以不同的价格包含相同选择的投注。应该我们有理由相信，已经有好几个赌注是这样下注的，全部支付这些投注加起来将仅限于一次最高奖金支付。</p>

                        <h3>12. 流产和流产的游戏</h3>
                        <p><b>12.1 </b>公司不对任何停机时间、服务器中断、滞后或任何技术或政治干扰游戏。退款只能由网站自行决定管理。</p>

                        <p><b>12.2 </b>对于被视为或造成的任何损害或损失，本公司概不负责据称由本网站或其内容引起或与之相关; 包括没有操作或传输的限制、延迟或中断、数据丢失或损坏，通信或线路故障，任何人滥用本网站或其内容或任何错误或内容遗漏。</p>

                        <p><b>12.3 </b>如果任何赌场游戏出现故障，所有投注均无效。</p>

                        <h3>13. 责任限制</h3>
                        <p><b>13.1 </b>您登录本网站并参与游戏的风险由您自行承担。网站和游戏不提供任何明示或暗示的保证。</p>

                        <p><b>13.2 </b>在不影响前述规定的一般性的情况下，您接受我们：</p>

                        <p><b>13.2.1 </b>不保证软件、游戏和网站适合其用途;</p>

                        <p><b>13.2.2 </b>不保证软件、游戏和网站没有错误;</p>

                        <p><b>13.2.3 </b>不保证软件、游戏和网站可以在没有的情况下访问中断。</p>

                        <p><b>13.3 </b>除本条款和条件明确规定的情况外，我们不承担责任对于任何损失、成本、费用或损害，无论是直接的、间接的、特殊的、后果性的，偶然或其他原因，与您使用本网站或您参与游戏。</p>

                        <p><b>13.4 </b>您理解并承认，如果游戏或其出现故障互操作性，在此类故障期间进行的任何投注均无效。从出现故障的游戏将被视为无效，以及任何后续的游戏回合所述资金，无论使用这些资金进行什么游戏。</p>

                        <p><b>13.5 </b>如果本网站保留宣布部分或全部投注无效的权利认为支付表上明显存在错误、错误、印刷错误或技术错误，赔率或软件。对于任何未实现的奖金，我们概不负责在这种情况下，使赌注无效的结果。退款仅由海博管理。</p>

                        <p><b>13.6 </b>您在此同意全额赔偿并使我们、我们的董事、员工、合作伙伴和服务提供商承担任何成本、费用、损失、损害、索赔和责任因您使用本网站或参与游戏。</p>

                        <p><b>13.7 </b>公司对任何损害或损失不承担任何责任，无论是合同、侵权、违反保证或其他，被视为或声称是由或声称由以下原因引起的与本网站或其内容的联系; 包括但不限于延迟或中断在操作或传输中，数据丢失或损坏，通信或线路故障，任何个人对网站或其内容的滥用或内容中的任何错误或遗漏。</p>

                        <h3>14. 隐私政策</h3>
                        <p><b>14.1 </b>您特此承认并接受，如果我们认为有必要，我们能够收集和以其他方式使用您的个人数据，以便您访问和使用本网站，以及以便允许您参与游戏。</p>

                        <p><b>14.2 </b>我们特此确认，在收集您的个人信息时，如前所述规定，我们受《数据保护法》的约束。我们将保护您的个人信息并根据最佳商业惯例和适用法律尊重您的隐私。</p>

                        <p><b>14.3 </b>我们将使用您的个人数据来允许您参加游戏并进行与您参加游戏相关的操作。通过开设您的会员账户，您承认并接受公司员工有权访问您的个人数据为了履行职责并为您提供最好的帮助，以及服务。我们还可能使用您的个人数据来通知您更改、新服务和促销。您可以随时选择不接收营销电子邮件。</p>

                        <p><b>14.4 </b>您的个人数据不会透露给第三方，除非此类披露是法律要求或使用我们的服务所必需的，在这种情况下，您被视为拥有同意向第三方披露此类信息。作为本网站的业务合作伙伴或供应商，或服务提供商可能负责其整体功能或运营的某些部分本网站，个人数据可能会披露给他们。网站员工可以访问您的个人数据，以履行其职责并为您提供最好的可能的帮助和服务。您在此同意此类披露。</p>

                        <p><b>14.5 </b>我们将无限期保留作为个人数据提供的所有信息，除非我们选择在应用程序数据保留期到期后或我们销毁此类信息法律要求销毁此类信息。</p>

                        <p><b>14.6为</b>了优化您的访问体验，以及监控和提升我们的网站服务，我们会收集您的浏览器发送的部分信息，此类信息被称为 Cookie。您有权选择是否接受我们的 Cookie 收集。但请注意，禁用 Cookie 可能会对您访问我们的网站产生严重影响，甚至可能完全阻止您的访问。</p>

                        <h3>15. 转让</h3>
                        <p><b>15.1 </b>不允许转让您在本协议项下的义务。您不得分配您的本协议项下的义务，以及本协议项下对任何其他人的任何权利或义务个人或实体。</p>

                        <h3>16. 完整协议</h3>
                        <p><b>16.1 </b>这些条款和条件构成您与我们之间的完整协议尊重本网站，除欺诈情况外，取代所有先前或同期您与我们之间的电子、口头或书面通信和建议尊重本网站。</p>

                        <h3>17. 可分割性</h3>
                        <p><b>17.1 </b>如果本条款和条件的任何规定被认定为非法或不可执行，则规定应与这些条款和条件分开，所有其他规定应继续有效，不受此类遣散的影响。</p>

                        <h3>18. 取消、暂停和关闭</h3>
                        <p><b>18.1 </b>在不限制我们依赖我们可能获得的其他补救措施的能力的情况下，我们可以暂停和/或终止您的帐户，取消任何未完成的投注和/或没收任何或全部在以下情况下，我们绝对酌情决定您账户中的资金：</p>
                        <p>（i） 我们怀疑您从事洗钱、非法或其他欺诈活动使用我们的网站时;或</p>
                        <p>（ii） 我们怀疑您存入了非法或以明显和严重贬值的方式获得的资金;或</p>
                        <p>（iii） 我们获得证据证明您是投注集团的一部分，其中多方参与下注以逃避网站规则、这些条款和条件或网站的任何其他规则;或</p>
                        <p>（iv） 我们确定您正在使用任何设备、机器人、蜘蛛、软件、例程或其他方法（或上述性质的任何内容）来干扰或试图干扰我们的服务、任何相关设备、软件、网站、赌场游戏、体育博彩和投注信息或网站上提供的任何交易的正常运行，特别是不会使用或使用任何人工智能或其他系统（包括专门设计用于欺诈和/或破坏网站系统的机器、计算机、软件或任何其他自动化系统;或</p>
                        <p>（v） 我们确定您与其他玩家串通或试图串通，以便欺骗本网站或其客户;或</p>
                        <p>（vi） 我们确定您违反了这些条款和条件的任何条款;</p>
                        <p>（vii） 我们确定您的行为方式不利于我们的行为商;或</p>
                        <p>（viii） 我们确定您使用本网站的方式给您不公平优势，例如，基于通过个人参与或参与特定体育领域获得的对某项运动的洞察力或专业知识的投注;或</p>
                        <p>（ix） 我们怀疑您在多个用户帐户上注册、管理或指导您的投注活动，试图隐藏您的投注活动、绕过我们设定的交易限额或违反任何促销条款和条件;或</p>
                        <p>（x） 我们怀疑您的帐户被用于第三方的利益;或</p>
                        <p>（xi） 我们获得的证据证明，通过注册新帐户，您违反了网站的直接命令，即不要继续您在我们网站上的投注活动。本网站有权没收用户先前发现违反或无视上述条款和条件的先前警告而注册的帐户的任何存款。</p>

                        <p><b>18.2 </b>您承认，本网站是您是否拥有的最终决策者违反规则、条款或条件，导致暂停或永久禁止</p>
                        <p>从参与我们的网站。</p>

                        <p><b>18.3 </b>无论我们是否暂停和/或终止帐户，也无论有任何规定本条款和条件中的其他规定，我们可能会决定取消和取消任何在以下情况下，我们绝对酌情决定未完成的投注：</p>
                        <p>（i） 存在技术故障，或 </p>
                        <p>（ii） 您或与您下注的其他客户违反了任何这些条款和条件。</p>

                        <h3>19. 不可抗力</h3>
                        <p><b>19.1 </b>本网站未能或延迟履行其服务义务如果此类失败或延迟是本网站认为是由不可抗力引起的，包括但不限于洪水、火灾、地震或任何其他自然因素、战争行为、流行病或流行病，骚乱或恐怖袭击、公用事业电气故障、停工和罢工、延误或中断由人为或自然因素引起的互联网和电信网络，或任何超出本网站合理控制范围的其他此类事件。本网站不承担任何责任因任何此类不可抗力事件引起的任何后果。</p>

                        <h3>20. 违约、处罚和终止</h3>
                        <p><b>20.1 </b>如果您违反本条款和条件的任何规定或我们有合理的理由如果您怀疑您违反了这些规定，我们保留不开放、暂停或关闭您的会员账户，或扣留您的奖金并将这些资金用于任何您应得的损害赔偿。</p>

                        <h3>21. 适用法律和管辖权</h3>
                        <p><b>21.1 </b>这些条款和条件应受库拉索岛法律管辖。</p>

                        <p><b>21.2 </b>您承认，除非另有说明，否则游戏由以下机构组织和监管：库拉索岛领土。您与本公司之间的任何合同关系应为被视为已由双方在库拉索岛签订并履行，在登记处公司地址。</p>

                        <p><b>21.3 </b>双方同意，因以下原因引起或与之相关的任何争议、争议或索赔应提交这些条款和条件，或其违反、终止或无效库拉索岛法院的专属管辖权。</p>

                        <h3>22. 投诉</h3>
                        <p><b>22.1 </b>如您对我们的服务有任何不满或投诉，您可通过网站上提供的聊天功能或电子邮件地址（ support{'@'}Seabet.io）与我们的客户服务团队取得联系。我们将竭尽全力在最短的时间内解决您所面临的问题。</p>
                      </div>`
  }
}
