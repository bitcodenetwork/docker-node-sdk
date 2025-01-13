/**
 * Docker Image History Response
 */

export type DockerImageHistoryResponse = DockerImageHistory[];

export type DockerImageHistory = {
  Id: string;
  Created: number;
  CreatedBy: string;
  Tags: string[];
  Size: number;
  Comment: string;
}
