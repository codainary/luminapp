import { UsuariosService } from '../../usuarios/services/usuarios.service';
export declare class AuthService {
    private readonly usuariosServices;
    constructor(usuariosServices: UsuariosService);
    validateUser(usuario: string, contrasena: string): Promise<any>;
}
