export type DockerSwarmJoinBody = {
  ListenAddr: string;
  AdvertiseAddr: string;
  DataPathAddr: string;
  RemoteAddrs: string[];
  JoinToken: string;
}
