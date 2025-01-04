export interface ListNetworkQuery {
  filters?: ListNetworkFilter;
}

export interface ListNetworkFilter {
  dangling?: boolean[];
  driver?: string[];
  id?: string[];
  label?: string[];
  name?: string[];
  scope?: "swarm"[] | "global"[] | "local"[];
  type?: "custom"[] | "builtin"[];
}