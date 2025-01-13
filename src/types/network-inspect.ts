/**
 * Docker Network Inspect Query
 */

type DockerNetworkInspectQuery = {
  verbose?: boolean;
  scope?: "swarm" | "global" | "local";
}

/**
 * Docker Network Inspect Response
 */

type DockerNetworkInspectResponse = {
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
  ConfigFrom: {
    Network: string;
  }
  ConfigOnly: boolean
  Containers: {
    [key: string]: {
      Name: string;
      EndpointID: string;
      MacAddress: string;
      IPv4Address: string;
      IPv6Address: string;
    }
  }
  Options: {
    [key: string]: string
  }
  Labels: {
    [key: string]: string
  }
  Peers: {
    Name: string;
    IP: string;
  }[];
}
