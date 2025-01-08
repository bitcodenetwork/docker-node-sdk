import os from 'os';
import { ConnectOptions, Utils } from './utils';

export class Docker {
  constructor() {
    // Get the socket path from the environment
    if (process.env.DOCKER_HOST) {
      this.socketPath = process.env.DOCKER_HOST;
    }

    // If the socket path is not set,
    // use the default path for the current operating system

    // Windows: //./piped/docker_engine
    else if (os.type() === 'Windows_NT') {
      this.socketPath = '//./pipe/docker_engine';
    }

    // Linux: /var/run/docker.sock
    else {
      this.socketPath = '/var/run/docker.sock';
    }
  }

  private readonly socketPath: string;
  private readonly sdkVersion: string = "v1.47";

  private createRequestOption(param: { method: "GET" | "POST" | "DELETE" | "HEAD"; path: string; headers?: any; query?: any; body?: any; }): ConnectOptions {
    return {
      path: `/${this.sdkVersion}/${param.path}`,
      method: param.method,
      socketPath: this.socketPath,
      headers: param.headers ?? {},
      query: param.query ?? {},
      body: param.body ?? {}
    }
  }

  // ====================
  // Docker Container Section
  // ====================

  public async container(params?: DockerContainerProp): Promise<DockerContainerResponse | string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerCreate(params?: DockerContainerCreateProp): Promise<DockerContainerCreateResponse | string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/create',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async containerInspect(params: { id: string, query?: ContainerInspectQuery }): Promise<ContainerInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerRunningProcesses(params: { id: string, query?: ContainersRunningProcessesQuery }): Promise<ContainersRunningProcessesResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/top',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerLog(params: { id: string, query?: ContainerLogQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/logs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerChange(params: { id: string }): Promise<ContainerChangeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/changes',
    });

