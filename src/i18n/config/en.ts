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
    isAgree: `I agree to receive marketing information about ${site_name} promotions and events. `
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
    inputExhangeCode: 'Please enter the redemption code',
    startGameFail: 'Failed to start the game',
    insufficientPoints: 'Insufficient points',
    exhangeSuccess: 'exhange successfully',
    openWindow: 'The window will be opened for you to play the game soon, wish you a happy game.',
    openExchange: 'About to open a new window for you to enter the exchange'
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
  blockChain: 'blockChain',
  betAndEarn: 'Bet & Earn',
  placeAndEarn: 'Place & Win',
  spinAndEarn: 'Spin & Win',
  enabledGoogle: 'Google Authenticator is enabled',
  stopGoogle: 'Google Authenticator is enabled, if you want to close this feature, please enter the code and click "Submit Code" to close',
  unlockNewReward: 'New rewards have been unlocked!',
  unlockNewRewardTip: 'Congratulations! Just unlocked a new reward. Click here to select your award type',
  dymondReward: 'Rewards will be generated automatically when you reach this level',
  siteTitle: 'Best crypto sports betting and casino site | Bitcoin Betting',
  unlockAllReward: 'Congratulations! You have unlocked all rewards.',
  newGame: 'New Game',
  oneDay: '24 hours',
  week: 'Week',
  moreGame: 'More Game',
  question: 'FAQ',
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
    vipContent: ` <div class="vip-clubhouse-box">
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
    amlContent: `<div>
                  <h3>Anti-Money Laundering, Counter-Terrorism Financing Statement</h3>
                  <h4>1. Company business model</h4>
                  <p>Seabet currently supports its users in more than 169 countries around the world. As part of its global operations, Seabet has established compliance measures commensurate with its services and products designed to prevent and detect illegal activity on its platform. These include onboarding and compliance screening for their clients and transaction-based controls.</p>
                  <h4>2. Company Policy Statement</h4>
                  <p>Seabet expressly prohibits and refuses to use Seabet Products for any form of illegal activity, including money laundering, terrorist financing or trade sanctions violations, consistent with national anti-money laundering (AML) laws, regulations and guidelines.
                      Seabet continues to monitor the parameters set by the guidelines set by the Financial Action Task Force (FATF) and certain gaming trade organizations and the Curacao Gambling Control Commission and will take such actions as it deems appropriate to reflect changes in the law.
                      Seabet intends to follow global best practices and prevent Seabet products from being used to facilitate such activities. These best practices include:</p>
                  <ul>
                      <li>Adopt written policies and reasonably designed procedures and controls to prevent money laundering, terrorist financing and trade sanctions violations;</li>
                      <li>Where appropriate, appoint a compliance officer to oversee the implementation of policies, procedures and controls;</li>
                      <li>Provide relevant education and training to relevant personnel;</li>
                      <li>Independent review, monitoring and maintenance of policies, procedures and controls.</li>
                  </ul>
                  <h3>3. Definitions</h3>
                  <p>The following defining terms are widely used in the industry:</p>
                  <p>Money laundering: The process of making illegally obtained proceeds appear legitimate. This process is typically divided into three steps: storage, tiering, and consolidation.</p>
                  <p>Deposit: The process of depositing illegal proceeds into a traditional financial institution, through deposits or other means.</p>
                  <p>Stratification: The process of separating the proceeds of criminal activity from their source by using a complex level of financial transactions, such as converting cash into traveler's checks, money orders, wire transfers, letters of credit, stocks, bonds, or the purchase of assets.</p>
                  <p>Integration: The use of seemingly legitimate transactions to mask illicit gains so that laundered funds can be redistributed to criminals; Integrate the current money laundering funds back to normal use.</p>
                  <p>Suspicious activity: Activity carried out by a user or non-user using the institution where there are indications that the person making the transaction may be for fraudulent or illegal purposes.</p>
                  <p>Sanctions: Sanctions are activities undertaken by the international community to prohibit or limit the activities targeted by sanctions. For example, they are used to:</p>
                  <ul>
                      <li>Encouraging the target state or regime to change its behavior;</li>
                      <li>Pressure the target country to comply with the set targets;</li>
                      <li>As a tool for law enforcement when international peace and security are threatened and diplomatic efforts fail;</li>
                      <li>Preventing and combating the financing of terrorists or terrorist acts.</li>
                  </ul>

                  <h3>4. Governance and oversight</h3>
                  <p>Seabet has appointed a Chief Compliance Officer (CCO) to coordinate the implementation of AML's policies and policy programs. The responsibilities of the Chief Compliance Officer also include developing AML plans, working with other stakeholders to revise AML policies, assessing new regulatory requirements and investigating possible suspicious or unusual activity. Seabet also regularly provides AML training to all employees.</p>

                  <h3>5. Education and training</h3>
                  <p>Seabet, with the assistance of its legal counsel and under the supervision of its CCO, may provide regular AML, CFT and trade sanctions compliance training to its employees as required.</p>

                  <h3>6. Reports</h3>
                  <p>Seabet is obliged to report any unusual or suspicious transactions in accordance with national decrees. Customers identified on the sanctions list related to money laundering or terrorist financing or other criminal activities will be reported to the regulator as suspicious activity.</p>
              </div>
              `,
    privacyContent: `<div>
                      <h2>Privacy Policy </h2>
                      <p>Seabet.io respects and protects the privacy of all users of our Services. This Privacy Policy ("Policy") details how we collect, store, use and disclose your personal information.</p>
                      <h3>1. Scope and Application </h3>
                      <p>This Policy applies to your access to and use of Seabet.io (the "Website") and all websites and applications under the Seabet brand, including all of our mobile applications and tablet applications. In addition, this Policy also applies where we interact with you in other ways.</p>
                      <h3>2. User's Consent and Modification</h3>
                      <p>By using Seabet's website, you agree to be bound by this Policy. We reserve the right, in our sole discretion, to modify or change this Policy at any time, and we will post such changes on the Site, and such changes will be effective immediately upon posting. Your continued use of the Site following such changes constitutes your acceptance of such changes. This Policy does not apply to other websites linked to this website.</p>
                      <h3>3. Personal Information Collected</h3>
                      <ul>
                        <li>We may collect and process the following types of personal information:</li>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>User-submitted preference information</li>
                        <li>Date of birth</li>
                        <li>Nationality</li>
                        <li>Physical address</li>
                        <li>Identification number government</li>
                        <li>Government-issued ID</li>
                        <li>Location data</li>
                        <li>Device information</li>
                        <li>IP address</li>
                      </ul>
                      <p>This information is primarily derived from the information you provide when you register for an account or communicate with us.</p>
                      <h3>4. Purpose of Collection</h3>
                      <p>We collect your personal information to:</p>
                      <ul>
                        <li>Conduct customer identity verification (KYC)</li>
                        <li>To enable you to subscribe to our marketing communications</li>
                        <li>To process your membership application</li>
                        <li>To provide and improve our services</li>
                        <li>Identify and verify your identity</li>
                        <li>Communicate with you</li>
                        <li>conducting market research and promotional activities</li>
                        <li>To respond to your questions and requests</li>
                        <li>To comply with our contractual and legal obligations</li>
                      </ul>

                      <h3>5. Use and Disclosure of Personal Information</h3>
                      <p>We may use your personal information for marketing activities and may tell you about products or services that we think may be of interest to you by email, text message or telephone. If you no longer wish to receive marketing or promotional information from us, you may unsubscribe at any time by contacting us by email.</p>
                      <h3>6. Security of Personal Information</h3>
                      <p>The User shall understand that the transmission of Internet data is not absolutely secure, Seabet.io cannot guarantee the absolute security of the information uploaded by the User to the Platform, and the User shall bear the risk. However, after receiving the transmission of the user's information, Seabet.io will take appropriate measures to prevent the misuse, loss, and unauthorized access, modification and disclosure of the user's personal information. This includes the use of password protection of systems and databases, as well as the use of Secure Sockets Layer (SSL) technology. By using our Services or providing personal information, users agree that we may communicate with you electronically regarding security, privacy, and administrative issues related to the use of the Services. Seabet.io employees, agents and contractors are required to keep members' personal information and transactions confidential. Information posted by users on public platforms or social media environments (e.g., Facebook, Twitter) will be considered public information, Seabet.io the security of such information cannot be guaranteed.</p>
                      <p>We emphasize that our services are not directed to children and we do not accept accounts or personal information. However, parents or guardians have an obligation to monitor their children's internet activities. Make sure to log out of your account as soon as you're done using the website, especially if you're sharing your device. The User is responsible for the security and access rights of the devices used to access the Website. Ultimately, users maintain the confidentiality of usernames, passwords and account information and are vigilant when using the Internet and our website.</p>
                      <h3>7. Access to Personal Information</h3>
                      <p>Users can access the personal information collected by Seabet.io by clicking on the "Settings" link on the website or by sending an email to the support@Seabet.io. We will respond to the user's access request within a reasonable period of time. If we are unable to comply with your request, we will inform you in writing of the reasons for the denial of access and the complaint mechanism.</p>
                      <h3>8. Removal of personal data</h3>
                      <p>If it is no longer possible to lawfully process or store the user's personal data, the user has the right to request its deletion. However, this right is not absolute and if Seabet.io are subject to legal obligations, it will not be able to meet the user's requirements. Please make a request by sending an email to support@Seabet.io.</p>
                      <h3>9. Contact</h3>
                      <p>If you have any questions, requests or complaints about our processing of your personal information, please contact us via email support@Seabet.io or the website customer support chat function.</p>



                      <h3>10. International Data Transfers</h3>
                      <p>We may transfer, process and store information worldwide, including but not limited to other countries whose data protection laws may differ from those of your location. We will protect your information as much as possible and as required by applicable law.</p>
                      <h3>11. Root of the legal basis for processing</h3>
                      <p>According to the Global General Data Protection Regulation, Seabet.io processing of your personal information has the following lawful bases: performance of a contract, legitimate interests, user consent and compliance with a legal obligation.</p>
                      <h3>12. Privacy Policy Updates</h3>
                      <p>Seabet.io may periodically review, change, and update this Privacy Policy to reflect our practices and responsibilities. We will post the latest Privacy Policy on the Website Seabet.io. Users should periodically review this Privacy Policy to familiarize themselves with its terms.</p>
                    </div>`,
    fairnessContent: `<div>
                        <h2>Fairness</h2>
                        <p>Before you can place bets in fiat currencies, including cryptocurrency, you must register for an account on Seabet.io website. Your use of the Seabet.io (the "Website") and the opening of an account with the Seabet.io shall be deemed to have been read, understood and bound by these Terms and Conditions.</p>

                        <h3>Definition</h3>
                        <p>Seabet.io – referred to as "we" or "company".</p>
                        <p>Player – referred to as "you" or "player" or "member" or "customer" or "account holder".</p>
                        <p>Games – Refers to casinos and other RNG (Random Number Generator) games, which may be available on the Website from time to time.</p>
                        <p>Website – means a website used by Seabet.io Player through desktop, mobile, or other platforms.</p>
                        <p>Member Account - A user account required to access and use the Site.</p>
                        <p>Customer Support - Assistance and support services provided by the Company to its customers.</p>
                        <p>Event - means a sports or betting event or a match or game within a sport in which a customer can place a bet on the outcome.</p>
                        <p>Cryptocurrencies - should be further read as "Bitcoin, altcoins, and/or (if applicable) other supported cryptocurrencies." </p>
                        <p>Fiat Currency - An unsupported monetary physical commodity issued by a government or central bank authority, such as gold or silver (e.g. US dollar, Brazilian real, Japanese yen, people).</p>
                        <p>Restricted Jurisdictions - Country-specific licenses that are subject to restrictions on our games, therefore, users located in or from those regions are prohibited from registering and playing on the Site. The list of restricted jurisdictions may be updated from time to time and can be accessed via the link below.</p>

                        <h3>1. General</h3>
                        <p><b>1.1 </b>These terms and conditions ("Terms and Conditions") apply to betting on sports and using casino-style games accessible through the Website. </p>

                        <p><b>1.2 </b> These Terms and Conditions are effective immediately upon completion of the registration process, including checking the box to accept these Terms and Conditions and succeeding</p>
                        <p>Create an account. By using any part of the Site after creating an account, you agree that these Terms and Conditions apply to the use of the Site.</p>

                        <p><b>1.3 </b>Creating an Account. If you do not agree to any provision of these Terms and Conditions, you must not create an account or continue to use the Site. </p>

                        <p><b>1.4 </b>We reserve the right to amend these Terms and Conditions at any time without notice. If we make such changes, we may take appropriate steps to remind you of those changes, such as by posting a notice by email or on the Website and the revised Terms and Conditions, but you are solely responsible for checking for any amendments, updates and/or modifications. If we determine that any changes to these Terms are deemed to have a "material" impact on your rights or obligations under these Terms and Conditions, we will use reasonable efforts to notify you by email or by posting on the Website. Your continued use of the Company's Services and Website following any such amendments to the Terms and Conditions will be deemed to be your acceptance of and agreement to be bound by such amendments, updates and/or modifications. </p>

                        <p><b>1.5 </b>These Terms and Conditions may be published in multiple languages for informational purposes and convenience of player access. In the event of any discrepancy between your relationship and us and translation, the English version of these Terms and Conditions shall prevail for any kind. </p>

                        <h3>2. Binding Declarations</h3>
                        <p><b>2.1 </b>By agreeing to be bound by these Terms and Conditions, you also agree to be bound by the Website Rules and Privacy Policy, which are hereby incorporated by reference, together with the Conditions. In the event of any inconsistency, these Terms and Conditions shall prevail. You hereby represent and warrant that:</p>

                        <p><b>2.1.1 </b>You are at least 18 years of age; </p>

                        <p><b>2.1.2 </b>You are fully capable of entering into legally binding agreements with us and you are not subject to any form of limited legal capacity; </p>

                        <p><b>2.1.3 </b>You participate in the Game in a strictly personal and non-professional capacity; and participation solely for entertainment and entertainment purposes; </p>

                        <p><b>2.1.4 </b>You represent yourself and not on behalf of any other person; </p>

                        <p><b>2.1.5 </b>All information provided to us by you during the term of this Agreement is true, complete and correct, and you shall immediately notify us of any changes to such information; </p>

                        <p><b>2.1.6 </b>You are solely responsible for reporting and accounting for any taxes, fees, charges or taxes applicable to you under any local or relevant laws of your place of residence for any winnings you receive from us; </p>

                        <p><b>2.1.7 </b>You understand that by using our Services, you will bear the risk of losing the funds deposited into your Member Account and accept that you are solely responsible for any such losses; </p>

                        <p><b>2.1.8 </b>You will not use our Services in any jurisdiction located on our list where our Services are restricted. </p>

                        <p><b>2.1.9 </b>Your jurisdiction allows you to use online sports betting and casino services; </p>

                        <p><b>2.1.10 </b>In relation to depositing and withdrawing funds to your Member Account, you may only use cryptocurrencies and/or any valid and legal fiat currency that belongs to you; </p>

                        <p><b>2.1.11 </b>You accept and acknowledge that the value of Cryptocurrencies may vary substantially depending on the market value. </p>

                        <p><b>2.1.12 </b>Computer software, computer graphics, websites and user interfaces that we provide to you are owned by and protected by the Company or its affiliates under copyright laws. You may only use the Software for your own personal entertainment use: in accordance with all rules, terms and conditions established by us and in accordance with all applicable laws, rules and regulations under the Curaçao Gaming License; </p>

                        <p><b>2.1.13 </b>You understand that cryptocurrencies are not considered legal tender or currency and therefore the Website they are considered virtual funds with no intrinsic value. </p>

                        <p><b>2.1.14 </b> You confirm that you are not an officer, director, employee, consultant or agent of the Company or work for any company in connection with the Company or for a relative or spouse of any of the foregoing; </p>

                        <p><b>2.1.15 </b>You have not been diagnosed or classified as a compulsive or problem gambler. We are not responsible for gambling if such problems arise while using our services, but will endeavour to inform you of the relevant assistance available. We reserve the right to implement a cooling-off period if we believe such actions would be beneficial. </p>

                        <p><b>2.1.15 </b> If you are a Politically Exposed Person or a member of a family of a Politically Exposed Person, you accept and acknowledge that we may need to review or suspend your account without prior notice in order for us to fulfil any due diligence obligations we may be into. You acknowledge that any decision regarding the status of your account is made solely at our sole discretion, which may include permanently closing your account; </p>

                        <p><b>2.1.17 </b>you have only one account with us and agree not to open any account with us; </p>

                        <p><b>2.1.18 </b>You accept and acknowledge that we reserve the right to detect and prevent the use of prohibited technologies, including but not limited to fraud easy detection, automated registration and registration, gameplay and screen capture technologies. These steps may include, but are not limited to, checking player deviceability, detecting geolocation and IP masking, transactions, and blockchain analytics; </p>

                        <p><b>2.1.19 </b>you accept that we terminate and/or change the use of the Website and refuse and/or restrict bets; </p>

                        <h3>3. Register and open your member account</h3>
                        <p><b>3.1 </b>In order to be able to place bets on our website, you must first register for an account with us in person ("Member Account"). </p>

                        <p><b>3.2 </b>You may not register and we do not accept from limited jurisdiction. It is your responsibility to determine whether your access to and use of our website complies with any rules, laws and regulations applicable to you, and you warrant that gambling is not illegal with us in the territory in which you live. By registering for an account, we and using the Site, you confirm that you are not located in or from a restricted jurisdiction and do not use any third-party software to access our website from a restricted jurisdiction. </p>

                        <p><b>3.3 </b>If you are located in or from a restricted jurisdiction and you open or use the Website: we may close your account immediately;  any winnings and rewards will be forfeited and the balance refunded (subject to a reasonable fee), as well as any returns, bonuses you have earned or accrued rewards will be forfeited by you and may be withdrawn by us; You will return to us any such funds withdrawn upon request. </p>

                        <p><b>3.4 </b>If you attempt to open more than one Member Account, we reserve the right to block, suspend or close your Member Account, as well as freeze any funds credited to your Account. </p>

                        <p><b>3.5 </b>If you become aware that you have more than one Registered Member Account, you must notify us immediately. Failure to do so may result in your member account being frozen. </p>

                        <p><b>3.6 </b> We expect you to inform us immediately of any inaccuracies relating to your account, or any calculation errors relating to any bets placed by you. We reserve the right to void any bet affected by such errors and reverse accordingly. </p>

                        <p><b>3.7 </b>If you do not use an account with a positive balance for a period of 3 months, you will be notified by us. If you do not use your balance within 1 month of our notification, we may remove the balance from your account to protect your funds. If this happens, please contact us at support@seabet.io Reopen your account and get your funds back. </p>

                        <p><b>3.8 </b>If your account balance is positive and has been inactive for more than 12 months, we reserve the right to deduct a monthly administration fee equivalent to 5% from your balance</p>

                        <p><b>3.9 </b>You must enter all required information in the registration form, including a valid email address. If you do not enter a valid email address, we will not be able to provide you with assistance in recovering any "forgotten passwords". You are solely responsible for ensuring that the information you provide is true, complete and correct. </p>

                        <p><b>3.10 </b>We reserve the right to carry out "KYC" (Know Your Customer) verification procedures and if we determine that you have provided false or misleading information. </p>

                        <p><b>3.11 </b>As part of the registration process, you are obliged to complete the login process to the Website. You'll need to choose a username that isn't offensive or contentious. You are responsible for the security of your login details and are strictly prohibited from divulging them to anyone. You will be responsible for any misuse of your Member Account by a third party as a result of your disclosure, whether intentional, accidental or actively or passively provided to any third party. </p>

                        <p><b>3.12 </b>If you change your password, you will not be able to withdraw funds for 48 hours for security reasons. </p>

                        <h3>4. Security</h3>
                        <p><b>4.1 </b>When registering through the Website, you will be required to select a password to authenticate your membership account using the Website. </p>

                        <p><b>4.2 </b>You agree to keep your password confidential and to defend against any misuse of your password. Under no circumstances will we refund any losses suffered as a result of a third party's use of your account and, in addition, you are solely responsible for any third party's use of your login details and shall hold us harmless from the consequences arising and condemnable. </p>

                        <p><b>4.3 </b>You agree that if you believe that your account information is being misused by a third party, so that we can suspend your account. We recommend that you disable any automatic password memory in your browser, use two-step verification and other such measures to limit the risk of unauthorized use of your account. </p>

                        <h3>5. Deposits</h3>
                        <p><b>5.1 </b>You may only participate in any game if you have sufficient funds in your Member Account for such participation. </p>

                        <p><b>5.2 </b>You may deposit in cryptocurrency or fiat currency. The minimum deposit amount can be found in our deposit center. All minimum deposit amounts specified are per trade. Smaller deposits will not be added up. Any deposit amount below the specified minimum deposit amount is invalid and will not be credited to your user account balance or returned to the source. If the deposit does not meet the minimum deposit listed by us, the company is not responsible for the requirements. </p>

                        <p><b>5.3 </b>To deposit funds into your Member Account, you can do so from a crypto wallet and an account under your control. Deposits can only be made with your own funds. </p>

                        <p><b>5.4 </b>The Website cannot guarantee that all currencies are natively supported in the Game. </p>

                        <p><b>5.5 </b>At the time of your first deposit and throughout the life of your account, we reserve the right to use other procedures and methods to verify your identity when processing your deposit. Verification will involve personal identification. We may also need additional documentation confirming ownership of your payment method and address, as part of the verification process. </p>

                        <p><b>5.6 </b>Some payment methods may include additional fees. In this case, the fee will be clear and visible in the cashier. </p>

                        <p><b>5.7 </b>Your bank or payment service provider may charge you additional monetary fees during the deposit process in accordance with their terms and conditions and your user conversion agreement. </p>

                        <h3>6. Withdrawals</h3>
                        <p><b>6.1 </b>All withdrawals shall be processed in accordance with our withdrawal policy below. Crypto withdrawals will be requested when the cryptocurrency wallet address you entered is valid. To withdraw money, you first need to verify your registered email address from your account profile. To withdraw any deposited funds, we need to do at least 3 blockchain confirmations of the deposit there before requesting a withdrawal. Fiat withdrawals should be credited to your personal fiat account request at the time a valid withdrawal is made. Fiat currency withdrawals can take up to 3 business days from the time they are approved by the payment service provider. </p>

                        <p><b>6.2 </b>The minimum withdrawal amount can be found in our Withdrawal Centre. All specified amounts are per transaction. </p>

                        <p><b>6.3 </b>The amount of any winnings that are incorrectly credited to your Account remains property and is automatically deducted from your Account in the event of an error detection. If the entry is incorrect, you are obliged to notify us immediately. Any bonus erroneously credited to your account and subsequently withdrawn by you (without prejudice to other remedies and actions that may be legally available) constitutes a valid legally enforceable debt owed by you to the Company in the amount of such erroneously vested winnings. In such cases, we reserve the right to initiate debt recovery proceedings if you fail to voluntarily discharge outstanding debts. </p>

                        <p><b>6.4 </b>For fiat and cryptocurrency withdrawals, the Site reserves the right to require 1x wagering equal to the amount deposited prior to the acceptance of the withdrawal request. </p>

                        <p><b>6.5 </b>We reserve the right to block/delay the processing of withdrawal requests until a request is made for a copy of a valid photo ID, proof of address and/or debit card for our satisfaction (KYC). </p>

                        <p><b>6.6 </b> The Website reserves the right to perform additional KYC verification procedures on any Content to withdraw cryptocurrencies exceeding €2500 or its equivalent, subject to our regulated gaming license, and further reserves the right to perform such verification procedures in the event of lesser withdrawals, as required by our gaming license. Account holders who wish to recover are advised to contact Customer Support for funds held in closed, locked or excluded accounts. </p>

                        <p><b>6.7 </b>All transactions shall be checked to prevent money laundering. The Site may suspend, freeze or close your member account and withhold funds (if required to do so) under the Prevention of Money Laundering Act or any other legal basis required by the Money Laundering Prevention Act or any other legal basis required by the Money Laundering Prevention Act. Withdrawals may be subject to enhanced due diligence rather than wagering, and if you fail to process a withdrawal, we reserve the right not to process a withdrawal to comply with such additional due diligence requirements. </p>

                        <p><b>6.8 </b>We reserve the right to apply the wagering requirement amount of at least 5 (five) times the deposit if we suspect that a User is using our Services as a mixer. Use of our Services for any purpose other than entertainment is strictly prohibited. </p>

                        <p><b>6.9 </b>You acknowledge that funds in your Account are immediately depleted while playing the Game and that we do not offer returns, refunds or retroactive cancellation of your Account. </p>

                        <p><b>6.10 </b>In the event of a large number of withdrawal requests, we may elect to process up to 1,000,000 USDT per week or equivalent in another currency until fully settled. </p>

                        <p><b>6.11 </b>We reserve the right to deduct any incurred transaction or other fees from any transaction fees or other charges the amount you withdraw.</p>

                        <p><b>6.12 </b>You accept that certain promotions may be subject to withdrawal restrictions and/or requirements that need to be met before funds can be credited to the promotion. Such terms shall be officially posted and made available as part of the Promotion. If you choose to withdraw before the applicable wagering requirements are met, we will deduct the full bonus amount and the amount associated with the use of the bonus before any withdrawal is approved. This website reserves the right to impose its own rights, discretion, geographic restrictions on individual reward programs. </p>

                        <p><b>6.13 </b>Please note that some payment methods may include additional fees. In this case, the fee will be clearly visible on the cashier. </p>

                        <p><b>6.14 </b>Please note that your bank or payment service provider may charge you additional fees for deposits, withdrawals in currency conversion in accordance with their terms and conditions and your User Agreement. </p>

                        <h3>7. Funds</h3>
                        <p><b>7.1 </b>The Client cannot transfer or convert funds between the Wallet and the Currency. </p>

                        <p><b>7.2 </b>You have provided the details required to make a cryptocurrency deposit on the Website on the Deposit page. </p>

                        <p><b>7.3 </b>We do not provide credit for the use of our Services. </p>

                        <p><b>7.4 </b>You will not receive any interest on the balance you hold on the Website and acknowledge that the Company is not a financial institution. </p>

                        <p><b>7.5 </b>If your Account is processed two or more times for any reason due to any type of error or withdrawal request, you agree to reimburse the Website in full for any such overdraft amount. </p>

                        <p><b>7.6 </b>If we determine, in our sole discretion, that you are using  the "double spend" method, the Website will void all bets and bonuses. Specifically, if you win, confirm your deposit blockchain and try to withdraw, all winnings will be forfeited and your account will be forfeited and permanently closed. If you try to download from any connected account. </p>


                        <h3>8. Rewards and Promotions</h3>
                        <p><b>8.1 </b> The Website reserves the right to cancel any promotion, reward or reward program (including but not limited to free monetary rewards, deposit rewards, deposit bonuses and loyalty programs) if we believe that the reward is set incorrectly or is being abused, not used within 72 hours of receipt of your account, unless otherwise stated in the separate terms and conditions of the promotion, reward or special offer and said reward has been paid, we reserve the right to refuse any withdrawal request, and deduct that amount from your account. Whether the reward is set incorrectly or abusively shall be determined by the Website in its sole discretion. </p>

                        <p><b>8.2 </b>If you use a Deposit Bonus, you will not accept a bonus that has previously withdrawn your original deposit and you have met the requirements set out in the Deposit Terms and Conditions. </p>

                        <p><b>8.3 </b> breach of any of the terms of an offer or promotion, or where there is any evidence that there is a series of bets placed by a customer or group of customers, due to deposit bonuses, enhanced payments, free bets, risk-free bets or any other promotional offer outcome guarantee regardless of the outcome, whether individually or as part of a group, the Customer Profit Website reserves the right to reclaim the bonus elements of such offers and reserves the absolute value of their absolute discretion to settle bets at correct odds, Cancel the Free Bet Bonus and Risk Free Bet or cancel any bet funded by the Deposit Bonus. In addition, this website reserves the right to levy an administration fee on the customer, up to the value of the deposit bonus, free bet bonus, risk-free bet or additional payment to cover the management fee. We further reserve the right to require any client to provide sufficient documentation to our absolute satisfaction with any reward, free bet, risk-free bet or account provided to them. </p>

                        <p><b>8.4 </b>All Website offers are intended for casual players and the Website may, at its sole discretion, limit the Customer's eligibility to participate in all or part of the Promotion. </p>

                        <p><b>8.5 </b>The Website reserves the right, at its sole discretion, to modify, cancel, withdraw or reject any Promotion. </p>

                        <p><b>8.6 </b>Rewards can only be claimed once per person/account, household, household, address, email address, IP address and computer sharing environment (university, school, public place library, workplace, etc.). The Company reserves the right to close your account and forfeit any existing funds if evidence of abuse/fraud is found. </p>

                        <p><b>8.7 </b>You acknowledge and understand that separate terms and conditions for promotions, rewards and special offers, and supplements to these terms and conditions, exist for the following areas. These terms and conditions are set out on the respective content page of the Website or, as the case may be, provided to you personally. In the event of a conflict between the provisions of such promotions, rewards and special offers, and the terms and conditions of these Terms, the provisions of such promotions, rewards and special offers will control. </p>

                        <p><b>8.8 </b>We reserve the right to insist that you wager a certain amount on your own deposit using any bonus funds we have credited to your account. The exact amount is as required as set out in the terms and conditions of the promotion. </p>

                        <p><b>8.9 </b>Your participation in certain promotions may be subject to withdrawal restrictions and/or certain requirements may be required before funds can be credited to the promotion. These Terms will be officially posted as part of the Promotion and for your reference. If you choose to withdraw if the applicable wagering requirements are not met, we will deduct the full bonus amount from your account and all associated winnings arising from the use of the bonus before we may approve any withdrawal request</p>
                        <p><b>8.10 </b>Winnings wagered using Free Bets are calculated as "Total Return Less Staked Amount (including Free Bet Amount". The value of your free bets is therefore not included in, nor can it be used as a free bet from you. </p>

                        <p><b>8.11 </b>Please note that the stake of the Free Bet will not be refunded if the bet is void. </p>

                        <p><b>8.12 </b>You must receive Rewards on your Member Account unless otherwise stated in a promotion, reward or special offer. When rewards and/or reward programs are not used within 72 hours of receipt, this website reserves the right to cancel any such rewards and/or reward programs and may deduct rewards or similar rewards for bonus or similar rewards or free rotations immediately after 72 hours. </p>

                        <p><b>8.13 </b>When exchanging customer opinions, opinions, feedback or actions when offering rewards (including but not limited to free bets or free spins), such incentives will be strictly limited to one survey/promotion per user during the relevant time period. </p>

                        <p><b>8.14 </b>Promotions may be published in multiple languages for informational and player access. The English version is the sole legal basis for your relationship with us and in the event of any discrepancy in any type of translation, the English language shall prevail over the version of these Terms and Conditions. </p>

                        <p><b>8.15 </b>Some games may have different maximum winnings. If so, such restrictions will be displayed in the in-game information page. </p>

                        <p><b>8.16 </b>Certain casino games do not include loyalty and reward betting. </p>

                        <p><b>8.17 </b>For wagering Bonuses, players must surrender the bonus and the specified number of winnings before being able to withdraw. Place a bet</p>
                        <p>The contribution of Rewards Credits depends on the game category. The breakdown is as follows: Slots – 100% Table Games – 20% Live Dealer Games – 20%</p>

                        <p><b>8.18 </b>Certain promotions may be cancelled and/or cancelled and may only be available for a specific period and under certain terms. You must ensure that the promotion of content that interests you is still available, that you are eligible, that you understand any of the terms below to apply, and that you have opted in where applicable. </p>

                        <h3>9. Close Member Account</h3>
                        <p><b>9.1 </b>If you wish to close your Member Account, you may contact Customer Support in writing at any time by email. Effective closure of the account will terminate the Terms and Conditions accordingly. If the reason behind the account closure is related to concerns about possible gambling addiction or problem gambling, you should indicate that this was done in writing at the time of the request to close the account. If it is not responsible for the disclosure of gambling problems and/or gives reasons for account closure, you may request to reactivate your account via email. Account reactivation is at our sole discretion. We reserve the right to refuse resurrection. </p>

                        <p><b>9.2 </b>The Website reserves the right to refuse or close a Member's account at its sole discretion without prior notice or obligation to state or prove the reasons. In the absence of suspected fraud, money laundering or illegal acts, we will transfer your account balance to the cryptocurrency wallet of your choice (based on your account balance) before your account is closed. Your fiat currency account balance will be deposited with your craft. If you use the deposit-only method, we will contact you and find other return methods for funds before the account was closed. </p>

                        <h3>10. Support Services</h3>
                        <p><b>10.1 </b>As part of your use of the Website, we may provide you with support service communication channels in a number of ways, which are reviewed and controlled by us. </p>

                        <p><b>10.2 </b>We retain reviews and records through any communication channels. Your use of our support services should be for assistance and for your information only. </p>

                        <p><b>10.3 </b>We reserve the right to delete or restrict the Live Support Services or to immediately terminate your Member Account and refund your Account balance if you:</p>
                        <p>(a) make any statement or share any material that is abusive, abusive, defamatory, harassing, explicit or seriously offensive, including but not limited to expressions of profanity, bigotry, racism or hatred;</p>
                        <p>(b) use one of our Support Services to advertise, promote or otherwise relate to any other online entity;</p>
                        <p>(c) is reasonably believed to attempt to unfairly exploit our Services, for example, through repeated untrue statements about the same case, transaction or characteristic;</p>
                        <p>(d) make statements about the Company or any other internet site connected to the Site untrue and/or malicious and/or cause damage to the Company;</p>
                        <p>(e) use any of our Support Services to collude, engage in illegal conduct or encourage conduct that we believe to be grossly inappropriate. Any statements of suspicious activity may be reported to the competent authorities.</p>

                        <p><b>10.4 </b>Our Support Services are used as a form of communication between you and us and should not be copied or shared with any third party without our prior consent. </p>

                        <h3>11. General Betting Rules</h3>
                        <p><b>11.1.</b> Bets may only be placed by the Registered Account holder. </p>

                        <p><b>11.2 </b>Bets placed and accepted cannot be amended, reversed or cancelled by you. You can find a list of all bets, their status and details on the website. </p>

                        <p><b>11.3 </b>Bets may only be placed via the Internet. </p>

                        <p><b>11.4 </b>You may place bets only if you have sufficient funds in your account on the Website. </p>

                        <p><b>11.5 </b>Once a bet has been closed, it will be subject to the version of the Terms and Conditions in force and made available on the Website at the time of acceptance of the bet. </p>

                        <p><b>11.6 </b>Any payout on winning bets will be credited to your account, including the odds of multiplying the stake by the bet. </p>

                        <p><b>11.7 </b>When placing a bet, you acknowledge that you have read and fully understood all of these terms and conditions regarding the bet described on the Website. </p>

                        <p><b>11.8 </b>The Website administers your account and calculates available funds, pending funds, wagering funds and bonus amounts. These amounts are considered final and will not be modified based on inquiries, external audits or investigations without any apparent error. </p>

                        <p><b>11.9 </b>You are solely responsible for placing bets. </p>

                        <p><b>11.10 </b>The prize money will be paid to the governing body of the relevant sport or competition in your account upon official confirmation of the final result. </p>

                        <p><b>11.11 </b>Unless otherwise decided by our regulators, the Website reserves the right to revoke any winnings if the result is subject to any investigation for suspected criminal activity, or any action that may affect the outcome. In the event of irregularities in the betting mode or the outcome of the Campaign, confirmed by the Governing Body, third parties or the Website, the Website reserves the right to cancel and/or refund any staked amount on the Campaign at its sole discretion. If any bets have been placed, the Site reserves the right to recalculate the results of the event and forfeit any associated winnings. </p>

                        <p><b>11.12 </b>If you are dissatisfied with any matter relating to a bet placed on the Website, please notify the Website to provide it in writing within 7 days of the transaction taking place. Notices issued thereafter within a 7-day period will be ignored. In the unlikely event that discrepancies between the results appear on your device and the results appear in the transaction log of our system, you agree that the results in the transaction log of our system verified by the website officials will be final, conclusive and binding. </p>

                        <p><b>11.13 </b> If the Website discovers that you have placed different bets from your account from time to time, all bets may be placed by the Website. This website reserves the right to take further action as it deems necessary. </p>

                        <p><b>11.14 </b>If a bet amount exceeding the stated maximum amount is erroneously accepted by the Website, the excess amount will be ignored and the bet amount will be modified and therefore the difference shall be refunded/credited to your Account. </p>

                        <p><b>11.15 </b>The information provided by this website such as real-time video streams, statistical data, live scores and live bets is a value-added information service. However, this website assumes no responsibility whatsoever, regardless of any inaccuracies or errors in the information.</p>

                        <p><b>11.16 </b>If a match does not start on or after the scheduled start date and/or is abandoned and is not completed (resumed) at the end of the next calendar date, all bets will be void unless any bet market determined to be unconditional in accordance with the relevant rules, in which case the bet may be established. </p>

                        <p><b>11.17 </b>The Website reserves the right to adopt events that apply to specific competitions or may contradict the Sports Betting Rules. Such special rules may publish published odds in conjunction with specific regions, customers, matches and/or events. </p>

                        <p><b>11.18 </b>Communication is interrupted after a bet is placed and/or you do not receive visual confirmation that a bet has been successfully placed, but the bet has been properly received on our servers and the bet shall be deemed valid and accepted. You will be told if you will win or lose once communication is re-established and the outcome is determined. If a bet is not properly received on our servers due to a communication error, it shall not be considered valid and accepted; Failed bets will be refunded to your account balance. </p>

                        <p><b>11.19 </b>You acknowledge and acknowledge that you may receive confirmation informing you of the potential financial risks following placing a bet (please contact the Website's customer support if there is any uncertainty). Upon receipt of such acknowledgement, you agree that you have been given adequate notice. </p>

                        <p><b>11.20 </b>In the event of discrepancies in match statistics provided by external sources, the data sources set out in our published General Sports Betting Rules page shall prevail. </p>
                        <p><b>11.21 </b>The maximum bet limit will depend on the amount allowed by the Website at the time you accept a bet. </p>

                        <p><b>11.23 </b>The following relates to the withdrawal function:</p>

                        <p><b>11.23.1 </b>Withdrawals are available for selected events, fixtures and markets, single and multiple bets, before and during the match. </p>

                        <p><b>11.23.2 </b>Delay in accepting withdrawal requests. If price or market changes are paused, the withdrawal request may not be successful. </p>

                        <p><b>11.23.3 </b>If a withdrawal request is approved, the corresponding bet will be displayed immediately and settled. The actual final result of the original bet will not affect the withdrawal process.</p>

                        <p><b>11.23.4 </b>In any event, upon successful withdrawal request, the total amount of the refund will be returned to your Account. </p>

                        <p><b>11.23.5 </b>The Website cannot guarantee that your bets will be available for the withdrawal option. If a withdrawal is made prior to the event, we will not cover or stop covering the Live Event, and the withdrawal will not be available once the Event starts or our Live Match will not be covered to stop. When the market is paused, no payouts will be provided. </p>

                        <p><b>11.23.6 </b>This website reserves the right to fully or partially withdraw the functional divestment of customers or customer groups. We will exercise this right in cases where there is reasonable suspicion that a customer or group of customers is abusing the withdrawal function to take advantage of pre-event price changes, or that the withdrawal feature is regularly used to close bets before the start of the event. </p>

                        <p><b>11.23.7 </b>If the withdrawal function is not available due to technical reasons, this website will not be responsible for this. In addition, any betting in such cases will maintain its original betting status and this website will also not be held responsible. 。 </p>

                        <p><b>11.23.8 </b>The Website reserves the right to accept or reject any bets/bets to cash out the sports, competitions, markets or types of bets contained in the Cash Out Feature. </p>

                        <p><b>11.24 </b>The maximum prize is quoted in USD as the base currency to secure the world, but the currency equivalent applies to actual spending. Where multiple bets involve events with different maximum bonus limits, the minimum amount will apply. Both maximum bonus limits apply to all of our customers or groups of customers who use different betting accounts to contain bets of the same selection at different prices. There should be reason to believe that several bets have been placed in this way, and the full payment of these bets will add up to only one maximum payout. </p>


                        <h3>12. Miscarried and Aborted Games</h3>
                        <p><b>12.1 </b>The Company shall not interfere with the Game for any downtime, server interruptions, lags or any technical or political disruption. Refunds may only be administered at the sole discretion of the Website. </p>

                        <p><b>12.2 </b> The Company shall not be liable for any damage or loss deemed or resulting from the Website or its content that is alleged to be caused or in connection with it; This includes no limitation of operation or transmission, delay or interruption, loss or corruption of data, communication or line failure, misuse of the Site or its content by any person or any errors or omissions in the content. </p>

                        <p><b>12.3 </b>If any casino game goes down, all bets are void. </p>

                        <h3>13. Limitation of Liability</h3>
                        <p><b>13.1 </b>Your access to the Website and participation in the Games is at your own risk. The Website and the Game are provided without warranty of any kind, either express or implied. </p>

                        <p><b>13.2 </b>Without prejudice to the generality of the foregoing, you accept that we:</p>

                        <p><b>13.2.1 </b>does not warrant that the Software, Games and Website are fit for their purpose; </p>

                        <p><b>13.2.2 </b>does not warrant that the Software, Games and Website are error-free; </p>

                        <p><b>13.2.3 </b>There is no guarantee that the Software, Games and Website will be interrupted without interruption. </p>

                        <p><b>13.3 </b>Except as expressly provided in these Terms and Conditions, we shall not be liable for any loss, cost, expense or damage, whether direct, indirect, special, consequential, incidental or otherwise, arising out of your use of the Website or your participation in the Game. </p>

                        <p><b>13.4 </b>You understand and acknowledge that any bets placed during such failure will be void if the Game or its malfunction is interoperable. Funds stated from faulty games will be deemed void, as well as any subsequent game rounds, regardless of what game is played using those funds. </p>

                        <p><b>13.5 </b>If part or all of a bet is declared void, the Website reserves the right to consider that there is a clear error, error, typographical error or technical error on the paytable, odds or software. For any unrealized winnings, we are not responsible for the outcome of invalidating the bet in this case. Refunds are only managed by Seabet Management. </p>

                        <p><b>13.6 </b>You hereby agree to fully indemnify and hold us, our directors, employees, partners and service providers harmless from and against any costs, expenses, losses, damages, claims and liabilities arising out of your use of the Website or participation in the Games. </p>

                        <p><b>13.7 </b>The Company shall not be liable for any damage or loss, whether in contract, tort, breach of warranty or otherwise, deemed or alleged to be caused or alleged to be caused by or alleged to be caused by a connection with the Website or its content; This includes, but is not limited to, delays or interruptions in operation or transmission, loss or corruption of data, communication or line failures, misuse of the Site or its content by any individual, or any errors or omissions in the content. </p>

                        <h3>14. Privacy Policy</h3>
                        <p><b>14.1 </b>You hereby acknowledge and accept that we may collect and otherwise use your personal data if we deem it necessary in order for you to access and use the Website and to allow you to participate in the Games. </p>

                        <p><b>14.2 </b>We hereby acknowledge that at the time of collecting your personal information, we are bound by the Data Protection Act as set out above. We will protect your personal information and respect your privacy in accordance with best business practices and applicable law. </p>

                        <p><b>14.3 </b>We will use your personal data to allow you to participate in the Games and to perform actions in connection with your participation in the Games. By opening your member account, you acknowledge and accept that Company employees have the right to access your personal data in order to perform their duties and provide you with the best assistance, as well as services. We may also use your personal data to notify you of changes, new services and promotions. You can opt out of receiving marketing emails at any time. </p>

                        <p><b>14.4 </b>Your personal data will not be disclosed to third parties unless such disclosure is required by law or necessary to use our services, in which case you are deemed to have consented to the disclosure of such information to third parties. Personal data may be disclosed to this website as a business partner or supplier to this website, or service providers who may be responsible for certain parts of their overall functionality or operation of this website. Website employees have access to your personal data in order to perform their duties and provide you with the best possible assistance and services. You hereby consent to such disclosure. </p>

                        <p><b>14.5 </b>We will retain all information provided as Personal Data indefinitely, unless we elect to do so after the expiry of the Application Data retention period or when we are legally required to do so. </p>

                        <p><b>14.6 </b>In order to optimise your experience and monitor and improve our website services, we collect certain information sent by your browser, known as cookies. You have the right to choose whether or not to accept our cookie collection. Please note, however, that disabling cookies may have a serious impact on your access to our website and may even block your visit entirely. </p>

                        <h3>15. Assignment</h3>
                        <p><b>15.1 </b>The assignment of your obligations under this Agreement is not permitted. You may not assign your obligations under this Agreement, and any rights or obligations under this Agreement to any other person or entity. </p>

                        <h3>16. Entire Agreement</h3>
                        <p><b>16.1 </b> These Terms and Conditions constitute the entire agreement between you and us to respect the Website and, except in the event of fraud, supersede all prior or contemporaneous electronic, oral or written communications and proposals between you and us to respect the Website. </p>

                        <h3>17. Severability</h3>
                        <p><b>17.1 </b>If any provision of these Terms and Conditions is held to be illegal or unenforceable, the provision shall be severed from these Terms and Conditions and all other provisions shall continue in full force and effect without being affected by such severance. </p>

                        <h3>18. Cancellation, Suspension and Closure</h3>
                        <p><b>18.1 </b>Without limiting our ability to rely on other remedies available to us, we may suspend and/or terminate your Account, cancel any outstanding bets and/or forfeit any or all of the funds in your Account in our absolute discretion:</p>
                        <p>(i) when we suspect that you are using our website for money laundering, illegal or other fraudulent activities; or</p>
                        <p>(ii) we suspect that you have deposited funds illegally or obtained in a way that is manifestly and materially depreciated; or</p>
                        <p>(iii) we obtain evidence that you are part of a betting syndicate, where multiple parties are involved in placing bets to circumvent the Website Rules, these Terms and Conditions or any other rules of the Website; or</p>
                        <p>(iv) we determine that you are using any device, robot, spider, software, routine or other method (or anything of the nature of the foregoing) to interfere or attempt to interfere with the proper working of our Services, any related equipment, software, Website, casino games, sports betting and betting information or any transactions offered on the Website, in particular not to use or use any artificial intelligence or other system (including machines, computers, software or any other automated system specifically designed to defraud and/or destroy the Website system); or</p>
                        <p>(v) we determine that you are colluding or attempting to collude with other players in order to deceive the Site or its customers; or</p>
                        <p>(vi) we determine that you have breached any provision of these Terms and Conditions;</p>
                        <p>(vii) we determine that you are acting in a manner that is unfavorable to our Actors; or</p>
                        <p>(viii) we determine that the way in which you use the Site gives you an unfair advantage, for example, bets based on insight or expertise gained through personal participation or participation in a particular sporting area; or</p>
                        <p>(ix) we suspect that you have registered, managed or directed your betting activity on multiple user accounts, attempted to hide your betting activity, circumvented transaction limits set by us or breached any terms and conditions of promotion; or</p>
                        <p>(x) we suspect that your account is being used for the benefit of a third party; or</p>
                        <p>(xi) evidence obtained by us that by registering for a new account, you have breached a direct order on the Site not to continue your betting activities on our Website. This website has the right to confiscate any deposit from the account registered by the user who previously found to have violated or ignored previous warnings of the above terms and conditions.</p>

                        <p><b>18.2 </b>You acknowledge that the Website is the final decision maker in your possession of a breach of a rule, term or condition resulting in suspension or permanent ban</p>
                        <p>From participation in our website.</p>

                        <p><b>18.3 </b>Regardless of whether we suspend and/or terminate the Account, and notwithstanding any other provision in these Terms and Conditions, we may decide to cancel and cancel any bet that has not been completed in our absolute discretion if:</p>
                        <p>(i) there is a technical failure, or </p>
                        <p>(ii) you or another customer placing a bet with you breaches any of these Terms and Conditions.</p>

                        <h3>19. Force Majeure</h3>
                        <p><b>19.1 </b> This Website fails or delays in performing its service obligations if such failure or delay is caused by force majeure in the opinion of this Website, including but not limited to floods, fires, earthquakes or any other natural factors, acts of war, epidemics or epidemics, riots or terrorist attacks, utility electrical failures, lockouts and strikes, delays or interruptions of Internet and telecommunications networks caused by human or natural factors, or any other such events beyond the reasonable control of this Website. This website does not assume any responsibility for any consequences arising from any such force majeure event. </p>

                        <h3>20. Default, Penalties and Termination</h3>
                        <p><b>20.1 </b>We reserve the right not to open, suspend or close your Member Account, or withhold your winnings and use the funds for any damages to which you are entitled, if you breach any provision of these Terms and Conditions or if we have reasonable grounds to suspect that you have breached such provision. </p>

                        <h3>21. Applicable Law and Jurisdiction</h3>
                        <p><b>21.1 </b>These Terms and Conditions shall be governed by the laws of Curacao. </p>

                        <p><b>21.2 </b>You acknowledge that, unless otherwise stated, the Game is organized and regulated by the territory of Curaçao. Any contractual relationship between you and the Company shall be deemed to have been entered into and performed by the parties in Curaçao, at the Registry of Companies Address. </p>

                        <p><b>21.3 </b>The parties agree that any dispute, controversy or claim arising out of or in connection with these Terms and Conditions or its breach, termination or nullity shall be subject to the exclusive jurisdiction of the courts of Curacao. </p>

                        <h3>22. Complaints</h3>
                        <p><b>22.1 </b>If you have any complaints or complaints about our services, you may contact our customer service team via the chat function available on the Website or at an email address. We will do our best to solve the problem you are facing in the shortest possible time. </p>

                      </div>`
  }
}
