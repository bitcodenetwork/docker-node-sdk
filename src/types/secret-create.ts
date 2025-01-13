export type DockerSecretCreateBody = {
  Name: string
  Labels: {
    [key: string]: string
  }
  Data: string
  Driver: {
    Name: string
    Options?: {
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

export type DockerSecretCreateResponse = {
  Id: string
}
