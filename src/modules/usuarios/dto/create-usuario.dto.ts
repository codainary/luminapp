import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  readonly contrasena: string;

  @IsBoolean()
  readonly activo: boolean;
}
