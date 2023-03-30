import { Contribuyente } from './entities/contribuyente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContribuyentesController } from './controllers/contribuyentes.controller';
import { ContribuyentesService } from './services/contribuyentes.service';
import { UsuariosService } from '../usuarios/services/usuarios.service';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule, TypeOrmModule.forFeature([Contribuyente])],
  controllers: [ContribuyentesController],
  providers: [ContribuyentesService],
  exports: [ContribuyentesService],
})
export class ContribuyentesModule {}
