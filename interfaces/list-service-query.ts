export interface ListServiceQuery {
  filters?: ListServiceFilter;
  status?: boolean;
}

export interface ListServiceFilter {
  id?: string[];
  labels?: string[];
  mode?: "replicated"[] | "global"[];
  name?: string[];
}