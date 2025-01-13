type DockerVolumePruneQuery = {
  filters?: {
    label?: string[];
    all?: boolean;
  }
}

type DockerVolumePruneResponse = {
  VolumesDeleted: string[]
  SpaceReclaimed: number
}
