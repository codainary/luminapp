import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepo: Repository<Usuario>,
  ) {}
  create(payload: CreateUsuarioDto): Promise<Usuario> {
    const newUsuario = this.usuariosRepo.create(payload);
    return this.usuariosRepo.save(newUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepo.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepo.findOneBy({ id });
  }

  async update(id: number, changes: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    return this.usuariosRepo.save({ ...usuario, changes });
  }

  async remove(id: number): Promise<Usuario> {
    const usuario = await this.findOne(id);

    return this.usuariosRepo.remove(usuario);
  }
}
