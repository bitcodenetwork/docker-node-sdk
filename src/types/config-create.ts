/**
 * Docker config create prop
 */

export type DockerConfigCreateProp = {
  body: DockerConfigCreateBody
}

/**
 * Docker config create body
 */

export type DockerConfigCreateBody = {
  Name: string
  Labels: {
    [key: string]: string
  }
  Data: string
  Templating: {
    Name: string
    Options: {
      [key: string]: string
    }
  }
}

/**
 * Docker config create response
 */

export type DockerConfigCreateResponse = {
  Id: string
}
