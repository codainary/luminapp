import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { ContribuyentesService } from 'src/modules/contribuyentes/services/contribuyentes.service';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    private readonly contribuyentesServices: ContribuyentesService,
  ) {}

  async create(data: CreateUsuarioDto): Promise<Usuario> {
    const newUsuario = this.usuarioRepo.create(data);

    if (data.contribuyenteId) {
      const contribuyente = await this.contribuyentesServices.findOne(data.contribuyenteId);
      newUsuario.contribuyente = contribuyente;
    }

    return this.usuarioRepo.save(newUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find({
      relations: ['contribuyente'],
    });
  }

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

  async findOneByUsername(usuario: string): Promise<Usuario[]> {
    const findUsuario = await this.usuarioRepo.find({
      where: {
        usuario,
      },
    });

    if (!findUsuario) {
      throw new NotFoundException(`Usuario no encontrado`);
    }
    return findUsuario;
  }
}
