export interface InfoResponse {
  ID: string
  Containers: number
  ContainersRunning: number
  ContainersPaused: number
  ContainersStopped: number
  Images: number
  Driver: string
  DriverStatus: string[][]
  DockerRootDir: string
  Plugins: Plugins
  MemoryLimit: boolean
  SwapLimit: boolean
  KernelMemoryTCP: boolean
  CpuCfsPeriod: boolean
  CpuCfsQuota: boolean
  CPUShares: boolean
  CPUSet: boolean
  PidsLimit: boolean
  OomKillDisable: boolean
  IPv4Forwarding: boolean
  BridgeNfIptables: boolean
  BridgeNfIp6tables: boolean
  Debug: boolean
  NFd: number
  NGoroutines: number
  SystemTime: string
  LoggingDriver: string
  CgroupDriver: string
  CgroupVersion: string
  NEventsListener: number
  KernelVersion: string
  OperatingSystem: string
  OSVersion: string
  OSType: string
  Architecture: string
  NCPU: number
  MemTotal: number
  IndexServerAddress: string
  RegistryConfig: RegistryConfig
  GenericResources: GenericResource[]
  HttpProxy: string
  HttpsProxy: string
  NoProxy: string
  Name: string
  Labels: string[]
  ExperimentalBuild: boolean
  ServerVersion: string
  Runtimes: Runtimes
  DefaultRuntime: string
  Swarm: Swarm
  LiveRestoreEnabled: boolean
  Isolation: string
  InitBinary: string
  ContainerdCommit: ContainerdCommit
  RuncCommit: RuncCommit
  InitCommit: InitCommit
  SecurityOptions: string[]
  ProductLicense: string
  DefaultAddressPools: DefaultAddressPool[]
  Warnings: string[]
  CDISpecDirs: string[]
  Containerd: Containerd
}

export interface Plugins {
  Volume: string[]
  Network: string[]
  Authorization: string[]
  Log: string[]
}

export interface RegistryConfig {
  AllowNondistributableArtifactsCIDRs: string[]
  AllowNondistributableArtifactsHostnames: string[]
  InsecureRegistryCIDRs: string[]
  IndexConfigs: IndexConfigs
  Mirrors: string[]
}

export interface IndexConfigs {
  "127.0.0.1:5000": N1270015000
  "docker.io": DockerIo
  "registry.internal.corp.example.com:3000": RegistryInternalCorpExampleCom3000
}

export interface N1270015000 {
  Name: string
  Mirrors: any[]
  Secure: boolean
  Official: boolean
}

export interface DockerIo {
  Name: string
  Mirrors: string[]
  Secure: boolean
  Official: boolean
}

export interface RegistryInternalCorpExampleCom3000 {
  Name: string
  Mirrors: any[]
  Secure: boolean
  Official: boolean
}

export interface GenericResource {
  DiscreteResourceSpec?: DiscreteResourceSpec
  NamedResourceSpec?: NamedResourceSpec
}

export interface DiscreteResourceSpec {
  Kind: string
  Value: number
}

export interface NamedResourceSpec {
  Kind: string
  Value: string
}

export interface Runtimes {
  runc: Runc
  "runc-master": RuncMaster
  custom: Custom
}

export interface Runc {
  path: string
}

export interface RuncMaster {
  path: string
}

export interface Custom {
  path: string
  runtimeArgs: string[]
}

export interface Swarm {
  NodeID: string
  NodeAddr: string
  LocalNodeState: string
  ControlAvailable: boolean
  Error: string
  RemoteManagers: RemoteManager[]
  Nodes: number
  Managers: number
  Cluster: Cluster
}

export interface RemoteManager {
  NodeID: string
  Addr: string
}

export interface Cluster {
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

export interface ContainerdCommit {
  ID: string
  Expected: string
}

export interface RuncCommit {
  ID: string
  Expected: string
}

export interface InitCommit {
  ID: string
  Expected: string
}

export interface DefaultAddressPool {
  Base: string
  Size: string
}

export interface Containerd {
  Address: string
  Namespaces: Namespaces
}

export interface Namespaces {
  Containers: string
  Plugins: string
}
