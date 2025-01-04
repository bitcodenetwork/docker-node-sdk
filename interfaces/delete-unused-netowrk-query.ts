export interface DeleteUnusedNetworkQuery {
  filters?: DeleteUnusedNetworkFilter;
}

export interface DeleteUnusedNetworkFilter {
  until?: string;
  label?: string[];
}