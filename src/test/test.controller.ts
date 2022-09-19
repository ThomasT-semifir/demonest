import { UpdateUserDto } from 'src/test/dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { TestService } from './test.service';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.testService.findById(id)
  }

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.testService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.testService.update(id, user)
  }
}