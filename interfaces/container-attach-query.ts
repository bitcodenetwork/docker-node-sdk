export interface ContainerAttachQuery {
  detachKeys?: string;
  logs?: boolean;
  stream?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  stderr?: boolean;
}