export interface ListTaskQuery {
  filters?: ListTaskFilter;
}

export interface ListTaskFilter {
  "desired-state"?: "running"[] | "shutdown"[] | "accepted"[];
  id?: string[];
  label?: string[];
  name?: string[];
  node?: string[];
  service?: string[];
}