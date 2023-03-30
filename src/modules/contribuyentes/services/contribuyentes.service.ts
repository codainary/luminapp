import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
import { Contribuyente } from '../entities/contribuyente.entity';
import { UsuariosService } from './../../usuarios/services/usuarios.service';
@Injectable()
export class ContribuyentesService {
  constructor(
    @InjectRepository(Contribuyente)
    private readonly contribuyentesRepo: Repository<Contribuyente>,
    private readonly usuariosServices: UsuariosService,
  ) {}

  async create(data: CreateContribuyenteDto): Promise<Contribuyente> {
    const newSolicitante = this.contribuyentesRepo.create(data);
    if (data.usuarioId) {
      const usuario = await this.usuariosServices.findOne(data.usuarioId);
      newSolicitante.usuario = usuario;
    }
    return this.contribuyentesRepo.save(newSolicitante);
  }
}
