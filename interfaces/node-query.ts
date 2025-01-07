export interface NodeQuery {
  filters?: ListNodeFilter;
}

export interface ListNodeFilter {
  id?: string;
  label?: string;
  membership?: "accepted" | "pending";
  name?: string;
  "node.label"?: string;
  role?: "manager" | "worker";
}