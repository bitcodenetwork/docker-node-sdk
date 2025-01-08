export interface ImageCommitBody {
  Hostname?: string
  Domainname?: string
  User?: string
  AttachStdin?: boolean
  AttachStdout?: boolean
  AttachStderr?: boolean
  ExposedPorts?: ExposedPorts
  Tty?: boolean
  OpenStdin?: boolean
  StdinOnce?: boolean
  Env?: string[]
  Cmd?: string[]
  Healthcheck?: Healthcheck
  ArgsEscaped?: boolean
  Image?: string
  Volumes?: Volumes
  WorkingDir?: string
  Entrypoint?: any[]
  NetworkDisabled?: boolean
  MacAddress?: string
  OnBuild?: any[]
  Labels?: Labels
  StopSignal?: string
  StopTimeout?: number
  Shell?: string[]
}

export interface ExposedPorts {
  "80/tcp": N80Tcp
  "443/tcp": N443Tcp
}

export interface N80Tcp { }

export interface N443Tcp { }

export interface Healthcheck {
  Test: string[]
  Interval: number
  Timeout: number
  Retries: number
  StartPeriod: number
  StartInterval: number
}

export interface Volumes {
  property1: Property1
  property2: Property2
}

export interface Property1 { }

export interface Property2 { }

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}
