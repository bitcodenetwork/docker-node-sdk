export type DockerNodeUpdateQuery = {
  version: number;
}

export type DockerNodeUpdateBody = {
  Availability: string;
  Name: string;
  Role: string;
  Labels: {
    [key: string]: string;
  }
}
