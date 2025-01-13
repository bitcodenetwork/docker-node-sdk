/**
 * Docker Image Inspect Response
 */

type DockerImageInspectResponse = {
  Id: string
  RepoTags: string[]
  RepoDigests: string[]
  Parent: string
  Comment: string
  Created: string
  DockerVersion: string
  Author: string
  Config: {
    Hostname: string
    Domainname: string
    User: string
    AttachStdin: boolean
    AttachStdout: boolean
    AttachStderr: boolean
    ExposedPorts?: {
      [key: string]: any;
    };
    Tty: boolean
    OpenStdin: boolean
    StdinOnce: boolean
    Env: string[]
    Cmd: string[]
    Healthcheck: {
      Test: string[]
      Interval: number
      Timeout: number
      Retries: number
      StartPeriod: number
      StartInterval: number
    }
    ArgsEscaped: boolean
    Image: string
    Volumes: {
      [key: string]: any;
    };
    WorkingDir: string
    Entrypoint: any[]
    OnBuild: any[]
    Labels: {
      [key: string]: string;
    };
    StopSignal: string;
    StopTimeout: number;
    Shell: string[];
  }
  Architecture: string
  Variant: string
  Os: string
  OsVersion: string
  Size: number
  VirtualSize: number
  GraphDriver: {
    Name: string
    Data: {
      [key: string]: string;
    };
  }
  RootFS: {
    Type: string
    Layers: string[]
  }
  Metadata: {
    LastTagTime: string
  }
}
