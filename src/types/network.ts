/**
 * Docker Network Query
 */

type DockerNetworkQuery = {
  filters?: {
    dangling?: boolean[];
    driver?: string[];
    id?: string[];
    label?: string[];
    name?: string[];
    scope?: "swarm"[] | "global"[] | "local"[];
    type?: "custom"[] | "builtin"[];
  }
}

/**
 * Docker Network Response
 */

type DockerNetworkResponse = DockerNetwork[]

type DockerNetwork = {
  Name: string
  Id: string
  Created: string
  Scope: string
  Driver: string
  EnableIPv4: boolean
  EnableIPv6: boolean
  IPAM: {
    Driver: string
    Config: {
      Subnet: string;
      IPRange: string;
      Gateway: string;
      AuxiliaryAddresses: {
        [key: string]: string;
      };
    }[];
    Options: {
      [key: string]: string;
    }
  }
  Internal: boolean
  Attachable: boolean
  Ingress: boolean
  ConfigForm: {
    Network: string;
  }
  ConfigOnly: boolean;
  Containers?: {
    [key: string]: {
      Name: string;
      EndpointID: string;
      MacAddress: string;
      IPv4Address: string;
      IPv6Address: string;
    }
  }
  Options: {
    [key: string]: string;
  }
  Labels: {
    [key: string]: string;
  }
  Peers: {
    Name: string;
    IP: string;
  }[];
}
