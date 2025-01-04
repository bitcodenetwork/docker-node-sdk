export interface CreateImageFromContainerQuery {
  container?: string;
  repo?: string;
  tag?: string;
  comment?: string;
  author?: string;
  pause?: boolean;
  changes?: string;
}