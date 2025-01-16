import { ClientRequest, OutgoingHttpHeaders, request } from "http";
import { RequestOptions } from "https";

export class Utils {
  static async connect(options: ConnectOptions): Promise<any> {
    try {
      const res = await this.req(options);

      return res;
    } catch (error: any) {
      throw error.message;
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

      if (options.query) {
        const urlParams = this.urlQuery(options.query);
        options.path = `${options.path}?${urlParams}`;
      }

      const config: RequestOptions = {
        method: options.method,
        path: options.path,
        socketPath: options.socketPath,
        headers: headers,
        timeout: 60000
      }

      const clientRequest: ClientRequest = request(config, (res) => {
        // reject on bad status
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 400) {
          return reject(new Error("Bad response status: " + res.statusCode));
        }

        // cumulate data
        let body: string = "";

        res.setEncoding('utf8');

        res.on('data', (chunk) => body += chunk);

        res.on('end', () => {
          let responseBody;

          try {
            responseBody = body ? JSON.parse(body) : undefined;
          } catch (error) {
            return reject(error);
          }

          resolve(responseBody);
        });
      });

      // Send the POST data
      clientRequest.write(options.body);

      clientRequest.on('error', (e) => {
        reject(e);
      });

      clientRequest.end();
    });
  }

  static urlQuery(params: any): string {
    return Object.entries(params ?? {}).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join('&');
  }
}

export type ConnectOptions = {
  method: string;
  socketPath: string;
  path: string;
  headers?: any;
  query?: any;
  body?: any;
};
