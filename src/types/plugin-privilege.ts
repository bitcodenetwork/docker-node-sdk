type DockerPluginPrivilegeQuery = {
  remote: string;
}

type DockerPluginPrivilegeResponse = DockerPluginPrivilege[]

type DockerPluginPrivilege = {
  Name: string
  Description: string
  Value: string[]
}
