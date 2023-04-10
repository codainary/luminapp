import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsuariosService } from 'src/modules/usuarios/services/usuarios.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private usuarioService: UsuariosService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user.id });
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    const user = this.usuarioService.findOneById(payload.id);
    const userToString = user.toString();
    done(null, userToString);
  }
}
