export interface JoinSwarmBody {
  ListenAddr: string
  AdvertiseAddr: string
  RemoteAddrs: string[]
  JoinToken: string
}
