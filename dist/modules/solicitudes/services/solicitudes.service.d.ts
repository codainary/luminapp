import { Solicitud } from '../entities/solicitud.entity';
import { Repository } from 'typeorm';
import { CreateSolicitudDto } from '../dtos/solicitudes.dtos';
export declare class SolicitudesService {
    private readonly solicitudRepo;
    constructor(solicitudRepo: Repository<Solicitud>);
    create(data: CreateSolicitudDto): Promise<Solicitud>;
    findAll(): Promise<Solicitud[]>;
}
