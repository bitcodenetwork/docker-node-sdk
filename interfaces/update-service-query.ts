export interface UpdateServiceQuery {
  version: number;
  registryAuthFrom?: "spec" | "previous-spec";
  rollback?: any;
}