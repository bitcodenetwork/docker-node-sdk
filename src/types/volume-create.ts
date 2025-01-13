/**
 * Docker Volume Create Body
 */

type DockerVolumeCreateBody = {
  Name: string;
  Driver: string;
  DriverOpts: {
    [key: string]: string;
  }
  Labels: {
    [key: string]: string;
  }
  ClusterVolumeSpec: {
    Group: string;
    AccessMode: {
      Scope: string;
      Sharing: string;
      MountVolume: any;
      Secrets: {
        Key: string
        Secret: string
      }[];
      AccessibilityRequirements: {
        Requisite: {
          [key: string]: string;
        }[]
        Preferred: {
          [key: string]: string;
        }[]
      };
      CapacityRange: {
        RequiredBytes: number
        LimitBytes: number
      };
      Availability: string;
    }
  }
}

/**
 * Docker Volume Create Response
 */

type DockerVolumeCreateResponse = {
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
  UsageData: {
    Size: number;
    RefCount: number;
  }
}
