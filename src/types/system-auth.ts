/**
 * Auth config body
 */

type DockerSystemAuthBody = {
  username: string;
  password: string;
  email: string;
  serveraddress: string;
}

/**
 * Auth config response
 */

type DockerSystemAuthResponse = {
  Status: string
  IdentityToken: string
}
