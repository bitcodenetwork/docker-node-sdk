export interface VolumeUpdateBody {
  Spec: Spec
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
