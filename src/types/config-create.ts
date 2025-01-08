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
  Labels: DockerConfigCreateBodyLabels
  Data: string
  Templating: DockerConfigCreateBodyTemplating
}

type DockerConfigCreateBodyLabels = {
  property1: string
  property2: string
  foo: string
}

type DockerConfigCreateBodyTemplating = {
  Name: string
  Options: DockerConfigCreateBodyTemplatingOptions
}

type DockerConfigCreateBodyTemplatingOptions = {
  OptionA: string
  OptionB: string
}

/**
 * Docker config create response
 */

type DockerConfigCreateResponse = {
  Id: string
}
