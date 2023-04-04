import { AbstractEntity } from '../../../common/abstract.entity';
import { Contribuyente } from '../../contribuyentes/entities/contribuyente.entity';
export declare class Usuario extends AbstractEntity {
    usuario: string;
    contrasena: string;
    rol: number;
    contribuyente: Contribuyente;
}
