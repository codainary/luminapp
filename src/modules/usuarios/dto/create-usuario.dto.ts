import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  readonly contrasena: string;

  @IsNumber()
  readonly role: number;

  @IsOptional()
  @IsPositive()
  readonly contribuyenteId: number;
}
