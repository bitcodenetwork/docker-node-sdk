export interface AttachContainerQuery {
  detachKeys?: string;
  logs?: boolean;
  stream?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  stderr?: boolean;
}