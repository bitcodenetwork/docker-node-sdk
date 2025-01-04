export interface InspectExecResponse {
  CanRemove: boolean
  ContainerID: string
  DetachKeys: string
  ExitCode: number
  ID: string
  OpenStderr: boolean
  OpenStdin: boolean
  OpenStdout: boolean
  ProcessConfig: ProcessConfig
  Running: boolean
  Pid: number
}

export interface ProcessConfig {
  arguments: string[]
  entrypoint: string
  privileged: boolean
  tty: boolean
  user: string
}
