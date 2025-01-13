/**
 * Docker Image Commit Query
 */

export type DockerImageCommitQuery = {
  container?: string;
  repo?: string;
  tag?: string;
  comment?: string;
  author?: string;
  pause?: boolean;
  changes?: string;
}

/**
 * Docker Image Commit Body
 */

export type DockerImageCommitBody = {
  Hostname?: string;
  Domainname?: string;
  User?: string;
  AttachStdin?: boolean;
  AttachStdout?: boolean;
  AttachStderr?: boolean;
  ExposedPorts?: {
    [key: string]: any;
  }
  Tty?: boolean;
  OpenStdin?: boolean;
  StdinOnce?: boolean;
  Env?: string[];
  Cmd?: string[];
  Healthcheck?: {
    Test: string[];
    Interval: number;
    Timeout: number;
    Retries: number;
    StartPeriod: number;
    StartInterval: number;
  }
  ArgsEscaped?: boolean;
  Image?: string;
  Volumes?: {
    [key: string]: any;
  }
  WorkingDir?: string;
  Entrypoint?: string[];
  NetworkDisabled?: boolean;
  MacAddress?: string;
  OnBuild?: string[];
  Labels?: {
    [key: string]: string;
  }
  StopSignal?: string;
  StopTimeout?: number;
  Shell?: string[];
}

/**
 * Docker Image Commit Response
 */

export type DockerImageCommitResponse = {
  Id: string;
}