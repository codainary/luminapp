import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  InternalServerErrorException,
} from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('users')
//@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    try {
      return this.usersService.create(payload);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  async findAll() {
    try {
      await this.usersService.findAll();
    } catch (error) {
      //
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.usersService.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

  // @Get()
  // async findAll() {
  //   try {
  //     await this.usersService.findAll();
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.FORBIDDEN,
  //         error: 'This is a custom message',
  //       },
  //       HttpStatus.FORBIDDEN,
  //       {
  //         cause: error,
  //         description: 'User not found',
  //       },
  //     );
  //   }
  // }
}
