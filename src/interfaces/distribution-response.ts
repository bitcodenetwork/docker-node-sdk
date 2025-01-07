export interface DistributionResponse {
  Descriptor: Descriptor
  Platforms: Platform[]
}

export interface Descriptor {
  mediaType: string
  digest: string
  size: number
}

export interface Platform {
  architecture: string
  os: string
  "os.version": string
  "os.features": string[]
  variant: string
}
