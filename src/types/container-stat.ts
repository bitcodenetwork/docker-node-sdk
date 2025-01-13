/**
 * Docker container stat query
 */

export type DockerContainerStatQuery = {
  stream?: boolean;
  "one-shot"?: boolean;
}

/**
 * Docker container stat response
 */

export type DockerContainerStatResponse = {
  read: string
  pids_stats: {
    current: number;
  }
  networks: {
    [key: string]: {
      rx_bytes: number;
      rx_dropped: number;
      rx_errors: number;
      rx_packets: number;
      tx_bytes: number;
      tx_dropped: number;
      tx_errors: number;
      tx_packets: number;
    }
  }
  memory_stats: {
    stats: {
      total_pgmajfault: number;
      cache: number;
      mapped_file: number;
      total_inactive_file: number;
      pgpgout: number;
      rss: number;
      total_mapped_file: number;
      writeback: number;
      unevictable: number;
      pgpgin: number;
      total_unevictable: number;
      pgmajfault: number;
      total_rss: number;
      total_rss_huge: number;
      total_writeback: number;
      total_inactive_anon: number;
      rss_huge: number;
      hierarchical_memory_limit: number;
      total_pgfault: number;
      total_active_file: number;
      active_anon: number;
      total_active_anon: number;
      total_pgpgout: number;
      total_cache: number;
      inactive_anon: number;
      active_file: number;
      pgfault: number;
      inactive_file: number;
      total_pgpgin: number;
    }
    max_usage: number;
    usage: number;
    failcnt: number;
    limit: number;
  }
  blkio_stats: {};
  cpu_stats: {
    cpu_usage: {
      percpu_usage: number[];
      usage_in_usermode: number;
      total_usage: number;
      usage_in_kernelmode: number;
    }
    system_cpu_usage: number;
    online_cpus: number;
    throttling_data: {
      periods: number;
      throttled_periods: number;
      throttled_time: number;
    }
  }
  precpu_stats: {
    cpu_usage: {
      percpu_usage: number[];
      usage_in_usermode: number;
      total_usage: number;
      usage_in_kernelmode: number;
    }
    system_cpu_usage: number;
    online_cpus: number;
    throttling_data: {
      periods: number;
      throttled_periods: number;
      throttled_time: number;
    }
  }
}
