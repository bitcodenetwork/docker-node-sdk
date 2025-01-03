export interface GetImageProp {
  all?: boolean;
  "shared-size"?: boolean;
  digests?: boolean;
  manifests?: boolean;
  filters?: GetImageFilters;
}

export interface GetImageFilters {
  before?: string;
  dangling?: boolean;
  label?: string;
  reference?: string;
  since?: string;
  until?: string;
}