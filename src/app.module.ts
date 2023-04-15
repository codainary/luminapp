import * as Joi from 'joi';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { enviroments } from './config/enviroments';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { DatabaseExceptionFilter } from './common/filters/db-exception.filter';
import { TypeOrmConfigService } from './database/typeorm.config';
import { ContribuyentesModule } from './modules/contribuyentes/contribuyentes.module';
import { AuthModule } from './modules/auth/auth.module';
import { SolicitudesModule } from './modules/solicitudes/solicitudes.module';
import config from './config/configuration';
import { validate } from './config/env.validation';
import { CobrosModule } from './modules/cobros/cobros.module';
import { DeudasModule } from './modules/deudas/deudas.module';
import { PagosModule } from './modules/pagos/pagos.module';
import { UnidadesModule } from './modules/unidades/unidades.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: process.env.NODE_ENV !== 'production' ? false : true,
      load: [config],
      validate,
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      validationSchema: Joi.object({
        DATABASE_NAME: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        SOLICITUDES_CONSECUTIVO: Joi.number().required(),
        JWT_SECRET_KEY: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UsuariosModule,
    ContribuyentesModule,
    AuthModule,
    SolicitudesModule,
    CobrosModule,
    DeudasModule,
    PagosModule,
    UnidadesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: DatabaseExceptionFilter,
    },
    TypeOrmConfigService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
