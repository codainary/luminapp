import { PassportSerializer } from '@nestjs/passport';
import { UsuariosService } from 'src/modules/usuarios/services/usuarios.service';
export declare class SessionSerializer extends PassportSerializer {
    private usuarioService;
    constructor(usuarioService: UsuariosService);
    serializeUser(user: any, done: (err: Error, user: any) => void): any;
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any;
}
