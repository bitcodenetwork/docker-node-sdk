/**
 * Docker Container Extract Query
 */

type DockerContainerExtractQuery = {
  path: string;
  noOverwriteDirNonDir?: string;
  copyUIDGID?: string;
}