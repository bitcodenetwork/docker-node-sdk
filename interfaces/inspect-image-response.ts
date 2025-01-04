export interface InspectImageResponse {
  Id: string
  RepoTags: string[]
  RepoDigests: string[]
  Parent: string
  Comment: string
  Created: string
  DockerVersion: string
  Author: string
  Config: Config
  Architecture: string
  Variant: string
  Os: string
  OsVersion: string
  Size: number
  VirtualSize: number
  GraphDriver: GraphDriver
  RootFS: RootFs
  Metadata: Metadata
}

export interface Config {
  Hostname: string
  Domainname: string
  User: string
  AttachStdin: boolean
  AttachStdout: boolean
  AttachStderr: boolean
  ExposedPorts: ExposedPorts
  Tty: boolean
  OpenStdin: boolean
  StdinOnce: boolean
  Env: string[]
  Cmd: string[]
  Healthcheck: Healthcheck
  ArgsEscaped: boolean
  Image: string
  Volumes: Volumes
  WorkingDir: string
  Entrypoint: any[]
  OnBuild: any[]
  Labels: Labels
  StopSignal: string
  Shell: string[]
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
  "/app/data": AppData
  "/app/config": AppConfig
}

export interface AppData { }

export interface AppConfig { }

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}

export interface GraphDriver {
  Name: string
  Data: Data
}

export interface Data {
  MergedDir: string
  UpperDir: string
  WorkDir: string
}

export interface RootFs {
  Type: string
  Layers: string[]
}

export interface Metadata {
  LastTagTime: string
}
