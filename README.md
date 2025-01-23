# DockerSDK

Node.js Docker SDK **BETA**

> 📣 **BETA Version**\
> This package is still in BETA, there may still be bugs. Please report any bugs to [GitHub](https://github.com/repoxcode/node-docker/issues)

---

# Getting started

Docker SDK adalah alat untuk terhubung dengan Docker engine melalui Node.js. You can use this package on linux or windows operating system.

**Package Installation**

Installation using NPM

``` bash
npm i @repoxcode/docker
```

Installation using Yarn

``` bash
npm add @repoxcode/docker
```

**Create Object**

``` typescript
const dockersdk = new Dockersdk();

// example: get container list
const container = dockersdk.getContainerList();
```

**Setting Socket**

Dockersdk has automatically determined the location of your docker socket according to your operating system, but if you have a docker socket location that does not match the default settings, you can determine it using an environment variable, as in the example below.

``` bash
DOCKERSDK_SOCKET_PATH="socket/location/docker.sock"
```

## Reference
For the time being, you can use the reference to the docker api to define parameters in the SDK, you can adjust the parameters used with the parameters in the SDK.

### Container

Returns a list of containers. For details on the format, see the [inspect endpoint](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerInspect).

Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated.

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

### Image
Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.

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

### Network
Networks are user-defined networks that containers can be attached to. See the [networking documentation](https://docs.docker.com/engine/network/) for more information.

- [List networks](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkList)
- [Inspect a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkInspect)
- [Remove a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkDelete)
- [Create a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkCreate)
- [Connect a container to a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkConnect)
- [Disconnect a container from a network](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkDisconnect)
- [Delete unused networks](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Network/operation/NetworkPrune)

### Volume
Create and manage persistent storage that can be attached to containers.

- [List volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeList)
- [Create a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeCreate)
- [Inspect a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeInspect)
- [Update a volume. Valid only for Swarm cluster volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeUpdate)
- [Remove a volume](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumeDelete)
- [Delete unused volumes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Volume/operation/VolumePrune)

### Exec
Run new commands inside running containers. Refer to the [command-line reference](https://docs.docker.com/reference/cli/docker/container/exec/) for more information.
To exec a command in a container, you first need to create an exec instance, then start it. These two API endpoints are wrapped up in a single command-line command, `docker exec`.

- [Create an exec instance](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Exec/operation/ContainerExec)
- [Start an exec instance](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Exec/operation/ExecStart)
- [Resize an exec instance](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Exec/operation/ExecResize)
- [Inspect an exec instance](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Exec/operation/ExecInspect)

### Swarm
Engines can be clustered together in a swarm. Refer to the swarm mode documentation for more information.

- [Inspect Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInspect)
- [Initialize Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmInit)
- [Join Existing Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmJoin)
- [Leave Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmLeave)
- [Update Swarm](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUpdate)
- [Get Unlock Key](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlockkey)
- [Unlock a Locked Manager](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Swarm/operation/SwarmUnlock)

### Nodes
Nodes are instances of the Engine participating in a swarm. Swarm mode must be enabled for these endpoints to work.

- [List nodes](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Node/operation/NodeList)
- [Inspect a node](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Node/operation/NodeInspect)
- [Delete a node](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Node/operation/NodeDelete)
- [Update a node](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Node/operation/NodeUpdate)

### Services
Services are the definitions of tasks to run on a swarm. Swarm mode must be enabled for these endpoints to work.

- [List services](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceList)
- [Create a service](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceCreate)
- [Inspect a service](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceInspect)
- [Delete a service](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceDelete)
- [Update a service](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceUpdate)
- [Get service logs](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Service/operation/ServiceLogs)

### Tasks
A task is a container running on a swarm. It is the atomic scheduling unit of swarm. Swarm mode must be enabled for these endpoints to work.

- [List tasks](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Task/operation/TaskList)
- [Inspect a task](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Task/operation/TaskInspect)
- [Get task logs](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Task/operation/TaskLogs)

### Secrets
Secrets are sensitive data that can be used by services. Swarm mode must be enabled for these endpoints to work.

- [List secrets](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Secret)
- [Create a secret](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Secret/operation/SecretCreate)
- [Inspect a secret](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Secret/operation/SecretInspect)
- [Delete a secret](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Secret/operation/SecretDelete)
- [Update a Secret](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Secret/operation/SecretUpdate)

### Configs

Configs are application configurations that can be used by services. Swarm mode must be enabled for these endpoints to work.

- [List configs](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Config/operation/ConfigList)
- [Create a config](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Config/operation/ConfigCreate)
- [Inspect a config](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Config/operation/ConfigInspect)
- [Delete a config](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Config/operation/ConfigDelete)
- [Update a Config](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Config/operation/ConfigUpdate)

### Plugins

- [List plugins](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin)
- [Get plugin privileges](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/GetPluginPrivileges)
- [Install a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginPull)
- [Inspect a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginInspect)
- [Remove a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginDelete)
- [Enable a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginEnable)
- [Disable a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginDisable)
- [Upgrade a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginUpgrade)
- [Create a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginCreate)
- [Push a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginPush)
- [Configure a plugin](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Plugin/operation/PluginSet)

### System

- [Check auth configuration](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemAuth)
- [Get system information](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemInfo)
- [Get version](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemVersion)
- [Ping](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemPing)
- [Ping](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemPingHead)
- [Monitor events](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemEvents)
- [Get data usage information](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/System/operation/SystemDataUsage)

### Distribution

- [Get image information from the registry](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Distribution)

### Session

- [Initialize interactive session](https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Session)
