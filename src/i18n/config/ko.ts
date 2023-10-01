const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: '홈',
  search: '검색',
  promo: '프로모션',
  support: '서포트',
  onlineSupport: '온라인서포트',
  accountMenu: '내 거',
  account: '어카운터',
  confirm: '확인',
  confirmd: '확인됨',
  all: '전부',
  save: '보존',
  cancel: '취소',
  close: '닫음',
  start: '시작',
  loading: '로딩',
  end: '종료',
  to: ' 까지 ',
  or: '혹은',
  and: '그리고',
  at: '에서',
  goto: '로 이동',
  refreshSuccess: '새로고침 성공',
  loadingFail: '로딩실패',
  noMore: '더이상 없음',
  login: '로그인',
  otherMethod: '다른방식',
  reg: '등록',
  userName: '유저네임',
  email: '이메일',
  sendEmail: '인증메일발송',
  sended: '발송완료',
  emailCaptcha: '이메일보안문자',
  password: '비밀번호',
  forgetPassword: '비밀번호를 잊으셨나요?',
  resetPwd: '비밀번호 재설정',
  noUser: '유져 없음',
  createUser: '유져 생성',
  googleCode: '구글코드',
  inputGoole: '구글코드입력',
  partner: '공식파트너：',
  date: '날짜',
  day: '일',
  month: '월',
  year: '년',
  birthday: '출생일자',
  telephone: '전화',
  country: '국가',
  hasAccount: '이미 어카운터가있나요？',
  logout: '로그아웃',
  address: '주소',
  zipCode: '우편번호',
  loginPage: {
    useGoogle: '구글코드 사용',
    userNameOrEmail: '유저네임 혹은 이메일'
  },
  regPage: {
    holderUserName: '유저네임생성',
    holderEmail: `예:you{'@'}example.com`,
    holderTelephone: 'TEL(+66 xxxxxxxxxxx)',
    isAdult: '만18세 이상 임을 확인 했으며,동의합니다',
    termCondition: '이용약관',
    privacyPolicy: '프라이버시 정책',
    isAgree: `나는${site_name}의 프로모션 활동 관련한 시장정보를 받는 것에 동의 합니다`
  },
  thirdRegPage: {
    beFinished: '곧 완성됩니다!',
    fixInfo: '추가로 자료를 완성해 주세요'
  },
  myprfile: '나의 프로파일',
  clubLevel: '클럽레벨',
  userLevels: {
    '101': '강철',
    '102': '청동',
    '103': '백은',
    '104': '황동',
    '105': '백금',
    '106': '티타늄',
    '107': '다이아몬드'
  },
  homePage: {
    currentMultiplier: '현재포인트배수',
    nextReward: '다음레벨의 보너스',
    showProgress: '나의 진행상황을 보여줌'
  },
  userAccount: '유져어카운터',
  wallet: '지갑',
  myBets: '베팅기록',
  rewards: '보너스',
  notifications: '알림',
  // 검색
  noSearchResult: '죄송합니다，"{ keyword }" 에 부합하는 결과가 없습니다。다른 검색단어로 시도해 주세요。',
  searchResultNum: '{ searchResult }의 결과를 찾았습니다',
  // 프로모션 세부정보
  promoDetail: '프로모션 세부정보',
  // 클럽
  club: '클럽',
  tiers: '레벨',
  clubTips: '매월 회원들의 보너스는 초기화 됩니다. 매월 마지막일자 전에 보너스를 수령하시길 바라며, 아무쪼록 보너스를 놓치지 않기를 부탁드립니다.。',
  currentPoints: '현재 베팅 금액',
  currentPointsMultiplier: '현재 포인트배수',
  receiveReward: '보너스받기',
  alreadyReceived: '이미받음',
  mergedReards: '이미 다음레벨까지 누계로 합쳐 받음',
  noReward: '현재 보너스가 없습니다.다음 레벨로 올라가시면, 첫 보너스가 잠금해제 됩니다.',
  // vip클럽
  vipClub: 'VIP 클럽',
  // 포인트 쇼핑센터
  mallStore: '포인트 쇼핑센터',
  // 계정설정
  generalInformation: '일반정보',
  changePassword: '비밀번호변경',
  googleAuthenticator: '구글인증시스템',
  privacySetting: '프라이버시 설정',
  currentPwd: '현재비밀번호',
  newPwd: '새비밀번호',
  confirmPwd: '비밀번호재확인',
  changePwdLimit: '귀하의 자금 보안을 보장하기 위해 비밀번호를 변경한 후 24시간 동안 새로운 지갑 주소로 인출할 수 없습니다.',
  disabledGoogle: '구글인증을 사용 할수 없습니다.',
  activeGoogle: '구글인증을 이용,QR코드를 스캔하거나 코드를 입력해서 활성화 해 주세요.',
  whatGoogleCode: 'Google 인증자란 무엇인가요?',
  typeCode: '코드입력',
  submitCode: '코드제출',
  keyValue: '핵심가치',
  // 공고
  notice: '공고',
  mail: '메세지',
  makeAllRead: '모두읽음',
  noMessage: '메세지 없음',
  // 보너스
  claimReward: '보너스 받기',
  claimNewReward: '새보너스 받기',
  rewardCode: '보너스 코드',
  claim: '받기',
  recentTransaction: '최근거래',
  // 검색
  searchHolder: '게임、광장',
  searchMore: '더욱많은 검색',
  searchRecommend: '검색추천',
  enter: '들어가다',
  // fund
  fundAccount: '자금계좌',
  activeBalance: '잔액',
  balance: '잔액',
  deposit: '입금',
  buyCrypto: '암호화폐구매',
  withdraw: '출금',
  youDepositAddress: '입금주소',
  minDepositAmount: '최소입금금액',
  quickTips: '빠른팁',
  quickTipCont: '자금을 이체 하실때, 반드시 출납카운터의 최신지갑주소를 사용해 주세요.',
  promoCode: '우대코드',
  currentBalance: '현재잔액',
  myRewards: '나의 보너스',
  transactionHistory: '거래내역',
  supportSettings: '서포트설정',
  walletSettings: '지갑설정',
  faq: '도움',
  liveSupport: '라이브서포트',
  chooseCrypto: '선호통화 선택',
  cryptoCurrency: '암호화폐',
  bank: '은행',
  chooseDepositChain: '입금체인선택',
  confirmDepositAddress: '거래를 집행하기전 회원님의 입금 지갑주소를 확인해 주세요.',
  recommendExchange: '우리가 추천하는 거래소로부터 암호화폐 구입',
  // 거래기록
  deposits: '입금',
  withdrawals: '출금',
  bets: '베팅',
  wins: '보너스당첨',
  currencyFilter: '화폐별 필터링',
  dateFilter: '일자별 필터링',
  winLose: '승패',
  nodata: '기록없음',
  // 지갑설정
  currency: '통화',
  btcUnit: '비트코인 유닛',
  // 출금
  inputAmount: '금액입력',
  walletDetails: '지갑세부정보',
  walletDetailsBig: '지갑세부정보',
  waitingResults: '검토결과 대기',
  withdrawUsdt: ' {curreny} 출금',
  amount: '금액',
  minWithdrawAmount: '최소출금금액',
  next: '다음',
  youWithdrawAddress: '회원님의 출금지갑주소',
  payto: '~에 지불하다',
  checkWithdrawAddress: '거래집행전 반드시 출금지갑 주소를 확인해 주세요.',
  previewWithdraw: '출금미리보기',
  confirmWithdrawInfo: '모든 자료가 정확한지 확인해 주세요',
  network: '인터넷',
  withdrawing: '출금진행중',
  summary: '요약',
  transactionType: '거래유형',
  finalBalance: '최종잔액',
  backToFund: 'FUND로 돌아가기',
  chooseWithdrawChain: '출금체인선택',
  confirmWithdrawAddress: '거래집행전 회원님의 출금지갑 주소를 확인해 주세요',
  walletAddress: '지갑주소',
  walletAddressBig: '지갑주소',
  tradeStatus: { 1: '미완성', 2: '확인됨', 3: '삭제됨' },

  // 首页
  readMore: '세부내용 보기',
  sports: '스포츠',
  liveCasino: '라이브카지노',
  slots: '슬롯머신',
  sbSport: 'SB스포츠',
  fbSport: 'FB스포츠',
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
  globalPaymentSolutions: '글로벌결재 해결방안',
  otherPayment: '다른결재방식',
  sportsBet: '스포츠베팅',
  liveCasinoBet: '라이브카지노베팅',
  slotBet: '슬롯베팅',
  more: '더 많이',
  loadMore: '로드를 더많이..',
  providers: '제공업체',
  allProviders: '모든제공업체',
  sortBy: '정렬',
  polular: '인기',
  promotions: '프로모션',
  aboutUs: '우리에 대해',
  selectLanguage: '언어선택',
  ruleTerms: '이용약관',
  responsibleGambling: '책임있는 갬블링',
  amlPolicy: '자금세탁방지정책',
  selfExclusion: '자기배제',
  privacyPolicy: '프라이버시 정책',
  fairness: '공평성',
  game: '게임',
  followUs: '우리를 지켜봐 주세요',
  language: '언어',
  helpCenter: '지원센터',
  acceptCrypto: '이용가능한 암호화폐',
  licencesSecurity: '라이센스 및 세큐리티',
  gameBig: '게임',
  userBig: '유저',
  payoutBig: '결재',
  betUser: '베팅유저',
  multiplier: '배당율',
  paymentAmount: '결재금액',
  invisibility: '투명화',
  currencyLang: {
    usdt: '테더',
    btc: '비트코인',
    eth: '이더리움',
    busd: '바이낸스 USD',
    trx: '트론',
    xrp: '리플',
    bnb: '바이낸스 코인',
    ltc: '라이트코인',
    ada: 'Cardano',
    doge: '도지코인',
    ton: '톤코인',
    usd: '미국달러',
    cny: '인민폐'
  },
  // 포인트 쇼핑센터
  points: '포인트',
  pointsNum: '포인트수량',
  earnPoints: '획득',
  pointType: '타입',
  spentPoints: '사용한 포인트',
  afterPoints: '변경후포인트',
  createTime: '시간생성',
  pointsType: {
    '1': '베팅',
    '2': '물품교환',
    '3': '할인활동',
    '4': '시스템 추가',
    '5': '시스템 공제',
    '6': '교환취소'
  },

  // 게임제공업체
  provider: {
    all: '전부',
    sabaSports: 'Saba Sports',
    btiSports: 'Seabet Sports',
    fbSports: 'FB스포츠',
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

  // 데이터검증 프롬프트
  tips: {
    // 유져-로그인 회원가입
    inputAccount: '유져ID를 입력해 주세요',
    isAccount: '유져ID는 영문이나 숫자 5~12개 조합이어야 합니다.',
    inputPassword: '비밀번호를 입력해 주세요',
    isPwd: '비밀번호는 반드시 영문이나 숫자 6-16개 조합이어야 합니다.',
    pwdNotMatch: '두번 입력한 비밀번호 불일치',
    googleCode: '구글인증코드는 반드시 6개 숫자임',
    loginFail: '로그인실패',
    inputEmail: '이메일 입력',
    isEmail: '이메일형식 오류',
    inputEmailcapcha: '이메일 인증번호를 입력해 주세요',
    inputDay: '출생일을 선택해 주세요',
    inputMonth: '출생월을 선택해 주세요',
    inputYear: '출생년을 선택해 주세요',
    inputCountryCode: '국가코드를 입력해 주세요',
    inputphoneNumber: '핸드폰번호를 입력해 주세요',
    inputAddress: '주소를 입력해 주세요',
    inputZipCode: '우편번호를 입력해 주세요',
    userNameExist: '유져ID가 이미 존재 합니다',
    emailExist: '이메일이 이미 존재 합니다',
    emailNotExist: '이메일이 존재하지 않습니다',
    isAudit: '법적 성인이며 개인 정보 보호 정책을 수락하는 것을 확인하십시오.',
    isAgree: '관련 마케팅 캠페인 정보를 읽고 승인해 주세요.',
    regSuccess: '등록성공',
    regFail: '등록실패',
    loginSuccess: '로그인성공',
    sendSuccess: '발송성공',
    resetSuccess: '비밀번호 초기화 성공, 재로그인 부탁드립니다.',
    resetFail: '비밀번호 초기화실패',
    sendFail: '발송실패',
    editUserInfoSuccess: '유져정보 수정성공',
    inputNewPwd: '새비밀번호를 입력해 주세요',
    isNewPwd: '새비밀번호는 반드시 영문이나 숫자 6-16자 조합이어야 합니다',
    inputOldPwd: '기존비밀번호를 입력해 주세요',
    isOldPwd: '비밀번호는 반드시6-16개의 영문이나 숫자의 조합이어야 합니다',
    editPwdSuccess: '비밀번호수정 성공，다시 로그인 해주세요',
    bindGoogleSuccess: '구글인증코드 바인딩 성공',
    logoutSuccess: '로그아웃성공',
    setSuccess: '설정성공',
    inputWithdrawAmount: '출금금액을 입력해주세요',
    overMaxWithdrawAmount: '출금금액은 어카운트 잔액을 초과해서는 안됩니다',
    underMinWithdrawAmount: '출금금액은 반드시 미니멈 출금액 이상이어야 합니다',
    inputWithdrawAddress: '출금지갑 주소를 입력해 주세요',
    withdrawSuccess: '출금신청 성공',
    withdrawFail: '출금신청 실패',
    receivedRewardSuccess: '수신성공',
    receivedRewardFail: '수신실패',
    noLogin: '아직 로그인 되지않음',
    goLogin: '지금 로그인으로 이동',
    invalidThirdUser: '타사유져 인증실패',
    authFail: '인증실패',
    copySuccess: '복제성공',
    copyFail: '이 브라우져는 자동복제를 지원하지 않습니다. 수동복제로 진행 부탁드립니다.',
    inputExhangeCode: '익스체인지코드를 입력해 주세요',
    startGameFail: '게임시작 실패',
    insufficientPoints: '포인트 부족',
    exhangeSuccess: '교환 성공',
    openWindow: '창이 곧 열릴 예정이며, 즐거운 게임 되시길 바랍니다.',
    openExchange: '새 창을 열어 교환하실 수 있습니다.',
    unBindGoogleSuccess: '구글 계정 연동 해제 성공',
    openExplorer: '창이 열려 거래 내역을 조회하실 수 있습니다.',

    inputTrueName: '이름을 입력하세요',
    selectDocType: '문서 유형 선택을 클릭하세요',
    inputDocType: '문서 유형을 선택하세요',
    inputDdocNumber: 'ID 번호를 입력하세요',
    airlineCompany: '항공사를 입력하세요',
    inputDeparture: '출발지를 입력하세요',
    inputDestination: '도착지를 입력하세요',
    inputHotelName: '호텔 이름을 입력하세요',
    inputCity: '호텔이 위치한 도시를 입력하세요',
    inputCountry: '호텔이 위치한 국가를 입력하세요',
    inputRoomNum: '호텔 객실 수를 입력하세요',
    inputInRoomDay: '숙박 일수를 입력하세요',
    betHolder: '배팅 시간',
    inputBetTime: '배팅 시간을 선택하세요',
    inputOrderId: '티켓 번호를 입력하세요',
    orderNoholder: "여러 배팅 주문을 구분하기 위해 ','를 사용하세요.",
    applySuccess: '신청 성공',
    applyFail: '신청 실패'
  },

  rewardsBig: '보너스',
  myStats: '포인트기록',
  exclusiveRewards: '특별 보너스',
  quickBuys: '빠른구매',
  earned: '획득',
  spent: '지출',
  pointsHistory: '포인트기록',
  earnPointsAndTrack: '포인트획득 및 추적',
  viewPointsRecord: '모든 포인트 소비기록 보기',
  buyNow: '즉시교환',
  youWillGet: '당신은 얻을 것입니다',
  bonusValue: '칩가치',
  wageringRequirement: '베팅요건',
  enableVisible: '시크릿모드 활성화',
  hiddenYourBet: '당신의 베팅은 공개베팅다이나믹스나 베팅보기에 나타나지 않습니다.',
  startNow: '바로시작',
  // 이용약관 등 내용
  withdrawStatus: { 1: '처리 중', 2: '확인됨', 3: '거부되었습니다' },
  time: '시간',
  betAmount: '배팅 금액',
  support2: '지원',
  btiSportIntro: '스포츠 플랫폼 운영 경험이 풍부한 Seabet 스포츠 베팅 플랫폼은 플레이어에게 몰입감 있고 최적화된 스포츠 베팅 게임 경험을 제공합니다.',
  sabaSportIntro: '거의 20년 동안 다양한 당사자들로부터 검증받은 Saba Sports 플랫폼은 다양한 스포츠 이벤트, 다양한 혁신적인 베팅 유형 및 업계 최고의 배당률을 제공합니다.',
  fundRecord: '거래 내역',
  categoryFilter: '카테고리별 필터링',
  fundCategory: {
    1: '입금',
    2: '출금',
    3: '베팅',
    4: '결산',
    5: '시스템 입금',
    6: '시스템 공제',
    7: '프로모션 선물',
    8: '환불',
    9: 'VIP 보상',
    10: '상품 교환',
    17: '출금 실패'
  },
  beforeBalance: '변경 전 잔액',
  afterBalance: '변경 후 잔액',
  tradeDetails: '거래 세부 정보',
  tradeNo: '주문 번호',
  orderType: '주문 유형',
  orderTypes: { 1: '입금', 2: '출금', 3: '베팅', 4: '승리' },
  blockChain: '블록체인',
  betAndEarn: '베팅 & 수익',
  placeAndEarn: '플레이스 & 승리',
  spinAndEarn: '스핀 & 승리',
  enabledGoogle: 'Google 인증이 활성화되었습니다',
  stopGoogle: 'Google 인증이 활성화되어 있습니다. 이 기능을 해제하려면 코드를 입력하고 "코드 제출"을 클릭하십시오.',
  unlockNewReward: '새로운 보상이 해제되었습니다!',
  unlockNewRewardTip: '축하합니다! 새로운 보상을 해제했습니다. 보상 유형을 선택하려면 여기를 클릭하십시오.',
  dymondReward: '이 수준에 도달하면 보상이 해제됩니다',
  siteTitle: '최고의 암호화폐 스포츠 베팅 및 카지노 사이트 | 비트코인 베팅',
  unlockAllReward: '축하합니다! 모든 보상이 해제되었습니다.',
  newGame: '새로운 게임',
  oneDay: '24 시간',
  week: '주',
  moreGame: '더 많은 게임',
  question: '자주 묻는 질문',
  status: '상태',
  tradeCode: '거래 코드',
  copyTradeCode: '거래 코드 복사',
  realName: '이름',
  sex: '성별',
  male: '남성',
  female: '여성',
  documentType: '문서 유형',
  documentNumber: '문서 번호',
  airlineCompany: '항공사',
  placeOfDeparture: '출발지',
  destination: '목적지',
  onewayOrRoundtrip: '편도 또는 왕복',
  oneway: '편도',
  roundtrip: '왕복',
  engineroomType: '항공편 클래스',
  economyClass: '이코노미 클래스',
  businessClass: '비즈니스 클래스',
  firstClass: '퍼스트 클래스',
  submit: '제출',
  hotelName: '호텔 이름',
  city: '도시',
  roomType: '객실 유형',
  presidentialSuite: '대통령 스위트',
  luxurySuite: '럭셔리 스위트',
  businessSuite: '비즈니스 스위트',
  roomNum: '객실 수',
  roomDay: '숙박 일수',
  otherService: '기타 서비스',
  idCard: '신분증',
  passport: '여권',
  militaryId: '군용 신분증',
  diplomaticCard: '외교 여권',
  moonpayExchange: '신용카드/직불카드로 암호화폐 구매',
  learnMore: '더 알아보기',
  comingSoon: '곧 출시...',
  affiliate: '제휴사',
  rewardActivities: '보상 활동',
  rewardRecords: '보상 레코드',
  applyPromo: '보상 신청',
  applyNow: '지금 신청',
  rewardStatus: { 0: '처리 중', 1: '통과됨', 2: '거부됨' },
  betTime: '베팅 시간',
  betOrderNo: '베팅 주문 번호',
  startEarning: '수익을 시작하려면',
  historyType: '유형',
  rewardName: '보상 이름',
  startTime: '시작 시간',
  endTime: '종료 시간',
  minMaxBet: '최소-최대 베팅',
  volatility: '변동성',
  volatilitys: { 1: '낮음', 2: '낮음-중간', 3: '중간', 4: '중간-높음', 5: '높음', 6: '매우 높음', 7: '매우 낮음' },
  myPoints: '내 포인트',
  backPromo: '프로모션으로 돌아가기',
  noSupportFullScreen: '귀하의 브라우저는 전체 화면을 지원하지 않습니다',
  pointsExchange: '교환',
  view: '더 보기',
  oprate: '보기',
  remain: '남음',
  directlyLogin: '또는 직접 로그인',
  fastDeposit: '빠른 입금',
  demoMode: '체험 모드',
  trueMode: '리얼머니 모드',
  gameStatic: '게임 데이터 통계',
  receivedSuccess: '{ amount } USDT 성공적으로 수령',
  goTime: '출발 시간',
  backTime: '돌아오는 시간',
  inTime: '호텔 체크인 시간',
  outTime: '호텔 체크아웃 시간',
  sabaSportDesc: {
    0: '모든 스포츠 이벤트',
    1: '모든 디지털 디바이스  MacOS 및 Windows 를 서포트',
    2: '보안 암호화',
    3: '정확한 실시간 배당률',
    4: '독립형 백엔드'
  },
  seabetSportDesc: {
    0: '독립적인 연구.개발',
    1: '최고 배당률',
    2: '맞춤형 베팅 인터페이스',
    3: '정확한 결제 시스템',
    4: '수백종의 베팅 옵션'
  },

  pickDate: '날짜 선택',
  inputGotime: '출발 시간을 선택해주세요',
  inputBacktime: '귀국 시간을 선택해주세요',
  inputInTime: '체크인 시간을 선택해주세요',
  inputOutTime: '체크아웃 시간을 선택해주세요',
  hotelTimeError: '체크아웃 시간은 체크인 시간보다 빠를 수 없습니다',
  ticketTimeError: '귀국 시간은 출발 시간보다 빠를 수 없습니다',
  countryHolder: '국가 코드',
  numberHolder: '전화 번호',
  submitInfoSuccess: '귀하의 정보가 성공적으로 제출되었습니다',
  back: '반품',
  countryCode: '국가 코드',
  remainTime: '남은 시간',
  upgrading: '시스템 업그레이드 진행 중',
  upgradingTxt: '시스템이 현재 업그레이드 중입니다. 불편을 드려 죄송하며, 이해해 주셔서 감사합니다!',
  favariateGame: '最爱游戏',
  recentlyGame: '近期玩过',
  downloadTitle: 'Seabet.io 프로그레시브 웹 앱!',
  downloadDesc: 'Seabet.io 앱에 오신 것을 환영합니다! 아래에서 Android 앱 및 iOS 프로그레시브 웹 앱 (PWA)을 설치하는 단계별 지침이 있습니다. 언제 어디서나 즐거운, 빠르고 공정한 게임을 즐기세요!',
  step: '단계',
  clickSave: '브라우저에서 저장 아이콘을 클릭합니다.',
  addDesk: '"홈 화면에 추가"를 탭합니다.',
  clickAdd: '이름을 바꿀 수 있는 옵션이 표시됩니다. "추가"를 클릭합니다.',
  finishedDown: '바로가기가 이제 홈 화면에 있습니다.',
  addToDesk: '브라우저에서 "페이지 추가"를 선택하세요.',
  clickDesk: '"홈 화면"을 탭하세요.',
  clickAddAndroid: '"추가"를 클릭합니다.',

  problem: {
    whatVip: '1.VIP 클럽이란 무엇인가요?',
    whatVips: `<p>seabet.io VIP 클럽은 암호화폐 고객을 위한 전용 커뮤니티로, 언제든지 웹 사이트에서 제공하는 모든 프로모션 활동을 즐길 수 있도록 해줍니다. 당신이 베팅, 스핀, 그리고 게임을 할 때마다 점수가 쌓이며, 클럽 내에서 점차 레벨을 올리고 여러 흥미로운 보상을 언락하게 됩니다. VIP 레벨을 언락함에 따라 Seabet 베팅 포인트도 얻게 되어 더 다양한 보상과 서비스를 누릴 수 있습니다.</p>
                <p>간단히 말해, 이것은 게임을 하고 우리가 보상을 제공하는 것을 의미합니다.</p>`,
    howGetIntegrial: '2.포인트를 어떻게 얻을 수 있나요?',
    howGetIntegrials: `<p>모든 베팅, 슬롯 머신 스핀 및 테이블 게임을 플레이할 때마다 클럽 포인트를 얻을 수 있습니다. 포인트를 더 많이 모을수록 레벨이 높아집니다. 계급을 통해 진행함에 따라 다양한 흥미로운 보상을 언락할 수 있습니다. 새로운 레벨을 언락할수록 보상은 계속해서 더 좋아집니다.</p>`,
    whatVipLevel: '3.VIP 레벨이란 무엇인가요?',
    whatVipLevels: `<p>VIP 레벨은 당신이 요구할 수 있는 보상의 가치와 유형을 결정합니다. 클럽을 진행하고 레벨을 올릴수록 보상도 증가합니다.</p>
                    <table>
                      <tr>
                        <th>VIP 레벨</th>
                        <th>필요한 베팅 금액</th>
                        <th>빈도</th>
                      </tr>
                      <tr>
                        <td>브론즈</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>실버</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>골드</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>플래티넘</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>티타늄</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>다이아몬드</td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.포인트는 어떻게 계산되나요?',
    howComputeInterials: `<p>스포츠 베팅이든 카지노 게임이든, 암호화폐를 사용하면 포인트를 얻을 수 있습니다. 각 베팅으로 얻는 포인트를 계산하기 위해 정산 과정에서 베팅 금액을 실시간 시장 환율로 USDT로 변환합니다. 이렇게 하면 사용된 암호화폐의 종류에 관계없이 모든 포인트 모으기가 공정하게 이루어집니다. 환율 변동으로 인해 포인트 계산 시 가장 가까운 정수로 반올림하는 원칙을 따릅니다.</p>
                          <p>Seabet 포인트를 얻는 공식은 다음과 같습니다: 플레이어의 베팅 금액 * 0.01 * 해당 레벨의 포인트 계수. 예를 들어, 플레이어가 플래티넘 레벨에 있고 5000을 베팅한다면, 포인트 계산 공식에 따라 플레이어는 5000 * 0.01 * 1.3 = 65 포인트를 얻게 됩니다. Seabet 포인트는 다양한 용도로 사용할 수 있으며 플레이어는 포인트 상점에서 동등한 선물과 서비스를 교환할 수 있습니다.</p>`,
    whyMergedReward: '5.내 리워드가 병합되는 이유는 무엇인가요?',
    whyMergedRewards: `<p>내 보상이 합쳐진 이유는 단일 베팅으로 여러 보상을 언락할 수 있기 때문입니다. 편리하게 하기 위해 보상의 가치를 더하고 하나의 보상으로 표시합니다.</p>`,
    resetVip: '6.내 VIP 레벨은 언제 초기화되나요?',
    resetVips: `<p>당신의 VIP 레벨은 매월 초에 0으로 초기화됩니다. 그런 다음 브론즈 레벨부터 다시 시작하고 다음 레벨의 모든 보상을 요구할 수 있습니다. 누적된 포인트는 여전히 보상과 서비스를 더 많이 교환할 수 있도록 보존됩니다.</p>`,
    everyGetInterial: '7.모든 베팅으로 클럽 포인트를 얻을 수 있나요?',
    everyGetInterials: `<p>아니요, 클럽 포인트는 실제 돈으로 베팅할 때만 누적됩니다. 또한 일부 이벤트 및 게임 범주는 클럽에 포함되지 않으므로 그 위에 베팅을 해도 포인트를 획득하지 못합니다. 이러한 범주에는 다음이 포함됩니다.</p>
                        <p>경마</p>
                        <p>전자 스포츠</p>
                        <p>스포츠 북 마스터</p>
                        <p>게다가 다음의 카지노 게임들도 클럽에 포함되지 않으며, 그 위에 베팅을 해도 포인트를 획득하지 못합니다.</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: '어떻게 입금하나요?',
    a1: `<p>1. 원하는 암호화폐를 선택 후 입금을 클릭하세요.</p>
        <p>2. 일회용 입금 주소를 복사하여 지갑에 붙으세요(또는 QR 코드를 스캔하세요).</p>
        <p>3. 거래가 확인되면, 알림을 받게됩니다.</p>`,
    q2: '어떻게 출금하나요?',
    a2: `<p>1. 원하는 암호화폐를 선택 후 출금을 클릭하세요.</p>
        <p>2. 출금하고자 하는 금액을 입력하세요.</p>
        <p>3. 지갑 주소를 입력하세요.</p>
        <p>4. 출금 버튼을 클릭하세요.</p>`,
    q3: '입/출금에 얼마나 걸립니까?',
    a3: `<p>입금</p>
        <p>대부분의 암호화폐 입금은 번개처럼 처리됩니다. 그러나 제3자 서비스로 인해 지연이 발생할 수 있습니다.</p>
        <p>출금</p>
        <p>대부분의 출금은 즉시 처리됩니다. 큰 금액의 출금의 경우, 수동으로 처리가 될 수 있으며 지연이 발생할 수 있습니다.</p>`,
    q4: '어떤 결제 수단을 제공하나요?',
    a4: `<p>Seabet.io에서 제공하는 화폐 옵션은 다음과 같습니다:</p>
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
    q5: '거래 수수료가 부과 됩니까?',
    a5: `<p>Seabet.io에서 입출금에 대한 수수료를 부과하지는 않지만, 블록체인 결제를 사용할 때 거래 수수료를 지불해야 할 수 있습니다.</p>`
  },

  errorCodes: {
    1001: '기록이 존재하지 않습니다',
    1002: '활동이 종료되었습니다',
    1003: '데이터가 이미 존재합니다',
    1004: '데이터 오류',
    1005: '매개 변수 오류',
    1006: '청구 요구 사항을 충족하지 않았습니다',
    1007: '오늘 이미이 프로모션 신청을 제출했습니다',
    1008: '프로모션이 만료되었습니다',
    1009: '이 프로모션을 이미 청구하였습니다',
    1010: '자격을 갖춘 입금 주문이 없습니다',
    1011: '입금 금액이 청구 요건을 충족하지 않습니다',
    1012: 'Google 인증 코드가 올바르지 않습니다',
    1013: '인출을 하려면 아직 { data } USD의 유효한 베팅을 완료해야 합니다',
    1014: '사용자 이름이 이미 존재합니다',
    1015: '전화 번호가 이미 존재합니다',
    1016: '이메일 주소가 이미 존재합니다',
    1017: '잘못된 사용자 이름 형식',
    1018: '잘못된 비밀번호 형식',
    1019: '잘못된 검증 코드',
    1020: '시스템이 바쁩니다. 나중에 다시 시도하십시오',
    1021: '서명 오류',
    1022: '귀하의 계정은 비활성화되었습니다. 고객 서비스에 문의하십시오',
    1023: '사용자 이름 또는 비밀번호가 잘못되었습니다',
    1024: '계정이 잠겨 있습니다',
    1025: 'Google Authenticator가 이미 연동되어 있습니다',
    1026: 'Google Authenticator가 연동되어 있지 않습니다',
    1027: '현재 비밀번호가 올바르지 않습니다',
    1028: '잘못된 이메일 주소 형식',
    1029: '이메일 보내기 실패',
    1030: '상품 수량이 부족합니다',
    1031: '사용 가능한 포인트가 부족합니다',
    1101: '사용 가능한 잔액이 부족합니다',
    1032: '자금의 보안을 보장하기 위해 비밀번호를 변경한 후 24시간 동안 인출이 불가능합니다.',
    1033: '이메일 확인 코드가 올바르지 않습니다'
  },

  // 条款协议等内容
  html: {
    // html제목
    vipTitle: 'VIP 클럽',
    rulesTitle: '이용약관',
    responsibleTitle: '도박책임',
    amlTitle: '자금세탁방지정책',
    selfExclusionTitle: '자기배제',
    privacyTitle: '프라이버시정책',
    fairnessTitle: '공평성',

    // html内容
    vipContent: `<div class="vip-clubhouse-box">
                    <div class="vc-rows">
                      <div class="vr-title">一.  VIP 클럽 소개</div>
                      <div class="vr-conts">
                        <p>Seabet VIP 클럽에 오신 것을 환영합니다!</p>
                        <p>Seabet은 게임의 품질을 향상시키고 최고의 게임 경험을 제공하기 위해 최선을 다하고 있습니다. 웹사이트에서 게임을 하는 충성도 높은 회원들에게 보상을 제공하기 위해 고안된 새로운 VIP 클럽을 소개하게 되어 기쁩니다.</p>
                        <p>Seabet.io 에서 제공하는 게임이나 스포츠 이벤트에 베팅하기만 하면 순위가 올라감에 따라 독점 보상을 잠금 해제할 수 있습니다.</p>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">二.개인 맞춤형 서비스</div>
                      <div class="vr-conts">
                        <p>전문 고객 관리자 팀은 모든 요구 사항을 보장하고 업계 최고 표준을 충족합니다. VIP 회원은 독점 보너스, 유명 이벤트 초대 및 다양한 맞춤형 보상을 통해 빠르고 즐겁고 효율적인 게임 경험을 제공할 수 있습니다.</p>
                        <dl>
                          <dt>VIP 전속 매니저 :</dt>
                          <dd>귀하의 요구 사항을 해결하는 데 전념</dd>
                          <dd>나만을 위한 맞춤형 개인 게임 경험</dd>
                        </dl>
                        <dl>
                          <dt>높은 보상:</dt>
                          <dd>당신을 위해 설계된 독점적 인 제안</dd>
                          <dd>베팅 없는 보너스</dd>
                          <dd>포인트의 빠른 축적</dd>
                        </dl>
                        <dl>
                          <dt>업계 최고 베팅 한도:</dt>
                          <dd>암호화폐로 무제한 일일 입출금</dd>
                        </dl>
                        <dl>
                          <dt>VIP 독점 프로모션:</dt>
                          <dd>정회원 프로모션과 구별</dd>
                          <dd>최고의 게임 경험 유지</dd>
                          <dd>VIP 사용자 전용</dd>
                          <dd>개인화된 제안</dd>
                          <dd>당신만을 위한 맞춤형 엔터테인먼트 서비스</dd>
                        </dl>
                        <dl>
                          <dt>24/7 우선 서비스:</dt>
                          <dd>대기하거나 기다릴 필요가 없습니다.</dd>
                          <dd>귀하의 요구가 최우선입니다</dd>
                          <dd>다양한 소셜 미디어 연락 방법, 온라인 서비스를 제공하는 전담 고객 관리자.</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">三.레벨 구조</div>
                      <div class="vr-conts">
                        <p>전체 게임 여정을 포괄적으로 다루는 6개의 VIP 레벨:</p>
                        <dl>
                          <dd>브론즈: 브론즈 1</dd>
                          <dd>실버: 실버 1 - 실버 5</dd>
                          <dd>골드: 골드 1 - 골드 8</dd>
                          <dd>플래티넘: 플래티넘 1 - 플래티넘 10</dd>
                          <dd>티타늄: 티타늄 1 - 티타늄 10</dd>
                          <dd>다이아몬드: 다이아몬드 1 - 다이아몬드 6</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">四.VIP 클럽 회원을 위한 혜택</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>레벨 업 보너스: 다음 레벨에 도달하면 보너스를 받습니다. 레벨이 높을수록 보너스가 커집니다.</dd>
                          <dd>맞춤형 독점 제안: 정기 프로모션에 관심이 없으신가요? 문제 없어요. 해당 VIP 레벨에 도달하면 귀하의 관심사에 따라 특별히 귀하를 위해 제안을 맞춤화합니다.</dd>
                          <dd>개인화된 엔터테인먼트 경험: 주요 스포츠 행사, 콘서트, 음악 쇼 또는 호화로운 여행 등 시니어 VIP 회원으로서 모든 개인 경비는 신뢰할 수 있는 Seabet에서 부담하며 일정을 조정해 드립니다.</dd>
                          <dd>독점적인 VIP 서비스: 귀하의 베팅 요구 사항을 지원하고 충족할 전담 VIP 서비스 담당자가 배정됩니다.</dd>
                          <dd>더 빠른 포인트 적립: VIP 레벨은 일반 회원에 비해 더 빠른 속도로 포인트를 적립합니다. 레벨이 높을수록 더 많은 포인트를 획득하여 더 넓은 범위의 교환을 받을 수 있습니다.</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">五.VIP 회원이 되는 방법</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>
                          계속 베팅하기: VIP가 되기 위한 핵심은 다양한 스포츠 이벤트와 카지노 게임에 지속적으로 베팅하는 것입니다. Seabet은 귀하의 일관성을 보상합니다. 최고의 암호화폐 도박 사이트로서 정기적으로 디지털 자산을 사용하여 Seabet에서 제공하는 모든 스포츠 이벤트 및 카지노 게임에 베팅하십시오. USDT로 베팅을 시도하고 자금을 계속 사용할 수도 있습니다.
                          </dd>
                          <dd>
                          정기 이벤트 참여: Seabet의 프로모션 활동에는 언제든지 참여할 수 있는 다양한 이벤트 및 대회가 포함됩니다. 이러한 이벤트에 정기적으로 참여하면 VIP 클럽 초대를 받을 가능성이 높아집니다. 또한 Seabet에서 제공하는 다른 클럽 기능에서 더 활발하게 활동할 수 있습니다.
                          </dd>
                          <dd>초대 대기: 마지막으로 해야 할 일은 초대장을 보낼 때까지 기다리는 것입니다. 계속해서 게임을 하고 하이 롤러 이벤트에 참여하십시오. 몇 차례의 카지노 도박 및 스포츠 베팅 후 VIP 클럽 회원이 될 자격이 있다고 판단되면 즉시 초대장을 받게됩니다.</dd>
                          <dd>Seabet VIP로서 호화로운 생활을 경험하십시오: Seabet VIP 클럽 회원으로서 최고의 특권을 누리면서 USDT 도박 경험을 완전히 새로운 차원으로 끌어올리십시오. 소중한 플레이어로서 스포츠 베팅 및 카지노 게임에 참여할 때 최고의 재미, 빠르고 공정한 베팅을 경험하게 될 것입니다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>`,

    rulesContent: `<div>
                    <h2>이용약관</h2>
                    <h3>1. 시벳. 증권 시세 표시기</h3>
                    <h3>2. 중요 공지</h3>
                    <p><b>2.1 </b>WWW.SEABET.IO  (이하 "웹사이트")에 등록함으로써 귀하는 계약을 체결하고 다음 사항에 구속되는 데 동의합니다.  </p>
                    <p>(I) 본 이용 약관; </p>
                    <p>(II) 당사의 개인 정보 보호 정책; </p>
                    <p>(III) 당사의 쿠키 정책 및 </p>
                    <p>(IV) 본 이용 약관("이용 약관" 또는 "계약")에 추가로 언급된 당사의 베팅 또는 게임 제품에 적용되는 규칙과 베팅 및/또는 게임 관련 규칙은 모든 조건을 수락하고 이해한 것으로 간주됩니다.</p>

                    <p><b>2.2 </b>본 계약의 내용을 완전히 이해할 수 있도록 본 계약을 주의 깊게 읽으십시오. 본 계약의 수락으로 인한 귀하의 권리와 의무에 대해 의문이 있는 경우 웹사이트를 추가로 사용하고 해당 콘텐츠에 액세스하기 전에 해당 관할권의 법률 고문과 상담하십시오. 약관에 동의하지 않는 경우 웹 사이트의 일부(하위 도메인, 소스 코드 및/또는 웹 사이트 API를 포함하되 이에 국한되지 않음)를 사용, 방문 또는 액세스하지 마십시오.</p>
                    <h3>3. 일반</h3>
                    <p><b>3.1 </b>www. Seabet.io.</p>
                    <p> 귀하("귀하", "귀하의", 귀하 자신" 또는 "플레이어")는 Seabet과 계약을 체결합니다.</p>
                    <p><b>3.2 </b>Seabet의 서비스 또는 제품을 사용하기 전에 본 계약 전체를 읽어야 합니다. 본 계약은 귀하와 Seabet 간의 법적 구속력이 있는 계약을 구성합니다.</p>
                    <p><b>3.3 </b>본 이용  약관은 귀하가 등록 절차를 완료하는 즉시 효력을 발생하며, 여기에는 본 이용 약관에 동의하는 확인란을 선택하고 성공적으로 계정을 만드는 것이 포함됩니다. 계정 생성 후 웹사이트의 일부를 사용함으로써 귀하는 웹사이트 사용에 적용되는 본 이용 약관에 동의하는 것입니다.</p>
                    <p><b>3.4 </b>당사는 사전 통지 없이 언제든지 본 이용 약관을 수정할 수 있습니다. 당사가 그러한 수정을 하는 경우, 당사는 그러한 변경 사항을 귀하에게 알리기 위해 적절한 조치를 취할 수 있지만(예: 이메일 또는 수정된 이용 약관과 함께 웹사이트의 눈에 잘 띄는 위치에 공지 게시) 수정, 업데이트 및/또는 수정 사항을 확인하는 것은 전적으로 귀하의 책임입니다. 이용 약관을 수정한 후에도 웹사이트 서비스를 계속 사용하는 것은 그러한 수정, 업데이트 및/또는 수정에 구속되는 수락 및 동의로 간주됩니다.</p>
                    <p><b>3.5 </b>본 이용 약관의 조건은 본 이용 약관의  조건과 게임 규칙 또는 본 이용 약관에 언급된 기타 문서 사이에 충돌이 있는 경우 우선합니다.</p>
                    <p><b>3.6 </b>본 이용 약관은 정보 제공 목적과 플레이어의 접근 용이성을 위해 여러 언어로 게시될 수 있습니다. 영어 버전은 귀하와 당사 간의 관계에 대한 유일한 법적 근거이며 모든 종류의 번역과 관련하여 불일치가 있는 경우 본 이용 약관의 영어 버전이 우선합니다.</p>

                    <h3>4. 씨벳 계정</h3>
                    <p>등록</p>
                    <p><b>4.1 </b>Seabet.io 에 베팅을 할 수 있으려면 먼저 당사에 직접 계정("Seabet 계정")을 등록해야 합니다.</p>
                    <p><b>4.2 </b>Seabet에 플레이어로 등록하고 웹사이트를 사용하려면 Seabet 계정 등록 및 개설 신청서를 제출해야 합니다. Seabet 계정 개설 신청서는 개인적으로 제출해야 하며 이메일, 성명, 생년월일, 주소 등과 같은 일련의 개인 정보를 제공해야 합니다.</p>
                    <p><b>4.3 </b><b>4.2.</b>에 규정된 정보가 제공되지 않거나 어느 시점에서든 완전하고 정확하거나 최신 상태로 간주되지 않는 경우, Seabet은 Seabet 계정 등록을 중단하고 플레이어의 Seabet 계정에 대한 잠재적으로 수락된 후속 입금을 무효로 취급할 수 있는 권리를 보유합니다(및 그러한 입금으로 인해 발생하는 모든 상금은 무효). Seabet 계정이 정지된 경우 (support{'@'}Seabet.io)로 고객 지원에 문의해야 합니다.</p>
                    <p><b>4.4 </b>모든 신청자는 18세 이상이거나 귀하에게 적용되는 법률에 의해 결정된 기타 법적 성년이어야 합니다. Seabet은 만족스러운 문서가 제공될 때까지 플레이어에게 연령 증명을 요청하고 Seabet 계정을 일시 중지할 권리가 있습니다. Seabet은 미성년자 및 책임감 있는 도박에 대한 책임을 매우 중요하게 생각합니다.</p>
                    <p><b>4.5 </b>Seabet은 개인의 등록을 허용하지 않습니다.</p>
                    <p>a) 18세 미만 또는 법적 성년 미만이거나 관할권에서 도박을 하는 경우</p>
                    <p>b) 불법이거나 도박이 허용되지 않는 관할 구역에 거주하는 것. Seabet은 각 관할권에서 서비스의 적법성을 확인할 수 없으며 서비스 사용이 합법적인지 확인하는 것은 사용자의 책임입니다.</p>
                    <p>c) 오해의 소지가 있는 정보를 제공하거나 제3자를 통과시키려고 합니다.</p>
                    <p><b>4.6 </b>Seabet은 단독 재량에 따라 Seabet 계정 신청을 거부할 권리가 있습니다.</p>

                    <p>고객 파악</p>
                    <p><b>4.7 </b>귀하는 신청서에 귀하가 제공한 모든 정보가 사실이고 업데이트되었으며 정확함을 진술하고 보증합니다.</p>
                    <p><b>4.8 </b>Seabet은 언제든지 플레이어의 신원과 위치를 결정하는 데 필요하다고 판단되는 KYC 문서를 요청할 권리가 있습니다. Seabet은 신원이 충분히 결정될 때까지 또는 Seabet의 단독 재량에 따라 다른 이유로 서비스, 지불 또는 철회를 제한할 수 있는 권리를 보유합니다. Seabet은 또한 법적 절차를 준수하기 위해 적절하게 또는 Seabet의 개인 정보 보호 정책(Seabet의 소유자 및 운영자)에 의해 허용되는 대로 플레이어의 정보를 공개할 권리를 보유하며, 서비스를 사용함으로써 귀하는 그러한 공개의 가능성을 인정하고 동의합니다.</p>

                    <p>여러 계정</p>
                    <p><b>4.9 </b>플레이어당 하나의 Seabet 계정만 허용됩니다. 귀하가 자신의 이름 또는 다른 이름으로 하나 이상의 Seabet 계정을 개설하려고 시도하거나 성공적으로 개설하는 경우, 또는 다른 사람의 Seabet 계정을 통해 웹사이트를 사용하려고 시도하거나 성공하는 경우, Seabet은 귀하의 모든 Seabet 계정을 즉시 폐쇄하고 해당 Seabet 계정에 모든 돈을 보유하며 향후 웹사이트 사용을 금지할 수 있습니다.</p>
                    <p><b>4.10 </b>Seabet은 귀하가 하나 이상의 Seabet 계정을  등록 및/또는 사용했거나 여러 다른 Seabet 계정을 사용하여 한 명 이상의 다른 개인과 공모했다고 믿을 만한 이유가 있는 경우, Seabet은 해당 계정을 여러 Seabet 계정을 구성하는 것으로 간주하고 그러한 모든 Seabet 계정을 일시 중지 또는 폐쇄할 수 있습니다. Seabet은 또한 플레이어가 여러 계정을 만들려고 시도하지 않았다는 것을 증명할 때까지 자금을 보유할 수 있습니다.</p>
                    <p><b>4.11 </b>등록된 Seabet 계정이 두 개 이상인 경우 즉시 당사에 알려야 합니다. 그렇게 하지 않으면 Seabet 계정이 차단되고 자금이 유지될 수 있습니다.</p>

                    <p>사용자 책임</p>
                    <p><b>4.12 </b>귀하의 로그인 정보를 안전하게 보관하는 것은 귀하의 전적이고 독점적인 책임입니다. 로그인 정보를 누구에게도 공개해서는 안 됩니다.</p>
                    <p><b>4.13 </b>당사는 귀하의 로그인 세부 정보를 제3자에게 의도적, 우발적, 능동적 또는 수동적으로 공개함으로써 제3자가 귀하의 Seabet 계정을 남용하거나 오용하는 것에 대해 책임을 지지 않습니다.</p>
                    <p><b>4.14 </b>귀하는 다른 플레이어에게 또는 다른 플레이어로부터 Seabet 계정을 판매, 양도 또는 취득하는 것이 금지됩니다.</p>
                    <p><b>4.15 </b>귀하는 귀하의 계정과 관련된 오류 또는 귀하가 한 베팅과 관련된 계산을 알게 되는 즉시 당사에 알려야 합니다. 우리는 무효를 선언하고 그러한 오류의 대상이 되는 모든 베팅을 무효화할 권리가 있습니다.</p>
                    <p><b>4.16 </b>귀하는 귀하의 계정에서 발생하는 모든 활동에 대한 책임이 있습니다.</p>

                    <p>보안 기능</p>
                    <p><b>4.17 </b>계정 보안을 강화하기 위해 2단계 인증을 활성화하는 것이 좋습니다.</p>
                    <p><b>4.18 </b>당사는 수시로 다른 보안 조치를 제공할 수 있으며 이를 사용하는 것이 좋습니다.</p>


                    <p>Seabet의 정지 및 폐쇄</p>
                    <p><b>4.19 </b>Seabet은 다음과 같은 경우 귀하의 Seabet 계정을 폐쇄하거나 정지할 수 있습니다.</p>
                    <p>a) Seabet은 귀하가 사기 또는 공모적인 방식으로 또는 불법 및/또는 불법적이거나 부적절한 목적으로 웹사이트를 사용하거나 사용한 것으로 간주합니다.</p>
                    <p>b) Seabet은 귀하가 웹사이트를 불공정한 방식으로 사용하고 있거나 사용했거나, Seabet 또는 그 고객을 고의적으로 속이거나 부당하게 이용했거나, 귀하의 Seabet 계정이 제3자의 이익을 위해 사용되고 있다고 간주합니다.</p>
                    <p>c) Seabet은 경찰, 규제 당국 또는 법원에 의해 또는 Seabet이 해당 규정에서 명시적으로 요구하는 대로 귀하의 신원, 직업 또는 자금 출처를 확인할 수 없는 경우 그렇게 하도록 요청합니다.</p>
                    <p>d) 귀하가 본 이용 약관, 해당 규정 또는 당사 서비스의 공정한 사용을 위반하거나 Seabet이 귀하가 스스로 배제되지 않고 강박적인 문제 도박꾼이라는 우려가 있습니다.</p>
                    <p>e) Seabet은 위의 (a)에서 (e)에 언급된 모든 사건이 발생했거나 발생할 가능성이 있다고 간주합니다.</p>
                    <p><b>4.20 </b>Seabet이 <b>4.15에</b> 언급된 사유로 귀하의 Seabet 계정을 폐쇄하거나 정지하는 경우, 귀하는 관련 법률이 허용하는 한도 내에서 Seabet에 의해 발생하거나 입은 모든 청구, 직접 손실, 책임, 손해, 비용 및 경비(총칭하여 "청구")에 대해 책임을 져야 하며, 관련 법률이 허용하는 범위 내에서  그러한 청구에 대한 요구에 따라 Seabet을 면책하고 무해하게 유지합니다.</p>
                    <p><b>4.21 </b><b>4.15에</b> 언급된 상황에서, Seabet은 또한 귀하의 그러한 행동에 따라 귀하가 한 모든 베팅을 무효화하거나 법이 허용하는 한도 내에서 귀하에게 지불되었거나 지불되었을 모든 금액(상금 포함)을 보류 및/또는 보유할 수 있습니다.</p>
                    <p><b>4.22 </b>당사는 귀하의 계정이 손상되었거나 서비스 약관을 위반하여 사용되고 있다고 의심되는 경우 통지 여부에 관계없이 언제든지 귀하의 계정을 일시 중지하거나 해지할 수 있는 권리를 보유합니다.</p>
                    <p><b>4.23 </b>Seabet이 귀하의 Seabet 계정을 폐쇄하는 경우 귀하의 Seabet 계정에 남아 있는 잔액을 인출할 수 있는 방법을 알려드립니다.</p>

                    <p>당사의 책임</p>
                    <p><b>4.24 </b>당사는 귀하의 계정에 대한 무단 액세스로 인해 귀하가 겪을 수 있는 손실이나 손해에 대해 책임을 지지 않습니다.</p>
                    <p><b>4.25 </b>당사는 귀하가 로그인 정보를 안전하고 비공개로 유지하지 못하여 발생할 수 있는 손실이나 손해에 대해 책임을 지지 않습니다.</p>

                    <h3>5. 귀하의 보증</h3>
                    <p><b>5.1 </b>서비스를 사용하기 전에 지속적으로 귀하는 다음을 진술, 보증, 약속 및 동의합니다.</p>
                    <p>용량</p>
                    <p>a) 귀하는 18세 이상이거나 귀하에게 적용되는 법률에 의해 결정된 기타 법적 성년 연령 중 더 높은 연령입니다.</p>
                    <p>b) 귀하는 당사와 법적 구속력이 있는 계약을 체결할 수 있는 완전한 능력이 있으며 어떠한 형태의 제한된 법적 능력에 의해서도 제한되지 않습니다.</p>
                    <p>c) 귀하는 강박적이거나 문제성 도박꾼으로 진단되거나 분류되지 않습니다.</p>
                    <p>d) 귀하는 현재 도박 사이트 또는 도박장에서 스스로 배제되지 않습니다. 도박 제공자와 자체 배제 계약을 체결하는 경우 즉시 Seabet에 알릴 것입니다.</p>

                    <p>재판권</p>
                    <p>e) 귀하는 합법적인 관할권에서 Seabet.io 액세스하고 있습니다.</p>
                    <p>f) 귀하는 온라인 베팅 및/또는 카지노 및/또는 라이브 게임 플레이를 금지하는 관할권에 있는 동안 당사 서비스를 사용하지 않습니다.</p>
                    <p>g) 귀하는 당사가 사기 거래 감지, 자동 등록 및 가입, 게임 플레이 및 화면 캡처 기술을 포함하되 이에 국한되지 않는 금지된 기술의 사용을 감지하고 방지할 권리가 있음을 인정하고 인정합니다. 이러한 단계에는 플레이어 장치 속성 검사, 지리적 위치 및 IP 마스킹 감지, 트랜잭션 및 블록체인 분석이 포함될 수 있지만 이에 국한되지 않습니다.</p>

                    <p>기금 및 세금</p>
                    <p>h) 귀하는 당사로부터 받은 상금에 대해 관련 법률에 따라 귀하에게 적용되는 모든 세금을 보고하고 회계처리할 전적인 책임이 있습니다.</p>
                    <p>i) 귀하는 서비스 사용을 통해 귀하에게 수여된 암호화폐에 대해 지불할 수 있는 모든 관련 세금에 대해 전적으로 책임이 있습니다.</p>
                    <p>j) 서비스를 사용할 때 암호화폐를 잃을 위험이 있으며 Seabet은 그러한 손실에 대해 귀하에게 책임을 지지 않습니다.</p>
                    <p>k) 범죄 또는 기타 승인되지 않은 활동으로 인한 자금을 예치하지 않습니다.</p>
                    <p>l) 귀하는 귀하의 소유가 아닌 지불 방법을 사용하여 자금을 입금하지 않습니다.</p>
                    <p>m) 예치된 모든 자금은 웹사이트에서 제공되는 서비스에만 사용됩니다.</p>
                    <p>n) 귀하는 귀하의 소유가 아닌 지불 방법으로 철회하거나 철회를 시도하지 않습니다.</p>
                    <p>o) 귀하는 웹사이트에서 제공되는 서비스에 참여함으로써 예치된 돈을 잃을 위험이 있음을 이해합니다.</p>
                    <p>p) 귀하는 암호화폐의 가치가 시장 가치에 따라 크게 변할 수 있음을 인정하고 인정합니다.</p>
                    <p>q) Seabet은 금융 기관으로 취급되지 않습니다.</p>

                    <p>다른</p>
                    <p>r) 귀하의 서비스 사용은 귀하의 단독 선택, 재량 및 위험에 달려 있습니다.</p>
                    <p>s) 귀하는 Seabet 계정을 통해 범죄 행위를 하지 않습니다.</p>
                    <p>t) 본 계약의 유효 기간 동안 귀하가 당사에 제공하는 모든 정보는 사실이고 완전하며 정확하며 귀하는 그러한 정보의 변경 사항을 즉시 당사에 알려야 합니다.</p>
                    <p>u) 귀하는 개인적 및 비전문적 자격으로 엄격하게 게임에 참여하고 레크리에이션 및 오락 목적으로만 참여합니다.</p>
                    <p>v) 귀하는 다른 사람을 대신하지 않고 자신을 대신하여 게임에 참여합니다.</p>
                    <p>w) 귀하는 당사에 하나의 계정만 가지고 있으며 더 이상 당사에 계정을 개설하지 않을 것에 동의합니다.</p>
                    <p>x) 귀하가 서비스에 액세스하고 사용하는 데 필요한 통신 네트워크 및 인터넷 액세스 서비스는 전적으로 Seabet의 통제를 벗어납니다.</p>
                    <p>y) 귀하는 귀하 또는 제3자의 웹사이트 게임 및/또는 서비스 참여와 관련하여 사기, 담합, 담합 또는 기타 불법 활동에 관여하지 않으며, 웹사이트의 게임 및/또는 서비스에 참여하기 위해 소프트웨어 지원 방법, 기술 또는 하드웨어 장치를 사용해서는 안 됩니다.</p>
                    <p>z) 이벤트와 관련된 비공개 정보에 액세스할 수 있거나 이벤트 또는 베팅 유형의 결과에 영향을 미칠 수 있는 경우, 관련 스포츠/이벤트 관리 기관이 감독하는 이벤트에 베팅하지 않습니다.</p>
                    <p>aa) 귀하가 선수, 코치, 감독, 구단주, 심판 또는 이벤트 결과에 영향을 미칠 수 있는 충분한 권한을 가진 사람인 경우 관련 스포츠 또는 치리회의 이벤트가 감독하는 이벤트에 베팅하지 않습니다.</p>
                    <p>bb) 귀하가 스포츠 관리 기관 또는 회원 팀의 소유자(10% 이상의 직간접적인 법적 또는 수익적 소유자인 사람)인 경우, 귀하는 스포츠 관리 기관이 감독하는 이벤트 또는 해당 스포츠 또는 이벤트 관리 기관의 회원 팀이 참여하는 이벤트에 베팅하지 않습니다.</p>
                    <p>cc) 귀하가 스포츠 또는 이벤트에 관여하는 경우, 귀하는 귀하가 참여하는 대회에 대한 베팅 배당률을 집계하는 데 관여하지 않습니다.</p>
                    <p><b>5.2 </b>언급된 진술, 영장 또는 계약을 위반하는 경우 Seabet은 자체 재량에 따라 귀하의 Seabet 계정을 폐쇄 또는 정지하고 법률이 적용되는 범위 내에서 모든 베팅을 무효화할 수 있는 권리를 보유합니다.</p>

                    <h3>6. SEABET 보증</h3>
                    <p><b>6.1 </b>Seabet은 다음을 보증합니다.</p>
                    <p>a) 플레이어에게 속한 자금을 안전하고 적절한 방식으로 관리합니다. 그리고</p>
                    <p>b) 플레이어와 관련된 개인 정보를 관련 법률 및 개인 정보 보호 정책에 따라 관리합니다.</p>
                    <p><b>6.2 </b>소프트웨어는 명시적이든 묵시적이든 법적이든 아니든 어떠한 보증, 조건, 약속 또는 진술 없이 "있는 그대로" 제공됩니다. Seabet은 이에 따라 모든 묵시적 조건, 표현, 조건 및 보증(상품성, 상품성 품질, 만족스러운 품질 및 특정 목적에의 적합성 포함)을 배제합니다. </p>
                    <p>Seabet은 다음을 보증하지 않습니다. </p>
                    <p>(一)웹 사이트 및 서비스는 귀하의 요구 사항을 충족합니다. </p>
                    <p>(二)웹사이트 및 서비스는 제3자의 지적 재산권을 침해하지 않습니다.</p>
                    <p>(三)웹사이트 및 서비스의 운영은 오류가 없거나 중단되지 않습니다.</p>
                    <p>(四)웹사이트 및 서비스의 모든 결함은 수정됩니다. 또는 </p>
                    <p>(五)웹사이트 또는 서버에는 바이러스가 없습니다.</p>

                    <p><b>6.3 </b>Seabet은 (support{'@'}seabet.io) 또는 24/7 라이브 채팅에서 이메일로 연락할 수 있습니다. 라이브 채팅은 귀하의 Seabet 계정에 로그인하면 사용할 수 있습니다. Seabet이 단독 재량으로 라이브 채팅, 이메일 또는 기타 방법을 통한 귀하의 행동이 Seabet 또는 그 계열사 또는 제3자 서비스 제공업체의 직원에 대한 모욕적이거나 경멸적이라고 판단하는 경우, Seabet은 귀하의 Seabet 계정을 차단하거나 종료할 권리가 있습니다.</p>

                    <h3>7. 예금</h3>
                    <p><b>7.1 </b>귀하는 Seabet 계정에 그러한 참여를 위한 충분한 자금이 있는 경우에만 게임에 참여할 수 있습니다. 이를 위해 웹사이트에서 사용할 수 있는 지불 방법을 사용하여 자금을 입금해야 합니다. Seabet은 게임 참여에 대해 어떠한 크레딧도 제공하지 않습니다.</p>
                    <p><b>7.2 </b>www.에서 사용할 수 있는 지불 방법을 사용하여 Seabet 계정에 자금을 입금해야 합니다. Seabet.io.</p>
                    <p><b>7.3 </b>귀하는 Seabet 계정에 입금한 자금이 불법으로 오염되지 않았으며, 특히 불법 활동이나 출처에서 비롯되지 않도록 해야 합니다.</p>
                    <p><b>7.4 </b>Seabet 계정에 자금을 입금하려면 귀하가 통제하는 암호화폐 지갑 또는 Seabet.io 에서 사용할 수 있는 다른 지불 방법을 통해 자금을 이체할 수 있습니다. 입금은 본인의 자금으로만 가능합니다.</p>
                    <p><b>7.5 </b>귀하는 웹사이트에 베팅/베팅을 하기 위해 해당 돈을 사용할 목적으로만 귀하의 계정에 돈을 입금해야 합니다. Seabet은 귀하가 스포츠 및/또는 게임 베팅을 할 의도 없이 자금을 예치하고 있다고 합리적으로 판단되는 경우 귀하의 계정을 일시 중지하거나 폐쇄할 수 있습니다. 이러한 경우 당사는 이러한 활동을 관련 당국에 보고할 수도 있습니다.</p>
                    <p><b>7.6 </b>귀하는 귀하의 Seabet 계정에 자금을 조달하는 것이 귀하가 소유한 지불 방법에 의해서만 자금을 조달할 수 있음을 인정하고 이해합니다.</p>
                    <p><b>7.7 </b>귀하는 Seabet이 다음을 발견, 감지 및/또는 식별하는 경우 다음을 추가로 이해, 동의 및 인정합니다.</p>
                    <p>a) 제3자 결제 방법을 사용하여 귀하의 Seabet 계정에 자금을 지원/자금 조달 중입니다. 및/또는</p>
                    <p>b) 불법으로 오염된 자금으로 귀하의 Seabet 계정에 자금을 지원/조달하는 경우, 그러한 활동은 사기에 해당하는 서비스 약관 위반으로 간주되며, 더 나아가 다음을 수행합니다.</p>
                    <p>i) Seabet은 자체 재량에 따라 귀하의 Seabet 계정을 일시 중지하거나 폐쇄할 수 있는 권리를 보유합니다. 그리고</p>
                    <p>ii) Seabet은 자체 재량에 따라 거래를 취소, 취소 또는 조정하고 예치된 자금 및/또는 예치된 자금에서 생성된 상금을 몰수할 수 있는 권리를 보유합니다.</p>
                    <p><b>7.8 </b>Seabet은 자체 설명에 따라 최소 입금액을 설정할 수 있습니다. 최소 입금액은 Seabet의 설명에 따라 언제든지 변경할 수 있으며 웹사이트에서 확인할 수 있습니다. 귀하가 사용하는 결제 방법에 따라 결제 제공업체에서 추가 수수료를 부과할 수 있습니다.</p>
                    <p><b>7.9 </b>귀하에게 제공되는 지불 방법과 최소 및 최대 입금 한도는 사이트의 지갑 섹션에서 확인할 수 있습니다. 해당 서비스 요금이 적용 및 변경될 수 있습니다. 일부 결제 수단은 일부 국가에서 사용 가능하지 않을 수 있습니다.</p>
                    <p><b>7.10 </b>입금은 즉시 처리되며 업데이트된 잔액은 결제 서비스 제공업체를 사용할 때마다 즉시 Seabet 계정에 표시됩니다. Seabet은 지불 시스템 또는 제 3 자에 의한 지연으로 인해 발생하는 지연에 대해 책임을지지 않습니다. 다음 사항에 유의하십시오.</p>
                    <p>a) 일부 결제 방법에는 추가 수수료가 포함될 수 있습니다. 이 경우 수수료는 계산원에게 명확하게 표시됩니다.</p>
                    <p>b) 귀하의 은행 또는 결제 서비스 제공 업체는 이용 약관 및 사용자 계약에 따라 환전 예금에 대해 추가 수수료를 부과 할 수 있습니다.</p>
                    <p><b>7.11 </b>당사는 귀하의 Seabet 계정에 입금을 처리할 때 귀하의 신원을 확인하기 위해 추가 절차와 수단을 사용할 권리가 있습니다.</p>
                    <p><b>7.12 </b>자금은 귀하의 Seabet 계정에서 다른 플레이어의 Seabet 계정으로 이체할 수 없습니다.</p>
                    <p><b>7.13 </b>Seabet은 자체 설명에 따라 예금을 거부할 수 있습니다. 계정이 차단되거나 정지된 사용자는 www.Seabet.io 에 입금을 삼  가야 합니다.</p>
                    <p><b>7.14 </b>플레이어가 자신의 계정이 차단되거나 정지되었을 때 입금을 시도하는 경우 Seabet은 자금을 보유할 권리가 있습니다.</p>

                    <h3>8. 출금</h3>
                    <p><b>8.1 </b>Seabet은 다음과 같은 경우 플레이어가 Seabet 계정에서 인출을 거부할 권리가 있습니다.</p>
                    <p>a) 플레이어의 신원이 확인되었으며 Seabet은 Seabet 계정 보유자가 출금하고 있음을 확인했습니다.</p>
                    <p>b) 출금이 플레이어가 법적 소유자인 계정으로 이체되는 경우;</p>
                    <p>c) Seabet이 요청한 추가 정보가 제공되었습니다. 그리고</p>
                    <p>d) 플레이어가 각 예치금에 대한 최소 베팅 요건을 준수했습니다.</p>
                    <p><b>8.2 </b>Seabet은 귀하의 계정 및 게임 활동을 조사할 수 있는 모든 권리를 보유합니다. Seabet이 귀하의 계정 또는 게임 활동이 본 서비스 약관 또는 관련 법률 또는 규정을 위반했다고 합리적으로 의심하는 경우, 조사를 수행하는 동안 단독 재량으로 추가 입금, 인출 및/또는 게임 플레이를 지연하거나 거부할 수 있습니다. 귀하는 Seabet이 조사의 성격에 대해 설명할 수 있는 위치에 있지 않을 수 있음을 인정하고 수락합니다.</p>
                    <p><b>8.3 </b>모든 인출은 당사가 달리 결정하거나 그렇게 할 수 없는 경우를 제외하고 입금할 때 귀하가 선택한 것과 동일한 지불 방법을 통해 이루어져야 합니다. 귀하가 여러 지불 방법을 사용하여 입금하는 경우, 당사는 귀하의 인출을 해당 지불 방법으로 분할하고 당사의 재량에 따라 자금 세탁 방지 정책 및 규정에 따라 해당 지불 방법을 통해 각 부분을 처리할 수 있는 권리를 보유합니다.</p>
                    <p><b>8.4 </b>지불 테이블의 기술적 오류, 인적 오류 또는 기타 사유로 인해 귀하의 Seabet 계정에 귀하의 소유가 아닌 상금을 실수로 입금하는 경우 해당 금액은 당사의 자산으로 유지되며 귀하의 Seabet 계정에서 차감됩니다. 당사가 오류를 인지하기 전에 귀하의 소유가 아닌 자금을 인출한 경우, 실수로 지불된 금액은 (법적으로 이용 가능할 수 있는 다른 구제책 및 조치를 침해하지 않고) 귀하가 당사에 빚진 부채를 구성합니다. 잘못된 크레딧이 있는 경우 이메일로 즉시 알려야 합니다.</p>

                    <p>FIAT 인출</p>
                    <p><b>8.5 </b>FIAT 출금을 요청하려면 입금액의 100%를 베팅해야 합니다.</p>
                    <p><b>8.6 </b>Seabet 계정에서의 출금은 플레이어가 Seabet에 조언한 대로 플레이어에게 전달되거나 플레이어 이름으로 된 은행 계좌로 이체되는 결제를 통해 이루어집니다. 인출을 처리하기 전에 Seabet은 필요하다고 판단되는 경우 강화된 실사를 수행할 권리를 보유합니다.</p>
                    <p><b>8.7 </b>최소 인출 금액은 인출을 수행할 때 웹사이트에서 확인됩니다.</p>
                    <p><b>8.8 </b>귀하가 여러 인출을 보류 중인 경우 Seabet은 모든 인출을 거부하고 모든 다중 인출의 합계로 하나의 인출을 수행하도록 요청할 권리가 있습니다.</p>
                    <p><b>8.9 </b>Seabet은 인출에 대해 수수료를 부과하지 않습니다. 그러나 사용하는 결제 수단에 추가 요금이 부과되는지 확인하는 것이 좋습니다. Seabet은 당사가 통제할 수 없는 은행과 같은 제3자가 귀하에게 부과하는 수수료 또는 처리 수수료에 대해 책임을 지지 않습니다.</p>

                    <p>암호화폐 출금</p>
                    <p><b>8.10 </b>암호화폐 출금은 유효한 출금 요청을 할 때 명시된 암호화폐 지갑 주소로 이루어집니다.</p>
                    <p><b>8.11 </b>Seabet은 출금에 대한 추가 KYC 확인 절차를 수행할 권리를 보유합니다. 폐쇄, 잠겨 있거나 제외된 계정에 보관된 자금을 회수하려는 플레이어는 (support{'@'}seabet.io)에 연락하는 것이 좋습니다.</p>
                    <p><b>8.12 </b>자금 세탁을 방지하기 위해 모든 거래를 점검해야 합니다. 플레이어가 웹사이트의 게임과 관련된 의심스러운 활동을 알게 된 경우 즉시 Seabet에 보고해야 합니다. Seabet은 자금세탁방지법 또는 주 당국이 요청한 기타 법적 근거에 따라 요청되는 경우 Seabet 계정을 일시 중지, 차단 또는 폐쇄하고 자금을 보류할 수 있습니다. 귀하는 귀하의 계정에 있는 자금이 플레이할 때 즉시 소비되며 당사는 귀하의 계정에 대한 반품, 환불 또는 소급 취소를 제공하지 않는다는 것을 인정합니다.</p>

                    <h3>9. 플레이어 자금 보호 및 지불 거절</h3>
                    <p><b>9.1 </b>귀하가 Seabet 계정에 예치한 모든 자금은 상금과 함께 귀하가 스포츠 및 게임 베팅을 하고 당사 서비스 사용과 관련하여 발생할 수 있는 수수료 또는 요금을 정산하기 위한 유일하고 특정한 목적을 위해 별도의 고객 은행 계좌/암호화폐 지갑에 보관됩니다. 이는 귀하의 자금이 다른 목적으로 사용되지 않도록 보호된다는 것을 의미합니다.</p>
                    <p><b>9.2 </b>귀하의 Seabet 계정과 관련하여 귀하에게 귀책사유로 인해 지불  거절, 취소 또는 지불 거부 또는 그 결과로 Seabet이 입은 손실이 발생하는 경우, 당사는 발생한 관련 금액에 대해 귀하에게 청구할 권리가 있습니다.</p>
                    <p><b>9.3 </b>당사는 언제든지 귀하가 Seabet에 지불해야 하는 금액에 대해 귀하의 계정에 있는 플러스 잔액을 상계할 수 있습니다.</p>
                    <h3>10. 베팅/베팅</h3>
                    <p><b>10.1 </b>귀하는 웹사이트에서 제공되는 시장/제품에 베팅/베팅을 할 수 있습니다. Seabet은 귀하로부터 어떠한 베팅/베팅을 수락할 의무가 없으며, 베팅/베팅은 귀하가 Seabet으로부터 귀하의 베팅/베팅 수락에 대한 확인을 받을 때 유효하고 확정된 것으로 간주되며, 따라서 Seabet이 수락한 것으로 간주됩니다.</p>
                    <p><b>10.2 </b>Seabet은 온라인(모바일 기기 포함)의 베팅/베팅만 허용합니다. 베팅/베팅은 다른 형식(우편, 이메일, 팩스 등)으로 허용되지 않으며 접수된 경우 무효가 됩니다(승패).</p>
                    <p><b>10.3 </b>베팅  /베팅의 세부 사항이 정확한지 확인하는 것은 귀하의 책임입니다. 베팅/베팅이 완료되면 귀하가 취소할 수 없습니다. 베팅은 귀하가 당사의 베팅 편집 기능을 사용해서만 변경할 수 있으며, 이 기능을 사용할 수 있습니다. Seabet은 관련 이벤트가 중단 또는 취소된 경우, 관련 베팅 또는 배당률에 명백한 오류가 있는 경우, 베팅이 약관을 위반한 경우 또는 법적 또는 규제상의 이유로 그렇게 해야 하는 경우에만 베팅/베팅을 취소하거나 수정할 수 있습니다.</p>
                    <p><b>10.4 </b>귀하의 자금은 베팅/베팅에 배치된 순서대로 할당되며 다른 용도로 사용할 수 없습니다. Seabet은 당시 또는 소급하여 할당된 자금과 관련된 베팅/베팅이 이루어진 후 이루어진 모든 거래를 무효화 및/또는 되돌릴 수 있는 권리를 보유합니다.</p>
                    <h3>11. 베팅/베팅 확인</h3>
                    <p><b>11.1 </b>베팅  /베팅은 귀하가 베팅/베팅 수락 확인을 받은 후에만 유효합니다. 귀하의 계정에 자금이 부족한 상태에서 이루어진 베팅/베팅은 무효 처리됩니다.</p>
                    <p><b>11.2 </b>귀하가 요청한 베팅/베팅은 Seabet이 수락한 후에만 유효합니다. 각 유효한 베팅/베팅은 고유한 거래 코드를 받게 됩니다. 당사는 고유한 거래 코드로 발행되지 않은 베팅/베팅의 정산에 대해 책임을 지지 않습니다. 베팅/베팅의 유효성이 확실하지 않은 경우 계정 내역을 확인하거나 고객 지원 팀(support{'@'}seabet.io)에 문의하십시오.</p>
                    <p><b>11.3 </b>베팅 내용과 관련하여 분쟁이 발생하는 경우, 귀하와 Seabet은 내부 통제 시스템의 Seabet 거래 로그 데이터베이스가 그러한 문제에 대한 궁극적인 권한이 될 것이라는 데 동의합니다.</p>
                    <h3>12. 보너스</h3>
                    <p><b>12.1 </b>Seabet은 단독 재량에 따라 수시로 다양한 보너스와 프로모션을 제공 할 수 있습니다. </p>

                    <p>적임</p>
                    <p><b>12.2 </b>Seabet 계정에 성공적으로 등록하면 Seabet 프로모션 및 보너스를 받을 수 있습니다. 본 계약을 수락하고 웹사이트에서 Seabet 계정을 등록함으로써 귀하는 Seabet이 귀하에게 제공하는 모든 프로모션 및 보너스와 관련된 규칙 및 규정을 준수함을 인정하고 수락하는 것입니다.</p>
                    <p>보너스 T & C</p>
                    <p><b>12.3 </b>모든 프로모션, 보너스  또는 특별 제안은 웹사이트에서 제공되는 모든 보너스의 명시적 약관 및 해당되는 경우 프로모션별 약관의 적용을 받으며, 귀하의 계정에 적립된 모든 보너스는 해당 약관을 준수하여 사용해야 합니다. 웹사이트에서 제공되는 프로모션, 보너스 또는 특별 제안을 수락함으로써 귀하는 그러한 프로모션, 보너스 또는 특별 제안의 이용 약관에 동의하고 보너스 잔액을 베팅에 사용하기 전에 항상 현금 잔액으로 베팅해야 함을 인정합니다. 당사는 언제든지 프로모션, 보너스 또는 특별 행사를 철회할 수 있는 권리를 보유합니다.</p>
                    <p>활성화 & 만료</p>
                    <p><b>12.4 </b>보너스 또는 프로모션을 활성화함으로써 귀하는 해당 이용 약관에도 동의함을 확인합니다.</p>
                    <p><b>12.5 </b>Seabet이 단독 재량으로 특정 고객, 프로모션, 보너스 또는 특별 제안에 대해 선택하지 않는 한, 프로모션, 보너스 또는 특별 제안의 만료일 이후 Seabet은 프로모션, 보너스 또는 특별 제안을 수락하거나 존중하지 않습니다. 만료 날짜는 특정 프로모션, 보너스 또는 특별 제안의 특정 규칙 또는 이용 약관에 명시되어 있습니다. 또한 Seabet은 단독 재량으로 보너스의 적립 또는 만료와 관련된 정책을 변경하거나 수정할 수 있는 권리를 보유합니다.</p>
                    <p><b>12.6 </b>보너스가 몰수되거나 비활성화되면 귀하는 더 이상 사용할 수 없습니다(그 이후에는 언제든지 다시 활성화할 수 없습니다). 귀하의 Seabet 계정 잔액에 이미 적립된 보너스 자금의 금액은 귀하가 계속 사용할 수 있습니다.</p>
                    <p>보너스 남용 및 사기</p>
                    <p><b>12.7 </b>Seabet이 서비스 플레이어가 보너스 또는 기타 프로모션을 남용하거나 남용하려고 시도하거나 Seabet이 채택한 정책의 남용 또는 선의의 부족을 통해 이익을 얻을 가능성이 있다고 판단하는 경우, Seabet은 단독 재량으로 플레이어로부터 보너스 또는 프로모션을 거부, 보류 또는 철회 할 수 있습니다.  또는 서비스, 소프트웨어에 대한 플레이어의 액세스를 종료하거나 일시적 또는 영구적으로 플레이어의 계정을 잠글 수 있습니다.</p>
                    <p><b>12.8 </b>웹사이트에서 한(1) 개의 계정만 개설할 수 있습니다. 보너스, 프로모션, 특별 행사 등을 축적할 목적으로 웹사이트에 여러 계정을 개설하는 것은 학대 행위로 간주됩니다.</p>

                    <p>Seabet 권리</p>
                    <p><b>12.9 </b>Seabet은 모든 비활성 계정 또는 "보너스 남용자"로 식별된 계정에서 보너스를 제거할 권리를 보유합니다.</p>
                    <p><b>12.10 </b>Seabet은 청구 기간 또는 둘 중 짧은 60일 이내에 청구되지 않은 모든 보너스를 취소할 수 있는 권리를 보유합니다.</p>
                    <p><b>12.11 </b>Seabet은 단독 설명에 따라 보너스를 취소할 수 있는 권리를 보유합니다.</p>

                    <h3>13. 권한/서비스 약관</h3>
                    <p><b>13.1 </b>귀하는 Seabet.io 웹사이트에 설명된 게임 규칙에 동의합니다. Seabet은 서비스의 발행, 유지 관리 및 종료에 대한 권한을 보유합니다. 서비스 사용 또는 분쟁 해결에 관한 Seabet 경영진의 결정은 최종적이며 검토하거나 항소할 수 없습니다.</p>

                    <h3>14. 금지된 사용</h3>
                    <p>개인 사용</p>
                    <p><b>14.1 </b>서비스는 사용자의 개인적인 용도로만 사용됩니다. 사용자는 자신의 개인적인 오락을 위해서만 베팅할 수 있습니다. 사용자는 담합, 스포츠 베팅 및/또는 서비스 남용을 목적으로 여러 계정을 만들 수 없습니다.</p>

                    <p>AML 및 제재 규정 준수</p>
                    <p><b>14.2 </b>Seabet은 다양한 관할권의 법률, 규정 및 규범에 따라 자금 세탁, 테러 자금 조달 또는 무역 제재 위반을 포함한 모든 형태의 불법 활동에 대한 서비스 사용을 명시적으로 금지하고 거부합니다. 이를 위해 서비스는 미국, 유럽 연합 또는 기타 글로벌 제재 또는 감시 목록의 적용을 받는 개인이나 단체에 제공되지 않습니다. 서비스를 사용함으로써 귀하는 귀하가 그러한 대상이 아님을 진술하고 보증합니다.</p>
                    <p>관할</p>
                    <p><b>14.3 </b>아프가니스탄, 호주, 벨라루스, 벨기에, 코트디부아르, 쿠바, 퀴라소, 체코, 콩고민주공화국, 덴마크, 프랑스, 독일, 그리스, 이란, 이라크, 이탈리아, 라이베리아, 리비아, 리투아니아, 네덜란드, 북한, 온타리오, 포르투갈, 세르비아, 슬로바키아, 남수단, 스페인, 수단, 시리아, 스위스, 영국, 미국, 짐바브웨(이하 "금지된 관할권")에 거주하거나 거주하는 사람은 서비스를 이용할 수 없습니다. 의심의 여지를 없애기 위해, 금지된 관할권에서 실제 현금 플레이에 참여하는 것에 대한 전술한 제한은 금지된 관할권에 있는 동안 다른 국가의 거주자 및 시민에게 동등하게 적용됩니다. 금지된 관할권 또는 제한된 관할권에 위치한 사람의 플레이 제한을 우회하려는 시도는 본 계약을 위반하는 것입니다. 우회 시도에는 Seabet이 귀하의 위치를 식별하기 위해 사용하는 정보를 조작하고 귀하의 위치 또는 거주지에 관한 허위 또는 오해의 소지가 있는 정보를 Seabet에 제공하는 것이 포함되지만 이에 국한되지 않습니다.</p>

                    <p><b>14.4 </b>지리적 차단 또는 관할권 제한을 우회하기 위해 VPN, 프록시 또는 유사한 서비스를 사용하거나 거주지에 대한 부정확하거나 오해의 소지가 있는 정보를 제공하여 귀하의 실제 위치를 조작하려는 시도는 본 서비스 약관의 5항을 위반하는 것입니다.</p>

                    <h3>15. 장비</h3>
                    <p><b>15.1 </b>귀하의 컴퓨터 장비 또는 모바일 장치 및 인터넷 연결은 웹사이트의 성능 및/또는 운영에 영향을 미칠 수 있습니다. Seabet은 웹사이트가 오류나 오류 없이 운영되거나 Seabet 서비스가 중단 없이 제공될 것이라고 보장하지 않습니다. Seabet은 귀하의 장비, 인터넷 연결 또는 인터넷 또는 통신 서비스 제공 업체로 인해 발생하는 모든 실패 또는 문제에 대해 어떠한 책임도지지 않습니다 (예를 들어, 귀하가 베팅 또는 베팅을 할 수 없거나 특정 이벤트와 관련하여 특정 정보를 보거나 수신 할 수없는 경우 포함).</p>
                    <p><b>15.2 </b>베팅  /베팅을 위해 모바일 장치를 사용하는 고객의 경우, Seabet은 소프트웨어가 설치된 모바일 장치의 손상 또는 데이터 손실에 대해 책임을 지지 않으며, 소프트웨어를 사용하는 동안 발생하는 통화, 데이터 또는 기타 요금에 대해서도 책임을 지지 않습니다.</p>
                    <p><b>15.3 </b>모바일  장치의 디스플레이 크기가 제한되어 있기 때문에 모바일 환경이 다른 플랫폼과 약간 다를 수 있습니다. 차이점에는 플랫폼에 있는 특정 정보의 위치와 모든 게임 페이지에 표시되지 않는 게임 이름이 포함될 수 있지만 이에 국한되지는 않습니다.</p>

                    <h3>16. 공정 사용</h3>
                    <p><b>16.1 </b>웹사이트 및 서비스는 이벤트 및/또는 게임 제품에 베팅 및 베팅을 함으로써 레크리에이션 목적으로만 사용할 수 있습니다.</p>
                    <p><b>16.2 </b>귀하는 제3자의 이익을 위해 또는 불법, 명예 훼손, 모욕 또는 외설적이거나 Seabet이 차별, 사기, 부정직 또는 부적절하다고 간주하는 목적으로 웹사이트를 사용해서는 안 됩니다. Seabet은 의심스럽거나 이 단락을 위반하는 것으로 간주되는 모든 활동을 당국에 보고할 수 있습니다.</p>
                    <p><b>16.3 </b>Seabet이 웹사이트 또는 서비스를 통해 또는 이와 관련하여 관련 법률에 명시된 사기, 부정직 또는 범죄 행위에 연루되어 있다는 합리적인 의심이 있는 경우 Seabet은 귀하에 대해 형사 및 계약상의 제재를 가할 수 있습니다. Seabet은 이러한 문제가 의심되거나 지불이 제3자의 이익을 위한 것으로 의심되는 경우 고객에게 지불을 보류합니다.</p>
                    <p><b>16.4 </b>귀하는 웹사이트 또는 서비스를 사용하는 동안 귀하의 사기, 부정직 또는 범죄 행위로 인해 직간접적으로 발생하는 모든 청구와 관련하여 당사 및 당사 계열사가 입거나 부담하는 모든 비용, 요금 또는 손실(직접, 간접 또는 결과적 손실, 이익 손실 및 평판 손실 포함)을 요청 시 Seabet에 면책하고 지불할 책임이 있습니다</p>
                    <p><b>16.5 </b>또한, 당사는 관련 법률 또는 규정에 따라 금지, 불법 또는 불법인 베팅/베팅을 수락, 처리 및/또는 존중하지 않을 권리가 있습니다.</p>

                    <h3>17. 소프트웨어 및 기술 문제</h3>
                    <p><b>17.1 </b>웹사이트 및 서비스를 사용하려면 일부 소프트웨어(예: 플래시 플레이어를 통해 제공되는 카지노 게임)를 다운로드해야 할 수 있습니다. 또한 특정 제3자 제품 제공업체는 웹사이트에서 또는 웹사이트를 통해 제공되는 제품 사용에 적용되는 추가 이용 약관에 동의하도록 요구할 수 있습니다. 이러한 제3자 이용 약관에 동의하지 않는 경우 관련 제3자 소프트웨어를 사용하지 마십시오. Seabet은 제3자 소프트웨어와 관련하여 어떠한 책임도 지지 않습니다.</p>
                    <p><b>17.2 </b>귀하는 웹사이트 및 서비스를 사용하기 위한 목적으로만 웹사이트를 통해 귀하에게 제공되는 모든 소프트웨어를 사용할 수 있으며, 관련 법률이 허용하는 범위를 제외하고 다른 목적으로는 사용할 수 없습니다.</p>
                    <p><b>17.3 </b>당사는 본 이용 약관에 따라 웹 사이트의 서비스에 액세스하고 사용하기 위한 목적으로만 웹 사이트를 사용할 수 있는 개인적이고 비독점적이며 양도 불가능한 권리를 귀하에게 부여합니다. 당사 웹사이트를 사용할 수 있는 이 권리는 어떤 이유로든 귀하의 사용자 등록이 취소되면 즉시 종료되며, 특히 귀하가 당사 웹사이트 또는 당사 제품을 기반으로 하는 병렬 기업을 생성할 목적으로 해당 권리를 사용하거나 자동화된 서비스 또는 소프트웨어 분석을 사용할 목적으로 해당 권리를 사용하는 경우,  당사 웹 사이트에 표시된 정보를 캡처하거나 사용하는 행위.</p>
                    <p><b>17.4 </b>귀하는 다음과 같은 행위를 할 수 없습니다.</p>
                    <p>a) 웹사이트의 일부를 구성하는 소프트웨어를 서버 또는 기타 네트워크 장치에 설치 또는 로드하거나 모든 형태의 "게시판", 온라인 서비스 또는 원격 전화 접속 또는 네트워크를 통해 다른 사람에게 소프트웨어를 제공하기 위한 다른 조치를 취합니다.</p>
                    <p>b) 웹 사이트 또는 웹 사이트의 일부를 구성하는 소프트웨어를 사용하거나 사본을 만들거나 배포 할 수있는 귀하의 권리 (본 이용 약관의 다른 곳에서 명시 적으로 제공된 경우 제외)를 서브 라이선스, 할당, 임대, 임대, 대여, 양도 또는 복사 할 수 있습니다.</p>
                    <p>c) Seabet의 보안 시스템에 들어가거나, 액세스하거나, 액세스하거나, 우회하거나, 제품 또는 웹사이트를 어떤 식으로든(로봇 또는 이와 유사한 장치를 포함하되 이에 국한되지 않음) 방해하거나, 소프트웨어 및/또는 기능 또는 구성 요소를 수정하려고 시도하는 행위;</p>
                    <p>d) '온라인' 또는 전자 형식으로 제공된 사용자 문서를 복사하거나 번역하는 행위.</p>
                    <p>e) 또한 컴퓨터 프로그램과 관련하여 관련 법률이 허용하는 최소 범위를 제외하고 귀하는 (i) 웹 사이트를 번역, 리버스 엔지니어링, 디 컴파일, 분해, 수정, 파생물 생성 또는 기타 방식으로 수정할 수 없습니다. 또는 (ii) 리버스 엔지니어링, 디 컴파일, 디스 어셈블, 수정, 개조, 번역, 웹 사이트의 일부를 구성하는 소프트웨어의 소스 코드를 발견하거나 웹 사이트의 전체 또는 일부를 기반으로 파생물을 만들려는 시도.</p>
                    <p><b>17.5 </b>귀하는 웹사이트의 일부를 구성하는 소프트웨어를 소유하지 않습니다. 이러한 소프트웨어는 Seabet 또는 제3자 소프트웨어 제공업체(이러한 제3자 제공업체, "소프트웨어 제공업체")의 독점 자산입니다. Seabet에 라이선스가 부여된 모든 소프트웨어 및 관련 문서는 소프트웨어 제공업체의 독점 제품이며 저작권법에 의해 전 세계적으로 보호됩니다. 소프트웨어를 사용한다고 해서 소프트웨어의 지적 재산권에 대한 소유권이 부여되는 것은 아닙니다.</p>
                    <p><b>17.6 </b>소프트웨어는 명시적이든 묵시적이든,  법적이든 아니든 어떠한 보증, 조건, 약속 또는 진술 없이 "있는 그대로" 제공됩니다. Seabet은 상품성, 상품성 품질, 만족스러운 품질 및 특정 목적에의 적합성, 서비스 또는 소프트웨어의 완전성 또는 정확성 또는 관련 법률 및 규정의 위반을 포함한 모든 묵시적 이용 약관 및 보증을 배제합니다. Seabet은 다음을 보증하거나 조건화하지 않습니다. </p>
                    <p>(i) 소프트웨어가 귀하의 요구 사항을 충족합니다. </p>
                    <p>(ii) 소프트웨어는 제3자의 지적 재산권을 침해하지 않습니다. </p>
                    <p>(iii) 소프트웨어 작동에 오류가 없거나 중단되지 않습니다. (iv) 소프트웨어의 모든 결함이 수정됩니다. 또는 </p>
                    <p>(v) 소프트웨어 또는 서버에 바이러스가 없습니다.</p>

                    <p><b>17.7 </b>계정 또는 소프트웨어의 기타 기능 또는 구성 요소의 정산과 관련하여 통신 또는 시스템 오류가 발생하는 경우 Seabet이나 소프트웨어 제공자는 그러한 오류와 관련하여 귀하 또는 제3자에게 어떠한 책임도 지지 않습니다. Seabet은 이러한 오류가 발생할 경우 웹사이트에서 모든 관련 제품을 제거하고 이러한 오류를 수정하기 위한 다른 조치를 취할 수 있는 권리를 보유합니다.</p>
                    <p><b>17.8 </b>귀하는 소프트웨어를 사용하는 방법이 Seabet의 통제 범위를 벗어난다는 것을 인정합니다. 따라서 귀하는 자신의 책임하에 소프트웨어를 설치 및/또는 사용합니다. Seabet은 귀하의 소프트웨어 수령 및/또는 사용과 관련하여 귀하 또는 제3자에게 어떠한 책임도 지지 않습니다.</p>
                    <p><b>17.9 </b>소프트웨어에는 소프트웨어 제공자 및/또는 Seabet에게 비밀이고 가치 있는 기밀 정보가 포함될 수 있습니다. 귀하는 본 이용 약관에 따라 엄격하게 준수하지 않는 한 기밀 정보를 사용하거나 공개할 수 없습니다.</p>
                    <p><b>17.10 </b>Seabet은 어떤 이유로든 웹사이트를 언제든지 또는 일정 기간 동안 사용할 수 없는 경우 책임을 지지 않습니다. 당사는 귀하의 액세스를 포함하여 웹사이트 및 웹사이트를 통해 제공되는 콘텐츠, 서비스 또는 제품의 모든 측면을 변경 또는 수정하거나 변경, 일시 중지 또는 중단할 수 있는 권리를 보유합니다.</p>
                    <p><b>17.11 </b>바이러스, 트로이 목마, 웜, 논리 폭탄 또는 기타 악의적이거나 기술적으로 유해한 자료를 도입하여 웹사이트를 오용해서는 안 됩니다. 특히, 귀하는 권한 없이 웹사이트에 액세스하거나, 웹사이트 또는 웹사이트의 일부, 웹사이트가 호스팅되는 장비 또는 네트워크, 웹사이트 제공과 관련하여 사용되는 소프트웨어, 또는 제3자가 소유하거나 사용하는 장비, 소프트웨어 또는 웹사이트를 방해, 손상 또는 방해해서는 안 됩니다. 서비스 거부 공격을 통해 당사 웹사이트를 공격해서는 안 됩니다. 당사는 귀하의 웹 사이트, 소프트웨어 사용 또는 웹 사이트 또는 링크 된 웹 사이트에 게시 된 자료의 다운로드로 인해 발생하는 귀하의 컴퓨터 장비, 컴퓨터 프로그램, 데이터 또는 기타 독점 자료를 감염시킬 수있는 분산 서비스 거부 공격, 바이러스 또는 기타 기술적으로 유해한 자료로 인한 손실 또는 손해에 대해 책임을지지 않습니다.</p>

                    <h3>18. 제3자 콘텐츠</h3>
                    <p><b>18.1 </b>Seabet은 여러 공급업체로부터 피드, 논평 및 콘텐츠를 받습니다. 특정 제3자 제품 제공업체는 피드, 논평 및 콘텐츠 사용에 적용되는 추가 이용 약관에 동의하도록 요구할 수 있습니다. 관련 제3자 이용 약관에 동의하지 않는 경우 관련 피드, 논평 또는 콘텐츠를 사용하지 않을 것에 동의합니다.</p>
                    <p><b>18.2 </b>Seabet은 제3자 피드, 논평 및 콘텐츠와 관련하여 어떠한 책임도 지지 않습니다.</p>
                    <p><b>18.3 </b>웹사이트에 제3자 웹사이트 및 리소스에 대한 링크가 포함되어 있는 경우 이러한 링크는 귀하의 정보 제공용으로만 제공됩니다. Seabet은 이러한 사이트 또는 리소스의 내용을 통제할 수 없으며, 해당 사이트 또는 리소스의 사용으로 인해 발생할 수 있는 손실 또는 손해에 대해 어떠한 책임도 지지 않습니다. 제3자 웹사이트에 대한 링크를 포함한다고 해서 해당 제3자의 웹사이트, 제품 또는 서비스(해당되는 경우)를 보증하는 것은 아닙니다.</p>

                    <h3>19. 오류</h3>
                    <p><b>19.1 </b>Seabet은 귀하가 고의적으로 악의적으로 행동한 경우 웹사이트의 베팅 또는 베팅과 관련하여 오류를 시도하거나 이익을 얻으려고 시도하는 경우 책임을 지지 않습니다. </p>
                    <p>(i) 관련 배당률, 스프레드, 핸디캡, 총계, 현금 인출에 명백한 오류가 있습니다. </p>
                    <p>(ii) Seabet은 폐쇄 또는 중단된 시장에 대한 베팅 또는 베팅을 계속 수락합니다. </p>
                    <p>(iii) Seabet이 전체 정산 금액에 대해 배팅이 현금화되거나 배팅이 잘못 무효가 된 경우, 배팅 시 '플레이어가 시작하지 않으면 무효'가 선택된 경우를 포함하여 정산 금액을 잘못 계산하거나 지불한 경우; 또는 게임이나 제품에 포함, 통합 또는 사용되는 난수 생성기 또는 지불 테이블에서 오류가 발생합니다.</p>

                    <h3>20. 포엽</h3>
                    <p><b>20.1 </b>다른 권리를 침해하지 않고, 사용자가 여기에 포함된 조항의 전부 또는 일부를 위반하는 경우, Seabet은 본 계약 또는 사용자와 체결한 기타 계약을 해지하거나 해당 사용자에 대해 법적 조치를 취하는 것을 포함하여 적절하다고 판단되는 조치를 취할 권리를 보유합니다.</p>
                    <p><b>20.2 </b>귀하는 다음의 결과로 발생할 수 있는 모든 청구, 요구, 책임, 손해, 손실, 비용 및 경비(법적 수수료 및 기타 비용 포함)에 대해 Seabet과 그 주주, 이사, 대리인 및 직원을 완전히 면책, 방어 및 보호하는 데 동의합니다.</p>
                    <p>a) 귀하의 본 계약 전체 또는 일부 위반</p>
                    <p>b) 귀하의 법률 또는 제3자 권리 침해 그리고</p>
                    <p>c) 귀하의 서비스 사용.</p>



                    <h3>21. 제한 및 책임</h3>
                    <p><b>21.1 </b>과실을 포함한 어떠한 상황에서도 Seabet은 Seabet이 그러한 손해의 가능성에 대해 사전에 알고 있었다 하더라도 서비스의 사용(또는 오용)으로 인해 발생하는 모든 특별, 부수적, 직접적, 간접적 또는 결과적 손해(사업 이익 손실, 사업 중단, 사업 정보 손실 또는 기타 금전적 손실에 대한 손해를 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다.</p>
                    <p><b>21.2 </b>본 계약의 어떠한 내용도 과실로 인한 사망 또는 부상에 대한 Seabet의 책임을 배제하거나 제한하지 않습니다.</p>

                    <h3>22. 지적 재산권</h3>
                    <p><b>22.1 </b>Seabet과 그 라이선스 제공자는 저작권, 영업 비밀, 지적 재산권 및 기타 권리를 포함하여 서비스 및 코드, 구조 및 조직에 대한 모든 권리의 유일한 소유자입니다. 관련 법률에 규정된 한도 내에서 다음을 수행할 수 없습니다. </p>
                    <p>(a) 웹 사이트를 복사, 배포, 게시, 리버스 엔지니어링, 디 컴파일, 분해, 수정 또는 번역하는 행위 또는 </p>
                    <p>(b) 관련 법률 또는 규정에서 금지하는 방식으로 서비스를 사용하는 행위(위의 각 행위는 "무단 사용"입니다). </p>
                    <p>Seabet은 본 계약에 따라 사용자에게 명시적으로 부여되지 않은 묵시적 또는 기타 모든 권리를 보유하며 서비스에 대한 모든 권리, 소유권 및 이권을 보유합니다. 귀하는 무단 사용으로 인한 귀하의 커미션으로 인해 또는 이와 관련하여 발생하는 모든 손해, 비용 또는 경비에 대해 전적으로 책임을 진다는 데 동의합니다. </p>
                    <p>귀하는 승인되지 않은 사용의 사람에 의한 커미션을 알게 되는 즉시 Seabet에 통지해야 하며, 이와 관련하여 귀하가 제공한 정보에 비추어 Seabet이 수행하는 모든 조사에 합당한 지원을 제공해야 합니다.</p>
                    <p><b>22.2 </b>"Seabet"이라는 용어, 도메인 이름 및 기타 상표 또는 Seabet이 서비스의 일부로 사용하는 서비스 마크(이하 "상표")는 Seabet이 단독으로 소유합니다. 또한 이미지, 그림, 그래픽, 사진, 애니메이션, 비디오, 음악, 오디오 및 텍스트(이하 "사이트 콘텐츠")를 포함하되 이에 국한되지 않는 웹사이트의 모든 콘텐츠는 Seabet에 속하며 저작권 및/또는 기타 지적 재산권 또는 기타 권리에 의해 보호됩니다. 귀하는 서비스를 사용함으로써 사이트 콘텐츠 및/또는 상표 또는 그 일부에 대한 어떠한 권리도 얻지 못함을 인정합니다. 어떠한 경우에도 Seabet의 사전 서면 동의 없이 사이트 콘텐츠 및/또는 상표를 사용할 수 없습니다. 또한 귀하는 Seabet의 지적 재산권을 포함하여 권리에 해를 끼치거나 잠재적으로 해를 끼칠 수 있는 어떠한 행위도 하지 않을 것에 동의합니다.</p>

                    <h3>23. 분쟁</h3>
                    <p><b>23.1 </b>사용자가 불만을 제기하고자 하는 경우, (support{'@'}seabet.io)번으로 Seabet의 고객 서비스 팀에 연락하시기 바랍니다. 분쟁이 만족스럽게 해결되지 않는 경우 아래에 명시된 준거법 관할권에서 구제책을 추구할 수 있습니다.</p>

                    <h3>24. 개정</h3>
                    <p><b>24.1 </b>Seabet은 언제든지 본 계약 또는 그 일부를 업데이트 또는 수정하거나 통지 없이 서비스를 변경할 수 있는 권리를 보유하며 귀하는 게시 시 수정된 계약에 구속됩니다. 따라서 해당 시점에 시행 중인 계약 버전에 포함된 이용 약관을 확인하는 것이 좋습니다. 귀하가 서비스를 계속 사용하는 것은 본 계약의 수정 사항에 대한 귀하의 동의를 증명하는 것으로 간주됩니다.</p>

                    <h3>25. 가분성</h3>
                    <p><b>25.1 </b>본 계약의 조항이 어떤 관할권  에서 불법, 무효 또는 집행 불가능하거나 불법이 되는 경우, 이는 본 계약의 다른 조항의 해당 관할권에서의 유효성 또는 집행 가능성 또는 해당 조항 또는 다른 조항의 다른 관할권에서의 유효성 또는 집행 가능성에 영향을 미치지 않습니다.</p>

                    <h3>26. 양도</h3>
                    <p><b>26.1 </b>Seabet은 사전 통지 없이 언제든지 본 계약의 전체 또는 일부를 양도할 수 있는 권리를 보유합니다. 사용자는 본 계약에 따른 자신의 권리나 의무를 양도할 수 없습니다.</p>

                    <h3>27. 기타</h3>
                    <p><b>27.1 </b>본 계약의 조항 위반에  대한 Seabet의 포기 (Seabet이 본 계약의 조항을 엄격하고 문자 그대로 이행하거나 준수하도록 요구하지 않는 경우 포함)는 어떤 식 으로든 해당 조항의 후속 위반 또는 본 계약의 다른 조항 위반에 대한 포기로 해석되지 않습니다.</p>
                    <p><b>27.2 </b>본  계약의 어떠한 내용도 본 계약의 당사자가 아닌 제3자를 위해 권리 또는 기타 혜택을 생성하거나 부여하지 않습니다.</p>
                    <p><b>27.3 </b>본 계약의 어떠한 내용도 귀하와 Seabet 간의 파트너십, 대행사, 신탁 약정, 신탁 관계 또는 합작 투자를 생성하거나 생성하는 것으로 간주되지 않습니다.</p>
                    <p><b>27.4 </b>Seabet은 본 계약을 다른 당사자에게 양도, 양도, 청구, 재라이선스 또는 기타 방식으로 거래하거나 본 계약에 따른 권리와 의무를 하도급할 수 있습니다.</p>
                    <p><b>27.5 </b>본 계약은 서비스에 관한 귀하와 Seabet 간의 완전한 이해와 합의를 구성하며 귀하와 Seabet 간의 이전 합의, 이해 또는 합의를 대체합니다.</p>

                    <h3>28. 불만 사항</h3>
                    <p><b>28.1 </b>당사 서비스와 관련하여 불만 사항이 있는 경우 라이브 채팅 또는 이메일(support{'@'}seabet.io)을 통해 고객 지원에 문의할 수 있습니다. 우리는 문제를 신속하게 해결하기 위해 노력할 것입니다.</p>

                  </div>`,
    responsibleContent: `<div>
                            <h2>책임감 있는 도박</h2>

                            <p>Seabet.io 에서; 우리가 제공하는 플랫폼과 서비스를 통해 고객은 게임과 베팅을 즐길 수 있습니다. 우리의 목표는 쾌적하고 보람 있는 경험을 제공하는 안전하고 규제된 환경을 제공하는 것입니다. 우리는 고객이 책임감 있고 합리적으로 서비스를 사용할 것을 권장합니다.</p>
                            <p>모든 종류의 카지노 게임은 수년 동안 인기를 얻었으며 Seabet.io 게임은 모든 사람에게 재미를 가져다 줄 수 있도록 설계되었습니다. 또한 플레이어가 게임이 일상 생활에 방해가 되지 않고 재미있게 즐기고 가족 및 친구들과 시간을 보낼 수 있도록 권장합니다. 게임에 지출한 금액이 인생의 모든 비용을 지불하고 남은 거스름돈이나 여분의 돈에 불과한지 확인하는 것이 중요하며, 게임에서 이익을 보장할 수 없기 때문에 게임이 생계를 유지하는 수단이 아니라는 것이 중요합니다.</p>
                            <p>대부분의 플레이어는 책임감 있고 정상적으로 플레이합니다. 그러나 불행히도 도박에 빠지는 문제가있는 소수의 플레이어가 있습니다. </p>
                            <p>Seabet.io  에서 플레이어의 삶의 질/심리는 우리에게 중요하며 책임감 있는 도박에서 우리의 역할을 매우 진지하게 받아들이고 다음과 같이 조언합니다.</p>
                            <ul>
                              <li>베팅과 게임을 오락을 위해 따로 마련한 돈만 사용하는 오락의 한 형태로 생각하십시오.</li>
                              <li>당신이 감당할 수 있는 것보다 더 많이 베팅하거나 베팅하지 마십시오.</li>
                              <li>잃을 여유가 없는 돈으로 내기하거나 내기하지 마십시오.</li>
                              <li>손실을 쫓지 마십시오.</li>
                              <li>베팅 및/또는 게임이 일반적으로 다른 활동에 보내는 시간을 빼앗지 않도록 하십시오.</li>
                            </ul>

                            <p>도박 습관에 대해 우려 사항이 있고 이러한 권장 사항을 따를 수 없다고 생각되면 도움과 조언을 제공할 수 있는 다음 공인 기관에 조언을 구하는 것이 좋습니다.</p>

                            <ul>
                              <li><a target="_blank" href="https://www.gamcare.org.uk/">갬케어</a></li>
                              <li><a target="_blank" href="https://keepitfun.rank.com/">재미를 유지하세요</a></li>
                              <li><a target="_blank" href="https://www.gamblingtherapy.org/">도박 치료</a></li>
                            </ul>

                            <p>또한 자체 배제 프로세스에 대해 알고 싶으시면  친절한 Seabet.io 고객 서비스에 이메일을 보내 (support{'@'}seabet.io)  할 수 있습니다. 때로는 짧은 휴식이 생각을 정리하고 평소와 다른 성급한 베팅 결정을 내리는 것을 막는 데 도움이 될 수 있습니다.</p>
                            <p>요청 시 최소 24시간의 냉각 기간을 통해 귀하의 계정을 배치합니다. 그 후, 지원 에이전트 중 한 명이 자발적인 1주, 1개월, 3개월, 6개월 또는 영구적인 자가 격리를 알려줄 것입니다.</p>
                            <p>유의하시기 바랍니다; 자체 제외 정책에 따라 폐쇄된 계정은 어떤 이유로든 취소하거나 다시 열 수 없습니다. 그러나 자체 제외가 만료되면 계정이 다시 활성화되었음을 알리는 이메일을 보내드립니다. 영구적 인 자체 배제는 무기한으로 존재할 것입니다.</p>

                            <p>미성년자</p>
                            <p>Seabet.io 에서 당사와 함께 도박을 하려면 18세 이상이거나 귀하에게 적용되는 법률에 따라 보유하고 있는 관할권에서 법적 최소 도박 연령(더 낮은 경우)이어야 합니다.</p>

                            <p>집에 미성년자가 있는 경우 장치에서 액세스할 수 있는 항목을 제어하고 제한하는 데 유용한 도구가 될 수 있는 자녀 보호 소프트웨어에 대한 다음 링크를 확인하는 것이 좋습니다.</p>

                            <ul>
                              <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                              <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                            </ul>
                          </div>`,
    amlContent: `<div>
                    <h2>자금 세탁 방지, 테러 자금 조달 선언문</h2>

                    <h3>1. 기업 비즈니스 모델</h3>
                    <p>Seabet은 현재 전 세계 169개국 이상에서 사용자를 지원합니다. 글로벌 운영의 일환으로 Seabet은 플랫폼에서 불법 활동을 방지하고 감지하도록 설계된 서비스 및 제품에 상응하는 규정 준수 조치를 수립했습니다. 여기에는 고객에 대한 온보딩 및 규정 준수 검사와 트랜잭션 기반 제어가 포함됩니다.</p>

                    <h3>2. 회사 정책 성명</h3>
                    <p>Seabet은 국가 자금 세탁 방지(AML) 법률, 규정 및 지침에 따라 자금 세탁, 테러 자금 조달 또는 무역 제재 위반을 포함한 모든 형태의 불법 활동에 Seabet 제품을 사용하는 것을 명시적으로 금지하고 거부합니다. Seabet은 FATF (Financial Action Task Force) 및 특정 게임 무역 조직 및 Curacao 도박 통제위원회가 정한 지침에 의해 설정된 매개 변수를 계속 모니터링하고 법의 변경 사항을 반영하는 데 적절하다고 판단되는 조치를 취할 것입니다. Seabet은 글로벌 모범 사례를 따르고 Seabet 제품이 이러한 활동을 촉진하는 데 사용되는 것을 방지하고자 합니다. 이러한 모범 사례는 다음과 같습니다.</p>
                    <ul>
                      <li>자금 세탁, 테러 자금 조달 및 무역 제재 위반을 방지하기 위해 서면 정책과 합리적으로 설계된 절차 및 통제를 채택합니다.</li>
                      <li>적절한 경우 정책, 절차 및 통제의 이행을 감독할 준법 감시인을 임명합니다.</li>
                      <li>관련 인력에게 관련 교육 및 훈련을 제공합니다.</li>
                      <li>정책, 절차 및 통제에 대한 독립적인 검토, 모니터링 및 유지 관리.</li>
                    </ul>

                    <h3>3. 정의</h3>
                    <p>다음 정의 용어는 업계에서 널리 사용됩니다.</p>
                    <p>자금 세탁: 불법적으로 얻은 수익금을 만드는 과정은 합법적인 것처럼 보입니다. 이 프로세스는 일반적으로 스토리지, 계층화 및 통합의 세 단계로 나뉩니다.</p>
                    <p>예금: 불법 수익금을 예금 또는 기타 수단을 통해 전통적인 금융 기관에 입금하는 과정.</p>
                    <p>계층화: 현금을 여행자 수표, 우편환, 전신 송금, 신용장, 주식, 채권 또는 자산 구매로 전환하는 것과 같은복잡한 수준의 금융 거래를 사용하여 범죄 행위의 수익을 출처에서 분리하는 프로세스입니다.</p>
                    <p>통합: 세탁된 자금이 범죄자에게 재분배될 수 있도록 불법 이득을 은폐하기 위해 겉보기에 합법적인 거래를 사용합니다. 현재 자금 세탁 자금을 정상적인 용도로 다시 통합하십시오.</p>
                    <p>의심스러운 활동: 거래를 하는 사람이 사기 또는 불법적인 목적일 수 있다는 징후가 있는 기관을 사용하여 사용자 또는 비사용자가 수행하는 활동입니다.</p>
                    <p>제재: 제재는 제재의 대상이 되는 활동을 금지하거나 제한하기 위해 국제 사회가 수행하는 활동입니다. 예를 들어 다음과 같은 용도로 사용됩니다.</p>
                    <ul>
                      <li>목표 국가 또는 정권이 행동을 바꾸도록 장려하는 행위</li>
                      <li>설정된 목표를 준수하도록 대상 국가에 압력을 가합니다.</li>
                      <li>국제 평화와 안보가 위협받고 외교적 노력이 실패할 때 법 집행을 위한 도구로서;</li>
                      <li>테러리스트 또는 테러 행위의 자금 조달을 방지하고 퇴치합니다.</li>
                    </ul>

                    <h3>4. 거버넌스 및 감독</h3>
                    <p>Seabet은 AML의 정책 및 정책 프로그램의 구현을 조정하기 위해 최고 준법 책임자(CCO)를 임명했습니다. 최고 준법 책임자의 책임에는 AML 계획 개발, AML 정책 수정을 위한 다른 이해 관계자와의 협력, 새로운 규제 요구 사항 평가 및 의심스럽거나 비정상적인 활동 가능성 조사도 포함됩니다. Seabet은 또한 모든 직원에게 정기적으로 AML 교육을 제공합니다.</p>

                    <h3>5. 교육과 훈련</h3>
                    <p>Seabet은 법률 고문의 도움과 CCO의 감독하에 필요에 따라 직원에게 정기적인 AML, CFT 및 무역 제재 준수 교육을 제공할 수 있습니다.</p>

                    <h3>6. Reports</h3>
                    <p>Seabet은 국가 법령에 따라 비정상적이거나 의심스러운 거래를 보고할 의무가 있습니다. 자금 세탁, 테러 자금 조달 또는 기타 범죄 활동과 관련된 제재 목록에서 확인된 고객은 의심스러운 활동으로 규제 기관에 보고됩니다.</p>
                  </div>`,
    selfExclusionContent: `<div>
                              <h2>자체 제외 정책</h2>
                              <p>더 이상 도박이나 도박을 안전하게 통제할 수 없다고 생각되면 당사에 베팅하지 않도록 스스로 배제할 수 있는 옵션을 제공합니다. 아래에 설명된 대로 냉각 기간을 시작하려면 계정 기본 설정을 방문하십시오.</p>

                              <h3>1. 개관</h3>
                              <p>대다수의 사람들에게 도박은 즐거운 여가 및 오락 활동입니다. 그러나 어떤 사람들에게는 도박이 부정적인 영향을 미칠 수 있습니다. 그 결과, 우리는 책임감 있는 도박에 대한 우리의 접근 방식을 전달하고 도박 문제에 취약할 수 있는 소비자의 피해를 최소화하기 위해 이 정책을 개발했습니다.</p>

                              <h3>2. 책임감 있는 도박이란 무엇입니까?</h3>
                              <p>"책임감 있는 도박"은 도박 문제와 관련된 피해 가능성을 최소화하는 방식으로 도박을 수행하는 것을 목표로 하는 광범위한 개념입니다. 자신의 행동에 대한 개인의 책임을 존중하지만 서비스 제공자의 책임도 인정합니다.</p>

                              <h3>3. 문제성 도박이란 무엇입니까?</h3>
                              <p>도박 문제는 도박에 대한 통제력을 잃을 때 발생하며, 특히 도박 금액과 도박에 소요되는 시간을 잃을 때 발생합니다.</p>

                              <h3>4. 고객 관리 원칙</h3>
                              <p>Seabet.io 는 고객에게 안전한 환경을 제공하는 업계 리더가 되고자 합니다. 우리는 책임감 있는 도박 관행을 적극적으로 장려하고 장려하며 고객이 도박을 통제할 수 있도록 지원하는 도구를 제공합니다.</p>

                              <h3>5. 책임감 있는 도박 정책</h3>
                              <p>우리는 고객이 도박을 통제할 수 있도록 돕고 문제 도박꾼이 문제를 식별하고 도움을 요청할 수 있도록 돕기 위해 정부, 지역 사회 및 개인과 책임을 공유하기 위해 최선을 다하고 있습니다.</p>
                              <p>이를 수행하는 몇 가지 방법은 다음과 같습니다: i. 고객이 당사와 함께 베팅하는 것을 (일시적 또는 영구적으로) 스스로 배제할 수 있도록 허용합니다. ii. 고객에게 책임감 있는 도박 정보 및 메시지 제공 iii. 입회식 및 적어도 매년 한 번 책임 있는 도박에 대해 직원을 교육합니다. iv. 도박 문제의 영향을 받는 고객을 도박 관련 지원 서비스에 소개합니다.</p>
                              <p>우리는 다음과 같은 결과를 달성하는 것을 목표로 합니다.</p>
                              <ul>
                                <li>개인과 더 넓은 지역 사회에 대한 도박 관련 피해의 정도를 최소화합니다.</li>
                                <li>고객이 도박 관행에 대해 정보에 입각한 결정을 내릴 수 있도록 합니다. </li>
                                <li>도박으로 인해 부정적인 영향을 받는 사람들이 시기적절하고 적절한 지원과 정보에 접근할 수 있도록 합니다. </li>
                                <li>개인, 지역 사회, 도박 산업 및 책임 있는 도박 관행에 대한 정부 간의 공유 이해를 촉진합니다. </li>
                                <li>도박 산업이 도박 제품 및 서비스 제공을 위한 안전하고 지원적인 환경을 제공하도록 합니다.</li>
                              </ul>

                              <h3>6. 미성년자</h3>
                              <p>책임 있는 운영자로서 우리는 미성년자가 베팅 플랫폼을 사용하여 베팅을 하지 못하도록 하는 조치를 적극적으로 취함으로써 미성년자를 보호하기 위해 최선을 다하고 있습니다. 당사의 서비스는 18세 이상의 사람들에게 어필하고 사용할 수 있도록 설계되었습니다.</p>

                              <h3>7. 필터링 옵션</h3>
                              <p>필터링 옵션을 활성화하여 사람들이 온라인 카지노 또는 온라인 스포츠 베팅 웹 사이트에 들어가는 것을 방지 할 수 있습니다. 미성년자가 귀하가 당사의 베팅 플랫폼에 액세스하는 데 사용하는 장치에 액세스할 수 있는 경우 필터링 소프트웨어를 사용하여 미성년자가 당사의 베팅 플랫폼에 액세스하는 것을 방지하는 것이 좋습니다.</p>

                              <h3>8. 추가 도움</h3>
                              <p>도움이 필요한 경우 support{'@'}seabet.io 또는 라이브 채팅 시스템을 통해 지원팀에 문의하면 상담원 중 한 명이 해당 국가에서 사용할 수 있는 협회 및 도움말 전화번호에 대한 세부 정보를 제공할 수 있습니다.</p>

                              <h3>9. 조건 및 프로세스</h3>
                              <p>자체 배제는 일정 시간 동안 베팅이나 도박을 중단하는 것을 의미합니다. 자체 배제는 일시적이거나 영구적일 수 있습니다.</p>
                              <p>제공되는 자체 제외 기간 중 하나를 요청하면 선택한 자체 제외에 대한 확인 이메일을 받은 순간부터 효력이 발생하는 다음 이용 약관에 동의하는 것이며, 이 이메일은 계정을 등록하는 데 사용된 이메일 주소로만 전송되며 자체 제외 완료 날짜가 표시됩니다.</p>
                              <p>채팅 기능을 통한 요청은 처리되지 않습니다. 그러나 고객 지원 담당자가 고객 지원 이메일 서비스로 안내합니다.</p>
                              <p>계정 폐쇄에 대한 이메일 요청을 받으면 요청된 계정과 연결된 모든 계정은 첫 번째 단계인 24시간 냉각 기간에 배치되어 귀하의 계정이 비활성화되어 도박 활동이 허용되지 않습니다. 이 시간이 지났으면; 귀하의 계정이 폐쇄된 상태로 유지되는 동안 고객 지원 담당자가 1주, 1개월, 6개월 및 영구 자체 제외 사용 가능 여부를 알려드립니다. 이 기간에는 변동이 없습니다. 이 프로세스를 진행하려면 이메일 응답이 필요합니다. 24시간 이내에 응답을 받지 못하면 계정이 다시 열리고 이메일로 확인됩니다.</p>

                              <p>자체 제외 옵션을 검토한 후 영구적인 자체 제외를 진행하기로 결정한 경우 메시지가 표시되면 제외 기간을 설정해야 합니다. 경우에 따라 당사는 계정이 필요하거나 고객에게 유익하다고 판단되는 경우 짧은 자체 제외 기간에 계정을 배치하기로 결정할 수 있습니다. 이것은 이메일로 전달됩니다. 위의 이용 약관이 적용됩니다.</p>

                              <p>자체 제외 기간 동안 계정에 잔액을 남겨둘 수 없습니다. 요청한 자체 제외 기간 동안 자금을 인출하기 위해 계정에 액세스할 수 없습니다. 활성 베팅이 있는 자체 제외의 영향을 받는 계정이 있는 경우 자체 제외 확인 시점에 현금 인출 기능이 적용됩니다. 베팅은 무효 처리되지 않습니다. 스테이크는 자체 제외 기간 동안 반환되거나 활성 상태로 유지되지 않습니다. 자체 제외 완료 후 베팅은 복원되지 않습니다. 자체 제외 상태에서는 어떤 형태의 혜택, 보너스 또는 재충전도 받을 수 없습니다.</p>

                              <p>자체 제외가 계정에 적용되면 요청 시간이 끝날 때까지 그대로 유지되며 어떤 이유로든 취소되거나 감소되지 않습니다. 영구적인 자체 제외는 무기한 폐쇄된 상태로 유지됩니다.</p>

                              <p>우리는 책임감 있는 도박 자체 배제 정책을 준수하기 위해 모든 합당한 노력을 기울일 것입니다. 그러나 귀하는 귀하가 새 계정을 개설하려고 시도하거나 실제로 성공하는 경우 당사가 책임을 지지 않는다는 데 동의합니다. 또한 이전에 공개되지 않은 추가 계정을 사용하여 계속 입금 및 베팅하는 경우 당사는 책임을 지지 않습니다. 요청된 자체 제외 시간 동안 향후 베팅, 보상 기금 및 프로모션 참가는 몰수되어 판돈이 반환되거나 상금이 지급되지 않습니다. 자체 제외 기간 이후에 계정이 다시 개설되면 이를 복원할 수 없습니다. 자체 격리 후 귀하는 다음 사항을 인정합니다.</p>

                              <p>귀하는 귀하가 선택한 자체 배제 기간 동안 제외를 요청한 귀하의 계정에 베팅을 시도, 입금 또는 베팅해서는 안 됩니다.</p>

                              <p>자체 제외 기간 동안 또는 영구적인 자체 제외가 선택된 경우 무기한으로 새 계정을 개설하려고 시도하거나 진행해서는 안 됩니다.</p>

                              <p>자체 제외 기간 동안 새 계정을 개설하는 데 성공하면 가능한 한 빨리 발견하여 해당 계정을 모두 폐쇄하기 위해 노력할 것입니다.</p>
                              <p>우리의 책임은 귀하가 당사 제품에 도박을 하는 것을 방지하기 위해 합당한 조치를 취하는 것입니다. 또한 이러한 합의된 조건을 위반하지 않는 것은 고객의 책임입니다.</p>

                              <p>자체 제외 요청은 귀하가 자발적으로 요청하는 것입니다. 귀하가 그러한 요청에 반하는 행동을 하는 경우, 그 직원이나 계열사는 귀하가 겪을 수 있는 손실에 대해 책임을 지지 않습니다. 본인 제외 기간 동안 발생한 손실은 환불되지 않습니다.</p>

                              <p>귀하가 자체 배제 요청에 반하는 행동을 하는 경우, 당사는 귀하가 한 베팅을 종료하거나 무효화하고 기타 적절한 조치를 취할 재량권을 보유합니다. 또한, 의심이 들거나 추가 조사를 통해 귀하가 귀하의 계정 또는 계정의 출처를 위장하려고 적극적으로 시도했다는 증거가 제공되어 귀하의 계정 또는 계정을 즉시 차단할 수 있는 당사의 능력에 영향을 미치는 경우, 회사는 귀하가 한 베팅을 종료 또는 무효화하고 기타 적절한 조치를 취할 수 있는 재량권을 보유합니다.</p>

                              <p>선택한 자체 제외가 종료되면 계정이 자동으로 다시 열립니다. 그러나 등록된 이메일 주소로 전송될 이 정보에 대한 확인 이메일을 받게 됩니다.</p>
                            </div>`,
    privacyContent: `<div>
                      <h2>개인 정보 보호 정책 </h2>
                      <p>Seabet.io 당사 서비스의 모든 사용자의 개인 정보를 존중하고 보호합니다. 이 개인 정보 보호 정책("정책")은 당사가 귀하의 개인 정보를 수집, 저장, 사용 및 공개하는 방법을 자세히 설명합니다.</p>
                      <h3>1. 범위와 적용 </h3>
                      <p>이 정책은 Seabet.io(이하 "웹사이트") 및 당사의 모든 모바일 애플리케이션 및 태블릿 애플리케이션을 포함하여 Seabet 브랜드의 모든 웹사이트 및 애플리케이션에 대한 귀하의 액세스 및 사용에 적용됩니다  . 또한 이 정책은 당사가 다른 방식으로 귀하와 상호 작용하는 경우에도 적용됩니다.</p>
                      <h3>2. 이용자의 동의 및 수정</h3>
                      <p>Seabet의 웹사이트를 사용함으로써, 귀하는 이 정책에 구속되는 것에 동의하게 됩니다. 당사는 단독 재량으로 언제든지 이 정책을 수정하거나 변경할 수 있는 권리를 보유하며 이러한 변경 사항을 사이트에 게시하고 이러한 변경 사항은 게시 즉시 효력을 발생합니다. 그러한 변경 후에도 사이트를 계속 사용하면 그러한 변경 사항을 수락하는 것으로 간주됩니다. 이 정책은이 웹 사이트에 링크 된 다른 웹 사이트에는 적용되지 않습니다.</p>
                      <p>3. 입니다. 수집하는 개인 정보</p>
                      <ul>
                        <li>당사는 다음과 같은 유형의 개인 정보를 수집하고 처리할 수 있습니다.</li>
                        <li>이름</li>
                        <li>이메일 주소</li>
                        <li>사용자가 제출한 기본 설정 정보</li>
                        <li>생년월일</li>
                        <li>국적</li>
                        <li>실제 주소</li>
                        <li>식별 번호 정부</li>
                        <li>정부 발급 신분증</li>
                        <li>위치 정보</li>
                        <li>기기 정보</li>
                        <li>IP 주소</li>
                      </ul>
                      <p>이 정보는 주로 귀하가 계정을 등록하거나 당사와 통신할 때 제공하는 정보에서 파생됩니다.</p>
                      <h3>4. 수집 목적</h3>
                      <p>당사는 다음을 위해 귀하의 개인 정보를 수집합니다.</p>
                      <ul>
                        <li>고객 신원 확인(KYC) 수행</li>
                        <li>귀하가 당사의 마케팅 커뮤니케이션을 구독할 수 있도록 하기 위해</li>
                        <li>회원 신청을 처리하려면</li>
                        <li>서비스 제공 및 개선</li>
                        <li>신원 확인 및 확인</li>
                        <li>당신과 의사 소통</li>
                        <li>시장 조사 및 판촉 활동 수행</li>
                        <li>귀하의 질문과 요청에 응답하기 위해</li>
                        <li>계약 및 법적 의무 준수</li>
                      </ul>


                      <p>5. 입니다. 개인정보의 이용 및 공개</p>
                      <p>당사는 마케팅 활동을 위해 귀하의 개인 정보를 사용할 수 있으며 이메일, 문자 메시지 또는 전화를 통해 귀하가 관심을 가질 것으로 생각되는 제품 또는 서비스에 대해 알려줄 수 있습니다. 더 이상 당사로부터 마케팅 또는 판촉 정보를 수신하지 않으려면 이메일로 연락하여 언제든지 구독을 취소할 수 있습니다.</p>
                      <h3>6. 개인정보의 안전성 확보</h3>
                      <p>사용자는 인터넷 데이터의 전송이 절대적으로 안전하지 Seabet.io 사용자가 플랫폼에 업로드한 정보의 절대적인 보안을 보장할 수 없음을 이해해야 하며 사용자는 위험을 감수해야 합니다. 다만, 이용자 Seabet.io 정보의 전송을 받은 후에는 이용자 개인정보의 오용, 분실, 무단 액세스, 수정 및 공개를 방지하기 위해 적절한 조치를 취합니다. 여기에는 시스템 및 데이터베이스의 암호 보호 사용과 SSL(Secure Sockets Layer) 기술 사용이 포함됩니다. 당사 서비스를 사용하거나 개인 정보를 제공함으로써 사용자는 서비스 사용과 관련된 보안, 개인 정보 보호 및 관리 문제와 관련하여 귀하와 전자적으로 통신할 수 있다는 데 동의합니다. Seabet.io 직원, 대리인 및 계약자는 회원의 개인 정보 및 거래를 기밀로 유지해야 합니다. 사용자가 공개 플랫폼 또는 소셜 미디어 환경(예: Facebook, Twitter)에 게시한 정보는 공개 정보로 간주 Seabet.io 이러한 정보의 보안은 보장할 수 없습니다.</p>
                      <p>우리는 우리의 서비스가 어린이를 대상으로하지 않으며 계정이나 개인 정보를 허용하지 않는다는 것을 강조합니다. 그러나 부모 또는 보호자는 자녀의 인터넷 활동을 모니터링할 의무가 있습니다. 특히 기기를 공유하는 경우 웹사이트 사용을 마치는 즉시 계정에서 로그아웃해야 합니다. 사용자는 웹 사이트에 액세스하는 데 사용되는 장치의 보안 및 액세스 권한에 대한 책임이 있습니다. 궁극적으로 사용자는 사용자 이름, 비밀번호 및 계정 정보의 기밀성을 유지하며 인터넷과 웹 사이트를 사용할 때주의를 기울입니다.</p>
                      <h3>7. 입니다. 개인정보에 대한 접근</h3>
                      <p>이용자는 웹사이트의 "설정" 링크를 클릭하거나 support{'@'}Seabet.io 에 이메일을 보내 Seabet.io 수집한 개인정보에 접근할 수  있습니다. 당사는 합리적인 기간 내에 사용자의 액세스 요청에 응답할 것입니다. 귀하의 요청을 준수할 수 없는 경우 액세스 거부 사유와 불만 제기 메커니즘을 서면으로 알려드립니다.</p>
                      <h3>8. 입니다.  개인 데이터 제거</h3>
                      <p>더 이상 사용자의 개인 데이터를 합법적으로 처리하거나 저장할 수 없는 경우 사용자는 삭제를 요청할 권리가 있습니다. 그러나 이 권리는 절대적인 것이 아니며 법적 의무가 Seabet.io 경우 사용자의 요구 사항을 충족할 수 없습니다. support{'@'}Seabet.io 로 이메일을 보내 요청하십시오.</p>
                      <h3>9. 입니다. 접촉</h3>
                      <p>귀하의 개인 정보 처리에 대한 질문, 요청 또는 불만 사항이 있는 경우 이메일 support{'@'}Seabet.io 또는 웹사이트 고객 지원 채팅 기능을 통해 당사에 문의하십시오.</p>



                      <h3>10. 국제 데이터 전송</h3>
                      <p>당사는 데이터 보호법이 귀하의 위치와 다를 수 있는 다른 국가를 포함하되 이에 국한되지 않는 전 세계적으로 정보를 전송, 처리 및 저장할 수 있습니다. 당사는 가능한 한 그리고 관련 법률에서 요구하는 바에 따라 귀하의 정보를 보호할 것입니다.</p>
                      <h3>11. 처리에 대한 법적 근거의 근원</h3>
                      <p>글로벌 일반 데이터 보호 규정에 따르면 귀하의 개인 정보 처리 Seabet.io 계약 이행, 정당한 이익, 사용자 동의 및 법적 의무 준수와 같은 법적 근거가 있습니다.</p>
                      <h3>12. 개인 정보 보호 정책 업데이트</h3>
                      <p>Seabet.io 우리의 관행과 책임을 반영하기 위해 본 개인 정보 보호 정책을 정기적으로 검토, 변경 및 업데이트 할 수 있습니다. 우리는 웹 사이트 Seabet.io 에 최신 개인 정보 보호 정책을 게시 할 것입니다. 사용자는 이 개인 정보 보호 정책을 주기적으로 검토하여 해당 약관을 숙지해야 합니다.</p>
                    </div>`,
    fairnessContent: `<div>
                        <h2>공정</h2>
                        <p>암호화폐를 포함한 법정 화폐로 베팅하려면 먼저 웹사이트에서 계정을 등록해야 Seabet.io. 귀하의 Seabet.io(이하 "웹사이트") 사용 및 Seabet.io 계정 개설은 본 이용 약관을 읽고 이해한 것으로 간주됩니다.</p>

                        <p>정의</p>
                        <p>Seabet.io – "당사" 또는 "회사"라고 합니다.</p>
                        <p>플레이어 – "귀하" 또는 "플레이어" 또는 "회원" 또는 "고객" 또는 "계정 소유자"라고 합니다.</p>
                        <p>게임 – 카지노 및 기타 RNG(난수 생성기) 게임을 말하며, 웹사이트에서 수시로 사용할 수 있습니다.</p>
                        <p>웹 사이트 – 데스크톱, 모바일 또는 기타 플랫폼을 통해 Seabet.io PlayerS에서 사용하는 웹 사이트를 의미합니다.</p>
                        <p>회원 계정 - 사이트에 액세스하고 사용하는 데 필요한 사용자 계정입니다.</p>
                        <p>고객 지원 - 회사가 고객에게 제공하는 지원 및 지원 서비스.</p>
                        <p>이벤트 - 고객이 결과에 베팅할 수 있는 스포츠 또는 베팅 이벤트 또는 스포츠 내의 경기 또는 게임을 의미합니다.</p>
                        <p>암호화폐  - "비트코인, 알트코인 및/또는 (해당되는 경우) 기타 지원되는 암호화폐"로 더 읽어야 합니다.</p>
                        <p>명목 화폐 - 금이나 은과 같이 정부 또는 중앙 은행 당국에서 발행한 지원되지 않는 화폐 실물 상품(예: 미국 달러, 브라질 헤알, 일본 엔, 사람).</p>
                        <p>제한된 관할권 - 당사 게임에 대한 제한의 적용을 받는 국가별 라이선스로, 해당 지역에 거주하거나 해당 지역에 거주하는 사용자는 사이트에 등록하고 플레이하는 것이 금지됩니다. 제한된 관할 구역 목록은 수시로 업데이트될 수 있으며 아래 링크를 통해 액세스할 수 있습니다.</p>

                        <h3>1. 일반</h3>
                        <p><b>1.1 </b>본 이용 약관 ( "이용 약관")은 스포츠 베팅 및 웹 사이트를 통해 액세스 할 수있는 카지노 스타일 게임 사용에 적용됩니다. </p>

                        <p><b>1.2 </b> 본 이용 약관은 등록 절차가 완료되는 즉시 효력을 발생하며, 여기에는 본 이용 약관에 동의하는 확인란을 선택하고 성공하는 것이 포함됩니다</p>
                        <p>계정을 만듭니다. 계정을 만든 후 사이트의 일부를 사용함으로써 귀하는 본 이용 약관이 사이트 사용에 적용된다는 데 동의하는 것입니다.</p>

                        <p><b>1.3 </b>계정 생성. 본 이용 약관의 조항에 동의하지 않는 경우 계정을 만들거나 사이트를 계속 사용해서는 안 됩니다. </p>

                        <p><b>1.4 </b>당사는 사전 통지 없이 언제든지 본 이용 약관을 수정할 수 있는 권리를 보유합니다. 당사가 그러한 변경을 하는 경우, 당사는 이메일이나 웹사이트 및 개정된 이용 약관을 통해 통지를 게시하는 등 이러한 변경 사항을 상기시키기 위한 적절한 조치를 취할 수 있지만, 수정, 업데이트 및/또는 수정 사항을 확인하는 것은 전적으로 귀하의 책임입니다. 본 약관의 변경 사항이 본 이용 약관에 따른 귀하의 권리 또는 의무에 "중대한" 영향을 미치는 것으로 간주되는 경우, 당사는 이메일이나 웹사이트에 게시하여 귀하에게 통지하기 위해 합당한 노력을 기울일 것입니다. 이용 약관에 대한 그러한 수정 후에도 회사의 서비스 및 웹 사이트를 계속 사용하는 것은 그러한 수정, 업데이트 및/또는 수정에 구속되는 것을 수락하고 동의하는 것으로 간주됩니다. </p>

                        <p><b>1.5 </b>본 이용 약관은 정보 제공 목적과 플레이어 액세스의 편의를 위해 여러 언어로 게시될 수 있습니다. 귀하와 당사와의 관계 및 번역 사이에 불일치가 있는 경우, 본 이용 약관의 영어 버전이 모든 종류에 우선합니다. </p>

                        <h3>2. 바인딩 선언</h3>
                        <p><b>2.1 </b>본 이용 약관에 구속되는 데 동의함으로써 귀하는 약관과 함께 참조로 통합 된 웹 사이트 규칙 및 개인 정보 보호 정책에 구속되는 데 동의합니다. 불일치가 있는 경우 본 이용 약관이 우선합니다. 귀하는 이로써 다음을 진술하고 보증합니다.</p>

                        <p><b>2.1.1 </b>귀하는 18세 이상입니다. </p>

                        <p><b>2.1.2 </b>귀하는 당사와 법적 구속력이 있는 계약을 체결할 수 있으며 어떠한 형태의 제한된 법적 능력도 적용되지 않습니다. </p>

                        <p><b>2.1.3 </b>귀하는 엄격하게 개인적이고 비전문적인 자격으로 게임에  참여합니다. 오락 및 오락 목적으로만 참여합니다. </p>

                        <p><b>2.1.4 </b>귀하는 다른 사람을 대표하지 않고 자신을 대표합니다. </p>

                        <p><b>2.1.5 </b>본 계약 기간 동안 귀하가 당사에 제공한 모든 정보는 사실이고 완전하며 정확하며 귀하는 그러한 정보에 대한 변경 사항을 즉시 당사에 알려야 합니다. </p>

                        <p><b>2.1.6 </b>귀하는 당사로부터 받은 상금에 대해 귀하의 거주지 또는 관련 법률에 따라 귀하에게 적용되는 모든 세금, 수수료, 요금 또는 세금을 보고하고 회계처리할 전적인 책임이 있습니다. </p>

                        <p><b>2.1.7 </b>귀하는 당사 서비스를 사용함으로써 귀하의 회원 계정에 예치된 자금을 잃을 위험을 감수하고 그러한 손실에 대한 전적인 책임이 귀하에게 있음을 인정합니다. </p>

                        <p><b>2.1.8 </b>귀하는 당사 서비스가 제한되는 당사 목록에 있는 관할권에서 당사 서비스를 사용하지 않습니다. </p>

                        <p><b>2.1.9 </b>귀하의 관할 구역에서 온라인 스포츠 베팅 및 카지노 서비스를 사용할 수 있습니다. </p>

                        <p><b>2.1.10 </b>회원 계정에 자금을 입금 및 출금하는 것과 관련하여 귀하는 암호화폐 및/또는 귀하에게 속한 유효하고 합법적인 명목 화폐만 사용할 수 있습니다. </p>

                        <p><b>2.1.11 </b>귀하는 Cryptocurrencies의 가치가 시장 가치에 따라 크게 다를 수 있음을 인정하고 인정합니다. </p>

                        <p><b>2.1.12 </b>당사가 귀하에게 제공하는 컴퓨터 소프트웨어, 컴퓨터 그래픽, 웹사이트 및 사용자 인터페이스는 저작권법에 따라 회사 또는 그 계열사가 소유하고 보호합니다. 귀하는 당사가 정한 모든 규칙, 이용 약관 및 Curaçao 게임 라이선스에 따른 모든 관련 법률, 규칙 및 규정에 따라 개인 오락 용도로만 소프트웨어를 사용할 수 있습니다. </p>

                        <p><b>2.1.13 </b>귀하는 암호 화폐가 법정 화폐 또는 통화로 간주되지 않으므로 웹 사이트 내재 가치가없는 가상 자금으로 간주됩니다. </p>

                        <p><b>2.1.14 </b>귀하는 회사의 임원, 이사, 직원, 컨설턴트 또는 대리인이 아니며 회사와 관련된 회사 또는 전술한 내용의 친척 또는 배우자를 위해 일하지 않음을 확인합니다. </p>

                        <p><b>2.1.15 </b>귀하는 강박 도박꾼 또는 문제성 도박꾼으로 진단되거나 분류되지 않았습니다. 당사는 서비스를 사용하는 동안 이러한 문제가 발생하는 경우 도박에 대해 책임을 지지 않지만 사용 가능한 관련 지원을 알리기 위해 노력할 것입니다. 당사는 그러한 조치가 유익하다고 판단되는 경우 냉각 기간을 시행할 권리가 있습니다. </p>

                        <p><b>2.1.16 </b>귀하가 정치적으로 노출된 사람 이거나 정치적으로 노출된 사람의 가족 구성원인 경우, 귀하는 당사가 이행할 수 있는 실사 의무를 이행하기 위해 사전 통지 없이 귀하의 계정을 검토하거나 일시 중지해야 할 수도 있음을 수락하고 인정합니다. 귀하는 귀하의 계정 상태에 관한 모든 결정이 전적으로 당사의 단독 재량에 따라 이루어지며, 여기에는 귀하의 계정을 영구적으로 폐쇄하는 것이 포함될 수 있음을 인정합니다. </p>

                        <p><b>2.1.17 </b>귀하는 당사에 하나의 계정만 가지고 있으며 당사에 어떠한 계정도 개설하지 않을 것에 동의합니다. </p>

                        <p><b>2.1.18 </b>귀하는 당사가 사기 쉬운 탐지, 자동 등록 및 등록, 게임 플레이 및 화면 캡처 기술을 포함하되 이에 국한되지 않는 금지된 기술의 사용을 탐지하고 방지할 권리를 보유함을 인정하고 인정합니다. 이러한 단계에는 플레이어 장치 가용성 확인, 지리적 위치 및 IP 마스킹 감지, 트랜잭션 및 블록체인 분석이 포함될 수 있지만 이에 국한되지는 않습니다. </p>

                        <p><b>2.1.19 </b>귀하는 당사가 웹사이트 사용을 종료 및/또는 변경하고 베팅을 거부 및/또는 제한하는 데 동의합니다. </p>

                        <h3>3. 회원 계정 등록 및 개설</h3>
                        <p><b>3.1 </b>당사 웹사이트에서 베팅을 하려면 먼저 당사에 직접 계정("회원 계정")을 등록해야 합니다. </p>

                        <p><b>3.2 </b>귀하는 등록할 수 없으며 제한된 관할권에서 수락하지 않습니다. 당사 웹 사이트에 대한 귀하의 액세스 및 사용이 귀하에게 적용되는 규칙, 법률 및 규정을 준수하는지 여부를 결정하는 것은 귀하의 책임이며, 귀하는 귀하가 거주하는 지역에서 도박이 불법이 아님을 보증합니다. 계정을 등록함으로써 당사와 사이트를 사용함으로써 귀하는 귀하가 제한된 관할권에 있거나 제한된 관할권에 있지 않으며 제한된 관할권에서 당사 웹사이트에 액세스하기 위해 제3자 소프트웨어를 사용하지 않음을 확인합니다. </p>

                        <p><b>3.3 </b>귀하가 제한된 관할권에 거주하거나 웹사이트를 열거나 사용하는 경우: 당사는 귀하의 계정을 즉시 폐쇄할 수 있습니다.  모든 상금 및  보상은 몰수되고 잔액은 환불되며(합리적인 수수료가 부과됨), 귀하가 획득한 모든 반품, 보너스 또는 누적된 보상은 귀하가 몰수하고 당사가 철회할 수 있습니다. 귀하는 요청 시 인출된 자금을 당사에 반환해야 합니다. </p>

                        <p><b>3.4 </b>귀하가 하나 이상의 회원 계정을 개설하려고 시도하는 경우, 당사는 귀하의 회원 계정을 차단, 정지 또는 폐쇄할 수 있을 뿐만 아니라 귀하의 계정에 입금된 모든 자금을 동결할 수 있는 권리를 보유합니다. </p>

                        <p><b>3.5 </b>등록된 회원 계정이 두 개 이상이라는 사실을 알게 된 경우 즉시 당사에 알려야 합니다. 그렇게 하지 않으면 회원 계정이 동결될 수 있습니다. </p>

                        <p><b>3.6 </b>당사는  귀하가 귀하의 계정과 관련된 부정확성 또는 귀하가 한 베팅과 관련된 계산 오류를 즉시 당사에 알릴 것을 기대합니다. 당사는 그러한 오류의 영향을 받는 모든 베팅을 무효화하고 그에 따라 취소할 수 있는 권리를 보유합니다. </p>

                        <p><b>3.7 </b>3개월 동안 잔액이 없는 계정을 사용하지 않으면 당사에서 통지를 받게 됩니다. 통지 후 1개월 이내에 잔액을 사용하지 않으면 자금을 보호하기 위해 계정에서 잔액을 제거할 수 있습니다. 이 경우 support{'@'}seabet.io 계좌를 다시 개설하고 자금을 돌려받으세요. </p>

                        <p><b>3.8 </b>귀하의 계정 잔액이 양수이고 12개월 이상 비활성 상태인 경우, 당사는 귀하의 잔액에서 5%에 해당하는 월별 관리 수수료를 공제할 권리가 있습니다</p>

                        <p><b>3.9 </b>등록 양식에 유효한 이메일 주소를 포함하여 필요한 모든 정보를 입력해야 합니다. 유효한 이메일 주소를 입력하지 않으면 "잊어버린 비밀번호"를  복구하는 데 도움을 드릴 수 없습니다. 귀하가 제공하는 정보가 사실이고 완전하며 정확한지 확인할 책임은 전적으로 귀하에게 있습니다. </p>

                        <p><b>3.10 </b>당사는 귀하가 허위 또는 오해의 소지가 있는 정보를 제공한 것으로 판단되는 경우 "KYC"(Know Your Customer) 확인 절차를 수행할 권리가 있습니다. </p>

                        <p><b>3.11 </b>등록 절차의 일환으로 귀하는 웹사이트에 대한 로그인 절차를 완료해야 합니다. 불쾌감을 주거나 논쟁의 여지가 없는 사용자 이름을 선택해야 합니다. 귀하는 귀하의 로그인 세부 정보의 보안에 대한 책임이 있으며 누구에게도 이를 누설하는 것이 엄격히 금지됩니다. 귀하는 의도적이든, 우발적이든, 적극적이든 수동적으로 제3자에게 제공되었든 공개의 결과로 제3자에 의한 귀하의 회원 계정 오용에 대한 책임이 있습니다. </p>

                        <p><b>3.12 </b>비밀번호를 변경하면 보안상의 이유로 48시간 동안 자금을 인출할 수 없습니다. </p>

                        <h3>4. 보안</h3>
                        <p><b>4.1 </b> 웹사이트를 통해 등록할 때 웹사이트를 사용하여 회원 계정을 인증하기 위해 비밀번호를 선택해야 합니다. </p>

                        <p><b>4.2 </b>귀하는 비밀번호를 기밀로 유지하고 비밀번호의 오용을 방지하는 데 동의합니다. 어떠한 경우에도 당사는 제3자가 귀하의 계정을 사용함으로써 입은 손실을 환불하지 않으며, 또한 귀하는 제3자가 귀하의 로그인 정보를 사용하는 것에 대해 전적으로 책임을 지며 발생하고 비난할 수 있는 결과로부터 당사를 보호해야 합니다. </p>

                        <p><b>4.3 </b>귀하는 귀하의 계정 정보가 제3자에 의해 오용되고 있다고 생각되는 경우 당사가 귀하의 계정을 정지할 수 있다는 데 동의합니다. 브라우저에서 자동 암호 메모리를 비활성화하고 2단계 인증 및 기타 조치를 사용하여 계정의 무단 사용 위험을 제한하는 것이 좋습니다. </p>

                        <h3>5. 예금</h3>
                        <p><b>5.1 </b>회원 계정에 참여를 위한 충분한 자금이 있는 경우에만 게임에 참여할 수 있습니다. </p>

                        <p><b>5.2 </b>암호화폐 또는 법정 화폐로 입금할 수 있습니다. 최소 입금액은 입금 센터에서 확인할 수 있습니다. 지정된 모든 최소 입금액은 거래당입니다. 더 작은 예금은 합산되지 않습니다. 지정된 최소 입금액 미만의 입금액은 유효하지 않으며 사용자 계정 잔액에 적립되거나 출처로 반환되지 않습니다. 보증금이 당사가 나열한 최소 보증금을 충족하지 않는 경우 회사는 요구 사항에 대해 책임을 지지 않습니다. </p>

                        <p><b>5.3 </b>회원 계정에 자금을 입금하려면 암호화폐 지갑과 귀하가 통제하는 계정에서 입금할 수 있습니다. 입금은 본인의 자금으로만 가능합니다. </p>

                        <p><b>5.4 </b>웹사이트는 모든 통화가 게임에서 기본적으로 지원된다고 보장할 수 없습니다. </p>

                        <p><b>5.5 </b> 귀하의 첫 입금 시점과 귀하의 계좌 수명 기간 동안 당사는 귀하의 입금을 처리할 때 귀하의 신원을 확인하기 위해 다른 절차와 방법을 사용할 권리가 있습니다. 확인에는 개인 식별이 포함됩니다. 또한 확인 절차의 일환으로 결제 수단 및 주소의 소유권을 확인하는 추가 문서가 필요할 수 있습니다. </p>

                        <p><b>5.6 </b>일부 결제 방법에는 추가 수수료가 포함될 수 있습니다. 이 경우 수수료는 계산원에게 명확하고 표시됩니다. </p>

                        <p><b>5.7 </b>귀하의 은행 또는 결제 서비스 제공업체는 이용 약관 및 사용자 전환 계약에 따라 입금 과정에서 추가 금전적 수수료를 청구할 수 있습니다. </p>

                        <h3>6. 출금</h3>
                        <p><b>6.1 </b> 모든 출금은 아래의 출금 정책에 따라 처리됩니다. 암호화폐 출금은 입력하신 암호화폐 지갑 주소가 유효할 때 요청됩니다. 돈을 인출하려면 먼저 계정 프로필에서 등록된 이메일 주소를 확인해야 합니다. 예치된 자금을 인출하려면 출금을 요청하기 전에 최소 3번의 블록체인 입금 확인을 수행해야 합니다. 법정화폐 인출은 유효한 인출이 이루어지는 시점에 개인 법정화폐 계정 요청에 적립되어야 합니다. 법정 화폐 인출은 결제 서비스 제공 업체가 승인 한 시점으로부터 영업일 기준 최대 3 일이 소요될 수 있습니다. </p>

                        <p><b>6.2 </b>최소 인출 금액은 인출 센터에서 확인할 수 있습니다. 지정된 모든 금액은 거래당입니다. </p>

                        <p><b>6.3 </b> 귀하의 계정에 잘못 입금된 상금 금액은 재산으로 유지되며 오류가 감지되는 경우 귀하의 계정에서 자동으로 차감됩니다. 입력이 올바르지 않은 경우 즉시 당사에 알려야 합니다. 귀하의 계정에 잘못 적립된 보너스가 이후에 귀하에 의해 인출된 경우(법적으로 이용 가능할 수 있는 다른 구제책 및 조치를 침해하지 않고) 귀하가 회사에 빚진 합법적인 법적 집행 가능한 부채를 구성합니다. 이러한 경우 당사는 귀하가 미지급 채무를 자발적으로 탕감하지 않을 경우 채무 회수 절차를 시작할 권리가 있습니다. </p>

                        <p><b>6.4 </b>법정화폐 및 암호화폐 출금의 경우 사이트는 출금 요청을 수락하기 전에 예치된 금액과 동일한 1배 베팅을 요구할 권리가 있습니다. </p>

                        <p><b>6.5 </b>당사는 당사의 만족을 위해 사진이 부착된 유효한 신분증, 주소 증명서 및/또는 직불 카드(KYC) 사본을 요청할 때까지 인출 요청 처리를 차단/지연할 권리가 있습니다. </p>

                        <p><b>6.6 </b>웹사이트는 규제된  게임 라이선스에 따라 €2500 또는 이에 상응하는 금액을 초과하는 암호화폐를 인출하기 위해 콘텐츠에 대해 추가 KYC 확인 절차를 수행할 수 있는 권리를 보유하며, 게임 라이선스에서 요구하는 대로 인출이 적은 경우 이러한 확인 절차를 수행할 권리를 보유합니다. 회수를 원하는 계정 소유자는 폐쇄, 잠김 또는 제외된 계정에 보관된 자금에 대해 고객 지원에 문의하는 것이 좋습니다. </p>

                        <p><b>6.7 </b>자금세탁을 방지하기 위해 모든 거래를 점검해야 합니다. 사이트는 자금세탁방지법 또는 자금세탁방지법에서 요구하는 기타 법적 근거 또는 자금세탁방지법에서 요구하는 기타 법적 근거에 따라 귀하의 회원 계정을 정지, 동결 또는 폐쇄하고 자금을 보류할 수 있습니다(필요한 경우). 인출은 베팅이 아닌 강화된 실사의 대상이 될 수 있습니다.  그리고 귀하가 인출을 처리하지 못하는 경우, 당사는 그러한 추가 실사 요구 사항을 준수하기 위해 인출을 처리하지 않을 권리가 있습니다. </p>

                        <p><b>6.8 </b>당사는 사용자가 당사 서비스를 믹서로 사용하고 있다고 의심되는 경우 보증금의 최소 5배에 해당하는 베팅 요건을 적용할 권리가 있습니다. 오락 이외의 목적으로 당사 서비스를 사용하는 것은 엄격히 금지됩니다. </p>

                        <p><b>6.9 </b>귀하는 게임을 플레이하는 동안 귀하의 계정에 있는 자금이 즉시 소진되며 당사가 귀하의 계정에 대한 반품, 환불 또는 소급 취소를 제공하지 않음을 인정합니다. </p>

                        <p><b>6.10 </b>출금 요청이 많은 경우 당사는 완전히 결제될 때까지 주당 최대 1,000,000 USDT 또는 이에 상응하는 금액을 다른 통화로 처리하도록 선택할 수 있습니다. </p>

                        <p><b>6.11 </b>당사는 귀하가 인출한 금액의 거래 수수료 또는 기타 비용에서 발생한 거래 또는 기타 수수료를 공제할 권리가 있습니다.</p>

                        <p><b>6.12 </b>귀하는 특정 프로모션에 인출 제한 및/또는 프로모션에 자금이 적립되기 전에 충족해야 하는 요구 사항이 적용될 수 있음을 인정합니다. 이러한 약관은 프로모션의 일부로 공식적으로 게시되고 제공됩니다. 해당 베팅 요건이 충족되기 전에 출금을 선택하면 출금이 승인되기 전에 전체 보너스 금액과 보너스 사용과 관련된 금액을 공제합니다. 이 웹사이트는 개별 보상 프로그램에 대한 자체 권리, 재량, 지리적 제한을 부과할 권리가 있습니다. </p>

                        <p><b>6.13 </b>일부 결제 방법에는 추가 수수료가 포함될 수 있습니다. 이 경우 수수료는 계산원에게 명확하게 표시됩니다. </p>

                        <p><b>6.14 </b>귀하의 은행 또는 결제 서비스 제공 업체는 이용 약관 및 사용자 계약에 따라 입금, 환전 인출에 대해 추가 수수료를 부과 할 수 있습니다. </p>

                        <h3>7. 자금</h3>
                        <p><b>7.1 </b>고객은 지갑과 통화 간에 자금을 이체하거나 전환할 수 없습니다. </p>

                        <p><b>7.2 </b>귀하는 웹사이트의 입금 페이지에서 암호화폐 입금에 필요한 세부 정보를 제공했습니다. </p>

                        <p><b>7.3 </b>당사는 서비스 사용에 대한 크레딧을 제공하지 않습니다. </p>

                        <p><b>7.4 </b>귀하는 웹사이트에 보유하고 있는 잔액에 대해 어떠한 이자도 받지 않으며 회사가 금융 기관이 아님을 인정합니다. </p>

                        <p><b>7.5 </b>어떤 유형의 오류 또는 인출 요청으로 인해 어떤 이유로든 귀하의 계정이 두 번 이상 처리되는 경우, 귀하는 그러한 초과 인출 금액을 웹사이트에 전액 상환하는 데 동의합니다. </p>

                        <p><b>7.6 </b>당사의 단독 재량에 따라 귀하가 "이중 지출" 방법을 사용하고 있다고 판단되면 웹사이트는 모든 베팅과 보너스를 무효화합니다. 특히, 당첨되면 입금 블록체인을 확인하고 출금을 시도하면 모든 상금이 몰수되고 계정이 몰수되고 영구적으로 폐쇄됩니다. 연결된 계정에서 다운로드하려는 경우. </p>


                        <h3>8. 보상 및 프로모션</h3>
                        <p><b>8.1 </b>웹사이트는  프로모션의 별도 이용 약관에 달리 명시되지 않는 한, 보상이 잘못 설정되었거나 남용되고 있다고 판단되는 경우 프로모션, 보상 또는 보상 프로그램(무료 금전적 보상, 보증금 보상, 보증금 보너스 및 로열티 프로그램을 포함하되 이에 국한되지 않음)을 취소할 수 있는 권리를 보유합니다.  리워드 또는 특별 제안 및 해당 리워드가 지급된 경우, 당사는 출금 요청을 거부하고 귀하의 계정에서 해당 금액을 공제할 권리가 있습니다. 보상이 잘못 설정되었는지 또는 남용되었는지 여부는 웹 사이트의 단독 재량에 따라 결정됩니다. </p>

                        <p><b>8.2 </b>입금 보너스를 사용하는 경우, 이전에 원래 입금을 인출하고 입금 약관에 명시된 요구 사항을 충족한 보너스를 수락하지 않습니다. </p>

                        <p><b>8.3 </b>오퍼 또는 프로모션의 조건을 위반  하거나 개별적으로든 그룹의 일부로든 결과에 관계없이 입금 보너스, 향상된 지불, 무료 베팅, 무위험 베팅 또는 기타 프로모션 제안 결과 보장으로 인해 고객 또는 고객 그룹이 일련의 베팅을 했다는 증거가 있는 경우,  고객 이익 웹사이트는 그러한 제안의 보너스 요소를 회수할 수 있는 권리를 보유하며 정확한 배당률로 베팅을 정산하거나, 무료 베팅 보너스 및 위험 부담 없는 베팅을 취소하거나, 입금 보너스로 자금을 조달한 베팅을 취소할 수 있는 절대적인 재량권의 절대적인 가치를 보유합니다. 또한이 웹 사이트는 입금 보너스, 무료 베팅 보너스, 무위험 베팅 또는 관리 수수료를 충당하기 위해 추가 지불의 가치까지 고객에게 관리 수수료를 부과 할 권리를 보유합니다. 우리는 또한 고객에게 제공된 보상, 무료 베팅, 무위험 베팅 또는 계정에 대한 절대적인 만족을 위해 충분한 문서를 제공하도록 요구할 권리가 있습니다. </p>

                        <p><b>8.4 </b>모든 웹사이트 오퍼링은 캐주얼 플레이어를 위한 것이며 웹사이트는 단독 재량에 따라 프로모션의 전체 또는 일부에 참여할 수 있는 고객의 자격을 제한할 수 있습니다. </p>

                        <p><b>8.5 </b>웹사이트는 단독 재량으로 프로모션을 수정, 취소, 철회 또는 거부할 수 있는 권리를 보유합니다. </p>

                        <p><b>8.6 </b>리워드는 개인/계정, 세대, 세대, 주소, 이메일 주소, IP 주소 및 컴퓨터 공유 환경(대학, 학교, 공공장소, 도서관, 직장 등)당 한 번만 청구할 수 있습니다. 회사는 남용/사기의 증거가 발견될 경우 귀하의 계정을 폐쇄하고 기존 자금을 몰수할 수 있는 권리를 보유합니다. </p>

                        <p><b>8.7 </b>귀하는 프로모션, 보상 및 특별 행사에 대한 별도의 이용 약관과 본 이용 약관에 대한 보충 사항이 다음 영역에 존재한다는 것을 인정하고 이해합니다. 이러한 이용 약관은 웹사이트의 각 콘텐츠 페이지에 명시되어 있으며, 경우에 따라 귀하에게 개인적으로 제공됩니다. 그러한 프로모션, 보상 및 특별 행사의 조항과 본 약관의 조항이 상충하는 경우, 그러한 프로모션, 보상 및 특별 행사의 조항이 우선합니다. </p>

                        <p><b>8.8 </b>당사는 귀하의 계정에 적립 된 보너스 자금을 사용하여 귀하의 예금에 일정 금액을 베팅 할 것을 주장 할 권리가 있습니다. 정확한 금액은 프로모션 약관에 명시된 대로 요구됩니다. </p>

                        <p><b>8.9 </b> 특정 프로모션에 대한 귀하의 참여는 철회 제한의 대상이 될 수 있으며, 프로모션에 자금이 적립되기 전에 특정 요구 사항이 필요할 수 있습니다. 본 약관은 프로모션의 일환으로 귀하가 참조할 수 있도록 공식적으로 게시됩니다. 해당 베팅 요건이 충족되지 않을 경우 출금을 선택하면 출금 요청을 승인하기 전에 귀하의 계정에서 전체 보너스 금액과 보너스 사용으로 인해 발생하는 모든 관련 상금을 공제합니다</p>
                        <p><b>8.10 </b>프리베팅을 사용하여 베팅한 당첨금은 "총 수익에서 베팅한 금액(무료 베팅 금액 포함)"을 뺀 금액으로 계산됩니다. 따라서 귀하의 무료 베팅 금액은 귀하의 무료 베팅에 포함되지 않으며 귀하의 무료 베팅으로 사용할 수도 없습니다. </p>

                        <p><b>8.11 </b>베팅이 무효인 경우 무료 베팅의 판돈은 환불되지 않습니다. </p>

                        <p><b>8.12 </b>프로모션, 리워드 또는 특별 행사에 달리 명시되지 않는 한 회원 계정으로 리워드를 받아야 합니다. 리워드 및/또는 리워드 프로그램을 수령한 후 72시간 이내에 사용하지 않는 경우, 이 웹사이트는 그러한 리워드 및/또는 리워드 프로그램을 취소할 수 있는 권리를 보유하며 72시간 직후에 보너스 또는 유사한 리워드 또는 무료 로테이션에 대한 리워드 또는 이와 유사한 리워드를 공제할 수 있습니다. </p>

                        <p><b>8.13 </b>보상(무료 베팅 또는 무료 스핀을 포함하되 이에 국한되지 않음)을 제공할 때 고객 의견, 의견, 피드백 또는 행동을 교환할 때 이러한 인센티브는 해당 기간 동안 사용자당 한 번의 설문조사/프로모션으로 엄격하게 제한됩니다. </p>

                        <p><b>8.14 </b>프로모션은 정보 제공 및 플레이어 액세스를 위해 여러 언어로 게시될 수 있습니다. 영어 버전은 귀하와 당사와의 관계에 대한 유일한 법적 근거이며 모든 유형의 번역에 불일치가 있는 경우 영어가 본 이용 약관의 버전보다 우선합니다. </p>

                        <p><b>8.15 </b>일부 게임은 최대 상금이 다를 수 있습니다. 이 경우 해당 제한 사항은 게임 내 정보 페이지에 표시됩니다. </p>

                        <p><b>8.16 </b>특정 카지노 게임에는 로열티 및 보상 베팅이 포함되지 않습니다. </p>

                        <p><b>8.17 </b>베팅 보너스의 경우, 플레이어는 출금하기 전에 보너스와 지정된 수의 상금을 포기해야 합니다. 베팅하기</p>
                        <p>보상 크레딧의 기여도는 게임 카테고리에 따라 다릅니다. 분석은 다음과 같습니다. 슬롯 – 100% 테이블 게임 – 20% 라이브 딜러 게임 – 20%</p>

                        <p><b>8.18 </b> 특정 프로모션은 취소 및/또는 취소될 수 있으며 특정 기간 및 특정 조건 하에서만 제공될 수 있습니다. 관심 있는 콘텐츠의 홍보가 계속 제공되는지, 자격이 있는지, 아래 약관 중 하나를 이해하고 적용하는지, 해당되는 경우 선택했는지 확인해야 합니다. </p>

                        <h3>9. 회원 계정 해지</h3>
                        <p><b>9.1 </b>회원 계정을 해지하려면 언제든지 이메일을 통해 서면으로 고객 지원에 문의할 수 있습니다. 계정을 효과적으로 폐쇄하면 그에 따라 이용 약관이 종료됩니다. 계정 폐쇄의 이유가 도박 중독 또는 도박 문제에 대한 우려와 관련된 경우 계정 폐쇄 요청 시 서면으로 작성했음을 표시해야 합니다. 도박 문제의 공개에 대한 책임이 없거나 계정 폐쇄 사유를 제시하는 경우 이메일을 통해 계정 재활성화를 요청할 수 있습니다. 계정 재활성화는 당사의 단독 재량에 따릅니다. 우리는 부활을 거부 할 권리가 있습니다. </p>

                        <p><b>9.2 </b>웹사이트는 사전 통지나 이유를 진술하거나 증명할 의무 없이 단독 재량으로 회원의 계정을 거부하거나 폐쇄할 수 있는 권리를 보유합니다. 사기, 자금 세탁 또는 불법 행위가 의심되는 경우, 귀하의 계정이 폐쇄되기 전에 귀하의 계정 잔액을 귀하가 선택한 암호화폐 지갑(계정 잔액 기준)으로 이체합니다. 귀하의 법정 화폐 계정 잔액은 귀하의 공예품과 함께 입금됩니다. 입금 전용 방법을 사용하는 경우 계좌가 폐쇄되기 전에 귀하에게 연락하여 자금에 대한 다른 반환 방법을 찾을 것입니다. </p>

                        <h3>10. 지원 서비스</h3>
                        <p><b>10.1 </b>귀하가 웹사이트를 사용하는 과정에서 당사는 다양한 방법으로 지원 서비스 커뮤니케이션 채널을 제공할 수 있으며, 이는 당사가 검토하고 통제합니다. </p>

                        <p><b>10.2 </b>우리는 모든 커뮤니케이션 채널을 통해 리뷰와 기록을 보관합니다. 귀하의 지원 서비스 이용은 지원 및 정보 제공을 위한 것이어야 합니다. </p>

                        <p><b>10.3 </b>다음과 같은 경우 당사는 실시간 지원 서비스를 삭제 또는 제한하거나 귀하의 회원 계정을 즉시 해지하고 계정 잔액을 환불할 수 있는 권리를 보유합니다.</p>
                        <p>(a) 욕설, 편견, 인종 차별 또는 증오의 표현을 포함하되 이에 국한되지 않는 모욕적, 모욕적, 명예 훼손적, 괴롭힘, 노골적 또는 심각하게 모욕적인 진술을 하거나 자료를 공유하는 행위</p>
                        <p>(b) 당사의 지원 서비스 중 하나를 사용하여 다른 온라인 법인을 광고, 홍보 또는 관련시키는 행위</p>
                        <p>(c) 예를 들어 동일한 사례, 거래 또는 특성에 대해 반복적인 허위 진술을 통해 당사 서비스를 부당하게 이용하려고 시도하는 것으로 합리적으로 믿어지는 경우;</p>
                        <p>(d) 회사 또는 사이트에 연결된 다른 인터넷 사이트에 대한 진술을 거짓 및/또는 악의적으로 진술하거나 회사에 피해를 입히는 행위</p>
                        <p>(e) 당사의 지원 서비스를 사용하여 공모, 불법 행위에 가담하거나 매우 부적절하다고 생각되는 행위를 조장하는 행위. 의심스러운 활동에 대한 모든 진술은 관할 당국에 보고될 수 있습니다.</p>

                        <p><b>10.4 </b> 당사의 지원 서비스는 귀하와 당사 간의 커뮤니케이션 형태로 사용되며 당사의 사전 동의 없이 복사하거나 제3자와 공유해서는 안 됩니다. </p>

                        <h3>11. 일반 베팅 규칙</h3>
                        <p><b>11.1.</b> 베팅은 등록된 계정 소유자만 할 수 있습니다. </p>

                        <p><b>11.2 </b>베팅 및 수락된 베팅은 귀하가 수정, 취소 또는 취소할 수 없습니다. 웹사이트에서 모든 베팅 목록, 상태 및 세부 정보를 찾을 수 있습니다. </p>

                        <p><b>11.3 </b>베팅은 인터넷을 통해서만 할 수 있습니다. </p>

                        <p><b>11.4 </b>웹사이트의 계정에 충분한 자금이 있는 경우에만 베팅을 할 수 있습니다. </p>

                        <p><b>11.5 </b>베팅이 종료되면 시행 중인 이용 약관의 적용을 받으며 베팅 수락 시점에 웹사이트에서 사용할 수 있습니다. </p>

                        <p><b>11.6 </b>승리한 베팅에 대한 모든 지불금은 베팅에 판돈을 곱할 확률을 포함하여 귀하의 계정에 적립됩니다. </p>

                        <p><b>11.7 </b> 베팅을 할 때 귀하는 웹사이트에 설명된 베팅에 관한 모든 이용 약관을 읽고 완전히 이해했음을 인정합니다. </p>

                        <p><b>11.8 </b>웹사이트는 귀하의 계정을 관리하고 사용 가능한 자금, 보류 중인 자금, 베팅 자금 및 보너스 금액을 계산합니다. 이 금액은 최종적인 것으로 간주되며 명백한 오류 없이 문의, 외부 감사 또는 조사를 기반으로 수정되지 않습니다. </p>

                        <p><b>11.9 </b>베팅에 대한 책임은 전적으로 귀하에게 있습니다. </p>

                        <p><b>11.10 </b>상금은 최종 결과가 공식적으로 확인되면 귀하의 계정에서 관련 스포츠 또는 대회의 관리 기관에 지급됩니다. </p>

                        <p><b>11.11 </b>규제 기관이 달리 결정하지 않는 한, 웹사이트는 결과가 의심되는 범죄 행위 또는 결과에 영향을 미칠 수 있는 조치에 대한 조사 대상이 되는 경우 상금을 취소할 권리가 있습니다. 베팅 모드 또는 캠페인 결과에 불규칙성이 있는 경우, 치리회, 제3자 또는 웹사이트에 의해 확인된 경우, 웹사이트는 단독 재량에 따라 캠페인에 스테이킹된 금액을 취소 및/또는 환불할 수 있는 권리를 보유합니다. 베팅이 이루어진 경우 사이트는 이벤트 결과를 다시 계산하고 관련 상금을 몰수할 권리를 보유합니다. </p>

                        <p><b>11.12 </b> 웹사이트에 있는 베팅과 관련된 문제에 만족하지 못하는 경우 거래 발생 후 7일 이내에 서면으로 제공하도록 웹사이트에 통지하십시오. 그 후 7일 이내에 발행된 통지는 무시됩니다. 드물게 귀하의 장치에 나타나는 결과와 당사 시스템의 트랜잭션 로그에 나타나는 결과 간의 불일치가 발생하는 경우, 귀하는 웹사이트 담당자가 확인한 당사 시스템의 트랜잭션 로그 결과가 최종적이고 결정적이며 구속력이 있다는 데 동의합니다. </p>

                        <p><b>11.13 </b>웹사이트가 귀하가 귀하의 계정과 수시로 다른 베팅을 한 것을 발견하는 경우, 모든 베팅은 웹사이트에서 할 수 있습니다. 이 웹사이트는 필요하다고 판단되는 경우 추가 조치를 취할 권리가 있습니다. </p>

                        <p><b>11.14 </b>명시된 최대 금액을 초과하는 베팅 금액이 웹 사이트에서 잘못 수락 된 경우 초과 금액은 무시되고 베팅 금액이 수정되므로 차액이 귀하의 계정으로 환불 / 적립됩니다. </p>

                        <p><b>11.15 </b>실시간 비디오 스트림, 통계 데이터, 라이브 스코어 및 라이브 베팅과 같이 이 웹사이트에서 제공하는 정보는 부가가치 정보 서비스입니다. 그러나 이 웹사이트는 정보의 부정확성이나 오류에 관계없이 어떠한 책임도 지지 않습니다.</p>

                        <p><b>11.16 </b>경기가 예정된 시작일 또는 그 이후에 시작되지 않거나 다음 날짜가 끝날 때까지 경기가 중단되고 완료(재개)되지 않는 경우, 관련 규칙에 따라 무조건적인 것으로 결정되는 베팅 마켓이 없는 한 모든 베팅은 무효가 되며, 이 경우 베팅이 성립될 수 있습니다. </p>

                        <p><b>11.17 </b>웹사이트는 특정 대회에 적용되거나 스포츠 베팅 규칙에 위배될 수 있는 이벤트를 채택할 권리가 있습니다. 이러한 특별 규칙은 특정 지역, 고객, 경기 및/또는 이벤트와 관련하여 게시된 배당률을 게시할 수 있습니다. </p>

                        <p><b>11.18 </b>베팅이 이루어진 후 통신이 중단되거나 베팅이 성공적으로 이루어졌다는 시각적 확인을 받지 못했지만 베팅이 당사 서버에 제대로 접수되었으며 베팅이 유효한 것으로 간주되어 수락됩니다. 의사 소통이 다시 설정되고 결과가 결정되면 승패 여부를 알려줄 것입니다. 통신 오류로 인해 당사 서버에서 베팅이 제대로 수신되지 않으면 유효하고 수락된 것으로 간주되지 않습니다. 실패한 베팅은 귀하의 계정 잔액으로 환불됩니다. </p>

                        <p><b>11.19 </b>귀하는 베팅 후 잠재적인 재정적 위험에 대해 알려주는 확인을 받을 수 있음을 인정하고 인정합니다(불확실한 경우 웹사이트의 고객 지원에 문의하십시오). 그러한 승인을 받으면 귀하는 적절한 통지를 받았다는 데 동의합니다. </p>

                        <p><b>11.20 </b>외부 출처에서 제공한 경기 통계에 불일치가 있는 경우, 당사가 게시한 일반 스포츠 베팅 규칙 페이지에 명시된 데이터 출처가 우선합니다. </p>
                        <p><b>11.21 </b>최대 베팅 한도는 귀하가 베팅을 수락하는 시점에 웹사이트에서 허용하는 금액에 따라 다릅니다. </p>

                        <p><b>11.23 </b>다음은 인출 기능과 관련이 있습니다.</p>

                        <p><b>11.23.1 </b>출금은 경기 전과 경기 중 선택된 이벤트, 경기 및 시장, 단일 및 다중 베팅에 대해 가능합니다. </p>

                        <p><b>11.23.2 </b>출금 요청 수락 지연. 가격 또는 시장 변동이 일시 중지되면 출금 요청이 성공하지 못할 수 있습니다. </p>

                        <p><b>11.23.3 </b>출금 요청이 승인되면 해당 베팅이 즉시 표시되고 정산됩니다. 원래 베팅의 실제 최종 결과는 인출 프로세스에 영향을 미치지 않습니다.</p>

                        <p><b>11.23.4 </b>어떠한 경우에도 출금 요청이 성공하면 총 환불 금액이 귀하의 계정으로 반환됩니다. </p>

                        <p><b>11.23.5 </b>웹사이트는 귀하의 베팅이 출금 옵션에 사용할 수 있다고 보장할 수 없습니다. 이벤트 전에 철회가 이루어진 경우, 당사는 라이브 이벤트에 대한 커버리지를 적용하거나 중단하지 않으며, 이벤트가 시작되거나 라이브 매치가 중단된 후에는 철회할 수 없습니다. 시장이 일시 중지되면 지불금이 제공되지 않습니다. </p>

                        <p><b>11.23.6 </b>이 웹사이트는 고객 또는 고객 그룹의 기능적 매각을 완전히 또는 부분적으로 철회할 수 있는 권리를 보유합니다. 당사는 고객 또는 고객 그룹이 이벤트 전 가격 변동을 이용하기 위해 출금 기능을 남용하고 있거나 이벤트 시작 전에 베팅을 마감하기 위해 출금 기능을 정기적으로 사용하고 있다는 합리적인 의심이 있는 경우 이 권리를 행사합니다. </p>

                        <p><b>11.23.7 </b>기술적인 이유로 출금 기능을 사용할 수 없는 경우 이 웹사이트는 이에 대해 책임을 지지 않습니다. 또한 이러한 경우의 모든 베팅은 원래 베팅 상태를 유지하며 이 웹사이트도 책임을 지지 않습니다. 。 </p>

                        <p><b>11.23.8 </b>웹사이트는 현금 인출 기능에 포함된 스포츠, 대회, 시장 또는 베팅 유형을 현금화하기 위한 모든 베팅/베팅을 수락하거나 거부할 권리가 있습니다. </p>

                        <p><b>11.24 </b>최대 상금은 세계를 확보하기 위한 기본 통화로 USD로 표시되지만 실제 지출에는 이에 상응하는 통화가 적용됩니다. 여러 베팅에 최대 보너스 한도가 다른 이벤트가 포함되는 경우 최소 금액이 적용됩니다. 두 가지 최대 보너스 한도는 동일한 선택의 베팅을 다른 가격으로 포함하기 위해 다른 베팅 계정을 사용하는 모든 고객 또는 고객 그룹에 적용됩니다. 이러한 방식으로 여러 베팅이 이루어졌다고 믿을 만한 이유가 있어야 하며 이러한 베팅의 전체 지불은 최대 지불금이 하나만 합산됩니다. </p>


                        <h3>12. 유산 및 중단된 게임</h3>
                        <p><b>12.1 </b>회사는 다운타임, 서버 중단, 지연 또는 기술적 또는 정치적 혼란으로 인해 게임을 방해하지 않습니다. 환불은 웹사이트의 단독 재량에 의해서만 관리될 수 있습니다. </p>

                        <p><b>12.2 </b>회사는  웹사이트 또는 웹사이트 또는 웹사이트와 관련하여 발생한 것으로 의심되는 콘텐츠로 인해 발생하는 손해 또는 손실에 대해  책임을 지지 않습니다  . 여기에는 운영 또는 전송, 지연 또는 중단, 데이터 손실 또는 손상, 통신 또는 회선 장애, 사이트 또는 그 콘텐츠의 오용 또는 콘텐츠의 오류 또는 누락에 대한  제한이 포함되지 않습니다.</p>

                        <p><b>12.3 </b>카지노 게임이 중단되면 모든 베팅은 무효 처리됩니다. </p>

                        <h3>13. 책임의 제한</h3>
                        <p><b>13.1 </b>웹사이트에 대한 귀하의 액세스 및 게임 참여는 귀하의 책임입니다. 웹사이트와 게임은 명시적이든 묵시적이든 어떠한 종류의 보증 없이 제공됩니다. </p>

                        <p><b>13.2 </b>전술한 내용의 일반성을 침해하지 않고, 귀하는 다음 사항을 수락합니다.</p>

                        <p><b>13.2.1 </b>소프트웨어, 게임 및 웹사이트가 해당 목적에 적합함을 보증하지 않습니다. </p>

                        <p><b>13.2.2 </b>소프트웨어, 게임 및 웹사이트에 오류가 없음을 보증하지 않습니다. </p>

                        <p><b>13.2.3 </b>소프트웨어, 게임 및 웹사이트가 중단 없이 중단될 것이라는 보장은 없습니다. </p>

                        <p><b>13.3 </b> 본 이용 약관에 명시적으로 규정된 경우를 제외하고, 당사는 귀하의 웹사이트 사용 또는 게임 참여로 인해 발생하는 직접적, 간접적, 특수적, 결과적, 부수적 또는 기타 손실, 비용, 경비 또는 손해에 대해 책임을 지지 않습니다. </p>

                        <p><b>13.4 </b>귀하는 게임 또는 게임의 오작동이 상호 운용 가능한 경우 그러한 실패 중에 이루어진 모든 베팅이 무효가 된다는 것을 이해하고 인정합니다. 결함이 있는 게임에서 명시된 자금은 해당 자금을 사용하여 플레이한 게임에 관계없이 후속 게임 라운드와 마찬가지로 무효로 간주됩니다. </p>

                        <p><b>13.5 </b>베팅의 일부 또는 전부가 무효로 선언되는 경우 웹사이트는 지불 테이블, 배당률 또는 소프트웨어에 명백한 오류, 오류, 인쇄상의 오류 또는 기술적 오류가 있다고 간주할 권리가 있습니다. 실현되지 않은 상금의 경우, 이 경우 베팅 무효화 결과에 대해 당사는 책임을 지지 않습니다. 환불은 Seabet Management에서만 관리합니다. </p>

                        <p><b>13.6 </b>귀하는 귀하의 웹사이트 사용 또는 게임 참여로 인해 발생하는 모든 비용, 지출, 손실, 손해, 청구 및 책임에 대해 당사, 당사의 이사, 직원, 파트너 및 서비스 제공자를 완전히 면책하고 해를 입지 않도록 하는 데 동의합니다. </p>

                        <p><b>13.7 </b>회사는 계약, 불법 행위, 보증 위반 또는 기타 방식으로 인해  발생하거나 주장되거나 웹 사이트 또는 그 콘텐츠와의 연결로 인해 발생했다고 주장되거나 주장되는 손해 또는 손실에 대해 책임을지지 않습니다. 여기에는 운영 또는 전송의 지연 또는 중단, 데이터 손실 또는 손상, 통신 또는 회선 장애, 개인에 의한 사이트 또는 해당 콘텐츠의 오용, 콘텐츠의 오류 또는 누락  이 포함되지만 이에 국한되지 않습니다.</p>

                        <h3>14. 개인 정보 보호 정책</h3>
                        <p><b>14.1 </b>귀하는 귀하가 웹사이트에 접속하여 이용하고 귀하가 게임에 참여할 수 있도록 하기 위해 필요하다고 판단되는 경우 당사가 귀하의 개인 데이터를 수집하고 사용할 수 있음을 인정하고 이에 동의합니다. </p>

                        <p><b>14.2 </b>당사는 귀하의 개인 정보를 수집할 때 위에 명시된 데이터 보호법의 적용을 받는다는 것을 인정합니다. 우리는 귀하의 개인 정보를 보호하고 최고의 비즈니스 관행 및 관련 법률에 따라 귀하의 개인 정보를 존중할 것입니다. </p>

                        <p><b>14.3 </b>당사는 귀하가 게임에 참여하고 귀하의 게임 참여와 관련된 조치를 수행할 수 있도록 귀하의 개인 데이터를 사용합니다. 회원 계정을 개설함으로써 귀하는 회사 직원이 직무를 수행하고 최상의 지원과 서비스를 제공하기 위해 귀하의 개인 데이터에 액세스할 권리가 있음을 인정하고 수락합니다. 또한 변경 사항, 새로운 서비스 및 프로모션을 알리기 위해 귀하의 개인 데이터를 사용할 수 있습니다. 언제든지 마케팅 이메일 수신을 거부할 수 있습니다. </p>

                        <p><b>14.4 </b>귀하의 개인 데이터는 법률에 의해 공개가 요구되거나 당사 서비스를 사용하는 데 필요한 경우를 제외하고 제3자에게 공개되지 않으며, 이 경우 귀하는 해당 정보를 제3자에게 공개하는 데 동의한 것으로 간주됩니다. 개인 데이터는 이 웹사이트의 비즈니스 파트너 또는 공급업체 또는 이 웹사이트의 전체 기능 또는 운영의 특정 부분을 책임질 수 있는 서비스 제공업체로서 이 웹사이트에 공개될 수 있습니다. 웹 사이트 직원은 직무를 수행하고 최상의 지원과 서비스를 제공하기 위해 귀하의 개인 데이터에 액세스 할 수 있습니다. 귀하는 이로써 그러한 공개에 동의합니다. </p>

                        <p><b>14.5 </b>당사는 애플리케이션 데이터 보유 기간이 만료된 후 또는 법적으로 요구되는 경우를 제외하고 개인 데이터로 제공된 모든 정보를 무기한 보유합니다. </p>

                        <p><b>14.6 </b>귀하의 경험을 최적화하고 당사 웹사이트 서비스를 모니터링 및 개선하기 위해 당사는 귀하의 브라우저에서 보낸 특정 정보(쿠키라고 함)를 수집합니다 . 귀하는 당사의 쿠키 수집을 수락할지 여부를 선택할 권리가 있습니다. 그러나 쿠키를 비활성화하면 당사 웹 사이트에 대한 액세스에 심각한 영향을 미칠 수 있으며 방문을 완전히 차단할 수도 있습니다. </p>

                        <h3>15. 양도</h3>
                        <p><b>15.1 </b>본 계약에 따른 귀하의 의무 양도는 허용되지 않습니다. 귀하는 본 계약에 따른 귀하의 의무 및 본 계약에 따른 권리 또는 의무를 다른 사람이나 단체에 양도할 수 없습니다. </p>

                        <h3>16. 완전 합의</h3>
                        <p><b>16.1 </b>본 이용 약관은  웹 사이트를 존중하기 위해 귀하와 당사 간의 완전한 합의를 구성하며, 사기의 경우를 제외하고 웹 사이트를 존중하기 위해 귀하와 당사 간의 모든 이전 또는 현재의 전자적, 구두 또는 서면 통신 및 제안을 대체합니다. </p>

                        <h3>17. 분리 가능성</h3>
                        <p><b>17.1 </b> 본 이용 약관의 조항이 불법이거나 시행할 수 없는 것으로 판명되는 경우 해당 조항은 본 이용 약관에서 분리되며 다른 모든 조항은 그러한 분리의 영향을 받지 않고 완전한 효력을 유지합니다. </p>

                        <h3>18. 취소, 정지 및 폐쇄</h3>
                        <p><b>18.1 </b>당사가 이용할 수 있는 다른 구제책에 의존할 수 있는 능력을 제한하지 않고, 당사는 절대적인 재량에 따라 귀하의 계정을 일시 중지 및/또는 해지하고, 미결제 베팅을 취소하고/하거나 귀하의 계정에 있는 자금의 일부 또는 전부를 몰수할 수 있습니다.</p>
                        <p>(i) 귀하가 자금 세탁, 불법 또는 기타 사기 행위를 위해 당사 웹사이트를 사용하고 있다고 의심되는 경우; 또는</p>
                        <p>(ii) 귀하가 불법적으로 자금을 예치했거나 명백하고 실질적으로 감가상각된 방식으로 얻은 것으로 의심되는 경우; 또는</p>
                        <p>(iii) 당사는 귀하가 베팅 신디케이트의 일원이라는 증거를 얻으며, 여러 당사자가 웹사이트 규칙, 본 이용 약관 또는 웹사이트의 기타 규칙을 우회하기 위해 베팅을 하는 데 관여합니다. 또는</p>
                        <p>(iv) 당사는 귀하가 당사 서비스, 관련 장비, 소프트웨어, 웹사이트, 카지노 게임, 스포츠 베팅 및 베팅 정보 또는 웹사이트에서 제공되는 모든 거래의 적절한 작동을 방해하거나 방해하려고 시도하기 위해 장치, 로봇, 스파이더, 소프트웨어, 루틴 또는 기타 방법(또는 전술한 성격의 모든 것)을 사용하고 있다고 판단합니다.  특히 인공 지능 또는 기타 시스템(기계, 컴퓨터, 소프트웨어 또는 웹사이트 시스템을 사취 및/또는 파괴하도록 특별히 설계된 기타 자동화 시스템 포함)을 사용하거나 사용하지 않습니다. 또는</p>
                        <p>(v) 귀하가 사이트 또는 고객을 속이기 위해 다른 플레이어와 공모하거나 공모하려고 시도하고 있다고 판단합니다. 또는</p>
                        <p>(vi) 귀하가 본 이용 약관의 조항을 위반했다고 판단합니다.</p>
                        <p>(vii) 귀하가 당사 행위자에게 불리한 방식으로 행동하고 있다고 판단되는 경우; 또는</p>
                        <p>(viii) 당사는 귀하가 사이트를 사용하는 방식이 귀하에게 불공정한 이점을 제공한다고 판단합니다(예: 특정 스포츠 영역에 대한 개인적인 참여 또는 참여를 통해 얻은 통찰력 또는 전문 지식에 기반한 베팅). 또는</p>
                        <p>(ix) 귀하가 여러 사용자 계정에 대한 베팅 활동을 등록, 관리 또는 지시하거나, 베팅 활동을 숨기려고 시도하거나, 당사가 설정한 거래 한도를 우회하거나, 프로모션 약관을 위반한 것으로 의심되는 경우; 또는</p>
                        <p>(x) 귀하의 계정이 제3자의 이익을 위해 사용되고 있다고 의심되는 경우; 또는</p>
                        <p>(xi) 새 계정을 등록함으로써 귀하가 당사 웹사이트에서 베팅 활동을 계속하지 말라는 사이트의 직접 명령을 위반했다는 증거. 이 웹사이트는 위 이용 약관의 이전 경고를 위반하거나 무시한 것으로 이전에 발견된 사용자가 등록한 계정에서 보증금을 몰수할 권리가 있습니다.</p>

                        <p><b>18.2 </b>귀하는 웹사이트가 규칙, 약관 또는 조건을 위반하여 정지 또는 영구 금지를 초래하는 최종 의사 결정권자임을 인정합니다</p>
                        <p>당사 웹 사이트 참여에서.</p>

                        <p><b>18.3 </b>당사가 계정을 일시 중지 및/또는 종료하는지 여부에 관계없이, 그리고 본 이용 약관의 다른 조항에도 불구하고, 당사는 다음과 같은 경우 당사의 절대적인 재량에 따라 완료되지 않은 베팅을 취소 및 취소하기로 결정할 수 있습니다.</p>
                        <p>(i) 기술적 결함이 있는 경우, 또는 </p>
                        <p>(ii) 귀하 또는 귀하와 베팅하는 다른 고객이 본 이용 약관을 위반하는 경우.</p>

                        <h3>19. 불가항력</h3>
                        <p><b>19.1 </b> 홍수, 화재, 지진 또는 기타 자연적 요인, 전쟁 행위, 전염병 또는 전염병, 폭동 또는 테러 공격, 유틸리티 전기 고장, 폐쇄 및 파업을 포함하되 이에 국한되지 않는 이 웹사이트의 불가항력으로 인해 이러한 실패 또는 지연이 발생한 경우 이 웹사이트는 서비스 의무를 이행하지 못하거나 지연합니다.  인적 또는 자연적 요인으로 인한 인터넷 및 통신 네트워크의 지연 또는 중단, 또는 이 웹사이트의 합리적인 통제를 벗어난 기타 사건. 이 웹사이트는 그러한 불가항력 사건으로 인해 발생하는 결과에 대해 어떠한 책임도 지지 않습니다. </p>

                        <h3>20. 채무 불이행, 위약금 및 해지</h3>
                        <p><b>20.1 </b> 당사는 귀하가 본 이용 약관의 조항을 위반하거나 귀하가 해당 조항을 위반했다고 의심할 만한 합리적인 근거가 있는 경우 귀하의 회원 계정을 개설, 정지 또는 폐쇄하지 않거나 귀하의 상금을 보류하고 귀하가 받을 자격이 있는 손해를 위해 자금을 사용할 권리를 보유합니다. </p>

                        <h3>21. 준거법 및 관할권</h3>
                        <p><b>21.1 </b>본 이용 약관은 Curacao의 법률에 의해 규율됩니다. </p>

                        <p><b>21.2 </b>귀하는 달리 명시되지 않는 한 게임이 Curaçao 영토에 의해 조직되고 규제됨을 인정합니다. 귀하와 회사 간의 모든 계약 관계는 회사 등록 주소에서 Curaçao의 당사자가 체결하고 수행 한 것으로 간주됩니다. </p>

                        <p><b>21.3 </b>당사자는 본 이용 약관 또는 위반, 종료 또는 무효로 인해 또는 이와 관련하여 발생하는 모든 분쟁, 논쟁 또는 청구가 Curacao 법원의 배타적 관할권에 속한다는 데 동의합니다. </p>

                        <h3>22. 불만 사항</h3>
                        <p><b>22.1 </b>당사 서비스에 대한 불만 사항이나 불만 사항이 있는 경우 웹사이트에서 사용할 수 있는 채팅 기능 또는 이메일 주소를 통해 고객 서비스 팀에 문의할 수 있습니다. 우리는 가능한 한 최단 시간에 직면 한 문제를 해결하기 위해 최선을 다할 것입니다. </p>
                      </div>`
  }
}
