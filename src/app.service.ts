import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): Promise<string> {
    return Promise.resolve('Hello World!');
  }
}
