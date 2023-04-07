import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UsuariosService } from './services/usuarios.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { ContribuyentesModule } from '../contribuyentes/contribuyentes.module';
import { AuthenticateGuard } from 'src/common/guards/auth.guard';

@Module({
  imports: [ContribuyentesModule, TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, AuthenticateGuard],
  exports: [UsuariosService],
})
export class UsuariosModule {}
