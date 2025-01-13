/**
 * Docker Volume Inspect Response
 */

export type DockerVolumeInspectResponse = {
  Name: string
  Driver: string
  Mountpoint: string
  CreatedAt?: string
  Status: {
    [key: string]: string;
  }
  Labels: {
    [key: string]: string;
  }
  Scope: string
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
  UsageData?: {
    Size: number;
    RefCount: number;
  }
}
