export interface ServiceInspectResponse {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
  Endpoint: Endpoint
}

export interface Version {
  Index: number
}

export interface Spec {
  Name: string
  TaskTemplate: TaskTemplate
  Mode: Mode
  UpdateConfig: UpdateConfig
  RollbackConfig: RollbackConfig
  EndpointSpec: EndpointSpec
}

export interface TaskTemplate {
  ContainerSpec: ContainerSpec
  Resources: Resources
  RestartPolicy: RestartPolicy
  Placement: Placement
  ForceUpdate: number
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

export interface Mode {
  Replicated: Replicated
}

export interface Replicated {
  Replicas: number
}

export interface UpdateConfig {
  Parallelism: number
  Delay: number
  FailureAction: string
  Monitor: number
  MaxFailureRatio: number
}

export interface RollbackConfig {
  Parallelism: number
  Delay: number
  FailureAction: string
  Monitor: number
  MaxFailureRatio: number
}

export interface EndpointSpec {
  Mode: string
  Ports: Port[]
}

export interface Port {
  Protocol: string
  TargetPort: number
  PublishedPort: number
}

export interface Endpoint {
  Spec: Spec2
  Ports: Port3[]
  VirtualIPs: VirtualIp[]
}

export interface Spec2 {
  Mode: string
  Ports: Port2[]
}

export interface Port2 {
  Protocol: string
  TargetPort: number
  PublishedPort: number
}

export interface Port3 {
  Protocol: string
  TargetPort: number
  PublishedPort: number
}

export interface VirtualIp {
  NetworkID: string
  Addr: string
}
