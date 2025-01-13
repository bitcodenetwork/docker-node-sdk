export type DockerPluginPrivilegeQuery = {
  remote: string;
}

export type DockerPluginPrivilegeResponse = DockerPluginPrivilege[]

export type DockerPluginPrivilege = {
  Name: string
  Description: string
  Value: string[]
}
