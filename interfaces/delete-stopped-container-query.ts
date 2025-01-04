export interface DeleteStoppedContainerQuery {
  filters?: DeleteStoppedContainerFilter;
}

export interface DeleteStoppedContainerFilter {
  until?: string;
  label?: string[];
}