/**
 * Docker container prop
 */

export type DockerContainerProp = {
  query?: DockerContainerQuery;
}

/**
 * Docker container query
 */

export type DockerContainerQuery = {
  all?: boolean;
  limit?: number;
  size?: boolean;
  filters?: {
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
  };
}

/**
 * Docker container response
 */

export type DockerContainerResponse = DockerContainer[];

export type DockerContainer = {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  State: string;
  Status: string;
  Ports: {
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
  }[];
  Labels: { [key: string]: string }
  SizeRw: number
  SizeRootFs: number
  HostConfig: {
    NetworkMode: string
    Annotations: { [key: string]: string } | null
  }
  NetworkSettings: {
    Networks: {
      [key: string]: {
        IPAMConfig: {
          IPv4Address: string;
          IPv6Address: string;
          LinkLocalIPs: string[]
        };
        Links: string[];
        MacAddress: string;
        Aliases: string[];
        DriverOpts: { [key: string]: string };
        NetworkID: string;
        EndpointID: string;
        Gateway: string;
        IPAddress: string;
        IPPrefixLen: number;
        IPv6Gateway: string;
        GlobalIPv6Address: string;
        GlobalIPv6PrefixLen: number;
        DNSNames: string[];
      }
    }
  }
  Mounts: {
    Type: string;
    Name: string;
    Source: string;
    Destination: string;
    Driver: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }[]
}
