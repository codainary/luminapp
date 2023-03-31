import { Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { ContribuyentesService } from 'src/modules/contribuyentes/services/contribuyentes.service';
export declare class UsuariosService {
    private readonly usuarioRepo;
    private readonly contribuyentesServices;
    constructor(usuarioRepo: Repository<Usuario>, contribuyentesServices: ContribuyentesService);
    create(data: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    update(id: number, changes: UpdateUsuarioDto): Promise<Usuario>;
    remove(id: number): Promise<Usuario>;
    findOneByUsername(usuario: string): Promise<Usuario[]>;
}
