/**
 * Docker Network Create Body
 */

export type DockerNetworkCreateBody = {
  Name: string;
  Driver?: string;
  Scope?: string;
  Internal?: boolean;
  Attachable?: boolean;
  Ingress?: boolean;
  ConfigOnly?: boolean;
  ConfigFrom?: {
    Network: string;
  }
  IPAM?: {
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
  EnableIPv4?: boolean;
  EnableIPv6?: boolean;
  Options?: {
    [key: string]: string;
  }
  Labels?: {
    [key: string]: string;
  }
}

/**
 * Docker Network Create Response
 */

export type DockerNetworkCreateResponse = {
  Id: string;
  Warning: string;
}