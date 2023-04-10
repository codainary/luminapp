import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSolicitudDto {
  @IsString()
  @IsNotEmpty()
  readonly direccionFalla: string;

  @IsString()
  @IsNotEmpty()
  telefonoContacto: string;

  @IsString()
  @IsNotEmpty()
  observacion: string;

  @IsEmail()
  @IsNotEmpty()
  correoRespuesta: string;

  @IsNumber()
  @IsOptional()
  readonly estado: number;
}
