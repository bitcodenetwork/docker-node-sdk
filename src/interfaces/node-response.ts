export type NodeResponse = ListNode[]

export interface ListNode {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
  Description: Description
  Status: Status
  ManagerStatus: ManagerStatus
}

export interface Version {
  Index: number
}

export interface Spec {
  Availability: string
  Name: string
  Role: string
  Labels: Labels
}

export interface Labels {
  foo: string
}

export interface Description {
  Hostname: string
  Platform: Platform
  Resources: Resources
  Engine: Engine
  TLSInfo: Tlsinfo
}

export interface Platform {
  Architecture: string
  OS: string
}

export interface Resources {
  NanoCPUs: number
  MemoryBytes: number
  GenericResources: GenericResource[]
}

export interface GenericResource {
  DiscreteResourceSpec?: DiscreteResourceSpec
  NamedResourceSpec?: NamedResourceSpec
}

export interface DiscreteResourceSpec {
  Kind: string
  Value: number
}

export interface NamedResourceSpec {
  Kind: string
  Value: string
}

export interface Engine {
  EngineVersion: string
  Labels: Labels2
  Plugins: Plugin[]
}

export interface Labels2 {
  foo: string
}

export interface Plugin {
  Type: string
  Name: string
}

export interface Tlsinfo {
  TrustRoot: string
  CertIssuerSubject: string
  CertIssuerPublicKey: string
}

export interface Status {
  State: string
  Message: string
  Addr: string
}

export interface ManagerStatus {
  Leader: boolean
  Reachability: string
  Addr: string
}
