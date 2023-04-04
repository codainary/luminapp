import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from '../config/configuration';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(config.KEY)
    private configEnv: ConfigType<typeof config>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configEnv.database.host,
      port: this.configEnv.database.port,
      username: this.configEnv.database.username,
      password: this.configEnv.database.password,
      database: this.configEnv.database.name,
      entities: ['dist/**/*.entity.js'],
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
