import { ClientRequest, request } from "http";

export class Utils {
  static async connect(options: { method: string; socketPath: string; path: string; }): Promise<any> {
    return new Promise((resolve, reject) => {
      const clientRequest: ClientRequest = request(options, (res) => {
        res.setEncoding('utf8');

        let rawData = '';

        res.on('data', (chunk) => {
          rawData += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(rawData));
        });
      });

      clientRequest.on('error', (e) => {
        reject(e);
      });

      clientRequest.end();
    });
  }
}