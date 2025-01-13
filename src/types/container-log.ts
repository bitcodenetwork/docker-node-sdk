/**
 * Docker container log prop
 */

export type DockerContainerLogProp = {
  id: string;
  query?: DockerContainerLogQuery
}

/**
 * Docker container log query
 */

export type DockerContainerLogQuery = {
  follow?: boolean;
  stdout?: boolean;
  stderr?: boolean;
  since?: number;
  until?: number;
  timestamps?: boolean;
  tail?: string;
}