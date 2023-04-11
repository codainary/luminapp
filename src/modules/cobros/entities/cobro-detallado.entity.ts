import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/abstract.entity';

@Entity({ name: 'recibos_cobro_detalle' })
export class CobroDetallado extends AbstractEntity {
  //TODO: FK ID COBRO (ONE TO ONE)

  @Column({
    type: 'int',
    nullable: false,
  })
  concepto: number;

  @Column({
    type: 'float',
    name: 'total_capital',
    nullable: false,
  })
  totalCapital: number;

  @Column({
    type: 'float',
    name: 'total_interes',
    nullable: false,
  })
  totalInteres: number;

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
}
