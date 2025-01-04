export type ListNetworkResponse = Network[]

export interface Network {
  Name: string
  Id: string
  Created: string
  Scope: string
  Driver: string
  EnableIPv4: boolean
  EnableIPv6: boolean
  Internal: boolean
  Attachable: boolean
  Ingress: boolean
  IPAM: Ipam
  Options: Options
  Containers?: Containers
}

export interface Ipam {
  Driver: string
  Config: Config[]
}

export interface Config {
  Subnet: string
}

export interface Options {
  "com.docker.network.bridge.default_bridge"?: string
  "com.docker.network.bridge.enable_icc"?: string
  "com.docker.network.bridge.enable_ip_masquerade"?: string
  "com.docker.network.bridge.host_binding_ipv4"?: string
  "com.docker.network.bridge.name"?: string
  "com.docker.network.driver.mtu"?: string
}

export interface Containers { }
