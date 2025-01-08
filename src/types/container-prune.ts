type DockerContainerPruneQuery = {
  filters?: {
    until?: string;
    label?: string[];
  };
}

type DockerContainerPruneResponse = {
  ContainersDeleted: string[];
  SpaceReclaimed: number;
}