export type DockerContainerPruneQuery = {
  filters?: {
    until?: string;
    label?: string[];
  };
}

export type DockerContainerPruneResponse = {
  ContainersDeleted: string[];
  SpaceReclaimed: number;
}