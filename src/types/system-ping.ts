export type DockerSystemPingResponse = {
  "API-Version": string;
  "Builder-Version": string;
  "Docker-Experimental": boolean;
  Swarm: "inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager";
  "Cache-Control": "no-cache" | "no-store" | "must-revalidate"
  Pragma: string;
}