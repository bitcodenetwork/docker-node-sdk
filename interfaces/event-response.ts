export interface EventResponse {
  Type: string
  Action: string
  Actor: Actor
  scope: string
  time: number
  timeNano: number
}

export interface Actor {
  ID: string
  Attributes: Attributes
}

export interface Attributes {
  "com.example.some-label": string
  image: string
  name: string
}
