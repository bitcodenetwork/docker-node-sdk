# DockerSDK
Docker SDK for Node.js

---

# Introduction
Docker SDK adalah alat untuk terhubung dengan Docker engine melalui Node.js. You can use this package on linux or windows operating system.

# Getting started

## Package Installation

Installation using NPM

``` bash
npm i dockersdk
```

Installation using Yarn

``` bash
npm add dockersdk
```

## Create Object

``` typescript
const dockersdk = new Dockersdk();

// example: get container list
const container = dockersdk.getContainerList();
```

## Setting Socket

Dockersdk has automatically determined the location of your docker socket according to your operating system, but if you have a docker socket location that does not match the default settings, you can determine it using an environment variable, as in the example below.

``` bash
DOCKERSDK_SOCKET_PATH="socket/location/docker.sock"
```

---

# Reference
For the time being, you can use the reference to the docker api to define parameters in the SDK, you can adjust the parameters used with the parameters in the SDK.

## Container
- [Get Container List](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerList)
- [Create Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerList)
- [Remove Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerDelete)
- [Start Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStart)
- [Stop Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStop)
- [Restart Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerRestart)

## Image
- [Get Image List](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerList)
- [Build an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageBuild)
- [Delete builder cache](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/BuildPrune)
- [Create an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageCreate)
- [Inspect an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageInspect)
- [Get the history of an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageHistory)
- [Push an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImagePush)
- [Tag an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageTag)
- [Remove an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageDelete)
- [Search images](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageSearch)
- [Delete unused images](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImagePrune)
- [Create a new image from a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageCommit)
- [Export an image](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageGet)
- [Export several images](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageGetAll)
- [Import images](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Image/operation/ImageLoad)

## Swarm
- [Inspect Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInspect)
- [Initialize Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInit)
- [Join Existing Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmJoin)
- [Leave Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmLeave)
- [Update Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUpdate)
- [Get Unlock Key](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlockkey)
- [Unlock a Locked Manager](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlock)