import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';

@Entity({ name: 'contribuyentes' })
export class Contribuyente extends AbstractEntity {
  @Column({
    type: 'character varying',
    length: 20,
    nullable: false,
    unique: true,
  })
  cedula: string;

  @Column({
    type: 'character varying',
    length: 15,
    name: 'primer_nombre',
    nullable: false,
  })
  primerNombre: string;

  @Column({
    type: 'character varying',
    length: 15,
    name: 'segundo_nombre',
  })
  segundoNombre: string;

  @Column({
    type: 'character varying',
    length: 15,
    nullable: false,
    name: 'primer_apellido',
  })
  primerApellido: string;

  @Column({
    type: 'character varying',
    length: 15,
    nullable: false,
    name: 'segundo_apellido',
  })
  segundoApellido: string;

  @Column({
    type: 'character varying',
    length: 20,
  })
  telefono: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  correo: string;

  @Column({
    type: 'character varying',
  })
  direccion: string;
}
