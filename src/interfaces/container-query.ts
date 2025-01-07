export interface ContainerQuery {
  all?: boolean;
  limit?: number;
  size?: boolean;
  filters?: ContainerFilters;
}

export interface ContainerFilters {
  ancestor?: string[];
  before?: string[];
  expose?: string[];
  exited?: number[];
  health?: "starting"[] | "healthy"[] | "unhealthy"[] | "none"[];
  id?: string[];
  isolation?: "default"[] | "process"[] | "hyperv"[];
  "is-task"?: boolean[];
  label?: string[];
  name?: string[];
  network?: string[];
  publish?: string[];
  since?: string[];
  status?: "created"[] | "restarting"[] | "running"[] | "removing"[] | "paused"[] | "exited"[] | "dead"[];
  volume?: string[];
}