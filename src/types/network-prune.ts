/**
 * Docker Network Prune Query
 */

export type DockerNetworkPruneQuery = {
  filters?: {
    until?: string;
    label?: string[];
  };
}

/**
 * Docker Network Prune Response
 */

export type DockerNetworkPruneResponse = {
  NetworksDeleted: string[]
}
