export interface ListSecretQuery {
  filters?: ListSecretFilter;
}

export interface ListSecretFilter {
  id?: string[];
  labels?: string[];
  name?: string[];
  names?: string[];
}