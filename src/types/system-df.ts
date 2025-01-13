type DockerSystemDfQuery = {
  type?: "containers" | "image" | "volume" | "build-cache";
}

type DockerSystemDfResponse = {
  LayersSize: number
  Images: {
    Id: string
    ParentId: string
    RepoTags: string[]
    RepoDigests: string[]
    Created: number
    Size: number
    SharedSize: number
    VirtualSize: number
    Labels: {
      [key: string]: string
    }
    Containers: number
    Manifest: {
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
      Kind: "image" | "attestation" | "unknown"
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
  }[]
  Containers: {
    Id: string
    Names: string[]
    Image: string
    ImageID: string
    Command: string
    Created: number
    Ports: {
      IP: string
      PrivatePort: number
      PublicPort: number
      type: "tcp" | "udp" | "sctp"
    }[]
    SizeRw: number
    SizeRootFs: number
    Labels: {
      [key: string]: string
    }
    State: string
    Status: string
    HostConfig: {
      NetworkMode: string
      Annotations: {
        [key: string]: string
      }
    }
    NetworkSettings: {
      Networks: {
        [key: string]: {
          IPAMConfig: {
            IPv4Address: string
            IPv6Address: string
            LinkLocalIPs: string[]
          }
          Links: string[]
          MacAddress: string
          Aliases: string[]
          DriverOpts: {
            [key: string]: string
          }
          NetworkID: string
          EndpointID: string
          Gateway: string
          IPAddress: string
          IPPrefixLen: number
          IPv6Gateway: string
          GlobalIPv6Address: string
          GlobalIPv6PrefixLen: number
          DNSNames: string[]
        }
      }
    }
    Mounts: {
      Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster"
      Name: string
      Source: string
      Destination: string
      Driver: string
      Mode: string
      RW: boolean
      Propagation: string
    }[]
  }[]
  Volumes: {
    Name: string;
    Driver: string;
    Mountpoint: string;
    CreatedAt?: string;
    Status?: {
      [key: string]: string;
    }
    Labels: {
      [key: string]: string;
    }
    Scope: string;
    ClusterVolume: {
      ID: string;
      Version: {
        Index: number;
      }
      CreatedAt: string;
      UpdatedAt: string;
      Spec: {
        Group: string;
        AccessMode: {
          Scope: string;
          Sharing: string;
          MountVolume: any;
          Secrets: {
            Key: string;
            Secret: string;
          }[]
          AccessibilityRequirements: {
            Requisite: {
              [key: string]: string;
            }[]
            Preferred: {
              [key: string]: string;
            }[]
          }
          CapacityRange: {
            RequiredBytes: number;
            LimitBytes: number;
          }
          Availability: string;
        }
      }
      Info: {
        CapacityBytes: number
        VolumeContext: {
          [key: string]: string;
        }
        VolumeID: string
        AccessibleTopology: {
          [key: string]: string;
        }[]
      }
      PublishStatus: {
        NodeID: string;
        State: string;
        PublishContext: {
          [key: string]: string;
        }
      }[]
    }
    Options: {
      [key: string]: string;
    }
    UsageData: {
      Size: number;
      RefCount: number;
    }
  }[]
  BuildCache: {
    ID: string
    Parent: string
    Parents: string[]
    Type: string
    Description: string
    InUse: boolean
    Shared: boolean
    Size: number
    CreatedAt: string
    LastUsedAt: string
    UsageCount: number
  }[]
}
