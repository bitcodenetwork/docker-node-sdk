export interface WaitContainerQuery {
  condition?: "not-running" | "next-exit" | "removed";
}