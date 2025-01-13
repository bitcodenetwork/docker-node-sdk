export type DockerSystemInfoResponse = {
  ID: string
  Containers: number
  ContainersRunning: number
  ContainersPaused: number
  ContainersStopped: number
  Images: number
  Driver: string
  DriverStatus: string[][]
  DockerRootDir: string
  Plugins: {
    Volume: string[]
    Network: string[]
    Authorization: string[]
    Log: string[]
  }
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
  RegistryConfig: {
    AllowNondistributableArtifactsCIDRs: string[]
    AllowNondistributableArtifactsHostnames: string[]
    InsecureRegistryCIDRs: string[]
    IndexConfigs: {
      [key: string]: any
    }
    Mirrors: string[]
  }
  GenericResources: {
    DiscreteResourceSpec?: {
      Kind: string
      Value: number
    }
    NamedResourceSpec?: {
      Kind: string
      Value: number
    }
  }[]
  HttpProxy: string
  HttpsProxy: string
  NoProxy: string
  Name: string
  Labels: string[]
  ExperimentalBuild: boolean
  ServerVersion: string
  Runtimes: {
    [key: string]: any
  }
  DefaultRuntime: string
  Swarm: {
    NodeID: string
    NodeAddr: string
    LocalNodeState: string
    ControlAvailable: boolean
    Error: string
    RemoteManagers: {
      NodeID: string
      Addr: string
    }[]
    Nodes: number
    Managers: number
    Cluster: {
      ID: string
      Version: {
        Index: number
      }
      CreatedAt: string
      UpdatedAt: string
      Spec: {
        Name: string
        Labels: {
          [key: string]: string
        }
        Orchestration: {
          TaskHistoryRetentionLimit: number
        }
        Raft: {
          SnapshotInterval: number
          KeepOldSnapshots: number
          LogEntriesForSlowFollowers: number
          ElectionTick: number
          HeartbeatTick: number
        }
        Dispatcher: {
          HeartbeatPeriod: number
        }
        CAConfig: {
          NodeCertExpiry: number
          ExternalCAs: {
            Protocol: string
            URL: string
            Options: {
              [key: string]: string
            }
            CACert: string
          }[]
          SigningCACert: string
          SigningCAKey: string
          ForceRotate: number
        }
        EncryptionConfig: {
          AutoLockManagers: boolean
        }
        TaskDefaults: {
          LogDriver: {
            Name: string
            Options: {
              [key: string]: string
            }
          }
        }
      }
      TLSInfo: {
        TrustRoot: string
        CertIssuerSubject: string
        CertIssuerPublicKey: string
      }
      RootRotationInProgress: boolean
      DataPathPort: number
      DefaultAddrPool: string[][]
      SubnetSize: number
    }
  }
  LiveRestoreEnabled: boolean
  Isolation: string
  InitBinary: string
  ContainerdCommit: {
    ID: string
    Expected: string
  }
  RuncCommit: {
    ID: string
    Expected: string
  }
  InitCommit: {
    ID: string
    Expected: string
  }
  SecurityOptions: string[]
  ProductLicense: string
  DefaultAddressPools: {
    Base: string
    Size: string
  }[]
  Warnings: string[]
  CDISpecDirs: string[]
  Containerd: {
    Address: string
    Namespaces: {
      Containers: string
      Plugins: string
    }
  }
}
