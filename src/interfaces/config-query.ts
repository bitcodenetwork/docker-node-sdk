export interface ConfigQuery {
  filters?: ConfigFilter;
}

export interface ConfigFilter {
  id?: string[];
  label?: string[];
  name?: string[];
  names?: string[];
}