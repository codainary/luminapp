import { ConfigType } from '@nestjs/config';
import config from './config/configuration';
export declare class AppService {
    private configEnv;
    constructor(configEnv: ConfigType<typeof config>);
    getHello(): string;
}
