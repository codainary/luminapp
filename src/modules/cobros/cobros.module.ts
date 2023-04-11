import { Module } from '@nestjs/common';
import { CobrosService } from './services/cobros.service';
import { CobrosController } from './controllers/cobros.controller';

@Module({
  controllers: [CobrosController],
  providers: [CobrosService],
})
export class CobrosModule {}
