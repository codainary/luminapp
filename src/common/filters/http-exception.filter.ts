import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const contex = exception.getResponse();

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const options = { timeZone: timezone };
    const formattedTime = now.toLocaleTimeString([], options);

    response.status(status).json({
      // status,
      path: request.url,
      contex,
      timestamp: {
        time: formattedTime,
        zone: timezone,
      },
    });
  }
}
