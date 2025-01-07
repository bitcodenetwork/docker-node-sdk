export interface NetworkInspectQuery {
  verbose?: boolean;
  scope?: "swarm" | "global" | "local";
}