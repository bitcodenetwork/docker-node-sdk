import os from 'os';
import { CreateContainerBody } from '../interfaces/create-container-body';
import { CreateContainerQuery } from '../interfaces/create-container-query';
import { CreateContainerResponse } from '../interfaces/create-container-response';
import { ContainerList } from '../interfaces/get-container';
import { GetContainerProp } from '../interfaces/get-container-prop';
import { ImageList } from '../interfaces/get-image';
import { GetImageProp } from '../interfaces/get-image-prop';
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
      path: `/v1.47/containers/json?${queryString.toString()}`
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
      path: `/v1.47/containers/create?${queryString.toString()}`,
      body: body
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
      path: `/v1.47/images/json?${queryString.toString()}`
    };

    return await Utils.connect(options);
  }
}
