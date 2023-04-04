import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    // const dbUser = this.configService.get<string>('DATABASE_HOST');
    const dbHost = this.configService.get<string>('database.port');
    return `<h1>Hello World!</h1> ${dbHost}`;
  }
}
