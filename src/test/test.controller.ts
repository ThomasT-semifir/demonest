import { TestService } from './test.service';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.findAll()
  }

  @Get('id')
  findById() {
    return "Found by id"
  }

  @Post()
  create() {
    return "created"
  }
}