export interface NetworkInspectResponse {
  Name: string
  Id: string
  Created: string
  Scope: string
  Driver: string
  EnableIPv4: boolean
  EnableIPv6: boolean
  IPAM: Ipam
  Internal: boolean
  Attachable: boolean
  Ingress: boolean
  ConfigFrom: ConfigFrom
  ConfigOnly: boolean
  Containers: Containers
  Options: Options2
  Labels: Labels
  Peers: Peer[]
}

export interface Ipam {
  Driver: string
  Config: Config[]
  Options: Options
}

export interface Config {
  Subnet: string
  IPRange: string
  Gateway: string
  AuxiliaryAddresses: AuxiliaryAddresses
}

export interface AuxiliaryAddresses {
  property1: string
  property2: string
}

export interface Options {
  foo: string
}

export interface ConfigFrom {
  Network: string
}

export interface Containers {
  "19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c": N19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c
}

export interface N19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c {
  Name: string
  EndpointID: string
  MacAddress: string
  IPv4Address: string
  IPv6Address: string
}

export interface Options2 {
  "com.docker.network.bridge.default_bridge": string
  "com.docker.network.bridge.enable_icc": string
  "com.docker.network.bridge.enable_ip_masquerade": string
  "com.docker.network.bridge.host_binding_ipv4": string
  "com.docker.network.bridge.name": string
  "com.docker.network.driver.mtu": string
}

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}

export interface Peer {
  Name: string
  IP: string
}
