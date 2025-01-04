export type ListConfigResponse = Config[]

export interface Config {
  ID: string
  Version: Version
  CreatedAt: string
  UpdatedAt: string
  Spec: Spec
}

export interface Version {
  Index: number
}

export interface Spec {
  Name: string
}
