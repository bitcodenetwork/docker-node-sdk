import os from 'os';
import { ContainerList } from '../types/get-container';
import { GetContainerProp } from '../types/get-container-prop';
import { Utils } from './utils';

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

  public async getContainer({ all, limit, size, filters }: GetContainerProp): Promise<ContainerList> {

    const queryString = new URLSearchParams();

    queryString.append('all', all ? 'true' : 'false');
    queryString.append('limit', limit ? limit.toString() : '0');
    queryString.append('size', size ? 'true' : 'false');
    queryString.append('filters', filters ? JSON.stringify(filters) : '');

    const options = {
      method: 'GET',
      socketPath: this.socketPath,
      path: `/v1.26/containers/json?${queryString.toString()}`
    };

    return await Utils.connect(options);
  }
}
