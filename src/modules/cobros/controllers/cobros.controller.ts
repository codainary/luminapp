import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CobrosService } from '../services/cobros.service';
import { CreateCobroDto } from '../dtos/cobros.dtos';
import { UpdateCobroDto } from './dtos/update-cobro.dto';

@Controller('cobros')
export class CobrosController {
  constructor(private readonly cobrosService: CobrosService) {}

  @Post()
  create(@Body() createCobroDto: CreateCobroDto) {
    return this.cobrosService.create(createCobroDto);
  }

  @Get()
  findAll() {
    return this.cobrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cobrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCobroDto: UpdateCobroDto) {
    return this.cobrosService.update(+id, updateCobroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cobrosService.remove(+id);
  }
}