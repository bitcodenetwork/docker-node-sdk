export type DockerSystemVersionResponse = {
  Platform: {
    Name: string
  }
  Components: {
    Name: string
    Version: string
    Details?: any
  }[]
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
