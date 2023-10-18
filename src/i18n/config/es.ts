const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Inicio',
  search: 'Buscar',
  promo: 'Promociones',
  support: 'Soporte',
  onlineSupport: 'Soporte en Línea',
  accountMenu: 'Cuenta',
  account: 'Cuenta',
  confirm: 'Confirmar',
  confirmd: 'Confirmado',
  all: 'Todos',
  save: 'Guardar',
  cancel: 'Cancelar',
  close: 'Cerrar',
  start: 'Comenzar',
  loading: 'Cargando',
  end: 'Fin',
  to: ' a ',
  or: 'o',
  and: 'y',
  at: 'a',
  goto: 'Ir a',
  refreshSuccess: 'Actualización exitosa',
  loadingFail: 'Error de carga',
  noMore: 'No hay más...',
  login: 'Iniciar sesión',
  otherMethod: 'Otro Método',
  reg: 'Registro',
  userName: 'Nombre de Usuario',
  email: 'Correo Electrónico',
  sendEmail: 'Send',
  sended: 'Enviado',
  emailCaptcha: 'Código de Correo Electrónico',
  password: 'Contraseña',
  forgetPassword: 'Olvidé la Contraseña',
  resetPwd: 'Restablecer Contraseña',
  noUser: '¿No tienes una cuenta?',
  createUser: 'Crear Cuenta',
  googleCode: 'Código de Google',
  inputGoole: 'Introduce el Código de Google',
  partner: 'Socio Oficial:',
  date: 'Fecha',
  day: 'Día',
  month: 'Mes',
  year: 'Año',
  birthday: 'Fecha de Nacimiento',
  telephone: 'Teléfono',
  country: 'País',
  hasAccount: '¿Ya tienes una cuenta?',
  logout: 'Cerrar Sesión',
  address: 'Dirección',
  zipCode: 'Código Postal',
  loginPage: {
    useGoogle: 'Usar Autenticador de Google',
    userNameOrEmail: 'Nombre de Usuario o Correo Electrónico'
  },
  regPage: {
    holderUserName: 'Crea tu Nombre de Usuario',
    holderEmail: `Ejemplo: tu{'@'}ejemplo.com`,
    holderTelephone: 'Teléfono (+66 xxxxxxxxxxx)',
    isAdult: 'Confirmo que tengo 18 años o más y acepto',
    termCondition: 'Términos y Condiciones',
    privacyPolicy: 'Política de Privacidad',
    isAgree: `Acepto recibir información sobre promociones y actividades de mercado de ${site_name}`
  },
  thirdRegPage: {
    beFinished: '¡Casi terminado!',
    fixInfo: 'Por favor, completa tu información'
  },
  myprfile: 'Mi Perfil',
  clubLevel: 'Nivel del Club',
  userLevels: {
    '101': 'Hierro',
    '102': 'Bronce',
    '103': 'Plata',
    '104': 'Oro',
    '105': 'Platino',
    '106': 'Titanio',
    '107': 'Diamante'
  },
  homePage: {
    currentMultiplier: 'Multiplicador de Puntos Actual',
    nextReward: 'Recompensa del Próximo Nivel',
    showProgress: 'Mostrar mi Progreso'
  },
  userAccount: 'Cuenta de Usuario',
  wallet: 'Billetera',
  myBets: 'Mis Apuestas',
  rewards: 'Recompensas',
  notifications: 'Notificaciones',
  // Búsqueda
  noSearchResult: 'Lo siento, no se encontraron resultados para "{ keyword }". Por favor, intenta con otra palabra clave.',
  searchResultNum: 'Se encontraron { searchResult } resultados',
  // Detalle de Promociones
  promoDetail: 'Detalles de la Promoción',
  // Club
  club: 'Club',
  tiers: 'Niveles',
  clubTips: 'Cada mes, tus recompensas se restablecerán. Asegúrate de reclamar tus recompensas antes de que termine el mes.',
  currentPoints: 'Monto de Apuesta Actual',
  currentPointsMultiplier: 'Multiplicador de Puntos Actuales',
  receiveReward: 'Obtener',
  alreadyReceived: 'Ya Reclamado',
  mergedReards: 'Se han acumulado recompensas para el próximo nivel y pueden reclamarse en conjunto',
  noReward: 'No hay recompensas por el momento. Alcanza el siguiente nivel para desbloquear tu primera recompensa.',
  // Club VIP
  vipClub: 'Club VIP',
  // Tienda de Puntos
  mallStore: 'Tienda de Puntos',
  // Configuración de la Cuenta
  generalInformation: 'Información General',
  changePassword: 'Cambiar Contraseña',
  googleAuthenticator: 'Autenticador de Google',
  privacySetting: 'Configuración de Privacidad',
  currentPwd: 'Contraseña Actual',
  newPwd: 'Nueva Contraseña',
  confirmPwd: 'Confirmar Contraseña',
  changePwdLimit: 'Para garantizar la seguridad de sus fondos, no podrá realizar retiros a una nueva dirección de billetera dentro de las 24 horas posteriores a la modificación de su contraseña.',
  disabledGoogle: 'Autenticador de Google desactivado',
  activeGoogle: 'Usa el Autenticador de Google para escanear el código QR o ingresar el código para activarlo.',
  whatGoogleCode: '¿Qué es el Autenticador de Google?',
  typeCode: 'Ingresa el Código',
  submitCode: 'Enviar Código',
  keyValue: 'Valor de Clave',
  // Notificaciones
  notice: 'Noticias',
  mail: 'Correo Interno',
  makeAllRead: 'Marcar Todos como Leídos',
  noMessage: 'No tienes ninguna notificación en este momento',
  // Recompensas
  claimReward: 'Promo Código',
  claimNewReward: 'Reclamar Nueva Recompensa',
  rewardCode: 'Código de Recompensa',
  claim: 'Reclamar',
  recentTransaction: 'Transacciones Recientes',
  // Búsqueda
  searchHolder: 'Juegos, Proveedores',
  searchMore: 'Buscar Más',
  searchRecommend: 'Recomendados para Ti',
  enter: 'Entrar',
  // Fondos
  fundAccount: 'Fondos de Cuenta',
  activeBalance: 'Saldo Activo',
  balance: 'Saldo',
  deposit: 'Depósito',
  buyCrypto: 'Comprar Cripto',
  withdraw: 'Retirar',
  youDepositAddress: 'Tu Dirección de Depósito',
  minDepositAmount: 'Monto Mínimo de Depósito',
  quickTips: 'Consejos Rápidos',
  quickTipCont: 'Asegúrate de usar siempre la dirección de depósito más reciente de nuestro cajero al realizar cualquier transferencia.',
  promoCode: 'Código de Promoción',
  currentBalance: 'Saldo Actual',
  myRewards: 'Mis Recompensas',
  transactionHistory: 'Historial de Transacciones',
  supportSettings: 'Soporte y Configuración',
  walletSettings: 'Configuración de Billetera',
  faq: 'Ayuda',
  liveSupport: 'Soporte en Vivo',
  chooseCrypto: 'Selecciona tu Moneda Preferida',
  cryptoCurrency: 'Criptomoneda',
  bank: 'Banco',
  chooseDepositChain: 'Selecciona la Red de Depósito',
  confirmDepositAddress: 'Confirma tu Dirección de Depósito antes de realizar la transacción.',
  recommendExchange: 'Compra criptomonedas en los exchanges recomendados.',
  // Historial de Transacciones
  deposits: 'Depósitos',
  withdrawals: 'Retiros',
  bets: 'Apuestas',
  wins: 'El Extra',
  currencyFilter: 'Filtrar por Moneda',
  dateFilter: 'Filtrar por Fecha',
  winLose: 'Ganar/Perder',
  nodata: 'No hay registros',
  // Configuración de Billetera
  currency: 'Moneda',
  btcUnit: 'Unidad de Bitcoin',
  // Retiros
  inputAmount: 'Ingrese el Monto',
  walletDetails: 'Detalles de la Billetera',
  walletDetailsBig: 'Detalles de la Billetera',
  waitingResults: 'Esperando Resultados',
  withdrawUsdt: 'Retiro {curreny}',
  amount: 'Monto',
  minWithdrawAmount: 'Monto Mínimo de Retiro',
  next: 'Siguiente',
  youWithdrawAddress: 'Tu Dirección de Retiro',
  payto: 'Pago a',
  checkWithdrawAddress: 'Por favor, verifica tu dirección de retiro antes de cada transacción.',
  previewWithdraw: 'Vista Previa de Retiro',
  confirmWithdrawInfo: 'Por favor, confirma que toda la información es correcta.',
  network: 'Red',
  withdrawing: 'Retirando',
  summary: 'Resumen',
  transactionType: 'Tipo de Transacción',
  finalBalance: 'Saldo Final',
  backToFund: 'Volver a Fondos',
  chooseWithdrawChain: 'Selecciona la Red de Retiro',
  confirmWithdrawAddress: 'Confirma tu Dirección de Retiro antes de realizar la transacción.',
  walletAddress: 'Dirección de Billetera',
  walletAddressBig: 'Dirección de Billetera',
  tradeStatus: { 1: 'No Completado', 2: 'Completado', 3: 'Eliminado' },
  // Inicio
  readMore: 'Leer Más',
  sports: 'Deportes',
  liveCasino: 'Casino en Vivo',
  slots: 'Máquinas Tragamonedas',
  sbSport: 'Deportes de Arena',
  fbSport: 'Deportes de Fútbol',
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
  globalPaymentSolutions: 'Soluciones Globales de Pago',
  otherPayment: 'Otros Métodos de Pago Populares',
  sportsBet: 'Apuestas Deportivas',
  liveCasinoBet: 'Apuestas en Casino en Vivo',
  slotBet: 'Apuestas en Máquinas Tragamonedas',
  more: 'Más',
  loadMore: 'Cargar Más',
  providers: 'Proveedores',
  allProviders: 'Todos los Proveedores',
  sortBy: 'Ordenar por',
  polular: 'Popularidad',
  promotions: 'Promociones',
  aboutUs: 'Acerca de Nosotros',
  selectLanguage: 'Selecciona Idioma',
  ruleTerms: 'Reglas y Términos',
  responsibleGambling: 'Juego Responsable',
  amlPolicy: 'Política AML',
  selfExclusion: 'Autoexclusión',
  privacyPolicy: 'Política de Privacidad',
  fairness: 'Equidad',
  game: 'Juego',
  followUs: 'Síguenos',
  language: 'Idioma',
  helpCenter: 'Centro de Ayuda',
  acceptCrypto: 'Aceptamos Criptomonedas',
  licencesSecurity: 'Licencias y Seguridad',
  gameBig: 'Juego',
  userBig: 'Usuario',
  payoutBig: 'Pago',
  betUser: 'Apuestas',
  multiplier: 'Multiplicador',
  paymentAmount: 'Monto de Pago',
  invisibility: 'Invisibilidad',
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
  // Tienda de Puntos
  points: 'Puntos',
  pointsNum: 'Cantidad de Puntos',
  earnPoints: 'Ganar Puntos',
  pointType: 'Tipo',
  spentPoints: 'Gastar Puntos',
  afterPoints: 'Puntos Después de Transacción',
  createTime: 'Fecha de Creación',
  pointsType: {
    '1': 'Apuestas',
    '2': 'Canje de Productos',
    '3': 'Promociones',
    '4': 'Adición del Sistema',
    '5': 'Deducción del Sistema',
    '6': 'Canje Cancelado'
  },
  // Proveedores de Juegos
  provider: {
    all: 'Todos',
    sabaSports: 'Saba Sports',
    btiSports: 'Seabet Sports',
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

  // Consejos de validación de datos
  tips: {
    // Usuario - Iniciar sesión y registrarse
    inputAccount: 'Ingrese el nombre de usuario',
    isAccount: 'El nombre de usuario debe tener entre 5 y 12 caracteres y comenzar con una letra',
    inputPassword: 'Ingrese la contraseña',
    isPwd: 'La contraseña debe tener entre 6 y 16 caracteres y contener números o letras',
    pwdNotMatch: 'Las contraseñas no coinciden',
    googleCode: 'El código de autenticación de Google debe tener 6 dígitos numéricos',
    loginFail: 'Fallo al iniciar sesión',
    inputEmail: 'Ingrese el correo electrónico',
    isEmail: 'Formato de correo electrónico incorrecto',
    inputEmailcapcha: 'Ingrese el código de verificación de correo electrónico',
    inputDay: 'Seleccione el día de nacimiento',
    inputMonth: 'Seleccione el mes de nacimiento',
    inputYear: 'Seleccione el año de nacimiento',
    inputCountryCode: 'Ingrese el código de país',
    inputphoneNumber: 'Ingrese el número de teléfono',
    inputAddress: 'Ingrese la dirección',
    inputZipCode: 'Ingrese el código postal',
    userNameExist: 'El nombre de usuario ya existe',
    emailExist: 'El correo electrónico ya existe',
    emailNotExist: 'El correo electrónico no existe',
    isAudit: 'Por favor, confirme que es mayor de edad y acepta la política de privacidad.',
    isAgree: 'Por favor, lea y acepte la información relevante sobre la campaña de marketing.',
    regSuccess: 'Registro exitoso',
    regFail: 'Fallo en el registro',
    loginSuccess: 'Inicio de sesión exitoso',
    sendSuccess: 'Envío exitoso',
    resetSuccess: 'Restablecimiento de contraseña exitoso, vuelva a iniciar sesión',
    resetFail: 'Fallo en el restablecimiento de contraseña',
    sendFail: 'Fallo en el envío',
    editUserInfoSuccess: 'Información de usuario editada con éxito',
    inputNewPwd: 'Ingrese la nueva contraseña',
    isNewPwd: 'La nueva contraseña debe tener entre 6 y 16 caracteres y contener números o letras',
    inputOldPwd: 'Ingrese la contraseña anterior',
    isOldPwd: 'La contraseña anterior debe tener entre 6 y 16 caracteres y contener números o letras',
    editPwdSuccess: 'Contraseña cambiada con éxito, vuelva a iniciar sesión',
    bindGoogleSuccess: 'Código de autenticación de Google vinculado con éxito',
    logoutSuccess: 'Cierre de sesión exitoso',
    setSuccess: 'Configuración exitosa',
    inputWithdrawAmount: 'Ingrese el monto a retirar',
    overMaxWithdrawAmount: 'El monto a retirar no puede ser mayor que el saldo',
    underMinWithdrawAmount: 'El monto a retirar debe ser mayor que el monto mínimo',
    inputWithdrawAddress: 'Ingrese la dirección de retiro',
    withdrawSuccess: 'Solicitud de retiro exitosa',
    withdrawFail: 'Fallo en la solicitud de retiro',
    receivedRewardSuccess: 'Recompensa recibida con éxito',
    receivedRewardFail: 'Fallo al recibir la recompensa',
    noLogin: 'Aún no ha iniciado sesión',
    goLogin: 'Ir al inicio de sesión ahora',
    invalidThirdUser: 'Fallo en la verificación del usuario de terceros',
    authFail: 'Fallo en la autorización',
    copySuccess: 'Copia exitosa',
    copyFail: 'Este navegador no admite la copia automática, copie manualmente',
    inputExhangeCode: 'Ingrese el código de intercambio',
    startGameFail: 'Fallo al iniciar el juego',
    insufficientPoints: 'Puntos insuficientes',
    exhangeSuccess: 'Intercambio exitoso',
    openWindow: 'La ventana se abrirá pronto para que juegues. ¡Te deseamos una experiencia de juego feliz!',
    openExchange: 'Está a punto de abrirse una nueva ventana para que ingreses al intercambio.',
    unBindGoogleSuccess: 'Google Authenticator ha sido desvinculado con éxito.',
    openExplorer: 'La ventana se abrirá para que consultes transacciones.',

    inputTrueName: 'Por favor, ingresa tu nombre',
    selectDocType: 'Haz clic para seleccionar el tipo de documento',
    inputDocType: 'Por favor, selecciona un tipo de documento',
    inputDdocNumber: 'Por favor, ingresa el número de identificación',
    inputPassportNo: 'Por favor, ingresa el número de identificación',
    airlineCompany: 'Por favor, ingresa la aerolínea',
    inputDeparture: 'Por favor, ingresa el lugar de partida',
    inputDestination: 'Por favor, ingresa el destino',
    inputHotelName: 'Por favor, ingresa el nombre del hotel',
    inputCity: 'Por favor, ingresa la ciudad donde se encuentra el hotel',
    inputCountry: 'Por favor, ingresa el país donde se encuentra el hotel',
    inputRoomNum: 'Por favor, ingresa el número de habitaciones de hotel',
    inputInRoomDay: 'Por favor, ingresa el número de días de estancia',
    betHolder: 'Hora de la apuesta',
    inputBetTime: 'Por favor, selecciona la hora de la apuesta',
    inputOrderId: 'Por favor, ingresa el número de boleto',
    orderNoholder: "Por favor, utiliza ',' para separar múltiples órdenes de apuesta.",
    applySuccess: 'Solicitud exitosa',
    applyFail: 'Solicitud fallida',
    pwdName: 'Tu nombre de usuario y tu contraseña deben ser diferentes'
  },

  rewardsBig: 'Recompensas',
  myStats: 'Mis Estadísticas',
  exclusiveRewards: 'Recompensas Exclusivas',
  quickBuys: 'Compras Rápidas',
  earned: 'Ganado',
  spent: 'Gastado',
  pointsHistory: 'Historial de Puntos',
  earnPointsAndTrack: 'Gane puntos y haga un seguimiento de ellos',
  viewPointsRecord: 'Ver todos los registros de consumo de puntos',
  buyNow: 'Comprar Ahora',
  youWillGet: 'Usted recibirá',
  bonusValue: 'Valor del Bono',
  wageringRequirement: 'Requisito de Apuesta',
  enableVisible: 'Habilitar Modo Invisible',
  hiddenYourBet: 'Sus apuestas no aparecerán en las actividades públicas ni en las vistas previas de apuestas',
  startNow: 'Iniciar Ahora',
  withdrawStatus: { 1: 'Procesando', 2: 'Completado', 3: 'Rechazado' },
  time: 'Tiempo',
  betAmount: 'Cantidad Apostad',
  support2: 'Soporte',
  btiSportIntro:
    'Con años de experiencia en la operación de plataformas deportivas, la plataforma de apuestas deportivas Seabet ofrece a los jugadores una experiencia de apuestas deportivas inmersiva y optimizada.',
  sabaSportIntro:
    'Verificado por diversas partes durante casi dos décadas, la plataforma de deportes Saba ofrece una amplia variedad de eventos deportivos, múltiples tipos de apuestas innovadoras y cuotas líderes en la industria.',
  fundRecord: 'Historial de transacciones',
  categoryFilter: 'FILTRAR POR CATEGORÍA',
  fundCategory: {
    1: 'Depósito',
    2: 'Retirada',
    3: 'Apuesta',
    4: 'Liquidación',
    5: 'Depósito del Sistema',
    6: 'Deducción del Sistema',
    7: 'Regalo Promocional',
    8: 'Reembolso',
    9: 'Recompensas VIP',
    10: 'Intercambiar Bienes',
    17: 'Fallo en Retirada'
  },
  beforeBalance: 'Antes del cambio',
  afterBalance: 'Después del cambio',
  tradeDetails: 'Detalles de la transacción',
  tradeNo: 'Número de pedido',
  orderStatus: 'Estado del pedido',
  orderType: 'Tipo de pedido',
  orderTypes: { 1: 'Depósito', 2: 'Retiro', 3: 'Apuesta', 4: 'Ganancia' },
  blockChain: 'Cadena de bloques',
  betAndEarn: 'Apuesta y Gana',
  placeAndEarn: 'Apostar y Ganar',
  spinAndEarn: 'Girar y Ganar',
  enabledGoogle: 'Google Authenticator está habilitado',
  stopGoogle: 'Google Authenticator está habilitado, si desea desactivar esta función, ingrese el código y haga clic en "Enviar código" para cerrar！',
  unlockNewReward: '¡Se han desbloqueado nuevas recompensas!',
  unlockNewRewardTip: '¡Felicidades! Acabas de desbloquear una nueva recompensa. Haga clic aquí para seleccionar su tipo de premio',
  dymondReward: 'Sus recompensas se desbloquearán cuando alcance este nivel',
  siteTitle: 'Mejor sitio de apuestas deportivas y casino de criptomonedas | Apuestas de Bitcoin',
  unlockAllReward: '¡Felicidades! Has desbloqueado todas las recompensas.',
  newGame: 'Nuevo juego',
  oneDay: '24 horas',
  week: 'Semana',
  moreGame: 'Más juegos',
  question: 'Preguntas frecuentes',
  status: 'Estado',
  tradeCode: 'Código de transacción',
  copyTradeCode: 'Copiar código de transacción',
  realName: 'Nombre',
  sex: 'Género',
  male: 'Hombre',
  female: 'Mujer',
  documentType: 'Tipo de documento',
  documentNumber: 'Número de documento',
  airlineCompany: 'Aerolínea',
  placeOfDeparture: 'Lugar de salida',
  destination: 'Destino',
  onewayOrRoundtrip: 'Viaje de ida y vuelta',
  oneway: 'Viaje de ida',
  roundtrip: 'Viaje de ida y vuelta',
  engineroomType: 'Clase de vuelo',
  economyClass: 'Clase económica',
  businessClass: 'Clase ejecutiva',
  firstClass: 'Primera clase',
  submit: 'Enviar',
  hotelName: 'Nombre del hotel',
  city: 'Ciudad',
  roomType: 'Tipo de habitación',
  presidentialSuite: 'Suite Presidencial',
  luxurySuite: 'Suite de lujo',
  businessSuite: 'Suite Ejecutiva',
  roomNum: 'Número de habitaciones',
  roomDay: 'Días de estancia',
  otherService: 'Otros servicios',
  idCard: 'Carné de identidad',
  passport: 'Pasaporte',
  militaryId: 'Carné militar',
  diplomaticCard: 'Pasaporte diplomático',
  moonpayExchange: 'Comprar criptomonedas con tarjeta de crédito/débito',
  learnMore: 'Más información',
  comingSoon: 'próximamente...',
  affiliate: 'Afiliado',
  rewardActivities: 'Atividades',
  rewardRecords: 'Registros',
  applyPromo: 'Aplicar recompensas',
  rewardStatus: { 0: 'Procesando', 1: 'Aprobado', 2: 'Rechazado' },
  betTime: 'Hora de la apuesta',
  betOrderNo: 'Número de pedido de apuesta',
  startEarning: 'para empezar a ganar',
  historyType: 'Tipo',
  rewardName: 'Nombre de la recompensa',
  startTime: 'Hora de inicio',
  endTime: 'Hora de finalizació',
  minMaxBet: 'Apuesta mínima-máxima',
  volatility: 'Volatilidad',
  volatilitys: { 1: 'Baja', 2: 'Baja-Media', 3: 'Media', 4: 'Media-Alta', 5: 'Alta', 6: 'Muy alta', 7: 'Muy baja' },
  myPoints: 'Mis Puntos',
  backPromo: 'Volver a promociones',
  noSupportFullScreen: 'Tu navegador no admite pantalla completa',
  pointsExchange: 'Intercambio',
  view: 'Más',
  oprate: 'Ver',
  remain: 'Restante',
  directlyLogin: 'O Inicie sesión directamente',
  fastDeposit: 'Depositar ahora',
  demoMode: 'Juego de prueba',
  trueMode: 'Apostar ahora',
  gameStatic: 'Estadísticas del juego',
  receivedSuccess: '{ amount } USDT Recibido exitosamente',
  goTime: 'Hora de salida',
  backTime: 'Hora de llegada',
  inTime: 'Hora de registro en el hotel',
  outTime: 'Hora de salida del hotel',
  sabaSportDesc: {
    0: 'Todos los eventos deportivos',
    1: 'Compatible con todos los dispositivos digitales',
    2: 'Encriptación de seguridad',
    3: 'Cuotas en tiempo real',
    4: 'Backend independiente'
  },
  seabetSportDesc: {
    0: 'Desarrollado de forma independiente',
    1: 'Las mejores cuotas',
    2: 'Personalizar la interfaz de apuestas',
    3: 'Liquidación precisa',
    4: 'Cientos de opciones de apuestas'
  },
  pickDate: 'Seleccionar Fecha',
  inputGotime: 'Por favor, seleccione la hora de salida',
  inputBacktime: 'Por favor, seleccione la hora de regreso',
  inputInTime: 'Por favor, seleccione la hora de check-in',
  inputOutTime: 'Por favor, seleccione la hora de check-out',
  hotelTimeError: 'La hora de check-out no puede ser anterior a la hora de check-in',
  ticketTimeError: 'La hora de regreso no puede ser anterior a la hora de salida',
  countryHolder: 'Código de País',
  numberHolder: 'Número de Teléfono',
  submitInfoSuccess: 'Sus datos se han enviado correctamente',
  back: 'Devolver',
  countryCode: 'Código de país',
  remainTime: 'Tiempo restante',
  upgrading: 'Actualización del sistema en curso',
  upgradingTxt: 'El sistema se encuentra en proceso de actualización. Pedimos disculpas por cualquier inconveniente y agradecemos su comprensión.',
  favariateGame: 'Favoritos',
  recentlyGame: 'Jugado recientemente',
  downloadTitle: 'Seabet.io Progressive Web App!',
  downloadDesc:
    'Bienvenido a nuestra nueva aplicación Seabet.io! A continuación, tenemos instrucciones paso a paso para instalar la aplicación de Android y la Progressive Web App (PWA) de iOS. ¡Disfruta de la diversión, la rapidez y la equidad en cualquier momento y en cualquier lugar!',
  step: 'Paso',
  clickSave: `Toca el botón “Compartir”en la barra de herramientas`,
  addDesk: `Selecciona“Agregar a la pantalla de inicio” en el menú`,
  clickAdd: `Haz clic en “Agregar" ¡La instalación está lista`,
  iosFinish: `Inicia la aplicación SEABET.IO desde la pantalla de inicio de tu dispositivo iOS`,
  finishedDown: 'El acceso directo ahora está en tu pantalla de inicio.',
  addToDesk: 'En el navegador, selecciona "Agregar página a"',
  clickDesk: 'Toca "Pantalla de inicio"',
  clickAddAndroid: 'Haz clic en "Agregar"',
  hitratio: 'Relación de aciertos',
  paylines: 'Paylines',
  nopwd: 'Tu cuenta está registrada a través de las redes sociales. No hay opción de contraseña.',

  problem: {
    whatVip: '1.¿Qué es el Club VIP?',
    whatVips: `<p>El Club VIP de seabet.io es una comunidad exclusiva abierta a los clientes que utilizan criptomonedas, que les permite disfrutar de todas las actividades promocionales disponibles en el sitio web en cualquier momento. Cada apuesta, giro y juego que realices acumulará puntos, lo que te permitirá subir de nivel gradualmente en el club y desbloquear emocionantes recompensas en el camino. A medida que desbloquees niveles VIP, también ganarás puntos de apuesta de Seabet, lo que te proporcionará experiencias y servicios aún más gratificantes.</p>
                <p>En términos sencillos, significa: Tú juegas y nosotros te recompensamos.</p>`,
    howGetIntegrial: '2.Cómo ganar puntos？',
    howGetIntegrials: `Ganas puntos del club con cada apuesta que realices, cada giro de la máquina tragamonedas y cada juego de mesa en el que participes. Cuantos más puntos acumules, mayor será tu nivel. A medida que avances en los rangos, desbloquearás una variedad de recompensas emocionantes. Las recompensas irán mejorando a medida que sigas desbloqueando nuevos niveles.`,
    whatVipLevel: '3.¿Qué son los niveles VIP?',
    whatVipLevels: `<p>Los niveles VIP determinan el valor y el tipo de recompensas que puedes reclamar. A medida que avanzas en el club y subes de nivel, tus recompensas también aumentarán.</p>
                      <table>
                      <tr>
                        <th>Nivel VIP</th>
                        <th>Cantidad de Apuesta Requerida</th>
                        <th>Frecuencia</th>
                      </tr>
                      <tr>
                        <td>Bronce</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Plata</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Oro</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Platino</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Titanio</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Diamante</td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.¿Cómo se calculan los puntos?',
    howComputeInterials: `<pYa sea en apuestas deportivas o jugando juegos de casino, el uso de criptomonedas te permitirá ganar puntos. Para calcular los puntos que ganas con cada apuesta, convertimos la cantidad de tu apuesta a USDT utilizando la tasa de cambio de mercado en tiempo real durante la liquidación. Esto asegura que todas las acumulaciones de puntos, independientemente de la criptomoneda utilizada, sean justas. Debido a las fluctuaciones en las tasas de conversión, seguimos el principio de redondear al número entero más cercano al calcular los puntos.</p>
                          <p>La fórmula para ganar puntos Seabet es: Cantidad apostada por el jugador * 0.01 * coeficiente de puntos del nivel correspondiente. Por ejemplo, si un jugador está en el nivel Platino y apuesta 5000, según la fórmula de cálculo de puntos, el jugador ganará 5000 * 0.01 * 1.3 = 65 puntos. Los puntos Seabet tienen una amplia variedad de usos, y los jugadores pueden canjear regalos y servicios equivalentes en la tienda de puntos.</p>`,
    whyMergedReward: '5.¿Por qué se combinan mis recompensas?',
    whyMergedRewards: `<p>Tus recompensas se combinan porque una sola apuesta puede desbloquear múltiples recompensas. Para hacértelo más conveniente, sumamos el valor de las recompensas y las mostramos como una única recompensa.</p>`,
    resetVip: '6.¿Cuándo se reiniciará mi nivel VIP?',
    resetVips: `<p>Tu nivel VIP se reiniciará a 0 al comienzo de cada mes. Luego podrás comenzar nuevamente desde el nivel Bronce y reclamar todas las recompensas del siguiente nivel. Tus puntos acumulados seguirán conservándose para que puedas canjear más recompensas y servicios.</p>`,
    everyGetInterial: '7.¿Puedo ganar puntos del club con cada apuesta?',
    everyGetInterials: `<p>No, los puntos del club solo se acumulan al realizar apuestas con dinero real. Además, ciertas categorías de eventos y juegos no están incluidas en el club, por lo que las apuestas realizadas en ellas no te otorgarán puntos. Estas categorías incluyen:</p>
                        <p>Carreras de caballos</p>
                        <p>Deportes electrónicos</p>
                        <p>Masters de apuestas deportivas</p>
                        <p>Además, los siguientes juegos de casino tampoco están incluidos en el club y las apuestas realizadas en ellos no te otorgarán puntos.</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: '¿Cómo hago un depósito?',
    a1: `<p>1. Selecciona la criptomoneda de tu elección, luego haz clic en Depositar.</p>
        <p>2. Copia la dirección de depósito único y utilícela en tu billetera (o escanee el código QR).</p>
        <p>3. Una vez que se confirme tu transacción, recibirá una notificación.</p>`,
    q2: '¿Cómo hago un retiro?',
    a2: `<p>1. Elige la criptomoneda que te gustaría retirar, luego haz clic en Retirar.</p>
        <p>2. Ingresa la cantidad que deseas retirar.</p>
        <p>3. Ingresa la dirección de tu billetera.</p>
        <p>4. Haz clic en el botón Retirar.</p>`,
    q3: '¿Cuánto tardan los depósitos/retiros?',
    a3: `<p>Depósito</p>
        <p>La mayoría de los depósitos criptográficos se procesan a la velocidad del rayo. Sin embargo, puede haber algunos retrasos de los servicios de terceros. Para los depósitos de BTCXE, tu transacción puede tardar hasta 30 minutos en procesarse debido al tiempo necesario para la conversión de fondos fiduciarios a BTC.</p>
        <p>Retiro</p>
        <p>La mayoría de los retiros se procesan instantáneamente. En el caso de grandes retiros, procesamos estos retiros manualmente, por lo que puede haber un ligero retraso.</p>`,
    q4: '¿Qué monedas y métodos de pago ofrecen?',
    a4: `Las opciones de moneda disponibles en seabet.io son:
          <p>• @:currencyLang.usdt </p>
          <p>• @:currencyLang.btc </p>
          <p>• @:currencyLang.eth </p>
          <p>• @:currencyLang.usdt </p>
          <p>• @:currencyLang.busd </p>
          <p>• @:currencyLang.trx </p>
          <p>• @:currencyLang.xrp </p>
          <p>• @:currencyLang.bnb </p>
          <p>• @:currencyLang.ltc </p>
          <p>• @:currencyLang.ada </p>
          <p>• @:currencyLang.doge </p>
          <p>• @:currencyLang.ton </p>`,
    q5: '¿Aplican comisiones en las transacciones?',
    a5: `<p>Si bien no aplicamos ninguna tarifa de transacción para depósitos y retiros en Seabet.io, puede haber tarifas de transacción que deba pagar al usar la cadena de bloques y/o su banco.</p>`
  },

  errorCodes: {
    1001: 'El registro no existe',
    1002: 'La actividad está cerrada',
    1003: 'Los datos ya existen',
    1004: 'Error en los datos',
    1005: 'Error en el parámetro',
    1006: 'No ha cumplido con los requisitos para reclamar',
    1007: 'Ya ha enviado la solicitud de promoción hoy',
    1008: 'La promoción ha expirado',
    1009: 'Ya ha reclamado esta promoción',
    1010: 'No existen órdenes de depósito que cumplan los requisitos',
    1011: 'La cantidad del depósito no cumple con los requisitos para reclamar',
    1012: 'El código de verificación de Google es incorrecto',
    1013: 'Todavía necesita completar {data} USD en apuestas válidas para hacer un retiro',
    1014: 'El nombre de usuario ya existe',
    1015: 'El número de teléfono ya existe',
    1016: 'La dirección de correo electrónico ya existe',
    1017: 'Formato de nombre de usuario incorrecto',
    1018: 'Formato de contraseña incorrecto',
    1019: 'Código de verificación incorrecto',
    1020: 'El sistema está ocupado, por favor inténtelo de nuevo más tarde',
    1021: 'Error de firma',
    1022: 'Su cuenta ha sido deshabilitada, por favor contacte con el servicio de atención al cliente',
    1023: 'Nombre de usuario o contraseña incorrectos',
    1024: 'La cuenta está bloqueada',
    1025: 'La autenticación de Google ya está vinculada',
    1026: 'La autenticación de Google no está vinculada',
    1027: 'La contraseña actual es incorrecta',
    1028: 'Formato incorrecto de dirección de correo electrónico',
    1029: 'Fallo al enviar el correo electrónico',
    1030: 'Cantidad de producto insuficiente',
    1031: 'Puntos disponibles insuficientes',
    1101: 'Saldo disponible insuficiente',
    1032: 'Para garantizar la seguridad de sus fondos, después de cambiar su contraseña, no podrá realizar retiros durante 24 horas.',
    1033: 'El código de verificación por correo electrónico es incorrecto',
    1035: 'Juego en mantenimiento'
  },

  // Términos y Contenidos HTML
  html: {
    // Títulos HTML
    vipTitle: 'Club VIP',
    rulesTitle: 'Reglas y Términos',
    responsibleTitle: 'Juego Responsable',
    amlTitle: 'Política de Prevención de Lavado de Dinero',
    selfExclusionTitle: 'Autoexclusión',
    privacyTitle: 'Política de Privacidad',
    fairnessTitle: 'Equidad',

    // Contenido HTML
    vipContent: `<div class="vip-clubhouse-box">
                  <div class="vc-rows">
                    <div class="vr-title">1.Introducción al Club VIP</div>
                    <div class="vr-conts">
                      <p>¡Bienvenido al Club VIP de Seabet!</p>
                      <p>En Seabet, estamos comprometidos a mejorar la calidad del juego y brindar la mejor experiencia de juego. Estamos emocionados de presentar nuestro nuevo Club VIP, diseñado para recompensar a nuestros miembros leales que pasan tiempo jugando en nuestro sitio web.</p>
                      <p>Simplemente realiza apuestas en cualquier juego o evento deportivo proporcionado por Seabet.io para desbloquear recompensas exclusivas a medida que avanzas en los niveles.</p>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">2.Servicio Personalizado</div>
                    <div class="vr-conts">
                      <p>Nuestro equipo profesional de Gerentes de Atención al Cliente se asegura de cubrir todas tus necesidades y cumplir con los más altos estándares de la industria. Los miembros VIP pueden disfrutar de bonificaciones exclusivas, invitaciones a eventos de renombre y una variedad de recompensas personalizadas para brindarte experiencias de juego rápidas, agradables y eficientes.</p>
                      <dl>
                        <dt>VGerente Exclusivo VIP:</dt>
                        <dd>Comprometido en atender tus necesidades</dd>
                        <dd>Experiencias de juego privadas diseñadas especialmente para ti</dd>
                      </dl>
                      <dl>
                        <dt>Recompensas Generosas:</dt>
                        <dd>Ofertas exclusivas diseñadas para ti</dd>
                        <dd>Bonos sin requisito de apuesta</dd>
                        <dd>Acumulación rápida de puntos</dd>
                      </dl>
                      <dl>
                        <dt>Límites de Apuesta Más Altos de la Industria:</dt>
                        <dd>Unlimited daily deposits and withdrawals with cryptocurrencies</dd>
                      </dl>
                      <dl>
                        <dt>Promociones Exclusivas VIP:</dt>
                        <dd>Distinguished from regular member promotions</dd>
                        <dd>Preserve the best gaming experience for you</dd>
                        <dd>Exclusive to VIP users</dd>
                        <dd>Personalized offers</dd>
                        <dd>Customized entertainment services exclusively for you</dd>
                      </dl>
                      <dl>
                        <dt>24/7 Priority Service：</dt>
                        <dd>Sin necesidad de hacer fila ni esperar</dd>
                        <dd>Tus necesidades son nuestra principal prioridad</dd>
                        <dd>Múltiples métodos de contacto en redes sociales, gerentes de atención al cliente dedicados que ofrecen servicios en línea.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">3.Estructura de Niveles</div>
                    <div class="vr-conts">
                      <p>Seis niveles VIP que cubren de manera integral todo tu viaje de juego:</p>
                      <dl>
                        <dd>Bronce: Bronce 1</dd>
                        <dd>Plata: Plata 1 - Plata 5</dd>
                        <dd>Oro: Oro 1 - Oro 8</dd>
                        <dd>Platino: Platino 1 - Platino 10</dd>
                        <dd>Titanio: Titanio 1 - Titanio 10</dd>
                        <dd>Diamante: Diamante 1 - Diamante 6</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">4.Beneficios para los Miembros del Club VIP</div>
                    <div class="vr-conts">
                      <dl>
                        <dd>Bonificaciones al Subir de Nivel: Recibe bonificaciones al alcanzar el siguiente nivel. Cuanto más alto sea el nivel que alcances, mayor será la bonificación.</dd>
                        <dd>Ofertas Exclusivas Personalizadas: ¿No estás interesado en las promociones regulares? No hay problema. Una vez que llegues al nivel VIP correspondiente, adaptaremos ofertas especialmente diseñadas según tus intereses, exclusivamente para ti.</dd>
                        <dd>Experiencia de Entretenimiento Personalizada: Ya sea en eventos deportivos importantes, conciertos, espectáculos de música o un viaje de lujo, como miembro VIP senior, todos tus gastos personales serán cubiertos por Seabet, y organizaremos tu itinerario.</dd>
                        <dd>Servicio VIP Exclusivo: Se te asignará un representante de servicio VIP dedicado que apoyará y satisfará tus necesidades de apuestas.</dd>
                        <dd>Acumulación más Rápida de Puntos: Los niveles VIP acumulan puntos a una velocidad más rápida en comparación con los miembros regulares. Los niveles más altos acumulan más puntos, lo que conduce a una amplia gama de premios para canjear.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">5.Cómo Convertirse en Miembro VIP</div>
                    <div class="vr-conts">
                      <dl>
                        <dd>
                        Sigue Apostando: La clave para convertirse en VIP es apostar de manera constante en diversos eventos deportivos y juegos de casino. Seabet recompensa tu consistencia. Como uno de los principales sitios de apuestas con criptomonedas, utiliza regularmente tus activos digitales para realizar apuestas en cualquier evento deportivo y juegos de casino ofrecidos por Seabet. También puedes probar a apostar con USDT y seguir utilizando tus fondos.
                        </dd>
                        <dd>
                        Participa en Eventos Regulares: Las actividades promocionales de Seabet incluyen varios eventos y competiciones en los que puedes participar en cualquier momento. La participación regular en cualquiera de estos eventos aumentará tus posibilidades de recibir una invitación al Club VIP. Además, puedes ser más activo en otras funciones del club ofrecidas por Seabet.
                        </dd>
                        <dd>
                        Espera la Invitación: Lo último que debes hacer es esperar a que te enviemos una invitación. Continúa jugando y participando en eventos de alto nivel. Después de algunas rondas de juegos de casino y apuestas deportivas, una vez que se te considere digno de convertirte en miembro del Club VIP, recibirás una invitación de inmediato.
                        </dd>
                        <dd>
                          Experimenta la Vida de Lujo como VIP de Seabet: Lleva tu experiencia de apuestas con USDT a un nivel completamente nuevo mientras disfrutas de privilegios de primer nivel como miembro del Club VIP de Seabet. Como jugador valorado, experimentarás la mejor diversión, apuestas rápidas y justas al participar en apuestas deportivas y juegos de casino.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>`,
    rulesContent: `<div>
                      <p>Términos y Condiciones</p>
                      <h3>1. SEABET. IO</h3>
                      <h3>2. AVISO IMPORTANTE</h3>
                      <p><b>2.1</b> AL REGISTRARSE EN  WWW.SEABET.IO  (EL "SITIO WEB"), USTED CELEBRA UN CONTRATO Y ACEPTA ESTAR SUJETO A: </p>
                      <p>(I) ESTOS TÉRMINOS Y CONDICIONES; </p>
                      <p>(II) NUESTRA POLÍTICA DE PRIVACIDAD; </p>
                      <p>(III) NUESTRA POLÍTICA DE COOKIES Y </p>
                      <p>(IV) LAS REGLAS APLICABLES A NUESTROS PRODUCTOS DE APUESTAS O JUEGOS COMO SE MENCIONA EN ESTOS TÉRMINOS Y CONDICIONES ("TÉRMINOS Y CONDICIONES" O "ACUERDO"), Y LAS REGLAS ESPECÍFICAS DE APUESTAS Y / O JUEGOS, Y SE CONSIDERA QUE HAN ACEPTADO Y ENTENDIDO TODOS LOS TÉRMINOS.</p>

                      <p><b>2.2</b> LEA ATENTAMENTE ESTE ACUERDO PARA ASEGURARSE DE QUE COMPRENDE COMPLETAMENTE SU CONTENIDO. SI TIENE ALGUNA DUDA SOBRE SUS DERECHOS Y OBLIGACIONES RESULTANTES DE LA ACEPTACIÓN DE ESTE ACUERDO, CONSULTE A UN ASESOR LEGAL EN SU JURISDICCIÓN ANTES DE SEGUIR UTILIZANDO EL (LOS) SITIO (S) WEB Y ACCEDER A SU CONTENIDO. SI NO ACEPTA LOS TÉRMINOS, NO UTILICE, VISITE NI ACCEDA A NINGUNA PARTE (INCLUIDOS, ENTRE OTROS, SUBDOMINIOS, CÓDIGO FUENTE Y / O API DEL SITIO WEB, YA SEAN VISIBLES O NO) DEL SITIO WEB.</p>
                      <h3>3. GENERALIDADES</h3>
                      <p><b>3.1</b> Al registrarse en www. Seabet.io.</p>
                      <p> Usted ("Usted", "Su", "Usted mismo" o el "Jugador" indistintamente) celebra un acuerdo con Seabet.</p>
                      <p><b>3.2</b> Usted debe leer este Acuerdo en su totalidad antes de utilizar el servicio o los productos de Seabet. Tenga en cuenta que el Acuerdo constituye un acuerdo legalmente vinculante entre usted y Seabet.</p>
                      <p><b>3.3</b> Estos Términos y Condiciones  entrarán en vigor tan pronto como complete el proceso de registro, lo que incluye marcar la casilla de aceptación de estos Términos y Condiciones y crear una cuenta con éxito. Al utilizar cualquier parte del sitio web después de la creación de la cuenta, usted acepta estos Términos y condiciones que se aplican al uso del sitio web.</p>
                      <p><b>3.4</b> Tenemos derecho a realizar modificaciones a estos Términos y Condiciones en cualquier momento y sin previo aviso. Si realizamos dichas modificaciones, podemos tomar las medidas apropiadas para llamar su atención sobre dichos cambios (como por correo electrónico o colocar un aviso en una posición destacada en el sitio web, junto con los términos y condiciones modificados), pero será su exclusiva responsabilidad verificar si hay enmiendas, actualizaciones y / o modificaciones. Su uso continuado de los servicios del sitio web después de cualquier modificación a los Términos y Condiciones se considerará como su aceptación y acuerdo de estar sujeto a dichas enmiendas, actualizaciones y / o modificaciones.</p>
                      <p><b>3.5</b> Los términos de estos Términos y Condiciones  prevalecerán en caso de conflicto entre los términos de estos Términos y Condiciones y de cualquiera de las reglas del juego u otros documentos mencionados en estos Términos y Condiciones.</p>
                      <p><b>3.6</b> Estos Términos y Condiciones pueden publicarse en varios idiomas con fines informativos y de fácil acceso por parte de los jugadores. La versión en inglés es la única base legal de la relación entre usted y nosotros y, en caso de discrepancia con respecto a una traducción de cualquier tipo, prevalecerá la versión en inglés de estos Términos y condiciones.</p>

                      <h3>4. CUENTA SEABET</h3>
                      <p>Registro</p>
                      <p><b>4.1</b> Para que pueda realizar apuestas en Seabet.io, primero debe registrar personalmente una cuenta con nosotros ("Cuenta Seabet").</p>
                      <p><b>4.2</b> Para que una persona se registre como jugador en Seabet y utilice el Sitio web, esa persona debe presentar una solicitud de registro y apertura de una cuenta Seabet. La solicitud para la apertura de la Cuenta Seabet debe enviarse personalmente, y requerirá que Usted proporcione un conjunto de información personal, a saber, correo electrónico, nombre completo, fecha de nacimiento, dirección, etc.</p>
                      <p><b>4.3</b> Cuando la información estipulada  en <b>4.2</b>. no se proporcione y/o no se considere completa, precisa o actualizada en cualquier momento, Seabet se reserva el derecho de suspender el registro de la Cuenta Seabet y tratar cualquier depósito posterior potencialmente aceptado en la Cuenta Seabet del Jugador como inválido (y cualquier ganancia derivada de dicho depósito como nula). Cuando se suspenda una cuenta de Seabet, debe ponerse en contacto con el servicio de atención al cliente en (support{'@'}Seabet.io).</p>
                      <p><b>4.4</b> Todos los solicitantes deben tener 18 años o cualquier otra mayoría de edad legal según lo determinado por las leyes que le sean aplicables, la edad que sea mayor o mayor. Seabet se reserva el derecho de solicitar una prueba de edad a cualquier Jugador y suspender su Cuenta Seabet hasta que se proporcione documentación satisfactoria. Seabet se toma muy en serio sus responsabilidades con respecto a los menores de edad y el juego responsable.</p>
                      <p><b>4.5</b> Seabet no aceptará el registro de individuos:</p>
                      <p>a) Menores de 18 años o menores de la mayoría de edad legal o juegos de azar en su jurisdicción;</p>
                      <p>b) Residir en jurisdicciones desde donde sea ilegal o no se permita el juego. Seabet no puede verificar la legalidad del Servicio en cada jurisdicción y es responsabilidad del Usuario asegurarse de que su uso del Servicio sea legal;</p>
                      <p>c) Proporcionar información engañosa o intentar pasar por terceros.</p>
                      <p><b>4.6</b> Seabet se reserva el derecho de rechazar cualquier solicitud de una Cuenta Seabet, a su entera discreción.</p>

                      <p>Conozca a su cliente</p>
                      <p><b>4.7</b> Usted declara y garantiza que cualquier información proporcionada por usted en su formulario de solicitud es verdadera, actualizada y correcta.</p>
                      <p><b>4.8</b> Seabet se reserva el derecho, en cualquier momento, de solicitar cualquier documentación KYC que considere necesaria para determinar la identidad y ubicación de un Jugador. Seabet se reserva el derecho de restringir el Servicio, el pago o el retiro hasta que la identidad esté suficientemente determinada, o por cualquier otro motivo a discreción exclusiva de Seabet. Seabet también se reserva el derecho de divulgar la información de un Jugador según corresponda para cumplir con un proceso legal o según lo permita la política de privacidad de Seabet (propietario y operador de Seabet), y al utilizar el Servicio, usted reconoce y acepta la posibilidad de dicha divulgación.</p>

                      <p>Cuentas múltiples</p>
                      <p><b>4.9</b> Solo se permite una cuenta Seabet por jugador. En caso de que intente o abra con éxito más de una Cuenta Seabet, bajo Su propio nombre o bajo cualquier otro nombre, o si intenta o logra utilizar el Sitio web a través de la Cuenta Seabet de cualquier otra persona, Seabet tendrá derecho a cerrar inmediatamente todas Sus Cuentas Seabet, retener todo el dinero en dichas Cuentas Seabet y prohibirle el uso futuro del Sitio web.</p>
                      <p><b>4.10</b> En caso de que Seabet tenga motivos para creer que Usted ha registrado y/o utilizado más de una Cuenta Seabet, o se ha confabulado con una o más personas que utilizan varias Cuentas Seabet diferentes, Seabet tendrá derecho a considerar que dichas cuentas constituyen varias Cuentas Seabet y suspender o cerrar todas esas Cuentas Seabet. Seabet también tendrá derecho a retener los fondos hasta que el Jugador demuestre que no intentó crear varias cuentas.</p>
                      <p><b>4.11</b> Si observa que tiene más de una Cuenta Seabet registrada, debe notificárnoslo inmediatamente. De lo contrario, su cuenta de Seabet puede ser bloqueada y los fondos retenidos.</p>

                      <p>Responsabilidad del usuario</p>
                      <p><b>4.12</b> Es su única y exclusiva responsabilidad asegurarse de que sus datos de inicio de sesión se mantengan de forma segura. No debe revelar sus datos de inicio de sesión a nadie.</p>
                      <p><b>4.13</b> No somos responsables de ningún abuso o mal uso de su Cuenta Seabet por parte de terceros debido a su divulgación, ya sea intencional, accidental, activa o pasiva, de sus datos de inicio de sesión a terceros.</p>
                      <p><b>4.14</b> Se le prohíbe vender, transferir o adquirir Cuentas Seabet a o de otros Jugadores.</p>
                      <p><b>4.15</b> Nos informará tan pronto como tenga conocimiento de cualquier error con respecto a su cuenta o cualquier cálculo con respecto a cualquier apuesta que haya realizado. Nos reservamos el derecho de declarar nula e inválida cualquier apuesta que esté sujeta a dicho error.</p>
                      <p><b>4.16</b> Usted es responsable de todas las actividades que ocurran bajo su cuenta.</p>

                      <p>Características de seguridad</p>
                      <p><b>4.17</b> Le recomendamos que habilite la autenticación de dos factores para mejorar la seguridad de su cuenta.</p>
                      <p><b>4.18</b> Podemos proporcionar otras medidas de seguridad de vez en cuando, y le recomendamos que las utilice.</p>


                      <p>Suspensión y cierre por parte de Seabet</p>
                      <p><b>4.19</b> Seabet tendrá derecho a cerrar o suspender Su Cuenta Seabet si:</p>
                      <p>a) Seabet considera que Usted está utilizando o ha utilizado el Sitio web de manera fraudulenta o colusoria o con fines ilegales y/o ilegales o indebidos;</p>
                      <p>b) Seabet considera que está utilizando o ha utilizado el Sitio web de manera desleal, ha engañado deliberadamente o se ha aprovechado injustamente de Seabet o de cualquiera de sus clientes o si Su Cuenta Seabet se está utilizando en beneficio de un tercero;</p>
                      <p>c) Seabet es solicitado a Seabet para que lo haga por la policía, cualquier autoridad reguladora o tribunal o si Seabet no puede verificar su identidad, profesión o fuente de fondos como lo requieren expresamente las regulaciones aplicables;</p>
                      <p>d) Usted incumple estos Términos y Condiciones, las regulaciones aplicables o el uso justo de nuestros servicios, o Seabet tiene preocupaciones de que Usted es un jugador problemático compulsivo sin ser autoexcluido;</p>
                      <p>e) Seabet considera que cualquiera de los eventos mencionados en (a) a (e) anteriores puede haber ocurrido o es probable que ocurra.</p>
                      <p><b>4.20</b> Si Seabet  cierra o suspende Su Cuenta Seabet por cualquiera de los motivos mencionados  en <b>4.15</b>, Usted será, en la medida en que lo permitan las leyes aplicables, responsable de todas y cada una de las reclamaciones, pérdidas directas, responsabilidades, daños, costes y gastos incurridos o sufridos por Seabet (en conjunto, las "Reclamaciones") que surjan de ello y, en la medida permitida por las leyes aplicables,  indemnizar y eximir de responsabilidad a Seabet a petición de tales reclamaciones.</p>
                      <p><b>4.21</b> En las circunstancias mencionadas  en <b>4.15</b>, Seabet también tendrá derecho a anular cualquier apuesta realizada por Usted después de dichas acciones por Usted o a retener y/o retener todos y cada uno de los importes que de otro modo se le habrían pagado o pagadero (incluidas las ganancias) en la medida permitida por la ley.</p>
                      <p><b>4.22</b> Nos reservamos el derecho de suspender o cancelar su cuenta en cualquier momento, con o sin previo aviso, si sospechamos que su cuenta se ha visto comprometida o se está utilizando en incumplimiento de nuestros Términos de servicio.</p>
                      <p><b>4.23</b> Si Seabet cierra Su Cuenta Seabet  , le informará de los medios disponibles para retirar el saldo restante en Su Cuenta Seabet.</p>

                      <p>Nuestra responsabilidad</p>
                      <p><b>4.24</b> No asumimos ninguna responsabilidad por cualquier pérdida o daño que pueda sufrir como resultado del acceso no autorizado a su cuenta.</p>
                      <p><b>4.25</b> No asumimos ninguna responsabilidad por cualquier pérdida o daño que pueda sufrir como resultado de su incapacidad para mantener su inicio de sesión seguro y privado.</p>

                      <h3>5. SUS GARANTÍAS</h3>
                      <p><b>5.1</b> Antes de su uso del Servicio y de forma continua, usted declara, garantiza, acuerda y acepta que:</p>
                      <p>Capacidad</p>
                      <p>a) Usted es mayor de 18 años o cualquier otra mayoría de edad legal según lo determinado por cualquier ley que le sea aplicable, la edad que sea mayor;</p>
                      <p>b) Usted tiene plena capacidad para celebrar un acuerdo legalmente vinculante con nosotros y no está restringido por ninguna forma de capacidad legal limitada;</p>
                      <p>c) No se le diagnostica ni se le clasifica como jugador compulsivo o problemático;</p>
                      <p>d) Actualmente no está autoexcluido de ningún sitio de juego o local de juego. Informará a Seabet inmediatamente si celebra un acuerdo de autoexclusión con cualquier proveedor de juegos de azar.</p>

                      <p>Jurisdicción</p>
                      <p>e) Usted está accediendo a Seabet.io desde una jurisdicción en la que es legal hacerlo;</p>
                      <p>f) No utilizará nuestros servicios mientras se encuentre en ninguna jurisdicción que prohíba realizar y / o aceptar apuestas en línea y / o jugar casino y / o juegos en vivo;</p>
                      <p>g) Usted acepta y reconoce que nos reservamos el derecho de detectar y prevenir el uso de técnicas prohibidas, incluidas, entre otras, la detección de transacciones fraudulentas, el registro y registro automatizados, el juego y las técnicas de captura de pantalla. Estos pasos pueden incluir, entre otros, el examen de las propiedades del dispositivo de los jugadores, la detección de la ubicación geográfica y el enmascaramiento de IP, las transacciones y el análisis de blockchain;</p>

                      <p>Fondos e impuestos</p>
                      <p>h) Usted es el único responsable de informar y contabilizar cualquier impuesto aplicable a usted bajo las leyes relevantes para cualquier ganancia que reciba de nosotros;</p>
                      <p>i) Usted es el único responsable de cualquier impuesto aplicable que pueda pagarse sobre la criptomoneda que se le otorgue a través de su uso del Servicio;</p>
                      <p>j) Existe el riesgo de perder criptomonedas al utilizar el Servicio y que Seabet no tiene ninguna responsabilidad ante usted por dicha pérdida;</p>
                      <p>k) No depositará fondos que se originen en actividades delictivas u otras actividades no autorizadas;</p>
                      <p>l) No depositará fondos utilizando métodos de pago que no le pertenezcan;</p>
                      <p>m) Todos los fondos depositados se utilizarán exclusivamente para los Servicios disponibles en el Sitio Web;</p>
                      <p>n) No retirará ni intentará retirar a un método de pago que no le pertenezca;</p>
                      <p>o) Usted entiende que al participar en los Servicios disponibles en el Sitio Web, Usted corre el riesgo de perder el dinero depositado.</p>
                      <p>p) Usted acepta y reconoce que el valor de la criptomoneda puede cambiar drásticamente dependiendo del valor de mercado;</p>
                      <p>q) Seabet no será tratada como una institución financiera;</p>

                      <p>Otros</p>
                      <p>r) Su uso del Servicio es a su entera elección, discreción y riesgo;</p>
                      <p>s) No llevará a cabo actividades delictivas a través de la Cuenta Seabet;</p>
                      <p>t) Toda la información que nos proporcione durante el período de validez de este acuerdo es verdadera, completa, correcta y que deberá notificarnos inmediatamente de cualquier cambio de dicha información;</p>
                      <p>u) Usted participa en los Juegos estrictamente a título personal y no profesional y participa únicamente con fines recreativos y de entretenimiento;</p>
                      <p>v) Usted participa en los Juegos en su propio nombre y no en nombre de ninguna otra persona;</p>
                      <p>w) Solo tiene una cuenta con nosotros y acepta no abrir más cuentas con nosotros;</p>
                      <p>x) Las redes de telecomunicaciones y los servicios de acceso a Internet necesarios para que usted acceda y utilice el Servicio están totalmente fuera del control de Seabet y Seabet no tendrá responsabilidad alguna por interrupciones, lentitud, limitaciones de capacidad u otras deficiencias que afecten a los mismos;</p>
                      <p>y) Usted no estará involucrado en ninguna actividad fraudulenta, colusoria, de arreglo u otra actividad ilegal en relación con su participación o la de terceros en cualquiera de los juegos y / o servicios en el sitio web, y no utilizará ningún método o técnica asistida por software o dispositivos de hardware para su participación en cualquiera de los juegos y / o servicios en el sitio web;</p>
                      <p>z) Si tiene acceso a información no pública relacionada con un evento o que puede afectar el resultado de un evento o tipo de apuesta, no apostará en ningún evento supervisado por el organismo rector del deporte / evento correspondiente;</p>
                      <p>aa) Si usted es un atleta, entrenador, gerente, propietario, árbitro o cualquier persona con autoridad suficiente para influir en el resultado de un evento, no apostará en ningún evento supervisado por el deporte o evento relevante del organismo rector;</p>
                      <p>bb) Si usted es propietario (una persona que es un propietario legal o beneficiario directo o indirecto del 10 por ciento o más) de un organismo rector deportivo o equipo miembro, no apostará en ningún evento supervisado por el organismo rector del deporte ni en ningún evento en el que participe un equipo miembro de ese deporte o evento rector;</p>
                      <p>cc) Si está involucrado en un deporte o evento, no participará en la compilación de probabilidades de apuestas para la competencia en la que está involucrado.</p>
                      <p><b>5.2</b> En caso de incumplimiento de cualquiera de las declaraciones, garantías o pactos mencionados en, Seabet se reserva el derecho de cerrar o suspender su cuenta Seabet a su propia discreción y anular cualquier apuesta en la medida aplicable por la ley.</p>

                      <h3>6. GARANTÍAS DE SEABET</h3>
                      <p><b>6.1</b> Seabet garantiza que:</p>
                      <p>a) administrar los fondos pertenecientes al Jugador de manera segura y apropiada; y</p>
                      <p>b) administrar la información personal perteneciente al Jugador de acuerdo con la ley aplicable y de acuerdo con su Política de privacidad.</p>
                      <p><b>6.2</b> El software se proporciona "tal cual" sin garantías, condiciones, compromisos o representaciones, expresas o implícitas, legales o de otro tipo. Por la presente, Seabet excluye todos los términos, representaciones, condiciones y garantías implícitas (incluidas las de comerciabilidad, calidad comercial, calidad satisfactoria e idoneidad para cualquier propósito en particular). </p>
                      <p>Seabet no garantiza que: </p>
                      <p>(i)El sitio web y los servicios cumplirán con sus requisitos; </p>
                      <p>(ii)El Sitio Web y los Servicios no infringirán los derechos de propiedad intelectual de terceros;</p>
                      <p>(iii)El funcionamiento del Sitio Web y de los Servicios estará libre de errores o será ininterrumpido;</p>
                      <p>(iv)Cualquier defecto en el sitio web y los servicios será corregido; o </p>
                      <p>(v)El sitio web o los servidores están libres de virus.</p>

                      <p><b>6.3</b> Seabet puede ser contactado por correo electrónico en (support{'@'}seabet.io) o en su chat en vivo 24/7. El chat en vivo está disponible cuando se inicia sesión en su cuenta Seabet. En caso de que Seabet, a su entera discreción, considere que Su comportamiento, a través de chat en vivo, correo electrónico o de otro modo, ha sido abusivo o despectivo hacia cualquiera de los empleados de Seabet o sus Afiliados o proveedores de servicios externos, Seabet tendrá derecho a bloquear o cancelar Su Cuenta Seabet.</p>

                      <h3>7. DEPÓSITOS</h3>
                      <p><b>7.1</b> Puede participar en cualquier Juego solo si tiene fondos suficientes en su Cuenta Seabet para dicha participación. Para ello, deberá utilizar los métodos de pago disponibles en el sitio web para depositar sus fondos. Seabet no le dará ningún crédito por su participación en ningún Juego.</p>
                      <p><b>7.2</b> Debe depositar fondos en su cuenta Seabet utilizando los métodos de pago disponibles en www. Seabet.io.</p>
                      <p><b>7.3</b> Usted se asegurará de que los fondos que deposite en su Cuenta Seabet no estén contaminados con ninguna ilegalidad y, en particular, no provengan de ninguna actividad o fuente ilegal.</p>
                      <p><b>7.4</b> Para depositar fondos en su Cuenta Seabet, puede transferir fondos desde criptomonederos bajo su control o a través de cualquier otro método de pago disponible en Seabet.io. Los depósitos solo se pueden hacer con sus propios fondos.</p>
                      <p><b>7.5</b> Solo debe depositar dinero en su cuenta con el fin de utilizar dicho dinero para realizar apuestas en el sitio web. Seabet tiene derecho a suspender o cerrar su cuenta si creemos razonablemente que está depositando fondos sin ninguna intención de realizar apuestas deportivas y/o de juego. En tales circunstancias, también podemos informar de esta actividad a las autoridades pertinentes.</p>
                      <p><b>7.6</b> Usted reconoce y comprende que depositar fondos en Su Cuenta Seabet solo puede financiarse mediante métodos de pago de su propiedad.</p>
                      <p><b>7.7</b> Además, entiende, acepta y reconoce que si Seabet descubre, detecta y/o identifica que Usted:</p>
                      <p>a) Financiado/está financiando Su Cuenta Seabet utilizando métodos de pago de terceros; y/o</p>
                      <p>b) Financiado/está financiando Su Cuenta Seabet con fondos que están contaminados con ilegalidad, dicha actividad se considerará como constitutiva de una violación de los Términos de Servicio que equivale a fraude y, por extensión:</p>
                      <p>i) Seabet se reserva el derecho, a su propia discreción, de suspender o cerrar Su Cuenta Seabet; y</p>
                      <p>ii) Seabet se reserva el derecho, a su propia discreción, de cancelar, revertir o ajustar cualquier transacción y de perder los fondos depositados y/o las ganancias generadas a partir de los fondos depositados.</p>
                      <p><b>7.8</b> Seabet puede establecer en su propia descripción una cantidad mínima de depósito. El monto mínimo de depósito se puede cambiar en todo momento en la descripción de Seabet y se identificará en el sitio web. Tenga en cuenta que, dependiendo del método de pago utilizado por usted, los proveedores de pago pueden cobrar tarifas adicionales.</p>
                      <p><b>7.9</b> Los métodos de pago puestos a su disposición y el límite mínimo y máximo de depósito se pueden encontrar en la sección de billetera en el Sitio. Las tarifas de servicio aplicables pueden aplicarse y cambiarse. Es posible que algunos métodos de pago no estén disponibles en todos los países.</p>
                      <p><b>7.10</b> Los depósitos se procesan inmediatamente y el saldo actualizado se muestra en la Cuenta Seabet al instante cada vez que se utiliza un proveedor de servicios de pago. Seabet no se hace responsable de los retrasos causados por su sistema de pago o debido a los retrasos causados por terceros. Tenga en cuenta que:</p>
                      <p>a) Algunos métodos de pago pueden incluir tarifas adicionales. En este caso, la tarifa será claramente visible para usted en el cajero.</p>
                      <p>b) Su banco o proveedor de servicios de pago puede cobrarle tarifas adicionales por depósitos de conversión de moneda de acuerdo con sus términos y condiciones y su acuerdo de usuario.</p>
                      <p><b>7.11</b> Nos reservamos el derecho de utilizar procedimientos y medios adicionales para verificar su identidad al procesar depósitos en su Cuenta Seabet.</p>
                      <p><b>7.12</b> Los fondos no se pueden transferir desde su cuenta Seabet a la cuenta Seabet de otro jugador.</p>
                      <p><b>7.13</b> Seabet puede rechazar cualquier depósito en su propia descripción. Los usuarios que tengan sus cuentas bloqueadas o suspendidas deberán abstenerse de depositar en www.Seabet.io.</p>
                      <p><b>7.14</b> En el caso de que un jugador intente depositar cuando su cuenta está bloqueada o suspendida, Seabet tendrá derecho a retener los fondos.</p>

                      <h3>8. RETIROS</h3>
                      <p><b>8.1</b> Seabet se reserva el derecho de rechazar cualquier retiro por parte de un Jugador de su Cuenta Seabet hasta que:</p>
                      <p>a) la identidad del Jugador ha sido verificada y Seabet ha confirmado que el retiro está siendo realizado por un titular de la Cuenta Seabet;</p>
                      <p>b) el retiro se transfiere a una cuenta de la que el Jugador es titular legal;</p>
                      <p>c) se ha proporcionado cualquier información adicional solicitada por Seabet; y</p>
                      <p>d) el Jugador ha cumplido con el requisito de apuesta mínima para cada depósito.</p>
                      <p><b>8.2</b> Seabet se reserva todos los derechos para investigar su cuenta y su actividad de juego. Si Seabet sospecha razonablemente que su cuenta o actividad de juego ha violado estos términos de servicio o las leyes o regulaciones aplicables, puede, a su entera discreción, retrasar o rechazar más depósitos, retiros y/o juegos mientras lleva a cabo su investigación. Usted reconoce y acepta que Seabet puede no estar en condiciones de proporcionar una explicación sobre la naturaleza de su investigación.</p>
                      <p><b>8.3</b> Todos los retiros deben realizarse a través del mismo método de pago elegido por usted al realizar un depósito, a menos que decidamos lo contrario o no podamos hacerlo. Si deposita utilizando varios métodos de pago, nos reservamos el derecho de dividir su retiro entre dichos métodos de pago y procesar cada parte a través del método de pago respectivo a nuestra discreción y de acuerdo con las políticas y regulaciones contra el lavado de dinero.</p>
                      <p><b>8.4</b> Si acreditamos por error en su Cuenta Seabet ganancias que no le pertenecen, ya sea debido a un error técnico en las tablas de pago, a un error humano o de otro tipo, el importe seguirá siendo de nuestra propiedad y se deducirá de su Cuenta Seabet. Si ha retirado fondos que no le pertenecen antes de que nos demos cuenta del error, el monto pagado por error (sin perjuicio de otros recursos y acciones que puedan estar disponibles por ley) constituirá una deuda que usted nos debe. En el caso de una acreditación incorrecta, está obligado a notificarnos inmediatamente por correo electrónico.</p>

                      <p>Retiros FIAT</p>
                      <p><b>8.5</b> Debe apostar el 100% del valor de su depósito para solicitar un retiro FIAT.</p>
                      <p><b>8.6</b> Los retiros de la Cuenta Seabet se realizan a través de pagos dirigidos al Jugador o transferidos a una cuenta bancaria a nombre del Jugador, según lo aconsejado a Seabet por el Jugador. Antes de procesar cualquier retiro, Seabet se reserva el derecho de realizar una diligencia debida mejorada cuando se considere necesario.</p>
                      <p><b>8.7</b> El monto mínimo de retiro se identificará en el sitio web al realizar un retiro.</p>
                      <p><b>8.8</b> Si tiene varios retiros pendientes, Seabet se reserva el derecho de rechazar todos los retiros y solicitarle que realice un retiro con la suma de todos los retiros múltiples.</p>
                      <p><b>8.9</b> Seabet no le cobrará ninguna comisión por los retiros. Sin embargo, le recomendamos que compruebe si el método de pago que utiliza impone algún cargo adicional. Seabet no será responsable de ninguna comisión o tarifa de procesamiento que le cobren terceros, como su banco, ya que esto está fuera de nuestro control.</p>

                      <p>Retiros criptográficos</p>
                      <p><b>8.10</b> Los retiros criptográficos se realizarán a la dirección de su billetera de criptomonedas indicada al realizar una solicitud de retiro válida.</p>
                      <p><b>8.11</b> Seabet se reserva el derecho de llevar a cabo procedimientos adicionales de verificación KYC para cualquier retiro. Se recomienda a los jugadores que deseen recuperar fondos mantenidos en una cuenta cerrada, bloqueada o excluida, que se pongan en contacto con (support{'@'}seabet.io).</p>
                      <p><b>8.12</b> Todas las transacciones serán verificadas para prevenir el lavado de dinero. Si un jugador tiene conocimiento de cualquier actividad sospechosa relacionada con cualquiera de los Juegos del Sitio Web, debe informar de ello a Seabet inmediatamente. Seabet puede suspender, bloquear o cerrar una Cuenta Seabet y retener fondos si así se le solicita de acuerdo con la Ley de Prevención del Blanqueo de Capitales o sobre cualquier otra base legal solicitada por cualquier autoridad estatal. Usted reconoce que los fondos en su cuenta se consumen instantáneamente al jugar y no proporcionamos devolución de bienes, reembolsos o cancelación retrospectiva de su cuenta.</p>

                      <h3>9. PROTECCIÓN DE LOS FONDOS DEL JUGADOR Y CONTRACARGOS</h3>
                      <p><b>9.1</b> Todos los fondos que deposite con nosotros en Su Cuenta Seabet, junto con cualquier ganancia, se mantienen para Usted en cuentas bancarias de clientes separadas / billetera criptográfica con el único y específico propósito de que Usted realice apuestas deportivas y de juego y liquide cualquier tarifa o cargo en el que pueda incurrir en relación con el uso de nuestros Servicios. Esto significa que sus fondos están protegidos de ser utilizados para cualquier otro propósito.</p>
                      <p><b>9.2</b> Si incurrimos en devoluciones de cargo, cancelaciones o denegaciones de pagos o cualquier pérdida sufrida por Seabet como consecuencia de ello debido a causas atribuibles a Usted con respecto a Su Cuenta Seabet, nos reservamos el derecho de cobrarle los importes relevantes incurridos.</p>
                      <p><b>9.3</b> Podemos, en cualquier  momento, compensar cualquier saldo positivo en Su cuenta con cualquier cantidad adeudada por Usted a Seabet.</p>
                      <h3>10. REALIZACIÓN DE APUESTAS/APUESTAS</h3>
                      <p><b>10.1</b> Se le permite realizar sus apuestas en los mercados / productos ofrecidos en el sitio web. Seabet no está obligado a aceptar ninguna apuesta suya y las apuestas/apuestas solo se considerarán válidas y finalizadas, y por lo tanto aceptadas por Seabet, cuando reciba la confirmación de Seabet de la aceptación de su apuesta.</p>
                      <p><b>10.2</b> Seabet solo acepta apuestas/apuestas realizadas en línea (incluso a través de dispositivos móviles). Las apuestas / apuestas no se aceptan en ninguna otra forma (correo postal, correo electrónico, fax, etc.) y cuando se reciban serán inválidas y nulas, gane o pierda.</p>
                      <p><b>10.3</b> Es su responsabilidad asegurarse de que los detalles de las apuestas sean correctos. Una vez que se hayan realizado las apuestas, no podrán ser canceladas por Usted. Las apuestas solo pueden ser cambiadas por Usted utilizando nuestra función Editar apuesta, cuando esté disponible. Seabet solo puede cancelar o modificar una apuesta si el evento relevante ha sido suspendido o cancelado, si hubo un error obvio en la apuesta relevante o sus cuotas, si la apuesta se realiza en incumplimiento de los Términos o si es necesario hacerlo por razones legales o reglamentarias.</p>
                      <p><b>10.4</b> Sus fondos se asignarán a apuestas en el orden en que se realizan y no estarán disponibles para ningún otro uso. Seabet se reserva el derecho de anular y/o revertir cualquier transacción realizada después de que se haya realizado una apuesta que involucre fondos asignados, ya sea en el momento o retrospectivamente.</p>
                      <h3>11. CONFIRMACIÓN DE APUESTA/APUESTA</h3>
                      <p><b>11.1</b> Las apuestas/apuestas solo serán válidas una vez que reciba la confirmación de la aceptación de su apuesta. Las apuestas/apuestas realizadas con fondos insuficientes en su cuenta serán anuladas.</p>
                      <p><b>11.2</b> Una apuesta que Usted solicite solo será válida una vez aceptada por Seabet. Cada apuesta válida recibirá un código de transacción único. No seremos responsables de la liquidación de ninguna apuesta que no se emita con un código de transacción único. Si no está seguro de la validez de una apuesta, consulte el historial de su cuenta o póngase en contacto con nuestro Equipo de Atención al Cliente (support{'@'}seabet.io).</p>
                      <p><b>11.3</b> En caso de que surja una disputa con respecto al contenido de una apuesta, Usted y Seabet acuerdan que la base de datos de registro de transacciones de Seabet de su sistema de control interno será la autoridad final en tales asuntos.</p>
                      <h3>12. BONO</h3>
                      <p><b>12.1</b> Seabet, a su entera discreción, puede ofrecer de vez en cuando, una serie de Bonos y Promociones. </p>

                      <p>Elegibilidad</p>
                      <p><b>12.2</b> Tras registrarse con éxito en una Cuenta Seabet, puede ser elegible para recibir Promociones y Bonos de Seabet. Al aceptar este acuerdo y registrarse para obtener una Cuenta Seabet en el Sitio web, también reconoce y acepta estar sujeto a las reglas y regulaciones asociadas con cualquier Promoción y Bono que Seabet le ofrezca.</p>
                      <p>Bonos T&C</p>
                      <p><b>12.3</b> Todas las promociones, bonos u ofertas especiales están sujetos a los términos expresos de cualquier bono ofrecido en el (los) sitio (s) web y los términos y condiciones específicos de la promoción, si corresponde, y cualquier bono acreditado a su cuenta debe usarse de conformidad con dichos términos y condiciones. Al aceptar una promoción, bono u oferta especial disponible en el (los) sitio (s) web (s), usted acepta los términos y condiciones de dicha promoción, bono u oferta especial y reconoce que las apuestas siempre deben realizarse con saldos de efectivo antes de que los saldos de bonos se puedan usar para apostar. Nos reservamos el derecho de retirar cualquier promoción, bono u oferta especial en cualquier momento.</p>
                      <p>Activación y caducidad</p>
                      <p><b>12.4</b> Al activar un bono o promoción, usted confirma que también acepta los términos y condiciones aplicables.</p>
                      <p><b>12.5</b> Seabet no aceptará ni aceptará ni aceptará ninguna promoción, bono u oferta especial después de la fecha de vencimiento de la promoción, bono u oferta especial, a  menos que Seabet, a su entera discreción, elija hacerlo para cualquier cliente, promoción, bono u oferta especial en particular. Las fechas de vencimiento se establecerán en las reglas específicas o en los términos y condiciones de la promoción, bono u oferta especial en particular. Además, Seabet se reserva el derecho, a su entera discreción, de cambiar o modificar cualquier política con respecto a la obtención o expiración de bonos.</p>
                      <p><b>12.6</b> Una vez perdido o desactivado, el bono ya no estará disponible para usted (y no se puede volver a activar en ningún momento posterior). La cantidad de cualquier Fondo de Bono que ya haya sido acreditado en el Saldo de su Cuenta Seabet permanecerá disponible para Usted.</p>
                      <p>Abuso y fraude de bonificaciones</p>
                      <p><b>12.7</b> En el caso de que Seabet crea que un  Jugador del Servicio está abusando o intentando abusar de un bono u otra promoción o es probable que se beneficie mediante el abuso o la falta de buena fe de una política adoptada por Seabet, Seabet podrá, a su entera discreción, negar, retener o retirar de cualquier Jugador cualquier bono o promoción,  o cancelar el acceso de ese Jugador a los Servicios, el Software y/o bloquear la cuenta de ese Jugador, ya sea temporal o permanentemente.</p>
                      <p><b>12.8</b> Solo puede abrir una (1) cuenta en el sitio web. La apertura de múltiples cuentas en el sitio web con el fin de acumular bonos, promociones, ofertas especiales o de otro modo, se considerará un comportamiento abusivo.</p>

                      <p>Derechos de Seabet</p>
                      <p><b>12.9</b> Seabet se reserva el derecho de eliminar bonos de todas las cuentas inactivas o cuentas que se identifiquen como "abusadores de bonos".</p>
                      <p><b>12.10</b> Seabet se reserva el derecho de cancelar todos los bonos que no hayan sido reclamados dentro del período de reclamación o 60 días, el más corto de los dos.</p>
                      <p><b>12.11</b> Seabet se reserva el derecho de cancelar cualquier bono en su única descripción.</p>

                      <h3>13. AUTORIDAD/TÉRMINOS DE SERVICIO</h3>
                      <p><b>13.1</b> Usted acepta las reglas del juego descritas en el sitio web de Seabet.io. Seabet conserva la autoridad sobre la emisión, el mantenimiento y el cierre del Servicio. La decisión de la dirección de Seabet, relativa a cualquier uso del Servicio, o resolución de disputas, es definitiva y no estará abierta a revisión o apelación.</p>

                      <h3>14. USOS PROHIBIDOS</h3>
                      <p>USO PERSONAL</p>
                      <p><b>14.1</b> El Servicio está destinado únicamente para el uso personal del Usuario. El Usuario solo puede apostar por su entretenimiento personal. Los usuarios no pueden crear varias cuentas con fines de colusión, apuestas deportivas y / o abuso del servicio.</p>

                      <p>CUMPLIMIENTO DE AML Y SANCIONES</p>
                      <p><b>14.2</b> Seabet prohíbe y rechaza expresamente el uso del Servicio para cualquier forma de actividad ilícita, incluidas las violaciones de blanqueo de capitales, financiación del terrorismo o sanciones comerciales, de conformidad con las leyes, reglamentos y normas de varias jurisdicciones. Con ese fin, el Servicio no se ofrece a individuos o entidades sujetos a sanciones o listas de vigilancia de los Estados Unidos, la Unión Europea u otras sanciones globales. Al utilizar el Servicio, usted declara y garantiza que no está sujeto a ello.</p>
                      <p>JURISDICCIONES</p>
                      <p><b>14.3</b> Las personas ubicadas o que residen en Afganistán, Australia, Bielorrusia, Bélgica, Costa de Marfil, Cuba, Curazao, República Checa, República Democrática del Congo, Dinamarca, Francia, Alemania, Grecia, Irán, Irak, Italia, Liberia, Libia, Lituania, Países Bajos, Corea del Norte, Ontario, Portugal, Serbia, Eslovaquia, Sudán del Sur, España, Sudán, Siria, Suiza, Reino Unido, Estados Unidos, Zimbabwe (las "Jurisdicciones prohibidas") no están autorizadas a hacer uso del Servicio. Para evitar dudas, las restricciones anteriores sobre la participación en juegos con dinero real desde jurisdicciones prohibidas se aplican igualmente a residentes y ciudadanos de otras naciones mientras se encuentren en una jurisdicción prohibida. Cualquier intento de eludir las restricciones de juego por parte de cualquier persona ubicada en una Jurisdicción Prohibida o Jurisdicción Restringida, es un incumplimiento de este Acuerdo. Un intento de elusión incluye, pero no se limita a, manipular la información utilizada por Seabet para identificar su ubicación y proporcionar a Seabet información falsa o engañosa sobre su ubicación o lugar de residencia.</p>

                      <p><b>14.4</b> El intento de manipular su ubicación real mediante el uso de VPN, proxy o servicios similares o mediante la provisión de información incorrecta o engañosa sobre su lugar de residencia, con la intención de eludir el bloqueo geográfico o las restricciones de jurisdicción, constituye una violación de la Cláusula 5 de estos Términos de servicio.</p>

                      <h3>15. SU EQUIPO</h3>
                      <p><b>15.1</b> Su equipo informático o dispositivo móvil y conexión a Internet pueden afectar el rendimiento y/o el funcionamiento del Sitio Web. Seabet no garantiza que el sitio web funcione sin fallos o errores o que los servicios de Seabet se proporcionen sin interrupción. Seabet no acepta ninguna responsabilidad por fallos o problemas que surjan debido a su equipo, conexión a Internet o proveedor de servicios de Internet o telecomunicaciones (incluyendo, por ejemplo, si no puede realizar apuestas o apuestas o ver o recibir cierta información en relación con eventos particulares).</p>
                      <p><b>15.2</b> Para los clientes que utilicen un dispositivo móvil para realizar apuestas, tenga en cuenta que Seabet no será responsable de ningún daño o pérdida de datos del dispositivo móvil en el que está instalado el software, y tampoco será responsable de ninguna llamada, datos u otros cargos incurridos durante el uso del software.</p>
                      <p><b>15.3</b> Debido a los tamaños de pantalla limitados en los dispositivos móviles, la experiencia móvil puede diferir ligeramente de otras plataformas. Las diferencias pueden incluir, pero no se limitan a, la ubicación de cierta información en la plataforma y los nombres de los juegos que no son visibles en todas las páginas del juego.</p>

                      <h3>16. USO LEAL</h3>
                      <p><b>16.1</b> El Sitio web y los Servicios solo se pueden utilizar con fines recreativos mediante la realización de apuestas en eventos y / o productos de juego.</p>
                      <p><b>16.2</b> No debe utilizar el Sitio web en beneficio de un tercero o para cualquier propósito que sea ilegal, difamatorio, abusivo u obsceno, o que Seabet considere discriminatorio, fraudulento, deshonesto o inapropiado. Seabet podrá informar a las autoridades de cualquier actividad que considere sospechosa y/o que infrinja este apartado.</p>
                      <p><b>16.3</b> Si Seabet  tiene una sospecha razonable de que Usted está involucrado en actos fraudulentos, deshonestos o delictivos, según lo establecido en las leyes aplicables, a través o en relación con el Sitio web o los Servicios, Seabet puede solicitar sanciones penales y contractuales contra Usted. Seabet retendrá el pago a cualquier cliente cuando se sospeche que alguno de estos o cuando se sospeche que el pago es en beneficio de un tercero.</p>
                      <p><b>16.4</b> Usted indemnizará y será responsable de pagar a Seabet, previa solicitud, todos los costes, cargos o pérdidas sufridos o incurridos por nosotros y nuestros afiliados (incluidas las pérdidas directas, indirectas o consecuentes, la pérdida de beneficios y la pérdida de reputación) con respecto a todas las Reclamaciones que surjan directa o indirectamente de Sus actos fraudulentos, deshonestos o criminales durante el uso del Sitio web o los Servicios.</p>
                      <p><b>16.5</b> Además, nos reservamos el derecho de no aceptar, procesar y/o aceptar apuestas/apuestas cuando sea prohibido, ilegal o ilegal según la ley o regulación aplicable.</p>

                      <h3>17. PROBLEMAS DE SOFTWARE Y TECNOLOGÍA</h3>
                      <p><b>17.1</b> Para que pueda utilizar el Sitio web y los Servicios, es posible que deba descargar algún software (por ejemplo, juegos de casino que están disponibles a través de un reproductor flash). Además, ciertos proveedores de productos externos pueden exigirle que acepte términos y condiciones adicionales que rigen el uso de sus productos que están disponibles en o a través del sitio web. Si no acepta esos términos y condiciones de terceros, no utilice el software de terceros correspondiente. Seabet no acepta ninguna responsabilidad con respecto a cualquier software de terceros.</p>
                      <p><b>17.2</b> Solo se le permite usar todo el software que se pone a su disposición a través del sitio web con el fin de usar el sitio web y los servicios y, salvo en la medida permitida por la ley aplicable, para ningún otro propósito.</p>
                      <p><b>17.3</b> Por la presente, le otorgamos un derecho personal, no exclusivo e intransferible para utilizar el sitio web con el único propósito de acceder y utilizar los servicios en el sitio web, de acuerdo con estos Términos y condiciones. Este derecho a utilizar nuestro sitio web y se cancelará inmediatamente una vez que se cancele su registro de usuario por cualquier motivo, y especialmente, pero no limitado a, si hace uso de ese derecho con el objetivo de generar una empresa paralela basada en nuestro sitio web o nuestros productos, o con el objetivo de hacer uso de un servicio automatizado o análisis de software,  capturar o utilizar de alguna manera la información que se muestra en nuestro sitio web.</p>
                      <p><b>17.4</b> No se le permite:</p>
                      <p>a) instalar o cargar el software que forma parte del sitio web en un servidor u otro dispositivo en red o tomar otras medidas para que el software esté disponible a través de cualquier forma de "tablón de anuncios", servicio en línea o acceso telefónico remoto o red a cualquier otra persona;</p>
                      <p>b) sublicenciar, asignar, alquilar, arrendar, prestar, transferir o copiar (excepto lo dispuesto expresamente en otra parte de estos Términos y condiciones) su derecho a usar el sitio web o el software que forma parte del sitio web, o hacer o distribuir copias del mismo;</p>
                      <p>c) ingresar, acceder o intentar ingresar o acceder o eludir el sistema de seguridad de Seabet o interferir de cualquier manera (incluidos, entre otros, robots o dispositivos similares) con los productos o el sitio web o intentar realizar modificaciones en el software y / o cualquier característica o componente del mismo;</p>
                      <p>d) copiar o traducir cualquier documentación de usuario proporcionada "en línea" o en formato electrónico.</p>
                      <p>e) Además, excepto en la medida mínima permitida por la ley aplicable en relación con los programas informáticos, no se le permite: (i) traducir, realizar ingeniería inversa, descompilar, desensamblar, modificar, crear trabajos derivados basados en, o modificar de otro modo el sitio web; o (ii) realizar ingeniería inversa, descompilar, desensamblar, modificar, adaptar, traducir, intentar descubrir el código fuente del software que forma parte del sitio web o crear trabajos derivados basados en la totalidad o en cualquier parte del sitio web.</p>
                      <p><b>17.5</b> Usted no es propietario del software que forma parte del sitio web. Dicho software es propiedad y es propiedad exclusiva de Seabet o de una empresa proveedora de software de terceros (cualquier proveedor externo, el "Proveedor de software"). Cualquier software y documentación adjunta que haya sido licenciado a Seabet son productos propiedad del Proveedor de Software y están protegidos en todo el mundo por la ley de derechos de autor. Su uso del software no le otorga la propiedad de ningún derecho de propiedad intelectual sobre el software.</p>
                      <p><b>17.6</b> El software se proporciona "tal cual" sin garantías, condiciones, compromisos o representaciones, expresas o implícitas, legales o de otro tipo. Por la presente, Seabet excluye todos los términos, condiciones y garantías implícitas, incluidas las de comerciabilidad, calidad comercial, calidad satisfactoria e idoneidad para cualquier propósito particular, integridad o precisión de los servicios o el software o infracción de las leyes y regulaciones aplicables. Seabet no garantiza ni condiciona que: </p>
                      <p>(i) el software cumplirá con sus requisitos; </p>
                      <p>(ii) el Software no infringirá los derechos de propiedad intelectual de terceros; </p>
                      <p>(iii) el funcionamiento del software estará libre de errores o será ininterrumpido; (iv) cualquier defecto en el software será corregido; o </p>
                      <p>(v) el software o los servidores están libres de virus.</p>

                      <p><b>17.7</b> En caso de que se produzcan errores de comunicación o del sistema en relación con la liquidación de cuentas u otras características o componentes del software, ni Seabet ni el Proveedor de software tendrán ninguna responsabilidad ante Usted o cualquier tercero con respecto a dichos errores. Seabet se reserva el derecho, en caso de tales errores, de eliminar todos los productos relevantes del sitio web y tomar cualquier otra medida para corregir dichos errores.</p>
                      <p><b>17.8</b> Por la presente, usted reconoce que la forma en que utiliza el software está fuera del control de Seabet. En consecuencia, Usted instala y/o utiliza el software bajo su propio riesgo. Seabet no tendrá ninguna responsabilidad ante Usted o cualquier tercero con respecto a Su recepción y/o uso del software.</p>
                      <p><b>17.9</b> El software puede incluir información confidencial que es secreta y valiosa para el Proveedor de Software y/o Seabet. Usted no tiene derecho a usar o divulgar esa información confidencial que no sea estrictamente de acuerdo con estos Términos y Condiciones.</p>
                      <p><b>17.10</b> Seabet no será responsable si, por cualquier motivo, el Sitio web no está disponible en cualquier momento o durante cualquier período. Nos reservamos el derecho de realizar cambios o correcciones o alterar, suspender o interrumpir cualquier aspecto del sitio web y el contenido, los servicios o los productos disponibles a través de él, incluido su acceso al mismo.</p>
                      <p><b>17.11</b> No debe hacer un uso indebido del sitio web introduciendo virus, troyanos, gusanos, bombas lógicas u otro material malicioso o tecnológicamente dañino. En particular, no debe acceder al sitio web sin autorización, interferir, dañar o interrumpir el sitio web o cualquier parte del mismo, cualquier equipo o red en la que esté alojado el sitio web, cualquier software utilizado en relación con la provisión del sitio web, o cualquier equipo, software o sitio web propiedad o utilizado por un tercero. No debe atacar nuestro sitio web a través de un ataque de denegación de servicio. No seremos responsables de ninguna pérdida o daño causado por un ataque distribuido de denegación de servicio, virus u otro material tecnológicamente dañino que pueda infectar su equipo informático, programas informáticos, datos u otro material patentado que surja debido a su uso del sitio web, software o a su descarga de cualquier material publicado en él, o en cualquier sitio web vinculado a él.</p>

                      <h3>18. CONTENIDO DE TERCEROS</h3>
                      <p><b>18.1</b> Seabet recibe feeds, comentarios y contenido de varios proveedores. Ciertos proveedores de productos externos pueden exigirle que acepte términos y condiciones adicionales que rigen el uso de sus feeds, comentarios y contenido. Si no acepta los términos y condiciones de terceros relevantes, acepta no utilizar los feeds, comentarios o contenido relevantes.</p>
                      <p><b>18.2</b> Seabet no acepta ninguna responsabilidad con respecto a los feeds, comentarios y contenidos de terceros.</p>
                      <p><b>18.3</b> Cuando el sitio web contiene enlaces a sitios web y recursos de terceros, estos enlaces se proporcionan solo para su información. Seabet no tiene control sobre el contenido de estos sitios o recursos, y no acepta ninguna responsabilidad por ellos o por cualquier pérdida o daño que pueda surgir de su uso de ellos. La inclusión de un enlace a un sitio web de terceros no constituye una aprobación del sitio web, producto o servicio de ese tercero, si corresponde.</p>

                      <h3>19. ERRORES</h3>
                      <p><b>19.1</b> Seabet no será responsable en caso de que intente u obtenga una ventaja de cualquier error con respecto a las apuestas en el sitio web si actuó deliberadamente de mala fe, incluso cuando: </p>
                      <p>i) existe un error evidente en las cuotas, los diferenciales, la desventaja, los totales y el retiro de efectivos; </p>
                      <p>(ii) Seabet continúa aceptando apuestas en mercados cerrados o suspendidos; </p>
                      <p>(iii) Seabet calcula o paga incorrectamente un importe de liquidación, incluso cuando una apuesta se cobra por el importe total de la liquidación, o una apuesta se anula incorrectamente, cuando se seleccionó "Nulo si el jugador no comienza" en la colocación de la apuesta; o cualquier error se produzca en un generador de números aleatorios o tablas de pago incluidas, incorporadas o utilizadas en cualquier juego o producto.</p>

                      <h3>20. INCUMPLIMIENTO</h3>
                      <p><b>20.1</b> Sin perjuicio de cualquier otro derecho,  si un usuario incumple total o parcialmente cualquier disposición contenida en este documento, Seabet se reserva el derecho de tomar las medidas que considere oportunas, incluida la terminación de este Acuerdo o cualquier otro acuerdo vigente con el Usuario y / o emprender acciones legales contra dicho Usuario.</p>
                      <p><b>20.2</b> Usted acepta indemnizar, defender y eximir de responsabilidad a Seabet y a sus accionistas, directores, agentes y empleados de y contra todas las reclamaciones, demandas, responsabilidades, daños, pérdidas, costes y gastos, incluidos los honorarios legales y cualquier otro cargo, independientemente de su causa, que pueda surgir como resultado de:</p>
                      <p>a) su incumplimiento de este Acuerdo, en su totalidad o en parte;</p>
                      <p>b) violación por su parte de cualquier ley o cualquier derecho de terceros; y</p>
                      <p>c) uso por su parte del Servicio.</p>



                      <h3>21. LIMITACIONES Y RESPONSABILIDAD</h3>
                      <p><b>21.1</b> Bajo ninguna circunstancia, incluida la negligencia, Seabet será responsable de ningún daño especial, incidental, directo, indirecto o consecuente (incluidos, entre otros, daños por pérdida de beneficios comerciales, interrupción del negocio, pérdida de información comercial o cualquier otra pérdida pecuniaria) que surja del uso (o mal uso) del Servicio, incluso si Seabet tenía conocimiento previo de la posibilidad de dichos daños.</p>
                      <p><b>21.2</b> Nada en este Acuerdo excluirá o limitará la responsabilidad de Seabet por muerte o lesiones personales resultantes de su negligencia.</p>

                      <h3>22. PROPIEDAD INTELECTUAL</h3>
                      <p><b>22.1</b> Seabet y sus licenciantes son los únicos titulares de todos los derechos sobre el Servicio y el código, la estructura y la organización, incluidos los derechos de autor, secretos comerciales, propiedad intelectual y otros derechos. Usted no puede, dentro de los límites prescritos por las leyes aplicables: </p>
                      <p>(a) copiar, distribuir, publicar, realizar ingeniería inversa, descompilar, desensamblar, modificar o traducir el sitio web; o </p>
                      <p>(b) utilizar el Servicio de una manera prohibida por las leyes o regulaciones aplicables (cada uno de los anteriores es un "Uso no autorizado"). </p>
                      <p>Seabet se reserva todos y cada uno de los derechos implícitos o de otro tipo, que no se conceden expresamente al Usuario en virtud del presente documento y conserva todos los derechos, títulos e intereses en y para el Servicio. Usted acepta que será el único responsable de cualquier daño, costo o gasto que surja de o en relación con la comisión por su parte de cualquier Uso no autorizado. </p>
                      <p>Deberá notificar a Seabet inmediatamente después de tener conocimiento de la comisión por parte de cualquier persona de cualquier Uso no autorizado y deberá proporcionar a Seabet asistencia razonable con cualquier investigación que realice a la luz de la información proporcionada por usted a este respecto.</p>
                      <p><b>22.2</b> El término "Seabet  ", sus nombres de dominio y cualquier otra marca comercial, o marca de servicio utilizada por Seabet como parte del Servicio (las "Marcas comerciales"), son propiedad exclusiva de Seabet. Además, todo el contenido del sitio web, incluidas, entre otras, las imágenes, imágenes, gráficos, fotografías, animaciones, vídeos, música, audio y texto (el "Contenido del sitio") pertenece a Seabet y está protegido por derechos de autor u otros derechos de propiedad intelectual u otros derechos. Por la presente, usted reconoce que al utilizar el Servicio, no obtiene ningún derecho sobre el Contenido del Sitio y / o las Marcas comerciales, o cualquier parte del mismo. Bajo ninguna circunstancia podrá utilizar el Contenido del Sitio y/o las Marcas Comerciales sin el consentimiento previo por escrito de Seabet. Además, usted acepta no hacer nada que pueda dañar o potencialmente dañar los derechos, incluidos los derechos de propiedad intelectual de Seabet.</p>

                      <h3>23. DISPUTAS</h3>
                      <p><b>23.1</b> Si un Usuario desea presentar una queja, póngase en contacto con el equipo de atención al cliente de Seabet en (support{'@'}seabet.io). En caso de que alguna disputa no se resuelva a su satisfacción, puede buscar recursos en la jurisdicción de la ley aplicable que se establece a continuación.</p>

                      <h3>24. MODIFICACIÓN</h3>
                      <p><b>24.1</b> Seabet se reserva el derecho de actualizar o modificar este Acuerdo o cualquier parte del mismo en cualquier momento o cambiar el Servicio sin previo aviso y usted estará obligado por dicho Acuerdo modificado en el momento de su publicación. Por lo tanto, le recomendamos que verifique los términos y condiciones contenidos en la versión del Acuerdo vigente en ese momento. Se considerará que su uso continuado del Servicio da fe de su aceptación de cualquier enmienda al Acuerdo.</p>

                      <h3>25. DIVISIBILIDAD</h3>
                      <p><b>25.1</b> Si una disposición de este Acuerdo es o se vuelve ilegal, inválida o inaplicable en cualquier jurisdicción, eso no afectará la validez o aplicabilidad en esa jurisdicción de cualquier otra disposición del presente o la validez o aplicabilidad en otras jurisdicciones de esa o cualquier otra disposición del presente.</p>

                      <h3>26. CESIÓN</h3>
                      <p><b>26.1</b> Seabet se reserva el derecho de ceder este acuerdo, en su totalidad o en parte, en cualquier momento sin previo aviso. El Usuario no puede ceder ninguno de sus derechos u obligaciones en virtud de este Acuerdo.</p>

                      <h3>27. MISCELÁNEA</h3>
                      <p><b>27.1</b> Ninguna renuncia por parte de Seabet de cualquier incumplimiento de cualquier disposición de este Acuerdo  (incluido el hecho de que Seabet no exija el cumplimiento estricto y literal o el cumplimiento de cualquier disposición de este Acuerdo) se interpretará de ninguna manera como una renuncia a cualquier incumplimiento posterior de dicha disposición o de cualquier incumplimiento de cualquier otra disposición de este Acuerdo.</p>
                      <p><b>27.2</b> Nada en este Acuerdo creará o conferirá ningún derecho u otros beneficios a favor de terceros que no sean parte de este Acuerdo.</p>
                      <p><b>27.3</b> Nada en este Acuerdo creará o se considerará que crea una asociación, agencia, acuerdo fiduciario, relación fiduciaria o empresa conjunta entre usted y Seabet.</p>
                      <p><b>27.4</b> Seabet puede ceder, transferir, cargar, sublicenciar o negociar de cualquier otra manera con este Acuerdo, o subcontratar cualquiera de sus derechos y obligaciones en virtud de este Acuerdo, a cualquier otra parte.</p>
                      <p><b>27.5</b> Este Acuerdo constituye el entendimiento y acuerdo completo entre usted y Seabet con respecto al Servicio y reemplaza cualquier acuerdo, entendimiento o arreglo anterior entre usted y Seabet.</p>

                      <h3>28. QUEJAS</h3>
                      <p><b>28.1</b> Si tiene una queja que presentar con respecto a nuestros servicios, puede ponerse en contacto con nuestro servicio de atención al cliente a través del chat en vivo o por correo electrónico (support{'@'}seabet.io). Nos esforzaremos por resolver la cuestión con prontitud.</p>

                  </div>`,
    responsibleContent: `<div>
                            <h2>Juego responsable</h2>

                            <p>En Seabet.io; Las plataformas y servicios que ofrecemos permiten a nuestros clientes disfrutar de juegos y apuestas. Nuestro objetivo es proporcionarle un entorno seguro y regulado que le brinde una experiencia agradable y gratificante. Alentamos a nuestros clientes a utilizar nuestros servicios de manera responsable y razonable.</p>
                            <p>Todo tipo de juegos de casino han sido populares durante muchos años, y en Seabet.io juegos están diseñados para brindar diversión a todos. También animamos a nuestros jugadores a divertirse sin dejar que el juego interfiera con su vida diaria y tomar tiempo con familiares y amigos. Es importante asegurarse de que la cantidad gastada en el juego sea solo el cambio o el dinero sobrante que queda después de todos los gastos en su vida, y es importante que el juego no sea un medio para ganarse la vida porque no puede garantizar un beneficio de él.</p>
                            <p>Aunque la mayoría de los jugadores jugarán de forma responsable y normal. Pero desafortunadamente, hay un pequeño número de jugadores que pueden tener el problema de permitirse el juego. </p>
                            <p>En Seabet.io, la calidad de vida / psicología de nuestros jugadores es importante para nosotros y nos tomamos muy en serio nuestro papel en el juego responsable y le aconsejamos:</p>
                            <ul>
                                <li>Piense en sus apuestas y juegos como una forma de entretenimiento, usando solo el dinero que apartó para el entretenimiento.</li>
                                <li>No haga apuestas ni apueste más de lo que puede pagar.</li>
                                <li>No apuestes ni apuestes con dinero que no puedas permitirte perder.</li>
                                <li>No persigas tus pérdidas.</li>
                                <li>No dejes que tus apuestas y/o juegos te quiten el tiempo que normalmente dedicas a otras actividades.</li>
                            </ul>

                            <p>Si tiene alguna inquietud sobre sus hábitos de juego y siente que no puede seguir estas recomendaciones, le recomendamos encarecidamente que busque asesoramiento de las siguientes organizaciones acreditadas que pueden brindarle ayuda y asesoramiento:</p>

                            <ul>
                                <li><a target="_blank" href="https://www.gamcare.org.uk/">GamCare</a></li>
                                <li><a target="_blank" href="https://keepitfun.rank.com/">Keep It Fun</a></li>
                                <li><a target="_blank" href="https://www.gamblingtherapy.org/">Gambling Therapy</a></li>
                              </ul>

                            <p>Además, si desea obtener información sobre nuestro proceso de autoexclusión, puede enviar un correo electrónico (support{'@'}seabet.io) a nuestro amable servicio de atención al cliente Seabet.io. A veces, un breve descanso puede ayudarlo a calmar sus pensamientos y evitar que tome decisiones de apuestas precipitadas que no coincidan con lo habitual.</p>
                            <p>Si lo solicita, colocaremos su cuenta con un período de reflexión de al menos 24 horas. Posteriormente, uno de nuestros agentes de soporte le notificará sobre la autoexclusión voluntaria disponible de 1 semana, 1 mes, 3 meses, 6 meses o permanente.</p>
                            <p>Tenga en cuenta; Las cuentas cerradas bajo nuestra política de autoexclusión no se pueden revocar ni reabrir por ningún motivo. Sin embargo, una vez que caduque su autoexclusión, le enviaremos un correo electrónico para informarle que su cuenta está activa nuevamente. La autoexclusión permanente existirá indefinidamente.</p>

                            <p>Menores</p>
                            <p>Si desea apostar con nosotros en Seabet.io, debe tener al menos 18 años de edad o la edad mínima legal para jugar (si es menor) en la jurisdicción en la que se encuentra según las leyes aplicables a usted.</p>

                            <p>Le recomendamos que si tiene menores de edad en su hogar, consulte los siguientes enlaces al software de control parental, que puede ser una herramienta útil para controlar y limitar a qué se puede acceder en su dispositivo.</p>

                            <ul>
                                <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                                <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                              </ul>
                        </div>`,
    amlContent: `<div>
                  <h2>Declaración contra el lavado de dinero y el financiamiento del terrorismo</h2>
                  <h3>1. Modelo de negocio de la empresa</h3>
                  <p>Seabet actualmente brinda soporte a sus usuarios en más de 169 países alrededor del mundo. Como parte de sus operaciones globales, Seabet ha implementado medidas de cumplimiento diseñadas para prevenir y detectar actividades ilegales en su plataforma. Estas incluyen la incorporación y evaluación de cumplimiento para sus clientes, así como controles basados en transacciones.</p>
                  <h3>2. Declaración de política de la empresa</h3>
                  <p>Seabet prohíbe y rechaza explícitamente el uso de sus productos para cualquier forma de actividad ilegal, incluyendo el lavado de dinero, el financiamiento del terrorismo o violaciones de sanciones comerciales, de acuerdo con las leyes, regulaciones y directrices nacionales contra el lavado de dinero (AML). Seabet sigue monitoreando los parámetros establecidos por el Grupo de Acción Financiera Internacional (GAFI) y otras organizaciones comerciales de juegos, así como la Comisión de Control de Juegos de Curazao, y tomará las medidas que considere apropiadas para reflejar los cambios en la legislación. Seabet tiene la intención de seguir las mejores prácticas globales y evitar que sus productos sean utilizados para facilitar tales actividades. Estas mejores prácticas incluyen:</p>
                  <ul>
                      <li>Adoptar políticas escritas, procedimientos y controles razonablemente diseñados para prevenir el lavado de dinero, el financiamiento del terrorismo y las violaciones de sanciones comerciales;</li>
                      <li>Designar, cuando corresponda, a un oficial de cumplimiento para supervisar la implementación de políticas, procedimientos y controles;</li>
                      <li>Proporcionar educación y capacitación relevante al personal pertinente;</li>
                      <li>Realizar revisiones independientes, monitoreo y mantenimiento de políticas, procedimientos y controles.</li>
                  </ul>
                  <h3>3. Definiciones</h3>
                  <p>Los siguientes términos definitorios son ampliamente utilizados en la industria:</p>
                  <p>Lavado de dinero: El proceso de hacer que las ganancias obtenidas ilegalmente parezcan legítimas. Este proceso generalmente implica tres etapas: colocación, estratificación e integración.</p>
                  <p>Colocación: El acto de depositar fondos ilegales en una institución financiera tradicional;</p>
                  <p>Estratificación: El proceso de separar los productos de actividades delictivas de su origen mediante el uso de transacciones financieras complejas, como la conversión de efectivo en cheques de viaje, giros postales, transferencias electrónicas, cartas de crédito, adquisición de acciones, bonos o bienes raíces;</p>
                  <p>Integración: El uso de transacciones aparentemente legítimas para mezclar fondos ilícitos con recursos legales, con el fin de reintroducirlos en el sistema financiero legal;</p>
                  <p>Actividad sospechosa: Actividad realizada por un usuario o no usuario que utiliza la institución financiera donde existen indicios de que la transacción puede estar motivada por fraude o actividades ilegales;</p>
                  <p>Sanciones: Medidas adoptadas por la comunidad internacional para prohibir o restringir ciertas actividades. Se utilizan para alentar un cambio de comportamiento, presionar a un país objetivo para que cumpla con los objetivos establecidos, como una herramienta de aplicación de la ley cuando se amenaza la paz y seguridad internacionales y han fallado los esfuerzos diplomáticos, así como prevenir y combatir el financiamiento del terrorismo o actos terroristas.</p>
                  <h3>4. Gobernanza y supervisión</h3>
                  <p>Seabet ha designado a un Director de Cumplimiento (CCO) para coordinar la implementación de las políticas y programas de AML. Las responsabilidades del Director de Cumplimiento también incluyen el desarrollo de planes AML, trabajar con otras partes interesadas para revisar las políticas de AML, evaluar nuevos requisitos regulatorios e investigar posibles actividades sospechosas o inusuales. Seabet también proporciona regularmente capacitación en AML a todos sus empleados.</p>
                  <h3>5. Educación y formación</h3>
                  <p>Seabet, con la asistencia de su asesor legal y bajo la supervisión de su CCO, puede proporcionar capacitación periódica en cumplimiento de AML, financiamiento del terrorismo y sanciones comerciales a sus empleados según sea necesario.</p>
                  <h3>6. Informes</h3>
                  <p>Seabet está obligado a informar cualquier transacción inusual o sospechosa de acuerdo con los decretos nacionales. Los clientes identificados en listas de sanciones relacionadas con el lavado de dinero, financiamiento del terrorismo u otras actividades delictivas, serán reportados al regulador como actividad sospechosa.</p>
              </div>`,
    selfExclusionContent: `<div>
                            <h2>Política de autoexclusión</h2>
                            <p>Si cree que ya no puede controlar su juego o apostar de forma segura, le ofrecemos la opción de autoexcluirse de las apuestas con nosotros. Para comenzar el período de reflexión como se describe a continuación, visite las preferencias de su cuenta.</p>

                            <h3>1. Visión general</h3>
                            <p>Para la mayoría de las personas, el juego es una actividad de ocio y entretenimiento agradable. Pero para algunos, el juego puede tener impactos negativos. Como resultado, hemos desarrollado esta política para comunicar nuestro enfoque de juego responsable y minimizar el daño a los consumidores que pueden ser vulnerables a los problemas con el juego.</p>

                            <h3>2. ¿Qué es el juego responsable?</h3>
                            <p>El "juego responsable" es un concepto amplio que tiene como objetivo garantizar que el juego se lleve a cabo de una manera que minimice el potencial de daño asociado con el problema del juego. Respeta la responsabilidad de los individuos por sus propias acciones, pero también reconoce una responsabilidad por parte de los proveedores de servicios.</p>

                            <h3>3. ¿Qué es el problema del juego?</h3>
                            <p>El problema del juego ocurre cuando una persona pierde el control sobre su juego, particularmente la cantidad de dinero apostado y la cantidad de tiempo dedicado al juego.</p>

                            <h3>4. Principios de atención al cliente</h3>
                            <p>En Seabet.io, queremos ser un líder de la industria en proporcionar un entorno seguro para nuestros clientes. Alentamos y promovemos activamente prácticas de juego responsables y proporcionamos herramientas para ayudar a nuestros clientes a mantener el control de sus juegos de azar.</p>

                            <h3>5. Política de juego responsable</h3>
                            <p>Estamos comprometidos a compartir la responsabilidad, con los gobiernos, las comunidades y los individuos, para ayudar a los clientes a controlar sus juegos de azar y ayudar a los jugadores con problemas a identificar su problema y buscar ayuda.</p>
                            <p>Algunas de las formas en que hacemos esto son: i. permitir que nuestros clientes se autoexcluyan (ya sea temporal o permanentemente) de apostar con nosotros; ii. proporcionar información y mensajes de Juego Responsable a nuestros clientes; iii. capacitar a nuestro personal sobre el juego responsable en la inducción y al menos una vez al año; iv. y referir a nuestros clientes afectados por problemas con el juego a servicios de soporte relacionados con el juego.</p>
                            <p>Nuestro objetivo es lograr los siguientes resultados:</p>
                            <ul>
                            <li>Minimizar el alcance del daño relacionado con el juego a las personas y a la comunidad en general;</li>

                            <li>Permitir a los clientes tomar decisiones informadas sobre sus prácticas de juego; </li>

                            <li>Permitir que las personas afectadas negativamente por los juegos de azar tengan acceso a asistencia e información oportunas y adecuadas; </li>

                            <li>Promover un entendimiento compartido entre individuos, comunidades, la industria del juego y el Gobierno de las prácticas de juego responsables; </li>

                            <li>Garantizar que la industria del juego proporcione entornos seguros y de apoyo para la entrega de productos y servicios de juegos de azar.</li>
                            </ul>
                            <h3>6. Menores de edad</h3>
                            <p>Como operador responsable, nos comprometemos a proteger a los menores tomando medidas activamente para excluir a los menores de realizar una apuesta utilizando nuestras plataformas de apuestas. Nuestros servicios están diseñados para atraer y ser utilizados por personas que tienen al menos 18 años de edad.</p>

                            <h3>7. Opciones de filtrado</h3>
                            <p>Las opciones de filtrado se pueden habilitar para ayudar a evitar que las personas ingresen a casinos en línea o sitios web de apuestas deportivas en línea. Si los menores tienen acceso al dispositivo que utiliza para acceder a nuestras plataformas de apuestas, le recomendamos que utilice un software de filtrado para evitar el acceso a nuestras plataformas de apuestas por parte de menores.</p>

                            <h3>8. Ayuda adicional</h3>
                            <p>En el caso de ayuda necesaria, póngase en contacto con nuestro equipo de soporte en support{'@'}seabet.io o en nuestro sistema de chat en vivo y uno de nuestros agentes podrá darle los detalles de las asociaciones y los números de teléfono de ayuda disponibles en su país.</p>

                            <h3>9. Condiciones y procesos</h3>
                            <p>Autoexcluirse significa dejar de apostar o apostar durante un tiempo determinado. La autoexclusión puede ser temporal o permanente.</p>
                            <p>Al solicitar uno de nuestros períodos de tiempo de autoexclusión que se ofrecen, acepta los siguientes términos y condiciones, que entrarán en vigencia desde el momento en que reciba un correo electrónico de confirmación de su autoexclusión elegida, este correo electrónico se enviará a la dirección de correo electrónico utilizada para registrar su cuenta solo y mostrará la fecha de finalización de la autoexclusión.</p>
                            <p>Las solicitudes realizadas a través de nuestra función de chat no serán atendidas. Sin embargo, un agente de atención al cliente lo dirigirá a nuestro servicio de correo electrónico de atención al cliente.</p>
                            <p>Al recibir una solicitud por correo electrónico para el cierre de la cuenta, la cuenta solicitada y cualquier cuenta vinculada se colocarán en nuestra primera etapa, período de reflexión de 24 horas que deshabilitará su cuenta o cuentas, sin permitir ninguna actividad de juego. Una vez que ha pasado este tiempo; Mientras su cuenta o cuentas permanezcan cerradas, un agente de atención al cliente le informará de las autoexclusiones de 1 semana, 1 mes, 6 meses y permanentes disponibles. No habrá variación de estos períodos de tiempo. Para continuar con este proceso, requeriremos una respuesta por correo electrónico. Si no recibimos una respuesta dentro de otras 24 horas, su cuenta será reabierta y confirmada por correo electrónico.</p>

                            <p>Si después de revisar nuestras opciones de autoexclusión decide que desea proceder con una autoexclusión permanente, se le pedirá que establezca un período de exclusión cuando se le solicite. En ocasiones, podemos decidir colocar una cuenta en un corto período de autoexclusión si creemos que es necesario o beneficioso para el cliente. Esto se comunicará por correo electrónico; Se aplicarán los términos y condiciones anteriores.</p>

                            <p>No se le permite dejar ningún saldo en su cuenta durante un período de tiempo de autoexclusión. No podrá acceder a su cuenta para retirar fondos durante la autoexclusión solicitada. Si tiene una cuenta afectada por una autoexclusión que tiene apuestas activas, la función Retirar dinero se aplicará en el momento de la confirmación de la autoexclusión. Las apuestas no serán nulas; Las apuestas no se devolverán ni permanecerán activas durante un período de tiempo de autoexclusión. Las apuestas no se restablecerán después de una finalización de autoexclusión. Si bien está autoexcluido, no es elegible para ningún tipo de beneficios, bonificaciones o recargas.</p>

                            <p>Una vez que se aplique una autoexclusión a su cuenta, permanecerá vigente hasta que finalice el tiempo de solicitud, no se revertirá ni disminuirá por ningún motivo. Las autoexclusiones permanentes permanecerán cerradas indefinidamente.</p>

                            <p>Haremos todos los esfuerzos razonables para garantizar el cumplimiento de nuestra política de autoexclusión del juego responsable. Sin embargo, usted acepta que no seremos responsables si intenta abrir una nueva cuenta o tener éxito. Además, no seremos responsables si continúa depositando y apostando utilizando cuentas adicionales que no se han revelado previamente. Cualquier apuesta futura, fondos de recompensa y participaciones en cualquier promoción durante un tiempo de autoexclusión solicitado se perderá, lo que resultará en la devolución de apuestas o el pago de ganancias. No podremos restablecerlos si la cuenta se vuelve a abrir después del período de autoexclusión. Después de la autoexclusión, usted reconoce que:</p>

                            <p>No debe intentar, depositar o realizar ninguna apuesta en ninguna de sus cuentas de las que haya solicitado ser excluido durante la autoexclusión seleccionada.</p>

                            <p>No debe intentar ni proceder a abrir ninguna cuenta nueva durante su período de autoexclusión, o indefinidamente si se ha seleccionado una autoexclusión permanente.</p>

                            <p>Si logra abrir una nueva cuenta durante un período de autoexclusión, nos esforzaremos por cerrar todas y cada una de esas cuentas lo antes posible.</p>
                            <p>Nuestra responsabilidad es solo tomar medidas razonables para evitar que apueste en cualquiera de nuestros productos. También es responsabilidad del cliente abstenerse de incumplir estos términos acordados.</p>

                            <p>Una solicitud de autoexclusión es una solicitud voluntaria hecha por usted. Si procede a actuar en contra de dicha solicitud, ni ninguno de sus empleados o personas afiliadas será responsable de las pérdidas que pueda sufrir. Cualquier pérdida incurrida durante el período de exclusión no será reembolsada.</p>

                            <p>Si actúa en contra de una solicitud de autoexclusión, nos reservamos la discreción de cancelar o anular cualquier apuesta que haya realizado y de tomar otras medidas apropiadas. Además, si tenemos sospechas o una investigación adicional proporciona evidencia de que ha intentado activamente disfrazar la fuente de su cuenta o cuentas, lo que afecta nuestra capacidad de bloquear su cuenta o cuentas con prontitud, la compañía se reserva la discreción de cancelar o anular cualquier apuesta que haya realizado y tomar otras medidas apropiadas.</p>

                            <p>Una vez que la autoexclusión seleccionada haya llegado a su fin, su cuenta se volverá a abrir automáticamente. Sin embargo, recibirá una confirmación por correo electrónico de esta información que se enviará a su dirección de correo electrónico registrada.</p>
                          </div>`,
    privacyContent: `<div>
                        <h2>Política de privacidad </h2>
                        <p>Seabet.io respeta y protege la privacidad de todos los usuarios de nuestros Servicios. Esta Política de privacidad ("Política") detalla cómo recopilamos, almacenamos, usamos y divulgamos su información personal.</p>
                        <h3>1. Ámbito de aplicación </h3>
                        <p>Esta Política se aplica a su acceso y uso de Seabet.io (el "Sitio web") y todos los sitios web y aplicaciones bajo la marca Seabet, incluidas todas nuestras aplicaciones móviles y aplicaciones para tabletas. Además, esta Política también se aplica cuando interactuamos con usted de otras maneras.</p>
                        <h3>2. Consentimiento y modificación del usuario</h3>
                        <p>Al utilizar el sitio web de Seabet, usted acepta estar sujeto a esta Política. Nos reservamos el derecho, a nuestra entera discreción, de modificar o cambiar esta Política en cualquier momento, y publicaremos dichos cambios en el Sitio, y dichos cambios entrarán en vigencia inmediatamente después de su publicación. Su uso continuado del Sitio después de dichos cambios constituye su aceptación de dichos cambios. Esta Política no se aplica a otros sitios web vinculados a este sitio web.</p>
                        <h3>3. Información personal recopilada</h3>
                        <ul>
                            <li>Podemos recopilar y procesar los siguientes tipos de información personal:</li>
                            <li>Nombre</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Información de preferencias enviada por el usuario</li>
                            <li>Fecha de nacimiento</li>
                            <li>Nacionalidad</li>
                            <li>Dirección física</li>
                            <li>Número de identificación del gobierno</li>
                            <li>Identificación emitida por el gobierno</li>
                            <li>Datos de ubicación</li>
                            <li>Información del dispositivo</li>
                            <li>Dirección IP</li>
                        </ul>
                        <p>Esta información se deriva principalmente de la información que proporciona cuando se registra para obtener una cuenta o se comunica con nosotros.</p>
                        <h3>4. Propósito de la recopilación</h3>
                        <p>Recopilamos su información personal para:</p>
                        <ul>
                            <li>Realizar la verificación de identidad del cliente (KYC)</li>
                            <li>Para permitirle suscribirse a nuestras comunicaciones de marketing</li>
                            <li>Para procesar su solicitud de membresía</li>
                            <li>Para proporcionar y mejorar nuestros servicios</li>
                            <li>Identificar y verificar su identidad</li>
                            <li>Comunicarnos con usted</li>
                            <li>Realización de estudios de mercado y actividades promocionales</li>
                            <li>Para responder a sus preguntas y solicitudes</li>
                            <li>Para cumplir con nuestras obligaciones contractuales y legales</li>
                        </ul>

                        <h3>5. Uso y divulgación de información personal</h3>
                        <p>Podemos utilizar su información personal para actividades de marketing y podemos informarle sobre productos o servicios que creemos que pueden ser de su interés por correo electrónico, mensaje de texto o teléfono. Si ya no desea recibir información de marketing o promocional de nosotros, puede darse de baja en cualquier momento poniéndose en contacto con nosotros por correo electrónico.</p>
                        <h3>6. Seguridad de la información personal</h3>
                        <p>El Usuario entenderá que la transmisión de datos de Internet no es absolutamente segura, Seabet.io no puede garantizar la seguridad absoluta de la información cargada por el Usuario en la Plataforma, y el Usuario asumirá el riesgo. Sin embargo, después de recibir la transmisión de la información del usuario, Seabet.io tomará las medidas apropiadas para evitar el uso indebido, la pérdida y el acceso no autorizado, la modificación y la divulgación de la información personal del usuario. Esto incluye el uso de protección con contraseña de sistemas y bases de datos, así como el uso de la tecnología Secure Sockets Layer (SSL). Al utilizar nuestros Servicios o proporcionar información personal, los usuarios aceptan que podemos comunicarnos con usted electrónicamente con respecto a cuestiones de seguridad, privacidad y administrativas relacionadas con el uso de los Servicios. Seabet.io empleados, agentes y contratistas están obligados a mantener la confidencialidad de la información personal y las transacciones de los miembros. La información publicada por los usuarios en plataformas públicas o entornos de redes sociales (por ejemplo, Facebook, Twitter) se considerará información pública, Seabet.io no se puede garantizar la seguridad de dicha información.</p>
                        <p>Hacemos hincapié en que nuestros servicios no están dirigidos a niños y no aceptamos cuentas o información personal. Sin embargo, los padres o tutores tienen la obligación de monitorear las actividades de Internet de sus hijos. Asegúrese de cerrar sesión en su cuenta tan pronto como termine de usar el sitio web, especialmente si está compartiendo su dispositivo. El Usuario es responsable de la seguridad y los derechos de acceso de los dispositivos utilizados para acceder al Sitio Web. En última instancia, los usuarios mantienen la confidencialidad de los nombres de usuario, contraseñas e información de la cuenta y están atentos al usar Internet y nuestro sitio web.</p>
                        <h3>7. Acceso a la información personal</h3>
                        <p>Los usuarios pueden acceder a la información personal recopilada por Seabet.io haciendo clic en el enlace "Configuración" en el sitio web o enviando un correo electrónico al support{'@'}Seabet.io. Responderemos a la solicitud de acceso del usuario dentro de un período de tiempo razonable. Si no podemos cumplir con su solicitud, le informaremos por escrito de los motivos de la denegación de acceso y del mecanismo de reclamación.</p>
                        <h3>8. Eliminación de datos personales</h3>
                        <p>Si ya no es posible procesar o almacenar legalmente los datos personales del usuario, el usuario tiene derecho a solicitar su eliminación. Sin embargo, este derecho no es absoluto y si Seabet.io están sujetos a obligaciones legales, no podrá cumplir con los requisitos del usuario. Por favor, haga una solicitud enviando un correo electrónico a support{'@'}Seabet.io.</p>
                        <h3>9. Contacto</h3>
                        <p>Si tiene alguna pregunta, solicitud o queja sobre nuestro procesamiento de su información personal, contáctenos por correo electrónico support{'@'}Seabet.io o la función de chat de atención al cliente del sitio web.</p>



                        <h3>10. Transferencias internacionales de datos</h3>
                        <p>Podemos transferir, procesar y almacenar información en todo el mundo, incluidos, entre otros, otros países cuyas leyes de protección de datos pueden diferir de las de su ubicación. Protegeremos su información tanto como sea posible y según lo exija la ley aplicable.</p>
                        <h3>11. Raíz de la base legal para el procesamiento</h3>
                        <p>De acuerdo con el Reglamento General Global de Protección de Datos, Seabet.io procesamiento de su información personal tiene las siguientes bases legales: ejecución de un contrato, intereses legítimos, consentimiento del usuario y cumplimiento de una obligación legal.</p>
                        <h3>12. Actualizaciones de la Política de Privacidad</h3>
                        <p>Seabet.io puede revisar, cambiar y actualizar periódicamente esta Política de privacidad para reflejar nuestras prácticas y responsabilidades. Publicaremos la última Política de privacidad en el sitio web Seabet.io. Los usuarios deben revisar periódicamente esta Política de privacidad para familiarizarse con sus términos.</p>
                    </div>`,
    fairnessContent: `<div>
                        <h2>Equidad</h2>
                        <p>Antes de poder realizar apuestas en monedas fiduciarias, incluida la criptomoneda, debe registrarse para obtener una cuenta en Seabet.io sitio web. Su uso de la Seabet.io (el "Sitio web") y la apertura de una cuenta con el Seabet.io se considerará leído, entendido y obligado por estos Términos y condiciones.</p>

                        <p>Definición</p>
                        <p>Seabet.io – referida como "nosotros" o "compañía".</p>
                        <p>Jugador: denominado "usted" o "jugador" o "miembro" o "cliente" o "titular de la cuenta".</p>
                        <p>Juegos – Se refiere a los casinos y otros juegos RNG (Generador de números aleatorios), que pueden estar disponibles en el sitio web de vez en cuando.</p>
                        <p>Sitio web: significa un sitio web utilizado por Seabet.io Player a través de plataformas de escritorio, móviles u otras.</p>
                        <p>Cuenta de miembro: una cuenta de usuario necesaria para acceder y utilizar el Sitio.</p>
                        <p>Atención al cliente - Servicios de asistencia y soporte proporcionados por la Compañía a sus clientes.</p>
                        <p>Evento: significa un evento deportivo o de apuestas o un partido o juego dentro de un deporte en el que un cliente puede apostar por el resultado.</p>
                        <p>Criptomonedas: deben leerse como "Bitcoin, altcoins y / o (si corresponde) otras criptomonedas compatibles". </p>
                        <p>Moneda fiduciaria - Un producto físico monetario no respaldado emitido por un gobierno o autoridad del banco central, como oro o plata (por ejemplo, dólar estadounidense, real brasileño, yen japonés, personas).</p>
                        <p>Jurisdicciones restringidas: licencias específicas de cada país que están sujetas a restricciones en nuestros juegos, por lo tanto, los usuarios ubicados en o desde esas regiones tienen prohibido registrarse y jugar en el Sitio. La lista de jurisdicciones restringidas puede actualizarse de vez en cuando y se puede acceder a través del siguiente enlace.</p>

                        <h3>1. Generalidades</h3>
                        <p><b>1.1</b> Estos términos y condiciones ("Términos y condiciones") se aplican a las apuestas deportivas y al uso de juegos de casino accesibles a través del sitio web. </p>

                        <p><b>1.2</b> Estos  Términos y Condiciones son efectivos inmediatamente después de completar el proceso de registro, incluida la marca de la casilla para aceptar estos Términos y Condiciones y tener éxito.</p>
                        <p>Crea una cuenta. Al utilizar cualquier parte del Sitio después de crear una cuenta, usted acepta que estos Términos y Condiciones se aplican al uso del Sitio.</p>

                        <p><b>1.3</b> Creación de una cuenta. Si no está de acuerdo con alguna disposición de estos Términos y condiciones, no debe crear una cuenta ni continuar utilizando el Sitio. </p>

                        <p><b>1.4</b> Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Si realizamos dichos cambios, podemos tomar las medidas apropiadas para recordarle esos cambios, como publicar un aviso por correo electrónico o en el sitio web y los Términos y condiciones revisados, pero usted es el único responsable de verificar cualquier enmienda, actualización y / o modificación. Si determinamos que se considera que cualquier cambio en estos Términos tiene un impacto "material" en sus derechos u obligaciones en virtud de estos Términos y condiciones, haremos todos los esfuerzos razonables para notificarle por correo electrónico o publicándolo en el sitio web. Su uso continuado de los Servicios y el Sitio Web de la Compañía después de dichas enmiendas a los Términos y Condiciones se considerará como su aceptación y acuerdo de estar sujeto a dichas enmiendas, actualizaciones y / o modificaciones. </p>

                        <p><b>1.5</b> Estos Términos y Condiciones pueden publicarse en varios idiomas con fines informativos y para facilitar el acceso de los jugadores. En caso de discrepancia entre su relación con nosotros y la traducción, la versión en inglés de estos Términos y Condiciones prevalecerá para cualquier tipo. </p>

                        <h3>2. Declaraciones vinculantes</h3>
                        <p><b>2.1</b>  Al aceptar estar sujeto a estos Términos y Condiciones, también acepta estar sujeto a las Reglas del sitio web y la Política de privacidad, que se incorporan aquí como referencia, junto con las Condiciones. En caso de cualquier inconsistencia, prevalecerán estos Términos y Condiciones. Por la presente, usted declara y garantiza que:</p>

                        <p><b>2.1.1</b> Tiene al menos 18 años de edad; </p>

                        <p><b>2.1.2</b> Usted es plenamente capaz de celebrar acuerdos legalmente vinculantes con nosotros y no está sujeto a ningún tipo de capacidad legal limitada; </p>

                        <p><b>2.1.3</b> Usted participa en el Juego a título estrictamente personal y no profesional; y participación únicamente con fines de entretenimiento y entretenimiento; </p>

                        <p><b>2.1.4</b> Usted se representa a sí mismo y no en nombre de ninguna otra persona; </p>

                        <p><b>2.1.5</b>  Toda la información que nos proporcione durante la vigencia de este Acuerdo es verdadera, completa y correcta, y deberá notificarnos inmediatamente cualquier cambio en dicha información; </p>

                        <p><b>2.1.6</b> Usted es el único responsable de informar y contabilizar cualquier impuesto, tarifa, cargo o impuesto aplicable a usted bajo cualquier ley local o relevante de su lugar de residencia por cualquier ganancia que reciba de nosotros; </p>

                        <p><b>2.1.7</b> Usted entiende que al utilizar nuestros Servicios, correrá el riesgo de perder los fondos depositados en su Cuenta de Miembro y acepta que es el único responsable de dichas pérdidas; </p>

                        <p><b>2.1.8</b>  No utilizará nuestros Servicios en ninguna jurisdicción ubicada en nuestra lista donde nuestros Servicios estén restringidos. </p>

                        <p><b>2.1.9</b> Su jurisdicción le permite utilizar los servicios de apuestas deportivas y casino en línea; </p>

                        <p><b>2.1.10</b> En relación con el depósito y retiro de fondos en su Cuenta de miembro, solo puede usar criptomonedas y / o cualquier moneda fiduciaria válida y legal que le pertenezca; </p>

                        <p><b>2.1.11</b> Usted acepta y reconoce que el valor de las Criptomonedas puede variar sustancialmente dependiendo del valor de mercado. </p>

                        <p><b>2.1.12</b> El software informático, los gráficos por computadora, los sitios web y las interfaces de usuario que le proporcionamos son propiedad de la Compañía o sus afiliados y están protegidos por ella bajo las leyes de derechos de autor. Solo puede usar el Software para su propio uso de entretenimiento personal: de acuerdo con todas las reglas, términos y condiciones establecidos por nosotros y de acuerdo con todas las leyes, normas y regulaciones aplicables bajo la Licencia de juego de Curazao; </p>

                        <p><b>2.1.13</b> Usted entiende que las criptomonedas no se consideran moneda de curso legal y, por lo tanto, en el sitio web se consideran fondos virtuales sin valor intrínseco. </p>

                        <p><b>2.1.14</b> Usted confirma que no es un funcionario, director, empleado, consultor o agente de la Compañía ni trabaja para ninguna compañía en relación con la Compañía o para un pariente o cónyuge de cualquiera de los anteriores; </p>

                        <p><b>2.1.15</b> No ha sido diagnosticado o clasificado como jugador compulsivo o problemático. No somos responsables de los juegos de azar si surgen tales problemas durante el uso de nuestros servicios, pero nos esforzaremos por informarle de la asistencia pertinente disponible. Nos reservamos el derecho de implementar un período de reflexión si creemos que tales acciones serían beneficiosas. </p>

                        <p><b>2.1.16</b> Si usted es una Persona Políticamente Expuesta o miembro de una familia de una Persona Políticamente Expuesta, usted acepta y reconoce que es posible que necesitemos revisar o suspender su cuenta sin previo aviso para que podamos cumplir con cualquier obligación de diligencia debida en la que podamos estar. Usted reconoce que cualquier decisión con respecto al estado de su cuenta se toma únicamente a nuestra entera discreción, lo que puede incluir el cierre permanente de su cuenta; </p>

                        <p><b>2.1.17</b> solo tiene una cuenta con nosotros y acepta no abrir ninguna cuenta con nosotros; </p>

                        <p><b>2.1.18</b> Usted acepta y reconoce que nos reservamos el derecho de detectar y prevenir el uso de tecnologías prohibidas, incluidas, entre otras, la detección fácil de fraude, el registro automatizado, el juego y las tecnologías de captura de pantalla. Estos pasos pueden incluir, entre otros, verificar la capacidad del dispositivo del jugador, detectar geolocalización y enmascaramiento de IP, transacciones y análisis de blockchain; </p>

                        <p><b>2.1.19</b> acepta que terminemos y/o cambiemos el uso del sitio web y rechacemos y/o restrinjamos las apuestas; </p>

                        <h3>3. Regístrese y abra su cuenta de miembro</h3>
                        <p><b>3.1</b> Para poder realizar apuestas en nuestro sitio web, primero debe registrarse para obtener una cuenta con nosotros en persona ("Cuenta de miembro"). </p>

                        <p><b>3.2</b> No puede registrarse y no aceptamos de jurisdicción limitada. Es su responsabilidad determinar si su acceso y uso de nuestro sitio web cumple con las reglas, leyes y regulaciones aplicables a usted, y usted garantiza que el juego no es ilegal con nosotros en el territorio en el que vive. Al registrarse para obtener una cuenta, nosotros y usar el Sitio, usted confirma que no se encuentra en o desde una jurisdicción restringida y no utiliza ningún software de terceros para acceder a nuestro sitio web desde una jurisdicción restringida. </p>

                        <p><b>3.3</b> Si se encuentra en o desde una jurisdicción restringida y abre o utiliza el sitio web: podemos cerrar su cuenta inmediatamente; cualquier ganancia y recompensa se perderá y el saldo será reembolsado (sujeto a una tarifa razonable), así como cualquier devolución, bonificación que haya ganado o recompensas acumuladas serán confiscadas por usted y pueden ser retiradas por nosotros; Usted nos devolverá dichos fondos retirados a petición. </p>

                        <p><b>3.4</b> Si intenta abrir más de una Cuenta de miembro, nos reservamos el derecho de bloquear, suspender o cerrar su Cuenta de miembro, así como de congelar cualquier fondo acreditado en su Cuenta. </p>

                        <p><b>3.5</b> Si se da cuenta de que tiene más de una Cuenta de Miembro Registrado, debe notificarnos inmediatamente. De lo contrario, puede congelarse su cuenta de miembro. </p>

                        <p><b>3.6</b> Esperamos que nos informe inmediatamente de cualquier inexactitud relacionada con su cuenta, o cualquier error de cálculo relacionado con cualquier apuesta realizada por usted. Nos reservamos el derecho de anular cualquier apuesta afectada por dichos errores y revertir en consecuencia. </p>

                        <p><b>3.7</b> Si no utiliza una cuenta con un saldo positivo durante un período de 3 meses, se lo notificaremos. Si no utiliza su saldo dentro de 1 mes de nuestra notificación, podemos eliminar el saldo de su cuenta para proteger sus fondos. Si esto sucede, contáctenos en support{'@'}seabet.io Vuelva a abrir su cuenta y recupere sus fondos. </p>

                        <p><b>3.8</b>  Si el saldo de su cuenta es positivo y ha estado inactivo durante más de 12 meses, nos reservamos el derecho de deducir una tarifa de administración mensual equivalente al 5% de su saldo.</p>

                        <p><b>3.9</b> Debe ingresar toda la información requerida en el formulario de registro, incluida una dirección de correo electrónico válida. Si no ingresa una dirección de correo electrónico válida, no podremos brindarle asistencia para recuperar las "contraseñas olvidadas". Usted es el único responsable de garantizar que la información que proporciona es verdadera, completa y correcta. </p>

                        <p><b>3.10</b> Nos reservamos el derecho de llevar a cabo procedimientos de verificación "KYC" (Conozca a su cliente) y si determinamos que ha proporcionado información falsa o engañosa. </p>

                        <p><b>3.11</b> Como parte del proceso de registro, usted está obligado a completar el proceso de inicio de sesión en el sitio web. Tendrás que elegir un nombre de usuario que no sea ofensivo o polémico. Usted es responsable de la seguridad de sus datos de inicio de sesión y tiene estrictamente prohibido divulgarlos a cualquier persona. Usted será responsable de cualquier uso indebido de su Cuenta de Miembro por parte de un tercero como resultado de su divulgación, ya sea intencional, accidental o activa o pasivamente proporcionada a cualquier tercero. </p>

                        <p><b>3.12</b> Si cambia su contraseña, no podrá retirar fondos durante 48 horas por razones de seguridad. </p>

                        <h3>4. Seguridad</h3>
                        <p><b>4.1</b> Al registrarse a través del sitio web, se le pedirá que seleccione una contraseña para autenticar su cuenta de membresía utilizando el sitio web. </p>

                        <p><b>4.2</b> Usted acepta mantener su contraseña confidencial y defenderse contra cualquier uso indebido de su contraseña. Bajo ninguna circunstancia reembolsaremos ninguna pérdida sufrida como resultado del uso de su cuenta por parte de un tercero y, además, usted es el único responsable del uso de sus datos de inicio de sesión por parte de terceros y nos eximirá de las consecuencias que surjan y sean condenables. </p>

                        <p><b>4.3</b> Usted acepta que si cree que la información de su cuenta está siendo mal utilizada por un tercero, para que podamos suspender su cuenta. Le recomendamos que deshabilite cualquier memoria de contraseña automática en su navegador, utilice la verificación en dos pasos y otras medidas similares para limitar el riesgo de uso no autorizado de su cuenta. </p>

                        <h3>5. Depósitos</h3>
                        <p><b>5.1</b> Solo puede participar en cualquier juego si tiene fondos suficientes en su Cuenta de Miembro para dicha participación. </p>

                        <p><b>5.2</b> Puede depositar en criptomoneda o moneda fiduciaria. El monto mínimo de depósito se puede encontrar en nuestro centro de depósito. Todos los montos mínimos de depósito especificados son por operación. Los depósitos más pequeños no se sumarán. Cualquier monto de depósito por debajo del monto mínimo de depósito especificado no es válido y no se acreditará al saldo de su cuenta de usuario ni se devolverá a la fuente. Si el depósito no cumple con el depósito mínimo indicado por nosotros, la empresa no es responsable de los requisitos. </p>

                        <p><b>5.3</b> Para depositar fondos en su Cuenta de miembro, puede hacerlo desde una billetera criptográfica y una cuenta bajo su control. Los depósitos solo se pueden hacer con sus propios fondos. </p>

                        <p><b>5.4</b> El Sitio web no puede garantizar que todas las monedas sean admitidas de forma nativa en el Juego. </p>

                        <p><b>5.5</b> En el momento de su primer depósito y durante toda la vida de su cuenta, nos reservamos el derecho de utilizar otros procedimientos y métodos para verificar su identidad al procesar su depósito. La verificación implicará identificación personal. También es posible que necesitemos documentación adicional que confirme la propiedad de su método de pago y dirección, como parte del proceso de verificación. </p>

                        <p><b>5.6</b> Algunos métodos de pago pueden incluir tarifas adicionales. En este caso, la tarifa será clara y visible en el cajero. </p>

                        <p><b>5.7</b> Su banco o proveedor de servicios de pago puede cobrarle tarifas monetarias adicionales durante el proceso de depósito de acuerdo con sus términos y condiciones y su acuerdo de conversión de usuario. </p>

                        <h3>6. Retiros</h3>
                        <p><b>6.1</b> Todos los retiros se procesarán de acuerdo con nuestra política de retiro a continuación. Los retiros criptográficos se solicitarán cuando la dirección de la billetera de criptomonedas que ingresó sea válida. Para retirar dinero, primero debe verificar su dirección de correo electrónico registrada desde el perfil de su cuenta. Para retirar los fondos depositados, debemos hacer al menos 3 confirmaciones de blockchain del depósito allí antes de solicitar un retiro. Los retiros de Fiat deben acreditarse a su solicitud personal de cuenta fiduciaria en el momento en que se realiza un retiro válido. Los retiros de moneda fiduciaria pueden tardar hasta 3 días hábiles desde el momento en que son aprobados por el proveedor de servicios de pago. </p>

                        <p><b>6.2</b> El monto mínimo de retiro se puede encontrar en nuestro Centro de retiro. Todos los montos especificados son por transacción. </p>

                        <p><b>6.3</b> El monto de cualquier ganancia que se acredite incorrectamente en su Cuenta sigue siendo propiedad y se deduce automáticamente de su Cuenta en caso de detección de errores. Si la entrada es incorrecta, está obligado a notificarnos inmediatamente. Cualquier bono acreditado erróneamente en su cuenta y posteriormente retirado por usted (sin perjuicio de otros recursos y acciones que puedan estar legalmente disponibles) constituye una deuda válida legalmente exigible que usted debe a la Compañía por el monto de dichas ganancias erróneamente adquiridas. En tales casos, nos reservamos el derecho de iniciar procedimientos de recuperación de deudas si usted no libera voluntariamente las deudas pendientes. </p>

                        <p><b>6.4</b> Para retiros de fiat y criptomonedas, el Sitio se reserva el derecho de exigir 1x apuesta igual a la cantidad depositada antes de la aceptación de la solicitud de retiro. </p>

                        <p><b>6.5</b> Nos reservamos el derecho de bloquear / retrasar el procesamiento de las solicitudes de retiro hasta que se realice una solicitud de una copia de una identificación válida con foto, comprobante de domicilio y / o tarjeta de débito para nuestra satisfacción (KYC). </p>

                        <p><b>6.6</b> El sitio web se reserva el derecho de realizar procedimientos adicionales de verificación KYC en cualquier Contenido para retirar criptomonedas que excedan los 2500 € o su equivalente, sujeto a nuestra licencia de juego regulada, y además se reserva el derecho de realizar dichos procedimientos de verificación en caso de retiros menores, según lo requiera nuestra licencia de juego. Se recomienda a los titulares de cuentas que deseen recuperarse que se pongan en contacto con Atención al cliente para obtener fondos mantenidos en cuentas cerradas, bloqueadas o excluidas. </p>

                        <p><b>6.7</b> Todas las transacciones serán verificadas para prevenir el lavado de dinero. El Sitio puede suspender, congelar o cerrar su cuenta de miembro y retener fondos (si es necesario hacerlo) en virtud de la Ley de Prevención de Lavado de Dinero o cualquier otra base legal requerida por la Ley de Prevención de Lavado de Dinero o cualquier otra base legal requerida por la Ley de Prevención de Lavado de Dinero. Los retiros pueden estar sujetos a una diligencia debida mejorada en lugar de apuestas,  y si no procesa un retiro, nos reservamos el derecho de no procesar un retiro para cumplir con dichos requisitos adicionales de diligencia debida. </p>

                        <p><b>6.8</b> Nos reservamos el derecho de aplicar el monto del requisito de apuesta de al menos 5 (cinco) veces el depósito si sospechamos que un Usuario está utilizando nuestros Servicios como mezclador. El uso de nuestros Servicios para cualquier propósito que no sea entretenimiento está estrictamente prohibido. </p>

                        <p><b>6.9</b> Usted reconoce que los fondos en su Cuenta se agotan inmediatamente mientras juega al Juego y que no ofrecemos devoluciones, reembolsos o cancelaciones retroactivas de su Cuenta. </p>

                        <p><b>6.10</b> En el caso de un gran número de solicitudes de retiro, podemos optar por procesar hasta 1,000,000 USDT por semana o equivalente en otra moneda hasta que se liquide por completo. </p>

                        <p><b>6.11</b> Nos reservamos el derecho de deducir cualquier transacción incurrida u otras tarifas de cualquier tarifa de transacción u otros cargos la cantidad que retire.</p>

                        <p><b>6.12</b> Usted acepta que ciertas promociones pueden estar sujetas a restricciones de retiro y / o requisitos que deben cumplirse antes de que los fondos puedan acreditarse a la promoción. Dichos términos se publicarán oficialmente y estarán disponibles como parte de la Promoción. Si elige retirar antes de que se cumplan los requisitos de apuesta aplicables, deduciremos el monto total del bono y el monto asociado con el uso del bono antes de que se apruebe cualquier retiro. Este sitio web se reserva el derecho de imponer sus propios derechos, discreción, restricciones geográficas en programas de recompensas individuales. </p>

                        <p><b>6.13</b> Tenga en cuenta que algunos métodos de pago pueden incluir tarifas adicionales. En este caso, la tarifa será claramente visible en el cajero. </p>

                        <p><b>6.14</b> Tenga en cuenta que su banco o proveedor de servicios de pago puede cobrarle tarifas adicionales por depósitos, retiros en conversión de moneda de acuerdo con sus términos y condiciones y su Acuerdo de usuario. </p>

                        <h3>7. Fondos</h3>
                        <p><b>7.1</b> El Cliente no puede transferir o convertir fondos entre el Monedero y la Divisa. </p>

                        <p><b>7.2</b> Usted ha proporcionado los detalles necesarios para realizar un depósito de criptomonedas en el sitio web en la página de depósito. </p>

                        <p><b>7.3</b> No proporcionamos crédito por el uso de nuestros Servicios. </p>

                        <p><b>7.4</b> No recibirá ningún interés sobre el saldo que tiene en el sitio web y reconoce que la Compañía no es una institución financiera. </p>

                        <p><b>7.5</b> Si su Cuenta se procesa dos o más veces por cualquier motivo debido a cualquier tipo de error o solicitud de retiro, usted acepta reembolsar al Sitio Web en su totalidad por dicho monto de sobregiro. </p>

                        <p><b>7.6</b> Si determinamos, a nuestra entera discreción, que está utilizando el método de "doble gasto", el sitio web anulará todas las apuestas y bonos. Específicamente, si gana, confirma su cadena de bloques de depósito e intenta retirar, todas las ganancias se perderán y su cuenta se perderá y se cerrará permanentemente. Si intenta descargar desde cualquier cuenta conectada. </p>


                        <h3>8. Recompensas y promociones</h3>
                        <p><b>8.1</b> El sitio web se reserva el derecho de cancelar cualquier  promoción, recompensa o programa de recompensas (incluidos, entre otros, recompensas monetarias gratuitas, recompensas de depósito, bonos de depósito y programas de lealtad) si creemos que la recompensa se establece incorrectamente o se está abusando de ella, no se utiliza dentro de las 72 horas posteriores a la recepción de su cuenta, a menos que se indique lo contrario en los términos y condiciones separados de la promoción,  Recompensa u oferta especial y dicha recompensa ha sido pagada, nos reservamos el derecho de rechazar cualquier solicitud de retiro y deducir esa cantidad de su cuenta. Si la recompensa se establece de manera incorrecta o abusiva será determinado por el sitio web a su entera discreción. </p>

                        <p><b>8.2</b> Si utiliza un Bono de depósito, no aceptará un bono que haya retirado previamente su depósito original y que haya cumplido con los requisitos establecidos en los Términos y condiciones del depósito. </p>

                        <p><b>8.3</b> Incumplimiento de cualquiera de los términos  de una oferta o promoción, o cuando haya alguna evidencia de que hay una serie de apuestas realizadas por un cliente o grupo de clientes, debido a bonos de depósito, pagos mejorados, apuestas gratuitas, apuestas sin riesgo o cualquier otra garantía de resultado de oferta promocional, independientemente del resultado, ya sea individualmente o como parte de un grupo,  El sitio web de Customer Profit se reserva el derecho de reclamar los elementos de bonificación de dichas ofertas y se reserva el valor absoluto de su absoluta discreción para liquidar apuestas con cuotas correctas, cancelar el bono de apuesta gratis y arriesgar apuestas gratuitas o cancelar cualquier apuesta financiada por el bono de depósito. Además, este sitio web se reserva el derecho de cobrar una tarifa de administración al cliente, hasta el valor del bono de depósito, bono de apuesta gratis, apuesta sin riesgo o pago adicional para cubrir la tarifa de administración. Además, nos reservamos el derecho de exigir a cualquier cliente que proporcione documentación suficiente para nuestra absoluta satisfacción con cualquier recompensa, apuesta gratis, apuesta sin riesgo o cuenta que se les proporcione. </p>

                        <p><b>8.4</b> Todas las ofertas del sitio web están destinadas a jugadores ocasionales y el sitio web puede, a su entera discreción, limitar la elegibilidad del cliente para participar en la totalidad o parte de la promoción. </p>

                        <p><b>8.5</b> El sitio web se reserva el derecho, a su entera discreción, de modificar, cancelar, retirar o rechazar cualquier promoción. </p>

                        <p><b>8.6</b> Las recompensas solo se pueden reclamar una vez por persona/cuenta, hogar, hogar, dirección, dirección de correo electrónico, dirección IP y entorno de uso compartido de computadoras (universidad, escuela, biblioteca pública, lugar de trabajo, etc.). La Compañía se reserva el derecho de cerrar su cuenta y perder cualquier fondo existente si se encuentra evidencia de abuso / fraude. </p>

                        <p><b>8.7</b> Usted reconoce y comprende que existen términos y condiciones separados para promociones, recompensas y ofertas especiales, y suplementos a estos términos y condiciones, para las siguientes áreas. Estos términos y condiciones se establecen en la página de contenido respectiva del sitio web o, según sea el caso, se le proporcionan personalmente. En caso de conflicto entre las disposiciones de dichas promociones, recompensas y ofertas especiales, y los términos y condiciones de estos Términos, prevalecerán las disposiciones de dichas promociones, recompensas y ofertas especiales. </p>

                        <p><b>8.8</b> Nos reservamos el derecho de insistir en que apueste una cierta cantidad en su propio depósito utilizando cualquier fondo de bonificación que hayamos acreditado en su cuenta. La cantidad exacta es la requerida según lo establecido en los términos y condiciones de la promoción. </p>

                        <p><b>8.9</b> Su participación en ciertas promociones puede estar sujeta a restricciones de retiro y / o ciertos requisitos pueden ser necesarios antes de que los fondos puedan ser acreditados a la promoción. Estos Términos se publicarán oficialmente como parte de la Promoción y para su referencia. Si elige retirar si no se cumplen los requisitos de apuesta aplicables, deduciremos el monto total del bono de su cuenta y todas las ganancias asociadas que surjan del uso del bono antes de que podamos aprobar cualquier solicitud de retiro.</p>
                        <p><b>8.10</b>  Las ganancias apostadas con apuestas gratis se calculan como "Retorno total menos la cantidad apostada (incluida la cantidad de apuesta gratis"). Por lo tanto, el valor de sus apuestas gratuitas no está incluido ni puede usarse como una apuesta gratuita de usted. </p>

                        <p><b>8.11</b> Tenga en cuenta que la apuesta de la apuesta gratis no se reembolsará si la apuesta es anulada. </p>

                        <p><b>8.12</b> Debe recibir Recompensas en su Cuenta de Miembro a menos que se indique lo contrario en una promoción, recompensa u oferta especial. Cuando las recompensas y / o programas de recompensas no se utilizan dentro de las 72 horas posteriores a la recepción, este sitio web se reserva el derecho de cancelar dichas recompensas y / o programas de recompensas y puede deducir recompensas o recompensas similares por bonificaciones o recompensas similares o rotaciones gratuitas inmediatamente después de 72 horas. </p>

                        <p><b>8.13</b> Al intercambiar opiniones, opiniones, comentarios o acciones de los clientes al ofrecer recompensas (incluidas, entre otras, apuestas gratuitas o giros gratis), dichos incentivos se limitarán estrictamente a una encuesta / promoción por usuario durante el período de tiempo correspondiente. </p>

                        <p><b>8.14</b> Las promociones pueden publicarse en varios idiomas para acceso informativo y de jugadores. La versión en inglés es la única base legal para su relación con nosotros y en caso de cualquier discrepancia en cualquier tipo de traducción, el idioma inglés prevalecerá sobre la versión de estos Términos y condiciones. </p>

                        <p><b>8.15</b> Algunos juegos pueden tener diferentes ganancias máximas. Si es así, dichas restricciones se mostrarán en la página de información del juego. </p>

                        <p><b>8.16</b> Ciertos juegos de casino no incluyen apuestas de lealtad y recompensa. </p>

                        <p><b>8.17</b> Para los bonos de apuesta, los jugadores deben entregar el bono y el número especificado de ganancias antes de poder retirarlo. Haz una apuesta</p>
                        <p>La contribución de los créditos de recompensa depende de la categoría del juego. El desglose es el siguiente: Tragamonedas – 100% Juegos de mesa – 20% Juegos con crupier en vivo – 20%</p>

                        <p><b>8.18</b> Ciertas promociones pueden ser canceladas y/o canceladas y solo pueden estar disponibles durante un período específico y bajo ciertos términos. Debe asegurarse de que la promoción de contenido que le interese aún esté disponible, que sea elegible, que comprenda cualquiera de los términos a continuación para aplicar y que haya optado por participar cuando corresponda. </p>

                        <h3>9. Cerrar cuenta de miembro</h3>
                        <p><b>9.1</b> Si desea cerrar su Cuenta de miembro, puede ponerse en contacto con Atención al cliente por escrito en cualquier momento por correo electrónico. El cierre efectivo de la cuenta terminará los Términos y Condiciones en consecuencia. Si la razón detrás del cierre de la cuenta está relacionada con preocupaciones sobre una posible adicción al juego o problemas con el juego, debe indicar que esto se hizo por escrito en el momento de la solicitud para cerrar la cuenta. Si no es responsable de la divulgación de problemas de juego y / o da razones para el cierre de la cuenta, puede solicitar reactivar su cuenta por correo electrónico. La reactivación de la cuenta es a nuestra entera discreción. Nos reservamos el derecho de rechazar la resurrección. </p>

                        <p><b>9.2</b> El sitio web se reserva el derecho de rechazar o cerrar la cuenta de un miembro a su entera discreción sin previo aviso u obligación de indicar o probar los motivos. En ausencia de sospecha de fraude, lavado de dinero o actos ilegales, transferiremos el saldo de su cuenta a la billetera de criptomonedas de su elección (según el saldo de su cuenta) antes de que se cierre su cuenta. El saldo de su cuenta en moneda fiduciaria se depositará con su embarcación. Si utiliza el método de solo depósito, nos pondremos en contacto con usted y encontraremos otros métodos de devolución de fondos antes de que se cerrara la cuenta. </p>

                        <h3>10. Servicios de soporte</h3>
                        <p><b>10.1</b> Como parte de su uso del sitio web, podemos proporcionarle canales de comunicación de servicio de soporte de varias maneras, que son revisados y controlados por nosotros. </p>

                        <p><b>10.2</b> Conservamos revisiones y registros a través de cualquier canal de comunicación. Su uso de nuestros servicios de soporte debe ser para asistencia y para su información solamente. </p>

                        <p><b>10.3</b> Nos reservamos el derecho de eliminar o restringir los Servicios de soporte en vivo o de cancelar inmediatamente su Cuenta de miembro y reembolsar el saldo de su Cuenta si:</p>
                        <p>(a) hacer cualquier declaración o compartir cualquier material que sea abusivo, difamatorio, acosador, explícito o gravemente ofensivo, incluidas, entre otras, expresiones de blasfemia, intolerancia, racismo u odio;</p>
                        <p>(b) utilizar uno de nuestros Servicios de soporte para publicitar, promocionar o relacionarse con cualquier otra entidad en línea;</p>
                        <p>(c) se cree razonablemente que intenta explotar injustamente nuestros Servicios, por ejemplo, a través de repetidas declaraciones falsas sobre el mismo caso, transacción o característica;</p>
                        <p>(d) hacer declaraciones sobre la Compañía o cualquier otro sitio de Internet conectado al Sitio falsas y / o maliciosas y / o causar daños a la Compañía;</p>
                        <p>(e) utilizar cualquiera de nuestros Servicios de soporte para coludir, participar en conductas ilegales o fomentar conductas que consideremos extremadamente inapropiadas. Cualquier declaración de actividad sospechosa puede ser reportada a las autoridades competentes.</p>

                        <p><b>10.4</b> Nuestros Servicios de soporte se utilizan como una forma de comunicación entre usted y nosotros y no deben copiarse ni compartirse con terceros sin nuestro consentimiento previo. </p>

                        <h3>11. Reglas generales de apuestas</h3>
                        <p><b>11.1</b>. Las apuestas solo pueden ser realizadas por el titular de la Cuenta registrada. </p>

                        <p><b>11.2</b> Las apuestas realizadas y aceptadas no pueden ser modificadas, revertidas o canceladas por usted. Puede encontrar una lista de todas las apuestas, su estado y detalles en el sitio web. </p>

                        <p><b>11.3</b> Las apuestas solo se pueden realizar a través de Internet. </p>

                        <p><b>11.4</b> Puede realizar apuestas solo si tiene fondos suficientes en su cuenta en el sitio web. </p>

                        <p><b>11.5</b> Una vez que se haya cerrado una apuesta, estará sujeta a la versión de los Términos y Condiciones vigente y disponible en el Sitio Web en el momento de la aceptación de la apuesta. </p>

                        <p><b>11.6</b> Cualquier pago de apuestas ganadoras se acreditará en su cuenta, incluidas las probabilidades de multiplicar la apuesta por la apuesta. </p>

                        <p><b>11.7</b> Al realizar una apuesta, usted reconoce que ha leído y entendido completamente todos estos términos y condiciones con respecto a la apuesta descrita en el sitio web. </p>

                        <p><b>11.8</b> El sitio web administra su cuenta y calcula los fondos disponibles, los fondos pendientes, los fondos de apuesta y los montos de bonificación. Estos montos se consideran definitivos y no se modificarán en base a consultas, auditorías externas o investigaciones sin ningún error aparente. </p>

                        <p><b>11.9</b> Usted es el único responsable de realizar apuestas. </p>

                        <p><b>11.10</b> El dinero del premio se pagará al órgano rector del deporte o competición correspondiente en su cuenta tras la confirmación oficial del resultado final. </p>

                        <p><b>11.11</b> A menos que nuestros reguladores decidan lo contrario, el sitio web se reserva el derecho de revocar cualquier ganancia si el resultado está sujeto a cualquier investigación por sospecha de actividad delictiva o cualquier acción que pueda afectar el resultado. En caso de irregularidades en el modo de apuestas o en el resultado de la Campaña, confirmadas por el Consejo de Administración, terceros o el Sitio Web, el Sitio Web se reserva el derecho de cancelar y/o reembolsar cualquier cantidad apostada en la Campaña a su entera discreción. Si se han realizado apuestas, el Sitio se reserva el derecho de volver a calcular los resultados del evento y perder cualquier ganancia asociada. </p>

                        <p><b>11.12</b> Si no está satisfecho con cualquier asunto relacionado con una apuesta realizada en el sitio web, notifique al sitio web para proporcionarlo por escrito dentro de los 7 días posteriores a la transacción. Los avisos emitidos posteriormente dentro de un período de 7 días serán ignorados. En el improbable caso de que aparezcan discrepancias entre los resultados en su dispositivo y los resultados aparezcan en el registro de transacciones de nuestro sistema, usted acepta que los resultados en el registro de transacciones de nuestro sistema verificados por los funcionarios del sitio web serán finales, concluyentes y vinculantes. </p>

                        <p><b>11.13</b> Si el sitio web descubre que ha realizado apuestas diferentes de su cuenta de vez en cuando, todas las apuestas pueden ser realizadas por el sitio web. Este sitio web se reserva el derecho de tomar las medidas adicionales que considere necesarias. </p>

                        <p><b>11.14</b> Si el sitio web acepta erróneamente una cantidad de apuesta que exceda la cantidad máxima establecida, la cantidad excedente será ignorada y la cantidad de la apuesta se modificará y, por lo tanto, la diferencia será reembolsada / acreditada a su Cuenta. </p>

                        <p><b>11.15</b> La información proporcionada por este sitio web, como transmisiones de video en tiempo real, datos estadísticos, resultados en vivo y apuestas en vivo, es un servicio de información de valor agregado. Sin embargo, este sitio web no asume responsabilidad alguna, independientemente de cualquier inexactitud o error en la información.</p>

                        <p><b>11.16</b>  Si un partido no comienza en o después de la fecha de inicio programada y / o se abandona y no se completa (reanuda) al final de la siguiente fecha calendario, todas las apuestas serán nulas a menos que se determine que cualquier mercado de apuestas es incondicional de acuerdo con las reglas relevantes, en cuyo caso se puede establecer la apuesta. </p>

                        <p><b>11.17</b> El sitio web se reserva el derecho de adoptar eventos que se apliquen a competiciones específicas o que puedan contradecir las Reglas de apuestas deportivas. Dichas reglas especiales pueden publicar cuotas publicadas junto con regiones, clientes, partidos y/o eventos específicos. </p>

                        <p><b>11.18</b> La comunicación se interrumpe después de que se realiza una apuesta y / o no recibe una confirmación visual de que una apuesta se ha realizado con éxito, pero la apuesta se ha recibido correctamente en nuestros servidores y la apuesta se considerará válida y aceptada. Se le dirá si ganará o perderá una vez que se restablezca la comunicación y se determine el resultado. Si una apuesta no se recibe correctamente en nuestros servidores debido a un error de comunicación, no se considerará válida y aceptada; Las apuestas fallidas se reembolsarán al saldo de su cuenta. </p>

                        <p><b>11.19</b> Usted reconoce y reconoce que puede recibir una confirmación informándole de los posibles riesgos financieros después de realizar una apuesta (póngase en contacto con el servicio de atención al cliente del sitio web si hay alguna duda). Al recibir dicho reconocimiento, usted acepta que se le ha notificado adecuadamente. </p>

                        <p><b>11.20</b> En caso de discrepancias en las estadísticas de los partidos proporcionadas por fuentes externas, prevalecerán las fuentes de datos establecidas en nuestra página publicada de Reglas generales de apuestas deportivas. </p>
                        <p><b>11.21</b> El límite máximo de apuesta dependerá de la cantidad permitida por el sitio web en el momento en que acepte una apuesta. </p>

                        <p><b>11.22</b> Lo siguiente se refiere a la función de retirada:</p>

                        <p><b>11.22.1</b> Los retiros están disponibles para eventos, partidos y mercados seleccionados, apuestas simples y múltiples, antes y durante el partido. </p>

                        <p><b>11.22.2</b> Retraso en la aceptación de solicitudes de retiro. Si los cambios de precio o de mercado están en pausa, es posible que la solicitud de retiro no tenga éxito. </p>

                        <p><b>11.22.3</b> Si se aprueba una solicitud de retiro, la apuesta correspondiente se mostrará inmediatamente y se liquidará. El resultado final real de la apuesta original no afectará el proceso de retiro.</p>

                        <p><b>11.22.4</b> En cualquier caso, tras la solicitud de retiro exitosa, el monto total del reembolso será devuelto a su Cuenta. </p>

                        <p><b>11.22.5</b> El sitio web no puede garantizar que sus apuestas estén disponibles para la opción de retiro. Si se realiza un retiro antes del evento, no cubriremos ni dejaremos de cubrir el Evento en vivo, y el retiro no estará disponible una vez que comience el Evento o nuestro Partido en vivo no esté cubierto para detenerse. Cuando el mercado esté en pausa, no se proporcionarán pagos. </p>

                        <p><b>11.22.6</b> Este sitio web se reserva el derecho de retirar total o parcialmente la desinversión funcional de clientes o grupos de clientes. Ejerceremos este derecho en los casos en que exista una sospecha razonable de que un cliente o grupo de clientes está abusando de la función de retiro para aprovechar los cambios de precios previos al evento, o que la función de retiro se usa regularmente para cerrar apuestas antes del inicio del evento. </p>

                        <p><b>11.22.7</b> Si la función de retiro no está disponible debido a razones técnicas, este sitio web no será responsable de esto. Además, cualquier apuesta en tales casos mantendrá su estado de apuesta original y este sitio web tampoco será responsable. 。 </p>

                        <p><b>11.22.8</b> El sitio web se reserva el derecho de aceptar o rechazar cualquier apuesta / apuesta para retirar los deportes, competiciones, mercados o tipos de apuestas contenidas en la función de retiro. </p>

                        <p><b>11.23</b> El premio máximo se cotiza en USD como la moneda base para asegurar el mundo, pero el equivalente en moneda se aplica al gasto real. Cuando las apuestas múltiples involucran eventos con diferentes límites máximos de bonificación, se aplicará la cantidad mínima. Ambos límites máximos de bonificación se aplican a todos nuestros clientes o grupos de clientes que utilizan diferentes cuentas de apuestas para contener apuestas de la misma selección a diferentes precios. Debe haber razones para creer que se han realizado varias apuestas de esta manera, y el pago completo de estas apuestas sumará solo un pago máximo. </p>


                        <h3>12. Juegos abortados y abortados</h3>
                        <p><b>12.1</b> La Compañía no interferirá con el Juego por ningún tiempo de inactividad, interrupciones del servidor, retrasos o cualquier interrupción técnica o política. Los reembolsos solo pueden administrarse a discreción exclusiva del sitio web. </p>

                        <p><b>12.2</b> La Compañía no será responsable de ningún daño o pérdida considerada o resultante del sitio web o su contenido que supuestamente se cause o esté relacionado con él; Esto no incluye ninguna limitación de operación o transmisión, demora o interrupción, pérdida o corrupción de datos, comunicación o falla de línea, mal uso del Sitio o su contenido por parte de cualquier persona o cualquier error u omisión en el contenido. </p>

                        <p><b>12.3</b> Si algún juego de casino se cae, todas las apuestas son nulas. </p>

                        <h3>13. Limitación de responsabilidad</h3>
                        <p><b>13.1</b> Su acceso al Sitio web y su participación en los Juegos es bajo su propio riesgo. El Sitio Web y el Juego se proporcionan sin garantía de ningún tipo, ya sea expresa o implícita. </p>

                        <p><b>13.2</b> Sin perjuicio de la generalidad de lo anterior, usted acepta que:</p>

                        <p><b>13.2.1</b> No garantiza que el Software, los Juegos y el Sitio web sean adecuados para su propósito; </p>

                        <p><b>13.2.2</b> No garantiza que el Software, los Juegos y el Sitio web estén libres de errores; </p>

                        <p><b>13.2.3</b> No hay garantía de que el Software, los Juegos y el Sitio Web se interrumpan sin interrupción. </p>

                        <p><b>13.3</b> Salvo que se disponga expresamente en estos Términos y condiciones, no seremos responsables de ninguna pérdida, costo, gasto o daño, ya sea directo, indirecto, especial, consecuente, incidental o de otro tipo, que surja de su uso del sitio web o su participación en el juego. </p>

                        <p><b>13.4</b> Usted entiende y reconoce que cualquier apuesta realizada durante dicho fallo será anulada si el Juego o su mal funcionamiento es interoperable. Los fondos declarados de juegos defectuosos se considerarán nulos, así como cualquier ronda de juego posterior, independientemente del juego que se juegue con esos fondos. </p>

                        <p><b>13.5</b> Si parte o la totalidad de una apuesta se declara nula, el sitio web se reserva el derecho de considerar que hay un error claro, error, error tipográfico o error técnico en la tabla de pagos, cuotas o software. Para cualquier ganancia no realizada, no somos responsables del resultado de invalidar la apuesta en este caso. Los reembolsos solo son administrados por Seabet Management. </p>

                        <p><b>13.6</b> Por la presente, usted acepta indemnizarnos y eximirnos de responsabilidad a nosotros, a nuestros directores, empleados, socios y proveedores de servicios de y contra cualquier costo, gasto, pérdida, daño, reclamo y responsabilidad que surja de su uso del sitio web o participación en los juegos. </p>

                        <p><b>13.7</b> La Compañía no será responsable de ningún daño o pérdida, ya sea por contrato, agravio, incumplimiento de garantía o de otro modo, considerado o supuestamente causado o supuestamente causado  por o supuestamente causado por una conexión con el sitio web o su contenido; Esto incluye, pero no se limita a, retrasos o interrupciones en la operación o transmisión, pérdida o corrupción de datos, fallas de comunicación o línea, mal uso del Sitio o su contenido por parte de cualquier individuo, o cualquier error u omisión en el contenido. </p>

                        <h3>14. Política de privacidad</h3>
                        <p><b>14.1</b> Por la presente, usted reconoce y acepta que podemos recopilar y utilizar sus datos personales si lo consideramos necesario para que pueda acceder y utilizar el Sitio web y para permitirle participar en los Juegos. </p>

                        <p><b>14.2</b> Por la presente reconocemos que en el momento de recopilar su información personal, estamos obligados por la Ley de Protección de Datos como se establece anteriormente. Protegeremos su información personal y respetaremos su privacidad de acuerdo con las mejores prácticas comerciales y la ley aplicable. </p>

                        <p><b>14.3</b> Utilizaremos sus datos personales para permitirle participar en los Juegos y realizar acciones relacionadas con su participación en los Juegos. Al abrir su cuenta de miembro, usted reconoce y acepta que los empleados de la Compañía tienen derecho a acceder a sus datos personales para realizar sus tareas y brindarle la mejor asistencia, así como servicios. También podemos utilizar sus datos personales para notificarle cambios, nuevos servicios y promociones. Puede optar por no recibir correos electrónicos de marketing en cualquier momento. </p>

                        <p><b>14.4</b> Sus datos personales no se divulgarán a terceros a menos que dicha divulgación sea requerida por la ley o necesaria para utilizar nuestros servicios, en cuyo caso se considera que ha dado su consentimiento para la divulgación de dicha información a terceros. Los datos personales pueden divulgarse a este sitio web como socio comercial o proveedor de este sitio web, o proveedores de servicios que pueden ser responsables de ciertas partes de su funcionalidad general u operación de este sitio web. Los empleados del sitio web tienen acceso a sus datos personales para realizar sus tareas y proporcionarle la mejor asistencia y servicios posibles. Por la presente, usted acepta dicha divulgación. </p>

                        <p><b>14.5</b> Conservaremos toda la información proporcionada como Datos personales indefinidamente, a menos que elijamos hacerlo después de la expiración del período de retención de los Datos de la aplicación o cuando estemos legalmente obligados a hacerlo. </p>

                        <p><b>14.6</b> Con el fin de optimizar su experiencia y supervisar y mejorar los servicios de nuestro sitio web, recopilamos cierta información enviada por su navegador, conocida como cookies. Tiene derecho a elegir si acepta o no nuestra recopilación de cookies. Sin embargo, tenga en cuenta que deshabilitar las cookies puede tener un grave impacto en su acceso a nuestro sitio web e incluso puede bloquear su visita por completo. </p>

                        <h3>15. Cesión</h3>
                        <p><b>15.1</b> No se permite la cesión de sus obligaciones en virtud de este Acuerdo. Usted no puede ceder sus obligaciones en virtud de este Acuerdo, y cualquier derecho u obligación bajo este Acuerdo a ninguna otra persona o entidad. </p>

                        <h3>16. Acuerdo completo</h3>
                        <p><b>16.1</b> Estos Términos y Condiciones constituyen el acuerdo completo  entre usted y nosotros para respetar el sitio web y, excepto en caso de fraude, reemplazan todas las comunicaciones y propuestas electrónicas, orales o escritas anteriores o contemporáneas entre usted y nosotros para respetar el sitio web. </p>

                        <h3>17. Divisibilidad</h3>
                        <p><b>17.1</b>  Si alguna disposición de estos Términos y Condiciones se considera ilegal o inaplicable, la disposición se separará de estos Términos y Condiciones y todas las demás disposiciones continuarán en pleno vigor y efecto sin verse afectadas por dicha separación. </p>

                        <h3>18. Cancelación, suspensión y cierre</h3>
                        <p><b>18.1</b> Sin limitar nuestra capacidad de confiar en otros recursos disponibles para nosotros, podemos suspender y/o cancelar su Cuenta, cancelar cualquier apuesta pendiente y/o perder parte o la totalidad de los fondos de su Cuenta a nuestra absoluta discreción:</p>
                        <p>(i) cuando sospechamos que está utilizando nuestro sitio web para el lavado de dinero, actividades ilegales u otras actividades fraudulentas; o</p>
                        <p>(ii) sospechamos que ha depositado fondos ilegalmente u obtenidos de una manera que se deprecia manifiesta y materialmente; o</p>
                        <p>(iii) obtenemos evidencia de que usted es parte de un sindicato de apuestas, donde varias partes están involucradas en la realización de apuestas para eludir las Reglas del sitio web, estos Términos y condiciones o cualquier otra regla del sitio web; o</p>
                        <p>(iv) determinamos que está utilizando cualquier dispositivo, robot, araña, software, rutina u otro método (o cualquier cosa de la naturaleza de lo anterior) para interferir o intentar interferir con el funcionamiento adecuado de nuestros Servicios, cualquier equipo relacionado, software, sitio web, juegos de casino, apuestas deportivas e información de apuestas o cualquier transacción ofrecida en el sitio web,  en particular, no usar ni utilizar ninguna inteligencia artificial u otro sistema (incluidas máquinas, computadoras, software o cualquier otro sistema automatizado diseñado específicamente para defraudar y / o destruir el sistema del sitio web); o</p>
                        <p>(v) determinamos que usted está conspirando o intentando conspirar con otros jugadores para engañar al Sitio o a sus clientes; o</p>
                        <p>(vi) determinamos que ha incumplido cualquier disposición de estos Términos y condiciones;</p>
                        <p>(vii) determinamos que usted está actuando de una manera desfavorable para nuestros Actores; o</p>
                        <p>(viii) determinamos que la forma en que utiliza el Sitio le brinda una ventaja injusta, por ejemplo, apuestas basadas en conocimientos o experiencia adquirida a través de la participación personal o la participación en un área deportiva en particular; o</p>
                        <p>(ix) sospechamos que ha registrado, gestionado o dirigido su actividad de apuestas en varias cuentas de usuario, ha intentado ocultar su actividad de apuestas, ha eludido los límites de transacción establecidos por nosotros o ha incumplido los términos y condiciones de la promoción; o</p>
                        <p>(x) sospechamos que su cuenta se está utilizando en beneficio de un tercero; o</p>
                        <p>(xi) evidencia obtenida por nosotros de que al registrarse para una nueva cuenta, ha incumplido una orden directa en el Sitio de no continuar sus actividades de apuestas en nuestro Sitio web. Este sitio web tiene el derecho de confiscar cualquier depósito de la cuenta registrada por el usuario que previamente descubrió haber violado o ignorado las advertencias anteriores de los términos y condiciones anteriores.</p>

                        <p><b>18.2</b> Usted reconoce que el sitio web es el tomador de decisiones final en su posesión de un incumplimiento de una regla, término o condición que resulte en la suspensión o prohibición permanente</p>
                        <p>De la participación en nuestro sitio web.</p>

                        <p><b>18.3</b> Independientemente de si suspendemos y/o cancelamos la Cuenta, y sin perjuicio de cualquier otra disposición en estos Términos y Condiciones, podemos decidir cancelar y cancelar cualquier apuesta que no se haya completado a nuestra absoluta discreción si:</p>
                        <p>i) existe un fallo técnico, o </p>
                        <p>(ii) usted u otro cliente que realiza una apuesta con usted incumple cualquiera de estos Términos y condiciones.</p>

                        <h3>19. Fuerza mayor</h3>
                        <p><b>19.1</b>  Este sitio web falla o se retrasa en el cumplimiento de sus obligaciones de servicio si dicho incumplimiento o retraso es causado por fuerza mayor en opinión de este sitio web, incluidos, entre otros, inundaciones, incendios, terremotos o cualquier otro factor natural, actos de guerra, epidemias o epidemias, disturbios o ataques terroristas, fallas eléctricas de servicios públicos, cierres patronales y huelgas,  retrasos o interrupciones de Internet y las redes de telecomunicaciones causadas por factores humanos o naturales, o cualquier otro evento más allá del control razonable de este sitio web. Este sitio web no asume ninguna responsabilidad por las consecuencias derivadas de cualquier evento de fuerza mayor. </p>

                        <h3>20. Incumplimiento, penalizaciones y terminación</h3>
                        <p><b>20.1</b> Nos reservamos el derecho de no abrir, suspender o cerrar su Cuenta de miembro, o retener sus ganancias y utilizar los fondos para cualquier daño al que tenga derecho, si incumple cualquier disposición de estos Términos y condiciones o si tenemos motivos razonables para sospechar que ha incumplido dicha disposición. </p>

                        <h3>21. Ley aplicable y jurisdicción</h3>
                        <p><b>21.1</b> Estos Términos y Condiciones se regirán por las leyes de Curazao. </p>

                        <p><b>21.2</b> Usted reconoce que, a menos que se indique lo contrario, el Juego está organizado y regulado por el territorio de Curazao. Cualquier relación contractual entre usted y la Compañía se considerará que ha sido celebrada y ejecutada por las partes en Curazao, en la Dirección del Registro de Compañías. </p>

                        <p><b>21.3</b> Las partes acuerdan que cualquier disputa, controversia o reclamo que surja de o en conexión con estos Términos y Condiciones o su incumplimiento, terminación o nulidad estará sujeto a la jurisdicción exclusiva de los tribunales de Curazao. </p>

                        <h3>22. Reclamaciones</h3>
                        <p><b>22.1</b> Si tiene alguna queja o queja sobre nuestros servicios, puede ponerse en contacto con nuestro equipo de servicio al cliente a través de la función de chat disponible en el sitio web o en una dirección de correo electrónico. Haremos todo lo posible para resolver el problema al que se enfrenta en el menor tiempo posible. </p>
                      </div>`
  }
}
