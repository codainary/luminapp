import { Repository } from 'typeorm';
import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
import { Contribuyente } from '../entities/contribuyente.entity';
export declare class ContribuyentesService {
    private readonly contribuyentesRepo;
    constructor(contribuyentesRepo: Repository<Contribuyente>);
    findAll(): Promise<Contribuyente[]>;
    create(data: CreateContribuyenteDto): Promise<Contribuyente>;
    findOne(id: number): Promise<Contribuyente>;
}
