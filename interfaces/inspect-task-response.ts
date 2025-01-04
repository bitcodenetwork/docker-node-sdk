export interface InspectTaskResponse {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
  ServiceID: string
  Slot: number
  NodeID: string
  Status: Status
  DesiredState: string
  NetworksAttachments: NetworksAttachment[]
  AssignedGenericResources: AssignedGenericResource[]
}

export interface Version {
  Index: number
}

export interface Spec {
  ContainerSpec: ContainerSpec
  Resources: Resources
  RestartPolicy: RestartPolicy
  Placement: Placement
}

export interface ContainerSpec {
  Image: string
}

export interface Resources {
  Limits: Limits
  Reservations: Reservations
}

export interface Limits { }

export interface Reservations { }

export interface RestartPolicy {
  Condition: string
  MaxAttempts: number
}

export interface Placement { }

export interface Status {
  Timestamp: string
  State: string
  Message: string
  ContainerStatus: ContainerStatus
}

export interface ContainerStatus {
  ContainerID: string
  PID: number
}

export interface NetworksAttachment {
  Network: Network
  Addresses: string[]
}

export interface Network {
  ID: string
  Version: Version2
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec2
  DriverState: DriverState
  IPAMOptions: Ipamoptions2
}

export interface Version2 {
  Index: number
}

export interface Spec2 {
  Name: string
  Labels: Labels
  DriverConfiguration: DriverConfiguration
  IPAMOptions: Ipamoptions
}

export interface Labels {
  "com.docker.swarm.internal": string
}

export interface DriverConfiguration { }

export interface Ipamoptions {
  Driver: Driver
  Configs: Config[]
}

export interface Driver { }

export interface Config {
  Subnet: string
  Gateway: string
}

export interface DriverState {
  Name: string
  Options: Options
}

export interface Options {
  "com.docker.network.driver.overlay.vxlanid_list": string
}

export interface Ipamoptions2 {
  Driver: Driver2
  Configs: Config2[]
}

export interface Driver2 {
  Name: string
}

export interface Config2 {
  Subnet: string
  Gateway: string
}

export interface AssignedGenericResource {
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
