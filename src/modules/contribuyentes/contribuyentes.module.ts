import { Contribuyente } from './entities/contribuyente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContribuyentesController } from './controllers/contribuyentes.controller';
import { ContribuyentesService } from './services/contribuyentes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contribuyente])],
  controllers: [ContribuyentesController],
  providers: [ContribuyentesService],
})
export class ContribuyentesModule {}
