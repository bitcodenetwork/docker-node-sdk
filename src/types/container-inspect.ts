/**
 * Docker container inspect prop
 */

export type DockerContainerInspectProp = {
  id: string
  query?: DockerContainerInspectQuery
}

/**
 * Docker container inspect query
 */

export type DockerContainerInspectQuery = {
  size?: boolean
}

/**
 * Docker container inspect response
 */

export type DockerContainerInspectResponse = {
  Id: string;
  Created: string;
  Path: string;
  Args: string[];
  State: {
    Status: string
    Running: boolean
    Paused: boolean
    Restarting: boolean
    OOMKilled: boolean
    Dead: boolean
    Pid: number
    ExitCode: number
    Error: string
    StartedAt: string
    FinishedAt: string
    Health: {
      Status: string
      FailingStreak: number
      Log: {
        Start: string
        End: string
        ExitCode: number
        Output: string
      }[]
    }
  }
  Image: string
  ResolvConfPath: string
  HostnamePath: string
  HostsPath: string
  LogPath: string
  Name: string
  RestartCount: number
  Driver: string
  Platform: string
  MountLabel: string
  ProcessLabel: string
  AppArmorProfile: string
  ExecIDs: string[]
  HostConfig: {
    CpuShares: number;
    Memory: number;
    CgroupParent: string;
    BlkioWeight: number
    BlkioWeightDevice: [{
      "Path": string;
      "Weight": number;
    }];
    BlkioDeviceReadBps: [{
      "Path": string;
      "Rate": number;
    }];
    BlkioDeviceWriteBps: [{
      "Path": string;
      "Rate": number;
    }];
    BlkioDeviceReadIOps: [{
      "Path": string;
      "Rate": number;
    }];
    BlkioDeviceWriteIOps: [{
      "Path": string;
      "Rate": number;
    }];
    CpuPeriod: number;
    CpuQuota: number;
    CpuRealtimePeriod: number
    CpuRealtimeRuntime: number
    CpusetCpus: string
    CpusetMems: string
    Devices: {
      PathOnHost: string;
      PathInContainer: string;
      CgroupPermissions: string;
    }[];
    DeviceCgroupRules: string[]
    DeviceRequests: {
      Driver: string
      Count: number
      DeviceIDs: string[]
      Capabilities: string[][]
      Options: {
        [key: string]: string
      }
    }[];
    KernelMemoryTCP: number;
    MemoryReservation: number;
    MemorySwap: number;
    MemorySwappiness: number;
    NanoCpus: number;
    OomKillDisable: boolean;
    Init?: boolean;
    PidsLimit?: number;
    Ulimits?: {
      Name: string;
      Soft: number;
      Hard: number;
    }[];
    CpuCount: number;
    CpuPercent: number;
    IOMaximumIOps: number;
    IOMaximumBandwidth: number;
    Binds: string[];
    ContainerIDFile: string;
    LogConfig: {
      Type: string;
      Config: {
        [key: string]: string;
      };
    };
    NetworkMode: string;
    PortBindings: {
      [key: string]: {
        HostIP: string;
        HostPort: string;
      }[];
    };
    RestartPolicy: {
      Name: string;
      MaximumRetryCount: number;
    };
    AutoRemove: boolean;
    VolumeDriver: string;
    VolumesFrom: string[];
    Mounts: {
      Target: string;
      Source: string;
      Type: string;
      ReadOnly: boolean;
      Consistency: string;
      BindOptions: {
        Propagation: string;
        NonRecursive: boolean;
        CreateMountpoint: boolean;
        ReadOnlyNonRecursive: boolean;
        ReadOnlyForceRecursive: boolean;
      };
      VolumeOptions: {
        NoCopy: boolean;
        Labels: {
          [key: string]: string;
        };
        DriverConfig: {
          Name: string;
          Options: {
            [key: string]: string;
          };
        };
        Subpath: string;
      };
      tmpfsOptions: {
        SizeBytes: number;
        Mode: number;
        Options: []
      };
    }[];
    ConsoleSize?: number[];
    Annotations: {
      [key: string]: string
    };
    CapAdd: string[];
    CapDrop: string[];
    CgroupnsMode: string;
    Dns: string[];
    DnsOptions: string[];
    DnsSearch: string[];
    ExtraHosts: string[];
    GroupAdd: string[];
    IpcMode: string;
    Cgroup: string;
    Links: string[];
    OomScoreAdj: number;
    PidMode: string;
    Privileged: boolean;
    PublishAllPorts: boolean;
    ReadonlyRootfs: boolean;
    SecurityOpt: string[];
    StorageOpt: {
      [key: string]: string;
    };
    Tmpfs: { [key: string]: string };
    UtsMode: string;
    UsernsMode: string;
    ShmSize: number;
    Sysctls: {
      [key: string]: string;
    };
    Runtime: string;
    Isolation: string;
    MaskedPaths: string[];
    ReadonlyPaths: string[];
  }
  GraphDriver: {
    Name: string;
    Data: {
      [key: string]: string;
    };
  }
  SizeRw: number;
  SizeRootFs: number;
  Mounts: {
    Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster"
    Name: string
    Source: string
    Destination: string
    Driver: string
    Mode: string
    RW: boolean
    Propagation: string
  }[]
  Config: {
    Hostname: string
    Domainname: string
    User: string
    AttachStdin: boolean
    AttachStdout: boolean
    AttachStderr: boolean
    ExposedPorts?: {
      [key: string]: string
    }
    Tty: boolean
    OpenStdin: boolean
    StdinOnce: boolean
    Env: string[]
    Cmd: string[]
    Healthcheck: {
      Test: string[];
      Interval: number;
      Timeout: number;
      Retries: number;
      StartPeriod: number;
      StartInterval: number;
    }
    ArgsEscaped?: boolean;
    Image: string
    Volumes: {
      [key: string]: {
        Default: any;
        Value: any;
      }
    }
    WorkingDir: string
    Entrypoint: any[]
    NetworkDisabled?: boolean
    MacAddress?: string
    OnBuild?: string[];
    Labels: {
      [key: string]: string;
    }
    StopSignal?: string
    StopTimeout?: number
    shell?: string[]
  }
  NetworkSettings: {
    Bridge: string
    SandboxID: string
    HairpinMode: boolean
    LinkLocalIPv6Address: string
    LinkLocalIPv6PrefixLen: number
    Ports: {
      [key: string]: {
        IP: string;
        PrivatePort: number;
        PublicPort: number;
        Type: string;
      }[] | null
    }
    SandboxKey: string
    SecondaryIPAddresses: {
      Addr: string;
      PrefixLen: number;
    }[];
    SecondaryIPv6Addresses: {
      Addr: string;
      PrefixLen: number;
    }[];
    EndpointID: string
    Gateway: string
    GlobalIPv6Address: string
    GlobalIPv6PrefixLen: number
    IPAddress: string
    IPPrefixLen: number
    IPv6Gateway: string
    MacAddress: string
    Networks: {
      [key: string]: {
        IPAMConfig?: {
          IPv4Address?: string;
          IPv6Address?: string;
          LinkLocalIPs?: string[];
        };
        Links: string[];
        MacAddress?: string;
        Aliases: string[];
        DriverOpts?: {
          [key: string]: string;
        }
        NetworkID: string;
        EndpointID: string;
        Gateway: string;
        IPAddress: string;
        IPPrefixLen: number;
        IPv6Gateway: string;
        GlobalIPv6Address: string;
        GlobalIPv6PrefixLen: number;
        DNSNames: string[];
      }
    }
  }
}
