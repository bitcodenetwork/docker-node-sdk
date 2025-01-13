type DockerSecretQuery = {
  filters?: {
    id?: string[];
    labels?: string[];
    name?: string[];
    names?: string[];
  };
}

type DockerSecretResponse = DockerListSecret[]

type DockerListSecret = {
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
    Driver?: {
      Name: string
      Options: {
        [key: string]: string
      }
    }
    Templating: {
      Name: string
      Options?: {
        [key: string]: string
      }
    }
  }
}
