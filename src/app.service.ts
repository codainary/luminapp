import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import configuration from './config/configuration';
@Injectable()
export class AppService {
  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
  ) {}

  getHello(): string {
    console.log(this.config.database.password);
    return 'Hello World!';
  }
}
