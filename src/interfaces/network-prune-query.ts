export interface NetworkPruneQuery {
  filters?: NetworkPruneFilter;
}

export interface NetworkPruneFilter {
  until?: string;
  label?: string[];
}