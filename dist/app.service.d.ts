import { ConfigType } from '@nestjs/config';
import configuration from './config/configuration';
export declare class AppService {
    private readonly config;
    constructor(config: ConfigType<typeof configuration>);
    getHello(): string;
}
