export interface ConnectNetworkBody {
  Container?: string
  EndpointConfig?: EndpointConfig
}

export interface EndpointConfig {
  IPAMConfig: Ipamconfig;
  Links: string[];
  MacAddress: string;
  Aliases: string[];
  DriverOpts: string[];
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

export interface Ipamconfig {
  IPv4Address: string;
  IPv6Address: string;
  LinkLocalIPs: string[];
}
