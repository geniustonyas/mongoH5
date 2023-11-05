export interface getDashboardData {
  t: number
}
// 仪表板报表数据
export interface getDashboardRespItem {
  members: number
  first: number
  reg: number
  commission: {
    year: number
    month: number
    activePlayers: number
    newPlayers: number
    winlose: number
    network: number
    reward: number
    fee: number
    netWinlose: number
    rate: number
    comm: number
    last: number
    actComm: number
  }
  chart: {
    labels: string[]
    datasets: chartItem[]
  }
}

export interface chartItem {
  label: string
  data: number[]
}

// 获取成员信息数据
export interface getMemberInfoData {
  name: null | string
  startreg: string
  endreg: string
  start: string
  end: string
  bet: null | number | string
  page: number
  pcount: number
}

// 成员信息数据项数组
export interface getMemberInfoRespItem {
  name: string
  regTime: string
  memberId: number
  lastTime: string
  win: number
  withdraw: number
  deposit: number
  vip?: number
  reward: number
  fee: number
}

// 获取佣金数据
export interface getCommissionData {
  date: string
}

// 获取佣金返回数据项
export interface getCommissionDataRespItem {
  status: number
  year: number
  month: number
  payTime?: string
  activePlayers: number
  newPlayers: number
  winlose: number
  network: number
  reward: number
  fee: number
  netWinlose: number
  rate: number
  comm: number
  last: number
  actComm: number
}

// 财务报表数据
export interface getFinanceData {
  start: string
  end: string
}

// 财务报表返回数据项
export interface getFinanceDataRespItem {
  deposit: number
  withdraw: number
  reward: number
  fee: number
  winlose: number
  network: number
  netwin: number
}

// 额度代存请求
export interface memberDepositData {
  name: string
  amount: number | string
  times: number | string
  remark: string
  pwd: string
}

// 代存记录请求
export interface getDepositRecordData {
  name: string
  start: string
  end: string
  s: null | number
  page: number
  pcount: number
}

// 代存记录返回数据项
export interface getDepositRecordRespItem {
  id: number
  payeeId: number
  payeeName: string
  payerId: number
  amount: number
  status: number
  remark: string
  time: string
}

export type getDashboardResp = ApiResponseData<getDashboardRespItem>
export type getMemberInfoDataResp = ApiResponseData<{ items: getMemberInfoRespItem[]; page: number; size: number; pages: number; count: number }>
export type getCommissionDataResp = ApiResponseData<getCommissionDataRespItem>
export type getFinanceDataResp = ApiResponseData<getFinanceDataRespItem>
export type getDepositRecordResp = ApiResponseData<{ items: getDepositRecordRespItem[]; page: number; size: number; pages: number; count: number }>
