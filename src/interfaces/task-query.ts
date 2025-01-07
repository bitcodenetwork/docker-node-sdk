export interface TaskQuery {
  filters?: TaskFilter;
}

export interface TaskFilter {
  "desired-state"?: "running"[] | "shutdown"[] | "accepted"[];
  id?: string[];
  label?: string[];
  name?: string[];
  node?: string[];
  service?: string[];
}