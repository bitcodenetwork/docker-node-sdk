/**
 * Auth config prop
 */

type AuthConfigProp = {
  body: AuthConfigBody
}

/**
 * Auth config body
 */

type AuthConfigBody = {
  username: string;
  password: string;
  email: string;
  serveraddress: string;
}

/**
 * Auth config response
 */

type AuthConfigResponse = {
  Status: string
  IdentityToken: string
}
