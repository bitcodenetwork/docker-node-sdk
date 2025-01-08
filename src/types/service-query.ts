export interface ServiceQuery {
  filters?: ListServiceFilter;
  status?: boolean;
}

export interface ListServiceFilter {
  id?: string[];
  labels?: string[];
  mode?: "replicated"[] | "global"[];
  name?: string[];
}