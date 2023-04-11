import { Injectable } from '@nestjs/common';
import { CreateCobroDto, UpdateCobroDto } from '../dtos/cobros.dtos';

@Injectable()
export class CobrosService {
  create(createCobroDto: CreateCobroDto) {
    return 'This action adds a new cobro';
  }

  findAll() {
    return `This action returns all cobros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cobro`;
  }

  update(id: number, updateCobroDto: UpdateCobroDto) {
    return `This action updates a #${id} cobro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cobro`;
  }
}
