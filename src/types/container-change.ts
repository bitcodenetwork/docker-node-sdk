/**
 * Docker container change prop
 */

type DockerContainerChangeProp = {
  id: string;
}

/**
 * Docker container change response
 */

type DockerContainerChangeResponse = DockerContainerChange[];

type DockerContainerChange = {
  Path: string
  Kind: number
}
