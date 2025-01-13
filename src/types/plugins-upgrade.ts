export type DockerPluginUpgradeHeader = {
  "X-Registry-Auth": string;
}

export type DockerPluginUpgradeQuery = {
  remote: string;
}

export type DockerPluginUpgradeBody = {
  Name: string
  Description: string
  Value: string[]
}
