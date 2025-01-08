/**
 * Docker container log prop
 */

type DockerContainerLogProp = {
  id: string;
  query?: DockerContainerLogQuery
}

/**
 * Docker container log query
 */

type DockerContainerLogQuery = {
  follow?: boolean;
  stdout?: boolean;
  stderr?: boolean;
  since?: number;
  until?: number;
  timestamps?: boolean;
  tail?: string;
}