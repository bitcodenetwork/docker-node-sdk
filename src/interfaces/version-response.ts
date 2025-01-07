export interface VersionResponse {
  Platform: Platform
  Components: Component[]
  Version: string
  ApiVersion: string
  MinAPIVersion: string
  GitCommit: string
  GoVersion: string
  Os: string
  Arch: string
  KernelVersion: string
  Experimental: boolean
  BuildTime: string
}

export interface Platform {
  Name: string
}

export interface Component {
  Name: string
  Version: string
  Details: Details
}

export interface Details { }
