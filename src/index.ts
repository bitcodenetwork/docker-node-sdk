import os from 'os';
import { CreateContainerBody } from '../interfaces/create-container-body';
import { CreateContainerQuery } from '../interfaces/create-container-query';
import { CreateContainerResponse } from '../interfaces/create-container-response';
import { GetContainerResponse } from '../interfaces/get-container-response';
import { GetContainerQuery } from '../interfaces/get-container-query';
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

  public async getContainer({ params }: { params?: GetContainerQuery }): Promise<GetContainerResponse | string> {
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

  public async inspectSwarm(): Promise<InspectSwarmResponse> {
    const options: ConnectOptions = {
      method: 'GET',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm`
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async initializeSwarm(body?: InitializeSwarmBody): Promise<string> {
    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/init`,
      body: body
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async joinSwarm(body?: JoinSwarmBody): Promise<string> {
    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/join`,
      body: body
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async leaveSwarm(query?: LeaveSwarmQuery): Promise<string> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('force', query.force ? 'true' : 'false');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/leave?${queryString.toString()}`,
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async updateSwarm({ body, query }: UpdateSwarmProp): Promise<string> {
    const queryString = new URLSearchParams();

    if (query) {
      queryString.append('version', query.version.toString());
      queryString.append('rotateWorkerToken', query.rotateWorkerToken ? 'true' : 'false');
      queryString.append('rotateManagerToken', query.rotateManagerToken ? 'true' : 'false');
      queryString.append('rotateManagerUnlockKey', query.rotateManagerUnlockKey ? 'true' : 'false');
    }

    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/update?${queryString.toString()}`,
      body: body
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async getSwarmUnlockKey(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = {
      method: 'GET',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/unlockkey`
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }

  public async unlockSwarmManager(): Promise<GetSwarmUnlockKeyResponse> {
    const options: ConnectOptions = {
      method: 'POST',
      socketPath: this.socketPath,
      path: `/${this.version}/swarm/unlock`
    };

    try {
      return await Utils.connect(options);
    } catch (error: any) {
      return error.message;
    }
  }
}
