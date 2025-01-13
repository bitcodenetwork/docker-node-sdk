type DockerNodeUpdateQuery = {
  version: number;
}

type DockerNodeUpdateBody = {
  Availability: string;
  Name: string;
  Role: string;
  Labels: {
    [key: string]: string;
  }
}
