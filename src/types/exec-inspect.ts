type DockerExecInspectResponse = {
  CanRemove: boolean;
  DetachKeys: string;
  ID: string;
  Running: boolean;
  ExitCode: number;
  ProcessConfig: {
    privileged: boolean;
    user: string;
    tty: boolean;
    entrypoint: string;
    arguments: string[];
  }
  OpenStdin: boolean;
  OpenStderr: boolean;
  OpenStdout: boolean;
  ContainerID: string;
  Pid: number;
}
