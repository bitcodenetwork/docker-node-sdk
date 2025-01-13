type DockerDistributionResponse = {
  Descriptor: {
    mediaType: string
    digest: string
    size: number
  }
  Platforms: {
    architecture: string
    os: string
    "os.version": string
    "os.features": string[]
    variant: string
  }[]
}
