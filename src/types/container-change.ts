/**
 * Docker container change prop
 */

export type DockerContainerChangeProp = {
  id: string;
}

/**
 * Docker container change response
 */

export type DockerContainerChangeResponse = DockerContainerChange[];

export type DockerContainerChange = {
  Path: string
  Kind: number
}
