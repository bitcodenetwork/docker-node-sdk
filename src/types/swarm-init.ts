export type DockerSwarmInitBody = {
  ListenAddr: string
  AdvertiseAddr: string
  DatePathAddr: string
  DataPathPort: number
  DefaultAddrPool: string[]
  ForceNewCluster: boolean
  SubnetSize: number
  Spec: {
    Labels: {
      [key: string]: string;
    }
    Orchestration: {
      TaskHistoryRetentionLimit: number
    }
    Raft: {
      SnapshotInterval: number;
      KeepOldSnapshots: number;
      LogEntriesForSlowFollowers: number;
      ElectionTick: number;
      HeartbeatTick: number;
    }
    Dispatcher: {
      HeartbeatPeriod: number;
    }
    CAConfig: {
      NodeCertExpiry: number
      ExternalCAs: {
        Protocol: string
        URL: string
        Options: {
          [key: string]: string;
        }
        CACert: string
      }[]
      SigningCACert: string
      SigningCAKey: string
      ForceRotate: number
    }
    EncryptionConfig: {
      AutoLockManagers: boolean;
    }
    TaskDefaults: {
      LogDriver: {
        Name: string
        Options: {
          [key: string]: string;
        }
      }
    }
  }
}
