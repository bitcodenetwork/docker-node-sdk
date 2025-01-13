type DockerConfigQuery = {
  filters?: {
    id?: string[];
    label?: string[];
    name?: string[];
    names?: string[];
  };
}

type DockerConfigResponse = DockerConfig[]

type DockerConfig = {
  ID: string
  Version: {
    Index: number
  }
  CreatedAt: string
  UpdatedAt: string
  Spec: {
    Name: string
    Labels: {
      [key: string]: string
    }
    Data: string
    Templating: {
      Name: string
      Options?: {
        [key: string]: string
      }
    }
  }
}
