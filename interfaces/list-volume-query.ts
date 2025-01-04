export interface ListVolumeQuery {
  filters?: ListVolumeFilter;
}

export interface ListVolumeFilter {
  dangling?: boolean;
  driver?: string;
  label?: string;
  name?: string;
}