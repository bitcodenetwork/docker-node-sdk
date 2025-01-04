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
- [Inspect a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerInspect)
- [List processes running inside a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerTop)
- [Get container logs](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerLogs)
- [Get changes on a container’s filesystem](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerChanges)
- [Export a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerExport)
- [Get container stats based on resource usage](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStats)
- [Resize a container TTY](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerResize)
- [Start Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStart)
- [Stop Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStop)
- [Restart Container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerRestart)
- [Kill a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerKill)
- [Update a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerUpdate)
- [Rename a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerRename)
- [Pause a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerPause)
- [Unpause a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerUnpause)
- [Attach to a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerAttach)
- [Attach to a container via a websocket](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerAttachWebsocket)
- [Wait for a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerWait)
- [Remove a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerDelete)
- [Get information about files in a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerArchiveInfo)
- [Get an archive of a filesystem resource in a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerArchive)
- [Extract an archive of files or folders to a directory in a container](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/PutContainerArchive)
- [Delete stopped containers](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerPrune)

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

## Network
- [List networks](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkList)
- [Inspect a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkInspect)
- [Remove a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkDelete)
- [Create a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkCreate)
- [Connect a container to a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkConnect)
- [Disconnect a container from a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkDisconnect)
- [Delete unused networks](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkPrune)

## Volume
- [List volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeList)
- [Create a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeCreate)
- [Inspect a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeInspect)
- [Update a volume. Valid only for Swarm cluster volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeUpdate)
- [Remove a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeDelete)
- [Delete unused volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumePrune)

## Swarm
- [Inspect Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInspect)
- [Initialize Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInit)
- [Join Existing Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmJoin)
- [Leave Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmLeave)
- [Update Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUpdate)
- [Get Unlock Key](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlockkey)
- [Unlock a Locked Manager](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlock)