import { Injectable } from '@angular/core';

import { CalculatorClient } from './proto/calc_pb_service';
import { CalcReply, CalcRequest } from './proto/calc_pb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: CalculatorClient;

  constructor() {
    this.client = new CalculatorClient('http://localhost:8080');
  }

  plus(path: string, a: number, b: number) {
    return new Promise((resolve, reject) => {
      console.log('ApiService.get', path);
      const req = new CalcRequest();
      req.setNumberA(a);
      req.setNumberB(b);
      this.client.plus(req, null, (err, response: CalcReply) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  }
}
