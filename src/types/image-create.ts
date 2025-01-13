/**
 * Docker Image Create Query
 */

type DockerImageCreateQuery = {
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

type DockerImageCreateHeader = {
  "X-Registry-Auth"?: string;
}
