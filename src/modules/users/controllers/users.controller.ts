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
} from '@nestjs/common';

import { ValidationPipe } from '../../../common/pipes/validation.pipe';
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

  @Get(':id')
  async findOne(@Param('id', ValidationPipe) id: number) {
    try {
      await this.usersService.findOne(id);
    } catch (error) {
      throw new HttpException(
        `Someting was wrong`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
