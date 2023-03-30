import { Repository } from 'typeorm';
import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
import { Contribuyente } from '../entities/contribuyente.entity';
import { UsuariosService } from './../../usuarios/services/usuarios.service';
export declare class ContribuyentesService {
    private readonly contribuyentesRepo;
    private readonly usuariosServices;
    constructor(contribuyentesRepo: Repository<Contribuyente>, usuariosServices: UsuariosService);
    create(data: CreateContribuyenteDto): Promise<Contribuyente>;
}
