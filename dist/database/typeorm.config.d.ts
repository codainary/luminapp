import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
export declare const typeOrmModuleOptions: (configService?: ConfigService) => DataSourceOptions;
export declare const typeOrmConfigAsync: TypeOrmModuleAsyncOptions;
declare const _default: DataSource;
export default _default;
