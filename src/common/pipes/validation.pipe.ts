import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isNaN(value)) {
      return value;
    } else {
      throw new HttpException(
        `The arg ${value} is not allowed as ${metadata.type}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
}
