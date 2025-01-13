export type DockerTaskInspectResponse = {
  ID: string
  Version: {
    Index: number
  }
  CreatedAt: string
  UpdatedAt: string
  Name: string
  Labels: {
    [key: string]: string
  }
  Spec: {
    PluginSpec: {
      Name: string;
      Remote: string;
      Disable: boolean;
      PluginPrivilege: {
        Name: string;
        Description: string;
        Value: string
      }[]
    }
    ContainerSpec: {
      Image: string;
      Labels: {
        [key: string]: string
      }
      Command: string[]
      Args: string[]
      Hostname: string
      Env: string[]
      Dir: string
      User: string
      Groups: string[]
      Privileges: {
        CredentialSpec: {
          Config: string
          File: string
          Registry: string
        }
        SELinuxContext: {
          Disable: boolean
          User: string
          Role: string
          Type: string
          Level: string
        }
        Seccomp: {
          Mode: string
          Profile: string
        }
        AppArmor: {
          Mode: string
        }
        NoNewPrivileges: boolean
      }
      TTY: boolean
      OpenStdin: boolean
      ReadOnly: boolean
      Mounts: {
        Target: string
        Source: string
        Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster"
        ReadOnly: boolean
        Consistency: "default" | "consistent" | "cached" | "delegated"
        BindOptions: {
          Propagation: "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave"
          NonRecursive: boolean
          CreateMountpoint: boolean
          ReadOnlyNonRecursive: boolean
          ReadOnlyForceRecursive: boolean
        }
        VolumeOptions: {
          NoCopy: boolean
          Labels: {
            [key: string]: string
          }
          DriverConfig: {
            Name: string
            Options: {
              [key: string]: string
            }
          }
          Subpath: string
          TempfsOptions: {
            SizeBytes: number
            Mode: number
            Options: string[][]
          }
        }
      }[]
      StopSignal: string
      StopGracePeriod: number
      HealthCheck: {
        Test: string[]
        Interval: number
        Timeout: number
        Retries: number
        StartPeriod: number
        StartInterval: number
      }
      Hosts: string[]
      DNSConfig: {
        Nameservers: string[]
        Search: string[]
        Options: string[]
      }
      Secrets: {
        SecretID: string
        SecretName: string
        File: {
          Name: string
          UID: string
          GID: string
          Mode: number
        }
      }[]
      OomScoreAdj: number
      Configs: {
        ConfigID: string
        ConfigName: string
        Runtime: any
        File: {
          Name: string
          UID: string
          GID: string
          Mode: number
        }
      }[]
      Isolation: "default" | "process" | "hyperv"
      Init: boolean
      Sysctls: {
        [key: string]: string
      }
      CapabilityAdd: string[]
      CapabilityDrop: string[]
      Ulimits: {
        Name: string
        Soft: number
        Hard: number
      }[]
    }
    NetworkAttachmentSpec: {
      ContainerID: string
    }
    Resources: {
      Limits: {
        NanoCPUs: number
        MemoryBytes: number
        Pids: number
      }
      Reservations: {
        NanoCPUs: number
        MemoryBytes: number
        GenericResources: {
          NamedResourceSpec: {
            Kind: string
            Value: string
          }
          DiscreteResourceSpec: {
            Kind: string
            Value: number
          }
        }
      }
    }
    RestartPolicy: {
      Condition: string
      Delay: number
      MaxAttempts: number
      Window: number
    }
    Placement: {
      Constraints: string[]
      Preferences: {
        Spread: {
          SpreadDescriptor: string
        }
      }[]
      MaxReplicas: number
      Platforms: {
        Architecture: string
        OS: string
      }[]
    }
    ForceUpdate: number
    Runtime: string
    Networks: {
      Target: string
      Aliases: string[]
      DriverOpts: {
        [key: string]: string
      }
    }[]
    LogDriver: {
      Name: string
      Options: {
        [key: string]: string
      }
    }
  }
  ServiceID: string
  Slot: number
  NodeID: string
  AssignedGenericResources: {
    DiscreteResourceSpec?: {
      Kind: string
      Value: number
    }
    NamedResourceSpec?: {
      Kind: string
      Value: string
    }
  }[]
  Status: {
    Timestamp: string
    State: "new" | "allocated" | "pending" | "assigned" | "accepted" | "preparing" | "ready" | "starting" | "running" | "complete" | "shutdown" | "failed" | "rejected" | "remove" | "orphaned"
    Message: string
    Err: string
    ContainerStatus: {
      ContainerID: string
      PID?: number
      ExitCode?: number
    }
    PortStatus: {
      Name: string
      Protocol: "tcp" | "udp" | "sctp"
      TargetPort: number
      PublishedPort: number
      PublishMode: "ingress" | "host"
    }[]
  }
  DesiredState: "new" | "allocated" | "pending" | "assigned" | "accepted" | "preparing" | "ready" | "starting" | "running" | "complete" | "shutdown" | "failed" | "rejected" | "remove" | "orphaned"
  JobIteration: {
    Index: number
  }
}
