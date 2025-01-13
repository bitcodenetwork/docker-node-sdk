/**
 * Docker Image Push Query
 */

type DockerImagePushQuery = {
  tag?: string;
  platform?: string;
}

/**
 * Docker Image Push Header
 */

type DockerImagePushHeader = {
  "X-Registry-Auth": string;
}