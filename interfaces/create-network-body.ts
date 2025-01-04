export interface CreateNetworkBody {
  Name: string
  Driver: string
  Scope: string
  Internal: boolean
  Attachable: boolean
  Ingress: boolean
  ConfigOnly: boolean
  ConfigFrom: ConfigFrom
  IPAM: Ipam
  EnableIPv4: boolean
  EnableIPv6: boolean
  Options: Options2
  Labels: Labels
}

export interface ConfigFrom {
  Network: string
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
