import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../config/configuration';
export declare class TypeOrmConfigService implements TypeOrmOptionsFactory {
    private configEnv;
    constructor(configEnv: ConfigType<typeof config>);
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
