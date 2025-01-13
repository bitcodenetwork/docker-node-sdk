export type DockerSwarmResponse = {
  ID: string
  Version: {
    Index: number
  }
  CreatedAt: string
  UpdatedAt: string
  Spec: {
    Name: string
    Labels: {
      [key: string]: string;
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
          [key: string]: string;
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
          [key: string]: string;
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
  JoinTokens: {
    Worker: string
    Manager: string
  }
}
