type DockerContainerWaitQuery = {
  condition?: "not-running" | "next-exit" | "removed";
}

type DockerContainerWaitResponse = {
  StatusCode: number
  Error: {
    Message: string
  }
}
