export type DockerServiceCreateHeader = {
  "X-Registry-Auth": string;
}

export type DockerServiceCreateBody = {
  Name: string
  Labels: {
    [key: string]: string
  }
  TaskTemplate: {
    PluginSpec: {
      Name: string
      Remote: string
      Disabled: boolean
      PluginPrivilege: {
        Name: string
        Description: string
        Value: string[]
      }[]
    }
    ContainerSpec: {
      Image: string
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
        Type: string
        ReadOnly: boolean
        Consistency: string
        BindOptions: {
          Propagation: string
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
        }
        TmpfsOptions: {
          SizeBytes: number
          Mode: number
          Options: string[][]
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
        File: {
          Name: string
          UID: string
          GID: string
          Mode: number
        }
        SecretID: string
        SecretName: string
      }[]
      OomScoreAdj: number
      Configs: {
        File: {
          Name: string
          UID: string
          GID: string
          Mode: number
        }
        Runtime: {}
        ConfigID: string
        ConfigName: string
      }[]
      Isolation: string
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
          DiscreteResourceSpec?: {
            Kind: string
            Value: number
          }
          NamedResourceSpec?: {
            Kind: string
            Value: string
          }
        }[]
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
  Mode: {
    Replicated: {
      Replicas: number
    }
    Global: {}
    ReplicatedJob: {
      MaxConcurrent: number
      TotalCompletions: number
    }
    GlobalJob: {}
  }
  UpdateConfig: {
    Parallelism: number
    Delay: number
    FailureAction: string
    Monitor: number
    MaxFailureRatio: number
    Order: string
  }
  RollbackConfig: {
    Parallelism: number
    Delay: number
    FailureAction: string
    Monitor: number
    MaxFailureRatio: number
    Order: string
  }
  Networks: {
    Target: string
    Aliases: string[]
    DriverOpts: {
      [key: string]: string
    }
  }[]
  EndpointSpec: {
    Mode: string
    Ports: {
      Name: string
      Protocol: string
      TargetPort: number
      PublishedPort: number
      PublishMode: string
    }[]
  }
}

export type DockerServiceCreateResponse = {
  ID: string
  Warnings: string[]
}
