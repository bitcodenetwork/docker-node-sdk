export interface PluginInspectResponse {
  Id: string
  Name: string
  Enabled: boolean
  Settings: Settings
  PluginReference: string
  Config: Config
}

export interface Settings {
  Mounts: Mount[]
  Env: string[]
  Args: string[]
  Devices: Device[]
}

export interface Mount {
  Name: string
  Description: string
  Settable: string[]
  Source: string
  Destination: string
  Type: string
  Options: string[]
}

export interface Device {
  Name: string
  Description: string
  Settable: string[]
  Path: string
}

export interface Config {
  DockerVersion: string
  Description: string
  Documentation: string
  Interface: Interface
  Entrypoint: string[]
  WorkDir: string
  User: User
  Network: Network
  Linux: Linux
  PropagatedMount: string
  IpcHost: boolean
  PidHost: boolean
  Mounts: Mount2[]
  Env: Env[]
  Args: Args
  rootfs: Rootfs
}

export interface Interface {
  Types: string[]
  Socket: string
  ProtocolScheme: string
}

export interface User {
  UID: number
  GID: number
}

export interface Network {
  Type: string
}

export interface Linux {
  Capabilities: string[]
  AllowAllDevices: boolean
  Devices: Device2[]
}

export interface Device2 {
  Name: string
  Description: string
  Settable: string[]
  Path: string
}

export interface Mount2 {
  Name: string
  Description: string
  Settable: string[]
  Source: string
  Destination: string
  Type: string
  Options: string[]
}

export interface Env {
  Name: string
  Description: string
  Settable: any
  Value: string
}

export interface Args {
  Name: string
  Description: string
  Settable: string[]
  Value: string[]
}

export interface Rootfs {
  type: string
  diff_ids: string[]
}
