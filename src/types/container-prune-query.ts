export interface ContainerPruneQuery {
  filters?: ContainerPruneFilter;
}

export interface ContainerPruneFilter {
  until?: string;
  label?: string[];
}