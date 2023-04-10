import { BeforeInsert, Column, Entity, Repository } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Entity({ name: 'solicitudes' })
export class Solicitud extends AbstractEntity {
  constructor(
    @InjectRepository(Solicitud)
    private solicitudRepo: Repository<Solicitud>,
  ) {
    super();
  }

  @Column({
    name: 'nro_solicitud',
    unique: true,
  })
  nroSolicitud: string;

  @BeforeInsert()
  async generarCodigo() {
    const base = process.env.SOLICITUDES_CONSECUTIVO;
    const ultimoNroSolicitud = await this.solicitudRepo.find();
    let ultimaSecuencia: any;
    if (!ultimoNroSolicitud) {
      ultimaSecuencia = base;
    }
    ultimaSecuencia = ultimoNroSolicitud ? parseInt(ultimoNroSolicitud[0].nroSolicitud.slice(-9)) : 0;
    this.nroSolicitud = `${base + ultimaSecuencia + 1}`.padStart(10, '0');
  }

  @Column({
    name: 'direccion_falla',
  })
  direccionFalla: string;

  @Column({
    length: 20,
    name: 'telefono_contacto',
    nullable: false,
  })
  telefonoContacto: string;

  @Column({
    nullable: false,
  })
  observacion: string;

  @Column({})
  respuesta: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'correo_respuesta',
  })
  correoRespuesta: string;

  @Column({
    nullable: false,
    default: 0,
  })
  estado: number;
}
