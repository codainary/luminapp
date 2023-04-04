import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rol: number;

  @IsOptional()
  @IsPositive()
  readonly contribuyenteId: number;
}
