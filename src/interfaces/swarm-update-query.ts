export interface SwarmUpdateQuery {
  version: number;
  rotateWorkerToken?: boolean;
  rotateManagerToken?: boolean;
  rotateManagerUnlockKey?: boolean;
}