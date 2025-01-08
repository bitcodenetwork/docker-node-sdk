export interface NetworkQuery {
  filters?: NetworkFilter;
}

export interface NetworkFilter {
  dangling?: boolean[];
  driver?: string[];
  id?: string[];
  label?: string[];
  name?: string[];
  scope?: "swarm"[] | "global"[] | "local"[];
  type?: "custom"[] | "builtin"[];
}