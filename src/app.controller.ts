import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {AppDto} from "./app.dto";

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(): string {
    return 'this will create something new'
  }

  @Get(':id')
  getHello(@Param('id') id: string, @Body() appDto: AppDto): string {
    console.log('log: id: ', id)
    console.log('log: body: ', appDto)
    return this.appService.getHello();
  }
}
