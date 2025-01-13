type DockerSystemEventQuery = {
  since?: string;
  until?: string;
  filters?: {
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
    secret?: string;
    service?: string[];
    type?: "container"[] | "image"[] | "volume"[] | "network"[] | "daemon"[] | "plugin"[] | "node"[] | "service"[] | "secret"[] | "config"[];
    volume?: string[];
  };
}

type DockerSystemEventResponse = {
  Type: string
  Action: string
  Actor: {
    ID: string
    Attributes: {
      [key: string]: string
    }
  }
  scope: string
  time: number
  timeNano: number
}
