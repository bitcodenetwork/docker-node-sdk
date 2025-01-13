/**
 * Docker Image History Response
 */

type DockerImageHistoryResponse = DockerImageHistory[];

type DockerImageHistory = {
  Id: string;
  Created: number;
  CreatedBy: string;
  Tags: string[];
  Size: number;
  Comment: string;
}
