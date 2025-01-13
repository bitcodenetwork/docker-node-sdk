/**
 * Auth config body
 */

export type DockerSystemAuthBody = {
  username: string;
  password: string;
  email: string;
  serveraddress: string;
}

/**
 * Auth config response
 */

export type DockerSystemAuthResponse = {
  Status: string
  IdentityToken: string
}
