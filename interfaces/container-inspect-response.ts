export interface ContainerInspectResponse {
  AppArmorProfile: string
  Args: string[]
  Config: Config
  Created: string
  Driver: string
  ExecIDs: string[]
  HostConfig: HostConfig
  HostnamePath: string
  HostsPath: string
  LogPath: string
  Id: string
  Image: string
  MountLabel: string
  Name: string
  NetworkSettings: NetworkSettings
  Path: string
  ProcessLabel: string
  ResolvConfPath: string
  RestartCount: number
  State: State
  Mounts: Mount[]
}

export interface Config {
  AttachStderr: boolean
  AttachStdin: boolean
  AttachStdout: boolean
  Cmd: string[]
  Domainname: string
  Env: string[]
  Healthcheck: Healthcheck
  Hostname: string
  Image: string
  Labels: Labels
  MacAddress: string
  NetworkDisabled: boolean
  OpenStdin: boolean
  StdinOnce: boolean
  Tty: boolean
  User: string
  Volumes: Volumes
  WorkingDir: string
  StopSignal: string
  StopTimeout: number
}

export interface Healthcheck {
  Test: string[]
}

export interface Labels {
  "com.example.vendor": string
  "com.example.license": string
  "com.example.version": string
}

export interface Volumes {
  "/volumes/data": VolumesData
}

export interface VolumesData { }

export interface HostConfig {
  MaximumIOps: number
  MaximumIOBps: number
  BlkioWeight: number
  BlkioWeightDevice: BlkioWeightDevice[]
  BlkioDeviceReadBps: BlkioDeviceReadBp[]
  BlkioDeviceWriteBps: BlkioDeviceWriteBp[]
  BlkioDeviceReadIOps: BlkioDeviceReadIop[]
  BlkioDeviceWriteIOps: BlkioDeviceWriteIop[]
  ContainerIDFile: string
  CpusetCpus: string
  CpusetMems: string
  CpuPercent: number
  CpuShares: number
  CpuPeriod: number
  CpuRealtimePeriod: number
  CpuRealtimeRuntime: number
  Devices: any[]
  DeviceRequests: DeviceRequest[]
  IpcMode: string
  Memory: number
  MemorySwap: number
  MemoryReservation: number
  OomKillDisable: boolean
  OomScoreAdj: number
  NetworkMode: string
  PidMode: string
  PortBindings: PortBindings
  Privileged: boolean
  ReadonlyRootfs: boolean
  PublishAllPorts: boolean
  RestartPolicy: RestartPolicy
  LogConfig: LogConfig
  Sysctls: Sysctls
  Ulimits: Ulimit[]
  VolumeDriver: string
  ShmSize: number
}

export interface BlkioWeightDevice { }

export interface BlkioDeviceReadBp { }

export interface BlkioDeviceWriteBp { }

export interface BlkioDeviceReadIop { }

export interface BlkioDeviceWriteIop { }

export interface DeviceRequest {
  Driver: string
  Count: number
  DeviceIDs: string[]
  Capabilities: string[][]
  Options: Options
}

export interface Options {
  property1: string
  property2: string
}

export interface PortBindings { }

export interface RestartPolicy {
  MaximumRetryCount: number
  Name: string
}

export interface LogConfig {
  Type: string
}

export interface Sysctls {
  "net.ipv4.ip_forward": string
}

export interface Ulimit { }

export interface NetworkSettings {
  Bridge: string
  SandboxID: string
  HairpinMode: boolean
  LinkLocalIPv6Address: string
  LinkLocalIPv6PrefixLen: number
  SandboxKey: string
  EndpointID: string
  Gateway: string
  GlobalIPv6Address: string
  GlobalIPv6PrefixLen: number
  IPAddress: string
  IPPrefixLen: number
  IPv6Gateway: string
  MacAddress: string
  Networks: Networks
}

export interface Networks {
  bridge: Bridge
}

export interface Bridge {
  NetworkID: string
  EndpointID: string
  Gateway: string
  IPAddress: string
  IPPrefixLen: number
  IPv6Gateway: string
  GlobalIPv6Address: string
  GlobalIPv6PrefixLen: number
  MacAddress: string
}

export interface State {
  Error: string
  ExitCode: number
  FinishedAt: string
  Health: Health
  OOMKilled: boolean
  Dead: boolean
  Paused: boolean
  Pid: number
  Restarting: boolean
  Running: boolean
  StartedAt: string
  Status: string
}

export interface Health {
  Status: string
  FailingStreak: number
  Log: Log[]
}

export interface Log {
  Start: string
  End: string
  ExitCode: number
  Output: string
}

export interface Mount {
  Name: string
  Source: string
  Destination: string
  Driver: string
  Mode: string
  RW: boolean
  Propagation: string
}
