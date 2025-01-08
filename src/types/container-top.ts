/**
 * Container top prop
 */

type DockerContainerTopProp = {
  id: string;
  query?: DockerContainersTopQuery;
}

/**
 * Container top query
 */

type DockerContainersTopQuery = {
  ps_args?: string;
}

/**
 * Container top response
 */

type DockerContainerTopResponse = {
  Titles?: string[];
  Processes?: string[][];
}