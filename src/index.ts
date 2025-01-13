import os from 'os';
import { DockerConfigQuery, DockerConfigResponse } from './types/config';
import { DockerConfigCreateProp, DockerConfigCreateResponse } from './types/config-create';
import { DockerConfigInspectResponse } from './types/config-inspect';
import { DockerConfigUpdateBody, DockerConfigUpdateQuery } from './types/config-update';
import { DockerContainerProp, DockerContainerResponse } from './types/container';
import { DockerContainerArchiveQuery } from './types/container-archive';
import { DockerContainerAttachQuery } from './types/container-attach';
import { DockerContainerChangeProp, DockerContainerChangeResponse } from './types/container-change';
import { DockerContainerCreateProp, DockerContainerCreateResponse } from './types/container-create';
import { DockerContainerExtractQuery } from './types/container-extract';
import { ContainerInspectResponse, DockerContainerInspectProp } from './types/container-inspect';
import { DockerContainerKillQuery } from './types/container-kill';
import { DockerContainerLogProp } from './types/container-log';
import { DockerContainerPruneQuery, DockerContainerPruneResponse } from './types/container-prune';
import { DockerContainerRemoveQuery } from './types/container-remove';
import { DockerContainerRenameQuery } from './types/container-rename';
import { DockerContainerResizeQuery } from './types/container-resize';
import { DockerContainerRestartQuery } from './types/container-restart';
import { DockerContainerStartQuery } from './types/container-start';
import { DockerContainerStatQuery, DockerContainerStatResponse } from './types/container-stat';
import { DockerContainerStopQuery } from './types/container-stop';
import { DockerContainerTopProp, DockerContainerTopResponse } from './types/container-top';
import { DockerContainerUpdateBody, DockerContainerUpdateResponse } from './types/container-update';
import { DockerContainerWaitQuery, DockerContainerWaitResponse } from './types/container-wait';
import { DockerDistributionResponse } from './types/distribution';
import { DockerExecBody, DockerExecResponse } from './types/exec-create';
import { DockerExecInspectResponse } from './types/exec-inspect';
import { DockerExecResizeQuery } from './types/exec-resize';
import { DockerExecStartBody } from './types/exec-start';
import { DockerImageQuery, DockerImageResponse } from './types/image';
import { DockerImageBuildHeader, DockerImageBuildQuery } from './types/image-build';
import { DockerImageBuildPruneQuery, DockerImageBuildPruneResponse } from './types/image-build-prune';
import { DockerImageCommitBody, DockerImageCommitQuery, DockerImageCommitResponse } from './types/image-commit';
import { DockerImageCreateHeader, DockerImageCreateQuery } from './types/image-create';
import { DockerImageGetSeveralQuery } from './types/image-get';
import { DockerImageHistoryResponse } from './types/image-history';
import { DockerImageInspectResponse } from './types/image-inspect';
import { DockerImageLoadQuery } from './types/image-load';
import { DockerImagePushHeader, DockerImagePushQuery } from './types/image-push';
import { DockerImageRemoveQuery, DockerImageRemoveResponse } from './types/image-remove';
import { DockerImageSearchQuery, DockerImageSearchResponse } from './types/image-search';
import { DockerImageTagQuery } from './types/image-tag';
import { DockerImagesPruneQuery, DockerImagesPruneResponse } from './types/images-prune';
import { DockerNetworkQuery, DockerNetworkResponse } from './types/network';
import { DockerNetworkConnectBody } from './types/network-connect';
import { DockerNetworkCreateBody, DockerNetworkCreateResponse } from './types/network-create';
import { DockerNetworkDisconnectBody } from './types/network-disconnect';
import { DockerNetworkInspectQuery, DockerNetworkInspectResponse } from './types/network-inspect';
import { DockerNetworkPruneQuery, DockerNetworkPruneResponse } from './types/network-prune';
import { DockerNodeQuery, DockerNodeResponse } from './types/node';
import { DockerNodeDeleteQuery } from './types/node-delete';
import { DockerNodeInspectResponse } from './types/node-inspect';
import { DockerNodeUpdateBody, DockerNodeUpdateQuery } from './types/node-update';
import { DockerPluginQuery, DockerPluginResponse } from './types/plugin';
import { DockerPluginDisableQuery } from './types/plugin-disable';
import { DockerPluginEnableQuery } from './types/plugin-enable';
import { DockerPluginInspectResponse } from './types/plugin-inspect';
import { DockerPluginPrivilegeQuery, DockerPluginPrivilegeResponse } from './types/plugin-privilege';
import { DockerPluginPullBody, DockerPluginPullHeader, DockerPluginPullQuery } from './types/plugin-pull';
import { DockerPluginRemoveQuery, DockerPluginRemoveResponse } from './types/plugin-remove';
import { DockerPluginCreateQuery } from './types/plugins-create';
import { DockerPluginUpgradeBody, DockerPluginUpgradeHeader, DockerPluginUpgradeQuery } from './types/plugins-upgrade';
import { DockerSecretQuery, DockerSecretResponse } from './types/secret';
import { DockerSecretCreateBody, DockerSecretCreateResponse } from './types/secret-create';
import { DockerSecretInspectResponse } from './types/secret-inspect';
import { DockerSecretUpdateBody, DockerSecretUpdateQuery } from './types/secret-update';
import { DockerServiceQuery, DockerServiceResponse } from './types/service';
import { DockerServiceCreateBody, DockerServiceCreateHeader, DockerServiceCreateResponse } from './types/service-create';
import { DockerServiceInspectQuery, DockerServiceInspectResponse } from './types/service-inspect';
import { DockerServiceLogQuery } from './types/service-log';
import { DockerServiceUpdateBody, DockerServiceUpdateHeader, DockerServiceUpdateQuery, DockerServiceUpdateResponse } from './types/service-update';
import { DockerSwarmResponse } from './types/swarm';
import { DockerSwarmInitBody } from './types/swarm-init';
import { DockerSwarmJoinBody } from './types/swarm-join';
import { DockerSwarmLeaveQuery } from './types/swarm-leave';
import { DockerSwarmUnlockKeyQuery } from './types/swarm-unlock';
import { DockerSwarmUnlockKeyResponse } from './types/swarm-unlock-key';
import { DockerSwarmUpdateBody, DockerSwarmUpdateQuery } from './types/swarm-update';
import { DockerSystemAuthBody, DockerSystemAuthResponse } from './types/system-auth';
import { DockerSystemDfQuery, DockerSystemDfResponse } from './types/system-df';
import { DockerSystemEventQuery, DockerSystemEventResponse } from './types/system-event';
import { DockerSystemInfoResponse } from './types/system-info';
import { DockerSystemPingResponse } from './types/system-ping';
import { DockerSystemVersionResponse } from './types/system-version';
import { DockerTaskQuery, DockerTaskResponse } from './types/task';
import { DockerTaskInspectResponse } from './types/task-inspect';
import { DockerTaskLogQuery } from './types/task-log';
import { DockerVolumeListQuery, DockerVolumeListResponse } from './types/volume';
import { DockerVolumeCreateBody, DockerVolumeCreateResponse } from './types/volume-create';
import { DockerVolumeInspectResponse } from './types/volume-inspect';
import { DockerVolumePruneQuery, DockerVolumePruneResponse } from './types/volume-prune';
import { DockerVolumeRemoveQuery } from './types/volume-remove';
import { DockerVolumeUpdateBody, DockerVolumeUpdateQuery } from './types/volume-update';
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

  private createRequestOption(param: { method: "GET" | 'PUT' | "POST" | "DELETE" | "HEAD"; path: string; headers?: any; query?: any; body?: any; }): ConnectOptions {
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

  public async container(params?: DockerContainerProp): Promise<DockerContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerCreate(params?: DockerContainerCreateProp): Promise<DockerContainerCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/create',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async containerInspect(params: DockerContainerInspectProp): Promise<ContainerInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerTop(params: DockerContainerTopProp): Promise<DockerContainerTopResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/top',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerLog(params: DockerContainerLogProp): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/logs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerChange(params: DockerContainerChangeProp): Promise<DockerContainerChangeResponse> {
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

  public async containerStat(params: { id: string, query?: DockerContainerStatQuery }): Promise<DockerContainerStatResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/stats',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerResize(params: { id: string, query: DockerContainerResizeQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async containerStart(params: { id: string, query?: DockerContainerStartQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/start',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerStop(params: { id: string, query?: DockerContainerStopQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/stop',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerRestart(params: { id: string, query?: DockerContainerRestartQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/restart',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerKill(params: { id: string, query?: DockerContainerKillQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/kill',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerUpdate(params: { id: string, body: DockerContainerUpdateBody }): Promise<DockerContainerUpdateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async containerRename(params: { id: string, query: DockerContainerRenameQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/rename',
      query: params.query,
    });

    return await Utils.connect(options);
  }

  public async containerPause(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/pause',
    });

    return await Utils.connect(options);
  }

  public async containerUnpause(params: { id: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/unpause',
    });

    return await Utils.connect(options);
  }

  public async containerAttach(params: { id: string, query?: DockerContainerAttachQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerAttachViaWebsocket(params: { id: string, query?: DockerContainerAttachQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/attach/ws',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerWait(params: { id: string, query?: DockerContainerWaitQuery }): Promise<DockerContainerWaitResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/wait',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async containerRemove(params: { id: string, query?: DockerContainerRemoveQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'containers/' + params.id,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async containerArchiveHead(params: { id: string, path: DockerContainerArchiveQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'HEAD',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async containerArchive(params: { id: string, path: DockerContainerArchiveQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/' + params.id + '/archive',
      query: params?.path
    });

    return await Utils.connect(options);
  }

  public async containerExtract(params: { id: string, path: DockerContainerExtractQuery, body: File }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'PUT',
      path: 'containers/' + params.id + '/archive',
      query: params.path,
      body: params.body
    });

    return await Utils.connect(options);
  }

  public async containerPrune(params?: { query?: DockerContainerPruneQuery }): Promise<DockerContainerPruneResponse> {
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

  public async image(params?: { query?: DockerImageQuery }): Promise<DockerImageResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'images/json',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageBuild(params: { query?: DockerImageBuildQuery, headers?: DockerImageBuildHeader, body: File }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build',
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async imageBuildPrune(params: { query?: DockerImageBuildPruneQuery }): Promise<DockerImageBuildPruneResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build/prune',
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageCreate(params: { query?: DockerImageCreateQuery, headers?: DockerImageCreateHeader, body?: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'image/create',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageInspect(params: { name: string }): Promise<DockerImageInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/json',
    });

    return await Utils.connect(options);
  }

  public async imageHistory(params: { name: string }): Promise<DockerImageHistoryResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/history',
    });

    return await Utils.connect(options);
  }

  public async imagePush(params: { name: string; query?: DockerImagePushQuery; headers?: DockerImagePushHeader }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/push',
      headers: params?.headers,
      query: params?.query,
    });

    return await Utils.connect(options);
  }

  public async imageTag(params: { name: string; query?: DockerImageTagQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/' + params.name + '/tag',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageRemove(params: { name: string; query?: DockerImageRemoveQuery }): Promise<DockerImageRemoveResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageSearch(params: { query?: DockerImageSearchQuery }): Promise<DockerImageSearchResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'images/search',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imagePrune(params: { query?: DockerImagesPruneQuery }): Promise<DockerImagesPruneResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/prune',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageCommit(params: { query?: DockerImageCommitQuery, body?: DockerImageCommitBody }): Promise<DockerImageCommitResponse> {
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

  public async imageGetSeveral(params: { query?: DockerImageGetSeveralQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/get',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async imageLoad(params: { query?: DockerImageLoadQuery, body?: string }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'images/load',
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  // ======================
  // Docker Network Section
  // ======================

  public async network(params?: { query?: DockerNetworkQuery }): Promise<DockerNetworkResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'networks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async networkInspect(params: { id: string, query?: DockerNetworkInspectQuery }): Promise<DockerNetworkInspectResponse> {
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

  public async networkCreate(params: { body?: DockerNetworkCreateBody }): Promise<DockerNetworkCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/create',
      body: params?.body,
    });

    return await Utils.connect(options);
  }

  public async networkConnect(params: { id: string, body?: DockerNetworkConnectBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/connect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async networkDisconnect(params: { id: string, body?: DockerNetworkDisconnectBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'networks/' + params.id + '/disconnect',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async networkPrune(params: { query?: DockerNetworkPruneQuery }): Promise<DockerNetworkPruneResponse> {
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

  public async volume(params?: { query?: DockerVolumeListQuery }): Promise<DockerVolumeListResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async volumeCreate(params: { body?: DockerVolumeCreateBody }): Promise<DockerVolumeCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async volumeInspect(params: { id: string }): Promise<DockerVolumeInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'volumes/' + params.id
    });

    return Utils.connect(options);
  }

  public async volumeUpdate(params: { id: string, query: DockerVolumeUpdateQuery, body?: DockerVolumeUpdateBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'volumes/' + params.id,
      query: params.query,
      body: params?.body
    });

    return Utils.connect(options);
  }

  public async volumeRemove(params: { id: string, query?: DockerVolumeRemoveQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'volumes/' + params.id,
      query: params?.query
    });

    return Utils.connect(options);
  }

  public async volumePrune(params: { query?: DockerVolumePruneQuery }): Promise<DockerVolumePruneResponse> {
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

  public async exec(params: { id: string, body?: DockerExecBody }): Promise<DockerExecResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/exec',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async execStart(params: { id: string, body?: DockerExecStartBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/start',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async execResize(params: { id: string, query: DockerExecResizeQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'exec/' + params.id + '/resize',
      query: params.query
    });

    return await Utils.connect(options);
  }

  public async execInspect(params: { id: string }): Promise<DockerExecInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'exec/' + params.id + '/json'
    });

    return await Utils.connect(options);
  }

  // ====================
  // Docker Swarm Section
  // ====================

  public async swarm(): Promise<DockerSwarmResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm',
    });

    return await Utils.connect(options);
  }

  public async swarmInit(params?: { body?: DockerSwarmInitBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/init',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmJoin(params?: { body?: DockerSwarmJoinBody }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/join',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmLeave(params: { query?: DockerSwarmLeaveQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/leave',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async swarmUpdate(params: { query?: DockerSwarmUpdateQuery, body?: DockerSwarmUpdateBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/update',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async swarmUnlockKey(): Promise<DockerSwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm/unlockkey',
    });

    return await Utils.connect(options);
  }

  public async swarmUnlock(params: { query: DockerSwarmUnlockKeyQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/unlock',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  // ===================
  // Docker Node Section
  // ===================

  public async node(params?: { query?: DockerNodeQuery }): Promise<DockerNodeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async nodeInspect(params: { id: string }): Promise<DockerNodeInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'nodes/' + params.id
    });

    return await Utils.connect(options);
  }

  public async nodeDelete(params: { id: string, query?: DockerNodeDeleteQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'nodes/' + params.id,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async nodeUpdate(params: { id: string, query: DockerNodeUpdateQuery, body?: DockerNodeUpdateBody }): Promise<void> {
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

  public async service(params?: { query?: DockerServiceQuery }): Promise<DockerServiceResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'services',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async serviceCreate(params: { headers?: DockerServiceCreateHeader, body?: DockerServiceCreateBody }): Promise<DockerServiceCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/create',
      headers: params?.headers,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async serviceInspect(params: { id: string, query?: DockerServiceInspectQuery }): Promise<DockerServiceInspectResponse> {
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

  public async serviceUpdate(params: { id: string, headers: DockerServiceUpdateHeader, query?: DockerServiceUpdateQuery, body?: DockerServiceUpdateBody }): Promise<DockerServiceUpdateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'services/' + params.id,
      headers: params?.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async serviceLog(params: { id: string, query?: DockerServiceLogQuery }): Promise<string> {
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

  public async task(params?: { query?: DockerTaskQuery }): Promise<DockerTaskResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async taskInspect(params: { id: string }): Promise<DockerTaskInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'tasks/' + params.id,
    });

    return await Utils.connect(options);
  }

  public async getTaskLogs(params: { id: string, query?: DockerTaskLogQuery }): Promise<string> {
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

  public async secret(params?: { query?: DockerSecretQuery }): Promise<DockerSecretResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'secrets',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async secretCreate(params: { body?: DockerSecretCreateBody }): Promise<DockerSecretCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'secrets/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async secretInspect(params: { id: string }): Promise<DockerSecretInspectResponse> {
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

  public async secretUpdate(params: { id: string, query: DockerSecretUpdateQuery, body?: DockerSecretUpdateBody }): Promise<void> {
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

  public async config(params?: { query?: DockerConfigQuery }): Promise<DockerConfigResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'configs',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async configCreate(params: DockerConfigCreateProp): Promise<DockerConfigCreateResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'configs/create',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async configInspect(params: { id: string }): Promise<DockerConfigInspectResponse> {
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

  public async configUpdate(params: { id: string, query: DockerConfigUpdateQuery, body?: DockerConfigUpdateBody }): Promise<void> {
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

  public async plugin(params?: { query?: DockerPluginQuery }): Promise<DockerPluginResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginPrivilege(params?: { query?: DockerPluginPrivilegeQuery }): Promise<DockerPluginPrivilegeResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/privileges',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginPull(params: { query: DockerPluginPullQuery, headers?: DockerPluginPullHeader, body?: DockerPluginPullBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/pull',
      headers: params?.headers,
      query: params.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginInspect(params: { name: string }): Promise<DockerPluginInspectResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'plugins/' + params.name + '/json',
    });

    return await Utils.connect(options);
  }

  public async pluginRemove(params: { name: string, query?: DockerPluginRemoveQuery }): Promise<DockerPluginRemoveResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'plugins/' + params.name,
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginEnable(params: { name: string, query?: DockerPluginEnableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/enable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginDisable(params: { name: string, query?: DockerPluginDisableQuery }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/disable',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async pluginUpgrade(params: { name: string, query: DockerPluginUpgradeQuery, headers?: DockerPluginUpgradeHeader, body?: DockerPluginUpgradeBody[] }): Promise<void> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'plugins/' + params.name + '/upgrade',
      headers: params.headers,
      query: params?.query,
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async pluginCreate(params: { query: DockerPluginCreateQuery, body?: string }): Promise<void> {
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

  public async systemAuth(params?: { body: DockerSystemAuthBody }): Promise<DockerSystemAuthResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'auth/config',
      body: params?.body
    });

    return await Utils.connect(options);
  }

  public async info(): Promise<DockerSystemInfoResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'info'
    });

    return await Utils.connect(options);
  }

  public async version(): Promise<DockerSystemVersionResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'version'
    });

    return await Utils.connect(options);
  }

  public async ping(): Promise<DockerSystemPingResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'ping'
    });

    return await Utils.connect(options);
  }

  public async pingHead(): Promise<DockerSystemPingResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'HEAD',
      path: 'ping'
    });

    return await Utils.connect(options);
  }

  public async event(params?: { query?: DockerSystemEventQuery }): Promise<DockerSystemEventResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'events',
      query: params?.query
    });

    return await Utils.connect(options);
  }

  public async systemDf(params?: { query?: DockerSystemDfQuery }): Promise<DockerSystemDfResponse> {
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

  public async distribution(params: { id: string }): Promise<DockerDistributionResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'distribution/' + params.id + '/json',
    });

    return await Utils.connect(options);
  }
}
