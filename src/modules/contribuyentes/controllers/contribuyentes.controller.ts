import { ContribuyentesService } from './../services/contribuyentes.service';
import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';

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

  @Get()
  findAll() {
    try {
      return this.contribuyentesService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
