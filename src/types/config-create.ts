/**
 * Docker config create prop
 */

type DockerConfigCreateProp = {
  body: DockerConfigCreateBody
}

/**
 * Docker config create body
 */

type DockerConfigCreateBody = {
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

type DockerConfigCreateResponse = {
  Id: string
}
