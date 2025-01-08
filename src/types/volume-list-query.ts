export interface VolumeListQuery {
  filters?: ListVolumeFilter;
}

export interface ListVolumeFilter {
  dangling?: boolean;
  driver?: string;
  label?: string;
  name?: string;
}