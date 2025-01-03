import { ClientRequest, OutgoingHttpHeaders, request } from "http";
import { RequestOptions } from "https";

export class Utils {
  static async connect(options: ConnectOptions): Promise<any> {
    try {
      const res = await this.req(options);
      return res
    } catch (error: any) {
      return error.message;
    }
  }

  private static req(options: ConnectOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers: OutgoingHttpHeaders = {
        "content-type": "application/json"
      };

      if (options.headers) {
        headers = { ...headers, ...options.headers };
      }

      if (options.body) {
        options.body = JSON.stringify(options.body);
        headers["content-length"] = Buffer.byteLength(options.body);
      }

      if (options.params) {
        const urlParams = this.urlSearchParams(options.params);
        options.path = `${options.path}?${urlParams}`;
      }

      const clientRequest: ClientRequest = request({
        method: options.method,
        path: options.path,
        socketPath: options.socketPath,
        headers: headers
      } as RequestOptions, (res) => {
        let rawData = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          if (res.statusCode !== 200) {
            reject(new Error(rawData));
            return;
          }
          resolve(JSON.parse(rawData));
        });
      });

      clientRequest.on('error', (e) => {
        reject(e);
      });

      // Send the POST data
      clientRequest.write(options.body);

      clientRequest.end();
    });
  }

  static urlSearchParams(params: any): string {
    return Object.entries(params ?? {}).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join('&');
  }
}

export type ConnectOptions = {
  method: string;
  socketPath: string;
  path: string;
  headers?: any;
  params?: any;
  body?: any;
};
