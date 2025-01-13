/**
 * Docker Image Build Prune Query
 */

export type DockerImageBuildPruneQuery = {
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

export type DockerImageBuildPruneResponse = {
  CachesDeleted: string[];
  SpaceReclaimed: number;
}