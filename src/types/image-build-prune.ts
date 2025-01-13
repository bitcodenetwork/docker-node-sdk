/**
 * Docker Image Build Prune Query
 */

type DockerImageBuildPruneQuery = {
  "keep-storage": number;
  all: boolean;
  filters: {
    until?: string[];
    id?: string[];
    parent?: string[];
    type?: string[];
    direction?: string[];
    inuse?: boolean[];
    shared?: boolean[];
    private?: boolean[];
  }
}

/**
 * Docker Image Build Prune Response
 */

type DockerImageBuildPruneResponse = {
  CachesDeleted: string[];
  SpaceReclaimed: number;
}