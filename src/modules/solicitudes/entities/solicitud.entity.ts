import { BeforeInsert, Column, Entity, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import config from '../../../config/configuration';

@Entity({ name: 'solicitudes' })
export class Solicitud extends AbstractEntity {
  constructor(
    @InjectRepository(Solicitud)
    private solicitudRepo: Repository<Solicitud>,
    @Inject(config.KEY)
    private configEnv: ConfigType<typeof config>,
  ) {
    super();
  }

  // @Column({
  //   name: 'nro_solicitud',
  //   unique: true,
  // })
  // nroSolicitud: string;

  // @BeforeInsert()
  // async generarCodigo() {
  //   const base = '000000000';

  //   //Obtener utlimo numero de solicitud.
  //   const ultimoNroSolicitud = await this.solicitudRepo.find({
  //     order: { id: 'DESC' },
  //   });

  //   let ultimaSecuencia: any;

  //   if (!ultimoNroSolicitud) {
  //     ultimaSecuencia = base;
  //   }

  //   ultimaSecuencia = ultimoNroSolicitud ? parseInt(ultimoNroSolicitud[0].nroSolicitud.slice(-9)) : 0;

  //   this.nroSolicitud = `${base + ultimaSecuencia + 1}`.padStart(10, '0');
  // }

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

  @Column({
    nullable: true,
  })
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
