import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World555!';
  }
  get555() {
    return {
      version: '15.55.5',
      message: 'Nest narak...'
    }
  }
  getArray() {
    return [1, 2, 3, 4, 5];
  }
}
