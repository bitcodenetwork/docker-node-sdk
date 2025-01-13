export type DockerNodeQuery = {
  filters?: {
    id?: string;
    label?: string;
    membership?: "accepted" | "pending";
    name?: string;
    "node.label"?: string;
    role?: "manager" | "worker";
  };
}

export type DockerNodeResponse = DockerNode[]

export type DockerNode = {
  ID: string
  Version: {
    Index: number
  }
  CreatedAt: string
  UpdatedAt: string
  Spec: {
    Name: string;
    Labels: {
      [key: string]: string;
    }
    Role: string;
    Availability: string;
  }
  Description: {
    Hostname: string
    Platform: {
      Architecture: string
      OS: string
    }
    Resources: {
      NanoCPUs: number
      MemoryBytes: number
      GenericResources: {
        DiscreteResourceSpec?: {
          Kind: string
          Value: number
        }
        NamedResourceSpec?: {
          Kind: string
          Value: number
        }
      }[]
    }
    Engine: {
      EngineVersion: string
      Labels: {
        [key: string]: string
      }
      Plugins: {
        Type: string
        Name: string
      }[]
    }
    TLSInfo: {
      TrustRoot: string
      CertIssuerSubject: string
      CertIssuerPublicKey: string
    }
  }
  Status: {
    State: string
    Message: string
    Addr: string
  }
  ManagerStatus: {
    Leader: boolean
    Reachability: string
    Addr: string
  }
}
