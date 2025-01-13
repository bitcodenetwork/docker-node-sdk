/**
 * Docker Image Search Query
 */
export type DockerImageSearchQuery = {
  term: string;
  limit?: number;
  filters?: number;
}

/**
 * Docker Image Search Response
 */

export type DockerImageSearchResponse = DockerSearchImage[];

export type DockerSearchImage = {
  description: string;
  is_official: boolean;
  is_automated: boolean;
  name: string;
  star_count: number;
}
