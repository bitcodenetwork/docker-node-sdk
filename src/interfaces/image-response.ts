export type ImageResponse = Image[]

export interface Image {
  Id: string
  ParentId: string
  RepoTags: string[]
  RepoDigests: string[]
  Created: string
  Size: number
  SharedSize: number
  VirtualSize: number
  Labels: Labels
  Containers: number
  Manifests: Manifest[]
}

export interface Labels {
  "com.example.some-label": string
  "com.example.some-other-label": string
}

export interface Manifest {
  ID: string
  Descriptor: Descriptor
  Available: boolean
  Size: Size
  Kind: string
  ImageData: ImageData
  AttestationData: AttestationData
}

export interface Descriptor {
  mediaType: string
  digest: string
  size: number
}

export interface Size {
  Total: number
  Content: number
}

export interface ImageData {
  Platform: Platform
  Containers: string[]
  Size: Size2
}

export interface Platform {
  architecture: string
  os: string
  "os.version": string
  "os.features": string[]
  variant: string
}

export interface Size2 {
  Unpacked: number
}

export interface AttestationData {
  For: string
}
