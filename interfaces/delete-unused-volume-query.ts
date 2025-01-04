export interface DeleteUnusedVolumeQuery {
  filters?: DeleteUnusedVolumeFilter;
}

export interface DeleteUnusedVolumeFilter {
  label?: string[];
  all?: boolean;
}