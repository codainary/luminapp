import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateSolicitudDto } from '../dtos/solicitudes.dtos';
import { SolicitudesService } from '../services/solicitudes.service';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudService: SolicitudesService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateSolicitudDto) {
    try {
      return this.solicitudService.create(createUsuarioDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  findAll() {
    try {
      return this.solicitudService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.solicitudService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.solicitudService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.solicitudService.remove(+id);
  // }
}
