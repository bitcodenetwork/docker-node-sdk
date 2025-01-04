export interface EventQuery {
  since?: string;
  until?: string;
  filters?: EventFilter;
}

export interface EventFilter {
  config?: string[];
  container?: string[];
  daemon?: string[];
  event?: string[];
  image?: string[];
  label?: string[];
  network?: string[];
  node?: string[];
  plugin?: string[];
  scope?: "swarm"[] | "local"[];
  service?: string[];
  type?: "container"[] | "image"[] | "volume"[] | "network"[] | "daemon"[] | "plugin"[] | "node"[] | "service"[] | "secret"[] | "config"[];
  volume?: string[];
}