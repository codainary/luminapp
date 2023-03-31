import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContribuyenteDto } from '../dtos/contribuyentes.dtos';
import { Contribuyente } from '../entities/contribuyente.entity';
@Injectable()
export class ContribuyentesService {
  constructor(
    @InjectRepository(Contribuyente)
    private readonly contribuyentesRepo: Repository<Contribuyente>,
  ) {}

  findAll() {
    return this.contribuyentesRepo.find({
      relations: ['usuario'],
    });
  }

  async create(data: CreateContribuyenteDto): Promise<Contribuyente> {
    const newSolicitante = this.contribuyentesRepo.create(data);
    return this.contribuyentesRepo.save(newSolicitante);
  }

  async findOne(id: number) {
    const contribuyente = await this.contribuyentesRepo.findOneBy({ id });
    if (!contribuyente) {
      throw new NotFoundException(`Contribuyente #${id} no encontrado`);
    }
    return contribuyente;
  }
}
