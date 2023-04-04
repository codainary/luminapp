import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from './config/configuration';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY)
    private configEnv: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const dbHost = this.configEnv.database.host;
    const dbName = this.configEnv.database.name;
    const soli = this.configEnv.soliConsecutivo;
    return `<h1>Hello World!</h1> ${dbHost + ' --- ' + dbName + ' --- ' + soli}`;
  }
}
