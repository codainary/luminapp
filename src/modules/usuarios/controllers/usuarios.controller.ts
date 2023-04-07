import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';

import { UsuariosService } from '../services/usuarios.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { AuthenticateGuard } from '../../../common/guards/auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return this.usuariosService.create(createUsuarioDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthenticateGuard) // Is Authenticated?
  @Get()
  findAll() {
    try {
      return this.usuariosService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
