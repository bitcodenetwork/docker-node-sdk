import { UpdateSwarmBody } from "./update-swarm-body";
import { UpdateSwarmQuery } from "./update-swarm-query";

export interface UpdateSwarmProp {
  body?: UpdateSwarmBody;
  query: UpdateSwarmQuery;
}