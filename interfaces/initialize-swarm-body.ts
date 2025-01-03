export interface InitializeSwarmBody {
  ListenAddr: string
  AdvertiseAddr: string
  DataPathPort: number
  DefaultAddrPool: string[]
  SubnetSize: number
  ForceNewCluster: boolean
  Spec: Spec
}

export interface Spec {
  Orchestration: Orchestration
  Raft: Raft
  Dispatcher: Dispatcher
  CAConfig: Caconfig
  EncryptionConfig: EncryptionConfig
}

export interface Orchestration { }

export interface Raft { }

export interface Dispatcher { }

export interface Caconfig { }

export interface EncryptionConfig {
  AutoLockManagers: boolean
}
