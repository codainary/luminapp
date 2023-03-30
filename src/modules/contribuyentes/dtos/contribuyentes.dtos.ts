import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

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

  @IsPositive()
  @IsOptional()
  readonly usuarioId: number;
}

export class UpdateContribuyenteDto extends PartialType(CreateContribuyenteDto) {}
