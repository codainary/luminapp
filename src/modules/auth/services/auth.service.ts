import { Injectable } from '@nestjs/common';

import { UsuariosService } from '../../usuarios/services/usuarios.service';
import { ValidateUsuarioDto } from '../dtos/validate-usuario.dto';

@Injectable()
export class AuthService {
  constructor(private usuariosServices: UsuariosService) {}

  async validateUsuario(usuario: string, contrasena: string): Promise<ValidateUsuarioDto> {
    const usu = await this.usuariosServices.findOneByUsername(usuario);

    if (usu && usu.length > 0) {
      if (usu[0].contrasena === contrasena) {
        const { usuario, contrasena, ...restantes } = usu[0];
        return restantes;
      }
    }

    return null;
  }
}
