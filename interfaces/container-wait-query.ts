export interface ContainerWaitQuery {
  condition?: "not-running" | "next-exit" | "removed";
}