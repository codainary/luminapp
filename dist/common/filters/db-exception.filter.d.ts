import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';
export declare class DatabaseExceptionFilter extends BaseExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost): void;
}
