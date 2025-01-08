export interface ServiceUpdateBody {
  Name: string
  Labels: Labels
  TaskTemplate: TaskTemplate
  Mode: Mode
  UpdateConfig: UpdateConfig
  RollbackConfig: RollbackConfig
  Networks: Network2[]
  EndpointSpec: EndpointSpec
}

export interface Labels {
  property1: string
  property2: string
}

export interface TaskTemplate {
  PluginSpec: PluginSpec
  ContainerSpec: ContainerSpec
  NetworkAttachmentSpec: NetworkAttachmentSpec
  Resources: Resources
  RestartPolicy: RestartPolicy
  Placement: Placement
  ForceUpdate: number
  Runtime: string
  Networks: Network[]
  LogDriver: LogDriver
}

export interface PluginSpec {
  Name: string
  Remote: string
  Disabled: boolean
  PluginPrivilege: PluginPrivilege[]
}

export interface PluginPrivilege {
  Name: string
  Description: string
  Value: string[]
}

export interface ContainerSpec {
  Image: string
  Labels: Labels2
  Command: string[]
  Args: string[]
  Hostname: string
  Env: string[]
  Dir: string
  User: string
  Groups: string[]
  Privileges: Privileges
  TTY: boolean
  OpenStdin: boolean
  ReadOnly: boolean
  Mounts: Mount[]
  StopSignal: string
  StopGracePeriod: number
  HealthCheck: HealthCheck
  Hosts: string[]
  DNSConfig: Dnsconfig
  Secrets: Secret[]
  OomScoreAdj: number
  Configs: Config[]
  Isolation: string
  Init: boolean
  Sysctls: Sysctls
  CapabilityAdd: string[]
  CapabilityDrop: string[]
  Ulimits: Ulimit[]
}

export interface Labels2 {
  property1: string
  property2: string
}

export interface Privileges {
  CredentialSpec: CredentialSpec
  SELinuxContext: SelinuxContext
  Seccomp: Seccomp
  AppArmor: AppArmor
  NoNewPrivileges: boolean
}

export interface CredentialSpec {
  Config: string
  File: string
  Registry: string
}

export interface SelinuxContext {
  Disable: boolean
  User: string
  Role: string
  Type: string
  Level: string
}

export interface Seccomp {
  Mode: string
  Profile: string
}

export interface AppArmor {
  Mode: string
}

export interface Mount {
  Target: string
  Source: string
  Type: string
  ReadOnly: boolean
  Consistency: string
  BindOptions: BindOptions
  VolumeOptions: VolumeOptions
  TmpfsOptions: TmpfsOptions
}

export interface BindOptions {
  Propagation: string
  NonRecursive: boolean
  CreateMountpoint: boolean
  ReadOnlyNonRecursive: boolean
  ReadOnlyForceRecursive: boolean
}

export interface VolumeOptions {
  NoCopy: boolean
  Labels: Labels3
  DriverConfig: DriverConfig
  Subpath: string
}

export interface Labels3 {
  property1: string
  property2: string
}

export interface DriverConfig {
  Name: string
  Options: Options
}

export interface Options {
  property1: string
  property2: string
}

export interface TmpfsOptions {
  SizeBytes: number
  Mode: number
  Options: string[][]
}

export interface HealthCheck {
  Test: string[]
  Interval: number
  Timeout: number
  Retries: number
  StartPeriod: number
  StartInterval: number
}

export interface Dnsconfig {
  Nameservers: string[]
  Search: string[]
  Options: string[]
}

export interface Secret {
  File: File
  SecretID: string
  SecretName: string
}

export interface File {
  Name: string
  UID: string
  GID: string
  Mode: number
}

export interface Config {
  File: File2
  Runtime: Runtime
  ConfigID: string
  ConfigName: string
}

export interface File2 {
  Name: string
  UID: string
  GID: string
  Mode: number
}

export interface Runtime { }

export interface Sysctls {
  property1: string
  property2: string
}

export interface Ulimit {
  Name: string
  Soft: number
  Hard: number
}

export interface NetworkAttachmentSpec {
  ContainerID: string
}

export interface Resources {
  Limits: Limits
  Reservations: Reservations
}

export interface Limits {
  NanoCPUs: number
  MemoryBytes: number
  Pids: number
}

export interface Reservations {
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

export interface RestartPolicy {
  Condition: string
  Delay: number
  MaxAttempts: number
  Window: number
}

export interface Placement {
  Constraints: string[]
  Preferences: Preference[]
  MaxReplicas: number
  Platforms: Platform[]
}

export interface Preference {
  Spread: Spread
}

export interface Spread {
  SpreadDescriptor: string
}

export interface Platform {
  Architecture: string
  OS: string
}

export interface Network {
  Target: string
  Aliases: string[]
  DriverOpts: DriverOpts
}

export interface DriverOpts {
  property1: string
  property2: string
}

export interface LogDriver {
  Name: string
  Options: Options2
}

export interface Options2 {
  property1: string
  property2: string
}

export interface Mode {
  Replicated: Replicated
  Global: Global
  ReplicatedJob: ReplicatedJob
  GlobalJob: GlobalJob
}

export interface Replicated {
  Replicas: number
}

export interface Global { }

export interface ReplicatedJob {
  MaxConcurrent: number
  TotalCompletions: number
}

export interface GlobalJob { }

export interface UpdateConfig {
  Parallelism: number
  Delay: number
  FailureAction: string
  Monitor: number
  MaxFailureRatio: number
  Order: string
}

export interface RollbackConfig {
  Parallelism: number
  Delay: number
  FailureAction: string
  Monitor: number
  MaxFailureRatio: number
  Order: string
}

export interface Network2 {
  Target: string
  Aliases: string[]
  DriverOpts: DriverOpts2
}

export interface DriverOpts2 {
  property1: string
  property2: string
}

export interface EndpointSpec {
  Mode: string
  Ports: Port[]
}

export interface Port {
  Name: string
  Protocol: string
  TargetPort: number
  PublishedPort: number
  PublishMode: string
}
