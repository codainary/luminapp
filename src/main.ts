import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ConfigService to import env vars
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');
  const secretSessionKey = configService.get<string>('SECRET_SESSION_KEY');

  app.use(
    session({
      secret: secretSessionKey,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.setGlobalPrefix('v1');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  await app.listen(port);
}
bootstrap();
