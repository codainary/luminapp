import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DatabaseExceptionFilter extends BaseExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error de base de datos',
      error: {
        message: exception.message,
        //sql: exception.query,
        parameters: exception.parameters,
      },
    };

    const errorResponse = new HttpException(response, response.statusCode);

    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      ...response,
      path: req.url,
      timestamp: new Date().toISOString(),
    });
  }
}
