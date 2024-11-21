import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/h2')
  getHello2() {
    return this.appService.get555()
  }
  @Get('/')
  getArray() {
    return this.appService.getArray()
  }
}
