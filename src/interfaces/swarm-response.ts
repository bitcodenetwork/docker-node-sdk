export interface SwarmResponse {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
  TLSInfo: Tlsinfo
  RootRotationInProgress: boolean
  DataPathPort: number
  DefaultAddrPool: string[][]
  SubnetSize: number
  JoinTokens: JoinTokens
}

export interface Version {
  Index: number
}

export interface Spec {
  Name: string
  Labels: Labels
  Orchestration: Orchestration
  Raft: Raft
  Dispatcher: Dispatcher
  CAConfig: Caconfig
  EncryptionConfig: EncryptionConfig
  TaskDefaults: TaskDefaults
}

export interface Labels {
  "com.example.corp.type": string
  "com.example.corp.department": string
}

export interface Orchestration {
  TaskHistoryRetentionLimit: number
}

export interface Raft {
  SnapshotInterval: number
  KeepOldSnapshots: number
  LogEntriesForSlowFollowers: number
  ElectionTick: number
  HeartbeatTick: number
}

export interface Dispatcher {
  HeartbeatPeriod: number
}

export interface Caconfig {
  NodeCertExpiry: number
  ExternalCAs: ExternalCa[]
  SigningCACert: string
  SigningCAKey: string
  ForceRotate: number
}

export interface ExternalCa {
  Protocol: string
  URL: string
  Options: Options
  CACert: string
}

export interface Options {
  property1: string
  property2: string
}

export interface EncryptionConfig {
  AutoLockManagers: boolean
}

export interface TaskDefaults {
  LogDriver: LogDriver
}

export interface LogDriver {
  Name: string
  Options: Options2
}

export interface Options2 {
  "max-file": string
  "max-size": string
}

export interface Tlsinfo {
  TrustRoot: string
  CertIssuerSubject: string
  CertIssuerPublicKey: string
}

export interface JoinTokens {
  Worker: string
  Manager: string
}
