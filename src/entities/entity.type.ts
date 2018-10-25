export interface IARfxError {
  message: string
  code: number
}

export interface IServerError {
  code: number
  message: string
  result: any[]
}

export interface INetworkState {
  status: boolean
}
