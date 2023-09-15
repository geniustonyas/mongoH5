const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'หน้าหลัก',
  search: 'ค้นหา',
  promo: 'โปรโมชั่น',
  support: 'สนับสนุน',
  onlineSupport: 'สนับสนุนออนไลน์',
  accountMenu: 'บัญชีผู้ใช้',
  account: 'บัญชีผู้ใช้',
  confirm: 'ยืนยัน',
  confirmd: 'ยืนยันแล้ว',
  all: 'ทั้งหมด',
  save: 'บันทึก',
  cancel: 'ยกเลิก',
  close: 'ปิด',
  start: 'เริ่ม',
  loading: 'กำลังโหลด',
  end: 'สิ้นสุด',
  to: ' ถึง ',
  or: 'หรือ',
  and: 'และ',
  at: 'ที่',
  goto: 'ไปที่',
  refreshSuccess: 'รีเฟรชสำเร็จ',
  loadingFail: 'การโหลดล้มเหลว',
  noMore: 'ไม่มีอีกแล้ว...',
  login: 'เข้าสู่ระบบ',
  otherMethod: 'วิธีอื่นๆ',
  reg: 'ลงทะเบียน',
  userName: 'ชื่อผู้ใช้',
  email: 'อีเมล',
  sendEmail: 'ส่งรหัสยืนยัน',
  sended: 'ได้รับแล้ว',
  emailCaptcha: 'รหัสยืนยันทางอีเมล',
  password: 'รหัสผ่าน',
  forgetPassword: 'ลืมรหัสผ่าน',
  resetPwd: 'รีเซ็ตรหัสผ่าน',
  noUser: 'ยังไม่มีบัญชีผู้ใช้?',
  createUser: 'สร้างบัญชี',
  googleCode: 'รหัส Google Authenticator',
  inputGoole: 'ใส่รหัส Google Authenticator',
  partner: 'พันธมิตรอย่างเป็นทางการ:',
  date: 'วันที่',
  day: 'วัน',
  month: 'เดือน',
  year: 'ปี',
  birthday: 'วันเกิด',
  telephone: 'โทรศัพท์',
  country: 'ประเทศ',
  hasAccount: 'มีบัญชีแล้ว?',
  logout: 'ออกจากระบบ',
  address: 'ที่อยู่',
  zipCode: 'รหัสไปรษณีย์',
  loginPage: {
    useGoogle: 'ใช้ Google Authenticator',
    userNameOrEmail: 'ชื่อผู้ใช้หรืออีเมล'
  },
  regPage: {
    holderUserName: 'สร้างชื่อผู้ใช้ของคุณ',
    holderEmail: `ตัวอย่าง:you{'@'}example.com`,
    holderTelephone: 'โทรศัพท์(+66 xxxxxxxxxxx)',
    isAdult: 'ฉันยืนยันว่าฉันเป็นผู้ใหญ่อายุ 18 ปีขึ้นไป และยอมรับ',
    termCondition: 'ข้อกำหนดและเงื่อนไข',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    isAgree: 'ฉันยอมรับข้อมูลการตลาดที่เกี่ยวข้องกับกิจกรรมของ Sportsbet.io'
  },
  thirdRegPage: {
    beFinished: 'เหลือเพียงเสร็จสิ้นอย่างรวดเร็วเท่านั้น!',
    fixInfo: 'โปรดเติมข้อมูลของคุณให้ครบถ้วน'
  },
  myprfile: 'โปรไฟล์ของฉัน',
  clubLevel: 'ระดับคลับ',
  userLevels: {
    '101': 'เหล็ก',
    '102': 'ทองแดง',
    '103': 'เงิน',
    '104': 'ทอง',
    '105': 'แพลทินัม',
    '106': 'ทายทัก',
    '107': 'เพรช'
  },
  homePage: {
    currentMultiplier: 'ตัวคูณคะแนนปัจจุบัน',
    nextReward: 'รางวัลระดับถัดไป',
    showProgress: 'แสดงความคืบหน้าของฉัน'
  },
  userAccount: 'บัญชีผู้ใช้',
  wallet: 'กระเป๋าเงิน',
  myBets: 'ประวัติการเดิมพัน',
  rewards: 'รางวัล',
  notifications: 'การแจ้งเตือน',
  // ค้นหา
  noSearchResult: 'ขออภัย ไม่พบผลลัพธ์สำหรับ "{ keyword }" กรุณาลองคำค้นหาอื่นๆ',
  searchResultNum: 'พบ { searchResult } รายการ',
  // รายละเอียดโปรโมชั่น
  promoDetail: 'รายละเอียดโปรโมชั่น',
  // คลับ
  club: 'คลับ',
  tiers: 'ระดับ',
  clubTips: 'รางวัลของคุณจะรีเซ็ตทุกเดือน โปรดรับรางวัลก่อนสิ้นเดือน เพื่อหลีกเลี่ยงผิดพลาด',
  currentPoints: 'คะแนนปัจจุบัน',
  currentPointsMultiplier: 'ตัวคูณคะแนนปัจจุบัน',
  receiveReward: 'รับรางวัล',
  alreadyReceived: 'รับแล้ว',
  mergedReards: 'รวมการรับรางวัลระดับถัดไปแล้ว',
  noReward: 'ยังไม่มีรางวัล สู่ระดับถัดไปเพื่อปลดล็อครางวัลครั้งแรกของคุณ',
  // คลับ VIP
  vipClub: 'VIP คลับ',
  // ร้านค้าแต้ม
  mallStore: 'ร้านค้าแต้ม',
  // การตั้งค่าบัญชี
  generalInformation: 'ข้อมูลทั่วไป',
  changePassword: 'เปลี่ยนรหัสผ่าน',
  googleAuthenticator: 'Google Authenticator',
  privacySetting: 'การตั้งค่าความเป็นส่วนตัว',
  currentPwd: 'รหัสผ่านปัจจุบัน',
  newPwd: 'รหัสผ่านใหม่',
  confirmPwd: 'ยืนยันรหัสผ่านใหม่',
  changePwdLimit: 'เพื่อความปลอดภัยของเงินของคุณ หลังจากเปลี่ยนรหัสผ่าน คุณจะไม่สามารถทำการถอนเงินภายใน 48 ชั่วโมง',
  disabledGoogle: 'ปิดใช้งาน Google Authenticator แล้ว',
  activeGoogle: 'กรุณาสแกนคิวอาร์โค้ดของ Google Authenticator หรือป้อนรหัสเพื่อเปิดใช้งาน',
  whatGoogleCode: 'คือรหัส Google Authenticator คืออะไร?',
  typeCode: 'ป้อนรหัส',
  submitCode: 'ส่งรหัส',
  keyValue: 'คีย์แบบ',
  // การแจ้งเตือน
  notice: 'ประกาศ',
  mail: 'จดหมายในเว็บไซต์',
  makeAllRead: 'ทำให้ทั้งหมดเป็นอ่านแล้ว',
  noMessage: 'คุณไม่มีข้อความแจ้งเตือนใดๆ',
  // รางวัล
  claimReward: 'รับรางวัล',
  claimNewReward: 'รับรางวัลใหม่',
  rewardCode: 'รหัสรางวัล',
  claim: 'รับ',
  recentTransaction: 'รายการธุรกรรมล่าสุด',
  // ค้นหา
  searchHolder: 'เกมหรือผู้ให้บริการ',
  searchMore: 'ค้นหาเพิ่มเติม',
  searchRecommend: 'คำแนะนำสำหรับคุณ',
  enter: 'เข้าสู่',
  // กองทุน
  fundAccount: 'บัญชีเงินทุน',
  activeBalance: 'ยอดคงเหลือ',
  balance: 'ยอดคงเหลือ',
  deposit: 'ฝากเงิน',
  buyCrypto: 'ซื้อเหรียญดิจิทัล',
  withdraw: 'ถอนเงิน',
  youDepositAddress: 'ที่อยู่ฝากเงินของคุณ',
  minDepositAmount: 'ยอดฝากขั้นต่ำ',
  quickTips: 'เคล็ดลับเร่งด่วน',
  quickTipCont: 'เมื่อคุณทำการโอนเงินทุกครั้ง โปรดใช้ที่อยู่กระเป๋าเงินฝากล่าสุดจากชั้นเราเท่านั้น',
  promoCode: 'รหัสโปรโมชั่น',
  currentBalance: 'ยอดคงเหลือปัจจุบัน',
  myRewards: 'รางวัลของฉัน',
  transactionHistory: 'ประวัติธุรกรรม',
  supportSettings: 'การสนับสนุนและการตั้งค่า',
  walletSettings: 'การตั้งค่ากระเป๋าเงิน',
  faq: 'ช่วยเหลือ',
  liveSupport: 'สนับสนุนแบบสด',
  chooseCrypto: 'เลือกเหรียญดิจิทัลที่คุณต้องการ',
  cryptoCurrency: 'เหรียญดิจิทัล',
  bank: 'ธนาคาร',
  chooseDepositChain: 'เลือกเครือข่ายฝากเงิน',
  confirmDepositAddress: 'โปรดยืนยันที่อยู่ฝากเงินก่อนดำเนินการธุรกรรม',
  recommendExchange: 'ซื้อเหรียญดิจิทัลจากแลกเปลี่ยนที่เราแนะนำ',
  // บันทึกธุรกรรม
  deposits: 'ฝากเงิน',
  withdrawals: 'ถอนเงิน',
  bets: 'เดิมพัน',
  wins: 'ชนะ',
  currencyFilter: 'กรองตามเหรียญ',
  dateFilter: 'กรองตามวันที่',
  winLose: 'ชนะ / แพ้',
  nodata: 'ไม่มีรายการ',
  // การตั้งค่ากระเป๋าเงิน
  currency: 'เงินตรา',
  btcUnit: 'หน่วยบิตคอยน์',
  // ถอนเงิน
  inputAmount: 'ป้อนจำนวนเงิน',
  walletDetails: 'รายละเอียดกระเป๋าเงิน',
  walletDetailsBig: 'รายละเอียดกระเป๋าเงิน',
  waitingResults: 'รอการตรวจสอบ',
  withdrawUsdt: 'ถอน {curreny}',
  amount: 'จำนวนเงิน',
  minWithdrawAmount: 'ยอดถอนขั้นต่ำ',
  next: 'ถัดไป',
  youWithdrawAddress: 'ที่อยู่ถอนเงินของคุณ',
  payto: 'จ่ายไปที่',
  checkWithdrawAddress: 'โปรดตรวจสอบที่อยู่กระเป๋าเงินถอนเงินของคุณก่อนทุกครั้งก่อนทำธุรกรรม',
  previewWithdraw: 'แสดงตัวอย่างการถอนเงิน',
  confirmWithdrawInfo: 'โปรดยืนยันข้อมูลทั้งหมดถูกต้อง',
  network: 'เครือข่าย',
  withdrawing: 'กำลังดำเนินการถอนเงิน',
  summary: 'สรุปผล',
  transactionType: 'ประเภทธุรกรรม',
  finalBalance: 'ยอดคงเหลือสุดท้าย',
  backToFund: 'กลับไปที่เงินทุน',
  chooseWithdrawChain: 'เลือกเครือข่ายถอนเงิน',
  confirmWithdrawAddress: 'โปรดยืนยันที่อยู่ถอนเงินก่อนดำเนินการธุรกรรม',
  walletAddress: 'ที่อยู่กระเป๋าเงิน',
  walletAddressBig: 'ที่อยู่กระเป๋าเงิน',
  tradeStatus: { 1: 'ยังไม่เสร็จสิ้น', 2: 'เสร็จสิ้น', 3: 'ถูกลบแล้ว' },

  // หน้าหลัก
  readMore: 'อ่านเพิ่มเติม',
  sports: 'กีฬา',
  liveCasino: 'คาสิโนสด',
  slots: 'สล็อต',
  sbSport: 'กีฬาซาบะ',
  fbSport: 'กีฬา FB',
  downloadApp: 'ดาวน์โหลดแอปพลิเคชัน',
  androidApple: 'รองรับแอนดรอยและแอปเปิ้ล',
  globalPaymentSolutions: 'โซลูชันการชำระเงินทั่วโลก',
  otherPayment: 'วิธีการชำระเงินอื่นๆ',
  sportsBet: 'เดิมพันกีฬา',
  liveCasinoBet: 'เดิมพันคาสิโนสด',
  slotBet: 'เดิมพันสล็อต',
  more: 'เพิ่มเติม',
  loadMore: 'โหลดเพิ่มเติม',
  providers: 'ผู้ให้บริการ',
  allProviders: 'ผู้ให้บริการทั้งหมด',
  sortBy: 'เรียงลำดับตาม',
  polular: 'ยอดนิยม',
  promotions: 'โปรโมชั่น',
  aboutUs: 'เกี่ยวกับเรา',
  selectLanguage: 'เลือกภาษา',
  ruleTerms: 'กฎและเงื่อนไข',
  responsibleGambling: 'การพนันรับผิดชอบ',
  amlPolicy: 'นโยบายต้านการฟอกเงิน',
  selfExclusion: 'การยกเว้นตนเอง',
  privacyPolicy: 'นโยบายความเป็นส่วนตัว',
  fairness: 'ความเที่ยงตรง',
  game: 'เกม',
  followUs: 'ติดตามเรา',
  language: 'ภาษา',
  helpCenter: 'ศูนย์ช่วยเหลือ',
  acceptCrypto: 'รับสกุลเงินดิจิทัล',
  licencesSecurity: 'ใบอนุญาตและความปลอดภัย',
  gameBig: 'เกม',
  userBig: 'ผู้ใช้',
  payoutBig: 'การจ่ายเงิน',
  betUser: 'ผู้เดิมพัน',
  multiplier: 'ตัวคูณ',
  paymentAmount: 'จำนวนเงินที่จ่าย',
  invisibility: 'ความหายนะ',
  currencyLang: {
    usdt: 'Tether',
    btc: 'บิตคอยน์',
    eth: 'เอธีเรียม',
    busd: 'Binance USD',
    trx: 'TRON',
    xrp: 'ริปเปิล',
    bnb: 'Binance Coin',
    ltc: 'ไลท์คอยน์',
    ada: 'Cardano',
    doge: 'ด็อกคอยน์',
    ton: 'TON Crystal',
    usd: 'ดอลลาร์สหรัฐ',
    cny: 'หยวนจีน'
  },
  // ร้านค้าแต้ม
  points: 'แต้ม',
  pointsNum: 'จำนวนแต้ม',
  earnPoints: 'รับแต้ม',
  pointType: 'ประเภท',
  spentPoints: 'ใช้แต้ม',
  afterPoints: 'แต้มหลังจาก',
  createTime: 'เวลาสร้าง',
  pointsType: {
    '1': 'เดิมพัน',
    '2': 'แลกสินค้า',
    '3': 'โปรโมชั่น',
    '4': 'ผู้ดูแลเพิ่ม',
    '5': 'ผู้ดูแลหัก',
    '6': 'ยกเลิกการแลก'
  },

  // ผู้ให้บริการเกม
  provider: {
    all: 'ทั้งหมด',
    sabaSports: 'กีฬาซาบะ',
    btiSports: 'กีฬา Seabet',
    fbSports: 'กีฬา FB',
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
  tips: {
    // ผู้ใช้ - เข้าสู่ระบบและลงทะเบียน
    inputAccount: 'โปรดใส่ชื่อผู้ใช้',
    isAccount: 'ชื่อผู้ใช้ต้องมีความยาวระหว่าง 5-12 ตัวอักษรและขึ้นต้นด้วยตัวอักษร',
    inputPassword: 'โปรดใส่รหัสผ่าน',
    isPwd: 'รหัสผ่านต้องมีความยาวระหว่าง 6-16 ตัวอักษรหรือตัวเลข',
    pwdNotMatch: 'รหัสผ่านไม่ตรงกัน',
    googleCode: 'รหัส Google Authenticator ต้องประกอบด้วยตัวเลข 6 หลัก',
    loginFail: 'เข้าสู่ระบบล้มเหลว',
    inputEmail: 'โปรดใส่อีเมล',
    isEmail: 'รูปแบบอีเมลไม่ถูกต้อง',
    inputEmailcapcha: 'โปรดใส่รหัสยืนยันทางอีเมล',
    inputDay: 'โปรดเลือกวันเกิด',
    inputMonth: 'โปรดเลือกเดือนเกิด',
    inputYear: 'โปรดเลือกปีเกิด',
    inputCountryCode: 'โปรดใส่รหัสประเทศ',
    inputphoneNumber: 'โปรดใส่หมายเลขโทรศัพท์',
    inputAddress: 'โปรดใส่ที่อยู่',
    inputZipCode: 'โปรดใส่รหัสไปรษณีย์',
    userNameExist: 'มีชื่อผู้ใช้นี้อยู่แล้ว',
    emailExist: 'อีเมลนี้ถูกใช้งานแล้ว',
    emailNotExist: 'ไม่พบอีเมลนี้',
    isAudit: 'โปรดยืนยันว่าคุณเป็นผู้ใหญ่และยอมรับนโยบายความเป็นส่วนตัว',
    isAgree: 'โปรดอ่านและยอมรับข้อมูลการตลาดที่เกี่ยวข้องกับกิจกรรม',
    regSuccess: 'ลงทะเบียนสำเร็จ',
    regFail: 'ลงทะเบียนล้มเหลว',
    loginSuccess: 'เข้าสู่ระบบสำเร็จ',
    sendSuccess: 'ส่งสำเร็จ',
    resetSuccess: 'รีเซ็ตรหัสผ่านสำเร็จ โปรดเข้าสู่ระบบใหม่',
    resetFail: 'รีเซ็ตรหัสผ่านล้มเหลว',
    sendFail: 'ส่งล้มเหลว',
    editUserInfoSuccess: 'แก้ไขข้อมูลผู้ใช้สำเร็จ',
    inputNewPwd: 'โปรดใส่รหัสผ่านใหม่',
    isNewPwd: 'รหัสผ่านใหม่ต้องมีความยาวระหว่าง 6-16 ตัวอักษรหรือตัวเลข',
    inputOldPwd: 'โปรดใส่รหัสผ่านเดิม',
    isOldPwd: 'รหัสผ่านเดิมต้องมีความยาวระหว่าง 6-16 ตัวอักษรหรือตัวเลข',
    editPwdSuccess: 'แก้ไขรหัสผ่านสำเร็จ โปรดเข้าสู่ระบบใหม่',
    bindGoogleSuccess: 'เชื่อมโยงกับ Google Authenticator สำเร็จ',
    logoutSuccess: 'ออกจากระบบสำเร็จ',
    setSuccess: 'บันทึกการตั้งค่าสำเร็จ',
    inputWithdrawAmount: 'โปรดใส่จำนวนเงินที่ต้องการถอน',
    overMaxWithdrawAmount: 'จำนวนเงินที่ถอนไม่สามารถเกินยอดคงเหลือได้',
    underMinWithdrawAmount: 'จำนวนเงินที่ถอนต้องมากกว่ายอดเงินขั้นต่ำ',
    inputWithdrawAddress: 'โปรดใส่ที่อยู่เพื่อถอนเงิน',
    withdrawSuccess: 'ขอถอนเงินสำเร็จ',
    withdrawFail: 'ขอถอนเงินล้มเหลว',
    receivedRewardSuccess: 'รับรางวัลสำเร็จ',
    receivedRewardFail: 'รับรางวัลล้มเหลว',
    noLogin: 'คุณยังไม่ได้เข้าสู่ระบบ',
    goLogin: 'ไปที่หน้าเข้าสู่ระบบเลย',
    invalidThirdUser: 'การยืนยันผู้ใช้จากแหล่งที่มาที่สามล้มเหลว',
    authFail: 'การอนุญาตล้มเหลว',
    copySuccess: 'คัดลอกสำเร็จ',
    copyFail: 'บราวเซอร์นี้ไม่รองรับการคัดลอกอัตโนมัติ โปรดคัดลอกด้วยตนเอง',
    inputExhangeCode: 'โปรดใส่รหัสแลกเปลี่ยน',
    startGameFail: 'เริ่มเกมล้มเหลว',
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
  rewardsBig: 'รางวัล',
  myStats: 'บันทึกคะแนน',
  exclusiveRewards: 'รางวัลพิเศษ',
  quickBuys: 'ซื้อด่วน',
  earned: 'รายได้',
  spent: 'จ่าย',
  pointsHistory: 'ประวัติคะแนน',
  earnPointsAndTrack: 'สะสมคะแนนและติดตาม',
  viewPointsRecord: 'ดูประวัติการใช้คะแนนทั้งหมดของคุณ',
  buyNow: 'ซื้อทันที',
  youWillGet: 'คุณจะได้รับ',
  bonusValue: 'มูลค่าชิปโบนัส',
  wageringRequirement: 'เงื่อนไขการวางเดิมพัน',
  enableVisible: 'เปิดใช้งานโหมดซ่อนตัว',
  hiddenYourBet: 'การเดิมพันของคุณจะไม่แสดงในการเดิมพันสาธารณะและการพรีวิวการเดิมพัน',
  startNow: 'เริ่มต้นเดี๋ยวนี้',
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
    5: '管理员加款',
    6: '管理员扣款',
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
  view: '查看',
  oprate: '操作',

  problem: {
    whatVip: 'What is the VIP Club?',
    whatVips: `<p>The seabet.io VIP Club is a dedicated community open to cryptocurrency customers, allowing them to enjoy all the promotional activities available on the website at any time. Every bet, spin, and game you play will accumulate points, gradually leveling up in the club and unlocking exciting rewards along the way. As you unlock VIP levels, you will also earn Seabet betting points, which will provide you with even more rewarding experiences and services.</p>
                <p>In simple terms, it means: You play games, and we reward you.</p>`,
    howGetIntegrial: 'How to Earn Points?',
    howGetIntegrials: `<p>How to Earn Points?</p>
                        <p>You earn club points with every bet, slot machine spin, and table game you play. The more points you collect, the higher your level becomes. As you progress through the ranks, you will unlock a variety of exciting rewards. The rewards will keep getting better as you continue to unlock new levels.</p>
                        <p></p>`,
    whatVipLevel: 'What are VIP Levels?',
    whatVipLevels: `<p>VIP levels determine the value and type of rewards you can claim. As you progress through the club and level up, your rewards will also increase.</p>
                    <p>VIP Level 	Required Bet Amount	Frequency</p>
                    <p>Bronze 	100	1</p>
                    <p>Silver	500	5</p>
                    <p>Gold 	15000	8</p>
                    <p>Platinum 	300,000	10</p>
                    <p>Titanium	1,900,000	10</p>
                    <p>Diamond 	6,000,000	6</p>
                    <p></p>`,
    howComputeInterial: 'How are Points Calculated?',
    howComputeInterials: `<p>Whether it's sports betting or playing casino games, using cryptocurrency will earn you points. To calculate the points you earn with each bet, we convert your bet amount to USDT at the real-time market exchange rate during settlement. This ensures that all point collections, regardless of the cryptocurrency used, are fair. Due to fluctuating conversion rates, we follow the principle of rounding to the nearest whole number when calculating points.</p>
                          <p>The formula for earning Seabet points is: Player's betting amount * 0.1 * corresponding level's point coefficient. For example, if a player is at the Platinum level and bets 5000, according to the point calculation formula, the player will earn 5000 * 0.01 * 1.3 = 65 points. Seabet points have a wide range of uses, and players can redeem equivalent gifts and services from the points store.</p>`,
    whyMergedReward: 'Why are My Rewards Merged?',
    whyMergedRewards: `<p>Your rewards are merged because a single bet may unlock multiple rewards. To make it convenient for you, we add up the value of the rewards and display them as a single reward.</p>`,
    resetVip: 'When will My VIP Level Reset?',
    resetVips: `<p>Your VIP level will reset to 0 at the beginning of each month. You can then start again from the Bronze level and claim all the rewards of the next level. Your accumulated points will still be retained for you to redeem more rewards and services.</p>`,
    everyGetInterial: 'Can I Earn Club Points with Every Bet?',
    everyGetInterials: `<p>No, club points are only accumulated when placing bets with real money. Additionally, certain categories of events and games are not included in the club, so bets placed on them will not earn you points. These categories include:</p>
                        <p>Horse Racing</p>
                        <p>Esports Sports</p>
                        <p>Sportsbook Masters</p>
                        <p>Furthermore, the following casino games are also not included in the club, and bets placed on them will not earn you points.</p>
                        <p></p>
                        <p>OneTouch - Russian Poker</p>
                        <p>Genii - Aces And Faces Video Poker</p>
                        <p>Betsoft - Max Quest: Wrath of Ra 2.0, 21 Burn Blackjack, Jacks or Better BSG, Multihand Bonus Deluxe, Pontoon, Single Deck Blackjack, Split Way Royal, Super 7 Blackjack</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Realistic - Realistic Blackjack, Realistic Hi Lo Blackjack</p>
                        <p>Yggdrasil - Dr. Fortuno Blackjack, Sonya Blackjack</p>
                        <p>Tangente - Joker Poker Kings, Double Bonus Poker</p>
                        <p>Asia Gaming - Fish Hunter</p>
                        <p>Spadegaming - Fishing God, Fishing War</p>
                        <p>Gamatron - Tokyo Kombat</p>`
  },
  faqs: {
    q1: 'วิธีการฝากเงินดิจิทัล:',
    a1: `<p>1. เลือกสกุลเงินดิจิทัลที่คุณต้องการ จากนั้นคลิก "ฝาก"</p>
        <p>2. คัดลอกที่อยู่ฝากเงินแบบครั้งเดียวและใช้ในกระเป๋าเงินของคุณ (หรือสแกนรหัส QR)</p>
        <p>3. เมื่อธุรกรรมของคุณได้รับการยืนยันแล้ว คุณจะได้รับการแจ้งเตือน</p>`,
    q2: 'วิธีการถอนเงินดิจิทัล:',
    a2: `<p>1. เลือกสกุลเงินดิจิทัลที่คุณต้องการถอน จากนั้นคลิก "ถอน"</p>
        <p>2. ใส่จำนวนเงินที่คุณต้องการถอน</p>
        <p>3. ป้อนที่อยู่กระเป๋าเงินของคุณ</p>
        <p>4. คลิกปุ่มถอน</p>`,
    q3: 'ระยะเวลาการฝาก/ถอน:',
    a3: `<p>การฝาก</p>
        <p>การฝากเงินดิจิทัลส่วนใหญ่ดำเนินการด้วยความรวดเร็ว อย่างไรก็ตามอาจเกิดความล่าช้าจากบริการของบุคคลที่สาม สำหรับการฝาก BTCXE อาจใช้เวลานานถึง 30 นาทีในการประมวลผลธุรกรรมของคุณ เนื่องจากต้องใช้เวลาในการแปลงจากเงินคำสั่งเป็น BTC</p>
        <p>การถอน</p>
        <p>การถอนเงินส่วนใหญ่จะดำเนินการทันที ในกรณีที่มีการถอนเงินจำนวนมาก เราจะดำเนินการถอนเงินเหล่านี้เอง ดังนั้นอาจมีความล่าช้าเกิดขึ้นเล็กน้อง</p>
        <p>เรียนรู้เพิ่มเติม ></p>`,
    q4: 'สกุลเงินและวิธีการชำระเงินที่เรารองรับ:',
    a4: `สกุลเงินที่รองรับบน seabet.io มีดังนี้
        <p>• Tether (USDT)</p>
        <p>• Bitcoin (BTC)</p>
        <p>• Ethereum (ETH)</p>
        <p>• Tron (TRX)</p>
        <p>• Binance USD (BUSD)</p>
        <p>• Binance Coin (BNB)</p>
        <p>• Ripple (XRP)</p>
        <p>• Litecoin (LTC)</p>
        <p>• Cardano (ADA)</p>
        <p>• Dogecoin (DOGE)</p>
        <p>• The Open Network (TON)</p>`,
    q5: '<p>แม้ว่าเราจะไม่ใช้ค่าธรรมเนียมการทำธุรกรรมใดๆ สำหรับการฝากและถอนเงินบน Seabet.io แต่อาจมีค่าธรรมเนียมการทำธุรกรรมที่คุณต้องจ่ายสำหรับการใช้บล็อคเชนและ/หรือธนาคารของคุณ</p>',
    a5: ``,
    q6: '',
    a6: ``,
    q7: '',
    a7: ``,
    q8: '',
    a8: ``,
    q9: '',
    a9: ``,
    q10: '',
    a10: ``
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
    1032: '为确保您的资金安全，当您修改密码后， 24小时内您将无法进行提款操作。'
  },

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
                          <dd>Diamond: Diamond 1 - Diamond 6</dd>
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

    rulesContent: `<div>
                    <h2>Terms and Conditions</h2>
                    <h3>1. SEABET.IO</h3>
                    <h3>2. IMPORTANT NOTICE</h3>
                    <p><b>2.1 </b>BY REGISTERING ON WWW.SEABET.IO (THE “WEBSITE”), YOU ENTER INTO A CONTRACTED, AND AGREE TO BE BOUND BY: </p>
                    <p>(I) THESE TERMS AND CONDITIONS; </p>
                    <p>(II) OUR PRIVACY POLICY; </p>
                    <p>(III) OUR COOKIES POLICY AND </p>
                    <p>(IV) THE RULES APPLICABLE TO OUR BETTING OR GAMING PRODUCTS AS FURTHER REFERENCED IN THESE TERMS AND CONDITIONS (“TERMS AND CONDITIONS” OR “AGREEMENT”), AND THE BETTING AND/OR GAMING SPECIFIC RULES, AND ARE DEEMED TO HAVE ACCEPTED AND UNDERSTOOD ALL THE TERMS.</p>

                    <p><b>2.2 </b>PLEASE READ THIS AGREEMENT CAREFULLY TO MAKE SURE YOU FULLY UNDERSTAND ITS CONTENT. IF YOU HAVE ANY DOUBTS AS TO YOUR RIGHTS AND OBLIGATIONS RESULTING FROM THE ACCEPTANCE OF THIS AGREEMENT, PLEASE CONSULT A LEGAL ADVISOR IN YOUR JURISDICTION BEFORE FURTHER USING THE WEBSITE(S) AND ACCESSING ITS CONTENT. IF YOU DO NOT ACCEPT THE TERMS, DO NOT USE, VISIT OR ACCESS ANY PART (INCLUDING, BUT NOT LIMITED TO, SUB-DOMAINS, SOURCE CODE AND/OR WEBSITE APIS, WHETHER VISIBLE OR NOT) OF THE WEBSITE.</p>
                    <h3>3. GENERAL</h3>
                    <p><b>3.1 </b>When registering on www.Seabet.io.</p>
                    <p> You (“You”, “Your”, Yourself” or the “Player” interchangeably) enter into an agreement with Seabet.</p>
                    <p><b>3.2 </b>This Agreement should be read by You in its entirety prior to your use of Seabet's service or products. Please note that the Agreement constitutes a legally binding agreement between you and Seabet.</p>
                    <p><b>3.3 </b>These Terms and Conditions come into force as soon as you complete the registration process, which includes checking the box accepting these Terms and Conditions and successfully creating an account. By using any part of the Website following account creation, you agree to these Terms and Conditions applying to the use of the Website.</p>
                    <p><b>3.4 </b>We are entitled to make amendments to these Terms and Conditions at any time and without advanced notice. If we make such amendments, we may take appropriate steps to bring such changes to your attention (such as by email or placing a notice on a prominent position on the Website, together with the amended terms and conditions) but it shall be your sole responsibility to check for any amendments, updates and/or modifications. Your continued use of the website services after any such amendment to the Terms and Conditions will be deemed as your acceptance and agreement to be bound by such amendments, updates and/or modifications.</p>
                    <p><b>3.5 </b>The terms of this Terms and Conditions shall prevail in the event of any conflict between the terms of this Terms and Conditions and of any of the game rules or other documents referred to in this Terms and Conditions.</p>
                    <p><b>3.6 </b>These Terms and Conditions may be published in several languages for informational purposes and ease of access by players. The English version is the only legal basis of the relationship between you and us and in the case of any discrepancy with respect to a translation of any kind, the English version of these Terms and Conditions shall prevail.</p>

                    <h3>4. SEABET ACCOUNT</h3>
                    <p>Registration</p>
                    <p><b>4.1 </b>In order for you to be able to place bets on Seabet.io, you must first personally register an account with us ("Seabet Account").</p>
                    <p><b>4.2 </b>For a person to be registered as a player with Seabet and use the Website, that person must submit an application for registration and opening of a Seabet account. The application for the opening of the Seabet Account must be submitted personally, and will require You to provide a set of personal information, namely e-mail, full name, date of birth, address, etc.</p>
                    <p><b>4.3 </b>Where the information stipulated in <b>4.2.</b> is not provided and/or is not deemed to be complete, accurate or up-to-date at any point in time, Seabet reserves the right to suspend the Seabet Account registration and treat any subsequent potentially accepted deposits to the Player’s Seabet Account as invalid (and any winnings arising from such deposit as void). Where a Seabet Account is suspended, you should contact customer support at (support{'@'}Seabet.io).</p>
                    <p><b>4.4 </b>All applicants must be 18 or such other legal age of majority as determined by any laws which are applicable to you, whichever age is greater or older. Seabet reserves the right to ask for proof of age from any Player and suspend their Seabet Account until satisfactory documentation is provided. Seabet takes its responsibilities in respect of under age and responsible gambling very seriously.</p>
                    <p><b>4.5 </b>Seabet will not accept registration from individuals:</p>
                    <p>a) Under 18 years old or under the legal age of majority or gambling in their jurisdiction;</p>
                    <p>b) Residing in jurisdictions from where it is illegal or gambling is not permitted. Seabet is not able to verify the legality of the Service in each jurisdiction and it is the User's responsibility to ensure that their use of the Service is lawful;</p>
                    <p>c) Provide misleading information or try to pass by third parties.</p>
                    <p><b>4.6 </b>Seabet reserves the right to refuse any application for a Seabet Account, at its sole discretion.</p>

                    <p>Know Your Customer</p>
                    <p><b>4.7 </b>You represent and warrant that any information provided by You on Your application form is true, updated and correct.</p>
                    <p><b>4.8 </b>Seabet reserves the right, at any time, to ask for any KYC documentation it deems necessary to determine the identity and location of a Player. Seabet reserves the right to restrict the Service, payment or withdrawal until identity is sufficiently determined, or for any other reason in Seabet’s sole discretion. Seabet also reserves the right to disclose a Player’s information as appropriate to comply with legal process or as otherwise permitted by the privacy policy of Seabet (owner and operator of Seabet), and by using the Service, you acknowledge and consent to the possibility of such disclosure.</p>

                    <p>Multiple Accounts</p>
                    <p><b>4.9 </b>Only one Seabet Account per Player is allowed. Should You attempt or successfully open more than one Seabet Account, under Your own name or under any other name, or should You attempt or succeed in using the Website by means of any other person's Seabet Account, Seabet will be entitled to immediately close all Your Seabet Account(s), retain all monies in such Seabet Accounts and ban You from future use of the Website.</p>
                    <p><b>4.10 </b>Should Seabet have reason to believe that You have registered and/or used more than one Seabet Account, or colluded with one or more other individuals using a number of different Seabet Accounts, Seabet shall be entitled to deem such accounts as constituting multiple Seabet Accounts, and suspend or close all such Seabet Accounts. Seabet will also be entitled to retain the funds till the Player proves that he did not attempt to create multiple accounts.</p>
                    <p><b>4.11 </b>If you notice that you have more than one registered Seabet Account you must notify us immediately. Failure to do so may lead to your Seabet Account being blocked and the funds retained.</p>

                    <p>User Responsibility</p>
                    <p><b>4.12 </b>It is your sole and exclusive responsibility to ensure that your login details are kept securely. You must not disclose your login details to anyone.</p>
                    <p><b>4.13 </b>We are not liable or responsible for any abuse or misuse of your Seabet Account by third parties due to your disclosure, whether intentional, accidental, active or passive, of your login details to any third party.</p>
                    <p><b>4.14 </b>You are prohibited from selling, transferring or acquiring Seabet Accounts to or from other Players.</p>
                    <p><b>4.15 </b>You will inform us as soon as you become aware of any errors with respect to your account or any calculations with respect to any bet you have placed. We reserve the right to declare null and void any bets that are subject to such an error.</p>
                    <p><b>4.16 </b>You are responsible for all activities that occur under your account.</p>

                    <p>Security Features</p>
                    <p><b>4.17 </b>We recommend that you enable two-factor authentication to enhance the security of your account.</p>
                    <p><b>4.18 </b>We may provide other security measures from time to time, and we encourage you to use them.</p>


                    <p>Suspension and Closure by Seabet</p>
                    <p><b>4.19 </b>Seabet shall be entitled to close or suspend Your Seabet Account if:</p>
                    <p>a) Seabet considers that You are using or have used the Website in a fraudulent or collusive       manner or for illegal and/or unlawful or improper purposes;</p>
                    <p>b) Seabet considers that You are using or have used the Website in an unfair manner, have deliberately cheated or taken unfair advantage of Seabet or any of its customers or if Your Seabet Account is being used for the benefit of a third party;</p>
                    <p>c) Seabet is requested to do so by the police, any regulatory authority or court or if Seabet is unable to verify Your identity, profession or source of funds as is expressly required by the applicable regulations;</p>
                    <p>d) You are in breach of these Terms and Conditions, the applicable regulations or the fair use of our services, or Seabet has concerns that You are a compulsive problem gambler without being self-excluded;</p>
                    <p>e) Seabet considers that any of the events referred to in (a) to (e) above may have occurred or are likely to occur.</p>
                    <p><b>4.20 </b>If Seabet closes or suspends Your Seabet Account for any of the reasons referred to in <b>4.15,</b> You shall, to the extent permitted by applicable laws, be liable for any and all claims, direct losses, liabilities, damages, costs and expenses incurred or suffered by Seabet (together, the “Claims”) arising therefrom and shall, to the extent permitted by applicable laws, indemnify and hold Seabet harmless on demand for such claims.</p>
                    <p><b>4.21 </b>In the circumstances referred to in <b>4.15,</b> Seabet shall also be entitled to void any bets placed by You following such actions by You or to withhold and/or retain any and all amounts which would otherwise have been paid or payable to you (including any winnings) to the extent permitted by law.</p>
                    <p><b>4.22 </b>We reserve the right to suspend or terminate your account at any time, with or without notice, if we suspect that your account has been compromised or is being used in breach of our Terms of Service.</p>
                    <p><b>4.23 </b>If Seabet closes Your Seabet Account it will inform You of the available means to withdraw the remaining balance on Your Seabet Account.</p>

                    <p>Our Liability</p>
                    <p><b>4.24 </b>We take no responsibility for any loss or damage that you may suffer as a result of unauthorised access to your account.</p>
                    <p><b>4.25 </b>We take no responsibility for any loss or damage that you may suffer as a result of your failure to keep your login secure and private.</p>

                    <h3>5. YOUR WARRANTIES</h3>
                    <p><b>5.1 </b>Prior to your use of the Service and on an ongoing basis you represent, warrant, covenant and agree that:</p>
                    <p>Capacity</p>
                    <p>a) You are over 18 or such other legal age of majority as determined by any laws which are applicable to you, whichever age is greater;</p>
                    <p>b) You have full capacity to enter into a legally binding agreement with us and you are not restricted by any form of limited legal capacity;</p>
                    <p>c) You are not diagnosed or classified as a compulsive or problem gambler;</p>
                    <p>d) You are not currently self-excluded from any gambling site or gambling premises. You will inform Seabet immediately if you enter into a self-exclusion agreement with any gambling provider.</p>

                    <p>Jurisdiction</p>
                    <p>e) You are accessing Seabet.io from a jurisdiction in which it is legal to do so;</p>
                    <p>f) You will not use our services while located in any jurisdiction that prohibits the placing and/or accepting of bets online and/or playing casino and/or live games;</p>
                    <p>g) You accept and acknowledge that we reserve the right to detect and prevent the use of prohibited techniques, including but not limited to fraudulent transaction detection, automated registration and signup, gameplay and screen capture techniques. These steps may include, but are not limited to, examination of Players device properties, detection of geo-location and IP masking, transactions and blockchain analysis;</p>

                    <p>Funds & Tax</p>
                    <p>h) You are solely responsible for reporting and accounting for any taxes applicable to you under relevant laws for any winnings that you receive from us;</p>
                    <p>i) You are solely responsible for any applicable taxes which may be payable on cryptocurrency awarded to you through your using the Service;</p>
                    <p>j) There is a risk of losing cryptocurrency when using the Service and that Seabet has no responsibility to you for any such loss;</p>
                    <p>k) You will not deposit funds which originate from criminal or other unauthorised activity;</p>
                    <p>l) You will not deposit funds using payment methods that do not belong to You;</p>
                    <p>m) All the funds deposited shall exclusively be used for Services available on the Website;</p>
                    <p>n) You will not withdraw or try to withdraw to a payment method that do not belong to You;</p>
                    <p>o) You understand that by participating in the Services available on the Website, You take the risk of losing money deposited.</p>
                    <p>p) You accept and acknowledge that the value of cryptocurrency can change dramatically depending on the market value;</p>
                    <p>q) Seabet shall not be treated as a financial institution;</p>

                    <p>Others</p>
                    <p>r) Your use of the Service is at your sole option, discretion and risk;</p>
                    <p>s) You will not conduct criminal activities through the Seabet Account;</p>
                    <p>t) All information that you provide to us during the term of validity of this agreement is true, complete, correct, and that you shall immediately notify us of any change of such information;</p>
                    <p>u) You participate in the Games strictly in your personal and non-professional capacity and participate for recreational and entertainment purposes only;</p>
                    <p>v) You participate in the Games on your own behalf and not on the behalf of any other person;</p>
                    <p>w) You have only one account with us and agree to not to open any more accounts with us;</p>
                    <p>x) The telecommunications networks and Internet access services required for you to access and use the Service are entirely beyond the control of Seabet and Seabet shall have no liability whatsoever for any outages, slowness, capacity constraints or other deficiencies affecting the same;</p>
                    <p>y) You will not be involved in any fraudulent, collusive, fixing or other unlawful activity in relation to Your or any third parties’ participation in any of the games and/or services on the Website, and shall not use any software-assisted methods or techniques or hardware devices for Your participation in any of the games and/or services on the Website;</p>
                    <p>z) If you have access to non-public information related to an event or that can impact the outcome of an event or bet type, You will not bet on any event overseen by the relevant sport/event governing body;</p>
                    <p>aa) If You are an athlete, coach, manager, owner, referee, or anyone with sufficient authority to influence the outcome of an event You will not bet on any event overseen by the relevant sport or event of the governing body;</p>
                    <p>bb) If You are an owner (a person who is a direct or indirect legal or beneficial owner of 10 percent or greater) of a sport governing body or member team You will not bet on any event overseen by the sport governing body or any event in which a member team of that sport or event governing body participates;</p>
                    <p>cc) If You are involved in a sport or event, You will not be involved in compiling betting odds for the competition in which You are involved.</p>
                    <p><b>5.2 </b>In case of a breach of any of the representations, warrants or covenants mentioned in <b>5.1,</b> Seabet reserves the right to close or suspend Your Seabet account at its own discretion and void any bets to the extent applicable by law.</p>

                    <h3>6. SEABET WARRANTIES</h3>
                    <p><b>6.1 </b>Seabet warrants that they will:</p>
                    <p>a) manage funds belonging to the Player in a secure and appropriate manner; and</p>
                    <p>b) manage personal information pertaining to the Player in accordance with applicable law, and in accordance with its Privacy Policy.</p>
                    <p><b>6.2 </b>The software is provided "as is" without any warranties, conditions, undertakings or representations, express or implied, statutory or otherwise. Seabet hereby excludes all implied terms, representations, conditions and warranties (including any of merchantability, merchantable quality, satisfactory quality and fitness for any particular purpose). </p>
                    <p>Seabet does not warrant that: </p>
                    <p>(i)The Website and Services will meet Your requirements; </p>
                    <p>(ii)The Website and Services will not infringe any third party’s intellectual property rights;</p>
                    <p>(iii)The operation of the Website and Services will be error-free or uninterrupted;</p>
                    <p>(iv)Any defects in the Website and Services will be corrected; or </p>
                    <p>(v)The Website or the servers are virus-free.</p>

                    <p><b>6.3 </b>Seabet can be contacted by email on (support{'@'}seabet.io) or on its live chat 24/7. The live chat is available when logged into Your Seabet Account. In the event that Seabet, in its sole discretion, deems that Your behaviour, via live chat, email, or otherwise, has been abusive or derogatory towards any of Seabet’s or its Affiliates or third-party service provider’s employees, Seabet shall have the right to block or terminate Your Seabet Account.</p>

                    <h3>7. DEPOSITS</h3>
                    <p><b>7.1 </b>You may participate in any Game only if you have sufficient funds on your Seabet Account for such participation. For that purpose, you shall use the payment methods available on the Website to deposit your funds. Seabet will not give you any credit whatsoever for participation in any Game.</p>
                    <p><b>7.2 </b>You must deposit funds to Your Seabet Account using the payment methods available at www.Seabet.io.</p>
                    <p><b>7.3 </b>You shall ensure that funds that You deposit into your Seabet Account are not tainted with any illegality and, in particular, do not originate from any illegal activity or source.</p>
                    <p><b>7.4 </b>To deposit funds into your Seabet Account, you can transfer funds from crypto-wallets under your control or through any other payment methods available on Seabet.io. Deposits can only be made with your own funds.</p>
                    <p><b>7.5 </b>You should only deposit money into Your account for the purpose of You using such money to place bets/wager on the Website. Seabet is entitled to suspend or close Your account if we reasonably believe that You are depositing funds without any intention to place sporting and/or gaming wagers. In such circumstances we may also report this activity to relevant authorities.</p>
                    <p><b>7.6 </b>You acknowledge and understand that funding Your Seabet Account can only be funded by payment methods owned by You.</p>
                    <p><b>7.7 </b>You further understand, agree and acknowledge that if Seabet discovers, detects and/or identifies that You:</p>
                    <p>a) Funded/are funding Your Seabet Account using third party payment methods; and/or</p>
                    <p>b) Funded/are funding Your Seabet Account with funds that are tainted with illegality, such activity will be deemed as constituting a violation of the Terms of Service amounting to fraud, and by extension:</p>
                    <p>i) Seabet reserves the right, at its own discretion, to suspend or close Your Seabet Account; and</p>
                    <p>ii) Seabet reserves the right, at its own discretion, to cancel, reverse or adjust any transactions and to forfeit funds deposited and/or winnings generated from the deposited funds.</p>
                    <p><b>7.8 </b>Seabet can set at its own description a minimum deposit amount. The minimum deposit amount can be changed at all time at Seabet’s description and will be identified on the website. Please be aware that depending on the payment method used by You, additional fees might be charged by the payment providers.</p>
                    <p><b>7.9 </b>The payment methods made available to you and the minimum and maximum deposit limit can be found in the wallet section on the Site. Applicable service fees may be applied and changed. Some payment methods may not be available in all countries.</p>
                    <p><b>7.10 </b>Deposits are immediately processed and the updated balance is shown in the Seabet Account instantly whenever a payment service provider is used. Seabet does not take responsibility for any delays caused due to its payment system or due to delays caused by any third party. Note that:</p>
                    <p>a) some payment methods may include additional fees. In this case, the fee will be clearly visible for you in the cashier.</p>
                    <p>b) your bank or payment service provider may charge you additional fees for deposits of currency conversion according to their terms and conditions and your user agreement.</p>
                    <p><b>7.11 </b>We reserve the right to use additional procedures and means to verify your identity when processing deposits into your Seabet Account.</p>
                    <p><b>7.12 </b>Funds cannot be transferred from your Seabet Account to the Seabet Account of another Player.</p>
                    <p><b>7.13 </b>Seabet can refuse any deposits at its own description. Users that have their accounts blocked, or suspended shall refrain from depositing at www.Seabet.io.</p>
                    <p><b>7.14 </b>In the event that a player tries to deposit when his account is blocked or suspended, Seabet will have the right to retain the funds.</p>

                    <h3>8. WITHDRAWALS</h3>
                    <p><b>8.1 </b>Seabet reserves the right to refuse any withdrawal by a Player from their Seabet Account until:</p>
                    <p>a) the Player’s identity has been verified and Seabet has confirmed the withdrawal is being made by a holder of the Seabet Account;</p>
                    <p>b) the withdrawal is being transferred to an account of which the Player is a legal holder;</p>
                    <p>c) any additional information requested by Seabet has been provided; and</p>
                    <p>d) the Player has complied with the minimum wager requirement for each deposit.</p>
                    <p><b>8.2 </b>Seabet reserves all rights to investigate Your account and gaming activity. If Seabet reasonably suspects that Your account or gaming activity has violated these terms of service or applicable laws or regulations, it may, in its sole discretion, delay or decline further deposits, withdrawals and/or game play while it conducts its investigation. You acknowledge and accept that Seabet may not be in a position to provide an explanation as to the nature of its investigation.</p>
                    <p><b>8.3 </b>All withdrawals must be done through the same payment method chosen by you when placing a deposit, unless we decide otherwise or are unable to do so. If you deposit using a number of payment methods, we reserve the right to split your withdrawal across such payment methods and process each part through the respective payment method at our discretion and in accordance with anti-money laundering policies and regulation.</p>
                    <p><b>8.4 </b>If we mistakenly credit your Seabet Account with winnings that do not belong to you, whether due to a technical error in the pay-tables, or human error or otherwise, the amount will remain our property and will be deducted from your Seabet Account. If you have withdrawn funds that do not belong to you prior to us becoming aware of the error, the mistakenly paid amount will (without prejudice to other remedies and actions that may be available at law) constitute a debt owed by you to us. In the event of an incorrect crediting, you are obliged to notify us immediately by email.</p>

                    <p>FIAT Withdrawals</p>
                    <p><b>8.5 </b>You need to wager 100% of the value of your deposit in order to request a FIAT withdrawal.</p>
                    <p><b>8.6 </b>Withdrawals from Seabet Account are made through payments addressed to the Player or transferred to a bank account held in the name of the Player, as advised to Seabet by the Player. Before processing any withdrawal, Seabet reserves the right to perform enhanced due diligence where deemed necessary.</p>
                    <p><b>8.7 </b>The minimum withdrawal amount will be identified on the website when performing a withdrawal.</p>
                    <p><b>8.8 </b>If You have multiple withdrawals pending, Seabet reserves the right to reject all withdrawals and request You to perform one withdrawal with the sum of all multiple withdrawals.</p>
                    <p><b>8.9 </b>Seabet will not charge You any fees on withdrawals. However, You are advised to check if the payment method You use imposes any additional charges. Seabet will not be responsible for any commissions or processing fees charged to You by third parties such as Your bank as this is beyond our control.</p>

                    <p>Crypto Withdrawals</p>
                    <p><b>8.10 </b>Crypto withdrawals will be made to your stated cryptocurrency wallet address when making a valid withdrawal request.</p>
                    <p><b>8.11 </b>Seabet reserves the right to carry out additional KYC verification procedures for any withdrawal. Players who wish to recover funds held in a closed, locked or excluded account, are advised to contact (support{'@'}seabet.io).</p>
                    <p><b>8.12 </b>All transactions shall be checked in order to prevent money laundering. If a player becomes aware of any suspicious activity relating to any of the Games of the Website, s/he must report this to Seabet immediately. Seabet may suspend, block or close a Seabet Account and withhold funds if requested to do so in accordance with the Prevention of Money Laundering Act or on any other legal basis requested by any state authority. You acknowledge that the funds in your account are consumed instantly when playing and we do not provide return of goods, refunds or retrospective cancellation of your account.</p>

                    <h3>9. PLAYER FUNDS PROTECTION & CHARGEBACKS</h3>
                    <p><b>9.1 </b>Any funds You deposit with us in Your Seabet Account, along with any winnings, are held for You in separate customer bank accounts/crypto wallet for the sole and specific purpose for You to place sports and gaming wagers and to settle any fees or charges that You might incur in connection with the use of our Services. This means Your funds are protected from being used for any other purpose.</p>
                    <p><b>9.2 </b>If we incur any charge-backs, reversals or denial of payments or any loss suffered by Seabet as a consequence thereof due to causes attributable to You in respect of Your Seabet Account, we reserve the right to charge You for the relevant amounts incurred.</p>
                    <p><b>9.3 </b>We may, at any time, set off any positive balance on Your account against any amounts owed by You to Seabet.</p>
                    <h3>10. PLACING BETS/WAGERS</h3>
                    <p><b>10.1 </b>You are allowed to place Your bets/wagers on the markets/products offered in the Website. Seabet is not obliged to accept any bet/wager from You and bets/wagers will only be deemed as valid and finalised, and therefore as accepted by Seabet, when You receive the confirmation from Seabet of the acceptance of Your bet/wager.</p>
                    <p><b>10.2 </b>Seabet only accepts bets/wagers made online (including via mobile device). Bets/wagers are not accepted in any other form (post, email, fax, etc.) and where received will be invalid and void - win or lose.</p>
                    <p><b>10.3 </b>It is Your responsibility to ensure details of the bets/wagers are correct. Once bets/wagers have been placed they may not be cancelled by You. Bets can only be changed by You using our Edit Bet feature, where this is available. Seabet can only cancel or amend a bet/wager if the relevant event has been suspended or cancelled, if there was an obvious error on the relevant bet or its odds, if the bet is placed in breach of the Terms or if required to do so for legal or regulatory reasons.</p>
                    <p><b>10.4 </b>Your funds will be allocated to bets/wagers in the order they are placed and will not be available for any other use. Seabet reserves the right to void and/or reverse any transactions made after a bet/wager has been placed involving allocated funds, either at the time or retrospectively.</p>
                    <h3>11. BET/WAGER CONFIRMATION</h3>
                    <p><b>11.1 </b>Bets/wagers will only be valid once You receive the confirmation of the acceptance of Your bet/wager. Bets/wagers placed with insufficient funds in Your account will be void.</p>
                    <p><b>11.2 </b>A bet/wager that You request will only be valid once accepted by Seabet. Each valid bet/wager will receive a unique transaction code. We shall not be liable for the settlement of any bets/wagers which are not issued with a unique transaction code. If You are unsure about the validity of a bet/wager, please check Your account history, or contact our Customer Support Team (support{'@'}seabet.io).</p>
                    <p><b>11.3 </b>Should a dispute arise regarding the content of a bet, You and Seabet agree that the Seabet transaction log database of its internal control system will be the ultimate authority in such matters.</p>
                    <h3>12. BONUS</h3>
                    <p><b>12.1 </b>Seabet, at its sole discretion, might offer from time to time, a number of Bonuses and Promotions. </p>

                    <p>Eligibility</p>
                    <p><b>12.2 </b>Upon successful registration for a Seabet Account, you may be eligible to receive Seabet Promotions and Bonuses. By accepting this agreement and registering for a Seabet Account on the Website, you are also acknowledging and accepting to be bound by the rules and regulations associated with any Promotions and Bonuses offered to You by Seabet.</p>
                    <p>Bonus T&C</p>
                    <p><b>12.3 </b>All promotions, bonuses, or special offers are subject to the express terms of any bonus offered on the Website(s) and promotion-specific terms and conditions, if applicable, and any bonus credited to Your account must be used in adherence with such terms and conditions. By accepting a promotion, bonus, or special offer available on the Website(s), You consent to the terms and conditions of such promotion, bonus, or special offer and acknowledge that wagers must always be placed with cash balances before bonus balances can be used to wager. We reserve the right to withdraw any promotion, bonus, or special offer at any time.</p>
                    <p>Activation & Expiry</p>
                    <p><b>12.4 </b>By activating a Bonus or Promotion, you confirm that You also agree to the applicable terms and conditions.</p>
                    <p><b>12.5 </b>No promotion, bonus, or special offer will be accepted or honoured by the Seabet following the expiration date of the promotion, bonus, or special offer, unless Seabet in its sole discretion chooses to do so for any particular customer, promotion, bonus, or special offer. Expiration dates will be set forth in the specific rules or terms and conditions of the particular promotion, bonus, or special offer. Furthermore, Seabet reserves the right, in its sole discretion, to change or modify any policy with respect to the earning or expiration of bonuses.</p>
                    <p><b>12.6 </b>Once forfeited or de-activated, the Bonus will no longer be available to You (and cannot be re-activated at any time thereafter). The amount of any Bonus Funds that have already been credited to your Seabet Account Balance will remain available to You.</p>
                    <p>Bonus Abuse & Fraud</p>
                    <p><b>12.7 </b>In the event that Seabet believes a Player of the Service is abusing or attempting to abuse a bonus or other promotion or is likely to benefit through abuse or lack of good faith from a policy adopted by Seabet, then Seabet may, at its sole discretion, deny, withhold, or withdraw from any Player any bonus or promotion, or terminate that Player’s access to the Services, the Software, and/or lock that Player’s account, either temporarily or permanently.</p>
                    <p><b>12.8 </b>You may only open one (1) account on the Website. The opening of multiple accounts on the Website for the purpose of accumulating bonuses, promotions, special offers, or otherwise, shall be considered abusive behaviour.</p>

                    <p>Seabet Rights</p>
                    <p><b>12.9 </b>Seabet reserves the right to remove bonuses from all inactive accounts or accounts that are identified as “bonus abusers”.</p>
                    <p><b>12.10 </b>Seabet reserves the right to cancel all bonuses that have not been claimed within the claiming period or 60 days, the shorter of the two.</p>
                    <p><b>12.11 </b>Seabet reserves the right to cancel any bonus at its sole description.</p>

                    <h3>13. AUTHORITY/TERMS OF SERVICE</h3>
                    <p><b>13.1 </b>You agree to the game rules described on the Seabet.io website. Seabet retains authority over the issuing, maintenance, and closing of the Service. The decision of Seabet's management, concerning any use of the Service, or dispute resolution, is final and shall not be open to review or appeal.</p>

                    <h3>14. PROHIBITED USES</h3>
                    <p>PERSONAL USE</p>
                    <p><b>14.1 </b>The Service is intended solely for the User's personal use. The User is only allowed to wager for his/her personal entertainment. Users may not create multiple accounts for the purpose of collusion, sports betting and/or abuse of service.</p>

                    <p>AML & SANCTIONS COMPLIANCE</p>
                    <p><b>14.2 </b>Seabet expressly prohibits and rejects the use of the Service for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations, consistent with various jurisdictions' laws, regulations and norms. To that end, the Service is not offered to individuals or entities subject to United States, European Union, or other global sanctions or watch lists. By using the Service, you represent and warrant that you are not so subject.</p>
                    <p>JURISDICTIONS</p>
                    <p><b>14.3 </b>Persons located in or reside in Afghanistan, Australia, Belarus, Belgium, Côte d'Ivoire, Cuba, Curaçao, Czech Republic, Democratic Republic of the Congo, Denmark, France, Germany, Greece, Iran, Iraq, Italy, Liberia, Libya, Lithuania, Netherlands, North Korea, Ontario, Portugal, Serbia, Slovakia, South Sudan, Spain, Sudan, Syria, Switzerland, United Kingdom, United States, Zimbabwe (the "Prohibited Jurisdictions") are not permitted make use of the Service. For the avoidance of doubt, the foregoing restrictions on engaging in real-money play from Prohibited Jurisdictions applies equally to residents and citizens of other nations while located in a Prohibited Jurisdiction. Any attempt to circumvent the restrictions on play by any persons located in a Prohibited Jurisdiction or Restricted Jurisdiction, is a breach of this Agreement. An attempt at circumvention includes, but is not limited to, manipulating the information used by Seabet to identify your location and providing Seabet with false or misleading information regarding your location or place of residence.</p>

                    <p><b>14.4 </b>The attempt to manipulate your real location through the use of VPN, proxy, or similar services or through the provision of incorrect or misleading information about your place of residence, with the intent to circumvent geo-blocking or jurisdiction restrictions, constitutes a breach of Clause 5 of this Terms of Service.</p>

                    <h3>15. YOUR EQUIPMENT</h3>
                    <p><b>15.1 </b>Your computer equipment or mobile device and internet connection may affect the performance and/or operation of the Website. Seabet does not guarantee that the Website will operate without faults or errors or that Seabet services will be provided without interruption. Seabet does not accept any liability for any failures or issues that arise due to Your equipment, internet connection or internet or telecommunication service provider (including, for example, if You are unable to place bets or wagers or to view or receive certain information in relation to particular events).</p>
                    <p><b>15.2 </b>For customers using a mobile device for the placing of bets/wagers, please note that Seabet will not be responsible for any damage to, or loss of data from the mobile device that the software is installed on, and will also not be responsible for any call, data or other charges incurred whilst using the software.</p>
                    <p><b>15.3 </b>Due to limited display sizes on mobile devices, the mobile experience might differ slightly from other platforms. Differences might include, but are not limited to, the location of certain information on the platform and game names not being visible on all game pages.</p>

                    <h3>16. FAIR USE</h3>
                    <p><b>16.1 </b>The Website and Services may only be used for recreational purposes by placing bets and wagers on events and/or gaming products.</p>
                    <p><b>16.2 </b>You must not use the Website for the benefit of a third party or for any purpose which is illegal, defamatory, abusive or obscene, or which Seabet considers discriminatory, fraudulent, dishonest or inappropriate. Seabet may report to the authorities any activity which it considers to be suspicious and/or in breach of this paragraph.</p>
                    <p><b>16.3 </b>If Seabet has a reasonable suspicion that You are involved in fraudulent, dishonest or criminal acts, as set out under applicable laws, via or in connection with the Website or Services, Seabet may seek criminal and contractual sanctions against You. Seabet will withhold payment to any customer where any of these are suspected or where the payment is suspected to be for the benefit of a third party.</p>
                    <p><b>16.4 </b>You shall indemnify and shall be liable to pay Seabet, on demand, all costs, charges or losses sustained or incurred by us and our affiliates (including any direct, indirect or consequential losses, loss of profit and loss of reputation) in respect of all Claims arising directly or indirectly from Your fraudulent, dishonest or criminal acts while using the Website or Services</p>
                    <p><b>16.5 </b>Furthermore, we reserve the right not to accept, process and/or honour bets/wagers where it would be forbidden, unlawful or illegal under applicable law or regulation to do so.</p>

                    <h3>17. SOFTWARE AND TECHNOLOGY ISSUES</h3>
                    <p><b>17.1 </b>In order for You to use the Website and Services, You may need to download some software (for example, casino games that are made available via a flash player). Also, certain third-party product providers may require You to agree to additional terms and conditions governing the use of their products that are available on or through the Website. If You do not accept those third-party terms and conditions, do not use the relevant third-party software. Seabet does not accept any liability in respect of any third-party software.</p>
                    <p><b>17.2 </b>You are only permitted to use any and all software made available to You via the Website for the purpose of using the Website and Services and, save to the extent permitted by applicable law, for no other purposes whatsoever.</p>
                    <p><b>17.3 </b>We hereby grant to You a personal, non-exclusive, non-transferable right to use the Website for the sole purpose of accessing and using the Services on the Website, in accordance with these Terms and Conditions. This right to use our Website and will be immediately terminated once Your user registration is cancelled for any reason, and specially, but not limited to, if You make use of that right with the aim of generating a parallel enterprise based in our Website or our products, or with the aim of making use of an automated service or software analysing, capturing or somehow using the information shown in our Website.</p>
                    <p><b>17.4 </b>You are not permitted to:</p>
                    <p>a) install or load the software that forms part of the Website onto a server or other networked device or take other steps to make the software available via any form of "bulletin board", online service or remote dial-in or network to any other person;</p>
                    <p>b) sub-license, assign, rent, lease, loan, transfer or copy (except as expressly provided elsewhere in these Terms and Conditions) Your right to use the Website, or the software that forms part of the Website, or make or distribute copies of same;</p>
                    <p>c) enter, access or attempt to enter or access or otherwise bypass Seabet’s security system or interfere in any way (including but not limited to, robots or similar devices) with the products or the Website or attempt to make any modifications to the software and/or any features or components thereof;</p>
                    <p>d) copy or translate any user documentation provided 'online' or in electronic format.</p>
                    <p>e) In addition, except to the minimum extent permitted by applicable law in relation to computer programs, You are not permitted to: (i) translate, reverse engineer, decompile, disassemble, modify, create derivative works based on, or otherwise modify the Website; or (ii) reverse engineer, decompile, disassemble, modify, adapt, translate, make any attempt to discover the source code of the software that forms part of the Website or to create derivative works based on the whole or on any part of the Website.</p>
                    <p><b>17.5 </b>You do not own the software that forms part of the Website. Such software is owned and is the exclusive property of Seabet or a third-party software provider company (any such third-party provider, the "Software Provider"). Any software and accompanying documentation which have been licensed to Seabet are proprietary products of the Software Provider and protected throughout the world by copyright law. Your use of the software does not give You ownership of any intellectual property rights in the software.</p>
                    <p><b>17.6 </b>The software is provided "as is" without any warranties, conditions, undertakings or representations, express or implied, statutory or otherwise. Seabet hereby excludes all implied terms, conditions and warranties, including any of merchantability, merchantable quality, satisfactory quality and fitness for any particular purpose, completeness or accuracy of the services or the software or infringement of applicable laws and regulations. Seabet does not warrant or condition that: </p>
                    <p>(i) the software will meet Your requirements; </p>
                    <p>(ii) the software will not infringe any third party’s intellectual property rights; </p>
                    <p>(iii) the operation of the software will be error free or uninterrupted; (iv) any defects in the software will be corrected; or </p>
                    <p>(v) the software or the servers are virus-free.</p>

                    <p><b>17.7 </b>In the event of communications or system errors occurring in connection with the settlement of accounts or other features or components of the software, neither Seabet nor the Software Provider will have any liability to You or to any third party in respect of such errors. Seabet reserves the right in the event of such errors to remove all relevant products from the Website and take any other action to correct such errors.</p>
                    <p><b>17.8 </b>You hereby acknowledge that how You use the software is outside of Seabet’s control. Accordingly, You install and/or use the software at Your own risk. Seabet will not have any liability to You or to any third party in respect of Your receipt of and/or use of the software.</p>
                    <p><b>17.9 </b>The software may include confidential information which is secret and valuable to the Software Provider and/or Seabet. You are not entitled to use or disclose that confidential information other than strictly in accordance with these Terms and Conditions.</p>
                    <p><b>17.10 </b>Seabet shall not be liable if for any reason the Website is unavailable at any time or for any period. We reserve the right to make changes or corrections to or to alter, suspend or discontinue any aspect of the Website and the content or services or products available through it, including Your access to it.</p>
                    <p><b>17.11 </b>You must not misuse the Website by introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. In particular, You must not access the Website without authority, interfere with, damage or disrupt the Website or any part of it, any equipment or network on which the Website is hosted, any software used in connection with the provision of the Website, or any equipment, software or website owned or used by a third party. You must not attack our Website via a denial-of-service attack. We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect Your computer equipment, computer programs, data or other proprietary material arising due to Your use of the Website, software or to Your downloading of any material posted on it, or on any website linked to it.</p>

                    <h3>18. THIRD PARTY CONTENT</h3>
                    <p><b>18.1 </b>Seabet receives feeds, commentaries and content from a number of suppliers. Certain third-party product providers may require You to agree to additional terms and conditions governing the use of their feeds, commentaries and content. If You do not accept the relevant third-party terms and conditions, You agree to not use the relevant feeds, commentaries or content.</p>
                    <p><b>18.2 </b>Seabet does not accept any liability in respect of any third-party feeds, commentaries and content.</p>
                    <p><b>18.3 </b>Where the Website contains links to third party websites and resources, these links are provided for Your information only. Seabet has no control over the content of these sites or resources, and accepts no liability for them or for any loss or damage that may arise from Your use of them. The inclusion of a link to a third-party website does not constitute an endorsement of that third party’s website, product or services, if applicable.</p>

                    <h3>19. ERRORS</h3>
                    <p><b>19.1 </b>Seabet will not be liable in the event You try to or obtain an advantage from any errors in respect of bets or wagers on the Website if You were deliberately acting in bad-faith, including where: </p>
                    <p>(i) there is an obvious error in the relevant odds, spreads, handicap, totals, cash-out; </p>
                    <p>(ii) Seabet continues to accept bets or wagers on closed or suspended markets; </p>
                    <p>(iii) Seabet incorrectly calculates or pays a settlement amount, including where a bet is Cashed Out for the full settlement amount, or a bet is made void incorrectly, where ‘Void if player does not start’ was selected at bet placement; or </p>
                    <p>(iv) any error occurs in a random number generator or pay tables included, incorporated or used in any game or product.</p>

                    <h3>20. BREACH</h3>
                    <p><b>20.1 </b>Without prejudice to any other rights, if a user breaches in whole or in part any provision contained herein, Seabet reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User.</p>
                    <p><b>20.2 </b>You agree to fully indemnify, defend and hold harmless Seabet and its shareholders, directors, agents and employees from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever, howsoever caused, that may arise as a result of:</p>
                    <p>a) your breach of this Agreement, in whole or in part;</p>
                    <p>b) violation by you of any law or any third-party rights; and</p>
                    <p>c) use by you of the Service.</p>



                    <h3>21. LIMITATIONS AND LIABILITY</h3>
                    <p><b>21.1 </b>Under no circumstances, including negligence, shall Seabet be liable for any special, incidental, direct, indirect or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use (or misuse) of the Service even if Seabet had prior knowledge of the possibility of such damages.</p>
                    <p><b>21.2 </b>Nothing in this Agreement shall exclude or limit Seabet's liability for death or personal injury resulting from its negligence.</p>

                    <h3>22. INTELLECTUAL PROPERTY</h3>
                    <p><b>22.1 </b>Seabet and its licensors are the sole holders of all rights in and to the Service and code, structure and organisation, including copyright, trade secrets, intellectual property and other rights. You may not, within the limits prescribed by applicable laws: </p>
                    <p>(a) copy, distribute, publish, reverse engineer, decompile, disassemble, modify, or translate the website; or </p>
                    <p>(b) use the Service in a manner prohibited by applicable laws or regulations (each of the above is an "Unauthorised Use"). </p>
                    <p>Seabet reserves any and all rights implied or otherwise, which are not expressly granted to the User hereunder and retain all rights, title and interest in and to the Service. You agree that you will be solely liable for any damage, costs or expenses arising out of or in connection with the commission by you of any Unauthorized Use. </p>
                    <p>You shall notify Seabet immediately upon becoming aware of the commission by any person of any Unauthorised Use and shall provide Seabet with reasonable assistance with any investigations it conducts in light of the information provided by you in this respect.</p>
                    <p><b>22.2 </b>The term "Seabet", its domain names and any other trade marks, or service marks used by Seabet as part of the Service (the "Trade Marks"), are solely owned by Seabet. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio and text (the "Site Content") belongs to Seabet and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trade Marks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Seabet's prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Seabet.</p>

                    <h3>23. DISPUTES</h3>
                    <p><b>23.1 </b>If a User wishes to make a complaint, please contact Seabet's customer service team at (support{'@'}seabet.io). Should any dispute not be resolved to your satisfaction you may pursue remedies in the governing law jurisdiction set forth below.</p>

                    <h3>24. AMENDMENT</h3>
                    <p><b>24.1 </b>Seabet reserves the right to update or modify this Agreement or any part thereof at any time or otherwise change the Service without notice and you will be bound by such amended Agreement upon posting. Therefore, we encourage you check the terms and conditions contained in the version of the Agreement in force at such time. Your continued use of the Service shall be deemed to attest to your agreement to any amendments to the Agreement.</p>

                    <h3>25. SEVERABILITY</h3>
                    <p><b>25.1 </b>If a provision of this Agreement is or becomes illegal, invalid or unenforceable in any jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other provision hereof or the validity or enforceability in other jurisdictions of that or any other provision hereof.</p>

                    <h3>26. ASSIGNMENT</h3>
                    <p><b>26.1 </b>Seabet reserves the right to assign this agreement, in whole or in part, at any time without notice. The User may not assign any of his/her rights or obligations under this Agreement.</p>

                    <h3>27. MISCELLANEOUS</h3>
                    <p><b>27.1 </b>No waiver by Seabet of any breach of any provision of this Agreement (including the failure of Seabet to require strict and literal performance of or compliance with any provision of this Agreement) shall in any way be construed as a waiver of any subsequent breach of such provision or of any breach of any other provision of this Agreement.</p>
                    <p><b>27.2 </b>Nothing in this Agreement shall create or confer any rights or other benefits in favour of any third parties not party to this Agreement.</p>
                    <p><b>27.3 </b>Nothing in this Agreement shall create or be deemed to create a partnership, agency, trust arrangement, fiduciary relationship or joint venture between you and Seabet.</p>
                    <p><b>27.4 </b>Seabet may assign, transfer, charge, sub-license, or deal in any other manner with this Agreement, or sub-contract any of its rights and obligations under this Agreement, to any other party.</p>
                    <p><b>27.5 </b>This Agreement constitutes the entire understanding and agreement between you and Seabet regarding the Service and supersedes any prior agreement, understanding, or arrangement between you and Seabet.</p>

                    <h3>28. COMPLAINTS</h3>
                    <p><b>28.1 </b>If you have a complaint to make regarding our services, you may contact our customer support via Live Chat or by email (support{'@'}seabet.io). We will endeavour to resolve the matter promptly.</p>

                  </div>`,
    responsibleContent: `<div>
                          <h2>Responsible Gambling</h2>

                          <p>In Seabet.io; The platforms and services we provide enable our customers to enjoy gaming and betting. Our goal is to provide you with a safe, secure, regulated environment that provides you with a pleasant and rewarding experience. We encourage our customers to use our services responsibly and reasonably.</p>
                          <p>All kinds of casino games have been popular for many years, and in Seabet.io games are designed to bring fun to everyone. We also encourage our players to have fun without letting the game interfere with their daily lives and take up time with family and friends. It's important to make sure that the amount spent on the game is only the change or spare money left after all expenses in your life, and it's important that the game is not a means of making a living because you can't guarantee a profit from it.</p>
                          <p>Although most players will play responsibly and normally. But unfortunately, there are a small number of players who may have the problem of indulging in gambling. </p>
                          <p>At Seabet.io, the quality of life/psychology of our players is important to us and we take our role in responsible gambling very seriously and advise you :</p>
                          <ul>
                            <li>Think of your bets and games as a form of entertainment, using only the money you set aside for entertainment.</li>
                            <li>Do not place bets or bet more than you can afford.</li>
                            <li>Don't bet or bet with money you can't afford to lose.</li>
                            <li>Don't chase your losses.</li>
                            <li>Don't let your bets and/or games take away time you normally spend on other activities.</li>
                          </ul>

                          <p>If you have any concerns about your gambling habits and feel that you are unable to follow these recommendations, we strongly recommend that you seek advice from the following accredited organisations that can provide help and advice:</p>

                          <ul>
                            <li><a target="_blank" href="https://www.gamcare.org.uk/">GamCare</a></li>
                            <li><a target="_blank" href="https://keepitfun.rank.com/">Keep It Fun</a></li>
                            <li><a target="_blank" href="https://www.gamblingtherapy.org/">Gambling Therapy</a></li>
                          </ul>

                          <p>In addition, if you would like to learn about our self-exclusion process, you can email (support{'@'}seabet.io) our friendly Seabet.io customer service. Sometimes a short break can help you settle your thoughts and stop you from making any rash betting decisions that don't match your usual.</p>
                          <p>Upon request, we will place your account with a cooling-off period of at least 24 hours. Subsequently, one of our support agents will notify you of the available voluntary 1 week, 1 month, 3 months, 6 months, or permanent self-exclusion.</p>
                          <p>Please note; Accounts closed under our self-exclusion policy cannot be revoked or reopened for any reason. However, once your self-exclusion expires, we will send you an email letting you know that your account is active again. Permanent self-exclusion will exist indefinitely.</p>

                          <p>Underage</p>
                          <p>If you wish to gamble with us in Seabet.io, you must be at least 18 years of age or the legal minimum gambling age (if lesser) in the jurisdiction in which you hold under the laws applicable to you.</p>

                          <p>We recommend that if you have any minors in your home, check out the following links to parental control software, which can be a useful tool for controlling and limiting what can be accessed on your device.</p>

                          <ul>
                            <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                            <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                          </ul>
                        </div>`,
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
    selfExclusionContent: `<div>
                            <h2>Self-Exclusion Policy</h2>
                            <p>If you feel you are no longer able to control your gambling or gamble safely, we offer you the option to self-exclude from betting with us. To begin the cooling off period as outlined below, please visit your account preferences.</p>

                            <h3>1. Overview</h3>
                            <p>For the majority of people, gambling is an enjoyable leisure and entertainment activity. But for some, gambling can have negative impacts. As a result, we have developed this policy to communicate our approach to responsible gambling and minimizing harm to consumers who may be vulnerable to problem gambling.</p>

                            <h3>2. What is Responsible Gambling?</h3>
                            <p>“Responsible Gambling” is a broad concept that aims to ensure gambling is conducted in a manner whereby the potential for harm associated with problem gambling is minimized. It respects the responsibility of individuals for their own actions, but also acknowledges a responsibility on the part of service providers.</p>

                            <h3>3. What is Problem Gambling?</h3>
                            <p>Problem gambling occurs when a person loses control over their gambling, particularly the amount of money gambled and the amount of time devoted to gambling.</p>

                            <h3>4. Customer Care Principles</h3>
                            <p>At Seabet.io, we want to be an industry leader in providing a safe environment for our customers. We actively encourage and promote responsible gambling practices and provide tools to assist our customers in maintaining control of their gambling.</p>

                            <h3>5. Responsible Gambling Policy</h3>
                            <p>We are committed to sharing responsibility, with Governments and communities and individuals, for helping customers control their gambling, and helping problem gamblers to identify their problem and seek assistance.</p>
                            <p>Some of the ways that we do this are: i. allowing our customers to self-exclude (either temporarily or permanently) from betting with us; ii. providing Responsible Gambling information and messages to our customers; iii. training our staff about Responsible Gambling at induction and at least once each year; iv. and referring our customers affected by problem gambling to gambling-related support services.</p>
                            <p>We aim to achieve the following outcomes:</p>
                            <ul>
                              <li>Minimizing the extent of gambling related harm to individuals and the broader community;</li>
                              <li>Enabling customers to make informed decisions about their gambling practices; </li>
                              <li>Enabling people adversely affected by gambling to have access to timely and appropriate assistance and information; </li>
                              <li>Promoting a shared understanding between individuals, communities, the gambling industry and Government of responsible gambling practices; </li>
                              <li>Ensuring the gambling industry provides safe and supportive environments for the delivery of gambling products and services.</li>
                            </ul>

                            <h3>6. Minors</h3>
                            <p>As a responsible operator, we are committed to protecting minors by actively taking steps to exclude minors from placing a wager using our betting platforms. Our services are designed to appeal to, and be used by persons who are at least 18 years old.</p>

                            <h3>7. Filtering Options</h3>
                            <p>Filtering options can be enabled to help prevent persons from entering online casinos or online sports betting websites. If minors have access to the device that you use to access our betting platforms, we encourage you to use filtering software to prevent access to our betting platforms by minors.</p>

                            <h3>8. Additional Help</h3>
                            <p>In the case of needed help please contact our support team at support{'@'}seabet.io or on our live chat system and one of our agents will be able to give you the details of associations and help phone numbers available in your country.</p>

                            <h3>9. Conditions and Processes</h3>
                            <p>To self-exclude means to stop betting or gambling for a set time. Self-exclusion can be temporary or permanent.</p>
                            <p>By requesting one of our self-exclusion time periods on offer you agree to the following terms and conditions, which will be effective from the minute you receive a confirmation email of your chosen self-exclusion, this email will be sent to the email address used to register your account only and will display the date of self-exclusion completion.</p>
                            <p>Requests made via our Chat function will not be actioned. However, a customer support agent will direct you to our customer support email service.</p>
                            <p>On receipt of an email request for account closure, the requested account and any linked accounts will be placed on our first stage, 24-hr cooling off period which will disable your account or accounts, allowing no gambling activity. Once this time has passed; while your account or accounts remain closed, a customer support agent will inform you of the 1-week, 1-month, 6-months and permanent self-exclusions available. There will be no variation of these time periods. To proceed with this process, we will require an email response. If we do not receive a response within a further 24 - hrs, your account will be reopened and confirmed by email.</p>

                            <p>If after reviewing our self-exclusion options you decide you would like to proceed with a permanent self-exclusion, you will be required to set an exclusion period when prompted. On occasion, we might decide to place an account on a short self-exclusion period if we believe it to be needed and or beneficial to the customer. This will be communicated by email; the above terms and conditions will apply.</p>

                            <p>You are not permitted to leave any balance in your account during a self-exclusion time period. You will not be able to access your account to withdraw any funds during your requested self-exclusion. If you have an account affected by a self-exclusion that has any active bets, the Cash Out function will be applied at the point of self-exclusion confirmation. Bets will not be void; stakes will not be returned or remain active throughout a self-exclusion time period. Bets will not be reinstated after a self-exclusion completion. While Self Excluded, you are not eligible for any form of benefits, bonuses or reloads.</p>

                            <p>Once a self-exclusion is applied to your account, it will stay in place until the request time has finished, it will not be reversed or decreased for any reason. Permanent self-exclusions will remain closed indefinitely.</p>

                            <p>We will use all reasonable endeavours to ensure compliance with our responsible gambling self-exclusion policy. However, you accept that we will not be held responsible or liable if you attempt to open any new account or indeed succeed. In addition, we will not be held liable or accountable if you continue to deposit and wager using additional accounts which have previously not been disclosed. Any future wagers, Reward funds and entries in any promotions during a requested self-exclusion time will be forfeited, resulting in no return of stakes or payment of winnings. We will not be able to reinstate these if the account is reopened after the self-exclusion period. After self-exclusion you acknowledge that:</p>

                            <p>You should not attempt to, deposit or place any wager on any of your accounts from which you have requested to be excluded during your selected self-exclusion.</p>

                            <p>You should not attempt or proceed to open any new accounts during your self-exclusion period, or indefinitely if a permanent self-exclusion has been selected.</p>

                            <p>If you succeed in opening a new account during a self-exclusion period, we will endeavour to close any and all such accounts at our earliest detection.</p>
                            <p>Our responsibility is only to take reasonable steps to prevent you from gambling on any of our products. It is also the customer’s responsibility to refrain from breaching these agreed terms.</p>

                            <p>A self-exclusion request is a voluntary request made by you. If you proceed to act contrary to such a request, nor any of its employees or affiliated persons shall be held accountable or liable for any losses you may suffer. Any losses incurred during yourself-exclusion period will not be refunded.</p>

                            <p>If you act contrary to a self-exclusion request, we retain discretion to terminate or void any wagers you have placed and to take other appropriate action. Also, if we have suspicions or further investigation provides evidence that you have actively attempted to disguise the source of your account or accounts, which affects our ability to block your account or accounts promptly, the company retains discretion to terminate or void any wagers you have placed and to take other appropriate action.</p>

                            <p>Once your selected self-exclusion has come to an end, your account will automatically be reopened. However, you will receive an email confirmation of this information which will be sent to your registered email address.</p>
                          </div>`,
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
                      <p>Users can access the personal information collected by Seabet.io by clicking on the "Settings" link on the website or by sending an email to the support{'@'}Seabet.io. We will respond to the user's access request within a reasonable period of time. If we are unable to comply with your request, we will inform you in writing of the reasons for the denial of access and the complaint mechanism.</p>
                      <h3>8. Removal of personal data</h3>
                      <p>If it is no longer possible to lawfully process or store the user's personal data, the user has the right to request its deletion. However, this right is not absolute and if Seabet.io are subject to legal obligations, it will not be able to meet the user's requirements. Please make a request by sending an email to support{'@'}Seabet.io.</p>
                      <h3>9. Contact</h3>
                      <p>If you have any questions, requests or complaints about our processing of your personal information, please contact us via email support{'@'}Seabet.io or the website customer support chat function.</p>



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

                        <p><b>3.7 </b>If you do not use an account with a positive balance for a period of 3 months, you will be notified by us. If you do not use your balance within 1 month of our notification, we may remove the balance from your account to protect your funds. If this happens, please contact us at support{'@'}seabet.io Reopen your account and get your funds back. </p>

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
