import { Repository } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import { AbstractEntity } from '../../../common/abstract.entity';
import config from '../../../config/configuration';
export declare class Solicitud extends AbstractEntity {
    private solicitudRepo;
    private configEnv;
    constructor(solicitudRepo: Repository<Solicitud>, configEnv: ConfigType<typeof config>);
    direccionFalla: string;
    telefonoContacto: string;
    observacion: string;
    respuesta: string;
    correoRespuesta: string;
    estado: number;
}
