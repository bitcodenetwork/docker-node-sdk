export interface VolumePruneQuery {
  filters?: DeleteUnusedVolumeFilter;
}

export interface DeleteUnusedVolumeFilter {
  label?: string[];
  all?: boolean;
}