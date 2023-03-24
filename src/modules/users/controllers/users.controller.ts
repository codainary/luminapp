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
} from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
//import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';

@Controller('users')
//@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   throw new ForbiddenException();
  // }

  @Get()
  async findAll() {
    try {
      await this.usersService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
  //   //return this.usersService.findOne(+id);
  // }

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
