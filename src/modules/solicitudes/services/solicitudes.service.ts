import { Injectable } from '@nestjs/common';
import { Solicitud } from '../entities/solicitud.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitudDto } from '../dtos/solicitudes.dtos';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepo: Repository<Solicitud>,
  ) {}

  async create(data: CreateSolicitudDto): Promise<Solicitud> {
    const newSoli = this.solicitudRepo.create(data);

    // if (data.contribuyenteId) {
    //   const contribuyente = await this.contribuyentesServices.findOne(data.contribuyenteId);
    //   newSoli.contribuyente = contribuyente;
    // }

    return this.solicitudRepo.save(newSoli);
  }

  findAll(): Promise<Solicitud[]> {
    return this.solicitudRepo.find({ order: { id: 'DESC' } });
  }

  // async findOne(id: number) {
  //   const usuario = await this.solicitudRepo.findOneBy({ id });
  //   if (!usuario) {
  //     throw new NotFoundException(`Usuario #${id} no encontrado`);
  //   }
  //   return usuario;
  // }

  // async update(id: number, changes: UpdateUsuarioDto): Promise<Usuario> {
  //   const usuario = await this.findOne(id);

  //   return this.solicitudRepo.save({ ...usuario, changes });
  // }

  // async remove(id: number): Promise<Usuario> {
  //   const usuario = await this.findOne(id);

  //   return this.solicitudRepo.remove(usuario);
  // }

  // async findOneByUsername(usuario: string): Promise<Usuario[]> {
  //   const findUsuario = await this.solicitudRepo.find({
  //     where: {
  //       usuario,
  //     },
  //   });

  //   if (!findUsuario) {
  //     throw new NotFoundException(`Usuario no encontrado`);
  //   }
  //   return findUsuario;
  // }
}
