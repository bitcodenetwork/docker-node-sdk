/**
 * Docker Network Prune Query
 */

type DockerNetworkPruneQuery = {
  filters?: {
    until?: string;
    label?: string[];
  };
}

/**
 * Docker Network Prune Response
 */

type DockerNetworkPruneResponse = {
  NetworksDeleted: string[]
}
