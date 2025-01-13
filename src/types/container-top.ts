/**
 * Container top prop
 */

export type DockerContainerTopProp = {
  id: string;
  query?: DockerContainersTopQuery;
}

/**
 * Container top query
 */

export type DockerContainersTopQuery = {
  ps_args?: string;
}

/**
 * Container top response
 */

export type DockerContainerTopResponse = {
  Titles?: string[];
  Processes?: string[][];
}