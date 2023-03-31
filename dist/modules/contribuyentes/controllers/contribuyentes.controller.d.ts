import { ContribuyentesService } from './../services/contribuyentes.service';
import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
export declare class ContribuyentesController {
    private readonly contribuyentesService;
    constructor(contribuyentesService: ContribuyentesService);
    create(payload: CreateContribuyenteDto): Promise<import("../entities/contribuyente.entity").Contribuyente>;
    findAll(): Promise<import("../entities/contribuyente.entity").Contribuyente[]>;
}
