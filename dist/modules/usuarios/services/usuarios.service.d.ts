import { Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
export declare class UsuariosService {
    private readonly usuariosRepo;
    constructor(usuariosRepo: Repository<Usuario>);
    create(payload: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    update(id: number, changes: UpdateUsuarioDto): Promise<Usuario>;
    remove(id: number): Promise<Usuario>;
}
