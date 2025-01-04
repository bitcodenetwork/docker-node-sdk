export interface CreateSecretBody {
  Name: string
  Labels: Labels
  Data: string
  Driver: Driver
  Templating: Templating
}

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
  foo: string
}

export interface Driver {
  Name: string
  Options: Options
}

export interface Options {
  OptionA: string
  OptionB: string
}

export interface Templating {
  Name: string
  Options: Options2
}

export interface Options2 {
  OptionA: string
  OptionB: string
}
