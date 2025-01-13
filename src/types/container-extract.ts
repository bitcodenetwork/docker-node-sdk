/**
 * Docker Container Extract Query
 */

export type DockerContainerExtractQuery = {
  path: string;
  noOverwriteDirNonDir?: string;
  copyUIDGID?: string;
}