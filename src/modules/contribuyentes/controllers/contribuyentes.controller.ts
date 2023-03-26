import { ContribuyentesService } from './../services/contribuyentes.service';
import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';

import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';

@Controller('contribuyentes')
export class ContribuyentesController {
  constructor(private readonly contribuyentesService: ContribuyentesService) {}
  @Post()
  create(@Body() payload: CreateContribuyenteDto) {
    try {
      return this.contribuyentesService.create(payload);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
