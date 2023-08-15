const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Home',
  search: 'Search',
  promo: 'Promotion',
  support: 'Support',
  onlineSupport: 'Online Support',
  accountMenu: 'Account',
  account: 'Account',
  confirm: 'Confirm',
  confirmd: 'Confirmed',
  all: 'All',
  save: 'Save',
  cancel: 'Cancel',
  close: 'Close',
  start: 'Start',
  loading: 'loading',
  end: 'end',
  to: 'to',
  or: 'OR',
  and: 'and',
  at: 'At',
  goto: 'Go to',
  refreshSuccess: 'Refresh successfully',
  loadingFail: 'Loading failed',
  noMore: 'No more...',
  login: 'Sign In',
  otherMethod: 'Other methods',
  reg: 'Register',
  userName: 'Username',
  email: 'Email',
  sendEmail: 'Send',
  sended: 'Sent',
  emailCaptcha: 'Email verification code',
  password: 'Password',
  forgetPassword: 'Forgot Password',
  resetPwd: 'Reset Password',
  noUser: `Don't have an account?`,
  createUser: 'Create account',
  googleCode: 'Google authenticator code',
  inputGoole: 'Enter Google authenticator code',
  partner: 'Official Partner of',
  date: 'date',
  day: 'Day',
  month: 'Month',
  year: 'Year',
  birthday: 'Date of birth',
  telephone: 'Phone',
  country: 'Country',
  hasAccount: 'Have an account? ',
  logout: 'LOG OUT',
  address: 'Address',
  zipCode: 'Zip code',
  loginPage: {
    useGoogle: 'Use Google Authenticator',
    userNameOrEmail: 'Username or Email'
  },
  regPage: {
    holderUserName: 'Name your account',
    holderEmail: `e.g. you{'@'}example.com`,
    holderTelephone: 'Telephone (+66 xxxxxxxxxxx)',
    isAdult: 'I confirm that I am over 18 years old and accept',
    termCondition: 'Terms and conditions',
    privacyPolicy: 'Privacy Policy',
    isAgree: 'I agree to receive marketing information about Sportsbet.io promotions and events. '
  },
  thirdRegPage: {
    beFinished: 'Almost there! ',
    fixInfo: 'Please fill out the rest of the fields for your account'
  },
  myprfile: 'My Profile',
  clubLevel: 'Clubhouse tier',
  userLevels: {
    '101': 'Steel',
    '102': 'Bronze',
    '103': 'Silver',
    '104': 'Gold',
    '105': 'Platinum',
    '106': 'Titanium',
    '107': 'Diamond'
  },
  homePage: {
    currentMultiplier: 'Current multiple',
    nextReward: 'Next tier reward',
    showProgress: 'Show my progress'
  },
  userAccount: 'Account',
  wallet: 'Wallet',
  myBets: 'History',
  rewards: 'Rewards',
  notifications: 'Notifications',
  // 搜索
  noSearchResult: 'Sorry, there are no results matching "{ keyword }". Please try another search term. ',
  searchResultNum: 'Find { searchResult } results',
  // 优惠详情
  promoDetail: 'Promotion Details',
  // 俱乐部
  club: 'Club',
  tiers: 'tiers',
  clubTips: "Your rewards will be reset every month, please claim your rewards before the end of the month, don't miss it.",
  currentPoints: 'Current points',
  currentPointsMultiplier: 'Current Points Multiplier',
  receiveReward: 'Receive reward',
  alreadyReceived: 'Already received',
  mergedReards: 'Accumulated to the next level of merged receipt',
  noReward: 'No rewards yet, advance to the next level and unlock your first reward',
  // vip俱乐部
  vipClub: 'VIP-CLUB',
  // 积分商城
  mallStore: 'Marketplace',
  // 账户设置
  generalInformation: 'General Information',
  changePassword: 'Change Password',
  googleAuthenticator: 'Google Authenticator',
  privacySetting: 'Privacy Settings',
  currentPwd: 'Current Password',
  newPwd: 'New Password',
  confirmPwd: 'Confirm Password',
  changePwdLimit: 'To ensure the safety of your funds, after you change your password, you will not be able to withdraw money within 48 hours. ',
  disabledGoogle: 'Google Authenticator is disabled',
  activeGoogle: 'To activate, scan the QR code or enter the code manually ',
  whatGoogleCode: 'What is Google Verification Code? ',
  typeCode: 'Type code',
  submitCode: 'Submit code',
  keyValue: 'Key value',
  // 消息通知
  notice: 'Notice',
  mail: 'Mail',
  makeAllRead: 'Set all as read',
  noMessage: 'You don not have any notification messages',
  // 奖励
  claimReward: 'Claim reward',
  claimNewReward: 'Claim a new reward',
  rewardCode: 'Reward Code',
  claim: 'Receive',
  recentTransaction: 'Recent transactions',
  // 搜索
  searchHolder: 'Game, manufacturer',
  searchMore: 'Search More',
  searchRecommend: 'Recommended for you',
  enter: 'Enter',
  // fund
  fundAccount: 'Fund account',
  activeBalance: 'Active Balance',
  balance: 'Balance',
  deposit: 'Deposit',
  buyCrypto: 'Buy Crypto',
  withdraw: 'Withdraw',
  youDepositAddress: 'YOUR DEPOSIT ADDRESS',
  minDepositAmount: 'Minimum deposit amount',
  quickTips: 'Quick Tips',
  quickTipCont: 'Please always check your deposit wallet address on our site before making your transactions.',
  promoCode: 'Promo code',
  currentBalance: 'Current balance',
  myRewards: 'My Rewards',
  transactionHistory: 'History',
  supportSettings: 'Support and Settings',
  walletSettings: 'Wallet settings',
  faq: 'Help',
  liveSupport: 'Online customer service',
  chooseCrypto: 'Choose your preferred currency',
  cryptoCurrency: 'Crypto',
  bank: 'FIAT',
  chooseDepositChain: 'Select deposit network',
  confirmDepositAddress: 'Please always check your deposit wallet address on our site before making your transactions.',
  recommendExchange: 'Buy cryptocurrencies from our recommended exchanges',
  // 交易记录
  deposits: 'Deposit',
  withdrawals: 'Withdrawals',
  bets: 'Bets',
  wins: 'Wins',
  currencyFilter: 'Currency',
  dateFilter: 'FILTER BY DATE',
  winLose: 'win or lose',
  nodata: 'No record yet',
  // 钱包设置
  currency: 'Currency',
  btcUnit: 'Bitcoin Unit',
  // 提款
  inputAmount: 'Enter the amount',
  walletDetails: 'Wallet details',
  walletDetailsBig: 'WALLET DETAILS',
  waitingResults: 'waiting for review',
  withdrawUsdt: 'Withdraw USDT',
  amount: 'amount',
  minWithdrawAmount: 'Minimum withdrawal amount',
  next: 'Next',
  youWithdrawAddress: 'YOUR WITHDRAW ADDRESS',
  payto: 'PAY TO',
  checkWithdrawAddress: ' Please always check your withdrawal wallet address before making your transactions ',
  previewWithdraw: 'Preview withdrawal',
  confirmWithdrawInfo: 'Please confirm that all information is correct',
  network: 'Network',
  withdrawing: 'withdrawal in progress',
  summary: 'SUMMARY',
  transactionType: 'transaction type',
  finalBalance: 'final balance',
  backToFund: 'Back to Fund',
  chooseWithdrawChain: 'Choose withdrawal network',
  confirmWithdrawAddress: 'Please confirm your withdrawal address before executing the transaction',
  walletAddress: 'Wallet address',
  walletAddressBig: 'WALLET ADDRESS',
  tradeStatus: { 1: 'Processing', 2: 'Confirmed', 3: 'Deleted' },

  // 首页
  readMore: 'Details',
  sports: 'Sports',
  liveCasino: 'Live Casino',
  slots: 'Casino',
  sbSport: 'Saba Sports',
  fbSport: 'FB Sports',
  downloadApp: 'Download Client',
  androidApple: 'Support Android and IOS',
  globalPaymentSolutions: 'Global Payment Solutions',
  otherPayment: 'Other mainstream payment methods',
  sportsBet: 'Sports',
  liveCasinoBet: 'Live Casino',
  slotBet: 'Slots',
  more: 'more',
  loadMore: 'load more',
  providers: 'providers',
  allProviders: 'All Game Providers',
  sortBy: 'Sort by',
  polular: 'Polular',
  promotions: 'Promotions',
  aboutUs: 'about us',
  selectLanguage: 'Select Language',
  ruleTerms: 'rule & terms',
  responsibleGambling: 'responsible Gambling',
  amlPolicy: 'AML Policy',
  selfExclusion: 'self-Exclusion',
  privacyPolicy: 'Privacy Policy',
  fairness: 'Fairness',
  game: 'Game',
  followUs: 'follow us',
  language: 'Language',
  helpCenter: 'Help Center',
  acceptCrypto: 'Cryptocurrencies Accepted',
  licencesSecurity: 'Licences & Security',
  gameBig: 'GAME',
  userBig: 'USER',
  payoutBig: 'PAYOUT',
  betUser: 'Bettor',
  multiplier: 'Multiplier',
  paymentAmount: 'Payment amount',
  invisibility: 'Hidden',
  currencyLang: {
    usdt: 'USDT',
    btc: 'Bitcoin',
    eth: 'Ethereum',
    busd: 'Binance USD',
    trx: 'TRON',
    xrp: 'Ripple',
    bnb: 'Binance Coin',
    ltc: 'Litecoin',
    ada: 'Cardano',
    doge: 'Dogecoin',
    ton: 'Open network',
    usd: 'US dollar',
    cny: 'RMB'
  },
  // 积分商城
  points: 'Points',
  pointsNum: 'Points Num',
  earnPoints: 'Earn Points',
  pointType: 'Point Type',
  spentPoints: 'Spent Points',
  afterPoints: 'After Points',
  createTime: 'Create Time',
  pointsType: {
    '1': 'Betting',
    '2': 'Exchange Product',
    '3': 'Promotion',
    '4': 'Administrator Charge',
    '5': 'Administrator Deduction',
    '6': 'Cancel Exchange'
  },

  // 游戏提供商
  provider: {
    all: 'ALL',
    sabaSports: 'Saba Sports',
    btiports: 'BTI Sports',
    fbSports: 'FB Sports',
    evolution: 'Evolution',
    bombayLive: 'Bombay Live',
    ezugi: 'Ezugi',
    asiaGaming: 'Asia Gaming',
    pragmaticPlay: 'Pragmatic Play',
    playingo: "Play'n Go",
    netEnt: 'NetEnt',
    playTech: 'PlayTech',
    microgaming: 'Microgaming',
    sexy: 'Sexy Baccarat'
  },

  // 数据验证提示
  tips: {
    // 用戶-登录注册
    inputAccount: 'Please enter your username',
    isAccount: 'The user name must be a string of 5-12 characters beginning with a letter',
    inputPassword: 'Please enter a password',
    isPwd: 'Password must be 6-16 digits or letters',
    pwdNotMatch: 'The two passwords do not match',
    googleCode: 'Google authenticator code must be 6 digits',
    loginFail: 'Login failed',
    inputEmail: 'Please enter your email',
    isEmail: 'Email format error',
    inputEmailcapcha: 'Please enter the email verification code',
    inputDay: 'Please select a date of birth',
    inputMonth: 'Please select the month of birth',
    inputYear: 'Please select the year of birth',
    inputCountryCode: 'Please enter the country code',
    inputphoneNumber: 'Please enter your phone number',
    inputAddress: 'Please enter the address',
    inputZipCode: 'Please enter the zip code',
    userNameExist: 'Username already exists',
    emailExist: 'Mailbox already exists',
    emailNotExist: 'Email does not exist',
    isAudit: 'Please confirm that you are an adult and accept the privacy policy',
    isAgree: 'Please read and accept relevant market activity information',
    regSuccess: 'Registration successful',
    regFail: 'Registration failed',
    loginSuccess: 'Login successful',
    sendSuccess: 'send successfully',
    resetSuccess: 'The password has been reset successfully, please log in again',
    resetFail: 'Failed to reset password',
    sendFail: 'Failed to send',
    editUserInfoSuccess: 'Modified user information successfully',
    inputNewPwd: 'Please enter a new password',
    isNewPwd: 'The new password must be 6-16 digits or letters',
    inputOldPwd: 'Please enter the old password',
    isOldPwd: 'Old password must be 6-16 digits or letters',
    editPwdSuccess: 'Password changed successfully, please log in again',
    bindGoogleSuccess: 'Bind Google verification code successfully',
    logoutSuccess: 'logout successful',
    setSuccess: 'Setting succeeded',
    inputWithdrawAmount: 'Please enter the withdrawal amount',
    overMaxWithdrawAmount: 'The withdrawal amount cannot be greater than the balance',
    underMinWithdrawAmount: 'The withdrawal amount must be greater than the minimum amount',
    inputWithdrawAddress: 'Please enter the withdrawal address',
    withdrawSuccess: 'Application for withdrawal successful',
    withdrawFail: 'Application withdrawal failed',
    receivedRewardSuccess: 'received successfully',
    receivedRewardFail: 'Failed to receive',
    noLogin: 'You are not logged in',
    goLogin: 'Go to login now',
    invalidThirdUser: 'Failed to verify the third-party user',
    authFail: 'Authorization failed',
    copySuccess: 'Copy Success',
    copyFail: 'The browser does not support automatic copying, please copy manually.',
    insufficientPoints: 'Insufficient points',
    exhangeSuccess: 'exhange successfully',
    openWindow: 'The window will be opened for you to play the game soon, wish you a happy game.'
  },

  rewardsBig: 'REWARDS',
  myStats: 'MYSTATS',
  exclusiveRewards: 'exclusive Rewards',
  quickBuys: 'Quick Buys',
  earned: 'Earned',
  spent: 'Spent',
  pointsHistory: 'History',
  earnPointsAndTrack: 'Earn Lightning Points and track them here.',
  viewPointsRecord: 'View a record of all your Lightning Point earnings.',
  buyNow: 'BUY NOW',
  youWillGet: 'You will get',
  bonusValue: 'Bonus Value',
  wageringRequirement: 'Wagering Requirement',
  enableVisible: 'Enable Ghost Mode',
  hiddenYourBet: "Your bets won't appear in public bet feed and bet preview",
  startNow: 'Start Now',
  withdrawStatus: { 1: 'Processing', 2: 'Success', 3: 'Failure' },
  time: 'Time',
  betAmount: 'Bet Amout',
  support2: 'Support',
  btiSportIntro: 'With years of experience in sports platform operation, the BTi sports betting platform offers players an immersive and optimized sports betting gaming experience.',
  sabaSportIntro: 'Verified by various parties over nearly two decades, the Saba Sports platform offers a wide range of sports events, multiple innovative betting types, and industry-leading odds.',
  fundRecord: 'Fund Change Record',
  categoryFilter: 'FILTER BY CATEGORY',
  fundCategory: {
    1: 'Deposit',
    2: 'Withdraw',
    3: 'Bet',
    4: 'Settle',
    5: 'Administrator Charge',
    6: 'Administrator Deduction',
    7: 'Promotional Gift',
    8: 'Refund',
    9: 'VIPRewards',
    10: 'Exchange Goods',
    17: 'Withdraw Failure'
  },
  beforeBalance: 'Before change',
  afterBalance: 'After change',
  tradeDetails: 'Trade Details',
  tradeNo: 'Order No',
  orderType: 'Order Type',
  orderTypes: { 1: 'Deposit', 2: 'Withdraw', 3: 'Bet', 4: 'Win' },
  // 条款协议等内容
  html: {
    // html标题
    vipTitle: 'VIP Club',
    rulesTitle: 'Rules & Terms ',
    responsibleTitle: 'Responsible Gambling',
    amlTitle: 'AML Policy',
    selfExclusionTitle: 'Self Exclusion',
    privacyTitle: 'Privacy Policy',
    fairnessTitle: 'Fairness',

    // html内容
    vipContent: `
      <div class="vip-clubhouse-box">
        <div class="vc-rows">
          <div class="vr-title">1、VIP Club Introduction</div>
          <div class="vr-conts">
            <p>Welcome to the ${site_name} VIP Club!</p>
            <p>At ${site_name}, we are committed to enhancing the quality of gaming and providing the best gaming experience. We are excited to introduce our brand new VIP Club, designed to reward our loyal members who spend time playing games on our website.</p>
            <p>Simply place bets on any game or sports event provided by ${site_name} to unlock exclusive rewards as you climb through the ranks.</p>
          </div>
        </div>
        <div class="vc-rows">
          <div class="vr-title">2、Personalized Service</div>
          <div class="vr-conts">
            <p>Professional Customer Manager Team Ensures All Your Needs and Meets Industry's Highest Standards. VIP members can enjoy exclusive bonuses, invitations to renowned events, and a variety of customized rewards to provide you with fast, enjoyable, and efficient gaming experiences.</p>
            <dl>
              <dt>VIP Exclusive Manager：</dt>
              <dd>Devoted to addressing your needs</dd>
              <dd>Tailored private gaming experiences just for you</dd>
            </dl>
            <dl>
              <dt>High Rewards：</dt>
              <dd>Exclusive offers designed for you</dd>
              <dd>No-wager bonuses</dd>
              <dd>Rapid accumulation of points</dd>
            </dl>
            <dl>
              <dt>Industry's Highest Betting Limits：</dt>
              <dd>Unlimited daily deposits and withdrawals with cryptocurrencies</dd>
            </dl>
            <dl>
              <dt>VIP Exclusive Promotions：</dt>
              <dd>Distinguished from regular member promotions</dd>
              <dd>Preserve the best gaming experience for you</dd>
              <dd>Exclusive to VIP users</dd>
              <dd>Personalized offers</dd>
              <dd>Customized entertainment services exclusively for you</dd>
            </dl>
            <dl>
              <dt>24/7 Priority Service：</dt>
              <dd>No need to queue or wait</dd>
              <dd>Your needs are our top priority</dd>
              <dd>Multiple social media contact methods, dedicated customer managers providing online services.</dd>
            </dl>
          </div>
        </div>
        <div class="vc-rows">
          <div class="vr-title">3、Level Structure</div>
          <div class="vr-conts">
            <p>Six VIP levels that comprehensively cover your entire gaming journey:</p>
            <dl>
              <dd>Bronze: Bronze 1</dd>
              <dd>Silver: Silver 1 - Silver 5</dd>
              <dd>Gold: Gold 1 - Gold 8</dd>
              <dd>Platinum: Platinum 1 - Platinum 10</dd>
              <dd>Titanium: Titanium 1 - Titanium 10</dd>
              <dd>Diamond: Diamond 1 - Diamond 6</dd>
            </dl>
          </div>
        </div>
        <div class="vc-rows">
          <div class="vr-title">4、Benefits for VIP Club Members</div>
          <div class="vr-conts">
            <dl>
              <dd>Boost Bonuses: You can earn bonuses based on your weekly and monthly gaming volume. The more you play, the more bonuses you receive.</dd>
              <dd>Recent Game Performance Bonus: Having a streak of bad luck? ${site_name} will provide additional funds based on your losses every time you level up.</dd>
              <dd>Level Up Bonuses: Receive bonuses upon reaching the next level. The higher the level you achieve, the greater the bonus.</dd>
              <dd>Customized Exclusive Offers: Not interested in regular promotions? No problem. Once you reach the corresponding VIP level, we will specially tailor offers based on your interests, exclusively for you</dd>
              <dd>Personalized Entertainment Experience: Whether it's major sports events, concerts, music shows, or a luxurious trip, as a senior VIP member, all your personal expenses will be covered by the trusted ${site_name}, and we will arrange your itinerary.</dd>
              <dd>Exclusive VIP Service: You will be assigned a dedicated VIP service representative who will support and meet your betting needs</dd>
              <dd>Faster Points Accumulation: VIP levels earn points at a faster rate compared to regular members. Higher levels earn more points, leading to a wider range of prizes for redemption.</dd>
            </dl>
          </div>
        </div>
        <div class="vc-rows">
          <div class="vr-title">5、How to Become a VIP Member</div>
          <div class="vr-conts">
            <p>How to become a VIP member of ${site_name}'s VIP Club:</p>
            <dl>
              <dd>
                Keep Betting: The key to becoming a VIP is consistently placing bets on various sports events and casino games. ${site_name} rewards your consistency. As a top cryptocurrency gambling site, regularly use your digital assets to place bets on any sports events and casino games offered by ${site_name}. You can also try betting with USDT and continue using your funds
              </dd>
              <dd>
                Participate in Regular Events: ${site_name}'s promotional activities include various events and competitions that you can participate in at any time. Regular participation in any of these events will increase your chances of receiving an invitation to the VIP Club. Moreover, you can be more active in other club features offered by ${site_name}.
              </dd>
              <dd>
                Await the Invitation: The final thing you need to do is wait for us to send you an invitation. Continue playing games and participating in high roller events. After a few rounds of casino gambling and sports betting, once you are deemed worthy of becoming a VIP Club member, you will receive an invitation immediately.
              </dd>
              <dd>
                Experience the Luxury Life as a ${site_name} VIP: Take your USDT gambling experience to a whole new level while enjoying top-notch privileges as a ${site_name} VIP Club member. As a valued player, you'll experience the best fun, fast, and fair betting when engaging in sports betting and casino games.
              </dd>
            </dl>
          </div>
        </div>
      </div>`,

    rulesContent: ``,
    responsibleContent: ``,
    privacyContent: ``,
    fairnessContent: ``
  }
}
