export interface SecretQuery {
  filters?: SecretFilter;
}

export interface SecretFilter {
  id?: string[];
  labels?: string[];
  name?: string[];
  names?: string[];
}