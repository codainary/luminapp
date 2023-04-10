import { CreateSolicitudDto } from '../dtos/solicitudes.dtos';
import { SolicitudesService } from '../services/solicitudes.service';
export declare class SolicitudesController {
    private readonly solicitudService;
    constructor(solicitudService: SolicitudesService);
    create(createUsuarioDto: CreateSolicitudDto): Promise<import("../entities/solicitud.entity").Solicitud>;
    findAll(): Promise<import("../entities/solicitud.entity").Solicitud[]>;
}
