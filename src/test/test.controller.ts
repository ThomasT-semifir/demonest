import { TestService } from './test.service';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';

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
  create(@Body() user: User): Promise<User> {
    return this.testService.create(user);
  }
}