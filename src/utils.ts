import { ClientRequest, request } from "http";

export class Utils {
  static async connect(options: ConnectOptions): Promise<any> {
    return new Promise((resolve, reject) => {

      if (!options.body) {
        options.body = {};
      }

      if (options.body) {
        options.body = JSON.stringify(options.body);
      }

      const clientRequest: ClientRequest = request({
        method: options.method,
        path: options.path,
        socketPath: options.socketPath,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': options.body ? Buffer.byteLength(options.body) : 0
        }
      }, (res) => {
        res.setEncoding('utf8');

        let rawData = '';

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
}

export type ConnectOptions = { method: string; socketPath: string; path: string; body?: any };