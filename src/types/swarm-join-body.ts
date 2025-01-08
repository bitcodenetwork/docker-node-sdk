export interface SwarmJoinBody {
  ListenAddr: string
  AdvertiseAddr: string
  RemoteAddrs: string[]
  JoinToken: string
}
