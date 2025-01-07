export interface ServiceUpdateQuery {
  version: number;
  registryAuthFrom?: "spec" | "previous-spec";
  rollback?: any;
}