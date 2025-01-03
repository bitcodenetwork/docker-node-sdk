import os from 'os';
import { CreateContainerBody } from '../interfaces/create-container-body';
import { CreateContainerQuery } from '../interfaces/create-container-query';
import { CreateContainerResponse } from '../interfaces/create-container-response';
import { ContainerList } from '../interfaces/get-container';
import { GetContainerProp } from '../interfaces/get-container-prop';
import { ImageList } from '../interfaces/get-image';
import { GetImageProp } from '../interfaces/get-image-prop';
import { RemoveContainerQuery } from '../interfaces/remove-container-query';
import { RemoveContainerResponse } from '../interfaces/remove-container-response';
import { StartContainerQuery } from '../interfaces/start-container-query';
import { ConnectOptions, Utils } from './utils';
import { StartContainerResponse } from '../interfaces/start-container-response';
import { StopContainerResponse } from '../interfaces/stop-container-response';
import { StopContainerQuery } from '../interfaces/stop-container-query';
import { RestartContainerResponse } from '../interfaces/restart-container-response';
import { RestartContainerQuery } from '../interfaces/restart-container-query';

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

  public async getContainer(params?: GetContainerProp): Promise<ContainerList | string> {
    const queryString = new URLSearchParams();

    if (params) {
      queryString.append('all', params.all ? 'true' : 'false');
      queryString.append('limit', params.limit ? params.limit.toString() : '0');
      queryString.append('size', params.size ? 'true' : 'false');
      queryString.append('filters', params.filters ? JSON.stringify(params.filters) : '');
    }

    const options: ConnectOptions = {
      method: 'GET',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/json?${queryString.toString()}`
    };

    return await Utils.connect(options);
  }

  public async createContainer(body?: CreateContainerBody, query?: CreateContainerQuery): Promise<CreateContainerResponse> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('name', query.name);
      queryString.append('platform', query.platform ? query.platform : '');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/create?${queryString.toString()}`,
      body: body
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async startContainer(id: string, query?: StartContainerQuery): Promise<StartContainerResponse> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('detachKeys', query.detachKeys ? query.detachKeys : '');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/${id}/start?${queryString.toString()}`,
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async stopContainer(id: string, query?: StopContainerQuery): Promise<StopContainerResponse> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('signal', query.signal ? query.signal : '');
      queryString.append('t', query.t ? query.t.toString() : '');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/${id}/stop?${queryString.toString()}`,
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async restartContainer(id: string, query?: RestartContainerQuery): Promise<RestartContainerResponse> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('signal', query.signal ? query.signal : '');
      queryString.append('t', query.t ? query.t.toString() : '');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/${id}/restart?${queryString.toString()}`,
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async removeContainer(id: string, query?: RemoveContainerQuery): Promise<RemoveContainerResponse> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('v', query.v ? 'true' : 'false');
      queryString.append('force', query.force ? 'true' : 'false');
      queryString.append('link', query.link ? 'true' : 'false');
    }

    const options: ConnectOptions = {
      method: 'DELETE',
      socketPath: this.socketPath,
      path: `/${this.version}/containers/${id}?${queryString.toString()}`,
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async getImages(params?: GetImageProp): Promise<ImageList> {
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
}
