/**
 * Docker Image Create Query
 */

export type DockerImageCreateQuery = {
  fromImage?: string;
  fromSrc?: string;
  repo?: string;
  tag?: string;
  message?: string;
  changes?: string[];
  platform?: string;
}

/**
 * Docker Image Create Header
 */

export type DockerImageCreateHeader = {
  "X-Registry-Auth"?: string;
}
