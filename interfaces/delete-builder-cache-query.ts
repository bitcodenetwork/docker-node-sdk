export interface DeleteBuilderCacheQuery {
  "keep-storage": number;
  all: boolean;
  filters: DeleteBuilderCacheFilters
}

export interface DeleteBuilderCacheFilters {
  until?: string[];
  id?: string[];
  parent?: string[];
  type?: string[];
  direction?: string[];
  inuse?: boolean[];
  shared?: boolean[];
  private?: boolean[]
}