type DockerPluginUpgradeHeader = {
  "X-Registry-Auth": string;
}

type DockerPluginUpgradeQuery = {
  remote: string;
}

type DockerPluginUpgradeBody = {
  Name: string
  Description: string
  Value: string[]
}
