import { Injectable } from '@nestjs/common';
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
  create(payload: CreateContribuyenteDto): Promise<Contribuyente> {
    const newSolicitante = this.contribuyentesRepo.create(payload);
    return this.contribuyentesRepo.save(newSolicitante);
  }
}
