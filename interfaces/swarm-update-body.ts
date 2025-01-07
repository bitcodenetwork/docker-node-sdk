export interface SwarmUpdateBody {
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
