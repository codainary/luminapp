import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}
  create(payload: CreateUsuarioDto): Promise<Usuario> {
    const newUsuario = this.usuarioRepo.create(payload);
    return this.usuarioRepo.save(newUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find();
  }

  // findOne(id: number): Promise<Usuario> {
  //   return this.usuarioRepo.findOneBy({ id });
  // }

  async findOne(id: number) {
    const usuario = await this.usuarioRepo.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return usuario;
  }

  async update(id: number, changes: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    return this.usuarioRepo.save({ ...usuario, changes });
  }

  async remove(id: number): Promise<Usuario> {
    const usuario = await this.findOne(id);

    return this.usuarioRepo.remove(usuario);
  }
}
