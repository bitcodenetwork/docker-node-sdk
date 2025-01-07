import os from 'os';
import { AuthConfigBody } from '../interfaces/auth-config-body';
import { AuthConfigResponse } from '../interfaces/auth-config-response';
import { ConfigCreateBody } from '../interfaces/config-create-body';
import { ConfigCreateResponse } from '../interfaces/config-create-response';
import { ConfigInspectResponse } from '../interfaces/config-inspect-response';
import { ConfigQuery } from '../interfaces/config-query';
import { ConfigResponse } from '../interfaces/config-response';
import { ConfigUpdateBody } from '../interfaces/config-update-body';
import { ConfigUpdateQuery } from '../interfaces/config-update-query';
import { ContainerArchiveQuery } from '../interfaces/container-archive-query';
import { ContainerAttachQuery } from '../interfaces/container-attach-query';
import { ContainerChangeResponse } from '../interfaces/container-change-response';
import { ContainerCreateBody } from '../interfaces/container-create-body';
import { ContainerCreateQuery } from '../interfaces/container-create-query';
import { ContainerCreateResponse } from '../interfaces/container-create-response';
import { ContainerExtractQuery } from '../interfaces/container-extract-query';
import { ContainerInspectQuery } from '../interfaces/container-inspect-query';
import { ContainerInspectResponse } from '../interfaces/container-inspect-response';
import { ContainerKillQuery } from '../interfaces/container-kill-query';
import { ContainerLogQuery } from '../interfaces/container-log-query';
import { ContainerPruneQuery } from '../interfaces/container-prune-query';
import { ContainerQuery } from '../interfaces/container-query';
import { ContainerRemoveQuery } from '../interfaces/container-remove-query';
import { ContainerRemoveResponse } from '../interfaces/container-remove-response';
import { ContainerRenameQuery } from '../interfaces/container-rename-query';
import { ContainerResizeQuery } from '../interfaces/container-resize-query';
import { ContainerResponse } from '../interfaces/container-response';
import { ContainerRestartQuery } from '../interfaces/container-restart-query';
import { ContainerRestartResponse } from '../interfaces/container-restart-response';
import { ContainersRunningProcessesQuery } from '../interfaces/container-running-processes-query';
import { ContainersRunningProcessesResponse } from '../interfaces/container-running-processes-response';
import { ContainerStartQuery } from '../interfaces/container-start-query';
import { ContainerStartResponse } from '../interfaces/container-start-response';
import { ContainerStatQuery } from '../interfaces/container-stat-query';
import { ContainerStatResponse } from '../interfaces/container-stat-response';
import { ContainerStopQuery } from '../interfaces/container-stop-query';
import { ContainerStopResponse } from '../interfaces/container-stop-response';
import { ContainerUpdateBody } from '../interfaces/container-update-body';
import { ContainerUpdateResponse } from '../interfaces/container-update-response';
import { ContainerWaitQuery } from '../interfaces/container-wait-query';
import { ContainerWaitResponse } from '../interfaces/container-wait-response';
import { DistributionResponse } from '../interfaces/distribution-response';
import { EventQuery } from '../interfaces/event-query';
import { EventResponse } from '../interfaces/event-response';
import { ExecBody } from '../interfaces/exec-create-body';
import { ExecResponse } from '../interfaces/exec-create-response';
import { ExecInspectResponse } from '../interfaces/exec-inspect-response';
import { ExecResizeQuery } from '../interfaces/exec-resize-query';
import { ExecStartBody } from '../interfaces/exec-start-body';
import { ImageBuildHeader } from '../interfaces/image-build-header';
import { ImageBuildPruneQuery } from '../interfaces/image-build-prune-query';
import { ImageBuildQuery } from '../interfaces/image-build-query';
import { ImageCommitBody } from '../interfaces/image-commit-body';
import { ImageCommitQuery } from '../interfaces/image-commit-query';
import { ImageCommitResponse } from '../interfaces/image-commit-response';
import { ImageCreateHeader } from '../interfaces/image-create-header';
import { ImageCreateQuery } from '../interfaces/image-create-query';
import { ImageGetSeveralQuery } from '../interfaces/image-get-several-query';
import { ImageHistoryResponse } from '../interfaces/image-history-response';
import { ImageInspectResponse } from '../interfaces/image-inspect-response';
import { ImageLoadQuery } from '../interfaces/image-load-query';
import { ImagePushHeader } from '../interfaces/image-push-header';
import { ImagePushQuery } from '../interfaces/image-push-query';
import { ImageQuery } from '../interfaces/image-query';
import { ImageRemoveQuery } from '../interfaces/image-remove-query';
import { ImageResponse } from '../interfaces/image-response';
import { ImageSearchQuery } from '../interfaces/image-search-query';
import { ImageSearchResponse } from '../interfaces/image-search-response';
import { ImageTagQuery } from '../interfaces/image-tag-query';
import { ImagesPruneQuery } from '../interfaces/images-prune-query';
import { ImagesPruneResponse } from '../interfaces/images-prune-response';
import { InfoResponse } from '../interfaces/info-response';
import { NetworkConnectBody } from '../interfaces/network-connect-body';
import { NetworkCreateBody } from '../interfaces/network-create-body';
import { NetworkCreateResponse } from '../interfaces/network-create-response';
import { NetworkDisconnectBody } from '../interfaces/network-disconnect-body';
import { NetworkInspectQuery } from '../interfaces/network-inspect-query';
import { NetworkInspectResponse } from '../interfaces/network-inspect-response';
import { NetworkPruneQuery } from '../interfaces/network-prune-query';
import { NetworkPruneResponse } from '../interfaces/network-prune-response';
import { NetworkQuery } from '../interfaces/network-query';
import { NetworkResponse } from '../interfaces/network-response';
import { NodeDeleteQuery } from '../interfaces/node-delete-query';
import { NodeInspectResponse } from '../interfaces/node-inspect-response';
import { NodeQuery } from '../interfaces/node-query';
import { NodeResponse } from '../interfaces/node-response';
import { NodeUpdateBody } from '../interfaces/node-update-body';
import { NodeUpdateQuery } from '../interfaces/node-update-query';
import { PingResponse } from '../interfaces/ping-response';
import { PluginDisableQuery } from '../interfaces/plugin-disable-query';
import { PluginEnableQuery } from '../interfaces/plugin-enable-query';
import { PluginInspectResponse } from '../interfaces/plugin-inspect-response';
import { PluginPrivilegeQuery } from '../interfaces/plugin-privilege-query';
import { PluginPrivilegeResponse } from '../interfaces/plugin-privilege-response';
import { PluginPullBody } from '../interfaces/plugin-pull-body';
import { PluginPullHeader } from '../interfaces/plugin-pull-header';
import { PluginPullQuery } from '../interfaces/plugin-pull-query';
import { PluginQuery } from '../interfaces/plugin-query';
import { PluginRemoveQuery } from '../interfaces/plugin-remove-query';
import { PluginRemoveResponse } from '../interfaces/plugin-remove-response';
import { PluginResponse } from '../interfaces/plugin-response';
import { PluginCreateQuery } from '../interfaces/plugins-create-query';
import { PluginUpgradeBody } from '../interfaces/plugins-upgrade-body';
import { PluginUpgradeHeader } from '../interfaces/plugins-upgrade-header';
import { PluginUpgradeQuery } from '../interfaces/plugins-upgrade-query';
import { SecretCreateBody } from '../interfaces/secret-create-body';
import { SecretCreateResponse } from '../interfaces/secret-create-response';
import { SecretInspectResponse } from '../interfaces/secret-inspect-response';
import { SecretQuery } from '../interfaces/secret-query';
import { SecretResponse } from '../interfaces/secret-response';
import { SecretUpdateBody } from '../interfaces/secret-update-body';
import { SecretUpdateQuery } from '../interfaces/secret-update-query';
import { ServiceCreateBody } from '../interfaces/service-create-body';
import { ServiceCreateHeader } from '../interfaces/service-create-header';
import { ServiceCreateResponse } from '../interfaces/service-create-response';
import { ServiceInspectQuery } from '../interfaces/service-inspect-query';
import { ServiceInspectResponse } from '../interfaces/service-inspect-response';
import { ServiceLogQuery } from '../interfaces/service-log-query';
import { ServiceQuery } from '../interfaces/service-query';
import { ServiceResponse } from '../interfaces/service-response';
import { ServiceUpdateBody } from '../interfaces/service-update-body';
import { ServiceUpdateHeader } from '../interfaces/service-update-header';
import { ServiceUpdateQuery } from '../interfaces/service-update-query';
import { ServiceUpdateResponse } from '../interfaces/service-update-response';
import { SwarmInitBody } from '../interfaces/swarm-init-body';
import { SwarmJoinBody } from '../interfaces/swarm-join-body';
import { SwarmLeaveQuery } from '../interfaces/swarm-leave-query';
import { SwarmResponse } from '../interfaces/swarm-response';
import { SwarmUnlockKeyResponse } from '../interfaces/swarm-unlock-key-response';
import { SwarmUpdateBody } from '../interfaces/swarm-update-body';
import { SwarmUpdateQuery } from '../interfaces/swarm-update-query';
import { SystemDfQuery } from '../interfaces/system-df-query';
import { SystemDfResponse } from '../interfaces/system-df-response';
import { TaskInspectResponse } from '../interfaces/task-inspect-response';
import { TaskLogQuery } from '../interfaces/task-logs';
import { TaskQuery } from '../interfaces/task-query';
import { TaskResponse } from '../interfaces/task-response';
import { VersionResponse } from '../interfaces/version-response';
import { VolumeCreateBody } from '../interfaces/volume-create-body';
import { VolumeCreateResponse } from '../interfaces/volume-create-response';
import { VolumeInspectResponse } from '../interfaces/volume-inspect-response';
import { VolumeListQuery } from '../interfaces/volume-list-query';
import { VolumeListResponse } from '../interfaces/volume-list-response';
import { VolumePruneQuery } from '../interfaces/volume-prune-query';
import { volumePruneResponse } from '../interfaces/volume-prune-response';
import { VolumeRemoveQuery } from '../interfaces/volume-remove-query';
import { VolumeUpdateBody } from '../interfaces/volume-update-body';
import { VolumeUpdateQuery } from '../interfaces/volume-update-query';
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

  public async container(params?: { query?: ContainerQuery }): Promise<ContainerResponse | string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerCreate(params?: { body?: ContainerCreateBody, query?: ContainerCreateQuery }): Promise<ContainerCreateResponse> {
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

  public async configCreate(params: { body?: ConfigCreateBody }): Promise<ConfigCreateResponse> {
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

  public async authConfig(params?: { body?: AuthConfigBody }): Promise<AuthConfigResponse> {
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
