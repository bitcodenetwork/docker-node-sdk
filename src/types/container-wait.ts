export type DockerContainerWaitQuery = {
  condition?: "not-running" | "next-exit" | "removed";
}

export type DockerContainerWaitResponse = {
  StatusCode: number
  Error: {
    Message: string
  }
}
