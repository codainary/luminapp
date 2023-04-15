import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsuariosService } from '../../usuarios/services/usuarios.service';
import { ValidateUsuarioDto } from '../dtos/validate-usuario.dto';

@Injectable()
export class AuthService {
  constructor(private usuariosServices: UsuariosService, private readonly jwtService: JwtService) {}

  async validateUsuario(usuario: string, contrasena: string): Promise<ValidateUsuarioDto> {
    const usu = await this.usuariosServices.findOneByUsername(usuario);

    if (usu && usu.length > 0) {
      if (usu[0].contrasena === contrasena) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { usuario, contrasena, ...restantes } = usu[0];
        return restantes;
      }
    }

    return null;
  }

  async login(username: any) {
    const payload = { sub: username.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
