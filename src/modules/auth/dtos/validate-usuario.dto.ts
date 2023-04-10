import { IsNotEmpty, IsNumber } from 'class-validator';
import { Contribuyente } from 'src/modules/contribuyentes/entities/contribuyente.entity';

export class ValidateUsuarioDto {
  @IsNotEmpty()
  @IsNumber()
  readonly rol: number;

  @IsNotEmpty()
  readonly contribuyente: Contribuyente;

  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly fechaCreacion: Date;

  @IsNotEmpty()
  readonly fechaActualizacion: Date;
}
