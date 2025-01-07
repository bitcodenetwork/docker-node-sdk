export interface ImageBuildPruneQuery {
  "keep-storage": number;
  all: boolean;
  filters: ImageBuildPruneFilter
}

export interface ImageBuildPruneFilter {
  until?: string[];
  id?: string[];
  parent?: string[];
  type?: string[];
  direction?: string[];
  inuse?: boolean[];
  shared?: boolean[];
  private?: boolean[]
}