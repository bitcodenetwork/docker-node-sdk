/**
 * Docker Image Build Query
 */

export type DockerImageBuildQuery = {
  dockerfile?: string;
  t?: string;
  extrahosts?: string;
  remote?: string;
  q?: boolean;
  nocache?: boolean;
  cachefrom?: string;
  pull?: string;
  rm?: boolean;
  forcerm?: boolean;
  memory?: number;
  memswap?: number;
  cpushares?: number;
  cpusetcpus?: string;
  cpuperiod?: number;
  cpuquota?: number;
  buildargs?: string;
  shmsize?: number;
  squash?: boolean;
  labels?: string;
  networkmode?: string;
  platform?: string;
  target?: string;
  outputs?: string;
  version?: string;
}

/**
 * Docker Image Build Header
 */

export type DockerImageBuildHeader = {
  "Content-type"?: string;
  "X-Registry-Config"?: string;
}