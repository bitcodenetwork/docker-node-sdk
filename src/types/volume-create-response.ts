export interface VolumeCreateResponse {
  Name: string
  Driver: string
  Mountpoint: string
  CreatedAt: string
  Status: Status
  Labels: Labels
  Scope: string
  ClusterVolume: ClusterVolume
  Options: Options
  UsageData: UsageData
}

export interface Status {
  hello: string
}

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}

export interface ClusterVolume {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
  Info: Info
  PublishStatus: PublishStatu[]
}

export interface Version {
  Index: number
}

export interface Spec {
  Group: string
  AccessMode: AccessMode
}

export interface AccessMode {
  Scope: string
  Sharing: string
  MountVolume: MountVolume
  Secrets: Secret[]
  AccessibilityRequirements: AccessibilityRequirements
  CapacityRange: CapacityRange
  Availability: string
}

export interface MountVolume { }

export interface Secret {
  Key: string
  Secret: string
}

export interface AccessibilityRequirements {
  Requisite: Requisite[]
  Preferred: Preferred[]
}

export interface Requisite {
  property1: string
  property2: string
}

export interface Preferred {
  property1: string
  property2: string
}

export interface CapacityRange {
  RequiredBytes: number
  LimitBytes: number
}

export interface Info {
  CapacityBytes: number
  VolumeContext: VolumeContext
  VolumeID: string
  AccessibleTopology: AccessibleTopology[]
}

export interface VolumeContext {
  property1: string
  property2: string
}

export interface AccessibleTopology {
  property1: string
  property2: string
}

export interface PublishStatu {
  NodeID: string
  State: string
  PublishContext: PublishContext
}

export interface PublishContext {
  property1: string
  property2: string
}

export interface Options {
  device: string
  o: string
  type: string
}

export interface UsageData {
  Size: number
  RefCount: number
}
