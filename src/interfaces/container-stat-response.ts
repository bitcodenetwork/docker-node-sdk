export interface ContainerStatResponse {
  read: string
  pids_stats: PidsStats
  networks: Networks
  memory_stats: MemoryStats
  blkio_stats: BlkioStats
  cpu_stats: CpuStats
  precpu_stats: PrecpuStats
}

export interface PidsStats {
  current: number
}

export interface Networks {
  eth0: Eth0
  eth5: Eth5
}

export interface Eth0 {
  rx_bytes: number
  rx_dropped: number
  rx_errors: number
  rx_packets: number
  tx_bytes: number
  tx_dropped: number
  tx_errors: number
  tx_packets: number
}

export interface Eth5 {
  rx_bytes: number
  rx_dropped: number
  rx_errors: number
  rx_packets: number
  tx_bytes: number
  tx_dropped: number
  tx_errors: number
  tx_packets: number
}

export interface MemoryStats {
  stats: Stats
  max_usage: number
  usage: number
  failcnt: number
  limit: number
}

export interface Stats {
  total_pgmajfault: number
  cache: number
  mapped_file: number
  total_inactive_file: number
  pgpgout: number
  rss: number
  total_mapped_file: number
  writeback: number
  unevictable: number
  pgpgin: number
  total_unevictable: number
  pgmajfault: number
  total_rss: number
  total_rss_huge: number
  total_writeback: number
  total_inactive_anon: number
  rss_huge: number
  hierarchical_memory_limit: number
  total_pgfault: number
  total_active_file: number
  active_anon: number
  total_active_anon: number
  total_pgpgout: number
  total_cache: number
  inactive_anon: number
  active_file: number
  pgfault: number
  inactive_file: number
  total_pgpgin: number
}

export interface BlkioStats { }

export interface CpuStats {
  cpu_usage: CpuUsage
  system_cpu_usage: number
  online_cpus: number
  throttling_data: ThrottlingData
}

export interface CpuUsage {
  percpu_usage: number[]
  usage_in_usermode: number
  total_usage: number
  usage_in_kernelmode: number
}

export interface ThrottlingData {
  periods: number
  throttled_periods: number
  throttled_time: number
}

export interface PrecpuStats {
  cpu_usage: CpuUsage2
  system_cpu_usage: number
  online_cpus: number
  throttling_data: ThrottlingData2
}

export interface CpuUsage2 {
  percpu_usage: number[]
  usage_in_usermode: number
  total_usage: number
  usage_in_kernelmode: number
}

export interface ThrottlingData2 {
  periods: number
  throttled_periods: number
  throttled_time: number
}
