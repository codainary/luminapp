import { Contribuyente } from 'src/modules/contribuyentes/entities/contribuyente.entity';
export declare class ValidateUsuarioDto {
    readonly role: number;
    readonly contribuyente: Contribuyente;
    readonly id: number;
    readonly fechaCreacion: Date;
    readonly fechaActualizacion: Date;
}
