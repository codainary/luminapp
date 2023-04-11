import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/abstract.entity';

@Entity({ name: 'unidades' })
export class Unidad extends AbstractEntity {
  @Column({
    type: 'character varying',
    length: 20,
    nullable: false,
    unique: true,
  })
  nic: string;

  @Column({
    type: 'character varying',
    name: 'direccion_unidad',
    length: 100,
    nullable: false,
  })
  direccionUnidad: string;

  @Column({
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  barrio: string;

  @Column({
    type: 'float',
    nullable: false,
  })
  latitud: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  longitud: number;
}
