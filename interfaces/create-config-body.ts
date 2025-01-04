export interface CreateConfigBody {
  Name: string
  Labels: Labels
  Data: string
  Templating: Templating
}

export interface Labels {
  property1: string
  property2: string
  foo: string
}

export interface Templating {
  Name: string
  Options: Options
}

export interface Options {
  OptionA: string
  OptionB: string
}
