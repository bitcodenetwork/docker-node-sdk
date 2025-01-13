/**
 * Docker Image Remove Query
 */

type DockerImageRemoveQuery = {
  force?: boolean;
  noprune?: boolean;
}

/**
 * Docker Image Remove Response
 */

type DockerImageRemoveResponse = {
  Untagged?: string[];
  Deleted?: string[];
}