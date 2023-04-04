import { Repository } from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';
export declare class Solicitud extends AbstractEntity {
    private solicitudRepo;
    constructor(solicitudRepo: Repository<Solicitud>);
    nroSolicitud: string;
    generarCodigo(): Promise<void>;
    direccionFalla: string;
    telefonoContacto: string;
    observacion: string;
    respuesta: string;
    correoRespuesta: string;
    estado: number;
}
