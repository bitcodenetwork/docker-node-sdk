/**
 * Docker Image Search Query
 */

type DockerImageSearchQuery = {
  term: string;
  limit?: number;
  filters?: number;
}

/**
 * Docker Image Search Response
 */

type DockerImageSearchResponse = DockerSearchImage[];

type DockerSearchImage = {
  description: string;
  is_official: boolean;
  is_automated: boolean;
  name: string;
  star_count: number;
}
