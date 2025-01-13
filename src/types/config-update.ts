export type DockerConfigUpdateQuery = {
  version: string;
}

export type DockerConfigUpdateBody = {
  Name: string
  Labels: {
    [key: string]: string
  }
  Data: string
  Templating: {
    Name: string
    Options: {
      [key: string]: string
    }
  }
}
