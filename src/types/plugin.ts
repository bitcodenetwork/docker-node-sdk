export type DockerPluginQuery = {
  filters?: {
    capability?: string[];
    enable?: string[];
  };
}

export type DockerPluginResponse = DockerPlugin[]

export type DockerPlugin = {
  Id: string
  Name: string
  Enabled: boolean
  Settings: {
    Mounts: {
      Name: string
      Description: string
      Settable: string[]
      Source: string
      Destination: string
      Type: string
      Options: string[]
    }[]
    Env: string[]
    Args: string[]
    Devices: {
      Name: string
      Description: string
      Settable: string[]
      Path: string
    }[]
  }
  PluginReference: string
  Config: {
    DockerVersion: string
    Description: string
    Documentation: string
    Interface: {
      Types: string[]
      Socket: string
      ProtocolScheme: string
    }
    Entrypoint: string[]
    WorkDir: string
    User: {
      UID: number
      GID: number
    }
    Network: {
      Type: string
    }
    Linux: {
      Capabilities: string[]
      AllowAllDevices: boolean
      Devices: {
        Name: string
        Description: string
        Settable: string[]
        Path: string
      }[]
    }
    PropagatedMount: string
    IpcHost: boolean
    PidHost: boolean
    Mounts: {
      Name: string
      Description: string
      Settable: string[]
      Source: string
      Destination: string
      Type: string
      Options: string[]
    }[]
    Env: {
      Name: string
      Description: string
      Settable: any
      Value: string
    }[]
    Args: {
      Name: string
      Description: string
      Settable: string[]
      Value: string[]
    }
    rootfs: {
      type: string
      diff_ids: string[]
    }
  }
}
