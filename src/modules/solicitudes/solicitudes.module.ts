import { Module } from '@nestjs/common';
import { SolicitudesController } from './controllers/solicitudes.controller';
import { MotivosController } from './controllers/motivos.controller';
import { TiposController } from './controllers/tipos.controller';
import { SolicitudesService } from './services/solicitudes.service';
import { MotivosService } from './services/motivos.service';
import { TiposService } from './services/tipos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud])],
  controllers: [SolicitudesController, MotivosController, TiposController],
  providers: [SolicitudesService, MotivosService, TiposService],
  exports: [SolicitudesService],
})
export class SolicitudesModule {}
