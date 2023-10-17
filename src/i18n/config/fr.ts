const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Accueil',
  search: 'Recherche',
  promo: 'Promotions',
  support: 'Support',
  onlineSupport: 'Support en Ligne',
  accountMenu: 'Compte',
  account: 'Compte',
  confirm: 'Confirmer',
  confirmd: 'Confirmé',
  all: 'Tous',
  save: 'Enregistrer',
  cancel: 'Annuler',
  close: 'Fermer',
  start: 'Démarrer',
  loading: 'Chargement',
  end: 'Fin',
  to: ' à ',
  or: 'ou',
  and: 'et',
  at: 'à',
  goto: 'Aller à',
  refreshSuccess: 'Actualisation réussie',
  loadingFail: 'Échec du chargement',
  noMore: 'Plus de résultats...',
  login: 'Connexion',
  otherMethod: 'Autre méthode',
  reg: 'Inscription',
  userName: "Nom d'utilisateur",
  email: 'Email',
  sendEmail: 'Send',
  sended: 'Envoyé',
  emailCaptcha: 'Code de vérification par email',
  password: 'Mot de passe',
  forgetPassword: 'Mot de passe oublié',
  resetPwd: 'Réinitialiser le mot de passe',
  noUser: 'Pas de compte ?',
  createUser: 'Créer un compte',
  googleCode: 'Code Google Authenticator',
  inputGoole: 'Saisissez le code Google Authenticator',
  partner: 'Partenaire Officiel :',
  date: 'Date',
  day: 'Jour',
  month: 'Mois',
  year: 'Année',
  birthday: 'Date de naissance',
  telephone: 'Téléphone',
  country: 'Pays',
  hasAccount: 'Déjà un compte ?',
  logout: 'Déconnexion',
  address: 'Adresse',
  zipCode: 'Code Postal',
  loginPage: {
    useGoogle: 'Utiliser Google Authenticator',
    userNameOrEmail: "Nom d'utilisateur ou Email"
  },
  regPage: {
    holderUserName: "Créez votre nom d'utilisateur",
    holderEmail: `Par exemple : vous{'@'}example.com`,
    holderTelephone: 'Téléphone (+66 xxxxxxxxxxx)',
    isAdult: "Je confirme que j'ai plus de 18 ans et que j'accepte les",
    termCondition: 'Termes et Conditions',
    privacyPolicy: 'Politique de Confidentialité',
    isAgree: `J'accepte de recevoir des informations commerciales et des promotions de ${site_name}.`
  },
  thirdRegPage: {
    beFinished: 'Presque terminé !',
    fixInfo: 'Veuillez compléter vos informations.'
  },
  myprfile: 'Mon Profil',
  clubLevel: 'Niveau du Club',
  userLevels: {
    '101': 'Fer',
    '102': 'Bronze',
    '103': 'Argent',
    '104': 'Or',
    '105': 'Platine',
    '106': 'Titanium',
    '107': 'Diamant'
  },
  homePage: {
    currentMultiplier: 'Multiplicateur Actuel des Points',
    nextReward: 'Récompense du Niveau Suivant',
    showProgress: 'Afficher ma progression'
  },
  userAccount: 'Compte Utilisateur',
  wallet: 'Portefeuille',
  myBets: 'Mes Paris',
  rewards: 'Récompenses',
  notifications: 'Notifications',
  // Recherche
  noSearchResult: 'Désolé, aucun résultat correspondant à "{ keyword }". Veuillez essayer d\'autres mots clés.',
  searchResultNum: '{ searchResult } résultats trouvés',
  // Détails des promotions
  promoDetail: 'Détails de la Promotion',
  // Club
  club: 'Club',
  tiers: 'Niveaux',
  clubTips: 'Vos récompenses seront réinitialisées chaque mois. Assurez-vous de les réclamer avant la fin du mois pour ne rien manquer.',
  currentPoints: 'Montant Actuel de la Mise',
  currentPointsMultiplier: 'Multiplicateur de Points Actuel',
  receiveReward: 'Réclamer la Récompense',
  alreadyReceived: 'Déjà Réclamé',
  mergedReards: 'Récompenses cumulées pour le niveau suivant',
  noReward: 'Pas encore de récompense. Atteignez le niveau supérieur pour débloquer votre première récompense.',
  // Club VIP
  vipClub: 'Club VIP',
  // Boutique de Points
  mallStore: 'Boutique de Points',
  // Paramètres du Compte
  generalInformation: 'Informations Générales',
  changePassword: 'Changer le Mot de Passe',
  googleAuthenticator: 'Google Authenticator',
  privacySetting: 'Paramètres de Confidentialité',
  currentPwd: 'Mot de Passe Actuel',
  newPwd: 'Nouveau Mot de Passe',
  confirmPwd: 'Confirmez le Mot de Passe',
  changePwdLimit:
    'Pour garantir la sécurité de vos fonds, vous ne pourrez pas effectuer de retrait vers une nouvelle adresse de portefeuille dans les 24 heures suivant le changement de votre mot de passe.',
  disabledGoogle: 'Google Authenticator désactivé',
  activeGoogle: 'Veuillez scanner le code QR ou saisir le code pour activer Google Authenticator.',
  whatGoogleCode: "Qu'est-ce que Google Authenticator?",
  typeCode: 'Saisissez le Code',
  submitCode: 'Soumettre le Code',
  keyValue: 'Clé de Synchronisation',
  // Notifications
  notice: 'Annonces',
  mail: 'Messagerie',
  makeAllRead: 'Tout Marquer comme Lu',
  noMessage: 'Aucune notification.',
  // Récompenses
  claimReward: 'Code Promo',
  claimNewReward: 'Réclamer une Nouvelle Récompense',
  rewardCode: 'Code de Récompense',
  claim: 'Réclamer',
  recentTransaction: 'Transactions Récentes',
  // Recherche
  searchHolder: 'Jeux, Fournisseurs',
  searchMore: 'Rechercher Plus',
  searchRecommend: 'Recommandations pour Vous',
  enter: 'Entrer',
  // Finances
  fundAccount: 'Fonds du Compte',
  activeBalance: 'Solde Actif',
  balance: 'Solde',
  deposit: 'Dépôt',
  buyCrypto: 'Acheter des Cryptos',
  withdraw: 'Retrait',
  youDepositAddress: 'Votre Adresse de Dépôt',
  minDepositAmount: 'Montant Minimum de Dépôt',
  quickTips: 'Conseils Rapides',
  quickTipCont: "Lorsque vous effectuez un dépôt, veillez à utiliser l'adresse de portefeuille de dépôt la plus récente de notre caissier.",
  promoCode: 'Code Promotionnel',
  currentBalance: 'Solde Actuel',
  myRewards: 'Mes Récompenses',
  transactionHistory: 'Historique des Transactions',
  supportSettings: 'Paramètres du Support',
  walletSettings: 'Paramètres du Portefeuille',
  faq: 'FAQ',
  liveSupport: 'Support en Ligne',
  chooseCrypto: 'Choisissez votre Cryptomonnaie préférée',
  cryptoCurrency: 'Cryptomonnaie',
  bank: 'Banque',
  chooseDepositChain: 'Choisissez le Réseau de Dépôt',
  confirmDepositAddress: 'Veuillez confirmer votre adresse de dépôt avant de procéder à la transaction.',
  recommendExchange: "Achetez des cryptos sur les plateformes d'échange recommandées.",
  // Historique des Transactions
  deposits: 'Dépôts',
  withdrawals: 'Retraits',
  bets: 'Mises',
  wins: 'Prime',
  currencyFilter: 'Filtrer par Monnaie',
  dateFilter: 'Filtrer par Date',
  winLose: 'Gagnant / Perdant',
  nodata: 'Aucune donnée disponible.',
  // Paramètres du Portefeuille
  currency: 'Monnaie',
  btcUnit: 'Unité Bitcoin',
  // Retraits
  inputAmount: 'Montant',
  walletDetails: 'Détails du Portefeuille',
  walletDetailsBig: 'Détails du Portefeuille',
  waitingResults: 'En Attente de Validation',
  withdrawUsdt: 'Retrait {curreny}',
  amount: 'Montant',
  minWithdrawAmount: 'Montant Minimum de Retrait',
  next: 'Suivant',
  youWithdrawAddress: 'Votre Adresse de Retrait',
  payto: 'À payer',
  checkWithdrawAddress: 'Veuillez vérifier votre adresse de portefeuille de retrait avant chaque transaction.',
  previewWithdraw: 'Aperçu du Retrait',
  confirmWithdrawInfo: 'Veuillez confirmer que toutes les informations sont correctes.',
  network: 'Réseau',
  withdrawing: 'Retrait en cours',
  summary: 'Résumé',
  transactionType: 'Type de Transaction',
  finalBalance: 'Solde Final',
  backToFund: 'Retour aux Fonds',
  chooseWithdrawChain: 'Choisissez le Réseau de Retrait',
  confirmWithdrawAddress: 'Veuillez confirmer votre adresse de retrait avant de procéder à la transaction.',
  walletAddress: 'Adresse de Portefeuille',
  walletAddressBig: 'Adresse de Portefeuille',
  tradeStatus: { 1: 'Non Terminé', 2: 'Confirmé', 3: 'Supprimé' },

  // Accueil
  readMore: 'Lire la suite',
  sports: 'Sports',
  liveCasino: 'Casino en Direct',
  slots: 'Machines à Sous',
  sbSport: 'Sports SB',
  fbSport: 'Sports FB',
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
  globalPaymentSolutions: 'Solutions de Paiement Mondiales',
  otherPayment: 'Autres Moyens de Paiement Populaires',
  sportsBet: 'Paris Sportifs',
  liveCasinoBet: 'Paris Casino en Direct',
  slotBet: 'Paris Machines à Sous',
  more: 'Plus',
  loadMore: 'Charger Plus',
  providers: 'Fournisseurs',
  allProviders: 'Tous les Fournisseurs',
  sortBy: 'Trier par',
  polular: 'Popularité',
  promotions: 'Promotions',
  aboutUs: 'À Propos de Nous',
  selectLanguage: 'Sélectionner la Langue',
  ruleTerms: 'Règles et Conditions',
  responsibleGambling: 'Jeu Responsable',
  amlPolicy: 'Politique AML',
  selfExclusion: 'Auto-Exclusion',
  privacyPolicy: 'Politique de Confidentialité',
  fairness: 'Équité',
  game: 'Jeu',
  followUs: 'Suivez-nous',
  language: 'Langue',
  helpCenter: "Centre d'Aide",
  acceptCrypto: 'Cryptomonnaies Acceptées',
  licencesSecurity: 'Licences et Sécurité',
  gameBig: 'Jeu',
  userBig: 'Utilisateur',
  payoutBig: 'Paiement',
  betUser: 'Miseur',
  multiplier: 'Multiplicateur',
  paymentAmount: 'Montant du Paiement',
  invisibility: 'Invisibilité',
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
    ton: 'Free TON',
    usd: 'Dollar US',
    cny: 'Yuan Renminbi'
  },
  // Boutique de Points
  points: 'Points',
  pointsNum: 'Nombre de Points',
  earnPoints: 'Gagner',
  pointType: 'Type',
  spentPoints: 'Dépenser',
  afterPoints: 'Points Après',
  createTime: 'Date de Création',
  pointsType: {
    '1': 'Paris',
    '2': 'Échanger des Produits',
    '3': 'Promotions',
    '4': 'Addition système',
    '5': 'Déduction système',
    '6': 'Annulation Échange'
  },

  // Fournisseurs de Jeux
  provider: {
    all: 'Tous',
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
  tips: {
    // Utilisateur - Connexion et Inscription
    inputAccount: "Veuillez entrer un nom d'utilisateur",
    isAccount: "Le nom d'utilisateur doit comporter entre 5 et 12 caractères, commencer par une lettre",
    inputPassword: 'Veuillez entrer un mot de passe',
    isPwd: 'Le mot de passe doit comporter entre 6 et 16 caractères, chiffres ou lettres',
    pwdNotMatch: 'Les mots de passe ne correspondent pas',
    googleCode: 'Le code Google Authenticator doit comporter 6 chiffres',
    loginFail: 'Échec de la connexion',
    inputEmail: 'Veuillez entrer une adresse email',
    isEmail: "Format d'email incorrect",
    inputEmailcapcha: 'Veuillez entrer le code de vérification par email',
    inputDay: 'Veuillez sélectionner le jour de naissance',
    inputMonth: 'Veuillez sélectionner le mois de naissance',
    inputYear: "Veuillez sélectionner l'année de naissance",
    inputCountryCode: 'Veuillez entrer le code de pays',
    inputphoneNumber: 'Veuillez entrer le numéro de téléphone',
    inputAddress: "Veuillez entrer l'adresse",
    inputZipCode: 'Veuillez entrer le code postal',
    userNameExist: "Ce nom d'utilisateur existe déjà",
    emailExist: 'Cette adresse email est déjà utilisée',
    emailNotExist: "Cette adresse email n'existe pas",
    isAudit: 'Veuillez confirmer que vous êtes majeur et acceptez la politique de confidentialité.',
    isAgree: 'Veuillez lire et accepter les informations pertinentes sur les campagnes marketing.',
    regSuccess: 'Inscription réussie',
    regFail: "Échec de l'inscription",
    loginSuccess: 'Connexion réussie',
    sendSuccess: 'Envoi réussi',
    resetSuccess: 'Réinitialisation du mot de passe réussie, veuillez vous reconnecter',
    resetFail: 'Échec de la réinitialisation du mot de passe',
    sendFail: "Échec de l'envoi",
    editUserInfoSuccess: 'Modification des informations utilisateur réussie',
    inputNewPwd: 'Veuillez entrer un nouveau mot de passe',
    isNewPwd: 'Le nouveau mot de passe doit comporter entre 6 et 16 caractères, chiffres ou lettres',
    inputOldPwd: "Veuillez entrer l'ancien mot de passe",
    isOldPwd: "L'ancien mot de passe doit comporter entre 6 et 16 caractères, chiffres ou lettres",
    editPwdSuccess: 'Modification du mot de passe réussie, veuillez vous reconnecter',
    bindGoogleSuccess: 'Liaison réussie avec Google Authenticator',
    logoutSuccess: 'Déconnexion réussie',
    setSuccess: 'Paramètres enregistrés avec succès',
    inputWithdrawAmount: 'Veuillez entrer le montant à retirer',
    overMaxWithdrawAmount: 'Le montant de retrait ne peut pas dépasser le solde',
    underMinWithdrawAmount: 'Le montant de retrait doit être supérieur au minimum',
    inputWithdrawAddress: "Veuillez entrer l'adresse de retrait",
    withdrawSuccess: 'Demande de retrait réussie',
    withdrawFail: 'Échec de la demande de retrait',
    receivedRewardSuccess: 'Récompense reçue avec succès',
    receivedRewardFail: 'Échec de la réception de la récompense',
    noLogin: "Vous n'êtes pas connecté",
    goLogin: 'Connectez-vous dès maintenant',
    invalidThirdUser: "Validation de l'utilisateur tiers échouée",
    authFail: "Échec de l'autorisation",
    copySuccess: 'Copie réussie',
    copyFail: 'Le navigateur ne prend pas en charge la copie automatique, veuillez copier manuellement',
    inputExhangeCode: 'Veuillez entrer le code de conversion',
    startGameFail: 'Échec du démarrage du jeu',
    insufficientPoints: 'Points insuffisants',
    exhangeSuccess: 'Échange réussi',
    openWindow: "La fenêtre s'ouvrira bientôt pour que vous puissiez jouer au jeu, nous vous souhaitons un bon jeu.",
    openExchange: "Nous sommes sur le point d'ouvrir une nouvelle fenêtre pour que vous puissiez effectuer l'échange",
    unBindGoogleSuccess: 'Google Authenticator a été désactivé avec succès.',
    openExplorer: 'La fenêtre sera ouverte pour que vous puissiez consulter les transactions',

    inputTrueName: 'Veuillez saisir votre nom',
    selectDocType: 'Cliquez pour sélectionner le type de document',
    inputDocType: 'Veuillez sélectionner un type de document',
    inputDdocNumber: "Veuillez saisir le numéro d'identification",
    inputPassportNo: "Veuillez saisir le numéro d'identification",
    airlineCompany: 'Veuillez saisir la compagnie aérienne',
    inputDeparture: 'Veuillez saisir le lieu de départ',
    inputDestination: 'Veuillez saisir la destination',
    inputHotelName: "Veuillez saisir le nom de l'hôtel",
    inputCity: "Veuillez saisir la ville où se trouve l'hôtel",
    inputCountry: "Veuillez saisir le pays où se trouve l'hôtel",
    inputRoomNum: "Veuillez entrer le nombre de chambres d'hôtel",
    inputInRoomDay: 'Veuillez entrer le nombre de jours de séjour',
    betHolder: 'Heure de la mise',
    inputBetTime: "Veuillez sélectionner l'heure de la mise",
    inputOrderId: 'Veuillez saisir le numéro de billet',
    orderNoholder: "Veuillez utiliser ',' pour séparer plusieurs commandes de mise",
    applySuccess: 'Demande acceptée',
    applyFail: 'Échec de la demande',
    pwdName: `Votre nom d'utilisateur et votre mot de passe doivent être différents`
  },

  rewardsBig: 'Récompenses',
  myStats: 'Mon Historique',
  exclusiveRewards: 'Récompenses Exclusives',
  quickBuys: 'Achats Rapides',
  earned: 'Gagné',
  spent: 'Dépensé',
  pointsHistory: 'Historique des Points',
  earnPointsAndTrack: 'Gagnez des points et suivez-les',
  viewPointsRecord: 'Consultez tous vos enregistrements de dépenses de points',
  buyNow: 'Acheter Maintenant',
  youWillGet: 'Vous recevrez',
  bonusValue: 'Valeur du Bonus',
  wageringRequirement: 'Exigence de Mise',
  enableVisible: 'Activer le Mode Invisible',
  hiddenYourBet: 'Vos paris ne seront pas visibles dans les flux publics de paris ni dans les aperçus de paris',
  startNow: 'Commencer Maintenant',
  withdrawStatus: { 1: 'En cours de traitement', 2: 'Confirmé', 3: 'Rejeté' },
  time: 'Temps',
  betAmount: 'Montant Misé',
  support2: 'Support',
  btiSportIntro:
    "Avec des années d'expérience dans l'exploitation de plateformes sportives, la plateforme de paris sportifs Seabet offre aux joueurs une expérience immersive et optimisée de paris sportifs.",
  sabaSportIntro:
    "Vérifiée par diverses parties depuis près de deux décennies, la plateforme de paris sportifs Saba Sports propose une large gamme d'événements sportifs, de multiples types de paris innovants et des cotes leaders de l'industrie.",
  fundRecord: 'Historique des transactions',
  categoryFilter: 'FILTRER PAR CATÉGORIE',
  fundCategory: {
    1: 'Dépôt',
    2: 'Retrait',
    3: 'Mise',
    4: 'Règlement',
    5: 'Dépôt système',
    6: 'Déduction système',
    7: 'Cadeau promotionnel',
    8: 'Remboursement',
    9: 'Récompenses VIP',
    10: 'Échanger des biens',
    17: 'Échec du retrait'
  },
  beforeBalance: 'Solde précédent',
  afterBalance: 'Solde après',
  tradeDetails: 'Détails de la transaction',
  tradeNo: 'Numéro de commande',
  orderStatus: 'État de la commande',
  orderType: 'Type de commande',
  orderTypes: { 1: 'Dépôt', 2: 'Retrait', 3: 'Mise', 4: 'Gain' },
  blockChain: 'Chaîne de blocs',
  betAndEarn: 'Parier et gagner',
  placeAndEarn: 'Placer et gagner',
  spinAndEarn: 'Tourner et gagner',
  enabledGoogle: "L'authentificateur Google est activé",
  stopGoogle: "L'authentificateur Google est activé, si vous souhaitez désactiver cette fonction, veuillez saisir le code et cliquer sur 'Soumettre le code' pour fermer.",
  unlockNewReward: 'De nouvelles récompenses ont été débloquées!',
  unlockNewRewardTip: 'Félicitations ! Vous venez de débloquer une nouvelle récompense. Cliquez ici pour sélectionner votre type de récompense',
  dymondReward: 'Vos récompenses seront débloquées lorsque vous atteindrez ce niveau',
  siteTitle: 'Meilleur site de paris sportifs et de casino en crypto | Paris Bitcoin',
  unlockAllReward: 'Félicitations ! Vous avez débloqué toutes les récompenses.',
  newGame: 'Nouveau jeu',
  oneDay: '24 heures',
  week: 'Semaine',
  moreGame: 'Plus de jeux',
  question: 'FAQ',
  status: 'Statut',
  tradeCode: 'Code de transaction',
  copyTradeCode: 'Copier le code de transaction',
  realName: 'Nom',
  sex: 'Sexe',
  male: 'Homme',
  female: 'Femme',
  documentType: 'Type de document',
  documentNumber: 'Numéro de document',
  airlineCompany: 'Compagnie aérienne',
  placeOfDeparture: 'Lieu de départ',
  destination: 'Destination',
  onewayOrRoundtrip: 'Aller simple ou aller-retour',
  oneway: 'Aller simple',
  roundtrip: 'Aller-retour',
  engineroomType: 'Classe de vol',
  economyClass: 'Classe économique',
  businessClass: 'Classe affaires',
  firstClass: 'Première classe',
  submit: 'Soumettre',
  hotelName: "Nom de l'hôtel",
  city: 'Ville',
  roomType: 'Type de chambre',
  presidentialSuite: 'Suite présidentielle',
  luxurySuite: 'Suite de luxe',
  businessSuite: 'Suite affaires',
  roomNum: 'Nombre de chambres',
  roomDay: 'Nombre de jours de séjour',
  otherService: 'Autres services',
  idCard: "Carte d'identité",
  passport: 'Passeport',
  militaryId: 'Carte militaire',
  diplomaticCard: 'Passeport diplomatique',
  moonpayExchange: 'Acheter de la crypto avec une carte de crédit/débit',
  learnMore: 'En savoir plus',
  comingSoon: 'bientôt disponible...',
  affiliate: 'Affilié',
  rewardActivities: 'Activités de Récompense',
  rewardRecords: 'Historique',
  applyPromo: 'Appliquer les Récompenses',
  applyNow: 'Appliquer Maintenant',
  rewardStatus: { 0: 'En traitement', 1: 'Accepté', 2: 'Rejeté' },
  betTime: 'Temps de mise',
  betOrderNo: 'Numéro de commande de mise',
  startEarning: 'pour commencer à gagner',
  historyType: 'Type',
  rewardName: 'Nom de la récompense',
  startTime: 'Heure de début',
  endTime: 'Heure de fin',
  minMaxBet: 'Mise Min-Max',
  volatility: 'Volatilité',
  volatilitys: { 1: 'Faible', 2: 'Faible à moyen', 3: 'Moyenne', 4: 'Moyenne-Élevée', 5: 'Élevée', 6: 'Très élevée', 7: 'Très faible' },
  myPoints: 'Mes Points',
  backPromo: 'Retour aux promotions',
  noSupportFullScreen: 'Votre navigateur ne prend pas en charge le mode plein écran',
  pointsExchange: 'Échange de points',
  view: 'Plus',
  oprate: 'voir',
  remain: 'Restant',
  directlyLogin: 'Ou connectez-vous directement',
  fastDeposit: 'Déposer maintenant',
  demoMode: "Mode d'essai",
  trueMode: 'Miser maintenant',
  gameStatic: 'Statistique du jeu',
  receivedSuccess: '{ amount } USDT Réclamé',
  goTime: 'Heure de départ',
  backTime: "Heure d'arrivée",
  inTime: "Heure d'enregistrement à l'hôtel",
  outTime: "Heure de départ à l'hôtel",
  sabaSportDesc: {
    0: 'Tous les événements sportifs',
    1: 'Prise en charge de tous les appareils numériques',
    2: 'Cryptage de sécurité',
    3: 'Cotes en temps réel',
    4: 'Backend indépendant'
  },
  seabetSportDesc: {
    0: 'Développé indépendamment',
    1: 'Meilleures cotes',
    2: "Personnaliser l'interface de pari",
    3: 'Système de règlement précis',
    4: "Des centaines d'options de paris"
  },
  pickDate: 'Sélectionner une date',
  inputGotime: "Veuillez sélectionner l'heure de départ",
  inputBacktime: "Veuillez sélectionner l'heure de retour",
  inputInTime: "Veuillez sélectionner l'heure d'enregistrement",
  inputOutTime: "Veuillez sélectionner l'heure de départ",
  hotelTimeError: "L'heure de départ ne peut pas être antérieure à l'heure d'enregistrement",
  ticketTimeError: "L'heure de retour ne peut pas être antérieure à l'heure de départ",
  countryHolder: 'Code pays',
  numberHolder: 'Numéro de téléphone',
  submitInfoSuccess: 'Vos informations ont été soumises avec succès',
  back: 'Retour',
  countryCode: 'Code Pays',
  remainTime: 'Temps restant',
  upgrading: 'Mise à jour du système en cours',
  upgradingTxt: 'Le système est en cours de mise à jour. Nous nous excusons pour tout inconvénient et vous remercions de votre compréhension !',
  favariateGame: 'Favoris',
  recentlyGame: 'Joué récemment',
  downloadTitle: 'Application Web Progressive Seabet.io !',
  downloadDesc:
    "Bienvenue sur notre toute nouvelle application Seabet.io ! Ci-dessous, nous avons des instructions étape par étape pour installer l'application Android et l'application Web Progressive iOS (PWA). Profitez de l'action amusante, rapide et équitable à tout moment et n'importe où !",
  step: 'Étape',
  clickSave: `Appuyez sur le bouton “Partager” de la barre d'outils`,
  addDesk: `Sélectionnez “Ajouter à l'écran d'accueil” dans le menu`,
  clickAdd: `Cliquez sur “Ajouter” l'installation est terminée`,
  iosFinish: `Lancez l'application SEABET.IO depuis l'écran d'accueil de votre appareil iOS.`,
  finishedDown: `Le raccourci est maintenant sur votre écran d'accueil.`,
  addToDesk: `Dans le navigateur, "Ajouter la page à"`,
  clickDesk: `Appuyez sur "Écran d'accueil"`,
  clickAddAndroid: `Cliquez sur "Ajouter"`,
  hitratio: 'Taux de succès',
  paylines: 'Ligne de paiement',
  nopwd: 'Changement du mot de passe a été refusé',

  problem: {
    whatVip: "1.Qu'est-ce que le Club VIP ?",
    whatVips: `<p>Le Club VIP de seabet.io est une communauté dédiée ouverte aux clients de cryptomonnaies, leur permettant de profiter de toutes les activités promotionnelles disponibles sur le site web à tout moment. Chaque pari, chaque rotation de machine à sous et chaque jeu que vous jouez accumulera des points, vous permettant de monter progressivement en niveau dans le club et de débloquer des récompenses excitantes en cours de route. À mesure que vous débloquez des niveaux VIP, vous gagnerez également des points de pari Seabet, ce qui vous offrira encore plus d'expériences et de services gratifiants.</p>
                <p>En termes simples, cela signifie : Vous jouez à des jeux, et nous vous récompensons.</p>`,
    howGetIntegrial: '2.Comment gagner des points ?',
    howGetIntegrials: `Vous gagnez des points de club à chaque pari, à chaque tour de machine à sous et à chaque jeu de table que vous jouez. Plus vous accumulez de points, plus votre niveau augmente. À mesure que vous progressez dans les rangs, vous débloquerez diverses récompenses excitantes. Les récompenses deviendront de plus en plus intéressantes à mesure que vous continuerez à débloquer de nouveaux niveaux.`,
    whatVipLevel: '3.Niveau VIP  ?',
    whatVipLevels: `<p>Les niveaux VIP déterminent la valeur et le type de récompenses que vous pouvez réclamer. À mesure que vous progressez dans le club et montez en niveau, vos récompenses augmenteront également.</p>
                    <table>
                      <tr>
                        <th>Niveau VIP </th>
                        <th>Montant de mise requis Amount</th>
                        <th>Fréquence</th>
                      </tr>
                      <tr>
                        <td>Bronze</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Argent</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Or</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Titane</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Titane</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Diamant </td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.Comment sont calculés les points ?',
    howComputeInterials: `<p>Que ce soit pour les paris sportifs ou les jeux de casino, l'utilisation de cryptomonnaies vous permettra de gagner des points. Pour calculer les points que vous gagnez à chaque pari, nous convertissons le montant de votre mise en USDT au taux de change du marché en temps réel lors de la régularisation. Cela garantit que toutes les collectes de points, quel que soit le type de cryptomonnaie utilisé, sont équitables. En raison des taux de conversion fluctuants, nous suivons le principe de l'arrondi au nombre entier le plus proche lors du calcul des points.</p>
                          <p>La formule pour gagner des points Seabet est la suivante : Montant de la mise du joueur * 0,01 * coefficient de points du niveau correspondant. Par exemple, si un joueur est au niveau Platinum et mise 5000, selon la formule de calcul des points, le joueur gagnera 5000 * 0,01 * 1,3 = 65 points. Les points Seabet ont une large gamme d'utilisations, et les joueurs peuvent échanger des cadeaux et des services équivalents auprès de la boutique de points.</p>`,
    whyMergedReward: '5.Pourquoi mes récompenses sont-elles fusionnées ?',
    whyMergedRewards: `<p>Vos récompenses sont fusionnées parce qu'un seul pari peut débloquer plusieurs récompenses. Pour vous faciliter les choses, nous additionnons la valeur des récompenses et les affichons sous forme d'une seule récompense.</p>`,
    resetVip: '6.Quand mon niveau VIP sera-t-il réinitialisé ?',
    resetVips: `<p>Votre niveau VIP sera réinitialisé à 0 au début de chaque mois. Vous pourrez alors recommencer depuis le niveau Bronze et réclamer toutes les récompenses du niveau suivant. Vos points accumulés seront toujours conservés pour que vous puissiez échanger davantage de récompenses et de services.</p>`,
    everyGetInterial: '7.Puis-je gagner des points de club à chaque mise ?',
    everyGetInterials: `<p>Non, les points de club ne sont accumulés que lorsque vous placez des paris avec de l'argent réel. De plus, certaines catégories d'événements et de jeux ne sont pas incluses dans le club, de sorte que les paris placés sur eux ne vous rapporteront pas de points. Ces catégories incluent :</p>
                        <p>Les courses de chevaux</p>
                        <p>Les sports électroniques</p>
                        <p>Les maîtres des paris sportifs</p>
                        <p>De plus, les jeux de casino suivants ne sont pas non plus inclus dans le club, et les paris placés sur eux ne vous rapporteront pas de points.</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: 'Comment puis-je faire un dépôt ?',
    a1: `<p>1. Sélectionnez la cryptomonnaie de votre choix, puis cliquez sur Déposer.</p>
        <p>2. Copiez l’adresse de dépôt unique et utilisez-la dans votre portefeuille (ou scannez le code QR).</p>
        <p>3. Une fois votre transaction confirmée, vous recevrez un avis.</p>`,
    q2: 'Comment puis-je effectuer un retrait ?',
    a2: `<p>1. Choisissez la cryptomonnaie que vous souhaitez retirer, puis cliquez sur Retirer.</p>
          <p>2. Entrez le montant que vous souhaitez retirer.</p>
          <p>3. Entrez votre adresse de portefeuille.</p>
          <p>4. Cliquez sur le bouton Retirer.</p>`,
    q3: 'Combien de temps les dépôts/retraits prennent-ils ?',
    a3: `<p>dépôt</p>
    <p>La plupart des dépôts cryptographiques sont traités à la vitesse de l’éclair. Cependant, il peut y avoir des retards de services tiers.</p>
    <p>retrait</p>
    <p>La plupart des retraits sont traités instantanément. En cas de retraits importants, nous traitons ces retraits manuellement de sorte qu’il peut y avoir un léger retard.</p>`,
    q4: 'Quels modes de paiement proposez-vous ?',
    a4: `<p>Les options de devise disponibles sur Seabet.io sont :</p>
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
    q5: 'Appliquez-vous des frais sur les transactions ?',
    a5: `<p>Bien que nous ne facturions aucuns frais pour les dépôts et les retraits sur Seabet.io, il se peut que vous deviez payer des frais de transaction lorsque vous utilisez des paiements via la blockchain.</p>`
  },

  errorCodes: {
    1001: "L'enregistrement n'existe pas",
    1002: "L'activité est terminée",
    1003: 'Les données existent déjà',
    1004: 'Erreur de données',
    1005: 'Erreur de paramètre',
    1006: "Vous n'avez pas rempli les conditions requises pour la réclamation",
    1007: "Vous avez déjà soumis cette demande de promotion aujourd'hui",
    1008: 'La promotion a expiré',
    1009: 'Vous avez déjà réclamé cette promotion',
    1010: "Aucune commande de dépôt admissible n'existe",
    1011: 'Le montant du dépôt ne répond pas aux exigences de réclamation',
    1012: 'Le code de vérification Google est incorrect',
    1013: 'Vous devez encore effectuer {data} USD de paris valides pour effectuer un retrait',
    1014: "Le nom d'utilisateur existe déjà",
    1015: 'Le numéro de téléphone existe déjà',
    1016: "L'adresse e-mail existe déjà",
    1017: "Format de nom d'utilisateur incorrect",
    1018: 'Format de mot de passe incorrect',
    1019: 'Code de vérification incorrect',
    1020: 'Le système est occupé, veuillez réessayer plus tard',
    1021: 'Erreur de signature',
    1022: 'Votre compte a été désactivé, veuillez contacter le service client',
    1023: "Nom d'utilisateur ou mot de passe incorrect",
    1024: 'Le compte est verrouillé',
    1025: 'Google Authenticator est déjà lié',
    1026: "Google Authenticator n'est pas lié",
    1027: 'Le mot de passe actuel est incorrect',
    1028: "Format d'adresse e-mail incorrect",
    1029: "Échec de l'envoi de l'e-mail",
    1030: 'Quantité de produit insuffisante',
    1031: 'Points disponibles insuffisants',
    1101: 'Solde disponible insuffisant',
    1032: 'Pour assurer la sécurité de vos fonds, après avoir changé votre mot de passe, vous ne pourrez pas effectuer de retraits pendant 24 heures.',
    1033: 'Le code de vérification par e-mail est incorrect',
    1035: 'Jeu en maintenance'
  },

  html: {
    // Titres HTML
    vipTitle: 'Club VIP',
    rulesTitle: 'Règles et Conditions',
    responsibleTitle: 'Jeu Responsable',
    amlTitle: 'Politique AML',
    selfExclusionTitle: 'Auto-Exclusion',
    privacyTitle: 'Politique de Confidentialité',
    fairnessTitle: 'Équité',

    // Contenus HTML
    vipContent: ` <div class="vip-clubhouse-box">
                    <div class="vc-rows">
                      <div class="vr-title">1.Introduction au Club VIP</div>
                      <div class="vr-conts">
                        <p>Bienvenue au Club VIP de Seabet !</p>
                        <p>Chez Seabet, nous nous engageons à améliorer la qualité du jeu et à offrir la meilleure expérience de jeu possible. Nous sommes ravis de vous présenter notre tout nouveau Club VIP, conçu pour récompenser nos membres fidèles qui passent du temps à jouer sur notre site web.</p>
                        <p>Il vous suffit de placer des paris sur n'importe quel jeu ou événement sportif proposé par Seabet.io pour débloquer des récompenses exclusives au fur et à mesure que vous gravissez les échelons.</p>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">2.Service Personnalisé</div>
                      <div class="vr-conts">
                        <p>Une équipe professionnelle de gestionnaires de la clientèle veille à répondre à tous vos besoins et à respecter les normes les plus élevées de l'industrie. Les membres VIP peuvent profiter d'offres exclusives, d'invitations à des événements de renom et d'une variété de récompenses personnalisées pour vous offrir des expériences de jeu rapides, agréables et efficaces.</p>
                        <dl>
                          <dt>Gestionnaire VIP Exclusif :</dt>
                          <dd>Dévoué à la satisfaction de vos besoins</dd>
                          <dd>Expériences de jeu privées sur mesure rien que pour vous</dd>
                        </dl>
                        <dl>
                          <dt>Récompenses Élevées :</dt>
                          <dd>Offres exclusives conçues pour vous</dd>
                          <dd>Bonus sans exigence de mise</dd>
                          <dd>Accumulation rapide de points</dd>
                        </dl>
                        <dl>
                          <dt>Limites de Mise les Plus Élevées de l'Industrie :</dt>
                          <dd>Dépôts et retraits quotidiens illimités avec des cryptomonnaies</dd>
                        </dl>
                        <dl>
                          <dt>Promotions VIP Exclusives :</dt>
                          <dd>Différenciées des promotions pour les membres réguliers</dd>
                          <dd>Préservation de la meilleure expérience de jeu pour vous</dd>
                          <dd>Exclusives aux utilisateurs VIP</dd>
                          <dd>Offres personnalisées</dd>
                          <dd>Services de divertissement sur mesure exclusivement pour vous</dd>
                        </dl>
                        <dl>
                          <dt>Service Prioritaire 24/7 :</dt>
                          <dd>Pas besoin de faire la queue ni d'attendre</dd>
                          <dd>Vos besoins sont notre priorité absolue</dd>
                          <dd>Multiples méthodes de contact sur les médias sociaux, gestionnaires de la clientèle dédiés fournissant des services en ligne.</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">3.Structure des Niveaux</div>
                      <div class="vr-conts">
                        <p>Six niveaux VIP qui couvrent de manière exhaustive l'ensemble de votre parcours de jeu :</p>
                        <dl>
                          <dd>Bronze : Bronze 1</dd>
                          <dd>Argent : Argent 1 - Argent 5</dd>
                          <dd>Or : Or 1 - Or 8</dd>
                          <dd>Platine : Platine 1 - Platine 10</dd>
                          <dd>Titane : Titane 1 - Titane 10</dd>
                          <dd>Diamant : Diamant 1 - Diamant 6</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">4.Avantages pour les Membres du Club VIP</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>Bonus de Niveau Supérieur : Recevez des bonus en atteignant le niveau suivant. Plus vous atteignez un niveau élevé, plus le bonus est important.</dd>
                          <dd>Offres Exclusives Personnalisées : Vous n'êtes pas intéressé par les promotions habituelles ? Pas de problème. Une fois que vous atteignez le niveau VIP correspondant, nous personnaliserons spécialement des offres en fonction de vos centres d'intérêt, exclusivement pour vous.</dd>
                          <dd>Expérience de Divertissement Personnalisée : Qu'il s'agisse d'événements sportifs majeurs, de concerts, de spectacles musicaux ou d'un voyage de luxe, en tant que membre VIP senior, toutes vos dépenses personnelles seront couvertes par Seabet, et nous organiserons votre itinéraire.</dd>
                          <dd>Service VIP Exclusif : Vous serez affecté à un représentant du service clientèle VIP dédié qui soutiendra et répondra à vos besoins en matière de paris.</dd>
                          <dd>Accumulation Plus Rapide de Points : Les niveaux VIP accumulent des points à un rythme plus rapide par rapport aux membres réguliers. Les niveaux supérieurs accumulent davantage de points, ce qui permet de bénéficier d'une gamme plus étendue de prix à échanger.</dd>
                        </dl>
                      </div>
                    </div>
                    <div class="vc-rows">
                      <div class="vr-title">5.Comment Devenir Membre VIP</div>
                      <div class="vr-conts">
                        <dl>
                          <dd>
                          Pariez Régulièrement : La clé pour devenir VIP est de placer régulièrement des paris sur divers événements sportifs et jeux de casino. Seabet récompense votre assiduité. En tant que site de jeu de crypto-monnaie de premier plan, utilisez régulièrement vos actifs numériques pour parier sur tous les événements sportifs et jeux de casino proposés par Seabet. Vous pouvez également essayer de parier avec des USDT et continuer à utiliser vos fonds.
                          </dd>
                          <dd>
                          Participez aux Événements Réguliers : Les activités promotionnelles de Seabet comprennent divers événements et compétitions auxquels vous pouvez participer à tout moment. Une participation régulière à l'un de ces événements augmentera vos chances de recevoir une invitation au Club VIP. De plus, vous pouvez être plus actif dans d'autres fonctionnalités du club proposées par Seabet.
                          </dd>
                          <dd>
                          Attendez l'Invitation : La dernière chose que vous devez faire est d'attendre que nous vous envoyions une invitation. Continuez à jouer à des jeux et à participer à des événements pour gros parieurs. Après quelques sessions de jeux de casino et de paris sportifs, une fois que vous serez jugé digne de devenir membre du Club VIP, vous recevrez une invitation immédiatement.
                          </dd>
                          <dd>
                          Vivez la Vie de Luxe en tant que VIP Seabet : Élevez votre expérience de jeu en USDT à un tout autre niveau tout en profitant des privilèges de premier ordre en tant que membre du Club VIP Seabet. En tant que joueur de valeur, vous vivrez le meilleur du divertissement, rapide et équitable, en participant aux paris sportifs et aux jeux de casino.
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>`,

    rulesContent: `<div>
                      <h2>Termes et conditions</h2>
                      <h3>1. SEABET. IO</h3>
                      <h3>2. AVIS IMPORTANT</h3>
                      <p><b>2.1</b> EN VOUS INSCRIVANT SUR  WWW.SEABET.IO  (LE « SITE WEB »), VOUS CONCLUEZ UN CONTRAT ET ACCEPTEZ D'ÊTRE LIÉ PAR : </p>
                      <p>(I) LES PRÉSENTES CONDITIONS GÉNÉRALES ; </p>
                      <p>(II) NOTRE POLITIQUE DE CONFIDENTIALITÉ ; </p>
                      <p>(III) NOTRE POLITIQUE DE COOKIES ET </p>
                      <p>(IV) LES RÈGLES APPLICABLES À NOS PRODUITS DE PARIS OU DE JEUX, TELLES QUE RÉFÉRENCÉES DANS LES PRÉSENTES CONDITIONS GÉNÉRALES (« CONDITIONS GÉNÉRALES » OU « ACCORD »), ET LES RÈGLES SPÉCIFIQUES AUX PARIS ET/OU AUX JEUX, ET SONT RÉPUTÉES AVOIR ACCEPTÉ ET COMPRIS TOUTES LES CONDITIONS.</p>

                      <p><b>2.2</b> VEUILLEZ LIRE ATTENTIVEMENT LE PRÉSENT CONTRAT POUR VOUS ASSURER QUE VOUS EN COMPRENEZ PARFAITEMENT LE CONTENU. SI VOUS AVEZ DES DOUTES QUANT À VOS DROITS ET OBLIGATIONS RÉSULTANT DE L'ACCEPTATION DU PRÉSENT CONTRAT, VEUILLEZ CONSULTER UN CONSEILLER JURIDIQUE DE VOTRE JURIDICTION AVANT D'UTILISER LE(S) SITE(S) WEB ET D'ACCÉDER À SON CONTENU. SI VOUS N'ACCEPTEZ PAS LES CONDITIONS, N'UTILISEZ PAS, NE VISITEZ PAS OU N'ACCÉDEZ À AUCUNE PARTIE (Y COMPRIS, MAIS SANS S'Y LIMITER, LES SOUS-DOMAINES, LE CODE SOURCE ET / OU LES API DU SITE WEB, VISIBLES OU NON) DU SITE WEB.</p>
                      <h3>3. GÉNÉRALITÉS</h3>
                      <p><b>3.1</b> Lors de l'inscription sur www. Seabet.io.</p>
                      <p> Vous (« Vous », « Votre », « Vous-même » ou le « Joueur » de manière interchangeable) concluez un accord avec Seabet.</p>
                      <p><b>3.2</b> Vous devez lire le présent Contrat dans son intégralité avant d'utiliser le service ou les produits de Seabet. Veuillez noter que le Contrat constitue un accord juridiquement contraignant entre vous et Seabet.</p>
                      <p><b>3.3</b> Les présentes conditions générales entrent en vigueur dès que vous avez terminé le processus d'inscription, ce qui comprend la case d'acceptation de ces conditions générales et la création réussie d'un compte. En utilisant toute partie du site Web après la création du compte, vous acceptez les présentes conditions générales applicables à l'utilisation du site Web.</p>
                      <p><b>3.4</b> Nous sommes en droit d'apporter des modifications aux présentes Conditions générales à tout moment et sans préavis. Si nous apportons de telles modifications, nous pouvons prendre les mesures appropriées pour porter ces modifications à votre attention (par exemple par e-mail ou en plaçant un avis sur une position bien visible sur le site Web, avec les termes et conditions modifiés), mais il sera de votre seule responsabilité de vérifier les amendements, mises à jour et / ou modifications. Votre utilisation continue des services du site Web après une telle modification des conditions générales sera considérée comme votre acceptation et votre accord d'être lié par ces amendements, mises à jour et / ou modifications.</p>
                      <p><b>3.5</b> Les termes des présentes Conditions générales  prévaudront en cas de conflit entre les termes des présentes Conditions générales et de l'une des règles du jeu ou d'autres documents mentionnés dans les présentes Conditions générales.</p>
                      <p><b>3.6</b> Les présentes Conditions générales peuvent être publiées en plusieurs langues à des fins d'information et de facilité d'accès pour les joueurs. La version anglaise est la seule base juridique de la relation entre vous et nous et en cas de divergence par rapport à une traduction de quelque nature que ce soit, la version anglaise des présentes Conditions générales prévaudra.</p>

                      <h3>4. COMPTE SEABET</h3>
                      <p>Inscription</p>
                      <p><b>4.1</b> Pour que vous puissiez placer des paris sur Seabet.io, vous devez d'abord créer personnellement un compte chez nous (« Compte Seabet »).</p>
                      <p><b>4.2</b> Pour qu'une personne  soit inscrite en tant que joueur auprès de Seabet et utilise le site Web, cette personne doit soumettre une demande d'enregistrement et d'ouverture d'un compte Seabet. La demande d'ouverture du compte Seabet doit être soumise personnellement et vous demandera de fournir un ensemble d'informations personnelles, à savoir l'e-mail, le nom complet, la date de naissance, l'adresse, etc.</p>
                      <p><b>4.3</b> Lorsque les informations stipulées au point <b>4.2</b>. ne sont pas fournies et/ou ne sont pas considérées comme complètes, exactes ou à jour à tout moment, Seabet se réserve le droit de suspendre l'enregistrement du compte Seabet et de traiter tout dépôt ultérieur potentiellement accepté sur le compte Seabet du joueur comme invalide (et tous les gains découlant de ce dépôt comme nuls). Lorsqu'un compte Seabet est suspendu, vous devez contacter le service clientèle au (support{'@'}Seabet.io).</p>
                      <p><b>4.4</b> Tous les candidats doivent avoir 18 ans ou tout autre âge légal de la majorité tel que déterminé par les lois qui vous sont applicables, quel que soit l'âge le plus élevé ou le plus ancien. Seabet se réserve le droit de demander une preuve d'âge à tout joueur et de suspendre son compte Seabet jusqu'à ce qu'une documentation satisfaisante soit fournie. Seabet prend très au sérieux ses responsabilités à l'égard des mineurs et du jeu responsable.</p>
                      <p><b>4.5</b> Seabet n'acceptera pas l'inscription de particuliers :</p>
                      <p>a) Moins de 18 ans ou n'ayant pas atteint l'âge légal de la majorité ou jouer dans leur juridiction;</p>
                      <p>b) Résider dans des juridictions d'où il est illégal ou où le jeu n'est pas autorisé. Seabet n'est pas en mesure de vérifier la légalité du Service dans chaque juridiction et il est de la responsabilité de l'Utilisateur de s'assurer que son utilisation du Service est légale;</p>
                      <p>c) Fournir des informations trompeuses ou tenter de passer par des tiers.</p>
                      <p><b>4.6</b> Seabet se réserve le droit de refuser toute demande de Compte Seabet, à sa seule discrétion.</p>

                      <p>Connaissez votre client</p>
                      <p><b>4.7</b> Vous déclarez et garantissez que toute information fournie par vous sur votre formulaire de demande est vraie, mise à jour et correcte.</p>
                      <p><b>4.8</b> Seabet se réserve le droit, à tout moment, de demander toute documentation KYC qu'elle juge nécessaire pour déterminer l'identité et l'emplacement d'un joueur. Seabet se réserve le droit de restreindre le Service, le paiement ou le retrait jusqu'à ce que l'identité soit suffisamment déterminée, ou pour toute autre raison à la seule discrétion de Seabet. Seabet se réserve également le droit de divulguer les informations d'un joueur de manière appropriée pour se conformer à une procédure judiciaire ou autrement autorisé par la politique de confidentialité de Seabet (propriétaire et opérateur de Seabet), et en utilisant le Service, vous reconnaissez et consentez à la possibilité d'une telle divulgation.</p>

                      <p>Comptes multiples</p>
                      <p><b>4.9</b> Un seul compte Seabet par joueur est autorisé. Si vous tentez ou réussissez à ouvrir plus d'un compte Seabet, sous votre propre nom ou sous tout autre nom, ou si vous tentez ou réussissez à utiliser le site Web au moyen du compte Seabet d'une autre personne, Seabet aura le droit de fermer immédiatement tous vos comptes Seabet, de conserver toutes les sommes de ces comptes Seabet et de vous interdire toute utilisation future du site Web.</p>
                      <p><b>4.10</b> Si Seabet  a des raisons de croire que vous avez enregistré et/ou utilisé plus d'un compte Seabet, ou que vous avez collaboré avec une ou plusieurs autres personnes utilisant un certain nombre de comptes Seabet différents, Seabet sera en droit de considérer ces comptes comme constituant plusieurs comptes Seabet, et de suspendre ou de fermer tous ces comptes Seabet. Seabet aura également le droit de conserver les fonds jusqu'à ce que le joueur prouve qu'il n'a pas tenté de créer plusieurs comptes.</p>
                      <p><b>4.11</b> Si vous remarquez que vous avez plus d'un compte Seabet enregistré, vous devez nous en informer immédiatement. Ne pas le faire peut entraîner le blocage de votre compte Seabet et la rétention des fonds.</p>

                      <p>Responsabilité de l'utilisateur</p>
                      <p><b>4.12</b> Il est de votre seule et exclusive responsabilité de vous assurer que vos informations de connexion sont conservées en toute sécurité. Vous ne devez divulguer vos informations de connexion à personne.</p>
                      <p><b>4.13</b> Nous ne sommes pas responsables de tout abus ou mauvaise utilisation de votre Compte Seabet par des tiers en raison de votre divulgation, intentionnelle, accidentelle, active ou passive, de vos informations de connexion à un tiers.</p>
                      <p><b>4.14</b> Il vous est interdit de vendre, transférer ou acquérir des comptes Seabet à ou auprès d'autres joueurs.</p>
                      <p><b>4.15</b> Vous nous informerez dès que vous aurez connaissance de toute erreur concernant votre compte ou de tout calcul concernant tout pari que vous avez placé. Nous nous réservons le droit de déclarer nuls et non avenus tout pari sujet à une telle erreur.</p>
                      <p><b>4.16</b> Vous êtes responsable de toutes les activités qui se produisent sous votre compte.</p>

                      <p>Caractéristiques de sécurité</p>
                      <p><b>4.17</b> Nous vous recommandons d'activer l'authentification à deux facteurs pour améliorer la sécurité de votre compte.</p>
                      <p><b>4.18</b> Nous pouvons fournir d'autres mesures de sécurité de temps à autre, et nous vous encourageons à les utiliser.</p>


                      <p>Suspension et fermeture par Seabet</p>
                      <p><b>4.19</b> Seabet aura le droit de fermer ou de suspendre votre compte Seabet si :</p>
                      <p>a) Seabet considère que vous utilisez ou avez utilisé le site Web de manière frauduleuse ou collusoire ou à des fins illégales et/ou illégales ou inappropriées ;</p>
                      <p>b) Seabet considère que vous utilisez ou avez utilisé le site Web de manière déloyale, que vous avez délibérément triché ou profité indûment de Seabet ou de l'un de ses clients ou si votre compte Seabet est utilisé au profit d'un tiers;</p>
                      <p>c) Seabet est invité à le faire par la police, toute autorité de réglementation ou tribunal ou si Seabet n'est pas en mesure de vérifier votre identité, votre profession ou votre source de fonds, comme l'exige expressément la réglementation applicable ;</p>
                      <p>d) Vous enfreignez les présentes Conditions générales, les réglementations applicables ou l'utilisation équitable de nos services, ou Seabet craint que Vous ne soyez un joueur compulsif sans être auto-exclu ;</p>
                      <p>e) Seabet considère que l'un des événements mentionnés aux points (a) à (e) ci-dessus peut s'être produit ou est susceptible de se produire.</p>
                      <p><b>4.20</b> Si Seabet  ferme ou suspend votre compte Seabet pour l'une des raisons mentionnées à l'article <b>4.15</b>, vous serez, dans la mesure permise par les lois applicables, responsable de toutes les réclamations, pertes directes, responsabilités, dommages, coûts et dépenses encourus ou subis par Seabet (collectivement, les « Réclamations ») en découlant et, dans la mesure permise par les lois applicables,  indemniser et dégager Seabet de toute responsabilité sur demande pour de telles réclamations.</p>
                      <p><b>4.21</b> Dans les circonstances visées à l' article <b>4.15</b>, Seabet aura également le droit d'annuler tous les paris placés par Vous à la suite de telles actions de Votre part ou de retenir et/ou de conserver tous les montants qui vous auraient autrement été payés ou payables (y compris les gains) dans la mesure permise par la loi.</p>
                      <p><b>4.22</b> Nous nous réservons le droit de suspendre ou de résilier votre compte à tout moment, avec ou sans préavis, si nous soupçonnons que votre compte a été compromis ou est utilisé en violation de nos Conditions d'utilisation.</p>
                      <p><b>4.23</b> Si Seabet ferme votre compte Seabet, il vous informera des moyens disponibles pour retirer le solde restant sur votre compte Seabet.</p>

                      <p>Notre responsabilité</p>
                      <p><b>4.24</b> Nous déclinons toute responsabilité pour toute perte ou dommage que vous pourriez subir à la suite d'un accès non autorisé à votre compte.</p>
                      <p><b>4.25</b> Nous n'assumons aucune responsabilité pour toute perte ou dommage que vous pourriez subir en raison de votre incapacité à garder votre connexion sécurisée et privée.</p>

                      <h3>5. VOS GARANTIES</h3>
                      <p><b>5.1</b> Avant votre utilisation du Service et sur une base continue, vous déclarez, garantissez, acceptez et acceptez que :</p>
                      <p>Capacité</p>
                      <p>a) Vous avez plus de 18 ans ou tout autre âge légal de la majorité tel que déterminé par les lois qui vous sont applicables, selon l'âge le plus élevé ;</p>
                      <p>b) Vous avez la pleine capacité de conclure un accord juridiquement contraignant avec nous et vous n'êtes limité par aucune forme de capacité juridique limitée;</p>
                      <p>c) Vous n'êtes pas diagnostiqué ou classé comme un joueur compulsif ou compulsif;</p>
                      <p>d) Vous n'êtes actuellement pas auto-exclu d'un site de jeu ou d'un site de jeu. Vous informerez Seabet immédiatement si vous concluez un accord d'auto-exclusion avec un fournisseur de jeux d'argent.</p>

                      <p>Juridiction</p>
                      <p>e) Vous accédez à Seabet.io à partir d'une juridiction dans laquelle il est légal de le faire;</p>
                      <p>f) Vous n'utiliserez pas nos services lorsque vous serez situé dans une juridiction qui interdit de placer et/ou d'accepter des paris en ligne et/ou de jouer au casino et/ou à des jeux en direct ;</p>
                      <p>g) Vous acceptez et reconnaissez que nous nous réservons le droit de détecter et d'empêcher l'utilisation de techniques interdites, y compris, mais sans s'y limiter, la détection de transactions frauduleuses, l'inscription et l'inscription automatisées, le jeu et les techniques de capture d'écran. Ces étapes peuvent inclure, mais sans s'y limiter, l'examen des propriétés de l'appareil des joueurs, la détection de la géolocalisation et du masquage IP, les transactions et l'analyse de la blockchain;</p>

                      <p>Fonds et fiscalité</p>
                      <p>h) Vous êtes seul responsable de la déclaration et de la comptabilisation de toutes les taxes qui vous sont applicables en vertu des lois pertinentes pour tous les gains que vous recevez de notre part ;</p>
                      <p>i) Vous êtes seul responsable de toutes les taxes applicables qui peuvent être payables sur la crypto-monnaie qui vous est attribuée par le biais de votre utilisation du Service;</p>
                      <p>j) Il existe un risque de perte de crypto-monnaie lors de l'utilisation du Service et Seabet n'a aucune responsabilité envers vous pour une telle perte;</p>
                      <p>k) Vous ne déposerez pas de fonds provenant d'activités criminelles ou non autorisées;</p>
                      <p>l) Vous ne déposerez pas de fonds en utilisant des méthodes de paiement qui ne Vous appartiennent pas ;</p>
                      <p>m) Tous les fonds déposés seront exclusivement utilisés pour les Services disponibles sur le Site ;</p>
                      <p>n) Vous ne retirerez pas ou n'essaierez pas de retirer vers un mode de paiement qui ne Vous appartient pas ;</p>
                      <p>o) Vous comprenez qu'en participant aux Services disponibles sur le Site, Vous prenez le risque de perdre l'argent déposé.</p>
                      <p>p) Vous acceptez et reconnaissez que la valeur de la crypto-monnaie peut changer radicalement en fonction de la valeur marchande;</p>
                      <p>q) Seabet ne doit pas être traité comme une institution financière;</p>

                      <p>Autrui</p>
                      <p>r) Votre utilisation du Service est à votre seule discrétion et à vos risques et périls;</p>
                      <p>s) Vous ne mènerez pas d'activités criminelles via le Compte Seabet ;</p>
                      <p>t) Toutes les informations que vous nous fournissez pendant la durée de validité de cet accord sont vraies, complètes, correctes, et que vous devez nous informer immédiatement de tout changement de ces informations;</p>
                      <p>u) Vous participez aux Jeux strictement à titre personnel et non professionnel et participez uniquement à des fins récréatives et de divertissement ;</p>
                      <p>v) Vous participez aux Jeux en votre nom propre et non au nom d'une autre personne ;</p>
                      <p>w) Vous n'avez qu'un seul compte chez nous et acceptez de ne plus ouvrir de comptes chez nous ;</p>
                      <p>x) Les réseaux de télécommunications et les services d'accès Internet requis pour accéder et utiliser le Service sont entièrement hors du contrôle de Seabet et Seabet n'aura aucune responsabilité pour toute panne, lenteur, contrainte de capacité ou autre défaillance affectant le même;</p>
                      <p>y) Vous ne serez impliqué dans aucune activité frauduleuse, collusoire, truquée ou autre activité illégale en relation avec votre participation ou celle de tiers à l'un des jeux et / ou services sur le site Web, et n'utiliserez aucune méthode ou technique assistée par logiciel ou dispositif matériel pour votre participation à l'un des jeux et / ou services sur le site Web;</p>
                      <p>z) Si vous avez accès à des informations non publiques liées à un événement ou qui peuvent avoir un impact sur le résultat d'un événement ou d'un type de pari, vous ne parierez sur aucun événement supervisé par l'instance dirigeante du sport / événement concerné;</p>
                      <p>aa) Si vous êtes un athlète, un entraîneur, un manager, un propriétaire, un arbitre ou toute personne ayant suffisamment d'autorité pour influencer le résultat d'un événement, vous ne parierez sur aucun événement supervisé par le sport ou l'événement concerné de l'instance dirigeante ;</p>
                      <p>bb) Si vous êtes propriétaire (une personne qui est un propriétaire légal direct ou indirect ou bénéficiaire de 10% ou plus) d'un organisme directeur sportif ou d'une équipe membre, vous ne parierez sur aucun événement supervisé par l'instance dirigeante du sport ou sur tout événement auquel participe une équipe membre de cet organisme directeur sportif ou événementiel;</p>
                      <p>cc) Si vous êtes impliqué dans un sport ou un événement, vous ne serez pas impliqué dans la compilation des cotes de paris pour la compétition dans laquelle vous êtes impliqué.</p>
                      <p><b>5.2</b> En cas de violation de l'une des déclarations, mandats ou engagements mentionnés en, Seabet se réserve le droit de fermer ou de suspendre votre compte Seabet à sa seule discrétion et d'annuler tout pari dans la mesure applicable par la loi.</p>

                      <h3>6. GARANTIES SEABET</h3>
                      <p><b>6.1</b> Seabet garantit qu'ils :</p>
                      <p>a) gérer les fonds appartenant au Joueur de manière sécurisée et appropriée ; et</p>
                      <p>b) gérer les informations personnelles relatives au Joueur conformément à la loi applicable et conformément à sa Politique de confidentialité.</p>
                      <p><b>6.2</b> Le logiciel est fourni « en l'état » sans aucune garantie, condition, engagement ou représentation, explicite ou implicite, statutaire ou autre. Seabet exclut par la présente tous les termes, représentations, conditions et garanties implicites (y compris ceux de qualité marchande, de qualité marchande, de qualité satisfaisante et d'adéquation à un usage particulier). </p>
                      <p>Seabet ne garantit pas que : </p>
                      <p>(i)Le site Web et les services répondront à vos exigences; </p>
                      <p>(ii)Le site Web et les services n'enfreindront pas les droits de propriété intellectuelle d'un tiers;</p>
                      <p>(iii)Le fonctionnement du site Web et des services sera exempt d'erreurs ou ininterrompu;</p>
                      <p>(iv)Tout défaut du site Web et des services sera corrigé; ou </p>
                      <p>(v)Le site Web ou les serveurs sont exempts de virus.</p>

                      <p><b>6.3</b> Seabet peut être contacté par e-mail sur (support{'@'}seabet.io) ou sur son chat en direct 24/7. Le chat en direct est disponible lorsque vous êtes connecté à votre compte Seabet. Dans le cas où Seabet, à sa seule discrétion, estime que votre comportement, via le chat en direct, par e-mail ou autrement, a été abusif ou désobligeant envers l'un des employés de Seabet, de ses sociétés affiliées ou d'un fournisseur de services tiers, Seabet aura le droit de bloquer ou de résilier votre compte Seabet.</p>

                      <h3>7. DÉPÔTS</h3>
                      <p><b>7.1</b> Vous ne pouvez participer à n'importe quel Jeu que si vous disposez de fonds suffisants sur votre Compte Seabet pour une telle participation. À cette fin, vous devez utiliser les méthodes de paiement disponibles sur le site Web pour déposer vos fonds. Seabet ne vous accordera aucun crédit pour votre participation à un Jeu.</p>
                      <p><b>7.2</b> Vous devez déposer des fonds sur votre compte Seabet en utilisant les méthodes de paiement disponibles sur www. Seabet.io.</p>
                      <p><b>7.3</b> Vous devez vous assurer que les fonds que vous déposez sur votre compte Seabet ne sont entachés d'aucune illégalité et, en particulier, ne proviennent d'aucune activité ou source illégale.</p>
                      <p><b>7.4</b> Pour déposer des fonds sur votre  compte Seabet, vous pouvez transférer des fonds à partir de portefeuilles cryptographiques sous votre contrôle ou via toute autre méthode de paiement disponible sur Seabet.io. Les dépôts ne peuvent être effectués qu'avec vos propres fonds.</p>
                      <p><b>7.5</b> Vous ne devez déposer de l'argent sur votre compte que dans le but que vous utilisiez cet argent pour placer des paris / paris sur le site Web. Seabet a le droit de suspendre ou de fermer votre compte si nous croyons raisonnablement que vous déposez des fonds sans aucune intention de placer des paris sportifs et/ou de jeux. Dans de telles circonstances, nous pouvons également signaler cette activité aux autorités compétentes.</p>
                      <p><b>7.6</b> Vous reconnaissez et comprenez que l'approvisionnement de votre compte Seabet ne peut être approvisionné que par des méthodes de paiement dont vous êtes propriétaire.</p>
                      <p><b>7.7</b> Vous  comprenez, acceptez et reconnaissez également que si Seabet découvre, détecte et/ou identifie que Vous :</p>
                      <p>a) financé/approvisionnez votre compte Seabet en utilisant des méthodes de paiement tierces ; et/ou</p>
                      <p>b) financé/financent votre compte Seabet avec des fonds entachés d'illégalité, une telle activité sera considérée comme constituant une violation des Conditions d'utilisation équivalant à une fraude, et par extension :</p>
                      <p>i) Seabet se réserve le droit, à sa seule discrétion, de suspendre ou de fermer votre compte Seabet ; et</p>
                      <p>ii) Seabet se réserve le droit, à sa seule discrétion, d'annuler, d'annuler ou d'ajuster toute transaction et de confisquer les fonds déposés et/ou les gains générés à partir des fonds déposés.</p>
                      <p><b>7.8</b> Seabet peut fixer à sa propre description un montant minimum de dépôt. Le montant minimum du dépôt peut être modifié à tout moment à la description de Seabet et sera identifié sur le site Web. Veuillez noter qu'en fonction du mode de paiement que vous utilisez, des frais supplémentaires peuvent être facturés par les fournisseurs de paiement.</p>
                      <p><b>7.9</b> Les méthodes de paiement mises à votre disposition et la limite de dépôt minimum et maximum peuvent être trouvées dans la section portefeuille sur le Site. Les frais de service applicables peuvent être appliqués et modifiés. Certains modes de paiement peuvent ne pas être disponibles dans tous les pays.</p>
                      <p><b>7.10</b> Les dépôts sont immédiatement traités et le solde mis à jour est affiché instantanément sur le compte Seabet chaque fois qu'un prestataire de services de paiement est utilisé. Seabet n'assume aucune responsabilité pour les retards causés par son système de paiement ou en raison de retards causés par un tiers. À noter que :</p>
                      <p>a) Certains modes de paiement peuvent inclure des frais supplémentaires. Dans ce cas, les frais seront clairement visibles pour vous dans la caisse.</p>
                      <p>b) Votre banque ou fournisseur de services de paiement peut vous facturer des frais supplémentaires pour les dépôts de conversion de devises conformément à leurs conditions générales et à votre contrat d'utilisation.</p>
                      <p><b>7.11</b> Nous nous réservons le droit d'utiliser des procédures et des moyens supplémentaires pour vérifier votre identité lors du traitement des dépôts sur votre compte Seabet.</p>
                      <p><b>7.12</b> Les fonds ne peuvent pas être transférés de votre Compte Seabet vers le Compte Seabet d'un autre joueur.</p>
                      <p><b>7.13</b> Seabet peut refuser tout dépôt à sa propre description. Les utilisateurs dont les comptes sont bloqués ou suspendus doivent s'abstenir de déposer à www.Seabet.io.</p>
                      <p><b>7.14</b> Dans le cas où un joueur tente de déposer lorsque son compte est bloqué ou suspendu, Seabet aura le droit de conserver les fonds.</p>

                      <h3>8. RETRAITS</h3>
                      <p><b>8.1</b> Seabet se réserve le droit de refuser tout retrait d'un joueur de son compte Seabet jusqu'à ce que :</p>
                      <p>a) l'identité du Joueur a été vérifiée et Seabet a confirmé que le retrait est effectué par un titulaire du Compte Seabet ;</p>
                      <p>b) le retrait est transféré sur un compte dont le Joueur est titulaire légal ;</p>
                      <p>c) toute information supplémentaire demandée par Seabet a été fournie ; et</p>
                      <p>d) le Joueur a respecté l'exigence de mise minimale pour chaque dépôt.</p>
                      <p><b>8.2</b> Seabet se réserve tous les droits d'enquêter sur votre compte et votre activité de jeu. Si Seabet soupçonne raisonnablement que votre compte ou votre activité de jeu a violé les présentes conditions d'utilisation ou les lois ou règlements applicables, il peut, à sa seule discrétion, retarder ou refuser d'autres dépôts, retraits et / ou jeux pendant qu'il mène son enquête. Vous reconnaissez et acceptez que Seabet puisse ne pas être en mesure de fournir une explication quant à la nature de son enquête.</p>
                      <p><b>8.3</b> Tous les retraits doivent être effectués via le même mode de paiement que vous avez choisi lors du dépôt, sauf si nous en décidons autrement ou si nous ne sommes pas en mesure de le faire. Si vous effectuez un dépôt en utilisant un certain nombre de méthodes de paiement, nous nous réservons le droit de diviser votre retrait entre ces méthodes de paiement et de traiter chaque partie via le mode de paiement respectif à notre discrétion et conformément aux politiques et réglementations anti-blanchiment d'argent.</p>
                      <p><b>8.4</b> Si nous créditons par erreur votre Compte Seabet avec des gains qui ne vous appartiennent pas, que ce soit en raison d'une erreur technique dans les tableaux de paiement, d'une erreur humaine ou autre, le montant restera notre propriété et sera déduit de votre Compte Seabet. Si vous avez retiré des fonds qui ne vous appartiennent pas avant que nous ne prenions conscience de l'erreur, le montant payé par erreur constituera (sans préjudice d'autres recours et actions qui peuvent être disponibles en droit) une dette de votre part envers nous. En cas de crédit incorrect, vous êtes tenu de nous en informer immédiatement par e-mail.</p>

                      <p>Retraits FIAT</p>
                      <p><b>8.5</b> Vous devez miser 100% de la valeur de votre dépôt afin de demander un retrait FIAT.</p>
                      <p><b>8.6</b> Les retraits du Compte Seabet sont effectués par le biais de paiements adressés au Joueur ou transférés sur un compte bancaire détenu au nom du Joueur, comme conseillé à Seabet par le Joueur. Avant de traiter tout retrait, Seabet se réserve le droit d'effectuer une diligence raisonnable renforcée lorsque cela est jugé nécessaire.</p>
                      <p><b>8.7</b> Le montant minimum de retrait sera identifié sur le site Web lors de l'exécution d'un retrait.</p>
                      <p><b>8.8</b> Si vous avez plusieurs retraits en attente, Seabet se réserve le droit de rejeter tous les retraits et de vous demander d'effectuer un retrait avec la somme de tous les retraits multiples.</p>
                      <p><b>8.9</b> Seabet ne Vous facturera aucun frais sur les retraits. Cependant, il vous est conseillé de vérifier si le mode de paiement que vous utilisez impose des frais supplémentaires. Seabet ne sera pas responsable des commissions ou des frais de traitement qui vous sont facturés par des tiers tels que votre banque, car cela échappe à notre contrôle.</p>

                      <p>Retraits cryptographiques</p>
                      <p><b>8.10</b> Les retraits cryptographiques seront effectués à l'adresse indiquée de votre portefeuille de crypto-monnaie lors de la présentation d'une demande de retrait valide.</p>
                      <p><b>8.11</b> Seabet se réserve le droit d'effectuer des procédures de vérification KYC supplémentaires pour tout retrait. Les joueurs qui souhaitent récupérer des fonds détenus sur un compte fermé, verrouillé ou exclu, sont invités à contacter (support{'@'}seabet.io).</p>
                      <p><b>8.12</b> Toutes les transactions doivent être vérifiées afin de prévenir le blanchiment d'argent. Si un joueur prend connaissance d'une activité suspecte relative à l'un des jeux du site Web, il doit le signaler immédiatement à Seabet. Seabet peut suspendre, bloquer ou fermer un Compte Seabet et retenir des fonds si cela lui est demandé conformément à la Loi sur la prévention du blanchiment d'argent ou sur toute autre base légale demandée par une autorité de l'État. Vous reconnaissez que les fonds de votre compte sont consommés instantanément lorsque vous jouez et nous ne fournissons pas de retour de biens, de remboursement ou d'annulation rétrospective de votre compte.</p>

                      <h3>9. PROTECTION DES FONDS DES JOUEURS ET RÉTROFACTURATIONS</h3>
                      <p><b>9.1</b> Tous les fonds que vous  déposez chez nous sur votre compte Seabet, ainsi que tous les gains, sont détenus pour vous dans des comptes bancaires clients / portefeuille crypto distincts dans le seul but spécifique de placer des paris sportifs et de jeux et de régler tous les frais ou charges que vous pourriez encourir dans le cadre de l'utilisation de nos services. Cela signifie que vos fonds sont protégés contre toute autre utilisation.</p>
                      <p><b>9.2</b> Si nous subissons des rétrofacturations, des annulations ou des refus de paiement ou toute perte subie par Seabet en conséquence de cela en raison de causes qui Vous sont imputables en ce qui concerne Votre Compte Seabet, nous nous réservons le droit de Vous facturer les montants correspondants.</p>
                      <p><b>9.3</b> Nous pouvons, à tout  moment, compenser tout solde positif sur Votre compte avec tout montant dû par Vous à Seabet.</p>
                      <h3>10. PLACER DES PARIS/PARIS</h3>
                      <p><b>10.1</b> Vous êtes autorisé à placer Vos paris sur les marchés/produits proposés sur le Site Web. Seabet n'est pas obligé d'accepter un pari/pari de votre part et les paris/paris ne seront considérés comme valides et finalisés, et donc comme acceptés par Seabet, que lorsque vous recevrez la confirmation de Seabet de l'acceptation de votre pari/mise.</p>
                      <p><b>10.2</b> Seabet n'accepte que les paris/paris effectués en ligne (y compris via un appareil mobile). Les paris / paris ne sont acceptés sous aucune autre forme (courrier, e-mail, fax, etc.) et s'ils sont reçus, ils seront invalides et nuls - gagner ou perdre.</p>
                      <p><b>10.3</b> Il est de votre responsabilité de vous assurer que les détails des paris / paris sont corrects. Une fois que les paris ont été placés, ils ne peuvent pas être annulés par vous. Les paris ne peuvent être modifiés que par vous en utilisant notre fonction Modifier le pari, lorsqu'elle est disponible. Seabet ne peut annuler ou modifier un pari / pari que si l'événement concerné a été suspendu ou annulé, s'il y a eu une erreur évidente sur le pari concerné ou ses cotes, si le pari est placé en violation des Conditions ou si cela est nécessaire pour des raisons légales ou réglementaires.</p>
                      <p><b>10.4</b> Vos fonds seront alloués aux paris/paris dans l'ordre où ils sont placés et ne seront pas disponibles pour toute autre utilisation. Seabet se réserve le droit d'annuler et/ou d'annuler toute transaction effectuée après qu'un pari / pari a été placé impliquant des fonds alloués, soit à ce moment-là, soit rétrospectivement.</p>
                      <h3>11. CONFIRMATION DE PARI/PARI</h3>
                      <p><b>11.1</b> Les paris/paris ne seront valables qu'une fois que Vous aurez reçu la confirmation de l'acceptation de Votre pari/mise. Les paris/paris placés avec des fonds insuffisants sur votre compte seront annulés.</p>
                      <p><b>11.2</b> Un pari/pari que Vous demandez ne sera valide qu'une fois accepté par Seabet. Chaque pari/pari valide recevra un code de transaction unique. Nous ne serons pas responsables du règlement des paris / paris qui ne sont pas émis avec un code de transaction unique. Si vous n'êtes pas sûr de la validité d'un pari, veuillez vérifier l'historique de votre compte ou contacter notre équipe d'assistance clientèle (support{'@'}seabet.io).</p>
                      <p><b>11.3</b> En cas de litige concernant le contenu d'un pari, vous et Seabet convenez que la base de données du journal des transactions Seabet de son système de contrôle interne sera l'autorité ultime en la matière.</p>
                      <h3>12. BONUS</h3>
                      <p><b>12.1</b> Seabet, à sa seule discrétion, peut offrir de temps à autre, un certain nombre de Bonus et de Promotions. </p>

                      <p>Éligibilité</p>
                      <p><b>12.2</b> Une fois l'inscription réussie à un compte Seabet, vous pouvez être éligible pour recevoir des promotions et des bonus Seabet. En acceptant cet accord et en vous inscrivant à un compte Seabet sur le site Web, vous reconnaissez et acceptez également d'être lié par les règles et règlements associés aux promotions et bonus qui vous sont offerts par Seabet.</p>
                      <p>Bonus T&C</p>
                      <p><b>12.3</b> Toutes les promotions, bonus ou offres spéciales sont soumis aux conditions expresses de tout bonus offert sur le(s) site(s) Web et aux conditions générales spécifiques à la promotion, le cas échéant, et tout bonus crédité sur votre compte doit être utilisé conformément à ces termes et conditions. En acceptant une promotion, un bonus ou une offre spéciale disponible sur le(s) site(s) Web, vous consentez aux conditions générales de cette promotion, bonus ou offre spéciale et reconnaissez que les paris doivent toujours être placés avec des soldes en espèces avant que les soldes de bonus puissent être utilisés pour parier. Nous nous réservons le droit de retirer toute promotion, bonus ou offre spéciale à tout moment.</p>
                      <p>Activation et expiration</p>
                      <p><b>12.4</b> En activant un Bonus ou une Promotion, vous confirmez que Vous acceptez également les conditions générales applicables.</p>
                      <p><b>12.5</b> Aucune promotion, bonus ou offre spéciale  ne sera accepté ou honoré par Seabet après la date d'expiration de la promotion, du bonus ou de l'offre spéciale, sauf si Seabet, à sa seule discrétion, choisit de le faire pour un client, une promotion, un bonus ou une offre spéciale en particulier. Les dates d'expiration seront énoncées dans les règles spécifiques ou les termes et conditions de la promotion, du bonus ou de l'offre spéciale en question. En outre, Seabet se réserve le droit, à sa seule discrétion, de changer ou de modifier toute politique concernant le gain ou l'expiration des bonus.</p>
                      <p><b>12.6</b> Une fois perdu ou désactivé, le bonus ne sera plus disponible pour vous (et ne pourra être réactivé à aucun moment par la suite). Le montant de tous les fonds bonus qui ont déjà été crédités sur le solde de votre compte Seabet restera disponible pour vous.</p>
                      <p>Abus et fraude en matière de bonus</p>
                      <p><b>12.7</b> Dans le cas où Seabet pense qu'un joueur du Service abuse ou tente d'abuser d'un bonus ou d'une autre promotion ou est susceptible de bénéficier par abus ou manque de bonne foi d'une politique adoptée par Seabet, Seabet peut, à sa seule discrétion, refuser, retenir ou retirer à tout joueur tout bonus ou promotion,  ou résilier l'accès de ce Joueur aux Services, au Logiciel et/ou verrouiller le compte de ce Joueur, temporairement ou définitivement.</p>
                      <p><b>12.8</b> Vous ne pouvez ouvrir qu'un (1) seul compte sur le Site Web. L'ouverture de plusieurs comptes sur le site Web dans le but d'accumuler des bonus, des promotions, des offres spéciales ou autrement sera considérée comme un comportement abusif.</p>

                      <p>Droits Seabet</p>
                      <p><b>12.9</b> Seabet se réserve le droit de supprimer les bonus de tous les comptes inactifs ou identifiés comme «abuseurs de bonus».</p>
                      <p><b>12.10</b> Seabet se réserve le droit d'annuler tous les bonus qui n'ont pas été réclamés dans le délai de réclamation ou 60 jours, le plus court des deux.</p>
                      <p><b>12.11</b> Seabet se réserve le droit d'annuler tout bonus à sa seule description.</p>

                      <h3>13. AUTORITÉ/CONDITIONS D'UTILISATION</h3>
                      <p><b>13.1</b> Vous acceptez les règles du jeu décrites sur le site Web Seabet.io. Seabet conserve l'autorité sur l'émission, la maintenance et la fermeture du Service. La décision de la direction de Seabet, concernant toute utilisation du Service, ou la résolution de litiges, est définitive et ne pourra faire l'objet d'une révision ou d'un appel.</p>

                      <h3>14. UTILISATIONS INTERDITES</h3>
                      <p>USAGE PERSONNEL</p>
                      <p><b>14.1</b> Le Service est destiné uniquement à l'usage personnel de l'Utilisateur. L'Utilisateur n'est autorisé à parier que pour son divertissement personnel. Les utilisateurs ne peuvent pas créer plusieurs comptes à des fins de collusion, de paris sportifs et/ou d'abus de service.</p>

                      <p>AML & CONFORMITÉ AUX SANCTIONS</p>
                      <p><b>14.2</b> Seabet interdit et rejette expressément l'utilisation du Service pour toute forme d'activité illicite, y compris le blanchiment d'argent, le financement du terrorisme ou les violations des sanctions commerciales, conformément aux lois, réglementations et normes de diverses juridictions. À cette fin, le Service n'est pas offert aux personnes ou entités soumises aux États-Unis, à l'Union européenne ou à d'autres sanctions mondiales ou listes de surveillance. En utilisant le Service, vous déclarez et garantissez que vous n'êtes pas ainsi soumis.</p>
                      <p>JURIDICTIONS</p>
                      <p><b>14.3</b> Les personnes situées ou résidant en Afghanistan, en Australie, en Biélorussie, en Belgique, en Côte d'Ivoire, à Cuba, à Curaçao, en République tchèque, en République démocratique du Congo, au Danemark, en France, en Allemagne, en Grèce, en Iran, en Irak, en Italie, au Libéria, en Libye, en Lituanie, aux Pays-Bas, en Corée du Nord, en Ontario, au Portugal, en Serbie, en Slovaquie, au Soudan du Sud, en Espagne, au  Soudan, en Syrie, en Suisse, au Royaume-Uni, aux États-Unis, au Zimbabwe (les « Juridictions interdites ») ne sont pas autorisées à utiliser le Service. Pour éviter toute ambiguïté, les restrictions susmentionnées sur la participation à des jeux en argent réel à partir de Juridictions interdites s'appliquent également aux résidents et aux citoyens d'autres pays situés dans une Juridiction interdite. Toute tentative de contourner les restrictions de jeu par toute personne située dans une Juridiction interdite ou une Juridiction restreinte constitue une violation du présent Contrat. Une tentative de contournement inclut, mais sans s'y limiter, la manipulation des informations utilisées par Seabet pour identifier votre emplacement et fournir à Seabet des informations fausses ou trompeuses concernant votre emplacement ou votre lieu de résidence.</p>

                      <p><b>14.4</b> La tentative de manipuler votre emplacement réel par l'utilisation d'un  VPN, d'un proxy ou de services similaires ou par la fourniture d'informations incorrectes ou trompeuses sur votre lieu de résidence, dans l'intention de contourner le blocage géographique ou les restrictions de juridiction, constitue une violation de la Clause 5 des présentes Conditions d'utilisation.</p>

                      <h3>15. VOTRE ÉQUIPEMENT</h3>
                      <p><b>15.1</b> Votre équipement informatique ou votre appareil mobile et votre connexion Internet peuvent affecter les performances et/ou le fonctionnement du Site Web. Seabet ne garantit pas que le site Web fonctionnera sans défauts ni erreurs ou que les services Seabet seront fournis sans interruption. Seabet décline toute responsabilité pour les défaillances ou les problèmes qui surviennent en raison de votre équipement, de votre connexion Internet ou de votre fournisseur de services Internet ou de télécommunication (y compris, par exemple, si vous n'êtes pas en mesure de placer des paris ou de consulter ou de recevoir certaines informations relatives à des événements particuliers).</p>
                      <p><b>15.2</b> Pour les clients utilisant un appareil mobile pour placer des paris/paris, veuillez noter que Seabet ne sera pas responsable des dommages ou de la perte de données de l'appareil mobile sur lequel le logiciel est installé, et ne sera pas non plus responsable des appels, données ou autres frais encourus lors de l'utilisation du logiciel.</p>
                      <p><b>15.3</b> En raison de la taille limitée des écrans sur les appareils mobiles, l'expérience mobile peut différer légèrement de celle des autres plates-formes. Les différences peuvent inclure, mais sans s'y limiter, l'emplacement de certaines informations sur la plate-forme et les noms de jeu qui ne sont pas visibles sur toutes les pages de jeu.</p>

                      <h3>16. UTILISATION ÉQUITABLE</h3>
                      <p><b>16.1</b> Le Site Web et les Services ne peuvent être utilisés qu'à des fins récréatives en plaçant des paris et des paris sur des événements et/ou des produits de jeu.</p>
                      <p><b>16.2</b> Vous ne devez pas utiliser le Site Web au profit d'un tiers ou à des fins illégales, diffamatoires, abusives ou obscènes, ou que Seabet considère comme discriminatoires, frauduleuses, malhonnêtes ou inappropriées. Seabet peut signaler aux autorités toute activité qu'elle considère suspecte et/ou contraire au présent paragraphe.</p>
                      <p><b>16.3</b> Si Seabet  a un soupçon raisonnable que Vous êtes impliqué dans des actes frauduleux, malhonnêtes ou criminels, tels que définis par les lois applicables, via ou en relation avec le Site Web ou les Services, Seabet peut demander des sanctions pénales et contractuelles contre Vous. Seabet retiendra le paiement à tout client si l'un de ces éléments est suspecté ou lorsque le paiement est soupçonné d'être au profit d'un tiers.</p>
                      <p><b>16.4</b> Vous indemniserez et serez tenu de payer à Seabet, sur demande, tous les coûts, frais ou pertes subis ou encourus par nous et nos sociétés affiliées (y compris les pertes directes, indirectes ou consécutives, la perte de profit et la perte de réputation) en ce qui concerne toutes les Réclamations découlant directement ou indirectement de Vos actes frauduleux, malhonnêtes ou criminels lors de l'utilisation du Site Web ou des Services.</p>
                      <p><b>16.5</b> En outre, nous nous réservons le droit de ne pas accepter, traiter et/ou honorer les paris/paris lorsqu'il serait interdit, illégal ou illégal en vertu de la loi ou de la réglementation applicable de le faire.</p>

                      <h3>17. PROBLÈMES LOGICIELS ET TECHNOLOGIQUES</h3>
                      <p><b>17.1</b> Pour que vous puissiez utiliser le site Web et les services, vous devrez peut-être télécharger certains logiciels (par exemple, des jeux de casino mis à disposition via un lecteur flash). En outre, certains fournisseurs de produits tiers peuvent vous demander d'accepter des conditions générales supplémentaires régissant l'utilisation de leurs produits disponibles sur ou via le site Web. Si vous n'acceptez pas ces conditions générales tierces, n'utilisez pas le logiciel tiers concerné. Seabet n'accepte aucune responsabilité à l'égard de tout logiciel tiers.</p>
                      <p><b>17.2</b> Vous n'êtes autorisé à utiliser tous les logiciels mis à votre disposition via le site Web que dans le but d'utiliser le site Web et les services et, sauf dans la mesure permise par la loi applicable, à aucune autre fin.</p>
                      <p><b>17.3</b> Nous Vous accordons par la présente un droit personnel, non exclusif et non transférable d'utiliser le Site Web dans le seul but d'accéder et d'utiliser les Services sur le Site Web, conformément aux présentes Conditions générales. Ce droit d'utiliser notre site Web sera immédiatement résilié une fois que votre inscription d'utilisateur est annulée pour quelque raison que ce soit, et en particulier, mais sans s'y limiter, si vous faites usage de ce droit dans le but de générer une entreprise parallèle basée sur notre site Web ou nos produits, ou dans le but d'utiliser un service automatisé ou un logiciel d'analyse,  capturer ou utiliser d'une manière ou d'une autre les informations affichées sur notre site Web.</p>
                      <p><b>17.4</b> Vous n'êtes pas autorisé à :</p>
                      <p>a) installer ou charger le logiciel qui fait partie du site Web sur un serveur ou un autre appareil en réseau ou prendre d'autres mesures pour rendre le logiciel disponible via toute forme de «tableau d'affichage», service en ligne ou connexion ou réseau à distance à toute autre personne;</p>
                      <p>b) sous-licencier, céder, louer, prêter, transférer ou copier (sauf disposition expresse contraire dans les présentes Conditions générales) Votre droit d'utiliser le site Web ou le logiciel qui fait partie du site Web, ou d'en faire ou de distribuer des copies;</p>
                      <p>c) entrer, accéder ou tenter d'entrer ou d'accéder ou de contourner le système de sécurité de Seabet ou interférer de quelque manière que ce soit (y compris, mais sans s'y limiter, des robots ou des appareils similaires) avec les produits ou le site Web ou tenter d'apporter des modifications au logiciel et/ou à toute fonctionnalité ou composant de celui-ci ;</p>
                      <p>d) copier ou traduire toute documentation utilisateur fournie « en ligne » ou sous forme électronique.</p>
                      <p>e) En outre, sauf dans la mesure minimale permise par la loi applicable en ce qui concerne les programmes informatiques, vous n'êtes pas autorisé à : (i) traduire, désosser, décompiler, désassembler, modifier, créer des œuvres dérivées basées sur, ou autrement modifier le site Web; ou (ii) désosser, décompiler, désassembler, modifier, adapter, traduire, tenter de découvrir le code source du logiciel qui fait partie du site Web ou de créer des œuvres dérivées basées sur tout ou partie du site Web.</p>
                      <p><b>17.5</b> Vous n'êtes pas propriétaire du logiciel qui fait partie du site Web. Ce logiciel est détenu et est la propriété exclusive de Seabet ou d'une société de fournisseur de logiciels tiers (tout fournisseur tiers, le « Fournisseur de logiciel »). Tous les logiciels et la documentation qui les accompagne qui ont été concédés sous licence à Seabet sont des produits exclusifs du fournisseur de logiciel et protégés dans le monde entier par la loi sur les droits d'auteur. Votre utilisation du logiciel ne vous confère aucun droit de propriété intellectuelle sur le logiciel.</p>
                      <p><b>17.6</b> Le logiciel est fourni « en l'état » sans aucune garantie, condition, engagement ou représentation, explicite ou implicite, statutaire ou autre. Seabet exclut par la présente tous les termes, conditions et garanties implicites, y compris ceux de qualité marchande, de qualité marchande satisfaisante et d'adéquation à un usage particulier, d'exhaustivité ou d'exactitude des services ou du logiciel ou de violation des lois et règlements applicables. Seabet ne garantit ni ne conditionne que : </p>
                      <p>(i) le logiciel répondra à vos exigences ; </p>
                      <p>(ii) le Logiciel n'enfreindra pas les droits de propriété intellectuelle d'un tiers ; </p>
                      <p>(iii) le fonctionnement du Logiciel sera exempt d'erreurs ou ininterrompu ; (iv) tout défaut du logiciel sera corrigé ; ou </p>
                      <p>(v) le logiciel ou les serveurs sont exempts de virus.</p>

                      <p><b>17.7</b> En cas d'erreurs de communication ou de système survenant dans le cadre du règlement des comptes ou d'autres fonctionnalités ou composants du logiciel, ni Seabet ni le Fournisseur de logiciel n'auront aucune responsabilité envers Vous ou un tiers à l'égard de ces erreurs. Seabet se réserve le droit, en cas de telles erreurs, de supprimer tous les produits pertinents du site Web et de prendre toute autre mesure pour corriger ces erreurs.</p>
                      <p><b>17.8</b> Vous  reconnaissez par la présente que la façon dont Vous utilisez le logiciel est hors du contrôle de Seabet. En conséquence, vous installez et/ou utilisez le logiciel à vos propres risques. Seabet n'aura aucune responsabilité envers vous ou un tiers en ce qui concerne votre réception et/ou votre utilisation du logiciel.</p>
                      <p><b>17.9</b> Le logiciel peut contenir des informations confidentielles secrètes et précieuses pour le Fournisseur de logiciel et/ou Seabet. Vous n'êtes pas autorisé à utiliser ou à divulguer ces informations confidentielles autrement qu'en stricte conformité avec les présentes Conditions générales.</p>
                      <p><b>17.10</b> Seabet ne sera pas responsable si, pour une raison quelconque, le site Web est indisponible à tout moment ou pour toute période. Nous nous réservons le droit d'apporter des modifications ou des corrections ou de modifier, suspendre ou interrompre tout aspect du site Web et du contenu, des services ou des produits disponibles par son intermédiaire, y compris votre accès à celui-ci.</p>
                      <p><b>17.11</b> Vous ne devez pas abuser du site Web en introduisant des virus, des chevaux de Troie, des vers, des bombes logiques ou tout autre matériel malveillant ou technologiquement nuisible. En particulier, vous ne devez pas accéder au site Web sans autorisation, interférer, endommager ou perturber le site Web ou toute partie de celui-ci, tout équipement ou réseau sur lequel le site Web est hébergé, tout logiciel utilisé dans le cadre de la fourniture du site Web, ou tout équipement, logiciel ou site Web détenu ou utilisé par un tiers. Vous ne devez pas attaquer notre site Web via une attaque par déni de service. Nous ne serons pas responsables de toute perte ou dommage causé par une attaque par déni de service distribué, des virus ou tout autre matériel technologiquement nuisible qui pourrait infecter votre équipement informatique, vos programmes informatiques, vos données ou tout autre matériel exclusif découlant de votre utilisation du site Web, du logiciel ou de votre téléchargement de tout matériel publié sur celui-ci ou sur tout site Web qui y est lié.</p>

                      <h3>18. CONTENU DE TIERS</h3>
                      <p><b>18.1</b> Seabet reçoit des flux, des commentaires et du contenu d'un certain nombre de fournisseurs. Certains fournisseurs de produits tiers peuvent vous demander d'accepter des conditions générales supplémentaires régissant l'utilisation de leurs flux, commentaires et contenus. Si vous n'acceptez pas les conditions générales tierces pertinentes, vous acceptez de ne pas utiliser les flux, commentaires ou contenus pertinents.</p>
                      <p><b>18.2</b> Seabet décline toute responsabilité à l'égard des flux, commentaires et contenus de tiers.</p>
                      <p><b>18.3</b> Lorsque le site Web contient des liens vers des sites Web et des ressources de tiers, ces liens sont fournis à titre d'information uniquement. Seabet n'a aucun contrôle sur le contenu de ces sites ou ressources, et n'accepte aucune responsabilité pour eux ou pour toute perte ou dommage pouvant découler de votre utilisation de ceux-ci. L'inclusion d'un lien vers un site Web tiers ne constitue pas une approbation du site Web, du produit ou des services de ce tiers, le cas échéant.</p>

                      <h3>19. ERREURS</h3>
                      <p><b>19.1</b> Seabet ne sera pas responsable dans le cas où vous essayez ou obtenez un avantage à partir d'erreurs en ce qui concerne les paris ou les paris sur le site Web si vous avez délibérément agi de mauvaise foi, y compris lorsque : </p>
                      <p>(i) il y a une erreur évidente dans les cotes, les spreads, le handicap, les totaux, le retrait pertinents; </p>
                      <p>(ii) Seabet continue d'accepter des paris ou des paris sur des marchés fermés ou suspendus ; </p>
                      <p>(iii) Seabet calcule ou paie incorrectement un montant de règlement, y compris lorsqu'un pari est encaissé pour le montant total du règlement, ou qu'un pari est annulé de manière incorrecte, où « Nul si le joueur ne commence pas » a été sélectionné lors du placement du pari ; ou toute erreur se produit dans un générateur de nombres aléatoires ou des tables de paiement incluses, incorporées ou utilisées dans un jeu ou un produit.</p>

                      <h3>20. VIOLATION</h3>
                      <p><b>20.1</b> Sans préjudice de tout autre droit,  si un utilisateur enfreint en tout ou en partie une disposition contenue dans les présentes, Seabet se réserve le droit de prendre les mesures qu'il juge appropriées, y compris la résiliation du présent Contrat ou de tout autre accord en place avec l'Utilisateur et/ou intenter une action en justice contre cet Utilisateur.</p>
                      <p><b>20.2</b> Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité Seabet et ses actionnaires, administrateurs, agents et employés contre toutes réclamations, demandes, responsabilités, dommages, pertes, coûts et dépenses, y compris les frais juridiques et tous autres frais quels qu'ils soient, quelle qu'en soit la cause, qui pourraient survenir à la suite de :</p>
                      <p>a) votre violation du présent Contrat, en tout ou en partie;</p>
                      <p>b) violation par vous de toute loi ou de tout droit de tiers; et</p>
                      <p>c) votre utilisation du Service.</p>



                      <h3>21. LIMITATIONS ET RESPONSABILITÉ</h3>
                      <p><b>21.1</b> Seabet ne peut en aucun cas, y compris la négligence, être tenue responsable de dommages spéciaux, accessoires, directs, indirects ou consécutifs quels qu'ils soient (y compris, sans limitation, les dommages pour perte de profits commerciaux, interruption d'activité, perte d'informations commerciales ou toute autre perte pécuniaire) découlant de l'utilisation (ou de la mauvaise utilisation) du Service, même si Seabet avait connaissance au préalable de la possibilité de tels dommages.</p>
                      <p><b>21.2</b> Rien dans le présent Contrat n'exclut ou ne limite la responsabilité de Seabet en cas de décès ou de blessure corporelle résultant de sa négligence.</p>

                      <h3>22. PROPRIÉTÉ INTELLECTUELLE</h3>
                      <p><b>22.1</b> Seabet et ses concédants de licence sont les seuls détenteurs de tous les droits sur le Service, le code, la structure et l'organisation, y compris les droits d'auteur, les secrets commerciaux, la propriété intellectuelle et d'autres droits. Vous ne pouvez pas, dans les limites prescrites par les lois applicables : </p>
                      <p>(a) copier, distribuer, publier, désosser, décompiler, désassembler, modifier ou traduire le site Web; ou </p>
                      <p>(b) utiliser le Service d'une manière interdite par les lois ou règlements applicables (chacun des éléments ci-dessus est une « Utilisation non autorisée »). </p>
                      <p>Seabet se réserve tous les droits implicites ou autres, qui ne sont pas expressément accordés à l'Utilisateur en vertu des présentes et conserve tous les droits, titres et intérêts dans et sur le Service. Vous acceptez d'être seul responsable de tout dommage, coût ou dépense découlant de ou en relation avec la commission que vous avez de toute utilisation non autorisée. </p>
                      <p>Vous devez informer Seabet immédiatement dès que vous aurez connaissance de la commission par toute personne de toute utilisation non autorisée et fournir à Seabet une assistance raisonnable dans le cadre de toute enquête menée à la lumière des informations que vous avez fournies à cet égard.</p>
                      <p><b>22.2</b> Le terme « Seabet », ses noms de domaine et toutes les autres marques commerciales, ou marques de service utilisées par Seabet dans le cadre du Service (les « Marques »), sont la propriété exclusive de Seabet. En outre, tout le contenu du site Web, y compris, mais sans s'y limiter, les images, images, graphiques, photographies, animations, vidéos, musique, audio et texte (le «Contenu du site») appartient à Seabet et est protégé par le droit d'auteur et / ou d'autres droits de propriété intellectuelle ou autres. Vous reconnaissez par la présente qu'en utilisant le Service, vous n'obtenez aucun droit sur le Contenu du Site et/ou les Marques de commerce, ou toute partie de ceux-ci. Vous ne pouvez en aucun cas utiliser le Contenu du Site et/ou les Marques commerciales sans le consentement écrit préalable de Seabet. En outre, vous acceptez de ne rien faire qui puisse nuire ou potentiellement nuire aux droits, y compris les droits de propriété intellectuelle de Seabet.</p>

                      <h3>23. LITIGES</h3>
                      <p><b>23.1</b> Si un Utilisateur souhaite déposer une réclamation, veuillez contacter le service clientèle de Seabet à l'adresse (support{'@'}seabet.io). Si un litige n'est pas résolu à votre satisfaction, vous pouvez exercer des recours dans la juridiction applicable énoncée ci-dessous.</p>

                      <h3>24. AMENDEMENT</h3>
                      <p><b>24.1</b> Seabet se réserve le droit de mettre à jour ou de modifier le présent Contrat ou toute partie de celui-ci à tout moment ou de modifier le Service sans préavis et vous serez lié par cet Accord modifié dès sa publication. Par conséquent, nous vous encourageons à vérifier les termes et conditions contenus dans la version de l'Accord en vigueur à ce moment-là. Votre utilisation continue du Service sera réputée attester de votre accord à toute modification du Contrat.</p>

                      <h3>25. DIVISIBILITÉ</h3>
                      <p><b>25.1</b> Si une disposition du présent Contrat est ou devient illégale, invalide ou inapplicable dans une juridiction, cela n'affectera pas la validité ou l'applicabilité dans cette juridiction de toute autre disposition des  présentes ou la validité ou l'applicabilité dans d'autres juridictions de cette disposition ou de toute autre disposition des présentes.</p>

                      <h3>26. CESSION</h3>
                      <p><b>26.1</b> Seabet se réserve le droit de céder cet accord, en tout ou en partie, à tout moment et sans préavis. L'Utilisateur ne peut céder aucun de ses droits ou obligations en vertu du présent Contrat.</p>

                      <h3>27. DIVERS</h3>
                      <p><b>27.1</b> Aucune renonciation par Seabet à toute violation  de toute disposition du présent Contrat (y compris le défaut de Seabet d'exiger l'exécution stricte et littérale ou le respect de toute disposition du présent Contrat) ne doit en aucun cas être interprétée comme une renonciation à toute violation ultérieure de cette disposition ou à toute violation de toute autre disposition du présent Contrat.</p>
                      <p><b>27.2</b> Rien dans le présent Contrat ne crée ou ne confère de droits ou d'autres avantages en faveur de tiers non parties au présent Contrat.</p>
                      <p><b>27.3</b> Rien dans le présent Contrat ne crée ou ne sera réputé créer un partenariat, une agence, un accord de fiducie, une relation fiduciaire ou une coentreprise entre vous et Seabet.</p>
                      <p><b>27.4</b> Seabet peut céder, transférer, facturer, sous-licencier ou traiter de toute autre manière le présent Contrat, ou sous-traiter l'un de ses droits et obligations en vertu du présent Contrat, à toute autre partie.</p>
                      <p><b>27.5</b> Le présent Contrat constitue l'intégralité de l'entente et  de l'accord entre vous et Seabet concernant le Service et remplace tout accord, entente ou arrangement antérieur entre vous et Seabet.</p>

                      <h3>28. RECLAMATIONS</h3>
                      <p><b>28.1</b> Si vous avez une plainte à formuler concernant nos services, vous pouvez contacter notre service clientèle via le chat en direct ou par e-mail (support{'@'}seabet.io). Nous nous efforcerons de résoudre la question rapidement.</p>

                  </div>`,
    responsibleContent: `<div>
                          <h2>Jeu responsable</h2>

                          <p>En Seabet.io; Les plateformes et les services que nous fournissons permettent à nos clients de profiter des jeux et des paris. Notre objectif est de vous fournir un environnement sûr, sécurisé et réglementé qui vous offre une expérience agréable et enrichissante. Nous encourageons nos clients à utiliser nos services de manière responsable et raisonnable.</p>
                          <p>Toutes sortes de jeux de casino sont populaires depuis de nombreuses années et, dans Seabet.io jeux sont conçus pour apporter du plaisir à tout le monde. Nous encourageons également nos joueurs à s'amuser sans laisser le jeu interférer avec leur vie quotidienne et à prendre du temps avec leur famille et leurs amis. Il est important de s'assurer que le montant dépensé pour le jeu n'est que la monnaie ou l'argent de rechange restant après toutes les dépenses de votre vie, et il est important que le jeu ne soit pas un moyen de gagner votre vie parce que vous ne pouvez pas garantir un profit.</p>
                          <p>Bien que la plupart des joueurs joueront de manière responsable et normale. Mais malheureusement, il y a un petit nombre de joueurs qui peuvent avoir le problème de se livrer au jeu. </p>
                          <p>Chez Seabet.io, la qualité de vie/psychologie de nos joueurs est importante pour nous et nous prenons notre rôle dans le jeu responsable très au sérieux et vous conseillons :</p>
                          <ul>
                              <li>Considérez vos paris et vos jeux comme une forme de divertissement, en utilisant uniquement l'argent que vous mettez de côté pour le divertissement.</li>
                              <li>Ne placez pas de paris ou ne pariez pas plus que ce que vous pouvez vous permettre.</li>
                              <li>Ne pariez pas ou ne pariez pas avec de l'argent que vous ne pouvez pas vous permettre de perdre.</li>
                              <li>Ne courez pas après vos pertes.</li>
                              <li>Ne laissez pas vos paris et/ou jeux vous priver de temps que vous consacrez normalement à d'autres activités.</li>
                          </ul>

                          <p>Si vous avez des inquiétudes au sujet de vos habitudes de jeu et que vous pensez que vous n'êtes pas en mesure de suivre ces recommandations, nous vous recommandons fortement de demander conseil aux organisations accréditées suivantes qui peuvent vous aider et vous conseiller:</p>

                          <ul>
                              <li><a target="_blank" href="https://www.gamcare.org.uk/">GamCare</a></li>
                              <li><a target="_blank" href="https://keepitfun.rank.com/">Keep It Fun</a></li>
                              <li><a target="_blank" href="https://www.gamblingtherapy.org/">Gambling Therapy</a></li>
                          </ul>

                          <p>De plus, si vous souhaitez en savoir plus sur notre processus d'auto-exclusion, vous pouvez envoyer un e-mail (support{'@'}seabet.io) à notre service client amical Seabet.io. Parfois, une courte pause peut vous aider à calmer vos pensées et vous empêcher de prendre des décisions de paris irréfléchies qui ne correspondent pas à vos habitudes.</p>
                          <p>Sur demande, nous placerons votre compte avec un délai de réflexion d'au moins 24 heures. Par la suite, l'un de nos agents de soutien vous informera de l'auto-exclusion volontaire disponible 1 semaine, 1 mois, 3 mois, 6 mois ou permanente.</p>
                          <p>S'il vous plaît noter; Les comptes fermés en vertu de notre politique d'auto-exclusion ne peuvent pas être révoqués ou rouverts pour quelque raison que ce soit. Cependant, une fois votre auto-exclusion expirée, nous vous enverrons un e-mail vous informant que votre compte est à nouveau actif. L'auto-exclusion permanente existera indéfiniment.</p>

                          <p>Mineur</p>
                          <p>Si vous souhaitez jouer avec nous en Seabet.io, vous devez être âgé d'au moins 18 ans ou avoir l'âge minimum légal pour jouer (s'il est inférieur) dans la juridiction dans laquelle vous détenez en vertu des lois qui vous sont applicables.</p>

                          <p>Si vous avez des mineurs chez vous, nous vous recommandons de consulter les liens suivants vers un logiciel de contrôle parental, qui peut être un outil utile pour contrôler et limiter ce qui est accessible sur votre appareil.</p>

                          <ul>
                              <li><a target="_blank" href="https://www.netnanny.com/">https://www.netnanny.com/</a></li>
                              <li><a target="_blank" href="https://www.cyberpatrol.com/">https://www.cyberpatrol.com/</a></li>
                          </ul>
                        </div>`,
    amlContent: `<div>
                    <h2>Lutte contre le blanchiment d'argent, État sur le financement de la lutte contre le terrorisme</h2>

                    <h3>1. Modèle d'affaires de l'entreprise</h3>
                    <p>Seabet soutient actuellement ses utilisateurs dans plus de 169 pays à travers le monde. Dans le cadre de ses opérations mondiales, Seabet a mis en place des mesures de conformité proportionnées à ses services et produits conçus pour prévenir et détecter les activités illégales sur sa plateforme. Il s'agit notamment de l'intégration et du filtrage de la conformité de leurs clients et des contrôles basés sur les transactions.</p>

                    <h3>2. Énoncé de politique de l'entreprise</h3>
                    <p>Seabet interdit et refuse expressément d'utiliser les Produits Seabet pour toute forme d'activité illégale, y compris le blanchiment d'argent, le financement du terrorisme ou les violations des sanctions commerciales, conformément aux lois, réglementations et directives nationales de lutte contre le blanchiment d'argent (AML). Seabet continue de surveiller les paramètres fixés par les directives établies par le Groupe d'action financière (GAFI) et certaines organisations commerciales de jeux et la Commission de contrôle des jeux de Curaçao et prendra les mesures qu'il jugera appropriées pour refléter les changements dans la loi.</p>

                    <p>Seabet a l'intention de suivre les meilleures pratiques mondiales et d'empêcher que les produits Seabet ne soient utilisés pour faciliter de telles activités. Ces pratiques exemplaires sont les suivantes :</p>
                    <ul>
                    <li>Adopter des politiques écrites et des procédures et contrôles raisonnablement conçus pour prévenir le blanchiment d'argent, le financement des activités terroristes et les violations des sanctions commerciales;</li>
                    <li>S'il y a lieu, nommer un responsable de la conformité pour superviser la mise en œuvre des politiques, des procédures et des contrôles;</li>
                    <li>Fournir une éducation et une formation pertinentes au personnel concerné;</li>
                    <li>Examen, surveillance et maintien indépendants des politiques, des procédures et des contrôles.</li>
                    </ul>

                    <h3>3. Définitions</h3>
                    <p>Les termes de définition suivants sont largement utilisés dans l'industrie:</p>
                    <p>Blanchiment d'argent : Le processus consistant à faire des produits obtenus illégalement semble légitime. Ce processus est généralement divisé en trois étapes : stockage, hiérarchisation et consolidation.</p>
                    <p>Dépôt : Processus consistant à déposer des produits illégaux dans une institution financière traditionnelle, par le biais de dépôts ou d'autres moyens.</p>
                    <p>Stratification : Processus consistant à séparer les produits d'une activité criminelle de leur source en utilisant un niveau complexe de transactions financières, telles que la conversion d'espèces en chèques de voyage, mandats, virements télégraphiques, lettres de crédit, actions, obligations ou achat d'actifs.</p>
                    <p>Intégration : utilisation de transactions apparemment légitimes pour masquer des gains illicites afin que les fonds blanchis puissent être redistribués aux criminels; Réintégrer les fonds actuels de blanchiment d'argent à une utilisation normale.</p>
                    <p>Activité suspecte : activité exercée par un utilisateur ou un non-utilisateur à l'aide de l'institution lorsqu'il y a des indications que la personne qui effectue la transaction peut être à des fins frauduleuses ou illégales.</p>
                    <p>Sanctions : Les sanctions sont des activités entreprises par la communauté internationale pour interdire ou limiter les activités visées par les sanctions. Par exemple, ils sont utilisés pour :
                    <ul>
                      <li>Encourager l'État ou le régime visé à modifier son comportement;</li>
                      <li>Faire pression sur le pays cible pour qu'il respecte les objectifsfixés;</li>
                      <li>En tant qu'outil d'application de la loi lorsque la paix et la sécurité internationales sont menacées et que les efforts diplomatiques échouent;</li>
                      <li>Action préventive et lutte contre le financement du terrorisme ou des actes terroristes.</li>
                    </ul>

                    <h3>4. Gouvernance et surveillance</h3>
                    <p>Seabet a nommé un Chief Compliance Officer (CCO) pour coordonner la mise en œuvre des politiques et des programmes politiques d'AML. Les responsabilités du chef de la conformité comprennent également l'élaboration de plans de lutte contre le blanchiment d'argent, la collaboration avec d'autres parties prenantes pour réviser les politiques en matière de lutte contre le blanchiment d'argent, l'évaluation des nouvelles exigences réglementaires et les enquêtes sur les activités suspectes ou inhabituelles possibles. Seabet offre également régulièrement des formations AML à tous les employés.</p>

                    <h3>5. Éducation et formation</h3>
                    <p>Seabet, avec l'aide de son conseiller juridique et sous la supervision de son CCO, peut fournir régulièrement une formation sur la conformité en matière de LBC, de financement du terrorisme et de sanctions commerciales à ses employés, selon les besoins.</p>

                    <h3>6. Rapports</h3>
                    <p>Seabet est tenu de signaler toute transaction inhabituelle ou suspecte conformément aux décrets nationaux. Les clients figurant sur la liste des sanctions liées au blanchiment d'argent, au financement du terrorisme ou à d'autres activités criminelles seront signalés à l'organisme de réglementation comme activités suspectes.</p>
                </div>`,
    selfExclusionContent: `<div>
                              <h2>Politique d'auto-exclusion</h2>
                              <p>Si vous estimez que vous n'êtes plus en mesure de contrôler votre jeu ou de jouer en toute sécurité, nous vous offrons la possibilité de vous exclure des paris avec nous. Pour commencer la période de réflexion décrite ci-dessous, veuillez consulter les préférences de votre compte.</p>

                              <h3>1. Vue d'ensemble</h3>
                              <p>Pour la majorité des gens, le jeu est une activité de loisir et de divertissement agréable. Mais pour certains, le jeu peut avoir des impacts négatifs. Par conséquent, nous avons élaboré cette politique afin de communiquer notre approche en matière de jeu responsable et de minimiser les préjudices causés aux consommateurs qui peuvent être vulnérables au jeu compulsif.</p>

                              <h3>2. Qu'est-ce que le jeu responsable?</h3>
                              <p>Le « jeu responsable » est un concept général qui vise à s'assurer que le jeu est mené de manière à minimiser le potentiel de préjudice associé au jeu compulsif. Il respecte la responsabilité des individus pour leurs propres actions, mais reconnaît également une responsabilité de la part des fournisseurs de services.</p>

                              <h3>3. Qu'est-ce que le jeu compulsif?</h3>
                              <p>Le jeu problématique se produit lorsqu'une personne perd le contrôle de son jeu, en particulier le montant d'argent joué et le temps consacré au jeu.</p>

                              <h3>4. Principes du service à la clientèle</h3>
                              <p>Chez Seabet.io, nous voulons être un chef de file de l'industrie en fournissant un environnement sûr à nos clients. Nous encourageons et promouvons activement des pratiques de jeu responsables et fournissons des outils pour aider nos clients à garder le contrôle de leur jeu.</p>

                              <h3>5. Politique de jeu responsable</h3>
                              <p>Nous nous engageons à partager la responsabilité, avec les gouvernements, les communautés et les individus, d'aider les clients à contrôler leur jeu et à aider les joueurs compulsifs à identifier leur problème et à demander de l'aide.</p>
                              <p>Voici quelques-unes des façons dont nous le faisons : i. permettre à nos clients de s'auto-exclure (temporairement ou définitivement) des paris avec nous ; ii. fournir des informations et des messages sur le jeu responsable à nos clients; iii. former notre personnel au jeu responsable lors de l'initiation et au moins une fois par an; iv. et diriger nos clients touchés par le jeu problématique vers des services de soutien liés au jeu.</p>
                              <p>Nous visons à atteindre les résultats suivants :</p>
                              <ul>
                                  <li>réduire au minimum l'étendue des préjudices liés au jeu pour les individus et la communauté en général;</li>
                                  <li>Permettre aux clients de prendre des décisions éclairées au sujet de leurs pratiques de jeu; </li>
                                  <li>Permettre aux personnes lésées par le jeu d'avoir accès en temps utile à une assistance et à des informations appropriées; </li>
                                  <li>Promouvoir une compréhension commune entre les individus, les communautés, l'industrie du jeu et le gouvernement des pratiques de jeu responsables; </li>
                                  <li>Veiller à ce que l'industrie du jeu offre des environnements sûrs et favorables à la prestation de produits et de services de jeu.</li>
                              </ul>
                              <h3>6. Mineurs</h3>
                              <p>En tant qu'opérateur responsable, nous nous engageons à protéger les mineurs en prenant activement des mesures pour empêcher les mineurs de placer un pari en utilisant nos plateformes de paris. Nos services sont conçus pour plaire et être utilisés par des personnes âgées d'au moins 18 ans.</p>

                              <h3>7. Options de filtrage</h3>
                              <p>Les options de filtrage peuvent être activées pour empêcher les personnes d'accéder aux casinos en ligne ou aux sites Web de paris sportifs en ligne. Si des mineurs ont accès à l'appareil que vous utilisez pour accéder à nos plateformes de paris, nous vous encourageons à utiliser un logiciel de filtrage pour empêcher les mineurs d'accéder à nos plateformes de paris.</p>

                              <h3>8. Aide supplémentaire</h3>
                              <p>En cas d'aide nécessaire, veuillez contacter notre équipe d'assistance à support{'@'}seabet.io ou sur notre système de chat en direct et l'un de nos agents sera en mesure de vous donner les détails des associations et les numéros de téléphone d'aide disponibles dans votre pays.</p>

                              <h3>9. Conditions et processus</h3>
                              <p>S'auto-exclure signifie arrêter de parier ou de jouer pendant un certain temps. L'auto-exclusion peut être temporaire ou permanente.</p>
                              <p>En demandant l'une de nos périodes d'auto-exclusion, vous acceptez les termes et conditions suivants, qui entreront en vigueur à partir de la minute où vous recevrez un e-mail de confirmation de votre auto-exclusion choisie, cet e-mail sera envoyé à l'adresse e-mail utilisée pour enregistrer votre compte uniquement et affichera la date d'achèvement de l'auto-exclusion.</p>
                              <p>Les demandes effectuées via notre fonction de chat ne seront pas traitées. Cependant, un agent de support client vous dirigera vers notre service de courrier électronique de support client.</p>
                              <p>Dès réception d'une demande de fermeture de compte par e-mail, le compte demandé et tous les comptes liés seront placés sur notre première étape, une période de réflexion de 24 heures qui désactivera votre compte ou vos comptes, ne permettant aucune activité de jeu. Une fois ce temps écoulé; Tant que votre ou vos comptes restent fermés, un agent du service clientèle vous informera des auto-exclusions de 1 semaine, 1 mois, 6 mois et permanentes disponibles. Il n'y aura pas de variation de ces périodes. Pour poursuivre ce processus, nous aurons besoin d'une réponse par courriel. Si nous ne recevons pas de réponse dans un délai supplémentaire de 24 heures, votre compte sera rouvert et confirmé par e-mail.</p>

                              <p>Si, après avoir examiné nos options d'auto-exclusion, vous décidez que vous souhaitez procéder à une auto-exclusion permanente, vous devrez définir une période d'exclusion lorsque vous y serez invité. À l'occasion, nous pouvons décider de placer un compte sur une courte période d'auto-exclusion si nous pensons que cela est nécessaire et/ou bénéfique pour le client. Cela sera communiqué par courrier électronique; Les termes et conditions ci-dessus s'appliqueront.</p>

                              <p>Vous n'êtes pas autorisé à laisser un solde sur votre compte pendant une période d'auto-exclusion. Vous ne pourrez pas accéder à votre compte pour retirer des fonds pendant votre demande d'auto-exclusion. Si vous avez un compte affecté par une auto-exclusion qui a des paris actifs, la fonction Cash Out sera appliquée au moment de la confirmation de l'auto-exclusion. Les paris ne seront pas nuls ; Les mises ne seront pas retournées ou ne resteront pas actives pendant toute une période d'auto-exclusion. Les paris ne seront pas rétablis après l'achèvement d'une auto-exclusion. Bien que vous soyez auto-exclu, vous n'êtes admissible à aucune forme d'avantages, de bonus ou de recharges.</p>

                              <p>Une fois qu'une auto-exclusion est appliquée à votre compte, elle restera en place jusqu'à la fin du délai de demande, elle ne sera pas annulée ou diminuée pour quelque raison que ce soit. Les auto-exclusions permanentes resteront fermées indéfiniment.</p>

                              <p>Nous déploierons tous les efforts raisonnables pour assurer le respect de notre politique d'auto-exclusion du jeu responsable. Cependant, vous acceptez que nous ne serons pas tenus responsables si vous tentez d'ouvrir un nouveau compte ou si vous réussissez. En outre, nous ne serons pas tenus responsables si vous continuez à déposer et à parier en utilisant des comptes supplémentaires qui n'ont pas été divulgués auparavant. Tous les paris futurs, les fonds de récompense et les participations à des promotions pendant une période d'auto-exclusion demandée seront perdus, ce qui n'entraînera aucun retour des mises ou paiement des gains. Nous ne serons pas en mesure de les rétablir si le compte est rouvert après la période d'auto-exclusion. Après l'auto-exclusion, vous reconnaissez que :</p>

                              <p>Vous ne devez pas tenter, déposer ou placer un pari sur l'un de vos comptes dont vous avez demandé à être exclu pendant votre auto-exclusion sélectionnée.</p>

                              <p>Vous ne devez pas tenter ou procéder à l'ouverture de nouveaux comptes pendant votre période d'auto-exclusion, ou indéfiniment si une auto-exclusion permanente a été sélectionnée.</p>

                              <p>Si vous réussissez à ouvrir un nouveau compte pendant une période d'auto-exclusion, nous nous efforcerons de fermer tous ces comptes dès notre détection.</p>
                              <p>Notre responsabilité est uniquement de prendre des mesures raisonnables pour vous empêcher de jouer sur l'un de nos produits. Il est également de la responsabilité du client de s'abstenir de violer ces conditions convenues.</p>

                              <p>Une demande d'auto-exclusion est une demande volontaire faite par vous. Si vous agissez contrairement à une telle demande, ni aucun de ses employés ou personnes affiliées ne sera tenu responsable des pertes que vous pourriez subir. Toute perte subie pendant la période d'exclusion de vous-même ne sera pas remboursée.</p>

                              <p>Si vous agissez contrairement à une demande d'auto-exclusion, nous conservons le pouvoir discrétionnaire de résilier ou d'annuler tout pari que vous avez placé et de prendre toute autre mesure appropriée. De plus, si nous avons des soupçons ou si une enquête plus approfondie fournit des preuves que vous avez activement tenté de dissimuler la source de votre ou de vos comptes, ce qui affecte notre capacité à bloquer rapidement votre ou vos comptes, la société conserve le pouvoir discrétionnaire de résilier ou d'annuler tout pari que vous avez placé et de prendre toute autre mesure appropriée.</p>

                              <p>Une fois que l'auto-exclusion que vous avez sélectionnée a pris fin, votre compte sera automatiquement rouvert. Cependant, vous recevrez un e-mail de confirmation de ces informations qui sera envoyé à votre adresse e-mail enregistrée.</p>
                          </div>`,
    privacyContent: `<div>
                        <h2>Politique de confidentialité </h2>
                        <p>Seabet.io respecte et protège la vie privée de tous les utilisateurs de nos Services. Cette politique de confidentialité (« Politique ») détaille la façon dont nous recueillons, stockons, utilisons et divulguons vos informations personnelles.</p>
                        <h3>1. Portée et application </h3>
                        <p>Cette Politique s'applique à votre accès et à votre utilisation  de Seabet.io (le « Site Web ») et de tous les sites Web et applications de la marque Seabet, y compris toutes nos applications mobiles et tablettes. En outre, cette politique s'applique également lorsque nous interagissons avec vous d'autres manières.</p>
                        <h3>2. Consentement de l'utilisateur et modification</h3>
                        <p>En utilisant le site Web de Seabet, vous acceptez d'être lié par cette politique. Nous nous réservons le droit, à notre seule discrétion, de modifier ou de changer cette politique à tout moment, et nous publierons ces changements sur le site, et ces changements entreront en vigueur immédiatement après leur publication. Votre utilisation continue du Site après de tels changements constitue votre acceptation de ces changements. Cette politique ne s'applique pas aux autres sites Web liés à ce site Web.</p>
                        <h3>3. Renseignements personnels recueillis</h3>
                        <ul>
                            <li>Nous pouvons collecter et traiter les types d'informations personnelles suivants :</li>
                            <li>Nom</li>
                            <li>Adresse courriel</li>
                            <li>Informations sur les préférences soumises par l'utilisateur</li>
                            <li>Date de naissance</li>
                            <li>Nationalité</li>
                            <li>Adresse physique</li>
                            <li>Numéro d'identification gouvernement</li>
                            <li>Pièce d'identité émise par le gouvernement</li>
                            <li>Données de localisation</li>
                            <li>Informations sur l'appareil</li>
                            <li>Adresse IP</li>
                        </ul>
                        <p>Ces informations sont principalement dérivées des informations que vous fournissez lorsque vous vous inscrivez pour un compte ou communiquez avec nous.</p>
                        <h3>4. But de la collecte</h3>
                        <p>Nous recueillons vos renseignements personnels pour :</p>
                        <ul>
                            <li>Effectuer une vérification de l'identité du client (KYC)</li>
                            <li>Pour vous permettre de vous abonner à nos communications marketing</li>
                            <li>Pour traiter votre demande d'adhésion</li>
                            <li>Pour fournir et améliorer nos services</li>
                            <li>Identifier et vérifier votre identité</li>
                            <li>Communiquer avec vous</li>
                            <li>la réalisation d'études de marché et d'activités promotionnelles;</li>
                            <li>Pour répondre à vos questions et demandes</li>
                            <li>Pour nous conformer à nos obligations contractuelles et légales</li>
                        </ul>

                        <h3>5. Utilisation et divulgation des renseignements personnels</h3>
                        <p>Nous pouvons utiliser vos informations personnelles pour des activités de marketing et vous informer sur des produits ou services qui, selon nous, pourraient vous intéresser par e-mail, message texte ou téléphone. Si vous ne souhaitez plus recevoir d'informations marketing ou promotionnelles de notre part, vous pouvez vous désabonner à tout moment en nous contactant par e-mail.</p>
                        <h3>6. Sécurité des renseignements personnels</h3>
                        <p>L'Utilisateur doit comprendre que la transmission de données Internet n'est pas absolument sécurisée, Seabet.io ne peut garantir la sécurité absolue des informations téléchargées par l'Utilisateur sur la Plateforme, et l'Utilisateur supporte le risque. Toutefois, après avoir reçu la transmission des renseignements de l'utilisateur, Seabet.io prendra les mesures appropriées pour prévenir l'utilisation abusive, la perte et l'accès, la modification et la divulgation non autorisés des renseignements personnels de l'utilisateur. Cela inclut l'utilisation de la protection par mot de passe des systèmes et des bases de données, ainsi que l'utilisation de la technologie Secure Sockets Layer (SSL). En utilisant nos Services ou en fournissant des informations personnelles, les utilisateurs acceptent que nous puissions communiquer avec vous par voie électronique concernant la sécurité, la confidentialité et les questions administratives liées à l'utilisation des Services. Seabet.io employés, agents et entrepreneurs sont tenus de préserver la confidentialité des renseignements personnels et des transactions des membres. Les informations publiées par les utilisateurs sur des plateformes publiques ou des environnements de médias sociaux (par exemple,  Facebook, Twitter) seront considérées comme des informations publiques, Seabet.io la sécurité de ces informations ne peut être garantie.</p>
                        <p>Nous soulignons que nos services ne sont pas destinés aux enfants et que nous n'acceptons pas les comptes ou les informations personnelles. Cependant, les parents ou tuteurs ont l'obligation de surveiller les activités Internet de leurs enfants. Assurez-vous de vous déconnecter de votre compte dès que vous avez terminé d'utiliser le site Web, surtout si vous partagez votre appareil. L'Utilisateur est responsable de la sécurité et des droits d'accès des appareils utilisés pour accéder au Site. En fin de compte, les utilisateurs maintiennent la confidentialité des noms d'utilisateur, des mots de passe et des informations de compte et sont vigilants lorsqu'ils utilisent Internet et notre site Web.</p>
                        <h3>7. Accès aux renseignements personnels</h3>
                        <p>Les utilisateurs peuvent accéder aux informations personnelles collectées par Seabet.io en cliquant sur le lien « Paramètres » du site Web ou en envoyant un courriel au support{'@'}Seabet.io. Nous répondrons à la demande d'accès de l'utilisateur dans un délai raisonnable. Si nous ne sommes pas en mesure de répondre à votre demande, nous vous informerons par écrit des raisons du refus d'accès et du mécanisme de plainte.</p>
                        <h3>8. Suppression des données personnelles</h3>
                        <p>S'il n'est plus possible de traiter ou de stocker légalement les données personnelles de l'utilisateur, l'utilisateur a le droit de demander leur suppression. Cependant, ce droit n'est pas absolu et si Seabet.io êtes soumis à des obligations légales, il ne pourra pas répondre aux exigences de l'utilisateur. Veuillez faire une demande en envoyant un courriel à support{'@'}Seabet.io.</p>
                        <h3>9. Contact</h3>
                        <p>Si vous avez des questions, des demandes ou des plaintes concernant notre traitement de vos informations personnelles, veuillez nous contacter par e-mail support{'@'}Seabet.io ou par la  fonction de chat du support client du site Web.</p>



                        <h3>10. Transferts internationaux de données</h3>
                        <p>Nous pouvons transférer, traiter et stocker des informations dans le monde entier, y compris, mais sans s'y limiter, dans d'autres pays dont les lois sur la protection des données peuvent différer de celles de votre emplacement. Nous protégerons vos informations autant que possible et tel que requis par la loi applicable.</p>
                        <h3>11. Racine de la base juridique du traitement</h3>
                        <p>Conformément au Règlement général mondial sur la protection des données, Seabet.io traitement de vos informations personnelles repose sur les bases légales suivantes : exécution d'un contrat, intérêts légitimes, consentement de l'utilisateur et respect d'une obligation légale.</p>
                        <h3>12. Mises à jour de la politique de confidentialité</h3>
                        <p>Seabet.io pouvons périodiquement réviser, modifier et mettre à jour cette politique de confidentialité pour refléter nos pratiques et responsabilités. Nous publierons la dernière politique de confidentialité sur le site Web Seabet.io. Les utilisateurs doivent consulter périodiquement cette politique de confidentialité pour se familiariser avec ses termes.</p>
                        </div>`,
    fairnessContent: `<div>
                        <h2>Impartialité</h2>
                        <p>Avant de pouvoir placer des paris en devises fiduciaires, y compris la crypto-monnaie, vous devez créer un compte sur Seabet.io site Web. Votre utilisation du Seabet.io (le « Site Web ») et l'ouverture d'un compte auprès du Seabet.io seront réputées avoir été lues, comprises et liées par les présentes Conditions générales.</p>

                        <p>Définition</p>
                        <p>Seabet.io – dénommée « nous » ou « société ».</p>
                        <p>Joueur – appelé « vous » ou « joueur » ou « membre » ou « client » ou « titulaire du compte ».</p>
                        <p>Jeux – Désigne les casinos et autres jeux RNG (Random Number Generator), qui peuvent être disponibles sur le site Web de temps à autre.</p>
                        <p>Site Web – désigne un site Web utilisé par Seabet.io Player via des plates-formes de bureau, mobiles ou autres.</p>
                        <p>Compte de membre - Un compte d'utilisateur requis pour accéder et utiliser le Site.</p>
                        <p>Support client - Services d'assistance et de support fournis par la Société à ses clients.</p>
                        <p>Événement - désigne un événement sportif ou de paris ou un match ou un jeu dans un sport dans lequel un client peut placer un pari sur le résultat.</p>
                        <p>Crypto-monnaies - doit être lu comme «Bitcoin, altcoins et / ou (le cas échéant) d'autres crypto-monnaies prises en charge.»   </p>
                        <p>Monnaie fiduciaire - Une marchandise physique monétaire non prise en charge émise par un gouvernement ou une autorité de banque centrale, telle que l'or ou l'argent (par exemple, le dollar américain, le real brésilien, le yen japonais, les personnes).</p>
                        <p>Juridictions restreintes - Licences spécifiques à chaque pays qui sont soumises à des restrictions sur nos jeux, par conséquent, il est interdit aux utilisateurs situés dans ou depuis ces régions de s'inscrire et de jouer sur le Site. La liste des juridictions restreintes peut être mise à jour de temps à autre et peut être consultée via le lien ci-dessous.</p>

                        <h3>1. Généralités</h3>
                        <p><b>1.1</b> Les présentes conditions générales (« Conditions générales ») s'appliquent aux paris sportifs et à l'utilisation de jeux de type casino accessibles via le site Web. </p>

                        <p><b>1.2</b> Les présentes conditions générales entrent en vigueur immédiatement après la fin du processus d'inscription, y compris en cochant la case pour accepter ces conditions générales et en suivant</p>
                        <p>Créez un compte. En utilisant n'importe quelle partie du Site après avoir créé un compte, vous acceptez que les présentes Conditions générales s'appliquent à l'utilisation du Site.</p>

                        <p><b>1.3</b> Création d'un compte. Si vous n'acceptez pas l'une des dispositions des présentes Conditions générales, vous ne devez pas créer de compte ou continuer à utiliser le Site. </p>

                        <p><b>1.4</b> Nous nous réservons le droit de modifier ces Termes et Conditions à tout moment sans préavis. Si nous apportons de tels changements, nous pouvons prendre les mesures appropriées pour vous rappeler ces changements, par exemple en publiant un avis par courriel ou sur le site Web et les conditions générales révisées, mais vous êtes seul responsable de vérifier les amendements, mises à jour et / ou modifications. Si nous déterminons que des modifications apportées aux présentes Conditions sont réputées avoir un impact « important » sur vos droits ou obligations en vertu des présentes Conditions générales, nous déploierons des efforts raisonnables pour vous en informer par courriel ou en publiant sur le site Web. Votre utilisation continue des Services et du Site Web de la Société après de telles modifications des Conditions générales sera considérée comme votre acceptation et votre accord d'être lié par ces amendements, mises à jour et / ou modifications. </p>

                        <p><b>1.5</b> Ces Termes et Conditions peuvent être publiés en plusieurs langues à des fins d'information et de commodité de l'accès des joueurs. En cas de divergence entre votre relation et nous et la traduction, la version anglaise des présentes Conditions générales prévaudra pour quelque nature que ce soit. </p>

                        <h3>2. Déclarations contraignantes</h3>
                        <p><b>2.1</b>  En acceptant d'être lié par les présentes Conditions générales, vous acceptez également d'être lié par les Règles du site Web et la Politique de confidentialité, qui sont incorporées par référence aux présentes, ainsi qu'aux Conditions. En cas d'incompatibilité, les présentes Conditions générales prévaudront. Par les présentes, vous déclarez et garantissez que :</p>

                        <p><b>2.1.1</b> Vous avez au moins 18 ans ; </p>

                        <p><b>2.1.2</b> Vous êtes  pleinement capable de conclure des accords juridiquement contraignants avec nous et vous n'êtes soumis à aucune forme de capacité juridique limitée; </p>

                        <p><b>2.1.3</b> Vous participez au Jeu à titre strictement personnel et non professionnel  ; et la participation uniquement à des fins de divertissement et de divertissement ; </p>

                        <p><b>2.1.4</b> Vous vous représentez vous-même et non au nom d'une autre personne ; </p>

                        <p><b>2.1.5</b> Toutes les informations que vous nous fournissez pendant la durée du présent Contrat sont vraies, complètes et correctes, et vous devez nous informer immédiatement de toute modification apportée à ces informations ; </p>

                        <p><b>2.1.6</b> Vous êtes seul responsable de la déclaration et de la comptabilisation de toutes les taxes, frais, charges ou taxes qui vous sont applicables en vertu des lois locales ou pertinentes de votre lieu de résidence pour tout gain que vous recevez de notre part ; </p>

                        <p><b>2.1.7</b> Vous comprenez qu'en utilisant nos Services, vous assumerez le risque de perdre les fonds déposés sur votre Compte de membre et acceptez que vous êtes seul responsable de ces pertes; </p>

                        <p><b>2.1.8</b> Vous n'utiliserez pas nos Services dans toute juridiction située sur notre liste où nos Services sont restreints. </p>

                        <p><b>2.1.9</b> Votre juridiction vous permet d'utiliser les services de paris sportifs et de casino en ligne ; </p>

                        <p><b>2.1.10</b> En ce qui concerne le dépôt et le retrait de fonds sur votre compte de membre, vous ne pouvez utiliser que des crypto-monnaies et / ou toute monnaie fiduciaire valide et légale qui vous appartient; </p>

                        <p><b>2.1.11</b> Vous acceptez et reconnaissez que la valeur des Crypto-monnaies peut varier considérablement en fonction de la valeur marchande. </p>

                        <p><b>2.1.12</b> Les logiciels, infographies, sites Web et interfaces utilisateur que nous vous fournissons sont la propriété et protégés par la Société ou ses sociétés affiliées en vertu des lois sur le droit d'auteur. Vous ne pouvez utiliser le Logiciel que pour votre usage personnel de divertissement : conformément à toutes les règles, conditions générales et conditions établies par nous et conformément à toutes les lois, règles et réglementations applicables en vertu de la Licence de jeu de Curaçao ; </p>

                        <p><b>2.1.13</b> Vous comprenez que les crypto-monnaies ne sont pas considérées comme ayant cours légal ou monétaire et, par conséquent, sur le site Web, elles sont considérées comme des fonds virtuels sans valeur intrinsèque. </p>

                        <p><b>2.1.14</b> Vous confirmez que vous n'êtes pas un dirigeant, un administrateur, un employé, un consultant ou un agent de la Société ou que vous ne travaillez pas pour une société en relation avec la Société ou pour un parent ou un conjoint de l'une des entités susmentionnées; </p>

                        <p><b>2.1.15</b> Vous n'avez pas été diagnostiqué ou classé comme joueur compulsif ou compulsif. Nous ne sommes pas responsables des jeux d'argent si de tels problèmes surviennent lors de l'utilisation de nos services, mais nous nous efforcerons de vous informer de l'assistance pertinente disponible. Nous nous réservons le droit de mettre en œuvre un délai de réflexion si nous pensons que de telles actions seraient bénéfiques. </p>

                        <p><b>2.1.16</b> Si vous êtes une Personne politiquement exposée  ou un membre de la famille d'une Personne politiquement exposée, vous acceptez et reconnaissez que nous pouvons avoir besoin d'examiner ou de suspendre votre compte sans préavis afin que nous puissions remplir toute obligation de diligence raisonnable que nous pourrions avoir. Vous reconnaissez que toute décision concernant le statut de votre compte est prise uniquement à notre seule discrétion, ce qui peut inclure la fermeture permanente de votre compte; </p>

                        <p><b>2.1.17</b> vous n'avez qu'un seul compte chez nous et acceptez de ne pas ouvrir de compte chez nous ; </p>

                        <p><b>2.1.18</b> Vous acceptez et reconnaissez que nous nous réservons le droit de détecter et d'empêcher l'utilisation de technologies interdites, y compris, mais sans s'y limiter, la détection facile de la fraude, l'enregistrement et l'enregistrement automatisés, le jeu et les technologies de capture d'écran. Ces étapes peuvent inclure, mais sans s'y limiter, la vérification de l'appareillabilité du joueur, la détection de la géolocalisation et du masquage IP, les transactions et l'analyse de la blockchain; </p>

                        <p><b>2.1.19</b> vous acceptez que nous résiliions et/ou modifiions l'utilisation du Site Web et refusions et/ou restreignions les paris ; </p>

                        <h3>3. Inscrivez-vous et ouvrez votre compte de membre</h3>
                        <p><b>3.1</b> Afin de pouvoir placer des paris sur notre site Web, vous devez d'abord créer un compte chez nous en personne (« Compte de membre »). </p>

                        <p><b>3.2</b> Vous ne pouvez pas vous inscrire et nous n'acceptons pas de juridiction limitée. Il est de votre responsabilité de déterminer si votre accès et votre utilisation de notre site Web sont conformes aux règles, lois et règlements qui vous sont applicables, et vous garantissez que le jeu n'est pas illégal avec nous sur le territoire dans lequel vous vivez. En créant un compte, nous et en utilisant le Site, vous confirmez que vous n'êtes pas situé dans ou à partir d'une juridiction restreinte et que vous n'utilisez aucun logiciel tiers pour accéder à notre site Web à partir d'une juridiction restreinte. </p>

                        <p><b>3.3</b> Si vous êtes situé dans ou à partir d'une juridiction restreinte et que vous ouvrez ou utilisez le site Web: nous pouvons fermer votre compte immédiatement; tous les gains et récompenses seront perdus et le solde remboursé (sous réserve de frais raisonnables), ainsi que tous les retours, bonus que vous avez gagnés ou récompenses accumulées seront perdus par vous et peuvent être retirés par nous; Vous nous retournerez tous ces fonds retirés sur demande. </p>

                        <p><b>3.4</b> Si vous tentez d'ouvrir plus d'un Compte de membre, nous nous réservons le droit de bloquer, suspendre ou fermer votre Compte de membre, ainsi que de geler tous les fonds crédités sur votre Compte. </p>

                        <p><b>3.5</b> Si vous apprenez que vous avez plus d'un compte de membre enregistré, vous devez nous en informer immédiatement. Si vous ne le faites pas, votre compte de membre peut être gelé. </p>

                        <p><b>3.6</b> Nous attendons de vous que vous nous informiez immédiatement de toute inexactitude relative à votre compte ou de toute erreur de calcul relative aux paris que vous avez placés. Nous nous réservons le droit d'annuler tout pari affecté par de telles erreurs et de revenir en conséquence. </p>

                        <p><b>3.7</b> Si vous n'utilisez pas un compte avec un solde positif pendant une période de 3 mois, nous vous en informerons. Si vous n'utilisez pas votre solde dans un délai de 1 mois à compter de notre notification, nous pouvons supprimer le solde de votre compte pour protéger vos fonds. Si cela se produit, veuillez nous contacter à support{'@'}seabet.io Rouvrez votre compte et récupérez vos fonds. </p>

                        <p><b>3.8</b>  Si le solde de votre compte est positif et est inactif depuis plus de 12 mois, nous nous réservons le droit de déduire des frais d'administration mensuels équivalents à 5% de votre solde.</p>

                        <p><b>3.9</b> Vous devez saisir toutes les informations requises dans le formulaire d'inscription, y compris une adresse e-mail valide. Si vous n'entrez pas d'adresse e-mail valide, nous ne serons pas en mesure de vous aider à récupérer les « mots de passe oubliés ». Vous êtes seul responsable de vous assurer que les informations que vous fournissez sont vraies, complètes et correctes. </p>

                        <p><b>3.10</b> Nous nous réservons le droit d'effectuer des procédures de vérification « KYC » (Know Your Customer) et si nous déterminons que vous avez fourni des informations fausses ou trompeuses. </p>

                        <p><b>3.11</b> Dans le cadre du processus d'inscription, vous êtes tenu de terminer le processus de connexion au site Web. Vous devrez choisir un nom d'utilisateur qui n'est pas offensant ou litigieux. Vous êtes responsable de la sécurité de vos informations de connexion et il vous est strictement interdit de les divulguer à quiconque. Vous serez responsable de toute utilisation abusive de votre compte de membre par un tiers à la suite de votre divulgation, qu'elle soit intentionnelle, accidentelle ou fournie activement ou passivement à un tiers. </p>

                        <p><b>3.12</b> Si vous changez votre mot de passe, vous ne pourrez pas retirer de fonds pendant 48 heures pour des raisons de sécurité. </p>

                        <h3>4. Sécurité</h3>
                        <p><b>4.1</b>  Lors de votre inscription sur le site Web, vous devrez sélectionner un mot de passe pour authentifier votre compte de membre à l'aide du site Web. </p>

                        <p><b>4.2</b>  Vous acceptez de garder votre mot de passe confidentiel et de vous défendre contre toute utilisation abusive de votre mot de passe. En aucun cas, nous ne rembourserons les pertes subies à la suite de l'utilisation de votre compte par un tiers et, en outre, vous êtes seul responsable de l'utilisation de vos informations de connexion par un tiers et nous dégagez de toute responsabilité en cas de conséquences et condamnables. </p>

                        <p><b>4.3</b> Vous acceptez que si vous pensez que les informations de votre compte sont utilisées à mauvais escient par un tiers, afin que nous puissions suspendre votre compte. Nous vous recommandons de désactiver toute mémoire automatique de mot de passe dans votre navigateur, d'utiliser la vérification en deux étapes et d'autres mesures similaires pour limiter le risque d'utilisation non autorisée de votre compte. </p>

                        <h3>5. Dépôts</h3>
                        <p><b>5.1</b> Vous ne pouvez participer à un jeu que si vous disposez de fonds suffisants sur votre compte de membre pour une telle participation. </p>

                        <p><b>5.2</b> Vous pouvez déposer en crypto-monnaie ou en monnaie fiduciaire. Le montant minimum du dépôt peut être trouvé dans notre centre de dépôt. Tous les montants de dépôt minimum spécifiés sont par transaction. Les petits dépôts ne seront pas additionnés. Tout montant de dépôt inférieur au montant minimum de dépôt spécifié n'est pas valide et ne sera pas crédité sur le solde de votre compte utilisateur ni retourné à la source. Si le dépôt ne respecte pas le dépôt minimum indiqué par nous, la société n'est pas responsable des exigences. </p>

                        <p><b>5.3</b> Pour déposer des fonds sur votre compte de membre, vous pouvez le faire à partir d'un portefeuille cryptographique et d'un compte sous votre contrôle. Les dépôts ne peuvent être effectués qu'avec vos propres fonds. </p>

                        <p><b>5.4</b> Le Site Web ne peut garantir que toutes les devises sont nativement prises en charge dans le Jeu. </p>

                        <p><b>5.5</b>  Au moment de votre premier dépôt et tout au long de la durée de vie de votre compte, nous nous réservons le droit d'utiliser d'autres procédures et méthodes pour vérifier votre identité lors du traitement de votre dépôt. La vérification impliquera une identification personnelle. Nous pouvons également avoir besoin de documents supplémentaires confirmant la propriété de votre mode de paiement et de votre adresse, dans le cadre du processus de vérification. </p>

                        <p><b>5.6</b> Certains modes de paiement peuvent inclure des frais supplémentaires. Dans ce cas, les frais seront clairs et visibles dans la caisse. </p>

                        <p><b>5.7</b> Votre banque ou fournisseur de services de paiement peut vous facturer des frais monétaires supplémentaires pendant le processus de dépôt conformément à leurs conditions générales et à votre contrat de conversion d'utilisateur. </p>

                        <h3>6. Retraits</h3>
                        <p><b>6.1</b> Tous les retraits seront traités conformément à notre politique de retrait ci-dessous. Les retraits cryptographiques seront demandés lorsque l'adresse du portefeuille de crypto-monnaie que vous avez saisie est valide. Pour retirer de l'argent, vous devez d'abord vérifier votre adresse e-mail enregistrée à partir du profil de votre compte. Pour retirer les fonds déposés, nous devons faire au moins 3 confirmations blockchain du dépôt avant de demander un retrait. Les retraits Fiat doivent être crédités sur votre demande de compte fiat personnel au moment où un retrait valide est effectué. Les retraits de monnaie fiduciaire peuvent prendre jusqu'à 3 jours ouvrables à partir du moment où ils sont approuvés par le fournisseur de services de paiement. </p>

                        <p><b>6.2</b> Le montant minimum de retrait peut être trouvé dans notre Centre de retrait. Tous les montants spécifiés sont par transaction. </p>

                        <p><b>6.3</b> Le montant des gains incorrectement crédités sur votre Compte reste propriété et est automatiquement déduit de votre Compte en cas de détection d'erreur. Si la saisie est incorrecte, vous êtes tenu de nous en informer immédiatement. Tout bonus crédité par erreur sur votre compte et retiré par la suite par vous (sans préjudice d'autres recours et actions qui peuvent être légalement disponibles) constitue une dette valide et juridiquement exécutoire que vous devez à la Société pour le montant de ces gains acquis par erreur. Dans de tels cas, nous nous réservons le droit d'engager une procédure de recouvrement de créances si vous ne parvenez pas à libérer volontairement les dettes impayées. </p>

                        <p><b>6.4</b> Pour les retraits fiat et crypto-monnaie, le Site se réserve le droit d'exiger une mise de 1x égale au montant déposé avant l'acceptation de la demande de retrait. </p>

                        <p><b>6.5</b> Nous nous réservons le droit de bloquer/retarder le traitement des demandes de retrait jusqu'à ce qu'une demande soit faite pour une copie d'une pièce d'identité valide avec photo, d'un justificatif de domicile et/ou d'une carte de débit pour notre satisfaction (KYC). </p>

                        <p><b>6.6</b> Le site Web se réserve le droit d'effectuer des procédures de vérification KYC supplémentaires sur tout contenu pour retirer des crypto-monnaies supérieures à 2500 € ou son équivalent, sous réserve de notre licence de jeu réglementée, et se réserve en outre le droit d'effectuer de telles procédures de vérification en cas de retraits moins importants, comme l'exige notre licence de jeu. Les titulaires de compte qui souhaitent récupérer sont invités à contacter le service clientèle pour les fonds détenus dans des comptes fermés, verrouillés ou exclus. </p>

                        <p><b>6.7</b> Toutes les transactions doivent être vérifiées pour prévenir le blanchiment d'argent. Le Site peut suspendre, geler ou fermer votre compte de membre et retenir des fonds (si nécessaire de le faire) en vertu de la Loi sur la prévention du blanchiment d'argent ou de toute autre base légale requise par la Loi sur la prévention du blanchiment d'argent ou toute autre base légale requise par la Loi sur la prévention du blanchiment d'argent. Les retraits peuvent faire l'objet d'une diligence raisonnable renforcée plutôt que d'une mise en mise,  Et si vous ne parvenez pas à traiter un retrait, nous nous réservons le droit de ne pas traiter un retrait pour nous conformer à ces exigences supplémentaires de diligence raisonnable. </p>

                        <p><b>6.8</b> Nous nous réservons le droit d'appliquer le montant requis de mise d'au moins 5 (cinq) fois le dépôt si nous soupçonnons qu'un Utilisateur utilise nos Services en tant que mélangeur. L'utilisation de nos Services à des fins autres que le divertissement est strictement interdite. </p>

                        <p><b>6.9</b> Vous reconnaissez que les fonds de votre Compte sont immédiatement épuisés lorsque vous jouez au Jeu et que nous n'offrons pas de retours, de remboursements ou d'annulation rétroactive de votre Compte. </p>

                        <p><b>6.10</b> En cas de grand nombre de demandes de retrait, nous pouvons choisir de traiter jusqu'à 1 000 000 USDT par semaine ou l'équivalent dans une autre devise jusqu'à ce qu'elles soient entièrement réglées. </p>

                        <p><b>6.11</b> Nous nous réservons le droit de déduire toute transaction encourue ou d'autres frais de tout frais de transaction ou autres frais du montant que vous retirez.</p>

                        <p><b>6.12</b> Vous acceptez que certaines promotions puissent être soumises à des restrictions de retrait et/ou à des exigences qui doivent être remplies avant que les fonds puissent être crédités à la promotion. Ces conditions seront officiellement publiées et mises à disposition dans le cadre de la Promotion. Si vous choisissez de retirer avant que les conditions de mise applicables ne soient remplies, nous déduirons le montant total du bonus et le montant associé à l'utilisation du bonus avant que tout retrait ne soit approuvé. Ce site Web se réserve le droit d'imposer ses propres droits, discrétion et restrictions géographiques sur les programmes de récompenses individuels. </p>

                        <p><b>6.13</b> Veuillez noter que certains modes de paiement peuvent inclure des frais supplémentaires. Dans ce cas, les frais seront clairement visibles sur la caisse. </p>

                        <p><b>6.14</b> Veuillez noter que votre banque ou fournisseur de services de paiement peut vous facturer des frais supplémentaires pour les dépôts, les retraits dans la conversion de devises conformément à leurs conditions générales et à vos Conditions d'utilisation. </p>

                        <h3>7. Fonds</h3>
                        <p><b>7.1</b> Le Client ne peut pas transférer ou convertir des fonds entre le Portefeuille et la Devise. </p>

                        <p><b>7.2</b> Vous avez fourni les détails requis pour effectuer un dépôt de crypto-monnaie sur le site Web sur la page Dépôt. </p>

                        <p><b>7.3</b> Nous ne fournissons pas de crédit pour l'utilisation de nos Services. </p>

                        <p><b>7.4</b> Vous ne recevrez aucun intérêt sur le solde que vous détenez sur le site Web et reconnaissez que la Société n'est pas une institution financière. </p>

                        <p><b>7.5</b> Si votre compte est traité deux fois ou plus pour quelque raison que ce soit en raison de tout type d'erreur ou de demande de retrait, vous acceptez de rembourser intégralement le site Web pour ce montant de découvert. </p>

                        <p><b>7.6</b> Si nous déterminons, à notre seule discrétion, que vous utilisez la méthode de « double dépense », le site Web annulera tous les paris et bonus. Plus précisément, si vous gagnez, confirmez votre blockchain de dépôt et essayez de retirer, tous les gains seront perdus et votre compte sera confisqué et définitivement fermé. Si vous essayez de télécharger à partir d'un compte connecté. </p>


                        <h3>8. Récompenses et promotions</h3>
                        <p><b>8.1</b> Le site Web se réserve le droit d'annuler toute  promotion, récompense ou programme de récompense (y compris, mais sans s'y limiter, les récompenses monétaires gratuites, les récompenses de dépôt, les bonus de dépôt et les programmes de fidélité) si nous pensons que la récompense est mal définie ou fait l'objet d'abus, non utilisée dans les 72 heures suivant la réception de votre compte, sauf indication contraire dans les conditions générales distinctes de la promotion,  Récompense ou offre spéciale et ladite récompense a été payée, nous nous réservons le droit de refuser toute demande de retrait et de déduire ce montant de votre compte. Que la récompense soit mal définie ou abusivement sera déterminée par le site Web à sa seule discrétion. </p>

                        <p><b>8.2</b> Si vous utilisez un bonus de dépôt, vous n'accepterez pas un bonus qui a déjà retiré votre dépôt initial et que vous avez satisfait aux exigences énoncées dans les conditions générales de dépôt. </p>

                        <p><b>8.3</b> Violation de l'une des conditions d'une offre ou d'une promotion, ou lorsqu'il existe des preuves qu'il existe une série de paris placés par un client ou un groupe de clients, en raison de bonus de dépôt, de paiements améliorés, de paris gratuits, de paris sans risque ou de toute autre garantie de résultat de l'offre promotionnelle, quel que soit le résultat, que ce soit individuellement ou dans le cadre d'un groupe,  le site Web Customer Profit se réserve le droit de récupérer les éléments bonus de ces offres et se réserve la valeur absolue de leur discrétion absolue pour régler les paris à des cotes correctes, annuler le bonus de pari gratuit et le pari sans risque ou annuler tout pari financé par le bonus de dépôt. En outre, ce site se réserve le droit de prélever des frais d'administration sur le client, jusqu'à concurrence de la valeur du bonus de dépôt, du bonus de pari gratuit, du pari sans risque ou du paiement supplémentaire pour couvrir les frais de gestion. Nous nous réservons en outre le droit d'exiger de tout client qu'il fournisse une documentation suffisante à notre entière satisfaction avec toute récompense, pari gratuit, pari sans risque ou compte qui lui est fourni. </p>

                        <p><b>8.4</b> Toutes les offres du Site sont destinées aux joueurs occasionnels et le Site Web peut, à sa seule discrétion, limiter l'éligibilité du Client à participer à tout ou partie de la Promotion. </p>

                        <p><b>8.5</b> Le site Web se réserve le droit, à sa seule discrétion, de modifier, d'annuler, de retirer ou de rejeter toute promotion. </p>

                        <p><b>8.6</b> Les récompenses ne peuvent être réclamées qu'une seule fois par personne/compte, foyer, foyer, adresse, adresse e-mail, adresse IP et environnement de partage informatique (université, école, bibliothèque de lieux publics, lieu de travail, etc.). La Société se réserve le droit de fermer votre compte et de confisquer tous les fonds existants si des preuves d'abus / fraude sont trouvées. </p>

                        <p><b>8.7</b> Vous reconnaissez et comprenez qu'il existe des conditions générales distinctes pour les promotions, les récompenses et les offres spéciales, ainsi que des suppléments aux présentes conditions générales, pour les domaines suivants. Ces termes et conditions sont énoncés sur la page de contenu respective du site Web ou, le cas échéant, vous sont fournis personnellement. En cas de conflit entre les dispositions de ces promotions, récompenses et offres spéciales, et les conditions générales des présentes Conditions, les dispositions de ces promotions, récompenses et offres spéciales prévaudront. </p>

                        <p><b>8.8</b> Nous nous réservons le droit d'insister pour que vous misiez un certain montant sur votre propre dépôt en utilisant les fonds de bonus que nous avons crédités sur votre compte. Le montant exact est tel que requis comme indiqué dans les termes et conditions de la promotion. </p>

                        <p><b>8.9</b> Votre participation à certaines promotions peut être soumise à des restrictions de retrait et/ou certaines exigences peuvent être requises avant que les fonds puissent être crédités à la promotion. Les présentes Conditions seront officiellement publiées dans le cadre de la Promotion et pour votre référence. Si vous choisissez de retirer si les conditions de mise applicables ne sont pas remplies, nous déduirons le montant total du bonus de votre compte et de tous les gains associés découlant de l'utilisation du bonus avant de pouvoir approuver toute demande de retrait.</p>
                        <p><b>8.10</b> Les gains misés à l'aide de paris gratuits sont calculés comme «Rendement total moins montant misé (y compris le montant du pari gratuit»). La valeur de vos paris gratuits n'est donc pas incluse dans, et ne peut pas être utilisée comme un pari gratuit de votre part. </p>

                        <p><b>8.11</b> Veuillez noter que la mise du pari gratuit ne sera pas remboursée si le pari est nul. </p>

                        <p><b>8.12</b> Vous devez recevoir des récompenses sur votre compte de membre, sauf indication contraire dans une promotion, une récompense ou une offre spéciale. Lorsque les récompenses et/ou les programmes de récompenses ne sont pas utilisés dans les 72 heures suivant la réception, ce site Web se réserve le droit d'annuler ces récompenses et/ou programmes de récompenses et peut déduire des récompenses ou des récompenses similaires pour des primes ou des récompenses similaires ou des rotations gratuites immédiatement après 72 heures. </p>

                        <p><b>8.13</b>  Lors de l'échange d'opinions, d'opinions, de commentaires ou d'actions de clients lors de l'offre de récompenses (y compris, mais sans s'y limiter, des paris gratuits ou des tours gratuits), ces incitations seront strictement limitées à un sondage/promotion par utilisateur pendant la période concernée. </p>

                        <p><b>8.14</b> Les promotions peuvent être publiées en plusieurs langues pour l'information et l'accès des joueurs. La version anglaise est la seule base juridique de votre relation avec nous et en cas de divergence dans tout type de traduction, la langue anglaise prévaudra sur la version des présentes Conditions générales. </p>

                        <p><b>8.15</b> Certains jeux peuvent avoir des gains maximums différents. Si c'est le cas, ces restrictions seront affichées dans la page d'informations du jeu. </p>

                        <p><b>8.16</b> Certains jeux de casino n'incluent pas les paris de fidélité et de récompense. </p>

                        <p><b>8.17</b> Pour les bonus de mise, les joueurs doivent abandonner le bonus et le nombre spécifié de gains avant de pouvoir se retirer. Placer un pari</p>
                        <p>La contribution des crédits de récompenses dépend de la catégorie de jeu. La répartition est la suivante : Machines à sous – 100% Jeux de table – 20% Jeux avec croupier en direct – 20%</p>

                        <p><b>8.18</b> Certaines promotions peuvent être annulées et/ou annulées et ne peuvent être disponibles que pour une période spécifique et sous certaines conditions. Vous devez vous assurer que la promotion du contenu qui vous intéresse est toujours disponible, que vous êtes éligible, que vous comprenez que l'une des conditions ci-dessous s'applique et que vous avez choisi de participer, le cas échéant. </p>

                        <h3>9. Fermer le compte de membre</h3>
                        <p><b>9.1</b> Si vous souhaitez fermer votre compte de membre, vous pouvez contacter le service clientèle par écrit à tout moment par e-mail. La clôture effective du compte mettra fin aux Conditions générales en conséquence. Si la raison de la fermeture du compte est liée à des préoccupations concernant une éventuelle dépendance au jeu ou un jeu problématique, vous devez indiquer que cela a été fait par écrit au moment de la demande de fermeture du compte. S'il n'est pas responsable de la divulgation des problèmes de jeu et / ou donne les raisons de la fermeture du compte, vous pouvez demander à réactiver votre compte par e-mail. La réactivation du compte est à notre seule discrétion. Nous nous réservons le droit de refuser la résurrection. </p>

                        <p><b>9.2</b> Le site Web se réserve le droit de refuser ou de fermer le compte d'un membre à sa seule discrétion sans préavis ni obligation d'indiquer ou de prouver les raisons. En l'absence de soupçon de fraude, de blanchiment d'argent ou d'actes illégaux, nous transférerons le solde de votre compte vers le portefeuille de crypto-monnaie de votre choix (en fonction du solde de votre compte) avant la fermeture de votre compte. Le solde de votre compte en monnaie fiduciaire sera déposé avec votre vaisseau. Si vous utilisez la méthode de dépôt uniquement, nous vous contacterons et trouverons d'autres méthodes de retour pour les fonds avant la fermeture du compte. </p>

                        <h3>10. Services d'assistance</h3>
                        <p><b>10.1</b> Dans le cadre de votre utilisation du site Web, nous pouvons vous fournir des canaux de communication de service d'assistance de plusieurs façons, que nous examinons et contrôlons. </p>

                        <p><b>10.2</b> Nous conservons les avis et les enregistrements par tous les canaux de communication. Votre utilisation de nos services d'assistance doit être pour l'assistance et pour votre information seulement. </p>

                        <p><b>10.3</b> Nous nous réservons le droit de supprimer ou de restreindre les Services d'assistance en direct ou de résilier immédiatement votre Compte de membre et de rembourser le solde de votre Compte si vous :</p>
                        <p>(a) faire une déclaration ou partager tout matériel abusif, diffamatoire, harcelant, explicite ou gravement offensant, y compris, mais sans s'y limiter, des expressions de blasphème, de sectarisme, de racisme ou de haine;</p>
                        <p>(b) utiliser l'un de nos Services d'assistance pour faire de la publicité, promouvoir ou autrement entrer en relation avec toute autre entité en ligne ;</p>
                        <p>(c) est raisonnablement soupçonné de tenter d'exploiter injustement nos Services, par exemple, par le biais de fausses déclarations répétées sur le même cas, transaction ou caractéristique ;</p>
                        <p>(d) faire des déclarations fausses et/ou malveillantes au sujet de la Société ou de tout autre site Internet connecté au Site et/ou causer des dommages à la Société ;</p>
                        <p>(e) utiliser l'un de nos Services d'assistance pour s'entendre, adopter une conduite illégale ou encourager une conduite que nous jugeons manifestement inappropriée. Toute déclaration d'activité suspecte peut être signalée aux autorités compétentes.</p>

                        <p><b>10.4</b> Nos Services d'assistance sont utilisés comme une forme de communication entre vous et nous et ne doivent pas être copiés ou partagés avec des tiers sans notre consentement préalable. </p>

                        <h3>11. Règles générales de pari</h3>
                        <p><b>11.1</b>. Les paris ne peuvent être placés que par le titulaire du compte enregistré. </p>

                        <p><b>11.2</b> Les paris placés et acceptés ne peuvent pas être modifiés, annulés ou annulés par vous. Vous pouvez trouver une liste de tous les paris, leur statut et les détails sur le site. </p>

                        <p><b>11.3</b> Les paris ne peuvent être placés que via Internet. </p>

                        <p><b>11.4</b> Vous ne pouvez placer des paris que si vous disposez de fonds suffisants sur votre compte sur le site Web. </p>

                        <p><b>11.5</b> Une fois qu'un pari a été fermé, il sera soumis à la version des Conditions Générales en vigueur et mis à disposition sur le Site au moment de l'acceptation du pari. </p>

                        <p><b>11.6</b> Tout paiement sur les paris gagnants sera crédité sur votre compte, y compris les chances de multiplier la mise par le pari. </p>

                        <p><b>11.7</b> Lorsque vous placez un pari, vous reconnaissez avoir lu et bien compris tous ces termes et conditions concernant le pari décrit sur le site Web. </p>

                        <p><b>11.8</b> Le site Web administre votre compte et calcule les fonds disponibles, les fonds en attente, les fonds de mise et les montants des bonus. Ces montants sont considérés comme définitifs et ne seront pas modifiés en fonction de demandes de renseignements, de vérifications externes ou d'enquêtes sans erreur apparente. </p>

                        <p><b>11.9</b> Vous êtes seul responsable des paris. </p>

                        <p><b>11.10</b> Le prix sera versé à l'organe directeur du sport ou de la compétition concerné sur votre compte lors de la confirmation officielle du résultat final. </p>

                        <p><b>11.11</b> Sauf décision contraire de nos régulateurs, le site Web se réserve le droit de révoquer tout gain si le résultat fait l'objet d'une enquête pour activité criminelle présumée ou de toute action susceptible d'affecter le résultat. En cas d'irrégularités dans le mode de pari ou le résultat de la campagne, confirmées par le Conseil d'administration, des tiers ou le site Web, le site Web se réserve le droit d'annuler et / ou de rembourser tout montant misé sur la campagne à sa seule discrétion. Si des paris ont été placés, le Site se réserve le droit de recalculer les résultats de l'événement et de perdre tous les gains associés. </p>

                        <p><b>11.12</b> Si vous n'êtes pas satisfait de toute question relative à un pari placé sur le site Web, veuillez en informer le site Web pour le fournir par écrit dans les 7 jours suivant la transaction. Les avis émis par la suite dans un délai de 7 jours seront ignorés. Dans le cas peu probable où des divergences entre les résultats apparaissent sur votre appareil et les résultats apparaissent dans le journal des transactions de notre système, vous acceptez que les résultats dans le journal des transactions de notre système vérifié par les responsables du site Web soient définitifs, concluants et contraignants. </p>

                        <p><b>11.13</b> Si le site Web découvre que vous avez placé des paris différents de votre compte de temps à autre, tous les paris peuvent être placés par le site, Web. Ce site Web se réserve le droit de prendre d'autres mesures s'il le juge nécessaire. </p>

                        <p><b>11.14</b> Si un montant de pari dépassant le montant maximum indiqué est accepté par erreur par le site Web, le montant excédentaire sera ignoré et le montant du pari sera modifié et, par conséquent, la différence sera remboursée / créditée sur votre compte. </p>

                        <p><b>11.15</b> Les informations fournies par ce site Web telles que les flux vidéo en temps réel, les données statistiques, les scores en direct et les paris en direct constituent un service d'information à valeur ajoutée. Cependant, ce site Web n'assume aucune responsabilité quelle qu'elle soit, indépendamment de toute inexactitude ou erreur dans les informations.</p>

                        <p><b>11.16</b>  Si un match ne commence pas à ou après la date de début prévue et/ou est abandonné et n'est pas terminé (repris) à la fin de la prochaine date calendaire, tous les paris seront nuls à moins qu'un marché de paris ne soit déterminé comme inconditionnel conformément aux règles applicables, auquel cas le pari peut être établi. </p>

                        <p><b>11.17</b> Le Site se réserve le droit d'adopter des événements qui s'appliquent à des compétitions spécifiques ou qui peuvent contredire les Règles des paris sportifs. Ces règles spéciales peuvent publier des cotes publiées en conjonction avec des régions, des clients, des matchs et/ou des événements spécifiques. </p>

                        <p><b>11.18</b>  La communication est interrompue après qu'un pari est placé et/ou vous ne recevez pas de confirmation visuelle qu'un pari a été placé avec succès, mais le pari a été correctement reçu sur nos serveurs et le pari sera considéré comme valide et accepté. On vous dira si vous gagnerez ou perdrez une fois que la communication sera rétablie et que le résultat sera déterminé. Si un pari n'est pas correctement reçu sur nos serveurs en raison d'une erreur de communication, il ne sera pas considéré comme valide et accepté; Les paris échoués seront remboursés sur le solde de votre compte. </p>

                        <p><b>11.19</b> Vous reconnaissez et reconnaissez que vous pouvez recevoir une confirmation vous informant des risques financiers potentiels après avoir placé un pari (veuillez contacter le service clientèle du site Web en cas d'incertitude). Dès réception d'un tel accusé, vous reconnaissez avoir reçu un préavis adéquat. </p>

                        <p><b>11.20</b> En cas de divergences dans les statistiques de match fournies par des sources externes, les sources de données indiquées dans notre page Règles générales des paris sportifs publiées prévaudront. </p>
                        <p><b>11.21</b> La limite de mise maximale dépendra du montant autorisé par le site Web au moment où vous acceptez un pari. </p>

                        <p><b>11.22</b> Ce qui suit a trait à la fonction de retrait :</p>

                        <p><b>11.22.1</b> Des retraits sont disponibles pour certains événements, rencontres et marchés, paris simples et multiples, avant et pendant le match. </p>

                        <p><b>11.22.2</b> Retard dans l'acceptation des demandes de retrait. Si les changements de prix ou de marché sont suspendus, la demande de retrait peut ne pas aboutir. </p>

                        <p><b>11.22.3</b> Si une demande de retrait est approuvée, le pari correspondant sera affiché immédiatement et réglé. Le résultat final réel du pari initial n'affectera pas le processus de retrait.</p>

                        <p><b>11.22.4</b> Dans tous les cas, une fois la demande de retrait réussie, le montant total du remboursement sera retourné sur votre compte. </p>

                        <p><b>11.22.5</b> Le Site ne peut garantir que vos paris seront disponibles pour l'option de retrait. Si un retrait est effectué avant l'événement, nous ne couvrirons pas ou n'arrêterons pas de couvrir l'événement en direct, et le retrait ne sera pas disponible une fois l'événement commencé ou notre match en direct ne sera pas couvert pour s'arrêter. Lorsque le marché est suspendu, aucun paiement ne sera fourni. </p>

                        <p><b>11.22.6</b> Ce site Web se réserve le droit de retirer totalement ou partiellement la cession fonctionnelle de clients ou de groupes de clients. Nous exercerons ce droit dans les cas où il existe des motifs raisonnables de soupçonner qu'un client ou un groupe de clients abuse de la fonction de retrait pour profiter des changements de prix antérieurs à l'événement, ou que la fonction de retrait est régulièrement utilisée pour clôturer des paris avant le début de l'événement. </p>

                        <p><b>11.22.7</b> Si la fonction de retrait n'est pas disponible pour des raisons techniques, ce site Web n'en sera pas responsable. En outre, tout pari dans de tels cas conservera son statut de pari d'origine et ce site Web ne sera pas non plus tenu responsable. 。 </p>

                        <p><b>11.22.8</b> Le site Web se réserve le droit d'accepter ou de rejeter tout pari / pari pour encaisser les sports, les compétitions, les marchés ou les types de paris contenus dans la fonction de retrait. </p>

                        <p><b>11.23</b> Le prix maximum est indiqué en USD comme devise de base pour sécuriser le monde, mais l'équivalent en devise s'applique aux dépenses réelles. Lorsque plusieurs paris impliquent des événements avec différentes limites maximales de bonus, le montant minimum s'appliquera. Les deux limites maximales de bonus s'appliquent à tous nos clients ou groupes de clients qui utilisent différents comptes de paris pour contenir des paris de la même sélection à des prix différents. Il devrait y avoir des raisons de croire que plusieurs paris ont été placés de cette manière, et le paiement intégral de ces paris ne totalisera qu'un seul paiement maximum. </p>


                        <h3>12. Jeux avortés et avortés</h3>
                        <p><b>12.1</b> La Société n'interférera pas avec le Jeu en cas de temps d'arrêt, d'interruption du serveur, de décalage ou de toute perturbation technique ou politique. Les remboursements ne peuvent être administrés qu'à la seule discrétion du site Web. </p>

                        <p><b>12.2</b> La Société ne sera pas responsable de tout dommage ou perte réputé ou résultant du site Web ou de son contenu qui est allégué être causé ou en relation avec celui-ci; Cela n'inclut aucune limitation de fonctionnement ou de transmission, de retard ou d'interruption, de perte ou de corruption de données, de communication ou de défaillance de ligne, d'utilisation abusive du site ou de son contenu par toute personne ou de toute erreur ou omission dans le contenu. </p>

                        <p><b>12.3</b> Si un jeu de casino tombe en panne, tous les paris sont nuls. </p>

                        <h3>13. Limitation de responsabilité</h3>
                        <p><b>13.1</b> Votre accès au Site Web et votre participation aux Jeux sont à vos propres risques. Le Site Web et le Jeu sont fournis sans garantie d'aucune sorte, expresse ou implicite. </p>

                        <p><b>13.2</b> Sans préjudice de la généralité de ce qui précède, vous acceptez que nous :</p>

                        <p><b>13.2.1</b> Ne garantit pas que le Logiciel, les Jeux et le Site Web sont adaptés à leur usage ; </p>

                        <p><b>13.2.2</b> Ne garantit pas que le Logiciel, les Jeux et le Site Web sont exempts d'erreurs ; </p>

                        <p><b>13.2.3</b> Il n'y a aucune garantie que le Logiciel, les Jeux et le Site Web seront interrompus sans interruption. </p>

                        <p><b>13.3</b> Sauf disposition expresse dans les présentes Conditions générales, nous ne serons pas responsables des pertes, coûts, dépenses ou dommages, qu'ils soient directs, indirects, spéciaux, consécutifs, accessoires ou autres, découlant de votre utilisation du Site Web ou de votre participation au Jeu. </p>

                        <p><b>13.4</b> Vous comprenez et reconnaissez que tous les paris placés lors d'un tel échec seront nuls si le Jeu ou son dysfonctionnement est interopérable. Les fonds provenant de jeux défectueux seront considérés comme nuls, ainsi que tous les tours de jeu ultérieurs, quel que soit le jeu joué en utilisant ces fonds. </p>

                        <p><b>13.5</b> Si une partie ou la totalité d'un pari est déclarée nulle, le Site se réserve le droit de considérer qu'il y a une erreur manifeste, une erreur, une erreur typographique ou une erreur technique sur la table de paiement, les cotes ou le logiciel. Pour tout gain non réalisé, nous ne sommes pas responsables du résultat de l'invalidation du pari dans ce cas. Les remboursements ne sont gérés que par Seabet Management. </p>

                        <p><b>13.6</b> Par les présentes, vous acceptez de nous indemniser entièrement et de nous dégager, ainsi que nos administrateurs, employés, partenaires et fournisseurs de services, de tous les coûts, dépenses, pertes, dommages, réclamations et responsabilités découlant de votre utilisation du site Web ou de votre participation aux Jeux. </p>

                        <p><b>13.7</b> La Société ne sera pas responsable de tout dommage ou perte, qu'il soit contractuel, délictuel, violation de garantie ou autre, réputé ou présumé être causé ou prétendument causé par ou prétendument causé par une connexion avec le site Web ou son contenu; Cela inclut, mais sans s'y limiter, les retards ou les interruptions de fonctionnement ou de transmission, la perte ou la corruption de données, les défaillances de communication ou de ligne, l'utilisation abusive du site ou de son contenu par toute personne, ou toute erreur ou omission dans le contenu. </p>

                        <h3>14. Politique de confidentialité</h3>
                        <p><b>14.1</b> Vous reconnaissez et acceptez par la présente que nous puissions collecter et utiliser vos données personnelles si nous le jugeons nécessaire pour accéder et utiliser le site Web et pour vous permettre de participer aux Jeux. </p>

                        <p><b>14.2</b> Nous reconnaissons par la présente qu'au moment de la collecte de vos informations personnelles, nous sommes liés par la loi sur la protection des données comme indiqué ci-dessus. Nous protégerons vos renseignements personnels et respecterons votre vie privée conformément aux meilleures pratiques commerciales et à la loi applicable. </p>

                        <p><b>14.3</b> Nous utiliserons vos données personnelles pour vous permettre de participer aux Jeux et d'effectuer des actions dans le cadre de votre participation aux Jeux. En ouvrant votre compte membre, vous reconnaissez et acceptez que les employés de la Société ont le droit d'accéder à vos données personnelles afin d'exercer leurs fonctions et de vous fournir la meilleure assistance, ainsi que les meilleurs services. Nous pouvons également utiliser vos données personnelles pour vous informer de changements, de nouveaux services et promotions. Vous pouvez choisir de ne plus recevoir d'e-mails marketing à tout moment. </p>

                        <p><b>14.4</b> Vos données personnelles ne seront pas divulguées à des tiers, sauf si une telle divulgation est requise par la loi ou nécessaire pour utiliser nos services, auquel cas vous êtes réputé avoir consenti à la divulgation de ces informations à des tiers. Les données personnelles peuvent être divulguées à ce site Web en tant que partenaire commercial ou fournisseur de ce site Web, ou fournisseurs de services qui peuvent être responsables de certaines parties de leur fonctionnalité globale ou de l'exploitation de ce site Web. Les employés du site Web ont accès à vos données personnelles afin d'exercer leurs fonctions et de vous fournir la meilleure assistance et les meilleurs services possibles. Vous consentez par la présente à une telle divulgation. </p>

                        <p><b>14.5</b> Nous conserverons toutes les informations fournies en tant que données personnelles indéfiniment, sauf si nous choisissons de le faire après l'expiration de la période de conservation des données d'application ou lorsque nous sommes légalement tenus de le faire. </p>

                        <p><b>14.6</b> Afin d'optimiser votre expérience et de surveiller et d'améliorer les services de notre site Web, nous recueillons certaines informations envoyées par votre navigateur, appelées cookies. Vous avez le droit de choisir d'accepter ou non notre collecte de cookies. Veuillez noter, cependant, que la désactivation des cookies peut avoir un impact sérieux sur votre accès à notre site Web et peut même bloquer complètement votre visite. </p>

                        <h3>15. Cession</h3>
                        <p><b>15.1</b> La cession de vos obligations en vertu du présent Contrat n'est pas autorisée. Vous ne pouvez pas céder vos obligations en vertu du présent Contrat, ni aucun droit ou obligation en vertu du présent Contrat, à toute autre personne ou entité. </p>

                        <h3>16. Intégralité de l'accord</h3>
                        <p><b>16.1</b> Les présentes conditions générales constituent l'intégralité de l'accord  entre vous et nous pour respecter le site Web et, sauf en cas de fraude, remplacent toutes les communications électroniques, orales ou écrites antérieures ou contemporaines et les propositions entre vous et nous pour respecter le site Web. </p>

                        <h3>17. Divisibilité</h3>
                        <p><b>17.1</b>  Si une disposition des présentes Conditions générales est jugée illégale ou inapplicable, la disposition sera séparée des présentes Conditions générales et toutes les autres dispositions resteront pleinement en vigueur sans être affectées par cette séparation. </p>

                        <h3>18. Annulation, suspension et fermeture</h3>
                        <p><b>18.1</b> Sans limiter notre capacité à nous appuyer sur d'autres recours à notre disposition, nous pouvons suspendre et/ou résilier votre Compte, annuler tout pari en cours et/ou confisquer tout ou partie des fonds de votre Compte à notre entière discrétion :</p>
                        <p>(i) lorsque nous soupçonnons que vous utilisez notre site Web à des fins de blanchiment d'argent, d'activités illégales ou frauduleuses ; ou</p>
                        <p>(ii) nous soupçonnons que vous avez déposé des fonds illégalement ou obtenus d'une manière manifestement et matériellement dépréciée ; ou</p>
                        <p>(iii) nous obtenons la preuve que vous faites partie d'un syndicat de paris, lorsque plusieurs parties sont impliquées dans le placement de paris pour contourner les règles du site Web, les présentes conditions générales ou toute autre règle du site Web; ou</p>
                        <p>(iv) nous déterminons que vous utilisez un appareil, un robot, une araignée, un logiciel, une routine ou une autre méthode (ou quoi que ce soit de la nature de ce qui précède) pour interférer ou tenter d'interférer avec le bon fonctionnement de nos Services, de tout équipement, logiciel, site Web, jeux de casino, paris sportifs et informations de paris ou toute transaction proposée sur le site Web,  en particulier, à ne pas utiliser ou utiliser toute intelligence artificielle ou autre système (y compris les machines, ordinateurs, logiciels ou tout autre système automatisé spécifiquement conçu pour frauder et / ou détruire le système du site Web); ou</p>
                        <p>(v) nous déterminons que vous êtes de connivence ou tentez de collusion avec d'autres joueurs afin de tromper le Site ou ses clients ; ou</p>
                        <p>(vi) nous déterminons que vous avez enfreint toute disposition des présentes Conditions générales ;</p>
                        <p>(vii) nous déterminons que vous agissez d'une manière défavorable à nos Acteurs ; ou</p>
                        <p>(viii) nous déterminons que la façon dont vous utilisez le Site vous donne un avantage injuste, par exemple, des paris basés sur des connaissances ou une expertise acquises par le biais d'une participation personnelle ou d'une participation à un domaine sportif particulier ; ou</p>
                        <p>(ix) nous soupçonnons que vous avez enregistré, géré ou dirigé votre activité de pari sur plusieurs comptes d'utilisateurs, tenté de cacher votre activité de pari, contourné les limites de transaction que nous avons fixées ou enfreint les conditions générales de la promotion ; ou</p>
                        <p>(x) nous soupçonnons que votre compte est utilisé au profit d'un tiers ; ou</p>
                        <p>(xi) la preuve obtenue par nous qu'en vous inscrivant à un nouveau compte, vous avez violé un ordre direct sur le Site de ne pas poursuivre vos activités de paris sur notre Site Web. Ce site a le droit de confisquer tout dépôt du compte enregistré par l'utilisateur qui a précédemment constaté avoir violé ou ignoré les avertissements précédents des termes et conditions ci-dessus.</p>

                        <p><b>18.2</b> Vous reconnaissez que le site Web est le décideur final en votre possession d'une violation d'une règle, d'une modalité ou d'une condition entraînant une suspension ou une interdiction permanente</p>
                        <p>De la participation à notre site Web.</p>

                        <p><b>18.3</b> Que nous suspendions et/ou résiliions le Compte, et nonobstant toute autre disposition des présentes Conditions générales, nous pouvons décider d'annuler et d'annuler tout pari qui n'a pas été effectué à notre entière discrétion si :</p>
                        <p>(i) il y a une défaillance technique, ou </p>
                        <p>(ii) vous ou un autre client plaçant un pari avec vous enfreignez l'une des présentes Conditions générales.</p>

                        <h3>19. Force majeure</h3>
                        <p><b>19.1</b>  Ce site Web échoue ou retarde l'exécution de ses obligations de service si cette défaillance ou ce retard est causé par un cas de force majeure de l'avis de ce site Web, y compris, mais sans s'y limiter, les inondations, les incendies, les tremblements de terre ou tout autre facteur naturel, les actes de guerre, les épidémies ou les épidémies, les émeutes ou les attaques terroristes, les pannes électriques des services publics, les lock-out et les grèves,  les retards ou les interruptions d'Internet et des réseaux de télécommunications causés par des facteurs humains ou naturels, ou tout autre événement de ce type échappant au contrôle raisonnable de ce site Web. Ce site Web n'assume aucune responsabilité pour les conséquences découlant d'un tel cas de force majeure. </p>

                        <h3>20. Défaut, pénalités et résiliation</h3>
                        <p><b>20.1</b> Nous nous réservons le droit de ne pas ouvrir, suspendre ou fermer votre Compte de membre, ou de retenir vos gains et d'utiliser les fonds pour tout dommage auquel vous avez droit, si vous enfreignez l'une des dispositions des présentes Conditions générales ou si nous avons des motifs raisonnables de soupçonner que vous avez enfreint cette disposition. </p>

                        <h3>21. Droit applicable et juridiction compétente</h3>
                        <p><b>21.1</b> Les présentes Conditions générales sont régies par les lois de Curaçao. </p>

                        <p><b>21.2</b> Vous reconnaissez que, sauf indication contraire, le Jeu est organisé et réglementé par le territoire de Curaçao. Toute relation contractuelle entre vous et la Société sera réputée avoir été conclue et exécutée par les parties à Curaçao, à l'adresse du Registre des sociétés. </p>

                        <p><b>21.3</b> Les parties conviennent que tout litige, controverse ou réclamation découlant de ou en relation avec les présentes Conditions générales ou leur violation, résiliation ou nullité sera soumis à la juridiction exclusive des tribunaux de Curaçao. </p>

                        <h3>22. Réclamations</h3>
                        <p><b>22.1</b> Si vous avez des plaintes ou des plaintes concernant nos services, vous pouvez contacter notre équipe de service clientèle via la fonction de chat disponible sur le site Web ou à une adresse e-mail. Nous ferons de notre mieux pour résoudre le problème auquel vous êtes confronté dans les plus brefs délais. </p>
                      </div>`
  }
}
