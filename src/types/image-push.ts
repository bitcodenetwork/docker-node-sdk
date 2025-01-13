/**
 * Docker Image Push Query
 */

export type DockerImagePushQuery = {
  tag?: string;
  platform?: string;
}

/**
 * Docker Image Push Header
 */

export type DockerImagePushHeader = {
  "X-Registry-Auth": string;
}