    return await Utils.connect(options);
  }

  public async containerExport(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/export',
    });

    return await Utils.connect(options);
  }

  public async containerStat(params: { id: string, query?: ContainerStatQuery }): Promise<ContainerStatResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/stats',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerResize(params: { id: string, query: ContainerResizeQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async containerStart(params: { id: string, query?: ContainerStartQuery }): Promise<ContainerStartResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/start',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerStop(params: { id: string, query?: ContainerStopQuery }): Promise<ContainerStopResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/stop',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerRestart(params: { id: string, query?: ContainerRestartQuery }): Promise<ContainerRestartResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/restart',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerKill(params: { id: string, query?: ContainerKillQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/kill',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerUpdate(params: { id: string, body: ContainerUpdateBody }): Promise<ContainerUpdateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async containerRename(params: { id: string, query: ContainerRenameQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/rename',
      query: params.query,
    });

    return await Utils.connect(options);
  }

  public async containerPause(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/pause',
    });

    return await Utils.connect(options);
  }

  public async containerUnpause(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/unpause',
    });

    return await Utils.connect(options);
  }

  public async containerAttach(params: { id: string, query?: ContainerAttachQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerAttachViaWebsocket(params: { id: string, query?: ContainerAttachQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach/ws',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerWait(params: { id: string, query?: ContainerWaitQuery }): Promise<ContainerWaitResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/wait',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerRemove(params: { id: string, query?: ContainerRemoveQuery }): Promise<ContainerRemoveResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'containers/' + params.id,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerArchiveHead(params: { id: string, path: ContainerArchiveQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'HEAD',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async containerArchive(params: { id: string, path: ContainerArchiveQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async containerExtract(params: { id: string, path: ContainerExtractQuery, body: File }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/extract',
      query: params.path,
      body: params.body
    });

    return await Utils.connect(options);
  }

  public async containerPrune(params?: { query?: ContainerPruneQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/prune',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // ====================
  // Docker Image Section
  // ====================

  public async image(params?: { query?: ImageQuery }): Promise<ImageResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'images/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageBuild(params: { query?: ImageBuildQuery, headers?: ImageBuildHeader, body: File }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build',
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async imageBuildPrune(params: { query?: ImageBuildPruneQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build/prune',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageCreate(params: { query?: ImageCreateQuery, headers?: ImageCreateHeader, body?: File }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'image/create',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageInspect(params: { name: string }): Promise<ImageInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/json',
    });

    return await Utils.connect(options);
  }

  public async imageHistory(params: { name: string }): Promise<ImageHistoryResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/history',
    });

    return await Utils.connect(options);
  }

  public async imagePush(params: { name: string; query?: ImagePushQuery; headers?: ImagePushHeader }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/push',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageTag(params: { name: string; query?: ImageTagQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/tag',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageRemove(params: { name: string; query?: ImageRemoveQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageSearch(params: { query?: ImageSearchQuery }): Promise<ImageSearchResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/search',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imagePrune(params: { query?: ImagesPruneQuery }): Promise<ImagesPruneResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/prune',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageCommit(params: { query?: ImageCommitQuery, body?: ImageCommitBody }): Promise<ImageCommitResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'commit',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async imageGet(params: { name: string; }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/get',
    });

    return await Utils.connect(options);
  }

  public async imageGetSeveral(params: { query?: ImageGetSeveralQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/get',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageLoad(params: { body?: ImageLoadQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/load',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ======================
  // Docker Network Section
  // ======================

  public async network(params?: { query?: NetworkQuery }): Promise<NetworkResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'networks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async networkInspect(params: { id: string, query?: NetworkInspectQuery }): Promise<NetworkInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'networks/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async networkRemove(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'networks/' + params.id,
    });

    return await Utils.connect(options);
  }

  public async networkCreate(params: { body?: NetworkCreateBody }): Promise<NetworkCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/create',
      body: params?.body,
    });

    return await Utils.connect(options);
  }

  public async networkConnect(params: { id: string, body?: NetworkConnectBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/connect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async networkDisconnect(params: { id: string, body?: NetworkDisconnectBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/disconnect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async networkPrune(params: { query?: NetworkPruneQuery }): Promise<NetworkPruneResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/prune',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // =====================
  // Docker Volume Section
  // =====================

  public async volume(params?: { query?: VolumeListQuery }): Promise<VolumeListResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async volumeCreate(params: { body?: VolumeCreateBody }): Promise<VolumeCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async volumeInspect(params: { id: string }): Promise<VolumeInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes/' + params.id
    });

    return Utils.connect(options);
  }

  public async volumeUpdate(params: { id: string, query: VolumeUpdateQuery, body?: VolumeUpdateBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/' + params.id,
      query: params.query,
      body: params?.body
    });

    return Utils.connect(options);
  }

  public async volumeRemove(params: { id: string, query?: VolumeRemoveQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'volumes/' + params.id,
      query: params?.query
    });

    return Utils.connect(options);
  }

  public async volumePrune(params: { query?: VolumePruneQuery }): Promise<volumePruneResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/prune',
      query: params?.query
    });

    return Utils.connect(options);
  }

  // ===================
  // Docker Exec Section
  // ===================

  public async exec(params: { id: string, body?: ExecBody }): Promise<ExecResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/exec',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async execStart(params: { id: string, body?: ExecStartBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/start',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async execResize(params: { id: string, query: ExecResizeQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async execInspect(params: { id: string }): Promise<ExecInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'exec/' + params.id + '/json'
    });

    return await Utils.connect(options);
  }

  // ====================
  // Docker Swarm Section
  // ====================

  public async swarm(): Promise<SwarmResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm',
    });

    return await Utils.connect(options);
  }

  public async swarmInit(params?: { body?: SwarmInitBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/init',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmJoin(params?: { body?: SwarmJoinBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/join',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmLeave(params: { query?: SwarmLeaveQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/leave',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async swarmUpdate(params: { query?: SwarmUpdateQuery, body?: SwarmUpdateBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmUnlockKey(): Promise<SwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm/unlockkey',
    });

    return await Utils.connect(options);
  }

  public async swarmUnlock(): Promise<SwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/unlock',
    });

    return await Utils.connect(options);
  }

  // ===================
  // Docker Node Section
  // ===================

  public async node(params?: { query?: NodeQuery }): Promise<NodeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async nodeInspect(params: { id: string }): Promise<NodeInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes/' + params.id
    });

    return await Utils.connect(options);
  }

  public async nodeDelete(params: { id: string, query?: NodeDeleteQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'nodes/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async nodeUpdate(params: { id: string, query: NodeUpdateQuery, body?: NodeUpdateBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'nodes/' + params.id,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ======================
  // Docker Service Section
  // ======================

  public async service(params?: { query?: ServiceQuery }): Promise<ServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async serviceCreate(params: { headers?: ServiceCreateHeader, body?: ServiceCreateBody }): Promise<ServiceCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/create',
      headers: params?.headers,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async serviceInspect(params: { id: string, query?: ServiceInspectQuery }): Promise<ServiceInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async serviceDelete(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'services/' + params.id
    });

    return await Utils.connect(options);
  }

  public async serviceUpdate(params: { id: string, headers: ServiceUpdateHeader, query?: ServiceUpdateQuery, body?: ServiceUpdateBody }): Promise<ServiceUpdateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/' + params.id,
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async serviceLog(params: { id: string, query?: ServiceLogQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services/' + params.id + '/logs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // ===========
  // Docker Task
  // ===========

  public async task(params?: { query?: TaskQuery }): Promise<TaskResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async taskInspect(params: { id: string }): Promise<TaskInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks/' + params.id,
    });

    return await Utils.connect(options);
  }

  public async getTaskLogs(params: { id: string, query?: TaskLogQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks/' + params.id + '/logs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // ==============
  // Secret Section
  // ==============

  public async secret(params?: { query?: SecretQuery }): Promise<SecretResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'secrets',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async secretCreate(params: { body?: SecretCreateBody }): Promise<SecretCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'secrets/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async secretInspect(params: { id: string }): Promise<SecretInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'secrets/' + params.id
    });

    return await Utils.connect(options);
  }

  public async secretDelete(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'secrets/' + params.id
    });

    return await Utils.connect(options);
  }

  public async secretUpdate(params: { id: string, query: SecretUpdateQuery, body?: SecretUpdateBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'secrets/' + params.id,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ==============
  // Config Section
  // ==============

  public async config(params?: { query?: ConfigQuery }): Promise<ConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'configs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async configCreate(params: DockerConfigCreateProp): Promise<ConfigCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'configs/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async configInspect(params: { id: string }): Promise<ConfigInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'configs/' + params.id
    });

    return await Utils.connect(options);
  }

  public async configDelete(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'configs/' + params.id
    });

    return await Utils.connect(options);
  }

  public async configUpdate(params: { id: string, query: ConfigUpdateQuery, body?: ConfigUpdateBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'configs/' + params.id,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ==============
  // Plugin Section
  // ==============

  public async plugin(params?: { query?: PluginQuery }): Promise<PluginResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginPrivilege(params?: { query?: PluginPrivilegeQuery }): Promise<PluginPrivilegeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/privileges',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginPull(params: { query: PluginPullQuery, headers?: PluginPullHeader, body?: PluginPullBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/pull',
      headers: params?.headers,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginInspect(params: { name: string }): Promise<PluginInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/' + params.name + '/json',
    });

    return await Utils.connect(options);
  }

  public async pluginRemove(params: { name: string, query?: PluginRemoveQuery }): Promise<PluginRemoveResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'plugins/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginEnable(params: { name: string, query?: PluginEnableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/enable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginDisable(params: { name: string, query?: PluginDisableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/disable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginUpgrade(params: { name: string, query: PluginUpgradeQuery, headers?: PluginUpgradeHeader, body?: PluginUpgradeBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/upgrade',
      headers: params.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginCreate(params: { query: PluginCreateQuery, body?: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/create',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginPush(params: { name: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/push'
    });

    return await Utils.connect(options);
  }

  public async pluginSet(params: { name: string, body?: string[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/set',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ==============
  // System Section
  // ==============

  public async authConfig(params?: AuthConfigProp): Promise<AuthConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'auth/config',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async info(): Promise<InfoResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'info'
    });

    return await Utils.connect(options);
  }

  public async version(): Promise<VersionResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'version'
    });

    return await Utils.connect(options);
  }

  public async ping(): Promise<PingResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'ping'
    });

    return await Utils.connect(options);
  }

  public async pingHead(): Promise<PingResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'HEAD',
      path: 'ping'
    });

    return await Utils.connect(options);
  }

  public async event(params?: { query?: EventQuery }): Promise<EventResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'events',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async systemDf(params?: { query?: SystemDfQuery }): Promise<SystemDfResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'system/df',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // ====================
  // Distribution Section
  // ====================

  public async distribution(params: { id: string }): Promise<DistributionResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'distribution/' + params.id + '/json',
    });

    return await Utils.connect(options);
  }
}
