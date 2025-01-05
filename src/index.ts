import os from 'os';
import { AttachContainerQuery } from '../interfaces/attach-container-query';
import { AuthConfigBody } from '../interfaces/auth-config-body';
import { AuthConfigResponse } from '../interfaces/auth-config-response';
import { BuildImageHeader } from '../interfaces/build-image-header';
import { BuildImageQuery } from '../interfaces/build-image-query';
import { ConnectNetworkBody } from '../interfaces/connect-network-body';
import { ContainerQuery } from '../interfaces/container-query';
import { ContainerResponse } from '../interfaces/container-response';
import { CreateConfigBody } from '../interfaces/create-config-body';
import { CreateConfigResponse } from '../interfaces/create-config-response';
import { CreateContainerBody } from '../interfaces/create-container-body';
import { CreateContainerQuery } from '../interfaces/create-container-query';
import { CreateContainerResponse } from '../interfaces/create-container-response';
import { CreateExecBody } from '../interfaces/create-exec-body';
import { CreateExecResponse } from '../interfaces/create-exec-response';
import { CreateImageFromContainerBody } from '../interfaces/create-image-from-container-body';
import { CreateImageFromContainerQuery } from '../interfaces/create-image-from-container-query';
import { CreateImageFromContainerResponse } from '../interfaces/create-image-from-container-response';
import { CreateImageHeader } from '../interfaces/create-image-header';
import { CreateImageQuery } from '../interfaces/create-image-query';
import { CreateNetworkBody } from '../interfaces/create-network-body';
import { CreateNetworkResponse } from '../interfaces/create-network-response';
import { CreateSecretBody } from '../interfaces/create-secret-body';
import { CreateSecretResponse } from '../interfaces/create-secret-response';
import { CreateServiceBody } from '../interfaces/create-service-body';
import { CreateServiceHeader } from '../interfaces/create-service-header';
import { CreateServiceResponse } from '../interfaces/create-service-response';
import { CreateVolumeBody } from '../interfaces/create-volume-body';
import { CreateVolumeResponse } from '../interfaces/create-volume-response';
import { DeleteBuilderCacheQuery } from '../interfaces/delete-builder-cache-query';
import { DeleteNodeQuery } from '../interfaces/delete-node-query';
import { DeleteStoppedContainerQuery } from '../interfaces/delete-stopped-container-query';
import { DeleteUnusedImagesQuery } from '../interfaces/delete-unused-images-query';
import { DeleteUnusedImagesResponse } from '../interfaces/delete-unused-images-response';
import { DeleteUnusedNetworkQuery } from '../interfaces/delete-unused-netowrk-query';
import { DeleteUnusedNetworkResponse } from '../interfaces/delete-unused-netowrk-response';
import { DeleteUnusedVolumeQuery } from '../interfaces/delete-unused-volume-query';
import { DeleteUnusedVolumeResponse } from '../interfaces/delete-unused-volume-repsonse';
import { DisconnectNetworkBody } from '../interfaces/disconnect-network-body';
import { DistributionResponse } from '../interfaces/distribution-response';
import { EventQuery } from '../interfaces/event-query';
import { EventResponse } from '../interfaces/event-response';
import { ExportSeveralImagesQuery } from '../interfaces/export-several-images-query';
import { ExtractArchiveFileQuery } from '../interfaces/extract-archive-file-query';
import { GetContainerChangesResponse } from '../interfaces/get-container-change-response';
import { GetContainerFileInformationQuery } from '../interfaces/get-container-file-information';
import { GetContainerLogsQuery } from '../interfaces/get-container-log-query';
import { GetContainerStatsQuery } from '../interfaces/get-container-stat-query';
import { GetContainerStatsResponse } from '../interfaces/get-container-stat-response';
import { GetImageQuery } from '../interfaces/get-image-query';
import { GetImageResponse } from '../interfaces/get-image-response';
import { GetServiceLogsQuery } from '../interfaces/get-service-log-query';
import { GetSwarmUnlockKeyResponse } from '../interfaces/get-swarm-unlock-key-response';
import { GetTaskLogsQuery } from '../interfaces/get-task-logs';
import { ImageHistoryResponse } from '../interfaces/image-history-response';
import { ImportImageQuery } from '../interfaces/import-image-query';
import { InfoResponse } from '../interfaces/info-response';
import { InitializeSwarmBody } from '../interfaces/initialize-swarm-body';
import { InspectConfigResponse } from '../interfaces/inspect-config-response';
import { InspectContainerQuery } from '../interfaces/inspect-container-query';
import { InspectContainerResponse } from '../interfaces/inspect-container-response';
import { InspectExecResponse } from '../interfaces/inspect-exec-response';
import { InspectImageResponse } from '../interfaces/inspect-image-response';
import { InspectNetworkQuery } from '../interfaces/inspect-network-query';
import { InspectNetworkResponse } from '../interfaces/inspect-network-response';
import { InspectNodeResponse } from '../interfaces/inspect-node-response';
import { InspectSecretResponse } from '../interfaces/inspect-secret-response';
import { InspectServiceQuery } from '../interfaces/inspect-service-query';
import { InspectServiceResponse } from '../interfaces/inspect-service-response';
import { InspectSwarmResponse } from '../interfaces/inspect-swarm-response';
import { InspectTaskResponse } from '../interfaces/inspect-task-response';
import { InspectVolumeResponse } from '../interfaces/inspect-volume-response';
import { JoinSwarmBody } from '../interfaces/join-swarm-body';
import { KillContainerQuery } from '../interfaces/kill-container-query';
import { LeaveSwarmQuery } from '../interfaces/leave-swarm-query';
import { ListConfigQuery } from '../interfaces/list-config-query';
import { ListConfigResponse } from '../interfaces/list-config-response';
import { ListNetworkQuery } from '../interfaces/list-network-query';
import { ListNetworkResponse } from '../interfaces/list-network-response';
import { ListNodeQuery } from '../interfaces/list-node-query';
import { ListNodeResponse } from '../interfaces/list-node-response';
import { ListProcessesRunningInsideContainerQuery } from '../interfaces/list-processes-running-inside-container-query';
import { ListProcessesRunningInsideContainerResponse } from '../interfaces/list-processes-running-inside-container-response';
import { ListSecretQuery } from '../interfaces/list-secret-query';
import { ListSecretResponse } from '../interfaces/list-secret-response';
import { ListServiceQuery } from '../interfaces/list-service-query';
import { ListServiceResponse } from '../interfaces/list-service-response';
import { ListTaskQuery } from '../interfaces/list-task-query';
import { ListTaskResponse } from '../interfaces/list-task-response';
import { ListVolumeQuery } from '../interfaces/list-volume-query';
import { ListVolumeResponse } from '../interfaces/list-volume-response';
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
import { PushImageHeader } from '../interfaces/push-image-header';
import { PushImageQuery } from '../interfaces/push-image-query';
import { RemoveContainerQuery } from '../interfaces/remove-container-query';
import { RemoveContainerResponse } from '../interfaces/remove-container-response';
import { RemoveImageQuery } from '../interfaces/remove-image-query';
import { RemoveVolumeQuery } from '../interfaces/remove-volume-query';
import { RenameContainerQuery } from '../interfaces/rename-container-query';
import { ResizeContainerTtyQuery } from '../interfaces/resize-container-tty-query';
import { ResizeExecQuery } from '../interfaces/resize-exec-query';
import { RestartContainerQuery } from '../interfaces/restart-container-query';
import { RestartContainerResponse } from '../interfaces/restart-container-response';
import { SearchImageQuery } from '../interfaces/search-image-query';
import { SearchImageResponse } from '../interfaces/search-image-response';
import { StartContainerQuery } from '../interfaces/start-container-query';
import { StartContainerResponse } from '../interfaces/start-container-response';
import { StartExecBody } from '../interfaces/start-exec-body';
import { StopContainerQuery } from '../interfaces/stop-container-query';
import { StopContainerResponse } from '../interfaces/stop-container-response';
import { SystemDfQuery } from '../interfaces/system-df-query';
import { SystemDfResponse } from '../interfaces/system-df-response';
import { TagImageQuery } from '../interfaces/tag-image-query';
import { UpdateConfigBody } from '../interfaces/update-config-body';
import { UpdateConfigQuery } from '../interfaces/update-config-query';
import { UpdateContainerBody } from '../interfaces/update-container-body';
import { UpdateContainerResponse } from '../interfaces/update-container-response';
import { UpdateNodeBody } from '../interfaces/update-node-body';
import { UpdateNodeQuery } from '../interfaces/update-node-query';
import { UpdateSecretBody } from '../interfaces/update-secret-body';
import { UpdateSecretQuery } from '../interfaces/update-secret-query';
import { UpdateServiceBody } from '../interfaces/update-service-body';
import { UpdateServiceHeader } from '../interfaces/update-service-header';
import { UpdateServiceQuery } from '../interfaces/update-service-query';
import { UpdateServiceResponse } from '../interfaces/update-service-response';
import { UpdateSwarmProp } from '../interfaces/update-swarm-prop';
import { UpdateVolumeBody } from '../interfaces/update-volume-body';
import { UpdateVolumeQuery } from '../interfaces/update-volume-query';
import { VersionResponse } from '../interfaces/version-response';
import { WaitContainerQuery } from '../interfaces/wait-container-query';
import { WaitContainerResponse } from '../interfaces/wait-container-response';
import { ConnectOptions, Utils } from './utils';

