/**
 * Docker Network Connect Body
 */

export type DockerNetworkConnectBody = {
  Container?: string
  EndpointConfig?: {
    IPAMConfig: {
      IPv4Address: string;
      IPv6Address: string;
      LinkLocalIPs: string[];
    };
    Links: string[];
    MacAddress: string;
    Aliases: string[];
    DriverOpts: {
      [key: string]: string;
    };
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
