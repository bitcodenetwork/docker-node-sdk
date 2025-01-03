export interface UpdateSwarmQuery {
  version: number;
  rotateWorkerToken?: boolean;
  rotateManagerToken?: boolean;
  rotateManagerUnlockKey?: boolean;
}