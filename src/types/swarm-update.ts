type DockerSwarmUpdateQuery = {
  version: number;
  rotateWorkerToken?: boolean;
  rotateManagerToken?: boolean;
  rotateManagerUnlockKey?: boolean;
}

type DockerSwarmUpdateBody = {
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
