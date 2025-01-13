/**
 * Docker Image Prune Query
 */

export type DockerImagesPruneQuery = {
  filters?: string;
}

/**
 * Docker Image Prune Response
 */

export type DockerImagesPruneResponse = {
  ImagesDeleted: {
    Untagged: string;
    Deleted: string;
  }[];
  SpaceReclaimed: number;
}
