export type SecretResponse = ListSecret[]

export interface ListSecret {
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
  Labels: Labels
  Driver?: Driver
}

export interface Labels {
  "some.label"?: string
  foo?: string
}

export interface Driver {
  Name: string
  Options: Options
}

export interface Options {
  OptionA: string
  OptionB: string
}
