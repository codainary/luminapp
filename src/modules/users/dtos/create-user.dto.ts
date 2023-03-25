import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  readonly contrasena: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly activo: boolean;
}
