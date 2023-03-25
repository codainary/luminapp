import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  create(payload: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    throw new BadRequestException('Something bad happened', {
      cause: new Error(),
      description: 'Some error description',
    });
  }

  findOne(id: number) {
    return 'This action find a user';
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
