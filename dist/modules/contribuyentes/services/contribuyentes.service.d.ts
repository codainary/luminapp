import { Repository } from 'typeorm';
import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
import { Contribuyente } from '../entities/contribuyente.entity';
export declare class ContribuyentesService {
    private readonly contribuyentesRepo;
    constructor(contribuyentesRepo: Repository<Contribuyente>);
    create(payload: CreateContribuyenteDto): Promise<Contribuyente>;
}
