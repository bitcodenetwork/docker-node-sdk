export type DockerVolumePruneQuery = {
  filters?: {
    label?: string[];
    all?: boolean;
  }
}

export type DockerVolumePruneResponse = {
  VolumesDeleted: string[]
  SpaceReclaimed: number
}
