import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../../usuarios/services/usuarios.service';
import { ValidateUsuarioDto } from '../dtos/validate-usuario.dto';
export declare class AuthService {
    private usuariosServices;
    private readonly jwtService;
    constructor(usuariosServices: UsuariosService, jwtService: JwtService);
    validateUsuario(usuario: string, contrasena: string): Promise<ValidateUsuarioDto>;
    login(username: any): Promise<{
        access_token: string;
    }>;
}
