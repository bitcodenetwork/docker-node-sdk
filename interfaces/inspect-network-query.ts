export interface InspectNetworkQuery {
  verbose?: boolean;
  scope?: "swarm" | "global" | "local";
}