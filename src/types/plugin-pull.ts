export type DockerPluginPullHeader = {
  "X-Registry-Auth": string;
}

export type DockerPluginPullQuery = {
  remote: string;
  name?: string;
}

export type DockerPluginPullBody = {
  Name: string;
  Description: string;
  Value: string[];
}
