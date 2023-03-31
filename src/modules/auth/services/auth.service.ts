import { Injectable } from '@nestjs/common';

import { UsuariosService } from '../../usuarios/services/usuarios.service';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosServices: UsuariosService) {}

  async validateUser(usuario: string, contrasena: string): Promise<any> {
    const findUsuario = await this.usuariosServices.findOneByUsername(usuario);
  }
}
