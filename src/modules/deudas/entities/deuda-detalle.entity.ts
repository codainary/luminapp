import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/abstract.entity';

@Entity({ name: 'deuda_total_detalle' })
export class DeudaDetalle extends AbstractEntity {
  //TODO: FK deuda

  @Column({
    type: 'int',
    nullable: false,
  })
  anualidad: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  mes: number;

  // TODO: Establecer fecha en base a una operacion matematica.
  @Column({
    type: 'timestamp',
    name: 'fecha_vencimiento',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  fechaVencimiento: Date;

  @Column({
    type: 'int',
    name: 'base_grabable',
    nullable: false,
  })
  baseGrabable: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  tarifa: number;

  @Column({
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  concepto: string;
}
