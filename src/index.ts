import os from 'os';
import { BuildImageHeader } from '../interfaces/build-image-header';
import { BuildImageQuery } from '../interfaces/build-image-query';
import { CreateContainerBody } from '../interfaces/create-container-body';
import { CreateContainerQuery } from '../interfaces/create-container-query';
import { CreateContainerResponse } from '../interfaces/create-container-response';
import { GetContainerQuery } from '../interfaces/get-container-query';
import { GetContainerResponse } from '../interfaces/get-container-response';
import { GetImageQuery } from '../interfaces/get-image-query';
import { GetImageResponse } from '../interfaces/get-image-response';
import { GetSwarmUnlockKeyResponse } from '../interfaces/get-swarm-unlock-key-response';
import { InitializeSwarmBody } from '../interfaces/initialize-swarm-body';
import { InspectSwarmResponse } from '../interfaces/inspect-swarm-response';
import { JoinSwarmBody } from '../interfaces/join-swarm-body';
import { LeaveSwarmQuery } from '../interfaces/leave-swarm-query';
import { RemoveContainerQuery } from '../interfaces/remove-container-query';
import { RemoveContainerResponse } from '../interfaces/remove-container-response';
import { RestartContainerQuery } from '../interfaces/restart-container-query';
import { RestartContainerResponse } from '../interfaces/restart-container-response';
import { StartContainerQuery } from '../interfaces/start-container-query';
import { StartContainerResponse } from '../interfaces/start-container-response';
import { StopContainerQuery } from '../interfaces/stop-container-query';
import { StopContainerResponse } from '../interfaces/stop-container-response';
import { UpdateSwarmProp } from '../interfaces/update-swarm-prop';
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
  private readonly version: string = "v1.47";

  private createRequestOption(param: { method: "GET" | "POST" | "DELETE"; path: string; headers?: any; params?: any; body?: any; }): ConnectOptions {
    return {
      path: `/${this.version}/${param.path}`,
      method: param.method,
      socketPath: this.socketPath,
      headers: param.headers ?? {},
      params: param.params ?? {},
      body: param.body ?? {}
    }
  }

  public async getContainer(params?: { query?: GetContainerQuery }): Promise<GetContainerResponse | string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'containers/json',
      params: params?.query
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async createContainer(params?: { body?: CreateContainerBody, query?: CreateContainerQuery }): Promise<CreateContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/create',
      params: params?.query,
      body: params?.body
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async startContainer(params: { id: string, query?: StartContainerQuery }): Promise<StartContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/start',
      params: params?.query,
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async stopContainer(params: { id: string, query?: StopContainerQuery }): Promise<StopContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/stop',
      params: params?.query,
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async restartContainer(params: { id: string, query?: RestartContainerQuery }): Promise<RestartContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'containers/' + params.id + '/restart',
      params: params?.query,
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async removeContainer(params: { id: string, query?: RemoveContainerQuery }): Promise<RemoveContainerResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'DELETE',
      path: 'containers/' + params.id,
      params: params?.query,
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async getImages(params?: GetImageQuery): Promise<GetImageResponse> {
    const queryString = new URLSearchParams();

    if (params) {
      queryString.append('all', params.all ? 'true' : 'false');
      queryString.append('shared-size', params['shared-size'] ? 'true' : 'false');
      queryString.append('digests', params.digests ? 'true' : 'false');
      queryString.append('manifests', params.manifests ? 'true' : 'false');
      queryString.append('filters', params.filters ? JSON.stringify(params.filters) : '');
    }

    const options: ConnectOptions = {
      method: 'GET',
      socketPath: this.socketPath,
      path: `/${this.version}/images/json?${queryString.toString()}`
    };

    return await Utils.connect(options);
  }

  public async buildImage(params: { query?: BuildImageQuery, headers?: BuildImageHeader, body: File }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'build',
      headers: params?.headers,
      params: params?.query,
      body: params?.body
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async inspectSwarm(): Promise<InspectSwarmResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm',
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async initializeSwarm(params?: { body?: InitializeSwarmBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/init',
      body: params?.body
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async joinSwarm(params?: { body?: JoinSwarmBody }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/join',
      body: params?.body
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async leaveSwarm(params: { query?: LeaveSwarmQuery }): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/leave',
      params: params?.query
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async updateSwarm(params: UpdateSwarmProp): Promise<string> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/update',
      body: params?.body
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async getSwarmUnlockKey(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'GET',
      path: 'swarm/unlockkey',
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async unlockSwarmManager(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = this.createRequestOption({
      method: 'POST',
      path: 'swarm/unlock',
    });

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }
}
