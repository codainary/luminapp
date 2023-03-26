import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContribuyenteDto {
  @IsString()
  @IsNotEmpty()
  readonly cedula: string;

  @IsString()
  @IsNotEmpty()
  readonly primerNombre: string;

  @IsString()
  readonly segundoNombre: string;

  @IsString()
  @IsNotEmpty()
  readonly primerApellido: string;

  @IsString()
  @IsNotEmpty()
  readonly segundoApellido: string;

  @IsString()
  @IsNotEmpty()
  readonly telefono: string;

  @IsEmail()
  @IsNotEmpty()
  readonly correo: string;

  @IsString()
  readonly direccion: string;
}

export class UpdateContribuyenteDto extends PartialType(
  CreateContribuyenteDto,
) {}
