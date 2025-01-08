export interface ImageQuery {
  all?: boolean;
  "shared-size"?: boolean;
  digests?: boolean;
  manifests?: boolean;
  filters?: ImageFilters;
}

export interface ImageFilters {
  before?: string;
  dangling?: boolean;
  label?: string;
  reference?: string;
  since?: string;
  until?: string;
}