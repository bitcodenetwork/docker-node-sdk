/**
 * Docker Container Update Body
 */

export type DockerContainerUpdateBody = {
  CpuShares: number;
  Memory: number;
  CgroupParent: string;
  BlkioWeight: number;
  BlkioWeightDevice: [{
    "Path": string;
    "Weight": number;
  }];
  BlkioDeviceReadBps: [{
    "Path": string;
    "Rate": number;
  }];
  BlkioDeviceWriteBps: [{
    "Path": string;
    "Rate": number;
  }];
  BlkioDeviceReadIOps: [{
    "Path": string;
    "Rate": number;
  }];
  BlkioDeviceWriteIOps: [{
    "Path": string;
    "Rate": number;
  }];
  CpuPeriod: number;
  CpuQuota: number;
  CpuRealtimePeriod: number;
  CpuRealtimeRuntime: number;
  CpusetCpus: string;
  CpusetMems: string;
  Devices: {
    PathOnHost: string;
    PathInContainer: string;
    CgroupPermissions: string;
  }[];
  DeviceCgroupRules: string[];
  DeviceRequests: {
    Driver: string;
    Count: number;
    DeviceIDs: string[];
    Capabilities: string[][];
    Options: {
      [key: string]: string;
    };
  }[];
  KernelMemoryTCP: number;
  MemoryReservation: number;
  MemorySwap: number;
  MemorySwappiness: number;
  NanoCpus: number;
  OomKillDisable: boolean;
  Init?: boolean;
  PidsLimit?: number;
  Ulimits?: {
    Name: string;
    Soft: number;
    Hard: number;
  }[];
  CpuCount: number;
  CpuPercent: number;
  IOMaximumIOps: number;
  IOMaximumBandwidth: number;
  RestartPolicy: {
    Name: string;
    MaximumRetryCount: number;
  };
}

/**
 * Container Update Response
 */

export type DockerContainerUpdateResponse = {
  Warnings: string[]
}
