type DockerPluginPullHeader = {
  "X-Registry-Auth": string;
}

type DockerPluginPullQuery = {
  remote: string;
  name?: string;
}

type DockerPluginPullBody = {
  Name: string;
  Description: string;
  Value: string[];
}
