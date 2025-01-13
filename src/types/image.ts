/**
 * Docker Image Query
 */

type DockerImageQuery = {
  all?: boolean;
  filters?: {
    before?: string[];
    dangling?: boolean[];
    label?: string[];
    reference?: string[];
    since?: string[];
    until?: string[];
  };
  "shared-size"?: boolean;
  digests?: boolean;
  manifests?: boolean;
}

/**
 * Docker Image Response
 */

type DockerImageResponse = DockerImage[]

type DockerImage = {
  Id: string
  ParentId: string
  RepoTags: string[]
  RepoDigests: string[]
  Created: number
  Size: number
  SharedSize: number
  VirtualSize: number
  Labels: {
    [key: string]: string;
  }
  Containers: number
  Manifests: {
    ID: string
    Descriptor: {
      mediaType: string
      digest: string
      size: number
    }
    Available: boolean
    Size: {
      Total: number
      Content: number
    }
    Kind: "image" | "attestation" | "unknown";
    ImageData: {
      Platform: {
        architecture: string
        os: string
        "os.version": string
        "os.features": string[]
        variant: string
      }
      Containers: string[]
      Size: {
        Unpacked: number
      }
    }
    AttestationData: {
      For: string
    }
  }[]
}
