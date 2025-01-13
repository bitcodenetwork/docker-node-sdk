/**
 * Docker Image Prune Query
 */

type DockerImagesPruneQuery = {
  filters?: string;
}

/**
 * Docker Image Prune Response
 */

type DockerImagesPruneResponse = {
  ImagesDeleted: {
    Untagged: string;
    Deleted: string;
  }[];
  SpaceReclaimed: number;
}
