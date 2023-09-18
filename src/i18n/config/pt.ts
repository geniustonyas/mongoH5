const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Página Inicial',
  search: 'Pesquisar',
  promo: 'Promoção',
  support: 'Suporte',
  onlineSupport: 'Suporte Online',
  accountMenu: 'Conta',
  account: 'Conta',
  confirm: 'Confirmar',
  confirmd: 'Confirmado',
  all: 'Todos',
  save: 'Salvar',
  cancel: 'Cancelar',
  close: 'Fechar',
  start: 'Iniciar',
  loading: 'Carregando',
  end: 'Fim',
  to: ' até ',
  or: 'ou',
  and: 'e',
  at: 'em',
  goto: 'Ir para',
  refreshSuccess: 'Atualização bem-sucedida',
  loadingFail: 'Falha no carregamento',
  noMore: 'Não há mais...',
  login: 'Login',
  otherMethod: 'Outro método',
  reg: 'Registrar',
  userName: 'Nome de Usuário',
  email: 'E-mail',
  sendEmail: 'Enviar E-mail de Verificação',
  sended: 'Enviado',
  emailCaptcha: 'Código de Verificação por E-mail',
  password: 'Senha',
  forgetPassword: 'Esqueci a Senha',
  resetPwd: 'Redefinir Senha',
  noUser: 'Não possui uma conta?',
  createUser: 'Criar Conta',
  googleCode: 'Código de Verificação do Google',
  inputGoole: 'Digite o Código de Verificação do Google',
  partner: 'Parceiro Oficial:',
  date: 'Data',
  day: 'Dia',
  month: 'Mês',
  year: 'Ano',
  birthday: 'Data de Nascimento',
  telephone: 'Telefone',
  country: 'País',
  hasAccount: 'Já possui uma conta?',
  logout: 'Sair',
  address: 'Endereço',
  zipCode: 'Código Postal',
  loginPage: {
    useGoogle: 'Usar Autenticador Google',
    userNameOrEmail: 'Nome de Usuário ou E-mail'
  },
  regPage: {
    holderUserName: 'Crie seu Nome de Usuário',
    holderEmail: 'Por exemplo: você@example.com',
    holderTelephone: 'Telefone (+66 xxxxxxxxxxx)',
    isAdult: 'Eu confirmo que tenho mais de 18 anos e aceito os',
    termCondition: 'termos e condições',
    privacyPolicy: 'política de privacidade',
    isAgree: `Eu concordo em receber informações de marketing relacionadas a promoções e eventos da ${site_name}.`
  },
  thirdRegPage: {
    beFinished: 'Quase pronto!',
    fixInfo: 'Complete suas informações, por favor'
  },
  myprfile: 'Meu Perfil',
  clubLevel: 'Nível do Clube',
  userLevels: {
    '101': 'Ferro',
    '102': 'Bronze',
    '103': 'Prata',
    '104': 'Ouro',
    '105': 'Platina',
    '106': 'Titânio',
    '107': 'Diamante'
  },
  homePage: {
    currentMultiplier: 'Multiplicador de Pontos Atual',
    nextReward: 'Próxima Recompensa de Nível',
    showProgress: 'Mostrar Meu Progresso'
  },
  userAccount: 'Conta do Usuário',
  wallet: 'Carteira',
  myBets: 'Meu Histórico de Apostas',
  rewards: 'Recompensas',
  notifications: 'Mensagens de Notificação',
  // Pesquisa
  noSearchResult: 'Desculpe, não foram encontrados resultados para "{ keyword }". Tente outras palavras-chave.',
  searchResultNum: '{ searchResult } resultados encontrados',
  // Detalhes da Promoção
  promoDetail: 'Detalhes da Promoção',
  // Clube
  club: 'Clube',
  tiers: 'Níveis',
  clubTips: 'Suas recompensas serão redefinidas a cada mês. Certifique-se de resgatá-las antes do final do mês.',
  currentPoints: 'Valor da aposta atual',
  currentPointsMultiplier: 'Multiplicador de Pontos Atual',
  receiveReward: 'Receber Recompensa',
  alreadyReceived: 'Já Recebido',
  mergedReards: 'Recompensas acumuladas para resgate no próximo nível',
  noReward: 'Nenhuma recompensa disponível. Alcance o próximo nível para desbloquear sua primeira recompensa.',
  // Clube VIP
  vipClub: 'Clube VIP',
  // Loja de Pontos
  mallStore: 'Loja de Pontos',
  // Configurações da Conta
  generalInformation: 'Informações Gerais',
  changePassword: 'Alterar Senha',
  googleAuthenticator: 'Autenticador Google',
  privacySetting: 'Configurações de Privacidade',
  currentPwd: 'Senha Atual',
  newPwd: 'Nova Senha',
  confirmPwd: 'Confirmar Nova Senha',
  changePwdLimit: 'Por razões de segurança, você não poderá efetuar retiradas nas próximas 24 horas após a alteração da senha.',
  disabledGoogle: 'Autenticador Google Desativado',
  activeGoogle: 'Digitalize o código QR ou insira o código para ativar o Autenticador Google.',
  whatGoogleCode: 'O que é o Código Google?',
  typeCode: 'Digite o Código',
  submitCode: 'Enviar Código',
  keyValue: 'Chave',
  // Notificações
  notice: 'Avisos',
  mail: 'Mensagens Internas',
  makeAllRead: 'Marcar Todas Como Lidas',
  noMessage: 'Nenhuma mensagem disponível',
  // Recompensas
  claimReward: 'Resgatar Recompensa',
  claimNewReward: 'Resgatar Nova Recompensa',
  rewardCode: 'Código de Recompensa',
  claim: 'Resgatar',
  recentTransaction: 'Transações Recentes',
  // Pesquisa
  searchHolder: 'Jogos, Fornecedores',
  searchMore: 'Buscar Mais',
  searchRecommend: 'Recomendado para Você',
  enter: 'Entrar',
  // Fundos
  fundAccount: 'Conta de Fundos',
  activeBalance: 'Saldo Ativo',
  balance: 'Saldo',
  deposit: 'Depósito',
  buyCrypto: 'Comprar Criptomoedas',
  withdraw: 'Retirada',
  youDepositAddress: 'Seu Endereço de Depósito',
  minDepositAmount: 'Valor Mínimo de Depósito',
  quickTips: 'Dicas Rápidas',
  quickTipCont: 'Certifique-se de usar sempre o endereço de depósito mais recente da nossa tesouraria.',
  promoCode: 'Código de Promoção',
  currentBalance: 'Saldo Atual',
  myRewards: 'Minhas Recompensas',
  transactionHistory: 'Histórico de Transações',
  supportSettings: 'Suporte e Configurações',
  walletSettings: 'Configurações da Carteira',
  faq: 'Perguntas Frequentes',
  liveSupport: 'Suporte ao Vivo',
  chooseCrypto: 'Escolha sua Criptomoeda Preferida',
  cryptoCurrency: 'Criptomoeda',
  bank: 'Banco',
  chooseDepositChain: 'Escolha a Rede de Depósito',
  confirmDepositAddress: 'Confirme seu Endereço de Depósito antes de prosseguir com a transação.',
  recommendExchange: 'Compre Criptomoedas em nossas corretoras recomendadas',
  // Histórico de Transações
  deposits: 'Depósitos',
  withdrawals: 'Retiradas',
  bets: 'Apostas',
  wins: 'Vitórias',
  currencyFilter: 'Filtrar por Moeda',
  dateFilter: 'Filtrar por Data',
  winLose: 'Vitória/Perda',
  nodata: 'Nenhum dado disponível',
  // Configurações da Carteira
  currency: 'Moeda',
  btcUnit: 'Unidade de Bitcoin',
  // Retiradas
  inputAmount: 'Digite o Valor',
  walletDetails: 'Detalhes da Carteira',
  walletDetailsBig: 'Detalhes da Carteira',
  waitingResults: 'Aguardando Resultados',
  withdrawUsdt: 'Retirada  {curreny}',
  amount: 'Valor',
  minWithdrawAmount: 'Valor Mínimo de Retirada',
  next: 'Próximo',
  youWithdrawAddress: 'Seu Endereço de Retirada',
  payto: 'Pagar para',
  checkWithdrawAddress: 'Verifique seu endereço de retirada antes de cada transação.',
  previewWithdraw: 'Visualizar Retirada',
  confirmWithdrawInfo: 'Confirme todas as informações antes de prosseguir.',
  network: 'Rede',
  withdrawing: 'Retirando',
  summary: 'Resumo',
  transactionType: 'Tipo de Transação',
  finalBalance: 'Saldo Final',
  backToFund: 'Voltar aos Fundos',
  chooseWithdrawChain: 'Escolha a Rede de Retirada',
  confirmWithdrawAddress: 'Confirme seu Endereço de Retirada antes de prosseguir com a transação.',
  walletAddress: 'Endereço de Carteira',
  walletAddressBig: 'Endereço de Carteira',
  tradeStatus: { 1: 'Não Concluído', 2: 'Confirmado', 3: 'Excluído' },

  // Página Inicial
  readMore: 'Leia Mais',
  sports: 'Esportes',
  liveCasino: 'Cassino Ao Vivo',
  slots: 'Caça-Níqueis',
  sbSport: 'Esportes SB',
  fbSport: 'Esportes FB',
  downloadApp: 'Baixe o App',
  androidApple: 'Disponível para Android e Apple',
  globalPaymentSolutions: 'Soluções Globais de Pagamento',
  otherPayment: 'Outros Métodos de Pagamento',
  sportsBet: 'Apostas Esportivas',
  liveCasinoBet: 'Apostas no Cassino Ao Vivo',
  slotBet: 'Apostas em Caça-Níqueis',
  more: 'Mais',
  loadMore: 'Carregar Mais',
  providers: 'Fornecedores',
  allProviders: 'Todos os Fornecedores',
  sortBy: 'Ordenar por',
  polular: 'Popular',
  promotions: 'Promoções',
  aboutUs: 'Sobre Nós',
  selectLanguage: 'Selecionar Idioma',
  ruleTerms: 'Regras e Termos',
  responsibleGambling: 'Jogo Responsável',
  amlPolicy: 'Política AML',
  selfExclusion: 'Autoexclusão',
  privacyPolicy: 'Política de Privacidade',
  fairness: 'Justiça',
  game: 'Jogo',
  followUs: 'Siga-nos',
  language: 'Idioma',
  helpCenter: 'Central de Ajuda',
  acceptCrypto: 'Aceitamos Criptomoedas',
  licencesSecurity: 'Licenças e Segurança',
  gameBig: 'Jogo',
  userBig: 'Usuário',
  payoutBig: 'Pagamento',
  betUser: 'Apostador',
  multiplier: 'Multiplicador',
  paymentAmount: 'Valor do Pagamento',
  invisibility: 'Invisibilidade',
  currencyLang: {
    usdt: 'USDT',
    btc: 'Bitcoin',
    eth: 'Ethereum',
    busd: 'Binance USD',
    trx: 'TRON',
    xrp: 'XRP',
    bnb: 'Binance Coin',
    ltc: 'Litecoin',
    ada: 'Cardano',
    doge: 'Dogecoin',
    ton: 'TON Crystal',
    usd: 'Dólar Americano',
    cny: 'Renminbi Chinês'
  },
  // Loja de Pontos
  points: 'Pontos',
  pointsNum: 'Quantidade de Pontos',
  earnPoints: 'Ganhar',
  pointType: 'Tipo',
  spentPoints: 'Gasto',
  afterPoints: 'Saldo após Pontos',
  createTime: 'Data de Criação',
  pointsType: {
    '1': 'Apostas',
    '2': 'Trocar por Produtos',
    '3': 'Promoções',
    '4': 'Adicionado por Administrador',
    '5': 'Subtraído por Administrador',
    '6': 'Cancelada'
  },

  // Fornecedores de Jogos
  provider: {
    all: 'Todos',
    sabaSports: 'Esportes Saba',
    btiSports: 'Esportes Seabet',
    fbSports: 'Esportes FB',
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
  // Dicas de validação de dados
  tips: {
    // Usuário - Login e Registro
    inputAccount: 'Insira o nome de usuário',
    isAccount: 'O nome de usuário deve ter entre 5 e 12 caracteres e começar com uma letra',
    inputPassword: 'Insira a senha',
    isPwd: 'A senha deve ter entre 6 e 16 caracteres, contendo números ou letras',
    pwdNotMatch: 'As senhas não correspondem',
    googleCode: 'O código de autenticação do Google deve ter 6 dígitos numéricos',
    loginFail: 'Falha no login',
    inputEmail: 'Insira o e-mail',
    isEmail: 'Formato de e-mail incorreto',
    inputEmailcapcha: 'Insira o código de verificação de e-mail',
    inputDay: 'Selecione o dia de nascimento',
    inputMonth: 'Selecione o mês de nascimento',
    inputYear: 'Selecione o ano de nascimento',
    inputCountryCode: 'Insira o código do país',
    inputphoneNumber: 'Insira o número de telefone',
    inputAddress: 'Insira o endereço',
    inputZipCode: 'Insira o código postal',
    userNameExist: 'Nome de usuário já existe',
    emailExist: 'E-mail já existe',
    emailNotExist: 'E-mail não existe',
    isAudit: 'Confirme que você é maior de idade e aceita a política de privacidade',
    isAgree: 'Leia e aceite as informações relacionadas às atividades de mercado',
    regSuccess: 'Registro bem-sucedido',
    regFail: 'Falha no registro',
    loginSuccess: 'Login bem-sucedido',
    sendSuccess: 'Envio bem-sucedido',
    resetSuccess: 'Redefinição de senha bem-sucedida, faça login novamente',
    resetFail: 'Falha na redefinição de senha',
    sendFail: 'Falha no envio',
    editUserInfoSuccess: 'Informações do usuário editadas com sucesso',
    inputNewPwd: 'Insira a nova senha',
    isNewPwd: 'A nova senha deve ter entre 6 e 16 caracteres, contendo números ou letras',
    inputOldPwd: 'Insira a senha antiga',
    isOldPwd: 'A senha antiga deve ter entre 6 e 16 caracteres, contendo números ou letras',
    editPwdSuccess: 'Senha alterada com sucesso, faça login novamente',
    bindGoogleSuccess: 'Código de autenticação do Google vinculado com sucesso',
    logoutSuccess: 'Logout bem-sucedido',
    setSuccess: 'Configuração bem-sucedida',
    inputWithdrawAmount: 'Insira o valor de saque',
    overMaxWithdrawAmount: 'O valor de saque não pode ser maior que o saldo',
    underMinWithdrawAmount: 'O valor de saque deve ser maior que o valor mínimo',
    inputWithdrawAddress: 'Insira o endereço de saque',
    withdrawSuccess: 'Solicitação de saque bem-sucedida',
    withdrawFail: 'Falha na solicitação de saque',
    receivedRewardSuccess: 'Recompensa recebida com sucesso',
    receivedRewardFail: 'Falha ao receber a recompensa',
    noLogin: 'Você ainda não fez login',
    goLogin: 'Ir para o login agora',
    invalidThirdUser: 'Falha na verificação de usuário de terceiros',
    authFail: 'Falha na autorização',
    copySuccess: 'Cópia bem-sucedida',
    copyFail: 'Esse navegador não suporta cópia automática, copie manualmente',
    inputExhangeCode: 'Insira o código de troca',
    startGameFail: 'Falha ao iniciar o jogo',
    insufficientPoints: '积分不足',
    exhangeSuccess: '您的信息提交成功',
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

  rewardsBig: 'Recompensas',
  myStats: 'Minhas Estatísticas',
  exclusiveRewards: 'Recompensas Exclusivas',
  quickBuys: 'Compras Rápidas',
  earned: 'Ganho',
  spent: 'Gasto',
  pointsHistory: 'Histórico de Pontos',
  earnPointsAndTrack: 'Ganhe pontos e acompanhe-os',
  viewPointsRecord: 'Ver todos os registros de consumo de pontos',
  buyNow: 'Comprar Agora',
  youWillGet: 'Você receberá',
  bonusValue: 'Valor do Bônus',
  wageringRequirement: 'Requisito de Apostas',
  enableVisible: 'Habilitar Modo Invisível',
  hiddenYourBet: 'Suas apostas não aparecerão nas atividades públicas e visualizações de apostas',
  startNow: 'Iniciar Agora',
  // Termos e Conteúdos de HTML
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
  view: '详情',
  oprate: '查看',
  remain: '剩余',

  problem: {
    whatVip: '1.O que é o Clube VIP?',
    whatVips: `<p>O Clube VIP da seabet.io é uma comunidade dedicada aberta aos clientes que usam criptomoedas, permitindo que eles desfrutem de todas as atividades promocionais disponíveis no site a qualquer momento. Cada aposta, giro e jogo que você joga acumulará pontos, subindo gradualmente no clube e desbloqueando recompensas emocionantes ao longo do caminho. Conforme você desbloqueia níveis VIP, também ganhará pontos de aposta da Seabet, que proporcionarão experiências e serviços ainda mais gratificantes.</p>
                <p>Em termos simples, significa: Você joga, e nós te recompensamos.</p>`,
    howGetIntegrial: '2.Como Ganhar Pontos?',
    howGetIntegrials: `Você ganha pontos do clube com cada aposta, giro de máquina caça-níqueis e jogo de mesa que você joga. Quanto mais pontos você acumula, maior será o seu nível. Conforme você avança nos níveis, desbloqueará uma variedade de recompensas emocionantes. As recompensas continuarão melhorando à medida que você desbloqueia novos níveis.`,
    whatVipLevel: '3.O que são Níveis VIP?',
    whatVipLevels: `<p>Os níveis VIP determinam o valor e o tipo de recompensas que você pode reivindicar. Conforme você avança no clube e sobe de nível, suas recompensas também aumentarão.</p>
                    <table>
                      <tr>
                        <th>Nível VIP</th>
                        <th>Quantidade de Aposta Necessária</th>
                        <th>Frequência</th>
                      </tr>
                      <tr>
                        <td>Bronze</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Prata</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Ouro</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Platina</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Titânio</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Diamante</td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.Como São Calculados os Pontos?',
    howComputeInterials: `<p>Quer esteja a fazer apostas desportivas ou a jogar jogos de casino, o uso de criptomoedas permitir-lhe-á ganhar pontos. Para calcular os pontos que ganha com cada aposta, convertemos o valor da sua aposta em USDT à taxa de câmbio de mercado em tempo real durante a liquidação. Isso garante que todas as coletas de pontos, independentemente da criptomoeda usada, sejam justas. Devido às taxas de conversão flutuantes, seguimos o princípio de arredondar para o número inteiro mais próximo ao calcular os pontos.</p>
                          <p>A fórmula para ganhar pontos Seabet é: Valor da aposta do jogador * 0,01 * coeficiente de pontos do nível correspondente. Por exemplo, se um jogador estiver no nível Platina e apostar 5000, de acordo com a fórmula de cálculo de pontos, o jogador ganhará 5000 * 0,01 * 1,3 = 65 pontos. Os pontos Seabet têm uma ampla gama de usos, e os jogadores podem resgatar presentes e serviços equivalentes na loja de pontos.</p>`,
    whyMergedReward: '5.Por que as minhas recompensas estão unificadas?',
    whyMergedRewards: `<p>As suas recompensas são unificadas porque uma única aposta pode desbloquear múltiplas recompensas. Para tornar mais conveniente para você, somamos o valor das recompensas e as exibimos como uma única recompensa.</p>`,
    resetVip: '6.Quando o meu nível VIP será redefinido?',
    resetVips: `<p>O seu nível VIP será redefinido para 0 no início de cada mês. Você poderá então começar novamente a partir do nível Bronze e reivindicar todas as recompensas do próximo nível. Os seus pontos acumulados serão mantidos para que você possa resgatar mais recompensas e serviços..</p>`,
    everyGetInterial: '7.Posso Ganhar Pontos do Clube com Cada Aposta?',
    everyGetInterials: `<p>Não, os pontos do clube são acumulados apenas ao fazer apostas com dinheiro real. Além disso, certas categorias de eventos e jogos não estão incluídas no clube, portanto, as apostas feitas neles não lhe renderão pontos. Estas categorias incluem:</p>
                        <p>Corridas de Cavalos</p>
                        <p>Esportes Eletrônicos</p>
                        <p>Mestres de Apostas Desportivas</p>
                        <p>Além disso, os seguintes jogos de casino também não estão incluídos no clube, e as apostas feitas neles não lhe renderão pontos.</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: 'Como faço um depósito?',
    a1: `<p>PIX</p>
          <p>1. Escolha a criptomoeda que você selecionou e clique em depositar.</p>
          <p>2. Copie o endereço de depósito único e use-o na sua carteira (ou digitalize o código QR).</p>
          <p>3. Após a confirmação da transação, você receberá uma notificação.</p>`,
    q2: 'Quanto tempo leva o processamento dos depósitos/saques?',
    a2: `p>Depósito</p>
        <p>A maioria dos depósitos de criptomoedas é processada a uma velocidade relâmpago. No entanto, pode haver alguns atrasos de serviços de terceiros.</p>
        <p>Retirada</p>
        <p>A maioria das retiradas é processada instantaneamente. No caso de retiradas de grande valor, processamos essas retiradas manualmente, portanto, pode haver um leve atraso.</p>`,
    q3: 'Quais métodos de pagamento vocês oferecem?',
    a3: `<p>As opções de moeda disponíveis no Seabet.io são:</p>
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
    q4: 'Há cobrança de taxas nas transações?',
    a4: `<p>Embora não cobremos nenhuma taxa por depósitos e retiradas no Seabet.io, é possível que você precise pagar taxas de transação ao usar pagamentos com blockchain.</p>`,
    q5: '',
    a5: ``,
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
    1032: '为确保您的资金安全，当您修改密码后， 24小时内您将无法进行提款操作。',
    1033: '邮箱验证码错误'
  },

  html: {
    // Títulos HTML
    vipTitle: 'Clube VIP',
    rulesTitle: 'Regras e Termos',
    responsibleTitle: 'Jogo Responsável',
    amlTitle: 'Política de Prevenção à Lavagem de Dinheiro',
    selfExclusionTitle: 'Autoexclusão',
    privacyTitle: 'Política de Privacidade',
    fairnessTitle: 'Equidade',

    // Conteúdo HTML
    vipContent: `<div class="vip-clubhouse-box">
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
                  <h3>Declaração de Financiamento contra Lavagem de Dinheiro e Combate ao Terrorismo</h3>
                  <h4>1. Modelo de negócios da empresa</h4>
                  <p>Atualmente, a Seabet oferece suporte a seus usuários em mais de 169 países ao redor do mundo. Como parte de suas operações globais, a Seabet estabeleceu medidas de conformidade compatíveis com seus serviços e produtos projetados para prevenir e detectar atividades ilegais em sua plataforma. Isso inclui integração e triagem de conformidade para seus clientes e controles baseados em transações.</p>
                  <h4>2. Declaração de política da empresa</h4>
                  <p>A Seabet proíbe expressamente e se recusa a usar os Produtos Seabet para qualquer forma de atividade ilegal, incluindo lavagem de dinheiro, financiamento do terrorismo ou violações de sanções comerciais, de acordo com as leis, regulamentos e diretrizes nacionais antilavagem de dinheiro (AML).
                      A Seabet continua monitorando os parâmetros estabelecidos pelas diretrizes definidas pela Força-Tarefa de Ação Financeira (GAFI) e certas organizações comerciais de jogos e pela Comissão de Controle de Jogos de Curaçao e tomará as medidas que considerar apropriadas para refletir as mudanças na lei.
                      A Seabet pretende seguir as melhores práticas globais e evitar que os produtos da Seabet sejam usados para facilitar tais atividades. Essas práticas recomendadas incluem:</p>
                  <ul>
                      <li>Adotar políticas escritas e procedimentos e controles razoavelmente elaborados para prevenir lavagem de dinheiro, financiamento do terrorismo e violações de sanções comerciais;</li>
                      <li>Quando apropriado, nomear um responsável pela conformidade para supervisionar a implementação de políticas, procedimentos e controles;</li>
                      <li>Fornecer educação e treinamento relevantes para o pessoal relevante;</li>
                      <li>Revisão independente, monitoramento e manutenção de políticas, procedimentos e controles.</li>
                  </ul>
                  <h3>3. Definições</h3>
                  <p>Os seguintes termos de definição são amplamente utilizados na indústria:</p>
                  <p>Lavagem de dinheiro: O processo de fazer com que os rendimentos obtidos ilegalmente pareçam legítimos. Esse processo normalmente é dividido em três etapas: armazenamento, classificação por níveis e consolidação.</p>
                  <p>Depósito: O processo de depósito de receitas ilegais em uma instituição financeira tradicional, por meio de depósitos ou outros meios.</p>
                  <p>Estratificação: O processo de separar os rendimentos da atividade criminosa de sua fonte usando um nível complexo de transações financeiras, como a conversão de dinheiro em cheques de viagem, ordens de pagamento, transferências eletrônicas, cartas de crédito, ações, títulos ou a compra de ativos.</p>
                  <p>Integração: O uso de transações aparentemente legítimas para mascarar ganhos ilícitos para que os fundos lavados possam ser redistribuídos aos criminosos; Integrar os atuais fundos de lavagem de dinheiro de volta ao uso normal.</p>
                  <p>Atividade suspeita: Atividade realizada por um usuário ou não usuário usando a instituição onde há indícios de que a pessoa que faz a transação pode ter fins fraudulentos ou ilegais.</p>
                  <p>Sanções: Sanções são atividades realizadas pela comunidade internacional para proibir ou limitar as atividades visadas por sanções. Por exemplo, eles são usados para:</p>
                  <ul>
                      <li>Encorajar o estado ou regime alvo a mudar seu comportamento;</li>
                      <li>Pressionar o país-alvo para cumprir as metas estabelecidas;</li>
                      <li>Como uma ferramenta para aplicação da lei quando a paz e a segurança internacionais são ameaçadas e os esforços diplomáticosfalham;</li>
                      <li>Prevenir e combater o financiamento de terroristas ou atos terroristas.</li>
                  </ul>
                  <h4>4. Governança e supervisão</h4>
                  <p>A Seabet nomeou um Chief Compliance Officer (CCO) para coordenar a implementação das políticas e programas de políticas da AML. As responsabilidades do Diretor de Conformidade também incluem o desenvolvimento de planos de AML, trabalhando com outras partes interessadas para revisar as políticas de AML, avaliando novos requisitos regulatórios e investigando possíveis atividades suspeitas ou incomuns. A Seabet também fornece regularmente treinamento AML para todos os funcionários.</p>
                  <h4>5. Educação e treinamento</h4>
                  <p>A Seabet, com a assistência de seu consultor jurídico e sob a supervisão de seu CCO, pode fornecer treinamento regular de conformidade com AML, CFT e sanções comerciais para seus funcionários, conforme necessário.</p>
                  <h4>6. Relatórios</h4>
                  <p>A Seabet é obrigada a relatar quaisquer transações incomuns ou suspeitas de acordo com os decretos nacionais. Os clientes identificados na lista de sanções relacionadas à lavagem de dinheiro ou financiamento do terrorismo ou outras atividades criminosas serão denunciados ao regulador como atividades suspeitas.</p>
              </div>`,
    selfExclusionContent: ``,
    privacyContent: ``,
    fairnessContent: ``
  }
}
