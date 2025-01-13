/**
 * Docker container create prop
 */

export type DockerContainerCreateProp = {
  query: DockerContainerCreateQuery;
  body: DockerContainerCreateBody;
}

/**
 * Docker container create query
 */

export type DockerContainerCreateQuery = {
  name: string;
  platform?: string;
}

/**
 * Docker container create body
 */

export type DockerContainerCreateBody = {
  Hostname?: string;
  Domainname?: string;
  User?: string;
  AttachStdin?: boolean;
  AttachStdout?: boolean;
  AttachStderr?: boolean;
  ExposedPorts?: { [key: string]: any };
  Tty?: boolean;
  OpenStdin?: boolean;
  StdinOnce?: boolean;
  Env?: string[];
  Cmd?: string[];
  Healthcheck?: {
    Test: string[];
    Interval: number;
    Timeout: number;
    Retries: number;
    StartPeriod: number;
    StartInterval: number;
  };
  ArgsEscaped?: boolean;
  Image?: string;
  Volumes?: { [key: string]: any };
  WorkingDir?: string;
  Entrypoint?: string;
  NetworkDisabled?: boolean;
  MacAddress?: string;
  OnBuild?: string[];
  Labels?: { [key: string]: string };
  StopSignal?: string;
  StopTimeout?: number;
  Shell?: string[];
  HostConfig?: {
    CpuShares: number;
    Memory: number;
    CgroupParent: string;
    BlkioWeight: number;
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
    CpuRealtimePeriod: number;
    CpuRealtimeRuntime: number;
    CpusetCpus: string;
    CpusetMems: string;
    Devices: {
      PathOnHost: string;
      PathInContainer: string;
      CgroupPermissions: string;
    }[];
    DeviceCgroupRules: string[];
    DeviceRequests: {
      Driver: string;
      Count: number;
      DeviceIDs: string[];
      Capabilities: string[][];
      Options: {
        [key: string]: string;
      };
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
  };
  NetworkingConfig?: {
    EndpointsConfig: {
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
    };
  };
}

/**
 * Docker container create response
 */

export type DockerContainerCreateResponse = {
  Id: string
  Warnings: any[]
}
