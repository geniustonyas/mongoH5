const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Trang chủ',
  search: 'Tìm kiếm',
  promo: 'Khuyến mãi',
  support: 'Hỗ trợ',
  onlineSupport: 'Hỗ trợ trực tuyến',
  accountMenu: 'Tài khoản',
  account: 'Tài khoản',
  confirm: 'Xác nhận',
  confirmd: 'Đã xác nhận',
  all: 'Tất cả',
  save: 'Lưu',
  cancel: 'Hủy',
  close: 'Đóng',
  start: 'Bắt đầu',
  loading: 'Đang tải',
  end: 'Kết thúc',
  to: ' đến ',
  or: 'Hoặc',
  and: 'Và',
  at: 'lúc',
  goto: 'Đi đến',
  refreshSuccess: 'Làm mới thành công',
  loadingFail: 'Tải thất bại',
  noMore: 'Không còn nữa...',
  login: 'Đăng nhập',
  otherMethod: 'Phương pháp khác',
  reg: 'Đăng ký',
  userName: 'Tên người dùng',
  email: 'Email',
  sendEmail: 'Send',
  sended: 'Đã gửi',
  emailCaptcha: 'Mã xác nhận email',
  password: 'Mật khẩu',
  forgetPassword: 'Quên mật khẩu',
  resetPwd: 'Đặt lại mật khẩu',
  noUser: 'Chưa có tài khoản?',
  createUser: 'Tạo tài khoản',
  googleCode: 'Mã xác minh Google',
  inputGoole: 'Nhập mã xác minh Google',
  partner: 'Đối tác chính thức:',
  date: 'Ngày',
  day: 'Ngày',
  month: 'Tháng',
  year: 'Năm',
  birthday: 'Ngày sinh',
  telephone: 'Số điện thoại',
  country: 'Quốc gia',
  hasAccount: 'Đã có tài khoản?',
  logout: 'Đăng xuất',
  address: 'Địa chỉ',
  zipCode: 'Mã bưu điện',
  loginPage: {
    useGoogle: 'Sử dụng Ứng dụng xác minh Google',
    userNameOrEmail: 'Tên người dùng hoặc email'
  },
  regPage: {
    holderUserName: 'Tạo tên người dùng của bạn',
    holderEmail: "Ví dụ: you{'@'}example.com",
    holderTelephone: 'Số điện thoại (+66 xxxxxxxxxxx)',
    isAdult: 'Tôi xác nhận tôi đã đủ 18 tuổi và chấp nhận',
    termCondition: 'Điều khoản',
    privacyPolicy: 'Chính sách bảo mật',
    isAgree: `Tôi đồng ý nhận thông tin về các hoạt động tiếp thị và sự kiện liên quan từ ${site_name}.`
  },
  thirdRegPage: {
    beFinished: 'Gần hoàn thành rồi!',
    fixInfo: 'Vui lòng cung cấp đầy đủ thông tin của bạn'
  },
  myprfile: 'Hồ sơ của tôi',
  clubLevel: 'cấp độ',
  userLevels: {
    '101': 'Sắt',
    '102': 'Đồng',
    '103': 'Bạc',
    '104': 'Vàng',
    '105': 'Bạch kim',
    '106': 'Titan',
    '107': 'Kim cương'
  },
  homePage: {
    currentMultiplier: 'Hệ số điểm',
    nextReward: 'Phần thưởng cấp độ tiếp theo',
    showProgress: 'Hiển thị tiến trình của tôi'
  },
  userAccount: 'Tài khoản người dùng',
  wallet: 'Ví',
  myBets: 'Lịch sử cược',
  rewards: 'Phần thưởng',
  notifications: 'Thông báo',
  // Tìm kiếm
  noSearchResult: 'Xin lỗi, không có kết quả phù hợp với từ khoá "{ keyword }". Vui lòng thử từ khoá khác.',
  searchResultNum: 'Tìm thấy { searchResult } kết quả',
  // Chi tiết khuyến mãi
  promoDetail: 'Chi tiết khuyến mãi',
  // Câu lạc bộ
  club: 'Câu lạc bộ',
  tiers: 'Cấp độ',
  clubTips: 'Mọi phần thưởng của bạn sẽ được đặt lại hàng tháng. Vui lòng đăng nhập và nhận phần thưởng của bạn trước khi tháng kết thúc.',
  currentPoints: 'Số tiền đặt cược hiện tại',
  currentPointsMultiplier: 'Bội số điểm hiện tại',
  receiveReward: 'Nhận phần thưởng',
  alreadyReceived: 'Đã nhận',
  mergedReards: 'Đã tích lũy và sẽ được nhận ở cấp độ tiếp theo',
  noReward: 'Hiện tại chưa có phần thưởng. Tiến lên cấp độ tiếp theo để mở khóa phần thưởng đầu tiên của bạn.',
  // Câu lạc bộ VIP
  vipClub: 'Câu lạc bộ VIP',
  // Cửa hàng điểm
  mallStore: 'Cửa hàng đổi quà',
  // Cài đặt tài khoản
  generalInformation: 'Thông tin chung',
  changePassword: 'Thay đổi mật khẩu',
  googleAuthenticator: 'Ứng dụng xác minh Google',
  privacySetting: 'Cài đặt quyền riêng tư',
  currentPwd: 'Mật khẩu hiện tại',
  newPwd: 'Mật khẩu mới',
  confirmPwd: 'Xác nhận mật khẩu',
  changePwdLimit: 'Để đảm bảo an toàn cho tài khoản của bạn, sau khi thay đổi mật khẩu, bạn sẽ không thể rút tiền đến địa chỉ ví mới trong vòng 24 giờ.',
  disabledGoogle: 'Ứng dụng xác minh Google đã tắt',
  activeGoogle: 'Vui lòng sử dụng ứng dụng xác minh Google để quét mã QR hoặc nhập mã để kích hoạt.',
  whatGoogleCode: 'Google Authenticator là gì?',
  typeCode: 'Nhập mã',
  submitCode: 'Gửi mã',
  keyValue: 'Giá trị khóa',
  // Thông báo
  notice: 'Thông báo',
  mail: 'Tin nhắn hệ thống',
  makeAllRead: 'Đánh dấu tất cả đã đọc',
  noMessage: 'Bạn không có thông báo nào',
  // Phần thưởng
  claimReward: 'Mã khuyến mãi',
  claimNewReward: 'Nhận phần thưởng mới',
  rewardCode: 'Mã phần thưởng',
  claim: 'Nhận',
  recentTransaction: 'Giao dịch gần đây',
  // Tìm kiếm
  searchHolder: 'Nhập tên trò chơi hoặc nhà cung cấp',
  searchMore: 'Tìm kiếm thêm',
  searchRecommend: 'Đề xuất cho bạn',
  enter: 'Nhập',
  // Quỹ tài khoản
  fundAccount: 'Quỹ tài khoản',
  activeBalance: 'Số dư hiện tại',
  balance: 'Số dư',
  deposit: 'Nạp tiền',
  buyCrypto: 'Mua tiền mã hóa',
  withdraw: 'Rút tiền',
  youDepositAddress: 'Địa chỉ nạp tiền của bạn',
  minDepositAmount: 'Số tiền nạp tối thiểu',
  quickTips: 'Mẹo nhanh',
  quickTipCont: 'Mỗi khi bạn thực hiện giao dịch chuyển tiền, hãy chắc chắn sử dụng địa chỉ ví mới nhất của bạn tại quầy giao dịch của chúng tôi.',
  promoCode: 'Mã khuyến mãi',
  currentBalance: 'Số dư hiện tại',
  myRewards: 'Phần thưởng của tôi',
  transactionHistory: 'Lịch sử giao dịch',
  supportSettings: 'Hỗ trợ và cài đặt',
  walletSettings: 'Cài đặt ví',
  faq: 'Câu hỏi thường gặp',
  liveSupport: 'Hỗ trợ trực tuyến',
  chooseCrypto: 'Chọn loại tiền mã hóa bạn muốn',
  cryptoCurrency: 'Tiền mã hóa',
  bank: 'Ngân hàng',
  chooseDepositChain: 'Chọn mạng nạp tiền',
  confirmDepositAddress: 'Vui lòng xác nhận địa chỉ nạp tiền của bạn trước khi thực hiện giao dịch.',
  recommendExchange: 'Mua tiền mã hóa từ sàn giao dịch mà chúng tôi đề xuất',
  // Lịch sử giao dịch
  deposits: 'Nạp tiền',
  withdrawals: 'Rút tiền',
  bets: 'Cược',
  wins: 'Thưởng',
  currencyFilter: 'Lọc theo loại tiền mã hóa',
  dateFilter: 'Lọc theo ngày',
  winLose: 'Thắng / Thua',
  nodata: 'Không có dữ liệu',
  // Cài đặt ví
  currency: 'Loại tiền',
  btcUnit: 'Đơn vị Bitcoin',
  // Rút tiền
  inputAmount: 'Nhập số tiền',
  walletDetails: 'Chi tiết ví',
  walletDetailsBig: 'Chi tiết ví',
  waitingResults: 'Đang chờ xác nhận',
  withdrawUsdt: 'Rút {curreny}',
  amount: 'Số tiền',
  minWithdrawAmount: 'Số tiền rút tối thiểu',
  next: 'Tiếp theo',
  youWithdrawAddress: 'Địa chỉ rút tiền của bạn',
  payto: 'Thanh toán tới',
  checkWithdrawAddress: 'Vui lòng kiểm tra địa chỉ ví của bạn trước mỗi giao dịch.',
  previewWithdraw: 'Xem trước giao dịch rút tiền',
  confirmWithdrawInfo: 'Vui lòng xác nhận thông tin giao dịch',
  network: 'Mạng',
  withdrawing: 'Đang rút tiền',
  summary: 'Tóm tắt',
  transactionType: 'Loại giao dịch',
  finalBalance: 'Số dư cuối cùng',
  backToFund: 'Trở lại Quỹ tài khoản',
  chooseWithdrawChain: 'Chọn mạng rút tiền',
  confirmWithdrawAddress: 'Vui lòng xác nhận địa chỉ rút tiền của bạn trước khi thực hiện giao dịch',
  walletAddress: 'Địa chỉ ví',
  walletAddressBig: 'Địa chỉ ví',
  tradeStatus: { 1: 'Chưa hoàn thành', 2: 'Đã xác nhận', 3: 'Đã xóa' },

  // Trang chủ
  readMore: 'Đọc thêm',
  sports: 'Thể thao',
  liveCasino: 'Casino trực tuyến',
  slots: 'SLOT GAME',
  sbSport: 'Thể thao Saba',
  fbSport: 'Thể thao FB',
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
  globalPaymentSolutions: 'Giải pháp thanh toán toàn cầu',
  otherPayment: 'Phương thức thanh toán khác',
  sportsBet: 'Cược thể thao',
  liveCasinoBet: 'casino trực tuyến ',
  slotBet: 'Cược máy đánh bạc',
  more: 'Thêm',
  loadMore: 'Tải thêm',
  providers: 'Nhà cung cấp',
  allProviders: 'Tất cả nhà cung cấp',
  sortBy: 'Sắp xếp',
  polular: 'Phổ biến',
  promotions: 'Khuyến mãi',
  aboutUs: 'Về chúng tôi',
  selectLanguage: 'Chọn ngôn ngữ',
  ruleTerms: 'Qui định và Điều khoản',
  responsibleGambling: 'Cá cược có trách nhiệm',
  amlPolicy: 'Chính sách chống rửa tiền',
  selfExclusion: 'Tự loại trừ',
  privacyPolicy: 'Chính sách bảo mật',
  fairness: 'Sự minh bạch',
  game: 'Trò chơi',
  followUs: 'Theo dõi chúng tôi',
  language: 'Ngôn ngữ',
  helpCenter: 'Trung tâm trợ giúp',
  acceptCrypto: 'Chấp nhận tiền mã hóa',
  licencesSecurity: 'Giấy phép và Bảo mật',
  gameBig: 'Trò chơi',
  userBig: 'Người dùng',
  payoutBig: 'Thanh toán',
  betUser: 'Người đặt cược',
  multiplier: 'Bội số',
  paymentAmount: 'Số tiền thanh toán',
  invisibility: 'ẩn',
  currencyLang: {
    usdt: 'USDT',
    btc: 'BTC',
    eth: 'ETH',
    busd: 'BUSD',
    trx: 'TRX',
    xrp: 'XRP',
    bnb: 'BNB',
    ltc: 'LTC',
    ada: 'ADA',
    doge: 'DOGE',
    ton: 'TON',
    usd: 'USD',
    cny: 'CNY'
  },
  // Cửa hàng điểm
  points: 'Điểm',
  pointsNum: 'Số điểm',
  earnPoints: 'đổi  điểm',
  pointType: 'Loại',
  spentPoints: 'Sử dụng điểm',
  afterPoints: 'Số điểm sau giao dịch',
  createTime: 'Thời gian tạo',
  pointsType: {
    '1': 'Cược',
    '2': 'Đổi quà',
    '3': 'Sự kiện khuyến mãi',
    '4': 'Thêm vào hệ thống',
    '5': 'Trừ đi hệ thống',
    '6': 'Hủy đổi quà'
  },

  // Nhà cung cấp trò chơi
  provider: {
    all: 'Tất cả',
    sabaSports: 'Saba Sports',
    btiSports: 'Seabet Sports',
    fbSports: 'Thể thao FB',
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
  // Gợi ý kiểm tra dữ liệu
  tips: {
    // Người dùng - Đăng nhập và Đăng ký
    inputAccount: 'Vui lòng nhập tên người dùng',
    isAccount: 'Tên người dùng phải bắt đầu bằng chữ cái và từ 5-12 ký tự',
    inputPassword: 'Vui lòng nhập mật khẩu',
    isPwd: 'Mật khẩu phải từ 6-16 ký tự là số hoặc chữ',
    pwdNotMatch: 'Hai mật khẩu không khớp',
    googleCode: 'Mã xác minh Google phải là 6 chữ số',
    loginFail: 'Đăng nhập thất bại',
    inputEmail: 'Vui lòng nhập địa chỉ email',
    isEmail: 'Định dạng email không hợp lệ',
    inputEmailcapcha: 'Vui lòng nhập mã xác minh email',
    inputDay: 'Vui lòng chọn ngày sinh',
    inputMonth: 'Vui lòng chọn tháng sinh',
    inputYear: 'Vui lòng chọn năm sinh',
    inputCountryCode: 'Vui lòng nhập mã quốc gia',
    inputphoneNumber: 'Vui lòng nhập số điện thoại',
    inputAddress: 'Vui lòng nhập địa chỉ',
    inputZipCode: 'Vui lòng nhập mã bưu điện',
    userNameExist: 'Tên người dùng đã tồn tại',
    emailExist: 'Email đã tồn tại',
    emailNotExist: 'Email không tồn tại',
    isAudit: 'Vui lòng xác nhận bạn đã đủ tuổi và chấp nhận chính sách bảo mật.',
    isAgree: 'Vui lòng đọc và chấp nhận thông tin về chiến dịch tiếp thị liên quan.',
    regSuccess: 'Đăng ký thành công',
    regFail: 'Đăng ký thất bại',
    loginSuccess: 'Đăng nhập thành công',
    sendSuccess: 'Gửi thành công',
    resetSuccess: 'Đặt lại mật khẩu thành công, vui lòng đăng nhập lại',
    resetFail: 'Đặt lại mật khẩu thất bại',
    sendFail: 'Gửi thất bại',
    editUserInfoSuccess: 'Chỉnh sửa thông tin người dùng thành công',
    inputNewPwd: 'Vui lòng nhập mật khẩu mới',
    isNewPwd: 'Mật khẩu mới phải từ 6-16 ký tự là số hoặc chữ',
    inputOldPwd: 'Vui lòng nhập mật khẩu cũ',
    isOldPwd: 'Mật khẩu cũ phải từ 6-16 ký tự là số hoặc chữ',
    editPwdSuccess: 'Thay đổi mật khẩu thành công, vui lòng đăng nhập lại',
    bindGoogleSuccess: 'Liên kết mã xác minh Google thành công',
    logoutSuccess: 'Đăng xuất thành công',
    setSuccess: 'Cài đặt thành công',
    inputWithdrawAmount: 'Vui lòng nhập số tiền rút',
    overMaxWithdrawAmount: 'Số tiền rút không được vượt quá số dư',
    underMinWithdrawAmount: 'Số tiền rút phải lớn hơn số tiền tối thiểu',
    inputWithdrawAddress: 'Vui lòng nhập địa chỉ rút',
    withdrawSuccess: 'Yêu cầu rút thành công',
    withdrawFail: 'Yêu cầu rút thất bại',
    receivedRewardSuccess: 'Nhận thưởng thành công',
    receivedRewardFail: 'Nhận thưởng thất bại',
    noLogin: 'Bạn chưa đăng nhập',
    goLogin: 'Đi đến trang đăng nhập',
    invalidThirdUser: 'Xác minh người dùng bên thứ ba thất bại',
    authFail: 'Xác thực thất bại',
    copySuccess: 'Sao chép thành công',
    copyFail: 'Trình duyệt này không hỗ trợ sao chép tự động, vui lòng sao chép thủ công',
    inputExhangeCode: 'Vui lòng nhập mã trao đổi',
    startGameFail: 'Khởi chạy trò chơi thất bại',
    insufficientPoints: 'Điểm không đủ',
    exhangeSuccess: 'Trao đổi thành công',
    openWindow: 'Cửa sổ sẽ được mở để bạn chơi trò chơi sớm, chúc bạn có một trò chơi vui vẻ',
    openExchange: 'Sắp mở cửa sổ mới để bạn tham gia trao đổi',
    unBindGoogleSuccess: 'Hủy ràng buộc thành công',
    openExplorer: 'Cửa sổ sẽ được mở để bạn tra cứu giao dịch',

    inputTrueName: 'Vui lòng nhập tên của bạn',
    selectDocType: 'Nhấn để chọn loại tài liệu',
    inputDocType: 'Vui lòng chọn loại tài liệu',
    inputDdocNumber: 'Vui lòng nhập số ID',
    inputPassportNo: 'Vui lòng nhập số ID',
    airlineCompany: 'Vui lòng nhập tên hãng hàng không',
    inputDeparture: 'Vui lòng nhập nơi khởi hành',
    inputDestination: 'Vui lòng nhập điểm đến',
    inputHotelName: 'Vui lòng nhập tên khách sạn',
    inputCity: 'Vui lòng nhập thành phố nơi khách sạn nằm',
    inputCountry: 'Vui lòng nhập quốc gia nơi khách sạn nằm',
    inputRoomNum: 'Vui lòng nhập số lượng phòng khách sạn',
    inputInRoomDay: 'Vui lòng nhập số ngày lưu trú',
    betHolder: 'Thời gian đặt cược',
    inputBetTime: 'Vui lòng chọn thời gian đặt cược',
    inputOrderId: 'Vui lòng nhập số vé',
    orderNoholder: "Vui lòng sử dụng ',' để phân tách nhiều đơn đặt cược.",
    applySuccess: 'Áp dụng thành công',
    applyFail: 'Áp dụng thất bại',
    pwdName: 'Tên người dùng và mật khẩu của bạn phải khác'
  },

  rewardsBig: 'Phần thưởng',
  myStats: 'Thống kê của tôi',
  exclusiveRewards: 'Phần thưởng riêng biệt',
  quickBuys: 'Mua nhanh',
  earned: 'Kiếm được',
  spent: 'Chi tiêu',
  pointsHistory: 'Lịch sử điểm',
  earnPointsAndTrack: 'Kiếm điểm và theo dõi chúng',
  viewPointsRecord: 'Xem tất cả lịch sử chi tiêu điểm của bạn',
  buyNow: 'Mua ngay',
  youWillGet: 'Bạn sẽ nhận được',
  bonusValue: 'Giá trị thưởng',
  wageringRequirement: 'Yêu cầu cược',
  enableVisible: 'Bật chế độ ẩn danh',
  hiddenYourBet: 'Các cược của bạn sẽ không xuất hiện trong dòng thời gian cược và xem trước cược công khai',
  startNow: 'Bắt đầu ngay',
  withdrawStatus: { 1: 'Đang xử lý', 2: 'Đã xác nhận', 3: 'Bị từ chối' },
  time: 'Thời gian',
  betAmount: 'Số tiền đặt cược',
  support2: 'Hỗ trợ',
  btiSportIntro: 'Với nhiều năm kinh nghiệm trong hoạt động của nền tảng thể thao, nền tảng cá cược thể thao Seabet mang đến cho người chơi trải nghiệm cá cược thể thao tương tác và tối ưu hóa.',
  sabaSportIntro:
    'Được xác minh bởi nhiều bên trong suốt gần hai thập kỷ, nền tảng thể thao Saba cung cấp một loạt sự kiện thể thao đa dạng, nhiều loại cược đổi mới và tỷ lệ cược dẫn đầu trong ngành.',
  fundRecord: 'Lịch sử giao dịch',
  categoryFilter: 'LỌC THEO DANH MỤC',
  fundCategory: {
    1: 'Nạp tiền',
    2: 'Rút tiền',
    3: 'Rút tiền',
    4: 'Thỏa thuận',
    5: 'Nạp tiền hệ thống',
    6: 'Trừ tiền hệ thống',
    7: 'Quà tặng khuyến mãi',
    8: 'Quà tặng khuyến mãi',
    9: 'Phần thưởng VIP',
    10: 'Đổi quà',
    17: 'Rút tiền thất bại'
  },
  beforeBalance: 'Sau thay đổi',
  afterBalance: 'Sau thay đổi',
  tradeDetails: 'Chi tiết Giao dịch',
  tradeNo: 'Số đơn hàng',
  orderStatus: 'Tình trạng đơn hàng',
  orderType: 'Loại đơn hàng',
  orderTypes: { 1: 'Nạp tiền', 2: 'Rút tiền', 3: 'Cược', 4: 'Thắng' },
  blockChain: 'Mạng chuỗi khối',
  betAndEarn: 'Cược & Kiếm',
  placeAndEarn: 'Đặt cược & Thắng',
  spinAndEarn: 'Quay & Thắng',
  enabledGoogle: 'Google Authenticator đã được kích hoạt',
  stopGoogle: 'Google Authenticator đã được kích hoạt, nếu bạn muốn tắt tính năng này, vui lòng nhập mã và nhấn "Gửi mã" để tắt',
  unlockNewReward: 'Các phần thưởng mới đã được mở khóa!',
  unlockNewRewardTip: 'Chúc mừng! Bạn vừa mở khóa một phần thưởng mới. Nhấn vào đây để chọn loại phần thưởng của bạn',
  dymondReward: 'Phần thưởng của bạn sẽ được mở khóa khi bạn đạt được cấp độ này',
  siteTitle: 'Trang cá cược thể thao và casino  tiền mã hóa hàng đầu | Cá cược Bitcoin',
  unlockAllReward: 'Chúc mừng! Bạn đã mở khóa tất cả các phần thưởng.',
  newGame: 'Trò chơi mới',
  oneDay: '24 giờ',
  week: 'Tuần',
  moreGame: 'Thêm Trò chơi',
  question: 'Câu hỏi thường gặp',
  status: 'Trạng thái',
  tradeCode: 'Mã giao dịch',
  copyTradeCode: 'Sao chép Mã giao dịch',
  realName: 'Tên',
  sex: 'Giới tính',
  male: 'Nam',
  female: 'Nam',
  documentType: 'Loại tài liệu',
  documentNumber: 'Số tài liệu',
  airlineCompany: 'Hãng hàng không',
  placeOfDeparture: 'Điểm khởi hành',
  destination: 'Điểm đến',
  onewayOrRoundtrip: 'Loại vé',
  oneway: 'Một chiều',
  roundtrip: 'Khứ hồi',
  engineroomType: 'Lớp hành khách',
  economyClass: 'Hạng phổ thông',
  businessClass: 'Hạng thương gia',
  firstClass: 'Hạng hạng nhất',
  submit: 'Gửi',
  hotelName: 'Tên khách sạn',
  city: 'Thành phố',
  roomType: 'Loại phòng',
  presidentialSuite: 'Phòng Tổng thống',
  luxurySuite: 'Phòng Luxury',
  businessSuite: 'Phòng Business',
  roomNum: 'Số phòng',
  roomDay: 'Số ngày lưu trú',
  otherService: 'Dịch vụ khác',
  idCard: 'Thẻ căn cước',
  passport: 'Hộ chiếu',
  militaryId: 'Thẻ quân sự',
  diplomaticCard: 'Hộ chiếu ngoại giao',
  moonpayExchange: 'Mua  tiền mã hóa bằng thẻ tín dụng/ghi nợ',
  learnMore: 'Tìm hiểu thêm',
  comingSoon: 'Sắp ra mắt...',
  affiliate: 'Liên kết',
  rewardActivities: 'Hoạt động phần thưởng',
  rewardRecords: 'Hồ sơ phần thưởng',
  applyPromo: 'Nộp Đơn phần thưởng',
  applyNow: 'Nộp Ngay',
  rewardStatus: { 0: 'Đang xử lý', 1: 'Đã duyệt', 2: 'Từ chối' },
  betTime: 'Thời gian đặt cược',
  betOrderNo: 'Số đơn đặt cược',
  startEarning: 'để bắt đầu kiếm',
  historyType: 'Loại',
  rewardName: 'Tên phần thưởng',

  startTime: 'Thời gian bắt đầu',
  endTime: 'Thời gian kết thúc',
  minMaxBet: 'Cược tối thiểu-tối đa',
  volatility: 'Biến động',
  volatilitys: { 1: 'Thấp', 2: 'Thấp-Trung bình', 3: 'Trung bình', 4: 'Trung bình-Cao', 5: 'Cao', 6: 'Rất cao', 7: 'Rất thấp' },
  myPoints: 'Điểm của tôi',
  backPromo: 'Trở lại các khuyến mãi',
  noSupportFullScreen: 'Trình duyệt của bạn không hỗ trợ chế độ toàn màn hình',
  pointsExchange: 'Đổi điểm',
  view: 'Xem thêm',
  oprate: 'Xem',
  remain: 'Còn lại',
  directlyLogin: 'Hoặc đăng nhập trực tiếp',
  fastDeposit: 'Nạp tiền ngay',
  demoMode: 'Chơi thử',
  trueMode: 'Cược ngay',
  gameStatic: 'Thống kê trò chơi',
  receivedSuccess: 'Nhận { amount } USDT thành công',
  goTime: 'Thời gian khởi hành',
  backTime: 'Thời gian trở về',
  inTime: 'Thời gian nhận phòng khách sạn',
  outTime: 'Thời gian trả phòng khách sạn',
  sabaSportDesc: {
    0: 'Tất cả các sự kiện thể thao',
    1: 'Hỗ trợ tất cả các thiết bị số',
    2: 'Mã hóa bảo mật',
    3: 'Tỷ lệ cược thời gian thực',
    4: 'Hệ thống backend độc lập'
  },
  seabetSportDesc: {
    0: 'Phát triển độc lập',
    1: 'Tỷ lệ cược cao nhất',
    2: 'Tùy chỉnh giao diện cược',
    3: 'Hệ thống thanh toán chính xác',
    4: 'Hàng trăm lựa chọn cược'
  },
  pickDate: 'Chọn ngày',
  inputGotime: 'Vui lòng chọn thời gian khởi hành',
  inputBacktime: 'Vui lòng chọn thời gian trở về',
  inputInTime: 'Vui lòng chọn thời gian nhận phòng',
  inputOutTime: 'Vui lòng chọn thời gian trả phòng',
  hotelTimeError: 'Thời gian trả phòng không thể sớm hơn thời gian nhận phòng',
  ticketTimeError: 'Thời gian trở về không thể sớm hơn thời gian khởi hành',
  countryHolder: 'Mã quốc gia',
  numberHolder: 'Số điện thoại',
  submitInfoSuccess: 'Thông tin của bạn đã được gửi thành công',
  back: 'trở lại',
  countryCode: 'Mã quốc gia',
  remainTime: 'Thời gian còn lại',
  upgrading: 'Hệ thống đang nâng cấp',
  upgradingTxt: 'Hệ thống đang được nâng cấp. Chúng tôi xin lỗi vì sự bất tiện và trân trọng sự hiểu biết của bạn!',
  favariateGame: 'Yêu thích',
  recentlyGame: 'Đã chơi gần đây',
  downloadTitle: 'Ứng dụng Web Tiến bộ Seabet.io!',
  downloadDesc:
    'Chào mừng bạn đến với ứng dụng Seabet.io hoàn toàn mới của chúng tôi! Dưới đây, chúng tôi có hướng dẫn từng bước để cài đặt ứng dụng Android và ứng dụng Web Tiến bộ iOS (PWA). Hãy thưởng thức trò chơi vui vẻ, nhanh chóng và công bằng bất cứ lúc nào, bất cứ đâu!',
  step: 'Bước',
  clickSave: 'Trong trình duyệt, nhấp vào biểu tượng lưu trữ.',
  addDesk: 'Nhấn "Thêm vào Màn hình Chính".',
  clickAdd: 'Bạn sẽ có tùy chọn đổi tên nó. Nhấp "Thêm".',
  finishedDown: 'Biểu tượng ngay bây giờ đã xuất hiện trên màn hình chính của bạn',
  addToDesk: 'Trong trình duyệt, "Thêm trang vào".',
  clickDesk: 'Nhấn "Màn hình Chính".',
  clickAddAndroid: 'Nhấp "Thêm".',
  hitratio: 'Tỷ lệ trúng',
  paylines: 'Thanh toán',

  problem: {
    whatVip: '1.Câu lạc bộ VIP？',
    whatVips: `<p>Câu lạc bộ VIP của seabet.io là một cộng đồng dành riêng cho khách hàng sử dụng  tiền mã hóa, cho phép họ tham gia vào tất cả các hoạt động khuyến mãi có sẵn trên trang web bất kỳ lúc nào. Mỗi lần đặt cược, quay và chơi trò chơi đều tích luỹ điểm, từ đó từ từ leo lên trong câu lạc bộ và mở khóa những phần thưởng thú vị trên đường đi. Khi bạn mở khóa các cấp độ VIP, bạn cũng sẽ kiếm được điểm cược Seabet, giúp bạn có được những trải nghiệm và dịch vụ đáng giá hơn.</p>
                <p>Nói một cách đơn giản, điều đó có nghĩa: Bạn chơi trò chơi, và chúng tôi thưởng bạn.</p>`,
    howGetIntegrial: '2.Làm cách nào để kiếm điểm?',
    howGetIntegrials: `<p>Bạn có thể kiếm điểm câu lạc bộ bằng mỗi lần đặt cược, chơi slot game và chơi trò chơi bàn. Tích lũy điểm càng nhiều đạt được cấp bậc càng cao. Trong quá trình thăng cấp bậc ,bạn sẽ tiến đến mở khỏa và phần thưởng nhiều hơn nữa đang chờ đợi bạn ..</p>`,
    whatVipLevel: '3.Các cấp độ VIP là gì?',
    whatVipLevels: `<p>Các cấp độ VIP xác định giá trị và loại phần thưởng bạn có thể đòi hỏi. Trong quá trình bạn lên cấp bậc tại câu lạc bộ, phần thưởng của bạn cũng sẽ tăng lên .</p>
                    <table>
                      <tr>
                        <th>Cấp độ VIP</th>
                        <th>Số tiền đặt cược yêu cầu</th>
                        <th>Tần suất</th>
                      </tr>
                      <tr>
                        <td>Đồng</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Bạc</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Vàng</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Bạch kim</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Titan</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Kim cương</td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.Cách tính điểm như thế nào?',
    howComputeInterials: `<p>Cho dù đó là cược thể thao hay chơi các trò chơi sòng bạc, việc sử dụng  tiền mã hóa sẽ giúp bạn kiếm điểm. Để tính điểm bạn kiếm được từ mỗi lần đặt cược, chúng tôi sẽ chuyển đổi số tiền cược của bạn thành USDT tại tỷ giá hối đoái theo giá thị trường tại thời điểm đó trong qua trình thanh toán. Điều này đảm bảo rằng tất cả việc tích lũy điểm, bất kể loại  tiền mã hóa được sử dụng, đều công bằng. Do tỷ giá chuyển đổi biến động, chúng tôi tuân theo nguyên tắc làm tròn đến số nguyên gần nhất khi tính điểm.</p>
                          <p>Công thức để kiếm điểm Seabet là: Số tiền cược của người chơi * 0,01 * hệ số điểm của cấp độ tương ứng. Ví dụ, nếu một người chơi ở cấp độ bạch kim và đặt cược 5000, theo công thức tính điểm, người chơi sẽ kiếm được 5000 * 0,01 * 1,3 = 65 điểm. Điểm Seabet có một loạt các ứng dụng và người chơi có thể đổi quà tặng và dịch vụ tương đương  tại cửa hàng đổi quà.</p>`,
    whyMergedReward: '5.Tại sao phần thưởng của tôi được gộp lại?',
    whyMergedRewards: `<p>Phần thưởng của bạn được gộp lại vì một lần đặt cược có thể mở khóa nhiều phần thưởng. Để làm cho nó tiện lợi cho bạn, chúng tôi cộng tổng giá trị của các phần thưởng và hiển thị chúng như một phần thưởng duy nhất.</p>`,
    resetVip: '6.Khi nào cấp độ VIP của tôi sẽ được đặt lại?',
    resetVips: `<p>Cấp độ VIP của bạn sẽ được đặt lại về mức 0 vào đầu mỗi tháng. Sau đó, bạn có thể bắt đầu lại từ cấp độ Đồng và nhận lại lần nữa  tất cả các phần thưởng của cấp độ tiếp theo. Điểm tích luỹ của bạn sẽ vẫn được giữ lại để bạn có thể đổi thêm nhiều phần thưởng và dịch vụ khác.</p>`,
    everyGetInterial: '7.Tôi có thể kiếm điểm câu lạc bộ với mỗi lần đặt cược không?',
    everyGetInterials: `<p>8.Không, điểm câu lạc bộ chỉ tích lũy khi bạn đặt cược bằng tiền thật. Ngoài ra, một số loại sự kiện và trò chơi cụ thể không được tính trong câu lạc bộ, do đó, các cược được đặt trên chúng sẽ không đem lại điểm cho bạn. Các loại sự kiện này bao gồm:</p>
                        <p>Đua ngựa</p>
                        <p>Thể thao điện tử</p>
                        <p>Sportsbook Masters</p>
                        <p><p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: 'Làm cách nào để nạp tiền?',
    a1: `<p>1. Chọn  tiền mã hóa mà bạn muốn dùng, sau đó nhấp vào Nạp tiền.</p>
        <p>2. Sao chép địa chỉ gửi tiền một lần và sử dụng nó trong ví của bạn (hoặc quét mã QR).</p>
        <p>3. Khi giao dịch của bạn được xác nhận, bạn sẽ nhận được thông báo.</p>`,
    q2: 'Làm cách nào để rút tiền?',
    a2: `<p>1. Chọn loại  tiền mã hóa bạn muốn rút, sau đó nhấp vào Rút tiền.</p>
        <p>2. Nhập số tiền bạn muốn rút.</p>
        <p>3. Nhập địa chỉ ví của bạn.</p>
        <p>4. Nhấp vào nút Rút tiền.</p>`,
    q3: 'Nạp/rút tiền mất bao lâu?',
    a3: `<p>Tiền gửi</p>
          <p>Hầu hết các khoản tiền gửi  tiền mã hóa được xử lý với tốc độ cực nhanh. Tuy nhiên, có thể có một số chậm trễ từ các dịch vụ của bên thứ ba.</p>
          <p>Rút tiền</p>
          <p>Hầu hết các giao dịch rút tiền được xử lý ngay lập tức. Trong trường hợp rút tiền lớn, chúng tôi xử lý các khoản rút tiền này theo cách thủ công nên có thể có một chút chậm trễ.</p>`,
    q4: 'Bạn cung cấp các phương thức thanh toán nào?',
    a4: `<p>Các tùy chọn tiền tệ có sẵn trên Seabet.io là:</p>
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
    q5: 'Bạn có áp dụng phí giao dịch không?',
    a5: `<p>Mặc dù chúng tôi không thu thêm bất kỳ phí nào cho các giao dịch nạp tiền và rút tiền trên Seabet.io, nhưng bạn có thể cần phải trả các khoản phí giao dịch khi sử dụng thanh toán qua blockchain.</p>`
  },

  errorCodes: {
    1001: 'Bản ghi không tồn tại',
    1002: 'Hoạt động đã đóng',
    1003: 'Dữ liệu đã tồn tại',
    1004: 'Lỗi dữ liệu',
    1005: 'Lỗi tham số',
    1006: 'Bạn chưa đáp ứng các yêu cầu để đòi được',
    1007: 'Hôm nay bạn đã gửi đơn đăng ký khuyến mãi này rồi',
    1008: 'Khuyến mãi đã hết hạn',
    1009: 'Bạn đã đòi được khuyến mãi này rồi',
    1010: 'Không có đơn đặt hàng nạp tiền đủ điều kiện tồn tại',
    1011: 'Số tiền nạp không đủ điều kiện để đòi',
    1012: 'Mã xác minh Google không chính xác',
    1013: 'Bạn vẫn cần hoàn thành { data } USD trong các cược hợp lệ để thực hiện rút tiền',
    1014: 'Tên người dùng đã tồn tại',
    1015: 'Số điện thoại đã tồn tại',
    1016: 'Địa chỉ email đã tồn tại',
    1017: 'Định dạng tên người dùng không chính xác',
    1018: 'Định dạng mật khẩu không chính xác',
    1019: 'Mã xác minh không chính xác',
    1020: 'Hệ thống đang bận, vui lòng thử lại sau',
    1021: 'Lỗi chữ ký',
    1022: 'Tài khoản của bạn đã bị vô hiệu hóa, vui lòng liên hệ với dịch vụ khách hàng',
    1023: 'Tên người dùng hoặc mật khẩu không chính xác',
    1024: 'Tài khoản bị khóa',
    1025: 'Google Authenticator đã được kết nối',
    1026: 'Google Authenticator chưa được kết nối',
    1027: 'Mật khẩu hiện tại không chính xác',
    1028: 'Định dạng địa chỉ email không chính xác',
    1029: 'Không thể gửi email',
    1030: 'Số lượng sản phẩm không đủ',
    1031: 'Điểm có sẵn không đủ',
    1101: 'Số dư có sẵn không đủ',
    1032: 'Để đảm bảo an toàn cho quỹ của bạn, sau khi bạn thay đổi mật khẩu, bạn sẽ không thể thực hiện rút tiền trong vòng 24 giờ',
    1033: 'Mã xác minh email không chính xác',
    1035: 'GAME đang bảo trì'
  },

  // 条款协议等内容
  html: {
    // Tiêu đề HTML
    vipTitle: 'Câu lạc bộ VIP',
    rulesTitle: 'Quy tắc và Điều kiện',
    responsibleTitle: 'Trách nhiệm đánh bạc',
    amlTitle: 'Chính sách chống rửa tiền',
    selfExclusionTitle: 'Tự loại trừ',
    privacyTitle: 'Chính sách riêng tư',
    fairnessTitle: 'Sự công bằng',
    // Nội dung HTML
    // html内容
    vipContent: ` <div class="vip-clubhouse-box">
                    <div class="vc-rows">
                      <div class="vr-title">1. Giới thiệu Câu lạc bộ VIP</div>
                      <div class="vr-conts">
                        <p>Chào mừng bạn đến với Seabet VIP Club!</p>
                        <p>Tại Seabet, chúng tôi cam kết nâng cao chất lượng chơi game và cung cấp trải nghiệm chơi game tốt nhất. Chúng tôi rất vui mừng được giới thiệu Câu lạc bộ VIP hoàn toàn mới của chúng tôi, được thiết kế để thưởng cho các thành viên trung thành của chúng tôi, những người dành thời gian chơi trò chơi trên trang web của chúng tôi.</p>
                        <p>Chỉ cần đặt cược vào bất kỳ trò chơi hoặc sự kiện thể thao nào do Seabet.io cung cấp để mở khóa các phần thưởng độc quyền khi bạn leo qua các cấp bậc.</p>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">2. Dịch vụ cá nhân hóa</div>
                      <div class="vr-conts">
                        <p>Đội ngũ quản lý khách hàng chuyên nghiệp đảm bảo tất cả các nhu cầu của bạn và đáp ứng các tiêu chuẩn cao nhất của ngành. Thành viên VIP có thể tận hưởng tiền thưởng độc quyền, lời mời tham dự các sự kiện nổi tiếng và nhiều phần thưởng tùy chỉnh để cung cấp cho bạn trải nghiệm chơi game nhanh chóng, thú vị và hiệu quả.</p>
                        <dl>
                            <dt>Quản lý Độc quyền VIP</dt>
                            <dd>Cam kết đáp ứng nhu cầu của bạn</dd>
                            <dd>Trải nghiệm chơi game riêng tư được tùy chỉnh dành riêng cho bạn</dd>
                        </dl>
                        <dl>
                            <dt>Phần thưởng cao cấp</dt>
                            <dd>Các ưu đãi độc quyền được thiết kế dành riêng cho bạn</dd>
                            <dd>Không cần đặt cược</dd>
                            <dd>Tích luỹ điểm nhanh chóng</dd>
                        </dl>
                        <dl>
                            <dt>Giới hạn cược cao nhất trong ngành</dt>
                            <dd>Không giới hạn tiền gửi và rút hàng ngày thông qua tiền mã hóa</dd>
                        </dl>
                        <dl>
                            <dt>Ưu đãi độc quyền cho VIP</dt>
                            <dd>Các chương trình khuyến mãi riêng biệt so với thành viên thông thường</dd>
                          <dd>Duy trì trải nghiệm chơi game tốt nhất cho bạn</dd>
                          <dd>Chỉ hiển thị cho người dùng VIP</dd>
                            <dd>Các ưu đãi cá nhân hóa</dd>
                            <dd>Dịch vụ giải trí được tùy chỉnh dành riêng cho bạn</dd>
                        </dl>
                        <dl>
                            <dt>Dịch vụ Ưu tiên 24/7</dt>
                            <dd>Không cần xếp hàng, không phải chờ đợi</dd>
                            <dd>Nhu cầu của bạn là ưu tiên hàng đầu của chúng tôi</dd>
                            <dd>Nhiều lựa chọn trên mạng xã hội để liên hệ, quản lý khách hàng riêng biệt sẵn sàng trực tuyến</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">3. Cấu trúc cấp độ</div>
                      <div class="vr-conts">
                        <p>Sáu cấp độ VIP bao gồm toàn diện toàn bộ hành trình chơi game của bạn:</p>
                        <dl>
                          <dd>Đồng: Đồng 1</dd>
                          <dd>Bạc: Bạc 1 - Bạc 5</dd>
                          <dd>Vàng: Vàng 1 - Vàng 8</dd>
                          <dd>Bạch kim: Bạch kim 1 - Bạch kim 10</dd>
                          <dd>Titan: Titanium 1 - Titanium 10</dd>
                          <dd>Kim cương: Kim cương 1 - Kim cương 6</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">4. Lợi ích dành cho thành viên câu lạc bộ VIP</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>Tiền thưởng tăng cấp: Nhận tiền thưởng khi đạt đến cấp độ tiếp theo. Cấp độ bạn đạt được càng cao, tiền thưởng càng lớn.</dd>
                          <dd>Ưu đãi độc quyền tùy chỉnh: Không quan tâm đến các chương trình khuyến mãi thường xuyên? Không vấn đề gì. Khi bạn đạt đến cấp độ VIP tương ứng, chúng tôi sẽ đặc biệt điều chỉnh các ưu đãi dựa trên sở thích của bạn, dành riêng cho bạn.</dd>
                          <dd>Trải nghiệm giải trí được cá nhân hóa: Cho dù đó là các sự kiện thể thao lớn, buổi hòa nhạc, chương trình âm nhạc hay một chuyến đi sang trọng, với tư cách là thành viên VIP cao cấp, tất cả các chi phí cá nhân của bạn sẽ được Seabet đáng tin cậy chi trả và chúng tôi sẽ sắp xếp hành trình của bạn.</dd>
                          <dd>Dịch vụ VIP độc quyền: Bạn sẽ được chỉ định một đại diện dịch vụ VIP chuyên dụng, người sẽ hỗ trợ và đáp ứng nhu cầu cá cược của bạn.</dd>
                          <dd>Tích lũy điểm nhanh hơn: Các cấp độ VIP kiếm được điểm với tốc độ nhanh hơn so với các thành viên thông thường. Các cấp độ cao hơn kiếm được nhiều điểm hơn, dẫn đến một loạt các giải thưởng để đổi.</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">5. Cách trở thành thành viên VIP của chúng tôi</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>
                            Tiếp tục Đặt cược: Chìa khóa để trở thành VIP là duy trì việc đặt cược liên tục trên các sự kiện thể thao và trò chơi sòng bạc khác nhau. Seabet đánh giá cao sự kiên nhẫn của bạn. Là một trang web cá cược  tiền mã hóa hàng đầu, hãy thường xuyên sử dụng tài sản kỹ thuật số của bạn để đặt cược vào bất kỳ sự kiện và trò chơi sòng bạc nào mà Seabet cung cấp. Bạn cũng có thể thử đặt cược bằng USDT và tiếp tục sử dụng tài khoản của bạn.
                          </dd>
                          <dd>
                            Tham gia các Sự kiện Thường xuyên: Các sự kiện quảng bá của Seabet bao gồm các hoạt động và cuộc thi khác nhau mà bạn có thể tham gia bất kỳ lúc nào. Thường xuyên tham gia bất kỳ hoạt động nào trong số này sẽ tăng cơ hội của bạn để nhận lời mời gia nhập Câu lạc bộ VIP. Hơn nữa, bạn cũng có thể trở nên nhiều hoạt động hơn trong các tính năng khác của Câu lạc bộ của Seabet.
                          </dd>
                        
                          <dd>Chờ lời mời: Điều cuối cùng bạn cần làm là đợi chúng tôi gửi lời mời cho bạn. Tiếp tục chơi trò chơi và tham gia vào các sự kiện dành cho người cược lớn. Sau một số vòng cược sòng bạc và đặt cược thể thao, sau khi được xem xét xứng đáng để trở thành thành viên Câu lạc bộ VIP, bạn sẽ nhận được lời mời ngay lập tức.</dd>
                          
                          <dd>
                            Hãy Trải nghiệm Cuộc sống Cao cấp với Seabet VIP: Nâng cao trải nghiệm cược USDT của bạn lên một tầm cao mới trong khi tận hưởng các đặc quyền hàng đầu của việc trở thành thành viên Câu lạc bộ VIP của Seabet. Khi bạn tham gia cược thể thao và trò chơi sòng bạc, với tư cách là một người chơi được đánh giá cao, bạn có cơ hội trải nghiệm sự kết hợp tốt nhất giữa việc cược vui vẻ, nhanh chóng và công bằng.
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>`,

    rulesContent: `<div>
                      <h2>Điều khoản và điều kiện</h2>
                      <h3>1. CÁ CƯỢC. IO</h3>
                      <h3>2. THÔNG BÁO QUAN TRỌNG</h3>
                      <p><b>2.1</b> BẰNG CÁCH ĐĂNG KÝ TRÊN  WWW.SEABET.IO  ("TRANG WEB"), BẠN KÝ KẾT HỢP ĐỒNG VÀ ĐỒNG Ý BỊ RÀNG BUỘC BỞI: </p>
                      <p>(I) CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN NÀY; </p>
                      <p>(II) CHÍNH SÁCH BẢO MẬT CỦA CHÚNG TÔI; </p>
                      <p>(III) CHÍNH SÁCH COOKIE CỦA CHÚNG TÔI VÀ </p>
                      <p>(IV) CÁC QUY TẮC ÁP DỤNG CHO CÁC SẢN PHẨM CÁ CƯỢC HOẶC TRÒ CHƠI CỦA CHÚNG TÔI NHƯ ĐƯỢC THAM CHIẾU THÊM TRONG CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN NÀY ("ĐIỀU KHOẢN VÀ ĐIỀU KIỆN" HOẶC "THỎA THUẬN"), VÀ CÁC QUY TẮC CỤ THỂ VỀ CÁ CƯỢC VÀ / HOẶC TRÒ CHƠI VÀ ĐƯỢC COI LÀ ĐÃ CHẤP NHẬN VÀ HIỂU TẤT CẢ CÁC ĐIỀU KHOẢN.</p>

                      <p><b>2.2</b> VUI LÒNG ĐỌC KỸ THỎA THUẬN NÀY ĐỂ ĐẢM BẢO BẠN HIỂU ĐẦY ĐỦ NỘI DUNG CỦA NÓ. NẾU BẠN CÓ BẤT KỲ NGHI NGỜ NÀO VỀ QUYỀN VÀ NGHĨA VỤ CỦA MÌNH DO VIỆC CHẤP NHẬN THỎA THUẬN NÀY, VUI LÒNG THAM KHẢO Ý KIẾN CỐ VẤN PHÁP LÝ TRONG KHU VỰC TÀI PHÁN CỦA BẠN TRƯỚC KHI TIẾP TỤC SỬ DỤNG (CÁC) TRANG WEB VÀ TRUY CẬP NỘI DUNG CỦA NÓ. NẾU BẠN KHÔNG CHẤP NHẬN CÁC ĐIỀU KHOẢN, KHÔNG SỬ DỤNG, TRUY CẬP HOẶC TRUY CẬP BẤT KỲ PHẦN NÀO (BAO GỒM, NHƯNG KHÔNG GIỚI HẠN, TÊN MIỀN PHỤ, MÃ NGUỒN VÀ / HOẶC API TRANG WEB, DÙ CÓ HIỂN THỊ HAY KHÔNG) CỦA TRANG WEB.</p>
                      <h3>3. TỔNG QUÁT</h3>
                      <p><b>3.1</b> Khi đăng ký trên www. Seabet.io.</p>
                      <p> Bạn ("Bạn", "Của bạn", Chính bạn" hoặc "Người chơi" thay thế cho nhau) tham gia vào một thỏa thuận với Seabet.</p>
                      <p><b>3.2</b> Bạn phải đọc toàn bộ Thỏa thuận này trước khi bạn sử dụng dịch vụ hoặc sản phẩm của Seabet. Xin lưu ý rằng Thỏa thuận này cấu thành một thỏa thuận ràng buộc về mặt pháp lý giữa bạn và Seabet.</p>
                      <p><b>3.3</b> Các Điều khoản và Điều kiện này  có hiệu lực ngay sau khi bạn hoàn tất quá trình đăng ký, bao gồm đánh dấu vào ô chấp nhận các Điều khoản và Điều kiện này và tạo tài khoản thành công. Bằng cách sử dụng bất kỳ phần nào của Trang web sau khi tạo tài khoản, bạn đồng ý với các Điều khoản và Điều kiện này áp dụng cho việc sử dụng Trang web.</p>
                      <p><b>3.4</b> Chúng tôi có quyền sửa đổi các Điều khoản và Điều kiện này bất cứ lúc nào mà không cần thông báo trước. Nếu chúng tôi thực hiện các sửa đổi như vậy, chúng tôi có thể thực hiện các bước thích hợp để bạn chú ý đến những thay đổi đó (chẳng hạn như qua email hoặc đặt thông báo trên một vị trí nổi bật trên Trang web, cùng với các điều khoản và điều kiện sửa đổi) nhưng bạn sẽ chịu trách nhiệm duy nhất để kiểm tra mọi sửa đổi, cập nhật và / hoặc sửa đổi. Việc bạn tiếp tục sử dụng các dịch vụ trang web sau bất kỳ sửa đổi nào đối với Điều khoản và Điều kiện sẽ được coi là sự chấp nhận và đồng ý của bạn bị ràng buộc bởi các sửa đổi, cập nhật và / hoặc sửa đổi đó.</p>
                      <p><b>3.5</b> Các điều khoản của Điều khoản và Điều kiện này  sẽ được ưu tiên áp dụng trong trường hợp có bất kỳ xung đột nào giữa các điều khoản của Điều khoản và Điều kiện này và bất kỳ quy tắc trò chơi hoặc tài liệu nào khác được đề cập trong Điều khoản và Điều kiện này.</p>
                      <p><b>3.6</b> Các Điều khoản và Điều kiện này có thể được xuất bản bằng nhiều ngôn ngữ cho mục đích thông tin và người chơi dễ dàng truy cập. Phiên bản tiếng Anh là cơ sở pháp lý duy nhất của mối quan hệ giữa bạn và chúng tôi và trong trường hợp có bất kỳ sự khác biệt nào liên quan đến bản dịch dưới bất kỳ hình thức nào, phiên bản tiếng Anh của các Điều khoản và Điều kiện này sẽ được ưu tiên áp dụng.</p>

                      <h3>4. TÀI KHOẢN SEABET</h3>
                      <p>Đăng ký</p>
                      <p><b>4.1</b> Để bạn có thể đặt cược vào Seabet.io, trước tiên bạn phải đăng ký tài khoản cá nhân với chúng tôi ("Tài khoản Seabet").</p>
                      <p><b>4.2</b> Để một người được đăng ký làm người chơi với Seabet và sử dụng Trang web, người đó phải nộp đơn đăng ký và mở tài khoản Seabet. Đơn đăng ký mở Tài khoản Seabet phải được gửi trực tiếp và sẽ yêu cầu Bạn cung cấp một bộ thông tin cá nhân, cụ thể là e-mail, tên đầy đủ, ngày sinh, địa chỉ, v.v.</p>
                      <p><b>4.3</b> Trong trường hợp thông tin quy định  tại <b>4.2</b>. không được cung cấp và / hoặc không được coi là đầy đủ, chính xác hoặc cập nhật tại bất kỳ thời điểm nào, Seabet có quyền đình chỉ đăng ký Tài khoản Seabet và coi bất kỳ khoản tiền gửi nào có khả năng được chấp nhận tiếp theo vào Tài khoản Seabet của Người chơi là không hợp lệ (và bất kỳ khoản tiền thắng cược nào phát sinh từ khoản tiền gửi đó là vô hiệu). Trong trường hợp Tài khoản Seabet bị đình chỉ, bạn nên liên hệ với bộ phận hỗ trợ khách hàng tại (support{'@'}Seabet.io).</p>
                      <p><b>4.4</b> Tất cả các đương đơn phải từ 18 tuổi trở lên hoặc độ tuổi trưởng thành hợp pháp khác được xác định bởi bất kỳ luật nào áp dụng cho bạn, bất kể độ tuổi nào lớn hơn hay lớn hơn. Seabet có quyền yêu cầu bằng chứng về tuổi từ bất kỳ Người chơi nào và đình chỉ Tài khoản Seabet của họ cho đến khi tài liệu thỏa đáng được cung cấp. Seabet có trách nhiệm đối với cờ bạc dưới tuổi và có trách nhiệm rất nghiêm túc.</p>
                      <p><b>4.5</b> Seabet sẽ không chấp nhận đăng ký từ các cá nhân:</p>
                      <p>a) Dưới 18 tuổi hoặc dưới độ tuổi trưởng thành hợp pháp hoặc đánh bạc trong phạm vi quyền hạn của mình;</p>
                      <p>b) Cư trú tại các khu vực pháp lý mà từ đó là bất hợp pháp hoặc không được phép đánh bạc. Seabet không thể xác minh tính hợp pháp của Dịch vụ ở từng khu vực pháp lý và Người dùng có trách nhiệm đảm bảo rằng việc sử dụng Dịch vụ của họ là hợp pháp;</p>
                      <p>c) Cung cấp thông tin sai lệch hoặc cố gắng vượt qua bên thứ ba.</p>
                      <p><b>4.6</b> Seabet có quyền từ chối bất kỳ đơn đăng ký nào cho Tài khoản Seabet, theo quyết định riêng của mình.</p>

                      <p>Biết khách hàng của bạn</p>
                      <p><b>4.7</b> Bạn  tuyên bố và đảm bảo rằng bất kỳ thông tin nào do Bạn cung cấp trong mẫu đơn đăng ký của Bạn là đúng, cập nhật và chính xác.</p>
                      <p><b>4.8</b> Seabet có quyền, bất cứ lúc nào, yêu cầu bất kỳ tài liệu KYC nào mà Seabet cho là cần thiết để xác định danh tính và vị trí của Người chơi. Seabet có quyền hạn chế Dịch vụ, thanh toán hoặc rút tiền cho đến khi danh tính được xác định đầy đủ, hoặc vì bất kỳ lý do nào khác theo quyết định riêng của Seabet. Seabet cũng có quyền tiết lộ thông tin của Người chơi khi thích hợp để tuân thủ quy trình pháp lý hoặc được cho phép bởi chính sách bảo mật của Seabet (chủ sở hữu và nhà điều hành Seabet) và bằng cách sử dụng Dịch vụ, bạn thừa nhận và đồng ý với khả năng tiết lộ đó.</p>

                      <p>Nhiều tài khoản</p>
                      <p><b>4.9</b> Chỉ cho phép một Tài khoản Seabet cho mỗi Người chơi. Nếu Bạn cố gắng hoặc mở thành công nhiều hơn một Tài khoản Seabet, dưới tên riêng của Bạn hoặc dưới bất kỳ tên nào khác, hoặc nếu Bạn cố gắng hoặc thành công trong việc sử dụng Trang web bằng bất kỳ Tài khoản Seabet nào khác, Seabet sẽ có quyền đóng ngay lập tức tất cả (các) Tài khoản Seabet của Bạn, giữ lại tất cả các khoản tiền trong Tài khoản Seabet đó và cấm Bạn sử dụng Trang web trong tương lai.</p>
                      <p><b>4.10</b> Nếu Seabet  có lý do để tin rằng Bạn đã đăng ký và/hoặc sử dụng nhiều hơn một Tài khoản Seabet, hoặc thông đồng với một hoặc nhiều cá nhân khác sử dụng một số Tài khoản Seabet khác nhau, Seabet sẽ có quyền coi các tài khoản đó cấu thành nhiều Tài khoản Seabet và đình chỉ hoặc đóng tất cả các Tài khoản Seabet đó. Seabet cũng sẽ có quyền giữ lại tiền cho đến khi Người chơi chứng minh rằng anh ta không cố gắng tạo nhiều tài khoản.</p>
                      <p><b>4.11</b> Nếu bạn nhận thấy rằng bạn có nhiều hơn một Tài khoản Seabet đã đăng ký, bạn phải thông báo cho chúng tôi ngay lập tức. Nếu không làm như vậy có thể dẫn đến Tài khoản Seabet của bạn bị khóa và tiền được giữ lại.</p>

                      <p>Trách nhiệm của người dùng</p>
                      <p><b>4.12</b> Trách nhiệm duy nhất và độc quyền của bạn là đảm bảo rằng các chi tiết đăng nhập của bạn được giữ an toàn. Bạn không được tiết lộ chi tiết đăng nhập của mình cho bất kỳ ai.</p>
                      <p><b>4.13</b> Chúng tôi không chịu trách nhiệm về bất kỳ sự lạm dụng hoặc lạm dụng Tài khoản Seabet của bạn bởi các bên thứ ba do việc bạn tiết lộ, dù cố ý, vô tình, chủ động hay thụ động, chi tiết đăng nhập của bạn cho bất kỳ bên thứ ba nào.</p>
                      <p><b>4.14</b> Bạn bị cấm bán, chuyển nhượng hoặc mua Tài khoản Seabet cho hoặc từ những Người chơi khác.</p>
                      <p><b>4.15</b> Bạn sẽ thông báo cho chúng tôi ngay khi bạn nhận thấy bất kỳ lỗi nào liên quan đến tài khoản của bạn hoặc bất kỳ tính toán nào liên quan đến bất kỳ cược nào bạn đã đặt. Chúng tôi có quyền tuyên bố vô hiệu hóa bất kỳ cược nào có lỗi như vậy.</p>
                      <p><b>4.16</b> Bạn chịu trách nhiệm cho tất cả các hoạt động xảy ra trong tài khoản của bạn.</p>

                      <p>Tính năng bảo mật</p>
                      <p><b>4.17</b> Chúng tôi khuyên bạn nên bật xác thực hai yếu tố để tăng cường bảo mật cho tài khoản của mình.</p>
                      <p><b>4.18</b> Chúng tôi có thể cung cấp các biện pháp bảo mật khác theo thời gian và chúng tôi khuyến khích bạn sử dụng chúng.</p>


                      <p>Đình chỉ và đóng cửa bởi Seabet</p>
                      <p><b>4.19</b> Seabet có quyền đóng hoặc đình chỉ Tài khoản Seabet của bạn nếu:</p>
                      <p>a) Seabet cho rằng Bạn đang sử dụng hoặc đã sử dụng Trang web theo cách gian lận hoặc thông đồng hoặc cho các mục đích bất hợp pháp và / hoặc bất hợp pháp hoặc không phù hợp;</p>
                      <p>b) Seabet cho rằng Bạn đang sử dụng hoặc đã sử dụng Trang web một cách không công bằng, đã cố tình gian lận hoặc lợi dụng không công bằng Seabet hoặc bất kỳ khách hàng nào của Seabet hoặc nếu Tài khoản Seabet của Bạn đang được sử dụng vì lợi ích của bên thứ ba;</p>
                      <p>c) Seabet được yêu cầu làm như vậy bởi cảnh sát, bất kỳ cơ quan quản lý hoặc tòa án nào hoặc nếu Seabet không thể xác minh danh tính, nghề nghiệp hoặc nguồn tiền của Bạn theo yêu cầu rõ ràng của các quy định hiện hành;</p>
                      <p>d) Bạn vi phạm các Điều khoản và Điều kiện này, các quy định hiện hành hoặc sử dụng hợp lý các dịch vụ của chúng tôi, hoặc Seabet lo ngại rằng Bạn là một người chơi cờ bạc có vấn đề bắt buộc mà không tự loại trừ;</p>
                      <p>e) Seabet cho rằng bất kỳ sự kiện nào được đề cập trong (a) đến (e) ở trên có thể đã xảy ra hoặc có khả năng xảy ra.</p>
                      <p><b>4.20</b> Nếu Seabet  đóng hoặc đình chỉ Tài khoản Seabet của bạn vì bất kỳ lý do nào được đề cập  trong <b>4.15</b>, Bạn sẽ, trong phạm vi được pháp luật hiện hành cho phép, chịu trách nhiệm cho bất kỳ và tất cả các khiếu nại, tổn thất trực tiếp, trách nhiệm pháp lý, thiệt hại, chi phí và chi phí phát sinh hoặc phải chịu bởi Seabet (gọi chung là "Khiếu nại") phát sinh từ đó và sẽ, trong phạm vi được pháp luật hiện hành cho phép,  bồi thường và giữ Seabet vô hại theo yêu cầu đối với các khiếu nại đó.</p>
                      <p><b>4.21</b> Trong các trường hợp được đề cập trong <b>4.15</b>, Seabet cũng sẽ có quyền vô hiệu hóa bất kỳ cược nào do Bạn đặt sau những hành động đó của Bạn hoặc giữ lại và / hoặc giữ lại bất kỳ và tất cả số tiền đã được thanh toán hoặc phải trả cho bạn (bao gồm bất kỳ khoản tiền thắng cược nào) trong phạm vi pháp luật cho phép.</p>
                      <p><b>4.22</b> Chúng tôi có  quyền đình chỉ hoặc chấm dứt tài khoản của bạn bất cứ lúc nào, có hoặc không có thông báo, nếu chúng tôi nghi ngờ rằng tài khoản của bạn đã bị xâm phạm hoặc đang được sử dụng vi phạm Điều khoản Dịch vụ của chúng tôi.</p>
                      <p><b>4.23</b> Nếu Seabet đóng Tài khoản Seabet của Bạn  , nó sẽ thông báo cho Bạn về các phương tiện có sẵn để rút số dư còn lại trên Tài khoản Seabet của Bạn.</p>

                      <p>Trách nhiệm của chúng tôi</p>
                      <p><b>4.24</b> Chúng tôi không chịu trách nhiệm về bất kỳ tổn thất hoặc thiệt hại nào mà bạn có thể phải chịu do truy cập trái phép vào tài khoản của bạn.</p>
                      <p><b>4.25</b> Chúng tôi không chịu trách nhiệm về bất kỳ tổn thất hoặc thiệt hại nào mà bạn có thể phải chịu do không giữ thông tin đăng nhập của bạn an toàn và riêng tư.</p>

                      <h3>5. BẢO HÀNH CỦA BẠN</h3>
                      <p><b>5.1</b> Trước khi bạn sử dụng Dịch vụ và trên cơ sở liên tục, bạn tuyên bố, bảo đảm, giao ước và đồng ý rằng:</p>
                      <p>Khả năng</p>
                      <p>a) Bạn trên 18 tuổi hoặc độ tuổi trưởng thành hợp pháp khác được xác định bởi bất kỳ luật nào áp dụng cho bạn, tùy theo độ tuổi nào lớn hơn;</p>
                      <p>b) Bạn có đầy đủ năng lực để tham gia vào một thỏa thuận ràng buộc về mặt pháp lý với chúng tôi và bạn không bị hạn chế bởi bất kỳ hình thức hạn chế năng lực pháp lý nào;</p>
                      <p>c) Bạn không được chẩn đoán hoặc phân loại là người nghiện cờ bạc hoặc có vấn đề;</p>
                      <p>d) Bạn hiện không tự loại trừ khỏi bất kỳ trang web cờ bạc hoặc cơ sở cờ bạc nào. Bạn sẽ thông báo cho Seabet ngay lập tức nếu bạn tham gia vào thỏa thuận tự loại trừ với bất kỳ nhà cung cấp cờ bạc nào.</p>

                      <p>Thẩm quyền</p>
                      <p>e) Bạn đang truy cập Seabet.io từ một khu vực tài phán mà việc làm như vậy là hợp pháp;</p>
                      <p>f) Bạn sẽ không sử dụng dịch vụ của chúng tôi trong khi ở bất kỳ khu vực tài phán nào cấm đặt và / hoặc chấp nhận đặt cược trực tuyến và / hoặc chơi sòng bạc và / hoặc trò chơi trực tiếp;</p>
                      <p>g) Bạn chấp nhận và thừa nhận rằng chúng tôi có quyền phát hiện và ngăn chặn việc sử dụng các kỹ thuật bị cấm, bao gồm nhưng không giới hạn ở phát hiện giao dịch gian lận, đăng ký và đăng ký tự động, kỹ thuật chơi trò chơi và chụp màn hình. Các bước này có thể bao gồm, nhưng không giới hạn, kiểm tra các thuộc tính thiết bị của Người chơi, phát hiện vị trí địa lý và che giấu IP, giao dịch và phân tích blockchain;</p>

                      <p>Quỹ &; Thuế</p>
                      <p>h) Bạn hoàn toàn chịu trách nhiệm báo cáo và hạch toán bất kỳ khoản thuế nào áp dụng cho bạn theo luật liên quan đối với bất kỳ khoản tiền thắng cược nào mà bạn nhận được từ chúng tôi;</p>
                      <p>i) Bạn hoàn toàn chịu trách nhiệm về bất kỳ khoản thuế hiện hành nào có thể phải trả đối với  tiền mã hóa được trao cho bạn thông qua việc bạn sử dụng Dịch vụ;</p>
                      <p>j) Có nguy cơ mất  tiền mã hóa khi sử dụng Dịch vụ và Seabet không chịu trách nhiệm với bạn về bất kỳ tổn thất nào như vậy;</p>
                      <p>k) Bạn sẽ không gửi tiền có nguồn gốc từ hoạt động tội phạm hoặc trái phép khác;</p>
                      <p>l) Bạn sẽ không gửi tiền bằng các phương thức thanh toán không thuộc về Bạn;</p>
                      <p>m) Tất cả số tiền gửi sẽ được sử dụng riêng cho các Dịch vụ có sẵn trên Trang web;</p>
                      <p>n) Bạn sẽ không rút tiền hoặc cố gắng rút tiền về phương thức thanh toán không thuộc về Bạn;</p>
                      <p>o) Bạn hiểu rằng bằng cách tham gia vào các Dịch vụ có sẵn trên Trang web, Bạn có nguy cơ mất tiền gửi.</p>
                      <p>p) Bạn chấp nhận và thừa nhận rằng giá trị của  tiền mã hóa có thể thay đổi đáng kể tùy thuộc vào giá trị thị trường;</p>
                      <p>q) Seabet không được coi là tổ chức tài chính;</p>

                      <p>Khác</p>
                      <p>r) Việc bạn sử dụng Dịch vụ là tùy theo lựa chọn, quyết định và rủi ro của riêng bạn;</p>
                      <p>s) Bạn sẽ không tiến hành các hoạt động tội phạm thông qua Tài khoản Seabet;</p>
                      <p>t) Tất cả thông tin mà bạn cung cấp cho chúng tôi trong thời hạn hiệu lực của thỏa thuận này là đúng, đầy đủ, chính xác và bạn phải thông báo ngay cho chúng tôi về bất kỳ thay đổi nào đối với thông tin đó;</p>
                      <p>u) Bạn tham gia Trò chơi một cách nghiêm ngặt với tư cách cá nhân và không chuyên nghiệp và chỉ tham gia cho mục đích giải trí và giải trí;</p>
                      <p>v) Bạn tham gia vào các Trò chơi thay mặt bạn và không thay mặt cho bất kỳ người nào khác;</p>
                      <p>w) Bạn chỉ có một tài khoản với chúng tôi và đồng ý không mở thêm bất kỳ tài khoản nào với chúng tôi;</p>
                      <p>x) Các mạng viễn thông và dịch vụ truy cập Internet cần thiết để bạn truy cập và sử dụng Dịch vụ hoàn toàn nằm ngoài tầm kiểm soát của Seabet và Seabet sẽ không chịu bất kỳ trách nhiệm pháp lý nào đối với bất kỳ sự cố mất điện, chậm chạp, hạn chế dung lượng hoặc các thiếu sót khác ảnh hưởng đến cùng một sự cố;</p>
                      <p>y) Bạn sẽ không tham gia vào bất kỳ hoạt động gian lận, thông đồng, sửa chữa hoặc bất hợp pháp nào khác liên quan đến sự tham gia của Bạn hoặc bất kỳ bên thứ ba nào vào bất kỳ trò chơi và / hoặc dịch vụ nào trên Trang web và sẽ không sử dụng bất kỳ phương pháp hoặc kỹ thuật hoặc thiết bị phần cứng hỗ trợ phần mềm nào để Bạn tham gia vào bất kỳ trò chơi và / hoặc dịch vụ nào trên Trang web;</p>
                      <p>z) Nếu bạn có quyền truy cập vào thông tin không công khai liên quan đến một sự kiện hoặc có thể ảnh hưởng đến kết quả của một sự kiện hoặc loại cược, Bạn sẽ không đặt cược vào bất kỳ sự kiện nào được giám sát bởi cơ quan quản lý thể thao / sự kiện có liên quan;</p>
                      <p>aa) Nếu Bạn là vận động viên, huấn luyện viên, người quản lý, chủ sở hữu, trọng tài hoặc bất kỳ ai có đủ thẩm quyền để ảnh hưởng đến kết quả của một sự kiện, Bạn sẽ không đặt cược vào bất kỳ sự kiện nào được giám sát bởi môn thể thao hoặc sự kiện có liên quan của cơ quan chủ quản;</p>
                      <p>bb) Nếu Bạn là chủ sở hữu (người là chủ sở hữu hợp pháp hoặc thụ hưởng trực tiếp hoặc gián tiếp từ 10 phần trăm trở lên) của cơ quan quản lý thể thao hoặc đội thành viên, Bạn sẽ không đặt cược vào bất kỳ sự kiện nào được giám sát bởi cơ quan quản lý thể thao hoặc bất kỳ sự kiện nào trong đó một đội thành viên của cơ quan quản lý môn thể thao hoặc sự kiện đó tham gia;</p>
                      <p>cc) Nếu Bạn tham gia vào một môn thể thao hoặc sự kiện, Bạn sẽ không tham gia vào việc tổng hợp tỷ lệ cá cược cho cuộc thi mà Bạn tham gia.</p>
                      <p><b>5.2</b> Trong trường hợp vi phạm bất kỳ  tuyên bố, bảo đảm hoặc giao ước nào được đề cập trong, Seabet có quyền đóng hoặc đình chỉ tài khoản Seabet của bạn theo quyết định riêng của mình và vô hiệu hóa bất kỳ cược nào trong phạm vi được pháp luật áp dụng.</p>

                      <h3>6. BẢO HÀNH SEABET</h3>
                      <p><b>6.1</b> Seabet đảm bảo rằng họ sẽ:</p>
                      <p>a) quản lý các quỹ thuộc về Người chơi một cách an toàn và phù hợp; và</p>
                      <p>b) quản lý thông tin cá nhân liên quan đến Người chơi theo luật hiện hành và phù hợp với Chính sách bảo mật của người chơi.</p>
                      <p><b>6.2</b> Phần mềm được cung cấp "nguyên trạng" mà không có bất kỳ bảo đảm, điều kiện, cam kết hoặc tuyên bố nào, rõ ràng hay ngụ ý, theo luật định hoặc cách khác. Seabet loại trừ tất cả các điều khoản, tuyên bố, điều kiện và bảo đảm ngụ ý (bao gồm bất kỳ khả năng bán được, chất lượng có thể bán được, chất lượng thỏa đáng và phù hợp cho bất kỳ mục đích cụ thể nào). </p>
                      <p>Seabet không đảm bảo rằng: </p>
                      <p>(i)Trang web và Dịch vụ sẽ đáp ứng các yêu cầu của Bạn; </p>
                      <p>(ii)Trang web và Dịch vụ sẽ không vi phạm quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào;</p>
                      <p>(iii)Hoạt động của Trang web và Dịch vụ sẽ không có lỗi hoặc không bị gián đoạn;</p>
                      <p>(iv)Bất kỳ lỗi nào trong Trang web và Dịch vụ sẽ được sửa chữa; hoặc </p>
                      <p>(v)Trang web hoặc các máy chủ không có vi-rút.</p>

                      <p><b>6.3</b> Seabet có thể được liên hệ qua email trên (support{'@'}seabet.io) hoặc trên trò chuyện trực tiếp 24/7. Trò chuyện trực tiếp có sẵn khi đăng nhập vào Tài khoản Seabet của bạn. Trong trường hợp Seabet, theo quyết định riêng của mình, cho rằng hành vi của Bạn, thông qua trò chuyện trực tiếp, email hoặc cách khác, đã lạm dụng hoặc xúc phạm đối với bất kỳ Seabet hoặc Đại lý hoặc nhân viên của nhà cung cấp dịch vụ bên thứ ba, Seabet sẽ có quyền chặn hoặc chấm dứt Tài khoản Seabet của bạn.</p>

                      <h3>7. TIỀN GỬI</h3>
                      <p><b>7.1</b> Bạn chỉ có thể tham gia vào bất kỳ Trò chơi nào nếu bạn có đủ tiền trong Tài khoản Seabet của mình để tham gia đó. Vì mục đích đó, bạn sẽ sử dụng các phương thức thanh toán có sẵn trên Trang web để gửi tiền của mình. Seabet sẽ không cung cấp cho bạn bất kỳ khoản tín dụng nào để tham gia vào bất kỳ Trò chơi nào.</p>
                      <p><b>7.2</b> Bạn phải gửi tiền vào Tài khoản Seabet của bạn bằng các phương thức thanh toán có sẵn tại www. Seabet.io.</p>
                      <p><b>7.3</b> Bạn  phải đảm bảo rằng các khoản tiền mà Bạn gửi vào Tài khoản Seabet của bạn không bị nhiễm bất kỳ hành vi bất hợp pháp nào và đặc biệt, không bắt nguồn từ bất kỳ hoạt động hoặc nguồn bất hợp pháp nào.</p>
                      <p><b>7.4</b> Để gửi tiền vào Tài khoản Seabet của bạn, bạn có thể chuyển tiền từ ví  tiền mã hóa dưới sự kiểm soát của bạn hoặc thông qua bất kỳ phương thức thanh toán nào khác có sẵn trên Seabet.io. Tiền gửi chỉ có thể được thực hiện bằng tiền của riêng bạn.</p>
                      <p><b>7.5</b> Bạn  chỉ nên gửi tiền vào tài khoản của Bạn cho mục đích Bạn sử dụng số tiền đó để đặt cược / đặt cược trên Trang web. Seabet có quyền đình chỉ hoặc đóng tài khoản của bạn nếu chúng tôi tin tưởng một cách hợp lý rằng Bạn đang gửi tiền mà không có ý định đặt cược thể thao và / hoặc chơi game. Trong những trường hợp như vậy, chúng tôi cũng có thể báo cáo hoạt động này cho các cơ quan có liên quan.</p>
                      <p><b>7.6</b> Bạn  thừa nhận và hiểu rằng việc nạp tiền vào Tài khoản Seabet của Bạn chỉ có thể được nạp tiền bằng các phương thức thanh toán do Bạn sở hữu.</p>
                      <p><b>7.7</b> Bạn  cũng hiểu, đồng ý và thừa nhận rằng nếu Seabet phát hiện, phát hiện và / hoặc xác định rằng Bạn:</p>
                      <p>a) Được tài trợ / đang nạp tiền vào Tài khoản Seabet của bạn bằng các phương thức thanh toán của bên thứ ba; và/hoặc</p>
                      <p>b) Được tài trợ / đang nạp tiền vào Tài khoản Seabet của bạn bằng các khoản tiền bị nhiễm bất hợp pháp, hoạt động đó sẽ được coi là vi phạm Điều khoản Dịch vụ dẫn đến gian lận và bằng cách mở rộng:</p>
                      <p>i) Seabet có quyền, theo quyết định riêng của mình, đình chỉ hoặc đóng Tài khoản Seabet của bạn; và</p>
                      <p>ii) Seabet có quyền, theo quyết định riêng của mình, hủy bỏ, đảo ngược hoặc điều chỉnh bất kỳ giao dịch nào và mất tiền gửi và / hoặc tiền thắng cược được tạo ra từ các khoản tiền gửi.</p>
                      <p><b>7.8</b> Seabet có thể đặt theo mô tả riêng của mình một số tiền gửi tối thiểu. Số tiền gửi tối thiểu có thể được thay đổi mọi lúc theo mô tả của Seabet và sẽ được xác định trên trang web. Xin lưu ý rằng tùy thuộc vào phương thức thanh toán mà Bạn sử dụng, các nhà cung cấp dịch vụ thanh toán có thể tính phí bổ sung.</p>
                      <p><b>7.9</b> Các phương thức thanh toán được cung cấp cho bạn và giới hạn tiền gửi tối thiểu và tối đa có thể được tìm thấy trong phần ví trên Trang web. Phí dịch vụ áp dụng có thể được áp dụng và thay đổi. Một số phương thức thanh toán có thể không khả dụng ở tất cả các quốc gia.</p>
                      <p><b>7.10</b> Tiền gửi được xử lý ngay lập tức và số dư cập nhật được hiển thị trong Tài khoản Seabet ngay lập tức bất cứ khi nào nhà cung cấp dịch vụ thanh toán được sử dụng. Seabet không chịu trách nhiệm cho bất kỳ sự chậm trễ nào gây ra do hệ thống thanh toán của mình hoặc do sự chậm trễ gây ra bởi bất kỳ bên thứ ba nào. Lưu ý rằng:</p>
                      <p>a) Một số phương thức thanh toán có thể bao gồm các khoản phí bổ sung. Trong trường hợp này, phí sẽ được hiển thị rõ ràng cho bạn trong nhân viên thu ngân.</p>
                      <p>b) ngân hàng hoặc nhà cung cấp dịch vụ thanh toán của bạn có thể tính thêm phí cho bạn đối với các khoản tiền gửi chuyển đổi tiền tệ theo các điều khoản và điều kiện của họ và thỏa thuận người dùng của bạn.</p>
                      <p><b>7.11</b> Chúng tôi có quyền sử dụng các thủ tục và phương tiện bổ sung để xác minh danh tính của bạn khi xử lý tiền gửi vào Tài khoản Seabet của bạn.</p>
                      <p><b>7.12</b> Tiền không thể được chuyển từ Tài khoản Seabet của bạn sang Tài khoản Seabet của Người chơi khác.</p>
                      <p><b>7.13</b> Seabet có thể từ chối bất kỳ khoản tiền gửi nào theo mô tả của riêng mình. Người dùng bị khóa hoặc tạm ngưng tài khoản sẽ không gửi tiền vào www.Seabet.io.</p>
                      <p><b>7.14</b> Trong trường hợp người chơi cố gắng gửi tiền khi tài khoản của anh ta bị chặn hoặc bị đình chỉ, Seabet sẽ có quyền giữ lại tiền.</p>

                      <h3>8. RÚT TIỀN</h3>
                      <p><b>8.1</b> Seabet có quyền từ chối bất kỳ việc rút tiền nào của Người chơi từ Tài khoản Seabet của họ cho đến:</p>
                      <p>a) danh tính của Người chơi đã được xác minh và Seabet đã xác nhận việc rút tiền đang được thực hiện bởi chủ Tài khoản Seabet;</p>
                      <p>b) việc rút tiền đang được chuyển vào tài khoản mà Người chơi là chủ sở hữu hợp pháp;</p>
                      <p>c) bất kỳ thông tin bổ sung nào theo yêu cầu của Seabet đã được cung cấp; và</p>
                      <p>d) Người chơi đã tuân thủ yêu cầu đặt cược tối thiểu cho mỗi khoản tiền gửi.</p>
                      <p><b>8.2</b> Seabet có tất cả các quyền để điều tra tài khoản và hoạt động chơi trò chơi của bạn. Nếu Seabet nghi ngờ một cách hợp lý rằng tài khoản hoặc hoạt động chơi trò chơi của Bạn đã vi phạm các điều khoản dịch vụ này hoặc các luật hoặc quy định hiện hành, Seabet có thể, theo quyết định riêng của mình, trì hoãn hoặc từ chối gửi thêm tiền, rút tiền và / hoặc chơi trò chơi trong khi tiến hành điều tra. Bạn thừa nhận và chấp nhận rằng Seabet có thể không ở vị trí để đưa ra lời giải thích về bản chất của cuộc điều tra.</p>
                      <p><b>8.3</b> Tất cả các giao dịch rút tiền phải được thực hiện thông qua cùng một phương thức thanh toán do bạn chọn khi gửi tiền, trừ khi chúng tôi quyết định khác hoặc không thể làm như vậy. Nếu bạn gửi tiền bằng một số phương thức thanh toán, chúng tôi có quyền chia tiền rút của bạn trên các phương thức thanh toán đó và xử lý từng phần thông qua phương thức thanh toán tương ứng theo quyết định của chúng tôi và phù hợp với các chính sách và quy định chống rửa tiền.</p>
                      <p><b>8.4</b> Nếu chúng tôi ghi có nhầm vào Tài khoản Seabet của bạn  với tiền thắng cược không thuộc về bạn, cho dù do lỗi kỹ thuật trong bảng thanh toán, hoặc lỗi của con người hay cách khác, số tiền sẽ vẫn là tài sản của chúng tôi và sẽ được khấu trừ từ Tài khoản Seabet của bạn. Nếu bạn đã rút tiền không thuộc về bạn trước khi chúng tôi nhận ra lỗi, số tiền thanh toán nhầm sẽ (không ảnh hưởng đến các biện pháp khắc phục và hành động khác có thể có sẵn theo luật) tạo thành khoản nợ mà bạn nợ chúng tôi. Trong trường hợp tín dụng không chính xác, bạn có nghĩa vụ thông báo cho chúng tôi ngay lập tức qua email.</p>

                      <p>Rút tiền pháp định</p>
                      <p><b>8.5</b> Bạn cần đặt cược 100% giá trị tiền gửi của mình để yêu cầu rút tiền pháp định.</p>
                      <p><b>8.6</b> Rút tiền từ Tài khoản Seabet được thực hiện thông qua các khoản thanh toán gửi đến Người chơi hoặc chuyển vào tài khoản ngân hàng đứng tên Người chơi, theo lời khuyên của Người chơi cho Seabet. Trước khi xử lý bất kỳ khoản rút tiền nào, Seabet có quyền thực hiện thẩm định nâng cao khi thấy cần thiết.</p>
                      <p><b>8.7</b> Số tiền rút  tối thiểu sẽ được xác định trên trang web khi thực hiện rút tiền.</p>
                      <p><b>8.8</b> Nếu Bạn có nhiều lần rút tiền  đang chờ xử lý, Seabet có quyền từ chối tất cả các lần rút tiền và yêu cầu Bạn thực hiện một lần rút tiền với tổng của tất cả nhiều lần rút tiền.</p>
                      <p><b>8.9</b> Seabet sẽ không tính bất kỳ khoản phí nào khi rút tiền. Tuy nhiên, Bạn nên kiểm tra xem phương thức thanh toán Bạn sử dụng có áp dụng bất kỳ khoản phí bổ sung nào không. Seabet sẽ không chịu trách nhiệm cho bất kỳ khoản hoa hồng hoặc phí xử lý nào được tính cho Bạn bởi các bên thứ ba như ngân hàng của Bạn vì điều này nằm ngoài tầm kiểm soát của chúng tôi.</p>

                      <p>Rút  tiền mã hóa</p>
                      <p><b>8.10</b> Rút tiền mã hóa sẽ được thực hiện đến địa chỉ ví  tiền mã hóa đã nêu của bạn khi thực hiện yêu cầu rút tiền hợp lệ.</p>
                      <p><b>8.11</b> Seabet có quyền thực hiện các thủ tục xác minh KYC bổ sung cho bất kỳ khoản rút tiền nào. Người chơi muốn lấy lại tiền được giữ trong tài khoản đã đóng, bị khóa hoặc bị loại trừ, nên liên hệ (support{'@'}seabet.io).</p>
                      <p><b>8.12</b> Tất cả các giao dịch sẽ được kiểm tra để ngăn chặn rửa tiền. Nếu người chơi biết về bất kỳ hoạt động đáng ngờ nào liên quan đến bất kỳ Trò chơi nào của Trang web, họ phải báo cáo điều này cho Seabet ngay lập tức. Seabet có thể đình chỉ, chặn hoặc đóng Tài khoản Seabet và giữ lại tiền nếu được yêu cầu theo Đạo luật Phòng chống rửa tiền hoặc trên bất kỳ cơ sở pháp lý nào khác theo yêu cầu của bất kỳ cơ quan nhà nước nào. Bạn thừa nhận rằng tiền trong tài khoản của bạn được tiêu thụ ngay lập tức khi chơi và chúng tôi không cung cấp trả lại hàng hóa, hoàn lại tiền hoặc hủy hồi tố tài khoản của bạn.</p>

                      <h3>9. BẢO VỆ TIỀN CỦA NGƯỜI CHƠI &; BỒI HOÀN</h3>
                      <p><b>9.1</b> Bất kỳ khoản tiền nào Bạn gửi với chúng tôi trong Tài khoản Seabet của Bạn, cùng với bất kỳ khoản tiền  thắng cược nào, được giữ cho Bạn trong các tài khoản ngân hàng / ví  tiền mã hóa riêng biệt của khách hàng cho mục đích duy nhất và cụ thể để Bạn đặt cược thể thao và chơi trò chơi và giải quyết bất kỳ khoản phí hoặc lệ phí nào mà Bạn có thể phải chịu liên quan đến việc sử dụng Dịch vụ của chúng tôi. Điều này có nghĩa là tiền của Bạn được bảo vệ khỏi việc sử dụng cho bất kỳ mục đích nào khác.</p>
                      <p><b>9.2</b> Nếu chúng tôi phải chịu bất kỳ khoản  bồi hoàn, đảo ngược hoặc từ chối thanh toán hoặc bất kỳ tổn thất nào mà Seabet phải chịu do hậu quả của việc đó do các nguyên nhân liên quan đến Tài khoản Seabet của Bạn, chúng tôi có quyền tính phí Bạn cho các khoản tiền liên quan phát sinh.</p>
                      <p><b>9.3</b> Chúng tôi có thể, bất cứ lúc nào, đặt bất kỳ số dư dương nào trên tài khoản của Bạn so với bất kỳ số tiền nào Bạn nợ Seabet.</p>
                      <h3>10. ĐẶT CƯỢC/ĐẶT CƯỢC</h3>
                      <p><b>10.1</b> Bạn được phép đặt cược / đặt cược của mình trên các thị trường / sản phẩm được cung cấp trên Trang web. Seabet không có nghĩa vụ chấp nhận bất kỳ cược / cược nào từ Bạn và cược / cược sẽ chỉ được coi là hợp lệ và được hoàn tất, và do đó được Seabet chấp nhận, khi Bạn nhận được xác nhận từ Seabet về việc chấp nhận đặt cược / đặt cược của Bạn.</p>
                      <p><b>10.2</b> Seabet chỉ chấp nhận cược / cược được thực hiện trực tuyến (bao gồm cả qua thiết bị di động). Cược / cược không được chấp nhận dưới bất kỳ hình thức nào khác (bưu điện, email, fax, v.v.) và nơi nhận được sẽ không hợp lệ và vô hiệu - thắng hoặc thua.</p>
                      <p><b>10.3</b> Bạn có trách nhiệm đảm bảo chi tiết về cược / cược là chính xác. Khi cược / cược đã được đặt, Bạn có thể không hủy bỏ. Cược chỉ có thể được thay đổi bởi Bạn bằng cách sử dụng tính năng Chỉnh sửa Đặt cược của chúng tôi, nếu điều này có sẵn. Seabet chỉ có thể hủy hoặc sửa đổi cược / cược nếu sự kiện liên quan đã bị đình chỉ hoặc hủy bỏ, nếu có lỗi rõ ràng về đặt cược có liên quan hoặc tỷ lệ cược của nó, nếu đặt cược vi phạm Điều khoản hoặc nếu được yêu cầu làm như vậy vì lý do pháp lý hoặc quy định.</p>
                      <p><b>10.4</b> Tiền của bạn sẽ được phân bổ cho cược / cược theo thứ tự chúng được đặt và sẽ không có sẵn cho bất kỳ mục đích sử dụng nào khác. Seabet có quyền vô hiệu hóa và / hoặc đảo ngược bất kỳ giao dịch nào được thực hiện sau khi đặt cược / đặt cược liên quan đến số tiền được phân bổ, tại thời điểm đó hoặc hồi tố.</p>
                      <h3>11. XÁC NHẬN ĐẶT CƯỢC/ĐẶT CƯỢC</h3>
                      <p><b>11.1</b> Cược/cược  sẽ chỉ có hiệu lực khi Bạn nhận được xác nhận chấp nhận cược/cược của Bạn. Các cược / cược được đặt không đủ tiền trong tài khoản của Bạn sẽ bị vô hiệu.</p>
                      <p><b>11.2</b> Cược / cược mà Bạn yêu cầu sẽ chỉ có hiệu lực sau khi được Seabet chấp nhận. Mỗi cược / cược hợp lệ sẽ nhận được một mã giao dịch duy nhất. Chúng tôi sẽ không chịu trách nhiệm về việc giải quyết bất kỳ cược / cược nào không được phát hành với mã giao dịch duy nhất. Nếu Bạn không chắc chắn về tính hợp lệ của cược/cược, vui lòng kiểm tra lịch sử tài khoản của Bạn hoặc liên hệ với Nhóm Hỗ trợ Khách hàng của chúng tôi (support{'@'}seabet.io).</p>
                      <p><b>11.3</b> Nếu có tranh chấp phát sinh liên quan đến nội dung đặt cược, Bạn và Seabet đồng ý rằng cơ sở dữ liệu nhật ký giao dịch Seabet của hệ thống kiểm soát nội bộ sẽ là cơ quan có thẩm quyền cuối cùng trong các vấn đề đó.</p>
                      <h3>12. TIỀN THƯỞNG</h3>
                      <p><b>12.1</b> Seabet, theo quyết định riêng của mình, đôi khi có thể cung cấp một số Tiền thưởng và Khuyến mãi. </p>

                      <p>Đủ điều kiện</p>
                      <p><b>12.2</b> Sau khi đăng ký thành công Tài khoản Seabet, bạn có thể đủ điều kiện để nhận các chương trình khuyến mãi và tiền thưởng của Seabet. Bằng cách chấp nhận thỏa thuận này và đăng ký Tài khoản Seabet trên Trang web, bạn cũng thừa nhận và chấp nhận bị ràng buộc bởi các quy tắc và quy định liên quan đến bất kỳ Chương trình khuyến mãi và Tiền thưởng nào do Seabet cung cấp cho bạn.</p>
                      <p>T&C thưởng</p>
                      <p><b>12.3</b> Tất cả các chương trình khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt phải tuân theo các điều khoản rõ ràng của bất kỳ phần thưởng nào được  cung cấp trên (các) Trang web và các điều khoản và điều kiện cụ thể cho chương trình khuyến mãi, nếu có, và bất kỳ phần thưởng nào được ghi có vào tài khoản của Bạn phải được sử dụng tuân thủ các điều khoản và điều kiện đó. Bằng cách chấp nhận khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt có sẵn trên (các) Trang web, Bạn đồng ý với các điều khoản và điều kiện của chương trình khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt đó và thừa nhận rằng cược phải luôn được đặt với số dư tiền mặt trước khi số dư tiền thưởng có thể được sử dụng để đặt cược. Chúng tôi có quyền rút lại bất kỳ chương trình khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt nào bất cứ lúc nào.</p>
                      <p>Kích hoạt &; Hết hạn</p>
                      <p><b>12.4</b> Bằng cách kích hoạt Tiền thưởng hoặc Khuyến mãi, bạn xác nhận rằng Bạn cũng đồng ý với các điều khoản và điều kiện áp dụng.</p>
                      <p><b>12.5</b> Không có khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt  nào được Seabet chấp nhận hoặc tôn trọng sau ngày hết hạn của chương trình khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt, trừ khi Seabet theo quyết định riêng của mình chọn làm như vậy cho bất kỳ khách hàng, khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt cụ thể nào. Ngày hết hạn sẽ được quy định trong các quy tắc hoặc điều khoản và điều kiện cụ thể của chương trình khuyến mãi, tiền thưởng hoặc ưu đãi đặc biệt cụ thể. Hơn nữa, Seabet có quyền, theo quyết định riêng của mình, thay đổi hoặc sửa đổi bất kỳ chính sách nào liên quan đến việc kiếm hoặc hết hạn tiền thưởng.</p>
                      <p><b>12.6</b> Sau khi bị mất hoặc hủy kích hoạt, Tiền Thưởng sẽ không còn dành cho Bạn nữa (và không thể được kích hoạt lại bất cứ lúc nào sau đó). Số tiền của bất kỳ Quỹ Tiền thưởng nào đã được ghi có vào Số dư Tài khoản Seabet của bạn sẽ vẫn có sẵn cho Bạn.</p>
                      <p>Lạm dụng tiền thưởng & gian lận</p>
                      <p><b>12.7</b> Trong trường hợp Seabet tin rằng Người chơi Dịch vụ đang lạm dụng hoặc cố gắng lạm dụng tiền thưởng hoặc khuyến mãi khác hoặc có  khả năng được hưởng lợi thông qua việc lạm dụng hoặc thiếu thiện chí từ chính sách do Seabet thông qua, thì Seabet có thể, theo quyết định riêng của mình, từ chối, giữ lại hoặc rút khỏi bất kỳ Người chơi nào bất kỳ phần thưởng hoặc khuyến mãi nào,  hoặc chấm dứt quyền truy cập của Người chơi đó vào Dịch vụ, Phần mềm và / hoặc khóa tài khoản của Người chơi đó, tạm thời hoặc vĩnh viễn.</p>
                      <p><b>12.8</b> Bạn chỉ có thể mở một (1) tài khoản trên Trang web. Việc mở nhiều tài khoản trên Trang web với mục đích tích lũy tiền thưởng, khuyến mãi, ưu đãi đặc biệt hoặc cách khác, sẽ được coi là hành vi lạm dụng.</p>

                      <p>Quyền Seabet</p>
                      <p><b>12.9</b> Seabet có quyền xóa tiền thưởng khỏi tất cả các tài khoản không hoạt động hoặc tài khoản được xác định là "người lạm dụng tiền thưởng".</p>
                      <p><b>12.10</b> Seabet có quyền hủy bỏ tất cả các khoản tiền thưởng chưa được yêu cầu trong thời gian yêu cầu hoặc 60 ngày, ngắn hơn trong hai ngày.</p>
                      <p><b>12.11</b> Seabet có quyền hủy bỏ bất kỳ phần thưởng nào theo mô tả duy nhất của mình.</p>

                      <h3>13. THẨM QUYỀN / ĐIỀU KHOẢN DỊCH VỤ</h3>
                      <p><b>13.1</b> Bạn đồng ý với các quy tắc trò chơi được mô tả trên trang web Seabet.io. Seabet giữ quyền đối với việc phát hành, duy trì và đóng Dịch vụ. Quyết định của ban quản lý Seabet, liên quan đến bất kỳ việc sử dụng Dịch vụ nào, hoặc giải quyết tranh chấp, là quyết định cuối cùng và sẽ không được xem xét hoặc khiếu nại.</p>

                      <h3>14. SỬ DỤNG BỊ CẤM</h3>
                      <p>SỬ DỤNG CÁ NHÂN</p>
                      <p><b>14.1</b> Dịch vụ chỉ dành cho mục đích sử dụng cá nhân của Người dùng. Người dùng chỉ được phép đặt cược để giải trí cá nhân của mình. Người dùng không được tạo nhiều tài khoản cho mục đích thông đồng, cá cược thể thao và / hoặc lạm dụng dịch vụ.</p>

                      <p>TUÂN THỦ AML & TRỪNG PHẠT</p>
                      <p><b>14.2</b> Seabet nghiêm cấm và từ chối sử dụng Dịch vụ cho bất kỳ hình thức hoạt động bất hợp pháp nào, bao gồm rửa tiền, tài trợ khủng bố hoặc vi phạm lệnh trừng phạt thương mại, phù hợp với luật, quy định và tiêu chuẩn của các khu vực pháp lý khác nhau. Vì mục đích đó, Dịch vụ không được cung cấp cho các cá nhân hoặc tổ chức chịu sự điều chỉnh của Hoa Kỳ, Liên minh Châu Âu hoặc các lệnh trừng phạt hoặc danh sách theo dõi toàn cầu khác. Bằng cách sử dụng Dịch vụ, bạn tuyên bố và đảm bảo rằng bạn không quá chủ quan.</p>
                      <p>LUẬT</p>
                      <p><b>14.3</b> Những người cư trú tại hoặc cư trú tại Afghanistan, Úc, Belarus, Bỉ, Côte d'Ivoire, Cuba, Curaçao, Cộng hòa Séc, Cộng hòa Dân chủ Congo, Đan Mạch, Pháp, Đức, Hy Lạp, Iran, Iraq, Ý, Liberia, Libya, Lithuania, Hà Lan, Bắc Triều Tiên, Ontario, Bồ Đào Nha, Serbia, Slovakia, Nam Sudan, Tây Ban Nha, Sudan, Syria, Thụy Sĩ, Vương quốc Anh, Hoa Kỳ, Zimbabwe ("Khu vực pháp lý bị cấm") không được phép sử dụng Dịch vụ. Để tránh nghi ngờ, các hạn chế nêu trên đối với việc tham gia chơi tiền thật từ các Khu vực pháp lý bị cấm áp dụng như nhau cho cư dân và công dân của các quốc gia khác trong khi nằm trong Khu vực tài phán bị cấm. Bất kỳ nỗ lực nào nhằm phá vỡ các hạn chế chơi của bất kỳ người nào nằm trong Khu vực tài phán bị cấm hoặc Khu vực tài phán bị hạn chế, đều là vi phạm Thỏa thuận này. Một nỗ lực lách luật bao gồm, nhưng không giới hạn, thao túng thông tin được sử dụng bởi Seabet để xác định vị trí của bạn và cung cấp cho Seabet thông tin sai lệch hoặc gây hiểu lầm về vị trí hoặc nơi cư trú của bạn.</p>

                      <p><b>14.4</b> Nỗ lực thao túng vị trí thực của bạn thông qua việc sử dụng VPN, proxy hoặc các dịch vụ tương tự hoặc thông qua việc cung cấp thông tin không chính xác hoặc gây hiểu lầm về nơi cư trú của bạn, với mục đích phá vỡ các hạn chế về chặn địa lý hoặc quyền tài phán, cấu thành vi phạm Khoản 5 của Điều khoản Dịch vụ này.</p>

                      <h3>15. THIẾT BỊ CỦA BẠN</h3>
                      <p><b>15.1</b> Thiết bị máy tính hoặc thiết bị di động và kết nối internet của bạn có thể ảnh hưởng đến hiệu suất và / hoặc hoạt động của Trang web. Seabet không đảm bảo rằng Trang web sẽ hoạt động mà không có lỗi hoặc lỗi hoặc các dịch vụ của Seabet sẽ được cung cấp mà không bị gián đoạn. Seabet không chấp nhận bất kỳ trách nhiệm pháp lý nào đối với bất kỳ lỗi hoặc vấn đề nào phát sinh do thiết bị, kết nối internet hoặc nhà cung cấp dịch vụ internet hoặc viễn thông của Bạn (bao gồm, ví dụ, nếu Bạn không thể đặt cược hoặc đặt cược hoặc xem hoặc nhận thông tin nhất định liên quan đến các sự kiện cụ thể).</p>
                      <p><b>15.2</b> Đối với khách hàng sử dụng thiết bị di động  để đặt cược / đặt cược, xin lưu ý rằng Seabet sẽ không chịu trách nhiệm cho bất kỳ thiệt hại hoặc mất dữ liệu nào từ thiết bị di động mà phần mềm được cài đặt trên đó và cũng sẽ không chịu trách nhiệm cho bất kỳ cuộc gọi, dữ liệu hoặc các khoản phí khác phát sinh trong khi sử dụng phần mềm.</p>
                      <p><b>15.3</b> Do kích thước hiển thị hạn chế trên thiết bị di động, trải nghiệm di động có thể hơi khác so với các nền tảng khác. Sự khác biệt có thể bao gồm, nhưng không giới hạn, vị trí của một số thông tin nhất định trên nền tảng và tên trò chơi không hiển thị trên tất cả các trang trò chơi.</p>

                      <h3>16. SỬ DỤNG HỢP LÝ</h3>
                      <p><b>16.1</b> Trang web và Dịch vụ chỉ có thể được sử dụng cho mục đích giải trí bằng cách đặt cược và đặt cược vào các sự kiện và / hoặc sản phẩm trò chơi.</p>
                      <p><b>16.2</b> Bạn không được sử dụng Trang web vì lợi ích của bên thứ ba hoặc cho bất kỳ mục đích nào bất hợp pháp, phỉ báng, lạm dụng hoặc khiêu dâm, hoặc Seabet coi là phân biệt đối xử, gian lận, không trung thực hoặc không phù hợp. Seabet có thể báo cáo cho chính quyền bất kỳ hoạt động nào mà Seabet cho là đáng ngờ và / hoặc vi phạm đoạn này.</p>
                      <p><b>16.3</b> Nếu Seabet có nghi  ngờ hợp lý rằng Bạn có liên quan đến các hành vi gian lận, không trung thực hoặc tội phạm, như được quy định theo luật hiện hành, thông qua hoặc liên quan đến Trang web hoặc Dịch vụ, Seabet có thể tìm kiếm các biện pháp trừng phạt hình sự và hợp đồng chống lại Bạn. Seabet sẽ giữ lại thanh toán cho bất kỳ khách hàng nào trong trường hợp nghi ngờ bất kỳ điều nào trong số này hoặc khi khoản thanh toán bị nghi ngờ là vì lợi ích của bên thứ ba.</p>
                      <p><b>16.4</b> Bạn sẽ bồi thường và có trách nhiệm thanh toán cho Seabet, theo yêu cầu, tất cả các chi phí, phí hoặc tổn thất mà chúng tôi và các  chi nhánh của chúng tôi phải chịu hoặc phải chịu (bao gồm mọi tổn thất trực tiếp, gián tiếp hoặc do hậu quả, mất lợi nhuận và mất uy tín) đối với tất cả các Khiếu nại phát sinh trực tiếp hoặc gián tiếp từ các hành vi gian lận, không trung thực hoặc tội phạm của Bạn trong khi sử dụng Trang web hoặc Dịch vụ</p>
                      <p><b>16.5</b> Hơn nữa, chúng tôi có quyền không chấp nhận, xử lý và / hoặc tôn trọng các cược / cược khi nó sẽ bị cấm, bất hợp pháp hoặc bất hợp pháp theo luật hoặc quy định hiện hành để làm như vậy.</p>

                      <h3>17. VẤN ĐỀ PHẦN MỀM VÀ CÔNG NGHỆ</h3>
                      <p><b>17.1</b> Để Bạn sử dụng Trang web và Dịch vụ, Bạn có thể cần tải xuống một số phần mềm (ví dụ: trò chơi sòng bạc được cung cấp thông qua trình phát flash). Ngoài ra, một số nhà cung cấp sản phẩm bên thứ ba nhất định có thể yêu cầu Bạn đồng ý với các điều khoản và điều kiện bổ sung điều chỉnh việc sử dụng các sản phẩm của họ có sẵn trên hoặc thông qua Trang web. Nếu Bạn không chấp nhận các điều khoản và điều kiện của bên thứ ba đó, vui lòng không sử dụng phần mềm của bên thứ ba có liên quan. Seabet không chấp nhận bất kỳ trách nhiệm pháp lý nào đối với bất kỳ phần mềm của bên thứ ba nào.</p>
                      <p><b>17.2</b> Bạn chỉ được phép sử dụng bất kỳ và  tất cả phần mềm được cung cấp cho Bạn thông qua Trang web cho mục đích sử dụng Trang web và Dịch vụ và, trừ phạm vi được luật hiện hành cho phép, không cho bất kỳ mục đích nào khác.</p>
                      <p><b>17.3</b> Chúng tôi cấp cho Bạn quyền cá nhân, không độc quyền, không thể chuyển nhượng để sử dụng Trang web cho mục đích duy nhất là truy cập và sử dụng Dịch vụ trên Trang web, theo các Điều khoản và Điều kiện này. Quyền sử dụng Trang web của chúng tôi và sẽ bị chấm dứt ngay lập tức sau khi đăng ký người dùng của Bạn bị hủy vì bất kỳ lý do gì và đặc biệt, nhưng không giới hạn, nếu Bạn sử dụng quyền đó với mục đích tạo ra một doanh nghiệp song song có trụ sở tại Trang web hoặc các sản phẩm của chúng tôi hoặc với mục đích sử dụng dịch vụ tự động hoặc phân tích phần mềm,  nắm bắt hoặc bằng cách nào đó sử dụng thông tin được hiển thị trong Trang web của chúng tôi.</p>
                      <p><b>17.4</b> Bạn không được phép:</p>
                      <p>a) cài đặt hoặc tải phần mềm tạo thành một phần của Trang web lên máy chủ hoặc thiết bị nối mạng khác hoặc thực hiện các bước khác để cung cấp phần mềm thông qua bất kỳ hình thức "bảng thông báo", dịch vụ trực tuyến hoặc quay số hoặc mạng từ xa cho bất kỳ người nào khác;</p>
                      <p>b) cấp phép phụ, chuyển nhượng, thuê, cho thuê, cho mượn, chuyển nhượng hoặc sao chép (trừ khi được quy định rõ ràng ở nơi khác trong các Điều khoản và Điều kiện này) Quyền sử dụng Trang web của Bạn hoặc phần mềm tạo thành một phần của Trang web, hoặc tạo hoặc phân phối các bản sao tương tự;</p>
                      <p>c) nhập, truy cập hoặc cố gắng xâm nhập hoặc truy cập hoặc bỏ qua hệ thống bảo mật của Seabet hoặc can thiệp theo bất kỳ cách nào (bao gồm nhưng không giới hạn, rô bốt hoặc các thiết bị tương tự) với các sản phẩm hoặc Trang web hoặc cố gắng thực hiện bất kỳ sửa đổi nào đối với phần mềm và / hoặc bất kỳ tính năng hoặc thành phần nào của chúng;</p>
                      <p>d) sao chép hoặc dịch bất kỳ tài liệu người dùng nào được cung cấp 'trực tuyến' hoặc ở định dạng điện tử.</p>
                      <p>e) Ngoài ra, ngoại trừ trong phạm vi tối thiểu được luật hiện hành cho phép liên quan đến các chương trình máy tính, Bạn không được phép: (i) dịch, đảo ngược kỹ thuật, dịch ngược, tháo rời, sửa đổi, tạo các tác phẩm phái sinh dựa trên hoặc sửa đổi Trang web; hoặc (ii) đảo ngược kỹ thuật, dịch ngược, tháo rời, sửa đổi, điều chỉnh, dịch, thực hiện bất kỳ nỗ lực nào để khám phá mã nguồn của phần mềm tạo thành một phần của Trang web hoặc tạo các sản phẩm phái sinh dựa trên toàn bộ hoặc trên bất kỳ phần nào của Trang web.</p>
                      <p><b>17.5</b> Bạn không sở hữu phần mềm tạo thành một phần của Trang web. Phần mềm này được sở hữu và là tài sản độc quyền của Seabet hoặc công ty cung cấp phần mềm bên thứ ba (bất kỳ nhà cung cấp bên thứ ba nào như vậy, "Nhà cung cấp phần mềm"). Bất kỳ phần mềm và tài liệu đi kèm nào đã được cấp phép cho Seabet đều là sản phẩm độc quyền của Nhà cung cấp phần mềm và được bảo vệ trên toàn thế giới theo luật bản quyền. Việc bạn sử dụng phần mềm không cung cấp cho Bạn quyền sở hữu bất kỳ quyền sở hữu trí tuệ nào trong phần mềm.</p>
                      <p><b>17.6</b> Phần mềm được cung cấp "nguyên trạng" mà không có bất kỳ bảo đảm, điều kiện, cam kết hoặc tuyên bố nào, rõ ràng hay ngụ ý, theo luật định hoặc cách khác. Seabet loại trừ tất cả các điều khoản, điều kiện và bảo đảm ngụ ý, bao gồm bất kỳ khả năng bán được, chất lượng có thể bán được, chất lượng thỏa đáng và phù hợp cho bất kỳ mục đích cụ thể nào, tính đầy đủ hoặc chính xác của dịch vụ hoặc phần mềm hoặc vi phạm luật và quy định hiện hành. Seabet không đảm bảo hoặc điều kiện rằng: </p>
                      <p>(i) phần mềm sẽ đáp ứng các yêu cầu của Bạn; </p>
                      <p>(ii) phần mềm sẽ không vi phạm quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào; </p>
                      <p>(iii) hoạt động của phần mềm sẽ không có lỗi hoặc không bị gián đoạn; (iv) bất kỳ lỗi nào trong phần mềm sẽ được sửa chữa; hoặc </p>
                      <p>(v) Phần mềm hoặc máy chủ không có vi-rút.</p>

                      <p><b>17.7</b> Trong trường hợp thông tin liên lạc hoặc lỗi hệ thống xảy ra liên quan đến việc giải quyết tài khoản hoặc các tính năng hoặc thành phần khác của phần mềm, Seabet và Nhà cung cấp phần mềm sẽ không có bất kỳ trách nhiệm pháp lý nào đối với Bạn hoặc bất kỳ bên thứ ba nào về các lỗi đó. Seabet có quyền trong trường hợp có lỗi như vậy để xóa tất cả các sản phẩm có liên quan khỏi Trang web và thực hiện bất kỳ hành động nào khác để sửa các lỗi đó.</p>
                      <p><b>17.8</b> Bạn  thừa nhận rằng cách Bạn sử dụng phần mềm nằm ngoài tầm kiểm soát của Seabet. Theo đó, Bạn tự chịu rủi ro khi cài đặt và/hoặc sử dụng phần mềm. Seabet sẽ không có bất kỳ trách nhiệm pháp lý nào đối với Bạn hoặc bất kỳ bên thứ ba nào liên quan đến việc Bạn nhận và / hoặc sử dụng phần mềm.</p>
                      <p><b>17.9</b> Phần  mềm có thể bao gồm thông tin bí mật và có giá trị đối với Nhà Cung Cấp Phần Mềm và/hoặc Seabet. Bạn không có quyền sử dụng hoặc tiết lộ thông tin bí mật đó ngoài việc tuân thủ nghiêm ngặt các Điều khoản và Điều kiện này.</p>
                      <p><b>17.10</b> Seabet sẽ không chịu trách nhiệm nếu vì bất kỳ lý do gì Trang web không khả dụng bất cứ lúc nào hoặc trong bất kỳ khoảng thời gian nào. Chúng tôi có quyền thực hiện các thay đổi hoặc chỉnh sửa hoặc thay đổi, đình chỉ hoặc ngừng bất kỳ khía cạnh nào của Trang web và nội dung hoặc dịch vụ hoặc sản phẩm có sẵn thông qua nó, bao gồm cả quyền truy cập của Bạn vào nó.</p>
                      <p><b>17.11</b> Bạn không được lạm dụng Trang web bằng cách giới thiệu vi-rút, trojan, sâu, bom logic hoặc tài liệu khác độc hại hoặc có hại về mặt công nghệ. Cụ thể, Bạn không được truy cập Trang web mà không có thẩm quyền, can thiệp, làm hỏng hoặc làm gián đoạn Trang web hoặc bất kỳ phần nào của Trang web, bất kỳ thiết bị hoặc mạng nào mà Trang web được lưu trữ, bất kỳ phần mềm nào được sử dụng liên quan đến việc cung cấp Trang web hoặc bất kỳ thiết bị, phần mềm hoặc trang web nào do bên thứ ba sở hữu hoặc sử dụng. Bạn không được tấn công Trang web của chúng tôi thông qua tấn công từ chối dịch vụ. Chúng tôi sẽ không chịu trách nhiệm về bất kỳ tổn thất hoặc thiệt hại nào gây ra bởi cuộc tấn công từ chối dịch vụ phân tán, vi-rút hoặc tài liệu có hại về mặt công nghệ khác có thể lây nhiễm sang thiết bị máy tính, chương trình máy tính, dữ liệu hoặc tài liệu độc quyền khác của Bạn phát sinh do Bạn sử dụng Trang web, phần mềm hoặc do Bạn tải xuống bất kỳ tài liệu nào được đăng trên đó hoặc trên bất kỳ trang web nào được liên kết với nó.</p>

                      <h3>18. NỘI DUNG CỦA BÊN THỨ BA</h3>
                      <p><b>18.1</b> Seabet nhận được nguồn cấp dữ liệu, bình luận và nội dung từ một số nhà cung cấp. Một số nhà cung cấp sản phẩm bên thứ ba nhất định có thể yêu cầu Bạn đồng ý với các điều khoản và điều kiện bổ sung điều chỉnh việc sử dụng nguồn cấp dữ liệu, bình luận và nội dung của họ. Nếu Bạn không chấp nhận các điều khoản và điều kiện của bên thứ ba có liên quan, Bạn đồng ý không sử dụng các nguồn cấp dữ liệu, bình luận hoặc nội dung có liên quan.</p>
                      <p><b>18.2</b> Seabet không chấp nhận bất kỳ trách nhiệm pháp lý nào đối với bất kỳ nguồn cấp dữ liệu, bình luận và nội dung nào của bên thứ ba.</p>
                      <p><b>18.3</b> Trường hợp Trang web chứa các liên kết đến các trang web và tài nguyên của bên thứ ba, các liên kết này chỉ được cung cấp cho thông tin của Bạn. Seabet không kiểm soát nội dung của các trang web hoặc tài nguyên này và không chịu trách nhiệm pháp lý đối với chúng hoặc cho bất kỳ tổn thất hoặc thiệt hại nào có thể phát sinh từ việc Bạn sử dụng chúng. Việc bao gồm liên kết đến trang web của bên thứ ba không cấu thành sự chứng thực cho trang web, sản phẩm hoặc dịch vụ của bên thứ ba đó, nếu có.</p>

                      <h3>19. LỖI</h3>
                      <p><b>19.1</b> Seabet sẽ không chịu trách nhiệm trong trường hợp Bạn cố gắng hoặc có được lợi thế từ bất kỳ lỗi nào liên quan đến cược hoặc cược trên Trang web nếu Bạn cố tình hành động thiếu thiện chí, bao gồm: </p>
                      <p>(i) có một lỗi rõ ràng trong tỷ lệ cược, chênh lệch, handicap, tổng, rút tiền mặt có liên quan; </p>
                      <p>(ii) Seabet tiếp tục chấp nhận đặt cược hoặc đặt cược trên các thị trường đóng cửa hoặc bị đình chỉ; </p>
                      <p>(iii) Seabet tính toán hoặc thanh toán không chính xác số tiền thanh toán, bao gồm cả trường hợp đặt cược được rút tiền mặt cho toàn bộ số tiền thanh toán hoặc đặt cược bị vô hiệu không chính xác, trong đó 'Vô hiệu nếu người chơi không bắt đầu' đã được chọn tại đặt cược; hoặc bất kỳ lỗi nào xảy ra trong trình tạo số ngẫu nhiên hoặc bảng thanh toán được bao gồm, kết hợp hoặc sử dụng trong bất kỳ trò chơi hoặc sản phẩm nào.</p>

                      <h3>20. VI PHẠM</h3>
                      <p><b>20.1</b> Không ảnh hưởng đến bất kỳ quyền nào khác,  nếu người dùng vi phạm toàn bộ hoặc một phần bất kỳ điều khoản nào trong tài liệu này, Seabet có quyền thực hiện hành động đó khi thấy phù hợp, bao gồm chấm dứt Thỏa thuận này hoặc bất kỳ thỏa thuận nào khác với Người dùng và / hoặc thực hiện hành động pháp lý chống lại Người dùng đó.</p>
                      <p><b>20.2</b> Bạn đồng ý bồi thường đầy đủ, bảo vệ và giữ vô hại cho Seabet và các cổ đông, giám đốc, đại lý và nhân viên của Seabet khỏi và chống lại tất cả các khiếu nại, yêu cầu, trách nhiệm pháp lý, thiệt hại, tổn thất, chi phí và chi phí, bao gồm phí pháp lý và bất kỳ khoản phí nào khác, bất kỳ nguyên nhân nào, có thể phát sinh do:</p>
                      <p>a) bạn vi phạm toàn bộ hoặc một phần Thỏa thuận này;</p>
                      <p>b) bạn vi phạm bất kỳ luật nào hoặc bất kỳ quyền nào của bên thứ ba; và</p>
                      <p>c) việc bạn sử dụng Dịch vụ.</p>



                      <h3>21. GIỚI HẠN VÀ TRÁCH NHIỆM PHÁP LÝ</h3>
                      <p><b>21.1</b> Trong mọi trường hợp, kể cả sơ suất, Seabet sẽ không chịu trách nhiệm cho bất kỳ thiệt hại đặc biệt, ngẫu nhiên, trực tiếp, gián tiếp hoặc hậu quả nào (bao gồm, nhưng không giới hạn, thiệt hại do mất lợi nhuận kinh doanh, gián đoạn kinh doanh, mất thông tin kinh doanh hoặc bất kỳ tổn thất tiền bạc nào khác) phát sinh từ việc sử dụng (hoặc lạm dụng) Dịch vụ ngay cả khi Seabet đã biết trước về khả năng xảy ra những thiệt hại đó.</p>
                      <p><b>21.2</b> Không có nội dung nào trong Thỏa thuận này sẽ loại trừ hoặc giới hạn trách nhiệm của Seabet đối với tử vong hoặc thương tích cá nhân do sơ suất của Seabet.</p>

                      <h3>22. SỞ HỮU TRÍ TUỆ</h3>
                      <p><b>22.1</b> Seabet và người cấp phép là chủ sở hữu duy nhất của tất cả các quyền trong và đối với Dịch vụ và mã, cấu trúc và tổ chức, bao gồm bản quyền, bí mật thương mại, sở hữu trí tuệ và các quyền khác. Bạn không được, trong giới hạn quy định của pháp luật hiện hành: </p>
                      <p>(a) sao chép, phân phối, xuất bản, đảo ngược kỹ thuật, dịch ngược, tháo rời, sửa đổi hoặc dịch Trang web; hoặc </p>
                      <p>(b) sử dụng Dịch vụ theo cách bị cấm theo luật hoặc quy định hiện hành (mỗi cách trên là "Sử dụng trái phép"). </p>
                      <p>Seabet bảo lưu bất kỳ và tất cả các quyền ngụ ý hoặc cách khác, không được cấp rõ ràng cho Người dùng dưới đây và giữ lại tất cả các quyền, quyền sở hữu và lợi ích trong và đối với Dịch vụ. Bạn đồng ý rằng bạn sẽ tự chịu trách nhiệm về bất kỳ thiệt hại, chi phí hoặc chi phí nào phát sinh từ hoặc liên quan đến hoa hồng của bạn đối với bất kỳ Sử dụng trái phép nào. </p>
                      <p>Bạn sẽ thông báo cho Seabet ngay lập tức khi biết về hoa hồng của bất kỳ người nào về bất kỳ Sử dụng trái phép nào và sẽ cung cấp cho Seabet sự hỗ trợ hợp lý với bất kỳ cuộc điều tra nào mà Seabet tiến hành dựa trên thông tin do bạn cung cấp về mặt này.</p>
                      <p><b>22.2</b> Thuật ngữ "Seabet  ", tên miền và bất kỳ nhãn hiệu thương mại hoặc nhãn hiệu dịch vụ nào khác được Seabet sử dụng như một phần của Dịch vụ ("Nhãn hiệu thương mại"), chỉ thuộc sở hữu của Seabet. Ngoài ra, tất cả nội dung trên trang web, bao gồm, nhưng không giới hạn, hình ảnh, hình ảnh, đồ họa, hình ảnh, hoạt ảnh, video, âm nhạc, âm thanh và văn bản ("Nội dung trang web") thuộc về Seabet và được bảo vệ bởi bản quyền và / hoặc sở hữu trí tuệ khác hoặc các quyền khác. Bạn thừa nhận rằng bằng cách sử dụng Dịch vụ, bạn không có quyền đối với Nội dung Trang web và / hoặc Nhãn hiệu Thương mại hoặc bất kỳ phần nào trong đó. Trong mọi trường hợp, bạn không được sử dụng Nội dung Trang web và / hoặc Nhãn hiệu Thương mại mà không có sự đồng ý trước bằng văn bản của Seabet. Ngoài ra, bạn đồng ý không làm bất cứ điều gì gây tổn hại hoặc có khả năng gây tổn hại đến các quyền, bao gồm cả quyền sở hữu trí tuệ của Seabet.</p>

                      <h3>23. TRANH CHẤP</h3>
                      <p><b>23.1</b> Nếu Người dùng muốn khiếu nại, vui lòng liên hệ với nhóm dịch vụ khách hàng của Seabet tại (support{'@'}seabet.io). Nếu bất kỳ tranh chấp nào không được giải quyết thỏa đáng, bạn có thể theo đuổi các biện pháp khắc phục trong phạm vi quyền hạn của luật điều chỉnh được quy định dưới đây.</p>

                      <h3>24. SỬA ĐỔI</h3>
                      <p><b>24.1</b> Seabet có quyền cập nhật hoặc sửa đổi Thỏa thuận này hoặc bất kỳ phần nào của Thỏa thuận này bất cứ lúc nào hoặc thay đổi Dịch vụ mà không cần thông báo và bạn sẽ bị ràng buộc bởi Thỏa thuận sửa đổi đó khi đăng. Do đó, chúng tôi khuyến khích bạn kiểm tra các điều khoản và điều kiện có trong phiên bản Thỏa thuận có hiệu lực tại thời điểm đó. Việc bạn tiếp tục sử dụng Dịch vụ sẽ được coi là chứng thực cho sự đồng ý của bạn đối với bất kỳ sửa đổi nào đối với Thỏa thuận.</p>

                      <h3>25. TÍNH HIỆU LỰC TỪNG PHẦN</h3>
                      <p><b>25.1</b> Nếu một điều khoản của Thỏa thuận này là hoặc trở nên bất hợp pháp, không hợp lệ hoặc không thể thi hành ở bất kỳ khu vực tài phán nào, điều đó sẽ không ảnh hưởng đến hiệu lực hoặc khả năng thực thi trong khu vực tài phán đó của bất kỳ điều khoản nào khác của Thỏa thuận  này hoặc hiệu lực hoặc khả năng thực thi trong các khu vực pháp lý khác của điều đó hoặc bất kỳ điều khoản nào khác của Thỏa thuận này.</p>

                      <h3>26. CHUYỂN NHƯỢNG</h3>
                      <p><b>26.1</b> Seabet có quyền chuyển nhượng thỏa thuận này, toàn bộ hoặc một phần, bất cứ lúc nào mà không cần thông báo. Người dùng không được chuyển nhượng bất kỳ quyền hoặc nghĩa vụ nào của mình theo Thỏa thuận này.</p>

                      <h3>27. ĐIỀU KHOẢN KHÁC</h3>
                      <p><b>27.1</b> Việc Seabet không từ bỏ bất kỳ vi phạm nào đối với bất kỳ điều khoản nào của Thỏa thuận này  (bao gồm cả việc Seabet không yêu cầu thực hiện nghiêm ngặt và theo nghĩa đen hoặc tuân thủ bất kỳ điều khoản nào của Thỏa thuận này) theo bất kỳ cách nào sẽ được hiểu là sự từ bỏ bất kỳ vi phạm nào sau đó đối với điều khoản đó hoặc bất kỳ vi phạm nào đối với bất kỳ điều khoản nào khác của Thỏa thuận này.</p>
                      <p><b>27.2</b> Không có nội dung nào trong Thỏa thuận này  sẽ tạo ra hoặc trao bất kỳ quyền hoặc lợi ích nào khác có lợi cho bất kỳ bên thứ ba nào không phải là thành viên của Thỏa thuận này.</p>
                      <p><b>27.3</b> Không có nội dung nào trong Thỏa thuận này sẽ tạo ra hoặc được coi là tạo ra quan hệ đối tác, đại lý, thỏa thuận ủy thác, mối quan hệ ủy thác hoặc liên doanh giữa bạn và Seabet.</p>
                      <p><b>27.4</b> Seabet có thể chuyển nhượng, chuyển nhượng, tính phí, cấp phép lại hoặc giao dịch theo bất kỳ cách nào khác với Thỏa thuận này hoặc ký hợp đồng phụ bất kỳ quyền và nghĩa vụ nào của mình theo Thỏa thuận này cho bất kỳ bên nào khác.</p>
                      <p><b>27.5</b> Thỏa thuận này cấu thành toàn bộ sự hiểu biết và thỏa thuận giữa bạn và Seabet  về Dịch vụ và thay thế mọi thỏa thuận, hiểu biết hoặc sắp xếp trước đó giữa bạn và Seabet.</p>

                      <h3>28. KHIẾU NẠI</h3>
                      <p><b>28.1</b> Nếu bạn có  khiếu nại liên quan đến các dịch vụ của chúng tôi, bạn có thể liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi qua Trò chuyện trực tiếp hoặc qua email (support{'@'}seabet.io). Chúng tôi sẽ nỗ lực để giải quyết vấn đề kịp thời.</p>

                  </div>`,
    responsibleContent: `<div>
                          <h2>Cờ bạc có trách nhiệm</h2>

                          <p>Trong Seabet.io; Các nền tảng và dịch vụ chúng tôi cung cấp cho phép khách hàng của chúng tôi thưởng thức trò chơi và cá cược. Mục tiêu của chúng tôi là cung cấp cho bạn một môi trường an toàn, bảo mật, được quản lý, cung cấp cho bạn trải nghiệm thú vị và bổ ích. Chúng tôi khuyến khích khách hàng sử dụng dịch vụ của chúng tôi một cách có trách nhiệm và hợp lý.</p>
                          <p>Tất cả các loại trò chơi sòng bạc đã phổ biến trong nhiều năm và trong Seabet.io trò chơi được thiết kế để mang lại niềm vui cho mọi người. Chúng tôi cũng khuyến khích người chơi vui chơi mà không để trò chơi can thiệp vào cuộc sống hàng ngày của họ và dành thời gian cho gia đình và bạn bè. Điều quan trọng là phải đảm bảo rằng số tiền chi cho trò chơi chỉ là tiền lẻ hoặc tiền dự phòng còn lại sau tất cả các chi phí trong cuộc sống của bạn và điều quan trọng là trò chơi không phải là phương tiện kiếm sống vì bạn không thể đảm bảo lợi nhuận từ nó.</p>
                          <p>Mặc dù hầu hết người chơi sẽ chơi có trách nhiệm và bình thường. Nhưng thật không may, có một số ít người chơi có thể gặp vấn đề về cờ bạc. </p>
                          <p>Tại Seabet.io, chất lượng cuộc sống / tâm lý của người chơi rất quan trọng đối với chúng tôi và chúng tôi rất coi trọng vai trò của mình trong cờ bạc có trách nhiệm và khuyên bạn:</p>
                          <ul>
                              <li>Hãy nghĩ về cược và trò chơi của bạn như một hình thức giải trí, chỉ sử dụng số tiền bạn dành cho giải trí.</li>
                              <li>Không đặt cược hoặc đặt cược nhiều hơn mức bạn có thể chi trả.</li>
                              <li>Đừng đặt cược hoặc đặt cược với số tiền bạn không thể để mất.</li>
                              <li>Đừng chạy theo thua lỗ của bạn.</li>
                              <li>Đừng để cược và / hoặc trò chơi của bạn lấy đi thời gian bạn thường dành cho các hoạt động khác.</li>
                          </ul>
                          <p>Nếu bạn có bất kỳ mối quan tâm nào về thói quen cờ bạc của mình và cảm thấy rằng bạn không thể làm theo các khuyến nghị này, chúng tôi đặc biệt khuyên bạn nên tìm kiếm lời khuyên từ các tổ chức được công nhận sau đây có thể cung cấp trợ giúp và lời khuyên:</p>

                          <ul>
                              <li><a target="_blank" href="https://www.gamcare.org.uk/">GamCare</a></li>
                              <li><a target="_blank" href="https://keepitfun.rank.com/">Keep It Fun</a></li>
                              <li><a target="_blank" href="https://www.gamblingtherapy.org/">Gambling Therapy</a></li>
                            </ul>

                          <p>Ngoài ra, nếu bạn muốn tìm hiểu về quy trình tự loại trừ của chúng tôi, bạn có thể gửi email (support{'@'}seabet.io) dịch vụ khách hàng thân thiện Seabet.io của chúng tôi. Đôi khi một khoảng thời gian nghỉ ngơi ngắn có thể giúp bạn giải quyết suy nghĩ của mình và ngăn bạn đưa ra bất kỳ quyết định cá cược hấp tấp nào không phù hợp với thông thường của bạn.</p>
                          <p>Theo yêu cầu, chúng tôi sẽ đặt tài khoản của bạn với thời gian tạm dừng ít nhất là 24 giờ. Sau đó, một trong những nhân viên hỗ trợ của chúng tôi sẽ thông báo cho bạn về việc tự nguyện có sẵn 1 tuần, 1 tháng, 3 tháng, 6 tháng hoặc tự loại trừ vĩnh viễn.</p>
                          <p>Xin lưu ý; Các tài khoản bị đóng theo chính sách tự loại trừ của chúng tôi không thể bị thu hồi hoặc mở lại vì bất kỳ lý do gì. Tuy nhiên, khi tính năng tự loại trừ của bạn hết hạn, chúng tôi sẽ gửi email cho bạn biết rằng tài khoản của bạn đang hoạt động trở lại. Tự loại trừ vĩnh viễn sẽ tồn tại vô thời hạn.</p>

                          <p>Vị thành niên</p>
                          <p>Nếu bạn muốn đánh bạc với chúng tôi trong Seabet.io, bạn phải ít nhất 18 tuổi hoặc độ tuổi đánh bạc tối thiểu hợp pháp (nếu thấp hơn) trong khu vực tài phán mà bạn nắm giữ theo luật áp dụng cho bạn.</p>

                          <p>Chúng tôi khuyên rằng nếu bạn có bất kỳ trẻ vị thành niên nào trong nhà, hãy xem các liên kết sau đến phần mềm kiểm soát của phụ huynh, đây có thể là một công cụ hữu ích để kiểm soát và hạn chế những gì có thể truy cập trên thiết bị của bạn.</p>

                          <ul>
                              <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                              <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                          </ul>
                        </div>`,
    amlContent: `<div>
                    <h2>Báo cáo tài chính chống rửa tiền, chống khủng bố</h2>

                    <h3>1. Mô hình kinh doanh công ty</h3>
                    <p>Seabet hiện hỗ trợ người dùng tại hơn 169 quốc gia trên thế giới. Là một phần của hoạt động toàn cầu, Seabet đã thiết lập các biện pháp tuân thủ tương xứng với các dịch vụ và sản phẩm được thiết kế để ngăn chặn và phát hiện hoạt động bất hợp pháp trên nền tảng của mình. Chúng bao gồm giới thiệu và sàng lọc tuân thủ cho khách hàng của họ và kiểm soát dựa trên giao dịch.</p>

                    <h3>2. Tuyên bố chính sách công ty</h3>
                    <p>Seabet nghiêm cấm và từ chối sử dụng Sản phẩm Seabet cho bất kỳ hình thức hoạt động bất hợp pháp nào, bao gồm rửa tiền, tài trợ khủng bố hoặc vi phạm lệnh trừng phạt thương mại, phù hợp với luật, quy định và hướng dẫn chống rửa tiền quốc gia (AML).</p>
                    <p>Seabet tiếp tục theo dõi các thông số được thiết lập bởi các hướng dẫn do Lực lượng đặc nhiệm hành động tài chính (FATF) và một số tổ chức thương mại trò chơi nhất định và Ủy ban kiểm soát cờ bạc Curacao đặt ra và sẽ thực hiện các hành động như vậy nếu thấy phù hợp để phản ánh những thay đổi trong luật.</p>
                    <p>Seabet dự định tuân theo các thông lệ tốt nhất toàn cầu và ngăn chặn các sản phẩm của Seabet được sử dụng để tạo điều kiện thuận lợi cho các hoạt động đó. Những phương pháp hay nhất này bao gồm:</p>
                    <ul>
                      <li>Thông qua các chính sách bằng văn bản và các thủ tục và kiểm soát được thiết kế hợp lý để ngăn chặn rửa tiền, tài trợ khủng bố và vi phạm các biện pháp trừng phạt thương mại;</li>
                      <li>Khi thích hợp, chỉ định một cán bộ tuân thủ để giám sát việc thực hiện các chính sách, thủ tục và kiểm soát;</li>
                      <li>Cung cấp giáo dục và đào tạo có liên quan cho nhân viên có liên quan;</li>
                      <li>Xem xét độc lập, giám sát và duy trì các chính sách, thủ tục và kiểm soát.</li>
                    </ul>

                    <h3>3. Định nghĩa</h3>
                    <p>Các thuật ngữ xác định sau đây được sử dụng rộng rãi trong ngành:</p>
                    <p>Rửa tiền: Quá trình kiếm tiền thu được bất hợp pháp có vẻ hợp pháp. Quá trình này thường được chia thành ba bước: lưu trữ, phân tầng và hợp nhất.</p>
                    <p>Tiền gửi: Quá trình gửi tiền bất hợp pháp vào một tổ chức tài chính truyền thống, thông qua tiền gửi hoặc các phương tiện khác.</p>
                    <p>Phân tầng: Quá trình tách tiền thu được từ hoạt động tội phạm khỏi nguồn của chúng bằng cách sử dụng mức độ giao dịch tài chính phức tạp, chẳng hạn như chuyển đổi tiền mặt thành séc du lịch, lệnh chuyển tiền, chuyển khoản ngân hàng, thư tín dụng, cổ phiếu, trái phiếu hoặc mua tài sản.</p>
                    <p>Tích hợp: việc sử dụng các giao dịch dường như hợp pháp để che giấu lợi nhuận bất hợp pháp để các quỹ rửa tiền có thể được phân phối lại cho bọn tội phạm; Tích hợp các quỹ rửa tiền hiện tại trở lại sử dụng bình thường.</p>
                    <p>Hoạt động đáng ngờ: hoạt động được thực hiện bởi người dùng hoặc người không sử dụng người dùng sử dụng tổ chức nơi có dấu hiệu cho thấy người thực hiện giao dịch có thể cho mục đích gian lận hoặc bất hợp pháp.</p>
                    <p>Xử phạt: Trừng phạt là các hoạt động được cộng đồng quốc tế thực hiện nhằm cấm hoặc hạn chế các hoạt động bị trừng phạt. Ví dụ, chúng được sử dụng để:</p>
                    <ul>
                        <li>khuyến khích nhà nước, chế độ mục tiêu thay đổi hành vi;</li>
                        <li>Gây áp lực buộc quốc gia mục tiêu phải tuân thủ các mục tiêu đã đề ra;</li>
                        <li>như một công cụ để thực thi pháp luật khi hòa bình và an ninh quốc tế bị đe dọa và các nỗ lực ngoại giao thất bại;</li>
                        <li>Phòng, chống tài trợ khủng bố, khủng bố.</li>
                    </ul>



                    <h3>4. Biện pháp chống rửa tiền và chống khủng bố</h3>
                    <p>Seabet đã bổ nhiệm một Giám đốc tuân thủ (CCO) để điều phối việc thực hiện các chính sách và chương trình chính sách của AML. Trách nhiệm của Giám đốc Tuân thủ cũng bao gồm phát triển các kế hoạch AML, làm việc với các bên liên quan khác để sửa đổi các chính sách AML, đánh giá các yêu cầu quy định mới và điều tra hoạt động đáng ngờ hoặc bất thường có thể xảy ra. Seabet cũng thường xuyên cung cấp đào tạo AML cho tất cả nhân viên.</p>

                    <h3>5. Hệ thống tuân thủ và xử lý vi phạm</h3>
                    <p>Seabet, với sự hỗ trợ của cố vấn pháp lý và dưới sự giám sát của CCO, có thể cung cấp đào tạo tuân thủ AML, CFT và trừng phạt thương mại thường xuyên cho nhân viên của mình theo yêu cầu.</p>

                    <h3>6. Cổng điệntử R</h3>
                    <p>Seabet có nghĩa vụ báo cáo bất kỳ giao dịch bất thường hoặc đáng ngờ nào theo các nghị định quốc gia. Khách hàng được xác định trong danh sách trừng phạt liên quan đến rửa tiền hoặc tài trợ khủng bố hoặc các hoạt động tội phạm khác sẽ được báo cáo cho cơ quan quản lý là hoạt động đáng ngờ.</p>
                  </div>`,
    selfExclusionContent: `<div>
                                <h2>Chính sách tự loại trừ</h2>
                                <p>Nếu bạn cảm thấy bạn không còn có thể kiểm soát cờ bạc hoặc đánh bạc của mình một cách an toàn, chúng tôi cung cấp cho bạn tùy chọn tự loại trừ khỏi cá cược với chúng tôi. Để bắt đầu thời gian tạm dừng như được nêu bên dưới, vui lòng truy cập tùy chọn tài khoản của bạn.</p>

                                <h3>1. Tổng quan</h3>
                                <p>Đối với đa số mọi người, cờ bạc là một hoạt động giải trí và giải trí thú vị. Nhưng đối với một số người, cờ bạc có thể có tác động tiêu cực. Do đó, chúng tôi đã phát triển chính sách này để truyền đạt cách tiếp cận của chúng tôi đối với cờ bạc có trách nhiệm và giảm thiểu tác hại cho người tiêu dùng có thể dễ bị tổn thương bởi vấn đề cờ bạc.</p>

                                <h3>2. Đánh bạc có trách nhiệm là gì?</h3>
                                <p>"Cờ bạc có trách nhiệm" là một khái niệm rộng nhằm đảm bảo cờ bạc được tiến hành theo cách giảm thiểu khả năng gây hại liên quan đến cờ bạc có vấn đề. Nó tôn trọng trách nhiệm của các cá nhân đối với hành động của chính họ, nhưng cũng thừa nhận trách nhiệm từ phía các nhà cung cấp dịch vụ.</p>

                                <h3>3. Vấn đề cờ bạc là gì?</h3>
                                <p>Vấn đề cờ bạc xảy ra khi một người mất kiểm soát cờ bạc của họ, đặc biệt là số tiền đánh bạc và lượng thời gian dành cho cờ bạc.</p>

                                <h3>4. Nguyên tắc chăm sóc khách hàng</h3>
                                <p>Tại Seabet.io, chúng tôi muốn trở thành công ty hàng đầu trong ngành trong việc cung cấp một môi trường an toàn cho khách hàng của chúng tôi. Chúng tôi tích cực khuyến khích và thúc đẩy các hoạt động cờ bạc có trách nhiệm và cung cấp các công cụ để hỗ trợ khách hàng của chúng tôi duy trì kiểm soát cờ bạc của họ.</p>

                                <h3>5. Chính sách cờ bạc có trách nhiệm</h3>
                                <p>Chúng tôi cam kết chia sẻ trách nhiệm, với Chính phủ và cộng đồng và cá nhân, để giúp khách hàng kiểm soát cờ bạc của họ và giúp những người chơi cờ bạc có vấn đề xác định vấn đề của họ và tìm kiếm sự trợ giúp.</p>
                                <p>Một số cách mà chúng tôi thực hiện việc này là: i. cho phép khách hàng của chúng tôi tự loại trừ (tạm thời hoặc vĩnh viễn) khỏi cá cược với chúng tôi; ii. cung cấp thông tin và tin nhắn về cờ bạc có trách nhiệm cho khách hàng của chúng tôi; iii. đào tạo nhân viên của chúng tôi về Cờ bạc có trách nhiệm khi giới thiệu và ít nhất mỗi năm một lần; iv. và giới thiệu khách hàng của chúng tôi bị ảnh hưởng bởi vấn đề cờ bạc đến các dịch vụ hỗ trợ liên quan đến cờ bạc.</p>
                                <p>Chúng tôi mong muốn đạt được các kết quả sau:</p>
                                <ul>
                                <li>Giảm thiểu mức độ tổn hại liên quan đến cờ bạc đối với cá nhân và cộng đồng rộng lớn hơn;</li>

                                <li>Cho phép khách hàng đưa ra quyết định sáng suốt về các hoạt động cờ bạc của họ; </li>

                                <li>Tạo điều kiện cho những người bị ảnh hưởng xấu bởi cờ bạc được tiếp cận với sự hỗ trợ và thông tin kịp thời và phù hợp; </li>

                                <li>Thúc đẩy sự hiểu biết chung giữa các cá nhân, cộng đồng, ngành công nghiệp cờ bạc và Chính phủ về các hoạt động cờ bạc có trách nhiệm; </li>

                                <li>Đảm bảo ngành công nghiệp cờ bạc cung cấp môi trường an toàn và hỗ trợ cho việc cung cấp các sản phẩm và dịch vụ cờ bạc.</li>
                                </ul>
                                <h3>6. Trẻ vị thành niên</h3>
                                <p>Là một nhà điều hành có trách nhiệm, chúng tôi cam kết bảo vệ trẻ vị thành niên bằng cách tích cực thực hiện các bước để loại trừ trẻ vị thành niên đặt cược bằng các nền tảng cá cược của chúng tôi. Các dịch vụ của chúng tôi được thiết kế để thu hút và được sử dụng bởi những người từ 18 tuổi trở lên.</p>

                                <h3>7. Tùy chọn lọc</h3>
                                <p>Các tùy chọn lọc có thể được bật để giúp ngăn mọi người vào sòng bạc trực tuyến hoặc các trang web cá cược thể thao trực tuyến. Nếu trẻ vị thành niên có quyền truy cập vào thiết bị mà bạn sử dụng để truy cập các nền tảng cá cược của chúng tôi, chúng tôi khuyến khích bạn sử dụng phần mềm lọc để ngăn trẻ vị thành niên truy cập vào các nền tảng cá cược của chúng tôi.</p>

                                <h3>8. Trợ giúp bổ sung</h3>
                                <p>Trong trường hợp cần trợ giúp, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi tại support{'@'}seabet.io hoặc trên hệ thống trò chuyện trực tiếp của chúng tôi và một trong những đại lý của chúng tôi sẽ có thể cung cấp cho bạn thông tin chi tiết về các hiệp hội và số điện thoại trợ giúp có sẵn ở quốc gia của bạn.</p>

                                <h3>9. Điều kiện và quy trình</h3>
                                <p>Tự loại trừ có nghĩa là ngừng cá cược hoặc đánh bạc trong một thời gian nhất định. Tự loại trừ có thể là tạm thời hoặc vĩnh viễn.</p>
                                <p>Bằng cách yêu cầu một trong các khoảng thời gian tự loại trừ của chúng tôi được cung cấp, bạn đồng ý với các điều khoản và điều kiện sau, sẽ có hiệu lực kể từ phút bạn nhận được email xác nhận về việc tự loại trừ bạn đã chọn, email này sẽ được gửi đến địa chỉ email được sử dụng để đăng ký tài khoản của bạn và sẽ hiển thị ngày hoàn thành tự loại trừ.</p>
                                <p>Các yêu cầu được thực hiện thông qua chức năng Trò chuyện của chúng tôi sẽ không được thực hiện. Tuy nhiên, nhân viên hỗ trợ khách hàng sẽ hướng dẫn bạn đến dịch vụ email hỗ trợ khách hàng của chúng tôi.</p>
                                <p>Khi nhận được email yêu cầu đóng tài khoản, tài khoản được yêu cầu và bất kỳ tài khoản được liên kết nào sẽ được đặt vào giai đoạn đầu tiên của chúng tôi, khoảng thời gian tạm dừng 24 giờ sẽ vô hiệu hóa tài khoản hoặc tài khoản của bạn, không cho phép hoạt động cờ bạc. Một khi thời gian này đã trôi qua; Trong khi tài khoản hoặc tài khoản của bạn vẫn đóng, nhân viên hỗ trợ khách hàng sẽ thông báo cho bạn về các trường hợp tự loại trừ 1 tuần, 1 tháng, 6 tháng và vĩnh viễn có sẵn. Sẽ không có sự thay đổi của các khoảng thời gian này. Để tiến hành quá trình này, chúng tôi sẽ yêu cầu phản hồi qua email. Nếu chúng tôi không nhận được phản hồi trong vòng 24 giờ nữa, tài khoản của bạn sẽ được mở lại và xác nhận qua email.</p>

                                <p>Nếu sau khi xem xét các tùy chọn tự loại trừ của chúng tôi, bạn quyết định muốn tiến hành tự loại trừ vĩnh viễn, bạn sẽ được yêu cầu đặt khoảng thời gian loại trừ khi được nhắc. Đôi khi, chúng tôi có thể quyết định đặt tài khoản trong khoảng thời gian tự loại trừ ngắn nếu chúng tôi tin rằng tài khoản đó là cần thiết và hoặc có lợi cho khách hàng. Điều này sẽ được thông báo qua email; Các điều khoản và điều kiện trên sẽ được áp dụng.</p>

                                <p>Bạn không được phép để lại bất kỳ số dư nào trong tài khoản của mình trong khoảng thời gian tự loại trừ. Bạn sẽ không thể truy cập vào tài khoản của mình để rút bất kỳ khoản tiền nào trong thời gian bạn yêu cầu tự loại trừ. Nếu bạn có tài khoản bị ảnh hưởng bởi tính năng tự loại trừ có bất kỳ cược nào đang hoạt động, chức năng Rút tiền sẽ được áp dụng tại thời điểm xác nhận tự loại trừ. Cược sẽ không bị hủy; Tiền đặt cọc sẽ không được trả lại hoặc vẫn hoạt động trong suốt khoảng thời gian tự loại trừ. Cược sẽ không được khôi phục sau khi hoàn thành tự loại trừ. Trong khi Tự loại trừ, bạn không đủ điều kiện nhận bất kỳ hình thức lợi ích, tiền thưởng hoặc nạp tiền nào.</p>

                                <p>Khi tính năng tự loại trừ được áp dụng cho tài khoản của bạn, nó sẽ được giữ nguyên cho đến khi thời gian yêu cầu kết thúc, nó sẽ không bị đảo ngược hoặc giảm vì bất kỳ lý do gì. Tự loại trừ vĩnh viễn sẽ vẫn đóng cửa vô thời hạn.</p>

                                <p>Chúng tôi sẽ sử dụng tất cả các nỗ lực hợp lý để đảm bảo tuân thủ chính sách tự loại trừ cờ bạc có trách nhiệm của chúng tôi. Tuy nhiên, bạn chấp nhận rằng chúng tôi sẽ không chịu trách nhiệm hoặc nghĩa vụ pháp lý nếu bạn cố gắng mở bất kỳ tài khoản mới nào hoặc thực sự thành công. Ngoài ra, chúng tôi sẽ không chịu trách nhiệm hoặc chịu trách nhiệm nếu bạn tiếp tục gửi tiền và đặt cược bằng các tài khoản bổ sung mà trước đây chưa được tiết lộ. Bất kỳ cược nào trong tương lai, quỹ Phần thưởng và các mục trong bất kỳ chương trình khuyến mãi nào trong thời gian tự loại trừ được yêu cầu sẽ bị mất, dẫn đến không trả lại tiền cược hoặc thanh toán tiền thắng. Chúng tôi sẽ không thể khôi phục các mục này nếu tài khoản được mở lại sau thời gian tự loại trừ. Sau khi tự loại trừ, bạn thừa nhận rằng:</p>

                                <p>Bạn không nên cố gắng, gửi tiền hoặc đặt bất kỳ cược nào vào bất kỳ tài khoản nào của bạn mà bạn đã yêu cầu loại trừ trong quá trình tự loại trừ đã chọn.</p>

                                <p>Bạn không nên cố gắng hoặc tiến hành mở bất kỳ tài khoản mới nào trong thời gian tự loại trừ hoặc vô thời hạn nếu đã chọn tự loại trừ vĩnh viễn.</p>

                                <p>Nếu bạn thành công trong việc mở một tài khoản mới trong thời gian tự loại trừ, chúng tôi sẽ cố gắng đóng bất kỳ và tất cả các tài khoản đó khi phát hiện sớm nhất.</p>
                                <p>Trách nhiệm của chúng tôi chỉ là thực hiện các bước hợp lý để ngăn bạn đánh bạc vào bất kỳ sản phẩm nào của chúng tôi. Khách hàng cũng có trách nhiệm không vi phạm các điều khoản đã thỏa thuận này.</p>

                                <p>Yêu cầu tự loại trừ là yêu cầu tự nguyện do bạn đưa ra. Nếu bạn tiến hành hành động trái với yêu cầu đó, bất kỳ nhân viên hoặc người liên quan nào của họ cũng không phải chịu trách nhiệm hoặc chịu trách nhiệm pháp lý cho bất kỳ tổn thất nào mà bạn có thể phải chịu. Bất kỳ tổn thất nào phát sinh trong thời gian loại trừ bản thân sẽ không được hoàn trả.</p>

                                <p>Nếu bạn hành động trái với yêu cầu tự loại trừ, chúng tôi có toàn quyền chấm dứt hoặc vô hiệu hóa bất kỳ cược nào bạn đã đặt và thực hiện hành động thích hợp khác. Ngoài ra, nếu chúng tôi nghi ngờ hoặc điều tra thêm cung cấp bằng chứng cho thấy bạn đã chủ động cố gắng ngụy trang nguồn tài khoản hoặc tài khoản của mình, điều này ảnh hưởng đến khả năng chúng tôi chặn tài khoản hoặc tài khoản của bạn kịp thời, công ty có toàn quyền chấm dứt hoặc vô hiệu hóa bất kỳ cược nào bạn đã đặt và thực hiện hành động thích hợp khác.</p>

                                <p>Khi quá trình tự loại trừ bạn đã chọn kết thúc, tài khoản của bạn sẽ tự động được mở lại. Tuy nhiên, bạn sẽ nhận được email xác nhận thông tin này sẽ được gửi đến địa chỉ email đã đăng ký của bạn.</p>
                           </div>`,
    privacyContent: `<div>
                        <h2>Chính sách bảo mật </h2>
                        <p>Seabet.io tôn trọng và bảo vệ quyền riêng tư của tất cả người dùng Dịch vụ của chúng tôi. Chính sách bảo mật này ("Chính sách") nêu chi tiết cách chúng tôi thu thập, lưu trữ, sử dụng và tiết lộ thông tin cá nhân của bạn.</p>
                        <h3>1. Phạm vi và ứng dụng </h3>
                        <p>Chính sách này áp dụng cho việc bạn truy cập và sử  dụng Seabet.io ("Trang web") và tất cả các trang web và ứng dụng  dưới thương hiệu Seabet, bao gồm tất cả các ứng dụng di động và ứng dụng máy tính bảng của chúng tôi. Ngoài ra, Chính sách này cũng áp dụng khi chúng tôi tương tác với bạn theo những cách khác.</p>
                        <h3>2. Sự đồng ý và sửa đổi của người dùng</h3>
                        <p>Bằng cách sử dụng trang web của Seabet, bạn đồng ý bị ràng buộc bởi Chính sách này. Chúng tôi bảo lưu quyền, theo quyết định riêng của chúng tôi, sửa đổi hoặc thay đổi Chính sách này bất cứ lúc nào và chúng tôi sẽ đăng những thay đổi đó trên Trang web và những thay đổi đó sẽ có hiệu lực ngay khi đăng. Việc bạn tiếp tục sử dụng Trang web sau những thay đổi đó cấu thành sự chấp nhận của bạn đối với những thay đổi đó. Chính sách này không áp dụng cho các trang web khác được liên kết với trang web này.</p>
                        <h3>3. Thông tin cá nhân được thu thập</h3>
                        <ul>
                            <li>Chúng tôi có thể thu thập và xử lý các loại thông tin cá nhân sau:</li>
                            <li>Tên</li>
                            <li>Địa chỉ email</li>
                            <li>Thông tin tùy chọn do người dùng gửi</li>
                            <li>Ngày sinh</li>
                            <li>Quốc tịch</li>
                            <li>Địa chỉ thực</li>
                            <li>Số nhận dạng chính phủ</li>
                            <li>Giấy tờ tùy thân do chính phủ cấp</li>
                            <li>Dữ liệu vị trí</li>
                            <li>Thông tin thiết bị</li>
                            <li>Địa chỉ IP</li>
                        </ul>
                        <p>Thông tin này chủ yếu bắt nguồn từ thông tin bạn cung cấp khi bạn đăng ký tài khoản hoặc liên lạc với chúng tôi.</p>
                        <h3>4. Mục đích thu thập</h3>
                        <p>Chúng tôi thu thập thông tin cá nhân của bạn để:</p>
                        <ul>
                            <li>Tiến hành xác minh danh tính khách hàng (KYC)</li>
                            <li>Để cho phép bạn đăng ký nhận thông tin tiếp thị của chúng tôi</li>
                            <li>Để xử lý đơn đăng ký thành viên của bạn</li>
                            <li>Để cung cấp và cải thiện dịch vụ của chúng tôi</li>
                            <li>Xác định và xác minh danh tính của bạn</li>
                            <li>Liên lạc với bạn</li>
                            <li>tiến hành nghiên cứu thị trường và các hoạt động quảng bá</li>
                            <li>Để trả lời các câu hỏi và yêu cầu của bạn</li>
                            <li>Để tuân thủ các nghĩa vụ hợp đồng và pháp lý của chúng tôi</li>
                        </ul>

                        <h3>5. Sử dụng và tiết lộ thông tin cá nhân</h3>
                        <p>Chúng tôi có thể sử dụng thông tin cá nhân của bạn cho các hoạt động tiếp thị và có thể cho bạn biết về các sản phẩm hoặc dịch vụ mà chúng tôi nghĩ rằng bạn có thể quan tâm qua email, tin nhắn văn bản hoặc điện thoại. Nếu bạn không còn muốn nhận thông tin tiếp thị hoặc quảng cáo từ chúng tôi, bạn có thể hủy đăng ký bất cứ lúc nào bằng cách liên hệ với chúng tôi qua email.</p>
                        <h3>6. Bảo mật thông tin cá nhân</h3>
                        <p>Người dùng phải hiểu rằng việc truyền dữ liệu Internet không an toàn tuyệt đối Seabet.io không thể đảm bảo tính bảo mật tuyệt đối của thông tin do Người dùng tải lên Nền tảng và Người dùng phải chịu rủi ro. Tuy nhiên, sau khi nhận được việc truyền tải thông tin của người dùng, Seabet.io sẽ thực hiện các biện pháp thích hợp để ngăn chặn việc lạm dụng, mất mát và truy cập trái phép, sửa đổi và tiết lộ thông tin cá nhân của người dùng. Điều này bao gồm việc sử dụng mật khẩu bảo vệ hệ thống và cơ sở dữ liệu, cũng như sử dụng công nghệ Lớp cổng bảo mật (SSL). Bằng cách sử dụng Dịch vụ của chúng tôi hoặc cung cấp thông tin cá nhân, người dùng đồng ý rằng chúng tôi có thể liên lạc với bạn bằng điện tử về các vấn đề bảo mật, quyền riêng tư và quản trị liên quan đến việc sử dụng Dịch vụ. Seabet.io nhân viên, đại lý và nhà thầu được yêu cầu giữ bí mật thông tin cá nhân và giao dịch của thành viên. Thông tin được đăng bởi người dùng trên các nền tảng công cộng hoặc môi trường truyền thông xã hội (ví dụ: Facebook, Twitter) sẽ được coi là thông tin công khai Seabet.io tính bảo mật của thông tin đó không thể được đảm bảo.</p>
                        <p>Chúng tôi nhấn mạnh rằng các dịch vụ của chúng tôi không hướng đến trẻ em và chúng tôi không chấp nhận tài khoản hoặc thông tin cá nhân. Tuy nhiên, cha mẹ hoặc người giám hộ có nghĩa vụ giám sát các hoạt động internet của con cái họ. Đảm bảo đăng xuất khỏi tài khoản của bạn ngay sau khi bạn sử dụng xong trang web, đặc biệt nếu bạn đang chia sẻ thiết bị của mình. Người dùng chịu trách nhiệm về bảo mật và quyền truy cập của các thiết bị được sử dụng để truy cập Trang web. Cuối cùng, người dùng duy trì tính bảo mật của tên người dùng, mật khẩu và thông tin tài khoản và cảnh giác khi sử dụng Internet và trang web của chúng tôi.</p>
                        <h3>7. Truy cập thông tin cá nhân</h3>
                        <p>Người dùng có thể truy cập thông tin cá nhân do Seabet.io thu thập bằng cách nhấp vào liên kết "Cài đặt" trên trang web hoặc bằng cách gửi email đến support{'@'}Seabet.io. Chúng tôi sẽ trả lời yêu cầu truy cập của người dùng trong một khoảng thời gian hợp lý. Nếu chúng tôi không thể tuân thủ yêu cầu của bạn, chúng tôi sẽ thông báo cho bạn bằng văn bản về lý do từ chối truy cập và cơ chế khiếu nại.</p>
                        <h3>8. Xóa dữ liệu cá nhân</h3>
                        <p>Nếu không còn có thể xử lý hoặc lưu trữ hợp pháp dữ liệu cá nhân của người dùng, người dùng có quyền yêu cầu xóa. Tuy nhiên, quyền này không phải là tuyệt đối và nếu Seabet.io phải tuân theo các nghĩa vụ pháp lý, nó sẽ không thể đáp ứng yêu cầu của người dùng. Vui lòng gửi yêu cầu bằng cách gửi email đến support{'@'}Seabet.io.</p>
                        <h3>9. Sự tiếp xúc</h3>
                        <p>Nếu bạn có bất kỳ câu hỏi, yêu cầu hoặc khiếu nại nào về việc chúng tôi xử lý thông tin cá nhân của bạn, vui lòng liên hệ với chúng tôi qua email support{'@'}Seabet.io hoặc chức năng trò chuyện hỗ trợ khách hàng của trang web.</p>



                        <h3>10. Truyền dữ liệu quốc tế</h3>
                        <p>Chúng tôi có thể chuyển, xử lý và lưu trữ thông tin trên toàn thế giới, bao gồm nhưng không giới hạn ở các quốc gia khác có luật bảo vệ dữ liệu có thể khác với luật bảo vệ dữ liệu ở vị trí của bạn. Chúng tôi sẽ bảo vệ thông tin của bạn nhiều nhất có thể và theo yêu cầu của luật hiện hành.</p>
                        <h3>11. Căn cứ pháp lý để xử lý</h3>
                        <p>Theo Quy định bảo vệ dữ liệu chung toàn cầu, Seabet.io xử lý thông tin cá nhân của bạn có các cơ sở hợp pháp sau: thực hiện hợp đồng, lợi ích hợp pháp, sự đồng ý của người dùng và tuân thủ nghĩa vụ pháp lý.</p>
                        <h3>12. Cập nhật chính sách bảo mật</h3>
                        <p>Seabet.io có thể định kỳ xem xét, thay đổi và cập nhật Chính sách bảo mật này để phản ánh thực tiễn và trách nhiệm của chúng tôi. Chúng tôi sẽ đăng tải Chính sách bảo mật mới nhất trên trang web Seabet.io. Người dùng nên định kỳ xem lại Chính sách bảo mật này để làm quen với các điều khoản của nó.</p>
                      </div>`,
    fairnessContent: `<div>
                        <h2>Công bằng</h2>
                        <p>Trước khi bạn có thể đặt cược bằng tiền tệ pháp định, bao gồm cả  tiền mã hóa, bạn phải đăng ký tài khoản trên trang web Seabet.io. Việc bạn sử dụng Seabet.io ("Trang web") và mở tài khoản với Seabet.io sẽ được coi là đã đọc, hiểu và bị ràng buộc bởi các Điều khoản và Điều kiện này.</p>

                        <p>Định nghĩa</p>
                        <p>Seabet.io - được gọi là "chúng tôi" hoặc "công ty".</p>
                        <p>Người chơi - được gọi là "bạn" hoặc "người chơi" hoặc "thành viên" hoặc "khách hàng" hoặc "chủ tài khoản".</p>
                        <p>Trò chơi - Đề cập đến sòng bạc và các trò chơi RNG (Trình tạo số ngẫu nhiên) khác, đôi khi có thể có sẵn trên Trang web.</p>
                        <p>Trang web – có nghĩa là trang web được Seabet.io Player sử dụng thông qua máy tính để bàn, thiết bị di động hoặc các nền tảng khác.</p>
                        <p>Tài khoản Thành viên - Tài khoản người dùng cần thiết để truy cập và sử dụng Trang web.</p>
                        <p>Hỗ trợ khách hàng - Các dịch vụ hỗ trợ và hỗ trợ do Công ty cung cấp cho khách hàng của mình.</p>
                        <p>Sự kiện - có nghĩa là một sự kiện thể thao hoặc cá cược hoặc một trận đấu hoặc trò chơi trong một môn thể thao mà khách hàng có thể đặt cược vào kết quả.</p>
                        <p> tiền mã hóa - nên được đọc thêm là "Bitcoin, altcoin và / hoặc (nếu có) các loại  tiền mã hóa được hỗ trợ khác."   </p>
                        <p>Tiền tệ pháp định - Một hàng hóa vật chất tiền tệ không được hỗ trợ do chính phủ hoặc cơ quan ngân hàng trung ương phát hành, chẳng hạn như vàng hoặc bạc (ví dụ: đô la Mỹ, real Brazil, yên Nhật, người).</p>
                        <p>Khu vực pháp lý bị hạn chế - Giấy phép dành riêng cho quốc gia tuân theo các hạn chế đối với trò chơi của chúng tôi, do đó, người dùng ở hoặc từ các khu vực đó bị cấm đăng ký và chơi trên Trang web. Danh sách các khu vực pháp lý bị hạn chế có thể được cập nhật theo thời gian và có thể được truy cập qua liên kết bên dưới.</p>

                        <h3>1. Tổng quát</h3>
                        <p><b>1.1</b>  Các điều khoản và điều kiện này ("Điều khoản và Điều kiện") áp dụng cho cá cược thể thao và sử dụng các trò chơi kiểu sòng bạc có thể truy cập thông qua Trang web. </p>

                        <p><b>1.2</b> Các  Điều khoản và Điều kiện này có hiệu lực ngay sau khi hoàn tất quá trình đăng ký, bao gồm đánh dấu vào ô chấp nhận các Điều khoản và Điều kiện này và thành công</p>
                        <p>Tạo một tài khoản. Bằng cách sử dụng bất kỳ phần nào của Trang web sau khi tạo tài khoản, bạn đồng ý rằng các Điều khoản và Điều kiện này áp dụng cho việc sử dụng Trang web.</p>

                        <p><b>1.3</b> Tạo tài khoản. Nếu bạn không đồng ý với bất kỳ điều khoản nào trong các Điều khoản và Điều kiện này, bạn không được tạo tài khoản hoặc tiếp tục sử dụng Trang web. </p>

                        <p><b>1.4</b> Chúng tôi có quyền sửa đổi các Điều khoản và Điều kiện này bất cứ lúc nào mà không cần thông báo. Nếu chúng tôi thực hiện những thay đổi như vậy, chúng tôi có thể thực hiện các bước thích hợp để nhắc nhở bạn về những thay đổi đó, chẳng hạn như bằng cách đăng thông báo qua email hoặc trên Trang web và Điều khoản và Điều kiện sửa đổi, nhưng bạn hoàn toàn chịu trách nhiệm kiểm tra mọi sửa đổi, cập nhật và / hoặc sửa đổi. Nếu chúng tôi xác định rằng bất kỳ thay đổi nào đối với các Điều khoản này được coi là có tác động "quan trọng" đến quyền hoặc nghĩa vụ của bạn theo các Điều khoản và Điều kiện này, chúng tôi sẽ sử dụng các nỗ lực hợp lý để thông báo cho bạn qua email hoặc bằng cách đăng trên Trang web. Việc bạn tiếp tục sử dụng Dịch vụ và Trang web của Công ty sau bất kỳ sửa đổi nào đối với Điều khoản và Điều kiện sẽ được coi là bạn chấp nhận và đồng ý bị ràng buộc bởi các sửa đổi, cập nhật và / hoặc sửa đổi đó. </p>

                        <p><b>1.5</b> Các Điều khoản và Điều kiện này có thể được xuất bản bằng nhiều ngôn ngữ cho mục đích thông tin và thuận tiện cho việc truy cập của người chơi. Trong trường hợp có bất kỳ sự khác biệt nào giữa mối quan hệ của bạn và chúng tôi và bản dịch, phiên bản tiếng Anh của các Điều khoản và Điều kiện này sẽ được ưu tiên áp dụng cho bất kỳ hình thức nào. </p>

                        <h3>2. Tuyên bố ràng buộc</h3>
                        <p><b>2.1</b>  Bằng cách đồng ý bị ràng buộc bởi các Điều khoản và Điều kiện này, bạn cũng đồng ý bị ràng buộc bởi Quy tắc Trang web và Chính sách Bảo mật, được kết hợp bằng cách tham chiếu, cùng với các Điều kiện. Trong trường hợp có bất kỳ mâu thuẫn nào, các Điều khoản và Điều kiện này sẽ được ưu tiên áp dụng. Bạn tuyên bố và đảm bảo rằng:</p>

                        <p><b>2.1.1</b> Bạn từ 18 tuổi trở lên; </p>

                        <p><b>2.1.2</b> Bạn hoàn toàn có khả năng tham gia vào các thỏa thuận ràng buộc về mặt pháp lý với chúng tôi và bạn không phải chịu bất kỳ hình thức hạn chế năng lực pháp lý nào; </p>

                        <p><b>2.1.3</b> Bạn tham gia Trò chơi với tư cách cá nhân và không chuyên nghiệp; và chỉ tham gia cho mục đích giải trí và giải trí; </p>

                        <p><b>2.1.4</b> Bạn đại diện cho chính mình chứ không phải thay mặt cho bất kỳ người nào khác; </p>

                        <p><b>2.1.5</b>  Tất cả thông tin do bạn cung cấp cho chúng tôi trong thời hạn của Thỏa thuận này là đúng, đầy đủ và chính xác, và bạn phải thông báo ngay cho chúng tôi về bất kỳ thay đổi nào đối với thông tin đó; </p>

                        <p><b>2.1.6</b> Bạn hoàn toàn chịu trách nhiệm báo cáo và kế toán cho bất kỳ khoản thuế, phí, lệ phí hoặc thuế nào áp dụng cho bạn theo bất kỳ luật địa phương hoặc có liên quan nào tại nơi bạn cư trú đối với bất kỳ khoản tiền thắng cược nào bạn nhận được từ chúng tôi; </p>

                        <p><b>2.1.7</b> Bạn hiểu rằng bằng cách sử dụng Dịch vụ của chúng tôi, bạn sẽ chịu rủi ro mất tiền gửi vào Tài khoản Thành viên của mình và chấp nhận rằng bạn hoàn toàn chịu trách nhiệm về bất kỳ tổn thất nào như vậy; </p>

                        <p><b>2.1.8</b> Bạn sẽ không sử dụng Dịch vụ của chúng tôi ở bất kỳ khu vực pháp lý nào nằm trong danh sách của chúng tôi nơi Dịch vụ của chúng tôi bị hạn chế. </p>

                        <p><b>2.1.9</b> Quyền tài phán của bạn cho phép bạn sử dụng các dịch vụ cá cược thể thao và sòng bạc trực tuyến; </p>

                        <p><b>2.1.10</b> Liên quan đến việc gửi và rút tiền vào Tài khoản Thành viên của bạn, bạn chỉ có thể sử dụng  tiền mã hóa và / hoặc bất kỳ loại tiền tệ pháp định hợp lệ và hợp pháp nào thuộc về bạn; </p>

                        <p><b>2.1.11</b> Bạn chấp nhận và thừa nhận rằng giá trị của Tiền Kỹ Thuật Số có thể thay đổi đáng kể tùy thuộc vào giá trị thị trường. </p>

                        <p><b>2.1.12</b>  Phần mềm máy tính, đồ họa máy tính, trang web và giao diện người dùng mà chúng tôi cung cấp cho bạn được sở hữu và bảo vệ bởi Công ty hoặc các chi nhánh của Công ty theo luật bản quyền. Bạn chỉ có thể sử dụng Phần mềm cho mục đích giải trí cá nhân của riêng bạn: phù hợp với tất cả các quy tắc, điều khoản và điều kiện do chúng tôi thiết lập và phù hợp với tất cả các luật, quy tắc và quy định hiện hành theo Giấy phép trò chơi Curaçao; </p>

                        <p><b>2.1.13</b> Bạn hiểu rằng  tiền mã hóa không được coi là tiền tệ hoặc tiền tệ hợp pháp và do đó Trang web chúng được coi là tiền ảo không có giá trị nội tại. </p>

                        <p><b>2.1.14</b> Bạn xác nhận rằng bạn không phải là cán bộ, giám đốc, nhân viên, nhà tư vấn hoặc đại lý của Công Ty hoặc làm việc cho bất kỳ công ty nào liên quan đến Công Ty hoặc cho người thân hoặc vợ / chồng của bất kỳ điều nào đã nói ở trên; </p>

                        <p><b>2.1.15</b> Bạn chưa được chẩn đoán hoặc phân loại là người nghiện cờ bạc hoặc có vấn đề. Chúng tôi không chịu trách nhiệm về cờ bạc nếu các vấn đề như vậy phát sinh trong khi sử dụng dịch vụ của chúng tôi, nhưng sẽ cố gắng thông báo cho bạn về sự hỗ trợ có liên quan có sẵn. Chúng tôi có quyền thực hiện thời gian tạm dừng nếu chúng tôi tin rằng những hành động đó sẽ có lợi. </p>

                        <p><b>2.1.16</b> Nếu bạn là Người Tiếp xúc Chính trị hoặc thành viên của gia đình của Người Tiếp xúc Chính trị, bạn chấp nhận và thừa nhận rằng chúng tôi có thể cần xem xét hoặc tạm ngưng tài khoản của bạn mà không cần thông báo trước để chúng tôi thực hiện bất kỳ nghĩa vụ thẩm định nào mà chúng tôi có thể tham gia. Bạn thừa nhận rằng bất kỳ quyết định nào liên quan đến trạng thái tài khoản của bạn chỉ được đưa ra theo quyết định riêng của chúng tôi, có thể bao gồm đóng vĩnh viễn tài khoản của bạn; </p>

                        <p><b>2.1.17</b> Bạn chỉ có một tài khoản với chúng tôi và đồng ý không mở bất kỳ tài khoản nào với chúng tôi; </p>

                        <p><b>2.1.18</b> Bạn chấp nhận và thừa nhận rằng chúng tôi có quyền phát hiện và ngăn chặn việc sử dụng các công nghệ bị cấm, bao gồm nhưng không giới hạn ở việc phát hiện gian lận, dễ dàng phát hiện, đăng ký và đăng ký tự động, chơi trò chơi và công nghệ chụp màn hình. Các bước này có thể bao gồm, nhưng không giới hạn, kiểm tra khả năng thiết bị của người chơi, phát hiện vị trí địa lý và che giấu IP, giao dịch và phân tích blockchain; </p>

                        <p><b>2.1.19</b> bạn chấp nhận rằng chúng tôi chấm dứt và / hoặc thay đổi việc sử dụng Trang web và từ chối và / hoặc hạn chế đặt cược; </p>

                        <h3>3. Đăng ký và mở tài khoản thành viên của bạn</h3>
                        <p><b>3.1</b> Để có thể đặt cược trên trang web của chúng tôi, trước tiên bạn phải đăng ký tài khoản trực tiếp với chúng tôi ("Tài khoản Thành viên"). </p>

                        <p><b>3.2</b> Bạn không thể đăng ký và chúng tôi không chấp nhận từ thẩm quyền hạn chế. Bạn có trách nhiệm xác định xem việc bạn truy cập và sử dụng trang web của chúng tôi có tuân thủ bất kỳ quy tắc, luật và quy định nào áp dụng cho bạn hay không và bạn đảm bảo rằng cờ bạc không phải là bất hợp pháp với chúng tôi trong lãnh thổ nơi bạn sinh sống. Bằng cách đăng ký tài khoản, chúng tôi và sử dụng Trang web, bạn xác nhận rằng bạn không ở trong hoặc từ khu vực tài phán bị hạn chế và không sử dụng bất kỳ phần mềm của bên thứ ba nào để truy cập trang web của chúng tôi từ khu vực tài phán bị hạn chế. </p>

                        <p><b>3.3</b> Nếu bạn đang ở trong hoặc từ một khu vực tài phán bị hạn chế và bạn mở hoặc sử dụng Trang web: chúng tôi có thể đóng tài khoản của bạn ngay lập tức;   bất kỳ khoản tiền thắng cược và phần thưởng nào sẽ bị mất và số dư được hoàn trả (tùy thuộc vào một khoản phí hợp lý), cũng như bất kỳ khoản lợi nhuận, tiền thưởng nào bạn đã kiếm được hoặc tích lũy phần thưởng sẽ bị bạn tịch thu và chúng tôi có thể rút lại; Bạn sẽ trả lại cho chúng tôi bất kỳ khoản tiền nào như vậy đã rút theo yêu cầu. </p>

                        <p><b>3.4</b> Nếu bạn cố gắng mở nhiều hơn một Tài khoản Thành viên, chúng tôi có quyền chặn, đình chỉ hoặc đóng Tài khoản Thành viên của bạn, cũng như đóng băng bất kỳ khoản tiền nào được ghi có vào Tài khoản của bạn. </p>

                        <p><b>3.5</b> Nếu bạn biết rằng bạn có nhiều hơn một Tài khoản Thành viên đã Đăng ký, bạn phải thông báo cho chúng tôi ngay lập tức. Nếu không làm như vậy có thể dẫn đến tài khoản thành viên của bạn bị đóng băng. </p>

                        <p><b>3.6</b> Chúng tôi hy vọng bạn thông báo cho chúng tôi ngay lập tức về bất kỳ sự không chính xác nào liên quan đến tài khoản của bạn hoặc bất kỳ lỗi tính toán nào liên quan đến bất kỳ cược nào do bạn đặt. Chúng tôi có quyền vô hiệu hóa bất kỳ cược nào bị ảnh hưởng bởi các lỗi đó và đảo ngược tương ứng. </p>

                        <p><b>3.7</b> Nếu bạn không sử dụng tài khoản có số dư dương trong thời gian 3 tháng, bạn sẽ được chúng tôi thông báo. Nếu bạn không sử dụng số dư của mình trong vòng 1 tháng kể từ khi chúng tôi thông báo, chúng tôi có thể xóa số dư khỏi tài khoản của bạn để bảo vệ tiền của bạn. Nếu điều này xảy ra, vui lòng liên hệ với chúng tôi tại support{'@'}seabet.io Mở lại tài khoản và lấy lại tiền. </p>

                        <p><b>3.8</b>  Nếu số dư tài khoản của bạn dương và không hoạt động trong hơn 12 tháng, chúng tôi có quyền khấu trừ phí quản lý hàng tháng tương đương 5% từ số dư của bạn</p>

                        <p><b>3.9</b> Bạn phải nhập tất cả các thông tin bắt buộc vào mẫu đăng ký, bao gồm địa chỉ email hợp lệ. Nếu bạn không nhập địa chỉ email hợp lệ, chúng tôi sẽ không thể cung cấp cho bạn hỗ trợ khôi phục bất kỳ  "mật khẩu bị quên" nào. Bạn hoàn toàn chịu trách nhiệm đảm bảo rằng thông tin bạn cung cấp là đúng, đầy đủ và chính xác. </p>

                        <p><b>3.10</b> Chúng tôi có quyền thực hiện các thủ tục xác minh "KYC" (Biết khách hàng của bạn) và nếu chúng tôi xác định rằng bạn đã cung cấp thông tin sai lệch hoặc gây hiểu lầm. </p>

                        <p><b>3.11</b> Là một phần của quá trình đăng ký, bạn có nghĩa vụ hoàn tất quá trình đăng nhập vào Trang web. Bạn sẽ cần chọn một tên người dùng không gây khó chịu hoặc gây tranh cãi. Bạn chịu trách nhiệm bảo mật chi tiết đăng nhập của mình và bị nghiêm cấm tiết lộ chúng cho bất kỳ ai. Bạn sẽ chịu trách nhiệm cho bất kỳ việc lạm dụng Tài khoản Thành viên của bạn bởi bên thứ ba do tiết lộ của bạn, cho dù cố ý, vô tình hoặc chủ động hoặc thụ động cung cấp cho bất kỳ bên thứ ba nào. </p>

                        <p><b>3.12</b> Nếu bạn thay đổi mật khẩu, bạn sẽ không thể rút tiền trong 48 giờ vì lý do bảo mật. </p>

                        <h3>4. Bảo mật</h3>
                        <p><b>4.1</b> Khi đăng ký thông qua Trang web, bạn sẽ được yêu cầu chọn mật khẩu để xác thực tài khoản thành viên của mình bằng Trang web. </p>

                        <p><b>4.2</b> Bạn đồng ý giữ bí mật mật khẩu của mình và bảo vệ chống lại bất kỳ hành vi lạm dụng mật khẩu nào của bạn. Trong mọi trường hợp, chúng tôi sẽ không hoàn trả bất kỳ tổn thất nào phải chịu do việc sử dụng tài khoản của bạn của bên thứ ba và ngoài ra, bạn hoàn toàn chịu trách nhiệm về việc sử dụng chi tiết đăng nhập của bất kỳ bên thứ ba nào và sẽ giữ cho chúng tôi vô hại trước những hậu quả phát sinh và đáng lên án. </p>

                        <p><b>4.3</b> Bạn đồng ý rằng nếu bạn tin rằng thông tin tài khoản của bạn đang bị bên thứ ba lạm dụng, để chúng tôi có thể tạm ngưng tài khoản của bạn. Chúng tôi khuyên bạn nên tắt bất kỳ bộ nhớ mật khẩu tự động nào trong trình duyệt của mình, sử dụng xác minh hai bước và các biện pháp khác để hạn chế rủi ro sử dụng trái phép tài khoản của bạn. </p>

                        <h3>5. Tiền gửi</h3>
                        <p><b>5.1</b> Bạn chỉ có thể tham gia vào bất kỳ trò chơi nào nếu bạn có đủ tiền trong Tài khoản Thành viên của mình để tham gia như vậy. </p>

                        <p><b>5.2</b> Bạn có thể gửi tiền bằng  tiền mã hóa hoặc tiền pháp định. Số tiền gửi tối thiểu có thể được tìm thấy trong trung tâm gửi tiền của chúng tôi. Tất cả số tiền ký quỹ tối thiểu được chỉ định là cho mỗi giao dịch. Các khoản tiền gửi nhỏ hơn sẽ không được cộng lại. Bất kỳ số tiền gửi nào dưới số tiền gửi tối thiểu được chỉ định đều không hợp lệ và sẽ không được ghi có vào số dư tài khoản người dùng của bạn hoặc được trả lại nguồn. Nếu khoản tiền gửi không đáp ứng khoản tiền gửi tối thiểu được chúng tôi liệt kê, công ty không chịu trách nhiệm về các yêu cầu. </p>

                        <p><b>5.3</b> Để gửi tiền vào Tài khoản Thành viên của bạn, bạn có thể làm như vậy từ ví  tiền mã hóa và tài khoản dưới sự kiểm soát của bạn. Tiền gửi chỉ có thể được thực hiện bằng tiền của riêng bạn. </p>

                        <p><b>5.4</b> Trang web không thể đảm bảo rằng tất cả các loại tiền tệ đều được hỗ trợ nguyên bản trong Trò chơi. </p>

                        <p><b>5.5</b> Tại thời điểm gửi tiền đầu tiên của bạn và trong suốt vòng đời tài khoản của bạn, chúng tôi có quyền sử dụng các thủ tục và phương pháp khác để xác minh danh tính của bạn khi xử lý khoản tiền gửi của bạn. Việc xác minh sẽ liên quan đến nhận dạng cá nhân. Chúng tôi cũng có thể cần thêm tài liệu xác nhận quyền sở hữu phương thức và địa chỉ thanh toán của bạn như một phần của quy trình xác minh. </p>

                        <p><b>5.6</b> Một số phương thức thanh toán có thể bao gồm phí bổ sung. Trong trường hợp này, phí sẽ rõ ràng và hiển thị trong nhân viên thu ngân. </p>

                        <p><b>5.7</b> Ngân hàng hoặc nhà cung cấp dịch vụ thanh toán của bạn có thể tính thêm phí tiền tệ cho bạn trong quá trình gửi tiền theo các điều khoản và điều kiện của họ và thỏa thuận chuyển đổi người dùng của bạn. </p>

                        <h3>6. Rút tiền</h3>
                        <p><b>6.1</b> Tất cả các khoản rút tiền sẽ được xử lý theo chính sách rút tiền của chúng tôi bên dưới. Rút tiền mã hóa sẽ được yêu cầu khi địa chỉ ví  tiền mã hóa bạn đã nhập hợp lệ. Để rút tiền, trước tiên bạn cần xác minh địa chỉ email đã đăng ký từ hồ sơ tài khoản của mình. Để rút bất kỳ khoản tiền gửi nào, chúng tôi cần thực hiện ít nhất 3 xác nhận blockchain về khoản tiền gửi ở đó trước khi yêu cầu rút tiền. Rút tiền pháp định phải được ghi có vào yêu cầu tài khoản fiat cá nhân của bạn tại thời điểm rút tiền hợp lệ. Việc rút tiền pháp định có thể mất tối đa 3 ngày làm việc kể từ khi được nhà cung cấp dịch vụ thanh toán chấp thuận. </p>

                        <p><b>6.2</b>  Số tiền rút tối thiểu có thể được tìm thấy trong Trung tâm rút tiền của chúng tôi. Tất cả số tiền được chỉ định là cho mỗi giao dịch. </p>

                        <p><b>6.3</b> Số tiền thắng cược bất kỳ khoản tiền thắng cược nào được ghi có không chính xác vào Tài khoản của bạn vẫn là tài sản và được tự động khấu trừ từ Tài khoản của bạn trong trường hợp phát hiện lỗi. Nếu mục nhập không chính xác, bạn có nghĩa vụ thông báo cho chúng tôi ngay lập tức. Bất kỳ khoản tiền thưởng nào được ghi có sai vào tài khoản của bạn và sau đó bạn rút lại (không ảnh hưởng đến các biện pháp khắc phục và hành động khác có thể có sẵn hợp pháp) tạo thành một khoản nợ có hiệu lực pháp lý hợp lệ mà bạn nợ Công ty với số tiền thắng cược sai lầm đó. Trong những trường hợp như vậy, chúng tôi có quyền bắt đầu thủ tục thu hồi nợ nếu bạn không tự nguyện thanh toán các khoản nợ chưa thanh toán. </p>

                        <p><b>6.4</b> Đối với rút tiền pháp định và  tiền mã hóa, Trang web có quyền yêu cầu đặt cược gấp 1 lần bằng số tiền đã gửi trước khi chấp nhận yêu cầu rút tiền. </p>

                        <p><b>6.5</b>  Chúng tôi có quyền chặn / trì hoãn việc xử lý các yêu cầu rút tiền cho đến khi có yêu cầu bản sao giấy tờ tùy thân có ảnh hợp lệ, bằng chứng địa chỉ và / hoặc thẻ ghi nợ để chúng tôi hài lòng (KYC). </p>

                        <p><b>6.6</b> Trang web có quyền thực hiện các quy trình xác minh KYC bổ sung trên bất kỳ Nội dung nào để rút  tiền mã hóa vượt quá € 2500 hoặc tương đương, theo giấy phép trò chơi được quy định của chúng tôi và tiếp tục có quyền thực hiện các thủ tục xác minh đó trong trường hợp rút tiền ít hơn, theo yêu cầu của giấy phép trò chơi của chúng tôi. Chủ tài khoản muốn khôi phục nên liên hệ với bộ phận Hỗ trợ khách hàng để biết tiền được giữ trong các tài khoản đóng, bị khóa hoặc bị loại trừ. </p>

                        <p><b>6.7</b> Tất cả các giao dịch sẽ được kiểm tra để ngăn chặn rửa tiền. Trang web có thể đình chỉ, đóng băng hoặc đóng tài khoản thành viên của bạn và giữ lại tiền (nếu được yêu cầu làm như vậy) theo Đạo luật Phòng chống rửa tiền hoặc bất kỳ cơ sở pháp lý nào khác theo yêu cầu của Đạo luật Phòng chống Rửa tiền hoặc bất kỳ cơ sở pháp lý nào khác theo yêu cầu của Đạo luật Phòng chống Rửa tiền. Việc rút tiền có thể phải được tăng cường thẩm định thay vì đặt cược,  Và nếu bạn không xử lý rút tiền, chúng tôi có quyền không xử lý rút tiền để tuân thủ các yêu cầu thẩm định bổ sung đó. </p>

                        <p><b>6.8</b> Chúng tôi có quyền áp dụng số tiền yêu cầu đặt cược ít nhất 5 (năm) lần số tiền gửi nếu chúng tôi nghi ngờ rằng Người dùng đang sử dụng Dịch vụ của chúng tôi làm máy trộn. Việc sử dụng Dịch vụ của chúng tôi cho bất kỳ mục đích nào khác ngoài mục đích giải trí đều bị nghiêm cấm. </p>

                        <p><b>6.9</b> Bạn thừa nhận rằng tiền trong Tài khoản của bạn ngay lập tức cạn kiệt khi chơi Trò chơi và chúng tôi không cung cấp trả lại, hoàn tiền hoặc hủy hồi tố Tài khoản của bạn. </p>

                        <p><b>6.10</b> Trong trường hợp có số lượng yêu cầu rút tiền lớn, chúng tôi có thể chọn xử lý tối đa <b>1.000.000</b> USDT mỗi tuần hoặc tương đương bằng đơn vị tiền tệ khác cho đến khi được thanh toán đầy đủ. </p>

                        <p><b>6.11</b> Chúng tôi có quyền khấu trừ bất kỳ giao dịch phát sinh hoặc các khoản phí khác từ bất kỳ khoản phí giao dịch hoặc các khoản phí khác đối với số tiền bạn rút.</p>

                        <p><b>6.12</b> Bạn chấp nhận rằng một số chương trình khuyến mãi nhất định có thể phải tuân theo các hạn chế và / hoặc yêu cầu rút tiền cần được đáp ứng trước khi tiền có thể được ghi có vào chương trình khuyến mãi. Các điều khoản này sẽ được đăng chính thức và cung cấp như một phần của Chương trình khuyến mãi. Nếu bạn chọn rút tiền trước khi các yêu cầu đặt cược hiện hành được đáp ứng, chúng tôi sẽ khấu trừ toàn bộ số tiền thưởng và số tiền liên quan đến việc sử dụng tiền thưởng trước khi bất kỳ khoản rút tiền nào được chấp thuận. Trang web này có quyền áp đặt các quyền, quyết định, hạn chế địa lý của riêng mình đối với các chương trình phần thưởng cá nhân. </p>

                        <p><b>6.13</b> Xin lưu ý rằng một số phương thức thanh toán có thể bao gồm phí bổ sung. Trong trường hợp này, phí sẽ được hiển thị rõ ràng trên nhân viên thu ngân. </p>

                        <p><b>6.14</b> Xin lưu ý rằng ngân hàng hoặc nhà cung cấp dịch vụ thanh toán của bạn có thể tính thêm phí cho bạn đối với việc nạp, rút tiền trong chuyển đổi tiền tệ theo các điều khoản và điều kiện của họ và Thỏa thuận người dùng của bạn. </p>

                        <h3>7. Quỹ</h3>
                        <p><b>7.1</b> Khách hàng không thể chuyển hoặc chuyển đổi tiền giữa Ví và Tiền tệ. </p>

                        <p><b>7.2</b> Bạn đã cung cấp các chi tiết cần thiết để nạp  tiền mã hóa trên Trang web trên trang Gửi tiền. </p>

                        <p><b>7.3</b> Chúng tôi không cung cấp tín dụng cho việc sử dụng Dịch vụ của chúng tôi. </p>

                        <p><b>7.4</b> Bạn sẽ không nhận được bất kỳ khoản lãi nào trên số dư bạn nắm giữ trên Trang web và thừa nhận rằng Công ty không phải là một tổ chức tài chính. </p>

                        <p><b>7.5</b> Nếu Tài khoản của bạn được xử lý hai lần trở lên vì bất kỳ lý do gì do bất kỳ loại lỗi hoặc yêu cầu rút tiền nào, bạn đồng ý hoàn trả đầy đủ cho Trang web cho bất kỳ số tiền thấu chi nào như vậy. </p>

                        <p><b>7.6</b> Nếu chúng tôi xác định, theo quyết định riêng của chúng tôi, rằng bạn đang sử dụng phương pháp "chi tiêu gấp đôi", Trang web sẽ vô hiệu hóa tất cả các cược và tiền thưởng. Cụ thể, nếu bạn thắng, hãy xác nhận blockchain tiền gửi của bạn và cố gắng rút tiền, tất cả tiền thắng cược sẽ bị mất và tài khoản của bạn sẽ bị mất và đóng vĩnh viễn. Nếu bạn cố gắng tải xuống từ bất kỳ tài khoản được kết nối nào. </p>


                        <h3>8. Phần thưởng và khuyến mãi</h3>
                        <p><b>8.1</b> Trang web có quyền hủy bỏ bất kỳ chương  trình khuyến mãi, phần thưởng hoặc phần thưởng nào (bao gồm nhưng không giới hạn ở phần thưởng tiền tệ miễn phí, phần thưởng tiền gửi, tiền thưởng tiền gửi và chương trình khách hàng thân thiết) nếu chúng tôi tin rằng phần thưởng được đặt không chính xác hoặc đang bị lạm dụng, không được sử dụng trong vòng 72 giờ kể từ khi nhận được tài khoản của bạn, trừ khi có quy định khác trong các điều khoản và điều kiện riêng của chương trình khuyến mãi,  Phần thưởng hoặc ưu đãi đặc biệt và phần thưởng nói trên đã được thanh toán, chúng tôi có quyền từ chối bất kỳ yêu cầu rút tiền nào và khấu trừ số tiền đó từ tài khoản của bạn. Việc phần thưởng được đặt không chính xác hay lạm dụng sẽ được xác định bởi Trang web theo quyết định riêng của mình. </p>

                        <p><b>8.2</b> Nếu bạn sử dụng Tiền thưởng Tiền gửi, bạn sẽ không chấp nhận tiền thưởng đã rút tiền gửi ban đầu trước đó của bạn và bạn đã đáp ứng các yêu cầu được nêu trong Điều khoản và Điều kiện Gửi tiền. </p>

                        <p><b>8.3</b> Vi phạm bất kỳ điều khoản  nào của ưu đãi hoặc khuyến mãi, hoặc khi có bất kỳ bằng chứng nào cho thấy có một loạt các cược được đặt bởi khách hàng hoặc nhóm khách hàng, do tiền thưởng tiền gửi, thanh toán nâng cao, cược miễn phí, cược không rủi ro hoặc bất kỳ đảm bảo kết quả ưu đãi khuyến mại nào khác bất kể kết quả, cho dù là cá nhân hay là một phần của nhóm,  Trang web Lợi nhuận của Khách hàng có quyền lấy lại các yếu tố tiền thưởng của các ưu đãi đó và bảo lưu giá trị tuyệt đối theo quyết định tuyệt đối của họ để giải quyết cược với tỷ lệ cược chính xác, Hủy Tiền thưởng Đặt cược Miễn phí và Đặt cược Không rủi ro hoặc hủy bất kỳ cược nào được tài trợ bởi Tiền thưởng Tiền gửi. Ngoài ra, trang web này có quyền thu phí quản lý đối với khách hàng, tối đa bằng giá trị của tiền thưởng tiền gửi, tiền thưởng đặt cược miễn phí, đặt cược không rủi ro hoặc thanh toán bổ sung để trang trải phí quản lý. Chúng tôi tiếp tục bảo lưu quyền yêu cầu bất kỳ khách hàng nào cung cấp đầy đủ tài liệu để chúng tôi hài lòng tuyệt đối với bất kỳ phần thưởng, đặt cược miễn phí, đặt cược không rủi ro hoặc tài khoản nào được cung cấp cho họ. </p>

                        <p><b>8.4</b> Tất cả các ưu đãi của Trang web đều dành cho người chơi thông thường và Trang web có thể, theo quyết định riêng của mình, giới hạn tính đủ điều kiện của Khách hàng để tham gia vào tất cả hoặc một phần của Chương trình khuyến mãi. </p>

                        <p><b>8.5</b> Trang web có quyền, theo quyết định riêng của mình, sửa đổi, hủy bỏ, thu hồi hoặc từ chối bất kỳ Chương trình khuyến mãi nào. </p>

                        <p><b>8.6</b> Phần thưởng chỉ có thể được nhận một lần cho mỗi người / tài khoản, hộ gia đình, hộ gia đình, địa chỉ, địa chỉ email, địa chỉ IP và môi trường chia sẻ máy tính (trường đại học, trường học, thư viện nơi công cộng, nơi làm việc, v.v.). Công ty có quyền đóng tài khoản của bạn và tịch thu bất kỳ khoản tiền hiện có nào nếu tìm thấy bằng chứng lạm dụng / gian lận. </p>

                        <p><b>8.7</b>  Bạn thừa nhận và hiểu rằng các điều khoản và điều kiện riêng biệt cho các chương trình khuyến mãi, phần thưởng và ưu đãi đặc biệt, và bổ sung cho các điều khoản và điều kiện này, tồn tại cho các lĩnh vực sau. Các điều khoản và điều kiện này được quy định trên trang nội dung tương ứng của Trang web hoặc, tùy từng trường hợp, được cung cấp cho cá nhân bạn. Trong trường hợp có xung đột giữa các điều khoản của chương trình khuyến mãi, phần thưởng và ưu đãi đặc biệt đó và các điều khoản và điều kiện của các Điều khoản này, các quy định của chương trình khuyến mãi, phần thưởng và ưu đãi đặc biệt đó sẽ kiểm soát. </p>

                        <p><b>8.8</b>  Chúng tôi có quyền yêu cầu bạn đặt cược một số tiền nhất định vào khoản tiền gửi của riêng bạn bằng cách sử dụng bất kỳ khoản tiền thưởng nào chúng tôi đã ghi có vào tài khoản của bạn. Số tiền chính xác theo yêu cầu như được nêu trong các điều khoản và điều kiện của chương trình khuyến mãi. </p>

                        <p><b>8.9</b>  Việc bạn tham gia vào một số chương trình khuyến mãi nhất định có thể bị hạn chế rút tiền và / hoặc một số yêu cầu nhất định có thể được yêu cầu trước khi tiền có thể được ghi có vào chương trình khuyến mãi. Các Điều khoản này sẽ được đăng chính thức như một phần của Chương trình khuyến mãi và để bạn tham khảo. Nếu bạn chọn rút tiền nếu các yêu cầu đặt cược hiện hành không được đáp ứng, chúng tôi sẽ khấu trừ toàn bộ số tiền thưởng từ tài khoản của bạn và tất cả tiền thắng cược liên quan phát sinh từ việc sử dụng tiền thưởng trước khi chúng tôi có thể chấp thuận bất kỳ yêu cầu rút tiền nào</p>
                        <p><b>8.10</b> Tiền thắng cược bằng Cược miễn phí được tính là "Tổng lợi nhuận ít hơn số tiền đặt cược (bao gồm cả số tiền đặt cược miễn phí". Do đó, giá trị cược miễn phí của bạn không được bao gồm, cũng như không thể được sử dụng làm cược miễn phí từ bạn. </p>

                        <p><b>8.11</b> Xin lưu ý rằng tiền cược của Đặt cược miễn phí sẽ không được hoàn trả nếu cược bị hủy. </p>

                        <p><b>8.12</b> Bạn phải nhận Thưởng trên Tài khoản Thành viên của mình trừ khi có quy định khác trong chương trình khuyến mãi, phần thưởng hoặc ưu đãi đặc biệt. Khi phần thưởng và / hoặc chương trình phần thưởng không được sử dụng trong vòng 72 giờ kể từ khi nhận, trang web này có quyền hủy bỏ bất kỳ phần thưởng và / hoặc chương trình phần thưởng nào như vậy và có thể khấu trừ phần thưởng hoặc phần thưởng tương tự cho tiền thưởng hoặc phần thưởng tương tự hoặc luân phiên miễn phí ngay sau 72 giờ. </p>

                        <p><b>8.13</b> Khi trao đổi ý kiến, ý kiến, phản hồi hoặc hành động của khách hàng khi cung cấp phần thưởng (bao gồm nhưng không giới hạn ở cược miễn phí hoặc vòng quay miễn phí), các ưu đãi đó sẽ bị giới hạn nghiêm ngặt trong một cuộc khảo sát / khuyến mãi cho mỗi người dùng trong khoảng thời gian có liên quan. </p>

                        <p><b>8.14</b> Chương trình khuyến mãi có thể được xuất bản bằng nhiều ngôn ngữ để truy cập thông tin và người chơi. Phiên bản tiếng Anh là cơ sở pháp lý duy nhất cho mối quan hệ của bạn với chúng tôi và trong trường hợp có bất kỳ sự khác biệt nào trong bất kỳ loại bản dịch nào, ngôn ngữ tiếng Anh sẽ được ưu tiên áp dụng so với phiên bản của các Điều khoản và Điều kiện này. </p>

                        <p><b>8.15</b> Một số trò chơi có thể có số tiền thắng tối đa khác nhau. Nếu vậy, những hạn chế như vậy sẽ được hiển thị trong trang thông tin trong trò chơi. </p>

                        <p><b>8.16</b> Một số trò chơi sòng bạc nhất định không bao gồm cá cược trung thành và phần thưởng. </p>

                        <p><b>8.17</b> Đối với Tiền thưởng đặt cược, người chơi phải giao lại tiền thưởng và số tiền thắng được chỉ định trước khi có thể rút tiền. Đặt cược</p>
                        <p>Sự đóng góp của Tín dụng Phần thưởng phụ thuộc vào danh mục trò chơi. Bảng phân tích như sau: Slots - 100% Trò chơi trên bàn - 20% Trò chơi người chia bài trực tiếp - 20%</p>

                        <p><b>8.18</b> Một số chương trình khuyến mãi nhất định có thể bị hủy bỏ và/hoặc hủy bỏ và chỉ có thể có sẵn trong một khoảng thời gian cụ thể và theo các điều khoản nhất định. Bạn phải đảm bảo rằng việc quảng bá nội dung mà bạn quan tâm vẫn có sẵn, rằng bạn đủ điều kiện, rằng bạn hiểu bất kỳ điều khoản nào dưới đây để áp dụng và bạn đã chọn tham gia nếu có. </p>

                        <h3>9. Đóng tài khoản thành viên</h3>
                        <p><b>9.1</b> Nếu bạn muốn đóng Tài khoản Thành viên của mình, bạn có thể liên hệ với bộ phận Hỗ trợ Khách hàng bằng văn bản bất cứ lúc nào qua email. Việc đóng tài khoản có hiệu lực sẽ chấm dứt các Điều khoản và Điều kiện tương ứng. Nếu lý do đằng sau việc đóng tài khoản có liên quan đến những lo ngại về chứng nghiện cờ bạc có thể xảy ra hoặc vấn đề cờ bạc, bạn nên cho biết rằng điều này đã được thực hiện bằng văn bản tại thời điểm yêu cầu đóng tài khoản. Nếu nó không chịu trách nhiệm về việc tiết lộ các vấn đề cờ bạc và / hoặc đưa ra lý do đóng tài khoản, bạn có thể yêu cầu kích hoạt lại tài khoản của mình qua email. Việc kích hoạt lại tài khoản là theo quyết định riêng của chúng tôi. Chúng tôi có quyền từ chối phục sinh. </p>

                        <p><b>9.2</b> Trang web có quyền từ chối hoặc đóng tài khoản của Thành viên theo quyết định riêng của mình mà không cần thông báo trước hoặc có nghĩa vụ phải nêu hoặc chứng minh lý do. Trong trường hợp không có nghi ngờ gian lận, rửa tiền hoặc hành vi bất hợp pháp, chúng tôi sẽ chuyển số dư tài khoản của bạn sang ví  tiền mã hóa bạn chọn (dựa trên số dư tài khoản của bạn) trước khi tài khoản của bạn bị đóng. Số dư tài khoản tiền tệ pháp định của bạn sẽ được gửi vào thủ công của bạn. Nếu bạn sử dụng phương thức chỉ nạp tiền, chúng tôi sẽ liên hệ với bạn và tìm các phương thức trả lại tiền khác trước khi tài khoản bị đóng. </p>



                        <h3>10. Dịch vụ hỗ trợ</h3>
                        <p><b>10.1</b> Là một phần của việc bạn sử dụng Trang web, chúng tôi có thể cung cấp cho bạn các kênh liên lạc dịch vụ hỗ trợ theo một số cách do chúng tôi xem xét và kiểm soát. </p>

                        <p><b>10.2</b> Chúng tôi lưu giữ các đánh giá và hồ sơ thông qua bất kỳ kênh truyền thông nào. Việc bạn sử dụng các dịch vụ hỗ trợ của chúng tôi chỉ để được hỗ trợ và chỉ cung cấp thông tin cho bạn. </p>

                        <p><b>10.3</b> Chúng tôi có quyền xóa hoặc hạn chế Dịch vụ Hỗ trợ Trực tuyến hoặc chấm dứt ngay Tài khoản Thành viên của bạn và hoàn trả số dư Tài khoản của bạn nếu bạn:</p>
                        <p>(a) đưa ra bất kỳ tuyên bố hoặc chia sẻ bất kỳ tài liệu nào lạm dụng, phỉ báng, quấy rối, rõ ràng hoặc xúc phạm nghiêm trọng, bao gồm nhưng không giới hạn ở các biểu hiện thô tục, cố chấp, phân biệt chủng tộc hoặc thù hận;</p>
                        <p>(b) sử dụng một trong các Dịch vụ hỗ trợ của chúng tôi để quảng cáo, quảng bá hoặc liên quan đến bất kỳ thực thể trực tuyến nào khác;</p>
                        <p>(c) được tin tưởng một cách hợp lý là cố gắng khai thác không công bằng Dịch vụ của chúng tôi, ví dụ: thông qua các tuyên bố không đúng sự thật lặp đi lặp lại về cùng một trường hợp, giao dịch hoặc đặc điểm;</p>
                        <p>(d) đưa ra tuyên bố về Công Ty hoặc bất kỳ trang web internet nào khác được kết nối với Trang Web không đúng sự thật và/hoặc độc hại và/hoặc gây thiệt hại cho Công Ty;</p>
                        <p>(e) sử dụng bất kỳ Dịch vụ hỗ trợ nào của chúng tôi để thông đồng, tham gia vào hành vi bất hợp pháp hoặc khuyến khích hành vi mà chúng tôi cho là không phù hợp. Bất kỳ tuyên bố nào về hoạt động đáng ngờ có thể được báo cáo cho các cơ quan có thẩm quyền.</p>

                        <p><b>10.4</b> Dịch vụ hỗ trợ của chúng tôi được sử dụng như một hình thức liên lạc giữa bạn và chúng tôi và không được sao chép hoặc chia sẻ với bất kỳ bên thứ ba nào mà không có sự đồng ý trước của chúng tôi. </p>

                        <h3>11. Quy tắc cá cược chung</h3>
                        <p><b>11.1</b>. Cược chỉ có thể được đặt bởi chủ Tài khoản đã đăng ký. </p>

                        <p><b>11.2</b> Các cược đã đặt và được chấp nhận không thể được sửa đổi, đảo ngược hoặc hủy bỏ bởi bạn. Bạn có thể tìm thấy danh sách tất cả các cược, trạng thái và chi tiết của chúng trên trang web. </p>

                        <p><b>11.3</b> Cược chỉ có thể được đặt qua Internet. </p>

                        <p><b>11.4</b> Bạn chỉ có thể đặt cược nếu bạn có đủ tiền trong tài khoản của mình trên Trang web. </p>

                        <p><b>11.5</b> Khi cược đã được đóng, nó sẽ tuân theo phiên bản Điều khoản và Điều kiện có hiệu lực và có sẵn trên Trang web tại thời điểm chấp nhận đặt cược. </p>

                        <p><b>11.6</b> Bất kỳ khoản thanh toán nào cho cược thắng sẽ được ghi có vào tài khoản của bạn, bao gồm cả tỷ lệ cược nhân số tiền cược với cược. </p>

                        <p><b>11.7</b> Khi đặt cược, bạn thừa nhận rằng bạn đã đọc và hiểu đầy đủ tất cả các điều khoản và điều kiện này liên quan đến đặt cược được mô tả trên Trang web. </p>

                        <p><b>11.8</b> Trang web quản lý tài khoản của bạn và tính toán các khoản tiền có sẵn, tiền đang chờ xử lý, tiền đặt cược và số tiền thưởng. Số tiền này được coi là cuối cùng và sẽ không được sửa đổi dựa trên các yêu cầu, kiểm toán bên ngoài hoặc điều tra mà không có bất kỳ lỗi rõ ràng nào. </p>

                        <p><b>11.9</b> Bạn hoàn toàn chịu trách nhiệm về việc đặt cược. </p>

                        <p><b>11.10</b> Tiền thưởng sẽ được trả cho cơ quan quản lý của môn thể thao hoặc cuộc thi có liên quan trong tài khoản của bạn sau khi xác nhận chính thức về kết quả cuối cùng. </p>

                        <p><b>11.11</b> Trừ khi có quyết định khác của cơ quan quản lý của chúng tôi, Trang web có quyền thu hồi bất kỳ khoản tiền thắng cược nào nếu kết quả phải chịu bất kỳ cuộc điều tra nào về hoạt động tội phạm bị nghi ngờ hoặc bất kỳ hành động nào có thể ảnh hưởng đến kết quả. Trong trường hợp có sự bất thường trong chế độ cá cược hoặc kết quả của Chiến dịch, được xác nhận bởi Cơ quan quản lý, bên thứ ba hoặc Trang web, Trang web có quyền hủy bỏ và / hoặc hoàn trả bất kỳ số tiền đặt cược nào trên Chiến dịch theo quyết định riêng của mình. Nếu bất kỳ cược nào đã được đặt, Trang web có quyền tính toán lại kết quả của sự kiện và mất mọi khoản tiền thắng liên quan. </p>

                        <p><b>11.12</b> Nếu bạn không hài lòng với bất kỳ vấn đề nào liên quan đến đặt cược trên Trang web, vui lòng thông báo cho Trang web để cung cấp bằng văn bản trong vòng 7 ngày kể từ ngày giao dịch diễn ra. Các thông báo được ban hành sau đó trong khoảng thời gian 7 ngày sẽ bị bỏ qua. Trong trường hợp không chắc chắn rằng sự khác biệt giữa kết quả xuất hiện trên thiết bị của bạn và kết quả xuất hiện trong nhật ký giao dịch của hệ thống của chúng tôi, bạn đồng ý rằng kết quả trong nhật ký giao dịch của hệ thống của chúng tôi được xác minh bởi các quan chức trang web sẽ là cuối cùng, kết luận và ràng buộc. </p>

                        <p><b>11.13</b> Nếu Trang web phát hiện ra rằng bạn đã đặt các cược khác nhau từ tài khoản của mình theo thời gian, tất cả các cược có thể được đặt bởi Trang web. Trang web này có quyền thực hiện thêm hành động khi thấy cần thiết. </p>

                        <p><b>11.14</b>  Nếu số tiền đặt cược vượt quá số tiền tối đa đã nêu được Trang web chấp nhận sai, số tiền vượt quá sẽ bị bỏ qua và số tiền đặt cược sẽ được sửa đổi và do đó khoản chênh lệch sẽ được hoàn trả / ghi có vào Tài khoản của bạn. </p>

                        <p><b>11.15</b> Thông tin được cung cấp bởi trang web này như luồng video thời gian thực, dữ liệu thống kê, tỷ số trực tiếp và cược trực tiếp là một dịch vụ thông tin giá trị gia tăng. Tuy nhiên, trang web này không chịu bất kỳ trách nhiệm nào, bất kể có bất kỳ sự không chính xác hoặc sai sót nào trong thông tin.</p>

                        <p><b>11.16</b> Nếu một trận đấu không bắt đầu vào hoặc sau ngày bắt đầu theo lịch trình và / hoặc bị hủy bỏ và không được hoàn thành (tiếp tục) vào cuối ngày dương lịch tiếp theo, tất cả các cược sẽ bị vô hiệu trừ khi bất kỳ thị trường đặt cược nào được xác định là vô điều kiện theo các quy tắc liên quan, trong trường hợp đó cược có thể được thiết lập. </p>

                        <p><b>11.17</b> Trang web có quyền thông qua các sự kiện áp dụng cho các cuộc thi cụ thể hoặc có thể mâu thuẫn với Quy tắc cá cược thể thao. Các quy tắc đặc biệt như vậy có thể công bố tỷ lệ cược được công bố cùng với các khu vực, khách hàng, trận đấu và / hoặc sự kiện cụ thể. </p>

                        <p><b>11.18</b> Thông tin liên lạc bị gián đoạn sau khi đặt cược và / hoặc bạn không nhận được xác nhận trực quan rằng đặt cược đã được đặt thành công, nhưng đặt cược đã được nhận đúng trên máy chủ của chúng tôi và đặt cược sẽ được coi là hợp lệ và được chấp nhận. Bạn sẽ được thông báo nếu bạn sẽ thắng hay thua một khi giao tiếp được thiết lập lại và kết quả được xác định. Nếu đặt cược không được nhận đúng cách trên máy chủ của chúng tôi do lỗi giao tiếp, nó sẽ không được coi là hợp lệ và được chấp nhận; Cược thất bại sẽ được hoàn trả vào số dư tài khoản của bạn. </p>

                        <p><b>11.19</b>  Bạn thừa nhận và thừa nhận rằng bạn có thể nhận được xác nhận thông báo cho bạn về những rủi ro tài chính tiềm ẩn sau khi đặt cược (vui lòng liên hệ với bộ phận hỗ trợ khách hàng của Trang web nếu có bất kỳ sự không chắc chắn nào). Khi nhận được xác nhận như vậy, bạn đồng ý rằng bạn đã được thông báo đầy đủ. </p>

                        <p><b>11.20</b> Trong trường hợp có sự khác biệt trong thống kê trận đấu được cung cấp bởi các nguồn bên ngoài, các nguồn dữ liệu được nêu trong trang Quy tắc cá cược thể thao chung được công bố của chúng tôi sẽ được ưu tiên áp dụng. </p>
                        <p><b>11.21</b> Giới hạn đặt cược tối đa sẽ phụ thuộc vào số tiền được Trang web cho phép tại thời điểm bạn chấp nhận đặt cược. </p>

                        <p><b>11.22</b> Những điều sau đây liên quan đến chức năng rút tiền:</p>

                        <p><b>11.22.1</b> Rút tiền có sẵn cho các sự kiện, đồ đạc và thị trường được chọn, cược đơn và nhiều, trước và trong trận đấu. </p>

                        <p><b>11.22.2</b> Chậm trễ trong việc chấp nhận yêu cầu rút tiền. Nếu thay đổi giá hoặc thị trường bị tạm dừng, yêu cầu rút tiền có thể không thành công. </p>

                        <p><b>11.22.3</b> Nếu yêu cầu rút tiền được chấp thuận, cược tương ứng sẽ được hiển thị ngay lập tức và được thanh toán. Kết quả cuối cùng thực tế của cược ban đầu sẽ không ảnh hưởng đến quá trình rút tiền.</p>

                        <p><b>11.22.4</b> Trong mọi trường hợp, khi yêu cầu rút tiền thành công, tổng số tiền hoàn trả sẽ được trả lại vào Tài khoản của bạn. </p>

                        <p><b>11.22.5</b> Trang web không thể đảm bảo rằng cược của bạn sẽ có sẵn cho tùy chọn rút tiền. Nếu rút tiền được thực hiện trước sự kiện, chúng tôi sẽ không bao gồm hoặc ngừng bảo hiểm Sự kiện Trực tiếp và việc rút tiền sẽ không có sẵn sau khi Sự kiện bắt đầu hoặc Trận đấu Trực tiếp của chúng tôi sẽ không được bảo hiểm để dừng lại. Khi thị trường tạm dừng, sẽ không có khoản thanh toán nào được cung cấp. </p>

                        <p><b>11.22.6</b> Website này có quyền thu hồi toàn bộ hoặc một phần việc thoái vốn chức năng của khách hàng hoặc nhóm khách hàng. Chúng tôi sẽ thực hiện quyền này trong trường hợp có nghi ngờ hợp lý rằng khách hàng hoặc nhóm khách hàng đang lạm dụng chức năng rút tiền để lợi dụng sự thay đổi giá trước sự kiện hoặc tính năng rút tiền thường xuyên được sử dụng để đóng cược trước khi bắt đầu sự kiện. </p>

                        <p><b>11.22.7</b> Nếu chức năng rút tiền không khả dụng vì lý do kỹ thuật, trang web này sẽ không chịu trách nhiệm về việc này. Ngoài ra, bất kỳ cá cược nào trong những trường hợp như vậy sẽ duy trì trạng thái cá cược ban đầu và trang web này cũng sẽ không chịu trách nhiệm. 。 </p>

                        <p><b>11.22.8</b> Trang web có quyền chấp nhận hoặc từ chối bất kỳ cược / cược nào để rút tiền từ các môn thể thao, cuộc thi, thị trường hoặc các loại cược có trong Tính năng Rút tiền. </p>

                        <p><b>11.23</b> Giải thưởng tối đa được tính bằng USD làm đồng tiền yết giá để đảm bảo an toàn cho thế giới, nhưng đơn vị tiền tệ tương đương áp dụng cho chi tiêu thực tế. Trong trường hợp nhiều cược liên quan đến các sự kiện với giới hạn tiền thưởng tối đa khác nhau, số tiền tối thiểu sẽ được áp dụng. Cả hai giới hạn tiền thưởng tối đa đều áp dụng cho tất cả khách hàng hoặc nhóm khách hàng của chúng tôi sử dụng các tài khoản cá cược khác nhau để chứa các cược của cùng một lựa chọn ở các mức giá khác nhau. Cần có lý do để tin rằng một số cược đã được đặt theo cách này và khoản thanh toán đầy đủ của các cược này sẽ chỉ cộng lại một khoản thanh toán tối đa. </p>

                        <h3>12. Trò chơi bị sảy thai và hủy bỏ</h3>
                        <p><b>12.1</b> Công ty sẽ không can thiệp vào Trò chơi đối với bất kỳ thời gian chết, gián đoạn máy chủ, độ trễ hoặc bất kỳ gián đoạn kỹ thuật hoặc chính trị nào. Hoàn tiền chỉ có thể được quản lý theo quyết định riêng của Trang web. </p>

                        <p><b>12.2</b> Công ty sẽ không chịu trách nhiệm về bất kỳ thiệt hại hoặc tổn thất nào được coi  là hoặc do Trang web hoặc nội dung của nó được cho là gây ra hoặc liên quan đến nó; Điều này bao gồm không giới hạn hoạt động  hoặc truyền tải, trì hoãn hoặc gián đoạn, mất hoặc hỏng dữ liệu, lỗi liên lạc hoặc đường truyền, lạm dụng Trang web hoặc nội dung của nó bởi bất kỳ người nào hoặc bất kỳ lỗi hoặc thiếu sót nào trong nội dung. </p>

                        <p><b>12.3</b> Nếu bất kỳ trò chơi sòng bạc nào bị hỏng, tất cả các cược đều bị hủy. </p>

                        <h3>13. Giới hạn trách nhiệm pháp lý</h3>
                        <p><b>13.1</b> Bạn tự chịu rủi ro khi truy cập vào Trang web và tham gia Trò chơi. Trang web và Trò chơi được cung cấp mà không có bảo đảm dưới bất kỳ hình thức nào, dù rõ ràng hay ngụ ý. </p>

                        <p><b>13.2</b> Không ảnh hưởng đến tính tổng quát của những điều đã nói ở trên, bạn chấp nhận rằng chúng tôi:</p>

                        <p><b>13.2.1</b> Không đảm bảo rằng Phần mềm, Trò chơi và Trang web phù hợp với mục đích của chúng; </p>

                        <p><b>13.2.2</b> Không đảm bảo rằng Phần mềm, Trò chơi và Trang web không có lỗi; </p>

                        <p><b>13.2.3</b> Không có gì đảm bảo rằng Phần mềm, Trò chơi và Trang web sẽ bị gián đoạn mà không bị gián đoạn. </p>

                        <p><b>13.3</b> Trừ khi được quy định rõ ràng trong các  Điều khoản và Điều kiện này, chúng tôi sẽ không chịu trách nhiệm về bất kỳ tổn thất, chi phí, chi phí hoặc thiệt hại nào, cho dù trực tiếp, gián tiếp, đặc biệt, do hậu quả, ngẫu nhiên hay cách khác, phát sinh từ việc bạn sử dụng Trang web hoặc việc bạn tham gia Trò chơi. </p>

                        <p><b>13.4</b> Bạn hiểu và thừa nhận rằng bất kỳ cược nào được đặt trong lần thất bại đó sẽ bị vô hiệu nếu Trò chơi hoặc sự cố của Trò chơi có thể tương tác được. Các khoản tiền được nêu từ các trò chơi bị lỗi sẽ bị coi là vô hiệu, cũng như bất kỳ vòng trò chơi nào tiếp theo, bất kể trò chơi nào được chơi bằng số tiền đó. </p>

                        <p><b>13.5</b> Nếu một phần hoặc toàn bộ cược bị tuyên bố vô hiệu, Trang web có quyền xem xét rằng có lỗi, lỗi, lỗi đánh máy hoặc lỗi kỹ thuật rõ ràng trên bảng thanh toán, tỷ lệ cược hoặc phần mềm. Đối với bất kỳ khoản tiền thắng cược chưa thực hiện nào, chúng tôi không chịu trách nhiệm về kết quả của việc vô hiệu hóa đặt cược trong trường hợp này. Hoàn tiền chỉ được quản lý bởi Seabet Management. </p>

                        <p><b>13.6</b> Bạn đồng ý bồi thường đầy đủ và giữ cho chúng tôi, giám đốc, nhân viên, đối tác và nhà cung cấp dịch vụ của chúng tôi vô hại khỏi và chống lại bất kỳ chi phí, chi phí, tổn thất, thiệt hại, khiếu nại và trách nhiệm pháp lý nào phát sinh từ việc bạn sử dụng Trang web hoặc tham gia Trò chơi. </p>

                        <p><b>13.7</b> Công ty sẽ không chịu trách nhiệm về bất kỳ thiệt hại hoặc tổn thất nào, cho dù theo hợp đồng, sai lầm, vi phạm bảo hành hay cách khác, được coi là hoặc bị cáo buộc là gây ra hoặc bị cáo buộc là do hoặc bị cáo buộc  gây ra bởi hoặc bị cáo buộc là do kết nối với Trang web hoặc nội dung của Trang web; Điều này bao gồm, nhưng không giới hạn, sự chậm trễ hoặc gián đoạn trong hoạt động hoặc truyền tải, mất hoặc hỏng dữ liệu, lỗi liên lạc hoặc đường truyền, lạm dụng Trang web hoặc nội dung của nó bởi bất kỳ cá nhân nào hoặc bất kỳ lỗi hoặc thiếu sót nào trong nội dung. </p>

                        <h3>14. Chính sách bảo mật</h3>
                        <p><b>14.1</b> Bạn thừa nhận và chấp nhận rằng chúng tôi có thể thu thập và sử dụng dữ liệu cá nhân của bạn nếu chúng tôi thấy cần thiết để bạn truy cập và sử dụng Trang web và cho phép bạn tham gia Trò chơi. </p>

                        <p><b>14.2</b> Chúng tôi thừa nhận rằng tại thời điểm thu thập thông tin cá nhân của bạn, chúng tôi bị ràng buộc bởi Đạo luật Bảo vệ Dữ liệu như đã nêu ở trên. Chúng tôi sẽ bảo vệ thông tin cá nhân của bạn và tôn trọng quyền riêng tư của bạn theo các thông lệ kinh doanh tốt nhất và luật hiện hành. </p>

                        <p><b>14.3</b> Chúng tôi sẽ sử dụng dữ liệu cá nhân của bạn để cho phép bạn tham gia Trò chơi và thực hiện các hành động liên quan đến việc bạn tham gia Trò chơi. Bằng cách mở tài khoản thành viên của bạn, bạn thừa nhận và chấp nhận rằng nhân viên Công ty có quyền truy cập dữ liệu cá nhân của bạn để thực hiện nhiệm vụ của họ và cung cấp cho bạn sự hỗ trợ tốt nhất, cũng như các dịch vụ. Chúng tôi cũng có thể sử dụng dữ liệu cá nhân của bạn để thông báo cho bạn về những thay đổi, dịch vụ mới và chương trình khuyến mãi. Bạn có thể chọn không nhận email tiếp thị bất cứ lúc nào. </p>

                        <p><b>14.4</b> Dữ liệu cá nhân của bạn sẽ không được tiết lộ cho bên thứ ba trừ khi việc tiết lộ đó được pháp luật yêu cầu hoặc cần thiết để sử dụng dịch vụ của chúng tôi, trong trường hợp đó bạn được coi là đã đồng ý tiết lộ thông tin đó cho bên thứ ba. Dữ liệu cá nhân có thể được tiết lộ cho trang web này với tư cách là đối tác kinh doanh hoặc nhà cung cấp cho trang web này hoặc các nhà cung cấp dịch vụ có thể chịu trách nhiệm về một số phần nhất định trong chức năng hoặc hoạt động tổng thể của trang web này. Nhân viên trang web có quyền truy cập vào dữ liệu cá nhân của bạn để thực hiện nhiệm vụ của họ và cung cấp cho bạn sự hỗ trợ và dịch vụ tốt nhất có thể. Bạn đồng ý với việc tiết lộ như vậy. </p>

                        <p><b>14.5</b> Chúng tôi sẽ giữ lại tất cả thông tin được cung cấp dưới dạng Dữ liệu Cá nhân vô thời hạn, trừ khi chúng tôi chọn làm như vậy sau khi hết thời hạn lưu giữ Dữ liệu Ứng dụng hoặc khi chúng tôi được pháp luật yêu cầu làm như vậy. </p>

                        <p><b>14.6</b> Để tối ưu hóa trải nghiệm của bạn và giám sát và cải thiện các dịch vụ trang web của chúng tôi, chúng tôi thu thập một số thông tin nhất định được gửi bởi trình duyệt của bạn, được gọi là cookie. Bạn có quyền lựa chọn có chấp nhận hay không chấp nhận bộ sưu tập cookie của chúng tôi. Tuy nhiên, xin lưu ý rằng việc tắt cookie có thể ảnh hưởng nghiêm trọng đến quyền truy cập của bạn vào trang web của chúng tôi và thậm chí có thể chặn hoàn toàn lượt truy cập của bạn. </p>

                        <h3>15. Chuyển nhượng</h3>
                        <p><b>15.1</b> Việc chuyển nhượng nghĩa vụ của bạn theo Thỏa thuận này là không được phép. Bạn không được chuyển nhượng nghĩa vụ của mình theo Thỏa thuận này và bất kỳ quyền hoặc nghĩa vụ nào theo Thỏa thuận này cho bất kỳ cá nhân hoặc tổ chức nào khác. </p>

                        <h3>16. Toàn bộ thỏa thuận</h3>
                        <p><b>16.1</b> Các Điều khoản và Điều kiện này cấu thành toàn bộ thỏa thuận  giữa bạn và chúng tôi để tôn trọng Trang web và, ngoại trừ trong trường hợp gian lận, thay thế tất cả các thông tin liên lạc và đề xuất điện tử, bằng miệng hoặc bằng văn bản trước đó hoặc đương thời giữa bạn và chúng tôi để tôn trọng Trang web. </p>

                        <h3>17. Tính hiệu lực từng phần</h3>
                        <p><b>17.1</b>  Nếu bất kỳ điều khoản nào trong các Điều khoản và Điều kiện này được coi là bất hợp pháp hoặc không thể thực thi, điều khoản đó sẽ bị cắt đứt khỏi các Điều khoản và Điều kiện này và tất cả các điều khoản khác sẽ tiếp tục có hiệu lực đầy đủ mà không bị ảnh hưởng bởi sự thôi việc đó. </p>

                        <h3>18. Hủy bỏ, đình chỉ và đóng cửa</h3>
                        <p><b>18.1</b> Không giới hạn khả năng dựa vào các biện pháp khắc phục khác có sẵn cho chúng tôi, chúng tôi có thể đình chỉ và / hoặc chấm dứt Tài khoản của bạn, hủy bất kỳ cược chưa thanh toán nào và / hoặc tịch thu bất kỳ hoặc tất cả số tiền trong Tài khoản của bạn theo quyết định tuyệt đối của chúng tôi:</p>
                        <p>(i) khi chúng tôi nghi ngờ rằng bạn đang sử dụng trang web của chúng tôi để rửa tiền, bất hợp pháp hoặc các hoạt động gian lận khác; hoặc</p>
                        <p>(ii) chúng tôi nghi ngờ rằng bạn đã gửi tiền bất hợp pháp hoặc thu được theo cách khấu hao rõ ràng và vật chất; hoặc</p>
                        <p>(iii) chúng tôi có được bằng chứng rằng bạn là một phần của tổ chức cá cược, nơi nhiều bên tham gia đặt cược để phá vỡ Quy tắc Trang web, các Điều khoản và Điều kiện này hoặc bất kỳ quy tắc nào khác của Trang web; hoặc</p>
                        <p>(iv) chúng tôi xác định rằng bạn đang sử dụng bất kỳ thiết bị, rô bốt, trình thu thập dữ liệu, phần mềm, quy trình hoặc phương pháp nào khác (hoặc bất kỳ điều gì có tính chất đã nói ở trên) để can thiệp hoặc cố gắng can thiệp vào hoạt động bình thường của Dịch vụ của chúng tôi, bất kỳ thiết bị, phần mềm liên quan, Trang web, trò chơi sòng bạc, thông tin cá cược thể thao và cá cược hoặc bất kỳ giao dịch nào được cung cấp trên Trang web,  đặc biệt không sử dụng hoặc sử dụng bất kỳ trí tuệ nhân tạo hoặc hệ thống nào khác (bao gồm máy móc, máy tính, phần mềm hoặc bất kỳ hệ thống tự động nào khác được thiết kế đặc biệt để lừa đảo và / hoặc phá hủy hệ thống Trang web); hoặc</p>
                        <p>(v) chúng tôi xác định rằng bạn đang thông đồng hoặc cố gắng thông đồng với những người chơi khác để đánh lừa Trang web hoặc khách hàng của Trang web; hoặc</p>
                        <p>(vi) chúng tôi xác định rằng bạn đã vi phạm bất kỳ điều khoản nào trong các Điều khoản và Điều kiện này;</p>
                        <p>(vii) chúng tôi xác định rằng bạn đang hành động theo cách bất lợi cho Diễn viên của chúng tôi; hoặc</p>
                        <p>(viii) chúng tôi xác định rằng cách bạn sử dụng Trang web mang lại cho bạn lợi thế không công bằng, ví dụ: đặt cược dựa trên cái nhìn sâu sắc hoặc chuyên môn có được thông qua việc tham gia cá nhân hoặc tham gia vào một lĩnh vực thể thao cụ thể; hoặc</p>
                        <p>(ix) chúng tôi nghi ngờ rằng bạn đã đăng ký, quản lý hoặc chỉ đạo hoạt động cá cược của mình trên nhiều tài khoản người dùng, cố gắng che giấu hoạt động cá cược của bạn, phá vỡ giới hạn giao dịch do chúng tôi đặt ra hoặc vi phạm bất kỳ điều khoản và điều kiện khuyến mãi nào; hoặc</p>
                        <p>(x) chúng tôi nghi ngờ rằng tài khoản của bạn đang được sử dụng vì lợi ích của bên thứ ba; hoặc</p>
                        <p>(xi) bằng chứng mà chúng tôi thu được rằng bằng cách đăng ký tài khoản mới, bạn đã vi phạm lệnh trực tiếp trên Trang web không tiếp tục các hoạt động cá cược của mình trên Trang web của chúng tôi. Trang web này có quyền tịch thu bất kỳ khoản tiền gửi nào từ tài khoản đã đăng ký bởi người dùng trước đó đã vi phạm hoặc bỏ qua các cảnh báo trước đó về các điều khoản và điều kiện trên.</p>

                        <p><b>18.2</b> Bạn thừa nhận rằng Trang web là người ra quyết định cuối cùng trong việc bạn sở hữu vi phạm quy tắc, điều khoản hoặc điều kiện dẫn đến đình chỉ hoặc cấm vĩnh viễn</p>
                        <p>Từ việc tham gia vào trang web của chúng tôi.</p>

                        <p><b>18.3</b>  Bất kể chúng tôi đình chỉ và / hoặc chấm dứt Tài khoản và bất kể bất kỳ điều khoản nào khác trong các Điều khoản và Điều kiện này, chúng tôi có thể quyết định hủy và hủy bất kỳ đặt cược nào chưa được hoàn thành theo quyết định tuyệt đối của chúng tôi nếu:</p>
                        <p>(i) có lỗi kỹ thuật, hoặc </p>
                        <p>(ii) bạn hoặc một khách hàng khác đặt cược với bạn vi phạm bất kỳ Điều khoản và Điều kiện nào trong số này.</p>

                        <h3>19. Bất khả kháng</h3>
                        <p><b>19.1</b>  Trang web này không thực hiện hoặc chậm trễ trong việc thực hiện nghĩa vụ dịch vụ của mình nếu sự thất bại hoặc chậm trễ đó là do bất khả kháng theo ý kiến của Trang web này, bao gồm nhưng không giới hạn ở lũ lụt, hỏa hoạn, động đất hoặc bất kỳ yếu tố tự nhiên nào khác, hành động chiến tranh, dịch bệnh hoặc dịch bệnh, bạo loạn hoặc tấn công khủng bố, sự cố điện tiện ích, khóa cửa và đình công,  sự chậm trễ hoặc gián đoạn mạng Internet và viễn thông gây ra bởi con người hoặc các yếu tố tự nhiên, hoặc bất kỳ sự kiện nào khác ngoài tầm kiểm soát hợp lý của Trang web này. Trang web này không chịu bất kỳ trách nhiệm nào đối với bất kỳ hậu quả nào phát sinh từ bất kỳ sự kiện bất khả kháng nào như vậy. </p>

                        <h3>20. Mặc định, hình phạt và chấm dứt</h3>
                        <p><b>20.1</b>  Chúng tôi có quyền không mở, đình chỉ hoặc đóng Tài khoản Thành viên của bạn, hoặc giữ lại tiền thắng cược của bạn và sử dụng tiền cho bất kỳ thiệt hại nào mà bạn được hưởng, nếu bạn vi phạm bất kỳ điều khoản nào trong các Điều khoản và Điều kiện này hoặc nếu chúng tôi có cơ sở hợp lý để nghi ngờ rằng bạn đã vi phạm điều khoản đó. </p>

                        <h3>21. Luật áp dụng và quyền tài phán</h3>
                        <p><b>21.1</b> Các Điều khoản và Điều kiện này sẽ được điều chỉnh bởi luật pháp Curacao. </p>

                        <p><b>21.2</b> Bạn thừa nhận rằng, trừ khi có quy định khác, Trò chơi được tổ chức và quản lý bởi lãnh thổ Curaçao. Bất kỳ mối quan hệ hợp đồng nào giữa bạn và Công ty sẽ được coi là đã được ký kết và thực hiện bởi các bên ở Curaçao, tại Địa chỉ Đăng ký Công ty. </p>

                        <p><b>21.3</b> Các bên đồng ý rằng bất kỳ tranh chấp, tranh cãi hoặc khiếu nại nào phát sinh từ hoặc liên quan đến các Điều khoản và Điều kiện này hoặc vi phạm, chấm dứt hoặc vô hiệu sẽ thuộc thẩm quyền tài phán độc quyền của tòa án Curacao. </p>

                        <h3>22. Khiếu nại</h3>
                        <p><b>22.1</b>  Nếu bạn có bất kỳ khiếu nại hoặc khiếu nại nào về các dịch vụ của chúng tôi, bạn có thể liên hệ với nhóm dịch vụ khách hàng của chúng tôi thông qua chức năng trò chuyện có sẵn trên Trang web hoặc tại địa chỉ email. Chúng tôi sẽ cố gắng hết sức để giải quyết vấn đề bạn đang gặp phải trong thời gian ngắn nhất. </p>
                      </div>`
  }
}
