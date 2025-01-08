export interface ContainerUpdateBody {
  BlkioWeight?: number
  CpuShares?: number
  CpuPeriod?: number
  CpuQuota?: number
  CpuRealtimePeriod?: number
  CpuRealtimeRuntime?: number
  CpusetCpus?: string
  CpusetMems?: string
  Memory?: number
  MemorySwap?: number
  MemoryReservation?: number
  RestartPolicy?: RestartPolicy
}

export interface RestartPolicy {
  MaximumRetryCount?: number
  Name?: string
}