export class Dockersdk {
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

  public async containers(params?: { query?: ContainerQuery }): Promise<ContainerResponse | string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createContainer(params?: { body?: CreateContainerBody, query?: CreateContainerQuery }): Promise<CreateContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/create',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async inspectContainer(params: { id: string, query?: InspectContainerQuery }): Promise<InspectContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async listProcessesRunningInsideContainer(params: { id: string, query?: ListProcessesRunningInsideContainerQuery }): Promise<ListProcessesRunningInsideContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/top',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async getContainerLogs(params: { id: string, query?: GetContainerLogsQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/logs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async getContainerChanges(params: { id: string }): Promise<GetContainerChangesResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/changes',
    });

    return await Utils.connect(options);
  }

  public async exportContainer(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/export',
    });

    return await Utils.connect(options);
  }

  public async getContainerStats(params: { id: string, query?: GetContainerStatsQuery }): Promise<GetContainerStatsResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/stats',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async resizeContainerTty(params: { id: string, query: ResizeContainerTtyQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async startContainer(params: { id: string, query?: StartContainerQuery }): Promise<StartContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/start',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async stopContainer(params: { id: string, query?: StopContainerQuery }): Promise<StopContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/stop',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async restartContainer(params: { id: string, query?: RestartContainerQuery }): Promise<RestartContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/restart',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async killContainer(params: { id: string, query?: KillContainerQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/kill',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async updateContainer(params: { id: string, body: UpdateContainerBody }): Promise<UpdateContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async renameContainer(params: { id: string, query: RenameContainerQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/rename',
      query: params.query,
    });

    return await Utils.connect(options);
  }

  public async pauseContainer(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/pause',
    });

    return await Utils.connect(options);
  }

  public async unpauseContainer(params: { id: string }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/unpause',
    });

    return await Utils.connect(options);
  }

  public async attachContainer(params: { id: string, query?: AttachContainerQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async attachContainerViaWebsocket(params: { id: string, query?: AttachContainerQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach/ws',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async waitContainer(params: { id: string, query?: WaitContainerQuery }): Promise<WaitContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/wait',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async removeContainer(params: { id: string, query?: RemoveContainerQuery }): Promise<RemoveContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'containers/' + params.id,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async getContainerFileInformation(params: { id: string, path: GetContainerFileInformationQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'HEAD',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async getContainerArchiveFile(params: { id: string, path: GetContainerFileInformationQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async extractArchiveFile(params: { id: string, path: ExtractArchiveFileQuery, body: File }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/extract',
      query: params.path,
      body: params.body
    });

    return await Utils.connect(options);
  }

  public async deleteStoppedContainer(params?: { query?: DeleteStoppedContainerQuery }): Promise<string> {
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

  public async getImages(params?: { query?: GetImageQuery }): Promise<GetImageResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'images/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async buildImage(params: { query?: BuildImageQuery, headers?: BuildImageHeader, body: File }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build',
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async deleteBuilderCache(params: { query?: DeleteBuilderCacheQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build/prune',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async createImage(params: { query?: CreateImageQuery, headers?: CreateImageHeader, body?: File }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'image/create',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async inspectImage(params: { name: string }): Promise<InspectImageResponse> {
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

  public async pushImage(params: { name: string; query?: PushImageQuery; headers?: PushImageHeader }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/push',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async tagImage(params: { name: string; query?: TagImageQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/tag',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async removeImage(params: { name: string; query?: RemoveImageQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async searchImage(params: { query?: SearchImageQuery }): Promise<SearchImageResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/search',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async deleteUnusedImages(params: { query?: DeleteUnusedImagesQuery }): Promise<DeleteUnusedImagesResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/prune',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createImageFromContainer(params: { query?: CreateImageFromContainerQuery, body?: CreateImageFromContainerBody }): Promise<CreateImageFromContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'commit',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async exportImage(params: { name: string; }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/get',
    });

    return await Utils.connect(options);
  }

  public async exportSeveralImages(params: { query?: ExportSeveralImagesQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/get',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async importImage(params: { body?: ImportImageQuery }): Promise<string> {
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

  public async listNetwork(params?: { query?: ListNetworkQuery }): Promise<ListNetworkResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'networks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async inspectNetwork(params: { id: string, query?: InspectNetworkQuery }): Promise<InspectNetworkResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'networks/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async removeNetwork(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'networks/' + params.id,
    });

    return await Utils.connect(options);
  }

  public async createNetwork(params: { body?: CreateNetworkBody }): Promise<CreateNetworkResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/create',
      body: params?.body,
    });

    return await Utils.connect(options);
  }

  public async connectNetwork(params: { id: string, body?: ConnectNetworkBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/connect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async disconnectNetwork(params: { id: string, body?: DisconnectNetworkBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/disconnect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async deleteUnusedNetwork(params: { query?: DeleteUnusedNetworkQuery }): Promise<DeleteUnusedNetworkResponse> {
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

  public async listVolume(params?: { query?: ListVolumeQuery }): Promise<ListVolumeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createVolume(params: { body?: CreateVolumeBody }): Promise<CreateVolumeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async inspectVolume(params: { id: string }): Promise<InspectVolumeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes/' + params.id
    });

    return Utils.connect(options);
  }

  public async updateVolume(params: { id: string, query: UpdateVolumeQuery, body?: UpdateVolumeBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/' + params.id,
      query: params.query,
      body: params?.body
    });

    return Utils.connect(options);
  }

  public async removeVolume(params: { id: string, query?: RemoveVolumeQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'volumes/' + params.id,
      query: params?.query
    });

    return Utils.connect(options);
  }

  public async deleteUnusedVolume(params: { query?: DeleteUnusedVolumeQuery }): Promise<DeleteUnusedVolumeResponse> {
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

  public async createExec(params: { id: string, body?: CreateExecBody }): Promise<CreateExecResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/exec',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async startExec(params: { id: string, body?: StartExecBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/start',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async resizeExec(params: { id: string, query: ResizeExecQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async inspectExec(params: { id: string }): Promise<InspectExecResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'exec/' + params.id + '/json'
    });

    return await Utils.connect(options);
  }

  // ====================
  // Docker Swarm Section
  // ====================

  public async inspectSwarm(): Promise<InspectSwarmResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm',
    });

    return await Utils.connect(options);
  }

  public async initializeSwarm(params?: { body?: InitializeSwarmBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/init',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async joinSwarm(params?: { body?: JoinSwarmBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/join',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async leaveSwarm(params: { query?: LeaveSwarmQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/leave',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async updateSwarm(params: UpdateSwarmProp): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async getSwarmUnlockKey(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm/unlockkey',
    });

    return await Utils.connect(options);
  }

  public async unlockSwarmManager(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/unlock',
    });

    return await Utils.connect(options);
  }

  // ===================
  // Docker Node Section
  // ===================

  public async listNode(params?: { query?: ListNodeQuery }): Promise<ListNodeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async inspectNode(params: { id: string }): Promise<InspectNodeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes/' + params.id
    });

    return await Utils.connect(options);
  }

  public async deleteNode(params: { id: string, query?: DeleteNodeQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'nodes/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async updateNode(params: { id: string, query: UpdateNodeQuery, body?: UpdateNodeBody }): Promise<void> {
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

  public async listService(params?: { query?: ListServiceQuery }): Promise<ListServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createService(params: { headers?: CreateServiceHeader, body?: CreateServiceBody }): Promise<CreateServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/create',
      headers: params?.headers,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async inspectService(params: { id: string, query?: InspectServiceQuery }): Promise<InspectServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async deleteService(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'services/' + params.id
    });

    return await Utils.connect(options);
  }

  public async updateService(params: { id: string, headers: UpdateServiceHeader, query?: UpdateServiceQuery, body?: UpdateServiceBody }): Promise<UpdateServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/' + params.id,
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async getServiceLogs(params: { id: string, query?: GetServiceLogsQuery }): Promise<string> {
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

  public async listTask(params?: { query?: ListTaskQuery }): Promise<ListTaskResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async inspectTask(params: { id: string }): Promise<InspectTaskResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks/' + params.id,
    });

    return await Utils.connect(options);
  }

  public async getTaskLogs(params: { id: string, query?: GetTaskLogsQuery }): Promise<string> {
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

  public async listSecret(params?: { query?: ListSecretQuery }): Promise<ListSecretResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'secrets',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createSecret(params: { body?: CreateSecretBody }): Promise<CreateSecretResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'secrets/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async inspectSecret(params: { id: string }): Promise<InspectSecretResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'secrets/' + params.id
    });

    return await Utils.connect(options);
  }

  public async deleteSecret(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'secrets/' + params.id
    });

    return await Utils.connect(options);
  }

  public async updateSecret(params: { id: string, query: UpdateSecretQuery, body?: UpdateSecretBody }): Promise<void> {
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

  public async listConfig(params?: { query?: ListConfigQuery }): Promise<ListConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'configs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async createConfig(params: { body?: CreateConfigBody }): Promise<CreateConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'configs/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async inspectConfig(params: { id: string }): Promise<InspectConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'configs/' + params.id
    });

    return await Utils.connect(options);
  }

  public async deleteConfig(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'configs/' + params.id
    });

    return await Utils.connect(options);
  }

  public async updateConfig(params: { id: string, query: UpdateConfigQuery, body?: UpdateConfigBody }): Promise<void> {
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

  public async plugins(params?: { query?: PluginQuery }): Promise<PluginResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginPrivileges(params?: { query?: PluginPrivilegeQuery }): Promise<PluginPrivilegeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/privileges',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginsPull(params: { query: PluginPullQuery, headers?: PluginPullHeader, body?: PluginPullBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/pull',
      headers: params?.headers,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginsInspect(params: { name: string }): Promise<PluginInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/' + params.name + '/json',
    });

    return await Utils.connect(options);
  }

  public async pluginsRemove(params: { name: string, query?: PluginRemoveQuery }): Promise<PluginRemoveResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'plugins/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginsEnable(params: { name: string, query?: PluginEnableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/enable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginsDisable(params: { name: string, query?: PluginDisableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/disable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginsUpgrade(params: { name: string, query: PluginUpgradeQuery, headers?: PluginUpgradeHeader, body?: PluginUpgradeBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/upgrade',
      headers: params.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginsCreate(params: { query: PluginCreateQuery, body?: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/create',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginsPush(params: { name: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/push'
    });

    return await Utils.connect(options);
  }

  public async pluginsSet(params: { name: string, body?: string[] }): Promise<void> {
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
