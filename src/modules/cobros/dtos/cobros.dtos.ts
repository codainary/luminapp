import { PartialType } from '@nestjs/mapped-types';

export class CreateCobroDto {}

export class UpdateCobroDto extends PartialType(CreateCobroDto) {}
