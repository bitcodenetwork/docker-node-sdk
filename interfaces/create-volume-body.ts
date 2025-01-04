export interface CreateVolumeBody {
  Name: string
  Driver: string
  DriverOpts: DriverOpts
  Labels: Labels
  ClusterVolumeSpec: ClusterVolumeSpec
}

export interface DriverOpts {
  device: string
  o: string
  type: string
}

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}

export interface ClusterVolumeSpec {
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
