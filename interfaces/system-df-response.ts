export interface SystemDfResponse {
  LayersSize: number
  Images: Image[]
  Containers: Container[]
  Volumes: Volume[]
  BuildCache: BuildCache[]
}

export interface Image {
  Id: string
  ParentId: string
  RepoTags: string[]
  RepoDigests: string[]
  Created: number
  Size: number
  SharedSize: number
  Labels: Labels
  Containers: number
}

export interface Labels { }

export interface Container {
  Id: string
  Names: string[]
  Image: string
  ImageID: string
  Command: string
  Created: number
  Ports: any[]
  SizeRootFs: number
  Labels: Labels2
  State: string
  Status: string
  HostConfig: HostConfig
  NetworkSettings: NetworkSettings
  Mounts: any[]
}

export interface Labels2 { }

export interface HostConfig {
  NetworkMode: string
}

export interface NetworkSettings {
  Networks: Networks
}

export interface Networks {
  bridge: Bridge
}

export interface Bridge {
  IPAMConfig: any
  Links: any
  Aliases: any
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

export interface Volume {
  Name: string
  Driver: string
  Mountpoint: string
  Labels: any
  Scope: string
  Options: any
  UsageData: UsageData
}

export interface UsageData {
  Size: number
  RefCount: number
}

export interface BuildCache {
  ID: string
  Parents: string[]
  Type: string
  Description: string
  InUse: boolean
  Shared: boolean
  Size: number
  CreatedAt: string
  LastUsedAt: string
  UsageCount: number
}
