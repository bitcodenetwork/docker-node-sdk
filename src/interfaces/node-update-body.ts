export interface NodeUpdateBody {
  Availability: string
  Name: string
  Role: string
  Labels: Labels
}

export interface Labels {
  foo: string
}
