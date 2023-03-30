import { AbstractEntity } from '../../../common/abstract.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Contribuyente extends AbstractEntity {
    cedula: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    telefono: string;
    correo: string;
    direccion: string;
    usuario: Usuario;
}
