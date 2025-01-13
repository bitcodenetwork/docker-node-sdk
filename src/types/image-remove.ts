/**
 * Docker Image Remove Query
 */

export type DockerImageRemoveQuery = {
  force?: boolean;
  noprune?: boolean;
}

/**
 * Docker Image Remove Response
 */

export type DockerImageRemoveResponse = {
  Untagged?: string[];
  Deleted?: string[];
}