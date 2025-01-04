export interface UpdateNodeBody {
  Availability: string
  Name: string
  Role: string
  Labels: Labels
}

export interface Labels {
  foo: string
}
