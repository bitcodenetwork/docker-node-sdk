export interface ListConfigQuery {
  filters?: ListConfigFilter;
}

export interface ListConfigFilter {
  id?: string[];
  label?: string[];
  name?: string[];
  names?: string[];
}