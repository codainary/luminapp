import { UsuariosService } from '../../usuarios/services/usuarios.service';
import { ValidateUsuarioDto } from '../dtos/validate-usuario.dto';
export declare class AuthService {
    private usuariosServices;
    constructor(usuariosServices: UsuariosService);
    validateUsuario(usuario: string, contrasena: string): Promise<ValidateUsuarioDto>;
}
